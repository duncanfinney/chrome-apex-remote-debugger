import React from 'react';

const DataTable = () => <div class="data-grid network-log-grid small data-grid-fits-viewport" tabindex="0">
  <style type="text/css">.data-grid {
    position: relative;
    border: 1px solid #aaa;
    font-size: 11px;
    line-height: 120%;
  }

    .data-grid table {
      table - layout: fixed;
      border-spacing: 0;
      border-collapse: separate;
      height: 100%;
      width: 100%;
    }

    .data-grid .header-container,
    .data-grid .data-container {
      position: absolute;
      left: 0;
      right: 0;
      overflow-x: hidden;
    }

    .data-grid .header-container {
      top: 0;
      height: 17px;
    }

    .data-grid .data-container {
      top: 17px;
      bottom: 0;
      overflow-y: overlay;
      transform: translateZ(0);
    }

    .data-grid.inline .header-container,
    .data-grid.inline .data-container {
      position: static;
    }

    .data-grid.inline .corner {
      display: none;
    }

    .platform-mac .data-grid .corner,
    .data-grid.data-grid-fits-viewport .corner {
      display: none;
    }

    .data-grid .corner {
      width: 14px;
      padding-right: 0;
      padding-left: 0;
      border-left: 0 none transparent !important;
    }

    .data-grid .top-filler-td,
    .data-grid .bottom-filler-td {
      height: auto !important;
      padding: 0 !important;
    }

    .data-grid table.data {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border-top: 0 none transparent;
      background-image: linear-gradient(to bottom, transparent, transparent 50%, hsla(214, 100%, 40%, 0.1) 50%, hsla(214, 100%, 40%, 0.1));
      background-size: 128px 32px;
      table-layout: fixed;
    }

    .data-grid.inline table.data {
      position: static;
    }

    .data-grid table.data tr {
      display: none;
    }

    .data-grid table.data tr.revealed {
      display: table-row;
    }

    .data-grid td,
    .data-grid th {
      white - space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 14px;
      border-left: 1px solid #aaa;
    }

    .data-grid th:first-child,
    .data-grid td:first-child {
      border - left: none !important;
    }

    .data-grid td {
      height: 16px; /* Keep in sync with .data-grid table.data @ background-size */
      vertical-align: top;
      padding: 1px 4px;
      -webkit-user-select: text;
    }

    .data-grid th {
      height: auto;
      text-align: left;
      background-color: #eee;
      border-bottom: 1px solid #aaa;
      font-weight: normal;
      vertical-align: middle;
      padding: 0 4px;
    }

    .data-grid td > div,
    .data-grid th > div {
      white - space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .data-grid td.editing > div {
      text - overflow: clip;
    }

    .data-grid .center {
      text - align: center;
    }

    .data-grid .right {
      text - align: right;
    }

    .data-grid th.sortable {
      position: relative;
    }

    .data-grid th.sortable:active::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.15);
    }

    .data-grid th .sort-order-icon-container {
      position: absolute;
      top: 1px;
      right: 0;
      bottom: 1px;
      display: flex;
      align-items: center;
    }

    .data-grid th .sort-order-icon {
      margin - right: 4px;
      background-image: url(Images/toolbarButtonGlyphs.png);
      background-size: 352px 168px;
      opacity: 0.5;
      width: 8px;
      height: 7px;
      display: none;
    }

    @media (-webkit-min-device-pixel-ratio: 1.5) {
      .data-grid th .sort-order-icon {
      background-image: url(Images/toolbarButtonGlyphs_2x.png);
    }
    } /* media */

    .data-grid th.sort-ascending .sort-order-icon {
      display: block;
      background-position: -4px -111px;
    }

    .data-grid th.sort-descending .sort-order-icon {
      display: block;
      background-position: -20px -99px;
    }

    .data-grid th:hover {
      background - color: hsla(0, 0%, 90%, 1);
    }

    .data-grid button {
      line - height: 18px;
      color: inherit;
    }

    .data-grid td.disclosure::before {
      -webkit - user - select: none;
      -webkit-mask-image: url(Images/toolbarButtonGlyphs.png);
      -webkit-mask-position: -4px -96px;
      -webkit-mask-size: 352px 168px;
      float: left;
      width: 8px;
      height: 12px;
      margin-right: 2px;
      content: "a";
      color: transparent;
      position: relative;
      top: 1px;
      background-color: rgb(110, 110, 110);
    }

    .data-grid tr:not(.parent) td.disclosure::before {
      background - color: transparent;
    }

    @media (-webkit-min-device-pixel-ratio: 1.5) {
      .data-grid tr.parent td.disclosure::before {
      -webkit-mask-image: url(Images/toolbarButtonGlyphs_2x.png);
    }
    } /* media */

    .data-grid tr.expanded td.disclosure::before {
      -webkit - mask - position: -20px -96px;
    }

    .data-grid tr.selected {
      background - color: rgb(212, 212, 212);
      color: inherit;
    }

    .data-grid:focus tr.selected {
      background - color: rgb(56, 121, 217);
      color: white;
    }

    .data-grid:focus tr.selected a {
      color: white;
    }

    .data-grid:focus tr.parent.selected td.disclosure::before {
      background - color: white;
      -webkit-mask-position: -4px -96px;
    }

    .data-grid:focus tr.expanded.selected td.disclosure::before {
      background - color: white;
      -webkit-mask-position: -20px -96px;
    }

    .data-grid-resizer {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 5px;
      z-index: 500;
    }

    /*# sourceURL=ui_lazy/dataGrid.css */</style>
  <div class="header-container">
    <table class="header">
      <colgroup>
        <col style="width: 174px;">
          <col style="width: 42px;">
            <col style="width: 75px;">
              <col style="width: 116px;">
                <col style="width: 70px;">
                  <col style="width: 66px;">
                    <col style="width: 105px;">
                      <col style="width: 42px;">
                        <col style="width: 54px;">
                          <col class="corner">
      </colgroup>
      <tbody>
      <tr>
        <th class="name-column sortable">
          <div>Name
            <div class="network-header-subtitle">Path</div>
          </div>
          <div class="sort-order-icon-container">
            <div class="sort-order-icon"></div>
          </div>
        </th>
        <th class="method-column sortable">
          <div>Method</div>
          <div class="sort-order-icon-container">
            <div class="sort-order-icon"></div>
          </div>
        </th>
        <th class="status-column sortable">
          <div>Status
            <div class="network-header-subtitle">Text</div>
          </div>
          <div class="sort-order-icon-container">
            <div class="sort-order-icon"></div>
          </div>
        </th>
        <th class="type-column sortable">
          <div>Type</div>
          <div class="sort-order-icon-container">
            <div class="sort-order-icon"></div>
          </div>
        </th>
        <th class="initiator-column sortable">
          <div>Initiator</div>
          <div class="sort-order-icon-container">
            <div class="sort-order-icon"></div>
          </div>
        </th>
        <th class="size-column sortable">
          <div>Size
            <div class="network-header-subtitle">Content</div>
          </div>
          <div class="sort-order-icon-container">
            <div class="sort-order-icon"></div>
          </div>
        </th>
        <th class="time-column sortable">
          <div>Time
            <div class="network-header-subtitle">Latency</div>
          </div>
          <div class="sort-order-icon-container">
            <div class="sort-order-icon"></div>
          </div>
        </th>
        <th class="Content-Encoding-column sortable">
          <div>Content-Encoding</div>
          <div class="sort-order-icon-container">
            <div class="sort-order-icon"></div>
          </div>
        </th>
        <th class="timeline-column sort-ascending"><select>
          <option value="startTime" label="Timeline" disabled=""></option>
          <option value="startTime" label="Timeline – Start Time"></option>
          <option value="responseTime" label="Timeline – Response Time"></option>
          <option value="endTime" label="Timeline – End Time"></option>
          <option value="duration" label="Timeline – Total Duration"></option>
          <option value="latency" label="Timeline – Latency"></option>
        </select>
          <div class="sort-order-icon-container">
            <div class="sort-order-icon"></div>
          </div>
        </th>
        <th class="corner"></th>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="data-container">
    <table class="data">
      <colgroup>
        <col style="width: 174px;">
          <col style="width: 42px;">
            <col style="width: 75px;">
              <col style="width: 116px;">
                <col style="width: 70px;">
                  <col style="width: 66px;">
                    <col style="width: 105px;">
                      <col style="width: 42px;">
                        <col style="width: 54px;">
                          <col class="corner">
      </colgroup>
      <tbody>
      <tr class="data-grid-filler-row revealed" style="height: 0px;">
        <td class="top-filler-td"></td>
        <td class="top-filler-td"></td>
        <td class="top-filler-td"></td>
        <td class="top-filler-td"></td>
        <td class="top-filler-td"></td>
        <td class="top-filler-td"></td>
        <td class="top-filler-td"></td>
        <td class="top-filler-td"></td>
        <td class="top-filler-td"></td>
        <td class="corner top-filler-td"></td>
      </tr>
      <tr class="revealed network-navigation-row odd">
        <td class="name-column"><img class="icon document">localhost
          <div class="network-cell-subtitle"></div></td>
        <td class="method-column">GET</td>
        <td class="status-column">304
          <div class="network-cell-subtitle">Not Modified</div>
        </td>
        <td class="type-column">document</td>
        <td class="initiator-column network-dim-cell">Other</td>
        <td class="size-column right">242&thinsp;B
          <div class="network-cell-subtitle">503&thinsp;B</div>
        </td>
        <td class="time-column right">2&thinsp;ms
          <div class="network-cell-subtitle">1&thinsp;ms</div>
        </td>
        <td class="Content-Encoding-column"></td>
        <td class="timeline-column">
          <div class="network-graph-side">
            <div class="network-graph-bar-area">
              <div class="network-graph-bar request-timing total" style="left: 0%; right: 99.9659%;"></div>
              <div class="network-graph-bar request-timing queueing" style="left: 0%; right: 99.9762%;"></div>
              <div class="network-graph-bar request-timing blocking" style="left: 0.0238484%; right: 99.9743%;"></div>
              <div class="network-graph-bar request-timing sending" style="left: 0.0257344%; right: 99.974%;"></div>
              <div class="network-graph-bar request-timing waiting" style="left: 0.0259972%; right: 99.9708%;"></div>
              <div class="network-graph-bar request-timing receiving" style="left: 0.0292436%; right: 99.9659%;"></div>
            </div>
          </div>
        </td>
        <td class="corner"></td>
      </tr>
      <tr class="revealed network-error-row">
        <td class="name-column"><img class="icon stylesheet">vendor.css
          <div class="network-cell-subtitle">/build</div></td>
        <td class="method-column">GET</td>
        <td class="status-column">404
          <div class="network-cell-subtitle">Not Found</div>
        </td>
        <td class="type-column">stylesheet</td>
        <td class="initiator-column"><a href="http://localhost:3000/" class="webkit-html-resource-link">(index):9</a>
          <div class="network-cell-subtitle">Parser</div>
        </td>
        <td class="size-column right">0&thinsp;B
          <div class="network-cell-subtitle">0&thinsp;B</div>
        </td>
        <td class="time-column right">18&thinsp;ms
          <div class="network-cell-subtitle">4&thinsp;ms</div>
        </td>
        <td class="Content-Encoding-column"></td>
        <td class="timeline-column">
          <div class="network-graph-side">
            <div class="network-graph-bar-area">
              <div class="network-graph-bar request-timing total" style="left: 0.431742%; right: 99.4915%;"></div>
              <div class="network-graph-bar request-timing queueing" style="left: 0.431742%; right: 99.5672%;"></div>
              <div class="network-graph-bar request-timing blocking" style="left: 0.432784%; right: 99.5568%;"></div>
              <div class="network-graph-bar request-timing sending" style="left: 0.443248%; right: 99.5566%;"></div>
              <div class="network-graph-bar request-timing waiting" style="left: 0.443439%; right: 99.5506%;"></div>
              <div class="network-graph-bar request-timing receiving" style="left: 0.449407%; right: 99.4915%;"></div>
            </div>
          </div>
        </td>
        <td class="corner"></td>
      </tr>
      <tr class="revealed network-error-row odd">
        <td class="name-column"><img class="icon stylesheet">app.css
          <div class="network-cell-subtitle">/build</div></td>
        <td class="method-column">GET</td>
        <td class="status-column">404
          <div class="network-cell-subtitle">Not Found</div>
        </td>
        <td class="type-column">stylesheet</td>
        <td class="initiator-column"><a href="http://localhost:3000/" class="webkit-html-resource-link">(index):10</a>
          <div class="network-cell-subtitle">Parser</div>
        </td>
        <td class="size-column right">0&thinsp;B
          <div class="network-cell-subtitle">0&thinsp;B</div>
        </td>
        <td class="time-column right">18&thinsp;ms
          <div class="network-cell-subtitle">4&thinsp;ms</div>
        </td>
        <td class="Content-Encoding-column"></td>
        <td class="timeline-column">
          <div class="network-graph-side">
            <div class="network-graph-bar-area">
              <div class="network-graph-bar request-timing total" style="left: 0.432199%; right: 99.4905%;"></div>
              <div class="network-graph-bar request-timing queueing" style="left: 0.432199%; right: 99.5666%;"></div>
              <div class="network-graph-bar request-timing blocking" style="left: 0.433356%; right: 99.5555%;"></div>
              <div class="network-graph-bar request-timing sending" style="left: 0.444452%; right: 99.5554%;"></div>
              <div class="network-graph-bar request-timing waiting" style="left: 0.44463%; right: 99.5502%;"></div>
              <div class="network-graph-bar request-timing receiving" style="left: 0.449775%; right: 99.4905%;"></div>
            </div>
          </div>
        </td>
        <td class="corner"></td>
      </tr>
      <tr class="revealed">
        <td class="name-column"><img class="icon script">vendor.js
          <div class="network-cell-subtitle">/build</div></td>
        <td class="method-column">GET</td>
        <td class="status-column">304
          <div class="network-cell-subtitle">Not Modified</div>
        </td>
        <td class="type-column">script</td>
        <td class="initiator-column"><a href="http://localhost:3000/" class="webkit-html-resource-link">(index):14</a>
          <div class="network-cell-subtitle">Parser</div>
        </td>
        <td class="size-column right">244&thinsp;B
          <div class="network-cell-subtitle">128&thinsp;KB</div>
        </td>
        <td class="time-column right">5&thinsp;ms
          <div class="network-cell-subtitle">4&thinsp;ms</div>
        </td>
        <td class="Content-Encoding-column"></td>
        <td class="timeline-column">
          <div class="network-graph-side">
            <div class="network-graph-bar-area">
              <div class="network-graph-bar request-timing total" style="left: 0.432661%; right: 99.5454%;"></div>
              <div class="network-graph-bar request-timing queueing" style="left: 0.432661%; right: 99.5656%;"></div>
              <div class="network-graph-bar request-timing blocking" style="left: 0.434391%; right: 99.5552%;"></div>
              <div class="network-graph-bar request-timing sending" style="left: 0.444817%; right: 99.555%;"></div>
              <div class="network-graph-bar request-timing waiting" style="left: 0.444982%; right: 99.547%;"></div>
              <div class="network-graph-bar request-timing receiving" style="left: 0.452971%; right: 99.5454%;"></div>
            </div>
          </div>
        </td>
        <td class="corner"></td>
      </tr>
      <tr class="revealed odd">
        <td class="name-column"><img class="icon script">app.js
          <div class="network-cell-subtitle">/build</div></td>
        <td class="method-column">GET</td>
        <td class="status-column">200
          <div class="network-cell-subtitle">OK</div>
        </td>
        <td class="type-column">script</td>
        <td class="initiator-column"><a href="http://localhost:3000/" class="webkit-html-resource-link">(index):15</a>
          <div class="network-cell-subtitle">Parser</div>
        </td>
        <td class="size-column right">5.5&thinsp;MB
          <div class="network-cell-subtitle">5.5&thinsp;MB</div>
        </td>
        <td class="time-column right">51&thinsp;ms
          <div class="network-cell-subtitle">4&thinsp;ms</div>
        </td>
        <td class="Content-Encoding-column"></td>
        <td class="timeline-column">
          <div class="network-graph-side">
            <div class="network-graph-bar-area">
              <div class="network-graph-bar request-timing total" style="left: 0.433013%; right: 99.3499%;"></div>
              <div class="network-graph-bar request-timing queueing" style="left: 0.433013%; right: 99.5647%;"></div>
              <div class="network-graph-bar request-timing blocking" style="left: 0.435276%; right: 99.5572%;"></div>
              <div class="network-graph-bar request-timing dns" style="left: 0.442812%; right: 99.5569%;"></div>
              <div class="network-graph-bar request-timing connecting" style="left: 0.443126%; right: 99.5556%;"></div>
              <div class="network-graph-bar request-timing sending" style="left: 0.444516%; right: 99.5554%;"></div>
              <div class="network-graph-bar request-timing waiting" style="left: 0.44463%; right: 99.5463%;"></div>
              <div class="network-graph-bar request-timing receiving" style="left: 0.453666%; right: 99.3499%;"></div>
            </div>
          </div>
        </td>
        <td class="corner"></td>
      </tr>
      <tr class="revealed">
        <td class="name-column">
          <div class="icon image"><img class="image-network-icon-preview"
                                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAHElEQVQI12MwNjZmZdAT1+Nm0JDWEGZQk1GTBgAWkwIeAEp52AAAAABJRU5ErkJggg==">
          </div>
          data:image/png;base…
          <div class="network-cell-subtitle"></div>
        </td>
        <td class="method-column">GET</td>
        <td class="status-column network-dim-cell">200
          <div class="network-cell-subtitle">OK</div>
        </td>
        <td class="type-column">png</td>
        <td class="initiator-column"><a href="http://localhost:3000/" class="webkit-html-resource-link">(index):1</a>
          <div class="network-cell-subtitle">Parser</div>
        </td>
        <td class="size-column right network-dim-cell">(from cache)</td>
        <td class="time-column right">0&thinsp;ms
          <div class="network-cell-subtitle">0&thinsp;ms</div>
        </td>
        <td class="Content-Encoding-column"></td>
        <td class="timeline-column">
          <div class="network-graph-side">
            <div class="network-graph-bar-area">
              <div class="network-graph-bar request-timing total" style="left: 3.58502%; right: 96.4148%;"></div>
              <div class="network-graph-bar request-timing blocking" style="left: 3.58502%; right: 96.4149%;"></div>
              <div class="network-graph-bar request-timing receiving" style="left: 3.58511%; right: 96.4148%;"></div>
            </div>
          </div>
        </td>
        <td class="corner"></td>
      </tr>
      <tr class="revealed odd">
        <td class="name-column"><img class="icon eventsource">__webpack_hmr
          <div class="network-cell-subtitle"></div></td>
        <td class="method-column">GET</td>
        <td class="status-column">200
          <div class="network-cell-subtitle">OK</div>
        </td>
        <td class="type-column">eventsource</td>
        <td class="initiator-column network-dim-cell">Other</td>
        <td class="size-column right">306&thinsp;B
          <div class="network-cell-subtitle">37&thinsp;B</div>
        </td>
        <td class="time-column right">22.73&thinsp;s
          <div class="network-cell-subtitle">2&thinsp;ms</div>
        </td>
        <td class="Content-Encoding-column"></td>
        <td class="timeline-column">
          <div class="network-graph-side">
            <div class="network-graph-bar-area">
              <div class="network-graph-bar request-timing total" style="left: 3.662%; right: 0%;"></div>
              <div class="network-graph-bar request-timing queueing" style="left: 3.662%; right: 96.3369%;"></div>
              <div class="network-graph-bar request-timing blocking" style="left: 3.66307%; right: 96.3314%;"></div>
              <div class="network-graph-bar request-timing sending" style="left: 3.66858%; right: 96.3311%;"></div>
              <div class="network-graph-bar request-timing waiting" style="left: 3.66887%; right: 96.3284%;"></div>
              <div class="network-graph-bar request-timing receiving" style="left: 3.67156%; right: 0%;"></div>
            </div>
          </div>
        </td>
        <td class="corner"></td>
      </tr>
      <tr class="data-grid-filler-row revealed" style="height: auto;">
        <td class="bottom-filler-td"></td>
        <td class="bottom-filler-td"></td>
        <td class="bottom-filler-td"></td>
        <td class="bottom-filler-td"></td>
        <td class="bottom-filler-td"></td>
        <td class="bottom-filler-td"></td>
        <td class="bottom-filler-td"></td>
        <td class="bottom-filler-td"></td>
        <td class="bottom-filler-td"></td>
        <td class="corner bottom-filler-td"></td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="network-timeline-grid small" style="left: 703px;">
    <style type="text/css">/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

      .resources-dividers {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        z-index: -100;
        bottom: 0;
      }

      .resources-event-dividers {
        position: absolute;
        left: 0;
        right: 0;
        height: 100%;
        top: 0;
        z-index: 300;
        pointer-events: none;
      }

      .resources-dividers-label-bar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.85);
        background-clip: padding-box;
        height: 20px;
        z-index: 200;
        pointer-events: none;
        overflow: hidden;
      }

      .resources-divider {
        position: absolute;
        width: 1px;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.1);
      }

      .resources-event-divider {
        position: absolute;
        width: 2px;
        top: 0;
        bottom: 0;
        z-index: 300;
      }

      .resources-divider-label {
        position: absolute;
        top: 4px;
        right: 3px;
        font-size: 80%;
        white-space: nowrap;
        pointer-events: none;
      }

      .timeline-grid-header {
        height: 20px;
        pointer-events: none;
      }

      .timeline-curtain-left, .timeline-curtain-right {
        background - color: hsla(0, 0%, 80%, 0.5);
        position: absolute;
        top: 0;
        height: 100%;
        z-index: 300;
        pointer-events: none;
        border: 1px none hsla(0, 0%, 70%, 0.5);
      }

      .timeline-curtain-left {
        left: 0;
        border-right-style: solid;
      }

      .timeline-curtain-right {
        right: 0;
        border-left-style: solid;
      }

      /*# sourceURL=ui_lazy/timelineGrid.css */</style>
    <div class="resources-dividers"></div>
    <div class="timeline-grid-header">
      <div class="resources-event-dividers">
        <div class="network-event-divider network-red-divider" style="left: 3.65409%;"></div>
        <div class="network-event-divider network-blue-divider" style="left: 3.6548%;"></div>
      </div>
      <div class="resources-dividers-label-bar"></div>
    </div>
    <div class="timeline-curtain-left"></div>
    <div class="timeline-curtain-right"></div>
  </div>
  <div class="data-grid-resizer" style="cursor: col-resize; left: 178px;"></div>
  <div class="data-grid-resizer" style="cursor: col-resize; left: 221px;"></div>
  <div class="data-grid-resizer" style="cursor: col-resize; left: 298px;"></div>
  <div class="data-grid-resizer" style="cursor: col-resize; left: 417px;"></div>
  <div class="data-grid-resizer" style="cursor: col-resize; left: 488px;"></div>
  <div class="data-grid-resizer" style="cursor: col-resize; left: 555px;"></div>
  <div class="data-grid-resizer" style="cursor: col-resize; left: 661px;"></div>
  <div class="data-grid-resizer" style="cursor: col-resize; left: 703px;"></div>
</div>
