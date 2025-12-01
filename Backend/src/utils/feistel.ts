const ROUNDS = 8;

// Convierte string a array de códigos de 16 bits
function stringToUint16Array(str: string): Uint16Array {
  const arr = new Uint16Array(str.length);
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}

// Convierte array de 16 bits a string
function uint16ArrayToString(arr: Uint16Array): string {
  return Array.from(arr)
    .map((code) => String.fromCharCode(code))
    .join("");
}

// Función de ronda simple
function roundFunction(r: number, k: number): number {
  const x = (r ^ k) & 0xffff;
  // pequeña rotación de bits
  return (((x << 3) | (x >>> 13)) & 0xffff) >>> 0;
}

// Deriva “subclaves” simples a partir de la clave principal
function deriveRoundKeys(key: string): number[] {
  const keyCodes = stringToUint16Array(key);
  const keys: number[] = [];
  for (let i = 0; i < ROUNDS; i++) {
    const idx = i % keyCodes.length;
    keys.push(keyCodes[idx] ^ (i * 0x9e37));
  }
  return keys;
}

// Cifra un bloque de 32 bits (L,R de 16 bits)
function feistelEncryptBlock(L: number, R: number, roundKeys: number[]): [number, number] {
  for (let i = 0; i < ROUNDS; i++) {
    const F = roundFunction(R, roundKeys[i]);
    const newL = R;
    const newR = (L ^ F) & 0xffff;
    L = newL;
    R = newR;
  }
  return [L, R];
}

// Descifra un bloque (Feistel es reversible)
function feistelDecryptBlock(L: number, R: number, roundKeys: number[]): [number, number] {
  for (let i = ROUNDS - 1; i >= 0; i--) {
    const F = roundFunction(L, roundKeys[i]);
    const newR = L;
    const newL = (R ^ F) & 0xffff;
    L = newL;
    R = newR;
  }
  return [L, R];
}

// Cifra un string completo y devuelve HEX
export function feistelEncrypt(plaintext: string, key: string): string {
  const data = stringToUint16Array(plaintext);
  const roundKeys = deriveRoundKeys(key);

  // Si longitud es impar, rellenamos con 0
  const len = data.length % 2 === 0 ? data.length : data.length + 1;
  const padded = new Uint16Array(len);
  padded.set(data);
  if (len > data.length) {
    padded[len - 1] = 0;
  }

  const out = new Uint16Array(len);

  for (let i = 0; i < len; i += 2) {
    const L = padded[i];
    const R = padded[i + 1];
    const [eL, eR] = feistelEncryptBlock(L, R, roundKeys);
    out[i] = eL;
    out[i + 1] = eR;
  }

  // Convertimos a HEX para guardar en la BD como texto
  let hex = "";
  for (let i = 0; i < out.length; i++) {
    hex += out[i].toString(16).padStart(4, "0");
  }
  return hex;
}

// Descifra un string en HEX a texto original
export function feistelDecrypt(cipherHex: string, key: string): string {
  if (cipherHex.length % 4 !== 0) {
    throw new Error("Cipher inválido");
  }

  const len = cipherHex.length / 4;
  const data = new Uint16Array(len);
  for (let i = 0; i < len; i++) {
    const chunk = cipherHex.slice(i * 4, i * 4 + 4);
    data[i] = parseInt(chunk, 16);
  }

  const roundKeys = deriveRoundKeys(key);
  const out = new Uint16Array(len);

  for (let i = 0; i < len; i += 2) {
    const L = data[i];
    const R = data[i + 1];
    const [dL, dR] = feistelDecryptBlock(L, R, roundKeys);
    out[i] = dL;
    out[i + 1] = dR;
  }

  // Quitamos posible padding final 0
  return uint16ArrayToString(out).replace(/\u0000+$/g, "");
}
