import 'fixed-data-table/dist/fixed-data-table.min.css';
import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import SplitPane from 'react-split-pane';
import JSONTree from 'react-json-tree';
import Grid from './Grid';
import ZeroState from './ZeroState';

const MIN_SPLIT_SIZE = 200;

class App extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      splitPos: this.getInitialSplitPosition(),
      gridHeight: window.innerHeight - 37,
      selectedObject: null
    };
    this.onWindowResize = this.onWindowResize.bind(this);
    this.getGridHeight = this.getGridHeight.bind(this);
  }

  componentDidMount() {
    this.setState({
      gridHeight: this.getGridHeight()
    });
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
      gridHeight: this.getGridHeight()
    })
  }

  getGridHeight() {
    return window.innerHeight - 37;
  }

  getInitialSplitPosition() {
    let splitPos = parseInt(localStorage.getItem('splitPos'), 10);
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
        <div style={styles.gridWrapper}>
          <Grid
            width={this.state.splitPos}
            height={this.state.gridHeight}
            onDataClick={data => this.setState({ selectedObject: data })}
          />
        </div>
        <JSONTree data={this.state.selectedObject}/>
      </SplitPane>
    )
  }

}

const styles = {
  gridWrapper: {
    display: 'flex',
    flexDirection: 'column'
  }
};

export default App;