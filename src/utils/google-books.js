import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.REACT_APP_API_KEY;

export const getBooks = async (book) => {
	return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&projection=full&key=${apiKey}`).then(data => {
		if (data.data.items)
			return data.data.items
		else return []
	});
}
