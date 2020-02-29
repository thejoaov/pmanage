import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import config from './config/sagas';

export default function* rootSaga() {
  return yield all([auth, config]);
}
