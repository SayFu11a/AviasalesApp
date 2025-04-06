import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchId = createAsyncThunk('fetch/fetchSearchId', async function (_, { rejectWithValue }) {
    try {
        const response = await fetch('https://aviasales-test-api.kata.academy/search');
        if (!response.ok) {
            throw new Error('Server error: ' + response.status);
        }
        const searchId = await response.json();

        return searchId;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const fetchTickets = createAsyncThunk(
    'fetch/fetchTickets',
    async function (searchId, { rejectWithValue, dispatch }) {
        let stop = false;

        while (!stop) {
            try {
                const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

                if (!response.ok) {
                    console.log(`Server error: ${response.status}`);
                }

                const data = await response.json();
                dispatch(fetchTicketsSuccess(data));
                stop = data.stop;
            } catch (error) {
                console.log(fetchTicketsFailure(error.message));
                console.log(rejectWithValue, 'rejectWithValue');
            }
        }
    }
);

const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        tickets: [],
        searchId: null,
        loading: false,
        error: null,
        isDataLoaded: false,
    },
    reducers: {
        fetchTicketsSuccess(state, action) {
            state.tickets = [...state.tickets, ...action.payload.tickets];
            state.loading = false;
            state.isDataLoaded = true;
        },
        fetchTicketsRequest(state, action) {
            console.log(state, action);
            state.loading = true;
        },

        fetchSearchIdSuccess(state, action) {
            state.loading = true;
            state.searchId = action.payload.searchId;
        },
        fetchTicketsFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchSearchId.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchSearchId.fulfilled, (state, action) => {
            state.searchId = action.payload.searchId;
        });
        builder.addCase(fetchSearchId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(fetchTickets.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { fetchTicketsRequest, fetchSearchIdSuccess, fetchTicketsSuccess, fetchTicketsFailure } =
    fetchSlice.actions;

export default fetchSlice.reducer;
