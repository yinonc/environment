import React from 'react'
import './scss/app.scss'
import Header from './header'
import Main from './main'
import Footer from './footer'
import Contact from './contact'
import About from './about'
import Settings from './settings'
import Profile from './profile'

const headerMap = [
	{ name: 'My Environment' },
	{ name: 'Profile' },
	{ name: 'About' },
	{ name: 'Setting' },
	{ name: 'Contact' }
]

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tab: 'My Environment'
		}
	}

	onItemClick(tabName) {
		this.setState({ tab: tabName })
	}

	getTab(tabName) {
		switch (tabName) {
		case 'My Environment':
			return <Main />

		case "Profile":
			return <Profile />

		case 'About':
			return <About />

		case 'Setting':
			return <Settings />
			
		case 'Contact':
			return <Contact />
			
		default:
			return <Main />
		}
	}

	render() {
		return (
			<div>
				<Header
					onItemClick={this.onItemClick.bind(this)}
					headerMap={headerMap}
				/>
				{this.getTab(this.state.tab)}
				<Footer />
			</div>
		)
	}
}

export default App
