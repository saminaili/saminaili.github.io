(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addskills/addskills.component.css":
/*!***************************************************!*\
  !*** ./src/app/addskills/addskills.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHNraWxscy9hZGRza2lsbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/addskills/addskills.component.html":
/*!****************************************************!*\
  !*** ./src/app/addskills/addskills.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-padding\">\n<div class=\"uk-card uk-card-default uk-card-body \">\n  <h3 class=\"uk-card-title\">Herfa Add</h3>\n  \n\n  <fieldset class=\"uk-fieldset\">\n\n     \n\n      <div class=\"uk-margin\">\n          <input class=\"uk-input\" type=\"text\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"data.name\">\n      </div>\n      <div class=\"uk-margin\">\n        <input class=\"uk-input\" type=\"text\" placeholder=\"Telefone\"name=\"telefone\"[(ngModel)]=\"data.telefone\">\n    </div>\n    <div class=\"uk-margin\">\n      <input class=\"uk-input\" type=\"text\" placeholder=\"Herfa\" name=\"herfa\" [(ngModel)]=\"data.herfa\"> \n  </div>\n\n      <div class=\"uk-margin\">\n          <textarea class=\"uk-textarea\" rows=\"5\" placeholder=\"Textarea\"  name=\"text\" [(ngModel)]=\"data.text\"></textarea>\n      </div>\n\n     \n\n    \n\n      <div class=\"uk-margin\">\n        <button class=\"uk-button uk-button-primary\" (click)=\"insertskills()\">Primary</button>\n      </div>\n\n  </fieldset></div>\n"

/***/ }),

/***/ "./src/app/addskills/addskills.component.ts":
/*!**************************************************!*\
  !*** ./src/app/addskills/addskills.component.ts ***!
  \**************************************************/
/*! exports provided: AddskillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddskillsComponent", function() { return AddskillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


//import { AngularFireDatabase } from '@angular/fire/database';

//import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
//import { AngularFireList } from '@angular/fire/database';
//import { Observable } from 'rxjs/';
//import {Observable,of, from } from 'rxjs';


//import { AngularFireAuth } from '@angular/fire/auth';
var AddskillsComponent = /** @class */ (function () {
    function AddskillsComponent(fire, db, router) {
        this.fire = fire;
        this.db = db;
        this.router = router;
        // name:string="Sami Naili :)"
        // telefone:string="0176323671020"
        // herfa:string="Ingenieur Informatik"
        // text:string="Salut tout le monde :hallo World"
        //enejem neste3mel tari9et el object ow lazemni fi adds0kills en7ote 9abla e name data.name,sata.text...
        this.data = {
            name: "",
            telefone: "",
            herfa: "",
            text: "",
        };
        this.email = '';
        this.itemList = db.list('skills');
    }
    //constructor(){}
    AddskillsComponent.prototype.ngOnInit = function () {
        var user = localStorage.getItem('email');
        this.email = user;
        console.log(user);
        // this.fire.authState.subscribe(auth=>{if(auth){this.uid=auth.uid
        // console.log(this.uid)}})
        this.uid = localStorage.getItem('uid');
        console.log(this.uid);
    };
    //console.log(this.data)//etha 7abite ne3mel affichage emte3 mokawnet el object fi consol
    //console.log(this.data.name)//ye3meli affichage fi consol el le name eli fi object data
    //     let isDone: boolean = false;
    //     let isDone2: boolean = true;
    // console.log("we dont have a problem in javascript"+isDone);
    // let list: number[] = [1, 2, 3];
    // let list2: Array<number> = [1, 2, 3];
    // console.log("This is a normal Array"+list);
    // console.log("This is generique: list"+list2);
    // //declate a trumple Type
    // let x:[number,string]=[10,"Sami"];
    // console.log("This is generique but withe Key: list"+x);
    // console.log("This is generique but withe Key: list"+x[0]);//eykharejli el7ejette eli fi index 0
    // //enum:we use enum forexemple for the weekDay:the Things be not chnange
    // enum Color {Red, Green, Blue}
    // let c: Color = Color.Green;
    // console.log(c);
    // //any ye3ni e data ma3endhech type ye3ni etnejem etkoun number etnejem etkoun string etnejem zeda etkoun array :anna mouch met2aked men nawe3 ne3melha
    // //let notsure :any;
    // //notsure=4;
    // //notsure='4';
    // //notsure=[4,3,2];
    // console.log(   this.add(1,3));
    // console.log(this.sub());
    // }
    // // function fiha esme
    // //named function 
    // sub(){
    // let z=3+45;
    // console.log("sub"+z);
    // }
    // //named function 
    // add(x,y)
    // {
    // return x+y;
    // }
    // //anonymous function ye3ni me3endhech esme nektbo fa9ate function 
    // myAdd=function(x,y)
    // {
    //   return x+y;
    // };
    // //be3ed makemlthom lazem enedihom fi nginit() 3en tari9e kelmete this.esme el function
    // //etha teste3ml teype script wenta tekhdem bel angular lazem lazem etne7i kelmet function eli 9odem esme elfunction sinon erreur
    // //laken ken tekhdem be teypescript monfasel 3ala angular lazmk tekteb kelmete function 
    AddskillsComponent.prototype.insertskills = function () {
        this.itemList.push({
            name: this.data.name,
            telefone: this.data.telefone,
            herfa: this.data.herfa,
            text: this.data.text,
            email: this.email,
            uid: this.uid
        });
        this.router.navigate(['/myskills']);
    };
    AddskillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addskills',
            template: __webpack_require__(/*! ./addskills.component.html */ "./src/app/addskills/addskills.component.html"),
            styles: [__webpack_require__(/*! ./addskills.component.css */ "./src/app/addskills/addskills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddskillsComponent);
    return AddskillsComponent;
}());



/***/ }),

/***/ "./src/app/allskills/allskills.component.css":
/*!***************************************************!*\
  !*** ./src/app/allskills/allskills.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbHNraWxscy9hbGxza2lsbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/allskills/allskills.component.html":
/*!****************************************************!*\
  !*** ./src/app/allskills/allskills.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk padding\">\n \n  <table class=\"uk-table uk-table-striped\">\n      <thead>\n          <tr>\n              <th>$key</th>\n              <th>name</th>\n              <th>telefone</th>\n            \n             \n              \n              \n          </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let item of itemArray\">\n                <td>{{item.$key}}</td> \n              <td>{{item.name}}</td>\n              <td>{{item.telefone}}</td>\n              <td><button class=\"uk-button uk-button-danger\" (click)=\"moreinfo(item.$key)\" >Details</button></td>\n            \n           \n              \n              \n              \n                    \n                        \n                    \n                          \n                \n          </tr>\n          \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      </tbody>\n  </table>\n\n\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/allskills/allskills.component.ts":
/*!**************************************************!*\
  !*** ./src/app/allskills/allskills.component.ts ***!
  \**************************************************/
/*! exports provided: AllskillsComponent, ListItemClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllskillsComponent", function() { return AllskillsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemClass", function() { return ListItemClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AllskillsComponent = /** @class */ (function () {
    function AllskillsComponent(db, router) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.itemArray = [];
        this.data = {
            name: "",
            telefone: "",
            herfa: "",
            text: "",
        };
        this.itemList = db.list('skills');
        this.itemList.snapshotChanges().
            subscribe(function (actions) {
            actions.forEach(function (action) {
                var y = action.payload.toJSON();
                y['$key'] = action.key;
                _this.itemArray.push(y);
            });
            console.log(_this.itemArray);
        });
    }
    AllskillsComponent.prototype.ngOnInit = function () {
    };
    AllskillsComponent.prototype.moreinfo = function ($key) {
        console.log($key);
        this.router.navigate(['details/+key']);
    };
    AllskillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allskills',
            template: __webpack_require__(/*! ./allskills.component.html */ "./src/app/allskills/allskills.component.html"),
            styles: [__webpack_require__(/*! ./allskills.component.css */ "./src/app/allskills/allskills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AllskillsComponent);
    return AllskillsComponent;
}());

var ListItemClass = /** @class */ (function () {
    function ListItemClass() {
    }
    return ListItemClass;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\r\n\r\n\r\n\r\n</app-navbar>\r\n\r\n<router-outlet></router-outlet>"

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
        this.title = 'skills';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _addskills_addskills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addskills/addskills.component */ "./src/app/addskills/addskills.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _regestrieren_regestrieren_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regestrieren/regestrieren.component */ "./src/app/regestrieren/regestrieren.component.ts");
/* harmony import */ var _myskills_myskills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./myskills/myskills.component */ "./src/app/myskills/myskills.component.ts");
/* harmony import */ var _allskills_allskills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./allskills/allskills.component */ "./src/app/allskills/allskills.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _datails_datails_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./datails/datails.component */ "./src/app/datails/datails.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");





















var routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    { path: 'addskills', component: _addskills_addskills_component__WEBPACK_IMPORTED_MODULE_6__["AddskillsComponent"] },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    },
    {
        path: 'Register', component: _regestrieren_regestrieren_component__WEBPACK_IMPORTED_MODULE_10__["RegestrierenComponent"]
    },
    {
        path: 'myskills', component: _myskills_myskills_component__WEBPACK_IMPORTED_MODULE_11__["MyskillsComponent"]
    },
    {
        path: 'allskills', component: _allskills_allskills_component__WEBPACK_IMPORTED_MODULE_12__["AllskillsComponent"]
    },
    {
        path: 'details/:id', component: _datails_datails_component__WEBPACK_IMPORTED_MODULE_18__["DatailsComponent"]
    },
    {
        path: 'userprofile', component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_19__["UserprofileComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _addskills_addskills_component__WEBPACK_IMPORTED_MODULE_6__["AddskillsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _regestrieren_regestrieren_component__WEBPACK_IMPORTED_MODULE_10__["RegestrierenComponent"],
                _myskills_myskills_component__WEBPACK_IMPORTED_MODULE_11__["MyskillsComponent"],
                _allskills_allskills_component__WEBPACK_IMPORTED_MODULE_12__["AllskillsComponent"],
                _datails_datails_component__WEBPACK_IMPORTED_MODULE_18__["DatailsComponent"],
                _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_19__["UserprofileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/datails/datails.component.css":
/*!***********************************************!*\
  !*** ./src/app/datails/datails.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFpbHMvZGF0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/datails/datails.component.html":
/*!************************************************!*\
  !*** ./src/app/datails/datails.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-padding\">\n\n<div class=\"uk-card uk-card-default uk-width-1-2@m\">\n    <div class=\"uk-card-header\">\n        <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n            <div class=\"uk-width-auto\">\n                <img class=\"uk-border-circle\" width=\"80\" height=\"80\" src=\"assets\\images.png\">\n            </div>\n            <div class=\"uk-width-expand\">\n                <h3 class=\"uk-card-title uk-margin-remove-bottom\">Email:{{data.email}}</h3>\n                <p class=\"uk-text-meta uk-margin-remove-top\">name{{data.name}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"uk-card-body\">\n        <p>TPhone:{{data.telefone}}</p>\n    </div>\n    <div class=\"uk-card-footer\">\n        <a href=\"#\" class=\"uk-button uk-button-text\">Read more</a>\n    </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/datails/datails.component.ts":
/*!**********************************************!*\
  !*** ./src/app/datails/datails.component.ts ***!
  \**********************************************/
/*! exports provided: DatailsComponent, ListItemClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatailsComponent", function() { return DatailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemClass", function() { return ListItemClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");




var DatailsComponent = /** @class */ (function () {
    function DatailsComponent(route, db) {
        var _this = this;
        this.route = route;
        this.db = db;
        this.itemArray = [];
        this.data = {
            name: "",
            telefone: "",
            herfa: "",
            text: "",
            email: "",
        };
        this.route.params.subscribe(function (params) {
            _this.id = params;
        });
        this.itemList = db.list('skills');
        this.itemList.snapshotChanges().
            subscribe(function (actions) {
            actions.forEach(function (action) {
                var y = action.payload.toJSON();
                y['$key'] = action.key;
                console.log(action.key);
                if (action.key == _this.id['id']) {
                    _this.itemArray.push(y);
                    _this.data.name = _this.itemArray[0]['name'];
                    _this.data.telefone = _this.itemArray[0]['telefone'];
                    _this.data.email = _this.itemArray[0]['email'];
                }
            });
            console.log(_this.itemArray[0]);
            console.log(_this.data);
        });
    }
    DatailsComponent.prototype.ngOnInit = function () {
        console.log(this.id['id']);
    };
    DatailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datails',
            template: __webpack_require__(/*! ./datails.component.html */ "./src/app/datails/datails.component.html"),
            styles: [__webpack_require__(/*! ./datails.component.css */ "./src/app/datails/datails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], DatailsComponent);
    return DatailsComponent;
}());

var ListItemClass = /** @class */ (function () {
    function ListItemClass() {
    }
    return ListItemClass;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light\" data-src=\"assets\\background\\kenia_gepardit[1].jpg\" uk-img>\n  <h1>Background Image</h1>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-padding\">\n  <div class=\"uk-card uk-card-default uk-card-body \">\n    <h3 class=\"uk-card-title\">Login</h3>\n    \n  \n    <fieldset class=\"uk-fieldset\">\n  \n       \n  \n        <div class=\"uk-margin\">\n          <input class=\"uk-input\" type=\"text\" placeholder=\"Email\"name=\"email\"[(ngModel)]=\"email\">\n      </div>\n      \n        <div class=\"uk-margin\">\n            <input class=\"uk-input\" type=\"text\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n        </div>\n  \n       \n  \n\n        <div class=\"uk-margin\">\n          <button class=\"uk-button uk-button-primary\" (click)=\"mylogin()\">Login</button>\n        </div>\n  \n    </fieldset></div>\n  "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fire, router) {
        this.fire = fire;
        this.router = router;
        this.email = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.mylogin = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.email, this.password).then(function (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('email', _this.fire.auth.currentUser.email);
            _this.fire.authState.subscribe(function (auth) {
                if (auth) {
                    localStorage.setItem('uid', auth.uid);
                }
            });
            _this.router.navigate(['/addskills']);
        }).catch(function (error) { console.error(error); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/myskills/myskills.component.css":
/*!*************************************************!*\
  !*** ./src/app/myskills/myskills.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215c2tpbGxzL215c2tpbGxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/myskills/myskills.component.html":
/*!**************************************************!*\
  !*** ./src/app/myskills/myskills.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk padding\">\n \n    <table class=\"uk-table uk-table-striped\">\n        <thead>\n            \n            <tr>\n                <div>\n                <th>$key</th>\n                <th>name</th>\n                <th>telefone</th>\n                <th>herfa</th>\n                <th>text</th>\n                <th>Actions</th>\n                </div>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of itemArray\">\n                <div *ngIf=\"item.uid===myuid\"></div>\n                <td>{{item.$key}}</td>\n                <td>{{item.name}}</td>\n                <td>{{item.telefone}}</td>\n                <td>{{item.herfa}}</td>\n                <td>{{item.text}}</td>\n                <td><button class=\"uk-button uk-button-default uk-margin-small-right\" type=\"button\" uk-toggle=\"target: #modal-example\" (click)=\"editForm(item.$key)\" >Edit</button>\n\n                </td>\n                <td><button class=\"uk-button uk-button-danger\" (click)=\"onDelete(item.$key)\" >Delete</button></td>\n                \n                \n                \n                <div id=\"modal-example\" uk-modal>\n                    <div class=\"uk-modal-dialog uk-modal-body\">\n                      \n                        <fieldset class=\"uk-fieldset\">\n                \n                     \n                \n                            <div class=\"uk-margin\">\n                                <input class=\"uk-input\" type=\"text\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"data.name\">\n                            </div>\n                            <div class=\"uk-margin\">\n                              <input class=\"uk-input\" type=\"text\" placeholder=\"Telefone\"name=\"telefone\"   [(ngModel)]=\"data.telefone\">\n                          </div>\n                          <div class=\"uk-margin\">\n                            <input class=\"uk-input\" type=\"text\" placeholder=\"Herfa\" name=\"herfa\"   [(ngModel)]=\"data.herfa\"> \n                        </div>\n                      \n                            <div class=\"uk-margin\">\n                                <textarea class=\"uk-textarea\" rows=\"5\" placeholder=\"Textarea\"  name=\"text\" [(ngModel)]=\"data.text\"></textarea>\n                            </div>\n                      \n                           \n                      \n                          \n                      \n                            \n                      \n                        </fieldset>\n                        <p class=\"uk-text-right\">\n                            <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n                            <button class=\"uk-button uk-button-primary\" type=\"button\"  (click)=\"onEdit(item.$key)\">Save</button>\n                        </p>\n                    </div>\n                </div>\n                \n            </tr>\n            \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        </tbody>\n    </table>\n\n\n\n\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/myskills/myskills.component.ts":
/*!************************************************!*\
  !*** ./src/app/myskills/myskills.component.ts ***!
  \************************************************/
/*! exports provided: MyskillsComponent, ListItemClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyskillsComponent", function() { return MyskillsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemClass", function() { return ListItemClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MyskillsComponent = /** @class */ (function () {
    function MyskillsComponent(db, router) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.itemArray = [];
        this.data = {
            name: "",
            telefone: "",
            herfa: "",
            text: "",
        };
        this.itemList = db.list('skills');
        this.itemList.snapshotChanges().
            subscribe(function (actions) {
            actions.forEach(function (action) {
                var y = action.payload.toJSON();
                y['$key'] = action.key;
                _this.itemArray.push(y);
            });
            _this.myuid = localStorage.getItem('uid');
            console.log(_this.itemArray);
        });
    }
    MyskillsComponent.prototype.ngOnInit = function () {
    };
    MyskillsComponent.prototype.editForm = function ($key) {
        for (var _i = 0, _a = this.itemArray; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value['$key'] == $key) {
                console.log(value['$key']);
                this.data.name = value['name'];
                this.data.telefone = value['telefone'];
                this.data.herfa = value['herfa'];
                this.data.text = value['text'];
            }
        }
    };
    MyskillsComponent.prototype.onDelete = function ($key) {
        this.itemList.remove($key);
        this.itemArray = [];
    };
    MyskillsComponent.prototype.onEdit = function ($key) {
        this.data.name; //tekhouhom men form ye3ni ki nenzel yekhou el 9ima eljedida eli anna 3adeltha be3ed nerfe3ha lel cloud ye3ni firebase
        this.data.telefone;
        this.data.herfa;
        this.data.text;
        this.itemList.set($key, {
            name: this.data.name,
            telefone: this.data.telefone,
            herfa: this.data.herfa,
            text: this.data.text,
        });
        this.itemArray = []; //kol ma3mel update enraja3 array ye3ni ne3mlo faskh 7atta metsirech 3ameleyete etekrara ye3ni yektebha mara okhra
        this.router.navigate(['/myskills']);
    };
    MyskillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myskills',
            template: __webpack_require__(/*! ./myskills.component.html */ "./src/app/myskills/myskills.component.html"),
            styles: [__webpack_require__(/*! ./myskills.component.css */ "./src/app/myskills/myskills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MyskillsComponent);
    return MyskillsComponent;
}());

var ListItemClass = /** @class */ (function () {
    function ListItemClass() {
    }
    return ListItemClass;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"uk-navbar-container\" uk-navbar>\n\n    <div class=\"uk-navbar-left\">\n\n        <ul class=\"uk-navbar-nav\">\n            <li class=\"uk-active\"><a routerLink=\"/\">Home</a></li>\n           \n            <li     *ngIf=\"isLoggedIn\"><a href=\"addskills\">Add skills</a></li>\n             <li   *ngIf=\"!isLoggedIn\"><a routerLink=\"/Register\"  >Registrieren</a></li>\n             <li  *ngIf=\"!isLoggedIn\"><a routerLink=\"/login\" >Login</a></li>\n             <li><a routerLink=\"/myskills\">Myskills</a></li>\n             <li><a routerLink=\"allskills\">Allskills</a></li>\n\n        </ul>\n\n    </div>\n\n    \n    <div      class=\"uk-navbar-left\">\n\n        <ul class=\"uk-navbar-nav\">\n            \n            <li  *ngIf=\"isLoggedIn\" >\n                <a href=\"#\">My Accopmte</a>\n                <div class=\"uk-navbar-dropdown\">\n                    <ul class=\"uk-nav uk-navbar-dropdown-nav\">\n                      \n                        <li><a routerLink=\"userprofile\">Profile</a></li>\n                        <li><a href=\"#\" (click)=\"Logout()\">Logout</a></li>\n                    </ul>\n                </div>\n            </li>\n          \n        </ul>\n\n    </div>\n\n\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.isLoggedIn = true;
        var status = localStorage.getItem('isLoggedIn');
        if (status === 'true') {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    }
    //  firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     // User is signed in.
    //     this.isLoggedIn=true;
    //   } else {
    //     // No user is signed in.
    //     this.isLoggedIn=false;
    //     this.router.navigate(['/login'])
    //   }
    // });
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.Logout = function () {
        this.afAuth.auth.signOut();
        this.isLoggedIn = false;
        localStorage.setItem('isLoggedIn', 'false');
        this.router.navigate(['/login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/regestrieren/regestrieren.component.css":
/*!*********************************************************!*\
  !*** ./src/app/regestrieren/regestrieren.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2VzdHJpZXJlbi9yZWdlc3RyaWVyZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/regestrieren/regestrieren.component.html":
/*!**********************************************************!*\
  !*** ./src/app/regestrieren/regestrieren.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-padding\">\n  <div class=\"uk-card uk-card-default uk-card-body \">\n    <h3 class=\"uk-card-title\">Login</h3>\n    \n  \n    <fieldset class=\"uk-fieldset\">\n  \n       \n  \n        <div class=\"uk-margin\">\n          <input class=\"uk-input\" type=\"text\" placeholder=\"Email\"name=\"email\"[(ngModel)]=\"email\">\n      </div>\n      \n        <div class=\"uk-margin\">\n            <input class=\"uk-input\" type=\"text\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n        </div>\n  \n       \n  \n\n        <div class=\"uk-margin\">\n          <button class=\"uk-button uk-button-primary\" (click)=\"myRegister()\">Regestrieren</button>\n        </div>\n  \n    </fieldset></div>\n  "

/***/ }),

/***/ "./src/app/regestrieren/regestrieren.component.ts":
/*!********************************************************!*\
  !*** ./src/app/regestrieren/regestrieren.component.ts ***!
  \********************************************************/
/*! exports provided: RegestrierenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegestrierenComponent", function() { return RegestrierenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegestrierenComponent = /** @class */ (function () {
    function RegestrierenComponent(fire, router) {
        this.fire = fire;
        this.router = router;
        this.email = '';
        this.password = '';
    }
    RegestrierenComponent.prototype.ngOnInit = function () {
    };
    RegestrierenComponent.prototype.myRegister = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.email, this.password).then(function (user) {
            _this.router.navigate(['home']);
        }).catch(function (error) { console.error(error); });
    };
    RegestrierenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regestrieren',
            template: __webpack_require__(/*! ./regestrieren.component.html */ "./src/app/regestrieren/regestrieren.component.html"),
            styles: [__webpack_require__(/*! ./regestrieren.component.css */ "./src/app/regestrieren/regestrieren.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegestrierenComponent);
    return RegestrierenComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-padding\">\n<div class=\"uk-card uk-card-default uk-width-1-2@m\">\n  <div class=\"uk-card-header\">\n      <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n          <div class=\"uk-width-auto\">\n              <img class=\"uk-border-circle\" width=\"200\" height=\"200\" src=\"assets\\images.png\">\n          </div>\n          <div class=\"uk-width-expand\">\n              <h3 class=\"uk-card-title uk-margin-remove-bottom\">Email:{{email}}</h3>\n             <br><br>\n             <input type=\"file\"   class=\"uk-button uk-button-default uk-button-small\" (change)=\"Upload($event)\" accept=\".png,.jpg\" />\n              <p class=\"uk-text-meta uk-margin-remove-top\"><time datetime=\"2016-04-01T19:00\">April 01, 2016</time></p>\n          </div>\n      </div>\n  </div>\n\n \n  <div class=\"uk-card-body\">\n      <p>{{name}}</p>\n      <p>{{telefone}}</p>\n  </div>\n  <div class=\"uk-card-footer\">\n      <a href=\"#\" class=\"uk-button uk-button-text\"  uk-toggle=\"target: #modal-example\"  >Edit</a>\n\n\n\n\n     \n\n      \n  \n      \n      \n      \n      <div id=\"modal-example\" uk-modal>\n          <div class=\"uk-modal-dialog uk-modal-body\">\n            \n              <fieldset class=\"uk-fieldset\">\n      \n           \n      \n                  <div class=\"uk-margin\">\n                      <input class=\"uk-input\" type=\"text\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"data.name\">\n                  </div>\n                  <div class=\"uk-margin\">\n                    <input class=\"uk-input\" type=\"text\" placeholder=\"Telefone\"name=\"telefone\"   [(ngModel)]=\"data.telefone\">\n                </div>\n                \n            \n                  \n            \n                \n            \n                  \n            \n              </fieldset>\n              <p class=\"uk-text-right\">\n                  <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n                  <button class=\"uk-button uk-button-primary\" type=\"button\"  (click)=\"onEdit()\">Save</button>\n              </p>\n          </div>\n      </div>\n  </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent, ListItemClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemClass", function() { return ListItemClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");




var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(afStorage, db) {
        var _this = this;
        this.afStorage = afStorage;
        this.db = db;
        this.itemArray = [];
        this.data = {
            name: "",
            telefone: "",
            herfa: "",
            text: "",
            email: ""
        };
        this.itemList = db.list('users');
        this.itemList.snapshotChanges().
            subscribe(function (actions) {
            actions.forEach(function (action) {
                var y = action.payload.toJSON();
                y['$key'] = action.key;
                _this.itemArray.push(y);
                if (action.payload.child('uid').val() == _this.myid['id']) {
                    _this.userkey = action.key;
                    _this.itemArray.push(y);
                    _this.data.name = _this.itemArray[0]['name'];
                    _this.data.telefone = _this.itemArray[0]['telefone'];
                    _this.data.email = _this.itemArray[0]['email'];
                }
            });
            _this.myid = localStorage.getItem('uid');
            console.log(_this.itemArray);
        });
        this.email = localStorage.getItem('email');
        this.myid = localStorage.getItem('uid');
    }
    UserprofileComponent.prototype.onEdit = function ($key) {
        this.data.name; //tekhouhom men form ye3ni ki nenzel yekhou el 9ima eljedida eli anna 3adeltha be3ed nerfe3ha lel cloud ye3ni firebase
        this.data.telefone;
        this.itemList.set(this.userkey, {
            name: this.data.name,
            telefone: this.data.telefone,
        });
        this.itemArray = [];
    };
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    UserprofileComponent.prototype.Upload = function (event) {
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(event.target.file[0]);
    };
    UserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UserprofileComponent);
    return UserprofileComponent;
}());

var ListItemClass = /** @class */ (function () {
    function ListItemClass() {
    }
    return ListItemClass;
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
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyABkqvtmb8bkyr6q8IAXHMSVjmA-AQ_H1E",
        authDomain: "myfirstproject-14afc.firebaseapp.com",
        databaseURL: "https://myfirstproject-14afc.firebaseio.com",
        projectId: "myfirstproject-14afc",
        storageBucket: "myfirstproject-14afc.appspot.com",
        messagingSenderId: "708701747720",
        appId: "1:708701747720:web:7446a1ab5e78b0bc"
    }
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

module.exports = __webpack_require__(/*! C:\Users\sami\skills\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map