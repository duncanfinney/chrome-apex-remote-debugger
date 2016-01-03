import './css/filter.css';
import React from 'react';

class Toolbar extends React.Component {
  render() {
    const {filterText, onFilterTextChanged, onClear} = this.props;
    return (
      <div className="widget hbox filter-bar">
        <div className="filter-text-filter">
          <input className="filter-input-field" placeholder="Filter" id="filter-input-field"
                 value={filterText}
                 onChange={onFilterTextChanged}
          />
          <a style={styles.clearButton} onClick={onClear}>
            clear
          </a>
        </div>
      </div>
    );

  }
}

const styles = {
  clearButton: {
    marginLeft: 10,
    cursor: 'pointer',
    '-webkit-user-select': 'none'
  }
};

export default Toolbar;