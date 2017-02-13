import { SearchResult } from '../search/shared/search-result.interface';

export const selectedResult = (state: SearchResult = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_RESULT':
      return Object.assign({}, payload);
    default:
      return state;
  }
};
