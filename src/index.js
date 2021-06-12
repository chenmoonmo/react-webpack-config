import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import Routes from './routes/index.js'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  ,
  document.querySelector('#root')
)