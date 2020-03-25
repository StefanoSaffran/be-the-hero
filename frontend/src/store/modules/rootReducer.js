import { combineReducers } from 'redux';

import auth from './auth/reducer';
import ong from './ong/reducer';

export default combineReducers({ auth, ong });
