import iconCheckmark from "../media/images/icons/checkmark.svg";
import iconDrag from "../media/images/icons/drag.svg";
import iconEdit from "../media/images/icons/edit.svg";
import iconTrash from "../media/images/icons/trash.svg";
import iconTrashLid from "../media/images/icons/trash-lid.svg";
import iconFav from "../media/images/icons/fav.svg";
import iconFavActive from "../media/images/icons/fav-active.svg";


export const ui = (() => {
  const body = document.querySelector("body");
  const main = document.querySelector("#main");

  function placeCard(todo, projectIdx, todoIdx){
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.priority = todo.priority;
    card.dataset.projectIdx = projectIdx;
    card.dataset.todoIdx = todoIdx;

    const drag = document.createElement("img");
    drag.classList.add("card-icon", "icon-drag");
    drag.src = iconDrag;
    drag.addEventListener("mousedown", cardDrag);

    const editBtns = document.createElement("div");
    editBtns.classList.add("edit-buttons");
    const edit = document.createElement("img");
    edit.classList.add("card-icon", "icon-edit");
    edit.src = iconEdit;
    edit.addEventListener("click", cardEdit);

    const fav = document.createElement("img");
    fav.classList.add("card-icon", "icon-fav");
    fav.src = todo.isFavorite ? iconFavActive : iconFav;
    fav.addEventListener("click", cardFavToggle);

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
    editBtns.append(edit, fav, deleteIcon);
    
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
      checkbox.id = `${todo.title}-${i}`;
      checkbox.checked = check.isDone;
      checkbox.addEventListener("click", taskToggle);

      const label = document.createElement("label");
      label.htmlFor = checkbox.id;
      label.innerText = check.task;

      task.append(checkbox, label);

      checks.appendChild(task);

    });

    card.append(drag, title, editBtns, description, checks);

    return card;
  }

  function placeCards(projects){
    

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
    console.log(`dragging project ${this.parentNode.dataset.projectIdx
    } - todo ${this.parentNode.dataset.todoIdx}`);
  }

  function cardEdit(){
    console.log(`editing project ${this.parentNode.parentNode.dataset.projectIdx
    } - todo ${this.parentNode.parentNode.dataset.todoIdx}`);
  }

  function cardFavToggle(){
    console.log(`toggle fav project ${this.parentNode.parentNode.dataset.projectIdx
    } - todo ${this.parentNode.parentNode.dataset.todoIdx}`);
  }

  function cardDelete(){
    console.log(`delete project ${this.parentNode.parentNode.dataset.projectIdx
    } - todo ${this.parentNode.parentNode.dataset.todoIdx}`);
  }

  function taskToggle(){
    console.log("toggle task status");
    const parent = this.parentNode.parentNode.parentNode;
    console.log(parent.dataset.projectIdx, parent.dataset.todoIdx);
  }
    
  return { placeCards };
})();