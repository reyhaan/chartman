import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Tabs } from 'antd'
import { Route, Switch } from 'react-router-dom'
import './style.scss'
import logo from '../../assets/shopify-logo.png'
import LineChart from '../../components/charts/line-chart'
import Codearea from '../../components/Codearea'

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

class Dashboard extends React.Component {
  render() {
    return (
			<Layout className="layout dashboard">
				<Header>
					<img className="logo" src={logo} alt="" />
				</Header>
				<Content style={{ padding: '0 50px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<div style={{ background: '#fff', padding: 10, paddingTop: 0, height: 760 }}>
						<Tabs animated={false} defaultActiveKey="1" size="medium">
							<TabPane tab="Process" key="1">
								<Codearea />
							</TabPane>
							
							<TabPane tab="Visualize" key="2">
								<LineChart />
							</TabPane>
						</Tabs>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Shopify © 2018
				</Footer>
			</Layout>
    )
  }
}

export default Dashboard