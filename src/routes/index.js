import { HashRouter, Route, Link } from 'react-router-dom'
import App from '../App'
import Hello from '../pages/Hello.jsx'
import TableTest from '../pages/TableTest.jsx'


const Routes = () => {
    return (
        <HashRouter>
            <Route exact path="/home" component={App}></Route>
            <Route path="/hello" component={Hello}></Route>
            <Route path="/table" component={TableTest}></Route>
        </HashRouter>
    )

}

export default Routes