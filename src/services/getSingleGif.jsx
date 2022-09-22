import { API_KEY } from "../base/Base";

const getSingleGif = async (ID) => {
  const urlapi = `https://api.giphy.com/v1/gifs/${ID}?api_key=${API_KEY}`;

  const res = await fetch(urlapi);
  const { data } = await res.json();
  const { title, id } = data;
  const { url } = data.images.downsized_large;
  return { title, id, url };
};

export default getSingleGif;
