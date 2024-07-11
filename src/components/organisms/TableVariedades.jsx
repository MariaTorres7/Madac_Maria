// src/components/organisms/TableVariedades.jsx
import React from 'react';
import TableRowVariedades from '../molecules/TableRowVariedades';
import { Table, TableHeader, TableColumn, TableBody } from "@nextui-org/table";

const TableVariedades = ({ data }) => {
  return (
    <Table aria-label="Varieties Data Table">
      <TableHeader>
        <TableColumn>CODIGO</TableColumn>
        <TableColumn>NOMBRE</TableColumn>
        <TableColumn>ESTADO</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <>
            <TableRowVariedades key={row.codigo} row={row} />
            {console.log("datos variedades",row)}
          </>
        ))}
       
      </TableBody>
    </Table>
  );
};

export default TableVariedades;
