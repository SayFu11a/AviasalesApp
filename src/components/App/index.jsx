import Logo from '../Logo';
import Filter from '../Filter';
import MyTabs from '../MyTabs';

import { useEffect } from 'react';
// import { fetchSearchId, fetchTickets } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTicketsRequest, fetchSearchId, fetchTickets } from '../../store/slices/fetchSlice';

import './App.scss';

function App() {
    const { searchId, tickets } = useSelector((state) => state.tickets);
    const dispatch = useDispatch();

    // console.log(dispatch(fetchTicketsRequest()));

    useEffect(() => {
        if (!searchId) {
            dispatch(fetchSearchId());
        }

        if (searchId) {
            console.log(searchId);
            dispatch(fetchTickets(searchId));
            console.log(tickets, '---------------------------');
        }
    }, [dispatch, searchId]);

    // const { searchId, fetchReduser } = useSelector((state) => state.data);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (!searchId && !fetchReduser) {
    //         dispatch(fetchSearchId()).catch((err) => console.error('Ошибка получения searchId:', err));
    //     } else {
    //         dispatch(fetchTickets(searchId.searchId));
    //     }
    // }, [dispatch, searchId, fetchReduser]);

    return (
        <>
            <Logo />
            <section className="main-section">
                <Filter />
                <MyTabs />
            </section>
        </>
    );
}

export default App;
