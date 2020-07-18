import { call, put, select ,takeLatest } from 'redux-saga/effects';

import { API_URL } from '../../commons';


import { GET_EXPENSES_ACTION } from './constants';

import {
  getExpensesSuccessAction,
  getExpensesErrorAction
} from './actions';

import { makeSelectHomePageToken } from './selectors';


const URL = `${API_URL}/api/v1/expenses/`;
// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  
  const token = yield select(makeSelectHomePageToken());
  
  try {
    const response = yield call( fetch, URL,
      {
        method: 'GET',
        headers: {
          Accept:'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const successResponse = yield call([response, response.json]);
    yield put(getExpensesSuccessAction(successResponse));
  } catch  (err){
    yield put(getExpensesErrorAction(err));
  }
}

export function* watchGetExpenses() {
  yield takeLatest(GET_EXPENSES_ACTION, homePageSaga);
}