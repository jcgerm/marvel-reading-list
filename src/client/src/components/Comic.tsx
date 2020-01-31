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
      <div className="ComicImg">
        <div>
          <img src={`${this.props.thumbnail}`} />
        </div>
        <div className="ComicTitle">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default Comic;
