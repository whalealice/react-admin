import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd'

const SubMenu = Menu.SubMenu

export default class Home extends React.Component {
    constructor(){
        super()
        this.state={
            collapsed: false,
        }
    }
    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/home/table1">table1</Link>
                    </li>
                    <li>
                        <Link to="/home/table2">table2</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}