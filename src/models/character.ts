export default class Character {
  id: number;
  name: string;
  thumbnail: string;

  constructor(id: number, name: string, thumbnail: string) {
    this.id = id;
    this.name = name;
    this.thumbnail = `${thumbnail}/portrait_xlarge.jpg`;
  }

  getName() {
    return this.name;
  }
}
