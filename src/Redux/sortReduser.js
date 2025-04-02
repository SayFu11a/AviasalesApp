import { setActiveTab } from './types';

const initialState = {
    activeKey: '1',
};

export const sortReduser = (state = initialState, action) => {
    switch (action.type) {
        case setActiveTab:
            return {
                ...state,
                activeKey: action.payload,
            };

        default:
            return state;
    }
};
