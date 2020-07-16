import { call, put, takeLatest } from 'redux-saga/effects';

import { Saga } from 'redux-saga';

import { API_URL } from '../common/config';
import {
  getExpensesSuccessAction,
  getExpensesErrorAction
} from './actions';

const URL = `${API_URL}/api/v1/expenses/`;
// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  const response = yield call(fetch, URL, { method: 'GET' });
  
  if (response.status == 200 ) {
    const successResponse = yield call([response, response.json]);
    yield put(getExpensesSuccessAction(successResponse));
    return;
  }
  const errorResponse = yield call([response, response.json]);
  yield put(getExpensesErrorAction(errorResponse));

}

export function* watchGetExpenses() {
  yield takeLatest(homePageSaga);
}