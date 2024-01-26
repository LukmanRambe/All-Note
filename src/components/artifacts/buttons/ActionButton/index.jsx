import PropTypes from 'prop-types';

import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../../../styles/ActionButton.styles';

const ActionButton = ({ id, archived, changeArchiveStatus }) => {
	return (
		<Button
			type='button'
			className={archived ? 'activate' : 'archive'}
			onClick={(e) => changeArchiveStatus(e, id)}
			title={archived ? 'Activate Note' : 'Archive Note'}>
			<FontAwesomeIcon icon={archived ? faBookmarkRegular : faBookmarkSolid} className='icon' />
		</Button>
	);
};

ActionButton.propTypes = {
	id: PropTypes.string,
	archived: PropTypes.bool,
	changeArchiveStatus: PropTypes.func,
};

export default ActionButton;
