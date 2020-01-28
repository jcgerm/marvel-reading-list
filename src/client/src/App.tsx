import { Component } from "react";
import "./App.css";

import comicsService from "./services/comicsService";
import ComicList from "./components/ComicList";
import React from "react";

class App extends Component {
  state = {
    comics: []
  };

  componentDidMount() {
    this.showListOfComics();
  }

  showListOfComics = () => {
    comicsService.getListOfComics().then(res => this.setState({ comics: res }));
  };

  render() {
    return (
      <div>
        <ComicList comics={this.state.comics} />
      </div>
    );
  }
}

export default App;
