import Card from 'antd/es/card/Card';
import styles from './Ticket.module.scss';

import { format } from 'date-fns';

function Ticket({ ticket }) {
    const timeFormater = (ticket, i) => {
        const departureDate = new Date(ticket.segments[i].date);
        const arrivalDate = new Date(departureDate.getTime() + ticket.segments[i].duration * 60000);

        return (
            <div>
                {format(departureDate, 'HH:mm')} – {format(arrivalDate, 'HH:mm')}
            </div>
        );
    };

    const getLogoUrl = (ticket) => {
        return `https://pics.avs.io/99/36/${ticket.carrier}.png`;
    };

    return (
        <Card style={{ marginBottom: '20px' }}>
            <header className={styles.header}>
                <span>{ticket.price} Р</span>
                <img src={getLogoUrl(ticket)} alt="logo" />
            </header>

            <section className={styles.body} style={{ marginBottom: '5px' }}>
                <span>
                    <span className={styles.col}>
                        {ticket.segments[0].origin + ' - ' + ticket.segments[0].destination}
                    </span>
                    {timeFormater(ticket, 0)}
                </span>
                <span>
                    <span className={styles.col}>В пути</span> <br />
                    {Math.floor(ticket.segments[0].duration / 60) + 'ч ' + (ticket.segments[0].duration % 60) + 'м'}
                </span>
                <span>
                    <span className={styles.col}>{ticket.segments[0].stops.length} пересадки</span> <br />
                    {ticket.segments[0].stops?.join()}
                </span>
            </section>

            <section className={styles.body}>
                <span>
                    <span className={styles.col}>
                        {ticket?.segments[1]?.origin + ' - ' + ticket?.segments[1]?.destination}
                    </span>
                    {timeFormater(ticket, 1)}
                </span>
                <span>
                    <span className={styles.col}>В пути</span> <br />
                    {Math.floor(ticket.segments[1].duration / 60) + 'ч ' + (ticket.segments[1].duration % 60) + 'м'}
                </span>
                <span>
                    <span className={styles.col}>{ticket.segments[1]?.stops.length} пересадки</span> <br />
                    {ticket.segments[1]?.stops?.join()}
                </span>
            </section>
        </Card>
    );
}

export default Ticket;
