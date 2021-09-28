// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Friends from "./Components/Friends/Friends";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
// import NotFound from "./Components/NotFound/NotFound";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/friends">
						<Friends />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
