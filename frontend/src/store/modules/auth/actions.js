export function signInRequest(id) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { id },
  };
}

export function signInSuccess(name, id) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { name, id },
  };
}

export function signUpRequest(name, email, whatsapp, city, uf) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, whatsapp, city, uf },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
