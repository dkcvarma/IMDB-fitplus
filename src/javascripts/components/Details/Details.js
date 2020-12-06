import React  from 'react';
import './Details.css';
import ratingLogo from '../../../images/rating.svg';

const Details = ({ details }) =>  {
  return (
    <div className="details">
      <div className="title_wrapper">
        <img src={details.Poster} alt={details.Title}/>
        <div className="title_overview">
          <h1>{details.Title}</h1>
          <div className="sub_text">
            <span>{details.Runtime}</span>
            <span className="ghost">|</span>
            <span>{details.Genre}</span>
            <span className="ghost">|</span>
            <span>{details.Type } ({details.Year})</span>
          </div>
          <div className="rating">
            <img src={ratingLogo} alt="rating" />
            <div>
              <div>
                <strong>
                  <span>{details.imdbRating}</span>
                </strong>
                <span> / 10</span>
              </div>
              <div className="total_votes">
                <span>{details.imdbVotes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="plot">{details.Plot}</div>
        <div><span>Director:</span> {details.Director}</div>
        <div><span>Writer:</span> {details.Writer}</div>
        <div><span>Actors:</span> {details.Actors}</div>
        <div><span>Language:</span> {details.Language}</div>
        <div><span>Country:</span> {details.Country}</div>
        <div><span>Awards:</span> {details.Awards}</div>
      </div>
    </div>
  );
};

export default Details;
