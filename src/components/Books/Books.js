import React from "react";
import "./Books.css";
import Book from "./Book/Book";

const Books = (props) => {
	return (
		<div className="Books">
			{props.books.map((book) => (
				<Book key={book.id} book={book} />
			))}
		</div>
	);
};

export default Books;
