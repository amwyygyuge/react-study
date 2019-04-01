import React, { Component } from 'react'
import { Row, Col, Table, Button, message, Popconfirm } from 'igroot'
import { deleteSupplier } from '@/api/list'
import SupplierEditModal from './EditModal'
export class List extends Component {
	state = {
		expandKeys: [],
		columns: [
			{
				title: '中文名',
				dataIndex: 'cname',
				width: 150
			},
			{
				title: 'email',
				dataIndex: 'email',
				width: 150
			},
			{
				title: 'node版本',
				dataIndex: 'node',
				width: 200
			},
			{
				title: '创建时间',
				dataIndex: 'createdAt',
				width: 200
			},
			{
				title: 'sl版本',
				dataIndex: 'sl.version',
				width: 200
			},
			{
				title: '操作',
				dataIndex: 'handel',
				width: 80,
				render: (text, row) => (
					<div style={{ textAlign: 'center' }}>
						<a style={{ marginRight: 8 }} onClick={() => this.edit(row)}>
							编辑
						</a>
						<Popconfirm title='确定删除？' onConfirm={() => this.del(row.id)}>
							<a>删除</a>
						</Popconfirm>
					</div>
				)
			}
		]
	}

	del = id => {
		if (this.delLoading) {
			return false
		}
		const loading = message.loading('删除中，请稍后....')
		deleteSupplier({ id: [ id ] }).then(res => {
			loading()
			this.delLoading = false
			if (res.data.deleteSupplier.result) {
				message.success('删除成功')
				this.props.handleReload()
			}
		})
	}

	edit = row => {
		this.Update(row)
	}

	render() {
		const { columns } = this.state
		return (
			<Row>
				<Col span={24} style={{ textAlign: 'right' }}>
					<Button type='primary' onClick={() => this.Create()} style={{ marginRight: 8 }}>
						新增
					</Button>
				</Col>
				<Col span={24} style={{ marginTop: 8 }}>
					<Table columns={columns} {...this.props.tableProps} />
				</Col>
				<SupplierEditModal
					getCreateFunction={fun => (this.Create = fun)}
					getUpdateFunction={fun => (this.Update = fun)}
					reload={this.props.handleReload}
				/>
			</Row>
		)
	}
}
