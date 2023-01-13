import { todoSample } from "./todoSample.js";
import { Todo } from "./classes.js";
import { format, isToday, isThisWeek, isThisMonth, isThisYear, isFuture, } from "date-fns";

export const todoHandler = (() => {
  function toggleFav(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    const local = getLocalStorage();
    const value = local[projectIdx].todos[todoIdx].isFavorite;
    local[projectIdx].todos[todoIdx].isFavorite = !value;
    setLocalStorage(local);
  }

  function togglePin(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    const local = getLocalStorage();

    const value = local[projectIdx].todos[todoIdx].isPinned;
    local[projectIdx].todos[todoIdx].isPinned = !value;
    
    localStorage.setItem("todo", JSON.stringify(local));
  }

  function getFavStatus(projectIdx, todoIdx){
    const local = getLocalStorage();
    return local[projectIdx].todos[todoIdx].isFavorite;
  }

  function deleteTodo(projectIdx, todoIdx){
    const local = getLocalStorage();
    local[projectIdx].todos.splice(todoIdx,1);
    setLocalStorage(local);
  }

  function taskCheck(projectIdx, todoIdx, taskIdx){
    const local = getLocalStorage();
    const value = local[projectIdx].todos[todoIdx].checks[taskIdx].isDone;
    local[projectIdx].todos[todoIdx].checks[taskIdx].isDone = !value;
    setLocalStorage(local);
  }

  function deleteTask(projectIdx, todoIdx, taskIdx){
    const local = getLocalStorage();
    local[projectIdx].todos[todoIdx].checks.splice(taskIdx, 1);
    setLocalStorage(local);
  }
  
  function editTitle(projectIdx, todoIdx, string){
    const local = getLocalStorage();
    local[projectIdx].todos[todoIdx].title = string;
    setLocalStorage(local);
  }
  
  function editDescription(projectIdx, todoIdx, string){
    const local = getLocalStorage();
    local[projectIdx].todos[todoIdx].description = string;
    setLocalStorage(local);
  }
  
  function editDateDue(projectIdx, todoIdx, string){
    const local = getLocalStorage();
    local[projectIdx].todos[todoIdx].dateDue = string;
    setLocalStorage(local);
  }
  
  function editLabel(projectIdx, todoIdx, taskIdx, string){
    const local = getLocalStorage();
    local[projectIdx].todos[todoIdx].checks[taskIdx].task = string;
    setLocalStorage(local);
  }
  
  function createTask(projectIdx, todoIdx){
    const local = getLocalStorage();
    local[projectIdx].todos[todoIdx].checks.push({ task: "", isDone: false })
    setLocalStorage(local);
  }

  function getProjectsTitles(){
    let projectList = []
    const local = getLocalStorage();
    local.forEach(project => {
      projectList.push(project.title);
    })

    return projectList;
  }

  function deleteProject(projectIdx){
    const local = getLocalStorage();
    local.splice(projectIdx, 1);
    setLocalStorage(local);
  }
  
  function changePriority(projectIdx, todoIdx, priority){
    const local = getLocalStorage();
    local[projectIdx].todos[todoIdx].priority = priority === "0" ? "low" : priority === "1" ? "middle" : "high";
    setLocalStorage(local);
  }
  
  function getProject(request){
    
    if(typeof request === "number"){
      const local = getLocalStorage();
      return local[request];
    }
    else if(request === "pinned"){
      const local = getLocalStorage();
      const filtered = { title: "Pinned", todos: []};
      local.forEach((thisProject, projectIdx) => thisProject.todos.forEach((thisTodo, todoIdx) => {
        if(thisTodo.isPinned){
          thisTodo.projectIdx = projectIdx;
          thisTodo.todoIdx = todoIdx;
          filtered.todos.push(thisTodo);
        };
      }));
      return filtered;
    }
    else if(request === "favorites"){
      const local = getLocalStorage();
      const filtered = { title: "Favorites", todos: []};
      local.forEach((thisProject, projectIdx) => thisProject.todos.forEach((thisTodo, todoIdx) => {
        if(thisTodo.isFavorite){
          thisTodo.projectIdx = projectIdx;
          thisTodo.todoIdx = todoIdx;
          filtered.todos.push(thisTodo);
        };
      }));
      return filtered;
    }
    else if(request === "today"){
      const local = getLocalStorage();
      const filtered = { title: "Tasks for today", todos: []};
      local.forEach((thisProject, projectIdx) => thisProject.todos.forEach((thisTodo, todoIdx) => {
        const formatDate = thisTodo.dateDue.split("-").join(",");
        if(isToday(new Date(formatDate))){
          thisTodo.projectIdx = projectIdx;
          thisTodo.todoIdx = todoIdx;
          filtered.todos.push(thisTodo);
        };
      }));
      return filtered;
    }
    else if(request === "this-week"){
      const local = getLocalStorage();
      const filtered = { title: "Tasks for this week", todos: []};
      local.forEach((thisProject, projectIdx) => thisProject.todos.forEach((thisTodo, todoIdx) => {
        const formatDate = thisTodo.dateDue.split("-").join(",");
        if(isThisWeek(new Date(formatDate))){
          thisTodo.projectIdx = projectIdx;
          thisTodo.todoIdx = todoIdx;
          filtered.todos.push(thisTodo);
        };
      }));
      return filtered;
    }
    else if(request === "this-month"){
      const local = getLocalStorage();
      const filtered = { title: "Tasks for this month", todos: []};
      local.forEach((thisProject, projectIdx) => thisProject.todos.forEach((thisTodo, todoIdx) => {
        const formatDate = thisTodo.dateDue.split("-").join(",");
        if(isThisMonth(new Date(formatDate))){
          thisTodo.projectIdx = projectIdx;
          thisTodo.todoIdx = todoIdx;
          filtered.todos.push(thisTodo);
        };
      }));
      return filtered;
    }
    else if(request === "this-year"){
      const local = getLocalStorage();
      const filtered = { title: "Tasks for this year", todos: []};
      
      local.forEach((thisProject, projectIdx) => thisProject.todos.forEach((thisTodo, todoIdx) => {
        const formatDate = thisTodo.dateDue.split("-").join(",");
        if(isThisYear(new Date(formatDate))){
          thisTodo.projectIdx = projectIdx;
          thisTodo.todoIdx = todoIdx;
          filtered.todos.push(thisTodo);
        };
      }));

      return filtered;
    }
    else if(request === "expired"){
      const local = getLocalStorage();
      const filtered = { title: "Expired tasks", todos: []};
      
      local.forEach((thisProject, projectIdx) => thisProject.todos.forEach((thisTodo, todoIdx) => {
        const formatDate = thisTodo.dateDue.split("-").join(",");
        if(!isFuture(new Date(formatDate))
        && !isToday(new Date(formatDate))){
          thisTodo.projectIdx = projectIdx;
          thisTodo.todoIdx = todoIdx;
          filtered.todos.push(thisTodo);
        };
      }));

      return filtered;
    }
  }
  
  function createTodo(projectIdx){
    let repeated = 0;
    const local = getLocalStorage();
    local[projectIdx].todos.forEach(item => {
      if(item.title.includes("new to-do")) repeated++;
    });
    const todoName = repeated === 0 ? "new to-do" : `new to-do(${repeated})`;
    
    const date = format(new Date(), "yyyy-MM-dd");
    
    local[projectIdx].todos.push(
      new Todo(todoName, "", date, "", [], "low", false, false)
      );
    setLocalStorage(local);
  }

  function createProject(){
    let repeated = 0;
    const local = getLocalStorage();
    local.forEach(project => {
      if(project.title.includes("new project")) repeated++;
    });
    const title = repeated === 0 ? "new project" : `new project(${repeated})`;
    
    local.push({title, todos:[], });
    setLocalStorage(local);
  }
  
  function editProjectTitle(projectIdx, val){
    const local = getLocalStorage();
    local[projectIdx].title = val;
    setLocalStorage(local);
  }

  function loadSample(){
    if(localStorage.length === 0){
      localStorage.setItem("todo", JSON.stringify(todoSample));
    }
  }

  function getLocalStorage(){
    return JSON.parse(localStorage.getItem("todo"));
  }

  function setLocalStorage(val){
    localStorage.setItem("todo", JSON.stringify(val))
  }

  function moveDraggedCard(projectIdx, fromTodo, toTodo, position){
    const local = getLocalStorage();

    const samePosupToDown = parseInt(fromTodo)+1 == toTodo;
    const samePosdownToUp = parseInt(fromTodo)-1 == toTodo; 
    
    if((samePosupToDown && position == "before")
    || (samePosdownToUp && position == "after")){
      return;
    };
    
    //fix up to down and before inversion, same for down to up and after
    const movesDown = fromTodo < toTodo;
    const cut = movesDown && position == "before" ? parseInt(toTodo)-1
    : !movesDown && position == "after" ? parseInt(toTodo)+1
    : toTodo;

    const fromCard = local[projectIdx].todos.splice(fromTodo, 1);
    const firstHalf = local[projectIdx].todos;
    const secondHalf = firstHalf.splice(cut, firstHalf.length);

    local[projectIdx].todos = [...firstHalf, ...fromCard, ...secondHalf];
    setLocalStorage(local);
  }

  return { toggleFav, togglePin, getFavStatus, deleteTodo, taskCheck,
    deleteTask, editTitle, editDescription, editDateDue, editLabel,
    createTask, getProjectsTitles, deleteProject, changePriority,
    getProject, createTodo, createProject, editProjectTitle, loadSample,
    moveDraggedCard }
})();