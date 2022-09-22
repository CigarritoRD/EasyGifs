import { useState } from "react";
import { useEffect } from "react";
import getTrendings from "../services/getTrendings";

export const useTrending = () => {
  const [trendins, setTrendings] = useState({});
  useEffect(() => {
    const trends = async () => {
      const dataTrending = await getTrendings();
      setTrendings(dataTrending);
    };
    trends();
  }, []);
  return trendins;
};
