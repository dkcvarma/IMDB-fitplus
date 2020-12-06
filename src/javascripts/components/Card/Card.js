import React  from 'react';

const Card = ({ imageUrl, title, type, handleOnClick }) =>  {
  return (
      <div className="card" onClick={() => handleOnClick(title, type)}>
        <img src={imageUrl} alt={title} />
        <p>
          <span>{title}</span>
          <span>({type})</span>
        </p>
      </div>
  );
};

export default Card;
