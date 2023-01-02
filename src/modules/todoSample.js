import {Todo} from "./classes.js";
import { format } from "date-fns";

const date = format(new Date(), "yyyy-MM-dd");
    
export const todoSample = [
  {
    title: "How to use",
    todos: [
      new Todo("1) Creating a project", "These are the steps to create a new project", date,"", [
        { task: "Touch the burger button ", isDone: false },
        { task: "or look at the sidebar at the left", isDone: false },
        { task: "Touch the plus button", isDone: false },
        { task: "Your new project will open", isDone: false },
        { task: "Touch the pencil button on the menu", isDone: false },
        { task: "Write a proper title for the new project", isDone: false },
        { task: "The new title autosaves while writing", isDone: false },
        { task: "Congratulations! You created your first project!", isDone: false },
        { task: "If you want to delete a project, click on the bin", isDone: false },
        { task: "next to it's title on the menu", isDone: false },
      ], "low", true, true),

      new Todo("2) Adding a to-do", "This is how you create a new to-do", date,"", [
        { task: "Touch the plus button at the bottom", isDone: false },
        { task: "This will open the to-do on edit mode", isDone: false },
        { task: "You can change the name and add a description", isDone: false },
        { task: "Changes are saved on each key press", isDone: false },
        { task: "You can add a due date and change priority", isDone: false },
        { task: "The plus button at the bottom will create tasks", isDone: false },
        { task: "Write a description for your new task", isDone: false },
        { task: "Next to it there's a checkbox", isDone: false },
        { task: "use it once the task is done", isDone: false },
        { task: "You can delete a task with the cross button", isDone: false },
        { task: "Disable the edit mode with the blue pencil button", isDone: false },
        { task: "You can use the checkbox even without edit mode", isDone: false },
        { task: "Create as many to-dos as you need!", isDone: false },
      ], "low", true, true),

      new Todo("3) Managing a to-do", "Here's what you can do with your to-dos", date,"", [
        { task: "At the right of the title there's 4 buttons:", isDone: false },
        { task: "1. The pin button will show the to-do in the pinned filter", isDone: false },
        { task: "2. The pencil button will toggle the edit mode", isDone: false },
        { task: "3. The star button will mark the to-do as favorite", isDone: false },
        { task: "this will also prevent deletion, unlike the pin", isDone: false },
        { task: "and will also show on the favorites filter", isDone: false },
        { task: "4. The bin button will delete the to-do", isDone: false },
        { task: "only if it's not faved by the star", isDone: false },
        { task: "At the left there's a handle icon:", isDone: false },
        { task: "1. hold down on it to drag a to-do", isDone: false },
        { task: "2. release it where you want to move it", isDone: false },
      ], "low", true, true),

      new Todo("About", "To-do project created by Hector Vilas", date,"", [
        { task: "Find me on GitHub as HectorVilas!", isDone: false },
        { task: "github.com/HectorVilas", isDone: false },
      ], "", true, true),
    ],
  },

  {
    title: "Example project",
    todos: [
      new Todo("exercise", "It's leg day!", date, "", [
        { task: "run 3km", isDone: true },
        { task: "bicycle", isDone: false },
        { task: "squats", isDone: false },
      ], "middle", false, true),

      new Todo("coding", "", date, "", [
        { task: "check css-tricks", isDone: true },
        { task: "continue TOP practice", isDone: true },
      ], "high", true, false),
    ],
  },
];