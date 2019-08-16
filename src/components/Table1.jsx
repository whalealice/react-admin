import React from 'react';
// import { Link } from 'react-router-dom'
import { Table, Column, Cell } from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

class Table1 extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }
    render() {
        return (
            <div>
                <div>2222</div>
                <Table
                    rowsCount={100}
                    rowHeight={50}
                    width={1000}
                    height={500}>
                    <Column
                        cell={<Cell>Basic content</Cell>}
                        width={200}
                    />
                </Table>
            </div>
        )
    }
}
export default Table1
