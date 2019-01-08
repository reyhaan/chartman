import React from 'react'
import { Layout, Icon } from 'antd'
import axios from 'axios'
import './style.scss'
import Chartman from '../../components/Chartman'

class Visualizer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
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
			<div className="visualizer-container">
				<Chartman type="lineChart" props={this.state.lineChartData} />
				<Chartman type="barChart" props={this.state.barChartData} />
			</div>
    )
  }
}

export default Visualizer