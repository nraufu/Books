import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Books from "../Books/Books";
import BookInfo from "../BookInfo/BookInfo";
import NotFound from "./../Not-found";
import { getBooks } from "./../../utils/google-books";
import "./App.css";

class App extends Component {
	state = {
		books: [],
	};

	handleSearch = async (book) => {
		const books = await getBooks(book);
		this.setState({ books: books });
	};

	render() {
		return (
			<React.Fragment>
				<Router>
					{window.location.pathname === "/" ? (
						<h1>Books</h1>
					) : (
						<h1>
							<a href="/">Back To Search</a>
						</h1>
					)}
					<Switch>
						<Route
							path="/search"
							render={(props) => (
								<SearchBar {...props} searchBook={this.handleSearch} />
							)}
						/>
						<Route
							path="/books"
							render={(props) => <Books {...props} books={this.state.books} />}
						/>
						<Route path="/book/:id" component={BookInfo} />
						<Route path="/not-found" component={NotFound} />
						<Redirect from="/" exact to="/search" />
						<Redirect to="/Not-found" />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;
