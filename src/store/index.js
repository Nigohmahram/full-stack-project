import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../slice/auth';

export default configureStore({
	reducer: {
		auth: AuthReducer,
	},
	devtools: process.env.NODE_ENV !== 'production',
});
