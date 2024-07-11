// src/pages/VariedadPage.jsx
import React from "react";
import { useTable } from '../../context/TableContext';
import MainLayout from '../layouts/MainLayout';
import TableVariedades from '../organisms/TableVariedades';
import { Spinner } from "@nextui-org/react";

export const VariedadPage = () => {
  const { variedadesData, loading } = useTable();

  if (loading) {
    return <Spinner />;
  }

  return (
    <MainLayout>
      <div className=''>
        <h1 className='text-3xl font-bold'>Bienvenido a Variedades</h1>
      </div>
      <TableVariedades data={variedadesData}/>
    </MainLayout>
  );
};
