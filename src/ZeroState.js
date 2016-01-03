import React from 'react';

const ZeroState = () => (
  <div style={styles.wrapper}>
    <div style={styles.recordingHint}>
      <span>Recording ApexRemote activity…</span><br /><span>Perform a request or hit <b>⌘ R</b> to record the reload.</span>
    </div>
  </div>
);

const styles = {
  wrapper: {
    paddingTop: 50,
    justifyContent: 'center',
    height: '100%',
    WebkitUserSelect: 'none',
    color: '#777'
  },
  recordingHint: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: '28px'
  }
};

export default ZeroState;