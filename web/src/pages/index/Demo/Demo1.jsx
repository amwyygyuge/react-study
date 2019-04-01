import React, { Component } from 'react'
const prefix = 'this is a'
class Demo1 extends Component {
	state = {
		title: 'state title'
	}
	handleButtonChange = () => {
		this.setState({ title: 'changed' })
	}
	render() {
		const { title } = this.state
		return (
			<div>
				<p>this is a {title}</p>
				<p>
					{prefix} {this.props.title}
				</p>
				<button onClick={this.handleButtonChange}>change state title</button>
			</div>
		)
	}
}

export default Demo1
