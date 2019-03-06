import React, { Component } from 'react';
import './App.scss';

const API = 'https://api.chucknorris.io/jokes/';
const QUERY = 'random';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      fact: ''
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true })
    this.fetchData();
  };

  fetchData() {
    fetch(API + QUERY)
      .then(response => response.json())
      .then(data => this.setState({
        fact: data,
        isLoading: false
      }))
  }

  render() {
    const { isLoading, fact } = this.state;

    if (isLoading) {
      return(
        <h1>Loading...</h1>
      )
    }

    return(
      <div>
        { fact.value }
        <button onClick={ this.fetchData }>Get Chucked</button>
      </div>
    )
  };
}

export default App;
