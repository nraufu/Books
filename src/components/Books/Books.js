import React from "react";
import "./Books.css";
import Book from "./Book/Book";

const Books = ({ books }) => {
	return (
		<div className="Books">
			{books.map((book) => (
				<Book key={book.id} book={book} />
			))}
		</div>
	);
};

export default Books;
