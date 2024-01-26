import PropTypes from 'prop-types';

import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	ActionButtons,
	CancelButton,
	Content,
	Copywrite,
	DeleteButton,
	Warn,
	Wrapper,
} from '../../../../styles/DeleteNoteModal.styles';

const DeleteNoteModal = ({ noteId, setNoteId, setIsModalShown, deleteNote }) => {
	const handleCloseModal = () => {
		setNoteId('');
		setIsModalShown({ value: false, type: '' });
	};

	const handleDeleteNote = (e) => {
		deleteNote(e, noteId);
		handleCloseModal();
	};

	return (
		<Wrapper onClick={handleCloseModal}>
			<Content>
				<Warn onClick={(e) => e.stopPropagation()}>
					<Copywrite>
						<FontAwesomeIcon icon={faExclamation} className='icon' />

						<div>
							<h1>Are you sure?</h1>
							<p>You won't be able to revert this!</p>
						</div>
					</Copywrite>

					<ActionButtons>
						<CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
						<DeleteButton onClick={handleDeleteNote}>Delete</DeleteButton>
					</ActionButtons>
				</Warn>
			</Content>
		</Wrapper>
	);
};

DeleteNoteModal.propTypes = {
	noteId: PropTypes.string,
	setNoteId: PropTypes.func,
	setIsModalShown: PropTypes.func,
	deleteNote: PropTypes.func,
};

export default DeleteNoteModal;
