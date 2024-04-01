import PropTypes from 'prop-types';
import { createContext } from 'react';
export const AuthContext = createContext(null);

const Provider = ({children}) => {
    const authDetails = { taka : 'five housand taka'};
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