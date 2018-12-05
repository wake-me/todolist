import React from 'react'
import {Button, Input ,List} from "antd";
// import store from './store';
import {connect} from 'react-redux';
import * as actionTypes from './store/actionTypes';
import 'antd/dist/antd.css';

const TodoList = (props) =>{

        const {inputValue,changeInputValue,handleClick,list,handleDelete} = props;

        return(
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input
                        placeholder="todo info"
                        style={{width: '300px', marginRight: '10px'}}
                        value={inputValue}
                        onChange={changeInputValue}
                    />
                    <Button type="primary" onClick={handleClick}>提交</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    rowKey={List.item}
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => {handleDelete(index)}}>{item}</List.Item>)}
                />
            </div>
        )
}

const mapStateToProps = (state) =>{
    return{
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
         changeInputValue(e){
            const  action = {
                type: actionTypes.CHANGE_INPUT_VALUE,
                value: e.target.value
            }
            dispatch(action);
         },
         handleClick(){
           const  action = {
             type: actionTypes.ADD_TODO_ITEM
           }
            dispatch(action)
         },
         handleDelete(index){
            const action = {
             type: actionTypes.DELETE_TODO_ITEM,
                index
            }
            dispatch(action)
         }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
