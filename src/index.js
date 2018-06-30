import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

import reducers from './reducer';
import Login from './container/login/login';
import News from './container/news/news';
import Dashboard from './component/dashboard/dashboard'



import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);


ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				{/* <AuthRoute></AuthRoute> */}
				 
				<Switch>
					{/* Switch：只要命中一个Route，其他的不管,不加Switch的话，第一个命中会显示，后面命中的也会显示 */}
					<Route path='/dashboard' component={Dashboard}></Route>
					<Route path='/news' component={News}></Route>
					{/* <Route path='/geniusinfo' component={GeniusInfo}></Route> */} */}
					<Route path='/login' component ={Login}></Route>
					{/* <Route path='/register' component={Register}></Route>
					<Route path='/chat/:user' component={Chat}></Route> */}
					{/* <Route component = {Dashboard}></Route> */}
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
);
