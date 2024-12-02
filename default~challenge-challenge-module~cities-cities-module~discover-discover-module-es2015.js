(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~challenge-challenge-module~cities-cities-module~discover-discover-module"],{

/***/ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js ***!
  \************************************************************************/
/*! exports provided: CarouselComponent, CarouselModule, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective, SlideModel, SlidesOutputData, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselSlideDirective", function() { return CarouselSlideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlRouterLinkDirective", function() { return OwlRouterLinkDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlRouterLinkWithHrefDirective", function() { return OwlRouterLinkWithHrefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideModel", function() { return SlideModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesOutputData", function() { return SlidesOutputData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NavigationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CarouselService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return OwlLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return AutoplayService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return windowFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return browserWindowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return windowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return WINDOW_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return BrowserDocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return documentFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return browserDocumentProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return documentProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return DOCUMENT_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return LazyLoadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return AnimateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return AutoHeightService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return HashService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return ResizeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return StageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");








class ResizeService {
    constructor(eventManager) {
        this.eventManager = eventManager;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
        this.eventManager.addGlobalEventListener('window', 'onload', this.onLoaded.bind(this));
    }
    /**
     * Makes resizeSubject become Observable
     * @returns Observable of resizeSubject
     */
    get onResize$() {
        return this.resizeSubject.asObservable();
    }
    /**
     * Handler of 'resize' event. Passes data throw resizeSubject
     * @param event Event Object of 'resize' event
     */
    onResize(event) {
        this.resizeSubject.next(event.target);
    }
    /**
     * Handler of 'onload' event. Defines the width of window
     * @param event Event Object of 'onload' event
     */
    onLoaded(event) {
        this.windowWidth = event.target;
    }
}
ResizeService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
ResizeService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["EventManager"] }
];

/**
 * Defaults value of options
 */
class OwlCarouselOConfig {
    constructor() {
        this.items = 3;
        this.skip_validateItems = false;
        this.loop = false;
        this.center = false;
        this.rewind = false;
        this.mouseDrag = true;
        this.touchDrag = true;
        this.pullDrag = true;
        this.freeDrag = false;
        this.margin = 0;
        this.stagePadding = 0;
        this.merge = false;
        this.mergeFit = true;
        this.autoWidth = false;
        this.startPosition = 0;
        this.rtl = false;
        this.smartSpeed = 250;
        this.fluidSpeed = false;
        this.dragEndSpeed = false;
        this.responsive = {};
        this.responsiveRefreshRate = 200;
        // defaults to Navigation
        this.nav = false;
        this.navText = ['prev', 'next'];
        this.navSpeed = false;
        this.slideBy = 1; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
        this.dots = true;
        this.dotsEach = false;
        this.dotsData = false;
        this.dotsSpeed = false;
        // defaults to Autoplay
        this.autoplay = false;
        this.autoplayTimeout = 5000;
        this.autoplayHoverPause = false;
        this.autoplaySpeed = false;
        this.autoplayMouseleaveTimeout = 1;
        // defaults to LazyLoading
        this.lazyLoad = false;
        this.lazyLoadEager = 0;
        // defaults to Animate
        this.slideTransition = '';
        this.animateOut = false;
        this.animateIn = false;
        // defaults to AutoHeight
        this.autoHeight = false;
        // defaults to Hash
        this.URLhashListener = false;
    }
}
/**
 * we can't read types from OwlOptions in javascript because of props have undefined value and types of those props are used for validating inputs
 * class below is copy of OwlOptions but its all props have string value showing certain type;
 * this is class is being used just in method _validateOptions() of CarouselService;
 */
class OwlOptionsMockedTypes {
    constructor() {
        this.items = 'number';
        this.skip_validateItems = 'boolean';
        this.loop = 'boolean';
        this.center = 'boolean';
        this.rewind = 'boolean';
        this.mouseDrag = 'boolean';
        this.touchDrag = 'boolean';
        this.pullDrag = 'boolean';
        this.freeDrag = 'boolean';
        this.margin = 'number';
        this.stagePadding = 'number';
        this.merge = 'boolean';
        this.mergeFit = 'boolean';
        this.autoWidth = 'boolean';
        this.startPosition = 'number|string';
        this.rtl = 'boolean';
        this.smartSpeed = 'number';
        this.fluidSpeed = 'boolean';
        this.dragEndSpeed = 'number|boolean';
        this.responsive = {};
        this.responsiveRefreshRate = 'number';
        // defaults to Navigation
        this.nav = 'boolean';
        this.navText = 'string[]';
        this.navSpeed = 'number|boolean';
        this.slideBy = 'number|string'; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
        this.dots = 'boolean';
        this.dotsEach = 'number|boolean';
        this.dotsData = 'boolean';
        this.dotsSpeed = 'number|boolean';
        // defaults to Autoplay
        this.autoplay = 'boolean';
        this.autoplayTimeout = 'number';
        this.autoplayHoverPause = 'boolean';
        this.autoplaySpeed = 'number|boolean';
        this.autoplayMouseleaveTimeout = 'number';
        // defaults to LazyLoading
        this.lazyLoad = 'boolean';
        this.lazyLoadEager = 'number';
        // defaults to Animate
        this.slideTransition = 'string';
        this.animateOut = 'string|boolean';
        this.animateIn = 'string|boolean';
        // defaults to AutoHeight
        this.autoHeight = 'boolean';
        // defaults to Hash
        this.URLhashListener = "boolean";
    }
}

class OwlLogger {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    log(value, ...rest) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            console.log(value, ...rest);
        }
    }
    error(error) {
        this.errorHandler.handleError(error);
    }
    warn(value, ...rest) {
        console.warn(value, ...rest);
    }
}
OwlLogger.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
OwlLogger.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"] }
];

/**
 * Current state information and their tags.
 */
class States {
}
/**
 * Enumeration for types.
 * @enum {String}
 */
var Type;
(function (Type) {
    Type["Event"] = "event";
    Type["State"] = "state";
})(Type || (Type = {}));
;
/**
 * Enumeration for width.
 * @enum {String}
 */
var Width;
(function (Width) {
    Width["Default"] = "default";
    Width["Inner"] = "inner";
    Width["Outer"] = "outer";
})(Width || (Width = {}));
;
/**
 * Model for coords of .owl-stage
 */
class Coords {
}
/**
 * Model for all current data of carousel
 */
class CarouselCurrentData {
}
class CarouselService {
    constructor(logger) {
        this.logger = logger;
        /**
       * Subject for passing data needed for managing View
       */
        this._viewSettingsShipper$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
       * Subject for notification when the carousel got initializes
       */
        this._initializedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
       * Subject for notification when the carousel's settings start changinf
       */
        this._changeSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
       * Subject for notification when the carousel's settings have changed
       */
        this._changedSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
       * Subject for notification when the carousel starts translating or moving
       */
        this._translateCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
       * Subject for notification when the carousel stopped translating or moving
       */
        this._translatedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
       * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
       */
        this._resizeCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
       * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
       */
        this._resizedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
       * Subject for notification when the refresh of carousel starts
       */
        this._refreshCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
       * Subject for notification when the refresh of carousel is ended
       */
        this._refreshedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
       * Subject for notification when the dragging of carousel starts
       */
        this._dragCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
       * Subject for notification when the dragging of carousel is ended
       */
        this._draggedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Current settings for the carousel.
         */
        this.settings = {
            items: 0
        };
        /**
       * Initial data for setting classes to element .owl-carousel
       */
        this.owlDOMData = {
            rtl: false,
            isResponsive: false,
            isRefreshed: false,
            isLoaded: false,
            isLoading: false,
            isMouseDragable: false,
            isGrab: false,
            isTouchDragable: false
        };
        /**
       * Initial data of .owl-stage
       */
        this.stageData = {
            transform: 'translate3d(0px,0px,0px)',
            transition: '0s',
            width: 0,
            paddingL: 0,
            paddingR: 0
        };
        /**
         * All real items.
         */
        this._items = []; // is equal to this.slides
        /**
       * Array with width of every slide.
       */
        this._widths = [];
        /**
       * Currently suppressed events to prevent them from beeing retriggered.
       */
        this._supress = {};
        /**
         * References to the running plugins of this carousel.
         */
        this._plugins = {};
        /**
       * Absolute current position.
       */
        this._current = null;
        /**
       * All cloned items.
       */
        this._clones = [];
        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         */
        this._mergers = [];
        /**
       * Animation speed in milliseconds.
       */
        this._speed = null;
        /**
       * Coordinates of all items in pixel.
       * @todo The name of this member is missleading.
       */
        this._coordinates = [];
        /**
       * Current breakpoint.
       * @todo Real media queries would be nice.
       */
        this._breakpoint = null;
        /**
         * Prefix for id of cloned slides
         */
        this.clonedIdPrefix = 'cloned-';
        /**
         * Current options set by the caller including defaults.
         */
        this._options = {};
        /**
         * Invalidated parts within the update process.
         */
        this._invalidated = {};
        /**
         * Current state information and their tags.
         */
        this._states = {
            current: {},
            tags: {
                initializing: ['busy'],
                animating: ['busy'],
                dragging: ['interacting']
            }
        };
        /**
         * Ordered list of workers for the update process.
       */
        this._pipe = [
            // {
            //   filter: ['width', 'settings'],
            //   run: () => {
            //     this._width = this.carouselWindowWidth;
            //   }
            // },
            {
                filter: ['width', 'items', 'settings'],
                run: cache => {
                    cache.current = this._items && this._items[this.relative(this._current)].id;
                }
            },
            // {
            //   filter: ['items', 'settings'],
            //   run: function() {
            //     // this.$stage.children('.cloned').remove();
            //   }
            // },
            {
                filter: ['width', 'items', 'settings'],
                run: (cache) => {
                    const margin = this.settings.margin || '', grid = !this.settings.autoWidth, rtl = this.settings.rtl, css = {
                        'margin-left': rtl ? margin : '',
                        'margin-right': rtl ? '' : margin
                    };
                    if (!grid) {
                        this.slidesData.forEach(slide => {
                            slide.marginL = css['margin-left'];
                            slide.marginR = css['margin-right'];
                        });
                    }
                    cache.css = css;
                }
            },
            {
                filter: ['width', 'items', 'settings'],
                run: (cache) => {
                    const width = +(this.width() / this.settings.items).toFixed(3) - this.settings.margin, grid = !this.settings.autoWidth, widths = [];
                    let merge = null, iterator = this._items.length;
                    cache.items = {
                        merge: false,
                        width: width
                    };
                    while (iterator--) {
                        merge = this._mergers[iterator];
                        merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
                        cache.items.merge = merge > 1 || cache.items.merge;
                        widths[iterator] = !grid ? this._items[iterator].width ? this._items[iterator].width : width : width * merge;
                    }
                    this._widths = widths;
                    this.slidesData.forEach((slide, i) => {
                        slide.width = this._widths[i];
                        slide.marginR = cache.css['margin-right'];
                        slide.marginL = cache.css['margin-left'];
                    });
                }
            }, {
                filter: ['items', 'settings'],
                run: () => {
                    const clones = [], items = this._items, settings = this.settings, 
                    // TODO: Should be computed from number of min width items in stage
                    view = Math.max(settings.items * 2, 4), size = Math.ceil(items.length / 2) * 2;
                    let append = [], prepend = [], repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
                    repeat /= 2;
                    while (repeat--) {
                        // Switch to only using appended clones
                        clones.push(this.normalize(clones.length / 2, true));
                        append.push(Object.assign({}, this.slidesData[clones[clones.length - 1]]));
                        clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                        prepend.unshift(Object.assign({}, this.slidesData[clones[clones.length - 1]]));
                    }
                    this._clones = clones;
                    append = append.map(slide => {
                        slide.id = `${this.clonedIdPrefix}${slide.id}`;
                        slide.isActive = false;
                        slide.isCloned = true;
                        return slide;
                    });
                    prepend = prepend.map(slide => {
                        slide.id = `${this.clonedIdPrefix}${slide.id}`;
                        slide.isActive = false;
                        slide.isCloned = true;
                        return slide;
                    });
                    this.slidesData = prepend.concat(this.slidesData).concat(append);
                }
            },
            {
                filter: ['width', 'items', 'settings'],
                run: () => {
                    const rtl = this.settings.rtl ? 1 : -1, size = this._clones.length + this._items.length, coordinates = [];
                    let iterator = -1, previous = 0, current = 0;
                    while (++iterator < size) {
                        previous = coordinates[iterator - 1] || 0;
                        current = this._widths[this.relative(iterator)] + this.settings.margin;
                        coordinates.push(previous + current * rtl);
                    }
                    this._coordinates = coordinates;
                }
            }, {
                filter: ['width', 'items', 'settings'],
                run: () => {
                    const padding = this.settings.stagePadding, coordinates = this._coordinates, css = {
                        'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                        'padding-left': padding || '',
                        'padding-right': padding || ''
                    };
                    this.stageData.width = css.width; // use this property in *ngIf directive for .owl-stage element
                    this.stageData.paddingL = css['padding-left'];
                    this.stageData.paddingR = css['padding-right'];
                }
            }, {
                //   filter: [ 'width', 'items', 'settings' ],
                //   run: cache => {
                // 		// this method sets the width for every slide, but I set it in different way earlier
                // 		const grid = !this.settings.autoWidth,
                // 		items = this.$stage.children(); // use this.slidesData
                //     let iterator = this._coordinates.length;
                //     if (grid && cache.items.merge) {
                //       while (iterator--) {
                //         cache.css.width = this._widths[this.relative(iterator)];
                //         items.eq(iterator).css(cache.css);
                //       }
                //     } else if (grid) {
                //       cache.css.width = cache.items.width;
                //       items.css(cache.css);
                //     }
                //   }
                // }, {
                //   filter: [ 'items' ],
                //   run: function() {
                //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
                //   }
                // }, {
                filter: ['width', 'items', 'settings'],
                run: cache => {
                    let current = cache.current ? this.slidesData.findIndex(slide => slide.id === cache.current) : 0;
                    current = Math.max(this.minimum(), Math.min(this.maximum(), current));
                    this.reset(current);
                }
            }, {
                filter: ['position'],
                run: () => {
                    this.animate(this.coordinates(this._current));
                }
            }, {
                filter: ['width', 'position', 'items', 'settings'],
                run: () => {
                    const rtl = this.settings.rtl ? 1 : -1, padding = this.settings.stagePadding * 2, matches = [];
                    let begin, end, inner, outer, i, n;
                    begin = this.coordinates(this.current());
                    if (typeof begin === 'number') {
                        begin += padding;
                    }
                    else {
                        begin = 0;
                    }
                    end = begin + this.width() * rtl;
                    if (rtl === -1 && this.settings.center) {
                        const result = this._coordinates.filter(element => {
                            return this.settings.items % 2 === 1 ? element >= begin : element > begin;
                        });
                        begin = result.length ? result[result.length - 1] : begin;
                    }
                    for (i = 0, n = this._coordinates.length; i < n; i++) {
                        inner = Math.ceil(this._coordinates[i - 1] || 0);
                        outer = Math.ceil(Math.abs(this._coordinates[i]) + padding * rtl);
                        if ((this._op(inner, '<=', begin) && (this._op(inner, '>', end)))
                            || (this._op(outer, '<', begin) && this._op(outer, '>', end))) {
                            matches.push(i);
                        }
                    }
                    this.slidesData.forEach(slide => {
                        slide.isActive = false;
                        return slide;
                    });
                    matches.forEach(item => {
                        this.slidesData[item].isActive = true;
                    });
                    if (this.settings.center) {
                        this.slidesData.forEach(slide => {
                            slide.isCentered = false;
                            return slide;
                        });
                        this.slidesData[this.current()].isCentered = true;
                    }
                }
            }
        ];
    }
    // Is needed for tests
    get invalidated() {
        return this._invalidated;
    }
    // is needed for tests
    get states() {
        return this._states;
    }
    /**
     * Makes _viewSettingsShipper$ Subject become Observable
     * @returns Observable of _viewSettingsShipper$ Subject
     */
    getViewCurSettings() {
        return this._viewSettingsShipper$.asObservable();
    }
    /**
     * Makes _initializedCarousel$ Subject become Observable
     * @returns Observable of _initializedCarousel$ Subject
     */
    getInitializedState() {
        return this._initializedCarousel$.asObservable();
    }
    /**
     * Makes _changeSettingsCarousel$ Subject become Observable
     * @returns Observable of _changeSettingsCarousel$ Subject
     */
    getChangeState() {
        return this._changeSettingsCarousel$.asObservable();
    }
    /**
     * Makes _changedSettingsCarousel$ Subject become Observable
     * @returns Observable of _changedSettingsCarousel$ Subject
     */
    getChangedState() {
        return this._changedSettingsCarousel$.asObservable();
    }
    /**
     * Makes _translateCarousel$ Subject become Observable
     * @returns Observable of _translateCarousel$ Subject
     */
    getTranslateState() {
        return this._translateCarousel$.asObservable();
    }
    /**
     * Makes _translatedCarousel$ Subject become Observable
     * @returns Observable of _translatedCarousel$ Subject
     */
    getTranslatedState() {
        return this._translatedCarousel$.asObservable();
    }
    /**
     * Makes _resizeCarousel$ Subject become Observable
     * @returns Observable of _resizeCarousel$ Subject
     */
    getResizeState() {
        return this._resizeCarousel$.asObservable();
    }
    /**
     * Makes _resizedCarousel$ Subject become Observable
     * @returns Observable of _resizedCarousel$ Subject
     */
    getResizedState() {
        return this._resizedCarousel$.asObservable();
    }
    /**
     * Makes _refreshCarousel$ Subject become Observable
     * @returns Observable of _refreshCarousel$ Subject
     */
    getRefreshState() {
        return this._refreshCarousel$.asObservable();
    }
    /**
     * Makes _refreshedCarousel$ Subject become Observable
     * @returns Observable of _refreshedCarousel$ Subject
     */
    getRefreshedState() {
        return this._refreshedCarousel$.asObservable();
    }
    /**
     * Makes _dragCarousel$ Subject become Observable
     * @returns Observable of _dragCarousel$ Subject
     */
    getDragState() {
        return this._dragCarousel$.asObservable();
    }
    /**
     * Makes _draggedCarousel$ Subject become Observable
     * @returns Observable of _draggedCarousel$ Subject
     */
    getDraggedState() {
        return this._draggedCarousel$.asObservable();
    }
    /**
     * Setups custom options expanding default options
     * @param options custom options
     */
    setOptions(options) {
        const configOptions = new OwlCarouselOConfig();
        const checkedOptions = this._validateOptions(options, configOptions);
        this._options = Object.assign(Object.assign({}, configOptions), checkedOptions);
    }
    /**
     * Checks whether user's option are set properly. Cheking is based on typings;
     * @param options options set by user
     * @param configOptions default options
     * @returns checked and modified (if it's needed) user's options
     *
     * Notes:
     * 	- if user set option with wrong type, it'll be written in console
     */
    _validateOptions(options, configOptions) {
        const checkedOptions = Object.assign({}, options);
        const mockedTypes = new OwlOptionsMockedTypes();
        const setRightOption = (type, key) => {
            this.logger.log(`options.${key} must be type of ${type}; ${key}=${options[key]} skipped to defaults: ${key}=${configOptions[key]}`);
            return configOptions[key];
        };
        for (const key in checkedOptions) {
            if (checkedOptions.hasOwnProperty(key)) {
                // condition could be shortened but it gets harder for understanding
                if (mockedTypes[key] === 'number') {
                    if (this._isNumeric(checkedOptions[key])) {
                        checkedOptions[key] = +checkedOptions[key];
                        checkedOptions[key] = key === 'items' ? this._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
                    }
                    else {
                        checkedOptions[key] = setRightOption(mockedTypes[key], key);
                    }
                }
                else if (mockedTypes[key] === 'boolean' && typeof checkedOptions[key] !== 'boolean') {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
                else if (mockedTypes[key] === 'number|boolean' && !this._isNumberOrBoolean(checkedOptions[key])) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
                else if (mockedTypes[key] === 'number|string' && !this._isNumberOrString(checkedOptions[key])) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
                else if (mockedTypes[key] === 'string|boolean' && !this._isStringOrBoolean(checkedOptions[key])) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
                else if (mockedTypes[key] === 'string[]') {
                    if (Array.isArray(checkedOptions[key])) {
                        let isString = false;
                        checkedOptions[key].forEach(element => {
                            isString = typeof element === 'string' ? true : false;
                        });
                        if (!isString) {
                            checkedOptions[key] = setRightOption(mockedTypes[key], key);
                        }
                        ;
                    }
                    else {
                        checkedOptions[key] = setRightOption(mockedTypes[key], key);
                    }
                }
            }
        }
        return checkedOptions;
    }
    /**
     * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
     * @param items option items set by user
     * @param skip_validateItems option `skip_validateItems` set by user
     * @returns right number of items
     */
    _validateItems(items, skip_validateItems) {
        let result = items;
        if (items > this._items.length) {
            if (skip_validateItems) {
                this.logger.log('The option \'items\' in your options is bigger than the number of slides. The navigation got disabled');
            }
            else {
                result = this._items.length;
                this.logger.log('The option \'items\' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled');
            }
        }
        else {
            if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
                this.logger.log('Option \'items\' in your options is equal to the number of slides. So the navigation got disabled');
            }
        }
        return result;
    }
    /**
     * Set current width of carousel
     * @param width width of carousel Window
     */
    setCarouselWidth(width) {
        this._width = width;
    }
    /**
       * Setups the current settings.
       * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
       * @todo Support for media queries by using `matchMedia` would be nice.
       * @param carouselWidth width of carousel
       * @param slides array of slides
       * @param options options set by user
       */
    setup(carouselWidth, slides, options) {
        this.setCarouselWidth(carouselWidth);
        this.setItems(slides);
        this._defineSlidesData();
        this.setOptions(options);
        this.settings = Object.assign({}, this._options);
        this.setOptionsForViewport();
        this._trigger('change', { property: { name: 'settings', value: this.settings } });
        this.invalidate('settings'); // must be call of this function;
        this._trigger('changed', { property: { name: 'settings', value: this.settings } });
    }
    /**
     * Set options for current viewport
     */
    setOptionsForViewport() {
        const viewport = this._width, overwrites = this._options.responsive;
        let match = -1;
        if (!Object.keys(overwrites).length) {
            return;
        }
        if (!viewport) {
            this.settings.items = 1;
            return;
        }
        for (const key in overwrites) {
            if (overwrites.hasOwnProperty(key)) {
                if (+key <= viewport && +key > match) {
                    match = Number(key);
                }
            }
        }
        this.settings = Object.assign(Object.assign(Object.assign({}, this._options), overwrites[match]), { items: (overwrites[match] && overwrites[match].items) ? this._validateItems(overwrites[match].items, this._options.skip_validateItems) : this._options.items });
        // if (typeof this.settings.stagePadding === 'function') {
        // 	this.settings.stagePadding = this.settings.stagePadding();
        // }
        delete this.settings.responsive;
        this.owlDOMData.isResponsive = true;
        this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
        this.owlDOMData.isTouchDragable = this.settings.touchDrag;
        const mergers = [];
        this._items.forEach(item => {
            const mergeN = this.settings.merge ? item.dataMerge : 1;
            mergers.push(mergeN);
        });
        this._mergers = mergers;
        this._breakpoint = match;
        this.invalidate('settings');
    }
    /**
     * Initializes the carousel.
     * @param slides array of CarouselSlideDirective
     */
    initialize(slides) {
        this.enter('initializing');
        // this.trigger('initialize');
        this.owlDOMData.rtl = this.settings.rtl;
        if (this._mergers.length) {
            this._mergers = [];
        }
        slides.forEach(item => {
            const mergeN = this.settings.merge ? item.dataMerge : 1;
            this._mergers.push(mergeN);
        });
        this._clones = [];
        this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
        this.invalidate('items');
        this.refresh();
        this.owlDOMData.isLoaded = true;
        this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
        this.owlDOMData.isTouchDragable = this.settings.touchDrag;
        this.sendChanges();
        this.leave('initializing');
        this._trigger('initialized');
    }
    ;
    /**
     * Sends all data needed for View
     */
    sendChanges() {
        this._viewSettingsShipper$.next({
            owlDOMData: this.owlDOMData,
            stageData: this.stageData,
            slidesData: this.slidesData,
            navData: this.navData,
            dotsData: this.dotsData
        });
    }
    /**
       * Updates option logic if necessery
       */
    _optionsLogic() {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = 0;
            this.settings.merge = false;
        }
    }
    /**
     * Updates the view
     */
    update() {
        let i = 0;
        const n = this._pipe.length, filter = item => this._invalidated[item], cache = {};
        while (i < n) {
            const filteredPipe = this._pipe[i].filter.filter(filter);
            if (this._invalidated.all || filteredPipe.length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }
        this.slidesData.forEach(slide => slide.classes = this.setCurSlideClasses(slide));
        this.sendChanges();
        this._invalidated = {};
        if (!this.is('valid')) {
            this.enter('valid');
        }
    }
    /**
       * Gets the width of the view.
       * @param [dimension=Width.Default] The dimension to return
       * @returns The width of the view in pixel.
       */
    width(dimension) {
        dimension = dimension || Width.Default;
        switch (dimension) {
            case Width.Inner:
            case Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    }
    /**
       * Refreshes the carousel primarily for adaptive purposes.
       */
    refresh() {
        this.enter('refreshing');
        this._trigger('refresh');
        this._defineSlidesData();
        this.setOptionsForViewport();
        this._optionsLogic();
        // this.$element.addClass(this.options.refreshClass);
        this.update();
        // this.$element.removeClass(this.options.refreshClass);
        this.leave('refreshing');
        this._trigger('refreshed');
    }
    /**
       * Checks window `resize` event.
       * @param curWidth width of .owl-carousel
       */
    onResize(curWidth) {
        if (!this._items.length) {
            return false;
        }
        this.setCarouselWidth(curWidth);
        this.enter('resizing');
        // if (this.trigger('resize').isDefaultPrevented()) {
        // 	this.leave('resizing');
        // 	return false;
        // }
        this._trigger('resize');
        this.invalidate('width');
        this.refresh();
        this.leave('resizing');
        this._trigger('resized');
    }
    /**
       * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
       * @todo Horizontal swipe threshold as option
       * @todo #261
       * @param event - The event arguments.
       * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
       */
    prepareDragging(event) {
        let stage = null, transformArr;
        // could be 5 commented lines below; However there's stage transform in stageData and in updates after each move of stage
        // stage = getComputedStyle(this.el.nativeElement).transform.replace(/.*\(|\)| /g, '').split(',');
        // stage = {
        //   x: stage[stage.length === 16 ? 12 : 4],
        //   y: stage[stage.length === 16 ? 13 : 5]
        // };
        transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, '').split(',');
        stage = {
            x: +transformArr[0],
            y: +transformArr[1]
        };
        if (this.is('animating')) {
            this.invalidate('position');
        }
        if (event.type === 'mousedown') {
            this.owlDOMData.isGrab = true;
        }
        this.speed(0);
        return stage;
    }
    /**
     * Enters into a 'dragging' state
     */
    enterDragging() {
        this.enter('dragging');
        this._trigger('drag');
    }
    /**
       * Defines new coords for .owl-stage while dragging it
       * @todo #261
       * @param event the event arguments.
       * @param dragData initial data got after starting dragging
       * @returns coords or false
       */
    defineNewCoordsDrag(event, dragData) {
        let minimum = null, maximum = null, pull = null;
        const delta = this.difference(dragData.pointer, this.pointer(event)), stage = this.difference(dragData.stage.start, delta);
        if (!this.is('dragging')) {
            return false;
        }
        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = +this.coordinates(this.maximum() + 1) - minimum;
            stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
        }
        else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }
        return stage;
    }
    /**
       * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
       * @todo #261
       * @todo Threshold for click event
       * @param event the event arguments.
       * @param dragObj the object with dragging settings and states
       * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
       */
    finishDragging(event, dragObj, clickAttacher) {
        const directions = ['right', 'left'], delta = this.difference(dragObj.pointer, this.pointer(event)), stage = dragObj.stage.current, direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +this.settings.rtl)];
        let currentSlideI, current, newCurrent;
        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
            currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
            current = this.current();
            newCurrent = this.current(currentSlideI === -1 ? undefined : currentSlideI);
            if (current !== newCurrent) {
                this.invalidate('position');
                this.update();
            }
            dragObj.direction = direction;
            if (Math.abs(delta.x) > 3 || new Date().getTime() - dragObj.time > 300) {
                clickAttacher();
            }
        }
        if (!this.is('dragging')) {
            return;
        }
        this.leave('dragging');
        this._trigger('dragged');
    }
    /**
       * Gets absolute position of the closest item for a coordinate.
       * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
       * @param coordinate The coordinate in pixel.
       * @param direction The direction to check for the closest item. Ether `left` or `right`.
       * @returns The absolute position of the closest item.
       */
    closest(coordinate, direction) {
        const pull = 30, width = this.width();
        let coordinates = this.coordinates(), position = -1;
        if (this.settings.center) {
            coordinates = coordinates.map(item => {
                if (item === 0) {
                    item += 0.000001;
                }
                return item;
            });
        }
        // option 'freeDrag' doesn't have realization and using it here creates problem:
        // variable 'position' stays unchanged (it equals -1 at the begging) and thus method returns -1
        // Returning value is consumed by method current(), which taking -1 as argument calculates the index of new current slide
        // In case of having 5 slides ans 'loop=false; calling 'current(-1)' sets props '_current' as 4. Just last slide remains visible instead of 3 last slides.
        // if (!this.settings.freeDrag) {
        // check closest item
        for (let i = 0; i < coordinates.length; i++) {
            if (direction === 'left' && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
                position = i;
                // on a right pull, check on previous index
                // to do so, subtract width from value and set position = index + 1
            }
            else if (direction === 'right' && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
                position = i + 1;
            }
            else if (this._op(coordinate, '<', coordinates[i])
                && this._op(coordinate, '>', coordinates[i + 1] || coordinates[i] - width)) {
                position = direction === 'left' ? i + 1 : i;
            }
            else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
                position = i;
            }
            if (position !== -1) {
                break;
            }
            ;
        }
        // }
        if (!this.settings.loop) {
            // non loop boundries
            if (this._op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            }
            else if (this._op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }
        return position;
    }
    /**
       * Animates the stage.
       * @todo #270
       * @param coordinate The coordinate in pixels.
       */
    animate(coordinate) {
        const animate = this.speed() > 0;
        if (this.is('animating')) {
            this.onTransitionEnd();
        }
        if (animate) {
            this.enter('animating');
            this._trigger('translate');
        }
        this.stageData.transform = 'translate3d(' + coordinate + 'px,0px,0px)';
        this.stageData.transition = (this.speed() / 1000) + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : '');
        // also there was transition by means of JQuery.animate or css-changing property left
    }
    /**
       * Checks whether the carousel is in a specific state or not.
       * @param state The state to check.
       * @returns The flag which indicates if the carousel is busy.
       */
    is(state) {
        return this._states.current[state] && this._states.current[state] > 0;
    }
    ;
    /**
       * Sets the absolute position of the current item.
       * @param position The new absolute position or nothing to leave it unchanged.
       * @returns The absolute position of the current item.
       */
    current(position) {
        if (position === undefined) {
            return this._current;
        }
        if (this._items.length === 0) {
            return undefined;
        }
        position = this.normalize(position);
        if (this._current !== position) {
            const event = this._trigger('change', { property: { name: 'position', value: position } });
            // if (event.data !== undefined) {
            // 	position = this.normalize(event.data);
            // }
            this._current = position;
            this.invalidate('position');
            this._trigger('changed', { property: { name: 'position', value: this._current } });
        }
        return this._current;
    }
    /**
       * Invalidates the given part of the update routine.
       * @param part The part to invalidate.
       * @returns The invalidated parts.
       */
    invalidate(part) {
        if (typeof part === 'string') {
            this._invalidated[part] = true;
            if (this.is('valid')) {
                this.leave('valid');
            }
        }
        return Object.keys(this._invalidated);
    }
    ;
    /**
     * Resets the absolute position of the current item.
     * @param position the absolute position of the new item.
     */
    reset(position) {
        position = this.normalize(position);
        if (position === undefined) {
            return;
        }
        this._speed = 0;
        this._current = position;
        this._suppress(['translate', 'translated']);
        this.animate(this.coordinates(position));
        this._release(['translate', 'translated']);
    }
    /**
       * Normalizes an absolute or a relative position of an item.
       * @param position The absolute or relative position to normalize.
       * @param relative Whether the given position is relative or not.
       * @returns The normalized position.
       */
    normalize(position, relative) {
        const n = this._items.length, m = relative ? 0 : this._clones.length;
        if (!this._isNumeric(position) || n < 1) {
            position = undefined;
        }
        else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }
        return position;
    }
    /**
       * Converts an absolute position of an item into a relative one.
       * @param position The absolute position to convert.
       * @returns The converted position.
       */
    relative(position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    }
    /**
       * Gets the maximum position for the current item.
       * @param relative Whether to return an absolute position or a relative position.
       * @returns number of maximum position
       */
    maximum(relative = false) {
        const settings = this.settings;
        let maximum = this._coordinates.length, iterator, reciprocalItemsWidth, elementWidth;
        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        }
        else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this.slidesData[--iterator].width;
            elementWidth = this._width;
            while (iterator--) {
                // it could be use this._items instead of this.slidesData;
                reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;
                if (reciprocalItemsWidth > elementWidth) {
                    break;
                }
            }
            maximum = iterator + 1;
        }
        else if (settings.center) {
            maximum = this._items.length - 1;
        }
        else {
            maximum = this._items.length - settings.items;
        }
        if (relative) {
            maximum -= this._clones.length / 2;
        }
        return Math.max(maximum, 0);
    }
    /**
       * Gets the minimum position for the current item.
       * @param relative Whether to return an absolute position or a relative position.
       * @returns number of minimum position
       */
    minimum(relative = false) {
        return relative ? 0 : this._clones.length / 2;
    }
    /**
       * Gets an item at the specified relative position.
       * @param position The relative position of the item.
       * @returns The item at the given position or all items if no position was given.
       */
    items(position) {
        if (position === undefined) {
            return this._items.slice();
        }
        position = this.normalize(position, true);
        return [this._items[position]];
    }
    /**
       * Gets an item at the specified relative position.
       * @param position The relative position of the item.
       * @returns The item at the given position or all items if no position was given.
       */
    mergers(position) {
        if (position === undefined) {
            return this._mergers.slice();
        }
        position = this.normalize(position, true);
        return this._mergers[position];
    }
    /**
       * Gets the absolute positions of clones for an item.
       * @param position The relative position of the item.
       * @returns The absolute positions of clones for the item or all if no position was given.
       */
    clones(position) {
        const odd = this._clones.length / 2, even = odd + this._items.length, map = index => index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
        if (position === undefined) {
            return this._clones.map((v, i) => map(i));
        }
        return this._clones.map((v, i) => v === position ? map(i) : null).filter(item => item);
    }
    /**
       * Sets the current animation speed.
       * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
       * @returns The current animation speed in milliseconds.
       */
    speed(speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }
        return this._speed;
    }
    /**
       * Gets the coordinate of an item.
       * @todo The name of this method is missleanding.
       * @param position The absolute position of the item within `minimum()` and `maximum()`.
       * @returns The coordinate of the item in pixel or all coordinates.
       */
    coordinates(position) {
        let multiplier = 1, newPosition = position - 1, coordinate, result;
        if (position === undefined) {
            result = this._coordinates.map((item, index) => {
                return this.coordinates(index);
            });
            return result;
        }
        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        }
        else {
            coordinate = this._coordinates[newPosition] || 0;
        }
        coordinate = Math.ceil(coordinate);
        return coordinate;
    }
    /**
       * Calculates the speed for a translation.
       * @param from The absolute position of the start item.
       * @param to The absolute position of the target item.
       * @param factor [factor=undefined] - The time factor in milliseconds.
       * @returns The time in milliseconds for the translation.
       */
    _duration(from, to, factor) {
        if (factor === 0) {
            return 0;
        }
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((+factor || this.settings.smartSpeed));
    }
    /**
       * Slides to the specified item.
       * @param position The position of the item.
       * @param speed The time in milliseconds for the transition.
       */
    to(position, speed) {
        let current = this.current(), revert = null, distance = position - this.relative(current), maximum = this.maximum(), delayForLoop = 0;
        const direction = +(distance > 0) - +(distance < 0), items = this._items.length, minimum = this.minimum();
        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }
            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;
            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                delayForLoop = 30;
                this.reset(current);
                this.sendChanges();
            }
        }
        else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        }
        else {
            position = Math.max(minimum, Math.min(maximum, position));
        }
        setTimeout(() => {
            this.speed(this._duration(current, position, speed));
            this.current(position);
            this.update();
        }, delayForLoop);
    }
    /**
       * Slides to the next item.
       * @param speed The time in milliseconds for the transition.
       */
    next(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    }
    /**
       * Slides to the previous item.
       * @param speed The time in milliseconds for the transition.
       */
    prev(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    }
    /**
       * Handles the end of an animation.
       * @param event - The event arguments.
       */
    onTransitionEnd(event) {
        // if css2 animation then event object is undefined
        if (event !== undefined) {
            // event.stopPropagation();
            // // Catch only owl-stage transitionEnd event
            // if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)	) {
            // 	return false;
            // }
            return false;
        }
        this.leave('animating');
        this._trigger('translated');
    }
    /**
       * Gets viewport width.
       * @returns - The width in pixel.
       */
    _viewport() {
        let width;
        if (this._width) {
            width = this._width;
        }
        else {
            this.logger.log('Can not detect viewport width.');
        }
        return width;
    }
    /**
       * Sets _items
       * @param content The list of slides put into CarouselSlideDirectives.
       */
    setItems(content) {
        this._items = content;
    }
    /**
     * Sets slidesData using this._items
     */
    _defineSlidesData() {
        // Maybe creating and using loadMap would be better in LazyLoadService.
        // Hovewer in that case when 'resize' event fires, prop 'load' of all slides will get 'false' and such state of prop will be seen by View during its updating. Accordingly the code will remove slides's content from DOM even if it was loaded before.
        // Thus it would be needed to add that content into DOM again.
        // In order to avoid additional removing/adding loaded slides's content we use loadMap here and set restore state of prop 'load' before the View will get it.
        let loadMap;
        if (this.slidesData && this.slidesData.length) {
            loadMap = new Map();
            this.slidesData.forEach(item => {
                if (item.load) {
                    loadMap.set(item.id, item.load);
                }
            });
        }
        this.slidesData = this._items.map(slide => {
            return {
                id: `${slide.id}`,
                isActive: false,
                tplRef: slide.tplRef,
                dataMerge: slide.dataMerge,
                width: 0,
                isCloned: false,
                load: loadMap ? loadMap.get(slide.id) : false,
                hashFragment: slide.dataHash
            };
        });
    }
    /**
     * Sets current classes for slide
     * @param slide Slide of carousel
     * @returns object with names of css-classes which are keys and true/false values
     */
    setCurSlideClasses(slide) {
        // CSS classes: added/removed per current state of component properties
        const currentClasses = {
            'active': slide.isActive,
            'center': slide.isCentered,
            'cloned': slide.isCloned,
            'animated': slide.isAnimated,
            'owl-animated-in': slide.isDefAnimatedIn,
            'owl-animated-out': slide.isDefAnimatedOut
        };
        if (this.settings.animateIn) {
            currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn;
        }
        if (this.settings.animateOut) {
            currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut;
        }
        return currentClasses;
    }
    /**
       * Operators to calculate right-to-left and left-to-right.
       * @param a - The left side operand.
       * @param o - The operator.
       * @param b - The right side operand.
       * @returns true/false meaning right-to-left or left-to-right
       */
    _op(a, o, b) {
        const rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    }
    /**
       * Triggers a public event.
       * @todo Remove `status`, `relatedTarget` should be used instead.
       * @param name The event name.
       * @param data The event data.
       * @param namespace The event namespace.
       * @param state The state which is associated with the event.
       * @param enter Indicates if the call enters the specified state or not.
       */
    _trigger(name, data, namespace, state, enter) {
        switch (name) {
            case 'initialized':
                this._initializedCarousel$.next(name);
                break;
            case 'change':
                this._changeSettingsCarousel$.next(data);
                break;
            case 'changed':
                this._changedSettingsCarousel$.next(data);
                break;
            case 'drag':
                this._dragCarousel$.next(name);
                break;
            case 'dragged':
                this._draggedCarousel$.next(name);
                break;
            case 'resize':
                this._resizeCarousel$.next(name);
                break;
            case 'resized':
                this._resizedCarousel$.next(name);
                break;
            case 'refresh':
                this._refreshCarousel$.next(name);
                break;
            case 'refreshed':
                this._refreshedCarousel$.next(name);
                break;
            case 'translate':
                this._translateCarousel$.next(name);
                break;
            case 'translated':
                this._translatedCarousel$.next(name);
                break;
            default:
                break;
        }
    }
    /**
     * Enters a state.
     * @param name - The state name.
     */
    enter(name) {
        [name].concat(this._states.tags[name] || []).forEach((stateName) => {
            if (this._states.current[stateName] === undefined) {
                this._states.current[stateName] = 0;
            }
            this._states.current[stateName]++;
        });
    }
    ;
    /**
       * Leaves a state.
       * @param name - The state name.
       */
    leave(name) {
        [name].concat(this._states.tags[name] || []).forEach((stateName) => {
            if (this._states.current[stateName] === 0 || !!this._states.current[stateName]) {
                this._states.current[stateName]--;
            }
        });
    }
    ;
    /**
       * Registers an event or state.
       * @param object - The event or state to register.
       */
    register(object) {
        if (object.type === Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            }
            else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }
            this._states.tags[object.name] = this._states.tags[object.name].filter((tag, i) => {
                return this._states.tags[object.name].indexOf(tag) === i;
            });
        }
    }
    /**
       * Suppresses events.
       * @param events The events to suppress.
       */
    _suppress(events) {
        events.forEach(event => {
            this._supress[event] = true;
        });
    }
    /**
       * Releases suppressed events.
       * @param events The events to release.
       */
    _release(events) {
        events.forEach(event => {
            delete this._supress[event];
        });
    }
    /**
       * Gets unified pointer coordinates from event.
       * @todo #261
       * @param event The `mousedown` or `touchstart` event.
       * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
       */
    pointer(event) {
        const result = { x: null, y: null };
        event = event.originalEvent || event || window.event;
        event = event.touches && event.touches.length ?
            event.touches[0] : event.changedTouches && event.changedTouches.length ?
            event.changedTouches[0] : event;
        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        }
        else {
            result.x = event.clientX;
            result.y = event.clientY;
        }
        return result;
    }
    /**
       * Determines if the input is a Number or something that can be coerced to a Number
       * @param number The input to be tested
       * @returns An indication if the input is a Number or can be coerced to a Number
       */
    _isNumeric(number) {
        return !isNaN(parseFloat(number));
    }
    /**
     * Determines whether value is number or boolean type
     * @param value The input to be tested
     * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
     */
    _isNumberOrBoolean(value) {
        return this._isNumeric(value) || typeof value === 'boolean';
    }
    /**
     * Determines whether value is number or string type
     * @param value The input to be tested
     * @returns An indication if the input is a Number or can be coerced to a Number, or String
     */
    _isNumberOrString(value) {
        return this._isNumeric(value) || typeof value === 'string';
    }
    /**
     * Determines whether value is number or string type
     * @param value The input to be tested
     * @returns An indication if the input is a Number or can be coerced to a Number, or String
     */
    _isStringOrBoolean(value) {
        return typeof value === 'string' || typeof value === 'boolean';
    }
    /**
       * Gets the difference of two vectors.
       * @todo #261
       * @param first The first vector.
       * @param second The second vector.
       * @returns The difference.
       */
    difference(first, second) {
        if (null === first || null === second) {
            return {
                x: 0,
                y: 0,
            };
        }
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    }
}
CarouselService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
CarouselService.ctorParameters = () => [
    { type: OwlLogger }
];

class NavigationService {
    constructor(carouselService) {
        this.carouselService = carouselService;
        /**
         * Indicates whether the plugin is initialized or not.
         */
        this._initialized = false;
        /**
         * The current paging indexes.
         */
        this._pages = [];
        /**
         * Data for navigation elements of the user interface.
         */
        this._navData = {
            disabled: false,
            prev: {
                disabled: false,
                htmlText: ''
            },
            next: {
                disabled: false,
                htmlText: ''
            },
        };
        /**
         * Data for dot elements of the user interface.
         */
        this._dotsData = {
            disabled: false,
            dots: []
        };
        this.spyDataStreams();
    }
    ngOnDestroy() {
        this.navSubscription.unsubscribe();
    }
    /**
     * Defines Observables which service must observe
     */
    spyDataStreams() {
        const initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(state => {
            this.initialize();
            this._updateNavPages();
            this.draw();
            this.update();
            this.carouselService.sendChanges();
        }));
        // mostly changes in carouselService and carousel at all causes carouselService.to(). It moves stage right-left by its code and calling needed functions
        // Thus this method by calling carouselService.current(position) notifies about changes
        const changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(data => data.property.name === 'position'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            this.update();
            // should be the call of the function written at the end of comment
            // but the method carouselServive.to() has setTimeout(f, 0) which contains carouselServive.update() which calls sendChanges() method.
            // carouselService.navData and carouselService.dotsData update earlier than carouselServive.update() gets called
            // updates of carouselService.navData and carouselService.dotsData are being happening withing carouselService.current(position) method which calls next() of _changedSettingsCarousel$
            // carouselService.current(position) is being calling earlier than carouselServive.update();
            // this.carouselService.sendChanges();
        }));
        const refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this._updateNavPages();
            this.draw();
            this.update();
            this.carouselService.sendChanges();
        }));
        const navMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
        this.navSubscription = navMerge$.subscribe(() => { });
    }
    /**
       * Initializes the layout of the plugin and extends the carousel.
       */
    initialize() {
        this._navData.disabled = true;
        this._navData.prev.htmlText = this.carouselService.settings.navText[0];
        this._navData.next.htmlText = this.carouselService.settings.navText[1];
        this._dotsData.disabled = true;
        this.carouselService.navData = this._navData;
        this.carouselService.dotsData = this._dotsData;
    }
    /**
     * Calculates internal states and updates prop _pages
     */
    _updateNavPages() {
        let i, j, k;
        const lower = this.carouselService.clones().length / 2, upper = lower + this.carouselService.items().length, maximum = this.carouselService.maximum(true), pages = [], settings = this.carouselService.settings;
        let size = settings.center || settings.autoWidth || settings.dotsData
            ? 1 : settings.dotsEach || settings.items;
        size = +size;
        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(+settings.slideBy, settings.items);
        }
        if (settings.dots || settings.slideBy === 'page') {
            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += this.carouselService.mergers(this.carouselService.relative(i));
            }
        }
        this._pages = pages;
    }
    /**
       * Draws the user interface.
       * @todo The option `dotsData` wont work.
       */
    draw() {
        let difference;
        const settings = this.carouselService.settings, items = this.carouselService.items(), disabled = items.length <= settings.items;
        this._navData.disabled = !settings.nav || disabled;
        this._dotsData.disabled = !settings.dots || disabled;
        if (settings.dots) {
            difference = this._pages.length - this._dotsData.dots.length;
            if (settings.dotsData && difference !== 0) {
                this._dotsData.dots = [];
                items.forEach(item => {
                    this._dotsData.dots.push({
                        active: false,
                        id: `dot-${item.id}`,
                        innerContent: item.dotContent,
                        showInnerContent: true
                    });
                });
            }
            else if (difference > 0) {
                const startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;
                for (let i = 0; i < difference; i++) {
                    this._dotsData.dots.push({
                        active: false,
                        id: `dot-${i + startI}`,
                        innerContent: '',
                        showInnerContent: false
                    });
                }
            }
            else if (difference < 0) {
                this._dotsData.dots.splice(difference, Math.abs(difference));
            }
        }
        this.carouselService.navData = this._navData;
        this.carouselService.dotsData = this._dotsData;
    }
    ;
    /**
     * Updates navigation buttons's and dots's states
     */
    update() {
        this._updateNavButtons();
        this._updateDots();
    }
    /**
     * Changes state of nav buttons (disabled, enabled)
     */
    _updateNavButtons() {
        const settings = this.carouselService.settings, loop = settings.loop || settings.rewind, index = this.carouselService.relative(this.carouselService.current());
        if (settings.nav) {
            this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
            this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
        }
        this.carouselService.navData = this._navData;
    }
    /**
     * Changes active dot if page becomes changed
     */
    _updateDots() {
        let curActiveDotI;
        if (!this.carouselService.settings.dots) {
            return;
        }
        this._dotsData.dots.forEach(item => {
            if (item.active === true) {
                item.active = false;
            }
        });
        curActiveDotI = this._current();
        if (this._dotsData.dots.length) {
            this._dotsData.dots[curActiveDotI].active = true;
        }
        this.carouselService.dotsData = this._dotsData;
    }
    /**
       * Gets the current page position of the carousel.
       * @returns the current page position of the carousel
       */
    _current() {
        const current = this.carouselService.relative(this.carouselService.current());
        let finalCurrent;
        const pages = this._pages.filter((page, index) => {
            return page.start <= current && page.end >= current;
        }).pop();
        finalCurrent = this._pages.findIndex(page => {
            return page.start === pages.start && page.end === pages.end;
        });
        return finalCurrent;
    }
    ;
    /**
       * Gets the current succesor/predecessor position.
     * @param sussessor position of slide
       * @returns the current succesor/predecessor position
       */
    _getPosition(successor) {
        let position, length;
        const settings = this.carouselService.settings;
        if (settings.slideBy === 'page') {
            position = this._current();
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        }
        else {
            position = this.carouselService.relative(this.carouselService.current());
            length = this.carouselService.items().length;
            successor ? position += +settings.slideBy : position -= +settings.slideBy;
        }
        return position;
    }
    ;
    /**
       * Slides to the next item or page.
       * @param speed The time in milliseconds for the transition.
       */
    next(speed) {
        this.carouselService.to(this._getPosition(true), speed);
    }
    ;
    /**
     * Slides to the previous item or page.
     * @param speed The time in milliseconds for the transition.
     */
    prev(speed) {
        this.carouselService.to(this._getPosition(false), speed);
    }
    ;
    /**
     * Slides to the specified item or page.
     * @param position - The position of the item or page.
     * @param speed - The time in milliseconds for the transition.
     * @param standard - Whether to use the standard behaviour or not. Default meaning false
     */
    to(position, speed, standard) {
        let length;
        if (!standard && this._pages.length) {
            length = this._pages.length;
            this.carouselService.to(this._pages[((position % length) + length) % length].start, speed);
        }
        else {
            this.carouselService.to(position, speed);
        }
    }
    ;
    /**
     * Moves carousel after user's clicking on any dots
     */
    moveByDot(dotId) {
        const index = this._dotsData.dots.findIndex(dot => dotId === dot.id);
        this.to(index, this.carouselService.settings.dotsSpeed);
    }
    /**
     * rewinds carousel to slide with needed id
     * @param id id of slide
     */
    toSlideById(id) {
        const position = this.carouselService.slidesData.findIndex(slide => slide.id === id && slide.isCloned === false);
        if (position === -1 || position === this.carouselService.current()) {
            return;
        }
        this.carouselService.to(this.carouselService.relative(position), false);
    }
}
NavigationService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
NavigationService.ctorParameters = () => [
    { type: CarouselService }
];

// import { Injectable } from '@angular/core';
/**
 * Create a new injection token for injecting the window into a component.
 */
const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken');
/**
 * Define abstract class for obtaining reference to the global window object.
 */
class WindowRef {
    get nativeWindow() {
        throw new Error('Not implemented.');
    }
}
/**
 * Define class that implements the abstract class and returns the native window object.
 */
class BrowserWindowRef extends WindowRef {
    constructor() {
        super();
    }
    /**
     * @returns window object
     */
    get nativeWindow() {
        return window;
    }
}
BrowserWindowRef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
BrowserWindowRef.ctorParameters = () => [];
/**
 * Create an factory function that returns the native window object.
 * @param browserWindowRef Native window object
 * @param platformId id of platform
 * @returns type of platform of empty object
 */
function windowFactory(browserWindowRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    const obj = {
        setTimeout: (func, time) => { },
        clearTimeout: (a) => { }
    };
    return obj;
}
/**
 * Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class.
 */
const browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/**
 * Create an injectable provider that uses the windowFactory function for returning the native window object.
 */
const windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
};
/**
 * Create an array of providers.
 */
const WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];

/**
 * Create a new injection token for injecting the Document into a component.
 */
const DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DocumentToken');
/**
 * Define abstract class for obtaining reference to the global Document object.
 */
class DocumentRef {
    get nativeDocument() {
        throw new Error('Not implemented.');
    }
}
/**
 * Define class that implements the abstract class and returns the native Document object.
 */
class BrowserDocumentRef extends DocumentRef {
    constructor() {
        super();
    }
    /**
     * @returns Document object
     */
    get nativeDocument() {
        return document;
    }
}
BrowserDocumentRef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
BrowserDocumentRef.ctorParameters = () => [];
/**
 * Create an factory function that returns the native Document object.
 * @param browserDocumentRef Native Document object
 * @param platformId id of platform
 * @returns type of platform of empty object
 */
function documentFactory(browserDocumentRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
        return browserDocumentRef.nativeDocument;
    }
    const doc = {
        hidden: false,
        visibilityState: 'visible'
    };
    return doc;
}
/**
 * Create a injectable provider for the DocumentRef token that uses the BrowserDocumentRef class.
 */
const browserDocumentProvider = {
    provide: DocumentRef,
    useClass: BrowserDocumentRef
};
/**
 * Create an injectable provider that uses the DocumentFactory function for returning the native Document object.
 */
const documentProvider = {
    provide: DOCUMENT,
    useFactory: documentFactory,
    deps: [DocumentRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
};
/**
 * Create an array of providers.
 */
const DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];

class AutoplayService {
    constructor(carouselService, winRef, docRef, ngZone) {
        this.carouselService = carouselService;
        this.ngZone = ngZone;
        /**
         * The autoplay timeout.
         */
        this._timeout = null;
        /**
         * Indicates whenever the autoplay is paused.
         */
        this._paused = false;
        /**
         * Shows whether the autoplay is paused for unlimited time by the developer.
         * Use to prevent autoplaying in case of firing `mouseleave` by adding layers to `<body>` like `mat-menu` does
         */
        this._isAutoplayStopped = false;
        this.winRef = winRef;
        this.docRef = docRef;
        this.spyDataStreams();
    }
    get isAutoplayStopped() {
        return this._isAutoplayStopped;
    }
    set isAutoplayStopped(value) {
        this._isAutoplayStopped = value;
    }
    ngOnDestroy() {
        this.autoplaySubscription.unsubscribe();
    }
    /**
     * Defines Observables which service must observe
     */
    spyDataStreams() {
        const initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            if (this.carouselService.settings.autoplay) {
                this.play();
            }
        }));
        const changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            this._handleChangeObservable(data);
        }));
        const resized$ = this.carouselService.getResizedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            if (this.carouselService.settings.autoplay && !this._isAutoplayStopped) {
                this.play();
            }
            else {
                this.stop();
            }
        }));
        // original Autoplay Plugin has listeners on play.owl.core and stop.owl.core events.
        // They are triggered by Video Plugin
        const autoplayMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changedSettings$, resized$);
        this.autoplaySubscription = autoplayMerge$.subscribe(() => { });
    }
    /**
       * Starts the autoplay.
       * @param timeout The interval before the next animation starts.
       * @param speed The animation speed for the animations.
       */
    play(timeout, speed) {
        if (this._paused) {
            this._paused = false;
            this._setAutoPlayInterval(this.carouselService.settings.autoplayMouseleaveTimeout);
        }
        if (this.carouselService.is('rotating')) {
            return;
        }
        this.carouselService.enter('rotating');
        this._setAutoPlayInterval();
    }
    ;
    /**
       * Gets a new timeout
       * @param timeout - The interval before the next animation starts.
       * @param speed - The animation speed for the animations.
       * @return
       */
    _getNextTimeout(timeout, speed) {
        if (this._timeout) {
            this.winRef.clearTimeout(this._timeout);
        }
        this._isArtificialAutoplayTimeout = timeout ? true : false;
        return this.ngZone.runOutsideAngular(() => {
            return this.winRef.setTimeout(() => {
                this.ngZone.run(() => {
                    if (this._paused || this.carouselService.is('busy') || this.carouselService.is('interacting') || this.docRef.hidden) {
                        return;
                    }
                    this.carouselService.next(speed || this.carouselService.settings.autoplaySpeed);
                });
            }, timeout || this.carouselService.settings.autoplayTimeout);
        });
    }
    ;
    /**
       * Sets autoplay in motion.
       */
    _setAutoPlayInterval(timeout) {
        this._timeout = this._getNextTimeout(timeout);
    }
    ;
    /**
     * Stops the autoplay.
     */
    stop() {
        if (!this.carouselService.is('rotating')) {
            return;
        }
        this._paused = true;
        this.winRef.clearTimeout(this._timeout);
        this.carouselService.leave('rotating');
    }
    ;
    /**
       * Stops the autoplay.
       */
    pause() {
        if (!this.carouselService.is('rotating')) {
            return;
        }
        this._paused = true;
    }
    ;
    /**
     * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
     * @param data object with current position of carousel and type of change
     */
    _handleChangeObservable(data) {
        if (data.property.name === 'settings') {
            if (this.carouselService.settings.autoplay) {
                this.play();
            }
            else {
                this.stop();
            }
        }
        else if (data.property.name === 'position') {
            //console.log('play?', e);
            if (this.carouselService.settings.autoplay) {
                this._setAutoPlayInterval();
            }
        }
    }
    /**
     * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
     */
    _playAfterTranslated() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('translated').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(data => this.carouselService.getTranslatedState()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(() => this._isArtificialAutoplayTimeout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this._setAutoPlayInterval())).subscribe(() => { });
    }
    /**
     * Starts pausing
     */
    startPausing() {
        if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.pause();
        }
    }
    /**
     * Starts playing after mouse leaves carousel
     */
    startPlayingMouseLeave() {
        if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.play();
            this._playAfterTranslated();
        }
    }
    /**
     * Starts playing after touch ends
     */
    startPlayingTouchEnd() {
        if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.play();
            this._playAfterTranslated();
        }
    }
}
AutoplayService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
AutoplayService.ctorParameters = () => [
    { type: CarouselService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [WINDOW,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [DOCUMENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];

class LazyLoadService {
    constructor(carouselService) {
        this.carouselService = carouselService;
        this.spyDataStreams();
    }
    ngOnDestroy() {
        this.lazyLoadSubscription.unsubscribe();
    }
    /**
     * Defines Observables which service must observe
     */
    spyDataStreams() {
        const initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            const isLazyLoad = this.carouselService.settings && !this.carouselService.settings.lazyLoad;
            this.carouselService.slidesData.forEach(item => item.load = isLazyLoad ? true : false);
        }));
        const changeSettings$ = this.carouselService.getChangeState();
        const resizedCarousel$ = this.carouselService.getResizedState();
        const lazyLoadMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => this._defineLazyLoadSlides(data)));
        this.lazyLoadSubscription = lazyLoadMerge$.subscribe(() => { });
    }
    _defineLazyLoadSlides(data) {
        if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
            return;
        }
        if ((data.property && data.property.name === 'position') || data === 'initialized' || data === "resized") {
            const settings = this.carouselService.settings, clones = this.carouselService.clones().length;
            let n = (settings.center && Math.ceil(settings.items / 2) || settings.items), i = ((settings.center && n * -1) || 0), position = (data.property && data.property.value !== undefined ? data.property.value : this.carouselService.current()) + i;
            // load = $.proxy(function(i, v) { this.load(v) }, this);
            //TODO: Need documentation for this new option
            if (settings.lazyLoadEager > 0) {
                n += settings.lazyLoadEager;
                // If the carousel is looping also preload images that are to the "left"
                if (settings.loop) {
                    position -= settings.lazyLoadEager;
                    n++;
                }
            }
            while (i++ < n) {
                this._load(clones / 2 + this.carouselService.relative(position));
                if (clones) {
                    this.carouselService.clones(this.carouselService.relative(position)).forEach(value => this._load(value));
                }
                position++;
            }
        }
    }
    /**
       * Loads all resources of an item at the specified position.
       * @param position - The absolute position of the item.
       */
    _load(position) {
        if (this.carouselService.slidesData[position].load) {
            return;
        }
        this.carouselService.slidesData[position].load = true;
    }
}
LazyLoadService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
LazyLoadService.ctorParameters = () => [
    { type: CarouselService }
];

class AnimateService {
    constructor(carouselService) {
        this.carouselService = carouselService;
        /**
         * s
         */
        this.swapping = true;
        /**
         * active slide before translating
         */
        this.previous = undefined;
        /**
         * new active slide after translating
         */
        this.next = undefined;
        this.spyDataStreams();
    }
    ngOnDestroy() {
        this.animateSubscription.unsubscribe();
    }
    /**
     * Defines Observables which service must observe
     */
    spyDataStreams() {
        const changeSettings$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (data.property.name === 'position') {
                this.previous = this.carouselService.current();
                this.next = data.property.value;
            }
        }));
        const dragCarousel$ = this.carouselService.getDragState();
        const draggedCarousel$ = this.carouselService.getDraggedState();
        const translatedCarousel$ = this.carouselService.getTranslatedState();
        const dragTranslatedMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => this.swapping = data === 'translated'));
        const translateCarousel$ = this.carouselService.getTranslateState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (this.swapping && (this.carouselService._options.animateOut || this.carouselService._options.animateIn)) {
                this._swap();
            }
        }));
        const animateMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
        this.animateSubscription = animateMerge$.subscribe(() => { });
    }
    /**
       * Toggles the animation classes whenever an translations starts.
       * @returns
       */
    _swap() {
        if (this.carouselService.settings.items !== 1) {
            return;
        }
        // if (!$.support.animation || !$.support.transition) {
        // 	return;
        // }
        this.carouselService.speed(0);
        let left;
        const previous = this.carouselService.slidesData[this.previous], next = this.carouselService.slidesData[this.next], incoming = this.carouselService.settings.animateIn, outgoing = this.carouselService.settings.animateOut;
        if (this.carouselService.current() === this.previous) {
            return;
        }
        if (outgoing) {
            left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
            this.carouselService.slidesData.forEach(slide => {
                if (slide.id === previous.id) {
                    slide.left = `${left}px`;
                    slide.isAnimated = true;
                    slide.isDefAnimatedOut = true;
                    slide.isCustomAnimatedOut = true;
                }
            });
        }
        if (incoming) {
            this.carouselService.slidesData.forEach(slide => {
                if (slide.id === next.id) {
                    slide.isAnimated = true;
                    slide.isDefAnimatedIn = true;
                    slide.isCustomAnimatedIn = true;
                }
            });
        }
    }
    ;
    /**
     * Handles the end of 'animationend' event
     * @param id Id of slides
     */
    clear(id) {
        this.carouselService.slidesData.forEach(slide => {
            if (slide.id === id) {
                slide.left = '';
                slide.isAnimated = false;
                slide.isDefAnimatedOut = false;
                slide.isCustomAnimatedOut = false;
                slide.isDefAnimatedIn = false;
                slide.isCustomAnimatedIn = false;
                slide.classes = this.carouselService.setCurSlideClasses(slide);
            }
        });
        this.carouselService.onTransitionEnd();
    }
    ;
}
AnimateService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
AnimateService.ctorParameters = () => [
    { type: CarouselService }
];

class AutoHeightService {
    constructor(carouselService) {
        this.carouselService = carouselService;
        this.spyDataStreams();
    }
    ngOnDestroy() {
        this.autoHeightSubscription.unsubscribe();
    }
    /**
     * Defines Observables which service must observe
     */
    spyDataStreams() {
        const initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (this.carouselService.settings.autoHeight) {
                this.update();
            }
            else {
                this.carouselService.slidesData.forEach(slide => slide.heightState = 'full');
            }
        }));
        const changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (this.carouselService.settings.autoHeight && data.property.name === 'position') {
                this.update();
            }
        }));
        const refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (this.carouselService.settings.autoHeight) {
                this.update();
            }
        }));
        const autoHeight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
        this.autoHeightSubscription = autoHeight$.subscribe(() => { });
    }
    /**
     * Updates the prop 'heightState' of slides
     */
    update() {
        const items = this.carouselService.settings.items;
        let start = this.carouselService.current(), end = start + items;
        if (this.carouselService.settings.center) {
            start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
            end = items % 2 === 1 ? start + items : start + items + 1;
        }
        this.carouselService.slidesData.forEach((slide, i) => {
            slide.heightState = (i >= start && i < end) ? 'full' : 'nulled';
        });
    }
}
AutoHeightService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
AutoHeightService.ctorParameters = () => [
    { type: CarouselService }
];

class HashService {
    constructor(carouselService, route, router) {
        this.carouselService = carouselService;
        this.route = route;
        this.router = router;
        this.spyDataStreams();
        if (!this.route) {
            this.route = {
                fragment: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('no route').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            };
        }
        ;
        if (!this.router) {
            this.router = {
                navigate: (commands, extras) => { return; }
            };
        }
    }
    ngOnDestroy() {
        this.hashSubscription.unsubscribe();
    }
    /**
     * Defines Observables which service must observe
     */
    spyDataStreams() {
        const initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.listenToRoute()));
        const changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (this.carouselService.settings.URLhashListener && data.property.name === 'position') {
                const newCurSlide = this.carouselService.current();
                const newCurFragment = this.carouselService.slidesData[newCurSlide].hashFragment;
                if (!newCurFragment || newCurFragment === this.currentHashFragment) {
                    return;
                }
                this.router.navigate(['./'], { fragment: newCurFragment, relativeTo: this.route });
            }
        }));
        const hashFragment$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changedSettings$);
        this.hashSubscription = hashFragment$.subscribe(() => { });
    }
    /**
     * rewinds carousel to slide which has the same hashFragment as fragment of current url
     * @param fragment fragment of url
     */
    rewind(fragment) {
        const position = this.carouselService.slidesData.findIndex(slide => slide.hashFragment === fragment && slide.isCloned === false);
        if (position === -1 || position === this.carouselService.current()) {
            return;
        }
        this.carouselService.to(this.carouselService.relative(position), false);
    }
    /**
     * Initiate listening to ActivatedRoute.fragment
     */
    listenToRoute() {
        const count = this.carouselService.settings.startPosition === 'URLHash' ? 0 : 2;
        this.route.fragment.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skip"])(count))
            .subscribe(fragment => {
            this.currentHashFragment = fragment;
            this.rewind(fragment);
        });
    }
}
HashService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
HashService.ctorParameters = () => [
    { type: CarouselService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];

let nextId = 0;
class CarouselSlideDirective {
    constructor(tplRef) {
        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */
        this.id = `owl-slide-${nextId++}`;
        /**
         * Defines how much widths of common slide will current slide have
         * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
         */
        this._dataMerge = 1;
        /**
         * Width of slide
         */
        this.width = 0;
        /**
         * Inner content of dot for certain slide; can be html-markup
         */
        this.dotContent = '';
        /**
         * Hash (fragment) of url which corresponds to certain slide
         */
        this.dataHash = '';
    }
    set dataMerge(data) {
        this._dataMerge = this.isNumeric(data) ? data : 1;
    }
    ;
    get dataMerge() { return this._dataMerge; }
    /**
       * Determines if the input is a Number or something that can be coerced to a Number
       * @param - The input to be tested
       * @returns - An indication if the input is a Number or can be coerced to a Number
       */
    isNumeric(number) {
        return !isNaN(parseFloat(number));
    }
}
CarouselSlideDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[carouselSlide]' },] }
];
CarouselSlideDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
CarouselSlideDirective.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dataMerge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dotContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dataHash: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * Data which will be passed out after ending of transition of carousel
 */
class SlidesOutputData {
}
;
class CarouselComponent {
    constructor(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
        this.el = el;
        this.resizeService = resizeService;
        this.carouselService = carouselService;
        this.navigationService = navigationService;
        this.autoplayService = autoplayService;
        this.lazyLoadService = lazyLoadService;
        this.animateService = animateService;
        this.autoHeightService = autoHeightService;
        this.hashService = hashService;
        this.logger = logger;
        this.changeDetectorRef = changeDetectorRef;
        this.translated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           *  Data of every slide
           */
        this.slidesData = [];
        /**
         * Shows whether carousel is loaded of not.
         */
        this.carouselLoaded = false;
        this.docRef = docRef;
    }
    onVisibilityChange(ev) {
        if (!this.carouselService.settings.autoplay)
            return;
        switch (this.docRef.visibilityState) {
            case 'visible':
                !this.autoplayService.isAutoplayStopped && this.autoplayService.play();
                break;
            case 'hidden':
                this.autoplayService.pause();
                break;
            default:
                break;
        }
    }
    ;
    ngOnInit() {
        this.spyDataStreams();
        this.carouselWindowWidth = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
    }
    ngOnChanges() {
        var _a;
        if (this.prevOptions !== this.options) {
            if (this.prevOptions && ((_a = this.slides) === null || _a === void 0 ? void 0 : _a.toArray().length)) {
                this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
                this.carouselService.initialize(this.slides.toArray());
            }
            else {
                this.carouselLoaded = false;
                this.logger.log(`There are no slides to show. So the carousel won't be re-rendered`);
            }
            this.prevOptions = this.options;
        }
    }
    ngAfterContentInit() {
        if (this.slides.toArray().length) {
            this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
            this.carouselService.initialize(this.slides.toArray());
            this._winResizeWatcher();
        }
        else {
            this.logger.log(`There are no slides to show. So the carousel won't be rendered`);
        }
        this._slidesChangesSubscription = this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((slides) => {
            if (slides.toArray().length) {
                // this.carouselService.setItems(slides.toArray());
                this.carouselService.setup(this.carouselWindowWidth, slides.toArray(), this.options);
                this.carouselService.initialize(slides.toArray());
            }
            else {
                this.carouselLoaded = false;
                this.logger.log(`There are no slides to show. So the carousel won't be re-rendered`);
            }
        })).subscribe(() => { });
    }
    ngOnDestroy() {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
        if (this._slidesChangesSubscription) {
            this._slidesChangesSubscription.unsubscribe();
        }
        if (this._allObservSubscription) {
            this._allObservSubscription.unsubscribe();
        }
    }
    /**
     * Joins the observable login in one place: sets values to some observables, merges this observables and
     * subcribes to merge func
     */
    spyDataStreams() {
        this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            this.owlDOMData = data.owlDOMData;
            this.stageData = data.stageData;
            this.slidesData = data.slidesData;
            if (!this.carouselLoaded) {
                this.carouselLoaded = true;
            }
            this.navData = data.navData;
            this.dotsData = data.dotsData;
            this.changeDetectorRef.markForCheck();
        }));
        this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.gatherTranslatedData();
            this.initialized.emit(this.slidesOutputData);
            // this.slidesOutputData = {};
        }));
        this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.gatherTranslatedData();
            this.translated.emit(this.slidesOutputData);
            // this.slidesOutputData = {};
        }));
        this._changeCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.gatherTranslatedData();
            this.change.emit(this.slidesOutputData);
            // this.slidesOutputData = {};
        }));
        this._changedCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(value => {
            const changedPosition = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(() => value.property.name === 'position'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.slidesData)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skip"])(value.property.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(this.carouselService.settings.items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(slide => {
                const clonedIdPrefix = this.carouselService.clonedIdPrefix;
                const id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
                return Object.assign(Object.assign({}, slide), { id: id, isActive: true });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(slides => {
                return {
                    slides: slides,
                    startPosition: this.carouselService.relative(value.property.value)
                };
            }));
            // const changedSetting: Observable<SlidesOutputData> = of(value).pipe(
            //   filter(() => value.property.name === 'settings'),
            //   map(() => {
            //     return {
            //       slides: [],
            //       startPosition: this.carouselService.relative(value.property.value)
            //     }
            //   })
            // )
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(changedPosition);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(slidesData => {
            this.gatherTranslatedData();
            this.changed.emit(slidesData.slides.length ? slidesData : this.slidesOutputData);
            // console.log(this.slidesOutputData);
            // this.slidesOutputData = {};
        }));
        this._draggingCarousel$ = this.carouselService.getDragState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.gatherTranslatedData();
            this.dragging.emit({ dragging: true, data: this.slidesOutputData });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.carouselService.getDraggedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => !!this.carouselService.is('animating')))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(anim => {
            if (anim) {
                return this.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])());
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('not animating');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.dragging.emit({ dragging: false, data: this.slidesOutputData });
        }));
        this._carouselMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$);
        this._allObservSubscription = this._carouselMerge$.subscribe(() => { });
    }
    /**
     * Init subscription to resize event and attaches handler for this event
     */
    _winResizeWatcher() {
        if (Object.keys(this.carouselService._options.responsive).length) {
            this.resizeSubscription = this.resizeService.onResize$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(() => this.carouselWindowWidth !== this.el.nativeElement.querySelector('.owl-carousel').clientWidth), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(this.carouselService.settings.responsiveRefreshRate))
                .subscribe(() => {
                this.carouselService.onResize(this.el.nativeElement.querySelector('.owl-carousel').clientWidth);
                this.carouselWindowWidth = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            });
        }
    }
    /**
     * Handler for transitioend event
     */
    onTransitionEnd() {
        this.carouselService.onTransitionEnd();
    }
    /**
     * Handler for click event, attached to next button
     */
    next() {
        if (!this.carouselLoaded)
            return;
        this.navigationService.next(this.carouselService.settings.navSpeed);
    }
    /**
     * Handler for click event, attached to prev button
     */
    prev() {
        if (!this.carouselLoaded)
            return;
        this.navigationService.prev(this.carouselService.settings.navSpeed);
    }
    /**
     * Handler for click event, attached to dots
     */
    moveByDot(dotId) {
        if (!this.carouselLoaded)
            return;
        this.navigationService.moveByDot(dotId);
    }
    /**
     * rewinds carousel to slide with needed id
     * @param id fragment of url
     */
    to(id) {
        // if (!this.carouselLoaded || ((this.navData && this.navData.disabled) && (this.dotsData && this.dotsData.disabled))) return;
        if (!this.carouselLoaded)
            return;
        this.navigationService.toSlideById(id);
    }
    /**
     * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
     */
    gatherTranslatedData() {
        let startPosition;
        const clonedIdPrefix = this.carouselService.clonedIdPrefix;
        const activeSlides = this.slidesData
            .filter(slide => slide.isActive === true)
            .map(slide => {
            const id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
            return {
                id: id,
                width: slide.width,
                marginL: slide.marginL,
                marginR: slide.marginR,
                center: slide.isCentered
            };
        });
        startPosition = this.carouselService.relative(this.carouselService.current());
        this.slidesOutputData = {
            startPosition: startPosition,
            slides: activeSlides
        };
    }
    /**
     * Starts pausing
     */
    startPausing() {
        this.autoplayService.startPausing();
    }
    /**
     * Starts playing after mouse leaves carousel
     */
    startPlayML() {
        this.autoplayService.startPlayingMouseLeave();
    }
    /**
     * Starts playing after touch ends
     */
    startPlayTE() {
        this.autoplayService.startPlayingTouchEnd();
    }
    stopAutoplay() {
        this.autoplayService.isAutoplayStopped = true;
        this.autoplayService.stop();
    }
    startAutoplay() {
        this.autoplayService.isAutoplayStopped = false;
        this.autoplayService.play();
    }
}
CarouselComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'owl-carousel-o',
                template: `
    <div class="owl-carousel owl-theme" #owlCarousel
      [ngClass]="{'owl-rtl': owlDOMData?.rtl,
                  'owl-loaded': owlDOMData?.isLoaded,
                  'owl-responsive': owlDOMData?.isResponsive,
                  'owl-drag': owlDOMData?.isMouseDragable,
                  'owl-grab': owlDOMData?.isGrab}"
      (mouseover)="startPausing()"
      (mouseleave)="startPlayML()"
      (touchstart)="startPausing()"
      (touchend)="startPlayTE()">

      <div *ngIf="carouselLoaded" class="owl-stage-outer">
        <owl-stage [owlDraggable]="{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}"
                    [stageData]="stageData"
                    [slidesData]="slidesData"></owl-stage>
      </div> <!-- /.owl-stage-outer -->
      <ng-container *ngIf="slides.toArray().length">
        <div class="owl-nav" [ngClass]="{'disabled': navData?.disabled}">
          <div class="owl-prev" [ngClass]="{'disabled': navData?.prev?.disabled}" (click)="prev()" [innerHTML]="navData?.prev?.htmlText"></div>
          <div class="owl-next" [ngClass]="{'disabled': navData?.next?.disabled}" (click)="next()" [innerHTML]="navData?.next?.htmlText"></div>
        </div> <!-- /.owl-nav -->
        <div class="owl-dots" [ngClass]="{'disabled': dotsData?.disabled}">
          <div *ngFor="let dot of dotsData?.dots" class="owl-dot" [ngClass]="{'active': dot.active, 'owl-dot-text': dot.showInnerContent}" (click)="moveByDot(dot.id)">
            <span [innerHTML]="dot.innerContent"></span>
          </div>
        </div> <!-- /.owl-dots -->
      </ng-container>
    </div> <!-- /.owl-carousel owl-loaded -->
  `,
                providers: [
                    NavigationService,
                    AutoplayService,
                    CarouselService,
                    LazyLoadService,
                    AnimateService,
                    AutoHeightService,
                    HashService
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [`.owl-theme { display: block; }`]
            },] }
];
CarouselComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: ResizeService },
    { type: CarouselService },
    { type: NavigationService },
    { type: AutoplayService },
    { type: LazyLoadService },
    { type: AnimateService },
    { type: AutoHeightService },
    { type: HashService },
    { type: OwlLogger },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [DOCUMENT,] }] }
];
CarouselComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CarouselSlideDirective,] }],
    translated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    changed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    initialized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onVisibilityChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:visibilitychange', ['$event'],] }]
};

class StageComponent {
    constructor(zone, el, renderer, carouselService, animateService) {
        this.zone = zone;
        this.el = el;
        this.renderer = renderer;
        this.carouselService = carouselService;
        this.animateService = animateService;
        /**
         * Object with data needed for dragging
         */
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null,
            active: false,
            moving: false
        };
        /**
         * Subject for notification when the carousel's rebuilding caused by resize event starts
         */
        this._oneDragMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.preparePublicSlide = (slide) => {
            const newSlide = Object.assign({}, slide);
            delete newSlide.tplRef;
            return newSlide;
        };
        /**
         * Passes this to _oneMouseTouchMove();
         */
        this.bindOneMouseTouchMove = (ev) => {
            this._oneMouseTouchMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */
        this.bindOnDragMove = (ev) => {
            this._onDragMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */
        this.bindOnDragEnd = (ev) => {
            // this.zone.run(() => {
            this._onDragEnd(ev);
            // });
        };
        /**
         * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
         */
        this._oneClickHandler = () => {
            this.listenerOneClick = this.renderer.listen(this._drag.target, 'click', () => false);
            this.listenerOneClick();
        };
    }
    onMouseDown(event) {
        if (this.owlDraggable.isMouseDragable) {
            this._onDragStart(event);
        }
    }
    onTouchStart(event) {
        if (event.targetTouches.length >= 2) {
            return false;
        }
        if (this.owlDraggable.isTouchDragable) {
            this._onDragStart(event);
        }
    }
    onTouchCancel(event) {
        this._onDragEnd(event);
    }
    onDragStart() {
        if (this.owlDraggable.isMouseDragable) {
            return false;
        }
    }
    onSelectStart() {
        if (this.owlDraggable.isMouseDragable) {
            return false;
        }
    }
    ngOnInit() {
        this._oneMoveSubsription = this._oneDragMove$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(() => {
            this._sendChanges();
        });
    }
    ngOnDestroy() {
        this._oneMoveSubsription.unsubscribe();
    }
    /**
       * Handles `touchstart` and `mousedown` events.
       * @todo Horizontal swipe threshold as option
       * @todo #261
       * @param event - The event arguments.
       */
    _onDragStart(event) {
        let stage = null;
        if (event.which === 3) {
            return;
        }
        stage = this._prepareDragging(event);
        this._drag.time = new Date().getTime();
        this._drag.target = event.target;
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this._pointer(event);
        this.listenerMouseUp = this.renderer.listen(document, 'mouseup', this.bindOnDragEnd);
        this.listenerTouchEnd = this.renderer.listen(document, 'touchend', this.bindOnDragEnd);
        this.zone.runOutsideAngular(() => {
            this.listenerOneMouseMove = this.renderer.listen(document, 'mousemove', this.bindOneMouseTouchMove);
            this.listenerOneTouchMove = this.renderer.listen(document, 'touchmove', this.bindOneMouseTouchMove);
        });
    }
    /**
     * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
     * @param event event objech of mouse or touch event
     */
    _oneMouseTouchMove(event) {
        const delta = this._difference(this._drag.pointer, this._pointer(event));
        if (this.listenerATag) {
            this.listenerATag();
        }
        if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is('valid')) {
            return;
        }
        if ((Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y)) && this._is('valid')) {
            return;
        }
        this.listenerOneMouseMove();
        this.listenerOneTouchMove();
        this._drag.moving = true;
        this.blockClickAnchorInDragging(event);
        this.listenerMouseMove = this.renderer.listen(document, 'mousemove', this.bindOnDragMove);
        this.listenerTouchMove = this.renderer.listen(document, 'touchmove', this.bindOnDragMove);
        event.preventDefault();
        this._enterDragging();
        this._oneDragMove$.next(event);
        // this._sendChanges();
    }
    /**
     * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
     * @param event event object
     */
    blockClickAnchorInDragging(event) {
        let target = event.target;
        while (target && !(target instanceof HTMLAnchorElement)) {
            target = target.parentElement;
        }
        if (target instanceof HTMLAnchorElement) {
            this.listenerATag = this.renderer.listen(target, 'click', () => false);
        }
    }
    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @param event - The event arguments.
     */
    _onDragMove(event) {
        let stage;
        const stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);
        if (stageOrExit === false) {
            return;
        }
        stage = stageOrExit;
        event.preventDefault();
        this._drag.stage.current = stage;
        this._animate(stage.x - this._drag.stage.start.x);
    }
    ;
    /**
     * Moves .owl-stage left-right
     * @param coordinate coordinate to be set to .owl-stage
     */
    _animate(coordinate) {
        this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', `translate3d(${coordinate}px,0px,0px`);
        this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', '0s');
    }
    /**
       * Handles the `touchend` and `mouseup` events.
       * @todo #261
       * @todo Threshold for click event
       * @param event - The event arguments.
       */
    _onDragEnd(event) {
        this.carouselService.owlDOMData.isGrab = false;
        this.listenerOneMouseMove();
        this.listenerOneTouchMove();
        if (this._drag.moving) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', ``);
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1000 + 's');
            this._finishDragging(event);
            this.listenerMouseMove();
            this.listenerTouchMove();
        }
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null,
            active: false,
            moving: false
        };
        // this.carouselService.trigger('dragged');
        this.listenerMouseUp();
        this.listenerTouchEnd();
    }
    ;
    /**
       * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
       * @param event - The event arguments.
       * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
       */
    _prepareDragging(event) {
        return this.carouselService.prepareDragging(event);
    }
    /**
     * Finishes dragging
     * @param event object event of 'mouseUp' of 'touchend' events
     */
    _finishDragging(event) {
        this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
    }
    /**
       * Gets unified pointer coordinates from event.
       * @param event The `mousedown` or `touchstart` event.
       * @returns Contains `x` and `y` coordinates of current pointer position.
       */
    _pointer(event) {
        return this.carouselService.pointer(event);
    }
    /**
       * Gets the difference of two vectors.
       * @param first The first vector.
       * @param second The second vector.
       * @returns The difference.
       */
    _difference(firstC, second) {
        return this.carouselService.difference(firstC, second);
    }
    /**
       * Checks whether the carousel is in a specific state or not.
       * @param specificState The state to check.
       * @returns The flag which indicates if the carousel is busy.
       */
    _is(specificState) {
        return this.carouselService.is(specificState);
    }
    /**
    * Enters a state.
    * @param name The state name.
    */
    _enter(name) {
        this.carouselService.enter(name);
    }
    /**
       * Sends all data needed for View.
       */
    _sendChanges() {
        this.carouselService.sendChanges();
    }
    /**
     * Handler for transitioend event
     */
    onTransitionEnd() {
        this.carouselService.onTransitionEnd();
    }
    /**
       * Enters into a 'dragging' state
       */
    _enterDragging() {
        this.carouselService.enterDragging();
    }
    /**
     * Handles the end of 'animationend' event
     * @param id Id of slides
     */
    clear(id) {
        this.animateService.clear(id);
    }
}
StageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'owl-stage',
                template: `
    <div>
      <div class="owl-stage" [ngStyle]="{'width': stageData.width + 'px',
                                        'transform': stageData.transform,
                                        'transition': stageData.transition,
                                        'padding-left': stageData.paddingL ? stageData.paddingL + 'px' : '',
                                        'padding-right': stageData.paddingR ? stageData.paddingR + 'px' : '' }"
          (transitionend)="onTransitionEnd()">
        <ng-container *ngFor="let slide of slidesData; let i = index">
          <div class="owl-item" [ngClass]="slide.classes"
                                [ngStyle]="{'width': slide.width + 'px',
                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',
                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',
                                            'left': slide.left}"
                                (animationend)="clear(slide.id)"
                                [@autoHeight]="slide.heightState">
            <ng-template *ngIf="slide.load" [ngTemplateOutlet]="slide.tplRef" [ngTemplateOutletContext]="{ $implicit: preparePublicSlide(slide), index: i }"></ng-template>
          </div><!-- /.owl-item -->
        </ng-container>
      </div><!-- /.owl-stage -->
    </div>
  `,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('autoHeight', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('nulled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('full => nulled', [
                            // style({height: '*'}),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('700ms 350ms')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('nulled => full', [
                            // style({height: 0}),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(350)
                        ]),
                    ])
                ]
            },] }
];
StageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: CarouselService },
    { type: AnimateService }
];
StageComponent.propDecorators = {
    owlDraggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    stageData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    slidesData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
    onTouchStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['touchstart', ['$event'],] }],
    onTouchCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['touchcancel', ['$event'],] }],
    onDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragstart',] }],
    onSelectStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['selectstart',] }]
};

class OwlRouterLinkDirective {
    constructor(router, route, tabIndex, renderer, el) {
        this.router = router;
        this.route = route;
        this.stopLink = false;
        this.commands = [];
        if (tabIndex == null) {
            renderer.setAttribute(el.nativeElement, 'tabindex', '0');
        }
    }
    set owlRouterLink(commands) {
        if (commands != null) {
            this.commands = Array.isArray(commands) ? commands : [commands];
        }
        else {
            this.commands = [];
        }
    }
    /**
     * @deprecated 4.0.0 use `queryParamsHandling` instead.
     */
    set preserveQueryParams(value) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && console && console.warn) {
            console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
        }
        this.preserve = value;
    }
    onClick() {
        const extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        if (this.stopLink) {
            return false;
        }
        this.router.navigateByUrl(this.urlTree, extras);
        return true;
    }
    get urlTree() {
        return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: attrBoolValue(this.preserveFragment)
        });
    }
}
OwlRouterLinkDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: ':not(a)[owlRouterLink]' },] }
];
OwlRouterLinkDirective.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['tabindex',] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
OwlRouterLinkDirective.propDecorators = {
    queryParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fragment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    queryParamsHandling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    preserveFragment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    skipLocationChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    replaceUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    stopLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    owlRouterLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    preserveQueryParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
/**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * See `RouterLink` for more information.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
class OwlRouterLinkWithHrefDirective {
    constructor(router, route, locationStrategy) {
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.stopLink = false;
        this.commands = [];
        this.subscription = router.events.subscribe((s) => {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                this.updateTargetUrlAndHref();
            }
        });
    }
    set owlRouterLink(commands) {
        if (commands != null) {
            this.commands = Array.isArray(commands) ? commands : [commands];
        }
        else {
            this.commands = [];
        }
    }
    set preserveQueryParams(value) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && console && console.warn) {
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
        }
        this.preserve = value;
    }
    ngOnChanges(changes) { this.updateTargetUrlAndHref(); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    onClick(button, ctrlKey, metaKey, shiftKey) {
        if (button !== 0 || ctrlKey || metaKey || shiftKey) {
            return true;
        }
        if (typeof this.target === 'string' && this.target !== '_self') {
            return true;
        }
        if (this.stopLink) {
            return false;
        }
        const extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return false;
    }
    updateTargetUrlAndHref() {
        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
    }
    get urlTree() {
        return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: attrBoolValue(this.preserveFragment)
        });
    }
}
OwlRouterLinkWithHrefDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'a[owlRouterLink]' },] }
];
OwlRouterLinkWithHrefDirective.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"] }
];
OwlRouterLinkWithHrefDirective.propDecorators = {
    target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.target',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    queryParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fragment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    queryParamsHandling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    preserveFragment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    skipLocationChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    replaceUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    stopLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"] }],
    owlRouterLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    preserveQueryParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey'],] }]
};
function attrBoolValue(s) {
    return s === '' || !!s;
}

const routes = [];
class CarouselModule {
}
CarouselModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    // BrowserAnimationsModule, // there's an issue with this import while using lazy loading of module consuming this library. I don't remove it because it could be needed during future enhancement of this lib.
                    // RouterModule.forChild(routes)
                ],
                declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
                exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
                providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
            },] }
];

class SlideModel {
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-owl-carousel-o.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/create-challenge-btn-modal/create-challenge-btn-modal.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/create-challenge-btn-modal/create-challenge-btn-modal.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\r\n\t*ngIf=\"this.userRole == 'seeker'\"\r\n\ttype=\"button\"\r\n\tdata-toggle=\"modal\"\r\n\tdata-target=\"#createChallenge\"\r\n\tclass=\"btn a-create-btn g-white-bg g-p-clr g-fw-500 g-w-100per g-pt-07 g-pb-07 a-create-chlng\"\r\n>\r\n\t<i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>\r\n\t&nbsp;Create Challenge\r\n</button>\r\n\r\n<ng-container *ngIf=\"this.userRole == 'provider'\">\r\n    <button type=\"button\" class=\"btn g-white-bg g-p-clr g-fw-500 g-w-100per g-pt-07 g-pb-07\" (click)=\"gotoUnsolicitedProposal()\"><i class=\"fa fa-plus\" aria-hidden=\"true\" ></i> &nbsp;Request For Pilot</button>\r\n</ng-container>\r\n\r\n<!-- <button *ngIf=\"this.userRole == 'provider'\" type=\"button\" class=\"btn g-white-bg g-p-clr g-fw-500 g-w-100per g-pt-07 g-pb-07 a-create-chlng\">\r\n\t<i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>\r\n\t&nbsp;Request for Pilot\r\n</button> -->\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade a-create-challenge-modal\" id=\"createChallenge\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-p-21\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-16 g-lh-19 g-fw-500 bg-blue-clr text-left\">Are you sure you want to create a challenge?</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 body-grey-clr g-pt-07 text-left\">\r\n\t\t\t\t\t\t\t\tKindly ensure your Challenge is not the same or similar to any of the existing Challenges in the platform. The Challenge will be approved only if it is unique.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<button type=\"button\" #closebutton class=\"btn g-bdrrad-7px g-bdr-005 g-black5-brdr g-fs-12 g-w-bg g-pt-02 g-pb-02 g-pl-06 g-pr-06\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-27 text-left\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-p-brdr g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04\" (click)=\"createChallenge()\">Yes, create a new challenge</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-12 g-fs-08 g-pt-04 g-pb-04 g-pl-24 g-pr-24\" (click)=\"gotoChallenge()\">Explore challenges</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover-challenge-provider/discover-challenge-provider.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover-challenge-provider/discover-challenge-provider.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-blue-bg\">\r\n\t<div class=\"container g-pt-20 g-pb-20\">\r\n\t\t<form #searchForm=\"ngForm\" (ngSubmit)=\"searchChallenge()\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-2 col-xs-4 g-pr-0\">\r\n\t\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr dropdown-toggle g-h-24 g-pl-08 g-pr-08 g-w-100per search-input\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t<span>Challenges</span>&nbsp;&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"caret\"></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['/discover/providers']\">Innovators</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['/discover/solutions']\">Solutions</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-7 col-xs-6 g-p-0\">\r\n\t\t\t\t\t<div class=\"search-box\">\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tclass=\"form-control g-bdrrad-0 g-h-24\"\r\n\t\t\t\t\t\t\tid=\"search\"\r\n\t\t\t\t\t\t\tplaceholder=\"Search for Challenges\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"post_data.search.name\"\r\n\t\t\t\t\t\t\t[ngModelOptions]=\"{ standalone: true }\"\r\n\t\t\t\t\t\t\t(ngModelChange)=\"autoComplete($event)\"\r\n\t\t\t\t\t\t\tautocomplete=\"off\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"autoSuggestions?.length > 0 && post_data.search.name.length > 3\">\r\n\t\t\t\t\t\t\t<div class=\"search-auto-complete-wrp\">\r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let suggestion of autoSuggestions\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div (click)=\"searchAutoSuggestion(suggestion)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ suggestion.length > 75 ? (suggestion | slice: 0:75) + \"..\" : suggestion }}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-1 col-xs-2 g-p-0\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-h-24 g-pl-08 g-pr-08 search-btn\">\r\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-2 text-center g-pl-0\">\r\n\t\t\t\t\t<app-create-challenge-btn-modal></app-create-challenge-btn-modal>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t<app-sector-filter (onFilterChange)=\"filterSector($event)\"></app-sector-filter>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container g-pt-30 g-pb-45\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-5 col-md-3\">\r\n\t\t\t<div class=\"g-fs-07 g-lh-08 g-fw-700 g-black6-clr\">FILTER BY</div>\r\n\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t<div class=\"panel-group l-filter-panel-grp\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\t\t\t\t\t<div class=\"panel panel-default l-filter-panel-bdr-rad-top l-filter-panel g-mt-0\">\r\n\t\t\t\t\t\t<button type=\"button\" data-parent=\"#accordion\" class=\"btn g-w-bg g-grey3-clr g-fw-600 g-w-100per g-pt-10 g-pb-10 g-fs-06\" data-toggle=\"collapse\" data-target=\"#offerings\">\r\n\t\t\t\t\t\t\t<span class=\"pull-left\">NO. OF SOLUTIONS</span>\r\n\t\t\t\t\t\t\t<span class=\"pull-right\"><i class=\"fa fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<div id=\"offerings\" class=\"collapse g-w-bg g-pl-05 g-pr-05\">\r\n\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t<div class=\"g-mt-0 g-pt-05 g-pb-05 g-mb-0\" *ngFor=\"let option of solution_options\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [id]=\"option.name\" name=\"solutions\" [value]=\"option.value\" (change)=\"solutionFilter($event)\" />\r\n\t\t\t\t\t\t\t\t\t<label [for]=\"option.name\" class=\"g-fs-07 g-grey3-clr g-fw-400 g-pl-03\">\r\n\t\t\t\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel panel-default l-filter-panel l-filter-panel-bdr g-mt-0\">\r\n\t\t\t\t\t\t<button type=\"button\" data-parent=\"#accordion\" class=\"btn g-w-bg g-grey3-clr g-fw-600 g-w-100per g-bdrrad-0 g-pt-10 g-pb-10 g-fs-06\" data-toggle=\"collapse\" data-target=\"#anchor\">\r\n\t\t\t\t\t\t\t<span class=\"pull-left\">NO. OF ANCHORS</span>\r\n\t\t\t\t\t\t\t<span class=\"pull-right\"><i class=\"fa fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<div id=\"anchor\" class=\"collapse g-w-bg g-pl-05 g-pr-05\">\r\n\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t<div class=\"g-mt-0 g-pt-05 g-pb-05 g-mb-0\" *ngFor=\"let option of anchors_options\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [id]=\"a + option.name\" name=\"anchors\" [value]=\"option.value\" (change)=\"anchorFilter($event)\" />\r\n\t\t\t\t\t\t\t\t\t<label [for]=\"a + option.name\" class=\"g-fs-07 g-grey3-clr g-fw-400 g-pl-03\">\r\n\t\t\t\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel panel-default l-filter-panel-bdr-rad-btm l-filter-panel g-mt-0\">\r\n\t\t\t\t\t\t<button type=\"button\" data-parent=\"#accordion\" class=\"btn g-w-bg g-grey3-clr g-fw-600 g-w-100per a-brdrr-bt-4px g-pt-10 g-pb-10 g-fs-06\" data-toggle=\"collapse\" data-target=\"#teamsize\">\r\n\t\t\t\t\t\t\t<span class=\"pull-left\">ANCHORED CITIES</span>\r\n\t\t\t\t\t\t\t<span class=\"pull-right\"><i class=\"fa fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<div id=\"teamsize\" class=\"collapse g-w-bg g-pl-05 g-pr-05\">\r\n\t\t\t\t\t\t\t<form class=\"l-location-frm\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let option of anchoredCities?.data\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox g-mt-0 g-pt-05 g-pb-05 g-mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 g-black10-clr sol-area-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [value]=\"option.id\" class=\"sol-area-checkbox\" (change)=\"filterSmartCity($event)\" />\r\n\t\t\t\t\t\t\t\t\t\t\t{{ option.name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-7 col-md-9\">\r\n\t\t\t<div class=\"row g-pb-10\">\r\n\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!searchLoader\">\r\n\t\t\t\t\t\t<div class=\"g-fs-075 g-fw-500\">\r\n\t\t\t\t\t\t\t<span class=\"g-grey5-clr\">Showing </span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ challenges?.currently_showing.from }}-{{ challenges?.currently_showing.to }} </span>\r\n\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t<span class=\"g-black7-clr\">{{ challenges?.total_records }}</span\r\n\t\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Results</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-6 g-pr-0\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t<select class=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\" name=\"sort_value\" [(ngModel)]=\"sort_value\" (change)=\"sort($event)\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of sort_by_values\" [value]=\"option.value\">\r\n\t\t\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"search-results-wrp\">\r\n\t\t\t\t<div class=\"search-results-area\" *ngIf=\"!searchLoader\">\r\n\t\t\t\t\t<div *ngFor=\"let challenge of challenges?.data\">\r\n\t\t\t\t\t\t<div *ngIf=\"challenge.uns_proposal == '0'\" class=\"panel solution-card g-pt-13 g-pb-12 g-pl-13 g-pr-13 g-w-bg g-bdr-01 g-brdr-grey g-bdrrad-5px\" [routerLink]=\"['/challenge', challenge.id]\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<div class=\"panel-body g-p-0\" >\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-black7-clr cnt1\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ challenge.challenge_name.length > 60 ? (challenge.challenge_name | slice: 0:60) + \"..\" : challenge.challenge_name }}\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-400 g-black8-clr g-black8-clr\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ challenge.sector_name }}\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-14 g-fw-700 g-grey4-clr text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ challenge.anchors }}\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 text-center g-p-clr\">Anchors</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-14 g-fw-700 g-grey4-clr text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ challenge.solutions }}\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 text-center g-p-clr\">Solutions</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"skeleton-loader-wrp\" *ngIf=\"searchLoader\">\r\n\t\t\t\t\t<div class=\"panel g-pt-13 g-pb-12 g-pl-13 g-pr-13 g-w-bg g-bdr-01 g-brdr-grey g-bdrrad-5px\" *ngFor=\"let item of [].constructor(10)\">\r\n\t\t\t\t\t\t<div class=\"panel-body g-p-0\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\t\t\twidth: '75%'\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\t\twidth: '30%'\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-center\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\tanimation=\"false\"\r\n\t\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\theight: '35px',\r\n\t\t\t\t\t\t\t\t\t\t\twidth: '45px',\r\n\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\tanimation=\"false\"\r\n\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t'border-radius': '0',\r\n\t\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\t\twidth: '70%',\r\n\t\t\t\t\t\t\t\t\t\t\tdisplay: 'block',\r\n\t\t\t\t\t\t\t\t\t\t\tmargin: '5px auto'\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-center\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\tanimation=\"false\"\r\n\t\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\theight: '35px',\r\n\t\t\t\t\t\t\t\t\t\t\twidth: '45px',\r\n\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\tanimation=\"false\"\r\n\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\t\twidth: '70%',\r\n\t\t\t\t\t\t\t\t\t\t\tdisplay: 'block',\r\n\t\t\t\t\t\t\t\t\t\t\tmargin: '5px auto'\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"no-results-wrp\" *ngIf=\"!searchLoader && challenges?.data.length == 0\">\r\n\t\t\t\t\t<div class=\"no-results-txt g-fw-500 g-black7-clr\">No results found</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row g-pt-10\">\r\n\t\t\t\t<div class=\"col-sm-12 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"challenges?.total_records\" [pageSize]=\"10\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover-offerings/discover-offerings.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover-offerings/discover-offerings.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<div class=\"bg-blue-bg\">\r\n\t\t<div class=\"container g-pt-20 g-pb-20\">\r\n\t\t\t<form #searchForm=\"ngForm\" (ngSubmit)=\"searchSolutions()\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-2 col-xs-4 g-pr-0\">\r\n\t\t\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr dropdown-toggle g-h-24 g-pl-08 g-pr-08 g-w-100per search-input\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t\t<span>Solutions</span>&nbsp;&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t<span class=\"caret\"></span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/discover/challenges']\">Challenges</a></li>\r\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/discover/providers']\">Innovators</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-7 col-xs-7 g-p-0\">\r\n\t\t\t\t\t\t<div class=\"search-box\">\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control g-bdrrad-0 g-h-24\"\r\n\t\t\t\t\t\t\t\tid=\"search\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Search for Solutions\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"query.search.name\"\r\n\t\t\t\t\t\t\t\t[ngModelOptions]=\"{ standalone: true }\"\r\n\t\t\t\t\t\t\t\t(ngModelChange)=\"autoComplete($event)\"\r\n\t\t\t\t\t\t\t\tautocomplete=\"off\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"autoSuggestions?.length > 0 && query.search.name.length > 3\">\r\n\t\t\t\t\t\t\t\t<div class=\"search-auto-complete-wrp\">\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let suggestion of autoSuggestions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div (click)=\"searchAutoSuggestion(suggestion)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ suggestion.length > 75 ? (suggestion | slice: 0:75) + \"..\" : suggestion }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-1 col-xs-2 g-p-0\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-h-24 g-pl-08 g-pr-08 search-btn\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 text-center g-pl-0\">\r\n\t\t\t\t\t\t<app-create-challenge-btn-modal></app-create-challenge-btn-modal>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<app-sector-filter (onFilterChange)=\"filterSector($event)\"></app-sector-filter>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"container g-pt-30 g-pb-20\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-12 col-md-3\">\r\n\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-fw-700 g-black6-clr\">FILTER BY</div>\r\n\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t<div class=\"panel-group l-filter-panel-grp\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\t\t\t\t\t\t<div class=\"panel panel-default l-filter-panel-bdr-rad-top l-filter-panel g-mt-0\">\r\n\t\t\t\t\t\t\t<button type=\"button\" data-parent=\"#accordion\" class=\"btn g-w-bg g-grey3-clr g-fw-600 g-w-100per g-pt-10 g-pb-10 g-fs-06\" data-toggle=\"collapse\" data-target=\"#solutionmaturity\">\r\n\t\t\t\t\t\t\t\t<span class=\"pull-left\">SOLUTION MATURITY</span>\r\n\t\t\t\t\t\t\t\t<span class=\"pull-right\"><i class=\"fa fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<div id=\"solutionmaturity\" class=\"collapse g-w-bg g-pl-05 g-pr-05\">\r\n\t\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let option of solutionMaturityValues\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox g-mt-0 g-pt-05 g-pb-05 g-mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 g-black10-clr sol-area-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [value]=\"option.value\" class=\"sol-area-checkbox\" (change)=\"filterSolutionStage($event)\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ option.name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel panel-default l-filter-panel l-filter-panel-bdr g-mt-0\">\r\n\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\t\tdata-parent=\"#accordion\"\r\n\t\t\t\t\t\t\t\tclass=\"btn g-w-bg g-grey3-clr g-fw-600 g-w-100per g-bdrrad-0 g-pt-10 g-pb-10 g-fs-06\"\r\n\t\t\t\t\t\t\t\tdata-toggle=\"collapse\"\r\n\t\t\t\t\t\t\t\tdata-target=\"#providerlocation\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t<span class=\"pull-left\">INNOVATOR LOCATION</span>\r\n\t\t\t\t\t\t\t\t<span class=\"pull-right\"><i class=\"fa fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<div id=\"providerlocation\" class=\"collapse g-w-bg g-pl-05 g-pr-05\">\r\n\t\t\t\t\t\t\t\t<form class=\"l-location-frm\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let location of providerLocations?.data\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox g-mt-0 g-pt-05 g-pb-05 g-mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 g-black10-clr sol-area-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [value]=\"location.id\" class=\"sol-area-checkbox\" (change)=\"filterLocation($event)\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ location.name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel panel-default l-filter-panel-bdr-rad-btm l-filter-panel g-mt-0\">\r\n\t\t\t\t\t\t\t<button type=\"button\" data-parent=\"#accordion\" class=\"btn g-w-bg g-grey3-clr g-fw-600 g-w-100per a-brdrr-bt-4px g-pt-10 g-pb-10 g-fs-06\" data-toggle=\"collapse\" data-target=\"#teamsize\">\r\n\t\t\t\t\t\t\t\t<span class=\"pull-left\">TEAM SIZE</span>\r\n\t\t\t\t\t\t\t\t<span class=\"pull-right\"><i class=\"fa fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<div id=\"teamsize\" class=\"collapse g-w-bg g-pl-05 g-pr-05\">\r\n\t\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let option of teamSizeValues\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox g-mt-0 g-pt-05 g-pb-05 g-mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 g-black10-clr sol-area-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [value]=\"option.value\" class=\"sol-area-checkbox\" (change)=\"filterTeamSize($event)\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-12 col-md-9\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!searchLoader\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-075 g-fw-500\">\r\n\t\t\t\t\t\t\t\t<span class=\"g-grey5-clr\">Showing </span>&nbsp;\r\n\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ solutions?.currently_showing.from }}-{{ solutions?.currently_showing.to }} </span>\r\n\t\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">{{ solutions?.total_records }}</span\r\n\t\t\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Results</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-7 g-pr-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xs-5\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\" id=\"sel1\" [(ngModel)]=\"sort_value\" (change)=\"sortResults($event)\">\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let option of sortByValues\" [value]=\"option.value\">\r\n\t\t\t\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"search-results-wrp g-mt-08\">\r\n\t\t\t\t\t<div class=\"search-results-area\" *ngIf=\"!searchLoader\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let solution of solutions?.data\">\r\n\t\t\t\t\t\t\t\t<!-- checking whether the logged-in user is the author of the solution -->\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"loggedInUser.userType == 'provider' && loggedInUser.userTypeId === solution.provider_id; else otherSolution\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"solution-card-wrp\" [routerLink]=\"['/provider/user/' + loggedInUser.slug + '/solution', solution.id]\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"solution-preview\" [ngStyle]=\"solution.images ? { 'background-image': 'url(' + server_url + solution.images[0] + ')' } : ''\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"solution-meta\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-500 g-black19-clr g-h-28 a-discover-title-cnt\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ solution.name.length > 50 ? (solution.name | slice: 0:50) + \"..\" : solution.name }}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\" *ngIf=\"solution.provider_role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ solution.startup_name.length > 10 ? (solution.startup_name | slice: 0:10 | titlecase) + \"..\" : (solution.startup_name | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span><img src=\"../../../assets/img/startup_up_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Startup</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\" *ngIf=\"solution.provider_role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ solution.enterprise_name.length > 10 ? (solution.enterprise_name | slice: 0:10 | titlecase) + \"..\" : (solution.enterprise_name | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span><img src=\"../../../assets/img/enterprise_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Enterprise</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\" *ngIf=\"solution.provider_role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ solution.provider_name.length > 10 ? (solution.provider_name | slice: 0:10 | titlecase) + \"..\" : (solution.provider_name | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span><img src=\"../../../assets/img/individual_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Individual</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-05 g-pb-17\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"g-fs-06 g-bdrrad-4px g-disp-inlblock text-center g-mt-04 g-w-clr g-fw-700 g-pt-01 g-pb-01 g-pl-06 g-pr-06\"\r\n                                                    [class.g-grn-bg]=\"solution.stage == 'Pilot Certified'\"\r\n                                                    [class.g-yellow-bg]=\"solution.stage == 'Pre Pilot'\"\r\n                                                    [class.g-yellow-bg]=\"solution.stage == 'Pilot'\">\r\n                                                    {{solution.stage | uppercase}}\r\n                                                </div> -->\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-10 g-pb-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-400 g-black8-clr\">Posted on {{ solution.created_at | date: \"d MMM yyyy\" }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<!-- if not the author this block will be rendered -->\r\n\t\t\t\t\t\t\t\t<ng-template #otherSolution>\r\n\t\t\t\t\t\t\t\t\t<div class=\"solution-card-wrp\" [routerLink]=\"['/solution', solution.id]\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"solution-preview\" [ngStyle]=\"solution.images ? { 'background-image': 'url(' + server_url + solution.images[0] + ')' } : ''\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"solution-meta\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-500 g-black19-clr g-h-28 a-discover-title-cnt\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ solution.name.length > 50 ? (solution.name | slice: 0:50) + \"..\" : solution.name }}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\" *ngIf=\"solution.provider_role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ solution.startup_name.length > 10 ? (solution.startup_name | slice: 0:10 | titlecase) + \"..\" : (solution.startup_name | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span><img src=\"../../../assets/img/startup_up_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Startup</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\" *ngIf=\"solution.provider_role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ solution.enterprise_name.length > 10 ? (solution.enterprise_name | slice: 0:10 | titlecase) + \"..\" : (solution.enterprise_name | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span><img src=\"../../../assets/img/enterprise_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Enterprise</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\" *ngIf=\"solution.provider_role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ solution.provider_name.length > 10 ? (solution.provider_name | slice: 0:10 | titlecase) + \"..\" : (solution.provider_name | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span><img src=\"../../../assets/img/individual_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Individual</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-05 g-pb-17\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"g-fs-06 g-bdrrad-4px g-disp-inlblock text-center g-mt-04 g-w-clr g-fw-700 g-pt-01 g-pb-01 g-pl-06 g-pr-06\"\r\n                                                    [class.g-grn-bg]=\"solution.stage == 'Pilot Certified'\"\r\n                                                    [class.g-yellow-bg]=\"solution.stage == 'Pre Pilot'\"\r\n                                                    [class.g-yellow-bg]=\"solution.stage == 'Pilot'\">\r\n                                                    {{solution.stage | uppercase}}\r\n                                                </div> -->\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-10 g-pb-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-400 g-black8-clr\">Posted on {{ solution.created_at | date: \"d MMM yyyy\" }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"skeleton-loader-wrp\" *ngIf=\"searchLoader\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let item of [].constructor(8)\">\r\n\t\t\t\t\t\t\t\t<div class=\"skeleton-card-wrp\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"solution-preview\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"solution-meta\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-500 g-black19-clr g-h-28 a-discover-title-cnt\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '18px', width: '210px', margin: '0px 0px 5px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '140px', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '25px', width: '80px', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-10 g-pb-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '140px', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"no-results-wrp\" *ngIf=\"!searchLoader && solutions?.data.length == 0\">\r\n\t\t\t\t\t\t<div class=\"no-results-txt g-fw-500 g-black7-clr\">No results found</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row g-pt-10\">\r\n\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t\t<pagination-controller [totalItems]=\"solutions?.total_records\" [pageSize]=\"20\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover-providers/discover-providers.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover-providers/discover-providers.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-blue-bg\">\r\n\t<div class=\"container g-pt-18 g-pb-18\">\r\n\t\t<form #searchForm=\"ngForm\" (ngSubmit)=\"searchProvider()\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-2 col-xs-4 g-pr-0\">\r\n\t\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr dropdown-toggle g-h-24 g-pl-08 g-pr-08 g-w-100per search-input\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t<span>Innovators</span>&nbsp;&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"caret\"></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['/discover/challenges']\">Challenges</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['/discover/solutions']\">Solutions</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-7 col-xs-6 g-p-0\">\r\n\t\t\t\t\t<div class=\"search-box\">\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tclass=\"form-control g-bdrrad-0 g-h-24\"\r\n\t\t\t\t\t\t\tid=\"search\"\r\n\t\t\t\t\t\t\tplaceholder=\"Search for Innovators\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"searchKeyWord\"\r\n\t\t\t\t\t\t\t[ngModelOptions]=\"{ standalone: true }\"\r\n\t\t\t\t\t\t\t(ngModelChange)=\"autoComplete($event)\"\r\n\t\t\t\t\t\t\tautocomplete=\"off\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"autoSuggestions?.length > 0 && searchKeyWord.length > 3\">\r\n\t\t\t\t\t\t\t<div class=\"search-auto-complete-wrp\">\r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let suggestion of autoSuggestions\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div (click)=\"searchAutoSuggestion(suggestion)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ suggestion.length > 75 ? (suggestion | titlecase | slice: 0:75) + \"..\" : (suggestion | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-1 col-xs-2 g-p-0\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-h-24 g-pl-08 g-pr-08 search-btn\">\r\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-2 text-center g-pl-0\">\r\n\t\t\t\t\t<app-create-challenge-btn-modal></app-create-challenge-btn-modal>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t<app-sector-filter (onFilterChange)=\"filterSector($event)\"></app-sector-filter>\r\n\t</div>\r\n</div>\r\n<div class=\"container g-pt-30 g-pb-45\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12 col-md-3\">\r\n\t\t\t<div class=\"g-fs-07 g-fw-700 g-black6-clr\">FILTER BY</div>\r\n\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t<div class=\"panel-group l-filter-panel-grp\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\t\t\t\t\t<div class=\"panel panel-default l-filter-panel l-filter-panel-bdr g-mt-0\">\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tdata-parent=\"#accordion\"\r\n\t\t\t\t\t\t\tclass=\"btn g-w-bg g-grey3-clr g-fw-600 g-w-100per g-bdrrad-0 g-pt-10 g-pb-10 g-fs-06\"\r\n\t\t\t\t\t\t\tdata-toggle=\"collapse\"\r\n\t\t\t\t\t\t\tdata-target=\"#anchor\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<span class=\"pull-left\">TYPE OF ENTITY</span>\r\n\t\t\t\t\t\t\t<span class=\"pull-right\"><i class=\"fa fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<div id=\"anchor\" class=\"collapse g-w-bg g-pl-05 g-pr-05\">\r\n\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let option of providerRoleValues\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox g-mt-0 g-pt-05 g-pb-05 g-mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 g-black10-clr sol-area-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [value]=\"option.value\" class=\"sol-area-checkbox\" (change)=\"filterEntity($event)\" />\r\n\t\t\t\t\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel panel-default l-filter-panel-bdr-rad-btm l-filter-panel g-mt-0\">\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tdata-parent=\"#accordion\"\r\n\t\t\t\t\t\t\tclass=\"btn g-w-bg g-grey3-clr g-fw-600 g-w-100per a-brdrr-bt-4px g-pt-10 g-pb-10 g-fs-06\"\r\n\t\t\t\t\t\t\tdata-toggle=\"collapse\"\r\n\t\t\t\t\t\t\tdata-target=\"#teamsize\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<span class=\"pull-left\">TEAM SIZE</span>\r\n\t\t\t\t\t\t\t<span class=\"pull-right\"><i class=\"fa fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<div id=\"teamsize\" class=\"collapse g-w-bg g-pl-05 g-pr-05\">\r\n\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let option of teamSizeValues\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox g-mt-0 g-pt-05 g-pb-05 g-mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 g-black10-clr sol-area-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [value]=\"option.value\" class=\"sol-area-checkbox\" (change)=\"filterTeamSize($event)\" />\r\n\t\t\t\t\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel panel-default l-filter-panel-bdr-rad-btm l-filter-panel g-mt-0\">\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tdata-parent=\"#accordion\"\r\n\t\t\t\t\t\t\tclass=\"btn g-w-bg g-grey3-clr g-fw-600 g-w-100per a-brdrr-bt-4px g-pt-10 g-pb-10 g-fs-06\"\r\n\t\t\t\t\t\t\tdata-toggle=\"collapse\"\r\n\t\t\t\t\t\t\tdata-target=\"#location\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<span class=\"pull-left\">INNOVATOR LOCATION</span>\r\n\t\t\t\t\t\t\t<span class=\"pull-right\"><i class=\"fa fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<div id=\"location\" class=\"collapse g-w-bg g-pl-05 g-pr-05\">\r\n\t\t\t\t\t\t\t<form class=\"l-location-frm\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let option of providerLocationsValues?.data\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox g-mt-0 g-pt-05 g-pb-05 g-mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 g-black10-clr sol-area-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [value]=\"option.id\" class=\"sol-area-checkbox\" (change)=\"filterLocation($event)\" />\r\n\t\t\t\t\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-12 col-md-9\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!searchLoader\">\r\n\t\t\t\t\t\t<div class=\"g-fs-075 g-fw-500\">\r\n\t\t\t\t\t\t\t<span class=\"g-grey5-clr\">Showing </span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ providers?.currently_showing.from }}-{{ providers?.currently_showing.to }} </span>\r\n\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t<span class=\"g-black7-clr\">{{ providers?.total_results }}</span\r\n\t\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Results</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-6 g-pr-0\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\tclass=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\"\r\n\t\t\t\t\t\t\t\tid=\"sel1\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"sortValue\"\r\n\t\t\t\t\t\t\t\t(change)=\"sortResults($event)\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of sortByValues\" [value]=\"option.value\">\r\n\t\t\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"search-results-wrp\">\r\n\t\t\t\t<div class=\"search-results-area g-mt-10\" *ngIf=\"!searchLoader\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let provider of providers?.data\">\r\n\t\t\t\t\t\t\t<!-- checking whether the logged-in user is the owner of the provider profile -->\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"loggedInUser.userType == 'provider' && loggedInUser.userTypeId === provider.id; else otherProvider\">\r\n\t\t\t\t\t\t\t\t<div class=\"user-card-item\" [routerLink]=\"['/provider/user', provider.slug]\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"user-card-img\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"provider.role != 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\t\t\t[src]=\"provider.company_logo ? server_url + provider.company_logo : '../../../assets/img/company_img.png'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\talt=\"logo\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"discover-provider-img\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"profileImageLoaded\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(load)=\"this.profileImageLoaded = false\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"provider.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + provider.avatar\" alt=\"logo\" class=\"discover-provider-img\" [hidden]=\"profileImageLoaded\" (load)=\"this.profileImageLoaded = false\" />\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"image-placeholder\" *ngIf=\"profileImageLoaded\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"user-details\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-lh-12 g-fw-700 g-black7-clr company-name g-opacity-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"provider.role === 'startup'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tprovider.startup_company_name.length > 30 ? (provider.startup_company_name | slice: 0:30 | titlecase) + \"..\" : (provider.startup_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"provider.role === 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ provider.enterprise_company_name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"provider.role === 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ provider.fullname | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-lh-07 g-fw-400 g-black8-clr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ provider.location | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-lh-08 g-fw-700 g-black8-clr\"> {{ provider.solutions }}&nbsp; </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-lh-08 g-fw-400 g-black8-clr g-pr-08\"> Solutions </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-lh-08 g-fw-700 g-black8-clr\"> 0&nbsp; </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-lh-08 g-fw-400 g-black8-clr\"> Pilots </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<!-- if not the owner this block will be rendered -->\r\n\t\t\t\t\t\t\t<ng-template #otherProvider>\r\n\t\t\t\t\t\t\t\t<div class=\"user-card-item\" [routerLink]=\"['/provider', provider.slug]\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"user-card-img\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"provider.role != 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\t\t\t[src]=\"provider.company_logo ? server_url + provider.company_logo : '../../../assets/img/company_img.png'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\talt=\"logo\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"discover-provider-img\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"profileImageLoaded\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(load)=\"this.profileImageLoaded = false\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"provider.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + provider.avatar\" alt=\"logo\" class=\"discover-provider-img\" [hidden]=\"profileImageLoaded\" (load)=\"this.profileImageLoaded = false\" />\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"image-placeholder\" *ngIf=\"profileImageLoaded\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"user-details\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-lh-12 g-fw-700 g-black7-clr company-name g-opacity-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"provider.role === 'startup'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tprovider.startup_company_name.length > 30 ? (provider.startup_company_name | slice: 0:30 | titlecase) + \"..\" : (provider.startup_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"provider.role === 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ provider.enterprise_company_name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"provider.role === 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ provider.fullname | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-lh-07 g-fw-400 g-black8-clr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ provider.location | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-lh-08 g-fw-700 g-black8-clr\"> {{ provider.solutions }}&nbsp; </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-lh-08 g-fw-400 g-black8-clr g-pr-08\"> Solutions </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-lh-08 g-fw-700 g-black8-clr\"> 0&nbsp; </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-lh-08 g-fw-400 g-black8-clr\"> Pilots </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"skeleton-loader-wrp g-mt-10\" *ngIf=\"searchLoader\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let item of [].constructor(10)\">\r\n\t\t\t\t\t\t\t<div class=\"skeleton-card-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"user-card-img\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\theight: '114px',\r\n\t\t\t\t\t\t\t\t\t\t\twidth: '114px',\r\n\t\t\t\t\t\t\t\t\t\t\t'border-radius': '50%',\r\n\t\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"user-details\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"company-name\">\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '140px',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-pt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '16px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '100px'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-08\">\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '16px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '60px',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px 8px 0px 0px'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '16px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '60px',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px 0px 0px 8px'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"no-results-wrp\" *ngIf=\"!searchLoader && providers?.data.length == 0\">\r\n\t\t\t\t\t<div class=\"no-results-txt g-fw-500 g-black7-clr\">No results found</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row g-pt-10\">\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t<pagination-controller [totalItems]=\"providers?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/select-sector/select-sector.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/select-sector/select-sector.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"select-sector-wrp g-mt-40 g-mb-20\">\r\n\t<div class=\"text-center\">\r\n\t\t<div class=\"l-sel-sec-hdr g-fs-12 g-fw-500\">Choose the Challenge Sectors that interests you</div>\r\n\t\t<div class=\"l-sel-sec-desc g-fs-08 g-mt-03\">Your information feed will be customized based on your choices</div>\r\n\t</div>\r\n\t<div class=\"l-sel-sec-sec-2-cont g-mt-15\">\r\n\t\t<ng-container *ngIf=\"!sectorLoading\">\r\n\t\t\t<ul class=\"l-sel-sec-sec-2-ul\">\r\n\t\t\t\t<li class=\"l-sel-sec-sec-2-ul-li\" *ngFor=\"let sector of sectorsData.data\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"challenge-sector\" (change)=\"handleSectorFilter($event, sector)\" class=\"l-sect-checkbox\" [value]=\"sector.id\" [checked]=\"sector.checked\" />\r\n\t\t\t\t\t\t<div class=\"l-sect-card\" [ngClass]=\"{ 'l-sect-edu-card': sector.id == '9', 'l-sect-gov-card': sector.id == '6' }\">\r\n\t\t\t\t\t\t\t<div [innerHtml]=\"sector.avatar | safeHtml\"></div>\r\n\t\t\t\t\t\t\t<div class=\"text-center g-fs-07 g-lh-08 g-fw-500 l-sel-sec-sec-2-sec-name\">\r\n\t\t\t\t\t\t\t\t{{ sector.name | uppercase }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<div class=\"g-mt-10 g-mb-40 text-center\">\r\n\t\t\t\t<button class=\"btn btn-deafult l-sel-sec-btn g-bdrrad-4px\" (click)=\"selectSectors()\">\r\n\t\t\t\t\t{{ params?.mode == \"update\" ? \"Update Changes\" : \"Discover Platform\" }}\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngIf=\"sectorLoading\">\r\n\t\t\t<ul class=\"l-sel-sec-sec-2-ul\">\r\n\t\t\t\t<li class=\"l-sel-sec-sec-2-ul-li\" *ngFor=\"let item of [].constructor(12)\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"challenge-sector\" class=\"l-sect-checkbox\" />\r\n\t\t\t\t\t\t<div class=\"l-sect-card\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\theight: '60px',\r\n\t\t\t\t\t\t\t\t\t\twidth: '60px',\r\n\t\t\t\t\t\t\t\t\t\t'border-radius': '4px',\r\n\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"text-center g-fs-07 g-lh-08 g-fw-500 l-sel-sec-sec-2-sec-name\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\theight: '12px',\r\n\t\t\t\t\t\t\t\t\t\twidth: '120px',\r\n\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</ng-container>\r\n\t</div>\r\n</div>\r\n\r\n<ng-container *ngIf=\"params?.mode === 'update'\">\r\n\t<div class=\"modal fade\" id=\"unFollowWarning\" role=\"dialog\">\r\n\t\t<div class=\"modal-dialog modal-md\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"modal-body g-pt-15 g-pb-15\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-20 text-right\">\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle g-danger-clr\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-8\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 body-grey-clr\">You can’t unfollow {{ unFollowSectorName }}</div>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"logged_in_user.userType === 'seeker'\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 body-light-clr\">As you have ongoing challenges in {{ unFollowSectorName }}. You can unfollow only after those challenges are closed.</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"logged_in_user.userType === 'provider'\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 body-light-clr\">As you have solutions catalogued under {{ unFollowSectorName }}. You can unfollow only after those solutions are deleted</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-trans-bg g-p-0 g-fs-20 g-grey4-clr\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fal fa-times-square\"></i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/widgets/sector-filter/sector-filter.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/widgets/sector-filter/sector-filter.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"g-pt-24\">\r\n\t<div class=\"g-mb-05\">\r\n\t\t<div class=\"g-fs-06 g-lh-08 g-fw-400 g-w-clr\">Filter by Challenge Sectors</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t<owl-carousel-o [options]=\"customOptions\">\r\n\t\t\t\t<ng-container *ngFor=\"let sector of sectorsData.data\">\r\n\t\t\t\t\t<ng-template carouselSlide [id]=\"sector.id\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"challenge-sector\" (change)=\"handleSectorFilter($event)\" class=\"a-checkbox\"\r\n\t\t\t\t\t\t\t\t\tvalue=\"{{ sector.id }}\" [checked]=\"sector.checked\" />\r\n\t\t\t\t\t\t\t\t<div class=\"panel discover-challenges-card g-w-bg g-w-100px g-h-100px g-bdr-01 g-p-brdr\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body text-center g-pl-0 g-pr-0\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'l-sect-edu-card': sector.id == '9', 'l-sect-gov-card': sector.id == '6' }\">\r\n\t\t\t\t\t\t\t\t\t\t<div [innerHtml]=\"sector.avatar | safeHtml\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-center g-fs-05 g-lh-06 g-fw-500 a-cnt\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ sector.name | uppercase}}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</owl-carousel-o>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t<div class=\"sector-loader\">\r\n\t\t\t\t\t<div class=\"loading-item\" *ngFor=\"let item of [].constructor(10)\">\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"challenge-sector\" class=\"a-checkbox\" />\r\n\t\t\t\t\t\t\t<div class=\"panel discover-challenges-card g-w-bg g-w-100px g-h-100px g-bdr-01 g-p-brdr\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body text-center g-pl-0 g-pr-0\">\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '50px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '50px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '4px',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-center g-fs-05 g-lh-06 g-fw-500 a-cnt\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\theight: '12px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\twidth: '60px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/const.ts":
/*!**************************!*\
  !*** ./src/app/const.ts ***!
  \**************************/
/*! exports provided: discover_challenges_provider, discoverSolutions, discoverProviders, challengeStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discover_challenges_provider", function() { return discover_challenges_provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discoverSolutions", function() { return discoverSolutions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discoverProviders", function() { return discoverProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "challengeStatus", function() { return challengeStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const pg_show_pr_page = [10, 25, 50, 100];
const discover_challenges_provider = {
    // filter_by_solution_area_options: [
    //     { name: "Water Management", value: "user_type", options: "/faqs?filter=", opt_field: 'user_type', api_col_name:'user_type' }
    // ],
    // solution_maturity_options: [{ name: "Pre Pilot", value: "prepilot" }, { name: "Pilot Ready", value: "pilotReady" }, { name: "Certified", value: "certified" }],
    solution_options: [
        { name: "Under-5", value: "0-5" },
        { name: "5-10", value: "5-10" },
        { name: "10-15", value: "10-15" },
        { name: "15-20", value: "15-20" },
        { name: "Above 20", value: "20" },
    ],
    anchors_options: [
        { name: "Under-5", value: "0-5" },
        { name: "5-10", value: "5-10" },
        { name: "10-15", value: "10-15" },
        { name: "15-20", value: "15-20" },
        { name: "Above 20", value: "20" },
    ],
    team_size_options: [
        { name: "Under-10", value: "name" },
        { name: "10-20", value: "name" },
        { name: "20-50", value: "name" },
        { name: "50-100", value: "name" },
        { name: "Above 100", value: "name" },
    ],
    // sort_by_options: [{ name: "Name", value: "name" }, { name: "User Type", value: "user_type" }],
    sort_by_values: [
        { name: "Alphabetic (A-Z)", value: "challenge_name ASC" },
        { name: "Alphabetic (Z-A)", value: "challenge_name DESC" },
        { name: "Newly Launched", value: "created_at DESC" },
        { name: "Most Anchors", value: "anchors DESC" },
        { name: "Most Solutions", value: "solutions DESC" },
    ],
    pg_show_pr_page: pg_show_pr_page,
};
const discoverSolutions = {
    sort_by_values: [
        { name: "Alphabetic (A-Z)", value: "name ASC" },
        { name: "Alphabetic (Z-A)", value: "name DESC" },
        { name: "Newly Launced", value: "created_at DESC" },
    ],
    solution_maturity: [
        { name: "Pre Pilot", value: "Pre Pilot" },
        { name: "Pilot", value: "Pilot" },
        { name: "Certified", value: "Pilot Certified" },
    ],
    team_size_options: [
        { name: "Under-10", value: "1-10" },
        { name: "10-20", value: "10-20" },
        { name: "20-50", value: "20-50" },
        { name: "50-100", value: "50-100" },
        { name: "Above 100", value: "100" },
    ],
    pg_show_pr_page: pg_show_pr_page,
};
const discoverProviders = {
    sort_by_values: [
        { name: "Alphabetic (A-Z)", value: "fullname ASC" },
        { name: "Alphabetic (Z-A)", value: "fullname DESC" },
        { name: "Recently Added", value: "created_at DESC" },
        { name: "Most Solutions", value: "solutions DESC" },
    ],
    provider_role: [
        { name: "Start Up", value: "startup" },
        { name: "Enterprise", value: "enterprise" },
        { name: "Individual", value: "individual" },
    ],
    team_size_options: [
        { name: "Under-10", value: "1-10" },
        { name: "10-20", value: "10-20" },
        { name: "20-50", value: "20-50" },
        { name: "50-100", value: "50-100" },
        { name: "Above 100", value: "100" },
    ],
    pg_show_pr_page: pg_show_pr_page,
};
const challengeStatus = [
    "Awaiting Approval",
    "Accepting Solutions",
    "Reviewing Solutions",
    "Co-Creation",
    "Accepting Pilots",
    "Reviewing Pilots",
    "Pilot Implementation",
    "Closed",
];


/***/ }),

/***/ "./src/app/discover/create-challenge-btn-modal/create-challenge-btn-modal.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/discover/create-challenge-btn-modal/create-challenge-btn-modal.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".a-create-challenge-modal {\r\n  z-index: 100000;\r\n}\r\n@media only screen and (max-width: 991px) {\r\n  .a-create-btn {\r\n    width: 50% !important;\r\n    margin: 20px auto;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY292ZXIvY3JlYXRlLWNoYWxsZW5nZS1idG4tbW9kYWwvY3JlYXRlLWNoYWxsZW5nZS1idG4tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGlzY292ZXIvY3JlYXRlLWNoYWxsZW5nZS1idG4tbW9kYWwvY3JlYXRlLWNoYWxsZW5nZS1idG4tbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hLWNyZWF0ZS1jaGFsbGVuZ2UtbW9kYWwge1xyXG4gIHotaW5kZXg6IDEwMDAwMDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmEtY3JlYXRlLWJ0biB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/discover/create-challenge-btn-modal/create-challenge-btn-modal.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/discover/create-challenge-btn-modal/create-challenge-btn-modal.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateChallengeBtnModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateChallengeBtnModalComponent", function() { return CreateChallengeBtnModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");





let CreateChallengeBtnModalComponent = class CreateChallengeBtnModalComponent {
    constructor(router) {
        this.router = router;
        this.loggedInUser$.subscribe((resp) => {
            this.userRole = resp.LoggedInUser.userType;
        });
    }
    ngOnInit() { }
    createChallenge() {
        this.router.navigateByUrl(`/challenge/create`);
        this.closebutton.nativeElement.click();
    }
    gotoChallenge() {
        $('#createChallenge').modal('hide');
        this.router.navigateByUrl(`/discover/challenges`);
    }
    gotoUnsolicitedProposal() {
        this.router.navigateByUrl(`/provider/unsolicited-proposal`);
    }
};
CreateChallengeBtnModalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__["LoggedInUserState"])
], CreateChallengeBtnModalComponent.prototype, "loggedInUser$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("closebutton", { static: false })
], CreateChallengeBtnModalComponent.prototype, "closebutton", void 0);
CreateChallengeBtnModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-create-challenge-btn-modal",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-challenge-btn-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/create-challenge-btn-modal/create-challenge-btn-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-challenge-btn-modal.component.css */ "./src/app/discover/create-challenge-btn-modal/create-challenge-btn-modal.component.css")).default]
    })
], CreateChallengeBtnModalComponent);



/***/ }),

/***/ "./src/app/discover/discover-challenge-provider/discover-challenge-provider.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/discover/discover-challenge-provider/discover-challenge-provider.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".l-dis-chal-actv-card {\r\n  background-color: #2858b5 !important;\r\n  -webkit-filter: drop-shadow(5px 5px 20px rgba(157, 189, 252, 0.5)) !important;\r\n  filter: drop-shadow(5px 5px 20px rgba(157, 189, 252, 0.5)) !important;\r\n}\r\n.l-dis-chal-actv-card svg {\r\n  fill: white !important;\r\n}\r\n.l-filter-panel {\r\n  border-radius: 0px !important;\r\n  border: 0px !important;\r\n}\r\n.l-filter-panel-grp {\r\n  border: 1px solid #c3c7ce !important;\r\n  border-radius: 6px;\r\n  border-collapse: separate;\r\n}\r\n.l-filter-panel-bdr-rad-top {\r\n  border-top-left-radius: 6px !important;\r\n  border-top-right-radius: 6px !important;\r\n}\r\n.l-filter-panel-bdr-rad-btm {\r\n  border-bottom-left-radius: 6px !important;\r\n  border-bottom-right-radius: 6px !important;\r\n}\r\n.l-filter-panel-grp button:active,\r\nl-filter-panel-grp:hover,\r\nl-filter-panel-grp:focus {\r\n  box-shadow: none !important;\r\n}\r\n.l-filter-panel-grp button:not(:last-child) {\r\n  border-bottom: 1px solid #c3c7ce !important;\r\n}\r\n.l-disc-select {\r\n  /* max-width: 83%; */\r\n  border: 1px solid #c3c7ce !important;\r\n}\r\n/* checkbox */\r\n.a-checkbox[type=\"checkbox\"] {\r\n  position: absolute;\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n/* IMAGE STYLES */\r\n.a-checkbox[type=\"checkbox\"] + .discover-challenges-card {\r\n  cursor: pointer;\r\n}\r\n/* CHECKED STYLES */\r\n.a-checkbox[type=\"checkbox\"]:checked + .discover-challenges-card {\r\n  background-color: #2858b5 !important;\r\n  -webkit-filter: drop-shadow(5px 5px 20px rgba(157, 189, 252, 0.5)) !important;\r\n          filter: drop-shadow(5px 5px 20px rgba(157, 189, 252, 0.5)) !important;\r\n}\r\n.a-checkbox[type=\"checkbox\"]:checked + .discover-challenges-card svg path {\r\n  fill: var(--white) !important;\r\n}\r\n.a-checkbox[type=\"checkbox\"]:checked + .discover-challenges-card .a-cnt {\r\n  color: var(--white) !important;\r\n}\r\n/* search area */\r\n.search-results-wrp {\r\n  position: relative;\r\n  min-height: 100vh;\r\n}\r\n.no-results-wrp {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 10;\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.no-results-txt {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n}\r\n.t-limit-record select {\r\n  max-width: 80px;\r\n  display: inline-block;\r\n}\r\n.discover.pagination li a {\r\n  color: var(--black8);\r\n  font-size: 12px !important;\r\n}\r\n.discover.pagination li.active a {\r\n  background-color: var(--primary-clr) !important;\r\n  border-color: var(--primary-clr) !important;\r\n  color: var(--white);\r\n}\r\n.l-disc-offer-slt {\r\n  max-width: 83%;\r\n  /* border: 1px solid #c3c7ce !important; */\r\n  margin-left: auto !important;\r\n}\r\n.search-box {\r\n  position: relative;\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n}\r\n.search-box input {\r\n  border: none !important;\r\n  outline: none !important;\r\n}\r\n.search-auto-complete-wrp {\r\n  position: absolute;\r\n  width: 100%;\r\n  max-height: 300px;\r\n  overflow-y: auto;\r\n  background-color: var(--white);\r\n  border-top: 1px solid #c3c7ce76 !important;\r\n  z-index: 100000;\r\n  border-radius: 0px 0px 6px 6px;\r\n  box-shadow: 0 4px 6px rgba(32, 33, 36, 0.28);\r\n}\r\n.search-auto-complete-wrp ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n.search-auto-complete-wrp ul li {\r\n  font-size: 13px;\r\n  color: #5f6368;\r\n}\r\n.search-auto-complete-wrp ul li div {\r\n  padding: 6px 15px;\r\n  -webkit-transition: all 0.2s;\r\n  transition: all 0.2s;\r\n  cursor: pointer;\r\n}\r\n.search-auto-complete-wrp ul li div:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n.l-location-frm {\r\n  height: 300px;\r\n  overflow-y: scroll;\r\n}\r\n/* \r\n.search-box input:focus .search-box .search-auto-complete-wrp{\r\n  \r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY292ZXIvZGlzY292ZXItY2hhbGxlbmdlLXByb3ZpZGVyL2Rpc2NvdmVyLWNoYWxsZW5nZS1wcm92aWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLDZFQUE2RTtFQUM3RSxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNDQUFzQztFQUN0Qyx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHlDQUF5QztFQUN6QywwQ0FBMEM7QUFDNUM7QUFDQTs7O0VBR0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixvQ0FBb0M7QUFDdEM7QUFFQSxhQUFhO0FBQ2I7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxlQUFlO0FBQ2pCO0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0Usb0NBQW9DO0VBQ3BDLDZFQUFxRTtVQUFyRSxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUEsZ0JBQWdCO0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLCtDQUErQztFQUMvQywyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsMENBQTBDO0VBQzFDLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUF5QjtFQUF6Qix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsMENBQTBDO0VBQzFDLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsNENBQTRDO0FBQzlDO0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw0QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBOzs7R0FHRyIsImZpbGUiOiJzcmMvYXBwL2Rpc2NvdmVyL2Rpc2NvdmVyLWNoYWxsZW5nZS1wcm92aWRlci9kaXNjb3Zlci1jaGFsbGVuZ2UtcHJvdmlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sLWRpcy1jaGFsLWFjdHYtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4NThiNSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDIwcHggcmdiYSgxNTcsIDE4OSwgMjUyLCAwLjUpKSAhaW1wb3J0YW50O1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAyMHB4IHJnYmEoMTU3LCAxODksIDI1MiwgMC41KSkgIWltcG9ydGFudDtcclxufVxyXG4ubC1kaXMtY2hhbC1hY3R2LWNhcmQgc3ZnIHtcclxuICBmaWxsOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5sLWZpbHRlci1wYW5lbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubC1maWx0ZXItcGFuZWwtZ3JwIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzNjN2NlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbn1cclxuLmwtZmlsdGVyLXBhbmVsLWJkci1yYWQtdG9wIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtZmlsdGVyLXBhbmVsLWJkci1yYWQtYnRtIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtZmlsdGVyLXBhbmVsLWdycCBidXR0b246YWN0aXZlLFxyXG5sLWZpbHRlci1wYW5lbC1ncnA6aG92ZXIsXHJcbmwtZmlsdGVyLXBhbmVsLWdycDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5sLWZpbHRlci1wYW5lbC1ncnAgYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzNjN2NlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtZGlzYy1zZWxlY3Qge1xyXG4gIC8qIG1heC13aWR0aDogODMlOyAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2M3Y2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogY2hlY2tib3ggKi9cclxuLmEtY2hlY2tib3hbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIElNQUdFIFNUWUxFUyAqL1xyXG4uYS1jaGVja2JveFt0eXBlPVwiY2hlY2tib3hcIl0gKyAuZGlzY292ZXItY2hhbGxlbmdlcy1jYXJkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENIRUNLRUQgU1RZTEVTICovXHJcbi5hLWNoZWNrYm94W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLmRpc2NvdmVyLWNoYWxsZW5nZXMtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4NThiNSAhaW1wb3J0YW50O1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAyMHB4IHJnYmEoMTU3LCAxODksIDI1MiwgMC41KSkgIWltcG9ydGFudDtcclxufVxyXG4uYS1jaGVja2JveFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5kaXNjb3Zlci1jaGFsbGVuZ2VzLWNhcmQgc3ZnIHBhdGgge1xyXG4gIGZpbGw6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWNoZWNrYm94W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLmRpc2NvdmVyLWNoYWxsZW5nZXMtY2FyZCAuYS1jbnQge1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogc2VhcmNoIGFyZWEgKi9cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy13cnAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm5vLXJlc3VsdHMtd3JwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5uby1yZXN1bHRzLXR4dCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnQtbGltaXQtcmVjb3JkIHNlbGVjdCB7XHJcbiAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRpc2NvdmVyLnBhZ2luYXRpb24gbGkgYSB7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNjb3Zlci5wYWdpbmF0aW9uIGxpLmFjdGl2ZSBhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY2xyKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5sLWRpc2Mtb2ZmZXItc2x0IHtcclxuICBtYXgtd2lkdGg6IDgzJTtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjYzNjN2NlICFpbXBvcnRhbnQ7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBpbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWF1dG8tY29tcGxldGUtd3JwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjM2M3Y2U3NiAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDEwMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDZweCA2cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMzIsIDMzLCAzNiwgMC4yOCk7XHJcbn1cclxuXHJcbi5zZWFyY2gtYXV0by1jb21wbGV0ZS13cnAgdWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1hdXRvLWNvbXBsZXRlLXdycCB1bCBsaSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjNWY2MzY4O1xyXG59XHJcblxyXG4uc2VhcmNoLWF1dG8tY29tcGxldGUtd3JwIHVsIGxpIGRpdiB7XHJcbiAgcGFkZGluZzogNnB4IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWF1dG8tY29tcGxldGUtd3JwIHVsIGxpIGRpdjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmwtbG9jYXRpb24tZnJtIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4vKiBcclxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMgLnNlYXJjaC1ib3ggLnNlYXJjaC1hdXRvLWNvbXBsZXRlLXdycHtcclxuICBcclxufSAqL1xyXG4iXX0= */");

/***/ }),

/***/ "./src/app/discover/discover-challenge-provider/discover-challenge-provider.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/discover/discover-challenge-provider/discover-challenge-provider.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DiscoverChallengeProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverChallengeProviderComponent", function() { return DiscoverChallengeProviderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const */ "./src/app/const.ts");
/* harmony import */ var _discover_challenges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discover-challenges.service */ "./src/app/discover/discover-challenge-provider/discover-challenges.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







let DiscoverChallengeProviderComponent = class DiscoverChallengeProviderComponent {
    constructor(_dc, toastr, router) {
        this._dc = _dc;
        this.toastr = toastr;
        this.router = router;
        this.post_data = {
            slug: {},
            filter: {
                status: "active",
                uns_proposal: false
            },
            search: {
                name: "",
            },
            sort: ["created_at DESC"],
            pg: {
                limit: 10,
                skip: 0,
            },
        };
        this.challengeSector = [];
        this.sort_value = "created_at DESC";
        this.anchors_options = [];
        this.solution_options = [];
        this.team_size_options = [];
        this.sort_by_values = [];
        this.search = {};
        this.searchLoader = false;
        this.smartCityIds = [];
        this.anchorIdBasedOnSmartCity = [];
        this.anchorFilterClauses = [];
        this.solutionFilterClauses = [];
    }
    ngOnInit() {
        this.anchors_options = _const__WEBPACK_IMPORTED_MODULE_2__["discover_challenges_provider"].anchors_options;
        this.solution_options = _const__WEBPACK_IMPORTED_MODULE_2__["discover_challenges_provider"].solution_options;
        this.team_size_options = _const__WEBPACK_IMPORTED_MODULE_2__["discover_challenges_provider"].team_size_options;
        this.sort_by_values = _const__WEBPACK_IMPORTED_MODULE_2__["discover_challenges_provider"].sort_by_values;
        this.getChallenges();
        this.listAchoredCities();
    }
    getChallenges() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.searchLoader = true;
                this.challenges = yield this._dc.getChallenges(this.post_data);
                // console.log(this.challenges)
                this.searchLoader = false;
            }
            catch (err) {
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    listAchoredCities() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.anchoredCities = yield this._dc.listCities();
            }
            catch (err) {
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    sort(event) {
        this.post_data.sort = [event.target.value];
        this.getChallenges();
    }
    solutionFilter(event) {
        let from = event.target.value.split("-")[0];
        let to = event.target.value.split("-")[1];
        if (event.target.checked) {
            this.solutionFilterClauses.push({ from: parseInt(from), to: parseInt(to) });
        }
        else {
            let itemToBeRemoved = { from: parseInt(from), to: parseInt(to) };
            let deleteIndex = this.solutionFilterClauses.findIndex((s) => s.from == itemToBeRemoved.from);
            this.solutionFilterClauses.splice(deleteIndex, 1);
        }
        this.post_data.filter.by_solution = this.solutionFilterClauses;
        if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.solutionFilterClauses))
            delete this.post_data.filter.by_solution;
        this.getChallenges();
    }
    anchorFilter(event) {
        let from = event.target.value.split("-")[0];
        let to = event.target.value.split("-")[1];
        if (event.target.checked) {
            this.anchorFilterClauses.push({ from: parseInt(from), to: parseInt(to) });
        }
        else {
            let itemToBeRemoved = { from: parseInt(from), to: parseInt(to) };
            let deleteIndex = this.anchorFilterClauses.findIndex((a) => a.from == itemToBeRemoved.from);
            this.anchorFilterClauses.splice(deleteIndex, 1);
        }
        this.post_data.filter.by_anchor = this.anchorFilterClauses;
        if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.anchorFilterClauses))
            delete this.post_data.filter.by_anchor;
        this.getChallenges();
    }
    searchChallenge() {
        this.autoSuggestions = null;
        this.post_data.pg.skip = 0;
        this.getChallenges();
    }
    filterSmartCity(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (event.target.checked) {
                this.smartCityIds.push(parseInt(event.target.value));
            }
            else {
                this.smartCityIds.splice(this.smartCityIds.indexOf(parseInt(event.target.value)), 1);
            }
            try {
                this.searchLoader = true;
                this.anchorIdBasedOnSmartCity = yield this._dc.getChallenegesBasedOnSmartCities({
                    filter: {
                        frg_smart_city_id: this.smartCityIds,
                    },
                });
                if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.anchorIdBasedOnSmartCity))
                    this.anchorIdBasedOnSmartCity = [0];
                this.post_data.filter.by_anchor_id = this.anchorIdBasedOnSmartCity;
                if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.smartCityIds))
                    delete this.post_data.filter.by_anchor_id;
                this.post_data.pg.skip = 0;
                this.challenges = yield this._dc.getChallenges(this.post_data);
                this.searchLoader = false;
            }
            catch (err) {
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    filterSector(event) {
        if (event.target.checked) {
            this.challengeSector.push(parseInt(event.target.value));
        }
        else {
            this.challengeSector.splice(this.challengeSector.indexOf(parseInt(event.target.value)), 1);
        }
        this.post_data.filter.sector = this.challengeSector;
        if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.challengeSector))
            delete this.post_data.filter.sector;
        this.post_data.pg.skip = 0;
        this.getChallenges();
    }
    handlePagination(pageIndex) {
        this.post_data.pg.skip = (pageIndex - 1) * this.post_data.pg.limit;
        this.getChallenges();
    }
    autoComplete(keyword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (keyword.length > 3) {
                this.autoSuggestions = yield this._dc.getSearchSuggestions({
                    search: { name: keyword },
                    sort: [{ name: "ASC" }],
                });
            }
            else if (keyword.length == 0) {
                // console.log("auto suggestion cleared");
                this.searchChallenge();
            }
            else {
                this.autoSuggestions = null;
            }
        });
    }
    searchAutoSuggestion(keyword) {
        this.post_data.search.name = keyword;
        this.searchChallenge();
    }
    openRouteInNewTab(path) {
        const url = this.router.serializeUrl(this.router.createUrlTree([`/challenge/${path}`]));
        window.open(url, "_blank");
    }
};
DiscoverChallengeProviderComponent.ctorParameters = () => [
    { type: _discover_challenges_service__WEBPACK_IMPORTED_MODULE_3__["DiscoverChallengesService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
DiscoverChallengeProviderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-discover-challenge-provider",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discover-challenge-provider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover-challenge-provider/discover-challenge-provider.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discover-challenge-provider.component.css */ "./src/app/discover/discover-challenge-provider/discover-challenge-provider.component.css")).default]
    })
], DiscoverChallengeProviderComponent);



/***/ }),

/***/ "./src/app/discover/discover-challenge-provider/discover-challenges.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/discover/discover-challenge-provider/discover-challenges.service.ts ***!
  \*************************************************************************************/
/*! exports provided: DiscoverChallengesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverChallengesService", function() { return DiscoverChallengesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/helpers.service */ "./src/app/services/helpers.service.ts");





let DiscoverChallengesService = class DiscoverChallengesService {
    constructor(http, _hs) {
        this.http = http;
        this._hs = _hs;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    getChallenges(post_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const limit = parseInt(post_data.pg.limit);
            const page = parseInt(post_data.pg.skip) / limit + 1;
            const dataResponse = yield this.http.post(this.api_url + "/challenges/discover", post_data).toPromise();
            let totalResults = dataResponse.total_records;
            let startItem = totalResults > 0 ? (page - 1) * limit + 1 : 0;
            let endItem = totalResults > 0 ? startItem - 1 + dataResponse.data.length : 0;
            let PageCount = Math.ceil(totalResults / limit);
            dataResponse.currently_showing = { from: startItem, to: endItem };
            dataResponse.page_count = PageCount;
            return dataResponse;
        });
    }
    listCities() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http.post(this.api_url + "/smart_cities/list", {}).toPromise();
        });
    }
    getChallenegesBasedOnSmartCities(cityIds) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.http.post(this.api_url + "/anchors_and_smart_cities/select_mul", cityIds).toPromise();
            let challengeIds = response.data.map((e) => e.frg_anchor_id);
            return challengeIds;
        });
    }
    getSearchSuggestions(keyword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.http.post(this.api_url + "/challenges/select_mul", keyword).toPromise();
            let suggestions = [];
            response.data.forEach((e) => {
                suggestions.push(e.name);
            });
            //  console.log(suggestions);
            let bestMatches = [];
            this._hs.sortBestMatches(keyword.search.name, suggestions).forEach((element) => {
                bestMatches.push(element.target);
            });
            //  console.log(bestMatches);
            return bestMatches;
        });
    }
};
DiscoverChallengesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"] }
];
DiscoverChallengesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DiscoverChallengesService);



/***/ }),

/***/ "./src/app/discover/discover-offerings/discover-offerings.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/discover/discover-offerings/discover-offerings.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".l-water-mangement-cont:focus,\r\n.panel-body:focus {\r\n\toutline: none !important;\r\n}\r\n.l-offering-option {\r\n\tcolor: rgba(0, 0, 0, 0.56);\r\n}\r\n.l-filter-panel {\r\n\tborder-radius: 0px !important;\r\n\tborder: 0px !important;\r\n}\r\n/* .l-filter-panel-bdr{\r\n    border-top:1px solid #C3C7CE !important;\r\n    border-bottom:1px solid #C3C7CE !important;\r\n} */\r\n.l-filter-panel-grp {\r\n\tborder: 1px solid #c3c7ce !important;\r\n\tborder-radius: 6px;\r\n\tborder-collapse: separate;\r\n}\r\n.l-filter-panel-bdr-rad-top {\r\n\tborder-top-left-radius: 6px !important;\r\n\tborder-top-right-radius: 6px !important;\r\n}\r\n.l-filter-panel-bdr-rad-btm {\r\n\tborder-bottom-left-radius: 6px !important;\r\n\tborder-bottom-right-radius: 6px !important;\r\n}\r\n.l-filter-panel-grp button:active,\r\nl-filter-panel-grp:hover,\r\nl-filter-panel-grp:focus {\r\n\tbox-shadow: none !important;\r\n}\r\n.l-filter-panel-grp button:not(:last-child) {\r\n\tborder-bottom: 1px solid #c3c7ce !important;\r\n}\r\n.l-disc-off-btn {\r\n\tmin-width: 90px;\r\n}\r\n.l-disc-offer-slt {\r\n\tmax-width: 83%;\r\n\t/* border:1px solid #C3C7CE !important; */\r\n}\r\n/* checkbox */\r\n.a-checkbox[type=\"checkbox\"] {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\twidth: 0;\r\n\theight: 0;\r\n}\r\n/* IMAGE STYLES */\r\n.a-checkbox[type=\"checkbox\"] + .discover-challenges-card {\r\n\tcursor: pointer;\r\n}\r\n/* CHECKED STYLES */\r\n.a-checkbox[type=\"checkbox\"]:checked + .discover-challenges-card {\r\n\tbackground-color: #2858b5 !important;\r\n\t-webkit-filter: drop-shadow(5px 5px 20px rgba(157, 189, 252, 0.5)) !important;\r\n\t        filter: drop-shadow(5px 5px 20px rgba(157, 189, 252, 0.5)) !important;\r\n}\r\n.a-checkbox[type=\"checkbox\"]:checked + .discover-challenges-card svg path {\r\n\tfill: var(--white) !important;\r\n}\r\n.a-checkbox[type=\"checkbox\"]:checked + .discover-challenges-card .a-cnt {\r\n\tcolor: var(--white) !important;\r\n}\r\n/* search area */\r\n.search-results-wrp {\r\n\tposition: relative;\r\n\tmin-height: 100vh;\r\n}\r\n.section-loader {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tz-index: 10;\r\n}\r\n.section-loader .loader-wrp {\r\n\tdisplay: table;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.section-loader .loader-inner {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\ttext-align: center;\r\n}\r\n.no-results-wrp {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tz-index: 10;\r\n\tdisplay: table;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.no-results-txt {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\ttext-align: center;\r\n}\r\n.solution-card-wrp {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\tbackground-color: var(--white);\r\n\t-webkit-box-align: stretch;\r\n\t        align-items: stretch;\r\n\tborder: 1px solid #c2c7c8;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 10px;\r\n\toverflow: hidden;\r\n\tmargin-bottom: 18px;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.skeleton-loader-wrp .skeleton-card-wrp {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\tbackground-color: var(--white);\r\n\t-webkit-box-align: stretch;\r\n\t        align-items: stretch;\r\n\tborder: 1px solid #c2c7c8;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 10px;\r\n\toverflow: hidden;\r\n\tmargin-bottom: 18px;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.solution-card-wrp:focus,\r\n.solution-card-wrp:hover {\r\n\tborder-color: #3b6fd4;\r\n\tbox-shadow: 5px 5px 20px rgba(157, 189, 252, 0.5);\r\n}\r\n.solution-preview {\r\n\tflex-basis: 40%;\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n\tbackground-color: #b7b7b7;\r\n}\r\n.solution-meta {\r\n\tflex-basis: 60%;\r\n\tpadding: 1rem;\r\n}\r\n.search-results-area .col-md-6:nth-child(odd),\r\n.skeleton-loader-wrp .col-md-6:nth-child(odd) {\r\n\tpadding-right: 9px;\r\n}\r\n.search-results-area .col-md-6:nth-child(even),\r\n.skeleton-loader-wrp .col-md-6:nth-child(even) {\r\n\tpadding-left: 9px;\r\n}\r\n.t-limit-record select {\r\n\tmax-width: 80px;\r\n\tdisplay: inline-block;\r\n}\r\n.discover.pagination li a {\r\n\tcolor: var(--black8);\r\n\tfont-size: 12px !important;\r\n}\r\n.discover.pagination li.active a {\r\n\tbackground-color: var(--primary-clr) !important;\r\n\tborder-color: var(--primary-clr) !important;\r\n\tcolor: var(--white);\r\n}\r\n.l-location-frm {\r\n\theight: 300px;\r\n\toverflow-y: scroll;\r\n}\r\n.search-box {\r\n\tposition: relative;\r\n\t-webkit-transition: all 0.2s ease;\r\n\ttransition: all 0.2s ease;\r\n}\r\n.search-box input {\r\n\tborder: none !important;\r\n\toutline: none !important;\r\n}\r\n.search-auto-complete-wrp {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tmax-height: 300px;\r\n\toverflow-y: auto;\r\n\tbackground-color: var(--white);\r\n\tborder-top: 1px solid #c3c7ce76 !important;\r\n\tz-index: 100000;\r\n\tborder-radius: 0px 0px 6px 6px;\r\n\tbox-shadow: 0 4px 6px rgba(32, 33, 36, 0.28);\r\n}\r\n.search-auto-complete-wrp ul {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style-type: none;\r\n}\r\n.search-auto-complete-wrp ul li {\r\n\tfont-size: 13px;\r\n\tcolor: #5f6368;\r\n}\r\n.search-auto-complete-wrp ul li div {\r\n\tpadding: 6px 15px;\r\n\t-webkit-transition: all 0.2s;\r\n\ttransition: all 0.2s;\r\n\tcursor: pointer;\r\n}\r\n.search-auto-complete-wrp ul li div:hover {\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY292ZXIvZGlzY292ZXItb2ZmZXJpbmdzL2Rpc2NvdmVyLW9mZmVyaW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCO0FBQ0E7Q0FDQyw2QkFBNkI7Q0FDN0Isc0JBQXNCO0FBQ3ZCO0FBQ0E7OztHQUdHO0FBQ0g7Q0FDQyxvQ0FBb0M7Q0FDcEMsa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0Msc0NBQXNDO0NBQ3RDLHVDQUF1QztBQUN4QztBQUNBO0NBQ0MseUNBQXlDO0NBQ3pDLDBDQUEwQztBQUMzQztBQUNBOzs7Q0FHQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDJDQUEyQztBQUM1QztBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsY0FBYztDQUNkLHlDQUF5QztBQUMxQztBQUVBLGFBQWE7QUFDYjtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsUUFBUTtDQUNSLFNBQVM7QUFDVjtBQUVBLGlCQUFpQjtBQUNqQjtDQUNDLGVBQWU7QUFDaEI7QUFFQSxtQkFBbUI7QUFDbkI7Q0FDQyxvQ0FBb0M7Q0FDcEMsNkVBQXFFO1NBQXJFLHFFQUFxRTtBQUN0RTtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFFQSxnQkFBZ0I7QUFFaEI7Q0FDQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFdBQVc7Q0FDWCxZQUFZO0NBQ1osV0FBVztBQUNaO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLFlBQVk7QUFDYjtBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sV0FBVztDQUNYLFlBQVk7Q0FDWixXQUFXO0NBQ1gsY0FBYztDQUNkLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsMEJBQW9CO1NBQXBCLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixlQUFlO0NBQ2YsaUNBQXlCO0NBQXpCLHlCQUF5QjtBQUMxQjtBQUVBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLDBCQUFvQjtTQUFwQixvQkFBb0I7Q0FDcEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsZUFBZTtDQUNmLGlDQUF5QjtDQUF6Qix5QkFBeUI7QUFDMUI7QUFFQTs7Q0FFQyxxQkFBcUI7Q0FDckIsaURBQWlEO0FBQ2xEO0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLDRCQUE0QjtDQUM1QiwyQkFBMkI7Q0FDM0IseUJBQXlCO0FBQzFCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtBQUNkO0FBRUE7O0NBRUMsa0JBQWtCO0FBQ25CO0FBRUE7O0NBRUMsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsMEJBQTBCO0FBQzNCO0FBRUE7Q0FDQywrQ0FBK0M7Q0FDL0MsMkNBQTJDO0NBQzNDLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGlDQUF5QjtDQUF6Qix5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLHVCQUF1QjtDQUN2Qix3QkFBd0I7QUFDekI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQiw4QkFBOEI7Q0FDOUIsMENBQTBDO0NBQzFDLGVBQWU7Q0FDZiw4QkFBOEI7Q0FDOUIsNENBQTRDO0FBQzdDO0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGNBQWM7QUFDZjtBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLDRCQUFvQjtDQUFwQixvQkFBb0I7Q0FDcEIsZUFBZTtBQUNoQjtBQUVBO0NBQ0MseUJBQXlCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvZGlzY292ZXIvZGlzY292ZXItb2ZmZXJpbmdzL2Rpc2NvdmVyLW9mZmVyaW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmwtd2F0ZXItbWFuZ2VtZW50LWNvbnQ6Zm9jdXMsXHJcbi5wYW5lbC1ib2R5OmZvY3VzIHtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtb2ZmZXJpbmctb3B0aW9uIHtcclxuXHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU2KTtcclxufVxyXG4ubC1maWx0ZXItcGFuZWwge1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLmwtZmlsdGVyLXBhbmVsLWJkcntcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNDM0M3Q0UgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNDM0M3Q0UgIWltcG9ydGFudDtcclxufSAqL1xyXG4ubC1maWx0ZXItcGFuZWwtZ3JwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYzNjN2NlICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbn1cclxuLmwtZmlsdGVyLXBhbmVsLWJkci1yYWQtdG9wIHtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtZmlsdGVyLXBhbmVsLWJkci1yYWQtYnRtIHtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtZmlsdGVyLXBhbmVsLWdycCBidXR0b246YWN0aXZlLFxyXG5sLWZpbHRlci1wYW5lbC1ncnA6aG92ZXIsXHJcbmwtZmlsdGVyLXBhbmVsLWdycDpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5sLWZpbHRlci1wYW5lbC1ncnAgYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzNjN2NlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLWRpc2Mtb2ZmLWJ0biB7XHJcblx0bWluLXdpZHRoOiA5MHB4O1xyXG59XHJcbi5sLWRpc2Mtb2ZmZXItc2x0IHtcclxuXHRtYXgtd2lkdGg6IDgzJTtcclxuXHQvKiBib3JkZXI6MXB4IHNvbGlkICNDM0M3Q0UgIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLyogY2hlY2tib3ggKi9cclxuLmEtY2hlY2tib3hbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0b3BhY2l0eTogMDtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIElNQUdFIFNUWUxFUyAqL1xyXG4uYS1jaGVja2JveFt0eXBlPVwiY2hlY2tib3hcIl0gKyAuZGlzY292ZXItY2hhbGxlbmdlcy1jYXJkIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENIRUNLRUQgU1RZTEVTICovXHJcbi5hLWNoZWNrYm94W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLmRpc2NvdmVyLWNoYWxsZW5nZXMtY2FyZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI4NThiNSAhaW1wb3J0YW50O1xyXG5cdGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAyMHB4IHJnYmEoMTU3LCAxODksIDI1MiwgMC41KSkgIWltcG9ydGFudDtcclxufVxyXG4uYS1jaGVja2JveFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5kaXNjb3Zlci1jaGFsbGVuZ2VzLWNhcmQgc3ZnIHBhdGgge1xyXG5cdGZpbGw6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWNoZWNrYm94W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLmRpc2NvdmVyLWNoYWxsZW5nZXMtY2FyZCAuYS1jbnQge1xyXG5cdGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogc2VhcmNoIGFyZWEgKi9cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy13cnAge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNlY3Rpb24tbG9hZGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnNlY3Rpb24tbG9hZGVyIC5sb2FkZXItd3JwIHtcclxuXHRkaXNwbGF5OiB0YWJsZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWxvYWRlciAubG9hZGVyLWlubmVyIHtcclxuXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm8tcmVzdWx0cy13cnAge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGRpc3BsYXk6IHRhYmxlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5vLXJlc3VsdHMtdHh0IHtcclxuXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc29sdXRpb24tY2FyZC13cnAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjMmM3Yzg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWFyZ2luLWJvdHRvbTogMThweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uc2tlbGV0b24tbG9hZGVyLXdycCAuc2tlbGV0b24tY2FyZC13cnAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjMmM3Yzg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWFyZ2luLWJvdHRvbTogMThweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uc29sdXRpb24tY2FyZC13cnA6Zm9jdXMsXHJcbi5zb2x1dGlvbi1jYXJkLXdycDpob3ZlciB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjM2I2ZmQ0O1xyXG5cdGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDE1NywgMTg5LCAyNTIsIDAuNSk7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1wcmV2aWV3IHtcclxuXHRmbGV4LWJhc2lzOiA0MCU7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjdiN2I3O1xyXG59XHJcblxyXG4uc29sdXRpb24tbWV0YSB7XHJcblx0ZmxleC1iYXNpczogNjAlO1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy1hcmVhIC5jb2wtbWQtNjpudGgtY2hpbGQob2RkKSxcclxuLnNrZWxldG9uLWxvYWRlci13cnAgLmNvbC1tZC02Om50aC1jaGlsZChvZGQpIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiA5cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy1hcmVhIC5jb2wtbWQtNjpudGgtY2hpbGQoZXZlbiksXHJcbi5za2VsZXRvbi1sb2FkZXItd3JwIC5jb2wtbWQtNjpudGgtY2hpbGQoZXZlbikge1xyXG5cdHBhZGRpbmctbGVmdDogOXB4O1xyXG59XHJcblxyXG4udC1saW1pdC1yZWNvcmQgc2VsZWN0IHtcclxuXHRtYXgtd2lkdGg6IDgwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZGlzY292ZXIucGFnaW5hdGlvbiBsaSBhIHtcclxuXHRjb2xvcjogdmFyKC0tYmxhY2s4KTtcclxuXHRmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc2NvdmVyLnBhZ2luYXRpb24gbGkuYWN0aXZlIGEge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuLmwtbG9jYXRpb24tZnJtIHtcclxuXHRoZWlnaHQ6IDMwMHB4O1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBpbnB1dCB7XHJcblx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWF1dG8tY29tcGxldGUtd3JwIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWF4LWhlaWdodDogMzAwcHg7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNjM2M3Y2U3NiAhaW1wb3J0YW50O1xyXG5cdHotaW5kZXg6IDEwMDAwMDtcclxuXHRib3JkZXItcmFkaXVzOiAwcHggMHB4IDZweCA2cHg7XHJcblx0Ym94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMzIsIDMzLCAzNiwgMC4yOCk7XHJcbn1cclxuXHJcbi5zZWFyY2gtYXV0by1jb21wbGV0ZS13cnAgdWwge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1hdXRvLWNvbXBsZXRlLXdycCB1bCBsaSB7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGNvbG9yOiAjNWY2MzY4O1xyXG59XHJcblxyXG4uc2VhcmNoLWF1dG8tY29tcGxldGUtd3JwIHVsIGxpIGRpdiB7XHJcblx0cGFkZGluZzogNnB4IDE1cHg7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWF1dG8tY29tcGxldGUtd3JwIHVsIGxpIGRpdjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/discover/discover-offerings/discover-offerings.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/discover/discover-offerings/discover-offerings.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DiscoverOfferingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverOfferingsComponent", function() { return DiscoverOfferingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _discover_solutions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discover-solutions.service */ "./src/app/discover/discover-offerings/discover-solutions.service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../const */ "./src/app/const.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");









let DiscoverOfferingsComponent = class DiscoverOfferingsComponent {
    constructor(_solutions, toastr) {
        this._solutions = _solutions;
        this.toastr = toastr;
        this.server_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
        this.searchLoader = false;
        this.solutionMaturity = [];
        this.challengeSector = [];
        this.sortByValues = [];
        this.solutionMaturityValues = [];
        this.teamSizeValues = [];
        this.sort_value = "created_at DESC";
        this.teamSize = [];
        this.LocationIds = [];
        this.providerIdBasedonLocations = [];
        this.providersIdBasedOnTeamsize = [];
        this.solutionIdBasedOnSector = [];
        this.query = {
            slug: {},
            filter: {},
            search: {
                name: "",
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
        this.teamSizeFilterClauses = [];
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
        });
    }
    ngOnInit() {
        // console.log("child component");
        this.sortByValues = _const__WEBPACK_IMPORTED_MODULE_4__["discoverSolutions"].sort_by_values;
        this.solutionMaturityValues = _const__WEBPACK_IMPORTED_MODULE_4__["discoverSolutions"].solution_maturity;
        this.teamSizeValues = _const__WEBPACK_IMPORTED_MODULE_4__["discoverSolutions"].team_size_options;
        this.listSolutions();
        this.listProviderLocations();
    }
    listSolutions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.searchLoader = true;
                this.solutions = yield this._solutions.discoverSolutions(this.query);
                this.solutions.data.map((e) => (e.images = JSON.parse(e.images)));
                this.searchLoader = false;
            }
            catch (err) {
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    listProviderLocations() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.providerLocations = yield this._solutions.getLocations();
            }
            catch (err) {
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    sortResults(event) {
        this.query.sort = event.target.value;
        this.listSolutions();
    }
    filterSector(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (event.target.checked) {
                this.challengeSector.push(parseInt(event.target.value));
            }
            else {
                this.challengeSector.splice(this.challengeSector.indexOf(parseInt(event.target.value)), 1);
            }
            this.query.filter.sector = this.challengeSector;
            if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.challengeSector))
                delete this.query.filter.sector;
            this.query.pg.skip = 0;
            this.listSolutions();
        });
    }
    filterSolutionStage(event) {
        if (event.target.checked) {
            this.solutionMaturity.push(event.target.value);
        }
        else {
            this.solutionMaturity.splice(this.solutionMaturity.indexOf(event.target.value), 1);
        }
        this.query.filter.stage = this.solutionMaturity;
        if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.solutionMaturity))
            delete this.query.filter.stage;
        this.query.pg.skip = 0;
        this.listSolutions();
    }
    filterLocation(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (event.target.checked) {
                this.LocationIds.push(parseInt(event.target.value));
            }
            else {
                this.LocationIds.splice(this.LocationIds.indexOf(parseInt(event.target.value)), 1);
            }
            this.query.filter.location = this.LocationIds;
            if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.LocationIds))
                delete this.query.filter.location;
            this.query.pg.skip = 0;
            this.listSolutions();
        });
    }
    filterTeamSize(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let from = event.target.value.split("-")[0];
            let to = event.target.value.split("-")[1];
            if (event.target.checked) {
                this.teamSizeFilterClauses.push({ from: parseInt(from), to: parseInt(to) });
            }
            else {
                let itemToBeRemoved = { from: parseInt(from), to: parseInt(to) };
                let deleteIndex = this.teamSizeFilterClauses.findIndex((a) => a.from == itemToBeRemoved.from);
                this.teamSizeFilterClauses.splice(deleteIndex, 1);
            }
            this.query.filter.teamsize = this.teamSizeFilterClauses;
            if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.teamSizeFilterClauses))
                delete this.query.filter.teamsize;
            this.query.pg.skip = 0;
            this.listSolutions();
        });
    }
    searchSolutions() {
        this.autoSuggestions = null;
        this.query.pg.skip = 0;
        this.listSolutions();
    }
    handlePagination(pageIndex) {
        this.query.pg.skip = (pageIndex - 1) * this.query.pg.limit;
        this.listSolutions();
    }
    autoComplete(keyword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (keyword.length > 3) {
                this.autoSuggestions = yield this._solutions.getSearchSuggestions({
                    search: { name: keyword },
                });
            }
            else if (keyword.length == 0) {
                this.searchSolutions();
            }
            else {
                this.autoSuggestions = null;
            }
        });
    }
    searchAutoSuggestion(keyword) {
        this.query.search.name = keyword;
        this.searchSolutions();
    }
};
DiscoverOfferingsComponent.ctorParameters = () => [
    { type: _discover_solutions_service__WEBPACK_IMPORTED_MODULE_3__["DiscoverSolutionsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserState"])
], DiscoverOfferingsComponent.prototype, "loggedInUser$", void 0);
DiscoverOfferingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-discover-offerings",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discover-offerings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover-offerings/discover-offerings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discover-offerings.component.css */ "./src/app/discover/discover-offerings/discover-offerings.component.css")).default]
    })
], DiscoverOfferingsComponent);



/***/ }),

/***/ "./src/app/discover/discover-offerings/discover-solutions.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/discover/discover-offerings/discover-solutions.service.ts ***!
  \***************************************************************************/
/*! exports provided: DiscoverSolutionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverSolutionsService", function() { return DiscoverSolutionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/helpers.service */ "./src/app/services/helpers.service.ts");





let DiscoverSolutionsService = class DiscoverSolutionsService {
    constructor(http, _hs) {
        this.http = http;
        this._hs = _hs;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    discoverSolutions(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const limit = parseInt(query.pg.limit);
            const page = parseInt(query.pg.skip) / limit + 1;
            const dataResponse = yield this.http.post(this.api_url + "/solutions/discover", query).toPromise();
            let totalResults = dataResponse.total_records;
            let startItem = totalResults > 0 ? (page - 1) * limit + 1 : 0;
            let endItem = totalResults > 0 ? startItem - 1 + dataResponse.data.length : 0;
            let PageCount = Math.ceil(totalResults / limit);
            dataResponse.currently_showing = { from: startItem, to: endItem };
            dataResponse.page_count = PageCount;
            return dataResponse;
        });
    }
    getSearchSuggestions(keyword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.http.post(this.api_url + "/solutions/select_mul", keyword).toPromise();
            let suggestions = [];
            response.data.forEach((element) => {
                suggestions.push(element.name);
            });
            let bestMatches = [];
            this._hs.sortBestMatches(keyword.search.name, suggestions).forEach((element) => {
                bestMatches.push(element.target);
            });
            return bestMatches;
        });
    }
    getLocations() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/locations/list", {}).toPromise();
        });
    }
    getProvidersBasedOnLocations(locations) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.http.post(this.api_url + "/locations_and_providers/select_mul", locations).toPromise();
            let providerIDs = [];
            response.data.forEach((provider) => {
                providerIDs.push(provider.frg_provider_id);
            });
            return providerIDs;
        });
    }
    getProvidersBasedOnTeamsize(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.http.post(this.api_url + "/providers/select_mul", query).toPromise();
            let providerIDs = [];
            response.data.forEach((provider) => {
                providerIDs.push(provider.id);
            });
            return providerIDs;
        });
    }
    getSolutionIdBasedOnChallengeSector(sectorIds) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.http
                .post(this.api_url + "/solutions_challenge_sectors/select_mul", {
                filter: {
                    frg_challenge_sector_id: sectorIds,
                    status: 'active'
                },
            })
                .toPromise();
            let solutionIds = response.data.map((e) => e.frg_solution_id);
            return solutionIds;
        });
    }
};
DiscoverSolutionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"] }
];
DiscoverSolutionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DiscoverSolutionsService);



/***/ }),

/***/ "./src/app/discover/discover-providers/discover-providers.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/discover/discover-providers/discover-providers.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".l-provd-card-rw:focus,\r\n.l-water-mangement-cont:focus {\r\n\toutline: none !important;\r\n}\r\n.l-filter-panel {\r\n\tborder-radius: 0px !important;\r\n\tborder: 0px !important;\r\n}\r\n.l-filter-panel-grp {\r\n\tborder: 1px solid #c3c7ce !important;\r\n\tborder-radius: 6px;\r\n\tborder-collapse: separate;\r\n}\r\n.l-filter-panel-bdr-rad-top {\r\n\tborder-top-left-radius: 6px !important;\r\n\tborder-top-right-radius: 6px !important;\r\n}\r\n.l-filter-panel-bdr-rad-btm {\r\n\tborder-bottom-left-radius: 6px !important;\r\n\tborder-bottom-right-radius: 6px !important;\r\n}\r\n.l-filter-panel-grp button:active,\r\nl-filter-panel-grp:hover,\r\nl-filter-panel-grp:focus {\r\n\tbox-shadow: none !important;\r\n}\r\n.l-filter-panel-grp button:not(:last-child) {\r\n\tborder-bottom: 1px solid #c3c7ce !important;\r\n}\r\n.l-disc-provider-sel {\r\n\tborder: 1px solid #c3c7ce !important;\r\n}\r\n/* checkbox */\r\n.a-checkbox[type=\"checkbox\"] {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\twidth: 0;\r\n\theight: 0;\r\n}\r\n/* IMAGE STYLES */\r\n.a-checkbox[type=\"checkbox\"] + .discover-challenges-card {\r\n\tcursor: pointer;\r\n}\r\n/* CHECKED STYLES */\r\n.a-checkbox[type=\"checkbox\"]:checked + .discover-challenges-card {\r\n\tbackground-color: #2858b5 !important;\r\n\t-webkit-filter: drop-shadow(5px 5px 20px rgba(157, 189, 252, 0.5)) !important;\r\n\t        filter: drop-shadow(5px 5px 20px rgba(157, 189, 252, 0.5)) !important;\r\n}\r\n.a-checkbox[type=\"checkbox\"]:checked + .discover-challenges-card svg path {\r\n\tfill: var(--white) !important;\r\n}\r\n.a-checkbox[type=\"checkbox\"]:checked + .discover-challenges-card .a-cnt {\r\n\tcolor: var(--white) !important;\r\n}\r\n/* search area */\r\n.search-results-wrp {\r\n\tposition: relative;\r\n\tmin-height: 100vh;\r\n}\r\n.section-loader {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tz-index: 10;\r\n}\r\n.section-loader .loader-wrp {\r\n\tdisplay: table;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.section-loader .loader-inner {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\ttext-align: center;\r\n}\r\n.no-results-wrp {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tz-index: 10;\r\n\tdisplay: table;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.no-results-txt {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\ttext-align: center;\r\n}\r\n.user-card-item,\r\n.skeleton-loader-wrp .skeleton-card-item {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\tpadding: 18px;\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #c2c7c8;\r\n\tborder-radius: 6px;\r\n\tmargin-bottom: 18px;\r\n\toutline: 0;\r\n\tcursor: pointer;\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n.user-card-item{\r\n\tmin-height: 155px;\r\n}\r\n.user-card-img {\r\n\tflex-basis: 32%;\r\n}\r\n.user-details {\r\n\tflex-basis: 68%;\r\n}\r\n.user-card-item:hover,\r\n.user-card-item:focus {\r\n\tborder-color: #3b6fd4;\r\n\tbox-shadow: 5px 5px 20px rgba(157, 189, 252, 0.5);\r\n}\r\n.search-results-area .col-md-6:nth-child(odd),\r\n.skeleton-loader-wrp .col-md-6:nth-child(odd) {\r\n\tpadding-right: 9px;\r\n}\r\n.search-results-area .col-md-6:nth-child(even),\r\n.skeleton-loader-wrp .col-md-6:nth-child(even) {\r\n\tpadding-left: 9px;\r\n}\r\n.user-details {\r\n\tpadding-left: 18px;\r\n}\r\n/* Discover-Providers */\r\n.provider-card {\r\n\twidth: 420px;\r\n\theight: 160px;\r\n\tmargin-left: auto !important;\r\n\tmargin-right: auto !important;\r\n\tborder: 1px solid #c2c7c8 !important;\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n\tcursor: pointer;\r\n}\r\n.provider-card:hover,\r\n.provider-card:focus {\r\n\tborder-color: var(--primary-clr) !important;\r\n\tbox-shadow: 5px 5px 20px rgba(157, 189, 252, 0.5);\r\n}\r\n.company-name {\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.provider-card:hover .company-name,\r\n.provider-card:focus .company-name {\r\n\tcolor: var(--primary-clr) !important;\r\n\topacity: 0.8 !important;\r\n}\r\n.provider-card:hover .offerings-pilot-wrapper,\r\n.provider-card:focus .offerings-pilot-wrapper {\r\n\tbackground-color: var(--primary-clr) !important;\r\n\tcolor: var(--white) !important;\r\n}\r\n.discover-provider-img {\r\n\twidth: 114px;\r\n\theight: 114px;\r\n\tborder-radius: 50%;\r\n}\r\n.image-placeholder {\r\n\twidth: 114px;\r\n\theight: 114px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #909090;\r\n}\r\n.t-limit-record select {\r\n\tmax-width: 80px;\r\n\tdisplay: inline-block;\r\n}\r\n.discover.pagination li a {\r\n\tcolor: var(--black8);\r\n\tfont-size: 12px !important;\r\n}\r\n.discover.pagination li.active a {\r\n\tbackground-color: var(--primary-clr) !important;\r\n\tborder-color: var(--primary-clr) !important;\r\n\tcolor: var(--white);\r\n}\r\n.l-disc-offer-slt {\r\n\tmax-width: 83%;\r\n\t/* border: 1px solid #c3c7ce !important; */\r\n}\r\n.l-location-frm {\r\n\theight: 300px;\r\n\toverflow-y: scroll;\r\n}\r\n.search-box {\r\n\tposition: relative;\r\n\t-webkit-transition: all 0.2s ease;\r\n\ttransition: all 0.2s ease;\r\n}\r\n.search-box input {\r\n\tborder: none !important;\r\n\toutline: none !important;\r\n}\r\n.search-auto-complete-wrp {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tmax-height: 300px;\r\n\toverflow-y: auto;\r\n\tbackground-color: var(--white);\r\n\tborder-top: 1px solid #c3c7ce76 !important;\r\n\tz-index: 100000;\r\n\tborder-radius: 0px 0px 6px 6px;\r\n\tbox-shadow: 0 4px 6px rgba(32, 33, 36, 0.28);\r\n}\r\n.search-auto-complete-wrp ul {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style-type: none;\r\n}\r\n.search-auto-complete-wrp ul li {\r\n\tfont-size: 13px;\r\n\tcolor: #5f6368;\r\n}\r\n.search-auto-complete-wrp ul li div {\r\n\tpadding: 6px 15px;\r\n\t-webkit-transition: all 0.2s;\r\n\ttransition: all 0.2s;\r\n\tcursor: pointer;\r\n}\r\n.search-auto-complete-wrp ul li div:hover {\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY292ZXIvZGlzY292ZXItcHJvdmlkZXJzL2Rpc2NvdmVyLXByb3ZpZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsNkJBQTZCO0NBQzdCLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHNDQUFzQztDQUN0Qyx1Q0FBdUM7QUFDeEM7QUFDQTtDQUNDLHlDQUF5QztDQUN6QywwQ0FBMEM7QUFDM0M7QUFDQTs7O0NBR0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQywyQ0FBMkM7QUFDNUM7QUFDQTtDQUNDLG9DQUFvQztBQUNyQztBQUVBLGFBQWE7QUFDYjtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsUUFBUTtDQUNSLFNBQVM7QUFDVjtBQUVBLGlCQUFpQjtBQUNqQjtDQUNDLGVBQWU7QUFDaEI7QUFFQSxtQkFBbUI7QUFDbkI7Q0FDQyxvQ0FBb0M7Q0FDcEMsNkVBQXFFO1NBQXJFLHFFQUFxRTtBQUN0RTtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFFQSxnQkFBZ0I7QUFFaEI7Q0FDQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFdBQVc7Q0FDWCxZQUFZO0NBQ1osV0FBVztBQUNaO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLFlBQVk7QUFDYjtBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sV0FBVztDQUNYLFlBQVk7Q0FDWixXQUFXO0NBQ1gsY0FBYztDQUNkLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBRUE7O0NBRUMsb0JBQWE7Q0FBYixhQUFhO0NBQ2IsYUFBYTtDQUNiLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsZUFBZTtDQUNmLGlDQUF5QjtDQUF6Qix5QkFBeUI7Q0FDekIseUJBQW1CO1NBQW5CLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBRUE7O0NBRUMscUJBQXFCO0NBQ3JCLGlEQUFpRDtBQUNsRDtBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjtBQUVBOztDQUVDLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBRUEsdUJBQXVCO0FBQ3ZCO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYiw0QkFBNEI7Q0FDNUIsNkJBQTZCO0NBQzdCLG9DQUFvQztDQUNwQyxpQ0FBeUI7Q0FBekIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7QUFDQTs7Q0FFQywyQ0FBMkM7Q0FDM0MsaURBQWlEO0FBQ2xEO0FBRUE7Q0FDQyxpQ0FBeUI7Q0FBekIseUJBQXlCO0FBQzFCO0FBRUE7O0NBRUMsb0NBQW9DO0NBQ3BDLHVCQUF1QjtBQUN4QjtBQUVBOztDQUVDLCtDQUErQztDQUMvQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2Isa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLGVBQWU7Q0FDZixxQkFBcUI7QUFDdEI7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQiwwQkFBMEI7QUFDM0I7QUFFQTtDQUNDLCtDQUErQztDQUMvQywyQ0FBMkM7Q0FDM0MsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsMENBQTBDO0FBQzNDO0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsaUNBQXlCO0NBQXpCLHlCQUF5QjtBQUMxQjtBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHdCQUF3QjtBQUN6QjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLDhCQUE4QjtDQUM5QiwwQ0FBMEM7Q0FDMUMsZUFBZTtDQUNmLDhCQUE4QjtDQUM5Qiw0Q0FBNEM7QUFDN0M7QUFFQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztBQUNmO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsNEJBQW9CO0NBQXBCLG9CQUFvQjtDQUNwQixlQUFlO0FBQ2hCO0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9kaXNjb3Zlci9kaXNjb3Zlci1wcm92aWRlcnMvZGlzY292ZXItcHJvdmlkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubC1wcm92ZC1jYXJkLXJ3OmZvY3VzLFxyXG4ubC13YXRlci1tYW5nZW1lbnQtY29udDpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5sLWZpbHRlci1wYW5lbCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubC1maWx0ZXItcGFuZWwtZ3JwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYzNjN2NlICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbn1cclxuLmwtZmlsdGVyLXBhbmVsLWJkci1yYWQtdG9wIHtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtZmlsdGVyLXBhbmVsLWJkci1yYWQtYnRtIHtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtZmlsdGVyLXBhbmVsLWdycCBidXR0b246YWN0aXZlLFxyXG5sLWZpbHRlci1wYW5lbC1ncnA6aG92ZXIsXHJcbmwtZmlsdGVyLXBhbmVsLWdycDpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5sLWZpbHRlci1wYW5lbC1ncnAgYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzNjN2NlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtZGlzYy1wcm92aWRlci1zZWwge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjM2M3Y2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogY2hlY2tib3ggKi9cclxuLmEtY2hlY2tib3hbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0b3BhY2l0eTogMDtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIElNQUdFIFNUWUxFUyAqL1xyXG4uYS1jaGVja2JveFt0eXBlPVwiY2hlY2tib3hcIl0gKyAuZGlzY292ZXItY2hhbGxlbmdlcy1jYXJkIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENIRUNLRUQgU1RZTEVTICovXHJcbi5hLWNoZWNrYm94W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLmRpc2NvdmVyLWNoYWxsZW5nZXMtY2FyZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI4NThiNSAhaW1wb3J0YW50O1xyXG5cdGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAyMHB4IHJnYmEoMTU3LCAxODksIDI1MiwgMC41KSkgIWltcG9ydGFudDtcclxufVxyXG4uYS1jaGVja2JveFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5kaXNjb3Zlci1jaGFsbGVuZ2VzLWNhcmQgc3ZnIHBhdGgge1xyXG5cdGZpbGw6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWNoZWNrYm94W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLmRpc2NvdmVyLWNoYWxsZW5nZXMtY2FyZCAuYS1jbnQge1xyXG5cdGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogc2VhcmNoIGFyZWEgKi9cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy13cnAge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNlY3Rpb24tbG9hZGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnNlY3Rpb24tbG9hZGVyIC5sb2FkZXItd3JwIHtcclxuXHRkaXNwbGF5OiB0YWJsZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWxvYWRlciAubG9hZGVyLWlubmVyIHtcclxuXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm8tcmVzdWx0cy13cnAge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGRpc3BsYXk6IHRhYmxlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5vLXJlc3VsdHMtdHh0IHtcclxuXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udXNlci1jYXJkLWl0ZW0sXHJcbi5za2VsZXRvbi1sb2FkZXItd3JwIC5za2VsZXRvbi1jYXJkLWl0ZW0ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0cGFkZGluZzogMThweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2MyYzdjODtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMThweDtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnVzZXItY2FyZC1pdGVte1xyXG5cdG1pbi1oZWlnaHQ6IDE1NXB4O1xyXG59XHJcblxyXG4udXNlci1jYXJkLWltZyB7XHJcblx0ZmxleC1iYXNpczogMzIlO1xyXG59XHJcblxyXG4udXNlci1kZXRhaWxzIHtcclxuXHRmbGV4LWJhc2lzOiA2OCU7XHJcbn1cclxuXHJcbi51c2VyLWNhcmQtaXRlbTpob3ZlcixcclxuLnVzZXItY2FyZC1pdGVtOmZvY3VzIHtcclxuXHRib3JkZXItY29sb3I6ICMzYjZmZDQ7XHJcblx0Ym94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMTU3LCAxODksIDI1MiwgMC41KTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzLWFyZWEgLmNvbC1tZC02Om50aC1jaGlsZChvZGQpLFxyXG4uc2tlbGV0b24tbG9hZGVyLXdycCAuY29sLW1kLTY6bnRoLWNoaWxkKG9kZCkge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDlweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzLWFyZWEgLmNvbC1tZC02Om50aC1jaGlsZChldmVuKSxcclxuLnNrZWxldG9uLWxvYWRlci13cnAgLmNvbC1tZC02Om50aC1jaGlsZChldmVuKSB7XHJcblx0cGFkZGluZy1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi51c2VyLWRldGFpbHMge1xyXG5cdHBhZGRpbmctbGVmdDogMThweDtcclxufVxyXG5cclxuLyogRGlzY292ZXItUHJvdmlkZXJzICovXHJcbi5wcm92aWRlci1jYXJkIHtcclxuXHR3aWR0aDogNDIwcHg7XHJcblx0aGVpZ2h0OiAxNjBweDtcclxuXHRtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjMmM3YzggIWltcG9ydGFudDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvdmlkZXItY2FyZDpob3ZlcixcclxuLnByb3ZpZGVyLWNhcmQ6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpICFpbXBvcnRhbnQ7XHJcblx0Ym94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMTU3LCAxODksIDI1MiwgMC41KTtcclxufVxyXG5cclxuLmNvbXBhbnktbmFtZSB7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnByb3ZpZGVyLWNhcmQ6aG92ZXIgLmNvbXBhbnktbmFtZSxcclxuLnByb3ZpZGVyLWNhcmQ6Zm9jdXMgLmNvbXBhbnktbmFtZSB7XHJcblx0Y29sb3I6IHZhcigtLXByaW1hcnktY2xyKSAhaW1wb3J0YW50O1xyXG5cdG9wYWNpdHk6IDAuOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvdmlkZXItY2FyZDpob3ZlciAub2ZmZXJpbmdzLXBpbG90LXdyYXBwZXIsXHJcbi5wcm92aWRlci1jYXJkOmZvY3VzIC5vZmZlcmluZ3MtcGlsb3Qtd3JhcHBlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNjb3Zlci1wcm92aWRlci1pbWcge1xyXG5cdHdpZHRoOiAxMTRweDtcclxuXHRoZWlnaHQ6IDExNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmltYWdlLXBsYWNlaG9sZGVyIHtcclxuXHR3aWR0aDogMTE0cHg7XHJcblx0aGVpZ2h0OiAxMTRweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzkwOTA5MDtcclxufVxyXG5cclxuLnQtbGltaXQtcmVjb3JkIHNlbGVjdCB7XHJcblx0bWF4LXdpZHRoOiA4MHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRpc2NvdmVyLnBhZ2luYXRpb24gbGkgYSB7XHJcblx0Y29sb3I6IHZhcigtLWJsYWNrOCk7XHJcblx0Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNjb3Zlci5wYWdpbmF0aW9uIGxpLmFjdGl2ZSBhIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscikgIWltcG9ydGFudDtcclxuXHRib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY2xyKSAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5sLWRpc2Mtb2ZmZXItc2x0IHtcclxuXHRtYXgtd2lkdGg6IDgzJTtcclxuXHQvKiBib3JkZXI6IDFweCBzb2xpZCAjYzNjN2NlICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuXHJcbi5sLWxvY2F0aW9uLWZybSB7XHJcblx0aGVpZ2h0OiAzMDBweDtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXQge1xyXG5cdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaC1hdXRvLWNvbXBsZXRlLXdycCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1heC1oZWlnaHQ6IDMwMHB4O1xyXG5cdG92ZXJmbG93LXk6IGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzNjN2NlNzYgIWltcG9ydGFudDtcclxuXHR6LWluZGV4OiAxMDAwMDA7XHJcblx0Ym9yZGVyLXJhZGl1czogMHB4IDBweCA2cHggNnB4O1xyXG5cdGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDMyLCAzMywgMzYsIDAuMjgpO1xyXG59XHJcblxyXG4uc2VhcmNoLWF1dG8tY29tcGxldGUtd3JwIHVsIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYXV0by1jb21wbGV0ZS13cnAgdWwgbGkge1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRjb2xvcjogIzVmNjM2ODtcclxufVxyXG5cclxuLnNlYXJjaC1hdXRvLWNvbXBsZXRlLXdycCB1bCBsaSBkaXYge1xyXG5cdHBhZGRpbmc6IDZweCAxNXB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1hdXRvLWNvbXBsZXRlLXdycCB1bCBsaSBkaXY6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/discover/discover-providers/discover-providers.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/discover/discover-providers/discover-providers.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DiscoverProvidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverProvidersComponent", function() { return DiscoverProvidersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _discover_providers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discover-providers.service */ "./src/app/discover/discover-providers/discover-providers.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../const */ "./src/app/const.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");









let DiscoverProvidersComponent = class DiscoverProvidersComponent {
    constructor(_provider, toastr) {
        this._provider = _provider;
        this.toastr = toastr;
        this.server_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server_url;
        this.challengeSector = [];
        this.query = {
            slug: {},
            filter: {},
            search: {
                name: "",
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
        this.searchKeyWord = "";
        this.searchLoader = false;
        this.profileImageLoaded = true;
        this.sortByValues = [];
        this.providerRoleValues = [];
        this.teamSizeValues = [];
        this.sortValue = "created_at DESC";
        this.teamSizeFilterClauses = [];
        this.LocationIds = [];
        this.entityType = [];
        this.providerIdBasedonLocations = [];
        this.providersIdBasedOnTeamsize = [];
        this.providerIdsBasedonChallengeSector = [];
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
        });
    }
    ngOnInit() {
        this.sortByValues = _const__WEBPACK_IMPORTED_MODULE_5__["discoverProviders"].sort_by_values;
        this.providerRoleValues = _const__WEBPACK_IMPORTED_MODULE_5__["discoverProviders"].provider_role;
        this.teamSizeValues = _const__WEBPACK_IMPORTED_MODULE_5__["discoverProviders"].team_size_options;
        this.listProviders();
        this.listProviderLocations();
    }
    listProviders() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.searchLoader = true;
                this.providers = yield this._provider.discoverProviders(this.query);
                this.searchLoader = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    listProviderLocations() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.providerLocationsValues = yield this._provider.getLocations();
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    filterSector(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (event.target.checked) {
                    this.challengeSector.push(parseInt(event.target.value));
                }
                else {
                    this.challengeSector.splice(this.challengeSector.indexOf(parseInt(event.target.value)), 1);
                }
                this.query.filter.sector = this.challengeSector;
                if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.challengeSector))
                    delete this.query.filter.sector;
                this.query.pg.skip = 0;
                this.listProviders();
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    filterEntity(event) {
        if (event.target.checked) {
            this.entityType.push(event.target.value);
        }
        else {
            this.entityType.splice(this.entityType.indexOf(event.target.value), 1);
        }
        this.query.filter.role = this.entityType;
        if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.entityType))
            delete this.query.filter.role;
        this.query.pg.skip = 0;
        this.listProviders();
    }
    filterTeamSize(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let from = event.target.value.split("-")[0];
            let to = event.target.value.split("-")[1];
            if (event.target.checked) {
                this.teamSizeFilterClauses.push({ from: parseInt(from), to: parseInt(to) });
            }
            else {
                let itemToBeRemoved = { from: parseInt(from), to: parseInt(to) };
                let deleteIndex = this.teamSizeFilterClauses.findIndex((a) => a.from == itemToBeRemoved.from);
                this.teamSizeFilterClauses.splice(deleteIndex, 1);
            }
            this.query.filter.teamsize = this.teamSizeFilterClauses;
            if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.teamSizeFilterClauses))
                delete this.query.filter.teamsize;
            this.query.pg.skip = 0;
            this.listProviders();
        });
    }
    filterLocation(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (event.target.checked) {
                    this.LocationIds.push(parseInt(event.target.value));
                }
                else {
                    this.LocationIds.splice(this.LocationIds.indexOf(parseInt(event.target.value)), 1);
                }
                this.query.filter.location = this.LocationIds;
                if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.LocationIds))
                    delete this.query.filter.location;
                this.query.pg.skip = 0;
                this.listProviders();
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    searchProvider() {
        this.autoSuggestions = null;
        this.query.pg.skip = 0;
        this.listProviders();
    }
    changeLimit() {
        this.query.pg.skip = 0;
        this.listProviders();
        window.scrollTo(0, 0);
    }
    handlePagination(page) {
        this.query.pg.skip = (page - 1) * this.query.pg.limit;
        this.listProviders();
    }
    sortResults(event) {
        this.query.sort = event.target.value;
        this.listProviders();
    }
    intersectArray(x, y) {
        if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](x))
            return y;
        else if (lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](y))
            return x;
        else
            return lodash__WEBPACK_IMPORTED_MODULE_6__["intersection"](x, y);
    }
    autoComplete(keyword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.query.search.name = keyword;
            if (keyword.length > 3) {
                this.autoSuggestions = yield this._provider.getSearchSuggestions({
                    search: {
                        name: keyword,
                    },
                });
            }
            else if (keyword.length == 0) {
                this.searchProvider();
            }
            else {
                this.autoSuggestions = null;
            }
        });
    }
    searchAutoSuggestion(keyword) {
        this.query.search.name = keyword;
        this.searchKeyWord = keyword;
        this.searchProvider();
    }
};
DiscoverProvidersComponent.ctorParameters = () => [
    { type: _discover_providers_service__WEBPACK_IMPORTED_MODULE_2__["DiscoverProvidersService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserState"])
], DiscoverProvidersComponent.prototype, "loggedInUser$", void 0);
DiscoverProvidersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-discover-providers",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discover-providers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover-providers/discover-providers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discover-providers.component.css */ "./src/app/discover/discover-providers/discover-providers.component.css")).default]
    })
], DiscoverProvidersComponent);



/***/ }),

/***/ "./src/app/discover/discover-providers/discover-providers.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/discover/discover-providers/discover-providers.service.ts ***!
  \***************************************************************************/
/*! exports provided: DiscoverProvidersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverProvidersService", function() { return DiscoverProvidersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/helpers.service */ "./src/app/services/helpers.service.ts");





let DiscoverProvidersService = class DiscoverProvidersService {
    constructor(http, _hs) {
        this.http = http;
        this._hs = _hs;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    discoverProviders(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const limit = parseInt(postData.pg.limit);
            const page = parseInt(postData.pg.skip) / limit + 1;
            const dataResponse = yield this.http.post(this.api_url + "/providers/discover", postData).toPromise();
            let totalResults = dataResponse.total_records;
            let startItem = totalResults > 0 ? (page - 1) * limit + 1 : 0;
            let endItem = totalResults > 0 ? startItem - 1 + dataResponse.data.length : 0;
            let PageCount = Math.ceil(totalResults / limit);
            dataResponse.currently_showing = { from: startItem, to: endItem };
            dataResponse.total_results = totalResults;
            dataResponse.page_count = PageCount;
            return dataResponse;
        });
    }
    getSearchSuggestions(keyword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.http.post(this.api_url + "/providers/search_auto_suggestions", keyword).toPromise();
            let suggestions = [];
            response.data.forEach((element) => {
                if (element.enterprise_company_name) {
                    suggestions.push(element.enterprise_company_name);
                }
                else if (element.startup_company_name) {
                    suggestions.push(element.startup_company_name);
                }
                else if (!element.enterprise_company_name && !element.startup_company_name) {
                    suggestions.push(element.fullname);
                }
            });
            // console.log(suggestions);
            let bestMatches = [];
            this._hs.sortBestMatches(keyword.search.name, suggestions).forEach((element) => {
                bestMatches.push(element.target);
            });
            // console.log(bestMatches);
            return bestMatches;
        });
    }
    getLocations() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/locations/list", {}).toPromise();
        });
    }
    getProviderIdBasedOnChallengeSector(challengeSectorIds) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.http.post(this.api_url + "/challenge_sectors_and_providers/select_mul", challengeSectorIds).toPromise();
            let providerIDs = [];
            response.data.forEach((provider) => {
                providerIDs.push(provider.frg_provider_id);
            });
            return providerIDs;
        });
    }
    getProvidersBasedOnLocations(locations) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.http.post(this.api_url + "/locations_and_providers/select_mul", locations).toPromise();
            let providerIDs = [];
            response.data.forEach((provider) => {
                providerIDs.push(provider.frg_provider_id);
            });
            return providerIDs;
        });
    }
};
DiscoverProvidersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"] }
];
DiscoverProvidersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DiscoverProvidersService);



/***/ }),

/***/ "./src/app/discover/discover-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/discover/discover-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DiscoverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverRoutingModule", function() { return DiscoverRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _discover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discover.component */ "./src/app/discover/discover.component.ts");
/* harmony import */ var _discover_offerings_discover_offerings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discover-offerings/discover-offerings.component */ "./src/app/discover/discover-offerings/discover-offerings.component.ts");
/* harmony import */ var _discover_providers_discover_providers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover-providers/discover-providers.component */ "./src/app/discover/discover-providers/discover-providers.component.ts");
/* harmony import */ var _discover_challenge_provider_discover_challenge_provider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover-challenge-provider/discover-challenge-provider.component */ "./src/app/discover/discover-challenge-provider/discover-challenge-provider.component.ts");
/* harmony import */ var _select_sector_select_sector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-sector/select-sector.component */ "./src/app/discover/select-sector/select-sector.component.ts");








const routes = [
    { path: '',
        component: _discover_component__WEBPACK_IMPORTED_MODULE_3__["DiscoverComponent"],
        children: [
            {
                path: '',
                redirectTo: 'challenges',
                pathMatch: 'full'
            },
            {
                path: 'select-sector',
                component: _select_sector_select_sector_component__WEBPACK_IMPORTED_MODULE_7__["SelectSectorComponent"],
            },
            {
                path: 'challenges',
                component: _discover_challenge_provider_discover_challenge_provider_component__WEBPACK_IMPORTED_MODULE_6__["DiscoverChallengeProviderComponent"],
                data: { reuseRoute: true },
            },
            {
                path: 'solutions',
                component: _discover_offerings_discover_offerings_component__WEBPACK_IMPORTED_MODULE_4__["DiscoverOfferingsComponent"],
                data: { reuseRoute: true },
            },
            {
                path: 'providers',
                component: _discover_providers_discover_providers_component__WEBPACK_IMPORTED_MODULE_5__["DiscoverProvidersComponent"],
                data: { reuseRoute: true },
            },
        ]
    }
];
let DiscoverRoutingModule = class DiscoverRoutingModule {
};
DiscoverRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DiscoverRoutingModule);



/***/ }),

/***/ "./src/app/discover/discover.component.css":
/*!*************************************************!*\
  !*** ./src/app/discover/discover.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2NvdmVyL2Rpc2NvdmVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/discover/discover.component.ts":
/*!************************************************!*\
  !*** ./src/app/discover/discover.component.ts ***!
  \************************************************/
/*! exports provided: DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DiscoverComponent = class DiscoverComponent {
    constructor() { }
    ngOnInit() {
    }
};
DiscoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discover',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discover.component.css */ "./src/app/discover/discover.component.css")).default]
    })
], DiscoverComponent);



/***/ }),

/***/ "./src/app/discover/discover.module.ts":
/*!*********************************************!*\
  !*** ./src/app/discover/discover.module.ts ***!
  \*********************************************/
/*! exports provided: DiscoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverModule", function() { return DiscoverModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _discover_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discover-routing.module */ "./src/app/discover/discover-routing.module.ts");
/* harmony import */ var _discover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover.component */ "./src/app/discover/discover.component.ts");
/* harmony import */ var _discover_offerings_discover_offerings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover-offerings/discover-offerings.component */ "./src/app/discover/discover-offerings/discover-offerings.component.ts");
/* harmony import */ var _discover_providers_discover_providers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discover-providers/discover-providers.component */ "./src/app/discover/discover-providers/discover-providers.component.ts");
/* harmony import */ var _discover_challenge_provider_discover_challenge_provider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./discover-challenge-provider/discover-challenge-provider.component */ "./src/app/discover/discover-challenge-provider/discover-challenge-provider.component.ts");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var _widgets_sector_filter_sector_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/sector-filter/sector-filter.component */ "./src/app/discover/widgets/sector-filter/sector-filter.component.ts");
/* harmony import */ var _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/widgets/widgets.module */ "./src/app/shared/widgets/widgets.module.ts");
/* harmony import */ var _create_challenge_btn_modal_create_challenge_btn_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-challenge-btn-modal/create-challenge-btn-modal.component */ "./src/app/discover/create-challenge-btn-modal/create-challenge-btn-modal.component.ts");
/* harmony import */ var _select_sector_select_sector_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./select-sector/select-sector.component */ "./src/app/discover/select-sector/select-sector.component.ts");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-responsive-carousel */ "./node_modules/angular-responsive-carousel/fesm2015/angular-responsive-carousel.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
















let DiscoverModule = class DiscoverModule {
};
DiscoverModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _discover_component__WEBPACK_IMPORTED_MODULE_5__["DiscoverComponent"],
            _discover_offerings_discover_offerings_component__WEBPACK_IMPORTED_MODULE_6__["DiscoverOfferingsComponent"],
            _discover_providers_discover_providers_component__WEBPACK_IMPORTED_MODULE_7__["DiscoverProvidersComponent"],
            _discover_challenge_provider_discover_challenge_provider_component__WEBPACK_IMPORTED_MODULE_8__["DiscoverChallengeProviderComponent"],
            _widgets_sector_filter_sector_filter_component__WEBPACK_IMPORTED_MODULE_10__["SectorFilterComponent"],
            _create_challenge_btn_modal_create_challenge_btn_modal_component__WEBPACK_IMPORTED_MODULE_12__["CreateChallengeBtnModalComponent"],
            _select_sector_select_sector_component__WEBPACK_IMPORTED_MODULE_13__["SelectSectorComponent"],
            _select_sector_select_sector_component__WEBPACK_IMPORTED_MODULE_13__["SafeHtmlPipe"],
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _discover_routing_module__WEBPACK_IMPORTED_MODULE_4__["DiscoverRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderModule"].forRoot(), _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__["WidgetsModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_14__["IvyCarouselModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"]],
        exports: [
            _create_challenge_btn_modal_create_challenge_btn_modal_component__WEBPACK_IMPORTED_MODULE_12__["CreateChallengeBtnModalComponent"]
        ]
    })
], DiscoverModule);



/***/ }),

/***/ "./src/app/discover/select-sector/select-sector.component.css":
/*!********************************************************************!*\
  !*** ./src/app/discover/select-sector/select-sector.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".l-sel-sec-hdr {\r\n  color: var(--title-active);\r\n}\r\n\r\n.l-sel-sec-sec-2-cont {\r\n  max-width: 850px;\r\n  margin: auto;\r\n}\r\n\r\n.l-sel-sec-sec-2-ul {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-template-rows: repeat(4, auto);\r\n  row-gap: 18px;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.l-sel-sec-sec-2-ul-li {\r\n  background: #fff;\r\n  width: 175px;\r\n  margin-top: 10px;\r\n  color: white;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  border: 1px solid #dedede;\r\n  border-radius: 4px;\r\n}\r\n\r\n.l-sel-sec-sec-2-ul-li label {\r\n  width: 100%;\r\n  cursor: pointer;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.l-sel-sec-sec-2-ul-li:hover,\r\n.l-sel-sec-sec-2-ul-li:active,\r\n.l-sel-sec-sec-2-ul-li:focus {\r\n  border: 1px solid var(--primary-green);\r\n  box-shadow: 0px 4px 25px rgba(172, 177, 193, 0.4);\r\n}\r\n\r\n.l-sect-card {\r\n  min-height: 153px;\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n/* .l-sect-gov-card svg,.l-sect-edu-card svg{\r\n    width: 60px;\r\n    height: 60px;\r\n} */\r\n\r\n:host ::ng-deep .l-sect-gov-card svg,\r\n:host ::ng-deep .l-sect-edu-card svg {\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n.l-sel-sec-sec-2-ul input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.l-sel-sec-sec-2-sec-name {\r\n  color: var(--black-clr);\r\n  margin-top: 10px;\r\n}\r\n\r\n.l-sel-sec-sec-2-ul\r\n  .l-sect-checkbox[type=\"checkbox\"]:checked\r\n  + .l-sect-card\r\n  .l-sel-sec-sec-2-sec-name {\r\n  color: var(--white) !important;\r\n}\r\n\r\n.l-sect-checkbox[type=\"checkbox\"]:checked + .l-sect-card {\r\n  background-color: var(--primary-green) !important;\r\n}\r\n\r\n.l-sel-sec-btn {\r\n  background: var(--primary-green);\r\n  padding: 10px 100px;\r\n  color: #fff;\r\n  font-weight: 500;\r\n}\r\n\r\n:host\r\n  ::ng-deep\r\n  .l-sect-checkbox[type=\"checkbox\"]:checked\r\n  + .l-sect-card\r\n  div\r\n  svg\r\n  > path {\r\n  fill: #fff !important;\r\n}\r\n\r\n.l-sel-sec-btn-disabled {\r\n  background: #dedede;\r\n  color: var(--body-grey);\r\n  font-weight: 500;\r\n}\r\n\r\n.select-sector-wrp {\r\n  min-height: 100vh;\r\n}\r\n\r\n.g-danger-clr {\r\n  color: #f8483d;\r\n}\r\n\r\n.g-danger-bg {\r\n  background-color: #f8483d;\r\n}\r\n\r\n@media only screen and (max-width: 991px) {\r\n  .l-sel-sec-sec-2-ul {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(2, auto);\r\n  }\r\n  .l-sel-sec-sec-2-ul-li {\r\n    margin: auto;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 661px) {\r\n  .l-sel-sec-sec-2-ul {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 435px) {\r\n  .l-sel-sec-sec-2-ul {\r\n    display: grid;\r\n    grid-template-columns: repeat(1, 1fr);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY292ZXIvc2VsZWN0LXNlY3Rvci9zZWxlY3Qtc2VjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLHNDQUFzQztFQUN0QyxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFDQTs7O0dBR0c7O0FBQ0g7O0VBRUUsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBQ0E7Ozs7Ozs7RUFPRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHFDQUFxQztFQUN2QztBQUNGOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IscUNBQXFDO0VBQ3ZDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kaXNjb3Zlci9zZWxlY3Qtc2VjdG9yL3NlbGVjdC1zZWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sLXNlbC1zZWMtaGRyIHtcclxuICBjb2xvcjogdmFyKC0tdGl0bGUtYWN0aXZlKTtcclxufVxyXG5cclxuLmwtc2VsLXNlYy1zZWMtMi1jb250IHtcclxuICBtYXgtd2lkdGg6IDg1MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmwtc2VsLXNlYy1zZWMtMi11bCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pO1xyXG4gIHJvdy1nYXA6IDE4cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubC1zZWwtc2VjLXNlYy0yLXVsLWxpIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHdpZHRoOiAxNzVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ubC1zZWwtc2VjLXNlYy0yLXVsLWxpIGxhYmVsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ubC1zZWwtc2VjLXNlYy0yLXVsLWxpOmhvdmVyLFxyXG4ubC1zZWwtc2VjLXNlYy0yLXVsLWxpOmFjdGl2ZSxcclxuLmwtc2VsLXNlYy1zZWMtMi11bC1saTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyNXB4IHJnYmEoMTcyLCAxNzcsIDE5MywgMC40KTtcclxufVxyXG5cclxuLmwtc2VjdC1jYXJkIHtcclxuICBtaW4taGVpZ2h0OiAxNTNweDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG4vKiAubC1zZWN0LWdvdi1jYXJkIHN2ZywubC1zZWN0LWVkdS1jYXJkIHN2Z3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59ICovXHJcbjpob3N0IDo6bmctZGVlcCAubC1zZWN0LWdvdi1jYXJkIHN2ZyxcclxuOmhvc3QgOjpuZy1kZWVwIC5sLXNlY3QtZWR1LWNhcmQgc3ZnIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmwtc2VsLXNlYy1zZWMtMi11bCBpbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcbi5sLXNlbC1zZWMtc2VjLTItc2VjLW5hbWUge1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjay1jbHIpO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5sLXNlbC1zZWMtc2VjLTItdWxcclxuICAubC1zZWN0LWNoZWNrYm94W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkXHJcbiAgKyAubC1zZWN0LWNhcmRcclxuICAubC1zZWwtc2VjLXNlYy0yLXNlYy1uYW1lIHtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLXNlY3QtY2hlY2tib3hbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAubC1zZWN0LWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtc2VsLXNlYy1idG4ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gIHBhZGRpbmc6IDEwcHggMTAwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG46aG9zdFxyXG4gIDo6bmctZGVlcFxyXG4gIC5sLXNlY3QtY2hlY2tib3hbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWRcclxuICArIC5sLXNlY3QtY2FyZFxyXG4gIGRpdlxyXG4gIHN2Z1xyXG4gID4gcGF0aCB7XHJcbiAgZmlsbDogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5sLXNlbC1zZWMtYnRuLWRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWdyZXkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zZWxlY3Qtc2VjdG9yLXdycCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5nLWRhbmdlci1jbHIge1xyXG4gIGNvbG9yOiAjZjg0ODNkO1xyXG59XHJcbi5nLWRhbmdlci1iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NDgzZDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmwtc2VsLXNlYy1zZWMtMi11bCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xyXG4gIH1cclxuICAubC1zZWwtc2VjLXNlYy0yLXVsLWxpIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjFweCkge1xyXG4gIC5sLXNlbC1zZWMtc2VjLTItdWwge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDM1cHgpIHtcclxuICAubC1zZWwtc2VjLXNlYy0yLXVsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/discover/select-sector/select-sector.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/discover/select-sector/select-sector.component.ts ***!
  \*******************************************************************/
/*! exports provided: SelectSectorComponent, SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSectorComponent", function() { return SelectSectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _select_sector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-sector.service */ "./src/app/discover/select-sector/select-sector.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");








let SelectSectorComponent = class SelectSectorComponent {
    constructor(_ss, router, activatedRoute) {
        this._ss = _ss;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sel_challengeSector = [];
        this.challengerSectors = [
            {
                id: 1,
                name: "WATER<br>MANAGEMENT",
                _name: "Water Management",
                value: 1,
                checked: false,
                svg: '<svg fill="#fff" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="m29.986 26.39v-0.0039c0.0177-1.4682-0.4095-2.7665-1.2449-4.0067l-0.0024-0.0036c-1.1744-1.7598-2.3263-3.5351-3.471-5.2998-0.5864 0.9039-1.1805 1.8095-1.7734 2.7132-0.6291 0.9588-1.2568 1.9154-1.8723 2.8656-1.5083 2.3341-1.428 5.3118 0.0422 7.2094 0.8907 1.1456 2.0261 1.8003 3.4279 1.9654 0.7054 0.0794 1.4278-0.1526 2.1853-0.603l0.0064-0.0038c1.8202-1.0639 2.6844-2.6549 2.7022-4.8328z" stroke="#ACB1C1" stroke-width="2"/><path d="m44.444 22.584c-0.4399-3.6019-1.8697-6.874-3.9869-9.5961l3.217-3.2445-3.4369-3.437-3.2171 3.217c-2.6946-2.0897-5.9941-3.5195-9.5961-3.9594v-4.5643h-4.8393v4.5368c-3.6019 0.43993-6.874 1.8697-9.5961 3.9869l-3.2445-3.1895-3.4095 3.4095 3.217 3.217c-2.1172 2.7221-3.547 6.0217-3.9869 9.6236h-4.5643v4.8668h4.5368c0.43993 3.602 1.8697 6.874 3.9869 9.5961l-3.217 3.217 3.437 3.4095 3.217-3.217c2.7221 2.1172 5.9942 3.547 9.5961 3.9869v4.5369h4.8668v-4.5369c3.602-0.4399 6.874-1.8697 9.5961-3.9869l3.2171 3.217 3.4369-3.4369-3.217-3.2171c2.1172-2.7221 3.547-5.9941 3.9869-9.5961h4.5369v-4.8393h-4.5369zm-18.725 16.278c-8.2213 0.4124-14.985-6.3516-14.573-14.573 0.3575-7.039 6.1041-12.786 13.143-13.143 8.2213-0.4124 14.985 6.3516 14.573 14.573-0.3575 7.0389-6.1042 12.786-13.143 13.143z" stroke="#ACB1C1" stroke-miterlimit="10" stroke-width="1.6983"/></svg>',
            },
            {
                id: 2,
                name: "WASTE<br>MANAGEMENT",
                _name: "Waste Management",
                value: 2,
                checked: false,
                svg: '<svg viewBox="0 0 45 46" xmlns="http://www.w3.org/2000/svg"><path d="M30.8887 0H32.4002V1.51679H30.8887V0Z" fill="#ACB1C1"/><path d="m35.424 15.168h-23.461l11.147-11.186c0.1421-0.14258 0.2214-0.33521 0.2214-0.53618 0-0.20098-0.0793-0.39437-0.2214-0.53619l-2.1373-2.1447c-0.8571-0.86002-2.3505-0.86002-3.2068 0l-1.7261 1.7322 1.0686 1.0724 1.727-1.7322c0.2849-0.28667 0.7829-0.28667 1.0686 0l1.6038 1.6086-18.171 18.233-1.603-1.6093c-0.14284-0.1426-0.22144-0.333-0.22144-0.5362 0-0.2033 0.0786-0.3929 0.22144-0.5362l13.863-13.911-1.0687-1.0724-1.0377 1.0413-1.0686-1.0724c-0.885-0.88808-2.3233-0.88732-3.2068 0l-5.3441 5.3626c-0.88426 0.88727-0.88426 2.3306 0 3.2179l1.0687 1.0724-4.2754 4.2902c-0.42852 0.43-0.66432 1.0011-0.66432 1.6093s0.2358 1.1793 0.66432 1.6086l2.1373 2.1455c0.14208 0.141 0.3348 0.2207 0.53508 0.2207s0.39301-0.0797 0.53434-0.2223l4.0192-4.0331 3.1825 24.271c0.1482 1.127 1.114 1.9779 2.2477 1.9779h16.999c1.1337 0 2.0995-0.8509 2.2484-1.9787l3.0088-22.949-1.4987-0.1979-3.0088 22.948c-0.0498 0.377-0.3718 0.6606-0.7497 0.6606h-16.999c-0.3779 0-0.6999-0.2836-0.749-0.6598l-3.3337-25.424 1.2138-1.218h24.111l-0.4844 3.6934 1.4987 0.1979 0.597-4.5503c0.0287-0.2169-0.037-0.4346-0.1806-0.5992-0.1444-0.1645-0.3514-0.2586-0.5691-0.2586zm-30.483-3.6774c-0.29475-0.2958-0.29475-0.7766 0-1.0732l5.344-5.3626c0.294-0.29501 0.774-0.29577 1.0695 0l1.0686 1.0724-6.4127 6.435-1.0694-1.0716z" fill="#ACB1C1"/><path d="m19.554 21.994v16.685c0 1.2544 1.0172 2.2752 2.2673 2.2752 1.25 0 2.2673-1.0208 2.2673-2.2752v-16.685c0-1.2544-1.0173-2.2752-2.2673-2.2752-1.2501 0-2.2673 1.0208-2.2673 2.2752zm3.0231 0v16.685c0 0.4179-0.3394 0.7584-0.7558 0.7584s-0.7558-0.3405-0.7558-0.7584v-16.685c0-0.4179 0.3394-0.7584 0.7558-0.7584s0.7558 0.3405 0.7558 0.7584z" fill="#ACB1C1"/><path d="m13.507 21.994v16.685c0 1.2544 1.0173 2.2752 2.2673 2.2752 1.2501 0 2.2673-1.0208 2.2673-2.2752v-16.685c0-1.2544-1.0172-2.2752-2.2673-2.2752-1.25 0-2.2673 1.0208-2.2673 2.2752zm3.0231 0v16.685c0 0.4179-0.3394 0.7584-0.7558 0.7584s-0.7558-0.3405-0.7558-0.7584v-16.685c0-0.4179 0.3394-0.7584 0.7558-0.7584s0.7558 0.3405 0.7558 0.7584z" fill="#ACB1C1"/><path d="m25.599 21.994v16.685c0 1.2544 1.0173 2.2752 2.2673 2.2752 1.2501 0 2.2674-1.0208 2.2674-2.2752v-16.685c0-1.2544-1.0173-2.2752-2.2674-2.2752-1.25 0-2.2673 1.0208-2.2673 2.2752zm3.0231 0v16.685c0 0.4179-0.3393 0.7584-0.7558 0.7584-0.4164 0-0.7557-0.3405-0.7557-0.7584v-16.685c0-0.4179 0.3393-0.7584 0.7557-0.7584 0.4165 0 0.7558 0.3405 0.7558 0.7584z" fill="#ACB1C1"/><path d="m25.783 8.3652-3.0231-0.7584c-0.2955-0.07356-0.6061 0.03716-0.7875 0.28061l-2.2673 3.0336c-0.1346 0.1797-0.1829 0.4102-0.1308 0.6294 0.0514 0.2192 0.1973 0.4035 0.3976 0.5044l3.023 1.5167c0.1036 0.0524 0.22 0.0797 0.3371 0.0797h3.7789c0.2509 0 0.4852-0.1252 0.6258-0.333 0.1405-0.2078 0.1692-0.4732 0.0763-0.7068l-1.5116-3.792c-0.0906-0.226-0.2834-0.39512-0.5184-0.45427zm-2.2726 3.7692-2.0535-1.0299 1.4232-1.9036 2.1607 0.54225 0.9538 2.3912h-2.4842z" fill="#ACB1C1"/><path d="m35.313 7.1836-0.7248-1.4554c-0.1527-0.30639-0.492-0.47172-0.8245-0.40422l-3.7789 0.75839c-0.3537 0.07053-0.6076 0.38148-0.6076 0.74323v1.5168c0 0.06219 0.0075 0.12362 0.0226 0.18429l0.7558 3.0336c0.0846 0.3405 0.39 0.5741 0.7323 0.5741 0.0318 0 0.0628-0.0015 0.0945-0.0061l6.0462-0.7584c0.2675-0.0333 0.4965-0.207 0.6016-0.4565 0.105-0.2495 0.0703-0.5354-0.0915-0.7516l-2.2257-2.9782zm-3.8537 3.3567-0.5706-2.2912v-0.80163l2.6051-0.52253 0.4973 0.9988c0.0204 0.04096 0.0446 0.07964 0.0718 0.11604l1.4859 1.9885-4.0895 0.512z" fill="#ACB1C1"/><path d="m37.542 4.7074 0.9213 1.2028c1.671-1.2878 3.8151-1.7883 5.8806-1.375l0.297-1.4872c-2.497-0.50054-5.0833 0.10466-7.0989 1.6594z" fill="#ACB1C1"/><path d="m40.712 7.584h1.5116v1.5168h-1.5116v-1.5168z" fill="#ACB1C1"/><path d="m33.91 3.792h1.5115c0-1.2544 1.0173-2.2752 2.2673-2.2752v-1.5168c-2.0836 0-3.7788 1.7011-3.7788 3.792z" fill="#ACB1C1"/></svg>',
            },
            {
                id: 3,
                name: "ENERGY <br>  MANAGEMENT",
                _name: "Energy Management",
                value: 3,
                checked: false,
                svg: '<svg fill="#fff" viewBox="0 0 46 47" xmlns="http://www.w3.org/2000/svg"><path d="m23.876 17.688c-0.4441-0.2259-0.9836-0.0411-1.2047 0.4126l-2.4317 4.9902c-0.2212 0.4539-0.0404 1.0049 0.4038 1.2309 0.1059 0.0539 0.2172 0.0832 0.3282 0.0923 0.0191 0.0023 0.0405 0.0036 0.065 0.0038 0.0021 0 0.0044 3e-4 0.0065 3e-4 9e-4 0 0.0017-2e-4 0.0025-2e-4h2.4587l-1.7833 3.6635c-0.2209 0.4538-0.04 1.0049 0.4043 1.2307 0.1285 0.0653 0.2649 0.0962 0.3993 0.0962 0.3303 0 0.6481-0.1867 0.8051-0.5094l2.4292-4.9902c0.221-0.4538 0.04-1.0049-0.4043-1.2307-0.1244-0.0632-0.2563-0.0932-0.3867-0.095-0.0047-1e-4 -0.0084-1e-3 -0.0133-1e-3h-2.46l1.7851-3.6631c0.2212-0.4539 0.0404-1.005-0.4037-1.2309z" fill="#ACB1C1"/><path d="m43.358 18.308h-1.1176c-0.4552-1.769-1.1397-3.4578-2.0417-5.0374l0.7901-0.8074c0.4976-0.5084 0.7716-1.1861 0.7716-1.9084 0-0.7224-0.274-1.4001-0.7716-1.9085l-3.4512-3.5263c-1.0299-1.0523-2.7058-1.0523-3.7358 0l-0.7901 0.80736c-1.5486-0.92348-3.2015-1.6238-4.9302-2.0887v-1.1392c0-1.4885-1.1852-2.6995-2.642-2.6995h-4.8815c-1.4554 0-2.6394 1.211-2.6394 2.6995v1.1392c-1.7287 0.46486-3.3816 1.1652-4.9304 2.0887l-0.79-0.80736c-1.03-1.0524-2.7059-1.0522-3.7358 0l-3.4512 3.5263c-0.49765 0.50837-0.77167 1.1861-0.77167 1.9085 0 0.7223 0.27402 1.4 0.77158 1.9084l0.79008 0.8073c-0.90374 1.5823-1.5891 3.2712-2.044 5.0375h-1.115c-1.4568 0-2.642 1.2099-2.642 2.697v4.9876c0 1.4885 1.1852 2.6994 2.642 2.6994h1.115c0.45515 1.7673 1.1406 3.4558 2.0443 5.0359l-0.79017 0.8089c-0.49765 0.5084-0.77167 1.1861-0.77167 1.9084 0 0.7224 0.27402 1.4001 0.77158 1.9085l3.4512 3.5263c1.0299 1.0523 2.7057 1.0523 3.7358 0l0.79-0.8073c1.5488 0.9235 3.2017 1.6238 4.9304 2.0886v1.1392c0 1.4885 1.184 2.6995 2.6394 2.6995h4.8815c1.4568 0 2.642-1.211 2.642-2.6995v-1.1392c1.7287-0.4648 3.3816-1.1651 4.9304-2.0886l0.79 0.8073c1.03 1.0523 2.7059 1.0523 3.7358 0l3.4512-3.5263c0.4975-0.5084 0.7716-1.1861 0.7716-1.9085 0-0.7223-0.2741-1.4-0.771-1.9077l-0.7909-0.8097c0.9018-1.5776 1.5864-3.266 2.0419-5.0358h1.1175c1.4568 0 2.642-1.2109 2.642-2.6994v-4.9876c-1e-4 -1.4871-1.1853-2.697-2.6421-2.697zm0.8451 7.6846c0 0.4761-0.3791 0.8634-0.8451 0.8634h-1.8232c-0.4204 0-0.7844 0.2978-0.8766 0.7169-0.4542 2.0658-1.2456 4.0178-2.3525 5.8018-0.2249 0.3626-0.1739 0.8361 0.1229 1.14l1.2897 1.3205c0.1582 0.1616 0.2453 0.3783 0.2453 0.6101 0 0.2319-0.0871 0.4487-0.2453 0.6102l-3.4511 3.5263c-0.3294 0.3364-0.8653 0.3365-1.1946 0l-1.2891-1.3172c-0.2971-0.3036-0.7608-0.3562-1.1158-0.1265-1.7537 1.1342-3.6652 1.9439-5.6815 2.4067-0.4101 0.0941-0.7016 0.4661-0.7016 0.8956v1.8602c0 0.4763-0.3791 0.8635-0.8451 0.8635h-4.8815c-0.4646 0-0.8425-0.3873-0.8425-0.8635v-1.8602c0-0.4295-0.2915-0.8014-0.7016-0.8956-2.0163-0.4627-3.9278-1.2724-5.6815-2.4067-0.1478-0.0956-0.3145-0.1424-0.4802-0.1424-0.232 0-0.4622 0.0917-0.6356 0.2689l-1.289 1.3172c-0.3293 0.3365-0.8652 0.3365-1.1946 0l-3.4512-3.5263c-0.15821-0.1616-0.24527-0.3783-0.24527-0.6102 0-0.2318 0.08715-0.4486 0.24599-0.6109l1.2891-1.3197c0.29684-0.3039 0.34787-0.7774 0.1229-1.14-1.1095-1.7881-1.9018-3.7402-2.3551-5.8018-0.09209-0.419-0.45631-0.7169-0.8766-0.7169h-1.8207c-0.46602 0-0.84516-0.3874-0.84516-0.8634v-4.9876c0-0.4748 0.37914-0.861 0.84516-0.861h1.8206c0.42029 0 0.78443-0.2978 0.8766-0.7169 0.453-2.0603 1.2454-4.0134 2.3553-5.8049 0.22479-0.3629 0.1734-0.8364-0.1238-1.1402l-1.2891-1.3171c-0.15821-0.1616-0.24527-0.3783-0.24527-0.6101 0-0.2319 0.08715-0.4487 0.24536-0.61022l3.4512-3.5263c0.32927-0.33653 0.86517-0.33662 1.1946 0l1.2891 1.3172c0.2972 0.30357 0.7608 0.35617 1.1158 0.12649 1.7538-1.1342 3.6652-1.944 5.6815-2.4066 0.4101-0.0941 0.7016-0.46615 0.7016-0.89567v-1.8602c0-0.47624 0.3779-0.86354 0.8425-0.86354h4.8815c0.466 0 0.8451 0.38739 0.8451 0.86354v1.8602c0 0.42952 0.2915 0.80148 0.7016 0.89567 2.0163 0.46275 3.9278 1.2724 5.6815 2.4066 0.3551 0.22959 0.8186 0.17699 1.1158-0.12649l1.289-1.3172c0.3294-0.33644 0.8653-0.33662 1.1946 0l3.4512 3.5263c0.1581 0.16162 0.2453 0.37832 0.2453 0.61022 0 0.2318-0.0872 0.4486-0.2453 0.6101l-1.2891 1.3171c-0.2972 0.3038-0.3485 0.7773-0.1238 1.1402 1.1074 1.7874 1.899 3.7404 2.3529 5.8049 0.0921 0.419 0.4562 0.7169 0.8766 0.7169h1.8232c0.466 0 0.8451 0.3862 0.8451 0.861v4.9876h-2e-4z" fill="#ACB1C1"/><path d="m16.222 29.126c-0.351 0.3584-0.3512 0.9396-5e-4 1.2983 1.8103 1.8511 4.2174 2.8706 6.7778 2.8706 2.5605 0 4.9676-1.0194 6.7771-2.8698 1.586-1.618 2.548-3.7054 2.7625-5.9578l0.9516 0.9723c0.1755 0.1792 0.4054 0.2689 0.6353 0.2689s0.4599-0.0897 0.6353-0.2689c0.3508-0.3584 0.3509-0.9397 0-1.2983l-2.5294-2.5843c-0.1684-0.1721-0.397-0.2689-0.6352-0.2689-0.2383 0-0.4669 0.0968-0.6353 0.2689l-2.5294 2.5843c-0.3508 0.3585-0.3508 0.9398 0 1.2983 0.3508 0.3584 0.9197 0.3584 1.2706 0l1.037-1.0596c-0.1918 1.7939-0.9668 3.4544-2.2334 4.7467-1.4709 1.504-3.4265 2.3323-5.5068 2.3323-2.0802 0-4.0358-0.8283-5.5068-2.3323-0.3506-0.3587-0.9195-0.359-1.2704-7e-4z" fill="#ACB1C1"/><path d="m13.461 22.53-0.9518-0.9726c-0.3508-0.3583-0.9197-0.3584-1.2705 0-0.3509 0.3585-0.351 0.9397 0 1.2983l2.5293 2.5844c0.3462 0.353 0.9244 0.3533 1.2707 0l2.5294-2.5844c0.3508-0.3585 0.3508-0.9397 0-1.2983-0.3509-0.3584-0.9198-0.3584-1.2706 0l-1.0367 1.0592c0.1924-1.7925 0.9672-3.4528 2.2328-4.746 3.0365-3.1026 7.9774-3.1026 11.014 0 0.3508 0.3584 0.9197 0.3584 1.2706 0s0.3509-0.9397 0-1.2983c-3.7372-3.8184-9.818-3.8184-13.555 0-1.5853 1.6196-2.5469 3.7069-2.762 5.9577z" fill="#ACB1C1"/><path d="m27.422 7.8702c-0.4765-0.14017-0.9747 0.14063-1.1122 0.62771-0.1375 0.48717 0.1375 0.99591 0.6143 1.1364 2.2797 0.67169 4.3755 1.9382 6.0614 3.6633 2.667 2.7249 4.1357 6.3481 4.1357 10.202s-1.4687 7.4776-4.1357 10.202c-5.5058 5.6256-14.465 5.6255-19.971-1e-4 -2.6679-2.7249-4.1372-6.3482-4.1372-10.202s1.4694-7.4775 4.138-10.203c1.7315-1.7716 3.889-3.0551 6.2392-3.7119 0.4786-0.13375 0.7605-0.63854 0.6296-1.1276-0.1309-0.489-0.6252-0.77725-1.1037-0.64331-2.6512 0.7408-5.0845 2.1881-7.036 4.1849-3.0076 3.0716-4.6639 7.156-4.6639 11.501s1.6564 8.4292 4.6638 11.501c3.1033 3.1707 7.1796 4.7561 11.256 4.7561s8.1527-1.5854 11.256-4.7561c3.0062-3.0717 4.6619-7.156 4.6619-11.501s-1.6557-8.4291-4.6615-11.5c-1.9-1.944-4.2634-3.372-6.8347-4.1296z" fill="#ACB1C1"/><path d="m22.995 9.0695h0.0051c0.4963 0 0.8959-0.41107 0.8959-0.91798 0-0.5069-0.4048-0.91797-0.901-0.91797s-0.8984 0.41107-0.8984 0.91797c0 0.50691 0.4022 0.91798 0.8984 0.91798z" fill="#ACB1C1"/></svg>',
            },
            {
                id: 4,
                name: "URBAN INFRA <br>AND BUILDINGS",
                _name: "Urban Infra & Buildings",
                value: 4,
                checked: false,
                svg: '<svg fill="#fff" viewBox="0 0 38 43" xmlns="http://www.w3.org/2000/svg"><path d="m25.56 28.784h-2.1284c-0.8961 0-1.6252 0.8322-1.6252 1.8556v2.4299c0 1.0231 0.7291 1.8555 1.6252 1.8555h2.1284c0.8961 0 1.6252-0.8324 1.6252-1.8555v-2.4299c0-1.0231-0.7291-1.8556-1.6252-1.8556zm0.5349 4.2855c0 0.3368-0.2399 0.6107-0.5349 0.6107h-2.1284c-0.295 0-0.5349-0.2739-0.5349-0.6107v-2.4299c0-0.3368 0.2399-0.6108 0.5349-0.6108h2.1284c0.295 0 0.5349 0.274 0.5349 0.6108v2.4299z" fill="#ACB1C1"/><path d="m32.684 28.784h-2.1283c-0.8961 0-1.6253 0.8322-1.6253 1.8556v2.4299c0 1.0231 0.7292 1.8555 1.6253 1.8555h2.1283c0.8961 0 1.6253-0.8324 1.6253-1.8555v-2.4299c0-1.0231-0.7292-1.8556-1.6253-1.8556zm0.535 4.2855c0 0.3368-0.24 0.6107-0.535 0.6107h-2.1283c-0.295 0-0.535-0.2739-0.535-0.6107v-2.4299c0-0.3368 0.24-0.6108 0.535-0.6108h2.1283c0.295 0 0.535 0.274 0.535 0.6108v2.4299z" fill="#ACB1C1"/>  <path d="m4.0343 17.719h2.3393c0.66043 0 1.1976-0.6133 1.1976-1.3676v-4.0732c0-0.754-0.5372-1.3673-1.1976-1.3673h-2.3393c-0.66043 0-1.1976 0.6133-1.1976 1.3673v4.0732c0 0.754 0.5372 1.3676 1.1976 1.3676zm-0.10733-5.4408c0-0.0674 0.04827-0.1225 0.10733-0.1225h2.3393c0.05906 0 0.10733 0.0551 0.10733 0.1225v4.0732c0 0.0677-0.04799 0.1228-0.10733 0.1228h-2.3393c-0.05906 0-0.10733-0.0551-0.10733-0.1228v-4.0732z" fill="#ACB1C1"/><path d="m13.388 13.686h2.339c0.6605 0 1.198-0.6137 1.198-1.3677v-4.0731c0-0.754-0.5372-1.3676-1.198-1.3676h-2.339c-0.6604 0-1.1979 0.61364-1.1979 1.3676v4.0731c0 0.754 0.5375 1.3677 1.1979 1.3677zm-0.1076-5.4408c0-0.06775 0.0483-0.12285 0.1076-0.12285h2.339c0.0594 0 0.1077 0.0551 0.1077 0.12285v4.0731c0 0.0678-0.0483 0.1229-0.1077 0.1229h-2.339c-0.0593 0-0.1076-0.0551-0.1076-0.1229v-4.0731z" fill="#ACB1C1"/><path d="m13.388 22.482h2.339c0.6605 0 1.198-0.6136 1.198-1.3677v-4.0731c0-0.754-0.5372-1.3676-1.198-1.3676h-2.339c-0.6604 0-1.1979 0.6136-1.1979 1.3676v4.0731c0 0.7541 0.5375 1.3677 1.1979 1.3677zm-0.1076-5.4408c0-0.0677 0.0483-0.1228 0.1076-0.1228h2.339c0.0594 0 0.1077 0.0551 0.1077 0.1228v4.0731c0 0.0678-0.0483 0.1229-0.1077 0.1229h-2.339c-0.0593 0-0.1076-0.0551-0.1076-0.1229v-4.0731z" fill="#ACB1C1"/><path d="m21.493 13.686h2.339c0.6605 0 1.198-0.6137 1.198-1.3677v-4.0731c0-0.754-0.5372-1.3676-1.198-1.3676h-2.339c-0.6604 0-1.1979 0.61364-1.1979 1.3676v4.0731c0 0.754 0.5375 1.3677 1.1979 1.3677zm-0.1076-5.4408c0-0.06775 0.0483-0.12285 0.1076-0.12285h2.339c0.0594 0 0.1076 0.0551 0.1076 0.12285v4.0731c0 0.0678-0.0482 0.1229-0.1076 0.1229h-2.339c-0.0593 0-0.1076-0.0551-0.1076-0.1229v-4.0731z" fill="#ACB1C1"/><path d="m21.493 22.482h2.339c0.6605 0 1.198-0.6136 1.198-1.3677v-4.0731c0-0.754-0.5372-1.3676-1.198-1.3676h-2.339c-0.6604 0-1.1979 0.6136-1.1979 1.3676v4.0731c0 0.7541 0.5375 1.3677 1.1979 1.3677zm-0.1076-5.4408c0-0.0677 0.0483-0.1228 0.1076-0.1228h2.339c0.0594 0 0.1076 0.0551 0.1076 0.1228v4.0731c0 0.0678-0.0482 0.1229-0.1076 0.1229h-2.339c-0.0593 0-0.1076-0.0551-0.1076-0.1229v-4.0731z" fill="#ACB1C1"/><path d="m6.3736 26.828c0.66043 0 1.1976-0.6133 1.1976-1.3676v-4.0731c0-0.754-0.5372-1.3673-1.1976-1.3673h-2.3393c-0.66043 0-1.1976 0.6133-1.1976 1.3673v4.0731c0 0.754 0.5372 1.3676 1.1976 1.3676h2.3393zm-2.4467-1.3673v-4.0731c0-0.0678 0.04827-0.1229 0.10733-0.1229h2.3393c0.05906 0 0.10733 0.0551 0.10733 0.1229v4.0731c0 0.0674-0.04799 0.1226-0.10733 0.1226h-2.3393c-0.05906 0-0.10733-0.0552-0.10733-0.1226z" fill="#ACB1C1"/><path d="m33.179 10.911h-2.3393c-0.6605 0-1.1977 0.6133-1.1977 1.3677v4.0731c0 0.754 0.5372 1.3673 1.1977 1.3673h2.3393c0.6604 0 1.1976-0.6133 1.1976-1.3673v-4.0731c0-0.7544-0.5372-1.3677-1.1976-1.3677zm0.1073 5.4405c0 0.0677-0.048 0.1228-0.1073 0.1228h-2.3393c-0.0591 0-0.1074-0.0551-0.1074-0.1228v-4.0732c0-0.0674 0.0483-0.1225 0.1074-0.1225h2.3393c0.0591 0 0.1073 0.0551 0.1073 0.1225v4.0732z" fill="#ACB1C1"/><path d="m34.967 7.5388h-7.0668v-2.7765c0.5406-0.24799 0.9242-0.85158 0.9242-1.5566v-1.5281c0-0.92484-0.6593-1.6776-1.4694-1.6776h-12.52c-0.3013 0-0.5452 0.27878-0.5452 0.6224s0.2439 0.6224 0.5452 0.6224h12.52c0.209 0 0.3791 0.19417 0.3791 0.43276v1.5284c0 0.23859-0.1701 0.43276-0.3791 0.43276h-17.493c-0.20897 0-0.37905-0.19417-0.37905-0.43276v-1.5284c0-0.23859 0.1698-0.43276 0.37905-0.43276h2.793c0.301 0 0.5452-0.27878 0.5452-0.6224s-0.2442-0.6224-0.5452-0.6224h-2.793c-0.81034 0-1.4694 0.75238-1.4694 1.6776v1.5284c0 0.70474 0.38331 1.3086 0.9242 1.5563v2.7768h-7.0671c-1.2399-3.3e-4 -2.249 1.1518-2.249 2.5677v31.697c0 0.3436 0.24418 0.6224 0.54515 0.6224h36.125c0.3009 0 0.5451-0.2788 0.5451-0.6224v-31.697c0-1.416-1.0091-2.568-2.249-2.568zm-24.56-2.6556h16.403v19.728h-10.833c-1.282 0-2.5395 0.2593-3.738 0.7706-0.6366 0.2716-1.2522 0.6123-1.8323 1.0162v-21.515zm-0.94971 23.89c0.71891-0.7585 1.5435-1.3926 2.4276-1.8688v2.8575c0 2.087-1.4872 3.785-3.3152 3.785h-3.1c0.23225-0.4179 0.5054-0.8085 0.81176-1.1586 0.00142-0.0016 0.00256-0.0032 0.00398-0.0045 0 0 3.0812-3.5149 3.1718-3.6106zm-8.3664-18.666c0-0.7297 0.51989-1.3232 1.1587-1.3232h7.0671v18.487c-0.31204 0.2843-0.61131 0.5893-0.89694 0.9154 0 0-2.9049 3.3172-2.9052 3.3172-1.2777 1.4594-2.027 3.4683-2.0602 5.5312h-2.3635v-26.927zm35.035 26.928h-6.4623c-0.3013 0-0.5452 0.2784-0.5452 0.6227 0 0.3436 0.2439 0.6224 0.5452 0.6224h6.4623v2.9019h-35.035v-2.9023l26.392 4e-4c0.301 0 0.5451-0.2788 0.5451-0.6227 0-0.344-0.2441-0.6224-0.5451-0.6224h-7.1301v-5.9436c0-1.272-0.9064-2.3067-2.0205-2.3067h-1.9194c-1.1142 0-2.0205 1.0347-2.0205 2.3067v5.9436h-9.8457c8.5e-4 -0.0448 0.00142-0.0895 0.00313-0.1342 0.02583-0.7203 0.15247-1.4345 0.37592-2.1087h3.6437c2.4291 0 4.4055-2.2562 4.4055-5.0298v-3.3554c0.0057-0.0019 0.0117-0.0045 0.0173-0.0065 0.9242-0.3459 1.8944-0.529 2.8669-0.5426 0.0392-7e-4 20.267-1e-3 20.267-1e-3v11.178zm-20.643 0v-5.9436c0-0.5858 0.4174-1.062 0.9302-1.062h1.9194c0.5131 0 0.9301 0.4762 0.9301 1.062v5.9436h-3.7797zm15.253-12.423v-3.2241c0-0.0674 0.0483-0.1226 0.1076-0.1226h2.3391c0.0593 0 0.1076 0.0548 0.1076 0.1226v3.2241h-2.5543zm5.3899 0h-1.7456v-3.2241c0-0.754-0.5372-1.3673-1.1976-1.3673h-2.3394c-0.6604 0-1.1976 0.6133-1.1976 1.3673v3.2241h-1.7456v-15.828h7.0671c0.6388 0 1.1587 0.59355 1.1587 1.3232v14.505z" fill="#ACB1C1"/></svg>',
            },
            {
                id: 5,
                name: "MOBILITY <br>INFRASTRUCTURE",
                _name: "Mobility Infrastructure",
                value: 5,
                checked: false,
                svg: '<svg viewBox="0 0 42 43" xmlns="http://www.w3.org/2000/svg"><path d="m13.318 26.714h-2.5828c-0.3809 0-0.6897 0.3148-0.6897 0.703 0 0.3883 0.3088 0.703 0.6897 0.703h2.5828c0.8792-2e-4 1.6625 0.5659 1.9532 1.4116 0.0961 0.2832 0.3578 0.4731 0.6518 0.4731 0.223 0 0.4323-0.11 0.5617-0.2952s0.163-0.4228 0.09-0.6376c-0.483-1.4121-1.7896-2.3581-3.2567-2.3579z" fill="#ACB1C1"/><path d="m5.5754 34.446c-1.1427 0-2.069 0.9443-2.069 2.109 0 1.1648 0.92634 2.109 2.069 2.109 1.1427 0 2.069-0.9442 2.069-2.109 0-1.1647-0.92634-2.109-2.069-2.109zm0 2.812c-0.3809 0-0.68968-0.3147-0.68968-0.703 0-0.3882 0.30878-0.703 0.68968-0.703s0.68968 0.3148 0.68968 0.703c0 0.3883-0.30878 0.703-0.68968 0.703z" fill="#ACB1C1"/><path d="m37.988 31.346v-1.5255c0.315 0.0398 0.6329-0.0469 0.8862-0.2418 0.3119-0.2389 0.4947-0.614 0.4932-1.0116v-0.4471c-0.0047-1.2783-0.8548-2.3926-2.0691-2.7122v-1.5058c0-0.7765-0.6175-1.406-1.3793-1.406h-0.1573l-0.3607-1.4059h0.7042c1.0869-0.0041 1.9863-0.8631 2.0607-1.9684l0.5118-7.7393c0.0364-0.5822-0.1654-1.1538-0.5574-1.5788-0.392-0.42505-0.9393-0.66558-1.5116-0.66439h-4.2761l-1.0345-4.0443c-0.2826-1.0908-1.3542-1.7646-2.4373-1.5325l-4.3429 1.0847c-0.6339 0.15775-1.1683 0.59024-1.4627 1.1837s-0.3194 1.2886-0.0684 1.9024h-2.2408c-0.3809 0-0.6897 0.31474-0.6897 0.70299 0 0.38826 0.3088 0.703 0.6897 0.703h6.352l3.1842 13.63c-0.3573 0.2627-0.5694 0.6841-0.5703 1.1332v1.6014c-0.4254 0.2492-0.6882 0.7105-0.6897 1.2106v5.3062c-0.3431 0.5412-0.6266 1.1192-0.8456 1.7237h-7.9961l-0.7449-4.5547c-0.4588-2.8519-2.7611-5.0207-5.5864-5.2626v-1.4306h2.7587c1.5236 0 2.7588-1.2589 2.7588-2.8119s-1.2352-2.812-2.7588-2.812h-7.5864v-3.515h4.138c1.1427 0 2.0691-0.9442 2.0691-2.1089 0-1.1648-0.9264-2.109-2.0691-2.109h-4.7588c-0.04896-0.11248-0.09862-0.22145-0.14276-0.31424-0.40479-0.82833-0.6156-1.741-0.61588-2.6664v-4.0492c0-1.1648-0.92635-2.109-2.069-2.109-1.1427 0-2.069 0.94422-2.069 2.109v17.575c0 1.553 1.2351 2.8119 2.7587 2.8119h2.069v1.406h-4.1381c-1.1427 0-2.069 0.9442-2.069 2.109v1.406c0 1.1647 0.92634 2.109 2.069 2.109h1.3794c3.8073 0.0042 6.8926 3.1491 6.8968 7.0299h-1.3794c0.0146-2.9836-2.2486-5.4648-5.169-5.6672-2.9204-0.2023-5.4921 1.944-5.8737 4.9022-0.38163 2.9581 1.5582 5.7092 4.4307 6.2833 2.8724 0.5742 5.6879-1.2264 6.4306-4.1123h19.674c0.6471 2.5678 2.9657 4.3263 5.5646 4.2203s4.7723-2.0477 5.216-4.66c0.4437-2.6124-0.9628-5.1858-3.3755-6.1762zm-32.415 9.4278c-2.2854 0-4.1381-1.8884-4.1381-4.2179s1.8527-4.218 4.1381-4.218c2.2854 0 4.1381 1.8885 4.1381 4.218-0.00228 2.3285-1.8536 4.2156-4.1381 4.2179zm32.415-12.654v0.2657c-0.8585-0.2263-1.7474-0.3084-2.6318-0.2432-1.85 0.1257-3.6005 0.8996-4.9547 2.1905v-3.619h6.2072c0.7617 0 1.3793 0.6295 1.3793 1.406zm-2.069-2.812h-4.8278v-1.406h4.8278v1.406zm0.6897-14.763c0.1903 8e-4 0.3719 0.0813 0.5023 0.2226s0.1981 0.331 0.1873 0.5247l-0.5103 7.7329c-0.0228 0.3681-0.3209 0.6557-0.6828 0.6587h-1.0649l-2.3449-9.1389h3.9133zm-9.5107-2.812h-2.0484c-0.4332 0.00117-0.799-0.32786-0.8518-0.7662-0.0527-0.43834 0.2242-0.84772 0.6449-0.95332l4.3174-1.0784c0.3588-0.0712 0.7103 0.15359 0.8035 0.51389l4.3691 17.047h-2.6966l-3.196-13.683c-0.1468-0.63412-0.7029-1.0815-1.3421-1.0798zm0.7007 27.417c-0.086 0.4639-0.1354 0.9341-0.1476 1.406h-7.0106l-0.2297-1.406h7.3879zm-20.157-18.278h-2.7587v-3.6443c0.22087 0.0833 0.45419 0.127 0.68968 0.1293h2.069v3.515zm6.2071-5.6239c0 0.3882-0.3088 0.703-0.6897 0.703h-7.5864c-0.3809 0-0.68968-0.3148-0.68968-0.703 0-0.3883 0.30878-0.703 0.68968-0.703h7.5864c0.3809 0 0.6897 0.3147 0.6897 0.703zm-8.2761-9.8419c0.3809 0 0.68968 0.31474 0.68968 0.703v4.0492c0.00466 1.0273 0.2191 2.0424 0.62967 2.9807h-1.3194c-0.23549 0.00233-0.46881 0.04609-0.68968 0.12935v-7.1593c0-0.38826 0.30878-0.703 0.68968-0.703zm-0.68968 18.278v-1.406h11.725c0.7618 0 1.3794 0.6295 1.3794 1.406s-0.6176 1.406-1.3794 1.406h-10.345c-0.7618 0-1.3794-0.6295-1.3794-1.406zm4.8278 2.8119h2.7588v1.406h-2.7588v-1.406zm-4.1381 5.624h-1.3794c-0.3809 0-0.68968-0.3148-0.68968-0.703v-1.406c0-0.3882 0.30878-0.703 0.68968-0.703h9.1196c2.3624-0.0065 4.3801 1.7356 4.7623 4.1118l1.1669 7.1361h-5.3933c-0.0049-4.6569-3.7074-8.4309-8.2761-8.4359zm23.458 8.4359c0.0401-1.401 0.4723-2.761 1.2456-3.9199l0.0117-0.019c1.1598-1.7852 3.067-2.9202 5.1623-3.0721 0.3858-0.0271 0.7731-0.0214 1.158 0.0169v1.4187c-1.5725-0.2127-3.1583 0.2789-4.3484 1.3478-1.1901 1.069-1.868 2.6108-1.8588 4.2276h-1.3704zm6.8879 4.2179c-2.2854 0-4.1381-1.8884-4.1381-4.2179s1.8527-4.218 4.1381-4.218 4.138 1.8885 4.138 4.218c-0.0022 2.3285-1.8536 4.2156-4.138 4.2179z" fill="#ACB1C1"/><path d="m35.921 34.446c-1.1427 0-2.069 0.9443-2.069 2.109 0 1.1648 0.9263 2.109 2.069 2.109s2.0691-0.9442 2.0691-2.109c0-1.1647-0.9264-2.109-2.0691-2.109zm0 2.812c-0.3809 0-0.6896-0.3147-0.6896-0.703 0-0.3882 0.3087-0.703 0.6896-0.703s0.6897 0.3148 0.6897 0.703c0 0.3883-0.3088 0.703-0.6897 0.703z" fill="#ACB1C1"/></svg>',
            },
            {
                id: 6,
                name: "GOVERNANCE",
                _name: "Governance",
                value: 6,
                checked: false,
                svg: '<svg viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="m34.001 25.554h-4.7412v-3.1504c0-0.4044-0.2144-0.7562-0.5186-0.8509l-2.6943-0.8388c-0.6004-5.2057-3.9195-9.2466-8.0304-9.6531v-2.3094h7.4504c0.2739 0 0.5209-0.21327 0.6257-0.54022 0.1049-0.32704 0.0469-0.70344-0.1467-0.95372l-2.2304-2.8817 2.2303-2.8817c0.1937-0.25029 0.2516-0.62668 0.1468-0.95372-0.1048-0.32695-0.3518-0.54022-0.6257-0.54022h-8.1278c-0.374 0-0.6773 0.39188-0.6773 0.87514v10.186c-4.1106 0.4065-7.4299 4.4469-8.0304 9.6531l-2.6943 0.8388c-0.30418 0.0947-0.51862 0.4465-0.51862 0.8509v3.1504h-4.7412c-0.37408 0-0.67731 0.3919-0.67731 0.8752v17.503c0 0.4832 0.30323 0.8751 0.67731 0.8751h13.614c0.374 0 0.6773-0.3919 0.6773-0.8751 0-0.4833-0.3033-0.8752-0.6773-0.8752h-7.5182v-1.7502h21.132v1.7502h-7.5182c-0.374 0-0.6773 0.3919-0.6773 0.8752 0 0.4832 0.3033 0.8751 0.6773 0.8751h13.614c0.3741 0 0.6773-0.3919 0.6773-0.8751v-17.503c0-0.4833-0.3032-0.8752-0.6773-0.8752zm-15.984-23.804h5.8152l-1.553 2.0066c-0.2645 0.34174-0.2645 0.89587 0 1.2377l1.553 2.0065h-5.8152v-5.2508zm-0.6774 11.027c3.5441 0 6.5152 3.1422 7.267 7.4882l-7.1083-2.2131c-0.1043-0.0325-0.2131-0.0325-0.3174 0l-7.1084 2.2131c0.752-4.346 3.7231-7.4882 7.2671-7.4882zm-10.566 10.316c1.4062-0.4378 9.643-3.0023 10.566-3.2897l10.566 3.2897v2.4611h-21.132v-2.4611zm4.0639 4.2114v12.252h-1.3546v-12.252h1.3546zm1.3546 0h3.1156v12.252h-3.1156v-12.252zm4.4702 0h1.3547v12.252h-1.3547v-12.252zm2.7093 0h3.1156v12.252h-3.1156v-12.252zm4.4702 0h1.3547v12.252h-1.3547v-12.252zm-22.487 15.752v-15.752h6.7731v12.252h-1.3546v-2.6254c0-0.4833-0.30324-0.8751-0.67732-0.8751h-2.7092c-0.37408 0-0.67731 0.3918-0.67731 0.8751v3.5005c0 0.4833 0.30323 0.8752 0.67731 0.8752h2.0319v1.7502h-4.0639zm4.0639-3.5005h-1.3546v-1.7503h1.3546v1.7503zm27.905 3.5005h-4.0639v-1.7502h2.0319c0.3741 0 0.6774-0.3919 0.6774-0.8752v-3.5005c0-0.4833-0.3033-0.8751-0.6774-0.8751h-2.7092c-0.3741 0-0.6773 0.3918-0.6773 0.8751v2.6254h-1.3546v-12.252h6.7731v15.752zm-4.0639-3.5005v-1.7503h1.3546v1.7503h-1.3546z" fill="#ACB1C1"/><path d="m27.906 29.93v3.5005c0 0.4833 0.3032 0.8752 0.6773 0.8752h2.7092c0.3741 0 0.6773-0.3919 0.6773-0.8752v-3.5005c0-0.4833-0.3032-0.8752-0.6773-0.8752h-2.7092c-0.3741 0-0.6773 0.3919-0.6773 0.8752zm1.3546 0.8751h1.3546v1.7503h-1.3546v-1.7503z" fill="#ACB1C1"/><path d="m3.3834 34.305h2.7092c0.37408 0 0.67731-0.3919 0.67731-0.8752v-3.5005c0-0.4833-0.30323-0.8752-0.67731-0.8752h-2.7092c-0.37408 0-0.67732 0.3919-0.67732 0.8752v3.5005c0 0.4833 0.30324 0.8752 0.67732 0.8752zm0.67731-3.5006h1.3546v1.7503h-1.3546v-1.7503z" fill="#ACB1C1"/><path d="m17.337 44.807c0.3741 0 0.6773-0.3918 0.6773-0.8751s-0.3032-0.8752-0.6773-0.8752c-0.374 0-0.6773 0.3919-0.6773 0.8752s0.3033 0.8751 0.6773 0.8751z" fill="#ACB1C1"/></svg>',
            },
            {
                id: 7,
                name: "SAFETY <br> SYSTEMS",
                _name: "Safety Systems",
                value: 7,
                checked: false,
                svg: ' <svg viewBox="0 0 37 44" xmlns="http://www.w3.org/2000/svg"><path d="m35.71 7.5064c-5.8678-1.6388-11.77-4.1906-17.069-7.3794-0.2815-0.16938-0.6308-0.16938-0.9121 0-5.4515 3.2804-11.035 5.6941-17.069 7.3794-0.38982 0.10877-0.66003 0.46994-0.66003 0.88198v9.3432c0 9.6215 4.3546 15.99 8.0078 19.639 3.9328 3.9281 8.5141 6.1003 10.177 6.1003 1.6632 0 6.2444-2.1722 10.177-6.1003 3.6531-3.6483 8.0074-10.017 8.0074-19.639v-9.3433c0-0.41195-0.2702-0.77312-0.66-0.88189zm-1.1342 10.225c0 8.9864-4.0615 14.929-7.469 18.332-3.8675 3.8627-8.0025 5.5777-8.9215 5.5777s-5.0543-1.715-8.9218-5.5777c-3.4074-3.4031-7.4691-9.3459-7.4691-18.332v-8.649c5.7705-1.67 11.145-4.0007 16.391-7.1084 5.1155 3.0253 10.758 5.4718 16.39 7.1081v8.6494z" fill="#ACB1C1"/><path d="m10.235 8.9802c-0.1816-0.46994-0.70246-0.70079-1.1636-0.51562-1.6026 0.64366-3.2475 1.2361-4.889 1.761-0.37408 0.1197-0.62863 0.4729-0.62863 0.8725v3.5312c0 0.505 0.40173 0.9144 0.89709 0.9144s0.89709-0.4094 0.89709-0.9144v-2.8629c1.4726-0.4857 2.9436-1.0229 4.3812-1.6003 0.46108-0.18499 0.68748-0.71589 0.50588-1.1858z" fill="#ACB1C1"/><path d="m11.937 9.1536c0.1204 0 0.2426-0.0247 0.3598-0.07683l0.0165-0.0073c0.4539-0.20275 0.6583-0.74129 0.4593-1.2038-0.199-0.46264-0.7304-0.67192-1.1837-0.46935l-0.0145 0.00637c-0.4542 0.20216-0.6592 0.74027-0.4609 1.203 0.1472 0.34352 0.4774 0.54788 0.8235 0.54788z" fill="#ACB1C1"/><path d="m28.877 29.485c-0.4146-0.2762-0.9705-0.1574-1.2418 0.2653-0.7393 1.1534-1.6065 2.2578-2.5781 3.2823-0.799 0.8424-1.6647 1.6276-2.5732 2.3336-0.3939 0.3061-0.4697 0.8799-0.1695 1.2816 0.1767 0.2359 0.4438 0.3601 0.7141 0.3601 0.1897 0 0.3809-0.0611 0.5433-0.1874 0.98-0.7617 1.9137-1.6084 2.7751-2.5167 1.0505-1.1075 1.9892-2.3029 2.7904-3.5531 0.2711-0.4228 0.1544-0.9895-0.2603-1.2657z" fill="#ACB1C1"/><path d="m20.399 36.801-0.0514 0.0309c-0.4288 0.2531-0.5753 0.8124-0.3271 1.2494 0.1664 0.2929 0.4675 0.4565 0.7773 0.4565 0.1524 0 0.3072-0.0397 0.4485-0.1233l0.0594-0.0356c0.4276-0.2552 0.5712-0.8153 0.3208-1.2511-0.2506-0.4357-0.8002-0.5818-1.2275-0.3268z" fill="#ACB1C1"/><path d="m12.07 19.869c-0.5508-0.5616-1.2834-0.8706-2.0626-0.8706-0.77912 0-1.5118 0.3091-2.0629 0.8706-1.1372 1.1594-1.1372 3.046 0 4.2053l5.2973 5.3994c0.5509 0.5613 1.2835 0.8705 2.0627 0.8705s1.5118-0.3092 2.0628-0.8707l11.058-11.272c1.1371-1.1597 1.1371-3.046-2e-4 -4.205-0.5509-0.5616-1.2835-0.8706-2.0628-0.8706-0.7792 0-1.5118 0.3091-2.0628 0.8706l-8.9955 9.1691-3.2344-3.2967zm13.499-4.5792c0.2119-0.2161 0.4941-0.335 0.7941-0.335 0.3002 0 0.5821 0.1189 0.7942 0.335 0.4377 0.4462 0.4377 1.1724-1e-4 1.6188l-11.058 11.272c-0.2119 0.2161-0.4941 0.3351-0.7941 0.3351s-0.5821-0.119-0.7942-0.3351l-5.2971-5.3991c-0.43788-0.4464-0.43788-1.1726-1.6e-4 -1.6188 0.21207-0.2161 0.49419-0.3352 0.79426-0.3352 0.3002 0 0.5821 0.119 0.7941 0.335l3.8686 3.9434c0.1684 0.1715 0.3965 0.2678 0.6344 0.2678 0.238 0 0.4661-0.0963 0.6342-0.2678l9.6301-9.8158z" fill="#ACB1C1"/></svg>',
            },
            {
                id: 8,
                name: "ENVIRONMENT <br>MANAGEMENT",
                _name: "Environment Management",
                value: 8,
                checked: false,
                svg: `<svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M34.2018 65.8333C33.8646 59.2495 30.2321 53.279 24.5401 49.9529L15.4445 39.8475C14.2212 38.4614 12.3239 37.8784 10.5334 38.3386V21.0665C10.5334 18.1578 8.17537 15.7998 5.26668 15.7998C2.35799 15.7998 0 18.1578 0 21.0665V45.9871C0.00131667 48.0018 0.514654 49.983 1.49179 51.7449L13.1667 72.7577V77.6833C13.1667 78.4105 13.7562 79 14.4834 79H32.9168C33.6439 79 34.2334 78.4105 34.2334 77.6833V65.8333H34.2018ZM31.6001 76.3667H15.8V72.4167C15.8 72.1927 15.7429 71.9724 15.6341 71.7768L3.79333 50.4638C3.03394 49.0938 2.63482 47.5535 2.63334 45.9871V21.0665C2.63334 19.6121 3.81226 18.4331 5.26668 18.4331C6.72111 18.4331 7.90002 19.6121 7.90002 21.0665V39.9647C6.25254 41.8793 6.29039 44.7215 7.98824 46.5915L18.7757 58.4599L20.7244 56.6877L9.93691 44.8205C9.07713 43.8748 9.11185 42.4204 10.0159 41.517C10.9498 40.5823 12.4646 40.5817 13.3993 41.5157C13.4297 41.5462 13.4592 41.5773 13.488 41.6092L22.7218 51.8687C22.8393 51.9869 22.9721 52.0887 23.1168 52.1715C28.357 55.174 31.5924 60.7485 31.6001 66.7879V76.3667Z" fill="#ACB1C1"/>
			<path d="M73.7334 15.7998C70.8247 15.7998 68.4667 18.1578 68.4667 21.0665V38.3386C68.0399 38.2306 67.6008 38.1784 67.1605 38.1832C65.7803 38.214 64.4749 38.8162 63.5555 39.8462L54.4626 49.949C48.7629 53.2695 45.1272 59.2452 44.7982 65.8333H44.7666V77.6833C44.7666 78.4105 45.3561 79 46.0833 79H64.5167C65.2438 79 65.8333 78.4105 65.8333 77.6833V72.755L77.3634 51.8568C78.4344 50.0357 78.9994 47.9616 79 45.8489V21.0665C79 18.1578 76.642 15.7998 73.7334 15.7998ZM76.3667 45.8489C76.3647 47.5041 75.9192 49.1287 75.0764 50.5533L63.358 71.7807C63.2525 71.9761 63.1982 72.1948 63.2 72.4167V76.3667H47.3999V66.7879C47.4161 60.7249 50.6789 55.1352 55.9504 52.1399C56.073 52.0703 56.1838 51.9814 56.2783 51.8766L65.5121 41.6066C66.3988 40.6248 67.9135 40.548 68.8953 41.4347C69.877 42.3215 69.9539 43.8362 69.0671 44.8179L58.2756 56.6851L60.2243 58.4599L71.0118 46.5941C72.7113 44.7236 72.749 41.8796 71.1 39.9647V21.0665C71.1 19.6121 72.2789 18.4331 73.7334 18.4331C75.1878 18.4331 76.3667 19.6121 76.3667 21.0665V45.8489Z" fill="#ACB1C1"/>
			<path d="M55.3006 32.9168H52.6672C47.944 32.9219 43.5205 35.232 40.8172 39.1051V30.2834H42.1338C50.1288 30.274 56.6078 23.795 56.6172 15.8C56.6172 15.0729 56.0277 14.4834 55.3006 14.4834H52.6672C47.944 14.4885 43.5205 16.7986 40.8172 20.6717V11.85H42.1338C47.9486 11.8435 52.6606 7.13142 52.6672 1.31667C52.6672 0.589539 52.0777 0 51.3505 0H48.7172C44.8827 0.00230417 41.3526 2.08824 39.5005 5.44575C37.6484 2.08824 34.1183 0.00230417 30.2838 0H27.6505C26.9233 0 26.3338 0.589539 26.3338 1.31667C26.3404 7.13142 31.0524 11.8435 36.8672 11.85H38.1838V20.6717C35.4805 16.7986 31.057 14.4885 26.3338 14.4834H23.7005C22.9733 14.4834 22.3838 15.0729 22.3838 15.8C22.3932 23.795 28.8722 30.274 36.8672 30.2834H38.1838V39.1051C35.4805 35.232 31.057 32.9219 26.3338 32.9168H23.7005C22.9733 32.9168 22.3838 33.5063 22.3838 34.2334C22.3932 42.2284 28.8722 48.7074 36.8672 48.7168H38.1838V59.2502H40.8172V48.7168H42.1338C50.1288 48.7074 56.6078 42.2284 56.6172 34.2334C56.6172 33.5063 56.0277 32.9168 55.3006 32.9168ZM52.6672 17.1167H53.9115C53.2334 23.111 48.1663 27.6428 42.1338 27.6501H40.8896C41.5677 21.6558 46.6347 17.124 52.6672 17.1167ZM48.7172 2.63334H49.9246C49.277 6.43194 45.9872 9.21192 42.1338 9.2167H40.9265C41.5741 5.4181 44.8638 2.63811 48.7172 2.63334ZM36.8672 9.2167C33.0138 9.21192 29.7241 6.43194 29.0764 2.63334H30.2838C34.1372 2.63811 37.4269 5.4181 38.0746 9.2167H36.8672ZM36.8672 27.6501C30.8347 27.6428 25.7676 23.111 25.0895 17.1167H26.3338C32.3663 17.124 37.4333 21.6558 38.1114 27.6501H36.8672ZM36.8672 46.0835C30.8347 46.0762 25.7676 41.5444 25.0895 35.5501H26.3338C32.3663 35.5574 37.4333 40.0892 38.1114 46.0835H36.8672ZM42.1338 46.0835H40.8896C41.5677 40.0892 46.6347 35.5574 52.6672 35.5501H53.9115C53.2334 41.5444 48.1663 46.0762 42.1338 46.0835Z" fill="#ACB1C1"/>
			</svg>`,
            },
            {
                id: 9,
                name: "EDUCATION",
                _name: "Education",
                value: 9,
                checked: false,
                svg: '<svg width="60" height="60" viewBox="0 0 52 42" xmlns="http://www.w3.org/2000/svg"> <path d="m44.35 7.0846c-2.0093-0.15287-4.2831-0.60519-6.7581-1.3442-2.9735-0.88807-5.8597-0.75097-8.5789 0.40719-0.3836 0.16336-0.5607 0.6038-0.3959 0.98383 0.1648 0.37983 0.6088 0.55577 0.9928 0.39231 2.3834-1.0152 4.9223-1.1328 7.5458-0.34927 2.5793 0.77024 4.9609 1.2423 7.0787 1.4035 0.0196 0.0016 0.0393 0.0022 0.0586 0.0022 0.3912 0 0.7223-0.29865 0.7528-0.69156 0.0319-0.41239-0.2796-0.77235-0.6958-0.804z" fill="#ACB1C1"/><path d="m44.35 10.268c-2.0088-0.1528-4.2825-0.60504-6.758-1.3442-2.9735-0.88807-5.8597-0.75097-8.5789 0.40719-0.3836 0.16336-0.5607 0.6038-0.3959 0.98385 0.1648 0.3799 0.6088 0.5557 0.9928 0.3923 2.3834-1.0152 4.9223-1.1328 7.5458-0.3493 2.5799 0.7704 4.9614 1.2426 7.0787 1.4035 0.0197 0.0016 0.0393 0.0022 0.0586 0.0022 0.3912 0 0.7223-0.2986 0.7528-0.6917 0.0319-0.4123-0.2796-0.7722-0.6959-0.8038z" fill="#ACB1C1"/><path d="m44.35 26.181c-2.0094-0.1528-4.2832-0.6052-6.7581-1.3443-2.9733-0.888-5.8594-0.7508-8.5789 0.4073-0.3836 0.1634-0.5607 0.6038-0.3959 0.9839 0.1648 0.3798 0.6088 0.5557 0.9928 0.3923 2.3835-1.0152 4.9224-1.1326 7.5458-0.3494 2.5792 0.7702 4.9608 1.2424 7.0787 1.4036 0.0196 0.0016 0.0393 0.0022 0.0586 0.0022 0.3912 0 0.7223-0.2987 0.7528-0.6916 0.0319-0.4124-0.2796-0.7723-0.6958-0.804z" fill="#ACB1C1"/><path d="m44.35 29.364c-2.0093-0.1529-4.2831-0.6052-6.7581-1.3442-2.9735-0.888-5.8597-0.751-8.5789 0.4072-0.3836 0.1633-0.5607 0.6038-0.3959 0.9838 0.1648 0.3799 0.6088 0.5558 0.9928 0.3923 2.3834-1.0151 4.9223-1.1328 7.5458-0.3492 2.5793 0.7702 4.9609 1.2423 7.0787 1.4035 0.0196 0.0015 0.0393 0.0021 0.0586 0.0021 0.3912 0 0.7223-0.2986 0.7528-0.6915 0.0319-0.4124-0.2796-0.7724-0.6958-0.804z" fill="#ACB1C1"/><path d="m44.35 13.45c-2.0094-0.1529-4.2832-0.6052-6.7581-1.3443-2.9733-0.8879-5.8594-0.7509-8.5789 0.4073-0.3836 0.1634-0.5607 0.6038-0.3959 0.9838 0.1648 0.3799 0.6088 0.5557 0.9928 0.3924 2.3835-1.0152 4.9224-1.1327 7.5458-0.3494 2.5792 0.7702 4.9608 1.2424 7.0787 1.4036 0.0196 0.0016 0.0393 0.0022 0.0586 0.0022 0.3912 0 0.7223-0.2987 0.7528-0.6916 0.0319-0.4124-0.2796-0.7723-0.6958-0.804z" fill="#ACB1C1"/><path d="m44.35 19.816c-2.0088-0.1527-4.2825-0.6049-6.758-1.3441-2.9733-0.8881-5.8596-0.751-8.5789 0.4072-0.3836 0.1633-0.5607 0.6038-0.3959 0.9838 0.1648 0.3799 0.6088 0.5558 0.9928 0.3923 2.3833-1.015 4.9223-1.1327 7.5458-0.3492 2.5799 0.7703 4.9614 1.2425 7.0787 1.4035 0.0197 0.0015 0.0393 0.0021 0.0586 0.0021 0.3912 0 0.7223-0.2986 0.7528-0.6916 0.0319-0.4124-0.2796-0.7723-0.6959-0.804z" fill="#ACB1C1"/><path d="m44.35 16.633c-2.0093-0.1528-4.2831-0.6052-6.7581-1.3442-2.9732-0.888-5.8596-0.7509-8.5789 0.4072-0.3836 0.1634-0.5607 0.6038-0.3959 0.9839 0.1648 0.3798 0.6088 0.5557 0.9928 0.3923 2.3837-1.0152 4.9224-1.1327 7.5458-0.3493 2.5793 0.7702 4.9609 1.2423 7.0787 1.4035 0.0196 0.0016 0.0393 0.0022 0.0586 0.0022 0.3912 0 0.7223-0.2987 0.7528-0.6916 0.0319-0.4124-0.2796-0.7723-0.6958-0.804z" fill="#ACB1C1"/><path d="m44.35 22.998c-2.0091-0.1527-4.2829-0.605-6.758-1.3441-2.9733-0.888-5.8594-0.751-8.5789 0.4073-0.3836 0.1633-0.5607 0.6038-0.3959 0.9838 0.1648 0.3798 0.6088 0.5557 0.9928 0.3923 2.3835-1.0152 4.9224-1.1326 7.5458-0.3494 2.5795 0.7704 4.961 1.2426 7.0787 1.4036 0.0197 0.0015 0.0393 0.0021 0.0586 0.0021 0.3912 0 0.7223-0.2986 0.7528-0.6916 0.0319-0.4124-0.2796-0.7723-0.6959-0.804z" fill="#ACB1C1"/><path d="m7.2989 8.5801c0.01934 0 0.03899-7e-4 0.05864-0.00219 2.1179-0.16106 4.4994-0.63326 7.0786-1.4035 2.6236-0.78343 5.1624-0.66601 7.5458 0.34927 0.3835 0.16336 0.8281-0.01238 0.9929-0.39231 0.1649-0.38003-0.0124-0.82047-0.3959-0.98383-2.7192-1.1583-5.6056-1.2952-8.5789-0.40719-2.4751 0.739-4.7488 1.1913-6.7582 1.3442-0.41618 0.03155-0.72766 0.39162-0.69562 0.804 0.03033 0.39291 0.36157 0.69156 0.75266 0.69156z" fill="#ACB1C1"/><path d="m7.2989 11.763c0.01934 0 0.03899-7e-4 0.05854-0.0022 2.1174-0.1609 4.499-0.6332 7.0787-1.4035 2.6236-0.78346 5.1624-0.66614 7.5458 0.3492 0.3835 0.1633 0.8281-0.0123 0.9929-0.3923 0.1649-0.38-0.0124-0.82044-0.3959-0.9838-2.7192-1.1583-5.6056-1.2951-8.5789-0.40719-2.4755 0.73919-4.7493 1.1914-6.7581 1.3442-0.41628 0.0316-0.72776 0.3915-0.69572 0.8039 0.03033 0.393 0.36157 0.6917 0.75266 0.6917z" fill="#ACB1C1"/><path d="m7.2989 27.677c0.01934 0 0.03899-7e-4 0.05864-0.0022 2.118-0.161 4.4995-0.6333 7.0786-1.4036 2.6237-0.7836 5.1624-0.6658 7.5458 0.3494 0.3835 0.1633 0.8281-0.0124 0.9929-0.3923 0.1649-0.38-0.0124-0.8205-0.3959-0.9838-2.7192-1.1583-5.6056-1.2952-8.5789-0.4073-2.475 0.7391-4.7487 1.1914-6.7582 1.3443-0.41618 0.0315-0.72766 0.3916-0.69562 0.804 0.03033 0.3929 0.36157 0.6915 0.75266 0.6915z" fill="#ACB1C1"/><path d="m7.2989 30.86c0.01934 0 0.03899-7e-4 0.05864-0.0022 2.1179-0.1611 4.4994-0.6333 7.0786-1.4035 2.6236-0.7834 5.1624-0.6661 7.5458 0.3493 0.3835 0.1631 0.8281-0.0124 0.9929-0.3923 0.1649-0.3801-0.0124-0.8205-0.3959-0.9839-2.7192-1.1582-5.6056-1.2951-8.5789-0.4072-2.4751 0.739-4.7488 1.1914-6.7582 1.3442-0.41618 0.0316-0.72766 0.3916-0.69562 0.804 0.03033 0.3929 0.36157 0.6916 0.75266 0.6916z" fill="#ACB1C1"/><path d="m7.2989 14.946c0.01934 0 0.03899-7e-4 0.05864-0.0022 2.118-0.161 4.4995-0.6333 7.0786-1.4036 2.6237-0.7835 5.1624-0.6658 7.5458 0.3494 0.3835 0.1633 0.8281-0.0124 0.9929-0.3923 0.1649-0.38-0.0124-0.8205-0.3959-0.9838-2.7192-1.1583-5.6056-1.2952-8.5789-0.4073-2.475 0.7391-4.7487 1.1914-6.7582 1.3443-0.41618 0.0315-0.72766 0.3916-0.69562 0.804 0.03033 0.3929 0.36157 0.6915 0.75266 0.6915z" fill="#ACB1C1"/><path d="m7.2989 21.311c0.01934 0 0.03899-7e-4 0.05854-0.0021 2.1174-0.1609 4.499-0.6332 7.0787-1.4036 2.6236-0.7834 5.1624-0.6661 7.5458 0.3493 0.3835 0.1632 0.8281-0.0124 0.9929-0.3923 0.1649-0.3801-0.0124-0.8205-0.3959-0.9838-2.7191-1.1582-5.6054-1.2952-8.5789-0.4072-2.4755 0.7392-4.7493 1.1914-6.7581 1.344-0.41628 0.0317-0.72776 0.3917-0.69572 0.804 0.03033 0.3931 0.36157 0.6917 0.75266 0.6917z" fill="#ACB1C1"/><path d="m7.2989 18.129c0.01934 0 0.03899-7e-4 0.05864-0.0022 2.1179-0.1611 4.4994-0.6333 7.0786-1.4035 2.6235-0.7834 5.1623-0.6661 7.5458 0.3492 0.3835 0.1632 0.8281-0.0123 0.9929-0.3923 0.1649-0.38-0.0124-0.8204-0.3959-0.9838-2.7194-1.1583-5.6056-1.2954-8.5789-0.4072-2.4751 0.739-4.7488 1.1913-6.7582 1.3442-0.41618 0.0316-0.72766 0.3916-0.69562 0.804 0.03033 0.3929 0.36157 0.6916 0.75266 0.6916z" fill="#ACB1C1"/><path d="m7.2989 24.494c0.01934 0 0.03899-7e-4 0.05854-0.0021 2.1178-0.1609 4.4993-0.6332 7.0787-1.4036 2.6237-0.7836 5.1624-0.6658 7.5458 0.3494 0.3835 0.1634 0.8281-0.0124 0.9929-0.3923 0.1649-0.38-0.0124-0.8205-0.3959-0.9838-2.7192-1.1583-5.6056-1.2953-8.5789-0.4073-2.4751 0.7391-4.749 1.1914-6.7581 1.3441-0.41628 0.0316-0.72776 0.3916-0.69572 0.804 0.03033 0.393 0.36157 0.6916 0.75266 0.6916z" fill="#ACB1C1"/><path d="m49.749 4.2583h-1.1831v-0.68328c0-0.95757-0.8244-1.715-1.7899-1.6388-1.1153 0.08836-3.5572 0.09376-7.3827-0.86741-0.4048-0.10195-0.816 0.14099-0.9183 0.54179-0.1027 0.401 0.1421 0.8084 0.5467 0.90995 3.8348 0.96346 6.3992 1.0261 7.8751 0.90854 0.086-0.00599 0.1574 0.06021 0.1574 0.14598v30.221c-2.8629 0.3061-6.6874-0.506-9.4604-1.334-6.1935-1.8495-10.197 1.3281-11.04 1.7808v-29.934c0.8167-0.75897 4.1082-3.4472 9.007-2.6661 0.4118 0.06631 0.7999-0.21188 0.8663-0.62027 0.0664-0.40829-0.2138-0.79262-0.626-0.85842-5.1439-0.82118-8.6934 1.6685-10.005 2.8023-3.0069-2.5839-7.3081-3.7317-11.794-2.3917-4.8151 1.4379-7.8199 1.4703-9.182 1.3626-0.9668-0.07689-1.7898 0.68298-1.7898 1.6388v0.68328h-1.1834c-1.0178 0-1.8458 0.82038-1.8458 1.829v30.369c0 1.0086 0.82814 1.829 1.8459 1.829h19.582c0.2935 0 0.5596 0.1604 0.6781 0.409 1.4669 3.0751 5.9093 3.0863 7.3815 0 0.1186-0.2484 0.3848-0.409 0.6782-0.409h19.582c1.0178 0 1.8457-0.8205 1.8457-1.829v-14.202c0-0.4136-0.3382-0.7488-0.7557-0.7488s-0.7558 0.3352-0.7558 0.7488v14.202c0 0.1826-0.1499 0.3312-0.3342 0.3312h-19.582c-0.8751 0-1.6776 0.4971-2.0447 1.2668-0.9239 1.9366-3.7211 1.9443-4.6484 1e-4 -0.367-0.7696-1.1696-1.2669-2.0448-1.2669h-19.582c-0.18441 0-0.33436-0.1486-0.33436-0.3312v-30.369c0-0.18263 0.14995-0.33121 0.33426-0.33121h1.1834v28.679c0 0.3398 0.23086 0.637 0.5624 0.7239 0.1437 0.0378 3.6054 0.8992 10.846-1.263 3.5031-1.046 6.8841-0.4046 9.5667 1.4699 1.0373 0.7246 2.4812 0.7726 3.5868-1e-4 1.6201-1.1321 5.0169-2.8282 9.5667-1.4698 7.2406 2.1621 10.702 1.3007 10.846 1.263 0.3315-0.0869 0.5624-0.3841 0.5624-0.7239v-28.679h1.1831c0.1843 0 0.3343 0.14858 0.3343 0.33121v12.672c0 0.4136 0.3383 0.7488 0.7558 0.7488s0.7557-0.3352 0.7557-0.7488v-12.672c-1e-4 -1.0086-0.8281-1.829-1.8459-1.829zm-45.208-0.68328c0-0.08397 0.06923-0.15207 0.1574-0.14598 1.4682 0.11703 4.6864 0.08747 9.7392-1.4214 4.092-1.2216 8.0013-0.11413 10.604 2.3009v29.934c-0.4335-0.2326-4.6832-3.6794-11.04-1.7807-0.4076 0.1218-0.8556 0.2482-1.2702 0.3579-5e-3 0.0013-0.0101 0.0027-0.015 4e-3 -2.4336 0.6432-5.671 1.2396-8.1752 0.9724 1e-4 -2.0815 1e-4 -29.663 1e-4 -30.221z" fill="#ACB1C1"/></svg>',
            },
            {
                id: 10,
                name: "DIGITAL <br> HEALTH TECH",
                _name: "Digital Health Tech",
                value: 10,
                checked: false,
                svg: '<svg viewBox="0 0 45 46" xmlns="http://www.w3.org/2000/svg"><path d="m26.965 8.302h-2.2621v-2.3058c0-0.20384-0.0795-0.39934-0.2209-0.54348s-0.3332-0.22512-0.5332-0.22512h-3.0162c-0.1999 0-0.3917 0.08098-0.5332 0.22512-0.1414 0.14414-0.2208 0.33964-0.2208 0.54348v2.3058h-2.2622c-0.1999 0-0.3917 0.08098-0.5331 0.22512-0.1415 0.14415-0.2209 0.33964-0.2209 0.54349v3.0744c0 0.2038 0.0794 0.3993 0.2209 0.5435 0.1414 0.1441 0.3332 0.2251 0.5331 0.2251h2.2622v2.3058c0 0.2038 0.0794 0.3993 0.2208 0.5435 0.1415 0.1441 0.3333 0.2251 0.5332 0.2251h3.0162c0.2 0 0.3918-0.081 0.5332-0.2251 0.1414-0.1442 0.2209-0.3397 0.2209-0.5435v-2.3058h2.2621c0.2 0 0.3918-0.081 0.5332-0.2251 0.1414-0.1442 0.2209-0.3397 0.2209-0.5435v-3.0744c0-0.20385-0.0795-0.39934-0.2209-0.54349-0.1414-0.14414-0.3332-0.22512-0.5332-0.22512zm-0.754 3.0744h-2.2622c-0.1999 0-0.3917 0.0809-0.5332 0.2251-0.1414 0.1441-0.2208 0.3396-0.2208 0.5435v2.3058h-1.5081v-2.3058c0-0.2039-0.0795-0.3994-0.2209-0.5435-0.1414-0.1442-0.3332-0.2251-0.5332-0.2251h-2.2621v-1.5372h2.2621c0.2 0 0.3918-0.08098 0.5332-0.22512s0.2209-0.33963 0.2209-0.54348v-2.3058h1.5081v2.3058c0 0.20385 0.0794 0.39934 0.2208 0.54348 0.1415 0.14414 0.3333 0.22512 0.5332 0.22512h2.2622v1.5372z" fill="#ACB1C1"/><path d="m43.352 12.422c0.0153-0.1353 0.0229-0.2713 0.0227-0.4074-0.0037-0.7045-0.2435-1.3866-0.6796-1.9332-0.4361-0.54659-1.0424-0.92484-1.7183-1.072-0.7646-0.14835-1.5559 0.00488-2.2139 0.42867-0.6579 0.4238-1.1334 1.0865-1.3301 1.8541l-3.3179 9.7305c-0.0491 0.0199-0.097 0.043-0.1432 0.0692l-6.6658 3.9814c-1.02 0.6107-1.8661 1.4821-2.4546 2.5281-0.5884 1.046-0.899 2.2305-0.901 3.4362v7.2403c-0.1999 0-0.3917 0.081-0.5331 0.2251-0.1415 0.1442-0.2209 0.3397-0.2209 0.5435v6.1488c0 0.2039 0.0794 0.3994 0.2209 0.5435 0.1414 0.1442 0.3332 0.2251 0.5331 0.2251h10.557c0.2 0 0.3918-0.0809 0.5332-0.2251 0.1414-0.1441 0.2209-0.3396 0.2209-0.5435v-6.1488c0-0.2038-0.0795-0.3993-0.2209-0.5435-0.1414-0.1441-0.3332-0.2251-0.5332-0.2251v-1.6909c0.0014-0.3247 0.0692-0.6454 0.1991-0.9419 0.1298-0.2964 0.3188-0.562 0.555-0.7798l5.0974-4.6193c0.5575-0.4973 0.9566-1.153 1.1461-1.8831l3.2726-12.474c0.0699-0.2605 0.1054-0.5293 0.1056-0.7994-3e-3 -0.5424-0.146-1.0744-0.4147-1.5426s-0.6537-0.856-1.1161-1.1244zm-4.479-0.6764c0.0925-0.3975 0.3287-0.7448 0.6613-0.9727 0.3326-0.228 0.7373-0.3197 1.1333-0.2571 0.338 0.0722 0.6415 0.2604 0.8597 0.5332s0.338 0.6136 0.3393 0.9656v0.0154c-0.6736 0.0127-1.3246 0.2494-1.8541 0.6739s-0.9084 1.0138-1.0792 1.678l-2.1038 6.6177c-0.3185-0.154-0.66-0.2527-1.0104-0.2921l3.0539-8.9619zm-5.12 32.681h-9.0486v-4.6116h9.0486v4.6116zm9.5689-28.938-3.2801 12.482c-0.1135 0.4338-0.3495 0.824-0.6787 1.1222l-5.1049 4.6193c-0.395 0.3631-0.7111 0.8064-0.928 1.3015-0.2169 0.495-0.3297 1.0309-0.3313 1.5731v1.6909h-7.5405v-7.2403c0.0038-0.9377 0.2462-1.8584 0.7035-2.6721s1.1138-1.4926 1.9056-1.9702l6.6582-3.9737c0.1717-0.102 0.3614-0.1683 0.5584-0.1953 0.1969-0.027 0.3971-0.014 0.5891 0.0381 0.192 0.0522 0.372 0.1424 0.5296 0.2657 0.1577 0.1233 0.2899 0.2771 0.389 0.4526 0.1959 0.3551 0.2499 0.7736 0.1508 1.1683-0.0524 0.1949-0.1419 0.3773-0.2635 0.5369-0.1217 0.1596-0.273 0.2931-0.4453 0.3931l-4.3207 2.544c-0.1641 0.1064-0.2816 0.2733-0.3279 0.4658-0.0462 0.1926-0.0177 0.3959 0.0796 0.5675 0.0973 0.1717 0.256 0.2983 0.4427 0.3536 0.1868 0.0552 0.3873 0.0347 0.5597-0.0572l4.3207-2.544c0.3453-0.1998 0.648-0.4679 0.8901-0.7887 0.2422-0.3207 0.419-0.6876 0.5199-1.0791 0.2053-0.7864 0.0969-1.6236-0.3016-2.3288l-0.0452-0.0692 2.33-7.3248c0.0925-0.3975 0.3287-0.7448 0.6613-0.9727 0.3326-0.228 0.7373-0.3197 1.1333-0.2571 0.338 0.0722 0.6415 0.2604 0.8597 0.5332s0.338 0.6136 0.3393 0.9656c0.0025 0.1352-0.0153 0.27-0.0528 0.3997z" fill="#ACB1C1"/><path d="m20.932 38.278v-7.2402c-0.0019-1.2058-0.3125-2.3902-0.901-3.4362s-1.4345-1.9175-2.4545-2.5282l-6.6658-3.989c-0.0453-0.0231-0.098-0.0385-0.1433-0.0615l-3.2952-9.6767c-0.19152-0.7788-0.66696-1.4539-1.3296-1.888-0.66259-0.43408-1.4626-0.5945-2.2371-0.44862-0.67594 0.14721-1.2822 0.52546-1.7183 1.072-0.43612 0.5466-0.67588 1.2287-0.67954 1.9332-2e-4 0.1362 0.00736 0.2722 0.02262 0.4074-0.46241 0.2684-0.84732 0.6562-1.116 1.1244-0.26871 0.4682-0.41173 1.0003-0.41469 1.5427 0.0014646 0.2694 0.034371 0.5378 0.098026 0.7993l3.2801 12.467c0.18744 0.7331 0.58678 1.3918 1.1462 1.8907l5.0898 4.6193c0.23853 0.2163 0.42967 0.4815 0.56087 0.7781 0.1312 0.2967 0.1996 0.6182 0.2007 0.9436v1.6909c-0.2 0-0.39176 0.081-0.53318 0.2252-0.14141 0.1441-0.22085 0.3396-0.22085 0.5434v6.1489c0 0.2038 0.07944 0.3993 0.22085 0.5435 0.14142 0.1441 0.33318 0.2251 0.53318 0.2251h10.557c0.2 0 0.3918-0.081 0.5332-0.2251 0.1414-0.1442 0.2209-0.3397 0.2209-0.5435v-6.1489c0-0.2038-0.0795-0.3993-0.2209-0.5434-0.1414-0.1442-0.3332-0.2252-0.5332-0.2252zm-17.916-26.263c9.3e-4 -0.3509 0.11962-0.6909 0.33635-0.9635 0.21673-0.2727 0.51845-0.4615 0.85504-0.5352 0.40693-0.0602 0.82115 0.0386 1.1596 0.2766 0.33844 0.2381 0.57606 0.5978 0.66522 1.0069l3.0313 8.9082c-0.35041 0.0393-0.69191 0.138-1.0104 0.292l-2.0887-6.5792c-0.16999-0.6708-0.54967-1.267-1.0816-1.6982-0.53195-0.4313-1.1872-0.6743-1.8667-0.6922v-0.0154zm7.6008 21.698-5.0974-4.6193c-0.33099-0.2998-0.56719-0.693-0.67864-1.1298l-3.2877-12.474c-0.03121-0.1308-0.04641-0.265-0.04524-0.3996 9.3e-4 -0.351 0.11962-0.691 0.33635-0.9636 0.21673-0.2727 0.51846-0.4615 0.85505-0.5352 0.40406-0.0618 0.81611 0.0346 1.1532 0.2699 0.33715 0.2353 0.57439 0.5919 0.664 0.9983l2.3149 7.2863-0.04525 0.0692c-0.39844 0.7052-0.50688 1.5425-0.30162 2.3289 0.10096 0.3914 0.27772 0.7583 0.51989 1.0791 0.24216 0.3207 0.54483 0.5889 0.89019 0.7886l4.3207 2.5441c0.1723 0.0919 0.3728 0.1123 0.5596 0.0571s0.3454-0.1819 0.4427-0.3535c0.0974-0.1717 0.1259-0.375 0.0796-0.5675-0.0463-0.1926-0.1637-0.3595-0.3279-0.4658l-4.3207-2.5441c-0.17231-0.0999-0.32361-0.2335-0.44524-0.3931-0.12162-0.1595-0.21118-0.342-0.26356-0.5369-0.09906-0.3947-0.04505-0.8131 0.15081-1.1683 0.09852-0.1751 0.22992-0.3287 0.3867-0.4521 0.15677-0.1234 0.33585-0.214 0.527-0.2669 0.19116-0.0528 0.39065-0.0667 0.58708-0.0409 0.19644 0.0258 0.38597 0.0907 0.55777 0.1912l6.6658 3.9813c0.7917 0.4777 1.4483 1.1565 1.9056 1.9702s0.6997 1.7344 0.7034 2.6722v7.2402h-7.5405v-1.6909c-0.0013-0.5429-0.1147-1.0795-0.333-1.5748s-0.5364-0.9382-0.9338-1.2998zm9.5614 10.714h-9.0486v-4.6117h9.0486v4.6117z" fill="#ACB1C1"/><path d="m33.113 2.2546c-0.7-0.71478-1.5314-1.2818-2.4467-1.6687-0.9152-0.38687-1.8963-0.58597-2.8872-0.5859-0.9908 7.1391e-5 -1.9719 0.19931-2.8871 0.58631s-1.7466 0.95417-2.4465 1.669c-0.6998-0.7149-1.5311-1.2821-2.4463-1.6691-0.9152-0.38698-1.8963-0.58618-2.8871-0.58618s-1.9719 0.19919-2.887 0.58618c-0.9152 0.38698-1.7465 0.95415-2.4464 1.6691-1.4113 1.4416-2.2039 3.3951-2.2039 5.4317 0 2.0366 0.7926 3.9901 2.2039 5.4317l10.134 10.33c0.1414 0.1441 0.3331 0.2251 0.5331 0.2251 0.1999 0 0.3917-0.081 0.5331-0.2251l10.134-10.33c1.4113-1.4419 2.2038-3.3955 2.2036-5.4323-1e-4 -2.0368-0.7929-3.9903-2.2044-5.432zm-10.668 19.564-9.6013-9.7866c-0.8429-0.8604-1.4167-1.9562-1.6487-3.1488-0.2321-1.1927-0.112-2.4287 0.3451-3.5519 0.457-1.1231 1.2305-2.0829 2.2226-2.7581s2.1583-1.0353 3.3512-1.035c0.7924-0.00277 1.5774 0.15531 2.3093 0.46502 0.7318 0.30971 1.3959 0.76486 1.9533 1.3389l0.5354 0.54571c0.1414 0.14409 0.3332 0.22504 0.5331 0.22504 0.2 0 0.3917-0.08095 0.5331-0.22504l0.5369-0.54724c0.5598-0.57165 1.2247-1.0252 1.9567-1.3346 0.7319-0.30944 1.5166-0.46871 2.309-0.46871s1.577 0.15927 2.3089 0.46871c0.732 0.30943 1.3969 0.76294 1.9567 1.3346 1.1295 1.1529 1.764 2.7156 1.764 4.3449s-0.6345 3.192-1.764 4.345l-9.6013 9.7881z" fill="#ACB1C1"/></svg>',
            },
            {
                id: 11,
                name: "TELEMEDICINE",
                _name: "Telemedicine",
                value: 11,
                checked: false,
                svg: `<svg width="52" height="78" viewBox="0 0 52 78" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M44.2 0H7.8C5.73195 0.00206496 3.74918 0.824512 2.28685 2.28685C0.824511 3.74918 0.00206496 5.73195 0 7.8V70.2C0.00206496 72.2681 0.824511 74.2508 2.28685 75.7132C3.74918 77.1755 5.73195 77.9979 7.8 78H44.2C46.2681 77.9979 48.2508 77.1755 49.7132 75.7132C51.1755 74.2508 51.9979 72.2681 52 70.2V7.8C51.9979 5.73195 51.1755 3.74918 49.7132 2.28685C48.2508 0.824512 46.2681 0.00206496 44.2 0ZM49.4 70.2C49.4 71.5791 48.8521 72.9018 47.877 73.877C46.9018 74.8521 45.5791 75.4 44.2 75.4H7.8C6.42087 75.4 5.09823 74.8521 4.12304 73.877C3.14786 72.9018 2.6 71.5791 2.6 70.2V7.8C2.6 6.42087 3.14786 5.09823 4.12304 4.12304C5.09823 3.14786 6.42087 2.6 7.8 2.6H44.2C45.5791 2.6 46.9018 3.14786 47.877 4.12304C48.8521 5.09823 49.4 6.42087 49.4 7.8V70.2Z" fill="#ACB1C1"/>
			<path d="M28.6 65H23.4C22.3657 65 21.3737 65.4109 20.6423 66.1423C19.9109 66.8737 19.5 67.8657 19.5 68.9C19.5 69.9343 19.9109 70.9263 20.6423 71.6577C21.3737 72.3891 22.3657 72.8 23.4 72.8H28.6C29.6343 72.8 30.6263 72.3891 31.3577 71.6577C32.0891 70.9263 32.5 69.9343 32.5 68.9C32.5 67.8657 32.0891 66.8737 31.3577 66.1423C30.6263 65.4109 29.6343 65 28.6 65ZM28.6 70.2H23.4C23.0552 70.2 22.7246 70.063 22.4808 69.8192C22.237 69.5754 22.1 69.2448 22.1 68.9C22.1 68.5552 22.237 68.2246 22.4808 67.9808C22.7246 67.737 23.0552 67.6 23.4 67.6H28.6C28.9448 67.6 29.2754 67.737 29.5192 67.9808C29.763 68.2246 29.9 68.5552 29.9 68.9C29.9 69.2448 29.763 69.5754 29.5192 69.8192C29.2754 70.063 28.9448 70.2 28.6 70.2Z" fill="#ACB1C1"/>
			<path d="M16.8999 5.2002H19.4999V7.8002H16.8999V5.2002Z" fill="#ACB1C1"/>
			<path d="M22.1001 5.2002H29.9001V7.8002H22.1001V5.2002Z" fill="#ACB1C1"/>
			<path d="M25.0809 33.4194C25.3247 33.6632 25.6553 33.8001 26 33.8001C26.3447 33.8001 26.6753 33.6632 26.9191 33.4194L36.1114 24.2271C37.3216 23.0063 37.9989 21.3559 37.9951 19.6369C37.9913 17.9179 37.3068 16.2704 36.0913 15.0549C34.8758 13.8394 33.2283 13.1549 31.5094 13.1511C29.7904 13.1474 28.1399 13.8247 26.9191 15.0348L26 15.9539L25.0809 15.0348C23.8601 13.8247 22.2096 13.1474 20.4907 13.1511C18.7717 13.1549 17.1242 13.8394 15.9087 15.0549C14.6932 16.2704 14.0087 17.9179 14.0049 19.6369C14.0011 21.3559 14.6784 23.0063 15.8886 24.2271L25.0809 33.4194ZM17.7268 16.873C18.089 16.5108 18.5189 16.2235 18.9921 16.0275C19.4654 15.8314 19.9725 15.7305 20.4848 15.7305C20.997 15.7305 21.5042 15.8314 21.9774 16.0275C22.4506 16.2235 22.8805 16.5108 23.2427 16.873L25.0809 18.7125C25.3293 18.9474 25.6582 19.0783 26 19.0783C26.3419 19.0783 26.6707 18.9474 26.9191 18.7125L28.7573 16.873C29.4888 16.1416 30.4808 15.7307 31.5153 15.7307C32.5497 15.7307 33.5417 16.1416 34.2732 16.873C35.0047 17.6045 35.4156 18.5966 35.4156 19.631C35.4156 20.6654 35.0047 21.6575 34.2732 22.3889L26 30.6621L17.7268 22.3889C16.9969 21.6567 16.587 20.6649 16.587 19.631C16.587 18.5971 16.9969 17.6053 17.7268 16.873Z" fill="#ACB1C1"/>
			<path d="M34.9698 44.919C34.8558 44.682 34.6716 44.4859 34.4423 44.3573C34.213 44.2287 33.9496 44.1738 33.688 44.2001C33.4285 44.2224 33.1816 44.3222 32.9795 44.4866C32.7773 44.6509 32.6293 44.8722 32.5544 45.1218L30.1091 53.2702L27.2712 40.0232C27.2093 39.7389 27.0539 39.4836 26.8298 39.2981C26.6056 39.1126 26.3257 39.0077 26.0349 39.0001C25.7432 38.9898 25.4566 39.0791 25.2223 39.2532C24.9879 39.4273 24.8197 39.6759 24.7453 39.9582L22.0712 49.7667L20.7504 45.1426C20.6793 44.8897 20.5334 44.6644 20.3317 44.4961C20.1301 44.3279 19.8822 44.2247 19.6207 44.2001C19.3593 44.1736 19.0961 44.2277 18.8665 44.3553C18.6369 44.4829 18.4518 44.6778 18.3363 44.9138L16.0964 49.4001H7.7998V52.0001H16.8998C17.1414 52.0002 17.3782 51.933 17.5837 51.806C17.7893 51.679 17.9553 51.4973 18.0633 51.2812L19.1683 49.0712L20.8492 54.9576C20.9269 55.2292 21.091 55.4682 21.3167 55.6382C21.5423 55.8083 21.8172 55.9002 22.0998 55.9001H22.1076C22.3915 55.8984 22.6671 55.8039 22.8922 55.6309C23.1173 55.4578 23.2796 55.2159 23.3543 54.942L25.849 45.7965L28.6284 58.7718C28.6888 59.054 28.8414 59.3082 29.0622 59.4941C29.283 59.6801 29.5594 59.7873 29.8478 59.7988H29.8998C30.1795 59.7988 30.4517 59.7086 30.6761 59.5416C30.9004 59.3746 31.0649 59.1398 31.1452 58.8719L34.1027 49.0101L35.2363 51.2773C35.3438 51.4941 35.5096 51.6766 35.7151 51.8043C35.9207 51.932 36.1578 51.9998 36.3998 52.0001H44.1998V49.4001H37.2032L34.9698 44.919Z" fill="#ACB1C1"/>
			</svg>`,
            },
        ];
        this.remove_sect_arr = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getSector();
            this.loggedInUser$.subscribe((resp) => {
                this.logged_in_user = resp.LoggedInUser;
                this.activatedRoute.queryParams.subscribe((params) => {
                    this.params = params;
                    if (params.mode == "update") {
                        this.getSelectedSector();
                    }
                });
            });
        });
    }
    handleSectorFilter(e, sector) {
        sector.checked = !sector.checked;
        if (this.params.mode && this.params.mode == "update") {
            if (this.logged_in_user.userType == "seeker" && !sector.checked && this.sectorsInOnGoingChallenges.includes(sector.id)) {
                sector.checked = true;
                e.target.checked = true;
                this.unFollowSectorName = sector._name;
                $("#unFollowWarning").modal("show");
            }
            if (this.logged_in_user.userType == "provider" && !sector.checked && this.sectorsInOnGoingSolutions.includes(sector.id)) {
                sector.checked = true;
                e.target.checked = true;
                this.unFollowSectorName = sector._name;
                $("#unFollowWarning").modal("show");
            }
        }
    }
    getSector() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.sectorLoading = true;
            this.sectorsData = yield this._ss.fetchSector();
            this.sectorsData.data.map((sector) => {
                sector.checked = false;
            });
            this.sectorLoading = false;
        });
    }
    prepareSectorArr() {
        return new Promise((resolve, reject) => {
            lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.sectorsData.data, (sector, index) => {
                if (sector.checked == true) {
                    this.sel_challengeSector.push(sector.id);
                }
                if (this.sectorsData.data.length == index + 1) {
                    resolve(this.sel_challengeSector);
                }
            });
        });
    }
    selectSectors() {
        if (this.params.mode == "update") {
            if (this.choosen_sectors.length) {
                lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.choosen_sectors, (itm, idx) => {
                    this.remove_sect_arr.push(itm.id);
                    if (this.choosen_sectors.length == idx + 1) {
                        var post_data = {
                            slug: {
                                ids: this.remove_sect_arr,
                            },
                        };
                        this._ss.removeSectorsAPI(this.logged_in_user.userType, post_data).subscribe((resp) => {
                            if (resp.status == true) {
                                this.saveSectors();
                            }
                        });
                    }
                });
            }
            else {
                this.saveSectors();
            }
        }
        else {
            this.saveSectors();
        }
    }
    getSelectedSector() {
        var post_data = {};
        if (this.logged_in_user.userType == "seeker") {
            post_data = {
                filter: {
                    frg_seeker_id: this.logged_in_user.userTypeId,
                },
            };
            this._ss.getSelectedSectorAPI("seeker", post_data).subscribe((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.choosen_sectors = response.data;
                this.followingSectorArr = this.choosen_sectors.map((sector) => sector.frg_challenge_sector_id);
                this.sectorsInOnGoingChallenges = yield this._ss.getSectorIdsFollowedBySeekerUnderChallenges(this.logged_in_user.userTypeId);
                lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.choosen_sectors, (itm) => {
                    lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.sectorsData.data, (sector) => {
                        if (itm.frg_challenge_sector_id == sector.id) {
                            sector.checked = true;
                        }
                    });
                });
            }));
        }
        else {
            post_data = {
                filter: {
                    frg_provider_id: this.logged_in_user.userTypeId,
                },
            };
            this._ss.getSelectedSectorAPI("provider", post_data).subscribe((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.choosen_sectors = response.data;
                this.followingSectorArr = this.choosen_sectors.map((sector) => sector.frg_challenge_sector_id);
                this.sectorsInOnGoingSolutions = yield this._ss.getSectorIdsFollowedByProviderUnderSolutions(this.logged_in_user.userTypeId);
                // console.log(this.sectorsInOnGoingSolutions);
                lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.choosen_sectors, (itm) => {
                    lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.sectorsData.data, (sector) => {
                        if (itm.frg_challenge_sector_id == sector.id) {
                            sector.checked = true;
                        }
                    });
                });
            }));
        }
    }
    saveSectors() {
        var post_data = {};
        var temp_arr = [];
        this.prepareSectorArr().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(data, "selected arr");
            yield lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.sel_challengeSector, (itm, idx) => {
                if (this.logged_in_user.userType == "provider") {
                    post_data = {
                        frg_challenge_sector_id: itm,
                        frg_provider_id: this.logged_in_user.userTypeId,
                    };
                    temp_arr.push(post_data);
                }
                else {
                    post_data = {
                        frg_challenge_sector_id: itm,
                        frg_seeker_id: this.logged_in_user.userTypeId,
                    };
                    temp_arr.push(post_data);
                }
            });
            if (this.sel_challengeSector.length == temp_arr.length) {
                if (this.logged_in_user.userType == "provider") {
                    this._ss.saveSelectedSectorAPI("provider", temp_arr).subscribe((resp) => {
                        if (resp.status == true) {
                            this.router.navigate([`/provider/user/${this.logged_in_user.slug}`]);
                        }
                    });
                }
                else {
                    this._ss.saveSelectedSectorAPI("seeker", temp_arr).subscribe((resp) => {
                        if (resp.status == true) {
                            this.router.navigate([`/seeker/user/${this.logged_in_user.slug}`]);
                        }
                    });
                }
            }
        }));
    }
};
SelectSectorComponent.ctorParameters = () => [
    { type: _select_sector_service__WEBPACK_IMPORTED_MODULE_2__["SelectSectorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserState"])
], SelectSectorComponent.prototype, "loggedInUser$", void 0);
SelectSectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-select-sector",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-sector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/select-sector/select-sector.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-sector.component.css */ "./src/app/discover/select-sector/select-sector.component.css")).default]
    })
], SelectSectorComponent);

let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: "safeHtml" })
], SafeHtmlPipe);



/***/ }),

/***/ "./src/app/discover/select-sector/select-sector.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/discover/select-sector/select-sector.service.ts ***!
  \*****************************************************************/
/*! exports provided: SelectSectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSectorService", function() { return SelectSectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





let SelectSectorService = class SelectSectorService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    saveSelectedSectorAPI(type, post_data) {
        if (type == "seeker") {
            return this.http.post(this.api_url + "/challenge_sectors_seekers/create_mul", post_data);
        }
        else if (type == "provider") {
            return this.http.post(this.api_url + "/challenge_sectors_and_providers/create_mul", post_data);
        }
    }
    getSelectedSectorAPI(type, data) {
        if (type == "seeker") {
            return this.http.post(this.api_url + "/challenge_sectors_seekers/select_mul", data);
        }
        else if (type == "provider") {
            return this.http.post(this.api_url + "/challenge_sectors_and_providers/select_mul", data);
        }
    }
    removeSectorsAPI(type, data) {
        if (type == "seeker") {
            return this.http.post(this.api_url + "/challenge_sectors_seekers/delete_mul", data);
        }
        else if (type == "provider") {
            return this.http.post(this.api_url + "/challenge_sectors_and_providers/delete_mul", data);
        }
    }
    getSectorIdsFollowedBySeekerUnderChallenges(seekerId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let resp = yield this.http
                .post(this.api_url + "/anchors/select_mul", {
                filter: {
                    frg_seeker_id: seekerId,
                    status: "active",
                },
            })
                .toPromise();
            let sectorId = resp.data.map((e) => e.frg_challenge_id.frg_challenge_sector_id);
            return sectorId;
        });
    }
    getSectorIdsFollowedByProviderUnderSolutions(providerId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let resp = yield this.http
                .post(this.api_url + "/solutions/select_mul", {
                filter: {
                    frg_provider_id: providerId,
                    status: "active",
                },
            })
                .toPromise();
            // console.log(resp);
            let sectorId = lodash__WEBPACK_IMPORTED_MODULE_4__["flattenDeep"](resp.data.map((e) => e.challenge_sectors.map((sector) => sector.id)));
            // console.log("before uniq", sectorId);
            return lodash__WEBPACK_IMPORTED_MODULE_4__["uniq"](sectorId);
        });
    }
    fetchSector() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http
                .post(this.api_url + "/challenge_sectors/select_mul", {
                filter: { status: "active" },
                sort: "created_at DESC",
                pg: {
                    limit: 200,
                    skip: 0,
                },
            })
                .toPromise();
        });
    }
};
SelectSectorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SelectSectorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], SelectSectorService);



/***/ }),

/***/ "./src/app/discover/widgets/sector-filter/filter.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/discover/widgets/sector-filter/filter.service.ts ***!
  \******************************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let FilterService = class FilterService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    fetchSector() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http
                .post(this.api_url + "/challenge_sectors/select_mul", {
                filter: { status: "active" },
                sort: "created_at DESC",
                pg: {
                    limit: 200,
                    skip: 0,
                },
            })
                .toPromise();
        });
    }
};
FilterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], FilterService);



/***/ }),

/***/ "./src/app/discover/widgets/sector-filter/sector-filter.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/discover/widgets/sector-filter/sector-filter.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* checkbox */\r\n.a-checkbox[type=\"checkbox\"] {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\twidth: 0;\r\n\theight: 0;\r\n}\r\n.a-cnt {\r\n\tcolor: #acb1c1;\r\n}\r\n/* IMAGE STYLES */\r\n.a-checkbox[type=\"checkbox\"] + .discover-challenges-card {\r\n\tcursor: pointer;\r\n}\r\n/* CHECKED STYLES */\r\n.a-checkbox[type=\"checkbox\"]:checked + .discover-challenges-card {\r\n\tbackground-color: #2d9851 !important;\r\n\t/* filter: drop-shadow(5px 5px 20px #2d9851b6) !important; */\r\n}\r\n:host ::ng-deep .a-checkbox[type=\"checkbox\"]:checked + .discover-challenges-card svg path {\r\n\tfill: var(--white) !important;\r\n}\r\n:host ::ng-deep .a-checkbox[type=\"checkbox\"]:checked + .discover-challenges-card .a-cnt {\r\n\tcolor: var(--white) !important;\r\n}\r\n.a-discover-challenges-icon-list svg {\r\n\twidth: 40px !important;\r\n\theight: 40px !important;\r\n}\r\n.a-cnt {\r\n\theight: 22px;\r\n}\r\n.a-discover-challenges-icon-list > li {\r\n\tlist-style: none !important;\r\n\tdisplay: inline-block !important;\r\n\tvertical-align: text-bottom;\r\n}\r\ncarousel .carousel-arrow {\r\n\tbackground-size: 28px !important;\r\n\theight: 36px !important;\r\n\twidth: 36px !important;\r\n}\r\n.sector-loader {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY292ZXIvd2lkZ2V0cy9zZWN0b3ItZmlsdGVyL3NlY3Rvci1maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFFBQVE7Q0FDUixTQUFTO0FBQ1Y7QUFFQTtDQUNDLGNBQWM7QUFDZjtBQUVBLGlCQUFpQjtBQUNqQjtDQUNDLGVBQWU7QUFDaEI7QUFFQSxtQkFBbUI7QUFDbkI7Q0FDQyxvQ0FBb0M7Q0FDcEMsNERBQTREO0FBQzdEO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLHVCQUF1QjtBQUN4QjtBQUVBO0NBQ0MsWUFBWTtBQUNiO0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0IsZ0NBQWdDO0NBQ2hDLDJCQUEyQjtBQUM1QjtBQUVBO0NBQ0MsZ0NBQWdDO0NBQ2hDLHVCQUF1QjtDQUN2QixzQkFBc0I7QUFDdkI7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9kaXNjb3Zlci93aWRnZXRzL3NlY3Rvci1maWx0ZXIvc2VjdG9yLWZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY2hlY2tib3ggKi9cclxuLmEtY2hlY2tib3hbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0b3BhY2l0eTogMDtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5hLWNudCB7XHJcblx0Y29sb3I6ICNhY2IxYzE7XHJcbn1cclxuXHJcbi8qIElNQUdFIFNUWUxFUyAqL1xyXG4uYS1jaGVja2JveFt0eXBlPVwiY2hlY2tib3hcIl0gKyAuZGlzY292ZXItY2hhbGxlbmdlcy1jYXJkIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENIRUNLRUQgU1RZTEVTICovXHJcbi5hLWNoZWNrYm94W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLmRpc2NvdmVyLWNoYWxsZW5nZXMtY2FyZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJkOTg1MSAhaW1wb3J0YW50O1xyXG5cdC8qIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAyMHB4ICMyZDk4NTFiNikgIWltcG9ydGFudDsgKi9cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmEtY2hlY2tib3hbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuZGlzY292ZXItY2hhbGxlbmdlcy1jYXJkIHN2ZyBwYXRoIHtcclxuXHRmaWxsOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmEtY2hlY2tib3hbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuZGlzY292ZXItY2hhbGxlbmdlcy1jYXJkIC5hLWNudCB7XHJcblx0Y29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYS1kaXNjb3Zlci1jaGFsbGVuZ2VzLWljb24tbGlzdCBzdmcge1xyXG5cdHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XHJcblx0aGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLWNudCB7XHJcblx0aGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4uYS1kaXNjb3Zlci1jaGFsbGVuZ2VzLWljb24tbGlzdCA+IGxpIHtcclxuXHRsaXN0LXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcblx0dmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG59XHJcblxyXG5jYXJvdXNlbCAuY2Fyb3VzZWwtYXJyb3cge1xyXG5cdGJhY2tncm91bmQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xyXG5cdGhlaWdodDogMzZweCAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAzNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWN0b3ItbG9hZGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/discover/widgets/sector-filter/sector-filter.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/discover/widgets/sector-filter/sector-filter.component.ts ***!
  \***************************************************************************/
/*! exports provided: SectorFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorFilterComponent", function() { return SectorFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.service */ "./src/app/discover/widgets/sector-filter/filter.service.ts");



// import Swiper core and required modules
let SectorFilterComponent = class SectorFilterComponent {
    constructor(_filter) {
        this._filter = _filter;
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // OwlCarousel Options
        this.customOptions = {
            loop: false,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            // navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 4
                },
                740: {
                    items: 6
                },
                940: {
                    items: 12
                }
            },
        };
    }
    ngOnInit() {
        this.getSectors();
    }
    ngOnChanges() { }
    getSectors() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.sectorsData = yield this._filter.fetchSector();
            this.sectorsData.data.map((sector) => {
                sector.checked = false;
            });
            this.isLoading = false;
        });
    }
    handleSectorFilter(event) {
        this.onFilterChange.emit(event);
    }
};
SectorFilterComponent.ctorParameters = () => [
    { type: _filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SectorFilterComponent.prototype, "onFilterChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectorFilterComponent.prototype, "sectors", void 0);
SectorFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sector-filter",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sector-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/discover/widgets/sector-filter/sector-filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sector-filter.component.css */ "./src/app/discover/widgets/sector-filter/sector-filter.component.css")).default]
    })
], SectorFilterComponent);



/***/ })

}]);
//# sourceMappingURL=default~challenge-challenge-module~cities-cities-module~discover-discover-module-es2015.js.map