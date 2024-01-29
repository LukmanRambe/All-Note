import PropTypes from 'prop-types';

import {
	Actions,
	CreatedAt,
	Note,
	NoteDetail,
	NoteDetailHeader,
	NoteText,
	NoteTitle,
} from '../../../styles/NoteCard.styles';

import { useContext } from 'react';
import { formatDate } from '../../../utils/formatDate';
import ActionButton from '../../artifacts/buttons/ActionButton';
import DeleteButton from '../../artifacts/buttons/DeleteButton';
import { LanguageContext } from '../../context/LanguageContext';

const NoteCard = ({ id, title, createdAt, body, archived, setNoteId, setIsModalShown }) => {
	const { currentLanguage } = useContext(LanguageContext);

	return (
		<Note key={id} id={id}>
			<NoteDetail>
				<NoteDetailHeader>
					<div>
						<NoteTitle to={`/detail/${id}`} title={`Note Detail - ${title}`}>
							{title}
						</NoteTitle>
						<CreatedAt>{formatDate(createdAt, currentLanguage)}</CreatedAt>
					</div>
				</NoteDetailHeader>

				<NoteText>{body}</NoteText>
			</NoteDetail>

			<Actions>
				<ActionButton id={id} archived={archived} text={archived ? 'Activate' : 'Archive'} />

				<DeleteButton noteId={id} text='Delete' setIsModalShown={setIsModalShown} setNoteId={setNoteId} />
			</Actions>
		</Note>
	);
};

NoteCard.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	createdAt: PropTypes.string,
	body: PropTypes.string,
	archived: PropTypes.bool,
	setNoteId: PropTypes.func,
	setIsModalShown: PropTypes.func,
};

export default NoteCard;
