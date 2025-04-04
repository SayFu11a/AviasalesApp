import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchId, fetchTickets } from '../../Redux/actions';

import { getFiltredTickets } from '../../Redux/selectors';

import Ticket from '../Ticket';
import { useEffect, useState } from 'react';

import { Button } from 'antd';

function TicketList() {
    const { searchId, loading, error, tickets } = useSelector((state) => state.data);

    const filteredTickeds = useSelector(getFiltredTickets);

    const [page, setPage] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!searchId) {
            dispatch(fetchSearchId()).catch((err) => console.error('Ошибка получения searchId:', err));
        } else {
            dispatch(fetchTickets(searchId.searchId));
        }
    }, [dispatch, searchId]);

    return (
        <>
            {filteredTickeds?.slice(0, (page + 1) * 5).map((ticket) => (
                <Ticket key={ticket.segments[0].date} ticket={ticket} />
            ))}
            <Button type="primary" style={{ width: '100%' }} onClick={() => setPage((prev) => prev + 1)}>
                Показать еще 5 билетов!
            </Button>
        </>
    );
}

export default TicketList;
