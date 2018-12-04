import * as action_types from './actionTypes'
// import axios from "axios";

export const getInputChangeAction = (value) => ({
    type: action_types.CHANGE_INPUT_VALUE,
    value
});


export const getAddItemAction = () => ({
    type: action_types.ADD_TODO_ITEM,

});


export const getDeleteItemAction = (index) => ({
    type: action_types.DELETE_TODO_ITEM,
    index
});

export const initListAction= (data) => ({
    type: action_types.INIT_LIST_ACTION,
     data
});

// export const getTodoList =() =>{
//     return (dispatch) => {
//         axios.get('http://rap2api.taobao.org/app/mock/119542/get/todolist').then((res)=>{
//             const  todolist = res.data.todolist;
//             const action = initListAction(todolist);
//             // store.dispatch(action)
//             dispatch(action)
//         })
//     }
// };

export const getInitList =() => ({
    type: action_types.GET_INIT_LIT
});
