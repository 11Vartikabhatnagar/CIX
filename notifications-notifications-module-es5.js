(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications/notifications.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications/notifications.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationsNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!notifications?.length\" class=\"text-center g-mt-50 g-mb-50\">Currently there are no notifications</div>\r\n\r\n<div class=\"container g-pb-50\" *ngIf=\"notifications?.length > 0\">\r\n    <div class=\"d-flex a-justify-space-between g-mt-43 g-mb-10\">\r\n        <div class=\"g-fs-12 g-fw-500 g-lh-14 notification-header\">Notifications ( {{notificationCount}} )</div>\r\n        <div class=\"g-fs-09 g-lh-11 notification-header mark-as-read\" (click)=\"markAllRead()\">Mark all as read</div>\r\n    </div>\r\n    <div class=\"notification-content\">\r\n        <ng-container *ngFor=\"let item of notifications\">\r\n            <ng-container *ngIf=\"item.event === 'ON_NEW_CHALLENGE'\">\r\n                <div class=\"notification-item\" (click)=\"handleNotificationRedirect('/challenge/' + item.message_payload.payloads.challenge_id, item.id)\">\r\n                    <div class=\"message g-fs-08\">\r\n                        A new challenge statement named as <b>{{ item.message_payload.payloads.challenge_name }}</b> under the sector <b>{{ item.message_payload.payloads.challenge_sector | titlecase }}</b>\r\n                        has been added to the platform.\r\n                    </div>\r\n                    <span class=\"status\" [ngClass]=\"{ new: item.read === false }\"> </span>\r\n                    <div class=\"time g-fs-08 g-black5-clr g-opacity-05 text-end\">\r\n                        {{ item.timestamp }}\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"item.event === 'ON_SOLUTION_ADDED_UNDER_SECTOR'\">\r\n                <div class=\"notification-item\" (click)=\"handleNotificationRedirect('/solution/' + item.message_payload.payloads.solution_id, item.id)\">\r\n                    <div class=\"message g-fs-08\">\r\n                        A new Solution named <b>{{ item.message_payload.payloads.solution_name }}</b> has been added under the sector <b>{{ item.message_payload.payloads.challenge_sector | titlecase }}</b> by\r\n                        {{ item.message_payload.payloads.company_name }}\r\n                    </div>\r\n                    <span class=\"status\" [ngClass]=\"{ new: item.read === false }\"> </span>\r\n                    <div class=\"time g-fs-08 g-black5-clr g-opacity-05 text-end\">\r\n                        {{ item.timestamp }}\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"item.event === 'ON_SOLUTION_ADDED_UNDER_CHALLENGE'\">\r\n                <div class=\"notification-item\" (click)=\"handleNotificationRedirect('/solution/' + item.message_payload.payloads.solution_id, item.id)\">\r\n                    <div class=\"message g-fs-08\">\r\n                        <b>{{ item.message_payload.payloads.company_name }}</b> catalogued a new solution for the challenge <b>{{ item.message_payload.payloads.challenge_name | titlecase }}</b>\r\n                    </div>\r\n                    <span class=\"status\" [ngClass]=\"{ new: item.read === false }\"> </span>\r\n                    <div class=\"time g-fs-08 g-black5-clr g-opacity-05 text-end\">\r\n                        {{ item.timestamp }}\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"item.event === 'ON_NEW_EOI'\">\r\n                <div class=\"notification-item\" (click)=\"handleNotificationRedirect('/provider/user/' + item.message_payload.payloads.user_slug + '/dashboard/eois' )\">\r\n                    <div class=\"message g-fs-08\">\r\n                        A new EOI has been recieved for <b>{{ item.message_payload.payloads.application_name }}</b> from the <b>{{ item.message_payload.payloads.seeker_name | titlecase }}</b> of\r\n                        {{ item.message_payload.payloads.city_name }}\r\n                    </div>\r\n                    <span class=\"status\" [ngClass]=\"{ new: item.read === false }\"> </span>\r\n                    <div class=\"time g-fs-08 g-black5-clr g-opacity-05 text-end\">\r\n                        {{ item.timestamp }}\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"item.event === 'ON_NEW_PROPOSAL'\">\r\n                <div class=\"notification-item\" (click)=\"handleNotificationRedirect('/seeker/user/' + item.message_payload.payloads.user_slug + '/dashboard/challenge/' +  item.message_payload.payloads.anchor_id + '/review-proposals',item.id)\">\r\n                    <div class=\"message g-fs-08\">\r\n                        A new proposal is recieved from <b>{{ item.message_payload.payloads.provider_name | titlecase}},{{item.message_payload.payloads.type | titlecase}}</b> for the challenge <b>{{ item.message_payload.payloads.challenge_name | titlecase }}.</b>\r\n                    </div>\r\n                    <span class=\"status\" [ngClass]=\"{ new: item.read === false }\"> </span>\r\n                    <div class=\"time g-fs-08 g-black5-clr g-opacity-05 text-end\">\r\n                        {{ item.timestamp }}\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"item.event === 'ON_ANCHOR_CLOSED'\">\r\n                <div class=\"notification-item\" (click)=\"handleNotificationRedirect('/challenge/' + item.message_payload.payloads.challenge_id + '/anchor/' + item.message_payload.payloads.anchor_id,item.id)\">\r\n                    <div class=\"message g-fs-08\">\r\n                        <b>{{ item.message_payload.payloads.city_name | titlecase}}</b> lead by  <b>{{ item.message_payload.payloads.city_admin | titlecase}}</b> has closed their anchor titled  <b>{{ item.message_payload.payloads.challenge_name | titlecase }}.</b>\r\n                    </div>\r\n                    <span class=\"status\" [ngClass]=\"{ new: item.read === false }\"> </span>\r\n                    <div class=\"time g-fs-08 g-black5-clr g-opacity-05 text-end\">\r\n                        {{ item.timestamp }}\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"item.event === 'ON_PROPOSAL_REJECTION'\">\r\n                <div class=\"notification-item\" (click)=\"handleNotificationRedirect('/seeker/user/' + item.message_payload.payloads.user_slug + '/dashboard/challenge/' + item.message_payload.payloads.anchor_id +'/review-proposals',item.id)\">\r\n                    <div class=\"message g-fs-08\">\r\n                        Your Proposal <b>{{ item.message_payload.payloads.proposal_name | titlecase}}</b> was rejected by  <b>{{ item.message_payload.payloads.seeker_name | titlecase}}</b> ,<b>{{ item.message_payload.payloads.city_name | titlecase}}</b> for following reason <b>{{ item.message_payload.payloads.rejection_message | titlecase}}</b>\r\n                    </div>\r\n                    <span class=\"status\" [ngClass]=\"{ new: item.read === false }\"> </span>\r\n                    <div class=\"time g-fs-08 g-black5-clr g-opacity-05 text-end\">\r\n                        {{ item.timestamp }}\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"item.event === 'ON_APPLICATION_REJECTION'\">\r\n                <div class=\"notification-item\" (click)=\"handleNotificationRedirect('/provider/user/' + item.message_payload.payloads.user_slug + '/dashboard/applications/' ,item.id)\">\r\n                    <div class=\"message g-fs-08\">\r\n                        Your Proposal <b>{{ item.message_payload.payloads.application_name | titlecase}}</b> was rejected by  <b>{{ item.message_payload.payloads.city_admin | titlecase}}</b> ,<b>{{ item.message_payload.payloads.city_name | titlecase}}</b> for following reason <b>{{ item.message_payload.payloads.rejection_msg | titlecase}}</b>\r\n                    </div>\r\n                    <span class=\"status\" [ngClass]=\"{ new: item.read === false }\"> </span>\r\n                    <div class=\"time g-fs-08 g-black5-clr g-opacity-05 text-end\">\r\n                        {{ item.timestamp }}\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"item.event === 'ON_ANCHOR_STATUS'\">\r\n                <div class=\"notification-item\">\r\n                    <div class=\"message g-fs-08\">\r\n                        Your Challenge brief named as <b>{{ item.message_payload.payloads.challenge_name | titlecase}}</b> has been <b>{{ item.message_payload.payloads.status | titlecase}}</b>\r\n                    </div>\r\n                    <span class=\"status\" [ngClass]=\"{ new: item.read === false }\"> </span>\r\n                    <div class=\"time g-fs-08 g-black5-clr g-opacity-05 text-end\">\r\n                        {{ item.timestamp }}\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"item.event === 'ON_APP_CREATION'\">\r\n                <div class=\"notification-item\"  (click)=\"handleNotificationRedirect('/provider/user/' + item.message_payload.payloads.user_slug + '/dashboard/proposals/' ,item.id)\">\r\n                    <div class=\"message g-fs-08\">\r\n                        A proposal for the  Challenge brief <b>{{ item.message_payload.payloads.challenge_name | titlecase}}</b> has been created\r\n                    </div>\r\n                    <span class=\"status\" [ngClass]=\"{ new: item.read === false }\"> </span>\r\n                    <div class=\"time g-fs-08 g-black5-clr g-opacity-05 text-end\">\r\n                        {{ item.timestamp }}\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"item.event === 'ON_UNS_CHALL_CREATION'\">\r\n                <div class=\"notification-item\"  (click)=\"handleNotificationRedirect('/seeker/user/' + item.message_payload.payloads.user_slug + '/unsolicted-proposal' ,item.id)\">\r\n                    <div class=\"message g-fs-08\">\r\n                        A new challenge statement named as <b>{{ item.message_payload.payloads.challenge_name }}</b> under the sector <b>{{ item.message_payload.payloads.challenge_sector | titlecase }}</b>\r\n                            has been added to the platform.\r\n                    </div>\r\n                    <span class=\"status\" [ngClass]=\"{ new: item.read === false }\"> </span>\r\n                    <div class=\"time g-fs-08 g-black5-clr g-opacity-05 text-end\">\r\n                        {{ item.timestamp }}\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </ng-container>\r\n\r\n        <!-- <div class=\"load-more-notification-wrp g-pt-24 g-pb-32\">\r\n            <button type=\"button\" class=\"btn g-white-bg load-more-btn g-pt-05 g-pb-05 g-pl-11 g-pr-11\">Load more notifications</button>\r\n        </div> -->\r\n        <div class=\"row g-pt-10\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"text-center\">\r\n                    <pagination-controller [totalItems]=\"notificationCount\" [pageSize]=\"5\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/notifications/notifications-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/notifications/notifications-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: NotificationsRoutingModule */

  /***/
  function srcAppNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function () {
      return NotificationsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications/notifications.component */
    "./src/app/notifications/notifications/notifications.component.ts");

    const routes = [{
      path: "",
      component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]
    }];
    let NotificationsRoutingModule = class NotificationsRoutingModule {};
    NotificationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsRoutingModule);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/notifications.module.ts ***!
    \*******************************************************/

  /*! exports provided: NotificationsModule */

  /***/
  function srcAppNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsModule", function () {
      return NotificationsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications-routing.module */
    "./src/app/notifications/notifications-routing.module.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./notifications/notifications.component */
    "./src/app/notifications/notifications/notifications.component.ts");
    /* harmony import */


    var _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/widgets/widgets.module */
    "./src/app/shared/widgets/widgets.module.ts");

    let NotificationsModule = class NotificationsModule {};
    NotificationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationsRoutingModule"], _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_5__["WidgetsModule"]]
    })], NotificationsModule);
    /***/
  },

  /***/
  "./src/app/notifications/notifications/notifications.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/notifications/notifications/notifications.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsNotificationsNotificationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".notification-content{\r\n    background-color: var(--white);\r\n    border-radius: 6px;\r\n}\r\n.notification-header{\r\n    color: #222327;\r\n}\r\n.notification-item .status {\r\n\twidth: 8px;\r\n\theight: 8px;\r\n\tborder-radius: 50%;\r\n\tmargin-left: 1rem;\r\n\tmargin-right: 1rem;\r\n}\r\n.notification-item .status.new {\r\n\tbackground-color: var(--primary-clr);\r\n}\r\n.notification-item {\r\n    padding:25px 24px;\r\n    display: grid;\r\n    grid-template-columns: 5fr 0.5fr 1fr;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n\tborder-bottom: 1px solid #dedede;\r\n}\r\n.text-end {\r\n    text-align: end;\r\n}\r\n.load-more-notification-wrp {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n.load-more-btn {\r\n    border: 1px solid #dedede !important;\r\n}\r\n.mark-as-read {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLG9DQUFvQztBQUNyQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQ0FBb0M7Q0FDdkMseUJBQThCO1NBQTlCLDhCQUE4QjtJQUMzQix5QkFBbUI7WUFBbkIsbUJBQW1CO0NBQ3RCLGdDQUFnQztBQUNqQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5ub3RpZmljYXRpb24taGVhZGVye1xyXG4gICAgY29sb3I6ICMyMjIzMjc7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi1pdGVtIC5zdGF0dXMge1xyXG5cdHdpZHRoOiA4cHg7XHJcblx0aGVpZ2h0OiA4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG5cdG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1pdGVtIC5zdGF0dXMubmV3IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi1pdGVtIHtcclxuICAgIHBhZGRpbmc6MjVweCAyNHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDAuNWZyIDFmcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi50ZXh0LWVuZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuLmxvYWQtbW9yZS1ub3RpZmljYXRpb24td3JwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2FkLW1vcmUtYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGUgIWltcG9ydGFudDtcclxufVxyXG4ubWFyay1hcy1yZWFkIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/notifications/notifications/notifications.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/notifications/notifications/notifications.component.ts ***!
    \************************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppNotificationsNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/firestore.service */
    "./src/app/services/firestore.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    let NotificationsComponent = class NotificationsComponent {
      constructor(fs, router, toastr) {
        this.fs = fs;
        this.router = router;
        this.toastr = toastr;
        this.notificationCount = 0;
        this.limit = 5;
        this.skip = 0;
        this.page = 0 / this.limit + 1;
      }

      ngOnInit() {
        this.getAllnotifications();
      }

      getAllnotifications() {
        this.fs.getAllNotifications().subscribe(data => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.filterNotifications = data;
          this.notifications = data.slice((0 + 1 - 1) * this.limit).slice(0, this.limit);
          yield this.notifications.map(n => n.timestamp = moment__WEBPACK_IMPORTED_MODULE_3__(n.createdAt.seconds * 1000).fromNow());
          this.notificationCount = data.length || 0; // console.log("not", this.notifications)
        }));
      }

      markAllRead() {
        this.fs.updateReadStatusAll();
        this.toastr.info("Marked all as read!");
      }

      handleNotificationRedirect(reDirectRoute, notificationId) {
        this.fs.updateReadStatus(notificationId);
        this.router.navigateByUrl(reDirectRoute);
      }

      handlePagination(pageIndex) {
        // this.skip = (pageIndex - 1) * this.limit;
        const offset = (pageIndex - 1) * this.limit;
        this.notifications = this.filterNotifications.slice(offset).slice(0, this.limit);
      }

    };

    NotificationsComponent.ctorParameters = () => [{
      type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
    }];

    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications/notifications.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.component.css */
      "./src/app/notifications/notifications/notifications.component.css")).default]
    })], NotificationsComponent);
    /***/
  }
}]);
//# sourceMappingURL=notifications-notifications-module-es5.js.map