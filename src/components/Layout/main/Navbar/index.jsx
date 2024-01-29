import { useContext } from 'react';

import { AuthContext } from '../../../context/AuthContext';
import { LanguageContext } from '../../../context/LanguageContext';
import { ThemeContext } from '../../../context/ThemeContext';

import { faLanguage, faMoon, faRightFromBracket, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	ChangeLanguage,
	Container,
	Content,
	Logo,
	LogoutBtn,
	Text,
	ToggleTheme,
	Username,
	Wrapper,
} from '../../../../styles/Navbar.styles';

const Navbar = () => {
	const { logout, user } = useContext(AuthContext);
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
	const { languageSets, setCurrentLanguage } = useContext(LanguageContext);

	const handleToggleTheme = () => {
		setCurrentTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
	};

	const handleChangeLanguage = () => {
		setCurrentLanguage((prevState) => (prevState === 'id' ? 'en' : 'id'));
	};

	const handleLogout = () => {
		logout();
	};

	return (
		<Wrapper>
			<Content>
				<Container className='logo'>
					<Logo src='/assets/icons/notes.png' alt='Logo' />
					<Text to='/'>All Note</Text>
				</Container>

				<Container>
					<Username>
						{languageSets.navbar.username}, {user?.name}!
					</Username>

					<ToggleTheme type='button' onClick={handleToggleTheme} title={languageSets.navbar.title.toggleTheme}>
						{currentTheme === 'light' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
					</ToggleTheme>

					<ChangeLanguage type='button' onClick={handleChangeLanguage} title={languageSets.navbar.title.changeLanguage}>
						<FontAwesomeIcon icon={faLanguage} />
					</ChangeLanguage>

					<LogoutBtn type='button' onClick={handleLogout} title={languageSets.navbar.title.logout}>
						<FontAwesomeIcon icon={faRightFromBracket} />
					</LogoutBtn>
				</Container>
			</Content>
		</Wrapper>
	);
};

export default Navbar;
