import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { AuthContext } from '../components/context/AuthContext';
import { BackToHome, Copywrite, Header, SubTitle, Title, Wrapper } from '../styles/404.styles';

const NotFound = () => {
	const { isAuth } = useContext(AuthContext);

	return (
		<Wrapper>
			<Header>
				<Title>404</Title>
				<SubTitle>Page Not Found</SubTitle>
			</Header>

			<Copywrite>Sorry, the page you are looking for could not be found.</Copywrite>

			<BackToHome to={isAuth ? '/' : '/auth/login'}>
				<FontAwesomeIcon icon={faArrowLeft} /> Back To {isAuth ? 'Home' : 'Login'}
			</BackToHome>
		</Wrapper>
	);
};

export default NotFound;
