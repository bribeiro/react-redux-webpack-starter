import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Navigation, NotFound } from 'components';

import './App.scss';

const App = () => {
    return (
        <div styleName="app">
            <Navigation />
            <main>
                <Switch>
                    <Route exact path="/" render={() => <h1>Home</h1>} />
                    <Route path="/about" render={() => <h1>About</h1>} />
                    <Route path="/contact" render={() => <h1>Contact</h1>} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </div>
    );
};

App.propTypes = {};

export default App;
