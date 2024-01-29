import { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LanguageContext } from '../../components/context/LanguageContext';
import {
	BackBtn,
	CharLimit,
	Content,
	Form,
	FormWrapper,
	Header,
	Input,
	InputGroup,
	Label,
	SubmitBtn,
	Textarea,
	Title,
	Wrapper,
} from '../../styles/CreateNote.styles';
import { addNote } from '../../utils/data';

const CreateNote = () => {
	const { languageSets } = useContext(LanguageContext);
	const navigate = useNavigate();

	const titleMaxChar = 50;
	const [countChar, setCountChar] = useState({
		title: 0,
	});
	const [charLimitError, setCharLimitError] = useState({
		title: false,
	});
	const [formValues, setFormValues] = useState({ title: '', body: '' });

	const handleFormChange = (e) => {
		setFormValues((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.name === 'title' ? e.target.value.slice(0, titleMaxChar) : e.target.value,
			};
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const noteObject = {
			title: formValues.title.slice(0, titleMaxChar) || '(untitled)',
			body: formValues.body,
		};

		if (formValues.title !== '' && formValues.body !== '') {
			addNote(noteObject).then((response) => {
				if (!response?.error) {
					setFormValues({ title: '', body: '' });
					navigate('/');
				}
			});
		}
	};

	useEffect(() => {
		setCountChar({
			title: formValues.title.length,
		});

		if (formValues.title.length < titleMaxChar) {
			setCharLimitError((prevState) => {
				return {
					...prevState,
					title: false,
				};
			});
		} else {
			setCharLimitError((prevState) => {
				return {
					...prevState,
					title: true,
				};
			});
		}
	}, [formValues.title]);

	return (
		<Wrapper>
			<Content>
				<Header>
					<BackBtn onClick={() => navigate(-1)}>
						<FontAwesomeIcon icon={faArrowLeft} /> {languageSets.buttons.title.back}
					</BackBtn>

					<Title>{languageSets.createNote.title}</Title>
				</Header>

				<FormWrapper>
					<Form onClick={(e) => e.stopPropagation()} onSubmit={(e) => handleFormSubmit(e)}>
						<InputGroup>
							<Label>{languageSets.createNote.inputs.title}</Label>

							<Input
								type='text'
								aria-label='title'
								placeholder={languageSets.createNote.inputs.title}
								name='title'
								value={formValues.title}
								onChange={handleFormChange}
								autoFocus
							/>
							<CharLimit
								className={
									charLimitError.title && 'error'
								}>{`${countChar.title}/${titleMaxChar} ${languageSets.createNote.maxChar}`}</CharLimit>
						</InputGroup>

						<InputGroup>
							<Label>{languageSets.createNote.inputs.notes}</Label>
							<Textarea
								placeholder={languageSets.createNote.inputs.textareaPlaceholder}
								cols='30'
								rows='15'
								name='body'
								value={formValues.body}
								onChange={handleFormChange}
							/>
						</InputGroup>

						<SubmitBtn>{languageSets.createNote.button}</SubmitBtn>
					</Form>
				</FormWrapper>
			</Content>
		</Wrapper>
	);
};

export default CreateNote;
