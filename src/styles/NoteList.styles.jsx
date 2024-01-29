import styled from 'styled-components';

export const Wrapper = styled.section`
	padding: 1.5rem 5rem;

	@media only screen and (max-width: 1024px) {
		padding: 1.5rem 3rem;
	}

	@media only screen and (max-width: 600px) {
		padding: 1.5rem 1rem;
	}
`;

export const Content = styled.article`
	width: 100%;
`;

export const NotesListHeader = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1.5rem;

	@media only screen and (max-width: 600px) {
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1rem;
	}
`;

export const Title = styled.h2`
	margin-top: 2rem;
	font-size: 1.7rem;
	width: 100%;
	color: ${(props) => props.theme.colors.text};

	@media only screen and (max-width: 600px) {
		margin-top: 0rem;
		font-size: 1.3rem;
	}
`;

export const AllNotes = styled.article`
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(4, minmax(250px, 1fr));

	@media only screen and (max-width: 1024px) {
		grid-template-columns: repeat(2, minmax(250px, 1fr));
	}

	@media only screen and (max-width: 600px) {
		grid-template-columns: repeat(1, minmax(100%, 1fr));
		gap: 1.5rem;
	}
`;

export const Loader = styled.div`
	display: flex;
	justify-content: center;
	padding: 1rem 0;

	.loader {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		position: relative;
		animation: rotate 0.8s linear infinite;
	}

	.loader::before {
		content: '';
		box-sizing: border-box;
		position: absolute;
		inset: 0px;
		border-radius: 50%;
		border: 5px solid ${(props) => props.theme.colors.background};
		animation: prixClipFix 1.2s linear infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes prixClipFix {
		0% {
			clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
		}
		25% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
		}
		50% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
		}
		75% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
		}
		100% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
		}
	}
`;
