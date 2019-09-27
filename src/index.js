import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import cartReducer from "./redux/reducers/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk"

export const store = createStore(cartReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
                     <BrowserRouter>
                          <App />
                    </BrowserRouter>
                </Provider>, document.getElementById('root'))