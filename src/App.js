import 'fixed-data-table/dist/fixed-data-table.min.css';
import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import SplitPane from 'react-split-pane';
import Grid from './Grid';
import DetailPane from './DetailPane';

const MIN_SPLIT_SIZE = 200;

class App extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      splitPos: this.getInitialSplitPosition(),
      gridHeight: window.innerHeight - 37,
      requests: this.getInitialRequests()
    };
    this.onWindowResize = this.onWindowResize.bind(this);
    this.getGridHeight = this.getGridHeight.bind(this);
  }

  getInitialRequests() {
    if (window.location.host == 'localhost:3000') {
      return require('./fixtures/responses.json');
    }
    return [];
  }

  componentDidMount() {

    const self = this;
    if (chrome && chrome.devtools) {
      chrome.devtools.network.onRequestFinished.addListener(function (req) {

        if (!req || !req.request || !req.request.url) return;

        if (req.request.url.includes('/apexremote')) {

          req.getContent(bodyString => {
            const parsedPostData = JSON.parse(req.request.postData.text);
            const body = JSON.parse(bodyString);
            //todo: clean me up
            const newRequests = body.flatMap((r, i) => Object.assign({}, { request: parsedPostData[i] || parsedPostData }, r));
            self.setState({
              requests: self.state.requests.concat(newRequests)
            });
          });
        }
      });
    }

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

    const {splitPos, gridHeight, selectedObject} = this.state;

    return (
      <SplitPane
        split="vertical"
        minSize={MIN_SPLIT_SIZE}
        defaultSize={ localStorage.getItem('splitPos') }
        onChange={ size => this.onChangeSplitPaneSize(size) }
      >
        <div style={styles.gridWrapper}>
          <Grid
            dataList={this.state.requests}
            width={splitPos}
            height={gridHeight}
            selectedObject={selectedObject}
            onObjectSelected={selectedObject => this.setState({ selectedObject })}
            onClear={() => this.setState({ requests: [], selectedObject: null })}
          />
        </div>
        <DetailPane data={selectedObject} />
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