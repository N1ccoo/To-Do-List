import create from './dom.js';
import { createImage } from './dom.js';
import homeImage from './assets/home.png';
import menuImage from './assets/menu.png';
import addImage from './assets/add.png';
import listImage from './assets/list.png';


const loadHomePage = () => {
    createNavBar()
    createContent('Today')
}

function createNavBar() {
    let header = create({type:'header'});

    let nav = create({type:'nav'});
    let logo = create({type:'div', css:['logo'], text:"Nicco"});
    let navToggle = create({type:'input', attr:{type:'checkbox', id:'nav-toggle'}, css:['nav-toggle']});
    let navToggleLabel = create({type:'label',attr:{for:'nav-toggle'}, css:['nav-toggle-label']});
    let list = create({type:'ul'});

    let li1 = create({type:'li'});
    let li2 = create({type:'li'});
    let li3 = create({type:'li'});

    let link1 = create({type:'a', attr:{href:'#'}});
    let link2 = create({type:'a', attr:{href:'#'}});
    let link3 = create({type:'a', attr:{href:'#'}});
    
    let homeSymbol = createImage (homeImage,'nav-symbol');
    let menuSymbol = createImage (menuImage,'nav-symbol');
    let addSymbol = createImage (addImage,'nav-symbol');
    let listSymbol = createImage(listImage,'nav-symbol');
    

    let homeToolTip = create({type:'div', css:['tooltip'], text:'Home'});
    let addToolTip = create({type:'div', css:['tooltip'], text:'Create To Do'});
    let listToolTip = create({type:'div', css:['tooltip'], text:'View To Do'});

    document.body.append(header);
        header.append(logo,navToggle,navToggleLabel,nav);
            navToggleLabel.append(menuSymbol);
            nav.append(list);
                list.append(li1,li2,li3);
                    li1.append(link1);
                    li2.append(link2);
                    li3.append(link3);
                        link1.append(homeSymbol,homeToolTip);
                        link2.append(addSymbol,addToolTip);
                        link3.append(listSymbol,listToolTip);
}                      

function createContent(project, todo) {
    let container = create({type:'div',css:['project-container']});

    let projectName = create({type:'h1',text:'project'});

    let headerContainer = create({type:'div',css:['project-header']});

    let todoList = create({type:'ul', css:['todo-list']} );
    let todo1 = create({type:'li', css:['todo-list-item']});
    
    let button = create({type:'button', css:['todo-button'], text:'✔️'})
    let todoTitle = create({type:'p',css:['todo-title'], text:'Finish the webpage.'});
    let todoText = create({type:'p', css:['todo-text'], text: 'I must finish this webpage, I have alot of stuff to do...'});
    let todoTextContainer = create({type:'div', css:['todo-text-container']});

    document.body.append(container);
        container.append(headerContainer,todoList);
            todoList.append(todo1);
            headerContainer.append(projectName);

                todo1.append(button,todoTextContainer)
                    todoTextContainer.append(todoTitle,todoText);
}









function createTodoNav() {
    console.log('to do navbar created');
}


export { loadHomePage };