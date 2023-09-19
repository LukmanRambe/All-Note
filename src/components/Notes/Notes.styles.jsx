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
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;

	@media only screen and (max-width: 600px) {
		flex-direction: column-reverse;
		gap: 1rem;
		margin-bottom: 1rem;
	}
`;

export const Title = styled.h2`
	font-size: 1.7rem;
	width: 100%;

	@media only screen and (max-width: 600px) {
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

export const Note = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1.25rem;
	height: 22rem;
	border: 2px solid black;
	border-radius: 0.4rem;
`;

export const NoteDetail = styled.article`
	margin-bottom: 1rem;
	overflow: hidden;
`;

export const NoteDetailHeader = styled.div`
	display: flex;
	align-items: start;
	justify-content: space-between;
	overflow: hidden;

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 80%;
		height: 4.5rem;
	}
`;

export const DetailButton = styled.button`
	cursor: pointer;
	border: none;
	background: transparent;

	.icon {
		font-size: 0.8rem;
		color: var(--white);
		background: var(--black);
		border: 2px solid transparent;
		padding: 0.25rem 0.5rem;
		border-radius: 100%;

		:hover,
		:active,
		:focus {
			color: var(--black);
			background: var(--white);
			border: 2px solid var(--black);
			transition: all 0.15s ease-in-out;
		}
	}
`;

export const CreatedAt = styled.span`
	color: var(--grey);
	font-size: 0.8rem;
`;

export const NoteTitle = styled.h4`
	font-size: 1.4rem;
	margin-bottom: 0.4rem;
	word-wrap: break-word;
	font-weight: 700;
	text-transform: capitalize;
	display: -webkit-box;
	width: 100%;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

export const NoteText = styled.p`
	font-size: 1rem;
	font-weight: 400;
	letter-spacing: 0.01em;
	margin-top: 1rem;
	word-wrap: break-word;
	display: -webkit-box;
	width: 100%;
	overflow: hidden;
	-webkit-line-clamp: 8;
	-webkit-box-orient: vertical;
`;

export const Actions = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: space-between;
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
		border: 5px solid var(--black);
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
