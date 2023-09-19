// Styling
import { Wrapper, Content, Option } from './Category.styles';

const Category = ({ category, categories, setCategory }) => {
	return (
		<Wrapper>
			<Content>
				{categories.map(({ id, archived, text }) => {
					return (
						<Option
							key={id}
							className={category.id === id && 'active'}
							onClick={() => setCategory({ id, archived, text })}>
							{text}
						</Option>
					);
				})}
			</Content>
		</Wrapper>
	);
};

export default Category;
