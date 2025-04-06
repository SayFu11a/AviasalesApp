import { combineReducers } from 'redux';
import { sortReduser } from './redusers/sortReduser';
import { filterReduser } from './redusers/filterReduser';
import { fetchReduser } from './redusers/fetchReduser';

export const rootReduser = combineReducers({
    sortReduser,
    filterReduser,
    data: fetchReduser,
});
