import { ReactNode } from 'react';
import { UserInterface } from '../views/users/interfaces'

export interface UserContextInterface {
    user: UserDataInterface;
    handleLogin: Function;
    handleLogout: Function;
    userListChange: boolean;
    setUserListChange: Function;
}

export interface ModalContextInterface {
    openModal: Function;
    closeModal: Function;
    selectedUser: UserInterface | null;
}

export interface UserDataInterface {
    id: string;
    email: string;
    nivel_acesso: string;
    senha: string;
    authenticated: boolean;
}

export interface ProviderPropsInterface {
    children: ReactNode
}

