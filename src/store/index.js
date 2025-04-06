import { configureStore } from '@reduxjs/toolkit';
import fetchReduser from './slices/fetchSlice';
import filterReduser from './slices/filterSlice';
import sortReduser from './slices/sortSlice';

export default configureStore({
    reducer: {
        tickets: fetchReduser,
        filterReduser,
        sortReduser,
    },
});
