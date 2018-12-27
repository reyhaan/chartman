import React from 'react'
import { Layout, Button, Card, Icon, Avatar } from 'antd'
import nv from 'nvd3'
import d3 from 'd3'
import './style.scss'

const { Content } = Layout
const { Meta } = Card
let lineChart = '';
const ticks = [];

class LineChart extends React.Component {
	
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
		this.createLineChart();
	}
	
	createLineChart() {
		nv.addGraph(() => {
			lineChart = nv.models.lineChart()
					.options({
							duration: 300,
							useInteractiveGuideline: true
					});
			
			var dimensionSet = new Set(this.state.dimension);
			dimensionSet = [...dimensionSet];
			
			for (var i = 0; i < dimensionSet.length; i++) {
				ticks.push(i);
			}
			
			// chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
			lineChart.xAxis
					.axisLabel(this.state.dimensionLabel)
					.tickValues(ticks)
					.tickFormat(function(d) {
						return dimensionSet[d];
					})
					.staggerLabels(false);
			
			lineChart.xAxis.rotateLabels(-45);
			
			lineChart.yAxis
					.axisLabel(this.state.measureLabel)
					.tickFormat(function(d) {
							if (d == null) {
									return 'N/A';
							}
							return d3.format('')(d);
					});

			d3.select(`#${this.state.chartID}`).append('svg')
				.datum(this.chartDataCreator())
				.transition().duration(500)
				.call(lineChart)
				.style({ height: 300 });

			nv.utils.windowResize(lineChart.update);

			return lineChart;
		});
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
			Object.keys(map).forEach(function(key, index) {
				data.push({x: ticks[index], y: map[key]});
			});
			return data;
		}
	}
	
	chartDataCreator() {
		return [
				{
						values: this.dataAggregator(this.state.dimension, this.state.measure, 'sum'),
						key: "Product Price vs Category",
						color: "#5c6ac4",
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

export default LineChart