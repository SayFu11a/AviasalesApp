import { useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setActiveTab } from '../../store/slices/sortSlice';
import { Tabs } from 'antd';
import TicketList from '../TicketList';

const MyTabs = () => {
    const dispatch = useDispatch();
    const activeKey = useSelector((state) => state.sortReduser.activeKey);

    const items = useMemo(
        () => [
            {
                label: 'Самый дешевый',
                key: '1',
                children: <TicketList />,
            },
            {
                label: 'Самый быстрый',
                key: '2',
                children: <TicketList />,
            },
            {
                label: 'Оптимальный',
                key: '3',
                children: <TicketList />,
            },
        ],
        []
    );

    return <Tabs activeKey={activeKey} onChange={(key) => dispatch(setActiveTab(key))} type="card" items={items} />;
};

export default MyTabs;
