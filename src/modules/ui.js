import {todoHandler} from "./todoHandler.js"

import iconDrag from "../media/images/icons/drag.svg";
import iconTrash from "../media/images/icons/trash.svg";
import iconTrashLid from "../media/images/icons/trash-lid.svg";

import { format, parseISO, intlFormatDistance, isToday } from "date-fns";

export const ui = (() => {
  const mouse = { x:0, y:0 }; //track mouse for drag
  let cursorInterval;
  const cardMove = { //for drag and drop
    from: {project: undefined, todo: undefined},
    to: {project: undefined, todo: undefined},
    position: undefined,
  }

  const cardsContainer = document.querySelector("#cards-container");
  const body = document.querySelector("body");

  const dateFormat = "EE',' MMMM do yyyy";

  function loadMenu(){
    //create example projects if there's no localStorage
    todoHandler.loadSample();

    //set dark mode if left active
    loadDarkMode();

    const menuBtn = document.createElement("div");
    menuBtn.id = "menu-button";
    menuBtn.addEventListener("click", toggleMenu);

    const menu = document.createElement("div");
    menu.id = "menu";

    const screenCoverMenu = document.createElement("div");
    screenCoverMenu.id = "screen-cover-menu";
    screenCoverMenu.addEventListener("click", toggleMenu);

    //filter list
    const fieldsetFilter = document.createElement("fieldset");
    fieldsetFilter.classList.add("menu-fieldset", "fieldset-filter");
    const legendDue = document.createElement("legend");
    legendDue.innerText = "Filter";

    const listDue = document.createElement("ul");
    listDue.classList.add("fieldset-list", "due-list");

    const filters = ["Today", "This week", "This month", "This year", "Expired", "Pinned", "Favorites"];
    for(let i = 0; i < filters.length; i++){
      const li = document.createElement("li");
      li.classList.add("menu-filter", "menu-item");
      li.dataset.filter = filters[i].split(" ").join("-").toLowerCase();
      li.addEventListener("click", filterTodos);

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

    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("create-task-div");
    newProjectDiv.addEventListener("click", createProject);
    const newProjectPara = document.createElement("p");
    newProjectPara.innerText = "Create project";
    const newProjectIcon = document.createElement("div");
    newProjectIcon.classList.add("card-icon", "create-task");

    newProjectDiv.append(newProjectPara, newProjectIcon);
    fieldsetTasks.append(legendProjects, projectsList(), newProjectDiv);

    //options and others
    const fieldsetOptions = document.createElement("fieldset");
    fieldsetOptions.classList.add("menu-fieldset", "fieldset-options");
    const legendOptions = document.createElement("legend");
    legendOptions.innerText = "Options";

    
    const optionsList = document.createElement("ul");
    optionsList.classList.add("fieldset-list");

    const darkModeLi = document.createElement("li");
    darkModeLi.classList.add("menu-item", "dark-mode");
    const darkModeCheckbox = document.createElement("input");
    darkModeCheckbox.type = "checkbox";
    darkModeCheckbox.id = "dark-mode";
    darkModeCheckbox.checked = todoHandler.isOnDarkMode();
    darkModeCheckbox.addEventListener("change", toggleDarkMode);
    const darkModeLabel = document.createElement("label");
    darkModeLabel.innerText = "Dark mode";
    darkModeLabel.htmlFor = darkModeCheckbox.id;
    darkModeLi.append(darkModeCheckbox, darkModeLabel);

    const homeLi = document.createElement("li");
    homeLi.classList.add("menu-item", "go-home");
    const homePara = document.createElement("p");
    homePara.innerText = "Go to main page";
    homePara.addEventListener("click", () => {
      mainPage();
      toggleMenu();
    });
    homeLi.append(homePara);


    const aboutLi = document.createElement("li");
    aboutLi.classList.add("menu-item", "about");
    const aboutDivPara = document.createElement("p");
    const aboutLink = document.createElement("a");
    aboutLink.innerText = "Hector Vilas' Github"
    aboutLink.href = "https://github.com/HectorVilas";
    aboutLink.target = "_blank";
    
    aboutDivPara.append(aboutLink);
    aboutLi.append(aboutDivPara);
    optionsList.append(darkModeLi, homeLi, aboutLi);
    fieldsetOptions.append(optionsList);
    
    fieldsetOptions.append(legendOptions);
    menu.append(fieldsetTasks, fieldsetFilter, fieldsetOptions);
    body.append(menuBtn, menu, screenCoverMenu);
  }

  function projectsList(redraw = false){
    let fieldsetUl, fieldsetLi;
    if(redraw){
      fieldsetUl = document.querySelector(".menu-fieldset.fieldset-tasks ul");
      fieldsetLi = document.querySelectorAll(".menu-fieldset.fieldset-tasks ul li");
      fieldsetLi.forEach(li => {
        li.parentElement.removeChild(li);
      });
    };

    const listTasksUl = document.createElement("ul");
    listTasksUl.classList.add("fieldset-list", "due-list");

    const projectsList = todoHandler.getProjectsTitles();
    for (let i = 0; i < projectsList.length; i++) {
      const li = document.createElement("li");
      li.classList.add("menu-tasks", "menu-item", `project-${projectsList[i].split(" ").join("-")}`);
      li.dataset.projectIdx = i;
      const para = document.createElement("p");
      para.innerText = projectsList[i];
      para.title = projectsList[i];
      para.classList.add("project-title");
      para.dataset.projectIdx = i;
      para.addEventListener("click", changePRoject);

      const input = document.createElement("input");
      input.type = "text";
      input.classList.add("edit-project");
      input.dataset.projectIdx = i;
      input.value = projectsList[i];
      input.addEventListener("input", editProjectTitle);
      const editBtn = document.createElement("input");
      editBtn.type = "checkbox";
      editBtn.classList.add("card-icon", "icon-edit");
      editBtn.dataset.projectIdx = i;
      editBtn.addEventListener("click", projectEdit);

      const deleteBtn = trashIcon(deleteProject);


      li.append(para, input, editBtn, deleteBtn);
      if(redraw){
        fieldsetUl.append(li);
      } else {
        listTasksUl.appendChild(li);
      }
    };

    if(!redraw) return listTasksUl;
  }

  function placeSingleCard(todo, projectIdx, todoIdx){
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.priority = todo.priority;
    // card.addEventListener("mouseenter", spaceCards);
    card.addEventListener("mousemove", spaceCards);

    const drag = document.createElement("img");
    drag.classList.add("card-icon", "icon-drag");
    drag.src = iconDrag;
    drag.draggable = false;
    drag.addEventListener("mousedown", cardDrag);

    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = todo.title;
    title.title = todo.title;
    title.addEventListener("click", toggleCard);
    const editTitle = document.createElement("input");
    editTitle.type = "text";
    editTitle.classList.add("title", "edit-title");
    editTitle.value = todo.title;
    editTitle.addEventListener("input", editField);

    const progress = document.createElement("div");
    progress.classList.add("progress");
    
    const completed = todo.checks.filter(item => item.isDone).length;
    const percentage = completed * 100 / todo.checks.length;
    progress.style.background = `conic-gradient(#2e10c0 ${percentage}%, transparent ${percentage}%, transparent 100%)`
    progress.style.opacity = todo.checks.length === 0 ? "0%" : "100%";
    
    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = todo.description;
    description.title = todo.description;
    const editDescription = document.createElement("input");
    editDescription.type = "text";
    editDescription.classList.add("description", "edit-description");
    editDescription.value = todo.description;
    editDescription.addEventListener("input", editField);

    const dateCreation = document.createElement("p");
    dateCreation.classList.add("date-creation");
    dateCreation.innerText = `Created: ${format(new Date(parseISO(todo.dateCreation)), dateFormat)}`;

    const dateDue = document.createElement("p");
    dateDue.classList.add("date-due");
    const dueDateFormat = todo.dateDue.split("-").join(" ");
    dateDue.innerText = todo.dateDue.length > 0 ? `Due: ${
      format(new Date(parseISO(todo.dateDue)), dateFormat)} (${
        isToday(new Date(dueDateFormat)) ? "today" 
        : intlFormatDistance(new Date(dueDateFormat), new Date())
      })` : "";
    const editDateDue = document.createElement("input");
    editDateDue.type = "date";
    editDateDue.classList.add("date-due", "edit-date-due");
    editDateDue.value = todo.dateDue;
    editDateDue.title = "Due date";
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

    card.append(drag, title, editTitle, progress, dateCreation, dateDue, editDateDue,
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
    
    //start deletion on click or touch
    deleteIcon.addEventListener("mousedown", function(){
      this.classList.add("deleting");
    });
    deleteIcon.addEventListener("touchstart", function(){
      this.classList.add("deleting");
    });

    //cancel deletion on mouse out, touch stop or touch move
    deleteIcon.addEventListener("mouseup", function(){
      this.classList.remove("deleting");
    });
    deleteIcon.addEventListener("touchend", function(){
      this.classList.remove("deleting");
    });
    deleteIcon.addEventListener("mouseout", function(){
      this.classList.remove("deleting");
    });

    //start deletion
    deleteIcon.addEventListener("animationend", function(e){
      if(e.animationName === "deleting"){
        const projectIdx = this.dataset.projectIdx;
        const todoIdx = this.dataset.todoIdx;
        if (clickFunction == deleteProject) {
          deleteProject(projectIdx);
        } else {
          cardDelete(projectIdx, todoIdx);
        }
      };
    });

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
    range.addEventListener("change", changePriority)

    const para = document.createElement("p");
    para.innerText = `Priority: ${todo.priority}`;

    priorityDiv.append(para, range);

    return priorityDiv;
  }

  function placeCards(idxOrFilter, activateTodo){
    cardsContainer.replaceChildren()
    
    const project = todoHandler.getProject(idxOrFilter);
    
    const header = document.createElement("header");

    const projectItem = document.createElement("div");
    projectItem.dataset.idx = idxOrFilter;
    projectItem.classList.add("project-item");

    const h1 = document.createElement("h1");
    h1.dataset.projectIdx = idxOrFilter;
    h1.innerText = project.title;
    h1.title = project.title;
    header.appendChild(h1);

    project.todos.forEach((todo, todoIdx) => {
      projectItem.appendChild(placeSingleCard(todo, idxOrFilter, todoIdx));
    });

    const addTodoDiv = document.createElement("div");
    addTodoDiv.classList.add("card", "todo-add-div");
    addTodoDiv.dataset.projectIdx = idxOrFilter;
    addTodoDiv.addEventListener("click", createTodo);
    
    const addTodoBtn = document.createElement("div");
    addTodoBtn.classList.add("card-icon", "create-task", "create-todo");

    const addTodoPara = document.createElement("p");
    addTodoPara.innerText = "Create new to-do";

    addTodoDiv.append(addTodoBtn, addTodoPara);
    projectItem.appendChild(addTodoDiv);
    cardsContainer.append(header, projectItem);

    if(activateTodo !== undefined) {
      setTimeout(() => {
        const activeCard = document.querySelector(`.card[data-todo-idx="${activateTodo}"]`);
        activeCard.classList.add("active");
        setTimeout(() => {
          activeCard.scrollIntoView();
        }, 500);
      }, 100);
    }

    if(project.todos.length == 0){
      const emptyState = document.createElement("div");
      emptyState.classList.add("empty-state");

      const para = document.createElement("p");
      para.innerText = "There's no to-dos on this project.\nTouch the green plus button to create one."
      
      emptyState.append(para);
      projectItem.append(emptyState);
    }
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
    cardMove.from.project = this.closest(".card").dataset.projectIdx;
    cardMove.from.todo = this.closest(".card").dataset.todoIdx;
    
    //add temporal event listener, removed on execution
    window.addEventListener("mouseup", cardPlace);
    body.style.userSelect = "none";

    //disabling edit mode on all cards
    const allCards = document.querySelectorAll(".card");
    allCards.forEach(card => card.classList.remove("active", "edit-mode"));

    const iconEdit = document.querySelectorAll(".icon-edit");
    iconEdit.forEach(icon => icon.checked = false);

    //creating dragged card
    const targetCard = this.closest(".card");
    const draggingCard = targetCard.cloneNode(true);
    draggingCard.classList.add("dragging-card");
    draggingCard.style.width = `${targetCard.clientWidth}px`;
    targetCard.classList.add("hidden");
    
    //add margin before dragging, prevents visual annoyance
    const nextCard = document.querySelector(`.card[data-project-idx="${
      targetCard.dataset.projectIdx}"][data-todo-idx="${parseInt(targetCard.dataset.todoIdx)+1}"]`)
    if(nextCard) nextCard.classList.add("margin-top");

    //add temporal listener and interval, removed by cardPlace() after use
    window.addEventListener("mousedown", updateMousePos);
    window.addEventListener("mousemove", updateMousePos);
    
    cursorInterval = setInterval(() => {
      draggingCard.style.left = `${mouse.x - 25}px`;
      draggingCard.style.top = `${mouse.y - (draggingCard.clientHeight / 2)}px`;
    }, 1000/60); //divided by desired FPS
    
    body.append(draggingCard);
  }

  function updateMousePos(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function spaceCards(e){
    if(e.buttons !== 1 || !document.querySelector(".dragging-card")) return;
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;

    cardMove.to.project = projectIdx;
    cardMove.to.todo = todoIdx;
    
    const withSeparation = document?.querySelector(".margin-top") || document?.querySelector(".margin-bottom");
    withSeparation?.classList.remove("margin-top", "margin-bottom");

    const cards = document.querySelectorAll(".card:not(.separator):not(.dragging-card):not(.hidden)[data-project-idx][data-todo-idx]");
    cards.forEach(card => {
      if(card.dataset.projectIdx === projectIdx
        && card.dataset.todoIdx === todoIdx){


        const container = document.querySelector(".project-item");

        const cardHeight = this.clientHeight;
        const mousePosCard = e.layerY;

        if(mousePosCard < cardHeight / 2){
          card.classList.add("margin-top");
          cardMove.position = "before";
        } else {
          card.classList.add("margin-bottom");
          cardMove.position = "after";
        }
      }
    })
  }

  function cardPlace(){
    //remove temporal event listener, interval and opacity added by cardDrag()
    clearInterval(cursorInterval);
    window.removeEventListener("mouseup", cardPlace);
    window.removeEventListener("mousedown", updateMousePos);
    window.removeEventListener("mousemove", updateMousePos);
    body.style.userSelect = "text";

    const invisibleCard = document.querySelector(".hidden");
    invisibleCard.classList.remove("hidden");
    
    const draggingCard = document.querySelector(".dragging-card");
    body.removeChild(draggingCard);

    const withSeparation = document?.querySelector(".margin-top") || document?.querySelector(".margin-bottom");
    withSeparation?.classList.remove("margin-top", "margin-bottom");

    //move to-dos
    if(cardMove.from.project && cardMove.from.todo
      && cardMove.to.project && cardMove.to.todo){
      
      todoHandler.moveDraggedCard(cardMove.from.project, cardMove.from.todo, cardMove.to.todo, cardMove.position);
      placeCards(parseInt(cardMove.from.project));
      
      //clear drag values
      cardMove.from.project = undefined;
      cardMove.from.todo = undefined;
      cardMove.to.project = undefined;
      cardMove.to.todo = undefined;
    }
  }

  function cardEdit(){
    const cardClass = this.closest(".card").classList;
    this.checked ? cardClass.add("edit-mode") : cardClass.remove("edit-mode");
    this.closest(".card").classList.add("active");
  }

  function cardDelete(projectIdxParam, todoIdxParam){
    const projectIdx = this?.dataset?.projectIdx || projectIdxParam;
    const todoIdx = this?.dataset?.todoIdx || todoIdxParam;

    if(todoHandler.getFavStatus(projectIdx, todoIdx)) {
      const thisCardStar = document.querySelector(`[data-project-idx="${
        projectIdx}"][data-todo-idx="${todoIdx}"] .icon-fav`);
      thisCardStar.classList.add("shake");
      return;
    };

    todoHandler.deleteTodo(projectIdx, todoIdx);
    placeCards(parseInt(projectIdx));
  }

  function createTaskLi(todo, check, projectIdx, todoIdx, taskIdx){
    const task = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `${projectIdx}-${todoIdx}-${taskIdx}`; //for label only
    checkbox.checked = check?.isDone || false;
    checkbox.addEventListener("click", taskCheck);

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.dataset.todoTitle = todo.title;
    label.innerText = check?.task || "";
    label.title = check?.task || "";
    const editLabel = document.createElement("input");
    editLabel.type = "text";
    editLabel.classList.add("edit-label");
    editLabel.type = "text";
    editLabel.htmlFor = checkbox.id;
    editLabel.value = check?.task || "";
    editLabel.addEventListener("input", editField);
    editLabel.addEventListener("keydown", labelKeypress);

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

  function labelKeypress(e){
    if(e.key === "Enter"){
      const projectIdx = this.dataset.projectIdx;
      const todoIdx = this.dataset.todoIdx;
      const todo = this.closest(".card").querySelector(".create-task").dataset.todo;
      createTask(projectIdx, todoIdx, todo)
      
    } else if(e.key === "ArrowUp" || e.key === "ArrowDown"){
      e.preventDefault();
      const projectIdx = this.dataset.projectIdx;
      const todoIdx = this.dataset.todoIdx;
      const taskIdx = parseInt(this.dataset.taskIdx);
      
      const move = e.key === "ArrowUp" ? -1 : +1;
      const max = document.querySelectorAll(`.edit-label[data-project-idx="${
        projectIdx}"][data-todo-idx="${todoIdx}"]`).length-1;
      
      const newActive = document.querySelector(`.edit-label[data-project-idx="${
        projectIdx}"][data-todo-idx="${todoIdx}"][data-task-idx="${Math.max(0, Math.min(taskIdx+move, max))}"]`);
      
      newActive.focus();
    } else if(e.key === " " && e.ctrlKey){
      const projectIdx = this.dataset.projectIdx;
      const todoIdx = this.dataset.todoIdx;
      const taskIdx = parseInt(this.dataset.taskIdx);
      
      const checkbox = document.querySelector(`input[type="checkbox"][data-project-idx="${
        projectIdx}"][data-todo-idx="${todoIdx}"][data-task-idx="${taskIdx}"]`);
      checkbox.checked = !checkbox.checked;
      taskCheck(projectIdx, todoIdx, taskIdx);
    } else if(e.key === "Delete" && e.altKey) {
      const projectIdx = this.dataset.projectIdx;
      const todoIdx = this.dataset.todoIdx;
      const taskIdx = parseInt(this.dataset.taskIdx);

      deleteTask(projectIdx, todoIdx, taskIdx);
    }
  }

  function createTask(projectIdxParam, todoIdxParam, todoParam){
    const projectIdx = this?.dataset?.projectIdx || projectIdxParam;
    const todoIdx = this?.dataset?.todoIdx || todoIdxParam;
    const todo = this?.dataset?.todo || todoParam;
    
    todoHandler.createTask(projectIdx, todoIdx);
    
    const newTaskIdx = document.querySelectorAll(`[data-project-idx="${
      projectIdx}"][data-todo-idx="${todoIdx}"] li`)
      .length;

    const thisCardUl = document.querySelector(`[data-project-idx="${
      projectIdx}"][data-todo-idx="${todoIdx}"] ul`);
      
    thisCardUl.appendChild(createTaskLi(todo, false, projectIdx, todoIdx, newTaskIdx));
    
    const thisCard = document.querySelector(`.card[data-project-idx="${
      projectIdx}"][data-todo-idx="${todoIdx}"]`);
    const newInput = thisCard.querySelectorAll(".edit-label");
    newInput[newInput.length -1].focus();

    updateProgress(projectIdx, todoIdx);
  }

  function deleteTask(paramProjectIdx, paramTodoIdx, paramTaskIdx){
    const projectIdx = this?.dataset?.projectIdx || paramProjectIdx;
    const todoIdx = this?.dataset?.todoIdx || paramTodoIdx;
    const taskIdx = this?.dataset?.taskIdx || paramTaskIdx;

    todoHandler.deleteTask(projectIdx, todoIdx, taskIdx);
    if(this){
      this.parentNode.remove();
    } else {
      const thisTask = document.querySelector(
        `input[type="text"][data-project-idx="${projectIdx
        }"][data-todo-idx="${todoIdx}"][data-task-idx="${taskIdx
        }"]`
      );
      const thisLi = thisTask.parentNode;
      thisLi.parentNode.removeChild(thisLi);

      //
      const nextInput = document.querySelector(
        `input[type="text"][data-project-idx="${projectIdx
        }"][data-todo-idx="${todoIdx}"][data-task-idx="${parseInt(taskIdx)+1
        }"]`
      );
      if(nextInput) {
        nextInput.focus()
      } else {
        const lastInput = document.querySelectorAll(`.card.active .edit-label`);
        if(lastInput.length > 0) lastInput[lastInput.length -1].focus();
      };
    };
    
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

    updateProgress(projectIdx, todoIdx);
  }

  function editField(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    const taskIdx = this?.dataset?.taskIdx;

    if(this.className.includes("edit-title")){
      todoHandler.editTitle(projectIdx, todoIdx, this.value);
      const thisTitle = document.querySelector(`.card[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"] .title`);
      thisTitle.innerText = this.value;
      thisTitle.title = this.value;

    } else if(this.className.includes("edit-description")){
      todoHandler.editDescription(projectIdx, todoIdx, this.value);
      const thisDescription = document.querySelector(`.card[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"] .description`);
      thisDescription.innerText = this.value;
      thisDescription.title = this.value;
      
    } else if(this.className.includes("edit-date-due")){
      todoHandler.editDateDue(projectIdx, todoIdx, this.value)
      const thisDateDue = document.querySelector(`.card[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"] .date-due`);
      
      const dueDateFormat = this.value.split("-").join(" ");
      thisDateDue.innerText = this.value.length > 0 ? `Due: ${
        format(new Date(parseISO(this.value)), dateFormat)} (${
          isToday(new Date(dueDateFormat)) ? "today" 
          : intlFormatDistance(new Date(dueDateFormat), new Date())
        })` : "";
      
    } else if(this.className.includes("edit-label")){
      todoHandler.editLabel(projectIdx, todoIdx, taskIdx, this.value);
      const thisTask = document.querySelector(`[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"][data-task-idx="${taskIdx}"] ~ label`);
      thisTask.innerText = this.value;
      thisTask.title = this.value;
    }
  }

  function toggleMenu(){
    const menu = document.querySelector("#menu");
    const menuBg = document.querySelector("#screen-cover-menu");
    [menu,menuBg].forEach(item => item.classList.toggle("reveal"));
  }

  function changePRoject(){
    toggleMenu();
    placeCards(parseInt(this.dataset.projectIdx));
  }

  function deleteProject(projectIdx){
    todoHandler.deleteProject(projectIdx);

    projectsList(true);
    mainPage();
  }

  function changePriority(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    todoHandler.changePriority(projectIdx, todoIdx, this.value);
    const priority = this.value == "0" ? "low" : this.value == "1" ? "middle" : "high";

    const thisCard = document.querySelector(`[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"]`);
    thisCard.dataset.priority = priority

    const priorityPara = thisCard.querySelector(".edit-priority p");
    priorityPara.innerText = `Priority: ${priority}`;
  }

  function createTodo(){
    todoHandler.createTodo(this.dataset.projectIdx);
    placeCards(parseInt(this.dataset.projectIdx));

    const editBtns = document.querySelectorAll(".project-item .icon-edit");
    editBtns[editBtns.length -1].checked = true;

    const cards = document.querySelectorAll(".project-item .card");
    cards[cards.length -2].classList.add("active","edit-mode");

    const titleInputs = document.querySelectorAll(".edit-title");
    titleInputs[titleInputs.length -1].focus();
  }

  function createProject(){
    todoHandler.createProject();
    projectsList(true);
    placeCards(parseInt(todoHandler.getProjectsTitles().length-1));
  }

  function projectEdit(){
    const allEditBtns = document.querySelectorAll(".fieldset-tasks .icon-edit");
    allEditBtns.forEach(editBtn => {
      if(editBtn.dataset.projectIdx !== this.dataset.projectIdx){
        editBtn.checked = false;
      }
    });
    const allEditMode = document.querySelectorAll(".fieldset-tasks .edit-mode");
    allEditMode.forEach(item => item.classList.remove("edit-mode"));
    
    const projectClass = this.parentNode.classList;
    this.checked ? projectClass.add("edit-mode") : projectClass.remove("edit-mode");

    const thisInput = document.querySelector(`.edit-project[data-project-idx="${this.dataset.projectIdx}"]`);
    thisInput.focus();
  }

  function editProjectTitle(){
    const projectIdx = this.dataset.projectIdx;
    const title = document.querySelector(`.menu-tasks.menu-item p[data-project-idx="${projectIdx}"]`);
    title.innerText = this.value;
    title.title = this.value;
    todoHandler.editProjectTitle(projectIdx, this.value);
    //edit title of active project if the editing title is for it
    const titleCards = document.querySelector("h1");
    const titleProjectMain = document.querySelectorAll(".main-page-title");
    if(projectIdx === titleCards.dataset.projectIdx) {
      titleCards.innerText = this.value;
      titleCards.title = this.value;
    } else if(titleProjectMain.length > 0){
      titleProjectMain[projectIdx].innerText = this.value;
    }
  }

  function filterTodos(){
    toggleMenu();
    cardsContainer.replaceChildren();

    const project = todoHandler.getProject(this.dataset.filter);

    
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.innerText = project.title;
    h1.title = project.title;
    header.append(h1);
    cardsContainer.append(header);

    project.todos.forEach(todo => {
      const result = document.createElement("div");
      result.classList.add("card", "search-result", "active");
      result.dataset.priority = todo.priority;
      result.dataset.projectIdx = todo.projectIdx;
      result.dataset.todoIdx = todo.todoIdx;
      result.addEventListener("click", () => {
        placeCards(parseInt(todo.projectIdx), todo.todoIdx);
      });

      const title = document.createElement("h2");
      title.classList.add("title");
      title.innerText = todo.title;

      const progress = document.createElement("div");
      progress.classList.add("progress");
      const completed = todo.checks.filter(item => item.isDone).length;
      const percentage = completed * 100 / todo.checks.length;
      progress.style.background = `conic-gradient(#2e10c0 ${percentage}%, transparent ${percentage}%, transparent 100%)`
      progress.style.opacity = todo.checks.length === 0 ? "0%" : "100%";

      const description = document.createElement("p");
      description.classList.add("description");
      description.innerText = todo.description;

      const dateCreation = document.createElement("p");
      dateCreation.classList.add("date-creation");
      dateCreation.innerText = `Created: ${format(new Date(parseISO(todo.dateCreation)), dateFormat)}`;;

      const dateDue = document.createElement("p");
      dateDue.classList.add("date-due");

      const dueDateFormat = todo.dateDue.split("-").join(" ");
      dateDue.innerText = todo.dateDue.length > 0 ? `Due: ${
        format(new Date(parseISO(todo.dateDue)), dateFormat)} (${
          isToday(new Date(dueDateFormat)) ? "today" 
          : intlFormatDistance(new Date(dueDateFormat), new Date())
        })` : "";

      result.append(title, progress, description, dateCreation, dateDue);

      projectItem.append(result);
    });

    cardsContainer.appendChild(projectItem);

    if(project.todos.length == 0){
      const emptyDiv = document.createElement("div");
      emptyDiv.classList.add("empty-state");

      const emptyPara = document.createElement("p");
      emptyPara.innerText = `There's no results for this filter.`;

      emptyDiv.append(emptyPara);
      projectItem.append(emptyDiv);
    }
  }
  
  function taskCheck(projectIdxParam, todoIdxParam, taskIdxParam){
    const projectIdx = this?.dataset?.projectIdx || projectIdxParam;
    const todoIdx = this?.dataset?.todoIdx || todoIdxParam;
    const taskIdx = this?.dataset?.taskIdx || taskIdxParam;
    todoHandler.taskCheck(projectIdx, todoIdx, taskIdx);

    updateProgress(projectIdx, todoIdx);
  }

  function updateProgress(projectIdx, todoIdx){
    const thisProject = todoHandler.getProject(parseInt(projectIdx)).todos[todoIdx];

    const thisCard = document.querySelector(`.card[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"]`);
    const percentageDiv = thisCard.querySelector(".progress");

    const completed = thisProject.checks.filter(item => item.isDone).length;
    const percentage = completed * 100 / thisProject.checks.length;
    percentageDiv.style.background = `conic-gradient(#2e10c0 ${percentage}%, transparent ${percentage}%, transparent 100%)`
    percentageDiv.style.opacity = thisProject.checks.length === 0 ? "0%" : "100%";
  }

  function loadDarkMode(){
    if(todoHandler.isOnDarkMode()) {
      const root = document.querySelector(":root");
      root.classList.add("dark");
    };
  }

  function toggleDarkMode(){
    const root = document.querySelector(":root");

    this.checked ? root.classList.add("dark")
    : root.classList.remove("dark");
    todoHandler.darkMode(this.checked);
  }

  function mainPage(){
    cardsContainer.replaceChildren();
    
    const resume = todoHandler.getResume()

    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.innerText = "Odin TODO List"
    header.append(h1);

    const projectsDiv = document.createElement("div");
    projectsDiv.classList.add("projects-div");
    
    const h2 = document.createElement("h2");
    h2.classList.add("main-page-h2");
    h2.innerText = resume.length == 0 ?
    "You have no projects.\nCreate a new one from the main menu."
    : "Your projects:";

    cardsContainer.append(header, h2);
    
    const projectsContainer = document.createElement("div");
    projectsContainer.classList.add("projects-container");

    resume.forEach((project, i) => {
      const card = document.createElement("div");
      card.classList.add("card", "main-page-card");
      card.addEventListener("click", () => placeCards(i));

      const projectTitle = document.createElement("h2");
      projectTitle.classList.add("main-page-title");
      projectTitle.innerText = project.projectName;

      const todos = document.createElement("p");
      todos.classList.add("main-page-todos");
      todos.innerText = `Number of to-dos: ${project.todosLength}`;

      const expiring = document.createElement("p");
      const dueDateFormat = project.expiring.todoDue?.split("-").join(",");
      expiring.classList.add("main-page-due");
      expiring.innerText = project.expiring.todoTitle == undefined ? ""
      : `"${project.expiring.todoTitle
      }" is the pending to-do closest to due date, with ${
        project.expiring.tasksLength} tasks on it.
        Will expire ${ isToday(new Date(dueDateFormat)) ? "today"
        : intlFormatDistance(new Date(dueDateFormat), new Date())
    } (${project.expiring.todoDue}).`;


      card.append(projectTitle, todos, expiring);

      projectsContainer.append(card);

    });

    cardsContainer.append(projectsContainer)
  }

  return { placeCards, loadMenu, mainPage };
})();