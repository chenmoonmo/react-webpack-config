import { message, Button } from 'antd'
import app from './styles/app.module.css'

const App = ({history}) => {
  const onClick = () => {
    message.info('test')
    history.push('/hello')
  }
  return (<span>
    <img className={app.img} src={require('./assets/images/index.jpg')}></img>
    <Button type="primary" onClick={onClick}>Hello World</Button>
  </span>)
}

export default App