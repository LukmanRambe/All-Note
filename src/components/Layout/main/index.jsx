import { useEffect, useState } from 'react';

import { Outlet, useSearchParams } from 'react-router-dom';

import BackToTop from '../../artifacts/buttons/BackToTop';
import DeleteNoteModal from '../../artifacts/modals/DeleteNoteModal';
import Navbar from './Navbar';

import GlobalStyle from '../../../GlobalStyles';
import { categories } from '../../../utils/data';

const Layout = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [category, setCategory] = useState(categories[0]);
	const [noteId, setNoteId] = useState('');
	const [showBackToTop, setShowBackToTop] = useState(false);
	const [isModalShown, setIsModalShown] = useState({
		value: false,
		type: '',
	});
	const [isLoading, setIsLoading] = useState(true);
	const [searchParams, setSearchParams] = useSearchParams();

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
						category,
						setCategory,
						setIsModalShown,
						setNoteId,
						isLoading,
						setIsLoading,
						searchParams,
						setSearchParams,
						searchResults,
						setSearchResults,
					}}
				/>

				{showBackToTop && <BackToTop />}

				{isModalShown.value && isModalShown.type === 'delete' && (
					<DeleteNoteModal
						noteId={noteId}
						setNoteId={setNoteId}
						setIsModalShown={setIsModalShown}
						searchParams={searchParams}
					/>
				)}
			</main>

			<GlobalStyle />
		</>
	);
};

export default Layout;
