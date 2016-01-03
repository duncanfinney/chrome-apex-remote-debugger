import React from 'react';
import JSONTree from 'react-json-tree';
import testRequest from './fixtures/testRequest.json';
import monokai from 'base16/lib/monokai';

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

const DetailPane = ({ data }) => {
  if (!data) {
    return <div style={styles.wrapper} />;
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.section}>
        <strong>Request:</strong>
        <JSONTree data={data.request} theme={monokai}/>
      </div>
      <div style={styles.section}>
        <strong>Response:</strong>
        <JSONTree data={data.result} theme={monokai}/>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: monokai.base01,
    color: monokai.base05,
    flex: 1
  },
  section: {
    padding: 10
  },
  zeroState: {
    textAlign: 'center',
    padding: 20
  }
};

export default DetailPane;