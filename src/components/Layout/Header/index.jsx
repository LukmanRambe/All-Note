import React from 'react';

// Components
import CreateButton from '../../artifacts/buttons/CreateButton';
import SearchNotes from '../../SearchNotes';

// Styling
import { Wrapper, Content } from './Header.styles';

const Header = ({ setIsModalShown, searchQuery, handleSearchChange }) => {
	return (
		<Wrapper>
			<Content>
				<CreateButton text='Create a New Note' setIsModalShown={setIsModalShown} />
				<SearchNotes searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
			</Content>
		</Wrapper>
	);
};

export default Header;
