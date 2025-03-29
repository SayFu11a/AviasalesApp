import { useState } from 'react';
import { Tabs } from 'antd';

import TicketList from '../TicketList';

const onChange = (key) => {
    console.log(key);
};
const MyTabs = () => {
    const [items, setItems] = useState([
        {
            label: 'Самый дешевый',
            key: '1',
            children: <TicketList />,
        },
        {
            label: 'Самый быстрый',
            key: '2',
            children: 'Content of editable tab 2',
        },
        {
            label: 'Оптимальный',
            key: '3',
            children: 'Content of editable tab 3',
        },
    ]);

    return <Tabs onChange={onChange} type="card" items={items} />;
};

export default MyTabs;
