import React, { Component } from "react";
import "./App.css";

import comicsService from "./services/comicsService";
import ComicList from "./components/ComicList";
import AppSearchBar from "./components/AppSearchBar";

class App extends Component {
  state = {
    comics: []
  };

  searchForComics = (searchString: string) => {
    comicsService
      .getListOfComicsForCharacters(searchString)
      .then(res => this.setState({ comics: res }));
  };

  showListOfComics = () => {
    comicsService.getListOfComics().then(res => this.setState({ comics: res }));
  };

  render() {
    return (
      <div>
        <AppSearchBar search={this.searchForComics} />
        <ComicList comics={this.state.comics} />
      </div>
    );
  }
}

export default App;
