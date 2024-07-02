import '../App.css';
import { Link } from 'react-router-dom';


let Navbar=()=>{
    return(
        <div className="nav-bar">
            <div className='logo'><span>M</span>ovieDom</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Movies">Movies</Link></li>
                <li><Link to="/Tvshows">Tv Shows</Link></li>
                <li><Link to="/ComingSoon">Coming Soon</Link></li>
            </ul>
            
        </div>
    );
} 
export default Navbar;  //exporting the Navbar component  so that it can be used in other