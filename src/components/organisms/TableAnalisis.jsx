// src/components/organisms/TableAnalisis.jsx
import React from 'react';
import TableRowAnalisis from '../molecules/TableRowAnalisis';
import { Table, TableHeader, TableColumn, TableBody } from "@nextui-org/react";

const TableAnalisis = ({ data }) => {
  return (
    <Table aria-label="Analysis Data Table">
      <TableHeader>
        <TableColumn>CODIGO</TableColumn>
        <TableColumn>FECHA</TableColumn>
        <TableColumn>ANALISTA</TableColumn>
        <TableColumn>IDENTIFICACION</TableColumn>
        <TableColumn>MUESTRA</TableColumn>
        <TableColumn>TIPO ANALISIS</TableColumn>
        <TableColumn>ESTADO</TableColumn> 
        <TableColumn>CODE TIPO</TableColumn>
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRowAnalisis key={item.codigo} row={item} />
        )}
      </TableBody>
    </Table>
  );
};

export default TableAnalisis;
