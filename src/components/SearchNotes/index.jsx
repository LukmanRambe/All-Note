import React from 'react'

// Styling
import { Wrapper, Input, Content, SearchIcon } from './SearchNotes.stlyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchNote = ({ searchQuery, handleSearchChange }) => {
	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<Wrapper>
			<Content onSubmit={handleSubmit}>
				<Input
					type='text'
					placeholder='Search Note by Title'
					value={searchQuery}
					onChange={handleSearchChange}
				/>
				<SearchIcon type='submit'>
					<FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
				</SearchIcon>
			</Content>
		</Wrapper>
	)
}

export default SearchNote
