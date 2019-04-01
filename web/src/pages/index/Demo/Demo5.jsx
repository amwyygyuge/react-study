import React, { Component } from 'react'
import { getUserList } from '../../../api/user'
import { Form, Select, Input, Button } from 'igroot'
const Item = Form.Item
const Option = Select.Option
class Demo1 extends Component {
	state = {
		users: []
	}
	componentDidMount() {
		this.queryUserList()
		const { setFieldsValue } = this.props.form
		setFieldsValue({
			name: 'dwadwa'
		})
	}

	queryUserList = params => {
		getUserList().then(users => {
			if (Array.isArray(users)) {
				this.setState({ users })
			}
		})
	}

	handleFormSubmit = () => {
		const { getFieldsValue } = this.props.form
		const val = getFieldsValue()
		console.log(val)
		this.queryUserList(val)
	}

	render() {
		const { users = [] } = this.state
		const { getFieldDecorator } = this.props.form
		const _users = users.map(({ email }) => <Option key={email}>{email}</Option>)
		return (
			<Form>
				<Item>{getFieldDecorator('name')(<Input />)}</Item>
				<Item>{getFieldDecorator('user_email')(<Select>{_users}</Select>)}</Item>
				<Item>
					<Button onClick={this.handleFormSubmit}>提交</Button>
				</Item>
			</Form>
		)
	}
}

export default Form.create()(Demo1)
