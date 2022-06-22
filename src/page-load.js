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
    let link2 = create({type:'a', attr:{href:'#', id:'create-todo-button'}});
    let icons8 = create({type:'a', attr:{href:'https://icons8.com/'}});


    let projectListToggle = create({type:'input', attr:{type:'checkbox', id:'project-list-toggle', value:'yes'}, css:['nav-toggle']});
    let projectListToggleLabel = create({type:'label',attr:{for:'project-list-toggle'}, css:['project-toggle-label']});

    let homeSymbol = createImage (homeImage,'nav-symbol', 'home-button');
    let menuSymbol = createImage (menuImage,'nav-symbol', 'menu-button');
    let addSymbol = createImage (addImage,'nav-symbol', 'add-button');
    let listSymbol = createImage(listImage,'nav-symbol', 'list-button');
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



export { loadHomePage };