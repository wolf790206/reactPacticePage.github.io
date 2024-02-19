import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

const Shop = () => {
	return <h1>I'm the shop page</h1>;
};

const App = () => {
	return (
		<Routes base>
			<Route
				path="/"
				element={<Navigation />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="shop"
					element={<Shop />}
				/>
			</Route>
		</Routes>
	);
};
export default App;