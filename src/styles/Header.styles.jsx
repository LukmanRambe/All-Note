import styled from 'styled-components';

export const Wrapper = styled.article`
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 600px) {
		flex-direction: column-reverse;
		gap: 1rem;
	}
`;

export const Username = styled.span`
	display: none;
	color: ${(props) => props.theme.colors.text};

	@media only screen and (max-width: 600px) {
		width: 100%;
		display: block;
		font-size: 1.5rem;
		font-weight: 600;
		margin: -0.5rem 0;
		letter-spacing: 0.1rem;
	}
`;
