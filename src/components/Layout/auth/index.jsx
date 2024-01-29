import { Outlet } from 'react-router-dom';
import GlobalStyle from '../../../GlobalStyles';

const AuthLayout = () => {
	return (
		<>
			<main>
				<Outlet />

				<GlobalStyle />
			</main>
		</>
	);
};

export default AuthLayout;
