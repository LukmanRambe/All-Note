import styled from 'styled-components'

export const Button = styled.button`
	cursor: pointer;
	padding: 0.5rem 1.5rem;
	color: var(--white);
	background: var(--black);
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.01em;
	border-radius: 0.4rem;
	border: 2px solid transparent;

	:hover,
	:active,
	:focus {
		transition: all 0.15s ease-in-out;
		color: var(--black);
		background: var(--white);
		border: 2px solid var(--black);
	}
`
