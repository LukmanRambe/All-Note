import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
	padding: 1.5rem 5rem;
	color: var(--white);
	background: var(--black);

	@media only screen and (max-width: 1024px) {
		padding: 1.5rem 3rem;
	}

	@media only screen and (max-width: 600px) {
		padding: 1.5rem 1rem;
	}
`;

export const Content = styled.article`
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 0.5rem;
`;

export const Logo = styled.img`
	width: 100%;
	max-width: 2rem;
	margin-top: 0.2rem;
`;

export const Text = styled(Link)`
	color: var(--white);
	font-weight: 600;
	font-size: 2rem;
	text-decoration: none;

	@media only screen and (max-width: 600px) {
		font-size: 1.7rem;
	}
`;
