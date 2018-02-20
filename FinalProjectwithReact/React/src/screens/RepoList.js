import React from 'react';
import Navbar from '../components/Navbar';
import Header from "./Header";
import { connect } from "react-redux";
import { saveRepos } from "../actions/AppActions";


class RepoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          search: '',
          repos: []
        };
      }

    returnRepo = () => {
        fetch("https://api.github.com/users/tockstaunt/repos")
            .then(resp => resp.json())
            .then(respJson => {
                this.setState({repos: respJson});
                    
})}
        
    


handleSubmit = event => {
    event.preventDefault();
    this.returnRepo();
  };
  
  render(){
    let repos = this.state.repos.map((repo) => <li key={repo.id} ><a href={repo.html_url} target="_blank">{repo.name}</a></li>)
    return (
      <div className="container">
        <Header />
        <hr />
        <form onSubmit={this.handleSubmit}>
          
          <button value={this.state.search}
            onChange={search => {
              this.setState({ search: search.target.value });
            }}>get my repo list</button>
        </form>
        <ul>
          {repos}
        </ul>
      </div>
    );
  }
}

export default RepoList;