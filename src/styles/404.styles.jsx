import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 75dvh;
	text-align: center;

	@media only screen and (max-width: 600px) {
		margin: 0 1rem;
		width: fit-content;
	}
`;

export const Header = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0rem;
	margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
	font-size: 5rem;
	font-weight: 600;
	letter-spacing: 0.1rem;
`;

export const SubTitle = styled.h3`
	font-size: 2rem;
	font-weight: 600;
	letter-spacing: 0.01rem;
`;

export const Copywrite = styled.p`
	font-size: 1rem;
	font-weight: 400;
	letter-spacing: 0.01rem;
`;

export const BackToHome = styled(Link)`
	font-size: 1rem;
	font-size: 400;
	letter-spacing: 0.01rem;
	color: var(--white);
	background: var(--black);
	border: 2px solid transparent;
	text-decoration: none;
	outline: 0;
	border-radius: 0.4rem;
	padding: 0.6rem 1rem;
	margin-top: 1rem;

	:hover,
	:active,
	:focus {
		color: var(--black);
		background: var(--white);
		border: 2px solid var(--black);
		transition: all ease-in-out 0.15s;
	}
`;
