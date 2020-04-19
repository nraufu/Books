import axios from 'axios';
import {
	toast
} from "react-toastify";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.REACT_APP_API_KEY;

axios.interceptors.response.use(null, error => {
	const errorExist =
		error.response &&
		error.response.status > 400 &&
		error.response.status < 500;
	if (errorExist) {
		toast.error("Internal Error!");
	}
	return Promise.reject(error);
});

export const getBooks = async (book) => {
	return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}`).then(data => {
		if (data.data.items)
			return data.data.items
		else return []
	});
}
