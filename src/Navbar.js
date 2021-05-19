import {Link} from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Mini Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create">New Blog</a> */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;