import { Todo, Project } from './todo.js';
import create from './dom.js';
import { createImage } from './dom.js';
import moreImage from './assets/more.png';

function createProjectListContent(projects) {
    let projectListContainer = document.getElementById('project-list-container');
    console.log(projects)
    
    projects.forEach(item => {
        let li = create({type:'li'});
        let circleSymbol = create({type:'div',css:['circle']});
        let text = create({type:'p', text:item.getTitle() });
        let moreSymbol = createImage(moreImage,'nav-symbol');

        projectListContainer.append(li);
            li.append(circleSymbol,text,moreSymbol);
    });
    
    
}

export default createProjectListContent;