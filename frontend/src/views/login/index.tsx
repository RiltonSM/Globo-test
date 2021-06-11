import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

//Services
import apiUser from '../../services/apiUser';

//Context
import { UserContext } from '../../contexts/UserContext';

//Components
import Card from '../../components/Card';
import Input from '../../components/Input/styles';
import Button from '../../components/Button/styles';

//Styles
import { 
    ContantContainer, 
    Title, 
    Label,
    ErrorMessage
} from './styles';

const Login = () => {
    const [message, setMessage] = useState("");
    const [isMessageShowed, setIsMessageShowed] = useState(false);

    const { user, handleLogin } = useContext(UserContext);

    const history = useHistory();

    useEffect(() => {
        if(user.authenticated){
            history.push('/dashboard');
        }
    }, []);

    const formValidationWithYup = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required()
    })

    return(
        <ContantContainer>
            <Card>
                <Title>Login</Title>

                <Formik 
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={formValidationWithYup}
                    onSubmit={async (values) => {
                        try{
                            const { data } = await apiUser.post(`/login`, {
                                email: values.email,
                                senha: values.password
                            });

                            handleLogin({
                                ...data[0],
                                authenticated: true
                            })
                            
                            setIsMessageShowed(false);
                            history.push('/dashboard');
                        } catch (err){
                            setMessage("Erro ao autenticar usuário");
                            setIsMessageShowed(true);
                        }
                    }}
                >
                    {({errors}) => {
                        console.log(errors);
                        return(
                            <Form>
                                <Label htmlFor="email">Email</Label>
                                <Field id="email" name="email" as={Input}/>

                                <Label htmlFor="password">Senha</Label>
                                <Field id="password" name="password" type="password" as={Input}/>

                                {
                                    isMessageShowed && (
                                        <ErrorMessage>{message}</ErrorMessage>
                                    )
                                }

                                <Button 
                                    type="submit" 
                                    onClick={() => {
                                        if(Object.keys(errors).length > 0){
                                            setMessage("Os campos não foram preenchidos corretamente");
                                            setIsMessageShowed(true);
                                        }
                                    }}
                                >
                                    Entrar
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>

            </Card>
        </ContantContainer>
    )
}

export default Login;