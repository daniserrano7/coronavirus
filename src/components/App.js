import React from 'react';
import '../css/App.css';

import Sidebar from './Sidebar';
import MapComponent from './MapComponent';

const App = ({data}) => {
	return (
		<div className="app">
			<Sidebar data={data}/>
			<MapComponent data={data}/>
			<div className="list">
				<table className="list-table"></table>
			</div>
		</div>
	)
}

export default App;