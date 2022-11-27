import iconCheckmark from "../media/images/icons/checkmark.svg";
import iconDrag from "../media/images/icons/drag.svg";
import iconEdit from "../media/images/icons/edit.svg";
import iconTrash from "../media/images/icons/trash.svg";
import iconTrashLid from "../media/images/icons/trash-lid.svg";


export const ui = (() => {
  const body = document.querySelector("body");
  const main = document.querySelector("#main");

  function placeCard(todo){
    const card = document.createElement("div");
    card.classList.add("card");

    const drag = document.createElement("img");
    drag.classList.add("card-icon", "icon-drag");
    drag.src = iconDrag;

    const title = document.createElement("h1");
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

    card.append(drag, title, description, checks);

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