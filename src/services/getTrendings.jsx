import { API_KEY } from "../base/Base";

export const getTrendings = async () => {
  const URL = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;

  const res = await fetch(URL);
  const { data } = await res.json();
  if (data) {
    const gifs = data.map((item) => {
      //   const { url } = item?.image?.downsized;
      const { title, id } = item;
      const { url } = item.images.downsized;
      return { url, title, id };
    });
    return gifs;
  }
};

export default getTrendings;
