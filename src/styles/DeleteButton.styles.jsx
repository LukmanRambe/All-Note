import styled from 'styled-components';

export const Button = styled.button`
	cursor: pointer;
	padding: 0.6rem 1.5rem;
	color: ${(props) => props.theme.colors['delete-button-text']};
	background: ${(props) => props.theme.colors['delete-button-background']};
	border-radius: 0.4rem;
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.05em;
	border: 2px solid var(--red);
	width: 100%;

	:hover,
	:focus,
	:active {
		outline: 0;
		transition: all 0.15s ease-in-out;
		color: ${(props) => props.theme.colors['delete-button-text-hover']};
		background: ${(props) => props.theme.colors['delete-button-background-hover']};
		border: 2px solid var(--red);
	}

	@media only screen and (max-width: 600px) {
		font-size: 0.8rem;
	}
`;
