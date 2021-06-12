import { message, Button } from 'antd'
import { useEffect } from 'react'

const App = () => {
  const onClick = () => {
    message.info('test')
  }
  return (<span>
    <img src={require('./assets/images/index.jpg')}></img>
    <Button type="primary" onClick={onClick}>Hello World</Button>
  </span>)
}

export default App