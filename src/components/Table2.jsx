import React from 'react';
import { connect } from 'react-redux'
import { onIncrement, onDecrement } from '../Redux/table'
import Immutable from 'immutable'

function mapState(store) {
    return {
        value: store.table.get('count')
    }
}
function mapDispatch(dispatch) {
    return {
        onIncrement: (opts) => {dispatch(onIncrement(opts))},
        onDecrement: (opts) => {dispatch(onDecrement(opts))}

    }
}
class Table2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: this.props.value,
        }
    }
    render() {
        // const value = this.props.value.toJS()

        return (
            <div>
                <a>Table2</a>
                <button  onClick={()=>{this.props.onIncrement(this.props.value)}}>+</button>
                <button onClick={()=>{this.props.onDecrement(this.props.value)}}>-</button>
                <span> count :{this.props.value}</span>
            </div>
        )
    }
}
export default connect(mapState, mapDispatch)(Table2)