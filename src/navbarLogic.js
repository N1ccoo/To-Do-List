const navLogic = () => {

    const media = matchMedia('(min-width: 900px)');
    media.addEventListener('change',logic);

    // Checkboxes for navigation

    let menu = document.getElementById('nav-toggle');
    let viewTodo = document.getElementById('project-list-toggle');


    function logic() {
        if (menu.checked === true) {
            menu.checked = false;
            viewTodo.checked = false;
        } else if (viewTodo.checked === true) {
            viewTodo.checked = false;
        };
    };
};

export default navLogic;