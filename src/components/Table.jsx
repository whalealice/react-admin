import React, { Component } from 'react'
import _ from 'lodash'

const HOC = (InnerComponent) => class extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    update=()=>{
        const {count} = this.state
        this.setState({
            count:count+1
        })
    }
    render(){
        const newProps = this.state;
        return(
            <InnerComponent
                {...this.props}
                {...newProps}
                update = {this.update}
            />
        )
    }

}
const Button = HOC((props) => <button  onClick={props.update}>{props.children}-{props.count}</button>) //无状态组件

class Label extends React.Component{//传统组件
 
    render(){
        return(
            <label>{this.props.children}-{this.props.count}</label>
        )
    }
}
const LabelHoc = HOC(Label)



export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visiblePopover: false,
            visibleIcon: false,
            num: 1,
            nums:1 ,
        }
        this.callAjax = _.debounce(this.callAjax, 2000, {leading:true});
    }
    handelNum =()=>{
        this.setState({
            num: this.state.num +2
        })
        // this.setState((prevState, props) => ({
        //     num: prevState.num + 1
        //   }));
    }
    handelBtn = _.throttle(()=>{
        console.log('4444')
        this.setState({
            nums: this.state.nums +1
        })
    },2000,{leading:true,trailing:true})
    handelInput=(e)=>{
        e.persist();
        // console.log('3333',e.target.value)
        this.callAjax(e.target.value)
    }
    callAjax=(value)=>{
        console.log('666',value)
    }
    render() {
        return (
            <div>
                <div>Table1</div>
                <Button>button</Button>
                <br/>
                <LabelHoc>label</LabelHoc>
                <br/>
                <button onClick={this.handelNum}>click me</button>
                <p >{this.state.num}</p>
                <br/>
                <button onClick={this.handelBtn}>button1</button> <span>{this.state.nums}</span>
                <br/>
                <input onChange={this.handelInput} />
                {/* <input onChange={_.debounce(this.inputChange, 500)} /> */}
            </div>
        )
    }
}
