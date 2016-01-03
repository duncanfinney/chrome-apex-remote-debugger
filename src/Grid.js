/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

"use strict";

var ExampleImage = require('./helpers/ExampleImage');
var FakeObjectDataListStore = require('./helpers/FakeObjectDataListStore');
var FixedDataTable = require('fixed-data-table');
var React = require('react');
var {PropTypes} = React;
var Toolbar = require('./Toolbar');

const {Table, Column, Cell} = FixedDataTable;

const DateCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data.getObjectAt(rowIndex)[col].toLocaleString()}
  </Cell>
);

const LinkCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    <a href="#">{data.getObjectAt(rowIndex)[col]}</a>
  </Cell>
);

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data.getObjectAt(rowIndex)[col]}
  </Cell>
);

class Grid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataList: new FakeObjectDataListStore(1000),
      columnWidths: {
        started: 150,
        action: 150,
        method: 150,
        status: 150
      }
    };
  }


  onColumnResizeEnd(newColumnWidth, columnKey) {
    this.setState(({columnWidths}) => ({
      columnWidths: {
        ...columnWidths,
        [columnKey]: newColumnWidth
      }
    }));
  }

  render() {
    var {dataList, columnWidths} = this.state;
    return (
      <div>
        <Toolbar />
        <Table
          rowHeight={21}
          headerHeight={27}
          rowHeight={30}
          headerHeight={30}
          rowsCount={dataList.getSize()}
          isColumnResizing={false}
          onColumnResizeEndCallback={(newColumnWidth, columnKey) => this.onColumnResizeEnd(newColumnWidth, columnKey)}
          {...this.props}>
          <Column
            columnKey="started"
            header={<Cell>Started</Cell>}
            cell={<TextCell data={dataList} col="firstName" />}
            fixed
            isResizable
            width={columnWidths.started}
          />
          <Column
            columnKey="action"
            header={<Cell>Action</Cell>}
            cell={<TextCell data={dataList} col="lastName" />}
            fixed
            isResizable
            width={columnWidths.action}
          />
          <Column
            columnKey="method"
            header={<Cell>Method</Cell>}
            cell={<TextCell data={dataList} col="email" />}
            fixed
            isResizable
            width={columnWidths.method}
          />
          <Column
            columnKey="status"
            header={<Cell>Status</Cell>}
            cell={<TextCell data={dataList} col="email" />}
            fixed
            isResizable
            width={columnWidths.status}
          />
        </Table>
      </div>
    );
  }
}

Grid.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Grid;
