// Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

// Styling
import { Wrapper, Content, Warn, Copywrite, ActionButtons, CancelButton, DeleteButton } from './DeleteNoteModal.styles';

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

export default DeleteNoteModal;
