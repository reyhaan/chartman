import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Tabs } from 'antd'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import './style.scss'
import logo from '../../assets/shopify-logo.png'
import Chartman from '../../components/Chartman'
import Codearea from '../../components/Codearea'
import Visualizer from '../Visualizer'

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

class Dashboard extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {}
	}
	
	componentDidMount() {}
	
  render() {
    return (
			<Layout className="layout dashboard">
				<Header>
					<img className="logo" src={logo} alt="" />
					<p className="logo-sub-brand">tryouts</p>
				</Header>
				<Content style={{ padding: '0 50px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Mohammad Rehaan</Breadcrumb.Item>
						<Breadcrumb.Item>Demo App</Breadcrumb.Item>
					</Breadcrumb>
					<div className="dashboard-container">
						<Tabs animated={false} defaultActiveKey="1" size="medium">
							<TabPane tab="Process" key="1">
								<Codearea />
							</TabPane>
							
							<TabPane tab="Visualize" key="2">
								<Visualizer />
							</TabPane>
						</Tabs>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Shopify © 2019
				</Footer>
			</Layout>
    )
  }
}

export default Dashboard