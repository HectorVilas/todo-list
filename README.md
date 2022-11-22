# todo-list
## Live: https://hectorvilas.github.io/todo-list/dist/

## Introduction
Welcome to my new project! This is a TODO list, another practice from The Odin Project. There's nothing too specific about the kind of TODO list I can make.

## Practice requisites:
- Your ‘todos’ are going to be objects that you’ll want to dynamically create
- at a minimum they should have a title, description, dueDate and priority.
- you might also want to include notes or even a checklist.
- should have projects or separate lists of todos
- When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put
- users should be able to create new projects and choose which project their todos go into
- you should separate your application logic from the DOM-related stuff, so keep all of those things in separate modules
- the look of the User Interface is up to you, but it should be able to do the following:
- - view all projects
- - view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)
- - expand a single todo to see/edit its details
- - delete a todo
- use the following library: date-fns for formatting and manipulating dates and times
-  add some persistence to this todo app using the Web Storage API (localStorage)
- - set up a function that saves the projects (and todos) to localStorage every time a new project (or todo) is created
- - and another function that looks for that data in localStorage when your app is first loaded
- - make sure your app doesn’t crash if the data you may want retrieve from localStorage isn’t there

