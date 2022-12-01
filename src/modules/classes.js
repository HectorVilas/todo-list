export class Todo {
  constructor(title, description, dateCreation, dateDue, //type="datetime-local"
    checks, priority, isFavorite, isPinned){
    this.title = title;
    this.description = description;
    this.dateCreation = dateCreation;
    this.dateDue = dateDue;
    this.checks = checks;
    this.priority = priority;
    this.isFavorite = isFavorite;
    this.isPinned = isPinned;
  };
  
  toggleFav(){
    this.isFavorite = !this.isFavorite;
  };

  toggleTask(idx){
    this.checks[idx].isDone = !this.checks[idx].isDone;
  };

  togglePin(){
    this.isPinned = !this.isPinned;
  }
};