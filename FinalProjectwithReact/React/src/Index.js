import React, {Component} from 'react';
import {render} from 'react-dom';
import { Home, RepoList, Search, Test } from './screens';
import Navbar from './components/Navbar';

const Index = ({pathname}) =>{
    switch(pathname) {
        case '/': return <Home />;
        case '/RepoList': return <RepoList />;
        case '/Search': return <Search />;        
        default: <Home />
    }
}

let pathname = window.location.pathname;

render(
    
   <Index pathname={pathname}/>,
    document.getElementById('root')
)

window.addEventListener('popstate', function (){
    pathname.window.loction.pathname;
})