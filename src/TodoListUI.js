import React from 'react'
import {Button, Input ,List} from "antd";

import 'antd/dist/antd.css';

const TodoListUI = (props)=> {
    return (

        <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <div>
                <Input
                    placeholder="todo info"
                    style={{width: '300px', marginRight: '10px'}}
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{marginTop: '10px', width: '300px'}}
                rowKey={List.item}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}

export default TodoListUI;
