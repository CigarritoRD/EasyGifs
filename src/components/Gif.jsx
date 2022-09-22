import React from "react";
import { Link } from "wouter";

const styled = {
  div: "mb-3 text-center border border-slate-600 rounded cursor-pointer",
};

const Gif = ({ url, title, id }) => {
  return (
    <Link to={`/Gif/${id}`}>
      <div key={url} className={styled.div}>
        <h2 className='text-white'>{title}</h2>
        <img className={`w-full`} src={url} alt={title} />
      </div>
    </Link>
  );
};

export default Gif;
