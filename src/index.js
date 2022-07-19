import { format } from 'date-fns';
import './style.css';
import { loadHomePage } from './page-load.js'
import { Todo as createTodo , Project as createProject } from './todo.js';
// (title,description,dueDate,priority)

import createContent from './page-load-content.js';
import createProjectLiContent from './page-load-project-list';
import createPopup from './popup';
import navLogic from './navbarLogic.js';
import popupLogic from './popup-logic.js';


let test = createTodo('Finish Website','Finish this to do list website','no due date',1);
let test2 = createTodo('Finish the logic for dom','This is a good challenge','2 days',2);
let test3 = createTodo('burh')

let inbox = createProject('Inbox');
let noTodo = createProject('wow','red');
let testOne = createProject('Inbox');
let testTwo = createProject('Zoinks','orange');
let testThree = createProject('REallay long name test');
let testFour = createProject('werhakjfh','blue');

inbox.addTodo(test)
inbox.addTodo(test2)

let projects = [inbox,noTodo,testOne,testTwo,testThree,testFour]

projects[0].addTodo(test3)

// page gen

loadHomePage();
createContent(projects[0])
createProjectLiContent(projects)
createPopup(projects)
navLogic();
popupLogic();

export default projects
