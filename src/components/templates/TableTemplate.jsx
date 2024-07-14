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
      <TableAnalisis data={analisisData} />
      <TableVariedades data={variedadesData} />
    </div>
  );
}


