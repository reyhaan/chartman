import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { Route, Switch } from 'react-router-dom'
import './style.scss'
import logo from '../../assets/shopify-logo.png'

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

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
					<div style={{ background: '#fff', padding: 24, height: 760 }}>
						
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Shopify ©2018 Created by Mohammad Rehaan
				</Footer>
			</Layout>
    )
  }
}

export default Dashboard