import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
	width: 100%;
	height: 100dvh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 1rem;
`;

export const Content = styled.div`
	width: 100%;
	max-width: 20rem;
`;

export const Title = styled.h1`
	color: ${(props) => props.theme.colors.text};
	font-size: 2rem;
	font-weight: 600;
	letter-spacing: 0.01rem;
	margin-bottom: 2rem;
	text-align: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.2rem;
	width: 100%;
	max-width: 20rem;
`;

export const InputGroup = styled.article`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
`;

export const Label = styled.label`
	font-size: 0.9rem;
	font-weight: 600;
	letter-spacing: 0.01rem;
	color: ${(props) => props.theme.colors.text};
`;

export const Input = styled.input`
	padding: 0.7rem;
	border-radius: 0.4rem;
	width: 100%;
	color: ${(props) => props.theme.colors['input-text']};
	background: ${(props) => props.theme.colors['input-background']};
	border: 2px solid ${(props) => props.theme.colors['input-border']};
	outline: none;

	:hover {
		border: 2px solid ${(props) => props.theme.colors['input-border-active']};
		transition: all ease-out 0.15s;
	}

	:active,
	:focus {
		border: 2px solid ${(props) => props.theme.colors['input-border-active']};
	}
`;

export const SubmitBtn = styled.button`
	cursor: pointer;
	width: 100%;
	border-radius: 0.4rem;
	font-weight: 600;
	font-size: 1rem;
	letter-spacing: 0.05rem;
	padding: 0.7rem;
	color: ${(props) => props.theme.colors['button-text']};
	background: ${(props) => props.theme.colors['button-background']};
	outline: none;
	text-transform: uppercase;
	border: 2px solid transparent;
	margin-top: 2rem;

	:hover,
	:active,
	:focus {
		color: ${(props) => props.theme.colors['button-text-hover']};
		background: ${(props) => props.theme.colors['button-background-hover']};
		border: 2px solid ${(props) => props.theme.colors['button-background']};
		transition: all ease-in-out 0.15s;
	}
`;

export const LinkWrapper = styled.article`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: end;
	gap: 0.25rem;
	margin-top: 1rem;
	color: ${(props) => props.theme.colors.text};
`;

export const LinkToPage = styled(Link)`
	display: block;
	cursor: pointer;
	color: ${(props) => props.theme.colors.text};
	font-size: 1rem;
	text-decoration: underline;

	:hover,
	:focus,
	:active {
		transition: all 0.15s ease-in-out;
		color: var(--dark-grey);
	}
`;
