// Styling
import { Wrapper, Content, Text } from './EmptyNotes.styles';

const EmptyNotes = ({ text }) => {
	return (
		<Wrapper>
			<Content>
				<Text>{text}</Text>
			</Content>
		</Wrapper>
	);
};

export default EmptyNotes;
