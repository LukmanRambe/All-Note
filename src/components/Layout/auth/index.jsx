import { Outlet } from 'react-router-dom';
import GlobalStyle from '../../../GlobalStyles';
import ToggleButtons from './ToggleButtons';

const AuthLayout = () => {
	return (
		<>
			<main>
				<ToggleButtons />
				<Outlet />

				<GlobalStyle />
			</main>
		</>
	);
};

export default AuthLayout;
