import {
    setActiveTab,
    SET_FILTER,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS,
    FETCH_SEARCHID_SUCCESS,
} from './types';

export function setActiveTabAction(key) {
    return {
        type: setActiveTab,
        payload: key,
    };
}

export function setFilter(filterList) {
    return {
        type: SET_FILTER,
        payload: filterList,
    };
}

export function setAsynkFilter(filterList) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(setFilter(filterList));
        }, 3000);
    };
}

export function fetchTicketsStart() {
    return {
        type: FETCH_POSTS_REQUEST,
    };
}

export function fetchTicketsSuccess(tickets) {
    return {
        type: FETCH_POSTS_SUCCESS,
        tickets,
    };
}

export function fetchTicketsFail(error) {
    return {
        type: FETCH_POSTS_FAILURE,
        error,
    };
}

export function fetchSearchIdSuccess(searchId) {
    return {
        type: FETCH_SEARCHID_SUCCESS,
        searchId,
    };
}

export function fetchSearchId() {
    return async function (dispatch) {
        try {
            dispatch(fetchTicketsStart());
            const response = await fetch('https://aviasales-test-api.kata.academy/search');
            const searchId = await response.json();
            dispatch(fetchSearchIdSuccess(searchId));
            return searchId;
        } catch (error) {
            dispatch(fetchTicketsFail(error.message));
            throw error;
        }
    };
}

export function fetchTickets(searchId) {
    return async function (dispatch) {
        let stop = false;
        let isFetching = false;
        while (!stop && !isFetching) {
            try {
                isFetching = true;
                const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

                if (!response.ok) {
                    console.log(`Server error: ${response.status}`);
                }

                const tickets = await response.json();

                dispatch(fetchTicketsSuccess(tickets.tickets));

                stop = tickets.stop;
                isFetching = false;
            } catch (error) {
                console.log(fetchTicketsFail(error.message));
                // throw error;
                isFetching = false;
            }
        }
    };
}
