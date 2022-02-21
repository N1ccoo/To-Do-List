import create from './dom.js';



const navLogic = () => {

    let menu = document.getElementById('nav-toggle');
    let viewTodo = document.getElementById('project-list-toggle');
    const media = matchMedia('(min-width: 900px)');

    let darkOverlay = create({type:'div', attr:{id:'dark-overlay'}});

    document.body.prepend(darkOverlay);
    media.addEventListener('change',logicMedia);
    menu.addEventListener('click',logicMenu)
    viewTodo.addEventListener('change',addOverlay);
    
    

    function addOverlay() {
        if (viewTodo.checked) {
            darkOverlay.classList.add('dark');
        } else {
            darkOverlay.classList.remove('dark');
        };
    };
  
    function logicMedia() {
            if (menu.checked === true) {
                menu.checked = false;
                viewTodo.checked = false;

                darkOverlay.classList.remove('dark');
            } else if (viewTodo.checked === true) {
                viewTodo.checked = false;

                darkOverlay.classList.remove('dark');
            };
        };

    function logicMenu() {
        if (menu.checked === false && viewTodo.checked === true) {
            viewTodo.checked = false;
            darkOverlay.classList.remove('dark');
        };
    };
};






export default navLogic;