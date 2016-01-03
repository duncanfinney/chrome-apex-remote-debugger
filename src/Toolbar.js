import './css/filter.css';
import React from 'react';

class Toolbar extends React.Component {
  render() {
    return (
      <div className="widget hbox filter-bar">
        <div className="filter-text-filter">
          <input className="filter-input-field" placeholder="Filter" id="filter-input-field"/>
        </div>
        {/*<div className="filter-checkbox-filter">
          <label is="dt-checkbox">
            <div className="dt-checkbox-text">Hide data URLs</div>
          </label>
        </div>
        <div className="filter-bitset-filter">
          <li className="all selected">All</li>
          <div className="filter-bitset-filter-divider"></div>
          <li className="XHR and Fetch">XHR</li>
          <li className="Scripts">JS</li>
          <li className="Stylesheets">CSS</li>
          <li className="Images">Img</li>
          <li className="Media">Media</li>
          <li className="Fonts">Font</li>
          <li className="Documents">Doc</li>
          <li className="WebSockets">WS</li>
          <li className="Other">Other</li>
        </div>*/}
      </div>
    );

  }
}

export default Toolbar;