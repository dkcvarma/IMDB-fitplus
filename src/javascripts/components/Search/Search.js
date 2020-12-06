import React, { useState } from 'react';
import './Search.css';
import SearchResults from './SearchResults';
import Details from '../Details';

const Search = ({ getSearchResults, searchResults, showLoadMore, showLoader, getDetails, details }) =>  {
  const [searchQuery, updateSearchQuery] = useState('');
  const [oldSearchQuery, updateOldSearchQuery] = useState('');
  const [pageNumber, updatePageNumber] = useState(1);

  const fetchSearchResults = (isButton= true, event) => {
    if((isButton || event.keyCode === 13) && searchQuery) {
      updateOldSearchQuery(searchQuery);
      updatePageNumber(1);
      getSearchResults(searchQuery, 1);
    }
  };

  const fetchPaginatedSearchResults = () => {
    getSearchResults(oldSearchQuery, pageNumber + 1);
    updatePageNumber(prevState => prevState + 1);
  };

  const setSearchInputValue = (event) => {
    updateSearchQuery(event.target.value);
  };

  const fetchDetails = (title, type) => {
    updateSearchQuery('');
    getDetails(title, type)
  };

  return (
    <div className="search">
      <div className="search-input">
        <input
          type="text"
          name="query"
          placeholder="Search IMDB"
          value={searchQuery}
          onChange={setSearchInputValue}
          onKeyDown={(event) => fetchSearchResults(false, event)}
        />
        <button onClick={fetchSearchResults}>Go</button>
      </div>
      <SearchResults searchResults={searchResults} handleOnClick={fetchDetails} />
      {showLoader && <div className="loader" />}
      {showLoadMore && <button className="load-more" onClick={fetchPaginatedSearchResults}>Load More</button>}
      {details && details.Title && <Details details={details} />}
    </div>
  );
};

export default Search;
