import logo from '../../assets/img/logo.png';

function Logo() {
    return (
        <>
            <div className="logo" style={{ marginBottom: '30px' }}>
                <img src={logo} alt="logo" width="70" height="75" />
            </div>
        </>
    );
}

export default Logo;
