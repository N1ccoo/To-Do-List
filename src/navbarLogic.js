import create from './dom.js';



const navLogic = () => {

    let menu = document.getElementById('nav-toggle');
    let viewTodo = document.getElementById('project-list-toggle');
    let projectListGrid = document.getElementById('project-list-container-grid');
    let projectListItems = Array.from(projectListGrid.children)
    const media = matchMedia('(min-width: 800px)');

    let darkOverlay = create({type:'div', attr:{id:'dark-overlay'}});

    document.body.prepend(darkOverlay);
    media.addEventListener('change',logicMedia);
    menu.addEventListener('click',logicMenu)
    viewTodo.addEventListener('change',addOverlay);
    
    viewTodo.addEventListener('click',slideNav)
    

    function slideNav() {
        if (viewTodo.checked) {
            projectListGrid.style.width = '250px';
            projectListGrid.style.visibility = 'visible';
            projectListGrid.style.opacity = '1';

            projectListItems.forEach((item) => {
                item.style.visibility = 'visible';
                item.style.opacity = '1'
            });
        } else {
            projectListGrid.style.width = '0px';
            projectListGrid.style.visibility = 'hidden';
            projectListGrid.style.visibility = '0';

            projectListItems.forEach((item) => {
                item.style.visibility = 'hidden';
                item.style.opacity = '0';
            });
        }
        
    }

    

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

                projectListGrid.style.width = '0px';
                projectListGrid.style.visibility = 'hidden';
                projectListGrid.style.visibility = '0';

                projectListItems.forEach((item) => {
                    item.style.visibility = 'hidden';
                    item.style.opacity = '0';
                });


                darkOverlay.classList.remove('dark');
            } else if (viewTodo.checked === true) {
                viewTodo.checked = false;

                projectListGrid.style.width = '0px';
                projectListGrid.style.visibility = 'hidden';
                projectListGrid.style.visibility = '0';

                projectListItems.forEach((item) => {
                    item.style.visibility = 'hidden';
                    item.style.opacity = '0';
                });
            
                darkOverlay.classList.remove('dark');
            };
        };

    function logicMenu() {
        if (menu.checked === false && viewTodo.checked === true) {
            viewTodo.checked = false;
            darkOverlay.classList.remove('dark');
            
    function projectListHide() {

    }

           
        };
    };
};






export default navLogic;