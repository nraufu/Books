import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
	state = { userInput: "" };

	handleInputChange = (event) => {
		this.setState({ userInput: event.target.value });
	};

	handleSearch = (event) => {
		event.preventDefault();
		if (!this.state.userInput) return;
		this.props.searchBook(this.state.userInput);
		this.props.history.push("/books");
	};

	render() {
		return (
			<div className="SearchBar">
				<div className="SearchField">
					<input
						placeholder="Search a Book..."
						onChange={this.handleInputChange}
						value={this.state.userInput}
					/>
				</div>
				<div className="SearchBtn">
					{/* eslint-disable-next-line */}
					<a onClick={this.handleSearch}>Search</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
