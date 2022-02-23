import { Todo, Project } from './todo.js';
import create from './dom.js';
import { createImage } from './dom.js';
import moreImage from './assets/more.png';
import createContent from './page-load-content.js';

function createProjectListContent(projects) {
    let projectListContainer = document.getElementById('project-list-container');
    let projectListContainerGrid = document.getElementById('project-list-container-grid');
    
    projects.forEach(item => {
        let li = create({type:'li'});
        let circleSymbol = create({type:'div',css:['circle']});
        let text = create({type:'p', text:item.getTitle() });
        let moreSymbol = createImage(moreImage,'nav-symbol');
        let todoNum = create({type:'p', text:item.getTodo().length, css:['todo-num']});

        let li2 = create({type:'li'});
        let circleSymbol2 = create({type:'div',css:['circle']});
        let text2 = create({type:'p', text:item.getTitle() });
        let moreSymbol2 = createImage(moreImage,'nav-symbol');
        let todoNum2 = create({type:'p', text:item.getTodo().length, css:['todo-num']});
        
        projectListContainer.append(li);
            li.append(circleSymbol,text,moreSymbol,todoNum);

        projectListContainerGrid.append(li2);
            li2.append(circleSymbol2,text2,moreSymbol2,todoNum2);
        
        li.addEventListener('mouseenter',displayMore);
        li.addEventListener('mouseleave',displayNum);

        li2.addEventListener('mouseenter',displayMoreGrid);
        li2.addEventListener('mouseleave',displayNumGrid);
        li2.addEventListener('click',test)

        function displayMore(e) {
            moreSymbol.style.display = 'block';
            todoNum.style.display = 'none';
        }
        
        function displayNum(e) {
            moreSymbol.style.display = 'none';
            todoNum.style.display = 'block';
        }

        function displayMoreGrid(e) {
            moreSymbol2.style.display = 'block';
            todoNum2.style.display = 'none';
        }
        
        function displayNumGrid(e) {
            moreSymbol2.style.display = 'none';
            todoNum2.style.display = 'block';
        }

        function test(e) {
            createContent(item)
        }

    });
}

export default createProjectListContent;