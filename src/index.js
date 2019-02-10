import React, { Component } from 'react';
import ReactDom from 'react-dom';


class App extends Component {
	render() {
		return (
			<h2>Hello World</h2>
		);
	}
}


ReactDom.render(<App />, document.getElementById('root'));
