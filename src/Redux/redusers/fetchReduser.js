import { FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS, FETCH_SEARCHID_SUCCESS } from '../types';

const initialState = {
    tickets: [],
    searchId: null,
    loading: false,
    error: null,
};

export const fetchReduser = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SEARCHID_SUCCESS:
            return {
                ...state,
                loading: true,
                searchId: action.searchId,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                tickets: [...state.tickets, ...action.tickets],
            };
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};
