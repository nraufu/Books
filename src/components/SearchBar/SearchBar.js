import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
	state = {};
	render() {
		return (
			<div className="SearchBar">
				<div className="SearchField">
					<input placeholder="Search a Book..." />
				</div>
				<div className="SearchBtn">
					<a href="/">Search</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
