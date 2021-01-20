import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import User from './Pages/User';
import Tasks from './Pages/Tasks';

const App = (props) => {
    return (<BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users/:id" exact component={User} />
            <Route path="/users/:id/todos" exact component={Tasks} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>)
}
export default App;