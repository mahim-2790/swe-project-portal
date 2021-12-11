import React, { createContext } from 'react';
import useDetails from '../../hooks/useDetails';



export const UserDetailContext = createContext(null);

const UserDetailProvider = ({ children }) => {
    const allContexts = useDetails();
    console.log('context', allContexts);

    return (
        <UserDetailContext.Provider value={allContexts}>
            {children}
        </UserDetailContext.Provider>
    );
};

export default UserDetailProvider;