import React from "react";

export type ComicProps = {
  key: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

class Comic extends React.PureComponent<ComicProps> {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>
          <img
            src={`${this.props.thumbnail.path}.${this.props.thumbnail.extension}`}
          />
        </div>
      </div>
    );
  }
}

export default Comic;
