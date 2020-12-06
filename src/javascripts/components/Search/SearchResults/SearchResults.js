import React  from 'react';
import Card from '../../Card';
import './SearchResults.css';

const SearchResults = ({ searchResults, handleOnClick }) =>  {
  return (
    <div className="search-results">
      {searchResults.length > 0 && searchResults.map((result) => {
        return <Card
          key={result.imdbID}
          imageUrl={result.Poster}
          title={result.Title}
          type={result.Type}
          handleOnClick={handleOnClick}
        />
      }) }
    </div>
  );
};

export default SearchResults;
