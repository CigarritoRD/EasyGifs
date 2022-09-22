import { useState } from "react";

export const useBotonesPaginacion = () => {
  const PAGINA_INICIAL = 0;
  const [page, setPage] = useState(PAGINA_INICIAL);

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  return { page, handleNextPage, handlePrevPage };
};
