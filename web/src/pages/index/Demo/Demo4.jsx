import React, { Component } from 'react'
import { getUserList } from '../../../api/user'
class Demo1 extends Component {
	state = {
		users: []
	}
	componentDidMount() {
		this.queryUserList()
	}

	queryUserList = params => {
		getUserList().then(users => {
			if (Array.isArray(users)) {
				this.setState({ users })
			}
		})
	}

	renderEmails = users =>
		users.map(({ email }) => (
			<p key={email} style={{ color: 'red' }}>
				{email}
			</p>
		))

	render() {
		const { users = [] } = this.state
		return (
			<div>
				{this.renderEmails(users)}
				<UserList users={users} />
			</div>
		)
	}
}

export default Demo1

const UserList = ({ users }) => users.map(item => <UserItem user={item} />)

const UserItem = ({ user: { email } }) => (
	<p style={{ color: 'blue' }} key={email}>
		{email}
	</p>
)
