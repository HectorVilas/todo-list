import { todoSample } from "./todoSample.js";
import { Todo } from "./classes.js"

export const todoHandler = (() => {
  function toggleFav(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    todoSample[projectIdx].todos[todoIdx].toggleFav();
  }

  function togglePin(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    todoSample[projectIdx].todos[todoIdx].togglePin();
  }

  function getFavStatus(projectIdx, todoIdx){
    return todoSample[projectIdx].todos[todoIdx].isFavorite
  }

  function deleteTodo(projectIdx, todoIdx){
    todoSample[projectIdx].todos.splice(todoIdx,1);
  }

  function taskCheck(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    const taskIdx = this?.dataset?.taskIdx;
    todoSample[projectIdx].todos[todoIdx].toggleTask(taskIdx);
  }

  function deleteTask(projectIdx, todoIdx, taskIdx){
    todoSample[projectIdx].todos[todoIdx].checks.splice(taskIdx, 1);
  }
  
  function editTitle(projectIdx, todoIdx, string){
    todoSample[projectIdx].todos[todoIdx].title = string;
  }

  function editDescription(projectIdx, todoIdx, string){
    todoSample[projectIdx].todos[todoIdx].description = string;
  }

  function editDateDue(projectIdx, todoIdx, string){
    todoSample[projectIdx].todos[todoIdx].dateDue = string;
  }

  function editLabel(projectIdx, todoIdx, taskIdx, string){
    todoSample[projectIdx].todos[todoIdx].checks[taskIdx].task = string;
  }

  function createTask(projectIdx, todoIdx){
    todoSample[projectIdx].todos[todoIdx].checks.push({ task: "", isDone: false })
  }

  function getProjectsTitles(){
    let projectList = []
    todoSample.forEach(project => {
      projectList.push(project.title);
    })

    return projectList;
  }

  function deleteProject(projectIdx){
    todoSample.splice(projectIdx, 1);
  }

  function changePriority(projectIdx, todoIdx, priority){
    todoSample[projectIdx].todos[todoIdx].changePriority(priority);
  }

  function getProject(i){
    return todoSample[i];
  }

  function createTodo(projectIdx){
    let repeated = 0;
    todoSample[projectIdx].todos.forEach(item => {
      if(item.title.includes("new to-do")) repeated++;
    });
    const todoName = repeated === 0 ? "new to-do" : `new to-do(${repeated})`;

    const d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
    
    todoSample[projectIdx].todos.push(
      new Todo(todoName, "", date, "", [], "low", false, false)
    );
  }

  function createProject(){
    let repeated = 0;
    todoSample.forEach(project => {
      if(project.title.includes("new project")) repeated++;
    });
    const title = repeated === 0 ? "new project" : `new project(${repeated})`;

    todoSample.push({title, todos:[], });
  }

  function editProjectTitle(projectIdx, val){
    todoSample[projectIdx].title = val;
  }

  return { toggleFav, togglePin, getFavStatus, deleteTodo, taskCheck,
    deleteTask, editTitle, editDescription, editDateDue, editLabel,
    createTask, getProjectsTitles, deleteProject, changePriority,
    getProject, createTodo, createProject, editProjectTitle }
})();