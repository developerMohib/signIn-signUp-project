import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
        .then( () => console.log('log out successFully'))
        .catch( error => console.error( error, 'error'))
    }

    return (
        <div className="flex justify-between" >
            <div>
            <ul>
                <Link className=" btn border px-2 m-2 " to='/' > Home </Link>
                <Link className=" btn border px-2 m-2 " to='/about' > About </Link>
                <Link className=" btn border px-2 m-2 " to='/contact' > Contact </Link>
                <Link className=" btn border px-2 m-2 " to='/blog' > Blog </Link>
            </ul>
            </div>

            <div>
            <ul>
                {
                    // user ? ' user.email ' : 'nai re vai'
                    user && <span> {user.email} </span>
                }
                <Link className=" btn border px-2 m-2 " onClick={handleSignOut} > Log Out </Link>
                <Link className=" btn border px-2 m-2 " to='/login' > Log In </Link>
                <Link className=" btn border px-2 m-2 " to='/register' > Register </Link>
            </ul>
            </div>
        </div>
    );
};

export default Navbar;