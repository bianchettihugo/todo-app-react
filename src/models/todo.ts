export default class ToDo {
  name: string;
  done: boolean;
  id: string;

  constructor(name: string, id: string, done: boolean = false) {
    this.name = name;
    this.id = id,
      this.done = done;
  }

}