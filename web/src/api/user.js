const getUserList = () =>
	fetch('http://119.29.134.187:8000/user/query', {
		method: 'get',
		type: 'json'
	}).then(res => res.json())

export { getUserList }
