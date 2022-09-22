import { useState } from "react";
import { useLocation } from "wouter";

const styled = {
  form: "w-full px-5 my-10 flex justify-center",
  input:
    "py-3 px-4 rounded w-[70%] outline-none focus:drop-shadow-[0_6px_6px_rgba(240,240,240,0.30)]",
};
const SearchBar = () => {
  const [location, setLocation] = useLocation();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/Searched/${keyword}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styled.form} action=''>
      <input
        onChange={(e) => setKeyword(e.target.value)}
        className={styled.input}
        type='text'
        name=''
        value={keyword}
        placeholder='busca los mejores gifs'
        id=''
      />
    </form>
  );
};

export default SearchBar;
