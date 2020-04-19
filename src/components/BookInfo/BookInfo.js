import React, { useState, useEffect } from "react";
import "./BookInfo.css";

const Hello = ({ match }) => {
	useEffect(() => {
		fetchData();
	});

	const [book, setBook] = useState({});

	const fetchData = async () => {
		const fetchBook = await fetch(
			`https://www.googleapis.com/books/v1/volumes/${match.params.id}`
		);
		const book = await fetchBook.json();
		setBook(book);
	};

	const getInfo = (type) => (book.volumeInfo ? book.volumeInfo[type] : "");
	const getThumbnail = () =>
		book.volumeInfo ? book.volumeInfo.imageLinks.thumbnail : "";
	return (
		<div className="Info">
			<div className="Thumbnail">
				<img src={getThumbnail()} alt="" />
			</div>
			<div className="Info-desc">
				<p>
					<span>Title:</span> {getInfo("title")}
				</p>
				<p>
					<span>Authors:</span> {getInfo("authors")}
				</p>
				<p>
					<span>Published Date:</span> {getInfo("publishedDate")}
				</p>
				<p>
					<span>Publisher:</span> {getInfo("publisher")}
				</p>
				<p>
					<span>Pages:</span> {getInfo("pageCount")}
				</p>
				<p>
					<span>Average Rating:</span> {getInfo("averageRating")}
				</p>
				<p>
					<span>Category:</span> {getInfo("categories")}
				</p>
				<p>
					<span>Description: </span>
					{getInfo("description")}
				</p>
			</div>
		</div>
	);
};

export default Hello;
