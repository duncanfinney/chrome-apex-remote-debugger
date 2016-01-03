import React from 'react'
import {render} from 'react-dom'

import App from './App'

// [B](f: (A) ⇒ [B]): [B]  ; Although the types in the arrays aren't strict (:
Array.prototype.flatMap = function(lambda) {
  return Array.prototype.concat.apply([], this.map(lambda));
};

render(<App requests={require('./fixtures/responses.json')}/>, document.querySelector('#app'));
