import { useState } from 'react';
import { icon } from '../constants';
import { Input } from '../ui';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserStart } from '../slice/auth';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);

	const loginHandler = e => {
		e.preventDefault();
		dispatch(registerUserStart());
	};
	return (
		<div className='text-center'>
			<main className='form-signin w-50 m-auto'>
				<form>
					<img src={icon} alt='logo' width={100} height={80} />
					<h1 className='h3 mb-3 fw-normal'>Please register</h1>
					<Input label={'Username'} state={name} setState={setName} />
					<Input label={'Email address'} state={email} setState={setEmail} />
					<Input label={'Password'} state={password} type='password' setState={setPassword} />

					<button className='btn btn-primary w-100 mt-2' type='submit' disabled={isLoading} onClick={loginHandler}>
						{isLoading ? 'Loading...' : 'Register'}
					</button>
				</form>
			</main>
		</div>
	);
};

export default Register;
