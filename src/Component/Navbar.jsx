import { Link } from "react-router-dom";

const Navbar = () => {
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
                <Link className=" btn border px-2 m-2 " to='/login' > Log In </Link>
                <Link className=" btn border px-2 m-2 " to='/register' > Register </Link>
            </ul>
            </div>
        </div>
    );
};

export default Navbar;