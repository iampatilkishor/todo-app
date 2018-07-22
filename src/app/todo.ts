export class Todo {
  title: string;
  status: boolean;
  time: string;
  _id?: string;

  constructor(title, status = false, time) {
    this.title = title;
    this.status = status;
    this.time = time;
  }
}
