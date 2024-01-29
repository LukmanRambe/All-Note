import PropTypes from 'prop-types';

import CreateButton from '../../artifacts/buttons/CreateButton';
import SearchNotes from '../SearchNotes';

import { Wrapper } from '../../../styles/Header.styles';

const Header = ({ searchParams, setSearchParams, setIsLoading, handleSearch }) => {
	return (
		<Wrapper>
			<CreateButton />
			<SearchNotes
				searchParams={searchParams}
				setSearchParams={setSearchParams}
				setIsLoading={setIsLoading}
				handleSearch={handleSearch}
			/>
		</Wrapper>
	);
};

Header.propTypes = {
	searchParams: PropTypes.object,
	setSearchParams: PropTypes.func,
	setIsLoading: PropTypes.func,
	handleSearch: PropTypes.func,
};

export default Header;
