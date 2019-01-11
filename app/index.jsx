import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './pages/App'
import { Provider } from 'mobx-react'
import { stores } from './stores'

// add all required css libraries here at the root
import 'antd/dist/antd.css'
import './style/override.scss'
import 'nvd3/build/nv.d3.css'

class Index extends React.Component {
  render() {
    return (
			<Router>
				<Provider stores={stores}>
					<App />
				</Provider>
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

