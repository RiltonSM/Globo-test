import { useContext } from 'react';
import { Route, useHistory } from 'react-router-dom';

//Routes
import adminRoutes from '../admin.routes';

//Context
import { UserContext } from '../../contexts/UserContext';

import Dashboard from '../../views/dashboard';

const PrivateWhapper = () => {
    const { user } = useContext(UserContext);

    const history = useHistory();

    const generatePrivateRoutes = () => {
        let routes: Array<any> | null = null;
    
        if(user.authenticated){
            if(user.nivel_acesso === "admin"){
                routes = adminRoutes.map(route => {
                    return(
                        <Route key={route.path} path={route.path} component={route.component} />
                    )
                });
            } else if(user.nivel_acesso === "func") {
                return(
                    <Route path="/dashboard" component={Dashboard}/>
                )
            }
        } else {
            history.push('/');
        }
    
        return routes;
    }

    return(
        <>
            {generatePrivateRoutes()}
        </>
    )


}

export default PrivateWhapper;