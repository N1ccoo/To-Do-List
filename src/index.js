import { format } from 'date-fns';
import './style.css';
import { loadHomePage } from './page-load.js'
import { Todo as createTodo , Project as createProject } from './todo.js';
// (title,description,dueDate,priority)

loadHomePage()


let test = createTodo('Finish Website','Finish this to do list website','no du date',1);
let inbox = createProject('Inbox')


inbox.addTodo(test);
console.log(inbox.getTodo()[0].getTitle())
