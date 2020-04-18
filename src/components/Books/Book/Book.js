import React from "react";
import "./Book.css";

const Book = ({ book }) => {
	return (
		<div className="Book">
			<div className="image-container">
				<img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />
			</div>
			<h2>{book.volumeInfo.title}</h2>
			<div className="Book-info">
				<p>
					<span>By: </span>
					{book.volumeInfo["authors"]}
				</p>
				<p>
					<span>Published by: </span>
					{book.volumeInfo.publisher}
				</p>
				<a href="./">Learn More</a>
			</div>
		</div>
	);
};

export default Book;
