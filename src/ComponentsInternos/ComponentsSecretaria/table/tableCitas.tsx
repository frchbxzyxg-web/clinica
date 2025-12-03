import React, { useEffect, useMemo, useState } from "react";
import { PagosCita } from "../../../schemas/secretariaSchemas/vistapago/tablacita";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { Button } from "@mui/material";
 
export default function TablePagoCita() {
  const [data, setData] = useState<PagosCita[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
 
  const columns = useMemo<MRT_ColumnDef<PagosCita>[]>(
    () => [
      {
        accessorKey: "id_cita",
        header: "ID_Cita",
        muiTableHeadCellProps: { style: { color: "#64e8f9" } },
        enableHiding: false,
      },
      {
        accessorKey: "fecha",
        header: "Fecha",
        Cell: ({ cell }) =>
          new Date(cell.getValue<string>()).toLocaleDateString(),
        muiTableHeadCellProps: { style: { color: "#64e8f9" } },
        enableHiding: false,
      },
      {
        accessorKey: "usuario",
        header: "Usuario",
        muiTableHeadCellProps: { style: { color: "#64e8f9" } },
        enableHiding: false,
      },
      {
        accessorKey: "horainicio",
        header: "Hora_Inicio",
        Cell: ({ cell }) =>
          new Date(cell.getValue<string>()).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        muiTableHeadCellProps: { style: { color: "#64e8f9" } },
        enableHiding: false,
      },
      {
        accessorKey: "horafin",
        header: "Hora_Fin",
        Cell: ({ cell }) =>
          new Date(cell.getValue<string>()).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        muiTableHeadCellProps: { style: { color: "#64e8f9" } },
        enableHiding: false,
      },
      {
        accessorKey: "estado",
  header: "Estado",
  Cell: ({ cell }) => cell.getValue<string | null>() ?? "Sin estado",
  muiTableHeadCellProps: { style: { color: "#64e8f9" } },
  enableHiding: false,
      },
      {
        accessorKey: "motivo",
        header: "Motivo",
        muiTableHeadCellProps: { style: { color: "#64e8f9" } },
        enableHiding: false,
      },
      {
        accessorKey: "id_doctor",
        header: "Id_Doctor",
        muiTableHeadCellProps: { style: { color: "#64e8f9" } },
        enableHiding: false,
      },
      {
        accessorKey: "id_pasiente",
        header: "Id_Pasiente",
        muiTableHeadCellProps: { style: { color: "#64e8f9" } },
        enableHiding: false,
      },
      {
        accessorKey: "hora_llegada",
        header: "Hora_Llegada",
        Cell: ({ cell }) => {
          const value = cell.getValue<string | null>();
          if (!value) return "—";
          return new Date(value).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
        },
        muiTableHeadCellProps: { style: { color: "#64e8f9" } },
        enableHiding: false,
      },
    ],
    []
  );
 
  const handlePago = (row: PagosCita) => {
    console.log("Realizar pago para la cita:", row);
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:4000/api/citas-pago");
        const json: PagosCita[] = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error cargando citas de pago:", error);
      } finally {
        setIsLoading(false);
      }
    };
 
    fetchData();
  }, []);
 
  const table = useMaterialReactTable<PagosCita>({
    columns,
    data,
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <Button
        variant="contained"
        color="primary"
        onClick={() => handlePago(row.original)}
      >
        Pagar
      </Button>
    ),
    enableColumnOrdering: true,
    enableGlobalFilter: true,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
    },
    state: {
      isLoading,
    },
  });
 
  return <MaterialReactTable table={table} />;
}