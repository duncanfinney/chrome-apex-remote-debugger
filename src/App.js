import 'fixed-data-table/dist/fixed-data-table.min.css';
import './css/style.css';

import React from 'react';
import SplitPane from 'react-split-pane';
import JSONTree from 'react-json-tree';
import Toolbar from './Toolbar';
import GridExample from './GridExample';

const MIN_SPLIT_SIZE = 200;

class App extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      splitPos: this.getInitialSplitPosition(),
      height: window.innerHeight,
      selectedObject: null
    };
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.onWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
  }

  onWindowResize() {
    this.setState({
      splitPos: this.getInitialSplitPosition(),
      height: window.innerHeight
    })
  }

  getInitialSplitPosition() {
    let splitPos = parseInt(localStorage.getItem('splitPos'), 10)
    const {innerWidth} = window;
    if (!splitPos || innerWidth - splitPos < MIN_SPLIT_SIZE) {
      splitPos = innerWidth - MIN_SPLIT_SIZE; //initial_size
    }
    localStorage.setItem('splitPos', splitPos);
    return splitPos
  }

  onChangeSplitPaneSize(size) {
    localStorage.setItem('splitPos', size);
    this.setState({
      splitPos: size
    });
  }

  render() {
    return (
      <SplitPane
        split="vertical"
        minSize={MIN_SPLIT_SIZE}
        defaultSize={ localStorage.getItem('splitPos') }
        onChange={ size => this.onChangeSplitPaneSize(size) }
      >
        <div>
          <Toolbar />
          <GridExample
            width={this.state.splitPos}
            height={this.state.height}
            onDataClick={data => this.setState({ selectedObject: data })}
          />
        </div>
        <JSONTree data={this.state.selectedObject}/>
      </SplitPane>
    )
  }

}

export default App;