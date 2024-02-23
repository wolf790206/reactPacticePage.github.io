import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/product.context';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HashRouter>
			<UserProvider>
				<ProductsProvider>
					<App />
				</ProductsProvider>
			</UserProvider>
		</HashRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
