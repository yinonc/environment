import React from 'react'
import './scss/proposalItem.scss'

class ProposalItem extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="proposal-item">
				<img src={this.props.imageBefore}
					className="image-item"
				/>
				<div>
					<span>{this.props.topic}</span>
				</div>
				<span>{this.props.address}</span>
			</div>
		)
	}
}

export default ProposalItem
