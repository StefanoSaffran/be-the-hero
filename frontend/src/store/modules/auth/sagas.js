import { takeLatest, call, all, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, 'sessions', {
      id,
    });

    const { name } = response.data;

    api.defaults.headers.Authorization = id;

    yield put(signInSuccess(name, id));

    history.push('/profile');
  } catch (error) {
    toast.error('Authentication error, verify your credentials');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, whatsapp, city, uf } = payload;

    const { data } = yield call(api.post, 'ongs', {
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    toast.success(`Seu ID de acesso ${data.id}`);
    history.push('/');
  } catch (error) {
    toast.error('Registration failed, verify your credentials');
    yield put(signFailure());
  }
}

export function setId({ payload }) {
  if (!payload) return;

  const { profile } = payload?.ong;

  if (profile.id) {
    api.defaults.headers.Authorization = profile.id;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setId),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
