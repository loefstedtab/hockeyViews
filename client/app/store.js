import { applyMiddleware, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import { apiSlice } from '../features/api/apiSlice';


// const middleware = applyMiddleware(logger, apiSlice.middleware)

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
export * from '../features/auth/authSlice';
