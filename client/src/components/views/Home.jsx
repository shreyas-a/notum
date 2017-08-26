import React, { Component } from 'react'

import '../../styles/Home.scss'

class Home extends Component {
	componentDidMount = () => {
		window.document.title = 'Home'
	}

	render = () => (
		<div className='view-wrapper'>
            <h1>Hi!</h1>
		</div>
	)
}

export default Home
