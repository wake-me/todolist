import * as actionTypes from './actionTypes'
const defaultState={
    inputValue:'',
    list:[]
};

export default (state =defaultState, action) => {
    if (action.type === actionTypes.CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === actionTypes.ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        if (newState.inputValue) {
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
        }
        return newState;
    }
    if (action.type === actionTypes.DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === actionTypes.INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }

    return state;
}
