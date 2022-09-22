import GifByID from "../components/GifByID";
import useSigleGif from "../Hooks/useSigleGif";

const Gif = ({ params }) => {
  const { gif } = useSigleGif(params.id);
  const { title, url, id } = gif;

  return (
    <div className=' w-full text-white text-center'>
      <GifByID title={title} url={url} id={id} />
    </div>
  );
};

export default Gif;
