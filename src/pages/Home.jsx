import Gifs from "../components/Gifs";
import { useBotonesPaginacion } from "../Hooks/useBotonesPaginacion";
import { useGifs } from "../Hooks/useGifs";
import { useTrending } from "../Hooks/useTrending";
import { useRef } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import ClipLoader from "react-spinners/ClipLoader";
import { MoonLoader } from "react-spinners";

const Home = () => {
  //HOOKS
  const gifsTrending = useTrending();
  const itemRef = useRef();
  const { page, handleNextPage, handlePrevPage } = useBotonesPaginacion();
  const { gifs, loading } = useGifs({ keyword: "morty", page });

  //  botones de mover carrusel
  const MoverIzquierda = () => {
    itemRef.current.scrollLeft -= 500;
  };
  const MoverDerecha = () => {
    itemRef.current.scrollLeft += 500;
  };

  if (loading) {
    return (
      <div className='w-full text-center'>
        <ClipLoader loader={MoonLoader} color={"white"} loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className='bg-slate-800'>
      <div className=' items-center border-3 w-full top-0 left-0 flex justify-between relative'>
        <button
          onClick={MoverIzquierda}
          className='absolute z-10 left-0 h-[150px] shadow-md rounded p-4 bg-black/40 text-white font-bold'
        >
          <BiLeftArrow size={30} />
        </button>
        <div ref={itemRef} className='flex overflow-x-scroll scroll-smooth relative scrollbar-hide'>
          {gifsTrending.length &&
            gifsTrending.map((item) => {
              return (
                <div
                  key={item.id}
                  className=' mr-4 min-w-[200px] h-[200px] rounded overflow-hidden '
                >
                  <img
                    className='w-full h-full min-w-[200px] object-cover rounded'
                    src={item?.url}
                    alt={item?.title}
                  />
                </div>
              );
            })}
        </div>
        <button
          onClick={MoverDerecha}
          className='absolute h-[150px] z-10 right-0 shadow-md rounded p-4 bg-black/40 text-white font-bold'
        >
          <BiRightArrow size={30} className=' ' />
        </button>
      </div>

      <Gifs
        gifs={gifs}
        page={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
};

export default Home;
