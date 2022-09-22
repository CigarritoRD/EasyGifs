import { useEffect, useState } from "react";
import { API_KEY, URL_BASE } from "../base/Base";

export const useGifs = ({ keyword, page, limite = 25 }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      const getGifs = async (keyword, page, limite) => {
        try {
          setLoading(true);
          const res = await fetch(
            `${URL_BASE}?api_key=${API_KEY}&q=${keyword}&limit=${limite}&offset=${page * 25}`
          );
          const { data } = await res.json();
          if (Array.isArray(data)) {
            const gifs = data.map((gif) => {
              const { url } = gif.images.downsized_medium;
              const { title, id } = gif;
              return { url, title, id };
            });
            setGifs(gifs);
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getGifs(keyword, page, limite);
    },
    [keyword, page, limite]
  );
  return { gifs, loading };
};
