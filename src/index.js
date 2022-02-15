import { format } from 'date-fns';
import './style.css';
import { loadHomePage } from './page-load.js'
import { Todo as createTodo , Project as createProject } from './todo.js';
// (title,description,dueDate,priority)

import wow from './page-load-content.js';

loadHomePage()


let test = createTodo('Finish Website','Finish this to do list website','no due date',1);
let test2 = createTodo('Finish the logic for dom','This is a good challenge','2 days',2);
let inbox = createProject('Inbox');

inbox.addTodo(test)
inbox.addTodo(test2)

let projects = [inbox]


wow(projects[0])

