// src/components/molecules/TableRow.jsx
import React from 'react';
import TableCell from '../atoms/TableCell';

const TableRow = ({ row }) => {
  return (
    <tr>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.role}</TableCell>
      <TableCell>{row.status}</TableCell>
    </tr>
  );
};

export default TableRow;
