export class Task {
  constructor(id, title, importance, endDate, idOwner, place, mdContent) {
    this.id = id;
    this.title = title;
    this.importance = importance;
    this.endDate = endDate;
    this.idOwner = idOwner;
    this.place = place;
    this.mdContent = mdContent;
  }
}
