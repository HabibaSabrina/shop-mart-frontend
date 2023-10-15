import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const InfoContext = createContext([])
const InfoProvider = ({children}) => {
    const [info, serInfo] = useState([])
    // fetching info data set
    useEffect(() =>{
        fetch('/datasets/info.json')
        .then(res => res.json())
        .then(data => serInfo(data))
    },[])
    return (
        <InfoContext.Provider value={[info]}>
            {children}
        </InfoContext.Provider>
    );
};

export default InfoProvider;