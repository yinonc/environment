import React from 'react'
import './scss/header.scss'

const headerMap = ['My Environment', 'Profile', 'Settings', 'About', 'Contact']

class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="header">
				<div className="items-wrapper">
					{headerMap.map((item, index) => (
						<a className="menu-item"
							key={`item_${index}`}
							href={'#'}
						>
							{item}
						</a>
					))}
				</div>
			</div>
		)
	}
}

export default Header
