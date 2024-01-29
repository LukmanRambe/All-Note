import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 1.5rem 5rem;

	@media only screen and (max-width: 1024px) {
		padding: 1.5rem 3rem;
	}

	@media only screen and (max-width: 600px) {
		padding: 1.5rem 1rem;
	}
`;

export const Content = styled.article`
	width: 100%;
`;

export const Header = styled.section`
	display: flex;
	justify-content: space-between;

	:after {
		content: '';
	}

	@media only screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

export const FormWrapper = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Form = styled.form`
	display: flex;
	gap: 1rem;
	position: relative;
	flex-direction: column;
	align-self: center;
	background: ${(props) => props.theme.colors.color};
	border-radius: 0.4rem;
	width: 100%;
	margin-top: 2rem;
	max-width: 50rem;
`;

export const Title = styled.h2`
	font-size: 1.7rem;
	margin-bottom: 0.5rem;
	font-weight: 700;
	text-align: center;

	@media only screen and (max-width: 360px) {
		font-size: 1.4rem;
		margin-bottom: 0.2rem;
	}
`;

export const InputGroup = styled.article`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Label = styled.h5`
	font-size: 1rem;
	align-self: flex-start;
	margin-bottom: 0.3rem;

	@media only screen and (max-width: 360px) {
		font-size: 0.9rem;
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: 0.5rem;
	border-radius: 0.4rem;
	border: 2px solid var(--grey);

	:focus,
	:active {
		outline: none;
		transition: all 0.15s ease-in-out;
		border: 2px solid ${(props) => props.theme.colors.background};
	}
`;

export const CharLimit = styled.span`
	font-size: 0.7rem;
	font-weight: 700;
	margin-top: 0.3rem;
	color: var(--green);
	align-self: flex-end;

	&.error {
		color: var(--red);
	}
`;

export const Textarea = styled.textarea`
	width: 100%;
	border: 2px solid var(--grey);
	padding: 0.5rem;
	border-radius: 0.4rem;
	resize: none;

	:focus,
	:active {
		outline: none;
		transition: all 0.15s ease-in-out;
		border: 2px solid ${(props) => props.theme.colors.background};
	}

	@media only screen and (max-width: 360px) {
		height: 9rem;
	}
`;

export const ActionButtons = styled.article`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	gap: 2rem;
`;

export const CancelBtn = styled(Link)`
	cursor: pointer;
	width: fit-content;
	padding: 0.7rem;
	border-radius: 0.4rem;
	margin-top: 1.5rem;
	font-size: 1rem;
	color: var(--light-blue);
	background: transparent;
	border: 2px solid transparent;
	font-weight: 700;
	text-decoration: none;
	text-align: center;

	:hover,
	:active,
	:focus {
		transition: all 0.15s ease-in-out;
		color: var(--dark-blue);
	}

	@media only screen and (max-width: 360px) {
		margin-top: 1.2rem;
	}
`;

export const SubmitBtn = styled.button`
	cursor: pointer;
	width: fit-content;
	padding: 0.7rem 3rem;
	border-radius: 0.4rem;
	margin-top: 1.5rem;
	font-size: 1rem;
	color: ${(props) => props.theme.colors.color};
	background: ${(props) => props.theme.colors.background};
	border: 2px solid transparent;
	font-weight: 700;
	text-align: center;

	:hover,
	:active,
	:focus {
		transition: all 0.15s ease-in-out;
		color: ${(props) => props.theme.colors.background};
		background: ${(props) => props.theme.colors.color};
		border: 2px solid ${(props) => props.theme.colors.background};
	}

	@media only screen and (max-width: 360px) {
		margin-top: 1.2rem;
	}
`;

export const BackBtn = styled(Link)`
	display: block;
	cursor: pointer;
	color: var(--dark-grey);
	font-size: 1rem;
	margin-bottom: 1rem;
	text-decoration: none;

	:hover,
	:focus,
	:active {
		transition: all 0.15s ease-in-out;
		color: ${(props) => props.theme.colors.background};
	}
`;
