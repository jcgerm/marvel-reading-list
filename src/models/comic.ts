export default class Comic {
  id: number;
  title: string;
  thumbnail: string;

  constructor(id: number, title: string, thumbnail: string) {
    this.id = id;
    this.title = title;
    this.thumbnail = `${thumbnail}/portrait_xlarge.jpg`;
  }

  getTitle() {
    return this.title;
  }

  getThumbnail() {
    return this.thumbnail;
  }
}
