import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard'

const { Content } = Layout

class App extends React.Component {
  render() {
    return (
			<Content className="content">
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</Content>
    )
  }
}

export default App