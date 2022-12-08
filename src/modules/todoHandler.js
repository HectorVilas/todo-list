import { localStorageTest } from "./localStorageTest.js";

export const todo = (() => {
  function toggleFav(projectIdx, todoIdx){
    localStorageTest[projectIdx].todos[todoIdx].toggleFav();
  }

  function togglePin(projectIdx, todoIdx){
    localStorageTest[projectIdx].todos[todoIdx].togglePin();
  }

  function getFavStatus(projectIdx, todoIdx){
    return localStorageTest[projectIdx].todos[todoIdx].isFavorite
  }

  function deleteTodo(projectIdx, todoIdx){
    localStorageTest[projectIdx].todos.splice(todoIdx,1);
  }

  function taskCheck(projectIdx, todoIdx, taskIdx){
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

  return { toggleFav, togglePin, getFavStatus, deleteTodo, taskCheck,
    deleteTask, editTitle, editDescription, editDateDue, editLabel }
})();