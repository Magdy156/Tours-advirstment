import React, { useState } from "react";

const Tour = ({ id, image, name, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);

  const readMoreFunc = () => {
    if (readMore) {
      return <div> {info.substring(0, 200)} ...</div>;
    } else {
      return info;
    }
  };
  return (
    <article className="single-tour">
      <img src={image} alt={name}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMoreFunc()}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "Show more" : "Show less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
