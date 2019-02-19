import React from 'react';
import { connect } from 'react-redux'
import {increment,decrement} from '../Redux/Action'
// import {
// } from '../state/table.jsx'

function mapState(state) {
    return {
        value: state.count
    }
}
function mapDispatch(dispatch) {
    return {
        Increment: () => {
            dispatch(increment())
        },
        Decrement: () => {
            dispatch(decrement())
        }

    }
}
class Table2 extends React.Component {
    render() {
        
        return (
            <div>
                <a>Table2</a>

                 <button  onClick={this.props.Increment}>+</button>
                <button onClick={this.props.Decrement}>-</button>
                <span> count :{this.props.value}</span>
            </div>
        )
    }
}
export default connect(mapState, mapDispatch)(Table2)