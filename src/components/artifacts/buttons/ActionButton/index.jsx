import PropTypes from 'prop-types';

import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../styles/ActionButton.styles';
import { archiveNote, unarchiveNote } from '../../../../utils/data';
import { LanguageContext } from '../../../context/LanguageContext';

const ActionButton = ({ id, archived }) => {
	const { languageSets } = useContext(LanguageContext);
	const navigate = useNavigate();

	const handleArchiveStatus = () => {
		if (archived) {
			unarchiveNote(id).then((response) => {
				if (!response.error) {
					navigate(0);
				}
			});
		} else {
			archiveNote(id).then((response) => {
				if (!response.error) {
					navigate(0);
				}
			});
		}
	};

	return (
		<Button
			type='button'
			className={archived ? 'activate' : 'archive'}
			onClick={handleArchiveStatus}
			title={archived ? languageSets.buttons.title.activate : languageSets.buttons.title.archive}>
			<FontAwesomeIcon icon={archived ? faBookmarkRegular : faBookmarkSolid} className='icon' />
		</Button>
	);
};

ActionButton.propTypes = {
	id: PropTypes.string,
	archived: PropTypes.bool,
};

export default ActionButton;
