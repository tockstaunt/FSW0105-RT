import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Home,Mine,Search } from "C:/Users/tocks/Documents/GIT/playing around/react practice/src/screens";

/* const Index = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={root} />
                <Route path="/search" component={Search} />
                <Route path="/mine" component={Mine} />
            </div>
        </Router>   
    </Provider>
);

render(<Index />, document.getElementById("root"));
 */



const Header = ({ title }) => (
    <div>
        <h1>{title}</h1>
        <a href="/">Home |</a>
        <a href="/search"> Search |</a>
        <a href="/mine"> Mine |</a>
    </div>
);

export default Header;