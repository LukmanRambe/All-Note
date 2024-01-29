import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.article`
	width: 100%;
`;

export const Content = styled.article`
	display: flex;
	justify-content: flex-end;
	gap: 0.5rem;
	color: ${(props) => props.theme.colors.text};

	@media only screen and (max-width: 600px) {
		justify-content: center;
	}
`;

export const Option = styled(Link)`
	padding: 0.5rem 1rem;
	font-size: 0.9rem;
	border: 2px solid transparent;
	border-radius: 0.5rem;
	color: ${(props) => props.theme.colors['category-text']};
	background: transparent;
	font-weight: 700;
	text-align: center;
	text-decoration: none;

	:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors['category-text-hover']};
		background: ${(props) => props.theme.colors['category-background-hover']};
	}

	&.active {
		color: ${(props) => props.theme.colors['category-text-active']};
		background: ${(props) => props.theme.colors['category-background']};
	}

	@media only screen and (max-width: 600px) {
		width: 100%;
	}

	@media only screen and (max-width: 320px) {
		padding: 0.5rem 0.4rem;
	}
`;
