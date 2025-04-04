import Logo from '../Logo';
import Filter from '../Filter';
import MyTabs from '../MyTabs';

import { useEffect } from 'react';
import { fetchSearchId, fetchTickets } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';

import './App.scss';

function App() {
    const { searchId, fetchReduser } = useSelector((state) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!searchId && !fetchReduser) {
            dispatch(fetchSearchId()).catch((err) => console.error('Ошибка получения searchId:', err));
        } else {
            dispatch(fetchTickets(searchId.searchId));
        }
    }, [dispatch, searchId, fetchReduser]);

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
