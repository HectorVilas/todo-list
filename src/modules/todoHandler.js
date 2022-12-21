import { localStorageTest } from "./localStorageTest.js";
import { Todo } from "./classes.js"

export const todoHandler = (() => {
  function toggleFav(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    localStorageTest[projectIdx].todos[todoIdx].toggleFav();
  }

  function togglePin(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    localStorageTest[projectIdx].todos[todoIdx].togglePin();
  }

  function getFavStatus(projectIdx, todoIdx){
    return localStorageTest[projectIdx].todos[todoIdx].isFavorite
  }

  function deleteTodo(projectIdx, todoIdx){
    localStorageTest[projectIdx].todos.splice(todoIdx,1);
  }

  function taskCheck(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    const taskIdx = this?.dataset?.taskIdx;
    localStorageTest[projectIdx].todos[todoIdx].toggleTask(taskIdx);
  }

  function deleteTask(projectIdx, todoIdx, taskIdx){
    localStorageTest[projectIdx].todos[todoIdx].checks.splice(taskIdx, 1);
  }
  
  function editTitle(projectIdx, todoIdx, string){
    localStorageTest[projectIdx].todos[todoIdx].title = string;
  }

  function editDescription(projectIdx, todoIdx, string){
    localStorageTest[projectIdx].todos[todoIdx].description = string;
  }

  function editDateDue(projectIdx, todoIdx, string){
    localStorageTest[projectIdx].todos[todoIdx].dateDue = string;
  }

  function editLabel(projectIdx, todoIdx, taskIdx, string){
    localStorageTest[projectIdx].todos[todoIdx].checks[taskIdx].task = string;
  }

  function createTask(projectIdx, todoIdx){
    localStorageTest[projectIdx].todos[todoIdx].checks.push({ task: "", isDone: false })
  }

  function getProjectsTitles(){
    let projectList = []
    localStorageTest.forEach(project => {
      projectList.push(project.title);
    })

    return projectList;
  }

  function deleteProject(projectIdx){
    localStorageTest.splice(projectIdx, 1);
  }

  function changePriority(projectIdx, todoIdx, priority){
    localStorageTest[projectIdx].todos[todoIdx].changePriority(priority);
  }

  function getProject(i){
    return localStorageTest[i];
  }

  function createTodo(projectIdx){
    let repeated = 0;
    localStorageTest[projectIdx].todos.forEach(item => {
      if(item.title.includes("new to-do")) repeated++;
    });
    const todoName = repeated === 0 ? "new to-do" : `new to-do(${repeated})`;

    const d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}`;
    
    localStorageTest[projectIdx].todos.push(
      new Todo(todoName, "", date, "", [], "low", false, false)
    );
  }

  function createProject(){
    let repeated = 0;
    localStorageTest.forEach(project => {
      if(project.title.includes("new project")) repeated++;
    });
    const title = repeated === 0 ? "new project" : `new project(${repeated})`;

    localStorageTest.push({title, todos:[], });
  }

  function editProjectTitle(projectIdx, val){
    localStorageTest[projectIdx].title = val;
  }

  return { toggleFav, togglePin, getFavStatus, deleteTodo, taskCheck,
    deleteTask, editTitle, editDescription, editDateDue, editLabel,
    createTask, getProjectsTitles, deleteProject, changePriority,
    getProject, createTodo, createProject, editProjectTitle }
})();