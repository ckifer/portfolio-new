function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"about\" id=\"About\">\n  <mat-grid-list cols=\"8\" rowHeight=\"1:1\">\n    <mat-grid-tile colspan=\"1\">\n      </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" class=\"about-me heading\">\n      <h2 class=\"heading\">About Me</h2>\n    </mat-grid-tile>\n    <mat-grid-tile *ngFor=\"let item of about | async\" colspan=\"3\" class=\"about-me-text\">\n      <p>{{ item.paragraph }}</p>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\">\n    </mat-grid-tile>\n</mat-grid-list>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ck-header></ck-header>\n\n<ck-splash></ck-splash>\n<ck-about></ck-about>\n<ck-experience></ck-experience>\n<ck-education></ck-education>\n<ck-projects></ck-projects>\n<ck-skills></ck-skills>\n<ck-contact></ck-contact>\n\n<ck-footer></ck-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"Contact\">\n  <h2 class=\"heading-secondary\">Contact Me</h2>\n  <form method=\"POST\" action=\"https://formspree.io/coltinkifer19@gmail.com\">\n    <input type=\"hidden\" name=\"_subject\" value=\"coltinkifer.com contact!\" />\n    <input\n      name=\"_replyto\"\n      matInput\n      placeholder=\"Email...\"\n      required\n    />\n    <br>\n    <textarea\n      name=\"message\"\n      matNativeControl\n      id=\"message\"\n      placeholder=\"Message...\"\n      required\n    ></textarea>\n    <br>\n    <button type=\"submit\" mat-button color=\"primary\">\n      Send Message\n    </button>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEducationEducationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"Education\">\n  <h2 class=\"heading\">Education</h2>\n  <div *ngFor=\"let item of data | async\" class=\"education-content\">\n    <h3>{{ item.school }}</h3>\n    <span class=\"education-date\">\n      {{ item.startDate.seconds * 1000 | date:'MMMM y' }} - {{ item.endDate.seconds * 1000 | date:'MMMM y' }}\n    </span>\n    <h4>{{ item.degree }}</h4>\n    <p>{{ item.description }}</p>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExperienceExperienceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"Experience\" class=\"secondary-background\">\n    <mat-grid-list cols=\"1\" rowHeight=\"1:1\">\n        <h2 class=\"heading\">\n            Experience\n        </h2>\n        <div id=\"timeline\">\n           <div *ngFor=\"let item of data | async\" class=\"timeline-item\">\n            <div class=\"timeline-icon\">\n              <i class=\"fa fa-map-marker\"></i>\n            </div>\n            <div>\n              <span class=\"timeline-date\">\n                {{ item.startDate.seconds * 1000 | date:'MMMM y' }} - {{ item.endDate.seconds * 1000 | date:'MMMM y' }}\n              </span>\n              <div class=\"timeline-content\">\n                <h3>{{ item.employer }}</h3>\n                <h4>{{ item.title }}</h4>\n                <p>{{ item.description }}</p>\n              </div>\n            </div>\n           </div>\n        </div>\n    </mat-grid-list>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\n    <mat-grid-list cols=\"2\" rowHeight=\"6:1\">\n        <mat-grid-tile>Copyright &copy; {{ year }} Coltin Kifer</mat-grid-tile>\n        <mat-grid-tile class=\"social\">\n          <ul>\n            <li *ngFor=\"let item of icons | async\">\n              <a [href]=\"item.url\" target=\"_blank\">\n                <i [ngClass]=\"'fab ' + item.icon \"></i>\n              </a>\n            </li>\n          </ul>\n        </mat-grid-tile>\n    </mat-grid-list>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n    <mat-card id=\"navbar-card\" color=\"primary\">\n      <button (click)=\"scroll('#' + item.name)\" color=\"primary\" class=\"menu-button\" *ngFor=\"let item of items | async; index as i\" mat-button>{{item.name}}</button>\n    </mat-card>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"Projects\" class=\"main-div secondary-background\">\n  <h2 class=\"heading\">Projects</h2>\n      <mat-card class=\"project center\" *ngFor=\"let item of data | async\">\n        <div class=\"project-image\">\n          <img src=\"\" alt=\"\">\n        </div>\n        <div class=\"project-content\">\n            <h3 class=\"project-title\">{{ item.name }}</h3>\n            <p class=\"project-description\">\n              {{ item.description }}\n            </p>\n            <a href=\"{{ item.link }}\" class=\"project-link\" target=\"_blank\">\n              {{ item.link }}\n            </a>\n        </div>\n      </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSkillsSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"Skills\" class=\"\">\n  <mat-grid-list cols=\"1\" rowHeight=\"1:1\">\n      <h2 class=\"heading\">\n          Skills\n      </h2>\n      <ul>\n        <li *ngFor=\"let item of data | async\">{{item.skill}}</li>\n      </ul>\n  </mat-grid-list>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSplashSplashComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"splash\">\n  <div class=\"splash-content\">\n    <h1>Coltin Kifer</h1>\n    <h2>Software Developer</h2>\n    <a class=\"mat-raised-button mat-primary\" id=\"resume\" href=\"https://drive.google.com/file/d/1rwV-G0CitpfzOygqH4t3QYaHrDSMAr7R/view?usp=sharing\" target=\"_blank\">Open Resume</a>\n  </div>\n  <div class=\"splash-overlay\">\n  </div>\n  <div class=\"splash-down\" (click)=\"scroll()\">\n    <span>\n      <i id=\"down\" class=\"fa fa-chevron-down\"></i>\n    </span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.scss":
  /*!********************************************!*\
    !*** ./src/app/about/about.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".about {\n  padding: 75px 15px;\n  border-bottom: 1px solid #dcd9d9;\n}\n\n.about-me-text {\n  color: #74808a;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DS2lmZXIvZGV2L3BvcnRmb2xpby1uZXcvc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsU0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hYm91dCB7XG4gIHBhZGRpbmc6IDc1cHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2Q5ZDk7XG59XG5cbi5hYm91dC1tZS10ZXh0IHtcbiAgY29sb3I6ICM3NDgwOGE7XG4gIG1hcmdpbjogMDtcbn1cbiIsIi5hYm91dCB7XG4gIHBhZGRpbmc6IDc1cHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2Q5ZDk7XG59XG5cbi5hYm91dC1tZS10ZXh0IHtcbiAgY29sb3I6ICM3NDgwOGE7XG4gIG1hcmdpbjogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function srcAppAboutAboutComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var firestore_1 = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(db) {
        _classCallCheck(this, AboutComponent);

        this.about = db.collection('about').valueChanges();
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ctorParameters = function () {
      return [{
        type: firestore_1.AngularFirestore
      }];
    };

    AboutComponent = tslib_1.__decorate([core_1.Component({
      selector: 'ck-about',
      template: tslib_1.__importDefault(__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html"))["default"],
      styles: [tslib_1.__importDefault(__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/about/about.component.scss"))["default"]]
    }), tslib_1.__metadata("design:paramtypes", [firestore_1.AngularFirestore])], AboutComponent);
    exports.AboutComponent = AboutComponent;
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! no static exports found */

  /***/
  function srcAppAppComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Coltin Kifer';
    };

    AppComponent = tslib_1.__decorate([core_1.Component({
      selector: 'ck-root',
      template: tslib_1.__importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib_1.__importDefault(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    exports.AppComponent = AppComponent;
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function srcAppAppModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var platform_browser_1 = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var animations_1 = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var material_module_1 = __webpack_require__(
    /*! ../modules/material.module */
    "./src/modules/material.module.ts");

    var firebase_module_1 = __webpack_require__(
    /*! ../modules/firebase.module */
    "./src/modules/firebase.module.ts");

    var fire_1 = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");

    var environment_1 = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var angular_fontawesome_1 = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js"); // import { AppRoutingModule } from '../modules/app-routing.module';


    var app_component_1 = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var header_component_1 = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");

    var footer_component_1 = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var skills_component_1 = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");

    var splash_component_1 = __webpack_require__(
    /*! ./splash/splash.component */
    "./src/app/splash/splash.component.ts");

    var about_component_1 = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");

    var experience_component_1 = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");

    var education_component_1 = __webpack_require__(
    /*! ./education/education.component */
    "./src/app/education/education.component.ts");

    var projects_component_1 = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");

    var contact_component_1 = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib_1.__decorate([core_1.NgModule({
      declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, skills_component_1.SkillsComponent, splash_component_1.SplashComponent, about_component_1.AboutComponent, experience_component_1.ExperienceComponent, education_component_1.EducationComponent, projects_component_1.ProjectsComponent, contact_component_1.ContactComponent],
      imports: [platform_browser_1.BrowserModule, material_module_1.MaterialModule, fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase), firebase_module_1.FirebaseModule, angular_fontawesome_1.FontAwesomeModule, animations_1.BrowserAnimationsModule],
      providers: [],
      bootstrap: [app_component_1.AppComponent]
    })], AppModule);
    exports.AppModule = AppModule;
    /***/
  },

  /***/
  "./src/app/contact/contact.component.scss":
  /*!************************************************!*\
    !*** ./src/app/contact/contact.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#Contact {\n  padding: 50px 15px;\n  background: #3f51b5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  align-content: center;\n}\n#Contact h2 {\n  margin: 0 0 15px 0;\n  color: #fff;\n  font-weight: 500;\n  text-align: center;\n}\n#Contact form {\n  -webkit-box-flex: 0;\n          flex: 0 0 70%;\n  width: 33%;\n  resize: none;\n  -webkit-transition: 0.5s ease all;\n  transition: 0.5s ease all;\n  color: #374054;\n}\n#Contact input {\n  width: 100%;\n  margin-bottom: 10px;\n  background: #fff;\n  padding: 10px;\n  border-radius: 4px;\n}\n#Contact textarea {\n  width: 100%;\n  padding: 10px;\n  height: 150px;\n  resize: none;\n  border-radius: 4px;\n}\n#Contact button {\n  margin-top: 5px;\n  width: 104%;\n  background: #fff;\n  border-radius: 4px;\n  padding: 5px 10px;\n  border: none;\n  color: #3f51b5;\n  font-weight: 700;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-transition: 0.5s ease all;\n  transition: 0.5s ease all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DS2lmZXIvZGV2L3BvcnRmb2xpby1uZXcvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQ0tpZmVyL2Rldi9wb3J0Zm9saW8tbmV3L3NyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkNIUTtFRElSLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtBRURGO0FGVUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FFUko7QUZXRTtFQUNFLG1CQUFBO1VBQUEsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtFQUNBLGNBQUE7QUVUSjtBRllFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUVWSjtBRmFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FFWEo7QUZjRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNDdERNO0VEdUROLGdCQUFBO0VBQ0Esd0VBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FFWkoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5cbiNDb250YWN0IHtcbiAgcGFkZGluZzogNTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuXG4gIC8vIGlucHV0IHtcbiAgLy8gICBwYWRkaW5nOiAxMHB4O1xuICAvLyAgIGJvcmRlcjogbm9uZTtcbiAgLy8gICB0cmFuc2l0aW9uOiAuNXMgZWFzZSBhbGw7XG4gIC8vICAgd2lkdGg6IDc1JTtcbiAgLy8gfVxuXG4gIGgyIHtcbiAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBmb3JtIHtcbiAgICBmbGV4OiAwIDAgNzAlO1xuICAgIHdpZHRoOiAzMyU7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlIGFsbDtcbiAgICBjb2xvcjogIzM3NDA1NDtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB3aWR0aDogMTA0JTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlIGFsbDtcbiAgfVxufVxuIiwiXG4kcHJpbWFyeTogIzNmNTFiNTtcbiRwcmltYXJ5LWRhcms6ICM1OTZCQ0Y7XG4iLCIjQ29udGFjdCB7XG4gIHBhZGRpbmc6IDUwcHggMTVweDtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuI0NvbnRhY3QgaDIge1xuICBtYXJnaW46IDAgMCAxNXB4IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jQ29udGFjdCBmb3JtIHtcbiAgZmxleDogMCAwIDcwJTtcbiAgd2lkdGg6IDMzJTtcbiAgcmVzaXplOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UgYWxsO1xuICBjb2xvcjogIzM3NDA1NDtcbn1cbiNDb250YWN0IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbiNDb250YWN0IHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuI0NvbnRhY3QgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogMTA0JTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzNmNTFiNTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UgYWxsO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function srcAppContactContactComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib_1.__decorate([core_1.Component({
      selector: 'ck-contact',
      template: tslib_1.__importDefault(__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      styles: [tslib_1.__importDefault(__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/contact/contact.component.scss"))["default"]]
    }), tslib_1.__metadata("design:paramtypes", [])], ContactComponent);
    exports.ContactComponent = ContactComponent;
    /***/
  },

  /***/
  "./src/app/education/education.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/education/education.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEducationEducationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#Education {\n  padding: 50px 15px 20px 15px;\n  border-bottom: 1px solid #dcd9d9;\n  text-align: center;\n}\n#Education h2 {\n  color: #374054;\n  margin-bottom: 50px;\n}\n.education-content {\n  max-width: 700px;\n  margin: 0 auto 30px auto;\n  padding: 15px;\n  border: 1px solid #dcd9d9;\n  text-align: left;\n}\n.education-content h3 {\n  font-weight: 500;\n  float: left;\n  margin: 0;\n  color: #374054;\n}\n.education-content h4 {\n  color: #74808a;\n  clear: both;\n  font-weight: 500;\n  margin: 0 0 15px 0;\n}\n.education-content p {\n  margin: 0;\n  color: #74808a;\n  font-size: 0.9em;\n}\n.education-content .education-date {\n  color: #74808a;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DS2lmZXIvZGV2L3BvcnRmb2xpby1uZXcvc3JjL2FwcC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0VKO0FERUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURHRTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjRWR1Y2F0aW9uIHtcbiAgcGFkZGluZzogNTBweCAxNXB4IDIwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2Q5ZDk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDIge1xuICAgIGNvbG9yOiAjMzc0MDU0O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbn1cblxuLmVkdWNhdGlvbi1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMzBweCBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkOWQ5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzM3NDA1NDtcbiAgfVxuXG4gIGg0IHtcbiAgICBjb2xvcjogIzc0ODA4YTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzc0ODA4YTtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG5cbiAgLmVkdWNhdGlvbi1kYXRlIHtcbiAgICBjb2xvcjogIzc0ODA4YTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn1cblxuXG5cblxuIiwiI0VkdWNhdGlvbiB7XG4gIHBhZGRpbmc6IDUwcHggMTVweCAyMHB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkOWQ5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jRWR1Y2F0aW9uIGgyIHtcbiAgY29sb3I6ICMzNzQwNTQ7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5lZHVjYXRpb24tY29udGVudCB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDMwcHggYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZDlkOTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5lZHVjYXRpb24tY29udGVudCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMzc0MDU0O1xufVxuLmVkdWNhdGlvbi1jb250ZW50IGg0IHtcbiAgY29sb3I6ICM3NDgwOGE7XG4gIGNsZWFyOiBib3RoO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDAgMCAxNXB4IDA7XG59XG4uZWR1Y2F0aW9uLWNvbnRlbnQgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM3NDgwOGE7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG4uZWR1Y2F0aW9uLWNvbnRlbnQgLmVkdWNhdGlvbi1kYXRlIHtcbiAgY29sb3I6ICM3NDgwOGE7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/education/education.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/education/education.component.ts ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function srcAppEducationEducationComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var firestore_1 = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent(db) {
        _classCallCheck(this, EducationComponent);

        this.data = db.collection('education').valueChanges();
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EducationComponent;
    }();

    EducationComponent.ctorParameters = function () {
      return [{
        type: firestore_1.AngularFirestore
      }];
    };

    EducationComponent = tslib_1.__decorate([core_1.Component({
      selector: 'ck-education',
      template: tslib_1.__importDefault(__webpack_require__(
      /*! raw-loader!./education.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html"))["default"],
      styles: [tslib_1.__importDefault(__webpack_require__(
      /*! ./education.component.scss */
      "./src/app/education/education.component.scss"))["default"]]
    }), tslib_1.__metadata("design:paramtypes", [firestore_1.AngularFirestore])], EducationComponent);
    exports.EducationComponent = EducationComponent;
    /***/
  },

  /***/
  "./src/app/experience/experience.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/experience/experience.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExperienceExperienceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#Experience {\n  padding: 50px 15px;\n  text-align: center;\n  border-bottom: 1px solid #dcd9d9;\n}\n\n#timeline {\n  margin: 30px auto 0 auto;\n  position: relative;\n  max-width: 1000px;\n}\n\n#timeline:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  bottom: 0;\n  left: 303px;\n  right: auto;\n  height: 100%;\n  width: 3px;\n  background: #3f51b5;\n  z-index: 0;\n}\n\n#timeline:after {\n  position: absolute;\n  content: \"\";\n  width: 3px;\n  height: 40px;\n  background: #3f51b5;\n  background: -webkit-gradient(linear, left top, left bottom, from(#3f51b5), to(rgba(52, 152, 219, 0)));\n  background: linear-gradient(to bottom, #3f51b5, rgba(52, 152, 219, 0));\n  top: 100%;\n  left: 303px;\n}\n\n.timeline-item {\n  position: relative;\n  display: block;\n  margin-bottom: 30px;\n}\n\n.timeline-icon {\n  position: relative;\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  background: #3f51b5;\n  border-radius: 50%;\n  float: left;\n  z-index: 99;\n  margin-left: 280px;\n}\n\n.timeline-icon i {\n  display: block;\n  font-size: 2em;\n  margin-top: 10px;\n}\n\n.timeline-date {\n  width: 260px;\n  text-align: right;\n  position: absolute;\n  left: 0;\n  top: 10px;\n  font-weight: 300;\n  color: #374054;\n}\n\n.timeline-content {\n  margin-left: 350px;\n  background: #fff;\n  border: 1px solid #e6e6e6;\n  padding: 15px;\n  border-radius: 3px;\n  text-align: left;\n}\n\n.timeline-content h3 {\n  font-size: 1.5em;\n  font-weight: 300;\n  color: #374054;\n  display: inline-block;\n  margin: 0;\n}\n\n.timeline-content h4 {\n  font-size: 1.2em;\n  font-weight: 300;\n  color: #7e8890;\n  margin: 0 0 15px 0;\n}\n\n.timeline-content p {\n  color: #74808a;\n  font-size: 0.9em;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DS2lmZXIvZGV2L3BvcnRmb2xpby1uZXcvc3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9DS2lmZXIvZGV2L3BvcnRmb2xpby1uZXcvc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FDREY7O0FESUE7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRXRCUTtFRnVCUixVQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CRS9CUTtFRmdDUixxR0FBQTtFQUFBLHNFQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CRWhEUTtFRmlEUixrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURFRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FERUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG4jRXhwZXJpZW5jZSB7XG4gIHBhZGRpbmc6IDUwcHggMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZDlkOTtcbn1cblxuI3RpbWVsaW5lIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xufVxuXG4jdGltZWxpbmU6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDMwM3B4O1xuICByaWdodDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgei1pbmRleDogMDtcbn1cblxuI3RpbWVsaW5lOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHByaW1hcnksIHJnYmEoNTIsMTUyLDIxOSwwKSk7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMzAzcHg7XG59XG5cbi50aW1lbGluZS1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRpbWVsaW5lLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgei1pbmRleDogOTk7XG4gIG1hcmdpbi1sZWZ0OiAyODBweDtcbiAgaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG4udGltZWxpbmUtZGF0ZSB7XG4gIHdpZHRoOiAyNjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzM3NDA1NDtcbn1cblxuLnRpbWVsaW5lLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMzUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzM3NDA1NDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGg0IHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICM3ZTg4OTA7XG4gICAgbWFyZ2luOiAwIDAgMTVweCAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAjNzQ4MDhhO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iLCIjRXhwZXJpZW5jZSB7XG4gIHBhZGRpbmc6IDUwcHggMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZDlkOTtcbn1cblxuI3RpbWVsaW5lIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xufVxuXG4jdGltZWxpbmU6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMzAzcHg7XG4gIHJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gIHotaW5kZXg6IDA7XG59XG5cbiN0aW1lbGluZTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjM2Y1MWI1LCByZ2JhKDUyLCAxNTIsIDIxOSwgMCkpO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDMwM3B4O1xufVxuXG4udGltZWxpbmUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50aW1lbGluZS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgei1pbmRleDogOTk7XG4gIG1hcmdpbi1sZWZ0OiAyODBweDtcbn1cbi50aW1lbGluZS1pY29uIGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aW1lbGluZS1kYXRlIHtcbiAgd2lkdGg6IDI2MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMzc0MDU0O1xufVxuXG4udGltZWxpbmUtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAzNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRpbWVsaW5lLWNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzM3NDA1NDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG59XG4udGltZWxpbmUtY29udGVudCBoNCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjN2U4ODkwO1xuICBtYXJnaW46IDAgMCAxNXB4IDA7XG59XG4udGltZWxpbmUtY29udGVudCBwIHtcbiAgY29sb3I6ICM3NDgwOGE7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG1hcmdpbjogMDtcbn0iLCJcbiRwcmltYXJ5OiAjM2Y1MWI1O1xuJHByaW1hcnktZGFyazogIzU5NkJDRjtcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/experience/experience.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/experience/experience.component.ts ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function srcAppExperienceExperienceComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var firestore_1 = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent(db) {
        _classCallCheck(this, ExperienceComponent);

        this.data = db.collection('experience').valueChanges();
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent.ctorParameters = function () {
      return [{
        type: firestore_1.AngularFirestore
      }];
    };

    ExperienceComponent = tslib_1.__decorate([core_1.Component({
      selector: 'ck-experience',
      template: tslib_1.__importDefault(__webpack_require__(
      /*! raw-loader!./experience.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html"))["default"],
      styles: [tslib_1.__importDefault(__webpack_require__(
      /*! ./experience.component.scss */
      "./src/app/experience/experience.component.scss"))["default"]]
    }), tslib_1.__metadata("design:paramtypes", [firestore_1.AngularFirestore])], ExperienceComponent);
    exports.ExperienceComponent = ExperienceComponent;
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\n  padding: 30px 0;\n}\nfooter ul {\n  text-decoration: none;\n  display: block;\n  list-style: none;\n  margin: 5px 0 0 0;\n}\nfooter ul li {\n  float: left;\n  padding: 20px;\n}\nfooter ul li a {\n  text-decoration: none;\n  color: grey;\n}\nfooter ul li a :hover {\n  color: #3f51b5;\n}\nfooter ul li a i {\n  font-size: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DS2lmZXIvZGV2L3BvcnRmb2xpby1uZXcvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0NLaWZlci9kZXYvcG9ydGZvbGlvLW5ldy9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0FDRkY7QURJRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREdJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNETjtBREVNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDQVI7QURDUTtFQUNFLGNFakJBO0FEa0JWO0FEQ1E7RUFDRSxjQUFBO0FDQ1YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IFwifnZhcmlhYmxlcy5zY3NzXCI7XG5cbmZvb3RlciB7XG4gIHBhZGRpbmc6IDMwcHggMDtcblxuICB1bCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XG4gICAgbGkge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgYSB7IFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICA6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgfVxuICAgICAgICBpIHtcbiAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgfVxuICAgICAgIH1cbiAgICAgfVxuICB9XG59IiwiZm9vdGVyIHtcbiAgcGFkZGluZzogMzBweCAwO1xufVxuZm9vdGVyIHVsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiA1cHggMCAwIDA7XG59XG5mb290ZXIgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMjBweDtcbn1cbmZvb3RlciB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogZ3JleTtcbn1cbmZvb3RlciB1bCBsaSBhIDpob3ZlciB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuZm9vdGVyIHVsIGxpIGEgaSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufSIsIlxuJHByaW1hcnk6ICMzZjUxYjU7XG4kcHJpbWFyeS1kYXJrOiAjNTk2QkNGO1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function srcAppFooterFooterComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var firestore_1 = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(db) {
        _classCallCheck(this, FooterComponent);

        this.year = new Date().getFullYear();
        this.icons = db.collection('socialIcons').valueChanges();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: firestore_1.AngularFirestore
      }];
    };

    FooterComponent = tslib_1.__decorate([core_1.Component({
      selector: 'ck-footer',
      template: tslib_1.__importDefault(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib_1.__importDefault(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss"))["default"]]
    }), tslib_1.__metadata("design:paramtypes", [firestore_1.AngularFirestore])], FooterComponent);
    exports.FooterComponent = FooterComponent;
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 10;\n  -webkit-animation-name: dropHeader;\n          animation-name: dropHeader;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-duration: 0.75s;\n          animation-duration: 0.75s;\n}\n\n#navbar-card {\n  top: 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  text-align: center;\n  margin: auto;\n  border-radius: 0 0 4px 4px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.menu-button {\n  padding: 0 15px 0 15px;\n  font-size: 16px;\n}\n\nheader {\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DS2lmZXIvZGV2L3BvcnRmb2xpby1uZXcvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxNQUFBO0VBQ0Esd0VBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTA7XG4gIGFuaW1hdGlvbi1uYW1lOiBkcm9wSGVhZGVyO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNzVzO1xufVxuXG4jbmF2YmFyLWNhcmQge1xuICB0b3A6IDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5tZW51LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaGVhZGVyIHtcbiAgei1pbmRleDogOTk5O1xufVxuIiwiaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwO1xuICBhbmltYXRpb24tbmFtZTogZHJvcEhlYWRlcjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1cztcbn1cblxuI25hdmJhci1jYXJkIHtcbiAgdG9wOiAwO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4ubWVudS1idXR0b24ge1xuICBwYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmhlYWRlciB7XG4gIHotaW5kZXg6IDk5OTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function srcAppHeaderHeaderComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var firestore_1 = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(db) {
        _classCallCheck(this, HeaderComponent);

        this.items = db.collection('headerItems', function (ref) {
          return ref.orderBy('index');
        }).valueChanges();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scroll",
        value: function scroll(el) {
          document.querySelector(el).scrollIntoView({
            behavior: 'smooth'
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: firestore_1.AngularFirestore
      }];
    };

    HeaderComponent = tslib_1.__decorate([core_1.Component({
      selector: 'ck-header',
      template: tslib_1.__importDefault(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib_1.__importDefault(__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss"))["default"]]
    }), tslib_1.__metadata("design:paramtypes", [firestore_1.AngularFirestore])], HeaderComponent);
    exports.HeaderComponent = HeaderComponent;
    /***/
  },

  /***/
  "./src/app/projects/projects.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/projects/projects.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#Projects {\n  padding: 50px 15px;\n  border-bottom: 1px solid #dcd9d9;\n  text-align: center;\n}\n#Projects h2 {\n  color: #374054;\n  margin-bottom: 50px;\n}\n#Projects h3 {\n  font-size: 1.5em;\n  font-weight: 300;\n  color: #374054;\n  margin: 0 0 15px 0;\n}\n#Projects p {\n  color: #74808a;\n  margin: 0 0 15px 0;\n  font-size: 0.9em;\n}\n#Projects .project-link {\n  color: #3f51b5;\n  text-decoration: none;\n}\n#Projects .project {\n  text-align: center;\n  width: 33%;\n  margin: 0 auto 30px auto;\n}\n#Projects .center {\n  width: 40%;\n  margin: 10px auto;\n}\n#Projects .main-div {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DS2lmZXIvZGV2L3BvcnRmb2xpby1uZXcvc3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQ0tpZmVyL2Rldi9wb3J0Zm9saW8tbmV3L3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0RGO0FER0U7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hKO0FETUU7RUFDRSxjRXpCTTtFRjBCTixxQkFBQTtBQ0pKO0FET0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQ0xKO0FEUUU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNOSjtBRFNFO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG4jUHJvamVjdHMge1xuICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkOWQ5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDIge1xuICAgIGNvbG9yOiAjMzc0MDU0O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjMzc0MDU0O1xuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjNzQ4MDhhO1xuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG5cbiAgLnByb2plY3QtbGluayB7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5wcm9qZWN0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XG4gIH1cblxuICAuY2VudGVye1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cblxuICAubWFpbi1kaXYge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4iLCIjUHJvamVjdHMge1xuICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkOWQ5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jUHJvamVjdHMgaDIge1xuICBjb2xvcjogIzM3NDA1NDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbiNQcm9qZWN0cyBoMyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMzc0MDU0O1xuICBtYXJnaW46IDAgMCAxNXB4IDA7XG59XG4jUHJvamVjdHMgcCB7XG4gIGNvbG9yOiAjNzQ4MDhhO1xuICBtYXJnaW46IDAgMCAxNXB4IDA7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG4jUHJvamVjdHMgLnByb2plY3QtbGluayB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jUHJvamVjdHMgLnByb2plY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMyU7XG4gIG1hcmdpbjogMCBhdXRvIDMwcHggYXV0bztcbn1cbiNQcm9qZWN0cyAuY2VudGVyIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG4jUHJvamVjdHMgLm1haW4tZGl2IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiXG4kcHJpbWFyeTogIzNmNTFiNTtcbiRwcmltYXJ5LWRhcms6ICM1OTZCQ0Y7XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function srcAppProjectsProjectsComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var firestore_1 = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(db) {
        _classCallCheck(this, ProjectsComponent);

        this.data = db.collection('projects').valueChanges();
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: firestore_1.AngularFirestore
      }];
    };

    ProjectsComponent = tslib_1.__decorate([core_1.Component({
      selector: 'ck-projects',
      template: tslib_1.__importDefault(__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html"))["default"],
      styles: [tslib_1.__importDefault(__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/projects/projects.component.scss"))["default"]]
    }), tslib_1.__metadata("design:paramtypes", [firestore_1.AngularFirestore])], ProjectsComponent);
    exports.ProjectsComponent = ProjectsComponent;
    /***/
  },

  /***/
  "./src/app/skills/skills.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/skills/skills.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSkillsSkillsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#Skills {\n  padding: 50px 15px;\n  text-align: center;\n}\n#Skills h2 {\n  color: #374054;\n  margin-bottom: 50px;\n}\n#Skills ul {\n  display: block;\n  margin: 0 auto;\n  padding: 0;\n  max-width: 800px;\n}\n#Skills li {\n  display: inline-block;\n  margin: 7px;\n  padding: 5px 10px;\n  color: #374054;\n  background: #e4e4ea;\n  list-style: none;\n  cursor: default;\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DS2lmZXIvZGV2L3BvcnRmb2xpby1uZXcvc3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0RGO0FER0U7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREtFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4jU2tpbGxzIHtcbiAgcGFkZGluZzogNTBweCAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDIge1xuICAgIGNvbG9yOiAjMzc0MDU0O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cblxuICB1bCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICB9XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDdweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBjb2xvcjogIzM3NDA1NDtcbiAgICBiYWNrZ3JvdW5kOiAjZTRlNGVhO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cbiIsIiNTa2lsbHMge1xuICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNTa2lsbHMgaDIge1xuICBjb2xvcjogIzM3NDA1NDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbiNTa2lsbHMgdWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIG1heC13aWR0aDogODAwcHg7XG59XG4jU2tpbGxzIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDdweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGNvbG9yOiAjMzc0MDU0O1xuICBiYWNrZ3JvdW5kOiAjZTRlNGVhO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function srcAppSkillsSkillsComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var firestore_1 = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent(db) {
        _classCallCheck(this, SkillsComponent);

        this.data = db.collection('skills').valueChanges();
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ctorParameters = function () {
      return [{
        type: firestore_1.AngularFirestore
      }];
    };

    SkillsComponent = tslib_1.__decorate([core_1.Component({
      selector: 'ck-skills',
      template: tslib_1.__importDefault(__webpack_require__(
      /*! raw-loader!./skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html"))["default"],
      styles: [tslib_1.__importDefault(__webpack_require__(
      /*! ./skills.component.scss */
      "./src/app/skills/skills.component.scss"))["default"]]
    }), tslib_1.__metadata("design:paramtypes", [firestore_1.AngularFirestore])], SkillsComponent);
    exports.SkillsComponent = SkillsComponent;
    /***/
  },

  /***/
  "./src/app/splash/splash.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/splash/splash.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSplashSplashComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".splash {\n  position: relative;\n  height: 100vh;\n  min-height: 500px;\n  max-height: 1080px;\n  background: url(/assets/codePic.jpg);\n  background-size: cover;\n  overflow: hidden;\n}\n\n.splash-overlay {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(63, 81, 181, 0.8);\n  z-index: 1;\n}\n\n.splash-content {\n  position: absolute;\n  z-index: 10;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.splash-down {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  text-align: center;\n  z-index: 10;\n  bottom: 15px;\n  color: #fff;\n}\n\n.splash-down span {\n  font-family: FontAwesome;\n  cursor: pointer;\n  display: block;\n  margin: 0 auto;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 3px solid #a0cfee;\n  text-align: center;\n}\n\n.splash-down #down {\n  -webkit-animation: pulsate 1.5s ease;\n          animation: pulsate 1.5s ease;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  padding-top: 9px;\n}\n\n.splash-content h1 {\n  color: #fff;\n  font-weight: 900;\n  font-size: 5em;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  line-height: 0.9em;\n}\n\n.splash-content h2 {\n  color: #a0cfee;\n  font-weight: 500;\n  font-size: 2.25em;\n  margin-bottom: 15px;\n}\n\n#splash-content h2 {\n  color: #fff;\n  font-weight: 900;\n  font-size: 5em;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  line-height: 0.9em;\n}\n\n#resume {\n  padding: 10px 20px;\n  background-color: white;\n  color: #3f51b5;\n  border-radius: 4px;\n  display: inline-block;\n  -webkit-transition: 0.5s ease all;\n  transition: 0.5s ease all;\n  border: 3px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DS2lmZXIvZGV2L3BvcnRmb2xpby1uZXcvc3JjL2FwcC9zcGxhc2gvc3BsYXNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcGxhc2gvc3BsYXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDREY7O0FER0U7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUU7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLGdCQUFBO0FDRko7O0FET0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0VBQ0Esc0JBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL3NwbGFzaC9zcGxhc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zcGxhc2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwODBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9jb2RlUGljLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zcGxhc2gtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjgpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc3BsYXNoLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BsYXNoLWRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcblxuICBzcGFuIHtcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2EwY2ZlZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAjZG93biB7XG4gICAgYW5pbWF0aW9uOiBwdWxzYXRlIDEuNXMgZWFzZTtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBwYWRkaW5nLXRvcDogOXB4O1xuICB9XG59XG5cbi5zcGxhc2gtY29udGVudCB7XG4gIGgxIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICBsaW5lLWhlaWdodDogMC45ZW07XG4gIH1cblxuICBoMiB7XG4gICAgY29sb3I6ICNhMGNmZWU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIuMjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5cbiNzcGxhc2gtY29udGVudCBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgbGluZS1oZWlnaHQ6IDAuOWVtO1xufVxuXG4jcmVzdW1lIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICByZ2IoNjMsIDgxLCAxODEpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2UgYWxsO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xufVxuIiwiLnNwbGFzaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIG1heC1oZWlnaHQ6IDEwODBweDtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvY29kZVBpYy5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3BsYXNoLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgODEsIDE4MSwgMC44KTtcbiAgei1pbmRleDogMTtcbn1cblxuLnNwbGFzaC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwbGFzaC1kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc3BsYXNoLWRvd24gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgI2EwY2ZlZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNwbGFzaC1kb3duICNkb3duIHtcbiAgYW5pbWF0aW9uOiBwdWxzYXRlIDEuNXMgZWFzZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG59XG5cbi5zcGxhc2gtY29udGVudCBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgbGluZS1oZWlnaHQ6IDAuOWVtO1xufVxuLnNwbGFzaC1jb250ZW50IGgyIHtcbiAgY29sb3I6ICNhMGNmZWU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMi4yNWVtO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4jc3BsYXNoLWNvbnRlbnQgaDIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiA1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGxpbmUtaGVpZ2h0OiAwLjllbTtcbn1cblxuI3Jlc3VtZSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjM2Y1MWI1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlIGFsbDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/splash/splash.component.ts":
  /*!********************************************!*\
    !*** ./src/app/splash/splash.component.ts ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function srcAppSplashSplashComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var free_solid_svg_icons_1 = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var SplashComponent = /*#__PURE__*/function () {
      function SplashComponent() {
        _classCallCheck(this, SplashComponent);

        this.faChevronDown = free_solid_svg_icons_1.faChevronDown;
      }

      _createClass(SplashComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scroll",
        value: function scroll() {
          document.querySelector('#About').scrollIntoView({
            behavior: 'smooth'
          });
        }
      }]);

      return SplashComponent;
    }();

    SplashComponent = tslib_1.__decorate([core_1.Component({
      selector: 'ck-splash',
      template: tslib_1.__importDefault(__webpack_require__(
      /*! raw-loader!./splash.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.component.html"))["default"],
      styles: [tslib_1.__importDefault(__webpack_require__(
      /*! ./splash.component.scss */
      "./src/app/splash/splash.component.scss"))["default"]]
    }), tslib_1.__metadata("design:paramtypes", [])], SplashComponent);
    exports.SplashComponent = SplashComponent;
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function srcEnvironmentsEnvironmentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    exports.environment = {
      production: true,
      firebase: {
        apiKey: 'AIzaSyBpMevITac5W9m1zEuNcBjlxwOHx9PS5DQ',
        authDomain: 'portfolio-a8df4.firebaseapp.com',
        databaseURL: 'https://portfolio-a8df4.firebaseio.com',
        projectId: 'portfolio-a8df4',
        storageBucket: 'portfolio-a8df4.appspot.com',
        messagingSenderId: '924371232404',
        appId: '1:924371232404:web:ff5d898070c2426d'
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no static exports found */

  /***/
  function srcMainTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var platform_browser_dynamic_1 = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");

    var app_module_1 = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");

    var environment_1 = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");

    if (environment_1.environment.production) {
      core_1.enableProdMode();
    }

    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/modules/firebase.module.ts":
  /*!****************************************!*\
    !*** ./src/modules/firebase.module.ts ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function srcModulesFirebaseModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var firestore_1 = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /**
     * NgModule that includes all Material modules.
     */


    var FirebaseModule = function FirebaseModule() {
      _classCallCheck(this, FirebaseModule);
    };

    FirebaseModule = tslib_1.__decorate([core_1.NgModule({
      exports: [firestore_1.AngularFirestoreModule]
    })], FirebaseModule);
    exports.FirebaseModule = FirebaseModule;
    /***/
  },

  /***/
  "./src/modules/material.module.ts":
  /*!****************************************!*\
    !*** ./src/modules/material.module.ts ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function srcModulesMaterialModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var autocomplete_1 = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");

    var badge_1 = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");

    var bottom_sheet_1 = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");

    var button_1 = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");

    var button_toggle_1 = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");

    var card_1 = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");

    var checkbox_1 = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");

    var chips_1 = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");

    var core_2 = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");

    var datepicker_1 = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");

    var dialog_1 = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var divider_1 = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");

    var expansion_1 = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");

    var form_field_1 = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");

    var grid_list_1 = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");

    var icon_1 = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");

    var input_1 = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");

    var list_1 = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");

    var menu_1 = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");

    var paginator_1 = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");

    var progress_bar_1 = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");

    var progress_spinner_1 = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");

    var radio_1 = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");

    var select_1 = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");

    var sidenav_1 = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");

    var slide_toggle_1 = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");

    var slider_1 = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");

    var snack_bar_1 = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var sort_1 = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");

    var stepper_1 = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");

    var table_1 = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");

    var tabs_1 = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");

    var toolbar_1 = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");

    var tooltip_1 = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");

    var tree_1 = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");

    var a11y_1 = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");

    var bidi_1 = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");

    var observers_1 = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");

    var overlay_1 = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");

    var platform_1 = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");

    var portal_1 = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");

    var stepper_2 = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");

    var table_2 = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");

    var tree_2 = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");

    var drag_drop_1 = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /**
     * NgModule that includes all Material modules.
     */


    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib_1.__decorate([core_1.NgModule({
      exports: [// CDK
      a11y_1.A11yModule, bidi_1.BidiModule, observers_1.ObserversModule, overlay_1.OverlayModule, platform_1.PlatformModule, portal_1.PortalModule, stepper_2.CdkStepperModule, table_2.CdkTableModule, tree_2.CdkTreeModule, drag_drop_1.DragDropModule, // Material
      autocomplete_1.MatAutocompleteModule, badge_1.MatBadgeModule, bottom_sheet_1.MatBottomSheetModule, button_1.MatButtonModule, button_toggle_1.MatButtonToggleModule, card_1.MatCardModule, checkbox_1.MatCheckboxModule, chips_1.MatChipsModule, datepicker_1.MatDatepickerModule, dialog_1.MatDialogModule, divider_1.MatDividerModule, expansion_1.MatExpansionModule, form_field_1.MatFormFieldModule, grid_list_1.MatGridListModule, icon_1.MatIconModule, input_1.MatInputModule, list_1.MatListModule, menu_1.MatMenuModule, core_2.MatNativeDateModule, paginator_1.MatPaginatorModule, progress_bar_1.MatProgressBarModule, progress_spinner_1.MatProgressSpinnerModule, radio_1.MatRadioModule, core_2.MatRippleModule, select_1.MatSelectModule, sidenav_1.MatSidenavModule, slider_1.MatSliderModule, slide_toggle_1.MatSlideToggleModule, snack_bar_1.MatSnackBarModule, sort_1.MatSortModule, stepper_1.MatStepperModule, table_1.MatTableModule, tabs_1.MatTabsModule, toolbar_1.MatToolbarModule, tooltip_1.MatTooltipModule, tree_1.MatTreeModule]
    })], MaterialModule);
    exports.MaterialModule = MaterialModule;
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/CKifer/dev/portfolio-new/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map