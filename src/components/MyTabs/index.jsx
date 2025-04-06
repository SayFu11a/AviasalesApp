import { useMemo } from 'react';
// import { connect } from 'react-redux';
// import { setActiveTabAction } from '../../Redux/actions';

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
                // children: <>1</>,
            },
            {
                label: 'Самый быстрый',
                key: '2',
                // children: <>2</>,
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

// function mapStateToProps(state) {
//     const { sortReduser } = state;

//     return {
//         activeKey: sortReduser.activeKey,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         setActiveTab: (key) => dispatch(setActiveTabAction(key)),
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MyTabs);

export default MyTabs;
