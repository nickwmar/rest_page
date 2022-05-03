const createMenu = (function () {

    function createContainer () {
        const targetContainer = document.getElementById('main');
        for (let i = 2; i < 4; i++ ){
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

    function createHeader() {
        const targetContainer = document.getElementById('container_2');
        const menuHeader = document.createElement('h1');
        menuHeader.textContent = 'Menu';
        targetContainer.appendChild(menuHeader);
    };

    function createPara() {
        const targetContainer = document.getElementById('container_3');
        const menuPara = document.createElement('p');
        menuPara.textContent = "menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu menu"
        targetContainer.appendChild(menuPara);
    };

    return {
        createContainer: createContainer,
        createHeader: createHeader,
        createPara: createPara
    }
})()

export {
    createMenu
};