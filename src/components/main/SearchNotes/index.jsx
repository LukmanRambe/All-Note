import { useEffect } from 'react';

import PropTypes from 'prop-types';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Content, Input, SearchIcon, Wrapper } from '../../../styles/SearchNotes.stlyles';

import { useDebounce } from '../../../hooks/useDebounce';

const SearchNotes = ({ searchParams, setSearchParams, setIsLoading, handleSearch }) => {
	const title = searchParams.get('search');
	const debounce = useDebounce(title, 250);

	const handleSearchChange = (e) => {
		const query = e.target.value.toLowerCase();
		setIsLoading(true);

		if (!query) {
			setSearchParams();
			setIsLoading(false);

			return;
		}

		setSearchParams({ search: query });
		setIsLoading(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		handleSearch(debounce);
	}, [debounce, handleSearch]);

	return (
		<Wrapper>
			<Content onSubmit={handleSubmit}>
				<Input
					type='search'
					aria-label='search'
					placeholder='Search Note by Title'
					value={title || ''}
					onChange={handleSearchChange}
				/>

				<SearchIcon type='submit' className='search-icon'>
					<FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
				</SearchIcon>
			</Content>
		</Wrapper>
	);
};

SearchNotes.propTypes = {
	searchParams: PropTypes.object,
	setSearchParams: PropTypes.func,
	setIsLoading: PropTypes.func,
	handleSearch: PropTypes.func,
};

export default SearchNotes;
