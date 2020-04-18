import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Books from "../Books/Books";
import "./App.css";

const aBook = {
	img: "https://picsum.photos/200",
	title: "new Book",
	author: "author name",
	publisher: "Publishing company",
};

const books = [aBook, aBook, aBook, aBook, aBook];

class App extends Component {
	state = {
		Books: [],
	};

	componentDidMount() {
		this.setState({ Books: books });
	}

	render() {
		return (
			<React.Fragment>
				<h1>Books</h1>
				<SearchBar />
				<Books books={this.state.Books} />
			</React.Fragment>
		);
	}
}

export default App;
