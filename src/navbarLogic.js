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
    viewTodo.addEventListener('change',slideNav);
    
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
    
        };
    };

    // close project list container on under 800px media

    let projectToggleLabel = document.getElementById('project-toggle-label');
    let projectListButton = document.getElementById('project-list-toggle');
    let projectListContainer = document.getElementById('project-list-container');
    let widthMatch = window.matchMedia("(min-width: 800px)")
    
    widthMatch.addEventListener('change', projectListLogic)
    
    function projectListLogic (e) {
        if (e.matches) {
            viewTodo.removeEventListener('change',openProjectList)
        } else {
            viewTodo.addEventListener('change',openProjectList)
        }
    }

    function openProjectList(e) {
        document.addEventListener('click',closeProjectList)
        projectToggleLabel.style.pointerEvents = 'none';
    }

    function closeProjectList(e) {
        let path = e.composedPath();
        const withinBoundaries = path.includes(projectListContainer);
        if (!(withinBoundaries)) {
            viewTodo.checked = false;
            addOverlay()
            console.log(viewTodo.checked)
            console.log(e.target)
            projectToggleLabel.style.pointerEvents = 'auto';
            document.removeEventListener('click',closeProjectList)
        } else if (path.includes(projectListButton)) {
            console.log(path.includes(projectListButton))
        };
    };

    // dynamic height

    let formTextArea1 = document.getElementById('todo-create-description');
    let formTextArea2 = document.getElementById('todo-create-title')
    
    formTextArea1.addEventListener('input',dynamicHeight)
    formTextArea2.addEventListener('input',dynamicHeight)
   
    function dynamicHeight(e){
        e.target.style.minHeight = '';
        e.target.style.minHeight = e.target.scrollHeight + 'px';
    }

    // create todo (open and close form)

    let createTodo = document.getElementById('create-button');
    let cancelTodo = document.getElementById('cancel-button');
    let createTodoButton = document.getElementById('create-todo-button');
    let popupContainer = document.getElementById('popup-container');
   
    function openForm(e) {
        popupContainer.classList.remove('closePopupForm');
        popupContainer.classList.add('openPopupForm');
        document.addEventListener('click', closeForm);
    }

    function closeForm(e) {
        let path = e.composedPath();
        const withinBoundaries = path.includes(createTodoButton) || path.includes(popupContainer);
        if (!(withinBoundaries)) {
            popupContainer.classList.add('closePopupForm');
            popupContainer.classList.remove('openPopupForm');
            document.removeEventListener('click', closeForm)
        };
    };

    createTodoButton.addEventListener('click', openForm);
    createTodo.addEventListener('click', closeForm);

};






export default navLogic;