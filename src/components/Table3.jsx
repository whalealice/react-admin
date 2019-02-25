import React from 'react';
import { connect } from 'react-redux'
import {increment,decrement} from '../Redux/Action'
import PropTypes from 'prop-types'

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
class Table3 extends React.Component {
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
Table3.propTypes={
    initValue: PropTypes.number.isRequired,
}
export default connect(mapState, mapDispatch)(Table3)

