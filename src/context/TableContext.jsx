// src/context/TableContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axiosClient from "../services/axiosClient";

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [analisisData, setAnalisisData] = useState([]);
  const [variedadesData, setVariedadesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalisisData = async () => {
      try {
        const response = await axiosClient.get("analisis/listar");
        setAnalisisData(response.data);
      } catch (error) {
        console.error("Error fetching analysis data:", error);
      }
    };

    const fetchVariedadesData = async () => {
      try {
        const response = await axiosClient.get("variedades/listar");
        setVariedadesData(response.data);
      } catch (error) {
        console.error("Error fetching varieties data:", error);
      }
    };

    const fetchAllData = async () => {
      setLoading(true);
      await Promise.all([fetchAnalisisData(), fetchVariedadesData()]);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  return (
    <TableContext.Provider value={{ analisisData, variedadesData, loading }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => {
  return useContext(TableContext);
};
