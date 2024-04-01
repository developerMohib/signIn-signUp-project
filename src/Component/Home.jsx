import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const Home = () => {
    const authInfo = useContext( AuthContext )
    return (
        <div className="h-[80vh] flex justify-center items-center" >
            <h1>This is Home {authInfo.taka} </h1>
        </div>
    );
};

export default Home;