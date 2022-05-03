import '/style.css'
import {
    displayPage
} from './/content.js'
import {
    createMenu
} from './/menu.js'
import {
    createContacts
} from './/contacts.js'

displayPage.createContent();
displayPage.createContainer();
displayPage.createLogo();
displayPage.createHeader();
displayPage.createPara();
displayPage.createTabs();

const clearContent = function () {
    const contentItems = document.getElementById('main');
    while (contentItems.hasChildNodes()) {
        contentItems.removeChild(contentItems.firstChild);
    }
}

const events = (function eventListener() {
    let pageState = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if(e.target.id == 'button_home') {
                if (pageState == 0) {

                } else {;
                    clearContent();
                    createMenu.createContainer();
                    displayPage.createHeader();
                    displayPage.createPara();
                    pageState = 0;    
                }
            } else if (e.target.id == 'button_menu') {
                if (pageState == 1) {

                } else {
                    clearContent();
                    createMenu.createContainer();
                    createMenu.createHeader();
                    createMenu.createPara();
                    pageState = 1;    
                }
            } else {
                if (pageState == 2) {

                } else {
                    clearContent();
                    createMenu.createContainer();
                    createContacts.createHeader();
                    createContacts.createPara();
                    pageState = 2;    
                }
            }
         })
    })
})();

