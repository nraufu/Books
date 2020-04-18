import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
	state = { book: "" };

	handleInputChange = (event) => {
		this.setState({ book: event.target.value });
	};

	handleSearch = (event) => {
		event.preventDefault();
		this.props.searchBook(this.state.book);
	};

	render() {
		return (
			<div className="SearchBar">
				<div className="SearchField">
					<input
						placeholder="Search a Book..."
						onChange={this.handleInputChange}
					/>
				</div>
				<div className="SearchBtn">
					<a onClick={this.handleSearch}>Search</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
