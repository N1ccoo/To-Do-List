import create from './dom.js';
import { createImage } from './dom.js';
import homeImage from './assets/home.png';
import menuImage from './assets/menu.png';
import addImage from './assets/add.png';
import listImage from './assets/list.png';
import iconsEightImage from './assets/icons8.png';

const loadHomePage = () => {
    createNavBar();
    createMain();
    createPopup()
};

function createNavBar() {
    let header = create({type:'header'});
    let nav = create({type:'nav'});
    let logo = create({type:'div', css:['logo'], text:"Nicco List"});
    let navToggle = create({type:'input', attr:{type:'checkbox', id:'nav-toggle',value:'yes'}, css:['nav-toggle']});
    let navToggleLabel = create({type:'label',attr:{for:'nav-toggle'}, css:['nav-toggle-label']});
    let list1 = create({type:'ul'});
    let projectListContainer = create({type:'ul',css:['project-list-container'], attr:{id:'project-list-container'}});

    let li1 = create({type:'li'});
    let li2 = create({type:'li'});
    let li3 = create({type:'li'});''
    let projectList = create({type:'div',css:['project-list']});

    let link1 = create({type:'a', attr:{href:'#'}});
    let link2 = create({type:'a', attr:{href:'#'}});
    let icons8 = create({type:'a', attr:{href:'https://icons8.com/'}});


    let projectListToggle = create({type:'input', attr:{type:'checkbox', id:'project-list-toggle', value:'yes'}, css:['nav-toggle']});
    let projectListToggleLabel = create({type:'label',attr:{for:'project-list-toggle'}, css:['project-toggle-label']});

    let homeSymbol = createImage (homeImage,'nav-symbol');
    let menuSymbol = createImage (menuImage,'nav-symbol');
    let addSymbol = createImage (addImage,'nav-symbol');
    let listSymbol = createImage(listImage,'nav-symbol');
    let iconsEightSymbol = createImage (iconsEightImage,'nav-symbol');

    let homeToolTip = create({type:'div', css:['tooltip'], text:'Home'});
    let addToolTip = create({type:'div', css:['tooltip'], text:'Create To Do'});
    let listToolTip = create({type:'div', css:['tooltip'], text:'View To Do'});
    let iconsEightToolTip = create({type:'div', css:['tooltip'], text:'Icons from here'});

    document.body.append(header);
        header.append(navToggle,navToggleLabel,nav,logo);
            navToggleLabel.append(menuSymbol);
            nav.append(projectList,list1);
                list1.append(li1,li2,li3);
                    li1.append(link1);
                    li2.append(link2);
                    li3.append(icons8)
                    projectList.append(projectListToggle,projectListToggleLabel,projectListContainer);
                        link1.append(homeSymbol,homeToolTip);
                        link2.append(addSymbol,addToolTip);
                        icons8.append(iconsEightSymbol,iconsEightToolTip);
                        projectListToggleLabel.append(listSymbol,listToolTip);
}                      

function createMain() {
    let gridBody = create({type:'div', attr:{id:'grid-body'}});
    let projectContainer = create({ type:'div', css:['project-container'], attr:{id:'project-container'}});
    let todoListGrid = create({type:'ul', css:['project-list-container-grid'], attr:{id:'project-list-container-grid'}});

    document.body.append(gridBody);
        gridBody.append(todoListGrid,projectContainer);
        
}

function createPopup() {
    let popup = create({type:'div', attr:{id:'popup-container'}});
    let textContainer = create({type:'div', attr:{id:'text-container-form'}})
    let title = create({type:'textarea', attr:{id:'todo-create-title', placeholder:'Task title' }});
    let description = create({type:'textarea', attr:{id:'todo-create-description', placeholder:'description'}});
    let buttonContainer = create({type:'div', css:['button-container-form']});
    let createButton = create({type:'button', attr:{id:'create-button'}, css:['button-form'], text:'Create task'});
    let cancelButton = create({type:'button', attr:{id:'cancel-button'}, css:['button-form'], text:'Cancel'});

    document.body.append(popup);
        popup.append(textContainer,buttonContainer);
            textContainer.append(title,description)
            buttonContainer.append(createButton, cancelButton);
}







export { loadHomePage };