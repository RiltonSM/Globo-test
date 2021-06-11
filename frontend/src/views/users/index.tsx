import { useEffect, useState, useContext } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';

//Services
import apiUser from '../../services/apiUser';

//Context
import { ModalContext } from '../../contexts/ModalContext';
import { UserContext } from '../../contexts/UserContext'

//Components
import { Row, Container } from '../../components/Main/styles';
import Sidebar from '../../components/Sidebar';

//Styles
import { 
    Content, 
    AddButtonContainer, 
    AddButton, 
    TableContainer, 
    Table, 
    Tr,
    Th,
    Td 
} from './styles';

//Assets
import colors from '../../assets/css/colors';

//Interfaces
import { UserInterface } from './interfaces';


const Users = () => {
    const [usersList, setUserList] = useState<Array<UserInterface>>([]);
    const [page, setPage] = useState(1);

    const { openModal } = useContext(ModalContext);
    const { userListChange, setUserListChange } = useContext(UserContext);

    useEffect(() => {
        const getUserList = async () => {
            const { data } = await apiUser.get(`/users`);

            setUserList(data);
        }

        getUserList();
    }, []);

    useEffect(() => {
        const getUserList = async () => {
            const { data } = await apiUser.get(`/users`);

            setUserList(data);
        }
        if(userListChange){
            getUserList();
            setUserListChange(false);
        }
    }, [userListChange]);

    const removeUser = async (user: UserInterface) => {
        try {
            const response = await apiUser.delete(`/user/remove/${user.id}`);

            const { data } = await apiUser.get(`/users`);

            setUserList(data);
        } catch (error) {
            
        }
    }

    const generateProducts = () => {
        return usersList.map((user, index) => {
            if(index >= ((page * 10) - 10) && index <= ((page*10) - 1)){
                return (
                    <Tr id={`tr_${user.id}`} key={user.id}>
                        <Td>{user.id}</Td>
                        <Td>{user.email}</Td>
                        <Td>{user.nivel_acesso === "admin" ? "Administrador": "Funcionário"}</Td>
                        <Td 
                            id={`edit_${user.id}`}
                            onClick={() => {
                                openModal(user)
                            }}
                        ><FiEdit color={colors.primary}/></Td>
                        <Td 
                            id={`remove_${user.id}`}
                            onClick={() => {
                                removeUser(user);
                            }}
                        ><FiTrash2 color={colors.secondary}/></Td>
                    </Tr>
                )
            }
            return null;
        })
    }

    return(
        <>
            <Row>
                <Sidebar/>
                <Container>
                    <Content>
                        <TableContainer>
                            <AddButtonContainer>
                                <AddButton onClick={() => openModal()}>
                                    <FiPlus size={24} color="#FFFFFF"/>
                                </AddButton>
                            </AddButtonContainer>
                            <Table id="table">
                                <thead>
                                    <tr>
                                        <Th>ID</Th>
                                        <Th>Email</Th>
                                        <Th>Nível de Acesso</Th>
                                        <Th></Th>
                                        <Th></Th>
                                    </tr>
                                </thead>

                                <tbody>
                                    { generateProducts() }
                                </tbody>
                            </Table>
                        </TableContainer>
                    </Content>
                </Container>
            </Row>
        </>
    )
}

export default Users;