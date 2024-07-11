// src/components/molecules/TableRowVariedades.jsx
import React from 'react';
import { TableRow, TableCell } from "@nextui-org/react";

const TableRowVariedades = ({ row }) => {
  return (
    <TableRow key={row.codigo}>
      <TableCell>{row.codigo}</TableCell>
      <TableCell>{row.nombre}</TableCell>
      <TableCell>{row.estado}</TableCell>
    </TableRow>
  );
};

export default TableRowVariedades;
