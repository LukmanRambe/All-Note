import { Content, Logo, Text, Wrapper } from '../../../styles/Navbar.styles';

const Navbar = () => {
	return (
		<Wrapper>
			<Content>
				<Logo src='/assets/icons/notes.png' alt='Logo' />
				<Text to='/'>All Note</Text>
			</Content>
		</Wrapper>
	);
};

export default Navbar;
