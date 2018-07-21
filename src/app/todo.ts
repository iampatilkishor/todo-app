export class Todo {
  title: string;
  status: boolean;

  constructor(title, status = false) {
    this.title = title;
    this.status = status;
  }
}
