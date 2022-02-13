import create from './dom.js';
import { createImage } from './dom.js';
import home from './assets/home.png';
import menu from './assets/menu.png';
import add from './assets/add.png';

const loadHomePage = () => {
    createNavBar()
}

function createNavBar() {
    let header = create({type:'header'});
    
    let nav = create({type:'nav'});
    let logo = create({type:'h1', css:['logo'], text:'Nicco'});
    let navToggle = create({type:'input', attr:{type:'checkbox', id:'nav-toggle'}, css:['nav-toggle']});
    let navToggleLabel = create({type:'label',attr:{for:'nav-toggle'}, css:['nav-toggle-label']});
    let list = create({type:'ul'});

    let li1 = create({type:'li'});
    let li2 = create({type:'li'});

    let link1 = create({type:'a', attr:{href:'#'}});
    let link2 = create({type:'a', attr:{href:'#'}});
    
    let homeSymbol = createImage (home,'nav-symbol');
    let menuSymbol = createImage (menu,'nav-symbol');
    let addSymbol = createImage (add,'nav-symbol');

    document.body.append(header);
        header.append(logo,navToggle,navToggleLabel,nav);
            navToggleLabel.append(menuSymbol);
            nav.append(list);
                list.append(li1,li2);
                    li1.append(link1);
                    li2.append(link2);
                        link1.append(homeSymbol);
                        link2.append(addSymbol);
}

export { loadHomePage };