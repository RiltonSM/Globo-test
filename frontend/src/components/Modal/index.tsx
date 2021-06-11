import { useState, useContext } from 'react';
import { FiXCircle } from "react-icons/fi";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

//Services
import apiUser from '../../services/apiUser';

//Context
import { ModalContext } from '../../contexts/ModalContext';
import { UserContext } from '../../contexts/UserContext';

//Components
import Input from '../Input/styles';
import Select from '../Select';
import Button from '../Button/styles';

//Styles
import {
    Overlay,
    Container,
    CloseContainer,
    Close,
    Content,
    Label,
    ButtonContainer,
    ErrorMessage
} from './styles';

//Assets
import colors from '../../assets/css/colors';

const Modal = () => {
    const [message, setMessage] = useState("");
    const [isMessageShowed, setIsMessageShowed] = useState(false);
    const { closeModal, selectedUser } = useContext(ModalContext);
    const { setUserListChange } = useContext(UserContext);

    const formValidationWithYup = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string(),
        nivel_acesso: Yup.string().required()
    });

    return(
        <Overlay onClick={() => closeModal()}>
            <Container
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <CloseContainer>
                    <Close id="close_modal" onClick={() => closeModal()}>
                        <FiXCircle size={32} color={colors.secondary}/>
                    </Close>
                </CloseContainer>
                <Content>
                    <Formik 
                        initialValues={{
                            email: "",
                            password: "",
                            nivel_acesso: "admin"
                        }}
                        validationSchema={formValidationWithYup}
                        onSubmit={async (values) => {
                            try {
                                if(selectedUser === null) {
                                    const response = await apiUser.post(`/user/add`, {
                                        email: values.email,
                                        senha: values.password,
                                        nivel_acesso: values.nivel_acesso
                                    });

                                    setUserListChange(true);
                                } else {
                                    if(values.password !== ""){
                                        const response = await apiUser.put(`/user/update/${selectedUser.id}`, {
                                            email: values.email,
                                            senha: values.password,
                                            nivel_acesso: values.nivel_acesso
                                        });
                                    } else {
                                        const response = await apiUser.put(`/user/update/${selectedUser.id}`, {
                                            email: values.email,
                                            nivel_acesso: values.nivel_acesso
                                        });
                                    }

                                    setUserListChange(true);
                                }

                                closeModal();
                            } catch (error) {
                                
                            }
                        }}
                    >
                        {({errors, initialValues}) => {
                            if(selectedUser !== null){
                                initialValues.email = selectedUser.email;
                                initialValues.nivel_acesso = selectedUser.nivel_acesso;
                            }

                            return(
                                <Form>
                                    <Label htmlFor="email">Email</Label>
                                    <Field id="email" name="email" as={Input}/>

                                    <Label htmlFor="password">Senha</Label>
                                    <Field id="password" name="password" type="password" placeholder={ selectedUser === null ? "" : "Caso esse campo não for preenchido, a senha permenecerá a mesma"} as={Input}/>

                                    <Label htmlFor="nivel_acesso">Nível de acesso</Label>
                                    <Field id="nivel_acesso" name="nivel_acesso" as={Select}>
                                        <option value="admin">Administrador</option>
                                        <option value="func">Funcionário</option>
                                    </Field>

                                    {
                                        isMessageShowed && (
                                            <ErrorMessage>{message}</ErrorMessage>
                                        )
                                    }

                                    <ButtonContainer>
                                        <Button 
                                            type="submit"
                                            onClick={() => {
                                                if(Object.keys(errors).length > 0){
                                                    setMessage("Os campos não foram preenchidos corretamente");
                                                    setIsMessageShowed(true);
                                                }
                                            }}
                                        >
                                            { selectedUser === null ? "Adicionar" : "Editar"}
                                        </Button>
                                    </ButtonContainer>
                                </Form>
                            )
                        }}
                    </Formik>

                </Content>
            </Container>
        </Overlay>
    )
}

export default Modal;