import { Link } from 'react-router-dom';
import { logo } from '../constants';

const Navbar = () => {
	return (
		<div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container py-4'>
			<Link to={'/'} className='d-flex align-items-center link-body-emphasis text-decoration-none'>
				<img src={logo} alt='logo' width={80} height={70} />
				<span className='fs-4 logo-w'>School</span>
			</Link>
			<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
				<Link to={'/login'} className='me-3 py-2 text-dark text-decoration-none'>
					Login
				</Link>
				<Link to={'/register'} className='me-3 py-2 text-dark text-decoration-none'>
					Register
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
