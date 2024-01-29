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

const Register = () => {
	const { register } = useContext(AuthContext);
	const { languageSets } = useContext(LanguageContext);

	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleInputChange = (e) => {
		setFormValues((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			formValues.name !== '' &&
			formValues.email !== '' &&
			formValues.password !== '' &&
			formValues.confirmPassword !== ''
		) {
			if (formValues.password !== formValues.confirmPassword) {
				return false;
			}

			register({ name: formValues.name, email: formValues.email, password: formValues.password });
		}
	};

	return (
		<Wrapper>
			<Content>
				<Title>{languageSets.auth.register.title}</Title>

				<Form onSubmit={handleSubmit}>
					<InputGroup>
						<Label htmlFor='name'>{languageSets.auth.register.inputs.name}</Label>
						<Input id='name' name='name' type='text' aria-label='name' onChange={handleInputChange} autoComplete='on' />
					</InputGroup>

					<InputGroup>
						<Label htmlFor='email'>{languageSets.auth.register.inputs.email}</Label>
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
						<Label htmlFor='password'>{languageSets.auth.register.inputs.password}</Label>
						<Input
							id='password'
							name='password'
							type='password'
							aria-label='password'
							onChange={handleInputChange}
							autoComplete='off'
						/>
					</InputGroup>

					<InputGroup>
						<Label htmlFor='confirmPassword'>{languageSets.auth.register.inputs.confirmPassword}</Label>
						<Input
							id='confirmPassword'
							name='confirmPassword'
							type='password'
							aria-label='confirmPassword'
							onChange={handleInputChange}
							autoComplete='off'
						/>
					</InputGroup>

					<SubmitBtn type='submit'>{languageSets.auth.register.title}</SubmitBtn>
				</Form>

				<LinkWrapper>
					<span>{languageSets.auth.register.copywrite}</span>
					<LinkToPage to='/auth/login'>{languageSets.auth.register.link}</LinkToPage>
				</LinkWrapper>
			</Content>
		</Wrapper>
	);
};

export default Register;
