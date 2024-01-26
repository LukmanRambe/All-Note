import styled from 'styled-components';

export const Wrapper = styled.div`
	top: 0;
	left: 0;
	position: fixed;
	height: 100%;
	width: 100%;
`;

export const Content = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: absolute;
	background: rgba(0, 0, 0, 0.4);
`;

export const Warn = styled.div`
	background: var(--white);
	border-radius: 0.4rem;
	padding: 1.5rem 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	width: 30rem;

	@media only screen and (max-width: 768px) {
		padding: 1.5rem 1rem;
		width: 22rem;
	}

	@media only screen and (max-width: 375px) {
		padding: 1.5rem 1rem;
		width: calc(100% - 2rem);
	}
`;

export const Copywrite = styled.article`
	text-align: center;

	.icon {
		color: #f8bb86;
		border: 5px solid #f8bb86;
		border-radius: 100%;
		padding: 1.6rem 2.5rem;
		font-size: 2.25rem;
		font-weight: 700;
	}

	div {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		h1 {
			color: #595959;
			font-weight: 700;
			font-size: 1.5rem;
		}

		p {
			color: #545454;
		}
	}
`;

export const ActionButtons = styled.article`
	display: flex;
	justify-content: space-between;
`;

export const CancelButton = styled.button`
	cursor: pointer;
	padding: 0.6rem 2rem;
	color: var(--white);
	border-radius: 0.4rem;
	color: var(--light-blue);
	background: transparent;
	font-size: 0.9rem;
	font-weight: 700;
	letter-spacing: 0.05em;
	border: none;
	width: 100%;

	:hover,
	:focus,
	:active {
		outline: 0;
		transition: all 0.15s ease-in-out;
		color: var(--dark-blue);
	}

	@media only screen and (max-width: 600px) {
		font-size: 0.8rem;
	}
`;

export const DeleteButton = styled.button`
	cursor: pointer;
	padding: 0.6rem 2rem;
	color: var(--white);
	border-radius: 0.4rem;
	color: var(--white);
	background: var(--red);
	font-size: 0.9rem;
	font-weight: 700;
	letter-spacing: 0.05em;
	border: 2px solid transparent;
	width: 100%;

	:hover,
	:focus,
	:active {
		outline: 0;
		transition: all 0.15s ease-in-out;
		color: var(--red);
		background: var(--white);
		border: 2px solid var(--red);
	}

	@media only screen and (max-width: 600px) {
		font-size: 0.8rem;
	}
`;
