import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Help from './Help';
import List from './List';
import NoRouteFound from './NoRouteFound';
import FetchUser from './FetchUser';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import saveCourse from './saveCourse';
import Okay from './Okay';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/courses" component={saveCourse} />
            <Route path="/help" component={Help} />
            <Route path="/list" component={List} />
            <Route path="/users" component={FetchUser} />
            <Route path="/ok/:name" component={Okay} />
            <Route component={NoRouteFound}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
