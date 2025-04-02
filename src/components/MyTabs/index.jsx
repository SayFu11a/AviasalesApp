import { useMemo } from 'react';
import { connect } from 'react-redux';
import { setActiveTabAction } from '../../Redux/actions';

import { Tabs } from 'antd';

import TicketList from '../TicketList';

const MyTabs = ({ activeKey, setActiveTab }) => {
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
                children: 'Content of editable tab 2',
            },
            {
                label: 'Оптимальный',
                key: '3',
                children: 'Content of editable tab 3',
            },
        ],
        [activeKey]
    );

    return <Tabs activeKey={activeKey} onChange={setActiveTab} type="card" items={items} />;
};

function mapStateToProps(state) {
    const { sortReduser } = state;

    return {
        activeKey: sortReduser.activeKey,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setActiveTab: (key) => dispatch(setActiveTabAction(key)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTabs);
