import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	bottom: 3rem;
	right: 2rem;

	@media only screen and (max-width: 360px) {
		bottom: 1.7rem;
		right: 1.5rem;
	}

	@media only screen and (max-width: 320px) {
		bottom: 1.5rem;
		right: 1rem;
	}
`;

export const Content = styled.div`
	cursor: pointer;
	padding: 0.9rem 1.1rem;
	color: ${(props) => props.theme.colors.background};
	background: ${(props) => props.theme.colors.text};
	border: 2px solid transparent;
	border-radius: 50%;

	.icon {
		font-size: 1.2rem;
	}

	:hover,
	:active,
	:focus {
		transition: all 0.15s ease-in-out;
		color: ${(props) => props.theme.colors.text};
		background: ${(props) => props.theme.colors.background};
		border: 2px solid ${(props) => props.theme.colors.text};
	}
`;
