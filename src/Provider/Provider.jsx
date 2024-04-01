import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../FireBase/firebase.config';
export const AuthContext = createContext(null);

const Provider = ({children}) => {
    // const authDetails = { taka : 'five housand taka'};
    const [user, setUser] = useState(null);
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword( auth , email, password)
    }
    const signInUser = (email, password) => {
        signInWithEmailAndPassword (auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    // useEffect(() => {
    //     onAuthStateChanged(auth, (currenUser => {
    //         setUser(currenUser)
    //     } ))
    // },[])
    useEffect(() => {
        const unsubcribe =  onAuthStateChanged(auth, (currenUser => {
            setUser(currenUser)
        } ))
        return () => unsubcribe();
    },[])

    const authDetails = { user, createUser, signInUser, logOut };

    return (
        <AuthContext.Provider value = {authDetails} >
            {children}
        </AuthContext.Provider>
    );
};
Provider.propTypes = {
    children: PropTypes.node
}

export default Provider;