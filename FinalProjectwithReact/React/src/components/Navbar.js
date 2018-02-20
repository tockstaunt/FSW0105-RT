import React from 'react';

const Navbar = ({title}) => (
    <div>
        <h1>{title}</h1>
        <a href="/">Home | </a>
        <a href="/RepoList">Repo List | </a>
        <a href="/Search">Search </a>
        
        
    </div>
)


export default Navbar;