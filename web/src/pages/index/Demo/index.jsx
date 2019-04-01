import React, { Component } from 'react'
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import Demo3 from './Demo3'
import Demo4 from './Demo4'
import Demo5 from './Demo5'
import Demo6 from './Demo6'

import './index.less'
class Demo extends Component {
	render() {
		return (
			<div className='demo-block'>
				<Demo1 title='props title' />
				<Demo2 />
				<Demo3 />
				<Demo4 />
				<Demo5 />
				<Demo6 />
			</div>
		)
	}
}

export { Demo }
