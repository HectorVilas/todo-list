import {todoHandler} from "./todoHandler.js"

import iconDrag from "../media/images/icons/drag.svg";
// import iconEdit from "../media/images/icons/edit.svg";
import iconTrash from "../media/images/icons/trash.svg";
import iconTrashLid from "../media/images/icons/trash-lid.svg";

//for testing
import { localStorageTest } from "./localStorageTest.js";

export const ui = (() => {
  const cardsContainer = document.querySelector("#cards-container");
  const body = document.querySelector("body");

  function loadMenu(){
    const menuBtn = document.createElement("div");
    menuBtn.id = "menu-button";

    const menu = document.createElement("div");
    menu.id = "menu";

    //filter list
    const fieldsetFilter = document.createElement("fieldset");
    fieldsetFilter.classList.add("menu-fieldset", "fieldset-filter");
    const legendDue = document.createElement("legend");
    legendDue.innerText = "Filter";

    const listDue = document.createElement("ul");
    listDue.classList.add("fieldset-list", "due-list");

    const filters = ["Today", "This week", "This month", "This year", "Pinned", "Favorites"];
    for(let i = 0; i < filters.length; i++){
      const li = document.createElement("li");
      li.classList.add("menu-filter", "menu-item", `filter-${filters[i].split(" ").join("-")}`);

      const para = document.createElement("p");
      para.innerText = filters[i];

      li.appendChild(para);
      listDue.appendChild(li);
    }
    
    fieldsetFilter.append(legendDue, listDue);

    //tasks list
    const fieldsetTasks = document.createElement("fieldset");
    fieldsetTasks.classList.add("menu-fieldset", "fieldset-tasks");
    const legendProjects = document.createElement("legend");
    legendProjects.innerText = "Projects";

    const listTasks = document.createElement("ul");
    listTasks.classList.add("fieldset-list", "due-list");

    const projectsList = todoHandler.getProjectsTitles();
    for (let i = 0; i < projectsList.length; i++) {
      const li = document.createElement("li");
      li.classList.add("menu-tasks", "menu-item", `project-${projectsList[i].split(" ").join("-")}`)
      const para = document.createElement("p");
      para.innerText = projectsList[i];

      const deleteBtn = trashIcon(() => todoHandler.deleteProject(i));


      li.append(para, deleteBtn);
      listTasks.appendChild(li);
    }

    const newProjectIcon = document.createElement("div");
    newProjectIcon.classList.add("card-icon", "create-task");
    fieldsetTasks.append(legendProjects, listTasks, newProjectIcon);


    menu.append(fieldsetFilter, fieldsetTasks);
    body.append(menuBtn, menu);
  }

  function placeSingleCard(todo, projectIdx, todoIdx){
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.priority = todo.priority;

    const drag = document.createElement("img");
    drag.classList.add("card-icon", "icon-drag");
    drag.src = iconDrag;
    drag.draggable = false;
    drag.addEventListener("mousedown", cardDrag);

    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = todo.title;
    title.addEventListener("click", toggleCard);
    const editTitle = document.createElement("input");
    editTitle.type = "text";
    editTitle.classList.add("title", "edit-title");
    editTitle.value = todo.title;
    editTitle.addEventListener("input", editField);
    
    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = todo.description;
    const editDescription = document.createElement("input");
    editDescription.type = "text";
    editDescription.classList.add("description", "edit-description");
    editDescription.value = todo.description;
    editDescription.addEventListener("input", editField);

    const dateCreation = document.createElement("p");
    dateCreation.classList.add("date-creation");
    dateCreation.innerText = `Created: ${todo.dateCreation}`;

    const dateDue = document.createElement("p");
    dateDue.classList.add("date-due");
    dateDue.innerText = todo.dateDue.length > 0 ? `Due: ${todo.dateDue}` : "";
    const editDateDue = document.createElement("input");
    editDateDue.type = "datetime-local";
    editDateDue.classList.add("date-due", "edit-date-due");
    editDateDue.value = todo.dateDue;
    editDateDue.addEventListener("input", editField);

    const checks = document.createElement("ul");
    checks.classList.add("checklist");

    //add dataset to each item
    [card,editTitle,drag,editDescription,editDateDue].forEach(icon => {
      icon.dataset.projectIdx = projectIdx;
      icon.dataset.todoIdx = todoIdx;
    });

    todo.checks.forEach((check,i) => {
      checks.appendChild(createTaskLi(todo, check, projectIdx, todoIdx, i));
    });

    const addTaskLi = document.createElement("div");
    addTaskLi.classList.add("add-task");
    const addTask = document.createElement("div");
    addTask.classList.add("card-icon", "create-task");
    addTask.addEventListener("click", createTask);
    addTask.dataset.projectIdx = projectIdx;
    addTask.dataset.todoIdx = todoIdx;
    addTask.dataset.todo = todo.title;
    addTaskLi.appendChild(addTask);
    

    card.append(addTaskLi);

    card.append(drag, title, editTitle, dateCreation, dateDue, editDateDue,
      priorityDiv(todo, todoIdx, projectIdx), editButtonsDiv(todo, projectIdx, todoIdx),
      description, editDescription, checks);

    return card;
  }

  function editButtonsDiv(todo, projectIdx, todoIdx){
    const editBtns = document.createElement("div");
    editBtns.classList.add("edit-buttons");

    const pin = document.createElement("input");
    pin.type = "checkbox";
    pin.checked = todo.isPinned ? true : false;
    pin.classList.add("card-icon", "icon-pin");
    // pin.addEventListener("click", cardPinToggle);
    pin.addEventListener("click", todoHandler.togglePin);

    const edit = document.createElement("input");
    edit.type = "checkbox";
    edit.classList.add("card-icon", "icon-edit");
    edit.addEventListener("click", cardEdit);

    const fav = document.createElement("input");
    fav.type = "checkbox";
    fav.checked = todo.isFavorite ? true : false;
    fav.classList.add("card-icon", "icon-fav");
    fav.addEventListener("click", todoHandler.toggleFav);
    fav.addEventListener("animationend", (e) => {
      if(e.animationName === "icon-fav-shake") {
        e.target.classList.remove("shake");
      };
    })

    const deleteIcon = trashIcon(cardDelete);

    //add dataset to each item
    [pin,edit,fav,deleteIcon].forEach(icon => {
      icon.dataset.projectIdx = projectIdx;
      icon.dataset.todoIdx = todoIdx;
    });

    editBtns.append(pin, edit, fav, deleteIcon);

    return editBtns;
  }

  function trashIcon(clickFunction){
    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.addEventListener("click", clickFunction);
    const trash = document.createElement("img");
    trash.classList.add("card-icon", "icon-trash");
    trash.src = iconTrash;
    trash.draggable = false;
    const trashLid = document.createElement("img");
    trashLid.classList.add("card-icon", "icon-trash-lid");
    trashLid.src = iconTrashLid;
    trashLid.draggable = false;

    deleteIcon.append(trash, trashLid);

    return deleteIcon;
  }

  function priorityDiv(todo, todoIdx, projectIdx){
    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("edit-priority");
    
    const range = document.createElement("input");
    range.type = "range";
    range.dataset.todoIdx = todoIdx;
    range.dataset.projectIdx = projectIdx;
    range.min = 0;
    range.max = 2;
    range.step = 1;
    range.value = todo.priority === "low"? 0 : todo.priority === "middle" ? 1 : 2;

    const para = document.createElement("p");
    para.innerText = "Priority";

    priorityDiv.append(para, range);

    return priorityDiv;
  }

  function placeCards(projects){

    cardsContainer.replaceChildren()
    

    projects.forEach((project, projectIdx) => {
      const projectItem = document.createElement("div");
      projectItem.dataset.idx = projectIdx;
      projectItem.classList.add("project-item");

      const h1 = document.createElement("h1");
      h1.innerText = project.title;
      projectItem.appendChild(h1);

      project.todos.forEach((todo, todoIdx) => {
        projectItem.appendChild(placeSingleCard(todo, projectIdx, todoIdx));
      });

      cardsContainer.appendChild(projectItem);
    });
  };

  function toggleCard() {
    const card = this.parentNode;
    card.classList.toggle("active");

    if(!card.className.includes("active")) {
      card.querySelector(".icon-edit").checked = false;
      card.classList.remove("edit-mode");
    }
  }

  function cardDrag(){
    this.parentNode.classList.remove("active");

    const card = this.parentNode;
    card.querySelector(".icon-edit").checked = false;
    card.classList.remove("edit-mode");
  }

  function cardEdit(){
    const cardClass = this.parentNode.parentNode.classList;
    this.checked ? cardClass.add("edit-mode") : cardClass.remove("edit-mode");
    
    this.parentNode.parentNode.classList.add("active");
  }

  function cardDelete(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;

    if(todoHandler.getFavStatus(projectIdx, todoIdx)) {
      const thisCardStar = document.querySelector(`[data-project-idx="${
        projectIdx}"][data-todo-idx="${todoIdx}"] .icon-fav`);
      thisCardStar.classList.add("shake");
      return;
    };

    todoHandler.deleteTodo(projectIdx, todoIdx);
    placeCards(localStorageTest);
  }

  function createTaskLi(todo, check, projectIdx, todoIdx, taskIdx){
    const task = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `${todo?.title || todo}-${taskIdx}`; //for label only
    checkbox.checked = check?.isDone || false;
    checkbox.addEventListener("click", todoHandler.taskCheck);

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.dataset.todoTitle = todo.title;
    label.innerText = check?.task || "";
    const editLabel = document.createElement("input");
    editLabel.type = "text";
    editLabel.classList.add("edit-label");
    editLabel.type = "text";
    editLabel.htmlFor = checkbox.id;
    editLabel.value = check?.task || "";
    editLabel.addEventListener("input", editField);

    const removeTask = document.createElement("div");
    removeTask.classList.add("card-icon", "remove-task");
    removeTask.addEventListener("click", deleteTask);

    //add dataset
    [checkbox,editLabel, removeTask].forEach(item => {
      item.dataset.projectIdx = projectIdx;
      item.dataset.todoIdx = todoIdx;
      item.dataset.taskIdx = taskIdx;
    });

    task.append(checkbox, label, editLabel, removeTask);

    return task;
  }

  function createTask(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    const todo = this.dataset.todo;
    
    todoHandler.createTask(projectIdx, todoIdx);
    
    const newTaskIdx = document.querySelectorAll(`[data-project-idx="${
      projectIdx}"][data-todo-idx="${todoIdx}"] li`)
      .length;

    const thisCardUl = document.querySelector(`[data-project-idx="${
      projectIdx}"][data-todo-idx="${todoIdx}"] ul`);
      
    thisCardUl.appendChild(createTaskLi(todo, false, projectIdx, todoIdx, newTaskIdx));
    
    
  }

  function deleteTask(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    const taskIdx = this.dataset.taskIdx;

    todoHandler.deleteTask(projectIdx, todoIdx, taskIdx);
    this.parentNode.remove();
    
    const thisTaskList = document.querySelectorAll(`[data-project-idx="${
      projectIdx}"][data-todo-idx="${todoIdx}"] li .remove-task`);
    const thisTaskCheckboxes = document.querySelectorAll(`[data-project-idx="${
      projectIdx}"][data-todo-idx="${todoIdx}"] li input[type="checkbox"]`);
    const thisTaskLabels = document.querySelectorAll(`[data-project-idx="${
      projectIdx}"][data-todo-idx="${todoIdx}"] li label`);
    const thisTaskTextInputs = document.querySelectorAll(`[data-project-idx="${
      projectIdx}"][data-todo-idx="${todoIdx}"] li input[type="text"]`);
    
    [thisTaskList, thisTaskCheckboxes, thisTaskTextInputs]
    .forEach(group => {
      group.forEach((item, i) => {
        item.dataset.taskIdx = i;
      })
    });

    thisTaskLabels.forEach((label, i) => {
      label.htmlFor = `${label.dataset.todoTitle}-${i}`;
    });
  }

  function editField(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    const taskIdx = this?.dataset?.taskIdx;

    if(this.className.includes("edit-title")){
      todoHandler.editTitle(projectIdx, todoIdx, this.value);
      const thisTitle = document.querySelector(`.card[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"] .title`);
      thisTitle.innerText = this.value;

    } else if(this.className.includes("edit-description")){
      todoHandler.editDescription(projectIdx, todoIdx, this.value);
      const thisDescription = document.querySelector(`.card[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"] .description`);
      thisDescription.innerText = this.value;
      
    } else if(this.className.includes("edit-date-due")){
      todoHandler.editDateDue(projectIdx, todoIdx, this.value)
      const thisDateDue = document.querySelector(`.card[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"] .date-due`);
      
      thisDateDue.innerText = this.value.length > 0 ? `Due: ${this.value}` : "";
      
    } else if(this.className.includes("edit-label")){
      todoHandler.editLabel(projectIdx, todoIdx, taskIdx, this.value);
      const thisTask = document.querySelector(`[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"][data-task-idx="${taskIdx}"] ~ label`);
      thisTask.innerText = this.value;
    }
  }
    
  return { placeCards, loadMenu };
})();