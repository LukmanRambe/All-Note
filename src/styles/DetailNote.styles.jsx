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
	word-break: break-all;
	color: ${(props) => props.theme.colors.text};
	text-transform: capitalize;
	width: 100%;
	max-width: 30rem;

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
		color: var(--grey);
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
	color: ${(props) => props.theme.colors.text};
	word-break: break-all;
`;

export const ActionsButtons = styled.div`
	display: flex;
	gap: 1rem;
	position: fixed;
	width: fit-content;
	bottom: 2rem;
	right: 2rem;
`;
