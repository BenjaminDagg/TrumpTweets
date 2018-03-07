webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#aboutContainer {\r\n\twidth: 80%;\r\n\tmargin: 0 auto;\r\n\tfont-size: 25px;\r\n\tbackground-color: #b6cbed;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"aboutContainer\">\n\t<p>\n\tCreated by Benjamin Dagg in February, 2018. Fetches a\n\trecent tweet from Donald Trump using the Twitter API and displays it over\n\ta random image of Trump from the Getty images API.\n\t</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n\tmargin-right: 20px;\r\n\tfont-size: 30px;\r\n\t\r\n}\r\n\r\na:hover {\r\n\tcolor: orange;\r\n}\r\n\r\nnav {\r\n\t\r\n\tmargin-bottom: 30px;\r\n\twidth: 100%;\r\n\theight: 75px;\r\n\ttext-align: center;\r\n\tbackground-image: url(\"data:image/png;base64,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aT4kTntqa0gz9ah9EMfj0RrSTP7VkDhdYro1pJn8qyExsnBr/YLM3LBSO8TIEtO1IU3Wo/qhn35PW0Oayb/BD6I1pJn8y3SqOh6nS0y3n4vM1KPaIUaWmK5ONVmPBp2qNaSZA7lBp2oNad6pTscjxKnGg6x+QVznVfveL8rsjvtj+QLP1KPyHRiP6uI7MwZXNjS+ynz1ndv5V97q+Crz1Xdu5195+UiX3frOTD0q2xr3x7rPZ0Zx/JxrGdqZUSxvdfxxKbUhzTwIbvx5GLUh3R6P+vLB+KwN6XY9qsvVDr7V2pBm8q+M4vhbnRyP8j7TnKq81atOdbseVacafHl1qtv1qLx8/HEp80516a0Wn5lxqvLacacq7ypwjUy1DzEXeZf+/7v4vGoct6vY1W0V35l50mXCS9o+udo/bj9I4Mb+n3lowdXXzozi1ddmjkfZ1u0/rbwwczyubivzI8vcVrJTzYzH++xUmR9ZslN5Jq/aBwAAALUPAAAAah8AAIDaBwAAgCeqfW+JiIiI6P9Aah8RERGR2kdEREREah8RERERqX1EREREpPYRERERkdpHRERERGofEREREal9RERERKT2EREREal9RERERKT2EREREZHaR0RERERqHxERERGpfURERESk9hERERGR2kdEREREah8RERERqX1EREREah8RERERqX1EREREpPYRERERkdpHRERERGofEREREal9RERERKT2EREREZHaR0RERERqHxEREZHaR0RERERqHxERERGpfURERESk9hERERGR2kdEREREah8RERERqX1EREREdLH2/efXPwcAAMDT89G/vvVtAAAAPD1qHwAAgNoHAAAAtQ8AAABqHwAAANQ+AAAAqH0AAABQ+wAAAKD2AQAAQO0DAABQ++wFAAAAtQ8AAABqHwAAANQ+AAAAqH0AAABQ+wAAAKD2AQAAQO0DAACA2gcAAKD2AQAAQO0DAACA2gcAAAC1DwAAAGofAAAA1D4AAACofQAAAFD7AAAAoPYBAACofQAAAFD7AAAAoPYBAABA7QMAAIDaBwAAALUPAAAAah8AAACu8T90ewOreNpBqgAAAABJRU5ErkJggg==\");\r\n\topacity: 0.75;\r\n\tpadding-top: 30px;\r\n\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<!-- \n<div id=\"container\">\n  <h1 style=\"text-align: center\">\n    Welcome to {{ title }}!\n  </h1>\n  <app-ghetty-images></app-ghetty-images>\n  <app-tweets></app-tweets>\n</div>\n -->\n <head>\n \t<base href=\"/\">\n </head>\n <h1 style=\"text-align: center\">\n    \tWelcome to {{ title }}!\n </h1>\n <nav>\n \t<a routerLink=\"\">Tweets</a>\n \t<a routerLink=\"/about\">About</a>\n </nav>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Trump Tweets';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ghetty_images_ghetty_images_component__ = __webpack_require__("../../../../../src/app/ghetty-images/ghetty-images.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tweets_tweets_component__ = __webpack_require__("../../../../../src/app/tweets/tweets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__links_service_service__ = __webpack_require__("../../../../../src/app/links-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__link_buttons_link_buttons_component__ = __webpack_require__("../../../../../src/app/link-buttons/link-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//routes
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] }
];
//put imported modules here
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ghetty_images_ghetty_images_component__["a" /* GhettyImagesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tweets_tweets_component__["a" /* TweetsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__link_buttons_link_buttons_component__["a" /* LinkButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__links_service_service__["a" /* LinksServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/ghetty-images/ghetty-images.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#image {\r\n  opacity: 0.75;\r\n  width: 100%;\r\n  max-height: 40%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ghetty-images/ghetty-images.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<img id=\"image\"  src='{{url}}'>\r\n<app-link-buttons [url]=\"url\" [btnText]=\"title\"></app-link-buttons>\r\n"

/***/ }),

/***/ "../../../../../src/app/ghetty-images/ghetty-images.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GhettyImagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__links_service_service__ = __webpack_require__("../../../../../src/app/links-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GhettyImagesComponent = /** @class */ (function () {
    function GhettyImagesComponent(http, linkService) {
        this.http = http;
        this.linkService = linkService;
        // getty api keys
        this.gettyTestKey = 'zwu3wcau5nvnbce2ajfzfpma';
        this.getTestSecretKey = 'vZVgUr7W5UBEtzQ3SyzVKE3AuRfRvN6Swcp8Ewjka6NAX';
        this.connectKey = '634j7nbv94yuukxty9d66cgb';
        this.connectSecretKey = 'cfGngDmVWpA7kbm6t6BVYFpYTT3GtfGKyPVVUj5TCjwpk';
        // HTTP header for api request inserted with key
        this.config = { headers: {
                'Api-Key': this.gettyTestKey,
            }
        };
        this.title = 'View Image';
    }
    GhettyImagesComponent.prototype.ngOnInit = function () {
        this.getImage();
    };
    // get array image results from getty api
    GhettyImagesComponent.prototype.getImage = function () {
        var _this = this;
        // call getty images api and get list of images
        this.http.get('https://api.gettyimages.com/v3/search/images?fields=id,title,comp,referral_destinations&sort_order=best&phrase=trump', this.config)
            .subscribe(function (data) {
            //parse list of images to get a randomly selected image
            var images = data['images'];
            var size = images.length;
            var randImg = Math.floor(Math.random() * ((size - 1) - 0 + 1)) + 0;
            var img = images[randImg];
            //set image source to random image
            var url = img['display_sizes'][0]['uri'];
            _this.url = url;
            //send url to links service
            console.log('pic url = ' + _this.url);
            _this.linkService.setPicURL(url);
            console.log('size = ' + size);
        });
    };
    GhettyImagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ghetty-images',
            template: __webpack_require__("../../../../../src/app/ghetty-images/ghetty-images.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ghetty-images/ghetty-images.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__links_service_service__["a" /* LinksServiceService */]])
    ], GhettyImagesComponent);
    return GhettyImagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\r\n\tposition: relative;\r\n\twidth: 50%;\r\n\theight: 50%;\r\n\tmax-height:50%;\r\n\tmargin:0 auto;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <app-ghetty-images></app-ghetty-images>\n  <app-tweets></app-tweets>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/link-buttons/link-buttons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n\tbackground-color: #f4bc42;\r\n\twidth: 100px;\r\n\theight: 50px;\r\n\t\r\n}\r\n\r\nbutton:hover {\r\n\tbackground-color: #6e9be5;\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/link-buttons/link-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<button  style=\"text-align:center;position:absolute;\" (click)=\"gotoLink()\">{{ btnText }}</button>\n"

/***/ }),

/***/ "../../../../../src/app/link-buttons/link-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinkButtonsComponent = /** @class */ (function () {
    function LinkButtonsComponent() {
        console.log('constructor called');
    }
    LinkButtonsComponent.prototype.ngOnInit = function () {
    };
    LinkButtonsComponent.prototype.gotoLink = function () {
        window.open(this.url);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LinkButtonsComponent.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LinkButtonsComponent.prototype, "btnText", void 0);
    LinkButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-link-buttons',
            template: __webpack_require__("../../../../../src/app/link-buttons/link-buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/link-buttons/link-buttons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkButtonsComponent);
    return LinkButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/links-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinksServiceService = /** @class */ (function () {
    function LinksServiceService() {
    }
    LinksServiceService.prototype.setTweetURL = function (url) {
        this.tweetURL = url;
    };
    LinksServiceService.prototype.setPicURL = function (url) {
        this.picURL = url;
    };
    LinksServiceService.prototype.getTweetURL = function () {
        return this.tweetURL;
    };
    LinksServiceService.prototype.getPicURL = function () {
        return this.picURL;
    };
    LinksServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LinksServiceService);
    return LinksServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/tweets/tweets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n#tweetText {\r\n  text-align:center;\r\n  z-index: 100;\r\n  position: absolute;\r\n  color: white;\r\n  font-size: 20px;\r\n  font-family: Serif;\r\n  font-weight: bold;\r\n  text-shadow: -1px -1px 0 #000,\r\n    1px -1px 0 #000,\r\n    -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n    top: 50%;\r\n    overflow: none;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tweets/tweets.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<p id=\"tweetText\">{{tweetText}}</p>\r\n<app-link-buttons style=\"float:right;margin-right: 100px;\" [url]=\"tweetURL\" [btnText]=\"title\"></app-link-buttons>\r\n"

/***/ }),

/***/ "../../../../../src/app/tweets/tweets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__links_service_service__ = __webpack_require__("../../../../../src/app/links-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { RequestOptions } from '@angular/common/http';
//import { RequestMethod } from '@angular/common/http';
var TweetsComponent = /** @class */ (function () {
    function TweetsComponent(http, linkService) {
        this.http = http;
        this.linkService = linkService;
        this.apikey = 'QBz1LovHvGVgZSyVRPCopquJR';
        this.apiSecretKey = 'Hsn80lHNgpsKXKvKnCojn1JJ29GuHXMVmo3CVpJLXjEFn97jKB';
        this.bearer = '';
        this.tweetText = '';
        this.title = 'View Tweet';
    }
    TweetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //call local server to get token
        var headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        this.http.post('http://localhost:3000/authorize', { headers: headers }).subscribe(function (res) {
            console.log(res);
            //call  with bearer token to get tweets
            _this.http.post('http://localhost:3000/search', { headers: headers }).subscribe(function (data) {
                //array of all tweets from users timeline
                var tweets = data['data'];
                console.log(tweets);
                var numTweets = tweets.length;
                //select random tweet
                var rand = Math.floor(Math.random() * ((numTweets - 1) - 0 + 1)) + 0;
                var randTweet = tweets[rand];
                //get year of tweet
                var date = randTweet['created_at'];
                var year = date.substring(date.length - 4, date.length);
                //get tweet id
                var id = randTweet['id_str'];
                _this.tweetURL = 'https://twitter.com/statuses/' + id;
                console.log('id = ' + id);
                _this.tweetText = '"' + randTweet['full_text'].replace('RT', '') + '" - Donald Trump, ' + year;
                console.log(_this.tweetText);
            });
        });
    };
    TweetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tweets',
            template: __webpack_require__("../../../../../src/app/tweets/tweets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tweets/tweets.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__links_service_service__["a" /* LinksServiceService */]])
    ], TweetsComponent);
    return TweetsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map