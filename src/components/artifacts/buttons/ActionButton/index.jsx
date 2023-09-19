// Styling
import { Button } from './ActionButton.styles';

const ActionButton = ({ text, id, archived, changeArchiveStatus }) => {
	return (
		<Button type='button' className={archived ? 'activate' : 'archive'} onClick={(e) => changeArchiveStatus(e, id)}>
			{text}
		</Button>
	);
};

export default ActionButton;
