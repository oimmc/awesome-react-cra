import React from 'react'
// import loadable from '@loadable/component'
// import Loading from './Loading'

// const LoadableComponent = loadable(() => import('./Dashboard'), {
// 	fallback: <Loading />
// })

// export default class LoadableDashboard extends React.Component {
// 	render() {
// 		return <LoadableComponent />
// 	}
// }

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes: any = [
	{
		path: '/sandwiches',
		component: Sandwiches
	},
	{
		path: '/tacos',
		component: Tacos,
		routes: [
			{
				path: '/tacos/bus',
				component: Bus
			},
			{
				path: '/tacos/cart',
				component: Cart
			}
		]
	}
]

export default function RouteConfigExample() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/tacos">Tacos</Link>
					</li>
					<li>
						<Link to="/sandwiches">Sandwiches</Link>
					</li>
				</ul>

				<Switch>
					{routes.map((route: any, i: any) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</Switch>
			</div>
		</Router>
	)
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route: any) {
	return (
		<Route
			path={route.path}
			render={props => (
				// pass the sub-routes down to keep nesting
				<route.component {...props} routes={route.routes} />
			)}
		/>
	)
}

function Sandwiches() {
	return <h2>Sandwiches</h2>
}

function Tacos(routes: any) {
	return (
		<div>
			<h2>Tacos</h2>
			<ul>
				<li>
					<Link to="/tacos/bus">Bus</Link>
				</li>
				<li>
					<Link to="/tacos/cart">Cart</Link>
				</li>
			</ul>

			<Switch>
				{routes.routes.map((route: any, i: any) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		</div>
	)
}

function Bus() {
	return <h3>Bus</h3>
}

function Cart() {
	return <h3>Cart</h3>
}

// import React from 'react'
// import logo from './logo.svg'
// import './App.css'
// import './assets/style/global.less'

// const App: React.FC = () => {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit
// 					<code>src/App.tsx</code>
// 					and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	)
// }

// export default App
