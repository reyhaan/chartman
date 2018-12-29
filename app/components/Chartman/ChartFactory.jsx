import BaseChart from './BaseChart' 
import BarChartObject from './bar-chart'
import LineChartObject from './line-chart'

const ChartFactory = function(name) {
	const baseChart = new BaseChart(name);
	let newChart;
	
	if (name === 'barChart') {
  	newChart = Object.assign(baseChart, BarChartObject);
	} else if (name === 'lineChart') {
		newChart = Object.assign(baseChart, LineChartObject);
	}
	
  return newChart;
}

export default ChartFactory;