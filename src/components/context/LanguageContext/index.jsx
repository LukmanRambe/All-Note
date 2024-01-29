import { createContext, useState } from 'react';
import { ENLang } from '../../../utils/lang/en';
import { IDLang } from '../../../utils/lang/id';

export const LanguageContext = createContext({
	languageSets: {},
	currentLanguage: 'en',
	setCurrentLanguage: () => '',
});

const LanguageContextProvider = ({ children }) => {
	const [currentLanguage, setCurrentLanguage] = useState('en'); // en | id

	const languageSets = currentLanguage === 'id' ? IDLang : ENLang;

	const value = {
		languageSets,
		currentLanguage,
		setCurrentLanguage,
	};

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageContextProvider;
