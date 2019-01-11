import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Tabs, Col, Row, Button, Input, Select, Card } from 'antd'
import './style.scss'
import logo from '../../assets/shopify-logo.png'
import { productsStore } from '../../stores'
import { observer } from 'mobx-react'

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;
const InputGroup = Input.Group;
const Option = Select.Option;

@observer
class Task extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
  render() {
    return (
			<Layout className="layout dashboard">
				<Header>
					<img className="logo" src={logo} alt="" />
					<p className="logo-sub-brand">tryouts</p>
				</Header>
				<Content style={{ padding: '0 50px' }}>
					
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Shopify © 2019
				</Footer>
			</Layout>
    )
  }
}

export default Task