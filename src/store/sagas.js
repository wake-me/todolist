
import {takeEvery ,put} from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import axios from "axios";
import {initListAction} from "./actionCreator";

function* getInitList() {
    try {
        const res = yield axios.get('http://rap2api.taobao.org/app/mock/119542/get/todolist');
        const action = initListAction(res.data.todolist);
        yield put(action)
    }catch (e) {
        console.log('todo list 网络请求失败')
    }

}
// generator函数
function* mySaga() {
    yield takeEvery( actionTypes.GET_INIT_LIT, getInitList);
}

export default mySaga;
