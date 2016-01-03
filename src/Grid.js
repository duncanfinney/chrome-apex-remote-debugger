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

var FakeObjectDataListStore = require('./helpers/FakeObjectDataListStore');
var FixedDataTable = require('fixed-data-table');
var React = require('react');
var {PropTypes} = React;
var Toolbar = require('./Toolbar');
var responses = require('./fixtures/responses.json');

const {Table, Column, Cell} = FixedDataTable;

const TextCell = ({rowIndex, data, col, selectedObject, ...props}) => (
  <Cell {...props} style={data[rowIndex] === selectedObject && styles.selectedCell}>
    {data[rowIndex][col]}
  </Cell>
);

const DateTimeCell = ({rowIndex, data, col, selectedObject, ...props }) => (
  <Cell {...props} style={data[rowIndex] === selectedObject && styles.selectedCell}>
    {data[rowIndex][col]}
  </Cell>
);

const matchesFilterText = filterText => {
  const regex = new RegExp(filterText, 'i');
  return data => regex.test(data.method) || regex.test(data.action) || regex.test(data.status)
};

const DEFAULT_WIDTHS = {
  started: 150,
  action: 150,
  method: 150,
  status: 150
};

class Grid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataList: responses,
      columnWidths: this.loadColumnWidths(),
      filterText: ''
    };
    localStorage.setItem('columnWidths', JSON.stringify(this.state.columnWidths));
  }

  loadColumnWidths() {
    const fromLocalStorage = localStorage.getItem('columnWidths');
    if (fromLocalStorage) {
      try {
        return JSON.parse(fromLocalStorage);
      } catch (e) {
        return DEFAULT_WIDTHS;
      }
    } else {
      return DEFAULT_WIDTHS;
    }
  }


  onColumnResizeEnd(newColumnWidth, columnKey) {
    this.setState(({columnWidths}) => ({
      columnWidths: {
        ...columnWidths,
        [columnKey]: newColumnWidth
      }
    }), () => localStorage.setItem('columnWidths', JSON.stringify(this.state.columnWidths)));
  }

  render() {
    const {selectedObject} = this.props;
    var {dataList, columnWidths, filterText} = this.state;

    const filteredDataList = dataList.filter(matchesFilterText(filterText));

    return (
      <div>
        <Toolbar filterText={filterText} onFilterTextChanged={e => this.setState({ filterText: e.target.value })}/>
        <Table
          rowHeight={21}
          headerHeight={27}
          rowHeight={30}
          headerHeight={30}
          rowsCount={filteredDataList.length}
          isColumnResizing={false}
          onColumnResizeEndCallback={(newColumnWidth, columnKey) => this.onColumnResizeEnd(newColumnWidth, columnKey)}
          onRowClick={(e, rowNum) => this.props.onObjectSelected(filteredDataList[rowNum])}
          {...this.props}>
          <Column
            columnKey="action"
            header={<Cell>Action</Cell>}
            cell={<TextCell data={filteredDataList} col="action" selectedObject={selectedObject} />}
            fixed
            isResizable
            width={columnWidths.action}
          />
          <Column
            columnKey="method"
            header={<Cell>Method</Cell>}
            cell={<TextCell data={filteredDataList} col="method" selectedObject={selectedObject} />}
            fixed
            isResizable
            width={columnWidths.method}
          />
          <Column
            columnKey="status"
            header={<Cell>Status</Cell>}
            cell={<TextCell data={filteredDataList} col="statusCode" selectedObject={selectedObject} />}
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
  height: PropTypes.number.isRequired,
  selectedObject: PropTypes.object.isRequired,
  onObjectSelected: PropTypes.func.isRequired
};

const styles = {
  selectedCell: {
    backgroundColor: 'rgba(56, 121, 217, 1)',
    color: 'white'
  }
};

export default Grid;
