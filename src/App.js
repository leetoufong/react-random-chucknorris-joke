import React, { Component } from 'react';
import './App.scss';

const API = 'https://api.chucknorris.io/jokes/';
const QUERY = 'random';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      jokes: []
    }
  }
  
  componentDidMount() {
    fetch(API + QUERY)
      .then(response => response.json())
      .then(data => this.setState({
        isLoaded: true,
        jokes: data.jokes
      }))
  }

  render() {
    return(
      <div>
        Howdy
      </div>
    )
  }
}

export default App;
