import React from 'react';
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  
    render() {
        return (
            <div>
                 <ul>
                    <li>
                        <Link to="/table2">table2</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}