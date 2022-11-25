export const ui = (() => {
  const body = document.querySelector("body");
  
  function loadInterface(){
    const main = document.createElement("div");
    main.id = "main";



    body.appendChild(main);
  };

  return { loadInterface };
})();