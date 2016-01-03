import React from 'react';

const ZeroState = () => (
  <div className="network-status-pane fill" style={styles.wrapper}>
    <div className="recording-hint">
      <span>Recording ApexRemote activity…</span><br /><span>Perform a request or hit <b>⌘ R</b> to record the reload.</span>
    </div>
  </div>
);

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
  },
  recordingHint: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 28
  }
};

export default ZeroState;