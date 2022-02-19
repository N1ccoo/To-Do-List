import { Todo, Project } from './todo.js';
import create from './dom.js';

function createContent (project) {

    let todoArray = project.getTodo()

    let projectContainer = create({ type:'div', css:['project-container']});
    let projectHeader = create({ type:'div', css:['project-header']});
    let h1 = create({ type:'h1', text:project.getTitle()});
    let todoList = create({ type:'ul', css:['todo-list']});

    document.body.append(projectContainer)   
        projectContainer.append(projectHeader,todoList);
            projectHeader.append(h1);

            
    todoArray.forEach(element => {
        let li = create({type:'li', css:['todo-list-item']});
        let button = create({type:'button', css:['todo-button'], text:'✔️'})
        let todoTextContainer = create({type:'div', css:['todo-text-container']});
        let todoTitle = create({type:'p',css:['todo-title'], text:element.getTitle()});
        let todoText = create({type:'p', css:['todo-text'], text:element.getDescription()});

        todoList.append(li);
            li.append(button,todoTextContainer);
                todoTextContainer.append(todoTitle,todoText);
    });

}

export default createContent;