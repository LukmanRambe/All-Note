import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
	padding: 1.5rem 5rem;
	color: ${(props) => props.theme.colors['navbar-text']};
	background: ${(props) => props.theme.colors['navbar-background']};

	@media only screen and (max-width: 1024px) {
		padding: 1.5rem 3rem;
	}

	@media only screen and (max-width: 600px) {
		padding: 1.5rem 1rem;
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Container = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	&.logo {
		gap: 0.5rem;
	}
`;

export const Logo = styled.img`
	width: 100%;
	max-width: 2rem;
	margin-top: 0.2rem;
`;

export const Text = styled(Link)`
	font-weight: 600;
	font-size: 2rem;
	text-decoration: none;
	color: ${(props) => props.theme.colors['navbar-text']};

	@media only screen and (max-width: 600px) {
		font-size: 1.7rem;
	}
`;

export const Username = styled.span`
	display: block;
	font-size: 1.2rem;
	font-weight: 600;
	letter-spacing: 0.1rem;
	margin-right: 2rem;

	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

export const ToggleTheme = styled.button`
	cursor: pointer;
	color: ${(props) => props.theme.colors['navbar-text']};
	background: ${(props) => props.theme.colors['navbar-icon-background']};
	border-radius: 0.5rem;
	outline: none;
	border: none;
	padding: 0.25rem 0.4rem;
	font-size: 1.5rem;

	:hover {
		color: ${(props) => props.theme.colors['navbar-text']};
		background: ${(props) => props.theme.colors['navbar-icon-background-hover']};
		transition: all ease-in-out 0.15s;
	}

	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

export const ChangeLanguage = styled.button`
	cursor: pointer;
	color: ${(props) => props.theme.colors['navbar-text']};
	background: ${(props) => props.theme.colors['navbar-icon-background']};
	border-radius: 0.5rem;
	outline: none;
	border: none;
	padding: 0.25rem 0.4rem;
	font-size: 1.5rem;

	:hover {
		color: ${(props) => props.theme.colors['navbar-text']};
		background: ${(props) => props.theme.colors['navbar-icon-background-hover']};
		transition: all ease-in-out 0.15s;
	}

	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

export const LogoutBtn = styled.button`
	cursor: pointer;
	color: ${(props) => props.theme.colors['navbar-text']};
	background: ${(props) => props.theme.colors['navbar-icon-background']};
	border-radius: 0.5rem;
	outline: none;
	border: none;
	padding: 0.25rem 0.4rem;
	font-size: 1.5rem;

	:hover {
		color: ${(props) => props.theme.colors['navbar-text']};
		background: ${(props) => props.theme.colors['navbar-icon-background-hover']};
		transition: all ease-in-out 0.15s;
	}
`;
