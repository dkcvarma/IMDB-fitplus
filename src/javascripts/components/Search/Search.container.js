import { connect } from 'react-redux';
import { getSearchResults as fetchSearchResults, getDetails as fetchDetails } from '../../actions';

const mapStateToProps = state => {
  return {
    searchResults: state.results,
    showLoadMore: state.showLoadMore,
    showLoader: state.showLoader,
    details: state.details,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchResults: (query, page) => dispatch(fetchSearchResults(query, page)),
    getDetails: (title, type) => dispatch(fetchDetails(title, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
