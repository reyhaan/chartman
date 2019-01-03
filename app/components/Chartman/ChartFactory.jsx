import BaseChart from './BaseChart'
import CHARTS_ENUM from './utils/enum'
import BarChart from './bar-chart'
import LineChart from './line-chart'

const ChartFactory = function(name) {
	const baseChart = new BaseChart(name);
	let newChart;
	
	if (name === CHARTS_ENUM.barChart) {
		newChart = Object.assign(baseChart, BarChart);
	} else if (name === CHARTS_ENUM.lineChart) {
		newChart = Object.assign(baseChart, LineChart);
	}
	
  return newChart;
}

export default ChartFactory;