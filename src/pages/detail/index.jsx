import { useOutletContext, useParams } from 'react-router-dom';

import { faArrowLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ActionButton from '../../components/artifacts/buttons/ActionButton';
import DeleteButton from '../../components/artifacts/buttons/DeleteButton';
import NotFound from '../404';

import {
	ActionsButtons,
	BackBtn,
	Body,
	BodyWrapper,
	Content,
	EditButton,
	Header,
	Title,
	Wrapper,
} from '../../styles/DetailNote.styles';

const DetailNote = () => {
	const { id } = useParams();
	const { notes, setNoteId, setIsModalShown, changeArchiveStatus } = useOutletContext();

	const note = notes?.find((note) => note?.id === id);

	if (!note) {
		return <NotFound />;
	}

	return (
		<Wrapper>
			<Content>
				<Header>
					<BackBtn to={note?.archived ? '/archive' : '/'}>
						<FontAwesomeIcon icon={faArrowLeft} /> Back
					</BackBtn>

					<Title>{note?.title}</Title>
				</Header>

				<BodyWrapper>
					<Body>{note?.body}</Body>
				</BodyWrapper>

				<ActionsButtons>
					<EditButton to={`/edit/${id}`} title={`Edit Note - ${note?.title}`}>
						<FontAwesomeIcon icon={faPenToSquare} className='icon' />
					</EditButton>

					<ActionButton
						id={note?.id}
						archived={note?.archived}
						text={note?.archived ? 'Activate' : 'Archive'}
						changeArchiveStatus={changeArchiveStatus}
					/>

					<DeleteButton noteId={note?.id} text='Delete' setIsModalShown={setIsModalShown} setNoteId={setNoteId} />
				</ActionsButtons>
			</Content>
		</Wrapper>
	);
};

export default DetailNote;
