//Webpack configuartion
if (module.hot) {
    module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>React starter kit</h1>, document.getElementById('app'));