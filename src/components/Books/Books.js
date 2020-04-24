import React from "react";
import Book from "./Book/Book";
import Spinner from "../Spinner/Spinner";
import badRequest from "../../assets/images/400Badrequest.gif";
import "./Books.css";

const Books = ({ books, loading, booksFound }) => {
	let response = (
		<div>
			<img src={badRequest} alt="" />
			<h2> No results matching the Requested Book name </h2>{" "}
		</div>
	);
	if (loading) {
		response = <Spinner />;
	}
	if (booksFound) {
		response = books.map((book) => <Book key={book.id} book={book} />);
	}

	return <div className="Books"> {response} </div>;
};

export default Books;
