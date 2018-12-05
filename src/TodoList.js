import React, {Component} from 'react'
import {Button, Input ,List} from "antd";
// import store from './store'
import {connect} from 'react-redux'
import 'antd/dist/antd.css';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    render() {
        return(
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input
                        placeholder="todo info"
                        style={{width: '300px', marginRight: '10px'}}
                        value={this.props.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary">提交</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    rowKey={List.item}
                    bordered
                    dataSource={['Dell']}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => {}}>{item}</List.Item>)}
                />
            </div>
        )
    }

    handleInputChange(e){
        console.log(e.target.value);
    }
}
const mapStateToProps = (state) =>{
    return{
        inputValue: state.inputValue
    }
}
export default connect(mapStateToProps,null)(TodoList);
