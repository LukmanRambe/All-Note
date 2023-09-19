// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Styling
import {
	Wrapper,
	Content,
	Note,
	NoteDetail,
	NoteDetailHeader,
	CreatedAt,
	NoteTitle,
	NoteText,
	CloseBtn,
} from './NoteDetailModal.styles';

// Utils
import { formatDate } from '../../../../utils/formatDate';

const NoteDetailModal = ({ data, setNoteData, setIsModalShown }) => {
	const handleClick = () => {
		setIsModalShown({ value: false, type: '' });
		setNoteData({});
	};

	return (
		<Wrapper onClick={handleClick}>
			<Content>
				<Note onClick={(e) => e.stopPropagation()}>
					<NoteDetail>
						<NoteDetailHeader>
							<div>
								<NoteTitle>{data?.title}</NoteTitle>
								<CreatedAt>{formatDate(data?.createdAt)}</CreatedAt>
							</div>

							<CloseBtn onClick={handleClick}>
								<FontAwesomeIcon icon={faXmark} />
							</CloseBtn>
						</NoteDetailHeader>

						<NoteText>
							<p>{data?.body}</p>
						</NoteText>
					</NoteDetail>
				</Note>
			</Content>
		</Wrapper>
	);
};

export default NoteDetailModal;
