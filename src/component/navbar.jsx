import { Link, useNavigate } from 'react-router-dom';
import { logo } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../helpers/persistance-storage';
import { logoutUser } from '../slice/auth';

const Navbar = () => {
	const { loggedIn, user } = useSelector(state => state.auth);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logoutHandler = () => {
		dispatch(logoutUser());
		removeItem('token');
		navigate('/login');
	};
	return (
		<div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container py-4'>
			<Link to={'/'} className='d-flex align-items-center link-body-emphasis text-decoration-none'>
				<img src={logo} alt='logo' width={80} height={70} />
				<span className='fs-4 logo-w'>School</span>
			</Link>
			<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
				{loggedIn ? (
					<>
						<p
							className='me-3 m-0 py-2 text-dark
					text-decoration-none'
						>
							{user.username}
						</p>
						<Link to={'/create-article'} className='btn btn-primary me-3 py-2 text-dark text-decoration-none'>
							Create++
						</Link>
						<button className='btn btn-outline-danger' onClick={logoutHandler}>
							Logout
						</button>
					</>
				) : (
					<>
						<Link to={'/login'} className='me-3 py-2 text-dark text-decoration-none'>
							Login
						</Link>
						<Link to={'/register'} className='me-3 py-2 text-dark text-decoration-none'>
							Register
						</Link>
					</>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
