import React from 'react'
import './scss/header.scss'

class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="header">
				<div className="items-wrapper">
					{this.props.headerMap.map((item, index) => (
						<a
							className="menu-item"
							onClick={() => this.props.onItemClick(item.name)}
							key={`item_${index}`}
							href={'#'}
						>
							{item.name}
						</a>
					))}
				</div>
			</div>
		)
	}
}

export default Header
