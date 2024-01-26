import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BackToHome, Copywrite, Header, SubTitle, Title, Wrapper } from '../styles/404.styles';

const NotFound = () => {
	return (
		<Wrapper>
			<Header>
				<Title>404</Title>
				<SubTitle>Page Not Found</SubTitle>
			</Header>

			<Copywrite>Sorry, the page you are looking for could not be found.</Copywrite>

			<BackToHome to='/'>
				<FontAwesomeIcon icon={faArrowLeft} /> Back To Home
			</BackToHome>
		</Wrapper>
	);
};

export default NotFound;
