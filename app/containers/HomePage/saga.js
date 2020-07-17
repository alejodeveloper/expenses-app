import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_EXPENSES_ACTION } from './constants';

import { API_URL } from '../../commons';
import {
  getExpensesSuccessAction,
  getExpensesErrorAction,
  getExpensesAction
} from './actions';

const URL = `${API_URL}/api/v1/expenses/`;
// Individual exports for testing
export default function* homePageSaga(action) {
  // See example in containers/HomePage/saga.js
  try {
    const response = yield call( fetch, URL,
      {
        method: 'GET',
        headers: {
          Accept:'application/json',
          Authorization: `Bearer ${action.token}`,
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