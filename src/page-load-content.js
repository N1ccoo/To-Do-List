import { Todo, Project } from './todo.js';
import create from './dom.js';
import { createImage } from './dom.js';
import moreVertImage from './assets/moreVertical.png';




function createContent (project) {

    let projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = '';
    let todoArray = project.getTodo()

    let projectHeader = create({ type:'div', css:['project-header']});
    let h1 = create({ type:'h1', text:project.getTitle(), attr:{contenteditable:'true'}});
    let todoList = create({ type:'ul', css:['todo-list']});
    let symbolContainers = create({type:'div', css:['relative-container']})
    
    let moreVertSymbol = createImage(moreVertImage,'content-symbol');
    let moreVertToolTip = create({type:'div', css:['tooltip-content'], text:'View Project actions'});
    
 
        projectContainer.append(projectHeader,todoList);
            projectHeader.append(h1,symbolContainers);
                symbolContainers.append(moreVertSymbol,moreVertToolTip);

todoArray.forEach(element => {
    let li = create({type:'li', css:['todo-list-item']});
    let button = create({type:'button', css:['todo-button'], text:'✓'})
    let todoTextContainer = create({type:'div', css:['todo-text-container']});
    let todoTitle = create({type:'p',css:['todo-title'], text:element.getTitle()});
    let todoText = create({type:'p', css:['todo-text'], text:element.getDescription()});

    todoList.append(li);
        li.append(button,todoTextContainer);
            todoTextContainer.append(todoTitle,todoText);
});
}

export default createContent;