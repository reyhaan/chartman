import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './pages/App'
import 'antd/dist/antd.css'

class Index extends React.Component {
  render() {
    return (
			<Router>
				<Switch>
					<Route path="/" component={App} />
				</Switch>
			</Router>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept(function () {
    window.location.reload();
  });
	module.hot.dispose(function() {
    // module is about to be replaced
  });
}

