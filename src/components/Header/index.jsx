import React from 'react'

// Components
import CreateButton from '../CreateButton'
import SearchNotes from '../SearchNotes'

// Styling
import { Wrapper, Content } from './Header.styles'

const Header = ({
	isFormShown,
	setIsFormShown,
	searchQuery,
	handleSearchChange
}) => {
	return (
		<Wrapper>
			<Content>
				<CreateButton
					text='Create a New Note'
					isFormShown={isFormShown}
					setIsFormShown={setIsFormShown}
				/>
				<SearchNotes
					searchQuery={searchQuery}
					handleSearchChange={handleSearchChange}
				/>
			</Content>
		</Wrapper>
	)
}

export default Header
