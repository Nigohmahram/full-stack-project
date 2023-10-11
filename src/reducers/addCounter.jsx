import { useDispatch } from 'react-redux';
import { plusCounter } from '../reducers/countSlice';

const AddCounter = () => {
	const dispatch = useDispatch();
	return (
		<button className='btn btn-success' onClick={() => dispatch(plusCounter())}>
			{' '}
		</button>
	);
};

export default AddCounter;
