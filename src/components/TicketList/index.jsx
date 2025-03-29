import Ticket from '../Ticket';

const tickets = [
    {
        id: 1,
        price: 13400,

        firstWay: 'MOW – HKT',
        secWay: 'MOW – HKT',

        departure_time_1: '10:45 – 08:00',
        departure_time_2: '11:20 – 00:50',

        firstTime: '21ч 15м',
        secTime: '13ч 30м',

        firstCountOfTransfers: '2',
        secCountOfTransfers: '1',

        transfers_1: ['HKG', 'JNB'],
        transfers_2: ['HKG'],
    },
    {
        id: 2,
        price: 13400,

        firstWay: 'MOW – HKT',
        secWay: 'MOW – HKT',

        departure_time_1: '10:45 – 08:00',
        departure_time_2: '11:20 – 00:50',

        firstTime: '21ч 15м',
        secTime: '13ч 30м',

        firstCountOfTransfers: '2',
        secCountOfTransfers: '1',
    },
    {
        id: 3,
        price: 13400,

        firstWay: 'MOW – HKT',
        secWay: 'MOW – HKT',

        departure_time_1: '10:45 – 08:00',
        departure_time_2: '11:20 – 00:50',

        firstTime: '21ч 15м',
        secTime: '13ч 30м',

        firstCountOfTransfers: '2',
        secCountOfTransfers: '1',
    },
];

function TicketList() {
    return <Ticket tickets={tickets} />;
}

export default TicketList;
