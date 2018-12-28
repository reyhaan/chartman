import React from 'react'
import { Row, Col, Button, Spin, Icon, Modal } from 'antd'
import axios from 'axios';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
import {Controlled as CodeMirror} from 'react-codemirror2'
import { format } from 'json-string-formatter'
import './style.scss'

class Codearea extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			outputReadOnly: false,
			inputReadOnly: false,
			inputValue: '',
			outputValue: '',
			isLoading: false,
			commonOptions: {
				lineWrapping: true,
				lineNumbers: true,
				mode: 'javascript'
			},
			isError: false,
			error: ''
		}
	}
	
	componentDidMount() {}
	
	error(message) {
		Modal.error({
			title: 'Error!',
			content: message,
		});
	}

	process() {
		this.setState({isLoading: true});
		var payload = this.state.inputValue === '' ? "{}" : this.state.inputValue;
		try {
			payload = JSON.parse(payload);
			axios({
				method: 'post',
				url: 'http://159.203.11.15/api/products',
				timeout: 1000 * 10,
				data: {
					data: payload
				}
			})
			.then((response) => {
				this.setState({isError: false});
				this.setState({
					outputValue: format(JSON.stringify(response.data))
				})
			})
			.catch((error) => {
				if (error.code === "ECONNABORTED") {
					this.error("Request timed out!");
				} else {
					error = JSON.stringify(error.response.data);
					this.setState({
						outputValue: "Oops! Something went wrong...",
						isError: true,
						error
					})
					this.error(error);
				}
			})
			.then(() => {
				setTimeout(() => {
					this.setState({isLoading: false});
				}, 500);
			});
		} catch(error) {
			this.setState({
				outputValue: "Oops! Something went wrong...",
				isError: true,
				isLoading: false,
				error
			})
			this.error(`${error.message}`);
		}
	}
	
	render() {
		
		var optionsInput = Object.assign({ 
			readOnly: this.state.inputReadOnly 
		}, this.state.commonOptions);
		
		var optionsOutput = Object.assign({
			readOnly: this.state.outputReadOnly,
		}, this.state.commonOptions);
		
		return (
			<div className="gutter-example codearea">
				<Row>
					<Col className="gutter-row" span={11}>
						<div className="gutter-box codearea-container" style={{ marginLeft: 20 }}>
							<CodeMirror
								value={this.state.inputValue}
								options={optionsInput}
								onBeforeChange={(editor, data, inputValue) => {
									this.setState({inputValue});
								}}
								onChange={(editor, data, value) => {
								}}
							/>
						</div>
					</Col>
					
					<Col className="gutter-row" span={2}>
						<div className="gutter-box">
							<div className="status-container">
								<div style={{ lineHeight: '625px', display: 'block', height: '50px', width: '100%' }}>
									{ (!this.state.isLoading && !this.state.isError) && <Icon style={{ fontSize: 26 }} type="swap" /> }
									{ (this.state.isLoading && !this.state.isError) && <Icon style={{ fontSize: 30 }} type="loading" /> }
									{ (!this.state.isLoading && this.state.isError) && <Icon style={{ fontSize: 30, color: 'red' }} type="exclamation" /> }
								</div>
							</div>
						</div>
					</Col>
					
					<Col className="gutter-row" span={11}>
						<div className="gutter-box codearea-container" style={{ marginRight: 20 }}>
							<CodeMirror
								value={this.state.outputValue}
								options={optionsOutput}
								onBeforeChange={(editor, data, outputValue) => {
									this.setState({outputValue});
								}}
								onChange={(editor, data, value) => {
								}}
							/>
						</div>
					</Col>
				</Row>
				<Row className="action-button-container">
					<Button type="primary" size="large" onClick={() => {this.process()}}>Process</Button>
				</Row>
			</div>
		)
	}
}

export default Codearea