import styled from 'styled-components';

export const Wrapper = styled.article`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: end;
	top: 5rem;
	right: 2rem;
	gap: 1rem;

	&.main {
		display: none;
	}

	@media only screen and (max-width: 600px) {
		top: 1rem;
		right: 1rem;

		&.main {
			position: relative;
			display: flex;
			inset: 0;
		}
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
`;
