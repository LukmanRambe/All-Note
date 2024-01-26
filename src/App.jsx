// Components
import ActiveNotes from './pages';
import ArchivedNotes from './pages/archive';
import DetailNote from './pages/detail';

// Data
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './pages/404';
import CreateNote from './pages/create';
import EditNote from './pages/edit';

const App = () => {
	const Routes = () =>
		useRoutes([
			{
				path: '/',
				element: <Layout />,
				children: [
					{
						index: true,
						element: <ActiveNotes />,
					},
					{
						path: 'archive',
						element: <ArchivedNotes />,
					},
					{
						path: 'create',
						element: <CreateNote />,
					},
					{
						path: 'detail/:id',
						caseSensitive: true,
						element: <DetailNote />,
					},
					{
						path: 'edit/:id',
						caseSensitive: true,
						element: <EditNote />,
					},
					{
						path: '*',
						element: <NotFound />,
					},
				],
			},
		]);

	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
};

export default App;
