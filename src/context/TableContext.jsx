// src/context/TableContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchAnalisis from "../hooks/useFetchAnalisis";
import useFetchVariedades from "../hooks/useFetchVariedades";

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const { analisisData, loading: loadingAnalisis } = useFetchAnalisis();
  const { variedadesData, loading: loadingVariedades, fetchVariedadesData } = useFetchVariedades();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(loadingAnalisis || loadingVariedades);
  }, [loadingAnalisis, loadingVariedades]);

  const refreshVariedades = async () => {
    await fetchVariedadesData();
  };

  return (
    <TableContext.Provider value={{ analisisData, variedadesData, loading, refreshVariedades }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => {
  return useContext(TableContext);
};
