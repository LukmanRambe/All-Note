import styled from 'styled-components';

export const Button = styled.button`
	cursor: pointer;
	padding: 0.6rem 1.5rem;
	border-radius: 0.4rem;
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.05em;
	width: 100%;

	:hover,
	:focus,
	:active {
		outline: 0;
		transition: all 0.15s ease-in-out;
	}

	&.activate {
		color: ${(props) => props.theme.colors['activate-button-text']};
		background: ${(props) => props.theme.colors['activate-button-background']};
		border: 2px solid var(--green);

		:hover,
		:focus,
		:active {
			color: ${(props) => props.theme.colors['activate-button-text-hover']};
			background: ${(props) => props.theme.colors['activate-button-background-hover']};
			border: 2px solid var(--green);
		}
	}

	&.archive {
		color: ${(props) => props.theme.colors['archive-button-text']};
		background: ${(props) => props.theme.colors['archive-button-background']};
		border: 2px solid var(--yellow);

		:hover,
		:focus,
		:active {
			color: ${(props) => props.theme.colors['archive-button-text-hover']};
			background: ${(props) => props.theme.colors['archive-button-background-hover']};
			border: 2px solid var(--yellow);
		}
	}

	@media only screen and (max-width: 600px) {
		font-size: 0.8rem;
	}
`;
