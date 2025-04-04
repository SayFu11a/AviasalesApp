import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../Redux/actions';

import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

import styles from './Filter.module.scss';

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадка', '3 пересадка'];

const Filter = () => {
    const dispatch = useDispatch();
    const checkedList = useSelector((state) => state.filterReduser.checkedList);

    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

    const onChange = (list) => {
        dispatch(setFilter(list));
    };
    const onCheckAllChange = (e) => {
        dispatch(setFilter(e.target.checked ? plainOptions : []));
    };

    return (
        <section className={styles.mainSection}>
            <h2>Количество пересадок</h2>
            <div className={styles.filterBody}>
                <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                    Все
                </Checkbox>
                <CheckboxGroup
                    options={plainOptions}
                    value={checkedList}
                    onChange={onChange}
                    style={{ flexDirection: 'column' }}
                />
            </div>
        </section>
    );
};

export default Filter;
