import { format } from 'date-fns';
import './style.css';
import { loadHomePage } from './page-load.js'
import { Todo as createTodo , Project as createProject } from './todo.js';
// (title,description,dueDate,priority)

import createContent from './page-load-content.js';
import navLogic from './navbarLogic.js'



let test = createTodo('Finish Website','Finish this to do list website','no due date',1);
let test2 = createTodo('Finish the logic for dom','This is a good challenge','2 days',2);
let inbox = createProject('Inbox');
let noTodo = createProject('No Todos');

inbox.addTodo(test)
inbox.addTodo(test2)

let projects = [inbox,noTodo]


// page gen

loadHomePage();
createContent(projects[0])
navLogic();