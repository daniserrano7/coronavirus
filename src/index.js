import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import App from './components/App';

import getCsvPromise from './js/getCsvPromise';
import getCsvData from './js/getCsvData';

getCsvPromise().then(values => {
    const data = getCsvData(values);

    ReactDOM.render(<App data={data}/>, document.getElementById('root'));
});