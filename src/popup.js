import create from './dom.js';
import { createImage } from './dom.js';
import flagImage from './assets/flag.png'; 

function createPopup(project) {
    let popup = create({type:'div', attr:{id:'popup-container'}});
    let textContainer = create({type:'div', attr:{id:'text-container-form'}})
    let title = create({type:'textarea', attr:{id:'todo-create-title', placeholder:'Task title' }});
    let description = create({type:'textarea', attr:{id:'todo-create-description', placeholder:'Description'}});
    let buttonContainer = create({type:'div', css:['button-container-form']});
    let createButton = create({type:'button', attr:{id:'create-button'}, css:['button-form'], text:'Create task'});
    let cancelButton = create({type:'button', attr:{id:'cancel-button'}, css:['button-form'], text:'Cancel'});
    let settingsContainer = create({type:'div', css:['settings-container-form']});
    let scheduleButton = create({type:'button', css:['button-form-small'], attr:{id:'schedule-button'}, text:'Schedule'});
    let projectSelectButton = create({type:'button', attr:{id:'project-select-button'}, css:['button-form-small'], text:'Project'});

    let container = create({type:'div', css:['relative-container']});
    let flagSymbol = createImage()

    

    document.body.append(popup);
        popup.append(textContainer,settingsContainer,buttonContainer);
            textContainer.append(title,description)
            settingsContainer.append(scheduleButton, projectSelectButton)
            buttonContainer.append(createButton, cancelButton);


}

export default createPopup
