const createContacts = (function () {

    function createHeader() {
        const targetContainer = document.getElementById('container_2');
        const contactsHeader = document.createElement('h1');
        contactsHeader.textContent = 'Contacts';
        targetContainer.appendChild(contactsHeader);
    };

    function createPara() {
        const targetContainer = document.getElementById('container_3');
        const contactsPara = document.createElement('p');
        contactsPara.textContent = "contacts contacts contacts contacts contacts contacts contacts contacts contacts contacts contacts contacts contacts"
        targetContainer.appendChild(contactsPara);
    };

    return {
        createHeader: createHeader,
        createPara: createPara
    }
})()

export {
    createContacts
};