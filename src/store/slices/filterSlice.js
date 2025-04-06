import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        checkedList: ['Без пересадок', '1 пересадка', '2 пересадка', '3 пересадка'],
    },
    reducers: {
        setFilter(state, action) {
            state.checkedList = action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
