import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Tabs, Col, Row, Button, Input, Select, Card } from 'antd'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import './style.scss'
import logo from '../../assets/shopify-logo.png'
import Chartman from '../../components/Chartman'
import Codearea from '../../components/Codearea'
import { productsStore } from '../../stores'
import { observer } from 'mobx-react'

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;
const InputGroup = Input.Group;
const Option = Select.Option;

@observer
class Dashboard extends React.Component {
	
	constructor(props) {
		super(props);
		console.log(productsStore)
		this.state = {
			dimensionList: [],
			measureList: [],
			lineChartData: {
				dimension: [],
				measure: [],
				dimensionLabel: '',
				measureLabel: '',
				aggr: 'sum'
			},
			barChartData: {
				dimension: [],
				measure: [],
				dimensionLabel: '',
				measureLabel: '',
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
				barChartData: tempBarChart,
				dimensionList: Object.keys(products[0]),
				measureList: Object.keys(products[0])
			})
		})
		.catch((error) => {
			this.setState({
				
			})
		})
		.then(() => {
			
		});
	}
	
	dimensionItems() {
		var array = [];
		this.state.dimensionList.map((item) => {
			array.push(
				<Option value={item}>{item}</Option>
			)												 
		});
		return (
			{array}
		)
	}
	
	measureItems() {
		var array = [];
		this.state.dimensionList.map((item) => {
			array.push(
				<Option value={item}>{item}</Option>
			)												 
		});
		return (
			{array}
		)
	}
	
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
								<Row>
									<Col span={18}>
										<Chartman type="lineChart" props={this.state.lineChartData} />
										<Chartman type="barChart" props={this.state.barChartData} />
									</Col>
									<Col className="options-column" span={6}>
										<Card
											title="Data Selection"
											style={{ width: "100%" }}
										>
											<p className="input-title">Dimension</p>
											<Select title="Dimension" style={{ width: '100%' }} defaultValue="">
												{this.state.dimensionList.map((item, index) => (
													<Option key={index} value={item}>{item}</Option>
												))}
											</Select>
											
											<p className="input-title" style={{ marginTop: 15 }}>Measure</p>
											<InputGroup compact>
												<Select style={{ width: '40%' }} defaultValue="Sum">
													<Option value="Option2-1">Sum</Option>
													<Option value="Option2-2">Count</Option>
												</Select>
												<Select style={{ width: '60%' }} defaultValue="">
													{this.state.measureList.map((item, index) => (
														<Option key={index} value={item}>{item}</Option>
													))}
												</Select>
											</InputGroup>
										</Card>
										
									</Col>
								</Row>
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