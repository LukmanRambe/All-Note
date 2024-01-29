import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Note = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1.25rem;
	height: 22rem;
	border: 2px solid black;
	border-radius: 0.7rem;
	background: ${(props) => props.theme.colors['card-background']};
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

export const CreatedAt = styled.span`
	color: var(--grey);
	font-size: 0.8rem;
`;

export const NoteTitle = styled(Link)`
	color: ${(props) => props.theme.colors['card-text']};
	font-size: 1.4rem;
	word-break: break-all;
	font-weight: 700;
	text-transform: capitalize;
	margin-bottom: 0.5rem;
	display: -webkit-box;
	line-height: 1.5rem;
	letter-spacing: 0.04rem;
	width: fit-content;
	overflow: hidden;
	text-decoration: underline;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	:hover {
		color: ${(props) => props.theme.colors['card-text']};
		transition: all ease-in-out 0.15s;
	}
`;

export const NoteText = styled.p`
	color: ${(props) => props.theme.colors['card-text']};
	font-size: 1rem;
	font-weight: 400;
	margin-top: 1rem;
	word-break: break-all;
	line-height: 1.25rem;
	letter-spacing: 0.04rem;
	display: -webkit-box;
	width: 100%;
	overflow: hidden;
	-webkit-line-clamp: 8;
	-webkit-box-orient: vertical;
`;

export const Actions = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: space-evenly;
`;
