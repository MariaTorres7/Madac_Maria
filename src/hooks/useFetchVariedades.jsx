// src/hooks/useFetchVariedades.jsx
import { useState, useEffect } from "react";
import axiosClient from "../services/axiosClient";

const useFetchVariedades = () => {
  const [variedadesData, setVariedadesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVariedadesData = async () => {
    try {
      const response = await axiosClient.get("variedades/listar");
      setVariedadesData(response.data);
    } catch (error) {
      console.error("Error fetching varieties data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVariedadesData();
  }, []);

  return { variedadesData, loading, fetchVariedadesData };
};

export default useFetchVariedades;
