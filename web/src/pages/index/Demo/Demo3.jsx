import React, { Component } from 'react'
import { getUserList } from '../../../api/user'
class Demo1 extends Component {
	state = {
		users: [],
		cnames: []
	}
	componentDidMount() {
		this.queryUserList()
	}

	queryUserList = params => {
		getUserList().then(users => {
			console.log(users)
			if (Array.isArray(users)) {
				const { cnames } = this.state
				users.forEach(({ cname }) => cnames.push(cname))
				this.setState({ users, cnames })
			}
		})
	}

	render() {
		const { users = [], cnames } = this.state
		return (
			<div>
				<p>{cnames.join(',')}</p>
				{users.map(({ email }) => (
					<p key={email} style={{ color: 'red' }}>
						{email}
					</p>
				))}
			</div>
		)
	}
}

export default Demo1
