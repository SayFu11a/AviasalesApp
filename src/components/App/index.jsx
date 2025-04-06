import Logo from '../Logo';
import Filter from '../Filter';
import MyTabs from '../MyTabs';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSearchId, fetchTickets } from '../../store/slices/fetchSlice';

import './App.scss';

function App() {
    const { searchId } = useSelector((state) => state.tickets);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!searchId) {
            dispatch(fetchSearchId());
        }

        if (searchId) {
            console.log(searchId);
            dispatch(fetchTickets(searchId));
        }
    }, [dispatch, searchId]);

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
