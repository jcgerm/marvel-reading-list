import React from "react";
import { GridList } from "@material-ui/core";

import "../App.css";
import Comic, { ComicProps } from "./Comic";

export type ComicListProps = {
  comics: ComicProps[];
};

class ComicList extends React.PureComponent<ComicListProps> {
  render() {
    let comics = this.props.comics;

    return (
      <GridList className="ComicList">
        {comics.map(comic => (
          <Comic
            key={comic.key}
            title={comic.title}
            thumbnail={comic.thumbnail}
          />
        ))}
      </GridList>
    );
  }
}

export default ComicList;
