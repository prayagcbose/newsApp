import React from "react";
import Index from "./components/routes/Index";
import SpecificNews from "./components/routes/SpecificNews";
import DetailedNews from "./components/routes/DetailedNews";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./components/Test/Test";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Index}></Route>
				<Route path="/SpecificNews/:place" component={SpecificNews}></Route>
				<Route
					exact
					path="/DetailedNews/:news"
					component={DetailedNews}
				></Route>
				<Route exact path="/test" component={Test}></Route>
			</Switch>
		</Router>
	);
}

export default App;
