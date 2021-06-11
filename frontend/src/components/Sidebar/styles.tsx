import styled from 'styled-components';

// Assets
import colors from '../../assets/css/colors';

//Interface
import { LinkContainerProps } from './interfaces';

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-flow: column;

	z-index:1039;

	height: 100vh;
	width: 15%;
	position: relative;

	border-right-width: 2px;
	border-right-color: ${colors.sideBarBorder};
	border-right-style: solid;

	overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 1280px) {
		width: 10%;
	}

	@media (max-width: 500px) {
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 70px; 

		display: flex;
		align-items: none;
		justify-content:center;
		flex-flow: row;

		border-right-width: 0;

		border-top-width: 2px;
		border-top-color: ${colors.sideBarBorder};
		border-top-style: solid;

		overflow-y: none;
		overflow-x: scroll;

		background-color:${colors.white};

		display: -webkit-box;
		flex-wrap: nowrap;
		overflow-x: auto;

		::-webkit-scrollbar {
		display: none;
		}
	}
`;

export const Nav = styled.div`
	padding-top: 35px;

	@media (max-width: 500px) {
		display: flex;
		flex-direction: row;
		padding-top: 0px;
	}
`;

export const NavLink = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	margin-bottom: 43px;

	@media (max-width: 1280px) {
		flex-direction: column;
	}

	@media (max-width: 500px) {
		margin-bottom: 0;
		width:55px;
	}
`;

export const Text = styled.p`
	margin: 0;

	@media (max-width: 1280px) {
		display: none;
	}
`;

export const Left = styled.div`
	width: 30px;
	display: flex;
	justify-content: center;
`;

export const Right = styled.div`
	width: 90px;
	padding-left: 20px;
`;

export const LinkContainer = styled.div`
	display: flex;
	align-items: center;

	color: ${(p: LinkContainerProps) => p.color};
`;