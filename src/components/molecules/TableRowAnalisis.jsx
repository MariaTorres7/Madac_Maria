// src/components/molecules/TableRowAnalisis.jsx
import React from 'react';
import { TableRow, TableCell } from "@nextui-org/react";

const TableRowAnalisis = ({ row }) => {
  return (
    <TableRow key={row.codigo}>
      <TableCell>{row.codigo}</TableCell>
      <TableCell>{new Date(row.fecha).toLocaleDateString()}</TableCell>
      <TableCell>{row.analista}</TableCell>
      <TableCell>{row.identificacion}</TableCell>
      <TableCell>{row.muestra}</TableCell>
      <TableCell>{row.tipo_analisis}</TableCell>
      <TableCell>{row.estado}</TableCell>
      <TableCell>{row.codeTipo}</TableCell>
    </TableRow>
  );
};

export default TableRowAnalisis;
