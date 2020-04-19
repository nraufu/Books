import React from "react";
import Book from "./Book/Book";
import badRequest from "../../assets/images/400Badrequest.gif";
import "./Books.css";

const Books = ({ books }) => {
	return (
		<div className="Books">
			{books.length >= 1 ? (
				books.map((book) => <Book key={book.id} book={book} />)
			) : (
				<div>
					<img src={badRequest} alt="" />
					<h2>No results matching the Requested Book name</h2>
				</div>
			)}
		</div>
	);
};

export default Books;
