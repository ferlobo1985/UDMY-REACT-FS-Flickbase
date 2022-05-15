import { Link } from 'react-router-dom'


const Header = () => {

    return(
        <nav className='navbar fixed-top'>
            <Link to="/" className='navbar-brand d-flex align-items-center fredoka_ff'>
                Flickbase
            </Link>
        </nav>
    )
}

export default Header;