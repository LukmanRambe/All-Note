// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Styling
import {
	Wrapper,
	Content,
	Form,
	Title,
	Label,
	InputGroup,
	Input,
	CharLimit,
	Textarea,
	SubmitBtn,
	CloseBtn,
} from './CreateNoteModal.styles';

const CreateNoteForm = ({
	setIsModalShown,
	formValues,
	setFormValues,
	handleFormSubmit,
	handleFormChange,
	countChar,
	titleMaxChar,
	bodyMaxChar,
	charLimitError,
}) => {
	const handleCloseModal = () => {
		setIsModalShown({ value: false, type: '' });
		setFormValues({ title: '', body: '' });
	};

	return (
		<Wrapper onClick={handleCloseModal}>
			<Content>
				<Form onClick={(e) => e.stopPropagation()} onSubmit={(e) => handleFormSubmit(e)}>
					<Title>Note Form</Title>

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
						<CharLimit
							className={charLimitError.body && 'error'}>{`${countChar.body}/${bodyMaxChar} Max Characters`}</CharLimit>
					</InputGroup>

					<SubmitBtn>Create Note</SubmitBtn>

					<CloseBtn onClick={handleCloseModal}>
						<FontAwesomeIcon icon={faXmark} />
					</CloseBtn>
				</Form>
			</Content>
		</Wrapper>
	);
};

export default CreateNoteForm;
