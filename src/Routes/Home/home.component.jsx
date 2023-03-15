import { ReactComponent as Logo } from '../../assets/TaskMate-logo.svg';
import { Link } from 'react-router-dom';
import './home.style.scss';

const Home = () => {
    return(
        <div className="home-container">
            <div className="home-contents">
                <h2>Manage your task efficiently with</h2>
                <Logo/>
                <Link to='/todo'>
                    <button>Get Started</button>
                </Link>
            </div>
            <p>( Note : Since this project uses a central database without user authentication, you'll have to delete existing to-do tasks manually )</p>
        </div>    
    )
}

export default Home;