import { createContext, useState, useCallback } from 'react';

import { UserContextInterface, UserDataInterface, ProviderPropsInterface } from './interfaces';

export const UserContext = createContext({} as UserContextInterface);

const initialUserValue = '{ "id": "", "email": "", "nivel_acesso": "", "authenticated": false }';

export const UserProvider = ({ children }: ProviderPropsInterface) => {
    const [user, setUser] = useState<UserDataInterface>(
        JSON.parse(localStorage.getItem("user") || initialUserValue));
    
    const [userListChange, setUserListChange] = useState(false);

    const handleLogin = useCallback(
        (userData: UserDataInterface) => {
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
        }, []
    )

    const handleLogout = useCallback(
        () => {
            setUser(JSON.parse(initialUserValue));
            localStorage.setItem("user", initialUserValue);
        }, []
    )

    return(
        <UserContext.Provider
            value={{
                user,
                handleLogin,
                handleLogout,
                userListChange,
                setUserListChange
            }}
        >
            {children}
        </UserContext.Provider>
    )
}