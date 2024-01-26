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
		color: var(--black);
	}
`;

export const BodyWrapper = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 1rem;
`;

export const Body = styled.p`
	width: 100%;
	max-width: 50rem;
	line-height: 1.5rem;
	letter-spacing: 0.01rem;
`;

export const ActionsButtons = styled.div`
	display: flex;
	gap: 1rem;
	position: fixed;
	width: fit-content;
	bottom: 2rem;
	right: 2rem;
`;

export const EditButton = styled(Link)`
	cursor: pointer;
	padding: 0.6rem 1.5rem;
	color: var(--white);
	background: var(--light-blue);
	border-radius: 0.4rem;
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.05em;
	border: 2px solid transparent;
	width: 100%;
	text-decoration: none;

	:hover,
	:focus,
	:active {
		outline: 0;
		transition: all 0.15s ease-in-out;
		color: var(--dark-blue);
		background: var(--white);
		border: 2px solid var(--dark-blue);
	}

	@media only screen and (max-width: 600px) {
		font-size: 0.8rem;
	}
`;
