import { useSelector } from 'react-redux';

import { getFiltredTickets } from '../../store/selectors';

import Ticket from '../Ticket';
import { useState } from 'react';

import { Button, Empty, Typography, Alert } from 'antd';
import Sceleton from '../Sceleton/Sceleton';

function TicketList() {
    const { loading, error } = useSelector((state) => state.tickets);
    const filteredTickeds = useSelector(getFiltredTickets);
    const [page, setPage] = useState(0);

    return (
        <>
            {!error ? (
                !loading ? (
                    filteredTickeds.length > 0 ? (
                        <>
                            {filteredTickeds?.slice(0, (page + 1) * 5).map((ticket) => (
                                <Ticket ticket={ticket} />
                            ))}
                            <Button
                                type="primary"
                                style={{ width: '100%' }}
                                onClick={() => setPage((prev) => prev + 1)}
                            >
                                Показать еще 5 билетов!
                            </Button>
                        </>
                    ) : (
                        <Empty
                            description={
                                <Typography.Text>
                                    <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
                                </Typography.Text>
                            }
                        ></Empty>
                    )
                ) : (
                    [1, 2, 3, 4, 5].map((i) => <Sceleton key={i} />)
                )
            ) : (
                <Alert
                    message="Error"
                    description="This is an error message about copywriting."
                    type="error"
                    showIcon
                />
            )}
        </>
    );
}

export default TicketList;
