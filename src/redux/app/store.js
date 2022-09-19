import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/countiresSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
