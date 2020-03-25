import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'bethehero',
      storage,
      whitelist: ['auth', 'ong'],
    },
    reducers
  );

  return persistedReducer;
};
