import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

//import Navigation from './components/Navigation/Navigation';

const App = () => {
    // ***** 5 COMMANDMENTS ******
    //@: Separation-of-concerns
    //@: Always return a single element
    //@: CSS how to use them within REACT

    //@: Routes, how to use them
    //@: Props what are they ? 
    //@: API's and how to use them

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
    )
}

export default App;