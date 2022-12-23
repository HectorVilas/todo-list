import "./style.css";
import { ui } from "./modules/ui.js";

//run on load
ui.loadMenu();
ui.placeCards(0);



//for testing
import { todoSample } from "./modules/todoSample";
localStorage.setItem("todo", JSON.stringify(todoSample));