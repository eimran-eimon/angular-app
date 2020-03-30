export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;


  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.name = name;
    // later: field name should be deleted.
  }
}
