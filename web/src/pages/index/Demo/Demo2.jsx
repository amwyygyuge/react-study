import React, { Component } from 'react'
const prefix = 'this is a'
class Demo1 extends Component {
	state = {
		title: 'state title',
		visible: true
	}
	handleButtonChange = () => {
		this.setState({ visible: false })
	}

	renderButton = () => {
		return <button onClick={this.handleButtonChange}>change state title</button>
	}

	render() {
		const { title, visible } = this.state
		return (
			<div>
				<p>{console.log('log')}</p>
				<p>{visible ? 'visible' : 'unvisible'}</p>
				<p>{this.renderButton()}</p>
			</div>
		)
	}
}

export default Demo1
