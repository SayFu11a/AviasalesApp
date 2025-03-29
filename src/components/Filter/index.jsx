import { useState } from 'react';

import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадка', '3 пересадка'];
const defaultCheckedList = ['Без пересадок'];

import styles from './Filter.module.scss';

const Filter = () => {
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
    const onChange = (list) => {
        setCheckedList(list);
    };
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
    };
    console.log(checkedList);

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
