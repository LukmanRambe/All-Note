import PropTypes from 'prop-types';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Content, Option, Wrapper } from '../../../styles/Category.styles';

import { useContext } from 'react';
import { categories } from '../../../utils/data';
import { LanguageContext } from '../../context/LanguageContext';

const Category = ({ setCategory }) => {
	const { languageSets } = useContext(LanguageContext);
	const { pathname } = useLocation();
	const [searchParams] = useSearchParams();
	const search = searchParams.get('search');

	return (
		<Wrapper>
			<Content>
				{categories.map(({ id, path, archived, text }) => {
					return (
						<Option
							key={id}
							className={path === pathname.slice(1) && 'active'}
							to={
								archived
									? {
											pathname: '/archive',
											search: search ? `?search=${search}` : '',
									  }
									: {
											pathname: '/',
											search: search ? `?search=${search}` : '',
									  }
							}
							onClick={() => setCategory({ id, path, archived, text })}>
							{archived ? languageSets.category.archived : languageSets.category.active}
						</Option>
					);
				})}
			</Content>
		</Wrapper>
	);
};

Category.propTypes = {
	setCategory: PropTypes.func,
};

export default Category;
