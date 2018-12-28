import React from 'react'
import { Layout, Button, Card, Icon, Avatar } from 'antd'
import './style.scss'
import PropTypes from 'prop-types';
import BarChartObject from './logic'

const { Content } = Layout
const { Meta } = Card

class BarChart extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			chartID: `chart_${Math.floor((Math.random() * 10000) + 1)}`,
		}
	}
	
	componentDidMount() {
		BarChartObject.createChart(this.state.chartID, this.props.data);
	}
	
  render() {
    return (
			<Card style={{ marginBottom: '10px' }}>
				<div id={this.state.chartID} className="chart-container"></div>
			</Card>
    )
  }
}

BarChart.propTypes = {
	data: PropTypes.shape({
		dimension: PropTypes.array,
		measure: PropTypes.array,
		aggr: PropTypes.string,
		dimensionLabel: PropTypes.string,
		measureLabel: PropTypes.string
	})
}

BarChart.defaultProps = {
	data: {
		dimension: [],
		measure: [],
		aggr: '',
		dimensionLabel: '',
		measureLabel: ''
	}
}

export default BarChart