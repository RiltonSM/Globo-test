import { createContext, useState, useCallback } from 'react';

import Modal from '../components/Modal';

import { ModalContextInterface, ProviderPropsInterface } from './interfaces';

export const ModalContext = createContext({} as ModalContextInterface);

export const ModalProvider = ({ children }: ProviderPropsInterface) => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const closeModal = useCallback(
        () => {
            setIsModalOpened(false);
        }, []
    ) 
    

    const openModal = useCallback(
        (user = null) => {
            setSelectedUser(user);
            setIsModalOpened(true);
        }, []
    )

    return(
        <ModalContext.Provider
            value={{
                closeModal,
                openModal,
                selectedUser
            }}
        >
            {isModalOpened && <Modal />}
            { children }
        </ModalContext.Provider>
    )
}