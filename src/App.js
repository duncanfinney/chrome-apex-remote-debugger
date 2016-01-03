import './style.css';
import 'fixed-data-table/dist/fixed-data-table.min.css';

import React from 'react';
import SplitPane from 'react-split-pane';
import JSONTree from 'react-json-tree';
import GridExample from './GridExample';

// Inside a React component:
const json = {
  array: [1, 2, 3],
  bool: true,
  object: {
    foo: 'bar'
  }
};

export default React.createClass({

  getInitialState() {
    return {
      leftSideWidth: localStorage.getItem('splitPos'),
      height: window.innerHeight
    }
  },

  onChangeSplitPaneSize(size) {
    localStorage.setItem('splitPos', size);
    this.setState({
      leftSideWidth: size
    })
  },

  render() {
    return (
      <SplitPane
        split="vertical"
        minSize="50"
        defaultSize={ localStorage.getItem('splitPos') }
        onChange={ this.onChangeSplitPaneSize }
      >
        <GridExample
          width={this.state.leftSideWidth}
          height={this.state.height}
        />
        <JSONTree data={json}/>
      </SplitPane>
    )
  }
})
