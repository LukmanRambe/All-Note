import { useEffect, useState } from 'react';

import { useNavigate, useOutletContext } from 'react-router-dom';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const CreateNote = () => {
	const navigate = useNavigate();
	const { setNotes } = useOutletContext();

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
			id: `notes-${new Date().getTime().toString()}`,
			title: formValues.title.slice(0, titleMaxChar) || '(untitled)',
			body: formValues.body,
			createdAt: new Date().toISOString(),
			archived: false,
		};

		if (formValues.title !== '' && formValues.body !== '') {
			setNotes((oldNotes) => {
				return [noteObject, ...oldNotes];
			});
			setFormValues({ title: '', body: '' });
			navigate('/');
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
						<FontAwesomeIcon icon={faArrowLeft} /> Back
					</BackBtn>

					<Title>Create New Note</Title>
				</Header>

				<FormWrapper>
					<Form onClick={(e) => e.stopPropagation()} onSubmit={(e) => handleFormSubmit(e)}>
						<InputGroup>
							<Label>Title</Label>

							<Input
								type='text'
								aria-label='title'
								placeholder='Title'
								name='title'
								value={formValues.title}
								onChange={handleFormChange}
								autoFocus
							/>
							<CharLimit
								className={
									charLimitError.title && 'error'
								}>{`${countChar.title}/${titleMaxChar} Max Characters`}</CharLimit>
						</InputGroup>

						<InputGroup>
							<Label>Notes</Label>
							<Textarea
								placeholder='Write Your Notes Here...'
								cols='30'
								rows='15'
								name='body'
								value={formValues.body}
								onChange={handleFormChange}
							/>
						</InputGroup>

						<SubmitBtn>Create Note</SubmitBtn>
					</Form>
				</FormWrapper>
			</Content>
		</Wrapper>
	);
};

export default CreateNote;
