import './navbar.style.scss'
import { ReactComponent as NightMode } from '../../assets/night-mode.svg';
import { ReactComponent as Profile } from '../../assets/profile.svg';
import { ReactComponent as Logo } from '../../assets/TaskMate-logo.svg';
import { Outlet, Link } from 'react-router-dom';


const Navbar = () => {
    return(
        <>
            <div className="navbar-container">
                <div className="logo-container">
                    <Link to='/'>
                        <Logo/>
                    </Link>
                </div>
                <div className="nav-links">
                    <Link to='/todo'>
                        <h3>Todo</h3>
                    </Link>
                    <Link to='/project'>
                        <h3>Project</h3>                    
                    </Link>
                    <Link to='/team'>
                        <h3>Team</h3>                    
                    </Link>
                </div>
                <div className="nav-icons">
                    <NightMode/>                      
                    <Link to='/profile'>
                        <Profile/>             
                    </Link>                    
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Navbar;