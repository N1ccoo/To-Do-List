import projects from './index.js';
import { Todo as createTodo , Project as createProject } from './todo.js';
import createProjectLiContent from './page-load-project-list';
import createContent from './page-load-content.js';

const popupLogic = () => {

    let createTodoButton = document.getElementById('create-button');

    createTodoButton.addEventListener('click',createTodoFunc)

    function createTodoFunc() {
        let x = createTodo('lol')
        projects[0].addTodo(x)

        createProjectLiContent(projects)
        createContent(projects[0])
    }
}

export default popupLogic