import React from 'react'
import { render } from 'react-dom'
import storeF from './redux/store'
import { Provider } from 'react-redux'
import App from './App'

const store = storeF();


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)