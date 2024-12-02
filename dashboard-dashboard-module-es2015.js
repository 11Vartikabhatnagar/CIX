(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/application-card/application-card.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/application-card/application-card.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t<div class=\"card-content-grid g-p-15\">\r\n\t\t<div class=\"flex-col\">\r\n\t\t\t<div class=\"flex-row\">\r\n\t\t\t\t<div class=\"a-review-appl-img-wrp\">\r\n\t\t\t\t\t<ng-container *ngIf=\"applicationData.images\">\r\n\t\t\t\t\t\t<img [src]=\"serverUrl + applicationData.images[0]\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"!applicationData.images\">\r\n\t\t\t\t\t\t<img src=\"../../../../../../../assets/img/placeholder.jpg\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"application-content\">\r\n\t\t\t\t\t<div class=\"a-card-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-card-title g-fs-09 g-black5-clr g-fw-500 g-text-underline g-cursor-pointer\" routerLink=\"{{ applicationData.id }}\">\r\n\t\t\t\t\t\t\t{{ applicationData.name.length > 30 ? (applicationData.name | slice: 0:30 | titlecase) + \"...\" : applicationData.name }}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"a-card-sub-cnt g-fs-07 g-black5-clr\"\r\n\t\t\t\t\t\t\tinnerHtml=\"{{ applicationData.solution_brief.length > 110 ? (applicationData.solution_brief | slice: 0:110) + '...' : applicationData.solution_brief }}\"\r\n\t\t\t\t\t\t></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex-col\">\r\n\t\t\t<div class=\"a-company-name-wrp\">\r\n\t\t\t\t<div class=\"a-challenge-date\">\r\n\t\t\t\t\t<span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n\t\t\t\t\t<span class=\"g-fs-07 g-fw-500 g-black5-clr\">\r\n\t\t\t\t\t\t{{ applicationData.created_at | date: \"dd/MM/yyyy\" }}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex-col text-right\">\r\n\t\t\t<ng-container *ngIf=\"applicationData.application_status === 'New'\">\r\n\t\t\t\t<div class=\"status-pill\">Applied</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"applicationData.application_status === 'Onhold'\">\r\n\t\t\t\t<div class=\"status-pill onhold\">Onhold</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"applicationData.application_status === 'Reject'\">\r\n\t\t\t\t<div class=\"status-pill rejected\">Rejected</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t\t<ng-container *ngIf=\"applicationData.application_status === 'New'\">\r\n\t\t\t<div class=\"flex-col text-right\">\r\n\t\t\t\t<button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\" routerLink=\"{{ applicationData.id }}/edit\">\r\n\t\t\t\t\t<i class=\"fas fa-pen\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\" data-toggle=\"modal\" [attr.data-target]=\"'#deleteSolution' + applicationData.id\">\r\n\t\t\t\t\t<i class=\"fas fa-trash\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-10 g-pl-15 g-pr-15\">\r\n\t\t<div class=\"card-content body-light-clr\">\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-challenge-wrp\">\r\n\t\t\t\t\t<div class=\"a-challenge g-fs-08 body-light-clr\">\r\n\t\t\t\t\t\t{{ applicationData.frg_challenge_id.name.length > 60 ? (applicationData.frg_challenge_id.name | slice: 0:60) + \"...\" : applicationData.frg_challenge_id.name }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-challenge-sector-wrp\">\r\n\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 body-light-clr\">\r\n\t\t\t\t\t\t{{ applicationData.frg_challenge_sector_id.name | titlecase }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\r\n\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08\">\r\n\t\t\t\t\t\t<span class=\"body-light-clr\">\r\n\t\t\t\t\t\t\t{{ applicationData.frg_anchor_id.frg_seeker_id?.fullname | titlecase }}, {{ applicationData.frg_anchor_id.frg_seeker_id?.frg_smart_city_id.name | titlecase }} Smartcity\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Delete modal -->\r\n<div class=\"modal fade\" [id]=\"'deleteSolution' + applicationData.id\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-pt-20\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<div class=\"g-fs-20 text-right\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle g-danger-clr\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-8\">\r\n\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-400 body-grey-clr\">You’re attempting to delete an ongoing application. Are you sure ypu want to delete the solution application?</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-07 body-light-clr\">By deleting the application, all activities done in this challenge will be erased and cannot be reversed.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-trans-bg g-p-0 g-fs-20 g-grey4-clr\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t\t<i class=\"fal fa-times-square\"></i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-2\"></div>\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div class=\"g-mt-15 g-pr-20 g-mb-10\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-fs-07 g-danger-bg g-w-clr g-mr-10\" (click)=\"trashApplication()\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!deleteLoading\">Delete Application</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"deleteLoading\">\r\n\t\t\t\t\t\t\t\t\t<span>Deleting...</span>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" [disabled]=\"deleteLoading\" class=\"btn g-fs-07 g-trans-bg g-bdr-005 body-light-brdr\" data-dismiss=\"modal\">cancel & Go back</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/application-item/application-item.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/application-item/application-item.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t<div class=\"card-content-grid g-p-15\">\r\n\t\t<div class=\"flex-col\">\r\n\t\t\t<div class=\"flex-row\">\r\n\t\t\t\t<div class=\"a-review-appl-img-wrp\">\r\n\t\t\t\t\t<ng-container *ngIf=\"applicationData.images\">\r\n\t\t\t\t\t\t<img [src]=\"serverUrl + applicationData.images[0]\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"!applicationData.images\">\r\n\t\t\t\t\t\t<img src=\"../../../../../../../assets/img/placeholder.jpg\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"application-content\">\r\n\t\t\t\t\t<div class=\"a-card-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-card-title g-fs-09 g-black5-clr g-fw-500 g-text-underline g-cursor-pointer\" routerLink=\"{{ applicationData.id }}\">\r\n\t\t\t\t\t\t\t{{ applicationData.name.length > 30 ? (applicationData.name | slice: 0:30 | titlecase) + \"...\" : applicationData.name }}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"a-card-sub-cnt g-fs-07 g-black5-clr\"\r\n\t\t\t\t\t\t\tinnerHtml=\"{{ applicationData.solution_brief.length > 110 ? (applicationData.solution_brief | slice: 0:110) + '...' : applicationData.solution_brief }}\"\r\n\t\t\t\t\t\t></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex-col\">\r\n\t\t\t<div class=\"a-company-name-wrp\">\r\n\t\t\t\t<div class=\"a-challenge-date\">\r\n\t\t\t\t\t<span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n\t\t\t\t\t<span class=\"g-fs-07 g-fw-500 g-black5-clr\">\r\n\t\t\t\t\t\t{{ applicationData.created_at | date: \"dd/MM/yyyy\" }}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex-col text-right\">\r\n\t\t\t<ng-container *ngIf=\"applicationData.overall_stage === 'Application in Review'\">\r\n\t\t\t\t<div class=\"status-pill\">Application in Review</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"applicationData.overall_stage === 'Shortlist'\">\r\n\t\t\t\t<div class=\"status-pill completed\">Shortlist</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"applicationData.overall_stage === 'Onhold'\">\r\n\t\t\t\t<div class=\"status-pill onhold\">Onhold</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"applicationData.overall_stage === 'Reject'\">\r\n\t\t\t\t<div class=\"status-pill rejected\">Rejected</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"applicationData.overall_stage === 'Proposal in Review'\">\r\n\t\t\t\t<div class=\"status-pill\">Proposal in Review</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"applicationData.overall_stage === 'Pilot Ready'\">\r\n\t\t\t\t<div class=\"status-pill completed\">Pilot Ready</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"applicationData.overall_stage === 'Pre-Pilot'\">\r\n\t\t\t\t<div class=\"status-pill onhold\">Pre-Pilot</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t\t<ng-container *ngIf=\"applicationData.overall_stage === 'Application in Review'\">\r\n\t\t\t<div class=\"flex-col text-right\">\r\n\t\t\t\t<button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\" routerLink=\"{{ applicationData.id }}/edit\">\r\n\t\t\t\t\t<i class=\"fas fa-pen\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\" data-toggle=\"modal\" [attr.data-target]=\"'#deleteSolution' + applicationData.id\">\r\n\t\t\t\t\t<i class=\"fas fa-trash\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-10 g-pl-15 g-pr-15\">\r\n\t\t<div class=\"card-content body-light-clr\">\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-challenge-wrp\">\r\n\t\t\t\t\t<div class=\"a-challenge g-fs-08 body-light-clr\">\r\n\t\t\t\t\t\t{{ applicationData.frg_challenge_id.name.length > 60 ? (applicationData.frg_challenge_id.name | slice: 0:60) + \"...\" : applicationData.frg_challenge_id.name }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-challenge-sector-wrp\">\r\n\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 body-light-clr\">\r\n\t\t\t\t\t\t{{ applicationData.frg_challenge_sector_id.name | titlecase }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\r\n\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08\">\r\n\t\t\t\t\t\t<span class=\"body-light-clr\">\r\n\t\t\t\t\t\t\t{{ applicationData.frg_anchor_id.frg_seeker_id.fullname | titlecase }}, {{ applicationData.frg_anchor_id.frg_seeker_id.frg_smart_city_id.name | titlecase }} Smartcity\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Delete modal -->\r\n<div class=\"modal fade\" [id]=\"'deleteSolution' + applicationData.id\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-pt-20\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<div class=\"g-fs-20 text-right\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle g-danger-clr\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-8\">\r\n\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-400 body-grey-clr\">You’re attempting to delete an ongoing application. Are you sure ypu want to delete the solution application?</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-07 body-light-clr\">By deleting the application, all activities done in this challenge will be erased and cannot be reversed.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-trans-bg g-p-0 g-fs-20 g-grey4-clr\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t\t<i class=\"fal fa-times-square\"></i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-2\"></div>\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div class=\"g-mt-15 g-pr-20 g-mb-10\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-fs-07 g-danger-bg g-w-clr g-mr-10\" (click)=\"trashApplication()\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!deleteLoading\">Delete Application</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"deleteLoading\">\r\n\t\t\t\t\t\t\t\t\t<span>Deleting...</span>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" [disabled]=\"deleteLoading\" class=\"btn g-fs-07 g-trans-bg g-bdr-005 body-light-brdr\" data-dismiss=\"modal\">cancel & Go back</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/eoi-card/eoi-card.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/eoi-card/eoi-card.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t<div class=\"card-content-grid g-p-15\">\r\n\t\t<div class=\"flex-col\">\r\n\t\t\t<div class=\"flex-row\">\r\n\t\t\t\t<div class=\"a-review-appl-img-wrp\">\r\n\t\t\t\t\t<ng-container *ngIf=\"eoiData.frg_application_id.images\">\r\n\t\t\t\t\t\t<img [src]=\"serverUrl + eoiData.frg_application_id.images[0]\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"!eoiData.frg_application_id.images\">\r\n\t\t\t\t\t\t<img src=\"../../../../../../../assets/img/placeholder.jpg\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"application-content\">\r\n\t\t\t\t\t<div class=\"a-card-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-card-title g-fs-09 g-black5-clr g-fw-500 g-text-underline g-cursor-pointer\">\r\n\t\t\t\t\t\t\t{{ eoiData.frg_application_id.name.length > 30 ? (eoiData.frg_application_id.name | slice: 0:30 | titlecase) + \"...\" : eoiData.frg_application_id.name }}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"a-card-sub-cnt g-fs-07 g-black5-clr\"\r\n\t\t\t\t\t\t\tinnerHtml=\"{{ eoiData.frg_application_id.solution_brief.length > 110 ? (eoiData.frg_application_id.solution_brief | slice: 0:110) + '...' : eoiData.frg_application_id.solution_brief }}\"\r\n\t\t\t\t\t\t></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex-col text-right\">\r\n\t\t\t<span class=\"proposal-btn\" data-toggle=\"modal\" [attr.data-target]=\"'#eoiModal_' + eoiData.id\">\r\n\t\t\t\tView EoI & Send Proposal\r\n\t\t\t\t<svg width=\"20\" height=\"14\" viewBox=\"0 0 20 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t<path d=\"M13 -6.11959e-07L11.59 1.41L16.17 6L6.99382e-07 6L5.24537e-07 8L16.17 8L11.58 12.59L13 14L20 7L13 -6.11959e-07Z\" fill=\"#4F4F4F\" />\r\n\t\t\t\t</svg>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-10 g-pl-15 g-pr-15\">\r\n\t\t<div class=\"card-content body-light-clr\">\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-challenge-wrp\">\r\n\t\t\t\t\t<div class=\"a-challenge g-fs-08 body-light-clr\">\r\n\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\teoiData.frg_application_id.frg_challenge_id?.name.length > 60\r\n\t\t\t\t\t\t\t\t? (eoiData.frg_application_id.frg_challenge_id.name | slice: 0:60) + \"...\"\r\n\t\t\t\t\t\t\t\t: eoiData.frg_application_id.frg_challenge_id.name\r\n\t\t\t\t\t\t}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-challenge-sector-wrp\">\r\n\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 body-light-clr\">\r\n\t\t\t\t\t\t{{ eoiData.frg_application_id.frg_challenge_id?.frg_challenge_sector_id.name | titlecase }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\r\n\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08\">\r\n\t\t\t\t\t\t<span class=\"body-light-clr\">{{ eoiData.frg_seeker_id.fullname | titlecase }}, {{ eoiData.frg_seeker_id.frg_smart_city_id?.name | titlecase }} Smart City </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Eoi Modal -->\r\n<div id=\"eoiModal_{{ eoiData.id }}\" class=\"modal fade eoi-modal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<span class=\"close\" data-dismiss=\"modal\">&times;</span>\r\n\t\t\t<div class=\"eoi-author\">\r\n\t\t\t\t<div class=\"profile\">\r\n\t\t\t\t\t<img [src]=\"serverUrl + eoiData.frg_seeker_id.avatar\" alt=\"avatar\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"name-content\">\r\n\t\t\t\t\t<span>EOI from</span>\r\n\t\t\t\t\t<span class=\"name\">\r\n\t\t\t\t\t\t{{ eoiData.frg_seeker_id.fullname | titlecase }}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span>for</span>\r\n\t\t\t\t\t<span class=\"city\">{{ eoiData.frg_seeker_id.frg_smart_city_id.name | uppercase }}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"main-title g-mb-06\">\r\n\t\t\t\t{{ eoiData.frg_application_id.frg_challenge_id.name }}\r\n\t\t\t</div>\r\n\t\t\t<div class=\"content\" [innerHtml]=\"eoiData.frg_anchor_id.challenge_summary\"></div>\r\n\t\t\t<div class=\"main-title g-mb-06\">Scope of Pliot</div>\r\n\t\t\t<div class=\"sub-title g-mb-03\">Goals of Pilot</div>\r\n\t\t\t<div class=\"content\" [innerHtml]=\"eoiData.goals_of_pilot\"></div>\r\n\t\t\t<div class=\"sub-title g-mb-03\">Expected Quantifiable Outcomes</div>\r\n\t\t\t<div class=\"content\" [innerHtml]=\"eoiData.expected_outcomes\"></div>\r\n\t\t\t<div class=\"sub-title g-mb-03\">Pilot Deployment details</div>\r\n\t\t\t<div class=\"content\" [innerHtml]=\"eoiData.deployment_details\"></div>\r\n\t\t\t<hr />\r\n\t\t\t<div class=\"main-title g-mb-06\">Timeline & Budget</div>\r\n\t\t\t<div class=\"sub-title g-mb-03\">Expected Deployment Timeline</div>\r\n\t\t\t<div class=\"content\">{{ eoiData.deployment_time.month }} Months {{ eoiData.deployment_time.week }} Weeks</div>\r\n\t\t\t<div class=\"sub-title g-mb-03\">Budget Limits</div>\r\n\t\t\t<div class=\"content\">₹ {{ eoiData.budget_limit }}</div>\r\n\t\t\t<div class=\"sub-title g-mb-03\">Deployment Constraints</div>\r\n\t\t\t<div class=\"content\" [innerHtml]=\"eoiData.deployment_constraints\"></div>\r\n\t\t\t<div class=\"text-right g-mt-15\">\r\n\t\t\t\t<button\r\n\t\t\t\t\tclass=\"btn g-p-bg g-w-clr g-pt-05 g-pb-05\"\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\ttabindex=\"0\"\r\n\t\t\t\t\trouterLink=\"create_proposal\"\r\n\t\t\t\t\t[queryParams]=\"{ eoi_id: eoiData.id, challenge_brief_id: eoiData.frg_anchor_id.id }\"\r\n\t\t\t\t\tdata-dismiss=\"modal\"\r\n\t\t\t\t>\r\n\t\t\t\t\tSEND PROPOSAL\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/loading-application-card/loading-application-card.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/loading-application-card/loading-application-card.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngFor=\"let item of [].constructor(10)\">\r\n\t<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t\t<div class=\"d-flex g-mr-33\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\theight: '88px',\r\n\t\t\t\t\t\t\t\twidth: '88px',\r\n\t\t\t\t\t\t\t\t'border-radius': '6px',\r\n\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t\t<div class=\"a-card-title-wrp g-mt-01\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\twidth: '200px',\r\n\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t\t<div class=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\tcount=\"3\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\twidth: '800px',\r\n\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-11 g-pl-15 g-pr-15\">\r\n\t\t\t<ngx-skeleton-loader\r\n\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\theight: '14px',\r\n\t\t\t\t\twidth: '100%',\r\n\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t}\"\r\n\t\t\t>\r\n\t\t\t</ngx-skeleton-loader>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/pilot-card/pilot-card.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/pilot-card/pilot-card.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t<div class=\"card-content-grid g-p-15\">\r\n\t\t<div class=\"flex-col\">\r\n\t\t\t<div class=\"flex-row\">\r\n\t\t\t\t<div class=\"a-review-appl-img-wrp\">\r\n\t\t\t\t\t<ng-container *ngIf=\"pilotData.frg_eoi_id.frg_application_id.images\">\r\n\t\t\t\t\t\t<img [src]=\"serverUrl + pilotData.frg_eoi_id.frg_application_id.images[0]\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"!pilotData.frg_eoi_id.frg_application_id.images\">\r\n\t\t\t\t\t\t<img src=\"../../../../../../../assets/img/placeholder.jpg\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"application-content\">\r\n\t\t\t\t\t<div class=\"a-card-title-wrp\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\" data-toggle=\"modal\" [attr.data-target]=\"'#pilotModal_' + pilotData.id\">\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\tpilotData.frg_eoi_id.frg_application_id.name.length > 30\r\n\t\t\t\t\t\t\t\t\t? (pilotData.frg_eoi_id.frg_application_id.name | slice: 0:30 | titlecase) + \"...\"\r\n\t\t\t\t\t\t\t\t\t: pilotData.frg_eoi_id.frg_application_id.name\r\n\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\"\r\n\t\t\t\t\t\t\tinnerHtml=\"{{\r\n\t\t\t\t\t\t\t\tpilotData.frg_eoi_id.frg_application_id.solution_brief.length > 110\r\n\t\t\t\t\t\t\t\t\t? (pilotData.frg_eoi_id.frg_application_id.solution_brief | slice: 0:110) + '...'\r\n\t\t\t\t\t\t\t\t\t: pilotData.frg_eoi_id.frg_application_id.solution_brief\r\n\t\t\t\t\t\t\t}}\"\r\n\t\t\t\t\t\t></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex-col\">\r\n\t\t\t<div class=\"a-company-name-wrp\">\r\n\t\t\t\t<div class=\"a-challenge-date\">\r\n\t\t\t\t\t<span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n\t\t\t\t\t<span class=\"g-fs-07 g-fw-500 g-black5-clr\">{{ pilotData.created_at | date: \"shortDate\" }}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex-col text-right\">\r\n\t\t\t<div class=\"status-pill\" [ngClass]=\"{ completed: pilotData.pilot_status == 'Completed', ongoing: pilotData.pilot_status == 'Ongoing', 'yet-to-start': pilotData.pilot_status == 'Yet to Start' }\">\r\n\t\t\t\t{{ pilotData.pilot_status }}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-10 g-pl-15 g-pr-15\">\r\n\t\t<div class=\"card-content body-light-clr\">\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-challenge-wrp\">\r\n\t\t\t\t\t<div class=\"a-challenge g-fs-08 body-light-clr\">{{ pilotData.frg_anchor_id.frg_challenge_id.name | titlecase }}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-challenge-sector-wrp\">\r\n\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 body-light-clr\">{{ pilotData.frg_anchor_id.frg_challenge_id.frg_challenge_sector_id.name | titlecase }}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\r\n\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08\">\r\n\t\t\t\t\t\t<span class=\"body-light-clr\">\r\n\t\t\t\t\t\t\t{{ pilotData.frg_anchor_id.frg_seeker_id.fullname | titlecase }}, {{ pilotData.frg_anchor_id.frg_seeker_id.frg_smart_city_id?.name | titlecase }} Smart City\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"loader\" [class.active]=\"statusUpdating\">\r\n\t\t<div class=\"loaderBar\"></div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Pilot Modal -->\r\n<div class=\"modal fade\" id=\"pilotModal_{{ pilotData.id }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-pl-16 g-pr-16 g-pt-18 g-pb-18\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center\">\r\n\t\t\t\t\t<div class=\"d-flex a-align-item-center\">\r\n\t\t\t\t\t\t<div class=\"a-title-wrp g-mr-10\">\r\n\t\t\t\t\t\t\t<div class=\"title g-black-clr g-fw-500 g-fs-12 g-lh-14\">\r\n\t\t\t\t\t\t\t\t{{ pilotData.frg_anchor_id.frg_challenge_id.name }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-city-badge-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-city g-fs-06 g-lh-07 g-p-bg g-white-clr g-pt-01 g-pb-01 g-pl-04 g-pr-04 g-bdrrad-4px\">\r\n\t\t\t\t\t\t\t\t{{ pilotData.frg_anchor_id.frg_seeker_id.frg_smart_city_id.name | uppercase }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-close-icon-wrp\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-03\">\r\n\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-grey4-clr\">\r\n\t\t\t\t\t\t{{ pilotData.frg_eoi_id.frg_application_id.name }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t<div class=\"a-flex-item a-cnt1-flex-item g-mr-24 g-mt-18\">\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Scope of Customization</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"flex-item1\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-title-2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-title-2 g-black-clr g-fs-08 g-lh-10\">Customization Details</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black5-clr g-fw-400 g-lh-08\" [innerHtml]=\"pilotData.customisation_details\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"a-title-2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-title-2 g-black-clr g-fs-08 g-lh-10\">Customization Outcomes</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black5-clr g-fw-400 g-lh-08\" [innerHtml]=\"pilotData.outcomes\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<hr class=\"g-mt-16 g-mb-14\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item2\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Deployment Timeline & Budget</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Time to Pilot</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ pilotData.time_of_pilot.months }} Months {{ pilotData.time_of_pilot.weeks }} weeks</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Time for Commissioning</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ pilotData.time_of_commission.months }} Months {{ pilotData.time_of_commission.weeks }} weeks</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-17\">\r\n\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Pilot Implementation & Monitoring timeline</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ pilotData.implementation_monitoring_timeline.months }} Months {{ pilotData.implementation_monitoring_timeline.weeks }} weeks</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"g-black-clr g-fs-08 g-lh-10\"> Budget </label>\r\n\t\t\t\t\t\t\t<div class=\"a-budget-wrp g-pt-04\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-budget-item--wrp g-pl-10 g-pr-10 g-pb-07\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Solution Design/Dev Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ pilotData.budget.solution_design_dev_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">CapEx Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ pilotData.budget.capex_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Installation & Commissioning Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ pilotData.budget.installation_commission_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Operations/Monitoring & Report Generation Analysis Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ pilotData.budget.operations_monitoring_analysis_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"a-budget-total-wrp g-pl-10 g-pr-10 g-pb-07\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Total Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ pilotData.budget.total_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Track Record & Team</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Track Record</div>\r\n\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\" [innerHtml]=\"pilotData.track_record\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-18\">\r\n\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Core Team Capabilities</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Team Size</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">\r\n\t\t\t\t\t\t\t\t\t{{ pilotData.team_size }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Team Members</div>\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pilotData.team_member\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ item.name }}</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Expertise</div>\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pilotData.team_member\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ item.expertise }}</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp g-mt-18\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Dependencies & Additional Details</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-title-2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"a-title-2 g-black-clr g-fs-08 g-lh-10\">Dependencies for deployment</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black5-clr g-fw-400 g-lh-08\" [innerHtml]=\"pilotData.dependencies\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-flex-item a-cnt2-flex-item g-mt-18\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"pilotData.reports_of_past_pilot\">\r\n\t\t\t\t\t\t\t<div class=\"a-col2-title-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-col2-title g-fs-08 g-lh-10 g-fw-500\">Past Pilot Implementation Reports</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-s1-cnt-wrp g-pl-06 g-pr-06 g-pt-11 g-pb-11\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pilotData.reports_of_past_pilot\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sub-cnt-wrp g-pr-04 g-pl-05 g-pt-05 g-pb-07 g-mb-06\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mr-07 a-word-break\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-text-underline g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ extractFileName(item) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn g-p-clr g-fs-06 g-lh-07 g-white-bg g-pt-05 g-pb-05 g-pr-07 g-pl-07 a-download-file-btn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[href]=\"serverUrl + item\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[download]=\"extractFileName(item)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>Download File</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"pilotData.additional_details\">\r\n\t\t\t\t\t\t\t<div class=\"a-col2-title-wrp g-mt-15\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-col2-title g-fs-08 g-lh-10 g-fw-500\">Additional Details</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-s1-cnt-wrp g-pl-06 g-pr-06 g-pt-11 g-pb-11 g-mb-12\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pilotData.additional_details\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sub-cnt-wrp g-pr-04 g-pl-05 g-pt-05 g-pb-07 g-mb-06\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mr-07 a-word-break\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-text-underline g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ extractFileName(item) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn g-p-clr g-fs-06 g-lh-07 g-white-bg g-pt-05 g-pb-05 g-pr-07 g-pl-07 a-download-file-btn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[href]=\"serverUrl + item\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[download]=\"extractFileName(item)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>Download File</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"pilotData.pilot_order\">\r\n\t\t\t\t\t\t\t<div class=\"a-col2-title-wrp g-mt-15\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-col2-title g-fs-08 g-lh-10 g-fw-500\">Pilot Order</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-s1-cnt-wrp g-pl-06 g-pr-06 g-pt-11 g-pb-11 g-mb-12\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pilotData.pilot_order\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sub-cnt-wrp g-pr-04 g-pl-05 g-pt-05 g-pb-07 g-mb-06\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mr-07 a-word-break\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-text-underline g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ extractFileName(item) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn g-p-clr g-fs-06 g-lh-07 g-white-bg g-pt-05 g-pb-05 g-pr-07 g-pl-07 a-download-file-btn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[href]=\"serverUrl + item\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[download]=\"extractFileName(item)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>Download File</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"pilotData.pilot_report\">\r\n\t\t\t\t\t\t\t<div class=\"a-col2-title-wrp g-mt-15\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-col2-title g-fs-08 g-lh-10 g-fw-500\">Pilot Report</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-s1-cnt-wrp g-pl-06 g-pr-06 g-pt-11 g-pb-11 g-mb-12\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pilotData.pilot_report\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sub-cnt-wrp g-pr-04 g-pl-05 g-pt-05 g-pb-07 g-mb-06\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mr-07 a-word-break\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-text-underline g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ extractFileName(item) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn g-p-clr g-fs-06 g-lh-07 g-white-bg g-pt-05 g-pb-05 g-pr-07 g-pl-07 a-download-file-btn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[href]=\"serverUrl + item\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[download]=\"extractFileName(item)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>Download File</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/proposal-card/proposal-card.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/proposal-card/proposal-card.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t<div class=\"card-content-grid g-p-15\">\r\n\t\t<div class=\"flex-col\">\r\n\t\t\t<div class=\"flex-row\">\r\n\t\t\t\t<div class=\"a-review-appl-img-wrp\">\r\n\t\t\t\t\t<ng-container *ngIf=\"proposalData.frg_eoi_id.frg_application_id.images\">\r\n\t\t\t\t\t\t<img [src]=\"serverUrl + proposalData.frg_eoi_id.frg_application_id.images[0]\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"!proposalData.frg_eoi_id.frg_application_id.images\">\r\n\t\t\t\t\t\t<img src=\"../../../../../../../assets/img/placeholder.jpg\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"application-content\">\r\n\t\t\t\t\t<div class=\"a-card-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-card-title g-fs-09 g-black5-clr g-fw-500 g-text-underline\" data-toggle=\"modal\" [attr.data-target]=\"'#proposalModal_' + proposalData.id\">\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\tproposalData.frg_eoi_id.frg_application_id.name.length > 30\r\n\t\t\t\t\t\t\t\t\t? (proposalData.frg_eoi_id.frg_application_id.name | slice: 0:30 | titlecase) + \"...\"\r\n\t\t\t\t\t\t\t\t\t: proposalData.frg_eoi_id.frg_application_id.name\r\n\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"a-card-sub-cnt g-fs-07 g-black5-clr\"\r\n\t\t\t\t\t\t\tinnerHtml=\"{{\r\n\t\t\t\t\t\t\t\tproposalData.frg_eoi_id.frg_application_id.solution_brief.length > 110\r\n\t\t\t\t\t\t\t\t\t? (proposalData.frg_eoi_id.frg_application_id.solution_brief | slice: 0:110) + '...'\r\n\t\t\t\t\t\t\t\t\t: proposalData.frg_eoi_id.frg_application_id.solution_brief\r\n\t\t\t\t\t\t\t}}\"\r\n\t\t\t\t\t\t></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex-col\">\r\n\t\t\t<div class=\"a-company-name-wrp\">\r\n\t\t\t\t<div class=\"a-challenge-date\">\r\n\t\t\t\t\t<span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n\t\t\t\t\t<span class=\"g-fs-07 g-fw-500 g-black5-clr\">\r\n\t\t\t\t\t\t{{ proposalData.created_at | date: \"dd/MM/yyyy\" }}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex-col text-right\">\r\n\t\t\t<div class=\"status-pill\" [ngClass]=\"{ pilotready: proposalData.proposal_stage === 'Pilot Ready', prepilot: proposalData.proposal_stage === 'Pre-Pilot' }\">{{ proposalData.proposal_stage }}</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-10 g-pl-15 g-pr-15\">\r\n\t\t<div class=\"card-content body-light-clr\">\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-challenge-wrp\">\r\n\t\t\t\t\t<div class=\"a-challenge g-fs-08 body-light-clr\">\r\n\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\tproposalData.frg_anchor_id.frg_challenge_id?.name.length > 60\r\n\t\t\t\t\t\t\t\t? (proposalData.frg_anchor_id.frg_challenge_id.name | slice: 0:60) + \"...\"\r\n\t\t\t\t\t\t\t\t: proposalData.frg_anchor_id.frg_challenge_id.name\r\n\t\t\t\t\t\t}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-challenge-sector-wrp\">\r\n\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 body-light-clr\">\r\n\t\t\t\t\t\t{{ proposalData.frg_anchor_id.frg_challenge_id?.frg_challenge_sector_id.name | titlecase }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\r\n\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08\">\r\n\t\t\t\t\t\t<span class=\"body-light-clr\">\r\n\t\t\t\t\t\t\t{{ proposalData.frg_anchor_id.frg_seeker_id.fullname | titlecase }}, {{ proposalData.frg_anchor_id.frg_seeker_id.frg_smart_city_id?.name | titlecase }} Smart City\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Proposal Modal -->\r\n<div class=\"modal fade\" id=\"proposalModal_{{ proposalData.id }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-pl-16 g-pr-16 g-pt-18 g-pb-18\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center\">\r\n\t\t\t\t\t<div class=\"d-flex a-align-item-center\">\r\n\t\t\t\t\t\t<div class=\"a-title-wrp g-mr-10\">\r\n\t\t\t\t\t\t\t<div class=\"title g-black-clr g-fw-500 g-fs-12 g-lh-14\">\r\n\t\t\t\t\t\t\t\t{{ proposalData.frg_anchor_id.frg_challenge_id.name }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-city-badge-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-city g-fs-06 g-lh-07 g-p-bg g-white-clr g-pt-01 g-pb-01 g-pl-04 g-pr-04 g-bdrrad-4px\">\r\n\t\t\t\t\t\t\t\t{{ proposalData.frg_anchor_id.frg_seeker_id.frg_smart_city_id.name | uppercase }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-close-icon-wrp\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t\t\t<span class=\"edit\" (click)=\"editProposal()\"><i class=\"fas fa-pen\"></i>Edit</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-03\">\r\n\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-grey4-clr\">\r\n\t\t\t\t\t\t{{ proposalData.frg_eoi_id.frg_application_id.name }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t<div class=\"a-flex-item a-cnt1-flex-item g-mr-24 g-mt-18\">\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Scope of Customization</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"flex-item1\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-title-2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-title-2 g-black-clr g-fs-08 g-lh-10\">Customization Details</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black5-clr g-fw-400 g-lh-08\" [innerHtml]=\"proposalData.customisation_details\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"a-title-2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-title-2 g-black-clr g-fs-08 g-lh-10\">Customization Outcomes</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black5-clr g-fw-400 g-lh-08\" [innerHtml]=\"proposalData.outcomes\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<hr class=\"g-mt-16 g-mb-14\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item2\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Deployment Timeline & Budget</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Time to Pilot</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ proposalData.time_of_pilot.months }} Months {{ proposalData.time_of_pilot.weeks }} weeks</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Time for Commissioning</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ proposalData.time_of_commission.months }} Months {{ proposalData.time_of_commission.weeks }} weeks</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-17\">\r\n\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Pilot Implementation & Monitoring timeline</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">\r\n\t\t\t\t\t\t\t\t{{ proposalData.implementation_monitoring_timeline.months }} Months {{ proposalData.implementation_monitoring_timeline.weeks }} weeks\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"g-black-clr g-fs-08 g-lh-10\"> Budget </label>\r\n\t\t\t\t\t\t\t<div class=\"a-budget-wrp g-pt-04\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-budget-item--wrp g-pl-10 g-pr-10 g-pb-07\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Solution Design/Dev Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ proposalData.budget.solution_design_dev_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">CapEx Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ proposalData.budget.capex_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Installation & Commissioning Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ proposalData.budget.installation_commission_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Operations/Monitoring & Report Generation Analysis Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ proposalData.budget.operations_monitoring_analysis_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"a-budget-total-wrp g-pl-10 g-pr-10 g-pb-07\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Total Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ proposalData.budget.total_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Track Record & Team</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Track Record</div>\r\n\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\" [innerHtml]=\"proposalData.track_record\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-18\">\r\n\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Core Team Capabilities</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Team Size</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">\r\n\t\t\t\t\t\t\t\t\t{{ proposalData.team_size }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Team Members</div>\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of proposalData.team_member\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ item.name }}</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Expertise</div>\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of proposalData.team_member\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ item.expertise }}</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp g-mt-18\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Dependencies & Additional Details</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-title-2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"a-title-2 g-black-clr g-fs-08 g-lh-10\">Dependencies for deployment</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black5-clr g-fw-400 g-lh-08\" [innerHtml]=\"proposalData.dependencies\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-flex-item a-cnt2-flex-item g-mt-18\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.reports_of_past_pilot\">\r\n\t\t\t\t\t\t\t<div class=\"a-col2-title-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-col2-title g-fs-08 g-lh-10 g-fw-500\">Past Pilot Implementation Reports</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-s1-cnt-wrp g-pl-06 g-pr-06 g-pt-11 g-pb-11\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of proposalData.reports_of_past_pilot\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sub-cnt-wrp g-pr-04 g-pl-05 g-pt-05 g-pb-07 g-mb-06\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mr-07 a-word-break\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-text-underline g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ extractFileName(item) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn g-p-clr g-fs-06 g-lh-07 g-white-bg g-pt-05 g-pb-05 g-pr-07 g-pl-07 a-download-file-btn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[href]=\"serverUrl + item\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[download]=\"extractFileName(item)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>Download File</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.additional_details\">\r\n\t\t\t\t\t\t\t<div class=\"a-col2-title-wrp g-mt-15\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-col2-title g-fs-08 g-lh-10 g-fw-500\">Additional Details</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-s1-cnt-wrp g-pl-06 g-pr-06 g-pt-11 g-pb-11 g-mb-50\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of proposalData.additional_details\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sub-cnt-wrp g-pr-04 g-pl-05 g-pt-05 g-pb-07 g-mb-06\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mr-07 a-word-break\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-text-underline g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ extractFileName(item) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn g-p-clr g-fs-06 g-lh-07 g-white-bg g-pt-05 g-pb-05 g-pr-07 g-pl-07 a-download-file-btn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[href]=\"serverUrl + item\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[download]=\"extractFileName(item)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>Download File</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/dashboard.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/dashboard.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard-wrp g-pt-25\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"bg-blue-clr g-fw-500 g-fs-11\">My Solution Applications</div>\r\n\t\t<section class=\"dashboard-tab-wrp g-pt-13\">\r\n\t\t\t<ul class=\"dashboard-tab nav nav-pills\">\r\n\t\t\t\t<li routerLink=\"all-applications\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<a class=\"g-fs-07\">\r\n\t\t\t\t\t\t<span>All</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li routerLink=\"applications\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<a class=\"g-fs-07\">\r\n\t\t\t\t\t\t<span>Applications</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li routerLink=\"eois\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<a class=\"g-fs-07\">\r\n\t\t\t\t\t\t<span>EOIs</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li routerLink=\"proposals\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<a class=\"g-fs-07\">\r\n\t\t\t\t\t\t<span>Proposals</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li routerLink=\"pilots\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<a class=\"g-fs-07\">\r\n\t\t\t\t\t\t<span>Pilots</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li routerLink=\"unsolicited-proposals\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<a class=\"g-fs-07\">\r\n\t\t\t\t\t\t<span>Unsolicited Proposals</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<section class=\"dashboard-sub-pages g-mt-25\">\r\n\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t</section>\r\n\t\t</section>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/all-applications/all-applications.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/all-applications/all-applications.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n\t<div class=\"content\">\r\n\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t<ng-container *ngFor=\"let item of applicationDataAll.data\">\r\n\t\t\t\t<application-item [applicationData]=\"item\" (onApplicationDelete)=\"handleDeleteApplication($event)\"></application-item>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t<loading-application-card></loading-application-card>\r\n\t\t</ng-container>\r\n\t</div>\r\n\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t<pagination-controller [totalItems]=\"applicationDataAll?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\r\n\t</div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/application-individual/application-individual.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/application-individual/application-individual.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"a-solution-wrapper g-pb-25 g-mt-25 g-mb-25\">\r\n\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t<section class=\"application-header\">\r\n\t\t\t<div class=\"grid-row\">\r\n\t\t\t\t<div class=\"grid-col\">\r\n\t\t\t\t\t<div class=\"a-back-link-wrp\">\r\n\t\t\t\t\t\t<a (click)=\"goBack()\" class=\"g-black-clr g-fs-08 glh-09 g-cursor-pointer d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"g-mr-05\" style=\"height: 45px\">\r\n\t\t\t\t\t\t\t\t<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t\t\t<circle opacity=\"0.5\" cx=\"20\" cy=\"20\" r=\"19.5\" fill=\"white\" stroke=\"black\" />\r\n\t\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\t\tfill-rule=\"evenodd\"\r\n\t\t\t\t\t\t\t\t\t\tclip-rule=\"evenodd\"\r\n\t\t\t\t\t\t\t\t\t\td=\"M11.9337 20.7782L11.9337 20.7782L19.0047 27.8492L19.7118 27.1421L12.9189 20.3491L29.0008 20.3491V19.3491L13.3627 19.3491L19.0047 13.7071L18.2976 13L11.2266 20.0711L11.9337 20.7782Z\"\r\n\t\t\t\t\t\t\t\t\t\tfill=\"black\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span>Back to All Applications</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"grid-col text-right\">\r\n\t\t\t\t\t<button routerLink=\"edit\" class=\"btn g-bdr-005 g-black4-clr g-fs-06 g-lh-07 g-fw-700 g-ml-06 g-pt-06 g-pb-05 g-pl-05 g-pr05 g-white-bg\" type=\"button\">\r\n\t\t\t\t\t\tEDIT APPLICATION<i class=\"fas fa-pen g-ml-03\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t\t<div class=\"application-main-section\">\r\n\t\t\t<div class=\"a-modal-section1-wrp\">\r\n\t\t\t\t<div class=\"grid-row\">\r\n\t\t\t\t\t<div class=\"grid-col\">\r\n\t\t\t\t\t\t<div class=\"a-solution-modal-title-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-solution-modal-title g-fs-12 g-lh-16 g-black5-clr g-fw-500\">\r\n\t\t\t\t\t\t\t\t{{ applicationData.data.name }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex g-mt-04\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-sol-company-name-wrp g-mr-10\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.data.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-modal-sol-company-name g-fs-08 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<span>{{ applicationData.data.frg_provider_id.startup_company_name }} </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.data.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-modal-sol-company-name g-fs-08 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<span>{{ applicationData.data.frg_provider_id.enterprise_company_name }} </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.data.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-modal-sol-company-name g-fs-08 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<span>{{ applicationData.data.frg_provider_id.fullname }} </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-sol-provider-type\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.data.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sol-provider g-fs-08 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<span><img src=\"../../../assets/img/startup_up_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Startup</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.data.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sol-provider g-fs-08 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<span><img src=\"../../../assets/img/enterprise_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Enterprise</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.data.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sol-provider g-fs-08 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<span><img src=\"../../../assets/img/individual_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Individual</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"grid-col\">\r\n\t\t\t\t\t\t<div class=\"text-right\">\r\n\t\t\t\t\t\t\t<div class=\"a-solution-dates-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-posted-date text-right g-fs-07 body-light-clr\">\r\n\t\t\t\t\t\t\t\t\tPosted on\r\n\t\t\t\t\t\t\t\t\t<span>{{ applicationData?.data.created_at | date: \"d MMM yyyy\" }}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"a-last-edited-date text-right g-fs-07 body-light-clr g-mt-01\">\r\n\t\t\t\t\t\t\t\t\tLast edited on\r\n\t\t\t\t\t\t\t\t\t<span>{{ applicationData?.data.updated_at | date: \"d MMM yyyy\" }}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"grid-row col-4\">\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-sector-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-black5-clr g-fs-10 g-lh-11 g-fw-500\">Challenge Sector</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-black5-clr g-fs-08 g-mt-02\">\r\n\t\t\t\t\t\t\t\t<div>{{ applicationData?.data.frg_challenge_sector_id.name | titlecase }}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-sector-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-black5-clr g-fs-10 g-lh-11 g-fw-500\">Challenges</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-black5-clr g-fs-08 g-mt-02\">\r\n\t\t\t\t\t\t\t\t<div>{{ applicationData?.data.frg_challenge_id.name }}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-sector-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-black5-clr g-fs-10 g-lh-11 g-fw-500\">Implementation Time</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-black5-clr g-fs-08 g-mt-02\">\r\n\t\t\t\t\t\t\t\t{{ applicationData?.data.implementation_time.months }} Months {{ applicationData?.data.implementation_time.weeks }} Weeks\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-sector-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-black5-clr g-fs-10 g-lh-11 g-fw-500\">IP Status</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-black5-clr g-fs-08 g-mt-02\">{{ applicationData.data.ip_details.status }}-{{ applicationData.data.ip_details.id_number }}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-modal-section2 g-white-bg\">\r\n\t\t\t\t<div class=\"grid-row\">\r\n\t\t\t\t\t<div class=\"grid-col\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!applicationData.data.images; else elseBlock\">\r\n\t\t\t\t\t\t\t<div class=\"image-placeholder\">\r\n\t\t\t\t\t\t\t\t<img src=\"../../../../../assets/img/placeholder.jpg\" alt=\"image-placeholder\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #elseBlock>\r\n\t\t\t\t\t\t\t<div id=\"solutionImageSlider\" class=\"carousel slide carousel-fade\" data-interval=\"false\">\r\n\t\t\t\t\t\t\t\t<!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"item\" *ngFor=\"let image of applicationData?.data.images; let index = index\" [class.active]=\"index == 0\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + image\" alt=\"applicationData image\" [hidden]=\"imagesLoading\" (load)=\"this.imagesLoading = false\" />\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"imagesLoading\" class=\"image-placeholder\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- Indicators -->\r\n\t\t\t\t\t\t\t\t<ol class=\"carousel-indicators g-pt-15\">\r\n\t\t\t\t\t\t\t\t\t<li data-target=\"#solutionImageSlider\" *ngFor=\"let image of applicationData?.data.images; let index = index\" [class.active]=\"index == 0\" [attr.data-slide-to]=\"index\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + image\" alt=\"\" [hidden]=\"imagesLoading\" (load)=\"this.imagesLoading = false\" />\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"imagesLoading\" class=\"image-placeholder-nav-dots\"></div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t<!-- Left and right controls -->\r\n\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"applicationData.data.images && applicationData.data.images.length > 1\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{ 'background-image': applicationData.data.images ? 'url(' + serverUrl + applicationData?.data.images[0] + ')' : '' }\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<a class=\"left carousel-control\" href=\"#solutionImageSlider\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<a class=\"right carousel-control\" href=\"#solutionImageSlider\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"grid-col\">\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp g-p-0\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Solution Brief</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.solution_brief\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Value Proposition</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.value_proposition\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Market Domain</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr g-mt-08\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let domain of applicationData?.data.market_domain\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-pill g-disp-inlblock g-p-03 g-mr-03 g-mb-02 g-fs-06 primary-grey-bg g-white-clr\">\r\n\t\t\t\t\t\t\t\t\t\t{{ domain }}\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Tangible Benefits</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.tangible_benifits\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Solution Advantages</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.solution_advantages\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Solution Readiness</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.solution_readiness\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Track Record</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.track_record\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Experts Involved</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.experts_involved\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\" *ngIf=\"applicationData?.data.other_details != ''\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Other details</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.other_details\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\" *ngIf=\"applicationData?.data.video_link != ''\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Video Link</div>\r\n\t\t\t\t\t\t\t<a [href]=\"applicationData?.data.video_link\" target=\"_blank\">\r\n\t\t\t\t\t\t\t\t{{ applicationData?.data.video_link }}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"isLoading\">\r\n\t\t<div class=\"loader-parent\">\r\n\t\t\t<div class=\"section-loader\">\r\n\t\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/applications/applications.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/applications/applications.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"a-tab-wrp\">\r\n\t<ul class=\"nav nav-pills g-pb-10\">\r\n\t\t<li class=\"active\">\r\n\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#allapp\"> In review ({{ allApplicationCount }})</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#onhold\">Onhold ({{ onHoldCount }})</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#rejected\">Rejected ({{ RejectCount }})</a>\r\n\t\t</li>\r\n\t</ul>\r\n\t<div class=\"tab-content\">\r\n\t\t<div id=\"allapp\" class=\"tab-pane fade in active\">\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let item of applicationDataAll.data\">\r\n\t\t\t\t\t\t<application-card [applicationData]=\"item\" (onApplicationDelete)=\"handleDelete($event)\"> </application-card>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t<loading-application-card></loading-application-card>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t<pagination-controller [totalItems]=\"applicationDataAll?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"onhold\" class=\"tab-pane fade\">\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let item of applicationDataonHold.data\">\r\n\t\t\t\t\t\t<application-card [applicationData]=\"item\"></application-card>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t<loading-application-card></loading-application-card>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t<pagination-controller [totalItems]=\"applicationDataonHold?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"rejected\" class=\"tab-pane fade\">\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let item of applicationDataRejected.data\">\r\n\t\t\t\t\t\t<application-card [applicationData]=\"item\"></application-card>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t<loading-application-card></loading-application-card>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t<pagination-controller [totalItems]=\"applicationDataRejected?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/edit-application/edit-application.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/edit-application/edit-application.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-city-wrp g-pb-30\">\r\n\t<ng-container *ngIf=\"!initLoading\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t<div class=\"g-pb-14\">\r\n\t\t\t\t\t\t\t<ul class=\"a-step-form-active-list text-center g-p-0\">\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'g-p-bg': applicationStep1,\r\n\t\t\t\t\t\t\t\t\t\t'primary-grey-bg': !applicationStep1\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"gotoStep('step1')\"\r\n\t\t\t\t\t\t\t\t></li>\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'g-p-bg': applicationStep2,\r\n\t\t\t\t\t\t\t\t\t\t'primary-grey-bg': !applicationStep2\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"gotoStep('step2')\"\r\n\t\t\t\t\t\t\t\t></li>\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'g-p-bg': applicationStep3,\r\n\t\t\t\t\t\t\t\t\t\t'primary-grey-bg': !applicationStep3\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"gotoStep('step3')\"\r\n\t\t\t\t\t\t\t\t></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"add-form-wrapper2\">\r\n\t\t\t\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t\t\t\t<div class=\"step-wrapper\" *ngIf=\"applicationStep1\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 title-clr g-pb-04\">Solution Cataloguing Form</div>\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"editApplicationStep1\" *ngIf=\"editApplicationStep1 && editApplicationStep2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"sol_name\" class=\"g-fs-07 lable-grey g-fw-400\"> Solution Name<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"sol_name\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: Water Body Preservation\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionName\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editApplicationControlStep1.solutionName.touched || isSubmitted.Step1) && editApplicationControlStep1.solutionName?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep1.solutionName.touched || isSubmitted.Step1) && editApplicationControlStep1.solutionName.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Name is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"market_domain\" class=\"g-fs-07 lable-grey g-fw-400\"> Market Domain<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"multiselect-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"frg-multiselect-dropdown\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[placeholder]=\"'Select Challenge Sector'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[settings]=\"dropdownSettings2\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[data]=\"marketDomainList\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"marketDomain\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\terror: (editApplicationControlStep1.marketDomain.touched || isSubmitted.Step1) && editApplicationControlStep1.marketDomain?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep1.marketDomain.touched || isSubmitted.Step1) && editApplicationControlStep1.marketDomain.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMarket Domain is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"solutionBrief\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tSolution Brief<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> Describe the solution (product/service) in terms of the problems addressed, technology used and the relevance to cities. </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"XYZ is an AIoT wearable that continuously monitors & records vital data of patients such as parameter1, parameter2, etc. The data is then made available to the medical practitioners for remote access over a dashboard for diagnosis of the disease progression in patients. AI algorithm that powers XYZ studies the patterns of the vitals and flags abnormalities in a patient along with prescriptive suggestions to help medical practitioners make better decisions for providing apt treatment to patients.\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionBrief\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editApplicationControlStep1.solutionBrief.touched || isSubmitted.Step1) && editApplicationControlStep1.solutionBrief?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep1.solutionBrief.touched || isSubmitted.Step1) && editApplicationControlStep1.solutionBrief.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Brief is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep1.solutionBrief.touched || isSubmitted.Step1) && editApplicationControlStep1.solutionBrief.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep1.solutionBrief.touched || isSubmitted.Step1) && editApplicationControlStep1.solutionBrief.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"valueProposition\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tValue Proposition<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> State the Value Proposition of the product/service with measured benefits in the consumer market and the application. </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Hospitals have insufficient capacity & resources to monitor a large number of patients during a crisis scenario like a pandemic. XYZ wearable enables remote monitoring of patients’ vitals, thus helping reduce the number of doctors and medical staffs requirement by 25-30%. XYZ reduces the need for medical practitioners to be physically present to monitor patients, thereby minimizing the spread of infectious diseases.\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"valueProposition\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editApplicationControlStep1.valueProposition.touched || isSubmitted.Step1) && editApplicationControlStep1.valueProposition?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep1.valueProposition.touched || isSubmitted.Step1) && editApplicationControlStep1.valueProposition.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tValue Proposition is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep1.valueProposition.touched || isSubmitted.Step1) && editApplicationControlStep1.valueProposition.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t1000 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep1.valueProposition.touched || isSubmitted.Step1) && editApplicationControlStep1.valueProposition.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"tangibleBenefits\" class=\"g-fs-07 lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\t\t\tTangible Benefits<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> List in concise the Tangible benefits that your solution can offer. </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. Reduced number of non-emergency patients in the hospital<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. Medical practitioners time for patient monitoring is brought down by more than 20% <br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t3. Accurate and timely data is captured and made available anytime anywhere. <br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t4. Patients suffering of 20 different conditions such as condition1,condition2, etc. can  be remote monitored with this solution\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"tangibleBenefits\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editApplicationControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && editApplicationControlStep1.tangibleBenefits?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && editApplicationControlStep1.tangibleBenefits.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTangible Benefits is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && editApplicationControlStep1.tangibleBenefits.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && editApplicationControlStep1.tangibleBenefits.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"applicationStep1Submit()\">Save and Next</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t\t\t\t<div class=\"step-wrapper\" *ngIf=\"applicationStep2\">\r\n\t\t\t\t\t\t\t\t<div class=\"back-btn-wrp g-fs-07 g-fw-500 g-mb-10\">\r\n\t\t\t\t\t\t\t\t\t<span (click)=\"gotoStep('step1')\" class=\"g-cursor-pointer g-transition body-light-clr back-btn\" [ngClass]=\"{ disable: !applicationStep1 }\"> &#60; Back </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"editApplicationStep2\" *ngIf=\"editApplicationStep1 && editApplicationStep2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"solutionAdvantages\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tSolution Advantages<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tExplain the advantages of the proposed solution in terms of technology, differentiation, ease of adoption by users, and the ability to deliver at a distinctive Value-Cost\r\n\t\t\t\t\t\t\t\t\t\t\t\tadvantage to the city at a competitive price through innovative revenue models.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. Reduces the number of doctors required to attend to patients in person, thereby freeing up doctors to handle more critical cases<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. The device is a simple wearable & is intuitive to use for the end-users, thus requires no training—reducing the dependency on staffs for installing the device<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t3. A single device costs Rs. ___, which is ___ times less than what is already available in the market and with additional feature to monitor parameter 3<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t4. The components are locally sourced and has no dependency on exports for manufacturing the devices, hence requires relatively less time for manufacturing & distribution<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionAdvantages\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editApplicationControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && editApplicationControlStep2.solutionAdvantages?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && editApplicationControlStep2.solutionAdvantages.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Advantages is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && editApplicationControlStep2.solutionAdvantages.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && editApplicationControlStep2.solutionAdvantages.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"solutionReadiness\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tSolution Readiness<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHow ready is your solution to emerge as a Commercial product for the urban ecosystem?, Provide details about progress achieved backed by evidence for key milestones covering\r\n\t\t\t\t\t\t\t\t\t\t\t\tproduct development, trials, paid pilots, manufacturing, industry-grade certification, distribution, etc.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. The solution is ready for pilot orders and has already demonstrated successful pilots in a few hospitals<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. The solution has ___% accuracy and is close to 90% standardisation and will be ready for manufacturing & commercial orders in the next 1 to 2 months.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionReadiness\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editApplicationControlStep2.solutionReadiness.touched || isSubmitted.Step2) && editApplicationControlStep2.solutionReadiness?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep2.solutionReadiness.touched || isSubmitted.Step2) && editApplicationControlStep2.solutionReadiness.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Readiness is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep2.solutionReadiness.touched || isSubmitted.Step2) && editApplicationControlStep2.solutionReadiness.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep2.solutionReadiness.touched || isSubmitted.Step2) && editApplicationControlStep2.solutionReadiness.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"trackRecord\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tTrack Record<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tFor the solution readiness level mentioned/selected above, provide details about progress achieved backed by evidence for key milestones covering product development, trials,\r\n\t\t\t\t\t\t\t\t\t\t\t\tpaid pilots, manufacturing, industry-grade certification, distribution, etc.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. The solution is ICMR certified, and ready for real time usage and mass deployment<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. 5 successful pilot orders (for 50 devices) with government & private hospitals has been successfully executed;<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t3. We have received purchase Orders for 200 devices of worth <Rs. ABC>  from 2 government hospitals;<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t4. We have partnerships with 2 medical device marketing companies who have distribution networks across the country<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"trackRecord\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editApplicationControlStep2.trackRecord.touched || isSubmitted.Step2) && editApplicationControlStep2.trackRecord?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep2.trackRecord.touched || isSubmitted.Step2) && editApplicationControlStep2.trackRecord.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTrack Record is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep2.trackRecord.touched || isSubmitted.Step2) && editApplicationControlStep2.trackRecord.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep2.trackRecord.touched || isSubmitted.Step2) && editApplicationControlStep2.trackRecord.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"implementationTimeWeeks\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tImplementation Time<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> Minimum time required to implement the Pilot from the time of initiation of the pilot order by the city. </span>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"implementationTimeMonth\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"implementationTimeMonth\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (editApplicationControlStep2.implementationTimeMonth.touched || isSubmitted.Step2) && editApplicationControlStep2.implementationTimeMonth?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Month</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthsArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ month }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(editApplicationControlStep2.implementationTimeMonth.touched || isSubmitted.Step2) && editApplicationControlStep2.implementationTimeMonth.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tMonth is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"implementationTimeWeeks\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"implementationTimeWeeks\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (editApplicationControlStep2.implementationTimeWeeks.touched || isSubmitted.Step2) && editApplicationControlStep2.implementationTimeWeeks?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Weeks</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let week of weekArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"week\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ week }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(editApplicationControlStep2.implementationTimeWeeks.touched || isSubmitted.Step2) && editApplicationControlStep2.implementationTimeWeeks.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tWeek is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"applicationStep2Submit()\">Next</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- step 3 -->\r\n\t\t\t\t\t\t\t<div class=\"step-wrapper\" *ngIf=\"applicationStep3\">\r\n\t\t\t\t\t\t\t\t<div class=\"back-btn-wrp g-fs-07 g-fw-500 g-mb-10\">\r\n\t\t\t\t\t\t\t\t\t<span (click)=\"gotoStep('step2')\" class=\"g-cursor-pointer g-transition body-light-clr back-btn\" [ngClass]=\"{ disable: !applicationStep1 }\"> &#60; Back </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"editApplicationStep3\" *ngIf=\"editApplicationStep1 && editApplicationStep2 && editApplicationStep3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"ipStatus\" class=\"g-fs-07 lable-grey g-fw-400\"> IP Status </label>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"ipStatus\" formControlName=\"ipStatus\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected=\"selected\">Select Status</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ipStatusArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"status\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ status }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"identificationNumber\" class=\"g-fs-07 lable-grey g-fw-400\"> Identification Number </label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"identificationNumber\" placeholder=\"ex: 7\" formControlName=\"identificationNumber\" />\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"expertsInvolved\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tExperts Involved<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tDescribe the nature and scope of expertise within the team or company with respect to proven track record in R&D, product development & engineering for advanced\r\n\t\t\t\t\t\t\t\t\t\t\t\tindustrial-grade applications, systems & subsystems. Basic details (contact) of the mentors/experts in the development of the Solution and their credentials.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. The team consists of three seasoned entrepreneurs with significant expertise in medical devices, AI, IoT, disease diagnosis, and commercial execution. The team has a combined experience of 50 years in the fields mentioned above\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"expertsInvolved\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editApplicationControlStep3.expertsInvolved.touched || isSubmitted.Step3) && editApplicationControlStep3.expertsInvolved?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep3.expertsInvolved.touched || isSubmitted.Step3) && editApplicationControlStep3.expertsInvolved.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tExperts Involved is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep3.expertsInvolved.touched || isSubmitted.Step3) && editApplicationControlStep3.expertsInvolved.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t650 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep3.expertsInvolved.touched || isSubmitted.Step3) && editApplicationControlStep3.expertsInvolved.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"otherDetails\" class=\"g-fs-07 lable-grey g-fw-400\"> Other Details<br /> </label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor [editor]=\"Editor\" formControlName=\"otherDetails\"></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep3.otherDetails.touched || isSubmitted.Step3) && editApplicationControlStep3.otherDetails.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t500 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- product image uploads -->\r\n\t\t\t\t\t\t\t\t\t\t<app-gallery-upload [gallery]=\"currentProductImages\" (onGalleryChange)=\"handleSaveGallery($event)\"> </app-gallery-upload>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"video\" class=\"g-fs-07 lable-grey g-fw-400\"> Video Link </label>\r\n\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"video\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"video\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"https://www.xyz.com/\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editApplicationControlStep3.video.touched || isSubmitted.Step3) && editApplicationControlStep3.video?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editApplicationControlStep3.video.touched || isSubmitted.Step3) && editApplicationControlStep3.video.errors?.pattern\"> Invalid url format. </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"saveApplication()\">\r\n\t\t\t\t\t\t\t\t\t\t\tUpdate Application &nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"saveAsDraft()\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-w-100per g-fs-08 g-pt-04 g-pb-04 g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tSave as draft&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"draftLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"saveSolution()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tAdd Solution &nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"initLoading\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade a-create-challenge-modal\" id=\"confirmDialog\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-p-21\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-16 g-lh-19 g-fw-500 bg-blue-clr text-left\">Are you sure you want to exit your submssion?</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 body-grey-clr g-pt-07 text-left\">Going back will not save any of the information that you’ve provided in the input.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<button type=\"button\" #closebutton class=\"btn g-bdrrad-7px g-bdr-005 g-black5-brdr g-fs-12 g-w-bg g-pt-02 g-pb-02 g-pl-06 g-pr-06\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-27 text-left\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-p-brdr g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04\" (click)=\"handleGoBack('save')\">\r\n\t\t\t\t\t\tSave Draft & Go Back&nbsp; <i *ngIf=\"draftLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-12 g-fs-08 g-pt-04 g-pb-04 g-pl-24 g-pr-24\" (click)=\"handleGoBack('delete')\">Delete & Go Back</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/edit-proposal/edit-proposal.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/edit-proposal/edit-proposal.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!pageLoading\">\r\n\t<div class=\"edit-challenge-brief-parent g-pb-20\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t<div class=\"g-pb-10 g-pt-08\">\r\n\t\t\t\t\t\t<span class=\"g-fs-10 g-fw-500 g-black-clr g-cursor-pointer\"> <i class=\"fas fa-arrow-left\"></i>&nbsp; Back to Applications </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"challenge-step-tabs g-mb-10\">\r\n\t\t\t\t\t\t<div [ngClass]=\"{ active: !proposalStep1, '': proposalStep1 }\"><a class=\"g-black5-clr\" data-toggle=\"tab\" (click)=\"gotoStep('step1')\" >Scope of Customisation</a></div>\r\n\t\t\t\t\t\t<div [ngClass]=\"{ active: !proposalStep2, '': proposalStep2 }\"><a class=\"g-black5-clr\" data-toggle=\"tab\" (click)=\"gotoStep('step2')\">Timeline & Budget</a></div>\r\n\t\t\t\t\t\t<div [ngClass]=\"{ active: !proposalStep3, '': proposalStep3 }\"><a class=\"g-black5-clr\" data-toggle=\"tab\" (click)=\"gotoStep('step3')\">Track Record & Team</a></div>\r\n\t\t\t\t\t\t<div [ngClass]=\"{ active: !proposalStep4, '': proposalStep4 }\"><a class=\"g-black5-clr\" data-toggle=\"tab\" (click)=\"gotoStep('step4')\">Deployment Dependencies</a></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"tab-content col-md-6\">\r\n\t\t\t\t\t<div class=\"section-title g-fs-19 g-fw-500 title-clr g-mb-08\">Pilot Proposal</div>\r\n\t\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t\t<div id=\"scope\" class=\"tab-pane step-form-parent\" [ngClass]=\"{ active: !proposalStep1 }\" [hidden]=\"proposalStep1\">\r\n\t\t\t\t\t\t<div class=\"g-py-3\">\r\n\t\t\t\t\t\t\t<div class=\"title-clr g-fw-500 g-fs-16\">Customisation & Outcomes</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form [formGroup]=\"proposalForm.Step1\" (ngSubmit)=\"stepFormSubmit('Step1')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\tCustomisation details<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe in not more than 500 words the scope of customisation/development required (feature/functionality) for the meeting 100% compliance with the Acceptance/Completion Criteria\r\n\t\t\t\t\t\t\t\t\t\tdescribed in pilot Schema.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"The scope of the pilot should be defined in the context of helping innovators understand and keep in mind as to what will be helpful to test the feasibility, operationalisation, duration, cost and risks of the full-scale implementation? \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"customisation_details\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.customisation_details.touched || isSubmitted.Step1) && formControlStep1.customisation_details?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.customisation_details.touched || isSubmitted.Step1) && formControlStep1.customisation_details.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tOutcomes<span class=\"g-warning-clr\">*</span> <br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tSpecify the Key Performance Indicators/Areas, quantifiable value derived, tangible outcomes that your solution can deliver on completion of the pilot implementation?\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"The city spans around 250 km2 and has about 60,000 streetlights, due to the absence of a centralised monitoring system, maintenance of these streetlights is laborious, expensive and time-consuming. Identifying the exact location of the faulty lamp, leakage of current, or breakage of cables is currently a manual process based on citizen grievances received and consumes about 1-2 working days at an approximate cost of Rs.2000/- per streetlamp. \r\n                                        Additionally, unidentified & unchecked current leakage can be life-threatening to both lineman operators & citizens. There needs to be a centralised system that detects the faults in realtime, identifies the type of fault, and locates where the fault has occurred in the city.\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"outcomes\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.outcomes.touched || isSubmitted.Step1) && formControlStep1.outcomes?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.outcomes.touched || isSubmitted.Step1) && formControlStep1.outcomes.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t\t<div id=\"timeline\" class=\"tab-pane step-form-parent\" [ngClass]=\"{ active: !proposalStep2 }\" [hidden]=\"proposalStep2\">\r\n\t\t\t\t\t\t<div class=\"g-py-3\">\r\n\t\t\t\t\t\t\t<div class=\"title-clr g-fw-500 g-fs-16\">Deployment Timeline & Budget</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form [formGroup]=\"proposalForm.Step2\" (ngSubmit)=\"stepFormSubmit('Step2')\">\r\n\t\t\t\t\t\t\t<div class=\"a-lbl-wrp g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\tTime to Pilot<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tWhat is the additional duration of time required for development/customisation required for a deployment ready Solution that meets the 100% compliance with the\r\n\t\t\t\t\t\t\t\t\t\tAcceptance/Completion Criteria specified in the Pilot Requirements?\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"The scope of the pilot should be defined in the context of helping innovators understand and keep in mind as to what will be helpful to test the feasibility, operationalisation, duration, cost and risks of the full-scale implementation? \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"pilot_months\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.pilot_months.touched || isSubmitted.Step2) && formControlStep2.pilot_months?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Month</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ month }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.pilot_months.touched || isSubmitted.Step2) && formControlStep2.pilot_months.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"pilot_weeks\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.pilot_weeks.touched || isSubmitted.Step2) && formControlStep2.pilot_weeks?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select weeks</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let year of weekArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ year }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.pilot_weeks.touched || isSubmitted.Step2) && formControlStep2.pilot_weeks.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-lbl-wrp g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\tTime to Commission<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\"> What is the maximum duration of time required for installation & commissioning of the solution in a real-time environment? </span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"The scope of the pilot should be defined in the context of helping innovators understand and keep in mind as to what will be helpful to test the feasibility, operationalisation, duration, cost and risks of the full-scale implementation? \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"commission_months\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.commission_months.touched || isSubmitted.Step2) && formControlStep2.commission_months?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Month</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ month }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.commission_months.touched || isSubmitted.Step2) && formControlStep2.commission_months.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"commission_weeks\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.commission_weeks.touched || isSubmitted.Step2) && formControlStep2.commission_weeks?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select weeks</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let year of weekArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ year }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.commission_weeks.touched || isSubmitted.Step2) && formControlStep2.commission_weeks.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-lbl-wrp g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\tPilot Implementation & Monitoring timeline<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tIndicate the total time for which the solution will be deployed, tested and monitored to meet the successful completion criteria.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"The scope of the pilot should be defined in the context of helping innovators understand and keep in mind as to what will be helpful to test the feasibility, operationalisation, duration, cost and risks of the full-scale implementation? \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"implementation_months\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.implementation_months.touched || isSubmitted.Step2) && formControlStep2.implementation_months?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Month</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ month }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.implementation_months.touched || isSubmitted.Step2) && formControlStep2.implementation_months.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"implementation_weeks\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.implementation_weeks.touched || isSubmitted.Step2) && formControlStep2.implementation_weeks?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select weeks</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let year of weekArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ year }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.implementation_weeks.touched || isSubmitted.Step2) && formControlStep2.implementation_weeks.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tBudget<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\"> Indicate the overall budget required for the Pilot Implementation in categories defined below: (in Lakh Rupees) </span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"far fa-question-circle g-p-clr\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"a-budget-wrp\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-budget-item--wrp g-pl-10 g-pr-10 g-pb-07\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-07 g-black5-clr\">Solution Design/Dev Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-12 g-black5-clr g-mt-02 g-disp-inlblock\">&#8377;</label>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"calcTotal($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control g-disp-inlblock g-w-80per\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"budget_dev_cost\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.budget_dev_cost.touched || isSubmitted.Step2) && formControlStep2.budget_dev_cost?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp g-pl-11\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.budget_dev_cost.touched || isSubmitted.Step2) && formControlStep2.budget_dev_cost.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-07 g-black5-clr\">CapEx Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-12 g-black5-clr g-mt-02 g-disp-inlblock\">&#8377;</label>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"calcTotal($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control g-disp-inlblock g-w-80per\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"budget_capex_cost\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.budget_capex_cost.touched || isSubmitted.Step2) && formControlStep2.budget_capex_cost?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp g-pl-11\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.budget_capex_cost.touched || isSubmitted.Step2) && formControlStep2.budget_capex_cost.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-07 g-black5-clr\">Installation & Commissioning Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-12 g-black5-clr g-mt-02 g-disp-inlblock\">&#8377;</label>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"calcTotal($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control g-disp-inlblock g-w-80per\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"budget_install_cost\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.budget_install_cost.touched || isSubmitted.Step2) && formControlStep2.budget_install_cost?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp g-pl-11\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.budget_install_cost.touched || isSubmitted.Step2) && formControlStep2.budget_install_cost.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-07 g-black5-clr\">Operations/Monitoring & Report Generation Analysis Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-12 g-black5-clr g-mt-02 g-disp-inlblock\">&#8377;</label>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"calcTotal($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control g-disp-inlblock g-w-80per\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"budget_operation_cost\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.budget_operation_cost.touched || isSubmitted.Step2) && formControlStep2.budget_operation_cost?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp g-pl-11\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.budget_operation_cost.touched || isSubmitted.Step2) && formControlStep2.budget_operation_cost.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-budget-total-wrp g-pl-10 g-pr-10 g-pb-07\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-07 g-black5-clr\">Total Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-12 g-black5-clr g-mt-02 g-disp-inlblock\">&#8377;</label>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control g-disp-inlblock g-w-80per\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\treadonly\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"budget_total_cost\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.budget_total_cost.touched || isSubmitted.Step2) && formControlStep2.budget_total_cost?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp g-pl-11\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.budget_total_cost.touched || isSubmitted.Step2) && formControlStep2.budget_total_cost.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- step 3 -->\r\n\t\t\t\t\t<div id=\"trackrecord\" class=\"tab-pane step-form-parent\" [ngClass]=\"{ active: !proposalStep3 }\" [hidden]=\"proposalStep3\">\r\n\t\t\t\t\t\t<div class=\"g-py-3\">\r\n\t\t\t\t\t\t\t<div class=\"title-clr g-fw-500 g-fs-16\">Track Record & Team</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form [formGroup]=\"proposalForm.Step3\" (ngSubmit)=\"stepFormSubmit('Step3')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\tTrack Record<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tInclude documentation and endorsements from the customers/users of past pilot implementations, if any, in other cities or private customers showcasing the following:\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"field-desp g-fs-italic g-fw-400\">Proof of successful completion of deployment/integration/usage trials</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"field-desp g-fs-italic g-fw-400\">Business/financial Value and impact delivered/exhibited/created</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"field-desp g-fs-italic g-fw-400\">Cost-benefit advantage</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"field-desp g-fs-italic g-fw-400\">Testimonials</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. Identification & alerting of the type of fault—non-functioning of lights, leakage of current, and breakage of cable <br><br>\r\n                                            2. Identification of the exact location of the faulty street light in the city\r\n                                            \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"track_record\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.track_record.touched || isSubmitted.Step3) && formControlStep3.track_record?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp g-pl-11\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.track_record.touched || isSubmitted.Step3) && formControlStep3.track_record.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tReports for past pilot implementations <span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tInclude documentation and endorsements from past implementations in other cities or other customers (benefits, relevant to this deployment):\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. <span class='g-black5-clr g-fw-500'>Lineman:</span> The service personnel from the electricity department who spends hours in manually identifying faulty street lights and in fixing the same.<br><br> 2. <span class='g-black5-clr g-fw-500'>Electricity Department:</span> Officers, junior engineers, and sub-divisional engineers in the electricity department responsible for the operation & maintenance of street lights in the city and managing the linemen in the field. They face challenges in operations & maintenance since it is being done manually and in an unorganised manner.\r\n                                            \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<doc-upload [uploadName]=\"'pastpilot'\" [docs]=\"currentPastPilotDocs\" (onUploadChange)=\"handlePastPilotDocUploads($event)\"></doc-upload>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"team-capabilities\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tCore Team Capabilities <span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tSpecify your team size and core team members along with the capabilities & domain/tech expertise in relevance to the context of this pilot implementation\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\"> Team Size </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"team_size\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 10\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.team_size.touched || isSubmitted.Step3) && formControlStep3.team_size?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.team_size.touched || isSubmitted.Step3) && formControlStep3.team_size.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"a-team\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex dynamic-row\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">Team Member</label>\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400 g-ml-05\">Capabilities/Expertise</label>\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\"> </label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<ng-container formArrayName=\"team_members\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let member of teamMembers.controls; index as i\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex g-mb-05 dynamic-row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frg-dynamic-input-col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"name\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: John Doe\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (member.controls.name.touched || isSubmitted.Step3) && member.controls.name?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frg-dynamic-input-col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: IOT\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"expertise\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (member.controls.expertise.touched || isSubmitted.Step3) && member.controls.expertise?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"teamMembers.controls.length - 1 == i\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"addMember()\"><i class=\"act-clr fa fa-plus\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"teamMembers.controls.length - 1 != i\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"removeMember(i)\"><i class=\"act-clr fa fa-minus\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- step 4 -->\r\n\t\t\t\t\t<div id=\"deployment\" class=\"tab-pane step-form-parent\" [ngClass]=\"{ active: !proposalStep4 }\" [hidden]=\"proposalStep4\">\r\n\t\t\t\t\t\t<div class=\"g-py-3\">\r\n\t\t\t\t\t\t\t<div class=\"title-clr g-fw-500 g-fs-16\">Dependencies & Additional Details</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form [formGroup]=\"proposalForm.Step4\" (ngSubmit)=\"stepFormSubmit('Step4')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tDependencies for deployment <span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tList down the various dependencies (accounted & non-accounted) that might potentially foil the deployment of the solution in the specified timeline. This includes the inputs from\r\n\t\t\t\t\t\t\t\t\t\tthe sides of the SCM.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. Identification & alerting of the type of fault—non-functioning of lights, leakage of current, and breakage of cable <br><br>\r\n                                            2. Identification of the exact location of the faulty street light in the city\r\n                                            \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"dependencies\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep4.dependencies.touched || isSubmitted.Step4) && formControlStep4.dependencies?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep4.dependencies.touched || isSubmitted.Step4) && formControlStep4.dependencies.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tAdditional Details\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\"> Upload Doc/PDF/PPT file of the Pitch deck Pilot Implementation milestones plan; Detailed Budget estimation; etc. </span>\r\n\t\t\t\t\t\t\t\t\t<doc-upload [uploadName]=\"'additional'\" [docs]=\"currentAdditionalDocs\" (onUploadChange)=\"handleAdditionalDocUploads($event)\"></doc-upload>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" type=\"submit\">\r\n\t\t\t\t\t\t\t\t\tSubmit &nbsp;\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n<ng-container *ngIf=\"pageLoading\">\r\n    <div class=\"loader-wrp\">\r\n        <div class=\"section-loader\">\r\n            <div class=\"loader-wrp\">\r\n                <div class=\"loader-inner text-center\">\r\n                    <div class=\"lds-ring\">\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade a-create-challenge-modal\" id=\"confirmDialog\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-p-21\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-16 g-lh-19 g-fw-500 bg-blue-clr text-left\">Are you sure you want to exit your submssion?</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 body-grey-clr g-pt-07 text-left\">Going back will not save any of the information that you’ve provided in the input.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<button type=\"button\" #closebutton class=\"btn g-bdrrad-7px g-bdr-005 g-black5-brdr g-fs-12 g-w-bg g-pt-02 g-pb-02 g-pl-06 g-pr-06\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-27 text-left\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-p-brdr g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04\">Save Draft & Go Back&nbsp; <i class=\"fas fa-circle-notch fa-spin\"></i></button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-12 g-fs-08 g-pt-04 g-pb-04 g-pl-24 g-pr-24\" data-dismiss=\"modal\">Delete & Go Back</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/eois/eois.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/eois/eois.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n\t<div class=\"card-wrap\">\r\n\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t<ng-container *ngFor=\"let item of eoiData.data\">\r\n\t\t\t\t<eoi-card [eoiData]=\"item\"></eoi-card>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t<loading-application-card></loading-application-card>\r\n\t\t</ng-container>\r\n\t</div>\r\n\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t<pagination-controller [totalItems]=\"eoiData?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\r\n\t</div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/pilot-proposal/pilot-proposal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/pilot-proposal/pilot-proposal.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ng-container *ngIf=\"!pageLoading\"> -->\r\n<div class=\"edit-challenge-brief-parent g-pb-20\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<div class=\"g-pb-10 g-pt-08\">\r\n\t\t\t\t\t<span class=\"g-fs-10 g-fw-500 g-black-clr g-cursor-pointer\" routerLink=\"../\"> <i class=\"fas fa-arrow-left\"></i>&nbsp; Back to EOIs </span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"challenge-step-tabs g-mb-10\">\r\n\t\t\t\t\t<div [ngClass]=\"{ active: !proposalStep1, '': proposalStep1 }\"><a class=\"g-black5-clr\" data-toggle=\"tab\">Scope of Customisation</a></div>\r\n\t\t\t\t\t<div [ngClass]=\"{ active: !proposalStep2, '': proposalStep2 }\"><a class=\"g-black5-clr\" data-toggle=\"tab\">Timeline & Budget</a></div>\r\n\t\t\t\t\t<div [ngClass]=\"{ active: !proposalStep3, '': proposalStep3 }\"><a class=\"g-black5-clr\" data-toggle=\"tab\">Track Record & Team</a></div>\r\n\t\t\t\t\t<div [ngClass]=\"{ active: !proposalStep4, '': proposalStep4 }\"><a class=\"g-black5-clr\" data-toggle=\"tab\">Deployment Dependencies</a></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-content col-md-6\">\r\n\t\t\t\t<div class=\"section-title g-fs-19 g-fw-500 title-clr g-mb-08\">Pilot Proposal</div>\r\n\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t<div id=\"scope\" class=\"tab-pane step-form-parent\" [ngClass]=\"{ active: !proposalStep1 }\" [hidden]=\"proposalStep1\">\r\n\t\t\t\t\t<div class=\"g-py-3\">\r\n\t\t\t\t\t\t<div class=\"title-clr g-fw-500 g-fs-16\">Customisation & Outcomes</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<form [formGroup]=\"proposalForm.Step1\" (ngSubmit)=\"stepFormSubmit('Step1')\">\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\tCustomisation details<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tDescribe in not more than 500 words the scope of customisation/development required (feature/functionality) for the meeting 100% compliance with the Acceptance/Completion Criteria\r\n\t\t\t\t\t\t\t\t\tdescribed in pilot Schema.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\ttitle=\"The scope of the pilot should be defined in the context of helping innovators understand and keep in mind as to what will be helpful to test the feasibility, operationalisation, duration, cost and risks of the full-scale implementation? \"\r\n\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\tformControlName=\"customisation_details\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (formControlStep1.customisation_details.touched || isSubmitted.Step1) && formControlStep1.customisation_details?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.customisation_details.touched || isSubmitted.Step1) && formControlStep1.customisation_details.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\tOutcomes<span class=\"g-warning-clr\">*</span> <br />\r\n\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tSpecify the Key Performance Indicators/Areas, quantifiable value derived, tangible outcomes that your solution can deliver on completion of the pilot implementation?\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\ttitle=\"The city spans around 250 km2 and has about 60,000 streetlights, due to the absence of a centralised monitoring system, maintenance of these streetlights is laborious, expensive and time-consuming. Identifying the exact location of the faulty lamp, leakage of current, or breakage of cables is currently a manual process based on citizen grievances received and consumes about 1-2 working days at an approximate cost of Rs.2000/- per streetlamp. \r\n                                    Additionally, unidentified & unchecked current leakage can be life-threatening to both lineman operators & citizens. There needs to be a centralised system that detects the faults in realtime, identifies the type of fault, and locates where the fault has occurred in the city.\r\n                                    \"\r\n\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\tformControlName=\"outcomes\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (formControlStep1.outcomes.touched || isSubmitted.Step1) && formControlStep1.outcomes?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.outcomes.touched || isSubmitted.Step1) && formControlStep1.outcomes.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t<div id=\"timeline\" class=\"tab-pane step-form-parent\" [ngClass]=\"{ active: !proposalStep2 }\" [hidden]=\"proposalStep2\">\r\n\t\t\t\t\t<div class=\"g-py-3\">\r\n\t\t\t\t\t\t<div class=\"title-clr g-fw-500 g-fs-16\">Deployment Timeline & Budget</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<form [formGroup]=\"proposalForm.Step2\" (ngSubmit)=\"stepFormSubmit('Step2')\">\r\n\t\t\t\t\t\t<div class=\"a-lbl-wrp g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\tTime to Pilot<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tWhat is the additional duration of time required for development/customisation required for a deployment ready Solution that meets the 100% compliance with the Acceptance/Completion\r\n\t\t\t\t\t\t\t\t\tCriteria specified in the Pilot Requirements?\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\ttitle=\"The scope of the pilot should be defined in the context of helping innovators understand and keep in mind as to what will be helpful to test the feasibility, operationalisation, duration, cost and risks of the full-scale implementation? \"\r\n\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"pilot_months\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.pilot_months.touched || isSubmitted.Step2) && formControlStep2.pilot_months?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Month</option>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ month }}\r\n\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.pilot_months.touched || isSubmitted.Step2) && formControlStep2.pilot_months.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"pilot_weeks\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.pilot_weeks.touched || isSubmitted.Step2) && formControlStep2.pilot_weeks?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select weeks</option>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let year of weekArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ year }}\r\n\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.pilot_weeks.touched || isSubmitted.Step2) && formControlStep2.pilot_weeks.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-lbl-wrp g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\tTime to Commission<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\"> What is the maximum duration of time required for installation & commissioning of the solution in a real-time environment? </span>\r\n\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\ttitle=\"The scope of the pilot should be defined in the context of helping innovators understand and keep in mind as to what will be helpful to test the feasibility, operationalisation, duration, cost and risks of the full-scale implementation? \"\r\n\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"commission_months\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.commission_months.touched || isSubmitted.Step2) && formControlStep2.commission_months?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Month</option>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ month }}\r\n\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.commission_months.touched || isSubmitted.Step2) && formControlStep2.commission_months.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"commission_weeks\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.commission_weeks.touched || isSubmitted.Step2) && formControlStep2.commission_weeks?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select weeks</option>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let year of weekArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ year }}\r\n\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.commission_weeks.touched || isSubmitted.Step2) && formControlStep2.commission_weeks.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-lbl-wrp g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\tPilot Implementation & Monitoring timeline<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\"> Indicate the total time for which the solution will be deployed, tested and monitored to meet the successful completion criteria. </span>\r\n\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\ttitle=\"The scope of the pilot should be defined in the context of helping innovators understand and keep in mind as to what will be helpful to test the feasibility, operationalisation, duration, cost and risks of the full-scale implementation? \"\r\n\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"implementation_months\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.implementation_months.touched || isSubmitted.Step2) && formControlStep2.implementation_months?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Month</option>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ month }}\r\n\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.implementation_months.touched || isSubmitted.Step2) && formControlStep2.implementation_months.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"implementation_weeks\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.implementation_weeks.touched || isSubmitted.Step2) && formControlStep2.implementation_weeks?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select weeks</option>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let year of weekArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ year }}\r\n\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.implementation_weeks.touched || isSubmitted.Step2) && formControlStep2.implementation_weeks.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\tBudget<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\"> Indicate the overall budget required for the Pilot Implementation in categories defined below: (in Lakh Rupees) </span>\r\n\t\t\t\t\t\t\t\t<span class=\"pull-right\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"far fa-question-circle g-p-clr\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t\t<div class=\"a-budget-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-budget-item--wrp g-pl-10 g-pr-10 g-pb-07\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-07 g-black5-clr\">Solution Design/Dev Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-12 g-black5-clr g-mt-02 g-disp-inlblock\">&#8377;</label>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"calcTotal($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control g-disp-inlblock g-w-80per\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"budget_dev_cost\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.budget_dev_cost.touched || isSubmitted.Step2) && formControlStep2.budget_dev_cost?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp g-pl-11\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.budget_dev_cost.touched || isSubmitted.Step2) && formControlStep2.budget_dev_cost.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-07 g-black5-clr\">CapEx Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-12 g-black5-clr g-mt-02 g-disp-inlblock\">&#8377;</label>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"calcTotal($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control g-disp-inlblock g-w-80per\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"budget_capex_cost\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.budget_capex_cost.touched || isSubmitted.Step2) && formControlStep2.budget_capex_cost?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp g-pl-11\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.budget_capex_cost.touched || isSubmitted.Step2) && formControlStep2.budget_capex_cost.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-07 g-black5-clr\">Installation & Commissioning Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-12 g-black5-clr g-mt-02 g-disp-inlblock\">&#8377;</label>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"calcTotal($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control g-disp-inlblock g-w-80per\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"budget_install_cost\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.budget_install_cost.touched || isSubmitted.Step2) && formControlStep2.budget_install_cost?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp g-pl-11\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.budget_install_cost.touched || isSubmitted.Step2) && formControlStep2.budget_install_cost.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-07 g-black5-clr\">Operations/Monitoring & Report Generation Analysis Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-12 g-black5-clr g-mt-02 g-disp-inlblock\">&#8377;</label>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"calcTotal($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control g-disp-inlblock g-w-80per\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"budget_operation_cost\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.budget_operation_cost.touched || isSubmitted.Step2) && formControlStep2.budget_operation_cost?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp g-pl-11\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.budget_operation_cost.touched || isSubmitted.Step2) && formControlStep2.budget_operation_cost.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"a-budget-total-wrp g-pl-10 g-pr-10 g-pb-07\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-07 g-black5-clr\">Total Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-12 g-black5-clr g-mt-02 g-disp-inlblock\">&#8377;</label>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control g-disp-inlblock g-w-80per\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\treadonly\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"budget_total_cost\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.budget_total_cost.touched || isSubmitted.Step2) && formControlStep2.budget_total_cost?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp g-pl-11\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.budget_total_cost.touched || isSubmitted.Step2) && formControlStep2.budget_total_cost.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- step 3 -->\r\n\t\t\t\t<div id=\"trackrecord\" class=\"tab-pane step-form-parent\" [ngClass]=\"{ active: !proposalStep3 }\" [hidden]=\"proposalStep3\">\r\n\t\t\t\t\t<div class=\"g-py-3\">\r\n\t\t\t\t\t\t<div class=\"title-clr g-fw-500 g-fs-16\">Track Record & Team</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<form [formGroup]=\"proposalForm.Step3\" (ngSubmit)=\"stepFormSubmit('Step3')\">\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\tTrack Record<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tInclude documentation and endorsements from the customers/users of past pilot implementations, if any, in other cities or private customers showcasing the following:\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"field-desp g-fs-italic g-fw-400\">Proof of successful completion of deployment/integration/usage trials</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"field-desp g-fs-italic g-fw-400\">Business/financial Value and impact delivered/exhibited/created</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"field-desp g-fs-italic g-fw-400\">Cost-benefit advantage</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"field-desp g-fs-italic g-fw-400\">Testimonials</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\ttitle=\"1. Identification & alerting of the type of fault—non-functioning of lights, leakage of current, and breakage of cable <br><br>\r\n                                        2. Identification of the exact location of the faulty street light in the city\r\n                                        \"\r\n\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\tformControlName=\"track_record\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (formControlStep3.track_record.touched || isSubmitted.Step3) && formControlStep3.track_record?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t<div class=\"err-resp g-pl-11\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.track_record.touched || isSubmitted.Step3) && formControlStep3.track_record.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\tReports for past pilot implementations <span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tInclude documentation and endorsements from past implementations in other cities or other customers (benefits, relevant to this deployment):\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\ttitle=\"1. <span class='g-black5-clr g-fw-500'>Lineman:</span> The service personnel from the electricity department who spends hours in manually identifying faulty street lights and in fixing the same.<br><br> 2. <span class='g-black5-clr g-fw-500'>Electricity Department:</span> Officers, junior engineers, and sub-divisional engineers in the electricity department responsible for the operation & maintenance of street lights in the city and managing the linemen in the field. They face challenges in operations & maintenance since it is being done manually and in an unorganised manner.\r\n                                        \"\r\n\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<doc-upload [uploadName]=\"'pastpilot'\" (onUploadChange)=\"handlePastPilotDocUploads($event)\"></doc-upload>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"team-capabilities\">\r\n\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\tCore Team Capabilities <span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tSpecify your team size and core team members along with the capabilities & domain/tech expertise in relevance to the context of this pilot implementation\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\"> Team Size </label>\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"team_size\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 10\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.team_size.touched || isSubmitted.Step3) && formControlStep3.team_size?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.team_size.touched || isSubmitted.Step3) && formControlStep3.team_size.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-team\">\r\n\t\t\t\t\t\t\t\t<div class=\"d-flex dynamic-row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">Team Member</label>\r\n\t\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400 g-ml-05\">Capabilities/Expertise</label>\r\n\t\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\"> </label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<ng-container formArrayName=\"team_members\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let member of teamMembers.controls; index as i\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex g-mb-05 dynamic-row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frg-dynamic-input-col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"name\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: John Doe\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (member.controls.name.touched || isSubmitted.Step3) && member.controls.name?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frg-dynamic-input-col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: IOT\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"expertise\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (member.controls.expertise.touched || isSubmitted.Step3) && member.controls.expertise?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"teamMembers.controls.length - 1 == i\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"addMember()\"><i class=\"act-clr fa fa-plus\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"teamMembers.controls.length - 1 != i\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"removeMember(i)\"><i class=\"act-clr fa fa-minus\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- step 4 -->\r\n\t\t\t\t<div id=\"deployment\" class=\"tab-pane step-form-parent\" [ngClass]=\"{ active: !proposalStep4 }\" [hidden]=\"proposalStep4\">\r\n\t\t\t\t\t<div class=\"g-py-3\">\r\n\t\t\t\t\t\t<div class=\"title-clr g-fw-500 g-fs-16\">Dependencies & Additional Details</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<form [formGroup]=\"proposalForm.Step4\" (ngSubmit)=\"stepFormSubmit('Step4')\">\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\tDependencies for deployment <span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tList down the various dependencies (accounted & non-accounted) that might potentially foil the deployment of the solution in the specified timeline. This includes the inputs from the\r\n\t\t\t\t\t\t\t\t\tsides of the SCM.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\ttitle=\"1. Identification & alerting of the type of fault—non-functioning of lights, leakage of current, and breakage of cable <br><br>\r\n                                        2. Identification of the exact location of the faulty street light in the city\r\n                                        \"\r\n\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\tformControlName=\"dependencies\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (formControlStep4.dependencies.touched || isSubmitted.Step4) && formControlStep4.dependencies?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep4.dependencies.touched || isSubmitted.Step4) && formControlStep4.dependencies.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\tAdditional Details\r\n\t\t\t\t\t\t\t\t<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\"> Upload Doc/PDF/PPT file of the Pitch deck Pilot Implementation milestones plan; Detailed Budget estimation; etc. </span>\r\n\t\t\t\t\t\t\t\t<doc-upload [uploadName]=\"'additional'\" (onUploadChange)=\"handleAdditionalDocUploads($event)\"></doc-upload>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" type=\"submit\">\r\n\t\t\t\t\t\t\t\tSubmit &nbsp;\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- </ng-container> -->\r\n<!-- <ng-container *ngIf=\"pageLoading\"> -->\r\n<!-- <div class=\"loader-wrp\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div> -->\r\n<!-- </ng-container> -->\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade a-create-challenge-modal\" id=\"confirmDialog\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-p-21\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-16 g-lh-19 g-fw-500 bg-blue-clr text-left\">Are you sure you want to exit your submssion?</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 body-grey-clr g-pt-07 text-left\">Going back will not save any of the information that you’ve provided in the input.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<button type=\"button\" #closebutton class=\"btn g-bdrrad-7px g-bdr-005 g-black5-brdr g-fs-12 g-w-bg g-pt-02 g-pb-02 g-pl-06 g-pr-06\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-27 text-left\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-p-brdr g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04\">Save Draft & Go Back&nbsp; <i class=\"fas fa-circle-notch fa-spin\"></i></button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-12 g-fs-08 g-pt-04 g-pb-04 g-pl-24 g-pr-24\" data-dismiss=\"modal\">Delete & Go Back</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/pilots/pilots.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/pilots/pilots.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"a-tab-wrp\">\r\n\t<ul class=\"nav nav-pills g-pb-18\">\r\n\t\t<li class=\"active\">\r\n\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#allpilots\">Completed ({{completedPilotsCount}}) </a>\r\n\t\t</li>\r\n\t\t<li><a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#Ongoing\">Ongoing ({{onGoingPilotsCount}})</a></li>\r\n\t\t<li><a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#yetToStart\">Yet to Start ({{yetToStartCount}})</a></li>\r\n\t</ul>\r\n\t<div class=\"tab-content\">\r\n\t\t<div id=\"allpilots\" class=\"tab-pane fade in active\">\r\n\t\t\t<ng-container *ngIf=\"!completedLoading\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-blue3-clr\">{{ completedPilots.currently_showing.from }}-{{ completedPilots.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ completedPilots.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Pilots</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ng-container *ngFor=\"let item of completedPilots?.data\">\r\n\t\t\t\t\t<pilot-card [pilotData]=\"item\"></pilot-card>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"completedPilots?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleCompletedPilots($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"completedLoading\">\r\n\t\t\t\t<loading-application-card></loading-application-card>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t\t<div id=\"Ongoing\" class=\"tab-pane fade\">\r\n\t\t\t<ng-container *ngIf=\"!onGoingLoading\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-blue3-clr\">{{ onGoingPilots.currently_showing.from }}-{{ onGoingPilots.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ onGoingPilots.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Pilots</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ng-container *ngFor=\"let item of onGoingPilots?.data\">\r\n\t\t\t\t\t<pilot-card [pilotData]=\"item\"></pilot-card>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"onGoingPilots?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleOnGoingPilots($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"onGoingLoading\">\r\n\t\t\t\t<loading-application-card></loading-application-card>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t\t<div id=\"yetToStart\" class=\"tab-pane fade\">\r\n\t\t\t<ng-container *ngIf=\"!yetToStartLoading\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-blue3-clr\">{{ yetToStart.currently_showing.from }}-{{ yetToStart.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ yetToStart.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Pilots</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ng-container *ngFor=\"let item of yetToStart?.data\">\r\n\t\t\t\t\t<pilot-card [pilotData]=\"item\"></pilot-card>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"yetToStart?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleQueryYetToStart($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"yetToStartLoading\">\r\n\t\t\t\t<loading-application-card></loading-application-card>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/proposals/proposals.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/proposals/proposals.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"a-tab-wrp\">\r\n\t<ul class=\"nav nav-pills g-pb-18\">\r\n\t\t<li class=\"active\">\r\n\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#allProposals\">All Proposals ({{ allProposalCount }})</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#Proposalsonhold\">Pilot Ready ({{ pilotReadyCount }})</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#Proposalrejected\">Pre-Pilot ({{ prePilotCount }})</a>\r\n\t\t</li>\r\n\t</ul>\r\n\t<div class=\"tab-content\">\r\n\t\t<div id=\"allProposals\" class=\"tab-pane fade in active\">\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let item of allProposals?.data\">\r\n\t\t\t\t\t\t<proposal-card [proposalData]=\"item\"></proposal-card>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t<loading-application-card></loading-application-card>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t<pagination-controller [totalItems]=\"allProposals?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleAllPagination($event)\"> </pagination-controller>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"Proposalsonhold\" class=\"tab-pane fade\">\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let item of pilotReadyProposals?.data\">\r\n\t\t\t\t\t\t<proposal-card [proposalData]=\"item\"></proposal-card>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t<loading-application-card></loading-application-card>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t<pagination-controller [totalItems]=\"pilotReadyProposals?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleAllPagination($event)\"> </pagination-controller>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"Proposalrejected\" class=\"tab-pane fade\">\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let item of prePilotProposals?.data\">\r\n\t\t\t\t\t\t<proposal-card [proposalData]=\"item\"></proposal-card>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t<loading-application-card></loading-application-card>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t<pagination-controller [totalItems]=\"prePilotProposals?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleAllPagination($event)\"> </pagination-controller>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/unsolicited-proposal-provider/unsolicited-proposal-provider.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/unsolicited-proposal-provider/unsolicited-proposal-provider.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\" *ngFor=\"let item of uns_proposal?.data\">\n\t<div class=\"card-content-grid g-p-15\">\n\t\t<div class=\"flex-col\">\n\t\t\t<div class=\"flex-row\">\n\t\t\t\t<div class=\"application-content\">\n\t\t\t\t\t<div class=\"a-card-title-wrp\">\n\t\t\t\t\t\t<div class=\"a-card-title g-fs-09 g-black5-clr g-fw-500 g-text-underline g-cursor-pointer\">\n\t\t\t\t\t\t\t{{ item.frg_challenge_id.name.length > 30 ? (item.frg_challenge_id.name | slice: 0:30 | titlecase) + \"...\" : item.frg_challenge_id.name }}\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"flex-col\">\n\t\t\t<div class=\"a-company-name-wrp\">\n\t\t\t\t<div class=\"a-challenge-date\">\n\t\t\t\t\t<span class=\"body-light-clr g-fs-07\">Creation Date: </span>\n\t\t\t\t\t<span class=\"g-fs-07 g-fw-500 g-black5-clr\">\n\t\t\t\t\t\t{{ item.created_at | date: \"dd/MM/yyyy\" }}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"flex-col text-right\" >\n\t\t\t<div class=\"g-mt-10 status-pill completed\" *ngIf=\"item.status == 'active'\">Accepted</div>\n\t\t\t<div class=\"g-mt-10 status-pill onhold\" *ngIf=\"item.status == 'pending'\">Pending</div>\n\t\t\t<div class=\"g-mt-10 status-pill rejected\" *ngIf=\"item.status == 'inactive'\">Rejected</div>\n\t\t</div>\n\t</div>\n\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-10 g-pl-15 g-pr-15\">\n\t\t<div class=\"card-content body-light-clr\">\n\t\t\t<div class=\"flex-col\">\n\t\t\t\t<div class=\"a-challenge-sector-wrp\">\n\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 body-light-clr\">\n\t\t\t\t\t\t{{ item.frg_challenge_sector_id.name | titlecase }}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"flex-col\">\n\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\n\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08\">\n\t\t\t\t\t\t<span class=\"body-light-clr\">\n\t\t\t\t\t\t\t{{ item.frg_smart_city_id.name | titlecase }}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"g-pt-05 g-pb-25 text-center\" *ngIf=\"uns_proposal?.data.length\">\n\t<pagination-controller [totalItems]=\"uns_proposal?.total_results\" [pageSize]=\"10\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\n</div>");

/***/ }),

/***/ "./src/app/provider/dashboard/components/application-card/application-card.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/provider/dashboard/components/application-card/application-card.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n.card-content {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.card-content-grid {\r\n\tdisplay: grid;\r\n\tgrid-column-gap: 30px;\r\n\tgrid-template-columns: 3fr 1fr 1fr auto;\r\n}\r\n.flex-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.a-review-appl-img-wrp {\r\n\tmargin-right: 25px;\r\n}\r\n.a-review-appl-img-wrp img {\r\n\tmin-width: 88px;\r\n\tborder-radius: 6px;\r\n}\r\n.status-pill {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 10px 30px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid #acb1c1;\r\n\tborder-radius: 100px;\r\n}\r\n.status-pill.onhold {\r\n\tcolor: #7a600f;\r\n\tborder: 1px solid #fbc41f;\r\n\tbackground: rgba(251, 196, 31, 0.1);\r\n\tpadding-left: 36px;\r\n}\r\n.status-pill.onhold::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #fbc41f;\r\n}\r\n.status-pill.onhold {\r\n\tpadding-left: 36px;\r\n}\r\n.status-pill.rejected::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 16px;\r\n\tborder-radius: 50%;\r\n\tbackground: #f8483d;\r\n}\r\n.g-danger-clr {\r\n\tcolor: #f8483d;\r\n}\r\n.g-danger-bg {\r\n\tbackground-color: #f8483d;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL2NvbXBvbmVudHMvYXBwbGljYXRpb24tY2FyZC9hcHBsaWNhdGlvbi1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNUO0NBQ0Msc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQix1U0FBdVM7Q0FDdlMsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IsdUNBQXVDO0FBQ3hDO0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsdUNBQXVDO0FBQ3hDO0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0MsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixtQ0FBbUM7Q0FDbkMsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osU0FBUztDQUNULFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixTQUFTO0NBQ1QsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL2NvbXBvbmVudHMvYXBwbGljYXRpb24tY2FyZC9hcHBsaWNhdGlvbi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDYXJkICovXHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLXdycCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLWZvb3RlciB7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgxNzIsIDE3NywgMTkzLCAwLjEpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzE7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxMycgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgMTMgOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEyLjgxNzQgMS40MUwxMS40MTkxIC02LjcxMzZlLTA4TDYuODY3MzggNC41OEwyLjMxNTYzIC01LjA0MjM0ZS0wN0wwLjkxNzM4MiAxLjQxTDYuODY3MzggNy40MUwxMi44MTc0IDEuNDFaJyBmaWxsPSclMjM0RjRGNEYnLyUzRSUzQy9zdmclM0UlMEFcIik7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDkwJTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDIwcHg7XHJcblx0cGFkZGluZzogMTBweCAyNXB4IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50LWdyaWQge1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC1jb2x1bW4tZ2FwOiAzMHB4O1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmciAxZnIgYXV0bztcclxufVxyXG5cclxuLmZsZXgtcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYS1yZXZpZXctYXBwbC1pbWctd3JwIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5hLXJldmlldy1hcHBsLWltZy13cnAgaW1nIHtcclxuXHRtaW4td2lkdGg6IDg4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uc3RhdHVzLXBpbGwge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogMTBweCAzMHB4O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGJhY2tncm91bmQ6ICNmN2Y3Zjk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2FjYjFjMTtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsLm9uaG9sZCB7XHJcblx0Y29sb3I6ICM3YTYwMGY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZiYzQxZjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTk2LCAzMSwgMC4xKTtcclxuXHRwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbC5vbmhvbGQ6OmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTBweDtcclxuXHRoZWlnaHQ6IDEwcHg7XHJcblx0dG9wOiAxM3B4O1xyXG5cdGxlZnQ6IDE4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJhY2tncm91bmQ6ICNmYmM0MWY7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbC5vbmhvbGQge1xyXG5cdHBhZGRpbmctbGVmdDogMzZweDtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsLnJlamVjdGVkOjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdHRvcDogMTNweDtcclxuXHRsZWZ0OiAxNnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZjg0ODNkO1xyXG59XHJcblxyXG4uZy1kYW5nZXItY2xyIHtcclxuXHRjb2xvcjogI2Y4NDgzZDtcclxufVxyXG4uZy1kYW5nZXItYmcge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmODQ4M2Q7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/provider/dashboard/components/application-card/application-card.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/provider/dashboard/components/application-card/application-card.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ApplicationCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationCardComponent", function() { return ApplicationCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dashboardmodule.service */ "./src/app/provider/dashboard/dashboardmodule.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ApplicationCardComponent = class ApplicationCardComponent {
    constructor(_dash, toastr) {
        this._dash = _dash;
        this.toastr = toastr;
        this.onApplicationDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
    }
    ngOnInit() { }
    trashApplication() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.deleteLoading = true;
            let resp = yield this._dash.deleteApplication(this.applicationData.id);
            $(`#deleteSolution${this.applicationData.id}`).modal("hide");
            this.toastr.success("", "Application deleted successfully");
            this.onApplicationDelete.emit(resp);
            this.deleteLoading = false;
        });
    }
};
ApplicationCardComponent.ctorParameters = () => [
    { type: _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_3__["DashboardmoduleService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ApplicationCardComponent.prototype, "applicationData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ApplicationCardComponent.prototype, "onApplicationDelete", void 0);
ApplicationCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "application-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./application-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/application-card/application-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./application-card.component.css */ "./src/app/provider/dashboard/components/application-card/application-card.component.css")).default]
    })
], ApplicationCardComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/components/application-item/application-item.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/provider/dashboard/components/application-item/application-item.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n.card-content {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.card-content-grid {\r\n\tdisplay: grid;\r\n\tgrid-column-gap: 30px;\r\n\tgrid-template-columns: 3fr 1fr 1fr auto;\r\n}\r\n.flex-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.a-review-appl-img-wrp {\r\n\tmargin-right: 25px;\r\n}\r\n.a-review-appl-img-wrp img {\r\n\tmin-width: 88px;\r\n\tborder-radius: 6px;\r\n}\r\n.status-pill {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 10px 20px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid #acb1c1;\r\n\tborder-radius: 100px;\r\n}\r\n.status-pill.onhold {\r\n\t/* color: #7a600f;\r\n\tborder: 1px solid #fbc41f;\r\n\tbackground: rgba(251, 196, 31, 0.1); */\r\n\tpadding-left: 36px;\r\n}\r\n.status-pill.onhold::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #fbc41f;\r\n}\r\n.status-pill.onhold,\r\n.status-pill.rejected,\r\n.status-pill.completed {\r\n\tpadding-left: 36px;\r\n}\r\n.status-pill.rejected::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 16px;\r\n\tborder-radius: 50%;\r\n\tbackground: #f8483d;\r\n}\r\n.status-pill.completed::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #19c8a6;\r\n}\r\n.g-danger-clr {\r\n\tcolor: #f8483d;\r\n}\r\n.g-danger-bg {\r\n\tbackground-color: #f8483d;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL2NvbXBvbmVudHMvYXBwbGljYXRpb24taXRlbS9hcHBsaWNhdGlvbi1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNUO0NBQ0Msc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQix1U0FBdVM7Q0FDdlMsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IsdUNBQXVDO0FBQ3hDO0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsdUNBQXVDO0FBQ3hDO0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0M7O3VDQUVzQztDQUN0QyxrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixTQUFTO0NBQ1QsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7QUFFQTs7O0NBR0Msa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osU0FBUztDQUNULFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osU0FBUztDQUNULFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2Rhc2hib2FyZC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWl0ZW0vYXBwbGljYXRpb24taXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2FyZCAqL1xyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC13cnAge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC1mb290ZXIge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTMnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDEzIDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xMi44MTc0IDEuNDFMMTEuNDE5MSAtNi43MTM2ZS0wOEw2Ljg2NzM4IDQuNThMMi4zMTU2MyAtNS4wNDIzNGUtMDdMMC45MTczODIgMS40MUw2Ljg2NzM4IDcuNDFMMTIuODE3NCAxLjQxWicgZmlsbD0nJTIzNEY0RjRGJy8lM0UlM0Mvc3ZnJTNFJTBBXCIpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi14OiA5MCU7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi15OiAyMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMjVweCAxMHB4IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNhcmQtY29udGVudC1ncmlkIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMzBweDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMWZyIGF1dG87XHJcbn1cclxuXHJcbi5mbGV4LXJvdyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmEtcmV2aWV3LWFwcGwtaW1nLXdycCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uYS1yZXZpZXctYXBwbC1pbWctd3JwIGltZyB7XHJcblx0bWluLXdpZHRoOiA4OHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRiYWNrZ3JvdW5kOiAjZjdmN2Y5O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzE7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbC5vbmhvbGQge1xyXG5cdC8qIGNvbG9yOiAjN2E2MDBmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmYmM0MWY7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTEsIDE5NiwgMzEsIDAuMSk7ICovXHJcblx0cGFkZGluZy1sZWZ0OiAzNnB4O1xyXG59XHJcblxyXG4uc3RhdHVzLXBpbGwub25ob2xkOjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdHRvcDogMTNweDtcclxuXHRsZWZ0OiAxOHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZmJjNDFmO1xyXG59XHJcblxyXG4uc3RhdHVzLXBpbGwub25ob2xkLFxyXG4uc3RhdHVzLXBpbGwucmVqZWN0ZWQsXHJcbi5zdGF0dXMtcGlsbC5jb21wbGV0ZWQge1xyXG5cdHBhZGRpbmctbGVmdDogMzZweDtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsLnJlamVjdGVkOjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdHRvcDogMTNweDtcclxuXHRsZWZ0OiAxNnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZjg0ODNkO1xyXG59XHJcblxyXG4uc3RhdHVzLXBpbGwuY29tcGxldGVkOjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdHRvcDogMTNweDtcclxuXHRsZWZ0OiAxOHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjMTljOGE2O1xyXG59XHJcblxyXG4uZy1kYW5nZXItY2xyIHtcclxuXHRjb2xvcjogI2Y4NDgzZDtcclxufVxyXG4uZy1kYW5nZXItYmcge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmODQ4M2Q7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/provider/dashboard/components/application-item/application-item.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/provider/dashboard/components/application-item/application-item.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ApplicationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationItemComponent", function() { return ApplicationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dashboardmodule.service */ "./src/app/provider/dashboard/dashboardmodule.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ApplicationItemComponent = class ApplicationItemComponent {
    constructor(_dash, toastr) {
        this._dash = _dash;
        this.toastr = toastr;
        this.onApplicationDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
    }
    ngOnInit() { }
    trashApplication() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.deleteLoading = true;
            let resp = yield this._dash.deleteApplication(this.applicationData.id);
            $(`#deleteSolution${this.applicationData.id}`).modal("hide");
            this.toastr.success("", "Application deleted successfully");
            this.onApplicationDelete.emit(resp);
            this.deleteLoading = false;
        });
    }
};
ApplicationItemComponent.ctorParameters = () => [
    { type: _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_3__["DashboardmoduleService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ApplicationItemComponent.prototype, "applicationData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ApplicationItemComponent.prototype, "onApplicationDelete", void 0);
ApplicationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "application-item",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./application-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/application-item/application-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./application-item.component.css */ "./src/app/provider/dashboard/components/application-item/application-item.component.css")).default]
    })
], ApplicationItemComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/components/eoi-card/eoi-card.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/provider/dashboard/components/eoi-card/eoi-card.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n.card-content {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.card-content-grid {\r\n\tdisplay: grid;\r\n\tgrid-column-gap: 30px;\r\n\tgrid-template-columns: 3fr 4fr;\r\n}\r\n.flex-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.a-review-appl-img-wrp {\r\n\tmargin-right: 25px;\r\n}\r\n.a-review-appl-img-wrp img {\r\n\tmin-width: 88px;\r\n\tborder-radius: 6px;\r\n}\r\n.proposal-btn {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 12px 30px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid #acb1c1;\r\n\tborder-radius: 100px;\r\n\tcursor: pointer;\r\n}\r\n.proposal-btn svg {\r\n\tmargin-left: 8px;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tvertical-align: middle;\r\n}\r\n.eoi-modal .modal-content {\r\n\tpadding: 28px;\r\n}\r\n.eoi-author {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\tmargin-bottom: 18px;\r\n}\r\n.eoi-author .profile img {\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\tborder-radius: 50%;\r\n}\r\n.name-content {\r\n\tmargin-left: 18px;\r\n}\r\n.name-content .name {\r\n\tdisplay: block;\r\n\tcolor: #091c3d;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n}\r\n.name-content span {\r\n\tcolor: #828282;\r\n\tfont-size: 14px;\r\n}\r\n.name-content .city {\r\n\tdisplay: inline-block;\r\n\tbackground: #2d9851;\r\n\tcolor: #fff;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tpadding: 3px 8px;\r\n\tborder-radius: 6px;\r\n\tmargin-left: 8px;\r\n}\r\n.close {\r\n\tpadding: 0px 6px;\r\n\tborder: 2px solid;\r\n\tfont-size: 30px;\r\n\tborder-radius: 4px;\r\n}\r\n.main-title {\r\n\tfont-size: 20px;\r\n\tcolor: #091c3d;\r\n\tfont-weight: 500;\r\n}\r\n.sub-title {\r\n\tcolor: #091c3d;\r\n\tfont-size: 16px;\r\n}\r\n.content {\r\n\tcolor: #828282;\r\n\tfont-size: 14px;\r\n\tmargin-bottom: 16px;\r\n}\r\nhr {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL2NvbXBvbmVudHMvZW9pLWNhcmQvZW9pLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1Q7Q0FDQyxzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLHVTQUF1UztDQUN2Uyw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQix1Q0FBdUM7QUFDeEM7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkIseUJBQThCO1NBQTlCLDhCQUE4QjtBQUMvQjtBQUVBO0NBQ0MsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQiw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkIseUJBQThCO1NBQTlCLDhCQUE4QjtBQUMvQjtBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsb0JBQW9CO0NBQ3BCLGVBQWU7QUFDaEI7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsWUFBWTtDQUNaLHNCQUFzQjtBQUN2QjtBQUVBO0NBQ0MsYUFBYTtBQUNkO0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsY0FBYztDQUNkLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtBQUNoQjtBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7QUFDaEI7QUFFQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCO0FBRUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2Rhc2hib2FyZC9jb21wb25lbnRzL2VvaS1jYXJkL2VvaS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDYXJkICovXHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLXdycCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLWZvb3RlciB7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgxNzIsIDE3NywgMTkzLCAwLjEpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzE7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxMycgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgMTMgOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEyLjgxNzQgMS40MUwxMS40MTkxIC02LjcxMzZlLTA4TDYuODY3MzggNC41OEwyLjMxNTYzIC01LjA0MjM0ZS0wN0wwLjkxNzM4MiAxLjQxTDYuODY3MzggNy40MUwxMi44MTc0IDEuNDFaJyBmaWxsPSclMjM0RjRGNEYnLyUzRSUzQy9zdmclM0UlMEFcIik7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDkwJTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDIwcHg7XHJcblx0cGFkZGluZzogMTBweCAyNXB4IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50LWdyaWQge1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC1jb2x1bW4tZ2FwOiAzMHB4O1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDRmcjtcclxufVxyXG5cclxuLmZsZXgtcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYS1yZXZpZXctYXBwbC1pbWctd3JwIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5hLXJldmlldy1hcHBsLWltZy13cnAgaW1nIHtcclxuXHRtaW4td2lkdGg6IDg4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4ucHJvcG9zYWwtYnRuIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDEycHggMzBweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRiYWNrZ3JvdW5kOiAjZjdmN2Y5O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzE7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvcG9zYWwtYnRuIHN2ZyB7XHJcblx0bWFyZ2luLWxlZnQ6IDhweDtcclxuXHR3aWR0aDogMjBweDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmVvaS1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcblx0cGFkZGluZzogMjhweDtcclxufVxyXG5cclxuLmVvaS1hdXRob3Ige1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4uZW9pLWF1dGhvciAucHJvZmlsZSBpbWcge1xyXG5cdHdpZHRoOiA2MHB4O1xyXG5cdGhlaWdodDogNjBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5uYW1lLWNvbnRlbnQge1xyXG5cdG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG59XHJcblxyXG4ubmFtZS1jb250ZW50IC5uYW1lIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRjb2xvcjogIzA5MWMzZDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm5hbWUtY29udGVudCBzcGFuIHtcclxuXHRjb2xvcjogIzgyODI4MjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5uYW1lLWNvbnRlbnQgLmNpdHkge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRiYWNrZ3JvdW5kOiAjMmQ5ODUxO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdHBhZGRpbmc6IDNweCA4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcblx0cGFkZGluZzogMHB4IDZweDtcclxuXHRib3JkZXI6IDJweCBzb2xpZDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ubWFpbi10aXRsZSB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGNvbG9yOiAjMDkxYzNkO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG5cdGNvbG9yOiAjMDkxYzNkO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG5cdGNvbG9yOiAjODI4MjgyO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5ociB7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/provider/dashboard/components/eoi-card/eoi-card.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/provider/dashboard/components/eoi-card/eoi-card.component.ts ***!
  \******************************************************************************/
/*! exports provided: EoiCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EoiCardComponent", function() { return EoiCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");



let EoiCardComponent = class EoiCardComponent {
    constructor() {
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EoiCardComponent.prototype, "eoiData", void 0);
EoiCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "eoi-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eoi-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/eoi-card/eoi-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eoi-card.component.css */ "./src/app/provider/dashboard/components/eoi-card/eoi-card.component.css")).default]
    })
], EoiCardComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/components/loading-application-card/loading-application-card.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/provider/dashboard/components/loading-application-card/loading-application-card.component.css ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL2NvbXBvbmVudHMvbG9hZGluZy1hcHBsaWNhdGlvbi1jYXJkL2xvYWRpbmctYXBwbGljYXRpb24tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7QUFDVDtDQUNDLHNCQUFzQjtDQUN0Qix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxvQ0FBb0M7Q0FDcEMseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixvQkFBb0I7QUFDckI7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsdVNBQXVTO0NBQ3ZTLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsMkJBQTJCO0NBQzNCLHVDQUF1QztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2Rhc2hib2FyZC9jb21wb25lbnRzL2xvYWRpbmctYXBwbGljYXRpb24tY2FyZC9sb2FkaW5nLWFwcGxpY2F0aW9uLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENhcmQgKi9cclxuLmEtcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQtd3JwIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmEtcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQtZm9vdGVyIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2FjYjFjMTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzEzJyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCAxMyA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTIuODE3NCAxLjQxTDExLjQxOTEgLTYuNzEzNmUtMDhMNi44NjczOCA0LjU4TDIuMzE1NjMgLTUuMDQyMzRlLTA3TDAuOTE3MzgyIDEuNDFMNi44NjczOCA3LjQxTDEyLjgxNzQgMS40MVonIGZpbGw9JyUyMzRGNEY0RicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teDogOTAlO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teTogMjBweDtcclxuXHRwYWRkaW5nOiAxMHB4IDI1cHggMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/provider/dashboard/components/loading-application-card/loading-application-card.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/provider/dashboard/components/loading-application-card/loading-application-card.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: LoadingApplicationCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingApplicationCardComponent", function() { return LoadingApplicationCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingApplicationCardComponent = class LoadingApplicationCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadingApplicationCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'loading-application-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading-application-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/loading-application-card/loading-application-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading-application-card.component.css */ "./src/app/provider/dashboard/components/loading-application-card/loading-application-card.component.css")).default]
    })
], LoadingApplicationCardComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/components/pilot-card/pilot-card.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/provider/dashboard/components/pilot-card/pilot-card.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n.card-content {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.card-content-grid {\r\n\tdisplay: grid;\r\n\tgrid-column-gap: 30px;\r\n\tgrid-template-columns: 3fr 2fr 1fr;\r\n}\r\n.flex-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.a-review-appl-img-wrp {\r\n\tmargin-right: 25px;\r\n}\r\n.a-review-appl-img-wrp img {\r\n\tmin-width: 88px;\r\n\tborder-radius: 6px;\r\n}\r\n.a-col2-title {\r\n\tbackground-color: white;\r\n\tdisplay: inline-block;\r\n}\r\n.status-pill {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 10px 30px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid #acb1c1;\r\n\tborder-radius: 100px;\r\n\tpadding-left: 36px;\r\n}\r\n/* .status-pill.prepilot {\r\n\tcolor: #7a600f;\r\n\tborder: 1px solid #fbc41f;\r\n\tbackground: rgba(251, 196, 31, 0.1);\r\n\tpadding-left: 36px;\r\n} */\r\n.status-pill.ongoing::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #fbc41f;\r\n}\r\n.status-pill.completed::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #19c8a6;\r\n}\r\n.status-pill.yet-to-start::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #acb1c1;\r\n}\r\n.pilot-modal .modal-dialog {\r\n\twidth: 950px;\r\n}\r\n.pilot-modal .modal-content {\r\n\tpadding: 36px 36px;\r\n\tbox-shadow: none;\r\n\tborder: none;\r\n}\r\n.pilot-modal .close {\r\n\tfont-size: 23px !important;\r\n\tposition: absolute;\r\n\tright: 30px;\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid;\r\n\tz-index: 10;\r\n\tpadding: 2px 6px;\r\n\tborder-radius: 6px;\r\n}\r\n.pilot-doc {\r\n\tmargin-top: 8px;\r\n\tpadding: 12px 15px;\r\n\tdisplay: inline-block;\r\n\tfont-size: 14px;\r\n\tcolor: var(--black5);\r\n\tborder: 1px solid var(--grey-clr);\r\n\tborder-radius: 10px;\r\n}\r\n.pilot-doc span:nth-child(1) {\r\n\tpadding-right: 8px;\r\n\ttext-decoration: underline;\r\n}\r\n.pilot-doc span:nth-child(2) {\r\n\tfont-weight: 600;\r\n\tcursor: pointer;\r\n}\r\n.reports-wrp {\r\n\tpadding: 10px;\r\n\tborder: 1px solid var(--grey-clr);\r\n\tborder-radius: 10px;\r\n}\r\n.reports-wrp .lable {\r\n\tmargin-top: -20px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.reports-wrp .lable > span {\r\n\tbackground-color: var(--white);\r\n\tfont-size: 16px;\r\n\tcolor: var(--grey-clr);\r\n\tfont-weight: 500;\r\n\tpadding: 0 6px;\r\n}\r\n.report-downloads {\r\n\tmin-height: 500px;\r\n}\r\n.report-download-item {\r\n\tpadding: 15px;\r\n\tborder: 1px solid var(--primary-clr);\r\n\tborder-radius: 6px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.report-download-item .row .col-sm-6:nth-child(1) span {\r\n\tfont-size: 14px;\r\n\tcolor: var(--black6);\r\n\ttext-decoration: underline;\r\n\tmin-height: 2.5rem;\r\n\tdisplay: block;\r\n}\r\n.report-download-item .row .col-sm-6:nth-child(2) span {\r\n\tfont-size: 14px;\r\n\tcolor: var(--black5);\r\n\tdisplay: block;\r\n\ttext-align: right;\r\n\tfont-weight: 500;\r\n\tcursor: pointer;\r\n}\r\n.pilot-duration {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n}\r\n.pilot-duration svg {\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tmargin-right: 6px;\r\n}\r\n/* Modal css */\r\n.a-cnt1-flex-item {\r\n\twidth: 60%;\r\n}\r\n.a-cnt2-flex-item {\r\n\twidth: 40%;\r\n}\r\nlabel {\r\n\tfont-size: 0.631rem;\r\n\tline-height: 1.6;\r\n}\r\nlabel .field-desp {\r\n\topacity: 0.7;\r\n\tfont-weight: 300;\r\n}\r\n.a-budget-wrp {\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-budget-total-wrp {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\nhr {\r\n\tborder-top-color: #000000 !important;\r\n}\r\n.a-col2-title {\r\n\tcolor: #bdbdbd;\r\n}\r\n.a-s1-cnt-wrp {\r\n\tborder: 1.03191px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 10.3191px;\r\n}\r\n.a-sub-cnt-wrp {\r\n\tborder: 1.03191px solid #0d439f;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 6.19149px;\r\n}\r\n.a-download-file-btn {\r\n\tborder: 1px solid #999999 !important;\r\n}\r\n.a-s1-cnt-wrp {\r\n\tmargin-top: -11px;\r\n}\r\n.a-col2-title-wrp {\r\n\tbackground-color: white;\r\n\tmargin-left: 14px;\r\n}\r\n.a-ongoing {\r\n\tcolor: #947412;\r\n\tbackground: rgba(251, 196, 31, 0.1) !important;\r\n\tborder: 1px solid #fbc41f !important;\r\n}\r\n.a-yet-to-start {\r\n\tbackground: rgba(172, 177, 193, 0.1) !important;\r\n\tborder: 1px solid #acb1c1 !important;\r\n}\r\n.a-align-items-stretch {\r\n\t-webkit-box-align: stretch !important;\r\n\t        align-items: stretch !important;\r\n}\r\n.a-budget-values {\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n\twidth: 89px;\r\n}\r\n.a-modal-buget-flex-item1 {\r\n\twidth: 60%;\r\n}\r\n.a-modal-buget-flex-item2 {\r\n\twidth: 40%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL2NvbXBvbmVudHMvcGlsb3QtY2FyZC9waWxvdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNUO0NBQ0Msc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQix1U0FBdVM7Q0FDdlMsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IsdUNBQXVDO0FBQ3hDO0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsa0NBQWtDO0FBQ25DO0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLG9CQUFvQjtDQUNwQixrQkFBa0I7QUFDbkI7QUFFQTs7Ozs7R0FLRztBQUVIO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsWUFBWTtBQUNiO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFlBQVk7QUFDYjtBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLG9CQUFvQjtDQUNwQixpQ0FBaUM7Q0FDakMsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsMEJBQTBCO0FBQzNCO0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsYUFBYTtDQUNiLGlDQUFpQztDQUNqQyxtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsYUFBYTtDQUNiLG9DQUFvQztDQUNwQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FDbEIsY0FBYztBQUNmO0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtBQUNkO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGlCQUFpQjtBQUNsQjtBQUVBLGNBQWM7QUFDZDtDQUNDLFVBQVU7QUFDWDtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsK0JBQStCO0NBQy9CLHNCQUFzQjtDQUN0Qix3QkFBd0I7QUFDekI7QUFDQTtDQUNDLCtCQUErQjtDQUMvQixzQkFBc0I7Q0FDdEIsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsY0FBYztDQUNkLDhDQUE4QztDQUM5QyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLCtDQUErQztDQUMvQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUVDLHFDQUErQjtTQUEvQiwrQkFBK0I7QUFDaEM7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxVQUFVO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9wcm92aWRlci9kYXNoYm9hcmQvY29tcG9uZW50cy9waWxvdC1jYXJkL3BpbG90LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENhcmQgKi9cclxuLmEtcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQtd3JwIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmEtcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQtZm9vdGVyIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2FjYjFjMTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzEzJyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCAxMyA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTIuODE3NCAxLjQxTDExLjQxOTEgLTYuNzEzNmUtMDhMNi44NjczOCA0LjU4TDIuMzE1NjMgLTUuMDQyMzRlLTA3TDAuOTE3MzgyIDEuNDFMNi44NjczOCA3LjQxTDEyLjgxNzQgMS40MVonIGZpbGw9JyUyMzRGNEY0RicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teDogOTAlO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teTogMjBweDtcclxuXHRwYWRkaW5nOiAxMHB4IDI1cHggMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQtZ3JpZCB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLWNvbHVtbi1nYXA6IDMwcHg7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyIDFmcjtcclxufVxyXG5cclxuLmZsZXgtcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYS1yZXZpZXctYXBwbC1pbWctd3JwIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5hLXJldmlldy1hcHBsLWltZy13cnAgaW1nIHtcclxuXHRtaW4td2lkdGg6IDg4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uYS1jb2wyLXRpdGxlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAxMHB4IDMwcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0YmFja2dyb3VuZDogI2Y3ZjdmOTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMzZweDtcclxufVxyXG5cclxuLyogLnN0YXR1cy1waWxsLnByZXBpbG90IHtcclxuXHRjb2xvcjogIzdhNjAwZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmJjNDFmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTYsIDMxLCAwLjEpO1xyXG5cdHBhZGRpbmctbGVmdDogMzZweDtcclxufSAqL1xyXG5cclxuLnN0YXR1cy1waWxsLm9uZ29pbmc6OmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTBweDtcclxuXHRoZWlnaHQ6IDEwcHg7XHJcblx0dG9wOiAxM3B4O1xyXG5cdGxlZnQ6IDE4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJhY2tncm91bmQ6ICNmYmM0MWY7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbC5jb21wbGV0ZWQ6OmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTBweDtcclxuXHRoZWlnaHQ6IDEwcHg7XHJcblx0dG9wOiAxM3B4O1xyXG5cdGxlZnQ6IDE4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJhY2tncm91bmQ6ICMxOWM4YTY7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbC55ZXQtdG8tc3RhcnQ6OmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTBweDtcclxuXHRoZWlnaHQ6IDEwcHg7XHJcblx0dG9wOiAxM3B4O1xyXG5cdGxlZnQ6IDE4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJhY2tncm91bmQ6ICNhY2IxYzE7XHJcbn1cclxuXHJcbi5waWxvdC1tb2RhbCAubW9kYWwtZGlhbG9nIHtcclxuXHR3aWR0aDogOTUwcHg7XHJcbn1cclxuXHJcbi5waWxvdC1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcblx0cGFkZGluZzogMzZweCAzNnB4O1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucGlsb3QtbW9kYWwgLmNsb3NlIHtcclxuXHRmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDMwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkO1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdHBhZGRpbmc6IDJweCA2cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4ucGlsb3QtZG9jIHtcclxuXHRtYXJnaW4tdG9wOiA4cHg7XHJcblx0cGFkZGluZzogMTJweCAxNXB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y29sb3I6IHZhcigtLWJsYWNrNSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1jbHIpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5waWxvdC1kb2Mgc3BhbjpudGgtY2hpbGQoMSkge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDhweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnBpbG90LWRvYyBzcGFuOm50aC1jaGlsZCgyKSB7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZXBvcnRzLXdycCB7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWNscik7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnJlcG9ydHMtd3JwIC5sYWJsZSB7XHJcblx0bWFyZ2luLXRvcDogLTIwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJlcG9ydHMtd3JwIC5sYWJsZSA+IHNwYW4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Y29sb3I6IHZhcigtLWdyZXktY2xyKTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdHBhZGRpbmc6IDAgNnB4O1xyXG59XHJcblxyXG4ucmVwb3J0LWRvd25sb2FkcyB7XHJcblx0bWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5yZXBvcnQtZG93bmxvYWQtaXRlbSB7XHJcblx0cGFkZGluZzogMTVweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNscik7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5yZXBvcnQtZG93bmxvYWQtaXRlbSAucm93IC5jb2wtc20tNjpudGgtY2hpbGQoMSkgc3BhbiB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGNvbG9yOiB2YXIoLS1ibGFjazYpO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdG1pbi1oZWlnaHQ6IDIuNXJlbTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnJlcG9ydC1kb3dubG9hZC1pdGVtIC5yb3cgLmNvbC1zbS02Om50aC1jaGlsZCgyKSBzcGFuIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y29sb3I6IHZhcigtLWJsYWNrNSk7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5waWxvdC1kdXJhdGlvbiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnBpbG90LWR1cmF0aW9uIHN2ZyB7XHJcblx0d2lkdGg6IDI1cHg7XHJcblx0aGVpZ2h0OiAyNXB4O1xyXG5cdG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBjc3MgKi9cclxuLmEtY250MS1mbGV4LWl0ZW0ge1xyXG5cdHdpZHRoOiA2MCU7XHJcbn1cclxuLmEtY250Mi1mbGV4LWl0ZW0ge1xyXG5cdHdpZHRoOiA0MCU7XHJcbn1cclxubGFiZWwge1xyXG5cdGZvbnQtc2l6ZTogMC42MzFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxubGFiZWwgLmZpZWxkLWRlc3Age1xyXG5cdG9wYWNpdHk6IDAuNztcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYS1idWRnZXQtd3JwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hLWJ1ZGdldC10b3RhbC13cnAge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbmhyIHtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtY29sMi10aXRsZSB7XHJcblx0Y29sb3I6ICNiZGJkYmQ7XHJcbn1cclxuLmEtczEtY250LXdycCB7XHJcblx0Ym9yZGVyOiAxLjAzMTkxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwLjMxOTFweDtcclxufVxyXG4uYS1zdWItY250LXdycCB7XHJcblx0Ym9yZGVyOiAxLjAzMTkxcHggc29saWQgIzBkNDM5ZjtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDYuMTkxNDlweDtcclxufVxyXG4uYS1kb3dubG9hZC1maWxlLWJ0biB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTk5OSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXMxLWNudC13cnAge1xyXG5cdG1hcmdpbi10b3A6IC0xMXB4O1xyXG59XHJcbi5hLWNvbDItdGl0bGUtd3JwIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRtYXJnaW4tbGVmdDogMTRweDtcclxufVxyXG4uYS1vbmdvaW5nIHtcclxuXHRjb2xvcjogIzk0NzQxMjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTk2LCAzMSwgMC4xKSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmYmM0MWYgIWltcG9ydGFudDtcclxufVxyXG4uYS15ZXQtdG8tc3RhcnQge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzEgIWltcG9ydGFudDtcclxufVxyXG4uYS1hbGlnbi1pdGVtcy1zdHJldGNoIHtcclxuXHQtbXMtZmxleC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcclxufVxyXG4uYS1idWRnZXQtdmFsdWVzIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHdpZHRoOiA4OXB4O1xyXG59XHJcbi5hLW1vZGFsLWJ1Z2V0LWZsZXgtaXRlbTEge1xyXG5cdHdpZHRoOiA2MCU7XHJcbn1cclxuLmEtbW9kYWwtYnVnZXQtZmxleC1pdGVtMiB7XHJcblx0d2lkdGg6IDQwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/provider/dashboard/components/pilot-card/pilot-card.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/provider/dashboard/components/pilot-card/pilot-card.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PilotCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilotCardComponent", function() { return PilotCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_seeker_challenge_dashboard_dashboardmain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/seeker/challenge-dashboard/dashboardmain.service */ "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");





let PilotCardComponent = class PilotCardComponent {
    constructor(_dash, toastr) {
        this._dash = _dash;
        this.toastr = toastr;
        this.onStatusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url;
    }
    ngOnInit() {
        // console.log(this.pilotData);
    }
    extractFileName(path) {
        let filename = path.replace(/^.*[\\\/]/, "");
        return filename;
    }
};
PilotCardComponent.ctorParameters = () => [
    { type: src_app_seeker_challenge_dashboard_dashboardmain_service__WEBPACK_IMPORTED_MODULE_3__["DashboardmainService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PilotCardComponent.prototype, "pilotData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PilotCardComponent.prototype, "onStatusChange", void 0);
PilotCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "pilot-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pilot-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/pilot-card/pilot-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pilot-card.component.css */ "./src/app/provider/dashboard/components/pilot-card/pilot-card.component.css")).default]
    })
], PilotCardComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/components/proposal-card/proposal-card.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/provider/dashboard/components/proposal-card/proposal-card.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n.card-content {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.card-content-grid {\r\n\tdisplay: grid;\r\n\tgrid-column-gap: 30px;\r\n\tgrid-template-columns: 3fr 2fr 1fr;\r\n}\r\n.flex-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.a-review-appl-img-wrp {\r\n\tmargin-right: 25px;\r\n}\r\n.a-review-appl-img-wrp img {\r\n\tmin-width: 88px;\r\n\tborder-radius: 6px;\r\n}\r\n.status-pill {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 10px 30px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid #acb1c1;\r\n\tborder-radius: 100px;\r\n\tpadding-left: 36px;\r\n}\r\n/* .status-pill.prepilot {\r\n\tcolor: #7a600f;\r\n\tborder: 1px solid #fbc41f;\r\n\tbackground: rgba(251, 196, 31, 0.1);\r\n\tpadding-left: 36px;\r\n} */\r\n.status-pill.prepilot::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #fbc41f;\r\n}\r\n.status-pill.pilotready::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #19c8a6;\r\n}\r\n.pilot-modal .modal-dialog {\r\n\twidth: 950px;\r\n}\r\n.pilot-modal .modal-content {\r\n\tpadding: 36px 36px;\r\n\tbox-shadow: none;\r\n\tborder: none;\r\n}\r\n.pilot-modal .close {\r\n\tfont-size: 23px !important;\r\n\tposition: absolute;\r\n\tright: 30px;\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid;\r\n\tz-index: 10;\r\n\tpadding: 2px 6px;\r\n\tborder-radius: 6px;\r\n}\r\n.pilot-doc {\r\n\tmargin-top: 8px;\r\n\tpadding: 12px 15px;\r\n\tdisplay: inline-block;\r\n\tfont-size: 14px;\r\n\tcolor: var(--black5);\r\n\tborder: 1px solid var(--grey-clr);\r\n\tborder-radius: 10px;\r\n}\r\n.pilot-doc span:nth-child(1) {\r\n\tpadding-right: 8px;\r\n\ttext-decoration: underline;\r\n}\r\n.pilot-doc span:nth-child(2) {\r\n\tfont-weight: 600;\r\n\tcursor: pointer;\r\n}\r\n.reports-wrp {\r\n\tpadding: 10px;\r\n\tborder: 1px solid var(--grey-clr);\r\n\tborder-radius: 10px;\r\n}\r\n.reports-wrp .lable {\r\n\tmargin-top: -20px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.reports-wrp .lable > span {\r\n\tbackground-color: var(--white);\r\n\tfont-size: 16px;\r\n\tcolor: var(--grey-clr);\r\n\tfont-weight: 500;\r\n\tpadding: 0 6px;\r\n}\r\n.report-downloads {\r\n\tmin-height: 500px;\r\n}\r\n.report-download-item {\r\n\tpadding: 15px;\r\n\tborder: 1px solid var(--primary-clr);\r\n\tborder-radius: 6px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.report-download-item .row .col-sm-6:nth-child(1) span {\r\n\tfont-size: 14px;\r\n\tcolor: var(--black6);\r\n\ttext-decoration: underline;\r\n\tmin-height: 2.5rem;\r\n\tdisplay: block;\r\n}\r\n.report-download-item .row .col-sm-6:nth-child(2) span {\r\n\tfont-size: 14px;\r\n\tcolor: var(--black5);\r\n\tdisplay: block;\r\n\ttext-align: right;\r\n\tfont-weight: 500;\r\n\tcursor: pointer;\r\n}\r\n.pilot-duration {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n}\r\n.pilot-duration svg {\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tmargin-right: 6px;\r\n}\r\n/* Modal css */\r\n.a-cnt1-flex-item {\r\n\twidth: 60%;\r\n}\r\n.a-cnt2-flex-item {\r\n\twidth: 40%;\r\n}\r\nlabel {\r\n\tfont-size: 0.631rem;\r\n\tline-height: 1.6;\r\n}\r\nlabel .field-desp {\r\n\topacity: 0.7;\r\n\tfont-weight: 300;\r\n}\r\n.a-budget-wrp {\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-budget-total-wrp {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\nhr {\r\n\tborder-top-color: #000000 !important;\r\n}\r\n.a-col2-title {\r\n\tcolor: #bdbdbd;\r\n}\r\n.a-s1-cnt-wrp {\r\n\tborder: 1.03191px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 10.3191px;\r\n}\r\n.a-sub-cnt-wrp {\r\n\tborder: 1.03191px solid #0d439f;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 6.19149px;\r\n}\r\n.a-download-file-btn {\r\n\tborder: 1px solid #999999 !important;\r\n}\r\n.a-s1-cnt-wrp {\r\n\tmargin-top: -11px;\r\n}\r\n.a-col2-title-wrp {\r\n\tbackground-color: white;\r\n\tmargin-left: 14px;\r\n}\r\n.a-ongoing {\r\n\tcolor: #947412;\r\n\tbackground: rgba(251, 196, 31, 0.1) !important;\r\n\tborder: 1px solid #fbc41f !important;\r\n}\r\n.a-yet-to-start {\r\n\tbackground: rgba(172, 177, 193, 0.1) !important;\r\n\tborder: 1px solid #acb1c1 !important;\r\n}\r\n.a-align-items-stretch {\r\n\t-webkit-box-align: stretch !important;\r\n\t        align-items: stretch !important;\r\n}\r\n.a-col2-title-wrp .a-col2-title {\r\n\tposition: relative;\r\n\tz-index: 10;\r\n\tbackground: #fff;\r\n\tdisplay: inline-block;\r\n}\r\n.close {\r\n\tpadding: 2px 6px;\r\n\tborder: 1px solid !important;\r\n\tborder-radius: 4px;\r\n}\r\n.edit {\r\n\tpadding: 3px 6px;\r\n\tborder: 1px solid #b6b4b4 !important ;\r\n\tborder-radius: 4px;\r\n\tfont-size: 16px;\r\n\tmargin-right: 8px;\r\n\tvertical-align: bottom;\r\n\tcolor: #b6b4b4;\r\n\tcursor: pointer;\r\n}\r\n.edit i {\r\n\tmargin-right: 4px;\r\n\tfont-size: 14px;\r\n}\r\n.a-budget-values {\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n\twidth: 89px;\r\n}\r\n.a-modal-buget-flex-item1 {\r\n\twidth: 60%;\r\n}\r\n.a-modal-buget-flex-item2 {\r\n\twidth: 40%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL2NvbXBvbmVudHMvcHJvcG9zYWwtY2FyZC9wcm9wb3NhbC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNUO0NBQ0Msc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQix1U0FBdVM7Q0FDdlMsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IsdUNBQXVDO0FBQ3hDO0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsa0NBQWtDO0FBQ25DO0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLG9CQUFvQjtDQUNwQixrQkFBa0I7QUFDbkI7QUFFQTs7Ozs7R0FLRztBQUVIO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsWUFBWTtBQUNiO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFlBQVk7QUFDYjtBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLG9CQUFvQjtDQUNwQixpQ0FBaUM7Q0FDakMsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsMEJBQTBCO0FBQzNCO0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsYUFBYTtDQUNiLGlDQUFpQztDQUNqQyxtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsYUFBYTtDQUNiLG9DQUFvQztDQUNwQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FDbEIsY0FBYztBQUNmO0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtBQUNkO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGlCQUFpQjtBQUNsQjtBQUVBLGNBQWM7QUFDZDtDQUNDLFVBQVU7QUFDWDtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsK0JBQStCO0NBQy9CLHNCQUFzQjtDQUN0Qix3QkFBd0I7QUFDekI7QUFDQTtDQUNDLCtCQUErQjtDQUMvQixzQkFBc0I7Q0FDdEIsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsY0FBYztDQUNkLDhDQUE4QztDQUM5QyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLCtDQUErQztDQUMvQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUVDLHFDQUErQjtTQUEvQiwrQkFBK0I7QUFDaEM7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLDRCQUE0QjtDQUM1QixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixxQ0FBcUM7Q0FDckMsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsc0JBQXNCO0NBQ3RCLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7QUFDQTtDQUNDLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2Rhc2hib2FyZC9jb21wb25lbnRzL3Byb3Bvc2FsLWNhcmQvcHJvcG9zYWwtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2FyZCAqL1xyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC13cnAge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC1mb290ZXIge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTMnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDEzIDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xMi44MTc0IDEuNDFMMTEuNDE5MSAtNi43MTM2ZS0wOEw2Ljg2NzM4IDQuNThMMi4zMTU2MyAtNS4wNDIzNGUtMDdMMC45MTczODIgMS40MUw2Ljg2NzM4IDcuNDFMMTIuODE3NCAxLjQxWicgZmlsbD0nJTIzNEY0RjRGJy8lM0UlM0Mvc3ZnJTNFJTBBXCIpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi14OiA5MCU7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi15OiAyMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMjVweCAxMHB4IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNhcmQtY29udGVudC1ncmlkIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMzBweDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnIgMWZyO1xyXG59XHJcblxyXG4uZmxleC1yb3cge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5hLXJldmlldy1hcHBsLWltZy13cnAge1xyXG5cdG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG5cclxuLmEtcmV2aWV3LWFwcGwtaW1nLXdycCBpbWcge1xyXG5cdG1pbi13aWR0aDogODhweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAxMHB4IDMwcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0YmFja2dyb3VuZDogI2Y3ZjdmOTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMzZweDtcclxufVxyXG5cclxuLyogLnN0YXR1cy1waWxsLnByZXBpbG90IHtcclxuXHRjb2xvcjogIzdhNjAwZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmJjNDFmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTYsIDMxLCAwLjEpO1xyXG5cdHBhZGRpbmctbGVmdDogMzZweDtcclxufSAqL1xyXG5cclxuLnN0YXR1cy1waWxsLnByZXBpbG90OjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdHRvcDogMTNweDtcclxuXHRsZWZ0OiAxOHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZmJjNDFmO1xyXG59XHJcblxyXG4uc3RhdHVzLXBpbGwucGlsb3RyZWFkeTo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMHB4O1xyXG5cdGhlaWdodDogMTBweDtcclxuXHR0b3A6IDEzcHg7XHJcblx0bGVmdDogMThweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZDogIzE5YzhhNjtcclxufVxyXG5cclxuLnBpbG90LW1vZGFsIC5tb2RhbC1kaWFsb2cge1xyXG5cdHdpZHRoOiA5NTBweDtcclxufVxyXG5cclxuLnBpbG90LW1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzNnB4IDM2cHg7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5waWxvdC1tb2RhbCAuY2xvc2Uge1xyXG5cdGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMzBweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Ym9yZGVyOiAxcHggc29saWQ7XHJcblx0ei1pbmRleDogMTA7XHJcblx0cGFkZGluZzogMnB4IDZweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5waWxvdC1kb2Mge1xyXG5cdG1hcmdpbi10b3A6IDhweDtcclxuXHRwYWRkaW5nOiAxMnB4IDE1cHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogdmFyKC0tYmxhY2s1KTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWNscik7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnBpbG90LWRvYyBzcGFuOm50aC1jaGlsZCgxKSB7XHJcblx0cGFkZGluZy1yaWdodDogOHB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ucGlsb3QtZG9jIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJlcG9ydHMtd3JwIHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktY2xyKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucmVwb3J0cy13cnAgLmxhYmxlIHtcclxuXHRtYXJnaW4tdG9wOiAtMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucmVwb3J0cy13cnAgLmxhYmxlID4gc3BhbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRjb2xvcjogdmFyKC0tZ3JleS1jbHIpO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0cGFkZGluZzogMCA2cHg7XHJcbn1cclxuXHJcbi5yZXBvcnQtZG93bmxvYWRzIHtcclxuXHRtaW4taGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLnJlcG9ydC1kb3dubG9hZC1pdGVtIHtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY2xyKTtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJlcG9ydC1kb3dubG9hZC1pdGVtIC5yb3cgLmNvbC1zbS02Om50aC1jaGlsZCgxKSBzcGFuIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y29sb3I6IHZhcigtLWJsYWNrNik7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0bWluLWhlaWdodDogMi41cmVtO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucmVwb3J0LWRvd25sb2FkLWl0ZW0gLnJvdyAuY29sLXNtLTY6bnRoLWNoaWxkKDIpIHNwYW4ge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogdmFyKC0tYmxhY2s1KTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBpbG90LWR1cmF0aW9uIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucGlsb3QtZHVyYXRpb24gc3ZnIHtcclxuXHR3aWR0aDogMjVweDtcclxuXHRoZWlnaHQ6IDI1cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi8qIE1vZGFsIGNzcyAqL1xyXG4uYS1jbnQxLWZsZXgtaXRlbSB7XHJcblx0d2lkdGg6IDYwJTtcclxufVxyXG4uYS1jbnQyLWZsZXgtaXRlbSB7XHJcblx0d2lkdGg6IDQwJTtcclxufVxyXG5cclxubGFiZWwge1xyXG5cdGZvbnQtc2l6ZTogMC42MzFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxubGFiZWwgLmZpZWxkLWRlc3Age1xyXG5cdG9wYWNpdHk6IDAuNztcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYS1idWRnZXQtd3JwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hLWJ1ZGdldC10b3RhbC13cnAge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbmhyIHtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtY29sMi10aXRsZSB7XHJcblx0Y29sb3I6ICNiZGJkYmQ7XHJcbn1cclxuLmEtczEtY250LXdycCB7XHJcblx0Ym9yZGVyOiAxLjAzMTkxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwLjMxOTFweDtcclxufVxyXG4uYS1zdWItY250LXdycCB7XHJcblx0Ym9yZGVyOiAxLjAzMTkxcHggc29saWQgIzBkNDM5ZjtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDYuMTkxNDlweDtcclxufVxyXG4uYS1kb3dubG9hZC1maWxlLWJ0biB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTk5OSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXMxLWNudC13cnAge1xyXG5cdG1hcmdpbi10b3A6IC0xMXB4O1xyXG59XHJcbi5hLWNvbDItdGl0bGUtd3JwIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRtYXJnaW4tbGVmdDogMTRweDtcclxufVxyXG4uYS1vbmdvaW5nIHtcclxuXHRjb2xvcjogIzk0NzQxMjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTk2LCAzMSwgMC4xKSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmYmM0MWYgIWltcG9ydGFudDtcclxufVxyXG4uYS15ZXQtdG8tc3RhcnQge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzEgIWltcG9ydGFudDtcclxufVxyXG4uYS1hbGlnbi1pdGVtcy1zdHJldGNoIHtcclxuXHQtbXMtZmxleC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmEtY29sMi10aXRsZS13cnAgLmEtY29sMi10aXRsZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG5cdHBhZGRpbmc6IDJweCA2cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuXHRwYWRkaW5nOiAzcHggNnB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNiNmI0YjQgIWltcG9ydGFudCA7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG5cdGNvbG9yOiAjYjZiNGI0O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmVkaXQgaSB7XHJcblx0bWFyZ2luLXJpZ2h0OiA0cHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5hLWJ1ZGdldC12YWx1ZXMge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0d2lkdGg6IDg5cHg7XHJcbn1cclxuLmEtbW9kYWwtYnVnZXQtZmxleC1pdGVtMSB7XHJcblx0d2lkdGg6IDYwJTtcclxufVxyXG4uYS1tb2RhbC1idWdldC1mbGV4LWl0ZW0yIHtcclxuXHR3aWR0aDogNDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/provider/dashboard/components/proposal-card/proposal-card.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/provider/dashboard/components/proposal-card/proposal-card.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProposalCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalCardComponent", function() { return ProposalCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProposalCardComponent = class ProposalCardComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
    }
    ngOnInit() { }
    extractFileName(path) {
        let filename = path.replace(/^.*[\\\/]/, "");
        return filename;
    }
    editProposal() {
        $(`#proposalModal_${this.proposalData.id}`).modal("hide");
        this.router.navigate([`${this.proposalData.id}/edit`], { relativeTo: this.route });
    }
};
ProposalCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProposalCardComponent.prototype, "proposalData", void 0);
ProposalCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "proposal-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./proposal-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/components/proposal-card/proposal-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./proposal-card.component.css */ "./src/app/provider/dashboard/components/proposal-card/proposal-card.component.css")).default]
    })
], ProposalCardComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/dashboard-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/provider/dashboard/dashboard-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/provider/dashboard/dashboard.component.ts");
/* harmony import */ var _screens_all_applications_all_applications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/all-applications/all-applications.component */ "./src/app/provider/dashboard/screens/all-applications/all-applications.component.ts");
/* harmony import */ var _screens_applications_applications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/applications/applications.component */ "./src/app/provider/dashboard/screens/applications/applications.component.ts");
/* harmony import */ var _screens_eois_eois_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/eois/eois.component */ "./src/app/provider/dashboard/screens/eois/eois.component.ts");
/* harmony import */ var _screens_pilots_pilots_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/pilots/pilots.component */ "./src/app/provider/dashboard/screens/pilots/pilots.component.ts");
/* harmony import */ var _screens_proposals_proposals_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/proposals/proposals.component */ "./src/app/provider/dashboard/screens/proposals/proposals.component.ts");
/* harmony import */ var _screens_pilot_proposal_pilot_proposal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/pilot-proposal/pilot-proposal.component */ "./src/app/provider/dashboard/screens/pilot-proposal/pilot-proposal.component.ts");
/* harmony import */ var _screens_application_individual_application_individual_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/application-individual/application-individual.component */ "./src/app/provider/dashboard/screens/application-individual/application-individual.component.ts");
/* harmony import */ var _screens_edit_application_edit_application_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screens/edit-application/edit-application.component */ "./src/app/provider/dashboard/screens/edit-application/edit-application.component.ts");
/* harmony import */ var _screens_edit_proposal_edit_proposal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./screens/edit-proposal/edit-proposal.component */ "./src/app/provider/dashboard/screens/edit-proposal/edit-proposal.component.ts");
/* harmony import */ var _screens_unsolicited_proposal_provider_unsolicited_proposal_provider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./screens/unsolicited-proposal-provider/unsolicited-proposal-provider.component */ "./src/app/provider/dashboard/screens/unsolicited-proposal-provider/unsolicited-proposal-provider.component.ts");














const routes = [
    {
        path: "",
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [
            {
                path: "",
                redirectTo: "all-applications",
                pathMatch: "full",
            },
            {
                path: "all-applications",
                component: _screens_all_applications_all_applications_component__WEBPACK_IMPORTED_MODULE_4__["AllApplicationsComponent"],
            },
            {
                path: "all-applications/:id/edit",
                component: _screens_edit_application_edit_application_component__WEBPACK_IMPORTED_MODULE_11__["EditApplicationComponent"],
            },
            {
                path: "all-applications/:id",
                component: _screens_application_individual_application_individual_component__WEBPACK_IMPORTED_MODULE_10__["ApplicationIndividualComponent"],
            },
            {
                path: "applications",
                component: _screens_applications_applications_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationsComponent"],
            },
            {
                path: "applications/:id",
                component: _screens_application_individual_application_individual_component__WEBPACK_IMPORTED_MODULE_10__["ApplicationIndividualComponent"],
            },
            {
                path: "applications/:id/edit",
                component: _screens_edit_application_edit_application_component__WEBPACK_IMPORTED_MODULE_11__["EditApplicationComponent"],
            },
            {
                path: "eois",
                component: _screens_eois_eois_component__WEBPACK_IMPORTED_MODULE_6__["EoisComponent"],
            },
            {
                path: "eois/create_proposal",
                component: _screens_pilot_proposal_pilot_proposal_component__WEBPACK_IMPORTED_MODULE_9__["PilotProposalComponent"],
            },
            {
                path: "pilots",
                component: _screens_pilots_pilots_component__WEBPACK_IMPORTED_MODULE_7__["PilotsComponent"],
            },
            {
                path: "proposals",
                component: _screens_proposals_proposals_component__WEBPACK_IMPORTED_MODULE_8__["ProposalsComponent"],
            },
            {
                path: "proposals/:id/edit",
                component: _screens_edit_proposal_edit_proposal_component__WEBPACK_IMPORTED_MODULE_12__["EditProposalComponent"],
            },
            {
                path: "unsolicited-proposals",
                component: _screens_unsolicited_proposal_provider_unsolicited_proposal_provider_component__WEBPACK_IMPORTED_MODULE_13__["UnsolicitedProposalProviderComponent"],
            },
        ],
    },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/provider/dashboard/dashboard.component.css":
/*!************************************************************!*\
  !*** ./src/app/provider/dashboard/dashboard.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard-wrp {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.nav-pills > li + li {\r\n\tmargin: 0px;\r\n}\r\n\r\n.nav-pills > li > a {\r\n\tborder-radius: 0px;\r\n}\r\n\r\n.dashboard-tab [data-toggle=\"pill\"] span {\r\n\tposition: relative;\r\n\tz-index: 10;\r\n}\r\n\r\n.dashboard-tab li a {\r\n\tbackground: #fcfcfc;\r\n\tborder: 1px solid #cdd0da !important;\r\n\tcolor: #000;\r\n\tpadding: 8px 30px;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n\r\n.dashboard-tab li:first-child a {\r\n\tborder-top-left-radius: 4px !important;\r\n\tborder-bottom-left-radius: 4px !important;\r\n}\r\n\r\n.dashboard-tab li:last-child a {\r\n\tborder-top-right-radius: 4px !important;\r\n\tborder-bottom-right-radius: 4px !important;\r\n\tborder-right: 1px !important;\r\n}\r\n\r\n.dashboard-tab li:not(:last-child) a::after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 5px;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tbackground: #fcfcfc;\r\n\tborder: 1px solid #cdd0da;\r\n\t-webkit-transform: rotate(47deg);\r\n\ttransform: rotate(45deg);\r\n\tleft: 80%;\r\n\tborder-bottom: 0px;\r\n\tborder-left: 0px;\r\n\tz-index: 2;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n\r\n.nav-pills > li.active a,\r\n.nav-pills > li.active a::after,\r\n.nav-pills li a:hover,\r\n.nav-pills li a:hover:after {\r\n\tbackground: #4f4f4f !important;\r\n\tborder-color: #4f4f4f !important;\r\n\tcolor: #fff !important;\r\n}\r\n\r\n.dashboard-tab li:nth-child(2) a::after {\r\n\tleft: 89%;\r\n}\r\n\r\n.dashboard-tab li:nth-child(3) a::after {\r\n\tleft: 82%;\r\n}\r\n\r\n.dashboard-tab li:nth-child(4) a::after {\r\n\tleft: 88%;\r\n}\r\n\r\n.dashboard-tab li:nth-child(5) a::after {\r\n\tleft: 84%;\r\n}\r\n\r\n.a-tab-wrp > ul > li > a {\r\n\tbackground: rgba(79, 79, 79, 0.1);\r\n\tborder-radius: 100px;\r\n\tcolor: #363636;\r\n\tpadding: 8px 20px;\r\n}\r\n\r\n.a-tab-wrp > ul > li {\r\n\tmargin-right: 20px;\r\n}\r\n\r\n.a-tab-wrp > ul > li.active > a {\r\n\tcolor: #fff;\r\n\tbackground: #4f4f4f;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixvQ0FBb0M7Q0FDcEMsV0FBVztDQUNYLGlCQUFpQjtDQUNqQiw0Q0FBb0M7Q0FBcEMsb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0Msc0NBQXNDO0NBQ3RDLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLHVDQUF1QztDQUN2QywwQ0FBMEM7Q0FDMUMsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixnQ0FBZ0M7Q0FDaEMsd0JBQXdCO0NBQ3hCLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDViw0Q0FBNEM7Q0FDNUMsb0NBQW9DO0FBQ3JDOztBQUVBOzs7O0NBSUMsOEJBQThCO0NBQzlCLGdDQUFnQztDQUNoQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBQ0E7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxpQ0FBaUM7Q0FDakMsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC13cnAge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubmF2LXBpbGxzID4gbGkgKyBsaSB7XHJcblx0bWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgPiBsaSA+IGEge1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC10YWIgW2RhdGEtdG9nZ2xlPVwicGlsbFwiXSBzcGFuIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtdGFiIGxpIGEge1xyXG5cdGJhY2tncm91bmQ6ICNmY2ZjZmM7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NkZDBkYSAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdHBhZGRpbmc6IDhweCAzMHB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhc2hib2FyZC10YWIgbGk6Zmlyc3QtY2hpbGQgYSB7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtdGFiIGxpOmxhc3QtY2hpbGQgYSB7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuXHRib3JkZXItcmlnaHQ6IDFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLXRhYiBsaTpub3QoOmxhc3QtY2hpbGQpIGE6OmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDVweDtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0YmFja2dyb3VuZDogI2ZjZmNmYztcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjY2RkMGRhO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDdkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRsZWZ0OiA4MCU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMHB4O1xyXG5cdGJvcmRlci1sZWZ0OiAwcHg7XHJcblx0ei1pbmRleDogMjtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgPiBsaS5hY3RpdmUgYSxcclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSBhOjphZnRlcixcclxuLm5hdi1waWxscyBsaSBhOmhvdmVyLFxyXG4ubmF2LXBpbGxzIGxpIGE6aG92ZXI6YWZ0ZXIge1xyXG5cdGJhY2tncm91bmQ6ICM0ZjRmNGYgIWltcG9ydGFudDtcclxuXHRib3JkZXItY29sb3I6ICM0ZjRmNGYgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLXRhYiBsaTpudGgtY2hpbGQoMikgYTo6YWZ0ZXIge1xyXG5cdGxlZnQ6IDg5JTtcclxufVxyXG5cclxuLmRhc2hib2FyZC10YWIgbGk6bnRoLWNoaWxkKDMpIGE6OmFmdGVyIHtcclxuXHRsZWZ0OiA4MiU7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtdGFiIGxpOm50aC1jaGlsZCg0KSBhOjphZnRlciB7XHJcblx0bGVmdDogODglO1xyXG59XHJcbi5kYXNoYm9hcmQtdGFiIGxpOm50aC1jaGlsZCg1KSBhOjphZnRlciB7XHJcblx0bGVmdDogODQlO1xyXG59XHJcblxyXG4uYS10YWItd3JwID4gdWwgPiBsaSA+IGEge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoNzksIDc5LCA3OSwgMC4xKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHRjb2xvcjogIzM2MzYzNjtcclxuXHRwYWRkaW5nOiA4cHggMjBweDtcclxufVxyXG4uYS10YWItd3JwID4gdWwgPiBsaSB7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpLmFjdGl2ZSA+IGEge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6ICM0ZjRmNGY7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/provider/dashboard/dashboard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/provider/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/provider/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/dashboard.module.ts":
/*!********************************************************!*\
  !*** ./src/app/provider/dashboard/dashboard.module.ts ***!
  \********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/provider/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/provider/dashboard/dashboard.component.ts");
/* harmony import */ var _components_application_item_application_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/application-item/application-item.component */ "./src/app/provider/dashboard/components/application-item/application-item.component.ts");
/* harmony import */ var _components_application_card_application_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/application-card/application-card.component */ "./src/app/provider/dashboard/components/application-card/application-card.component.ts");
/* harmony import */ var _components_eoi_card_eoi_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/eoi-card/eoi-card.component */ "./src/app/provider/dashboard/components/eoi-card/eoi-card.component.ts");
/* harmony import */ var _components_proposal_card_proposal_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/proposal-card/proposal-card.component */ "./src/app/provider/dashboard/components/proposal-card/proposal-card.component.ts");
/* harmony import */ var _components_pilot_card_pilot_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pilot-card/pilot-card.component */ "./src/app/provider/dashboard/components/pilot-card/pilot-card.component.ts");
/* harmony import */ var _screens_all_applications_all_applications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/all-applications/all-applications.component */ "./src/app/provider/dashboard/screens/all-applications/all-applications.component.ts");
/* harmony import */ var _screens_applications_applications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screens/applications/applications.component */ "./src/app/provider/dashboard/screens/applications/applications.component.ts");
/* harmony import */ var _screens_eois_eois_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./screens/eois/eois.component */ "./src/app/provider/dashboard/screens/eois/eois.component.ts");
/* harmony import */ var _screens_proposals_proposals_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./screens/proposals/proposals.component */ "./src/app/provider/dashboard/screens/proposals/proposals.component.ts");
/* harmony import */ var _screens_pilots_pilots_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./screens/pilots/pilots.component */ "./src/app/provider/dashboard/screens/pilots/pilots.component.ts");
/* harmony import */ var _components_loading_application_card_loading_application_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/loading-application-card/loading-application-card.component */ "./src/app/provider/dashboard/components/loading-application-card/loading-application-card.component.ts");
/* harmony import */ var _screens_pilot_proposal_pilot_proposal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./screens/pilot-proposal/pilot-proposal.component */ "./src/app/provider/dashboard/screens/pilot-proposal/pilot-proposal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var src_app_shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/widgets/widgets.module */ "./src/app/shared/widgets/widgets.module.ts");
/* harmony import */ var _screens_application_individual_application_individual_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./screens/application-individual/application-individual.component */ "./src/app/provider/dashboard/screens/application-individual/application-individual.component.ts");
/* harmony import */ var _screens_edit_application_edit_application_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./screens/edit-application/edit-application.component */ "./src/app/provider/dashboard/screens/edit-application/edit-application.component.ts");
/* harmony import */ var _screens_edit_proposal_edit_proposal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./screens/edit-proposal/edit-proposal.component */ "./src/app/provider/dashboard/screens/edit-proposal/edit-proposal.component.ts");
/* harmony import */ var _screens_unsolicited_proposal_provider_unsolicited_proposal_provider_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./screens/unsolicited-proposal-provider/unsolicited-proposal-provider.component */ "./src/app/provider/dashboard/screens/unsolicited-proposal-provider/unsolicited-proposal-provider.component.ts");



























let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            _components_application_item_application_item_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationItemComponent"],
            _components_application_card_application_card_component__WEBPACK_IMPORTED_MODULE_6__["ApplicationCardComponent"],
            _components_eoi_card_eoi_card_component__WEBPACK_IMPORTED_MODULE_7__["EoiCardComponent"],
            _components_proposal_card_proposal_card_component__WEBPACK_IMPORTED_MODULE_8__["ProposalCardComponent"],
            _components_pilot_card_pilot_card_component__WEBPACK_IMPORTED_MODULE_9__["PilotCardComponent"],
            _screens_all_applications_all_applications_component__WEBPACK_IMPORTED_MODULE_10__["AllApplicationsComponent"],
            _screens_applications_applications_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationsComponent"],
            _screens_eois_eois_component__WEBPACK_IMPORTED_MODULE_12__["EoisComponent"],
            _screens_proposals_proposals_component__WEBPACK_IMPORTED_MODULE_13__["ProposalsComponent"],
            _screens_pilots_pilots_component__WEBPACK_IMPORTED_MODULE_14__["PilotsComponent"],
            _components_loading_application_card_loading_application_card_component__WEBPACK_IMPORTED_MODULE_15__["LoadingApplicationCardComponent"],
            _screens_pilot_proposal_pilot_proposal_component__WEBPACK_IMPORTED_MODULE_16__["PilotProposalComponent"],
            _screens_application_individual_application_individual_component__WEBPACK_IMPORTED_MODULE_23__["ApplicationIndividualComponent"],
            _screens_edit_application_edit_application_component__WEBPACK_IMPORTED_MODULE_24__["EditApplicationComponent"],
            _screens_edit_proposal_edit_proposal_component__WEBPACK_IMPORTED_MODULE_25__["EditProposalComponent"],
            _screens_unsolicited_proposal_provider_unsolicited_proposal_provider_component__WEBPACK_IMPORTED_MODULE_26__["UnsolicitedProposalProviderComponent"],
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_21__["NgxSkeletonLoaderModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_20__["ImageCropperModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__["NgMultiSelectDropDownModule"], src_app_shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_22__["WidgetsModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_18__["CKEditorModule"]],
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/provider/dashboard/dashboardmodule.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/provider/dashboard/dashboardmodule.service.ts ***!
  \***************************************************************/
/*! exports provided: DashboardmoduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardmoduleService", function() { return DashboardmoduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");






let DashboardmoduleService = class DashboardmoduleService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
        });
    }
    getAllApplications(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const limit = parseInt(query.pg.limit);
            const page = parseInt(query.pg.skip) / limit + 1;
            const dataResponse = yield this.http.post(this.api_url + `/application/select_mul`, query).toPromise();
            const countResponse = yield this.http.post(this.api_url + `/application/count`, query).toPromise();
            yield Promise.all(dataResponse.data.map((a) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(a.frg_anchor_id, a.id);
                let seekerResp = yield this.http
                    .post(this.api_url + `/seekers/select_slug`, {
                    slug: {
                        id: a.frg_anchor_id.frg_seeker_id,
                    },
                })
                    .toPromise();
                a.frg_anchor_id.frg_seeker_id = seekerResp.data;
                if (a.eoi && a.eoi[0]) {
                    let eoiResp = yield this.http
                        .post(this.api_url + `/eoi/select`, {
                        slug: {
                            id: a.eoi[0].id,
                        },
                    })
                        .toPromise();
                    a.eoi[0] = eoiResp.data;
                }
            })));
            let totalResults = countResponse.data;
            let startItem = totalResults > 0 ? (page - 1) * limit + 1 : 0;
            let endItem = totalResults > 0 ? startItem - 1 + dataResponse.data.length : 0;
            let PageCount = Math.ceil(countResponse.data / limit);
            dataResponse.currently_showing = { from: startItem, to: endItem };
            dataResponse.total_results = totalResults;
            dataResponse.page_count = PageCount;
            return dataResponse;
        });
    }
    getApplications(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const limit = parseInt(query.pg.limit);
            const page = parseInt(query.pg.skip) / limit + 1;
            const dataResponse = yield this.http.post(this.api_url + `/application/select_mul`, query).toPromise();
            const countResponse = yield this.http.post(this.api_url + `/application/count`, query).toPromise();
            yield Promise.all(dataResponse.data.map((a) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let seekerResp = yield this.http
                    .post(this.api_url + `/seekers/select_slug`, {
                    slug: {
                        id: a.frg_anchor_id.frg_seeker_id,
                    },
                })
                    .toPromise();
                a.frg_anchor_id.frg_seeker_id = seekerResp.data;
            })));
            let totalResults = countResponse.data;
            let startItem = totalResults > 0 ? (page - 1) * limit + 1 : 0;
            let endItem = totalResults > 0 ? startItem - 1 + dataResponse.data.length : 0;
            let PageCount = Math.ceil(countResponse.data / limit);
            dataResponse.currently_showing = { from: startItem, to: endItem };
            dataResponse.total_results = totalResults;
            dataResponse.page_count = PageCount;
            return dataResponse;
        });
    }
    getProposals(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const limit = parseInt(query.pg.limit);
            const page = parseInt(query.pg.skip) / limit + 1;
            const dataResponse = yield this.http.post(this.api_url + `/proposal/select_mul`, query).toPromise();
            const countResponse = yield this.http.post(this.api_url + `/proposal/count`, query).toPromise();
            yield Promise.all(dataResponse.data.map((p) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let challengeResp = yield this.http
                    .post(this.api_url + `/challenges/select`, {
                    slug: {
                        id: p.frg_anchor_id.frg_challenge_id,
                    },
                })
                    .toPromise();
                p.frg_anchor_id.frg_challenge_id = challengeResp.data;
                let seekerResp = yield this.http
                    .post(this.api_url + `/seekers/select_slug`, {
                    slug: {
                        id: p.frg_anchor_id.frg_seeker_id,
                    },
                })
                    .toPromise();
                p.frg_anchor_id.frg_seeker_id = seekerResp.data;
                let applicationResp = yield this.http
                    .post(this.api_url + `/application/select`, {
                    slug: {
                        id: p.frg_eoi_id.frg_application_id,
                    },
                })
                    .toPromise();
                p.frg_eoi_id.frg_application_id = applicationResp.data;
            })));
            let totalResults = countResponse.data;
            let startItem = totalResults > 0 ? (page - 1) * limit + 1 : 0;
            let endItem = totalResults > 0 ? startItem - 1 + dataResponse.data.length : 0;
            let PageCount = Math.ceil(countResponse.data / limit);
            dataResponse.currently_showing = { from: startItem, to: endItem };
            dataResponse.total_results = totalResults;
            dataResponse.page_count = PageCount;
            return dataResponse;
        });
    }
    deleteApplication(solutionId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/application/delete", {
                slug: { id: solutionId },
            })
                .toPromise();
        });
    }
    applicationById(applicationId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + `/application/select`, {
                slug: {
                    id: applicationId,
                },
            })
                .toPromise();
        });
    }
    fetchproposalById(proposalId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + `/proposal/select`, {
                slug: {
                    id: proposalId,
                },
            })
                .toPromise();
        });
    }
    updateApplication(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/application/update`, postData).toPromise();
        });
    }
    updateEOI(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/eoi/update`, postData).toPromise();
        });
    }
    updateProposal(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/proposal/update`, postData).toPromise();
        });
    }
    removeFromProductImages(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/application/remove_from_images", data).toPromise();
        });
    }
    addtoProductImages(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/application/add_to_images", data).toPromise();
        });
    }
    uploadSolutionImages(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/application/uploads", formData).toPromise();
        });
    }
    getEois(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const limit = parseInt(query.pg.limit);
            const page = parseInt(query.pg.skip) / limit + 1;
            let userApplications = yield this.http
                .post(this.api_url + `/application/select_mul`, {
                filter: {
                    frg_provider_id: this.loggedInUser.userTypeId,
                },
            })
                .toPromise();
            let eoiApplicationIds = userApplications.data.map((app) => app.id);
            query.filter.frg_application_id = eoiApplicationIds;
            const dataResponse = yield this.http.post(this.api_url + `/eoi/select_mul`, query).toPromise();
            const countResponse = yield this.http.post(this.api_url + `/eoi/count`, query).toPromise();
            yield Promise.all(dataResponse.data.map((eoi) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let challengeResp = yield this.http
                    .post(this.api_url + `/challenges/select`, {
                    slug: {
                        id: eoi.frg_application_id.frg_challenge_id,
                    },
                })
                    .toPromise();
                eoi.frg_application_id.frg_challenge_id = challengeResp.data;
                let cityResp = yield this.http
                    .post(this.api_url + `/smart_cities/select`, {
                    slug: {
                        id: eoi.frg_seeker_id.frg_smart_city_id,
                    },
                })
                    .toPromise();
                eoi.frg_seeker_id.frg_smart_city_id = cityResp.data;
            })));
            let totalResults = countResponse.data;
            let startItem = totalResults > 0 ? (page - 1) * limit + 1 : 0;
            let endItem = totalResults > 0 ? startItem - 1 + dataResponse.data.length : 0;
            let PageCount = Math.ceil(countResponse.data / limit);
            dataResponse.currently_showing = { from: startItem, to: endItem };
            dataResponse.total_results = totalResults;
            dataResponse.page_count = PageCount;
            return dataResponse;
        });
    }
    uploadPastPilotdocs(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/upload_pilot_docs", formData).toPromise();
        });
    }
    uploadAdditionaldocs(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/upload_additional_docs", formData).toPromise();
        });
    }
    addToPastPilotdocs(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/addto_pilot_docs", formData).toPromise();
        });
    }
    addToAdditionaldocs(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/addto_additional_docs", formData).toPromise();
        });
    }
    removePastPilotDocs(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/remove_pilot_docs", postData).toPromise();
        });
    }
    removeAdditionalDocs(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/remove_additional_docs", postData).toPromise();
        });
    }
    newProposal(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/create", postData).toPromise();
        });
    }
    getUnsolicitedChallenges(post_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const limit = post_data.pg.limit;
            const page = post_data.pg.skip / limit + 1;
            let resp_data = yield this.http.post(this.api_url + '/unsolicited_proposal/select_mul', post_data).toPromise();
            let totalResults = yield this.http.post(this.api_url + "/unsolicited_proposal/count", post_data).toPromise();
            let startItem = totalResults.data > 0 ? (page - 1) * limit + 1 : 0;
            let endItem = totalResults.data > 0 ? startItem - 1 + resp_data.data.length : 0;
            let PageCount = Math.ceil(totalResults.data / limit);
            resp_data.currently_showing = { from: startItem, to: endItem };
            resp_data.total_results = totalResults.data;
            resp_data.page_count = PageCount;
            return resp_data;
        });
    }
};
DashboardmoduleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_5__["LoggedInUserState"])
], DashboardmoduleService.prototype, "loggedInUser$", void 0);
DashboardmoduleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DashboardmoduleService);



/***/ }),

/***/ "./src/app/provider/dashboard/screens/all-applications/all-applications.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/all-applications/all-applications.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".a-tab-wrp > ul > li > a {\r\n\tbackground: rgba(79, 79, 79, 0.1);\r\n\tborder-radius: 100px;\r\n\tcolor: #363636;\r\n\tpadding: 8px 20px;\r\n}\r\n.a-tab-wrp > ul > li {\r\n\tmargin-right: 20px;\r\n}\r\n.a-tab-wrp > ul > li.active > a {\r\n\tcolor: #fff;\r\n\tbackground: #4f4f4f;\r\n}\r\n.content {\r\n\tmin-height: 90vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvYWxsLWFwcGxpY2F0aW9ucy9hbGwtYXBwbGljYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQ0FBaUM7Q0FDakMsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvYWxsLWFwcGxpY2F0aW9ucy9hbGwtYXBwbGljYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYS10YWItd3JwID4gdWwgPiBsaSA+IGEge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoNzksIDc5LCA3OSwgMC4xKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHRjb2xvcjogIzM2MzYzNjtcclxuXHRwYWRkaW5nOiA4cHggMjBweDtcclxufVxyXG4uYS10YWItd3JwID4gdWwgPiBsaSB7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpLmFjdGl2ZSA+IGEge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6ICM0ZjRmNGY7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuXHRtaW4taGVpZ2h0OiA5MHZoO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/provider/dashboard/screens/all-applications/all-applications.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/all-applications/all-applications.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AllApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllApplicationsComponent", function() { return AllApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboardmodule.service */ "./src/app/provider/dashboard/dashboardmodule.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");





let AllApplicationsComponent = class AllApplicationsComponent {
    constructor(_dash) {
        this._dash = _dash;
        this.query = {
            filter: {
                status: "active",
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
            this.query.filter.frg_provider_id = this.loggedInUser.userTypeId;
        });
    }
    ngOnInit() {
        this.fetchAllApplications();
    }
    fetchAllApplications() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.applicationDataAll = yield this._dash.getAllApplications(this.query);
            this.applicationDataAll.data.map((a) => {
                if (a.application_status === "New") {
                    a.overall_stage = "Application in Review";
                }
                else {
                    a.overall_stage = a.application_status;
                }
                if (a.eoi && a.eoi[0]) {
                    if (a.eoi[0].proposal_received) {
                        if (a.eoi[0].proposals.length) {
                            if (a.eoi[0].proposals[0].proposal_stage === "New") {
                                a.overall_stage = "Proposal in Review";
                            }
                            else {
                                a.overall_stage = a.eoi[0].proposals[0].proposal_stage;
                            }
                        }
                    }
                }
            });
            this.isLoading = false;
        });
    }
    handleDeleteApplication() {
        this.fetchAllApplications();
    }
    handlePagination(pageIndex) {
        this.query.pg.skip = (pageIndex - 1) * this.query.pg.limit;
        this.fetchAllApplications();
    }
};
AllApplicationsComponent.ctorParameters = () => [
    { type: _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_2__["DashboardmoduleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__["LoggedInUserState"])
], AllApplicationsComponent.prototype, "loggedInUser$", void 0);
AllApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-all-applications",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-applications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/all-applications/all-applications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-applications.component.css */ "./src/app/provider/dashboard/screens/all-applications/all-applications.component.css")).default]
    })
], AllApplicationsComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/screens/application-individual/application-individual.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/application-individual/application-individual.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".a-solution-wrapper {\r\n\tbackground: var(--white);\r\n\tborder-radius: 4px;\r\n\tborder: 1px solid #dedede;\r\n}\r\n\r\n.grid-row {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 1fr;\r\n\tmargin-bottom: 36px;\r\n\tgrid-column-gap: 36px;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.grid-row.col-4 {\r\n\tgrid-template-columns: 1fr 2fr 1fr 1fr;\r\n}\r\n\r\n.a-modal-section1-wrp {\r\n\tpadding: 30px 24px 0;\r\n\tborder-top: 1px solid #dedede;\r\n\tborder-bottom: 1px solid #dedede;\r\n}\r\n\r\n.a-modal-section2 {\r\n\tpadding: 30px 24px;\r\n}\r\n\r\n.application-header {\r\n\tpadding: 20px 24px;\r\n}\r\n\r\n.application-header .grid-row {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n.loader-parent {\r\n\tmin-height: 80vh;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n}\r\n\r\n.a-sol-chlng-cnt-wrp {\r\n\tmargin-bottom: 14px;\r\n}\r\n\r\n.d-flex {\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.image-placeholder img {\r\n\tborder-radius: 6px;\r\n\twidth: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvYXBwbGljYXRpb24taW5kaXZpZHVhbC9hcHBsaWNhdGlvbi1pbmRpdmlkdWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx3QkFBd0I7Q0FDeEIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQix5QkFBbUI7U0FBbkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLDZCQUE2QjtDQUM3QixnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsb0JBQWE7Q0FBYixhQUFhO0NBQ2IseUJBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQix3QkFBdUI7U0FBdkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MseUJBQW1CO1NBQW5CLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wcm92aWRlci9kYXNoYm9hcmQvc2NyZWVucy9hcHBsaWNhdGlvbi1pbmRpdmlkdWFsL2FwcGxpY2F0aW9uLWluZGl2aWR1YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hLXNvbHV0aW9uLXdyYXBwZXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG5cclxuLmdyaWQtcm93IHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHRtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMzZweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JpZC1yb3cuY29sLTQge1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnIgMWZyO1xyXG59XHJcblxyXG4uYS1tb2RhbC1zZWN0aW9uMS13cnAge1xyXG5cdHBhZGRpbmc6IDMwcHggMjRweCAwO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcblxyXG4uYS1tb2RhbC1zZWN0aW9uMiB7XHJcblx0cGFkZGluZzogMzBweCAyNHB4O1xyXG59XHJcblxyXG4uYXBwbGljYXRpb24taGVhZGVyIHtcclxuXHRwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbi1oZWFkZXIgLmdyaWQtcm93IHtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5sb2FkZXItcGFyZW50IHtcclxuXHRtaW4taGVpZ2h0OiA4MHZoO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmEtc29sLWNobG5nLWNudC13cnAge1xyXG5cdG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuXHJcbi5kLWZsZXgge1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS1wbGFjZWhvbGRlciBpbWcge1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/provider/dashboard/screens/application-individual/application-individual.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/application-individual/application-individual.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ApplicationIndividualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationIndividualComponent", function() { return ApplicationIndividualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dashboardmodule.service */ "./src/app/provider/dashboard/dashboardmodule.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







let ApplicationIndividualComponent = class ApplicationIndividualComponent {
    constructor(_sol, route, location, router, toastr) {
        this._sol = _sol;
        this.route = route;
        this.location = location;
        this.router = router;
        this.toastr = toastr;
        this.server_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].server_url;
        this.route.params.subscribe((params) => {
            this.applicationId = params.id;
            // console.log(this.applicationId);
        });
    }
    ngOnInit() {
        this.fetchApplication();
    }
    goBack() {
        this.location.back();
    }
    fetchApplication() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.applicationData = yield this._sol.applicationById(this.applicationId);
            // console.log(this.applicationData);
            this.isLoading = false;
        });
    }
};
ApplicationIndividualComponent.ctorParameters = () => [
    { type: _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_4__["DashboardmoduleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
ApplicationIndividualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-application-individual",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./application-individual.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/application-individual/application-individual.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./application-individual.component.css */ "./src/app/provider/dashboard/screens/application-individual/application-individual.component.css")).default]
    })
], ApplicationIndividualComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/screens/applications/applications.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/applications/applications.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".a-tab-wrp > ul > li > a {\r\n\tbackground: rgba(79, 79, 79, 0.1);\r\n\tborder-radius: 100px;\r\n\tcolor: #363636;\r\n\tpadding: 8px 20px;\r\n}\r\n.a-tab-wrp > ul > li {\r\n\tmargin-right: 20px;\r\n}\r\n.a-tab-wrp > ul > li.active > a {\r\n\tcolor: #fff;\r\n\tbackground: #4f4f4f;\r\n}\r\n.tab-pane .content {\r\n\tmin-height: 80vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUNBQWlDO0NBQ2pDLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2Rhc2hib2FyZC9zY3JlZW5zL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hLXRhYi13cnAgPiB1bCA+IGxpID4gYSB7XHJcblx0YmFja2dyb3VuZDogcmdiYSg3OSwgNzksIDc5LCAwLjEpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cdGNvbG9yOiAjMzYzNjM2O1xyXG5cdHBhZGRpbmc6IDhweCAyMHB4O1xyXG59XHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmEtdGFiLXdycCA+IHVsID4gbGkuYWN0aXZlID4gYSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogIzRmNGY0ZjtcclxufVxyXG5cclxuLnRhYi1wYW5lIC5jb250ZW50IHtcclxuXHRtaW4taGVpZ2h0OiA4MHZoO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/provider/dashboard/screens/applications/applications.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/applications/applications.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboardmodule.service */ "./src/app/provider/dashboard/dashboardmodule.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");





let ApplicationsComponent = class ApplicationsComponent {
    constructor(_dash) {
        this._dash = _dash;
        this.allApplicationCount = 0;
        this.RejectCount = 0;
        this.onHoldCount = 0;
        this.queryAll = {
            filter: {
                status: "active",
                application_status: "New",
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
        this.queryRejected = {
            filter: {
                status: "active",
                application_status: "Reject",
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
        this.queryHold = {
            filter: {
                status: "active",
                application_status: "Onhold",
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
            this.queryAll.filter.frg_provider_id = this.loggedInUser.userTypeId;
            this.queryRejected.filter.frg_provider_id = this.loggedInUser.userTypeId;
            this.queryHold.filter.frg_provider_id = this.loggedInUser.userTypeId;
        });
    }
    ngOnInit() {
        this.fetchAllApplications();
    }
    fetchAllApplications() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.applicationDataAll = yield this._dash.getApplications(this.queryAll);
            this.allApplicationCount = this.applicationDataAll.total_results;
            this.applicationDataRejected = yield this._dash.getApplications(this.queryRejected);
            this.RejectCount = this.applicationDataRejected.total_results;
            this.applicationDataonHold = yield this._dash.getApplications(this.queryHold);
            this.onHoldCount = this.applicationDataonHold.total_results;
            this.isLoading = false;
        });
    }
    handleDelete(deletedApplication) {
        this.fetchAllApplications();
    }
};
ApplicationsComponent.ctorParameters = () => [
    { type: _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_2__["DashboardmoduleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__["LoggedInUserState"])
], ApplicationsComponent.prototype, "loggedInUser$", void 0);
ApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-applications",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./applications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/applications/applications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./applications.component.css */ "./src/app/provider/dashboard/screens/applications/applications.component.css")).default]
    })
], ApplicationsComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/screens/edit-application/edit-application.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/edit-application/edit-application.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-city-wrp {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.frg-flx-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.frg-flx-row .frg-flx-input-col {\r\n\tflex-basis: 88%;\r\n}\r\n\r\n.frg-flx-row .frg-flx-add-rm-row-btn {\r\n\tflex-basis: 7%;\r\n}\r\n\r\n.act-clr {\r\n\tcolor: #3b6fd4 !important;\r\n}\r\n\r\n.act-span {\r\n\tpadding: 3px 6px;\r\n\tborder: 1px solid #3b6fd4;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.add-form-wrapper {\r\n\tmax-width: 580px;\r\n\tmargin: 36px auto;\r\n}\r\n\r\n.step-wrapper {\r\n\tpadding: 36px;\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.files-upload-wrp {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n.files-upload-wrp app-citylogo-upload,\r\n.files-upload-wrp app-city-avatar-upload,\r\n.files-upload-wrp app-city-map-upload {\r\n\tflex-basis: 30%;\r\n}\r\n\r\n.back-btn-wrp {\r\n\tmargin-top: -18px;\r\n}\r\n\r\n.back-btn {\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.back-btn .disable {\r\n\topacity: 0;\r\n\tvisibility: visible;\r\n}\r\n\r\n.frg-multiselect-dropdown .multiselect-item-checkbox input[type=\"checkbox\"] + div:before {\r\n\tborder: 2px solid #7d7d7d !important;\r\n}\r\n\r\n.multiselect-item-checkbox input[type=\"checkbox\"]:checked + div:before {\r\n\tbackground: transparent !important;\r\n}\r\n\r\n.multiselect-item-checkbox input[type=\"checkbox\"] + div:after {\r\n\twidth: 7px !important;\r\n\theight: 2px !important;\r\n\tmargin-top: -4px !important;\r\n\tborder-style: solid;\r\n\tborder-color: #000000b8 !important;\r\n}\r\n\r\n.l-sol-catg-panel-grp .panel-heading {\r\n\tbackground: var(--white);\r\n}\r\n\r\n.l-sol-catg-acc-title {\r\n\tcolor: var(--black-clr);\r\n}\r\n\r\n.l-sol-catg-panel-grp .panel + .panel {\r\n\tmargin-top: 0px !important;\r\n}\r\n\r\n#l-sol-catg-acc-1 .panel-body {\r\n\tpadding: 0px !important ;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul {\r\n\tpadding-left: 0px;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n.l-sol-catg-panel-1 .panel-heading,\r\n.l-sol-catg-panel-2 .panel-heading {\r\n\tpadding: 16px 17px;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li > a {\r\n\tfont-size: 14px;\r\n\tline-height: 16px;\r\n\tpadding: 16px 17px;\r\n\tborder-radius: 0px;\r\n\tcolor: #999999 !important;\r\n\tfont-weight: 400;\r\n\tdisplay: block;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li a:hover,\r\n.l-sol-catg-acc-1-ul li a:active,\r\n.l-sol-catg-acc-1-ul li a:focus,\r\n.l-sol-catg-acc-1-ul li a.active {\r\n\tbackground-color: #efefef !important;\r\n\tcolor: #4f4f4f !important;\r\n}\r\n\r\n.l-sol-catg-panel-1 {\r\n\tbox-shadow: none !important;\r\n\tborder-bottom: 0px;\r\n\tborder-bottom-right-radius: 0px;\r\n\tborder-bottom-left-radius: 0px;\r\n}\r\n\r\n.l-sol-catg-panel-2 {\r\n\tborder-top-right-radius: 0px;\r\n\tborder-top-left-radius: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvZWRpdC1hcHBsaWNhdGlvbi9lZGl0LWFwcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBOEI7U0FBOUIsOEJBQThCO0NBQzlCLHlCQUFtQjtTQUFuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIseUJBQXlCO0NBQ3pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0I7O0FBRUE7OztDQUdDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQ0FBeUI7Q0FBekIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFDQTtDQUNDLGtDQUFrQztBQUNuQzs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixrQ0FBa0M7QUFDbkM7O0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7O0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVTtBQUNYOztBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTs7OztDQUlDLG9DQUFvQztDQUNwQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLCtCQUErQjtDQUMvQiw4QkFBOEI7QUFDL0I7O0FBQ0E7Q0FDQyw0QkFBNEI7Q0FDNUIsMkJBQTJCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvZWRpdC1hcHBsaWNhdGlvbi9lZGl0LWFwcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWNpdHktd3JwIHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmZyZy1mbHgtcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZnJnLWZseC1yb3cgLmZyZy1mbHgtaW5wdXQtY29sIHtcclxuXHRmbGV4LWJhc2lzOiA4OCU7XHJcbn1cclxuXHJcbi5mcmctZmx4LXJvdyAuZnJnLWZseC1hZGQtcm0tcm93LWJ0biB7XHJcblx0ZmxleC1iYXNpczogNyU7XHJcbn1cclxuXHJcbi5hY3QtY2xyIHtcclxuXHRjb2xvcjogIzNiNmZkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0LXNwYW4ge1xyXG5cdHBhZGRpbmc6IDNweCA2cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzNiNmZkNDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5hZGQtZm9ybS13cmFwcGVyIHtcclxuXHRtYXgtd2lkdGg6IDU4MHB4O1xyXG5cdG1hcmdpbjogMzZweCBhdXRvO1xyXG59XHJcblxyXG4uc3RlcC13cmFwcGVyIHtcclxuXHRwYWRkaW5nOiAzNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmZpbGVzLXVwbG9hZC13cnAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZmlsZXMtdXBsb2FkLXdycCBhcHAtY2l0eWxvZ28tdXBsb2FkLFxyXG4uZmlsZXMtdXBsb2FkLXdycCBhcHAtY2l0eS1hdmF0YXItdXBsb2FkLFxyXG4uZmlsZXMtdXBsb2FkLXdycCBhcHAtY2l0eS1tYXAtdXBsb2FkIHtcclxuXHRmbGV4LWJhc2lzOiAzMCU7XHJcbn1cclxuXHJcbi5iYWNrLWJ0bi13cnAge1xyXG5cdG1hcmdpbi10b3A6IC0xOHB4O1xyXG59XHJcblxyXG4uYmFjay1idG4ge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5iYWNrLWJ0biAuZGlzYWJsZSB7XHJcblx0b3BhY2l0eTogMDtcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uZnJnLW11bHRpc2VsZWN0LWRyb3Bkb3duIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGRpdjpiZWZvcmUge1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICM3ZDdkN2QgIWltcG9ydGFudDtcclxufVxyXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGRpdjpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgZGl2OmFmdGVyIHtcclxuXHR3aWR0aDogN3B4ICFpbXBvcnRhbnQ7XHJcblx0aGVpZ2h0OiAycHggIWltcG9ydGFudDtcclxuXHRtYXJnaW4tdG9wOiAtNHB4ICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItY29sb3I6ICMwMDAwMDBiOCAhaW1wb3J0YW50O1xyXG59XHJcbi5sLXNvbC1jYXRnLXBhbmVsLWdycCAucGFuZWwtaGVhZGluZyB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG59XHJcbi5sLXNvbC1jYXRnLWFjYy10aXRsZSB7XHJcblx0Y29sb3I6IHZhcigtLWJsYWNrLWNscik7XHJcbn1cclxuLmwtc29sLWNhdGctcGFuZWwtZ3JwIC5wYW5lbCArIC5wYW5lbCB7XHJcblx0bWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI2wtc29sLWNhdGctYWNjLTEgLnBhbmVsLWJvZHkge1xyXG5cdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50IDtcclxufVxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCB7XHJcblx0cGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLXBhbmVsLTEgLnBhbmVsLWhlYWRpbmcsXHJcbi5sLXNvbC1jYXRnLXBhbmVsLTIgLnBhbmVsLWhlYWRpbmcge1xyXG5cdHBhZGRpbmc6IDE2cHggMTdweDtcclxufVxyXG5cclxuLmwtc29sLWNhdGctYWNjLTEtdWwgbGkgPiBhIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDE2cHg7XHJcblx0cGFkZGluZzogMTZweCAxN3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHRjb2xvcjogIzk5OTk5OSAhaW1wb3J0YW50O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIGE6aG92ZXIsXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIGE6YWN0aXZlLFxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCBsaSBhOmZvY3VzLFxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCBsaSBhLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZiAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjNGY0ZjRmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLXBhbmVsLTEge1xyXG5cdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHRib3JkZXItYm90dG9tOiAwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn1cclxuLmwtc29sLWNhdGctcGFuZWwtMiB7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/provider/dashboard/screens/edit-application/edit-application.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/edit-application/edit-application.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApplicationComponent", function() { return EditApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");
/* harmony import */ var _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dashboardmodule.service */ "./src/app/provider/dashboard/dashboardmodule.service.ts");











let EditApplicationComponent = class EditApplicationComponent {
    constructor(route, fb, _app, toastr, router) {
        this.route = route;
        this.fb = fb;
        this._app = _app;
        this.toastr = toastr;
        this.router = router;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].server_url;
        this.loading = false;
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
        };
        this.sectorDropdownList = [];
        this.challengeDropdownList = [];
        this.solutionProductImages = [];
        this.currentProductImages = [];
        this.marketDomainList = [
            "Ecosystems",
            "Law Enforcement",
            "Healthcare",
            "Medical devices",
            "Telecom",
            "Finance",
            "Insurance",
            "Entertainment",
            "Gaming",
            "E-commerce",
            "Travel & Tourism",
            "Advertisement",
            "Information and Communication Technologies",
            "Future Cities",
            "Agriculture",
            "Transportation",
            "Others",
        ];
        this.monthsArr = [0, 1, 2, 3, 4];
        this.weekArr = [0, 1, 2, 3, 4];
        this.ipStatusArr = ["Applied", "Published", "Granted", "Not Applicable"];
        this.disableChallengeList = true;
        this.solutionsImplemented = [];
        this.selectedChallengeSectors = [];
        this.selectedChallenges = [];
        this.tobeRemovedFilePaths = [];
        this.urlPattern = new RegExp("^(http|https)://");
        this.files = [];
        this.applicationGallery = [];
        this.goBackUrl = null;
        this.cataloguedFor = null;
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
        });
        this.route.params.subscribe((params) => {
            // console.log(params.id);
            this.applicationId = params.id;
        });
        this.Editor.defaultConfig = {
            toolbar: {
                items: ["heading", "|", "bold", "italic", "|", "bulletedList", "numberedList"],
            },
            image: {
                toolbar: ["imageStyle:full", "imageStyle:side", "|", "imageTextAlternative"],
            },
            table: {
                contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
            },
            language: "en",
        };
    }
    ngOnInit() {
        this.applicationStep1 = true;
        this.applicationStep2 = false;
        this.applicationStep3 = false;
        this.editApplicationStep1 = this.fb.group({
            solutionName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            marketDomain: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            solutionBrief: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(700), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
            valueProposition: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
            tangibleBenefits: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
        });
        this.editApplicationStep2 = this.fb.group({
            solutionAdvantages: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
            solutionReadiness: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
            trackRecord: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
            implementationTimeMonth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            implementationTimeWeeks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.editApplicationStep3 = this.fb.group({
            ipStatus: [""],
            identificationNumber: [""],
            expertsInvolved: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(650), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
            otherDetails: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]],
            video: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.urlPattern)]],
        });
        this.getApplication();
    }
    get editApplicationControlStep1() {
        return this.editApplicationStep1.controls;
    }
    get editApplicationControlStep2() {
        return this.editApplicationStep2.controls;
    }
    get editApplicationControlStep3() {
        return this.editApplicationStep3.controls;
    }
    getApplication() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.initLoading = true;
            this.applicationData = yield this._app.applicationById(this.applicationId);
            // console.log(this.applicationData);
            this.editApplicationStep1.patchValue({
                solutionName: this.applicationData.data.name,
                marketDomain: this.applicationData.data.market_domain,
                solutionBrief: this.applicationData.data.solution_brief,
                valueProposition: this.applicationData.data.value_proposition,
                tangibleBenefits: this.applicationData.data.tangible_benifits,
            });
            this.editApplicationStep2.patchValue({
                solutionAdvantages: this.applicationData.data.solution_advantages,
                solutionReadiness: this.applicationData.data.solution_readiness,
                trackRecord: this.applicationData.data.track_record,
                implementationTimeMonth: this.applicationData.data.implementation_time.months,
                implementationTimeWeeks: this.applicationData.data.implementation_time.weeks,
            });
            this.editApplicationStep3.patchValue({
                ipStatus: this.applicationData.data.ip_details.status,
                identificationNumber: this.applicationData.data.ip_details.id_number,
                expertsInvolved: this.applicationData.data.experts_involved,
                otherDetails: this.applicationData.data.other_details,
                video: this.applicationData.data.video_link,
            });
            this.currentProductImages = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this.applicationData.data.images);
            this.initLoading = false;
        });
    }
    gotoStep(step) {
        switch (step) {
            case "step1":
                this.applicationStep1 = true;
                this.applicationStep2 = false;
                this.applicationStep3 = false;
                window.scroll(0, 0);
                break;
            case "step2":
                this.applicationStep1 = false;
                this.applicationStep2 = true;
                this.applicationStep3 = false;
                window.scroll(0, 0);
                break;
            case "step3":
                this.applicationStep1 = false;
                this.applicationStep2 = false;
                this.applicationStep3 = true;
                window.scroll(0, 0);
                break;
        }
    }
    applicationStep1Submit() {
        this.isSubmitted.Step1 = true;
        if (this.editApplicationStep1.valid) {
            this.gotoStep("step2");
        }
        else {
            this.toastr.error("please provide the required values to proceed further.", "Validation Error");
        }
    }
    applicationStep2Submit() {
        this.isSubmitted.Step2 = true;
        if (this.editApplicationStep2.valid) {
            this.gotoStep("step3");
        }
        else {
            this.toastr.error("please provide the required values to proceed further.", "Validation Error");
        }
    }
    saveApplication() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubmitted.Step3 = true;
            if (this.editApplicationStep1.valid && this.editApplicationStep2.valid && this.editApplicationStep3.valid) {
                this.loading = true;
                let applicationPostdata = {
                    slug: {
                        id: this.applicationData.data.id,
                    },
                    data: {
                        status: "active",
                        name: this.editApplicationStep1.value.solutionName,
                        frg_provider_id: this.loggedInUser.userTypeId,
                        market_domain: this.editApplicationStep1.value.marketDomain,
                        solution_brief: this.editApplicationStep1.value.solutionBrief,
                        video_link: this.editApplicationStep3.value.video,
                        value_proposition: this.editApplicationStep1.value.valueProposition,
                        tangible_benifits: this.editApplicationStep1.value.tangibleBenefits,
                        solution_advantages: this.editApplicationStep2.value.solutionAdvantages,
                        solution_readiness: this.editApplicationStep2.value.solutionReadiness,
                        track_record: this.editApplicationStep2.value.trackRecord,
                        other_details: this.editApplicationStep3.value.otherDetails,
                        experts_involved: this.editApplicationStep3.value.expertsInvolved,
                        implementation_time: {
                            months: this.editApplicationStep2.value.implementationTimeMonth,
                            weeks: this.editApplicationStep2.value.implementationTimeWeeks,
                        },
                        ip_details: {
                            status: this.editApplicationStep3.value.ipStatus,
                            id_number: this.editApplicationStep3.value.identificationNumber,
                        },
                    },
                };
                try {
                    let responseData = yield this._app.updateApplication(applicationPostdata);
                    yield this.filesRemovedFromProductImages(this.applicationData.data.id);
                    yield this.saveNewProductImages(this.applicationData.data.id);
                    this.loading = false;
                    this.toastr.success("", "Application updated successfully");
                    this.router.navigate([`/provider/user/${this.loggedInUser.slug}/dashboard/applications/${this.applicationData.data.id}`]);
                }
                catch (err) {
                    console.log(err);
                }
            }
            else {
                this.toastr.error("please provide the required values to proceed further.", "Validation Error");
            }
        });
    }
    handleSaveGallery(files) {
        let ProductImagesBeforeChange = this.applicationData.data.images;
        // splitting the array with
        let newFiles = files.filter((e) => {
            if (typeof e == "object") {
                return e;
            }
        });
        let updatedFilePaths = files.filter((e) => {
            if (typeof e == "string") {
                return e;
            }
        });
        if (ProductImagesBeforeChange)
            this.tobeRemovedFilePaths = ProductImagesBeforeChange.filter((x) => !updatedFilePaths.includes(x));
        this.solutionProductImages = newFiles;
    }
    filesRemovedFromProductImages(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.tobeRemovedFilePaths.length > 0) {
                yield this._app.removeFromProductImages({
                    slug: { id: id },
                    data: { remove_paths: this.tobeRemovedFilePaths },
                });
            }
        });
    }
    saveNewProductImages(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.applicationData.data.images) {
                if (this.solutionProductImages.length > 0) {
                    let formData = new FormData();
                    formData.append("slug", id);
                    this.solutionProductImages.forEach((file) => {
                        formData.append("images", file);
                    });
                    yield this._app.uploadSolutionImages(formData);
                }
            }
            else {
                if (this.solutionProductImages.length > 0) {
                    let formData = new FormData();
                    formData.append("slug", id);
                    this.solutionProductImages.forEach((file) => {
                        formData.append("images", file);
                    });
                    yield this._app.addtoProductImages(formData);
                }
            }
        });
    }
};
EditApplicationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_10__["DashboardmoduleService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_9__["LoggedInUserState"])
], EditApplicationComponent.prototype, "loggedInUser$", void 0);
EditApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-application",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-application.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/edit-application/edit-application.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-application.component.css */ "./src/app/provider/dashboard/screens/edit-application/edit-application.component.css")).default]
    })
], EditApplicationComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/screens/edit-proposal/edit-proposal.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/edit-proposal/edit-proposal.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-challenge-brief-parent {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.loader-wrp {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\tmin-height: 100vh;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.challenge-step-tabs {\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.challenge-step-tabs div {\r\n\tpadding: 0.736rem;\r\n\tfont-size: 0.842rem;\r\n\tcolor: var(--body-grey);\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n\tcursor: pointer;\r\n}\r\n\r\n.challenge-step-tabs div:not(:last-child) {\r\n\tborder-bottom: 1px solid #dedede;\r\n}\r\n\r\n.challenge-step-tabs div:hover,\r\n.challenge-step-tabs div.active {\r\n\tbackground: #dedede;\r\n}\r\n\r\n.step-form-parent {\r\n\tpadding: 36px;\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.flex-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.flex-row > div {\r\n\tflex-basis: 48%;\r\n}\r\n\r\nlabel {\r\n\tfont-size: 0.631rem;\r\n\tline-height: 1.6;\r\n}\r\n\r\nlabel .field-desp {\r\n\topacity: 0.7;\r\n\tfont-weight: 300;\r\n}\r\n\r\n.a-budget-wrp {\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.a-budget-total-wrp {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n\r\n.act-clr {\r\n\tcolor: var(--primary-green) !important;\r\n}\r\n\r\n.act-span {\r\n\tpadding: 3px 6px;\r\n\tborder: 1px solid var(--primary-green);\r\n\tfont-size: 12px;\r\n}\r\n\r\n.inputfile {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\n.inputfile + label {\r\n\tcolor: var(--primary-green);\r\n\tbackground-color: #ffff;\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid #dedede;\r\n\twidth: 100%;\r\n}\r\n\r\n.inputfile + label {\r\n\tcursor: pointer; /* \"hand\" cursor */\r\n}\r\n\r\n.inputfile:focus + label,\r\n.inputfile + label:hover {\r\n\tborder: 1px solid var(--primary-green);\r\n}\r\n\r\n.dynamic-row {\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvZWRpdC1wcm9wb3NhbC9lZGl0LXByb3Bvc2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsd0JBQXVCO1NBQXZCLHVCQUF1QjtDQUN2Qix5QkFBbUI7U0FBbkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsaUNBQXlCO0NBQXpCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0NBQWdDO0FBQ2pDOztBQUVBOztDQUVDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIseUJBQXlCO0NBQ3pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUE4QjtTQUE5Qiw4QkFBOEI7Q0FDOUIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0Msc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHNDQUFzQztDQUN0QyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7O0FBQ0E7Q0FDQywyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQix5QkFBeUI7Q0FDekIsV0FBVztBQUNaOztBQUVBO0NBQ0MsZUFBZSxFQUFFLGtCQUFrQjtBQUNwQzs7QUFFQTs7Q0FFQyxzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyx5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9wcm92aWRlci9kYXNoYm9hcmQvc2NyZWVucy9lZGl0LXByb3Bvc2FsL2VkaXQtcHJvcG9zYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWNoYWxsZW5nZS1icmllZi1wYXJlbnQge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubG9hZGVyLXdycCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhbGxlbmdlLXN0ZXAtdGFicyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5jaGFsbGVuZ2Utc3RlcC10YWJzIGRpdiB7XHJcblx0cGFkZGluZzogMC43MzZyZW07XHJcblx0Zm9udC1zaXplOiAwLjg0MnJlbTtcclxuXHRjb2xvcjogdmFyKC0tYm9keS1ncmV5KTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoYWxsZW5nZS1zdGVwLXRhYnMgZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcblxyXG4uY2hhbGxlbmdlLXN0ZXAtdGFicyBkaXY6aG92ZXIsXHJcbi5jaGFsbGVuZ2Utc3RlcC10YWJzIGRpdi5hY3RpdmUge1xyXG5cdGJhY2tncm91bmQ6ICNkZWRlZGU7XHJcbn1cclxuXHJcbi5zdGVwLWZvcm0tcGFyZW50IHtcclxuXHRwYWRkaW5nOiAzNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmZsZXgtcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mbGV4LXJvdyA+IGRpdiB7XHJcblx0ZmxleC1iYXNpczogNDglO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcblx0Zm9udC1zaXplOiAwLjYzMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG5sYWJlbCAuZmllbGQtZGVzcCB7XHJcblx0b3BhY2l0eTogMC43O1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5hLWJ1ZGdldC13cnAge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmEtYnVkZ2V0LXRvdGFsLXdycCB7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuXHJcbi5hY3QtY2xyIHtcclxuXHRjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdC1zcGFuIHtcclxuXHRwYWRkaW5nOiAzcHggNnB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmlucHV0ZmlsZSB7XHJcblx0d2lkdGg6IDAuMXB4O1xyXG5cdGhlaWdodDogMC4xcHg7XHJcblx0b3BhY2l0eTogMDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAtMTtcclxufVxyXG4uaW5wdXRmaWxlICsgbGFiZWwge1xyXG5cdGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlucHV0ZmlsZSArIGxhYmVsIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7IC8qIFwiaGFuZFwiIGN1cnNvciAqL1xyXG59XHJcblxyXG4uaW5wdXRmaWxlOmZvY3VzICsgbGFiZWwsXHJcbi5pbnB1dGZpbGUgKyBsYWJlbDpob3ZlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcbn1cclxuXHJcbi5keW5hbWljLXJvdyB7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/provider/dashboard/screens/edit-proposal/edit-proposal.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/edit-proposal/edit-proposal.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EditProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProposalComponent", function() { return EditProposalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dashboardmodule.service */ "./src/app/provider/dashboard/dashboardmodule.service.ts");











let EditProposalComponent = class EditProposalComponent {
    constructor(toastr, fb, _app, route, router, _location) {
        this.toastr = toastr;
        this.fb = fb;
        this._app = _app;
        this.route = route;
        this.router = router;
        this._location = _location;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        this.yearArr = lodash__WEBPACK_IMPORTED_MODULE_4__["range"](1950, new Date().getFullYear() + 1);
        this.weekArr = [1, 2, 3, 4, 5];
        this.monthArr = [1, 2, 3, 4];
        this.proposalForm = {
            Step1: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
            Step2: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
            Step3: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
            Step4: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
        };
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
            Step4: false,
        };
        this.pastPilotDocs = [];
        this.additionalDocs = [];
        this.currentPastPilotDocs = [];
        this.currentAdditionalDocs = [];
        this.removePastPilotDocs = [];
        this.removeAdditionalDocs = [];
        this.route.params.subscribe((params) => {
            this.proposalId = params.id;
        });
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
        });
        this.Editor.defaultConfig = {
            toolbar: {
                items: ["heading", "|", "bold", "italic", "bulletedList", "numberedList", "link"],
            },
            image: {
                toolbar: ["imageStyle:full", "imageStyle:side", "|", "imageTextAlternative"],
            },
            table: {
                contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
            },
            language: "en",
        };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.proposalStep1 = false;
            this.proposalStep2 = true;
            this.proposalStep3 = true;
            this.proposalStep4 = true;
            this.proposalForm = {
                Step1: this.fb.group({
                    customisation_details: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    outcomes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                }),
                Step2: this.fb.group({
                    pilot_months: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    pilot_weeks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    commission_months: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    commission_weeks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    implementation_months: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    implementation_weeks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    budget_dev_cost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    budget_capex_cost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    budget_install_cost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    budget_operation_cost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    budget_total_cost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                }),
                Step3: this.fb.group({
                    track_record: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    team_size: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    team_members: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
                }),
                Step4: this.fb.group({
                    dependencies: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                }),
            };
            this.teamMembers = this.proposalForm.Step3.get("team_members");
            yield this.preFillProposalData();
        });
    }
    get formControlStep1() {
        return this.proposalForm.Step1.controls;
    }
    get formControlStep2() {
        return this.proposalForm.Step2.controls;
    }
    get formControlStep3() {
        return this.proposalForm.Step3.controls;
    }
    get formControlStep4() {
        return this.proposalForm.Step4.controls;
    }
    preFillProposalData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoading = true;
            this.proposalData = yield this._app.fetchproposalById(this.proposalId);
            this.proposalForm.Step1.patchValue({
                customisation_details: this.proposalData.data.customisation_details,
                outcomes: this.proposalData.data.outcomes,
            });
            this.proposalForm.Step2.patchValue({
                pilot_months: this.proposalData.data.time_of_pilot.months,
                pilot_weeks: this.proposalData.data.time_of_pilot.weeks,
                commission_months: this.proposalData.data.time_of_commission.months,
                commission_weeks: this.proposalData.data.time_of_commission.weeks,
                implementation_months: this.proposalData.data.implementation_monitoring_timeline.months,
                implementation_weeks: this.proposalData.data.implementation_monitoring_timeline.weeks,
                budget_dev_cost: this.proposalData.data.budget.solution_design_dev_cost,
                budget_capex_cost: this.proposalData.data.budget.capex_cost,
                budget_install_cost: this.proposalData.data.budget.installation_commission_cost,
                budget_operation_cost: this.proposalData.data.budget.operations_monitoring_analysis_cost,
                budget_total_cost: this.proposalData.data.budget.total_cost,
            });
            this.proposalForm.Step3.patchValue({
                track_record: this.proposalData.data.track_record,
                team_size: this.proposalData.data.team_size,
            });
            this.proposalForm.Step4.patchValue({
                dependencies: this.proposalData.data.dependencies,
            });
            this.proposalData.data.team_member.forEach((element) => {
                const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    expertise: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                });
                group.patchValue({ name: element.name, expertise: element.expertise });
                this.teamMembers.push(group);
            });
            this.currentPastPilotDocs = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.proposalData.data.reports_of_past_pilot);
            this.currentAdditionalDocs = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.proposalData.data.additional_details);
            this.pageLoading = false;
        });
    }
    addMember() {
        if (this.teamMembers.valid) {
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                expertise: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
            this.teamMembers.push(group);
        }
        else {
            this.toastr.error("please fill out the required values to add new row", "Validation Error");
        }
    }
    removeMember(index) {
        this.teamMembers.removeAt(index);
    }
    stepFormSubmit(formIndex) {
        switch (formIndex) {
            case "Step1": {
                this.isSubmitted.Step1 = true;
                this.ShowNextStep(formIndex);
                break;
            }
            case "Step2": {
                this.isSubmitted.Step2 = true;
                this.ShowNextStep(formIndex);
                break;
            }
            case "Step3": {
                this.isSubmitted.Step3 = true;
                this.ShowNextStep(formIndex);
                break;
            }
            case "Step4": {
                this.isSubmitted.Step4 = true;
                this.ShowNextStep(formIndex);
                break;
            }
        }
    }
    ShowNextStep(formIndex) {
        if (formIndex == "Step1" && this.proposalForm.Step1.valid) {
            this.gotoStep("step2");
            window.scrollTo(0, 0);
        }
        else if (formIndex == "Step2" && this.proposalForm.Step2.valid) {
            this.gotoStep("step3");
            window.scrollTo(0, 0);
        }
        else if (formIndex == "Step3" && this.proposalForm.Step3.valid) {
            this.gotoStep("step4");
            window.scrollTo(0, 0);
        }
        else if (formIndex == "Step4" && this.proposalForm.Step4.valid) {
            this.updateProposal();
        }
        else {
            this.toastr.error("", "Please provide the required values to proceed further");
        }
    }
    gotoStep(step) {
        switch (step) {
            case "step1": {
                this.proposalStep1 = false;
                this.proposalStep2 = true;
                this.proposalStep3 = true;
                this.proposalStep4 = true;
                break;
            }
            case "step2": {
                this.proposalStep1 = true;
                this.proposalStep2 = false;
                this.proposalStep3 = true;
                this.proposalStep4 = true;
                break;
            }
            case "step3": {
                this.proposalStep1 = true;
                this.proposalStep2 = true;
                this.proposalStep3 = false;
                this.proposalStep4 = true;
                break;
            }
            case "step4": {
                this.proposalStep1 = true;
                this.proposalStep2 = true;
                this.proposalStep3 = true;
                this.proposalStep4 = false;
                break;
            }
        }
    }
    updateProposal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubmitted.Step4 = true;
            if (this.proposalForm.Step1.valid && this.proposalForm.Step2.valid && this.proposalForm.Step3.valid && this.proposalForm.Step4.valid) {
                this.loading = true;
                let proposalPostData = {
                    slug: {
                        id: this.proposalData.data.id,
                    },
                    data: {
                        customisation_details: this.proposalForm.Step1.value.customisation_details,
                        outcomes: this.proposalForm.Step1.value.outcomes,
                        time_of_pilot: {
                            months: this.proposalForm.Step2.value.pilot_months,
                            weeks: this.proposalForm.Step2.value.pilot_weeks,
                        },
                        time_of_commission: {
                            months: this.proposalForm.Step2.value.commission_months,
                            weeks: this.proposalForm.Step2.value.commission_weeks,
                        },
                        implementation_monitoring_timeline: {
                            months: this.proposalForm.Step2.value.implementation_months,
                            weeks: this.proposalForm.Step2.value.implementation_weeks,
                        },
                        budget: {
                            solution_design_dev_cost: this.proposalForm.Step2.value.budget_dev_cost,
                            capex_cost: this.proposalForm.Step2.value.budget_capex_cost,
                            installation_commission_cost: this.proposalForm.Step2.value.budget_install_cost,
                            operations_monitoring_analysis_cost: this.proposalForm.Step2.value.budget_operation_cost,
                            total_cost: this.proposalForm.Step2.value.budget_total_cost,
                        },
                        track_record: this.proposalForm.Step3.value.track_record,
                        team_size: this.proposalForm.Step3.value.team_size,
                        team_member: this.proposalForm.Step3.value.team_members,
                        dependencies: this.proposalForm.Step4.value.dependencies,
                        frg_provider_id: this.loggedInUser.userTypeId,
                        frg_eoi_id: this.eoiId,
                        frg_anchor_id: this.anchorId,
                    },
                };
                try {
                    let responseData = yield this._app.updateProposal(proposalPostData);
                    yield Promise.all([
                        Promise.all([yield this.removeFilesPilotDocs(this.proposalData.data.id), yield this.uploadNewPilotDocs(this.proposalData.data.id)]),
                        Promise.all([yield this.removeFilesAdditionalDocs(this.proposalData.data.id), yield this.uploadNewAdditionalFiles(this.proposalData.data.id)]),
                    ]);
                    this.loading = false;
                    this.toastr.success("", "Proposal updated successfully");
                    this._location.back();
                }
                catch (err) {
                    console.log(err);
                }
            }
            else {
                this.toastr.error("please provide the required values to proceed further.", "Validation Error");
            }
        });
    }
    calcTotal(event) {
        let total = this.proposalForm.Step2.value.budget_dev_cost +
            this.proposalForm.Step2.value.budget_capex_cost +
            this.proposalForm.Step2.value.budget_install_cost +
            this.proposalForm.Step2.value.budget_operation_cost;
        this.proposalForm.Step2.controls.budget_total_cost.setValue(total);
    }
    handlePastPilotDocUploads(files) {
        let pastPilotDocsBeforeChange = this.proposalData.data.reports_of_past_pilot;
        // splitting the array with
        let newFiles = files.filter((e) => {
            if (typeof e == "object")
                return e;
        });
        let updatedFilePaths = files.filter((e) => {
            if (typeof e == "string") {
                return e;
            }
        });
        if (pastPilotDocsBeforeChange) {
            this.removePastPilotDocs = pastPilotDocsBeforeChange.filter((x) => !updatedFilePaths.includes(x));
        }
        this.pastPilotDocs = newFiles;
        // console.log("to be removed", this.removePastPilotDocs);
        // console.log("new files updated", this.pastPilotDocs);
    }
    handleAdditionalDocUploads(files) {
        let additionalDocsBeforeChange = this.proposalData.data.additional_details;
        // splitting the array with
        let newFiles = files.filter((e) => {
            if (typeof e == "object")
                return e;
        });
        let updatedFilePaths = files.filter((e) => {
            if (typeof e == "string") {
                return e;
            }
        });
        if (additionalDocsBeforeChange) {
            this.removeAdditionalDocs = additionalDocsBeforeChange.filter((x) => !updatedFilePaths.includes(x));
        }
        this.additionalDocs = newFiles;
        // console.log("to be removed", this.removeAdditionalDocs);
        // console.log("new files updated", this.additionalDocs);
    }
    removeFilesPilotDocs(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(1);
            if (this.removePastPilotDocs.length > 0) {
                yield this._app.removePastPilotDocs({
                    slug: { id: id },
                    data: { remove_paths: this.removePastPilotDocs },
                });
            }
        });
    }
    removeFilesAdditionalDocs(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(3);
            if (this.removeAdditionalDocs.length > 0) {
                yield this._app.removeAdditionalDocs({
                    slug: { id: id },
                    data: { remove_paths: this.removeAdditionalDocs },
                });
            }
        });
    }
    uploadNewPilotDocs(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(2);
            if (!this.proposalData.data.reports_of_past_pilot) {
                if (this.pastPilotDocs.length > 0) {
                    let formData = new FormData();
                    formData.append("slug", id);
                    this.pastPilotDocs.forEach((file) => {
                        formData.append("pilot_docs", file);
                    });
                    yield this._app.uploadPastPilotdocs(formData);
                }
            }
            else {
                if (this.pastPilotDocs.length > 0) {
                    let formData = new FormData();
                    formData.append("slug", id);
                    this.pastPilotDocs.forEach((file) => {
                        formData.append("pilot_docs", file);
                    });
                    yield this._app.addToPastPilotdocs(formData);
                }
            }
        });
    }
    uploadNewAdditionalFiles(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(4);
            if (!this.proposalData.data.additional_details) {
                if (this.additionalDocs.length > 0) {
                    let formData = new FormData();
                    formData.append("slug", id);
                    this.additionalDocs.forEach((file) => {
                        formData.append("additional_docs", file);
                    });
                    yield this._app.uploadAdditionaldocs(formData);
                }
            }
            else {
                if (this.additionalDocs.length > 0) {
                    let formData = new FormData();
                    formData.append("slug", id);
                    this.additionalDocs.forEach((file) => {
                        formData.append("additional_docs", file);
                    });
                    yield this._app.addToAdditionaldocs(formData);
                }
            }
        });
    }
};
EditProposalComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_10__["DashboardmoduleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserState"])
], EditProposalComponent.prototype, "loggedInUser$", void 0);
EditProposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-proposal",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-proposal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/edit-proposal/edit-proposal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-proposal.component.css */ "./src/app/provider/dashboard/screens/edit-proposal/edit-proposal.component.css")).default]
    })
], EditProposalComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/screens/eois/eois.component.css":
/*!********************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/eois/eois.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".a-tab-wrp > ul > li > a {\r\n\tbackground: rgba(79, 79, 79, 0.1);\r\n\tborder-radius: 100px;\r\n\tcolor: #363636;\r\n\tpadding: 8px 20px;\r\n}\r\n.a-tab-wrp > ul > li {\r\n\tmargin-right: 20px;\r\n}\r\n.a-tab-wrp > ul > li.active > a {\r\n\tcolor: #fff;\r\n\tbackground: #4f4f4f;\r\n}\r\n.card-wrap {\r\n\tmin-height: 80vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvZW9pcy9lb2lzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQ0FBaUM7Q0FDakMsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvZW9pcy9lb2lzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYS10YWItd3JwID4gdWwgPiBsaSA+IGEge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoNzksIDc5LCA3OSwgMC4xKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHRjb2xvcjogIzM2MzYzNjtcclxuXHRwYWRkaW5nOiA4cHggMjBweDtcclxufVxyXG4uYS10YWItd3JwID4gdWwgPiBsaSB7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpLmFjdGl2ZSA+IGEge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6ICM0ZjRmNGY7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXAge1xyXG5cdG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/provider/dashboard/screens/eois/eois.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/eois/eois.component.ts ***!
  \*******************************************************************/
/*! exports provided: EoisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EoisComponent", function() { return EoisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboardmodule.service */ "./src/app/provider/dashboard/dashboardmodule.service.ts");



let EoisComponent = class EoisComponent {
    constructor(_app) {
        this._app = _app;
        this.query = {
            filter: {
                status: "active",
                proposal_received: false,
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
    }
    ngOnInit() {
        this.fetchEois();
    }
    fetchEois() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.eoiData = yield this._app.getEois(this.query);
            this.isLoading = false;
        });
    }
};
EoisComponent.ctorParameters = () => [
    { type: _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_2__["DashboardmoduleService"] }
];
EoisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-eois",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eois.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/eois/eois.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eois.component.css */ "./src/app/provider/dashboard/screens/eois/eois.component.css")).default]
    })
], EoisComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/screens/pilot-proposal/pilot-proposal.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/pilot-proposal/pilot-proposal.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-challenge-brief-parent {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.loader-wrp {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\tmin-height: 100vh;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.challenge-step-tabs {\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.challenge-step-tabs div {\r\n\tpadding: 0.736rem;\r\n\tfont-size: 0.842rem;\r\n\tcolor: var(--body-grey);\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n\tcursor: pointer;\r\n}\r\n\r\n.challenge-step-tabs div:not(:last-child) {\r\n\tborder-bottom: 1px solid #dedede;\r\n}\r\n\r\n.challenge-step-tabs div:hover,\r\n.challenge-step-tabs div.active {\r\n\tbackground: #dedede;\r\n}\r\n\r\n.step-form-parent {\r\n\tpadding: 36px;\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.flex-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.flex-row > div {\r\n\tflex-basis: 48%;\r\n}\r\n\r\nlabel {\r\n\tfont-size: 0.631rem;\r\n\tline-height: 1.6;\r\n}\r\n\r\nlabel .field-desp {\r\n\topacity: 0.7;\r\n\tfont-weight: 300;\r\n}\r\n\r\n.a-budget-wrp {\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.a-budget-total-wrp {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n\r\n.act-clr {\r\n\tcolor: var(--primary-green) !important;\r\n}\r\n\r\n.act-span {\r\n\tpadding: 3px 6px;\r\n\tborder: 1px solid var(--primary-green);\r\n\tfont-size: 12px;\r\n}\r\n\r\n.inputfile {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\n.inputfile + label {\r\n\tcolor: var(--primary-green);\r\n\tbackground-color: #ffff;\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid #dedede;\r\n\twidth: 100%;\r\n}\r\n\r\n.inputfile + label {\r\n\tcursor: pointer; /* \"hand\" cursor */\r\n}\r\n\r\n.inputfile:focus + label,\r\n.inputfile + label:hover {\r\n\tborder: 1px solid var(--primary-green);\r\n}\r\n\r\n.dynamic-row {\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvcGlsb3QtcHJvcG9zYWwvcGlsb3QtcHJvcG9zYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQix3QkFBdUI7U0FBdkIsdUJBQXVCO0NBQ3ZCLHlCQUFtQjtTQUFuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixpQ0FBeUI7Q0FBekIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IseUJBQThCO1NBQTlCLDhCQUE4QjtDQUM5QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsc0NBQXNDO0NBQ3RDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjs7QUFDQTtDQUNDLDJCQUEyQjtDQUMzQix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLHlCQUF5QjtDQUN6QixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxlQUFlLEVBQUUsa0JBQWtCO0FBQ3BDOztBQUVBOztDQUVDLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLHlCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkIseUJBQThCO1NBQTlCLDhCQUE4QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2Rhc2hib2FyZC9zY3JlZW5zL3BpbG90LXByb3Bvc2FsL3BpbG90LXByb3Bvc2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1jaGFsbGVuZ2UtYnJpZWYtcGFyZW50IHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmxvYWRlci13cnAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNoYWxsZW5nZS1zdGVwLXRhYnMge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uY2hhbGxlbmdlLXN0ZXAtdGFicyBkaXYge1xyXG5cdHBhZGRpbmc6IDAuNzM2cmVtO1xyXG5cdGZvbnQtc2l6ZTogMC44NDJyZW07XHJcblx0Y29sb3I6IHZhcigtLWJvZHktZ3JleSk7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGFsbGVuZ2Utc3RlcC10YWJzIGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG5cclxuLmNoYWxsZW5nZS1zdGVwLXRhYnMgZGl2OmhvdmVyLFxyXG4uY2hhbGxlbmdlLXN0ZXAtdGFicyBkaXYuYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kOiAjZGVkZWRlO1xyXG59XHJcblxyXG4uc3RlcC1mb3JtLXBhcmVudCB7XHJcblx0cGFkZGluZzogMzZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5mbGV4LXJvdyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1yb3cgPiBkaXYge1xyXG5cdGZsZXgtYmFzaXM6IDQ4JTtcclxufVxyXG5cclxubGFiZWwge1xyXG5cdGZvbnQtc2l6ZTogMC42MzFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxubGFiZWwgLmZpZWxkLWRlc3Age1xyXG5cdG9wYWNpdHk6IDAuNztcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYS1idWRnZXQtd3JwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hLWJ1ZGdldC10b3RhbC13cnAge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcblxyXG4uYWN0LWNsciB7XHJcblx0Y29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3Qtc3BhbiB7XHJcblx0cGFkZGluZzogM3B4IDZweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5pbnB1dGZpbGUge1xyXG5cdHdpZHRoOiAwLjFweDtcclxuXHRoZWlnaHQ6IDAuMXB4O1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuLmlucHV0ZmlsZSArIGxhYmVsIHtcclxuXHRjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dGZpbGUgKyBsYWJlbCB7XHJcblx0Y3Vyc29yOiBwb2ludGVyOyAvKiBcImhhbmRcIiBjdXJzb3IgKi9cclxufVxyXG5cclxuLmlucHV0ZmlsZTpmb2N1cyArIGxhYmVsLFxyXG4uaW5wdXRmaWxlICsgbGFiZWw6aG92ZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG59XHJcblxyXG4uZHluYW1pYy1yb3cge1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/provider/dashboard/screens/pilot-proposal/pilot-proposal.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/pilot-proposal/pilot-proposal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PilotProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilotProposalComponent", function() { return PilotProposalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dashboardmodule.service */ "./src/app/provider/dashboard/dashboardmodule.service.ts");











let PilotProposalComponent = class PilotProposalComponent {
    constructor(toastr, fb, _app, route, router, _location) {
        this.toastr = toastr;
        this.fb = fb;
        this._app = _app;
        this.route = route;
        this.router = router;
        this._location = _location;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        this.yearArr = lodash__WEBPACK_IMPORTED_MODULE_4__["range"](1950, new Date().getFullYear() + 1);
        this.weekArr = [1, 2, 3, 4, 5];
        this.monthArr = [1, 2, 3, 4];
        this.proposalForm = {
            Step1: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
            Step2: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
            Step3: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
            Step4: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
        };
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
            Step4: false,
        };
        this.pastPilotDocs = [];
        this.additionalDocs = [];
        this.route.queryParams.subscribe((params) => {
            this.eoiId = params.eoi_id;
            this.anchorId = params.challenge_brief_id;
        });
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
        });
        this.Editor.defaultConfig = {
            toolbar: {
                items: ["heading", "|", "bold", "italic", "bulletedList", "numberedList", "link"],
            },
            image: {
                toolbar: ["imageStyle:full", "imageStyle:side", "|", "imageTextAlternative"],
            },
            table: {
                contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
            },
            language: "en",
        };
    }
    ngOnInit() {
        this.proposalStep1 = false;
        this.proposalStep2 = true;
        this.proposalStep3 = true;
        this.proposalStep4 = true;
        this.proposalForm = {
            Step1: this.fb.group({
                customisation_details: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                outcomes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            }),
            Step2: this.fb.group({
                pilot_months: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                pilot_weeks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                commission_months: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                commission_weeks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                implementation_months: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                implementation_weeks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                budget_dev_cost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                budget_capex_cost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                budget_install_cost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                budget_operation_cost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                budget_total_cost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            }),
            Step3: this.fb.group({
                track_record: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                team_size: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                team_members: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([
                    new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        expertise: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    }),
                ]),
            }),
            Step4: this.fb.group({
                dependencies: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            }),
        };
        this.teamMembers = this.proposalForm.Step3.get("team_members");
    }
    get formControlStep1() {
        return this.proposalForm.Step1.controls;
    }
    get formControlStep2() {
        return this.proposalForm.Step2.controls;
    }
    get formControlStep3() {
        return this.proposalForm.Step3.controls;
    }
    get formControlStep4() {
        return this.proposalForm.Step4.controls;
    }
    addMember() {
        if (this.teamMembers.valid) {
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                expertise: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
            this.teamMembers.push(group);
        }
        else {
            this.toastr.error("please fill out the required values to add new row", "Validation Error");
        }
    }
    removeMember(index) {
        this.teamMembers.removeAt(index);
    }
    stepFormSubmit(formIndex) {
        switch (formIndex) {
            case "Step1": {
                this.isSubmitted.Step1 = true;
                this.ShowNextStep(formIndex);
                break;
            }
            case "Step2": {
                this.isSubmitted.Step2 = true;
                this.ShowNextStep(formIndex);
                break;
            }
            case "Step3": {
                this.isSubmitted.Step3 = true;
                this.ShowNextStep(formIndex);
                break;
            }
            case "Step4": {
                this.isSubmitted.Step4 = true;
                this.ShowNextStep(formIndex);
                break;
            }
        }
    }
    ShowNextStep(formIndex) {
        if (formIndex == "Step1" && this.proposalForm.Step1.valid) {
            this.gotoStep("step2");
            window.scrollTo(0, 0);
        }
        else if (formIndex == "Step2" && this.proposalForm.Step2.valid) {
            this.gotoStep("step3");
            window.scrollTo(0, 0);
        }
        else if (formIndex == "Step3" && this.proposalForm.Step3.valid) {
            this.gotoStep("step4");
            window.scrollTo(0, 0);
        }
        else if (formIndex == "Step4" && this.proposalForm.Step4.valid) {
            this.createProposal();
        }
        else {
            this.toastr.error("", "Please provide the required values to proceed further");
        }
    }
    gotoStep(step) {
        switch (step) {
            case "step1": {
                this.proposalStep1 = false;
                this.proposalStep2 = true;
                this.proposalStep3 = true;
                this.proposalStep4 = true;
                break;
            }
            case "step2": {
                this.proposalStep1 = true;
                this.proposalStep2 = false;
                this.proposalStep3 = true;
                this.proposalStep4 = true;
                break;
            }
            case "step3": {
                this.proposalStep1 = true;
                this.proposalStep2 = true;
                this.proposalStep3 = false;
                this.proposalStep4 = true;
                break;
            }
            case "step4": {
                this.proposalStep1 = true;
                this.proposalStep2 = true;
                this.proposalStep3 = true;
                this.proposalStep4 = false;
                break;
            }
        }
    }
    createProposal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubmitted.Step4 = true;
            if (this.proposalForm.Step1.valid && this.proposalForm.Step2.valid && this.proposalForm.Step3.valid && this.proposalForm.Step4.valid) {
                this.loading = true;
                let proposalData = {
                    data: {
                        customisation_details: this.proposalForm.Step1.value.customisation_details,
                        outcomes: this.proposalForm.Step1.value.outcomes,
                        time_of_pilot: {
                            months: this.proposalForm.Step2.value.pilot_months,
                            weeks: this.proposalForm.Step2.value.pilot_weeks,
                        },
                        time_of_commission: {
                            months: this.proposalForm.Step2.value.commission_months,
                            weeks: this.proposalForm.Step2.value.commission_weeks,
                        },
                        implementation_monitoring_timeline: {
                            months: this.proposalForm.Step2.value.implementation_months,
                            weeks: this.proposalForm.Step2.value.implementation_weeks,
                        },
                        budget: {
                            solution_design_dev_cost: this.proposalForm.Step2.value.budget_dev_cost,
                            capex_cost: this.proposalForm.Step2.value.budget_capex_cost,
                            installation_commission_cost: this.proposalForm.Step2.value.budget_install_cost,
                            operations_monitoring_analysis_cost: this.proposalForm.Step2.value.budget_operation_cost,
                            total_cost: this.proposalForm.Step2.value.budget_total_cost,
                        },
                        track_record: this.proposalForm.Step3.value.track_record,
                        team_size: this.proposalForm.Step3.value.team_size,
                        team_member: this.proposalForm.Step3.value.team_members,
                        dependencies: this.proposalForm.Step4.value.dependencies,
                        frg_provider_id: this.loggedInUser.userTypeId,
                        frg_eoi_id: this.eoiId,
                        frg_anchor_id: this.anchorId,
                    },
                };
                try {
                    let responseData = yield this._app.newProposal(proposalData);
                    yield Promise.all([
                        this.uploadPastPilotFiles(responseData.data.id),
                        this.uploadAdditionalFiles(responseData.data.id),
                        this._app.updateEOI({
                            slug: {
                                id: this.eoiId,
                            },
                            data: {
                                proposal_received: true,
                            },
                        }),
                    ]);
                    this.loading = false;
                    this.toastr.success("", "Proposal sent successfully");
                    this._location.back();
                }
                catch (err) {
                    console.log(err);
                }
            }
            else {
                this.toastr.error("please provide the required values to proceed further.", "Validation Error");
            }
        });
    }
    calcTotal(event) {
        let total = this.proposalForm.Step2.value.budget_dev_cost +
            this.proposalForm.Step2.value.budget_capex_cost +
            this.proposalForm.Step2.value.budget_install_cost +
            this.proposalForm.Step2.value.budget_operation_cost;
        this.proposalForm.Step2.controls.budget_total_cost.setValue(total);
    }
    handlePastPilotDocUploads(files) {
        this.pastPilotDocs = files;
    }
    handleAdditionalDocUploads(files) {
        this.additionalDocs = files;
    }
    uploadPastPilotFiles(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.pastPilotDocs.length > 0) {
                let formData = new FormData();
                formData.append("slug", id);
                this.pastPilotDocs.forEach((file) => {
                    formData.append("pilot_docs", file);
                });
                yield this._app.uploadPastPilotdocs(formData);
            }
        });
    }
    uploadAdditionalFiles(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.additionalDocs.length > 0) {
                let formData = new FormData();
                formData.append("slug", id);
                this.additionalDocs.forEach((file) => {
                    formData.append("additional_docs", file);
                });
                yield this._app.uploadAdditionaldocs(formData);
            }
        });
    }
};
PilotProposalComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_10__["DashboardmoduleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserState"])
], PilotProposalComponent.prototype, "loggedInUser$", void 0);
PilotProposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-pilot-proposal",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pilot-proposal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/pilot-proposal/pilot-proposal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pilot-proposal.component.css */ "./src/app/provider/dashboard/screens/pilot-proposal/pilot-proposal.component.css")).default]
    })
], PilotProposalComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/screens/pilots/pilots.component.css":
/*!************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/pilots/pilots.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".a-tab-wrp > ul > li > a {\r\n\tbackground: rgba(79, 79, 79, 0.1);\r\n\tborder-radius: 100px;\r\n\tcolor: #363636;\r\n\tpadding: 8px 20px;\r\n}\r\n.a-tab-wrp > ul > li {\r\n\tmargin-right: 20px;\r\n}\r\n.a-tab-wrp > ul > li.active > a {\r\n\tcolor: #fff;\r\n\tbackground: #4f4f4f;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvcGlsb3RzL3BpbG90cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUNBQWlDO0NBQ2pDLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcm92aWRlci9kYXNoYm9hcmQvc2NyZWVucy9waWxvdHMvcGlsb3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYS10YWItd3JwID4gdWwgPiBsaSA+IGEge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoNzksIDc5LCA3OSwgMC4xKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHRjb2xvcjogIzM2MzYzNjtcclxuXHRwYWRkaW5nOiA4cHggMjBweDtcclxufVxyXG4uYS10YWItd3JwID4gdWwgPiBsaSB7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpLmFjdGl2ZSA+IGEge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6ICM0ZjRmNGY7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/provider/dashboard/screens/pilots/pilots.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/pilots/pilots.component.ts ***!
  \***********************************************************************/
/*! exports provided: PilotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilotsComponent", function() { return PilotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var src_app_seeker_challenge_dashboard_dashboardmain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/seeker/challenge-dashboard/dashboardmain.service */ "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts");





let PilotsComponent = class PilotsComponent {
    constructor(_dash) {
        this._dash = _dash;
        this.allPilotsCount = 0;
        this.completedPilotsCount = 0;
        this.onGoingPilotsCount = 0;
        this.yetToStartCount = 0;
        this.queryCompleted = {
            filter: {
                status: "active",
                proposal_stage: "Pilot Ready",
                pilot_status: "Completed",
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
        this.queryOnGoing = {
            filter: {
                status: "active",
                proposal_stage: "Pilot Ready",
                pilot_status: "Ongoing",
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
        this.queryYetToStart = {
            filter: {
                status: "active",
                proposal_stage: "Pilot Ready",
                pilot_status: "Yet to Start",
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
            this.queryCompleted.filter.frg_provider_id = this.loggedInUser.userTypeId;
            this.queryOnGoing.filter.frg_provider_id = this.loggedInUser.userTypeId;
            this.queryYetToStart.filter.frg_provider_id = this.loggedInUser.userTypeId;
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield Promise.all([this.fetchCompletedPilots(), this.fetchOnGoingPilots(), this.fetchYetToStart()]);
        });
    }
    fetchCompletedPilots() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.completedLoading = true;
            this.completedPilots = yield this._dash.getProposals(this.queryCompleted);
            this.completedPilotsCount = this.completedPilots.total_results;
            this.completedLoading = false;
            // console.log("Completed", this.completedPilots.data);
        });
    }
    fetchOnGoingPilots() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.onGoingLoading = true;
            this.onGoingPilots = yield this._dash.getProposals(this.queryOnGoing);
            this.onGoingPilotsCount = this.onGoingPilots.total_results;
            this.onGoingLoading = false;
        });
    }
    fetchYetToStart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.yetToStartLoading = true;
            this.yetToStart = yield this._dash.getProposals(this.queryYetToStart);
            this.yetToStartCount = this.yetToStart.total_results;
            this.yetToStartLoading = false;
        });
    }
    handleCompletedPilots(pageIndex) {
        this.queryCompleted.pg.skip = (pageIndex - 1) * this.queryCompleted.pg.limit;
        this.fetchCompletedPilots();
    }
    handleOnGoingPilots(pageIndex) {
        this.queryOnGoing.pg.skip = (pageIndex - 1) * this.queryOnGoing.pg.limit;
        this.fetchOnGoingPilots();
    }
    handleQueryYetToStart(pageIndex) {
        this.queryYetToStart.pg.skip = (pageIndex - 1) * this.queryYetToStart.pg.limit;
        this.fetchYetToStart();
    }
};
PilotsComponent.ctorParameters = () => [
    { type: src_app_seeker_challenge_dashboard_dashboardmain_service__WEBPACK_IMPORTED_MODULE_4__["DashboardmainService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_2__["LoggedInUserState"])
], PilotsComponent.prototype, "loggedInUser$", void 0);
PilotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pilots',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pilots.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/pilots/pilots.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pilots.component.css */ "./src/app/provider/dashboard/screens/pilots/pilots.component.css")).default]
    })
], PilotsComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/screens/proposals/proposals.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/proposals/proposals.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".a-tab-wrp > ul > li > a {\r\n\tbackground: rgba(79, 79, 79, 0.1);\r\n\tborder-radius: 100px;\r\n\tcolor: #363636;\r\n\tpadding: 8px 20px;\r\n}\r\n.a-tab-wrp > ul > li {\r\n\tmargin-right: 20px;\r\n}\r\n.a-tab-wrp > ul > li.active > a {\r\n\tcolor: #fff;\r\n\tbackground: #4f4f4f;\r\n}\r\n.tab-pane .content {\r\n\tmin-height: 80vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvcHJvcG9zYWxzL3Byb3Bvc2Fscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUNBQWlDO0NBQ2pDLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2Rhc2hib2FyZC9zY3JlZW5zL3Byb3Bvc2Fscy9wcm9wb3NhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hLXRhYi13cnAgPiB1bCA+IGxpID4gYSB7XHJcblx0YmFja2dyb3VuZDogcmdiYSg3OSwgNzksIDc5LCAwLjEpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cdGNvbG9yOiAjMzYzNjM2O1xyXG5cdHBhZGRpbmc6IDhweCAyMHB4O1xyXG59XHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmEtdGFiLXdycCA+IHVsID4gbGkuYWN0aXZlID4gYSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogIzRmNGY0ZjtcclxufVxyXG5cclxuLnRhYi1wYW5lIC5jb250ZW50IHtcclxuXHRtaW4taGVpZ2h0OiA4MHZoO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/provider/dashboard/screens/proposals/proposals.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/proposals/proposals.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProposalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalsComponent", function() { return ProposalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboardmodule.service */ "./src/app/provider/dashboard/dashboardmodule.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");





let ProposalsComponent = class ProposalsComponent {
    constructor(_dash) {
        this._dash = _dash;
        this.allProposalCount = 0;
        this.prePilotCount = 0;
        this.pilotReadyCount = 0;
        this.queryAll = {
            filter: {
                status: "active",
                proposal_stage: ["New", "Pilot Ready", "Pre-Pilot"],
                pilot_status: "Yet to Start",
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
        this.queryPilotReady = {
            filter: {
                status: "active",
                proposal_stage: "Pilot Ready",
                pilot_status: "Yet to Start",
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
        this.queryPrePilot = {
            filter: {
                status: "active",
                proposal_stage: "Pre-Pilot",
            },
            sort: "created_at DESC",
            pg: {
                limit: 20,
                skip: 0,
            },
        };
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
            this.queryAll.filter.frg_provider_id = this.loggedInUser.userTypeId;
            this.queryPilotReady.filter.frg_provider_id = this.loggedInUser.userTypeId;
            this.queryPrePilot.filter.frg_provider_id = this.loggedInUser.userTypeId;
        });
    }
    ngOnInit() {
        this.fetchAllProposals();
    }
    fetchAllProposals() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.allProposals = yield this._dash.getProposals(this.queryAll);
            this.allProposalCount = this.allProposals.total_results;
            this.prePilotProposals = yield this._dash.getProposals(this.queryPrePilot);
            this.prePilotCount = this.prePilotProposals.total_results;
            this.pilotReadyProposals = yield this._dash.getProposals(this.queryPilotReady);
            this.pilotReadyCount = this.pilotReadyProposals.total_results;
            this.isLoading = false;
        });
    }
    handleAllPagination() { }
};
ProposalsComponent.ctorParameters = () => [
    { type: _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_2__["DashboardmoduleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__["LoggedInUserState"])
], ProposalsComponent.prototype, "loggedInUser$", void 0);
ProposalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-proposals",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./proposals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/proposals/proposals.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./proposals.component.css */ "./src/app/provider/dashboard/screens/proposals/proposals.component.css")).default]
    })
], ProposalsComponent);



/***/ }),

/***/ "./src/app/provider/dashboard/screens/unsolicited-proposal-provider/unsolicited-proposal-provider.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/unsolicited-proposal-provider/unsolicited-proposal-provider.component.css ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .a-tab-wrp > ul > li > a {\r\n\tbackground: rgba(79, 79, 79, 0.1);\r\n\tborder-radius: 100px;\r\n\tcolor: #363636;\r\n\tpadding: 8px 20px;\r\n}\r\n.a-tab-wrp > ul > li {\r\n\tmargin-right: 20px;\r\n}\r\n.a-tab-wrp > ul > li.active > a {\r\n\tcolor: #fff;\r\n\tbackground: #4f4f4f;\r\n}\r\n\r\n.tab-pane .content {\r\n\tmin-height: 80vh;\r\n} */\r\n\r\n\r\n/* Card */\r\n\r\n\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n\r\n\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n\r\n\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n\r\n\r\n.card-content {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n\r\n.card-content-grid {\r\n\tdisplay: grid;\r\n\tgrid-column-gap: 30px;\r\n\tgrid-template-columns: 3fr 1fr 1fr auto;\r\n}\r\n\r\n\r\n.flex-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n\r\n.a-review-appl-img-wrp {\r\n\tmargin-right: 25px;\r\n}\r\n\r\n\r\n.a-review-appl-img-wrp img {\r\n\tmin-width: 88px;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n\r\n.status-pill {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 10px 20px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid #acb1c1;\r\n\tborder-radius: 100px;\r\n}\r\n\r\n\r\n.status-pill.onhold {\r\n\t/* color: #7a600f;\r\n\tborder: 1px solid #fbc41f;\r\n\tbackground: rgba(251, 196, 31, 0.1); */\r\n\tpadding-left: 36px;\r\n}\r\n\r\n\r\n.status-pill.onhold::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #fbc41f;\r\n}\r\n\r\n\r\n.status-pill.onhold,\r\n.status-pill.rejected,\r\n.status-pill.completed {\r\n\tpadding-left: 36px;\r\n}\r\n\r\n\r\n.status-pill.rejected::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 16px;\r\n\tborder-radius: 50%;\r\n\tbackground: #f8483d;\r\n}\r\n\r\n\r\n.status-pill.completed::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #19c8a6;\r\n}\r\n\r\n\r\n.g-danger-clr {\r\n\tcolor: #f8483d;\r\n}\r\n\r\n\r\n.g-danger-bg {\r\n\tbackground-color: #f8483d;\r\n}\r\n\r\n\r\n.l-sbt-btn{\r\n\tfont-size: 14px;\r\n    padding: 10px 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZGFzaGJvYXJkL3NjcmVlbnMvdW5zb2xpY2l0ZWQtcHJvcG9zYWwtcHJvdmlkZXIvdW5zb2xpY2l0ZWQtcHJvcG9zYWwtcHJvdmlkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRzs7O0FBR0gsU0FBUzs7O0FBQ1Q7Q0FDQyxzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7OztBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCOzs7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQjs7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLHVTQUF1UztDQUN2Uyw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQix1Q0FBdUM7QUFDeEM7OztBQUVBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IseUJBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQix5QkFBOEI7U0FBOUIsOEJBQThCO0FBQy9COzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsdUNBQXVDO0FBQ3hDOzs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkIseUJBQThCO1NBQTlCLDhCQUE4QjtBQUMvQjs7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7OztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjs7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsb0JBQW9CO0FBQ3JCOzs7QUFFQTtDQUNDOzt1Q0FFc0M7Q0FDdEMsa0JBQWtCO0FBQ25COzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixTQUFTO0NBQ1QsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7OztBQUVBOzs7Q0FHQyxrQkFBa0I7QUFDbkI7OztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osU0FBUztDQUNULFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCOzs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7O0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7OztBQUNBO0NBQ0MsZUFBZTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2Rhc2hib2FyZC9zY3JlZW5zL3Vuc29saWNpdGVkLXByb3Bvc2FsLXByb3ZpZGVyL3Vuc29saWNpdGVkLXByb3Bvc2FsLXByb3ZpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuYS10YWItd3JwID4gdWwgPiBsaSA+IGEge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoNzksIDc5LCA3OSwgMC4xKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHRjb2xvcjogIzM2MzYzNjtcclxuXHRwYWRkaW5nOiA4cHggMjBweDtcclxufVxyXG4uYS10YWItd3JwID4gdWwgPiBsaSB7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpLmFjdGl2ZSA+IGEge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6ICM0ZjRmNGY7XHJcbn1cclxuXHJcbi50YWItcGFuZSAuY29udGVudCB7XHJcblx0bWluLWhlaWdodDogODB2aDtcclxufSAqL1xyXG5cclxuXHJcbi8qIENhcmQgKi9cclxuLmEtcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQtd3JwIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmEtcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQtZm9vdGVyIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2FjYjFjMTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzEzJyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCAxMyA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTIuODE3NCAxLjQxTDExLjQxOTEgLTYuNzEzNmUtMDhMNi44NjczOCA0LjU4TDIuMzE1NjMgLTUuMDQyMzRlLTA3TDAuOTE3MzgyIDEuNDFMNi44NjczOCA3LjQxTDEyLjgxNzQgMS40MVonIGZpbGw9JyUyMzRGNEY0RicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teDogOTAlO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teTogMjBweDtcclxuXHRwYWRkaW5nOiAxMHB4IDI1cHggMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQtZ3JpZCB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLWNvbHVtbi1nYXA6IDMwcHg7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDFmciBhdXRvO1xyXG59XHJcblxyXG4uZmxleC1yb3cge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5hLXJldmlldy1hcHBsLWltZy13cnAge1xyXG5cdG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG5cclxuLmEtcmV2aWV3LWFwcGwtaW1nLXdycCBpbWcge1xyXG5cdG1pbi13aWR0aDogODhweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0YmFja2dyb3VuZDogI2Y3ZjdmOTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4uc3RhdHVzLXBpbGwub25ob2xkIHtcclxuXHQvKiBjb2xvcjogIzdhNjAwZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmJjNDFmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTYsIDMxLCAwLjEpOyAqL1xyXG5cdHBhZGRpbmctbGVmdDogMzZweDtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsLm9uaG9sZDo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMHB4O1xyXG5cdGhlaWdodDogMTBweDtcclxuXHR0b3A6IDEzcHg7XHJcblx0bGVmdDogMThweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZDogI2ZiYzQxZjtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsLm9uaG9sZCxcclxuLnN0YXR1cy1waWxsLnJlamVjdGVkLFxyXG4uc3RhdHVzLXBpbGwuY29tcGxldGVkIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbC5yZWplY3RlZDo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMHB4O1xyXG5cdGhlaWdodDogMTBweDtcclxuXHR0b3A6IDEzcHg7XHJcblx0bGVmdDogMTZweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZDogI2Y4NDgzZDtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsLmNvbXBsZXRlZDo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMHB4O1xyXG5cdGhlaWdodDogMTBweDtcclxuXHR0b3A6IDEzcHg7XHJcblx0bGVmdDogMThweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZDogIzE5YzhhNjtcclxufVxyXG5cclxuLmctZGFuZ2VyLWNsciB7XHJcblx0Y29sb3I6ICNmODQ4M2Q7XHJcbn1cclxuLmctZGFuZ2VyLWJnIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjg0ODNkO1xyXG59XHJcbi5sLXNidC1idG57XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/provider/dashboard/screens/unsolicited-proposal-provider/unsolicited-proposal-provider.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/provider/dashboard/screens/unsolicited-proposal-provider/unsolicited-proposal-provider.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: UnsolicitedProposalProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsolicitedProposalProviderComponent", function() { return UnsolicitedProposalProviderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");
/* harmony import */ var _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboardmodule.service */ "./src/app/provider/dashboard/dashboardmodule.service.ts");






let UnsolicitedProposalProviderComponent = class UnsolicitedProposalProviderComponent {
    constructor(_ds, router) {
        this._ds = _ds;
        this.router = router;
        this.post_data = {
            "filter": {},
            "pg": {
                limit: 10,
                skip: 0
            }
        };
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
        });
    }
    ngOnInit() {
        // console.log(this.loggedInUser)
        this.getUnsolicitedProposals();
    }
    getUnsolicitedProposals() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.post_data.filter.frg_provider_id = this.loggedInUser.userTypeId;
            let resp = yield this._ds.getUnsolicitedChallenges(this.post_data);
            if (resp.data.length) {
                this.uns_proposal = resp;
            }
        });
    }
    handlePagination(pageNumber) {
        this.post_data.pg.skip = (pageNumber - 1) * this.post_data.pg.limit;
        this.getUnsolicitedProposals();
    }
};
UnsolicitedProposalProviderComponent.ctorParameters = () => [
    { type: _dashboardmodule_service__WEBPACK_IMPORTED_MODULE_5__["DashboardmoduleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__["LoggedInUserState"])
], UnsolicitedProposalProviderComponent.prototype, "loggedInUser$", void 0);
UnsolicitedProposalProviderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unsolicited-proposal-provider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unsolicited-proposal-provider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/dashboard/screens/unsolicited-proposal-provider/unsolicited-proposal-provider.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unsolicited-proposal-provider.component.css */ "./src/app/provider/dashboard/screens/unsolicited-proposal-provider/unsolicited-proposal-provider.component.css")).default]
    })
], UnsolicitedProposalProviderComponent);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map