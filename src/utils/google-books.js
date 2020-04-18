import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.REACT_APP_API_KEY;

export const getBooks = async (book) => {
	return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=30`).then(data => data.data.items);
}
