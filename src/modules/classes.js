export class Todo {
  constructor(title, description, dateCreation, dateDue, //type="datetime-local"
    checks, priority){
    this.title = title;
    this.description = description;
    this.dateCreation = dateCreation;
    this.dateDue = dateDue;
    this.checks = checks;
    this.priority = priority;
  };
};