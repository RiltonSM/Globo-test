import { useContext, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { RiLogoutBoxLine } from 'react-icons/ri'

//Contexts
import { UserContext } from "../../contexts/UserContext";

//Routes
import adminRoutes from "../../routes/admin.routes";
import funcRoutes from "../../routes/func.routes";

//Styles
import { Container, Nav, NavLink, Text, Left, Right, LinkContainer } from './styles';

//Interfaces
import { RouteInterface } from '../../routes/intefaces';

//Assets
import colors from '../../assets/css/colors';

const Sidebar = () => {
	const [hover, setHover] = useState('');
	const [path, setPath] = useState('');

	const { user, handleLogout } = useContext(UserContext);

	const location = useLocation();

	//get the path name
	useEffect(() => {
		setPath(location.pathname)
	}, [location]);

	const renderMenu = () => {
		const routesToRender = user.nivel_acesso === 'admin' ? adminRoutes : funcRoutes;
		return routesToRender.map((prop: RouteInterface, key) => {
			return(
				<LinkContainer
					color={(hover === prop.path || path === prop.path ) ? colors.primary : colors.grayLight}
					key={prop.path}
				>
					<Link
						onMouseEnter={() => setHover(prop.path)}
						onMouseLeave={() => setHover('')}
						key={key}
						to={`${prop.path}`}
					>
						<NavLink id={prop.text}>
						<Left>
							{prop.icon({color: 'inherit', size: 24})}
						</Left>
						<Right>
							<Text>{prop.text}</Text>
						</Right>
						</NavLink>
					</Link>
				</LinkContainer>
			)
		});  
	};

	return (
		<Container>
			<Nav>
				<LinkContainer
					color={(hover === '/' || path === '/') ? colors.primary : colors.grayLight}
				>
					<Link
						onMouseEnter={() => setHover('/')}
						onMouseLeave={() => setHover('')}
						to="/"
						onClick={() => handleLogout()}
					>
						<NavLink id="Tela de login">
							<Left>
								<RiLogoutBoxLine size={24}/>
							</Left>
							<Right>
								<Text>Tela de login</Text>
							</Right>
						</NavLink>
					</Link>
				</LinkContainer>
				{renderMenu()}
			</Nav>
		</Container>
	);
};

export default Sidebar;
