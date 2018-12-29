const BaseChart = function(name) {
	this.name = name || '';
}

BaseChart.prototype.dataAggregator = function(dimension, measure, aggr) {
	if (aggr === 'sum') {
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

export default BaseChart;