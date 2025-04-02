import Logo from '../Logo';
import Filter from '../Filter';
import MyTabs from '../MyTabs';

import './App.scss';

function App() {
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
