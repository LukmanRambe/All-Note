import PropTypes from 'prop-types';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../../../styles/DeleteButton.styles';

const DeleteButton = ({ noteId, setIsModalShown, setNoteId }) => {
	const handleOpenModal = () => {
		setNoteId(noteId);
		setIsModalShown({ value: true, type: 'delete' });
	};

	return (
		<Button type='button' onClick={handleOpenModal} title='Delete Note'>
			<FontAwesomeIcon icon={faTrashAlt} className='icon' />
		</Button>
	);
};

DeleteButton.propTypes = {
	noteId: PropTypes.string,
	setIsModalShown: PropTypes.func,
	setNoteId: PropTypes.func,
};

export default DeleteButton;
