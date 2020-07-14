import React from "react";
import Index from "./components/Index";
import Kerala from "./components/Kerala";
import DetailedNews from "./components/DetailedNews";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Index}></Route>
				<Route path="/Kerala" component={Kerala}></Route>
				<Route path="/DetailedNews" component={DetailedNews}></Route>
			</Switch>
		</Router>
	);
}

export default App;
