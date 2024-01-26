import { useEffect, useState } from 'react';

import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	ActionButtons,
	BackBtn,
	CancelBtn,
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
} from '../../styles/EditNote.styles';

const EditNote = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { setNotes } = useOutletContext();
	const { notes } = useOutletContext();

	const note = notes?.find((note) => note?.id === id);

	const titleMaxChar = 50;
	const [countChar, setCountChar] = useState({
		title: note?.title?.length,
	});
	const [charLimitError, setCharLimitError] = useState({
		title: note?.title?.length < titleMaxChar,
	});
	const [formValues, setFormValues] = useState({ title: note?.title, body: note?.body });

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

		if (formValues.title !== '' && formValues.body !== '') {
			setNotes((oldNotes) => {
				return oldNotes.map((note) => {
					if (note.id === id) {
						return { ...note, title: formValues.title.slice(0, titleMaxChar) || '(untitled)', body: formValues.body };
					}

					return note;
				});
			});

			setFormValues({ title: '', body: '' });
			navigate(`/detail/${id}`);
		}
	};

	useEffect(() => {
		setCountChar({
			title: formValues.title?.length,
		});

		if (formValues.title?.length < titleMaxChar) {
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

	useEffect(() => {
		if (!note) navigate('/edit');
	}, [note, navigate]);

	return (
		<Wrapper>
			<Content>
				<Header>
					<BackBtn to={`/detail/${note?.id}`}>
						<FontAwesomeIcon icon={faArrowLeft} /> Back
					</BackBtn>

					<Title>Edit Note</Title>
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

						<ActionButtons>
							<CancelBtn to={`/detail/${id}`} title={`Note Detail - ${note?.title}`}>
								Cancel
							</CancelBtn>
							<SubmitBtn>Edit Note</SubmitBtn>
						</ActionButtons>
					</Form>
				</FormWrapper>
			</Content>
		</Wrapper>
	);
};

export default EditNote;
