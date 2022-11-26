import "./style.css";
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
  {
    title: "test",
    todos: [
      new Todo("test1", "test1 descr", "2022-11-23T17:42","2023-11-23T17:42", [
        { task: "test1 task1", isDone: true },
        { task: "test1 task2", isDone: false },
        { task: "test1 task3", isDone: true },
      ], "low"),

      new Todo("test2", "test2 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test2 task1", isDone: true },
        { task: "test2 task2", isDone: true },
        { task: "test3 task3", isDone: true },
        { task: "test4 task4", isDone: true },
        { task: "test5 task5", isDone: true },
      ], "middle"),
    ],
  },
];


ui.loadInterface();
ui.placeCards(projects);