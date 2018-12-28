import React from 'react'
import { Layout, Button, Card, Icon, Avatar } from 'antd'
import './style.scss'
import LineChartObject from './logic'

const { Content } = Layout
const { Meta } = Card

class LineChart extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			chartID: `chart_${Math.floor((Math.random() * 10000) + 1)}`,
		}
	}
	
	componentDidMount() {
		LineChartObject.createChart(this.state.chartID, this.props.data);
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