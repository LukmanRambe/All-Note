import { useContext, useEffect, useState } from 'react';

import { useOutletContext, useParams } from 'react-router-dom';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ActionButton from '../../components/artifacts/buttons/ActionButton';
import DeleteButton from '../../components/artifacts/buttons/DeleteButton';
import NotFound from '../404';

import { LanguageContext } from '../../components/context/LanguageContext';
import {
	ActionsButtons,
	BackBtn,
	Body,
	BodyWrapper,
	Content,
	Header,
	Title,
	Wrapper,
} from '../../styles/DetailNote.styles';
import { getNote } from '../../utils/data';

const DetailNote = () => {
	const { id } = useParams();
	const { setNoteId, setIsModalShown, changeArchiveStatus } = useOutletContext();
	const { languageSets } = useContext(LanguageContext);

	const [note, setNote] = useState({});

	useEffect(() => {
		getNote(id).then((response) => {
			setNote(response?.data);
		});
	}, [id]);

	if (!note) {
		return <NotFound />;
	}

	return (
		<Wrapper>
			<Content>
				<Header>
					<BackBtn to={note?.archived ? '/archive' : '/'}>
						<FontAwesomeIcon icon={faArrowLeft} /> {languageSets.buttons.title.back}
					</BackBtn>

					<Title>{note?.title}</Title>
				</Header>

				<BodyWrapper>
					<Body>{note?.body}</Body>
				</BodyWrapper>

				<ActionsButtons>
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
