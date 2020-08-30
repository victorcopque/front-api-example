import React from 'react';
import Nav from './Nav';
import './style.css';

export default function BaseLayout(props) {
	return (
		<div className="general">
			<Nav />
			<div className="main-content">
				{props.children}
			</div>
		</div>
	)
}