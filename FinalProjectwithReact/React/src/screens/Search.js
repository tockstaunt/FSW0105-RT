import React from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { saveRepos } from '../actions/AppActions';
import {Test,Header,Contact} from '../screens';


class Search extends React.Component{
  constructor(props){
  super(props);
    this.state = {
    search: "",
    gitrepos:[]
  };
}
  searchGihub = () => {
    fetch("https://api.github.com/search/repositories?q=" + this.state.search)
    .then(resp => resp.json())
    .then(respJson => {
      console.log(respJson);
      this.setState({gitrepos: respJson.items});
    })}
  

  handleSubmit = event => {
    event.preventDefault();
    this.searchGihub();
  };

render(){
  let repos = this.state.gitrepos.map((repo) => <li key={repo.id} ><a href={repo.html_url} target="_blank">{repo.name}</a></li>)
  return(   
    
    <div className="container">
    <Header />
      <hr/>
      <h1>Search github repositories</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="search" value={this.state.search} onChange={search => { this.setState({ search: search.target.value });}}/>
        <input type="submit" value="submit"/>
      </form>
      <ul>
        {repos}
      </ul>
    </div>
    
  )
  }
}

export default Search;