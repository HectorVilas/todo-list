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

  function placeCard(todo){
    const card = document.createElement("div");
    card.classList.add("card");

    const drag = document.createElement("img");
    drag.classList.add("card-icon", "icon-drag");
    drag.src = iconDrag;

    const editBtns = document.createElement("div");
    editBtns.classList.add("edit-buttons");
    const edit = document.createElement("img");
    edit.classList.add("card-icon", "icon-edit");
    edit.src = iconEdit;
    const fav = document.createElement("img");
    fav.classList.add("card-icon", "icon-fav");
    fav.src = iconFav;
    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("delete-icon");
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
    

    projects.forEach((project, i) => {
      const projectItem = document.createElement("div");
      projectItem.dataset.idx = i;
      projectItem.classList.add("project-item");

      const h1 = document.createElement("h1");
      h1.innerText = project.title;
      projectItem.appendChild(h1);

      project.todos.forEach(todo => {
        projectItem.appendChild(placeCard(todo));
      });

      main.appendChild(projectItem);
    });
  };
    
  return { placeCards };
})();