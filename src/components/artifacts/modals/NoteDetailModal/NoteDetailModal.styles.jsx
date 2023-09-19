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

export const Note = styled.div`
	background: var(--white);
	border-radius: 0.4rem;
	padding: 2rem;
	min-width: 30rem;
	max-width: 35rem;
	min-height: 30rem;
	max-height: fit-content;
	overflow: hidden;

	@media only screen and (max-width: 600px) {
		min-width: unset;
		max-width: calc(100% - 2rem);
		min-height: unset;
		max-height: calc(100% - 5rem);
	}

	@media only screen and (max-width: 375px) {
		padding: 1rem;
		min-width: unset;
		max-width: calc(100% - 2rem);
		min-height: unset;
		max-height: calc(100% - 3rem);
	}
`;

export const NoteDetail = styled.article`
	width: 100%;
	height: 100%;
`;

export const NoteDetailHeader = styled.div`
	display: flex;
	align-items: start;
	justify-content: space-between;
	gap: 1rem;
`;

export const CreatedAt = styled.span`
	color: var(--grey);
	font-size: 0.8rem;
`;

export const NoteTitle = styled.h4`
	font-size: 1.4rem;
	word-break: break-all;
	margin-bottom: 0.4rem;
	word-wrap: break-word;
	font-weight: 700;
	text-transform: capitalize;
`;

export const NoteText = styled.article`
	font-size: 1rem;
	font-weight: 400;
	letter-spacing: 0.01em;
	margin: 1rem 0;
	word-wrap: break-word;
	overflow: auto;

	p {
		height: fit-content;

		@media only screen and (max-width: 768px) {
			height: 18rem;
		}
	}
`;

export const CloseBtn = styled.span`
	cursor: pointer;
	color: var(--grey);
	top: 0;
	right: 0;
	font-size: 1.2rem;

	:hover,
	:focus,
	:active {
		transition: all 0.15s ease-in-out;
		color: var(--black);
	}
`;
