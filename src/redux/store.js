import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/reducer';
import { authReducer } from './auth';
import { modalReducer } from './modal';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    authorization: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    modal: modalReducer,
  },
  middleware,
});

const persistor = persistStore(store);
// eslint-disable-next-line
export default { store, persistor };
