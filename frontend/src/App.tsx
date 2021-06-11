import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext';
import { ModalProvider } from './contexts/ModalContext';

import PrivateWhapper from './routes/private/privateRoutes';

import Login from './views/login';

function App() {
	console.log(<PrivateWhapper/>)
	return (
		<UserProvider>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Login}/>
					<ModalProvider>
						<PrivateWhapper/>
					</ModalProvider>
					<Redirect from="*" to="/"/>
				</Switch>
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;
