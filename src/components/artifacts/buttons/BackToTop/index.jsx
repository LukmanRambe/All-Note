import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Content, Wrapper } from '../../../../styles/BackToTop.styles';

const BackToTop = () => {
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Wrapper>
			<Content onClick={handleClick}>
				<FontAwesomeIcon icon={faArrowUp} className='icon' />
			</Content>
		</Wrapper>
	);
};

export default BackToTop;
