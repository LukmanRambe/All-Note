// Styling
import { useContext } from 'react';
import { Content, Text, Wrapper } from '../../../styles/EmptyNotes.styles';
import { LanguageContext } from '../../context/LanguageContext';

const EmptyNotes = () => {
	const { languageSets } = useContext(LanguageContext);

	return (
		<Wrapper>
			<Content>
				<Text>{languageSets.emptyNotes}</Text>
			</Content>
		</Wrapper>
	);
};

export default EmptyNotes;
