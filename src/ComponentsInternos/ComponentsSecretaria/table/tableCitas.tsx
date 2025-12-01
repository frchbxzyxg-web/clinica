import React from "react";
import { useMemo } from "react";
import { PagosCita } from "../../../schemas/secretariaSchemas/vistapago/tablacita";
import {MaterialReactTable, MRT_ColumnDef, useMaterialReactTable} from 'material-react-table'
import { Dataprueba } from "../../../schemas/secretariaSchemas/vistapago/dataprueba";
import { Button } from "@mui/material";

export default function TablePagoCita(){
   
    const columns = useMemo<MRT_ColumnDef<PagosCita>[]> ( () =>[

           {
            accessorKey: "id_cita",
            header: "ID_Cita",
            muiTableHeadCellProps: {style: {color: "#64e8f9"}},
            enableHiding: false
          },
          {
            accessorKey: "fecha",
            header: "Fecha",
            Cell: ({ cell }) => new Date(cell.getValue<Date>()).toLocaleDateString(),
            muiTableHeadCellProps: {style: {color: "#64e8f9"}},
            enableHiding: false
          },

           {
            accessorKey: "usuario",
            header: "Usuario",
            muiTableHeadCellProps: {style: {color: "#64e8f9"}},
            enableHiding: false
          },
            {
            accessorKey: "horainicio",
            header: "Hora_Inicio",
            Cell: ({ cell }) =>
      new Date(cell.getValue<Date>()).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),

            muiTableHeadCellProps: {style: {color: "#64e8f9"}},
            enableHiding: false
            
          },

             {
            accessorKey: "horafin",
            header: "Hora_Fin",
             Cell: ({ cell }) =>
      new Date(cell.getValue<Date>()).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
            muiTableHeadCellProps: {style: {color: "#64e8f9"}},
            enableHiding: false
          },

           {
            accessorKey: "estado",
            header: "Estado",
            Cell: ({ cell }) => (cell.getValue<boolean>() ? "Activo" : "Inactivo"),
            muiTableHeadCellProps: {style: {color: "#64e8f9"}},
            enableHiding: false
          },


           {
            accessorKey: "motivo",
            header: "Estado",
            muiTableHeadCellProps: {style: {color: "#64e8f9"}},
            enableHiding: false
          },

          {
            accessorKey: "id_doctor",
            header: "Id_Doctor",
            muiTableHeadCellProps: {style: {color: "#64e8f9"}},
            enableHiding: false
          },

           {
            accessorKey: "id_pasiente",
            header: "Id_Pasiente",
            muiTableHeadCellProps: {style: {color: "#64e8f9"}},
            enableHiding: false
          },

           {
            accessorKey: "hora_llegada",
            header: "Hora_LLegada",
            Cell: ({ cell }) =>
      new Date(cell.getValue<Date>()).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
            muiTableHeadCellProps: {style: {color: "#64e8f9"}},
            enableHiding: false
          },


  





    ],
      []
    )
    
const handlePago = (row: PagosCita) => {
    console.log("Realizar pago para la cita:", row);
    // aquí puedes abrir modal, mandar a backend, etc.
  };

  const table = useMaterialReactTable<PagosCita>({
    columns,
    data: Dataprueba,
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
      pagination: { pageSize: 5, pageIndex: 0 }
    },
  });

    return(
   <MaterialReactTable table={table}/>

   
    )
}
