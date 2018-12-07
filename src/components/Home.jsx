import React from 'react';
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                 <ul>
                    <li>
                        <Link to="/table1">Home1</Link>
                    </li>
                    <li>
                        <Link to="/table2">About1</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}