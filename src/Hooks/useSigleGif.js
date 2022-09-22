import { useEffect, useState } from "react";
import getSingleGif from "../services/getSingleGif";

export const useSigleGif = (id) => {
  const [gif, setGif] = useState({});

  useEffect(
    function () {
      const getGif = async () => {
        const res = await getSingleGif(id);
        setGif(res);
      };
      getGif();
    },
    [id]
  );

  return { gif };
};

export default useSigleGif;
