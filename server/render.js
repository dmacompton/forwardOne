const React =  require('react');
const ReactDOMServer = require('react-dom/server');
import App from '../client/components/App';

export default () => ReactDOMServer.renderToString(<App title="Server Render"/>);