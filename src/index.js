import "./style.css";
import { ui } from "./modules/ui.js";
import { Todo } from "./modules/classes.js";

//for testing
import {localStorageTest} from "./modules/ui.js"
window.addEventListener("keydown", (e) => {
  if(e.key === "r"){
    ui.placeCards(localStorageTest);
    console.log("replacing main");
  };
});


//run on load
ui.placeCards(localStorageTest);
