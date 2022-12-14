import "./style.css";
import { ui } from "./modules/ui.js";

//for testing
import { localStorageTest } from "./modules/localStorageTest.js";

window.addEventListener("keydown", (e) => {
  if(e.key === "r" && e.altKey){
    ui.placeCards(localStorageTest);
    console.log("replacing main");
  };
});


//run on load
ui.loadMenu();
ui.placeCards(localStorageTest);
