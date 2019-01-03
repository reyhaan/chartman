import React from 'react'
import { Layout, Button, Card, Icon, Avatar } from 'antd'
import './style.scss'
import PropTypes from 'prop-types';
import ChartFactory from './ChartFactory'

const { Content } = Layout
const { Meta } = Card

class Chartman extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			chartID: `chart_${Math.floor((Math.random() * 10000) + 1)}`,
		}
	}
	
	componentDidMount() {
		ChartFactory(this.props.type).createChart(this.state.chartID, this.props.props);
	}
	
  render() {
    return (
			<Card style={{ marginBottom: '10px' }}>
				<div id={this.state.chartID} className="chart-container"></div>
			</Card>
    )
  }
}

Chartman.propTypes = {
	type: PropTypes.string,
	props: PropTypes.shape({
		dimension: PropTypes.array,
		measure: PropTypes.array,
		aggr: PropTypes.string,
		dimensionLabel: PropTypes.string,
		measureLabel: PropTypes.string
	})
}

Chartman.defaultProps = {
	type: '',
	props: {
		dimension: [],
		measure: [],
		aggr: '',
		dimensionLabel: '',
		measureLabel: ''
	}
}

export default Chartman