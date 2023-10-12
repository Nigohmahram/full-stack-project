import { useState } from 'react';
import { icon } from '../constants';
import { Input } from '../ui';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className='text-center'>
			<main class='form-signin w-50 m-auto'>
				<form>
					<img src={icon} alt='logo' width={100} height={80} />
					<h1 class='h3 mb-3 fw-normal'>Please register</h1>
					<Input label={'Username'} state={name} setState={setName} />
					<Input label={'Email address'} state={email} setState={setEmail} />
					<Input label={'Password'} state={password} type='password' setState={setPassword} />

					<button class='btn btn-primary w-100 mt-2' type='submit'>
						Register
					</button>
				</form>
			</main>
		</div>
	);
};

export default Register;
