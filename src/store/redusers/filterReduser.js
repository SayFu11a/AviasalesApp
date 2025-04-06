import { SET_FILTER } from '../types';

const initialState = {
    checkedList: ['Без пересадок', '1 пересадка', '2 пересадка', '3 пересадка'],
};

export const filterReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                checkedList: action.payload,
            };
        default:
            return state;
    }
};
