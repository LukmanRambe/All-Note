import { useEffect, useState } from 'react';

import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import BackToTop from '../artifacts/buttons/BackToTop';
import DeleteNoteModal from '../artifacts/modals/DeleteNoteModal';
import Navbar from './Navbar';

import GlobalStyle from '../../GlobalStyles';
import { categories, getAllNotes } from '../../utils/data';

const Layout = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [notes, setNotes] = useState(() => getAllNotes());
	const [searchResults, setSearchResults] = useState(notes);
	const [category, setCategory] = useState(categories[0]);
	const [noteId, setNoteId] = useState('');
	const [showBackToTop, setShowBackToTop] = useState(false);
	const [isModalShown, setIsModalShown] = useState({
		value: false,
		type: '',
	});
	const [isLoading, setIsLoading] = useState(true);
	const [searchParams, setSearchParams] = useSearchParams();

	const changeArchiveStatus = (_, id) => {
		setNotes((prevState) => {
			const newItem = prevState.map((item) => {
				return item.id === id ? { ...item, archived: !item.archived } : item;
			});

			return newItem;
		});
	};

	const deleteNote = (e, id) => {
		setNotes((prevState) => {
			const newNotes = prevState.filter((note) => note.id !== id);

			return newNotes;
		});

		if (!['/', '/archive'].includes(pathname) || searchParams.get('search')?.length === 0) {
			navigate('/');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowBackToTop(true);
			} else {
				setShowBackToTop(false);
			}
		});
	}, []);

	return (
		<>
			<Navbar />

			<main>
				<Outlet
					context={{
						notes,
						setNotes,
						category,
						setCategory,
						setIsModalShown,
						setNoteId,
						isLoading,
						setIsLoading,
						searchParams,
						setSearchParams,
						changeArchiveStatus,
						searchResults,
						setSearchResults,
					}}
				/>

				{showBackToTop && <BackToTop />}

				{isModalShown.value && isModalShown.type === 'delete' && (
					<DeleteNoteModal
						noteId={noteId}
						setNoteId={setNoteId}
						deleteNote={deleteNote}
						setIsModalShown={setIsModalShown}
					/>
				)}
			</main>

			<GlobalStyle />
		</>
	);
};

export default Layout;
