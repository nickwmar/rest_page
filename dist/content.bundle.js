"use strict";
(self["webpackChunkrest_page"] = self["webpackChunkrest_page"] || []).push([["content"],{

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPage": () => (/* binding */ displayPage)
/* harmony export */ });
/* harmony import */ var _dtr_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../dtr_logo.png */ "./dtr_logo.png");

const displayPage = (function () {
    
    const tabNames = ['home', 'menu', 'contacts'];

    function createContainer () {
        for (let i = 0; i < 4; i++ ){
            let container = document.createElement('div');
            container.setAttribute('id', `container_${i}`);
            container.classList.add('container');
            document.body.appendChild(container);
        }   
    }  
    
    function createLogo () {
        const targetContainer = document.getElementById('container_0');
        const displayLogoDiv = document.createElement('div');
        displayLogoDiv.setAttribute('id', 'logoDiv');
        const displayLogo = new Image();
        displayLogo.src = _dtr_logo_png__WEBPACK_IMPORTED_MODULE_0__;
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
        createLogo: createLogo,
        createHeader: createHeader,
        createPara: createPara,
        createTabs: createTabs,
        tabNames: tabNames
    }
})();



/***/ }),

/***/ "./dtr_logo.png":
/*!**********************!*\
  !*** ./dtr_logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82c084492d7236d6aebe.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/content.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQSxzREFBc0QsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBTztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RCxpQ0FBaUMsWUFBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RfcGFnZS8uL3NyYy9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkdHJMb2dvIGZyb20gJy9kdHJfbG9nby5wbmcnXG5jb25zdCBkaXNwbGF5UGFnZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgXG4gICAgY29uc3QgdGFiTmFtZXMgPSBbJ2hvbWUnLCAnbWVudScsICdjb250YWN0cyddO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKysgKXtcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNvbnRhaW5lcl8ke2l9YCk7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH0gICBcbiAgICB9ICBcbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVMb2dvICgpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcl8wJyk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlMb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpc3BsYXlMb2dvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nb0RpdicpO1xuICAgICAgICBjb25zdCBkaXNwbGF5TG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBkaXNwbGF5TG9nby5zcmMgPSBkdHJMb2dvO1xuICAgICAgICBkaXNwbGF5TG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R0ckxvZ28nKTtcbiAgICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlMb2dvRGl2KTtcbiAgICAgICAgZGlzcGxheUxvZ29EaXYuYXBwZW5kQ2hpbGQoZGlzcGxheUxvZ28pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xuICAgICAgICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyXzEnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGJ1dHRvbl8ke3RhYk5hbWVzW2ldfWApO1xuICAgICAgICAgICAgdGFiLnRleHRDb250ZW50ID0gYCR7dGFiTmFtZXNbaV19YDtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWIpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFiTmFtZXM6IHRhYk5hbWVzXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSGVhZGVyICgpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcl8yJylcbiAgICAgICAgY29uc3QgZGlzcGxheUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGRpc3BsYXlIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgICAgICAgZGlzcGxheUhlYWRlci5pbm5lckhUTUwgPSAnUmVzdGF1cmFudCBwYWdlJztcbiAgICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlIZWFkZXIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQYXJhICgpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcl8zJylcbiAgICAgICAgY29uc3QgZGlzcGxheVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRpc3BsYXlQYXJhLnNldEF0dHJpYnV0ZSgnaWQnLCAncGFyYScpO1xuICAgICAgICBkaXNwbGF5UGFyYS5pbm5lckhUTUwgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIlxuICAgICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVBhcmEpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVDb250YWluZXI6IGNyZWF0ZUNvbnRhaW5lcixcbiAgICAgICAgY3JlYXRlTG9nbzogY3JlYXRlTG9nbyxcbiAgICAgICAgY3JlYXRlSGVhZGVyOiBjcmVhdGVIZWFkZXIsXG4gICAgICAgIGNyZWF0ZVBhcmE6IGNyZWF0ZVBhcmEsXG4gICAgICAgIGNyZWF0ZVRhYnM6IGNyZWF0ZVRhYnMsXG4gICAgICAgIHRhYk5hbWVzOiB0YWJOYW1lc1xuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCB7XG4gICAgZGlzcGxheVBhZ2Vcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=