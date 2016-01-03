'use strict';
//
//// [B](f: (A) ⇒ [B]): [B]  ; Although the types in the arrays aren't strict (:
//Array.prototype.flatMap = function(lambda) {
//  return Array.prototype.concat.apply([], this.map(lambda));
//};
//
//let responses = [];
//
//function collapse(e) {
//  e.preventDefault();
//  const id = parseInt(this.dataset.collapseId, 10);
//  $(`.json-data-${id}`).JSONView(responses[id].result, {collapsed: true});
//}
//
//function expand(e) {
//  e.preventDefault();
//  const id = parseInt(this.dataset.expandId, 10);
//  $(`.json-data-${id}`).JSONView(responses[id].result, {collapsed: false});
//}
//
//const redrawTable = () => {
//  const div = document.getElementById('app');
//  div.innerHTML = `
//    <table id="table">
//      <thead>
//        <tr>
//          <td>Started</td>
//          <td>Latency</td>
//          <td>Action</td>
//          <td>Method</td>
//          <td>Status</td>
//          <td>Result</td>
//        </tr>
//      </thead>
//      <tbody>
//        ${responses.map((r, i) => `
//        <tr>
//          <td>${r.startedDateTime}</td>
//          <td>${r.time}</td>
//          <td>${r.action}</td>
//          <td>${r.method}</td>
//          <td>${r.statusCode}</td>
//          <td>
//            <div>
//              <a href="#" data-collapse-id="${i}">Collapse</a>
//              <a href="#" data-expand-id="${i}">Expand</a>
//            </div>
//            <div class="json-data-${i}"></div>
//          </td>
//        </tr>
//        `).join('\n')}
//      </tbody>
//    </table>
//  `;
//
//  $('[data-collapse-id]').click(collapse);
//  $('[data-expand-id]').click(expand);
//
//  setTimeout(function() {
//    responses.forEach((r, i) => $(".json-data-" + i).JSONView(r.result, {collapsed: true}));
//  }, 16);
//  $('table').DataTable();
//};
//
//chrome.devtools.network.onRequestFinished.addListener(function (req) {
//
//  if (!req || !req.request || !req.request.url) return;
//
//  if (req.request.url.includes('/apexremote')) {
//
//    const time = parseInt(req.time, 10);
//    req.getContent(bodyString => {
//      const body = JSON.parse(bodyString);
//      const newResponses = body.flatMap(r => Object.assign({}, { startedDateTime: req.startedDateTime, time }, r));
//      responses = responses.concat(newResponses);
//      redrawTable();
//    });
//  }
//});

console.log('devtools window created');
