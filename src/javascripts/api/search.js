export const getSearchResults = async (query, page) => {
 return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=40b91156&s=${query}&page=${page}`)
   .then(res => res.json());
};

export const getDetails = async (title, type) => {
 return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=40b91156&t=${title}&type=${type}`)
   .then(res => res.json());
};
