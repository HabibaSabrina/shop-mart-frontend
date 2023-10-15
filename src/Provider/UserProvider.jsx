import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext([])
const UserProvider = ({children}) => {
    const [user, setUser] = useState([])
    // fetching user data set
    useEffect(() =>{
        fetch('/datasets/user.json')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <UserContext.Provider value={[user]}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;