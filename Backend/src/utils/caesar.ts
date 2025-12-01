// Cifrado César sobre caracteres ASCII visibles (del 32 al 126)
export function caesarEncrypt(text: string, shift: number): string {
  const base = 32;  // espacio
  const top = 126;  // '~'
  const range = top - base + 1; // 95

  return [...text]
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code < base || code > top) {
        // No modificamos caracteres fuera del rango visible
        return ch;
      }
      const offset = code - base;
      const newOffset = (offset + shift) % range;
      return String.fromCharCode(base + newOffset);
    })
    .join("");
}

// Descifrado César
export function caesarDecrypt(text: string, shift: number): string {
  const base = 32;
  const top = 126;
  const range = top - base + 1;

  return [...text]
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code < base || code > top) {
        return ch;
      }
      const offset = code - base;
      // sumamos range para evitar negativo
      const newOffset = (offset - shift + range) % range;
      return String.fromCharCode(base + newOffset);
    })
    .join("");
}
