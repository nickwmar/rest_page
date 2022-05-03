import dtrLogo from '/dtr_logo.png'

const displayPage = (function () {
    
    const tabNames = ['home', 'menu', 'contacts'];

    function createContainer () {
        const targetContainer = document.getElementById('main');
        for (let i = 0; i < 4; i++ ){
            let container = document.createElement('div');
            container.setAttribute('id', `container_${i}`);
            container.classList.add('container');
            if (i <= 1) {
                document.body.insertBefore(container, targetContainer);
            } else {
                targetContainer.appendChild(container);
            }

        }   
    }  
    
    function createLogo () {
        const targetContainer = document.getElementById('container_0');
        const displayLogoDiv = document.createElement('div');
        displayLogoDiv.setAttribute('id', 'logoDiv');
        const displayLogo = new Image();
        displayLogo.src = dtrLogo;
        displayLogo.setAttribute('id', 'dtrLogo');
        targetContainer.appendChild(displayLogoDiv);
        displayLogoDiv.appendChild(displayLogo);
    };

    function createTabs() {
        const targetContainer = document.getElementById('container_1');
        for (let i = 0; i < 3; i++) {
            let tab = document.createElement('button');
            tab.setAttribute('id', `button_${tabNames[i]}`);
            tab.textContent = `${tabNames[i]}`;
            tab.classList.add('tab');
            targetContainer.appendChild(tab);
        };
        return {
            tabNames: tabNames
        }
    };

    function createContent () {
        let container = document.createElement('div');
        container.setAttribute('id', `main`);
        container.classList.add('mainBody');
        document.body.append(container);
    }

    function createHeader () {
        const targetContainer = document.getElementById('container_2')
        const displayHeader = document.createElement('h1');
        displayHeader.setAttribute('id', 'header');
        displayHeader.innerHTML = 'Restaurant page';
        targetContainer.appendChild(displayHeader);
    };

    function createPara () {
        const targetContainer = document.getElementById('container_3')
        const displayPara = document.createElement('p');
        displayPara.setAttribute('id', 'para');
        displayPara.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        targetContainer.appendChild(displayPara);
    };

    return {
        createContainer: createContainer,
        createContent: createContent,
        createLogo: createLogo,
        createHeader: createHeader,
        createPara: createPara,
        createTabs: createTabs,
        tabNames: tabNames
    }
})();

export {
    displayPage
}