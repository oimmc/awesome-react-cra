import React from 'react'
// import './assets/style/global.less'
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

function RouteWithSubRoutes(route: any) {
	return (
		<Route
			path={route.path}
			render={props => (
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
