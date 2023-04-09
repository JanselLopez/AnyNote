export class Task {
  constructor(id, title, importance, end_date, owner, place) {
    this.id = id;
    this.title = title;
    this.importance = importance;
    this.end_date = end_date;
    this.owner = owner;
    this.place = place;
  }
}
