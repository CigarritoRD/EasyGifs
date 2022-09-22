import React from "react";
import Gif from "./Gif";
const styled = {
  gifs: "columns-[3_250px] gap-3 bg-slate-800 px-3",
  img: "w-full rounded-xl",
};

const Gifs = ({ gifs, handleNextPage, handlePrevPage, page }) => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      {/* botones de paginacion */}
      <div className='flex justify-center mx-10 my-10'>
        {page ? (
          <button
            onClick={handlePrevPage}
            className='hover:bg-blue-400 duration-300 rounded flex-1 px-4 py-2 bg-slate-200 font-medium mb-2 mr-2'
          >
            Anterior
          </button>
        ) : (
          ""
        )}
        <button
          onClick={handleNextPage}
          className='hover:bg-blue-400 duration-300 rounded flex-1 px-4 py-2 bg-slate-200 font-medium mb-2 mr-2'
        >
          Siguiente
        </button>
      </div>
      {/* FINAL - botones de paginacion */}

      <div className={styled.gifs}>
        {gifs
          ? gifs.map((gif) => {
              const { url, title, id } = gif;
              return <Gif key={id} url={url} title={title} id={id} />;
            })
          : null}
      </div>
      {/* botones de paginacion */}
      <div className='flex justify-center mx-10 my-5'>
        {page ? (
          <button
            onClick={handlePrevPage}
            className='hover:bg-blue-400 duration-300 rounded flex-1 px-4 py-2 bg-slate-200 font-medium mb-2 mr-2'
          >
            Anterior
          </button>
        ) : (
          ""
        )}
        <button
          onClick={handleNextPage}
          className='hover:bg-blue-400 duration-300 rounded flex-1 px-4 py-2 bg-slate-200 font-medium mb-2 mr-2'
        >
          Siguiente
        </button>
      </div>
      {/* FINAL - botones de paginacion */}
    </div>
  );
};

export default Gifs;
