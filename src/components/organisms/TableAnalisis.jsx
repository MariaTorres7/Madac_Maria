// src/components/organisms/TableAnalisis.jsx
import React from 'react';
import PaginatedTable from './PaginatedTable';

const TableAnalisis = ({ data }) => {
  const columns = ["CODIGO", "FECHA", "ANALISTA", "IDENTIFICACION", "MUESTRA", "TIPO ANALISIS", "ESTADO", "CODE TIPO"];

  return (
    <PaginatedTable
      columns={columns}
      data={data.map(row => ({
        codigo: row.codigo,
        fecha: new Date(row.fecha).toLocaleDateString(),
        analista: row.analista,
        identificacion: row.identificacion,
        muestra: row.muestra,
        tipo_analisis: row.tipo_analisis,
        estado: row.estado,
        codeTipo: row.codeTipo
      }))}
    />
  );
};

export default TableAnalisis;
