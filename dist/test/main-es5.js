(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This is app component {{toggle}}</p>\n\n<!-- <demo-el></demo-el>   -->\n <!-- <app-element></app-element>  -->\n<!-- <demo-el></demo-el> -->\n<button (click)=\"togg()\">Button1</button>\n<button (click)=\"togg1()\">Button2</button>\n<app-test-comp *ngIf=\"toggle === 'true'\"></app-test-comp>\n<app-test-comp2 *ngIf=\"toggle === 'false'\"></app-test-comp2>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test-comp/test-comp.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-comp/test-comp.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>test-comp works!</p>\n<app-element3></app-element3>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test-comp2/test-comp2.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-comp2/test-comp2.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>test-comp2 works!</p>\n  <demo-el></demo-el>\n  <!-- <app-element3></app-element3> -->"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test';
        this.toggle = 'test';
    }
    // ngOnInit(): void {
    //   var jsElm = document.createElement('script');
    //   jsElm.type = 'application/javascript';
    //   jsElm.src = 'http://127.0.0.1:8080/elements2.js';
    //   // jsElm.src = 'http://127.0.0.1:8081/elements1/dist/elements1.js';
    //   document.body.appendChild(jsElm);
    // }
    AppComponent.prototype.togg = function () {
        // this.toggle = this.toggle === 'true' ? 'false' : 'true';
        this.toggle = 'true';
    };
    AppComponent.prototype.togg1 = function () {
        this.toggle = 'false';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test_comp_test_comp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-comp/test-comp.component */ "./src/app/test-comp/test-comp.component.ts");
/* harmony import */ var _test_comp2_test_comp2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-comp2/test-comp2.component */ "./src/app/test-comp2/test-comp2.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _test_comp_test_comp_component__WEBPACK_IMPORTED_MODULE_4__["TestCompComponent"],
                _test_comp2_test_comp2_component__WEBPACK_IMPORTED_MODULE_5__["TestComp2Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/test-comp/test-comp.component.css":
/*!***************************************************!*\
  !*** ./src/app/test-comp/test-comp.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtY29tcC90ZXN0LWNvbXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test-comp/test-comp.component.ts":
/*!**************************************************!*\
  !*** ./src/app/test-comp/test-comp.component.ts ***!
  \**************************************************/
/*! exports provided: TestCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCompComponent", function() { return TestCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestCompComponent = /** @class */ (function () {
    function TestCompComponent() {
    }
    TestCompComponent.prototype.ngOnInit = function () {
        var jsElm = document.createElement('script');
        jsElm.type = 'application/javascript';
        // jsElm.src = 'http://127.0.0.1:8080/elements2.js';
        // jsElm.src = 'http://127.0.0.1:8082/elements3.js';
        jsElm.src = 'https://github.com/SubharajMukherjee/MicroAppB/blob/master/dist/elements3.js';
        document.body.appendChild(jsElm);
    };
    TestCompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-comp',
            template: __webpack_require__(/*! raw-loader!./test-comp.component.html */ "./node_modules/raw-loader/index.js!./src/app/test-comp/test-comp.component.html"),
            styles: [__webpack_require__(/*! ./test-comp.component.css */ "./src/app/test-comp/test-comp.component.css")]
        })
    ], TestCompComponent);
    return TestCompComponent;
}());



/***/ }),

/***/ "./src/app/test-comp2/test-comp2.component.css":
/*!*****************************************************!*\
  !*** ./src/app/test-comp2/test-comp2.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtY29tcDIvdGVzdC1jb21wMi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test-comp2/test-comp2.component.ts":
/*!****************************************************!*\
  !*** ./src/app/test-comp2/test-comp2.component.ts ***!
  \****************************************************/
/*! exports provided: TestComp2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComp2Component", function() { return TestComp2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComp2Component = /** @class */ (function () {
    function TestComp2Component() {
    }
    TestComp2Component.prototype.ngOnInit = function () {
        var jsElm = document.createElement('script');
        jsElm.type = 'application/javascript';
        jsElm.src = 'http://127.0.0.1:8080/elements2.js';
        // jsElm.src = 'http://127.0.0.1:8082/elements3.js';
        document.body.appendChild(jsElm);
    };
    TestComp2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-comp2',
            template: __webpack_require__(/*! raw-loader!./test-comp2.component.html */ "./node_modules/raw-loader/index.js!./src/app/test-comp2/test-comp2.component.html"),
            styles: [__webpack_require__(/*! ./test-comp2.component.css */ "./src/app/test-comp2/test-comp2.component.css")]
        })
    ], TestComp2Component);
    return TestComp2Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/angular/Desktop/test2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map