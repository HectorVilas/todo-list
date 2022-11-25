import iconStyle from "./style.css";
import iconCheckmark from "./media/images/icons/checkmark.svg";
import iconDrag from "./media/images/icons/drag.svg";
import iconEdit from "./media/images/icons/edit.svg";
import iconTrash from "./media/images/icons/trash.svg";
import iconTrashLid from "./media/images/icons/trash-lid.svg";
import { ui } from "./modules/ui.js";
import { Todo } from "./modules/classes.js";

const projects = [
  {
    title: "routine",
    todos: [
      new Todo("exercise", "It's leg day!", "2022-11-23T17:42", null, [
        { task: "run 3km", isDone: true },
        { task: "bicycle", isDone: false },
        { task: "squats", isDone: false },
      ], "low"),

      new Todo("coding", null, "2022-11-23T17:42", null, [
        { task: "check css-tricks", isDone: true },
        { task: "continue TOP practice", isDone: true },
      ], "high"),
    ],
  },
];

console.log(projects);

ui.loadInterface();