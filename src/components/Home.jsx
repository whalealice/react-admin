import React from 'react';
import { Link } from 'react-router-dom'
import TableBox from './Table3'

export default class Home extends React.Component {
  
    render() {
        return (
            <div>
                 <ul>
                    <li>
                        <Link to="/table1">table1</Link>
                    </li>
                    <li>
                        <Link to="/table2">table2</Link>
                    </li>
                </ul>
                {this.props.children}

                <TableBox />
            </div>
        )
    }
}