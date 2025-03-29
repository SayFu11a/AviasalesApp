import Card from 'antd/es/card/Card';
import logo from '../../assets/img/S7 Logo.png';
import styles from './Ticket.module.scss';

function Ticket({ tickets }) {
    return tickets.map((ticket) => (
        <Card key={ticket.id}>
            <header className={styles.header}>
                <span>{ticket.price} Р</span>
                <img src={logo} alt="logo" />
            </header>

            <section className={styles.body} style={{ marginBottom: '5px' }}>
                <span>
                    <span className={styles.col}>{ticket.firstWay}</span>
                    <div>{ticket.departure_time_1}</div>
                </span>
                <span>
                    <span className={styles.col}>В пути</span> <br />
                    {ticket.firstTime}
                </span>
                <span>
                    <span className={styles.col}>{ticket.firstCountOfTransfers} пересадки</span> <br />
                    {ticket.transfers_1?.join()}
                </span>
            </section>

            <section className={styles.body}>
                <span>
                    <span className={styles.col}>{ticket.secWay}</span> <br />
                    {ticket.departure_time_2}
                </span>
                <span>
                    <span className={styles.col}>В пути</span> <br />
                    {ticket.secTime}
                </span>
                <span>
                    <span className={styles.col}>{ticket.secCountOfTransfers} пересадки</span> <br />
                    {ticket.transfers_2?.join()}
                </span>
            </section>
        </Card>
    ));
}

export default Ticket;
