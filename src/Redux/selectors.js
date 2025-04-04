import { createSelector } from 'reselect';

const getTickets = (state) => state.data.tickets;
const getCheckedList = (state) => state.filterReduser.checkedList;
const getActiveKey = (state) => state.sortReduser.activeKey;

export const getFiltredTickets = createSelector(
    [getTickets, getCheckedList, getActiveKey],
    (tickets, checkedList, activeKey) => {
        const filterFunkThree = () =>
            tickets.filter((t) => t.segments[0].stops.length === 3 || t.segments[1].stops.length === 3);

        const filterFunk = (n) =>
            tickets.filter(
                (t) =>
                    (t.segments[0].stops.length === n || t.segments[1].stops.length === n) &&
                    t.segments[0].stops.length <= n &&
                    t.segments[1].stops.length <= n
            );

        const filterFunkZero = () =>
            tickets.filter((t) => t.segments[0].stops.length == 0 && t.segments[1].stops.length == 0);

        const zero = checkedList.includes('Без пересадок');
        const one = checkedList.includes('1 пересадка');
        const two = checkedList.includes('2 пересадка');
        const three = checkedList.includes('3 пересадка');

        let filtredTickeds = [];
        if (zero) filtredTickeds = [...filtredTickeds, ...filterFunkZero()];
        if (one) filtredTickeds = [...filtredTickeds, ...filterFunk(1)];
        if (two) filtredTickeds = [...filtredTickeds, ...filterFunk(2)];
        if (three) filtredTickeds = [...filtredTickeds, ...filterFunkThree()];

        // Находим максимальные значения для нормализации
        const maxPrice = Math.max(...filtredTickeds.map((t) => t.price));
        const maxDuration = Math.max(
            ...filtredTickeds.map((t) => (t.segments[0]?.duration ?? 0) + (t.segments[1]?.duration ?? 0))
        );

        // Защита от деления на ноль
        const safeMaxPrice = maxPrice || 1;
        const safeMaxDuration = maxDuration || 1;
        switch (activeKey) {
            case '1':
                filtredTickeds = filtredTickeds.sort(function (a, b) {
                    return a.price - b.price;
                });
                break;
            case '2':
                filtredTickeds = filtredTickeds.sort(function (a, b) {
                    return (
                        (a.segments[0]?.duration ?? 0) +
                        (a.segments[1]?.duration ?? 0) -
                        ((b.segments[0]?.duration ?? 0) + (b.segments[1]?.duration ?? 0))
                    );
                });
                break;
            case '3':
                // Если нет билетов - возвращаем пустой массив
                if (filtredTickeds.length === 0) break;

                filtredTickeds = filtredTickeds.sort((a, b) => {
                    // Нормализуем цену (0...1)
                    const normPriceA = a.price / safeMaxPrice;
                    const normPriceB = b.price / safeMaxPrice;

                    // Нормализуем время (0...1)
                    const durationA = (a.segments[0]?.duration ?? 0) + (a.segments[1]?.duration ?? 0);
                    const durationB = (b.segments[0]?.duration ?? 0) + (b.segments[1]?.duration ?? 0);
                    const normDurationA = durationA / safeMaxDuration;
                    const normDurationB = durationB / safeMaxDuration;

                    // Взвешенная сумма (веса можно настраивать)
                    const optimalA = normPriceA * 0.5 + normDurationA * 0.5;
                    const optimalB = normPriceB * 0.5 + normDurationB * 0.5;

                    return optimalA - optimalB;
                });
                break;

            default:
                break;
        }

        return filtredTickeds;
    }
);
