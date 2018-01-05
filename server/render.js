const React = require('react');
const ReactDOMServer = require('react-dom/server');
import axios from 'axios';
import App from '../client/components/App';

const getData = (bookId, resData) => {
  return bookId ? { books: [resData], currentBookId: bookId } : resData;
};

const getUrl = (bookId) => {
  return bookId ?
    `http://localhost:8080/api/books/${bookId}` :
    `http://localhost:8080/api/books/`;
};

export default (bookId) => {
  return axios.get(getUrl(bookId)).then(res => {
    const data = getData(bookId, res.data);
    return {
      markup: ReactDOMServer.renderToString(
        <App initialData={data} />
      ),
      data,
    };
  });
};