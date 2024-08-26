export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export function addFilter(filter) {
  return {
    type: ADD_FILTER,
    filter
  };

}

export function removeFilter(filter) {
  return {
    type: REMOVE_FILTER,
    filter
  };

}

export const clearFilter = {
  type: CLEAR_FILTERS
}