import React from 'react'
import { Layout, Button, Card, Icon, Avatar } from 'antd'
import nv from 'nvd3'
import d3 from 'd3'
import './style.scss'

const { Content } = Layout
const { Meta } = Card
let barChart = '';

class BarChart extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			chartID: `chart_${Math.floor((Math.random() * 10000) + 1)}`,
			dimension: props.data.dimension,
			measure: props.data.measure,
			aggr: props.data.aggr,
			dimensionLabel: props.data.dimensionLabel,
			measureLabel: props.data.measureLabel
		}
	}
	
	componentDidMount() {
		this.createBarChart();
	}
	
	createBarChart() {
		barChart = nv.models.discreteBarChart()
			.x(function(d) { return d.label })    //Specify the data accessors.
			.y(function(d) { return d.value });
		
		barChart.color(['#5c6ac4']);
		
		barChart.xAxis.rotateLabels(-45);

		d3.select(`#${this.state.chartID}`).append('svg')
			.datum(this.exampleData())
			.call(barChart);

		nv.utils.windowResize(barChart.update);

		return barChart;
	}
	
	dataAggregator(dimension, measure, aggr) {
		if(aggr === 'sum') {
			var map = {};
			var data = [];
			dimension.forEach((dim, index) => {
				if (map[dim] === undefined) {
					map[dim] = 0;
				}
				map[dim] = map[dim] + measure[index];
			});
			Object.keys(map).forEach(function(key) {
				data.push({"label": key, "value": map[key]});
			});
			return data;
		}
	}
	
	exampleData() {
		return  [ 
			{
				key: "Product count by category",
				values: this.dataAggregator(this.state.dimension, this.state.measure, this.state.aggr)
			}
		];
	}
	
  render() {
    return (
				<Card style={{ marginBottom: '10px' }}>
					<div id={this.state.chartID} className="chart-container"></div>
				</Card>
    )
  }
}

export default BarChart