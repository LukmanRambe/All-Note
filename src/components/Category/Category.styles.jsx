import styled from 'styled-components';

export const Wrapper = styled.article`
	width: 100%;
`;

export const Content = styled.article`
	display: flex;
	justify-content: flex-end;
	gap: 0.5rem;

	@media only screen and (max-width: 600px) {
		justify-content: center;
	}
`;

export const Option = styled.article`
	padding: 0.5rem 1rem;
	font-size: 0.9rem;
	border: 2px solid transparent;
	border-radius: 0.5rem;
	color: var(--black);
	font-weight: 700;
	text-align: center;

	:hover {
		cursor: pointer;
		color: var(--white);
		background: var(--dark-grey);
	}

	&.active {
		color: var(--white);
		background: var(--black);
	}

	@media only screen and (max-width: 600px) {
		width: 100%;
	}

	@media only screen and (max-width: 320px) {
		padding: 0.5rem 0.4rem;
	}
`;
