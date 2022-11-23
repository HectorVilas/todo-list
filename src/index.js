import "./style.css";

const ui = (() => {
  const body = document.querySelector("body");
  
  function loadInterface(){
    const main = document.createElement("div");
    main.id = "main";

    const nav = document.createElement("div");
    nav.id = "nav";

    const btnsText = ["search", "home", "add"];
    for (let i = 0; i < btnsText.length; i++) {
      const div = document.createElement("div");
      div.classList.add("nav-btn");
      div.innerText = btnsText[i];

      nav.appendChild(div);
    };

    body.appendChild(main);
    body.appendChild(nav);
  };

  return { loadInterface };
})();

ui.loadInterface();