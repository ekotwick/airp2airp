'use strict'

// react
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// components
import store from './store';
import Routes from './routes';

const Main = () => (
		<Provider store={store}>
			<Routes />
		</Provider>
)

render (
	<Main />,
	document.getElementById('main')
)