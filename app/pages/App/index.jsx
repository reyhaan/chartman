import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Task from '../Task'

const { Content } = Layout

class App extends React.Component {
  render() {
    return (
			<Content className="content">
				<Switch>
					<Route exact path="/" component={Task} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/task" component={Task} />
				</Switch>
			</Content>
    )
  }
}

export default App