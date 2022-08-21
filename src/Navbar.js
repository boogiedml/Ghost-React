import { Link } from "react-router-dom"



const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 className="nav-brand">GHOST</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;