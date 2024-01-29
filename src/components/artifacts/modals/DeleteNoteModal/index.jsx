import { faExclamation, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useLocation, useNavigate } from 'react-router-dom';
import {
	ActionButtons,
	CancelButton,
	Content,
	Copywrite,
	DeleteButton,
	Warn,
	Wrapper,
} from '../../../../styles/DeleteNoteModal.styles';
import { deleteNote } from '../../../../utils/data';

const DeleteNoteModal = ({ noteId, setNoteId, searchParams, setIsModalShown }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const handleCloseModal = () => {
		setNoteId('');
		setIsModalShown({ value: false, type: '' });
	};

	const handleDeleteNote = () => {
		deleteNote(noteId).then((response) => {
			if (!response.error) {
				handleCloseModal();

				if (!['/', '/archive'].includes(pathname) || searchParams.get('search')?.length === 0) {
					return navigate('/');
				}

				navigate(0);
			}
		});
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

						<DeleteButton onClick={handleDeleteNote}>
							<FontAwesomeIcon icon={faTrashAlt} className='icon' />
						</DeleteButton>
					</ActionButtons>
				</Warn>
			</Content>
		</Wrapper>
	);
};

export default DeleteNoteModal;
