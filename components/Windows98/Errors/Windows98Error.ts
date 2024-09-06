export class Windows98Error extends Error {
  public title: string;
  constructor(title: string, message: string) {
    super(message);
    this.title = title;
  }
}
