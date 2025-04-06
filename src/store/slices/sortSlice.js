import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        activeKey: '1',
    },
    reducers: {
        setActiveTab(state, action) {
            state.activeKey = action.payload;
        },
    },
});

export const { setActiveTab } = sortSlice.actions;

export default sortSlice.reducer;
