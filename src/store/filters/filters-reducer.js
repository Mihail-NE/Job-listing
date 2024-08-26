import { ADD_FILTER, CLEAR_FILTERS, REMOVE_FILTER } from "./filters-actions";

export const filterReducer = (state, action) => {
    switch (action.type) {
        case ADD_FILTER:
            return [...state, action.filter];
        case REMOVE_FILTER:
            return state.filter((item) => item !== action.filter);
        case CLEAR_FILTERS:
            return [];

        default:
            return state;
    }
};
