import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/create-post">Create Post</Link>
            <Link to="/">Posts</Link>
        </div>
    )
}


export default Navbar;