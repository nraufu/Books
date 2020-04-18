import React from "react";
import "./Book.css";

const Book = (props) => {
	return (
		<div className="Book">
			<div className="image-container">
				<img src={props.book.img} alt="" />
			</div>
			<h2>title: {props.book.title}</h2>
			<div className="Book-info">
				<p>Author: {props.book.author}</p>
				<p>Publish Company: {props.book.publisher}</p>
				<a href="./">Learn More</a>
			</div>
		</div>
	);
};

export default Book;
