import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import MainPage from './main';
import './App.css';

const SecondaryPage = lazy(() => import('./secondary'));

function App() {
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/secondary" component={SecondaryPage}/>
                    </Switch>
                </Suspense>
                <Link to="/secondary">secondary link</Link>
            </Router>
        </div>
    );
}

export default App;
