import { combineReducers } from 'redux';
import { sortReduser } from './sortReduser';
import { filterReduser } from './filterReduser';

export const rootReduser = combineReducers({
    sortReduser,
    filterReduser,
});
