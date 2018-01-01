const React = require('react');
const ReactDOMServer = require('react-dom/server');
import axios from 'axios';
import App from '../client/components/App';

export default () => {
  return axios.get('http://localhost:8080/api/books/').then(res => {
    return {
      markup: ReactDOMServer.renderToString(
        <App initialData={res.data} />
      ),
      data: res.data,
    };
  });
};