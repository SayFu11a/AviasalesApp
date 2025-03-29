import './App.scss';
import Logo from '../Logo';
import Filter from '../Filter';
import MyTabs from '../MyTabs';

function App() {
    // async function reques() {
    //     const res = await fetch('https://front-test.dev.aviasales.ru/search');
    // }
    // reques();

    return (
        <>
            <Logo />
            <section className="main-section">
                <Filter />
                <MyTabs />
            </section>
        </>
    );
}

export default App;
