import styled from 'styled-components';

export const Wrapper = styled.article`
	padding: 0;
	margin: 0;
`;

export const Content = styled.form`
	width: 20rem;
	display: flex;
	justify-content: space-between;
	border: 2px solid var(--grey);
	align-items: center;
	border-radius: 0.4rem;

	:focus-within {
		outline: 0;
		transition: all 0.15s ease-in-out;
		border: 2px solid var(--black);

		.search-icon {
			color: var(--black);
		}
	}

	@media only screen and (max-width: 600px) {
		width: 100%;
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: 0.5rem;
	margin: 0;
	border: 2px solid transparent;
	border-radius: inherit;

	:focus,
	:active {
		outline: 0;
		border: 2px solid transparent;
	}
`;

export const SearchIcon = styled.button`
	cursor: pointer;
	color: var(--grey);
	transform: translateX(-1px);
	background: transparent;
	font-size: 1.05rem;
	padding: 0.5rem;
	border: 2px solid transparent;
	transform: translateX(-2px);

	:hover,
	:focus,
	:active {
		outline: 0;
	}
`;
