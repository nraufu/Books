import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Books from "../Books/Books";
import "./App.css";
import { getBooks } from "./../../utils/google-books";

class App extends Component {
	state = {
		books: [],
	};

	handleSearch = async (book) => {
		const books = await getBooks(book);
		this.setState({ books: books });
	};

	render() {
		console.log(this.state.books);
		return (
			<React.Fragment>
				<h1>Books</h1>
				<SearchBar searchBook={this.handleSearch} />
				<Books books={this.state.books} />
			</React.Fragment>
		);
	}
}

export default App;
