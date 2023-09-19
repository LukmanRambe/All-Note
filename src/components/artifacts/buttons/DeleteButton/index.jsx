// Styling
import { Button } from './DeleteButton.styles';

const DeleteButton = ({ noteId, text, setIsModalShown, setNoteId }) => {
	const handleOpenModal = () => {
		setNoteId(noteId);
		setIsModalShown({ value: true, type: 'delete' });
	};

	return (
		<Button type='button' onClick={handleOpenModal}>
			{text}
		</Button>
	);
};

export default DeleteButton;
