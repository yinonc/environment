import React from 'react'
import './scss/main.scss'
import ProposalItem from './proposalItem'

const arrayOfProposalItems = [
	{
		id: 1,
		address: 'Modi\'in',
		imageBefore: 'http://2.bp.blogspot.com/-vvkTGLHsYfY/TzPt2ge0QgI/AAAAAAAAAAc/0ctgovQTrDQ/s1600/20120209_162424%5B2%5D.jpg',
		imageAfter: '1.jpg',
		resolved: true,
		topic: 'first topic',
		description: 'first description',
		owner: 'Yinon',
		date: 'date',
		resolver: 'resolver',
		resolvedData: 'resolvedData'
	},
	{
		id: 4,
		address: 'Zichron Yaakov',
		imageBefore: 'https://www.raanana.muni.il/Environment/DirectRegistration/PublishingImages/Environmentalhazards.jpg',
		imageAfter: null,
		resolved: false,
		topic: 'second topic',
		description: 'second description',
		owner: 'Noam',
		date: 'date',
		resolver: null,
		resolvedData: null
	}
]

class Main extends React.Component {
	constructor(props) {
		super(props)
	}

	fetchDataFromServer() {
		// fetch
		// this.arrayOfProposalItems
	}

	render() {
		return (
			<div className="main">
				{arrayOfProposalItems.map((item, index) => (
					<ProposalItem key={`${item.owner}_${index}`}
						{...item}
					/>
				))}
			</div>
		)
	}
}

export default Main
