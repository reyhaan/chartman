import nv from 'nvd3'
import d3 from 'd3'

const BarChartObject = {
	
	getData: function(props) {
		return  [ 
			{
				key: "Product count by category",
				values: this.dataAggregator(props.dimension, props.measure, props.aggr)
			}
		];
	},
	
	dataAggregator: function(dimension, measure, aggr) {
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
	},
	
	createChart: function(chartID, props) {
		var barChart = nv.models.discreteBarChart()
			.x(function(d) { return d.label })    //Specify the data accessors.
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