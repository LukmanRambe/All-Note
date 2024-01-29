import { useContext, useState } from 'react';

import { AuthContext } from '../../../components/context/AuthContext';

import { LanguageContext } from '../../../components/context/LanguageContext';
import {
	Content,
	Form,
	Input,
	InputGroup,
	Label,
	LinkToPage,
	LinkWrapper,
	SubmitBtn,
	Title,
	Wrapper,
} from '../../../styles/Auth.styles';

const Login = () => {
	const { login } = useContext(AuthContext);
	const { languageSets } = useContext(LanguageContext);

	const [formValues, setFormValues] = useState({
		email: '',
		password: '',
	});

	const handleInputChange = (e) => {
		setFormValues((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (formValues.email !== '' && formValues.password !== '') {
			login({ email: formValues.email, password: formValues.password });
		}
	};

	return (
		<Wrapper>
			<Content>
				<Title>{languageSets.auth.login.title}</Title>

				<Form onSubmit={handleSubmit}>
					<InputGroup>
						<Label htmlFor='email'>{languageSets.auth.login.inputs.email}</Label>
						<Input
							id='email'
							name='email'
							type='email'
							aria-label='email'
							onChange={handleInputChange}
							autoComplete='on'
						/>
					</InputGroup>

					<InputGroup>
						<Label htmlFor='password'>{languageSets.auth.login.inputs.password}</Label>
						<Input
							id='password'
							name='password'
							type='password'
							aria-label='password'
							onChange={handleInputChange}
							autoComplete='off'
						/>
					</InputGroup>

					<SubmitBtn type='submit'>{languageSets.auth.login.title}</SubmitBtn>
				</Form>

				<LinkWrapper>
					<span>{languageSets.auth.login.copywrite}</span>
					<LinkToPage to='/auth/register'>{languageSets.auth.login.link}</LinkToPage>
				</LinkWrapper>
			</Content>
		</Wrapper>
	);
};

export default Login;
