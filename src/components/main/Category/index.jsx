import PropTypes from 'prop-types';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Content, Option, Wrapper } from '../../../styles/Category.styles';

import { categories } from '../../../utils/data';

const Category = ({ setCategory }) => {
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
							{text}
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
