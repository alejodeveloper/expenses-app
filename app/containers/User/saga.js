
import { call, put, takeLatest } from 'redux-saga/effects';

import { API_URL } from '../../commons';

import {
    GET_USER_START,
} from './constants';

import {
  getUserSuccessAction,
  getUserErrorAction
} from './actions';


const URL = `${API_URL}/api/v1/token`;

export default function* handleLoginUser(action) {
    
    try {
      const response = yield call(fetch, URL, {
        method: 'POST',
        data: action.payload
      });
      const successResponse = yield call([response, response.json]);
      yield put(getUserSuccessAction(successResponse));
      return;
    } catch (err) {
      console.log(err);
      yield put(getUserErrorAction({error: err}));
    } 
}

export function* watchGetUserStart() {
    yield takeLatest(GET_USER_START, handleLoginUser);
}