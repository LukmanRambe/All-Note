import styled from 'styled-components';

export const Wrapper = styled.article`
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 600px) {
		flex-direction: column-reverse;
		gap: 1rem;
	}
`;
