import React from 'react';
import '../css/App.css';

import Header from './Header';
import MapComponent from './MapComponent';

const App = ({data}) => {
	return (
		<div className="app">
			<Header/>
			<MapComponent data={data}/>
		</div>
	)
}

export default App;