import React from 'react';
import JSONTree from 'react-json-tree';
import testRequest from './fixtures/testRequest.json';

const theme = {
  scheme: 'google',
  author: 'seth wright (http://sethawright.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#CC342B',
  base09: '#F96A38',
  base0A: '#FBA922',
  base0B: '#198844',
  base0C: '#3971ED',
  base0D: '#3971ED',
  base0E: '#A36AC7',
  base0F: '#3971ED'
};

const ZeroState = () => (
  <div style={styles.zeroState}>
    <span>select an item at the left</span>
  </div>
)


const DetailPane = ({ data }) => {
  if (!data) {
    return <ZeroState />;
  }

  return (
    <div>
      <div style={styles.wrapper}>
        <strong>Request:</strong>
        <JSONTree data={testRequest} theme={theme} />
      </div>
      <div style={styles.wrapper}>
        <strong>Response:</strong>
        <JSONTree data={data.result} theme={theme}/>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: 10
  },
  zeroState: {
    textAlign: 'center',
    padding: 20
  }
};

export default DetailPane;