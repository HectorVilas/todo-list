import iconCheckmark from "../media/images/icons/checkmark.svg";
import iconDrag from "../media/images/icons/drag.svg";
import iconEdit from "../media/images/icons/edit.svg";
import iconTrash from "../media/images/icons/trash.svg";
import iconTrashLid from "../media/images/icons/trash-lid.svg";
import iconFav from "../media/images/icons/fav.svg";
import iconFavActive from "../media/images/icons/fav-active.svg";
import iconPin from "../media/images/icons/pin.svg"
import iconPinActive from "../media/images/icons/pin-active.svg"

//for testing
import { Todo } from "../modules/classes.js";
export const localStorageTest = [
  {
    title: "routine",
    todos: [
      new Todo("exercise", "It's leg day!", "2022-11-23T17:42", null, [
        { task: "run 3km", isDone: true },
        { task: "bicycle", isDone: false },
        { task: "squats", isDone: false },
      ], "low", false, false),

      new Todo("coding", null, "2022-11-23T17:42", null, [
        { task: "check css-tricks", isDone: true },
        { task: "continue TOP practice", isDone: true },
      ], "high", true, true),
    ],
  },
  {
    title: "test",
    todos: [
      new Todo("test1", "test1 descr", "2022-11-23T17:42","2023-11-23T17:42", [
        { task: "test1 task1", isDone: true },
        { task: "test1 task2", isDone: false },
        { task: "test1 task3", isDone: true },
      ], "low", true, false),

      new Todo("test2", "test2 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test2 task1", isDone: true },
        { task: "test2 task2", isDone: false },
        { task: "test2 task3", isDone: true },
        { task: "test2 task4", isDone: false },
        { task: "test2 task5", isDone: false },
      ], "middle", true, false),
      new Todo("test3 (long)", "test3 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test3 task1", isDone: true },
        { task: "test3 task2", isDone: true },
        { task: "test3 task3", isDone: false },
        { task: "test3 task4", isDone: false },
        { task: "test3 task5", isDone: true },
        { task: "test3 task6", isDone: true },
        { task: "test3 task7", isDone: false },
        { task: "test3 task8", isDone: true },
        { task: "test3 task9", isDone: true },
        { task: "test3 task10", isDone: false },
        { task: "test3 task11", isDone: false },
        { task: "test3 task12", isDone: true },
        { task: "test3 task13", isDone: false },
        { task: "test3 task14", isDone: true },
        { task: "test3 task15", isDone: true },
      ], "low", false, true),
      new Todo("test4", "test4 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test4 task1", isDone: false },
        { task: "test4 task2", isDone: false },
        { task: "test4 task3", isDone: true },
        { task: "test4 task4", isDone: false },
        { task: "test4 task5", isDone: true },
      ], "low", true, false),
      new Todo("test5", "test5 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test5 task1", isDone: false },
        { task: "test5 task2", isDone: true },
        { task: "test5 task3", isDone: true },
        { task: "test5 task4", isDone: false },
        { task: "test5 task5", isDone: true },
      ], "high", false, false),
    ],
  },
];




export const ui = (() => {
  const body = document.querySelector("body");
  const main = document.querySelector("#main");

  function placeCard(todo, projectIdx, todoIdx){
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.priority = todo.priority;

    const drag = document.createElement("img");
    drag.classList.add("card-icon", "icon-drag");
    drag.src = iconDrag;
    drag.addEventListener("mousedown", cardDrag);

    const editBtns = document.createElement("div");
    editBtns.classList.add("edit-buttons");

    const pin = document.createElement("input");
    pin.type = "checkbox";
    pin.checked = todo.isPinned ? true : false;
    pin.classList.add("card-icon", "icon-pin");
    pin.addEventListener("click", cardPinToggle);

    const edit = document.createElement("input");
    edit.type = "checkbox";
    edit.classList.add("card-icon", "icon-edit");
    edit.addEventListener("click", cardEdit);

    const fav = document.createElement("input");
    fav.type = "checkbox";
    fav.checked = todo.isFavorite ? true : false;
    fav.classList.add("card-icon", "icon-fav");
    fav.addEventListener("click", cardFavToggle);
    fav.addEventListener("animationend", (e) => {
      if(e.animationName === "star-shake") {
        e.target.classList.remove("shake");
      };
    })

    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.addEventListener("click", cardDelete);

    const trash = document.createElement("img");
    trash.classList.add("card-icon", "icon-trash");
    trash.src = iconTrash;
    const trashLid = document.createElement("img");
    trashLid.classList.add("card-icon", "icon-trash-lid");
    trashLid.src = iconTrashLid;
    
    deleteIcon.append(trash, trashLid);
    editBtns.append(pin, edit, fav, deleteIcon);

    //add dataset to each item
    [card,drag,pin,edit,fav,deleteIcon].forEach(icon => {
      icon.dataset.projectIdx = projectIdx;
      icon.dataset.todoIdx = todoIdx;
    });
    
    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = todo.title;
    title.addEventListener("click", () => {
      const thisCard = document.querySelector(
        `[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"]`
        );
      
        thisCard.classList.toggle("active");
    });

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = todo.description;

    const checks = document.createElement("ul");
    checks.classList.add("checklist");

    todo.checks.forEach((check,i) => {
      const task = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `${todo.title}-${i}`; //for label only
      checkbox.dataset.projectIdx = projectIdx;
      checkbox.dataset.todoIdx = todoIdx;
      checkbox.dataset.taskIdx = i;

      checkbox.checked = check.isDone;
      checkbox.addEventListener("click", taskCheckToggle);

      const label = document.createElement("label");
      label.htmlFor = checkbox.id;
      label.innerText = check.task;

      const editCheck = document.createElement("img");
      editCheck.src = iconEdit;
      editCheck.classList.add("card-icon", "check-icon", "icon-edit");
      editCheck.addEventListener("click", toggleCheckEdit);

      task.append(checkbox, label, editCheck);

      checks.appendChild(task);

    });

    card.append(drag, title, editBtns, description, checks);

    return card;
  }

  function placeCards(projects){

    main.replaceChildren()
    

    projects.forEach((project, projectIdx) => {
      const projectItem = document.createElement("div");
      projectItem.dataset.idx = projectIdx;
      projectItem.classList.add("project-item");

      const h1 = document.createElement("h1");
      h1.innerText = project.title;
      projectItem.appendChild(h1);

      project.todos.forEach((todo, todoIdx) => {
        projectItem.appendChild(placeCard(todo, projectIdx, todoIdx));
      });

      main.appendChild(projectItem);
    });
  };

  function cardDrag(){
    console.log(`dragging project ${this.dataset.projectIdx
    } - todo ${this.dataset.todoIdx}`);
  }

  function cardEdit(){
    console.log(`editing project ${this.dataset.projectIdx
    } - todo ${this.dataset.todoIdx}`);
  }

  function toggleCheckEdit(){
    console.log("edit check");
  }

  function cardFavToggle(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    localStorageTest[projectIdx].todos[todoIdx].toggleFav();
    
    //toggle star icon
    const isFav = localStorageTest[projectIdx].todos[todoIdx].isFavorite;
    this.src = isFav ? iconFavActive : iconFav;
  }

  function cardPinToggle(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    localStorageTest[projectIdx].todos[todoIdx].togglePin();
  }

  function cardDelete(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;

    const isFav = localStorageTest[projectIdx].todos[todoIdx].isFavorite;
    if(isFav) {
      const thisCardStar = document.querySelector(`[data-project-idx="${
        projectIdx}"][data-todo-idx="${todoIdx}"] .icon-fav`);
      thisCardStar.classList.add("shake");
      return;
    };

    console.log(`delete project ${projectIdx} - todo ${todoIdx}`);
    localStorageTest[projectIdx].todos.splice(todoIdx,1);
    placeCards(localStorageTest);
  }

  function taskCheckToggle(){
    localStorageTest[this.dataset.projectIdx]
    .todos[this.dataset.todoIdx].toggleTask(this.dataset.taskIdx);
  }
    
  return { placeCards };
})();