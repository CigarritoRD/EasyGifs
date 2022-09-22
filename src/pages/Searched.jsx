import React from "react";
import Gifs from "../components/Gifs";
import { useBotonesPaginacion } from "../Hooks/useBotonesPaginacion";
import { useGifs } from "../Hooks/useGifs";
import { useRoute } from "wouter";
import ClipLoader from "react-spinners/ClipLoader";
import { MoonLoader } from "react-spinners";

const Searched = () => {
  //CUSTOM HOOKS
  const [match, { keyword }] = useRoute("/Searched/:keyword");
  const { page, handleNextPage, handlePrevPage } = useBotonesPaginacion();
  const { gifs, loading } = useGifs({ keyword, page });

  console.log(loading);
  if (match)
    return (
      <>
        {loading ? (
          <div className='w-full text-center'>
            <ClipLoader loader={MoonLoader} color={"white"} loading={loading} size={150} />
          </div>
        ) : (
          <Gifs
            gifs={gifs}
            page={page}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        )}
      </>
    );
};

export default Searched;
