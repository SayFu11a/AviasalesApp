import { SET_FILTER } from './types';

const initialState = {
    checkedList: ['Без пересадок'],
};

export const filterReduser = (state = initialState, action) => {
    console.log('filterReduser > ', action);

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
