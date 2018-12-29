import nv from 'nvd3'
import d3 from 'd3'

const BarChartObject = {
	
	getData(props) {
		return  [ 
			{
				key: "Product count by category",
				values: this.dataAggregator(props.dimension, props.measure, props.aggr)
			}
		];
	},
	
	createChart(chartID, props) {
		var barChart = nv.models.discreteBarChart()
			.x(function(d) { return d.label })
			.y(function(d) { return d.value });
		
		barChart.color(['#5c6ac4']);
		
		barChart.xAxis.rotateLabels(-45);

		d3.select(`#${chartID}`).append('svg')
			.datum(this.getData(props))
			.call(barChart);

		nv.utils.windowResize(barChart.update);

		return barChart;
	}

}

export default BarChartObject;