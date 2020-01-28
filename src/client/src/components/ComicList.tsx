import React from "react";

import Comic, { ComicProps } from "./Comic";

export type ComicListProps = {
  comics: ComicProps[];
};

class ComicList extends React.PureComponent<ComicListProps> {
  render() {
    let comics = this.props.comics;

    let list = comics.map(comic => (
      <Comic key={comic.key} title={comic.title} thumbnail={comic.thumbnail} />
    ));

    return <div>{list}</div>;
  }
}

export default ComicList;
