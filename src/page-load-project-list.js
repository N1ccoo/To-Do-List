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

        let listItemGrid = create({type:'li'});
        let circleSymbolGrid = create({type:'div',css:['circle']});
        let textGrid = create({type:'p', text:item.getTitle() });
        let moreSymbolGrid = createImage(moreImage,'nav-symbol');
        let todoNumGrid = create({type:'p', text:item.getTodo().length, css:['todo-num']});
        
        projectListContainer.append(li);
            li.append(circleSymbol,text,moreSymbol,todoNum);

        projectListContainerGrid.append(listItemGrid);
            listItemGrid.append(circleSymbolGrid,textGrid,moreSymbolGrid,todoNumGrid);

        circleSymbol.style.backgroundColor = item.getColor();
        circleSymbolGrid.style.backgroundColor = item.getColor();
        
        li.addEventListener('mouseenter',displayMore);
        li.addEventListener('mouseleave',displayNum);
        li.addEventListener('click',test);

        listItemGrid.addEventListener('mouseenter',displayMoreGrid);
        listItemGrid.addEventListener('mouseleave',displayNumGrid);
        listItemGrid.addEventListener('click',test);

        function displayMore(e) {
            moreSymbol.style.display = 'block';
            todoNum.style.display = 'none';
        }
        
        function displayNum(e) {
            moreSymbol.style.display = 'none';
            todoNum.style.display = 'block';
        }

        function displayMoreGrid(e) {
            moreSymbolGrid.style.display = 'block';
            todoNumGrid.style.display = 'none';
        }
        
        function displayNumGrid(e) {
            moreSymbolGrid.style.display = 'none';
            todoNumGrid.style.display = 'block';
        }

        function test(e) {
            createContent(item)
        }

    });
}

export default createProjectListContent;