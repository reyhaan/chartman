import React from 'react'
import { Layout, Button, Card, Icon, Avatar } from 'antd'
import './style.scss'

const { Content } = Layout
const { Meta } = Card

class LineChart extends React.Component {
  render() {
    return (
			<Content className="content">
				<Card
					style={{ width: 300 }}
					cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
				>
					<Meta
						avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
						title="Card title"
						description="This is the description"
					/>
				</Card>
				<Button type="primary" size="large">Create</Button>
			</Content>
    )
  }
}

export default LineChart