import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
	cursor: pointer;
	padding: 0.5rem 1.5rem;
	color: ${(props) => props.theme.colors['button-text']};
	background: ${(props) => props.theme.colors['button-background']};
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.01em;
	border-radius: 0.4rem;
	border: 2px solid transparent;
	text-decoration: none;
	text-align: center;

	:hover,
	:active,
	:focus {
		transition: all 0.15s ease-in-out;
		color: ${(props) => props.theme.colors['button-text-hover']};
		background: ${(props) => props.theme.colors['button-background-hover']};
		border: 2px solid ${(props) => props.theme.colors['button-background']};
	}
`;
