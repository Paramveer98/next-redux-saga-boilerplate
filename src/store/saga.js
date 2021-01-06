// import { runClockSaga, loadDataSaga } from '../containers/test/sagas';
import { all, call, takeLatest } from 'redux-saga/effects';
// import { actionTypes } from '../containers/test/actions';
import homeSagas from '../containers/home/sagas';

function* rootSaga() {
  yield all([
    // call(runClockSaga),
    // takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    // signupSagas(),?
    // homeSagas()
  ]);
}

export default rootSaga;
