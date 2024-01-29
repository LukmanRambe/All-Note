import styled from 'styled-components';

export const Wrapper = styled.article`
	padding: 0;
	margin: 0;
`;

export const Content = styled.form`
	width: 20rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 2px solid ${(props) => props.theme.colors['input-border']};
	background: ${(props) => props.theme.colors['input-background']};
	border-radius: 0.4rem;

	:focus-within {
		outline: none;
		transition: all 0.15s ease-in-out;
		border: 2px solid ${(props) => props.theme.colors['input-border-active']};

		.search-icon {
			color: ${(props) => props.theme.colors['input-border-active']};
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
	color: ${(props) => props.theme.colors['input-text']};
	background: ${(props) => props.theme.colors['input-background']};

	:focus,
	:active {
		outline: 0;
		border: 2px solid transparent;
	}
`;

export const SearchIcon = styled.button`
	cursor: pointer;
	color: ${(props) => props.theme.colors['input-border']};
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
