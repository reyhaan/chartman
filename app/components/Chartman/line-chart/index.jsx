import nv from 'nvd3'
import d3 from 'd3'

const LineChartObject = {
	
	ticks: [],
	
	getData: function(props) {
		return [
				{
					values: this.dataAggregator(props.dimension, props.measure, 'sum'),
					key: "Quantity vs Category",
					color: "#5c6ac4",
				}
		];
	},
	
	// overriding base class method
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
			Object.keys(map).forEach((key, index) => {
				data.push({x: this.ticks[index], y: map[key]});
			});
			return data;
		}
	},
	
	createChart: function(chartID, props) {
		nv.addGraph(() => {
			var lineChart = nv.models.lineChart()
					.options({
							duration: 300,
							useInteractiveGuideline: true
					});
			
			var dimensionSet = new Set(props.dimension);
			dimensionSet = [...dimensionSet];
			
			for (var i = 0; i < dimensionSet.length; i++) {
				this.ticks.push(i);
			}
			
			lineChart.xAxis
					.axisLabel(props.dimensionLabel)
					.tickValues(this.ticks)
					.tickFormat(function(d) {
						return dimensionSet[d];
					})
					.staggerLabels(false);
			
			lineChart.xAxis.rotateLabels(-45);
			
			lineChart.yAxis
					.axisLabel(props.measureLabel)
					.tickFormat(function(d) {
							if (d == null) {
									return 'N/A';
							}
							return d3.format('')(d);
					});

			d3.select(`#${chartID}`).append('svg')
				.datum(this.getData(props))
				.transition().duration(500)
				.call(lineChart)
				.style({ height: 300 });

			nv.utils.windowResize(lineChart.update);

			return lineChart;
		});
	}
}

export default LineChartObject;