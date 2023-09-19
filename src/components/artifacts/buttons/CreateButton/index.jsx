// Styling
import { Button } from './CreateButton.styles';

const CreateButton = ({ text, setIsModalShown }) => {
	const handleOpenModal = () => {
		setIsModalShown({ value: true, type: 'create' });
	};

	return (
		<Button type='button' onClick={handleOpenModal}>
			{text}
		</Button>
	);
};

export default CreateButton;
