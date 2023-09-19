// Components
import Header from './Header';
import Navbar from './Navbar';

// Global Style
import GlobalStyle from '../../GlobalStyles';

const Layout = ({ text, setIsModalShown, handleSearchChange, children }) => {
	return (
		<>
			<Navbar text={text} />
			<Header setIsModalShown={setIsModalShown} handleSearchChange={handleSearchChange} />
			<main>{children}</main>
			<GlobalStyle />
		</>
	);
};

export default Layout;
