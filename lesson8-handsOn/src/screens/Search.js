import Header from '../components/Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveRepos } from "../actions/AppActions";

let key = 0;

class Search extends React.Component {
  state = {
    search: "",
    repos: []
  };
  
  searchGithub = () => {
    fetch("https://api.github.com/users/tockstaunt/repos")
      .then(resp => resp.json())
      .then(respJson => {
        console.log(respJson);
        //let repos = respJson.map(item => <li key={key++}>{respJson.name}</li>);

        this.setState({repos: respJson});
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.searchGithub();
  };

  render() {
    let repos = this.state.repos.map((repo) => <li key={repo.id}>{repo.name}</li>)
    return (
      <div className="container">
        <Header title="Search" />
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={this.state.search}
            onChange={search => {
              this.setState({ search: search.target.value });
            }}
          />
          <input type="submit" value="submit" />
        </form>
        <ul>
          {repos}
        </ul>
      </div>
    );
  }
}

export default Search;


