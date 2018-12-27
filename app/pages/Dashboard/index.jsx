import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Tabs } from 'antd'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import './style.scss'
import logo from '../../assets/shopify-logo.png'
import LineChart from '../../components/charts/line-chart'
import BarChart from '../../components/charts/bar-chart'
import Codearea from '../../components/Codearea'

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

class Dashboard extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			lineChartData: {
				dimension: [],
				measure: [],
				name: '',
				aggr: 'sum'
			},
			barChartData: {
				dimension: [],
				measure: [],
				name: '',
				aggr: 'sum'
			}
		}
	}
	
	componentDidMount() {
		this.prepareChartData();
	}
	
	prepareChartData() {
		axios.get('http://159.203.11.15/api/products/file')
		.then((response) => {
			console.log(response);
			
			var products = response.data.ProductCollection;
			
			var tempLineChart = {
				dimension: [],
				measure: [],
				dimensionLabel: 'Category',
				measureLabel: 'Quantity',
				aggr: 'sum'
			};
			
			var tempBarChart = {
				dimension: [],
				measure: [],
				dimensionLabel: 'Category',
				measureLabel: 'Quantity',
				aggr: 'sum'
			};
			
			products.forEach((product) => {
				tempLineChart.dimension.push(product.Category);
				tempLineChart.measure.push(product.Quantity);
				
				tempBarChart.dimension.push(product.Category);
				tempBarChart.measure.push(product.Quantity);
			});
			
			this.setState({
				lineChartData: tempLineChart,
				barChartData: tempBarChart
			})
		})
		.catch((error) => {
			this.setState({
				
			})
		})
		.then(() => {
			
		});
	}
	
  render() {
    return (
			<Layout className="layout dashboard">
				<Header>
					<img className="logo" src={logo} alt="" />
				</Header>
				<Content style={{ padding: '0 50px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Mohammad Rehaan</Breadcrumb.Item>
						<Breadcrumb.Item>Demo App</Breadcrumb.Item>
					</Breadcrumb>
					<div style={{ background: '#fff', padding: 10, paddingTop: 0, height: 760 }}>
						<Tabs animated={false} defaultActiveKey="1" size="medium">
							<TabPane tab="Process" key="1">
								<Codearea />
							</TabPane>
							
							<TabPane tab="Visualize" key="2">
								<LineChart data={this.state.lineChartData} />
								<BarChart data={this.state.barChartData} />
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