import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideDrawer from './sideNavigation';

import { useSelector, useDispatch } from 'react-redux';
import { clearNotifications } from '../../store/reducers/notifications'


const Header = () => {
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();


    useEffect(()=>{
        let { global } = notifications; 
        if(notifications && global.error){
            console.log('error')
            dispatch(clearNotifications())
        }
        if(notifications && global.success){
            console.log('success')
            dispatch(clearNotifications())
        }
    },[notifications])


    return(
        <nav className='navbar fixed-top'>
            <Link to="/" className='navbar-brand d-flex align-items-center fredoka_ff'>
                Flickbase
            </Link>
            <SideDrawer/>
        </nav>
    )
}

export default Header;