import React, { Component } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';


class Layout extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		);
	}
}

export default Layout;
