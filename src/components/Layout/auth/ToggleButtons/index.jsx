import { useContext } from 'react';

import { LanguageContext } from '../../../context/LanguageContext';
import { ThemeContext } from '../../../context/ThemeContext';

import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeLanguage, ToggleTheme, Wrapper } from '../../../../styles/ToggleButtons.styles';

const ToggleButtons = () => {
	const { languageSets, setCurrentLanguage } = useContext(LanguageContext);
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

	const handleToggleTheme = () => {
		setCurrentTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
	};

	const handleChangeLanguage = () => {
		setCurrentLanguage((prevState) => (prevState === 'id' ? 'en' : 'id'));
	};

	return (
		<Wrapper>
			<ToggleTheme type='button' onClick={handleToggleTheme} title={languageSets.navbar.title.toggleTheme}>
				{currentTheme === 'light' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
			</ToggleTheme>

			<ChangeLanguage type='button' onClick={handleChangeLanguage} title={languageSets.navbar.title.changeLanguage}>
				<FontAwesomeIcon icon={faLanguage} />
			</ChangeLanguage>
		</Wrapper>
	);
};

export default ToggleButtons;
