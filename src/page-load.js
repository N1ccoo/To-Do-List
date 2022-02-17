import create from './dom.js';
import { createImage } from './dom.js';
import homeImage from './assets/home.png';
import menuImage from './assets/menu.png';
import addImage from './assets/add.png';
import listImage from './assets/list.png';


const loadHomePage = () => {
    createNavBar();
    createTodoNav();
   
};

function createNavBar() {
    let header = create({type:'header'});
    let nav = create({type:'nav'});
    let logo = create({type:'div', css:['logo'], text:"Nicco"});
    let navToggle = create({type:'input', attr:{type:'checkbox', id:'nav-toggle'}, css:['nav-toggle']});
    let navToggleLabel = create({type:'label',attr:{for:'nav-toggle'}, css:['nav-toggle-label']});
    let list1 = create({type:'ul'});
    let projectListContainer = create({type:'ul',css:['project-list-container']});

    let li1 = create({type:'li'});
    let li2 = create({type:'li'});
    let projectList = create({type:'div',css:['project-list']});

    let link1 = create({type:'a', attr:{href:'#'}});
    let link2 = create({type:'a', attr:{href:'#'}});

    let projectListToggle = create({type:'input', attr:{type:'checkbox', id:'project-list-toggle'}, css:['nav-toggle']});
    let projectListToggleLabel = create({type:'label',attr:{for:'project-list-toggle'}, css:['project-toggle-label']});

    let homeSymbol = createImage (homeImage,'nav-symbol');
    let menuSymbol = createImage (menuImage,'nav-symbol');
    let addSymbol = createImage (addImage,'nav-symbol');
    let listSymbol = createImage(listImage,'nav-symbol');

    let homeToolTip = create({type:'div', css:['tooltip'], text:'Home'});
    let addToolTip = create({type:'div', css:['tooltip'], text:'Create To Do'});
    let listToolTip = create({type:'div', css:['tooltip'], text:'View To Do'});

    let projectLi1 = create({type:'li',text:'Project lol'});
    let projectLi2 = create({type:'li',text:'Inbox'});

    document.body.append(header);
        header.append(logo,navToggle,navToggleLabel,nav);
            navToggleLabel.append(menuSymbol);
            nav.append(list1,projectList);
                list1.append(li1,li2);
                    li1.append(link1);
                    li2.append(link2);
                    projectList.append(projectListToggle,projectListToggleLabel,projectListContainer);
                        link1.append(homeSymbol,homeToolTip);
                        link2.append(addSymbol,addToolTip);
                        projectListToggleLabel.append(listSymbol,listToolTip);
                            projectListContainer.append(projectLi1,projectLi2);

}                      




function createTodoNav() {
    
        
    
}


export { loadHomePage };