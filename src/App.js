import React from 'react'
import './scss/app.scss'
import Header from './header'
import Main from './main'
import Footer from './footer'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		)
	}
}

export default App
