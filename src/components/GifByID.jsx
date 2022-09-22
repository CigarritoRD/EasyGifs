import React from "react";

const GifByID = ({ title, url }) => {
  return (
    <div className='mx-auto w-fit'>
      <h2>{title}</h2>
      <img className='w-full' src={url} alt={title} />
    </div>
  );
};

export default GifByID;
