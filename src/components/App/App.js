import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SearchBar from "../SearchBar/SearchBar";
import Books from "../Books/Books";
import BookInfo from "../BookInfo/BookInfo";
import NotFound from "./../Not-found";
import { getBooks } from "./../../utils/google-books";
import "./App.css";

class App extends Component {
	state = {
		books: [],
		loading: false,
		booksFound: false,
	};

	handleSearch = async (book) => {
		this.setState({ loading: true });
		await getBooks(book)
			.then((response) => {
				this.setState({ books: response, loading: false, booksFound: true });
			})
			.catch((error) => {
				console.log(error);
				this.setState({ loading: false });
			});
	};

	render() {
		return (
			<React.Fragment>
				<ToastContainer />
				<h1>Books</h1>
				<Switch>
					<Route
						path="/search"
						render={(props) => (
							<SearchBar {...props} searchBook={this.handleSearch} />
						)}
					/>
					<Route
						path="/books"
						render={(props) => (
							<Books
								{...props}
								books={this.state.books}
								loading={this.state.loading}
								booksFound={this.state.booksFound}
							/>
						)}
					/>
					<Route path="/book/:id" component={BookInfo} />
					<Route path="/not-found" component={NotFound} />
					<Redirect from="/" exact to="/search" />
					<Redirect to="/Not-found" />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
