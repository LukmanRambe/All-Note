import styled from 'styled-components';

export const Wrapper = styled.header`
	padding: 1.5rem 5rem;

	@media only screen and (max-width: 1024px) {
		padding: 1.5rem 3rem;
	}

	@media only screen and (max-width: 600px) {
		padding: 1.5rem 1rem;
	}
`;

export const Content = styled.article`
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 600px) {
		flex-direction: column-reverse;
		gap: 1rem;
	}
`;
