// src/App.jsx
import React from "react";
import { Spinner } from "@nextui-org/react";
import TableVariedades from "../organisms/TableVariedades";
import TableAnalisis from "../organisms/TableAnalisis";
import { useTable } from "../../context/TableContext";


export default function TableTemplate() {
  const { analisisData, variedadesData, loading } = useTable();

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Table Análisis</h1>
      <TableAnalisis data={analisisData} />
      <h1>Table Variedades</h1>
      <TableVariedades data={variedadesData} />
    </div>
  );
}


