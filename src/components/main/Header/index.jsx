import PropTypes from 'prop-types';

import CreateButton from '../../artifacts/buttons/CreateButton';
import SearchNotes from '../SearchNotes';

import { useContext } from 'react';
import { Username, Wrapper } from '../../../styles/Header.styles';
import ToggleButtons from '../../Layout/auth/ToggleButtons';
import { AuthContext } from '../../context/AuthContext';
import { LanguageContext } from '../../context/LanguageContext';

const Header = ({ searchParams, setSearchParams, setIsLoading, handleSearch }) => {
	const { user } = useContext(AuthContext);
	const { languageSets } = useContext(LanguageContext);

	return (
		<Wrapper>
			<CreateButton />
			<SearchNotes
				searchParams={searchParams}
				setSearchParams={setSearchParams}
				setIsLoading={setIsLoading}
				handleSearch={handleSearch}
			/>

			<ToggleButtons className='main' />

			<Username>
				{languageSets.navbar.username}, {user?.name}!
			</Username>
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
