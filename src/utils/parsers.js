// Theese are functions to parse objects or arrays to values we can use easly

import { INITIAL_FILTERS } from '../utils/initialObjects.js';

export const filterQueryParser = ( filters ) => {
  // This only send the values of filters that needs to do the call to api.
  // delete the unnecesary values that are asumed by default.
  let filtersQuery = "";
  for(const filter in filters){
    if(filters[filter] !== INITIAL_FILTERS[filter]) filtersQuery = filtersQuery.concat(filter,"=",filters[filter],"&");
  }
  filtersQuery = filtersQuery.slice(0, -1); // delete last &
  return filtersQuery;
};