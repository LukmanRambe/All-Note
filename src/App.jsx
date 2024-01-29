import { BrowserRouter, useRoutes } from 'react-router-dom';

// Components
import AuthLayout from './components/Layout/auth';
import Layout from './components/Layout/main';
import AuthContextProvider from './components/context/AuthContext';
import LanguageContextProvider from './components/context/LanguageContext';
import ThemeContextProvider from './components/context/ThemeContext';
import ActiveNotes from './pages';
import NotFound from './pages/404';
import ArchivedNotes from './pages/archive';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import CreateNote from './pages/create';
import DetailNote from './pages/detail';
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
			{
				path: '/auth',
				element: <AuthLayout />,
				children: [
					{
						path: 'login',
						index: true,
						element: <Login />,
					},
					{
						path: 'register',
						element: <Register />,
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
			<AuthContextProvider>
				<ThemeContextProvider>
					<LanguageContextProvider>
						<Routes />
					</LanguageContextProvider>
				</ThemeContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	);
};

export default App;
