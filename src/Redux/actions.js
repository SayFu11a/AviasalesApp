import { setActiveTab, SET_FILTER } from './types';

export function setActiveTabAction(key) {
    return {
        type: setActiveTab,
        payload: key,
    };
}

export function setFilter(filterKey) {
    return {
        type: SET_FILTER,
        payload: filterKey,
    };
}
