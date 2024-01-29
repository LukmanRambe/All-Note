import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext(null);

export const Themes = {
	Light: 'light',
	Dark: 'dark',
};

const ThemeContextProvider = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState(Themes.Light);

	const value = {
		currentTheme,
		setCurrentTheme,
	};

	const darkTheme = {
		colors: {
			text: '#fefefe',
			background: '#010101',

			'navbar-text': '#fefefe',
			'navbar-background': '#1e1e1e',
			'navbar-icon-background': '#4f4f4f',
			'navbar-icon-background-hover': '#363636',

			'input-text': '#fefefe',
			'input-background': '#1e1e1e',
			'input-border': '#363636',
			'input-border-active': '#4f4f4f',

			'card-text': '#fefefe',
			'card-background': '#1e1e1e',

			'button-text': '#fefefe',
			'button-text-hover': '#fefefe',
			'button-background': '#1e1e1e',
			'button-background-hover': '#363636',

			'category-text': '#fefefe',
			'category-text-hover': '#fefefe',
			'category-text-active': '#fefefe',
			'category-background': '#363636',
			'category-background-hover': '#4f4f4f',

			'delete-button-text': '#eb4c4c',
			'delete-button-text-hover': '#fefefe',
			'delete-button-background': '#1e1e1e',
			'delete-button-background-hover': '#eb4c4c',

			'archive-button-text': '#deb330',
			'archive-button-text-hover': '#fefefe',
			'archive-button-background': '#1e1e1e',
			'archive-button-background-hover': '#deb330',

			'activate-button-text': '#30de30',
			'activate-button-text-hover': '#fefefe',
			'activate-button-background': '#1e1e1e',
			'activate-button-background-hover': '#30de30',
		},
	};

	const lightTheme = {
		colors: {
			text: '#010101',
			background: '#fefefe',

			'navbar-text': '#fefefe',
			'navbar-background': '#010101',
			'navbar-icon-background': '#4f4f4f',
			'navbar-icon-background-hover': '#363636',

			'input-text': '#010101',
			'input-background': '#fefefe',
			'input-border': '#c6c7ce',
			'input-border-active': '#010101',

			'card-text': '#010101',
			'card-background': '#fefefe',

			'button-text': '#fefefe',
			'button-text-hover': '#010101',
			'button-background': '#010101',
			'button-background-hover': '#fefefe',

			'category-text': '#010101',
			'category-text-hover': '#fefefe',
			'category-text-active': '#fefefe',
			'category-background': '#010101',
			'category-background-hover': '#626362',

			'delete-button-text': '#fefefe',
			'delete-button-text-hover': '#eb4c4c',
			'delete-button-background': '#eb4c4c',
			'delete-button-background-hover': '#fefefe',

			'archive-button-text': '#fefefe',
			'archive-button-text-hover': '#deb330',
			'archive-button-background': '#deb330',
			'archive-button-background-hover': '#fefefe',

			'activate-button-text': '#fefefe',
			'activate-button-text-hover': '#30de30',
			'activate-button-background': '#30de30',
			'activate-button-background-hover': '#fefefe',
		},
	};

	return (
		<ThemeContext.Provider value={value}>
			<ThemeProvider theme={currentTheme === Themes.Light ? lightTheme : darkTheme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
