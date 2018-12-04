import * as action_types from './actionTypes'

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 */
const defaultState = {
    inputValue: '1',
    list: [1, 2, 3]
};
export default (state = defaultState, action) => {

    if (action.type === action_types.CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;

        return newState;
    }
    if (action.type === action_types.ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        if (newState.inputValue) {
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
        }
        return newState;
    }
    if (action.type === action_types.DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === action_types.INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }


    return state;
}
