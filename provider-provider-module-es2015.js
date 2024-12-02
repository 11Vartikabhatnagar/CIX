(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["provider-provider-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/all-solutions/all-solutions.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/all-solutions/all-solutions.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<profile-top-card [profileData]=\"profileData?.data\" [loading]=\"profileLoading\" [viewType]=\"'user'\"></profile-top-card>\r\n<section class=\"draft-content\">\r\n\t<div class=\"container g-mt-30 g-mb-30\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t<div class=\"panel-group l-sol-catg-panel-grp\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\t\t\t\t\t<div class=\"panel panel-default l-sol-catg-panel-1\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n\t\t\t\t\t\t\t<div class=\"g-cursor-pointer g-fs-08 l-sol-catg-acc-title g-fw-500\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\">\r\n\t\t\t\t\t\t\t\t<span routerLink=\"/provider/user/{{ user_slug }}\">Profile</span>\r\n\t\t\t\t\t\t\t\t<span class=\"a-seeker-edit-opt-icon g-float-right\"><i class=\"fas fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel panel-default l-sol-catg-panel-2\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tclass=\"g-cursor-pointer g-fs-08 l-sol-catg-acc-title g-fw-500\"\r\n\t\t\t\t\t\t\t\tdata-toggle=\"collapse\"\r\n\t\t\t\t\t\t\t\tdata-parent=\"#accordion\"\r\n\t\t\t\t\t\t\t\thref=\"#l-sol-catg-acc-1\"\r\n\t\t\t\t\t\t\t\taria-expanded=\"true\"\r\n\t\t\t\t\t\t\t\taria-controls=\"l-sol-catg-acc-1\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\tSolutions\r\n\t\t\t\t\t\t\t\t<span class=\"a-seeker-edit-opt-icon g-float-right\"><i class=\"fas fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div id=\"l-sol-catg-acc-1\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t<ul class=\"l-sol-catg-acc-1-ul\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"g-fs-08\">\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"g-cursor-pointer active\" routerLink=\"/provider/user/{{ user_slug }}/all-solutions\"> Drafts </a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"g-fs-08\">\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"g-cursor-pointer\" routerLink=\"/provider/user/{{ user_slug }}/solutions/create\"> Add New Solution + </a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<!-- <ng-container *ngFor=\"let solution of all_solutions\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"g-fs-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-cursor-pointer\" (click)=\"editSolution(solution.id)\">{{ solution.name }}</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ng-container> -->\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t<ng-container *ngIf=\"!loading\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"all_solutions.length > 0; else noDrafts\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\" *ngFor=\"let solution of all_solutions; let i = index\">\r\n\t\t\t\t\t\t\t\t<draft-item [Id]=\"i\" [solutionData]=\"solution\" (onDelete)=\"handleDraftDelete($event)\"></draft-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #noDrafts>\r\n\t\t\t\t\t\t\t<div class=\"g-fw-500 g-black7-clr\">No drafts found</div>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"loading\">\r\n\t\t\t\t\t<div class=\"section-loader\">\r\n\t\t\t\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/application-cataloging/application-cataloging.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/application-cataloging/application-cataloging.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-city-wrp g-pt-30 g-pb-30\">\r\n\t<ng-container *ngIf=\"!initLoading\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t<div class=\"g-pb-14\">\r\n\t\t\t\t\t\t\t<ul class=\"a-step-form-active-list text-center g-p-0\">\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'g-p-bg': solutionStep1,\r\n\t\t\t\t\t\t\t\t\t\t'primary-grey-bg': !solutionStep1\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"gotoStep('step1')\"\r\n\t\t\t\t\t\t\t\t></li>\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'g-p-bg': solutionStep2,\r\n\t\t\t\t\t\t\t\t\t\t'primary-grey-bg': !solutionStep2\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"gotoStep('step2')\"\r\n\t\t\t\t\t\t\t\t></li>\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'g-p-bg': solutionStep3,\r\n\t\t\t\t\t\t\t\t\t\t'primary-grey-bg': !solutionStep3\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"gotoStep('step3')\"\r\n\t\t\t\t\t\t\t\t></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"add-form-wrapper2\">\r\n\t\t\t\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t\t\t\t<div class=\"step-wrapper\" *ngIf=\"solutionStep1\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 title-clr g-pb-04\">Solution Application</div>\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"addSolutionStep1\" *ngIf=\"addSolutionStep1 && addSolutionStep2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"sol_name\" class=\"g-fs-07 lable-grey g-fw-400\">Application Name<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"sol_name\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: Water Body Preservation\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionName\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep1.solutionName.touched || isSubmitted.Step1) && addSolutionControlStep1.solutionName?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.solutionName.touched || isSubmitted.Step1) && addSolutionControlStep1.solutionName.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Name is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"market_domain\" class=\"g-fs-07 lable-grey g-fw-400\"> Market Domain<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"multiselect-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"frg-multiselect-dropdown\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[placeholder]=\"'Select Challenge Sector'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[settings]=\"dropdownSettings2\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[data]=\"marketDomainList\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"marketDomain\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep1.marketDomain.touched || isSubmitted.Step1) && addSolutionControlStep1.marketDomain?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.marketDomain.touched || isSubmitted.Step1) && addSolutionControlStep1.marketDomain.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMarket Domain is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"solutionBrief\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tSolution Brief<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> Describe the solution (product/service) in terms of the problems addressed, technology used and the relevance to cities. </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"XYZ is an AIoT wearable that continuously monitors & records vital data of patients such as parameter1, parameter2, etc. The data is then made available to the medical practitioners for remote access over a dashboard for diagnosis of the disease progression in patients. AI algorithm that powers XYZ studies the patterns of the vitals and flags abnormalities in a patient along with prescriptive suggestions to help medical practitioners make better decisions for providing apt treatment to patients.\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionBrief\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep1.solutionBrief.touched || isSubmitted.Step1) && addSolutionControlStep1.solutionBrief?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.solutionBrief.touched || isSubmitted.Step1) && addSolutionControlStep1.solutionBrief.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Brief is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.solutionBrief.touched || isSubmitted.Step1) && addSolutionControlStep1.solutionBrief.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.solutionBrief.touched || isSubmitted.Step1) && addSolutionControlStep1.solutionBrief.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"valueProposition\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tValue Proposition<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> State the Value Proposition of the product/service with measured benefits in the consumer market and the application. </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Hospitals have insufficient capacity & resources to monitor a large number of patients during a crisis scenario like a pandemic. XYZ wearable enables remote monitoring of patients’ vitals, thus helping reduce the number of doctors and medical staffs requirement by 25-30%. XYZ reduces the need for medical practitioners to be physically present to monitor patients, thereby minimizing the spread of infectious diseases.\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"valueProposition\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep1.valueProposition.touched || isSubmitted.Step1) && addSolutionControlStep1.valueProposition?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.valueProposition.touched || isSubmitted.Step1) && addSolutionControlStep1.valueProposition.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tValue Proposition is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.valueProposition.touched || isSubmitted.Step1) && addSolutionControlStep1.valueProposition.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t1000 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.valueProposition.touched || isSubmitted.Step1) && addSolutionControlStep1.valueProposition.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"tangibleBenefits\" class=\"g-fs-07 lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\t\t\tTangible Benefits<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> List in concise the Tangible benefits that your solution can offer. </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. Reduced number of non-emergency patients in the hospital<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. Medical practitioners time for patient monitoring is brought down by more than 20% <br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t3. Accurate and timely data is captured and made available anytime anywhere. <br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t4. Patients suffering of 20 different conditions such as condition1,condition2, etc. can  be remote monitored with this solution\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"tangibleBenefits\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && addSolutionControlStep1.tangibleBenefits?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && addSolutionControlStep1.tangibleBenefits.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTangible Benefits is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && addSolutionControlStep1.tangibleBenefits.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && addSolutionControlStep1.tangibleBenefits.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"solutionStep1Submit()\">Save and Next</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t\t\t\t<div class=\"step-wrapper\" *ngIf=\"solutionStep2\">\r\n\t\t\t\t\t\t\t\t<div class=\"back-btn-wrp g-fs-07 g-fw-500 g-mb-10\">\r\n\t\t\t\t\t\t\t\t\t<span (click)=\"gotoStep('step1')\" class=\"g-cursor-pointer g-transition body-light-clr back-btn\" [ngClass]=\"{ disable: !solutionStep1 }\"> &#60; Back </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"addSolutionStep2\" *ngIf=\"addSolutionStep1 && addSolutionStep2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"solutionAdvantages\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tSolution Advantages<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tExplain the advantages of the proposed solution in terms of technology, differentiation, ease of adoption by users, and the ability to deliver at a distinctive Value-Cost\r\n\t\t\t\t\t\t\t\t\t\t\t\tadvantage to the city at a competitive price through innovative revenue models.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. Reduces the number of doctors required to attend to patients in person, thereby freeing up doctors to handle more critical cases<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. The device is a simple wearable & is intuitive to use for the end-users, thus requires no training—reducing the dependency on staffs for installing the device<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t3. A single device costs Rs. ___, which is ___ times less than what is already available in the market and with additional feature to monitor parameter 3<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t4. The components are locally sourced and has no dependency on exports for manufacturing the devices, hence requires relatively less time for manufacturing & distribution<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionAdvantages\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionAdvantages?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionAdvantages.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Advantages is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionAdvantages.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionAdvantages.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"solutionReadiness\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tSolution Readiness<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHow ready is your solution to emerge as a Commercial product for the urban ecosystem?, Provide details about progress achieved backed by evidence for key milestones covering\r\n\t\t\t\t\t\t\t\t\t\t\t\tproduct development, trials, paid pilots, manufacturing, industry-grade certification, distribution, etc.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. The solution is ready for pilot orders and has already demonstrated successful pilots in a few hospitals<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. The solution has ___% accuracy and is close to 90% standardisation and will be ready for manufacturing & commercial orders in the next 1 to 2 months.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionReadiness\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep2.solutionReadiness.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionReadiness?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.solutionReadiness.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionReadiness.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Readiness is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.solutionReadiness.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionReadiness.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.solutionReadiness.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionReadiness.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"trackRecord\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tTrack Record<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tFor the solution readiness level mentioned/selected above, provide details about progress achieved backed by evidence for key milestones covering product development, trials,\r\n\t\t\t\t\t\t\t\t\t\t\t\tpaid pilots, manufacturing, industry-grade certification, distribution, etc.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. The solution is ICMR certified, and ready for real time usage and mass deployment<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. 5 successful pilot orders (for 50 devices) with government & private hospitals has been successfully executed;<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t3. We have received purchase Orders for 200 devices of worth <Rs. ABC>  from 2 government hospitals;<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t4. We have partnerships with 2 medical device marketing companies who have distribution networks across the country<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"trackRecord\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep2.trackRecord.touched || isSubmitted.Step2) && addSolutionControlStep2.trackRecord?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.trackRecord.touched || isSubmitted.Step2) && addSolutionControlStep2.trackRecord.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTrack Record is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.trackRecord.touched || isSubmitted.Step2) && addSolutionControlStep2.trackRecord.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.trackRecord.touched || isSubmitted.Step2) && addSolutionControlStep2.trackRecord.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"implementationTimeWeeks\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tImplementation Time<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> Minimum time required to implement the Pilot from the time of initiation of the pilot order by the city. </span>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"implementationTimeMonth\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"implementationTimeMonth\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep2.implementationTimeMonth.touched || isSubmitted.Step2) && addSolutionControlStep2.implementationTimeMonth?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Month</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthsArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ month }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(addSolutionControlStep2.implementationTimeMonth.touched || isSubmitted.Step2) && addSolutionControlStep2.implementationTimeMonth.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tMonth is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"implementationTimeWeeks\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"implementationTimeWeeks\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep2.implementationTimeWeeks.touched || isSubmitted.Step2) && addSolutionControlStep2.implementationTimeWeeks?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Weeks</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let week of weekArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"week\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ week }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(addSolutionControlStep2.implementationTimeWeeks.touched || isSubmitted.Step2) && addSolutionControlStep2.implementationTimeWeeks.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tWeek is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"solutionStep2Submit()\">Next</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- step 3 -->\r\n\t\t\t\t\t\t\t<div class=\"step-wrapper\" *ngIf=\"solutionStep3\">\r\n\t\t\t\t\t\t\t\t<div class=\"back-btn-wrp g-fs-07 g-fw-500 g-mb-10\">\r\n\t\t\t\t\t\t\t\t\t<span (click)=\"gotoStep('step2')\" class=\"g-cursor-pointer g-transition body-light-clr back-btn\" [ngClass]=\"{ disable: !solutionStep1 }\"> &#60; Back </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"addSolutionStep3\" *ngIf=\"addSolutionStep1 && addSolutionStep2 && addSolutionStep3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"ipStatus\" class=\"g-fs-07 lable-grey g-fw-400\"> IP Status </label>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"ipStatus\" formControlName=\"ipStatus\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected=\"selected\">Select Status</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ipStatusArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"status\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ status }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"identificationNumber\" class=\"g-fs-07 lable-grey g-fw-400\"> Identification Number </label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"identificationNumber\" placeholder=\"ex: 7\" formControlName=\"identificationNumber\" />\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"expertsInvolved\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tExperts Involved<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tDescribe the nature and scope of expertise within the team or company with respect to proven track record in R&D, product development & engineering for advanced\r\n\t\t\t\t\t\t\t\t\t\t\t\tindustrial-grade applications, systems & subsystems. Basic details (contact) of the mentors/experts in the development of the Solution and their credentials.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. The team consists of three seasoned entrepreneurs with significant expertise in medical devices, AI, IoT, disease diagnosis, and commercial execution. The team has a combined experience of 50 years in the fields mentioned above.\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"expertsInvolved\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep3.expertsInvolved.touched || isSubmitted.Step3) && addSolutionControlStep3.expertsInvolved?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep3.expertsInvolved.touched || isSubmitted.Step3) && addSolutionControlStep3.expertsInvolved.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tExperts Involved is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep3.expertsInvolved.touched || isSubmitted.Step3) && addSolutionControlStep3.expertsInvolved.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t650 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep3.expertsInvolved.touched || isSubmitted.Step3) && addSolutionControlStep3.expertsInvolved.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"otherDetails\" class=\"g-fs-07 lable-grey g-fw-400\"> Other Details<br /> </label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor [editor]=\"Editor\" formControlName=\"otherDetails\"></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep3.otherDetails.touched || isSubmitted.Step3) && addSolutionControlStep3.otherDetails.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t500 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<app-gallery-upload (onGalleryChange)=\"handleSaveGallery($event)\"></app-gallery-upload>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"video\" class=\"g-fs-07 lable-grey g-fw-400\"> Video Link </label>\r\n\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"video\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"video\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"https://www.xyz.com/\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep3.video.touched || isSubmitted.Step3) && addSolutionControlStep3.video?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep3.video.touched || isSubmitted.Step3) && addSolutionControlStep3.video.errors?.pattern\"> Invalid url format. </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"saveSolution()\">\r\n\t\t\t\t\t\t\t\t\t\t\tSubmit Application &nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"saveAsDraft()\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-w-100per g-fs-08 g-pt-04 g-pb-04 g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tSave as draft&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"draftLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"saveSolution()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tAdd Solution &nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"initLoading\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade a-create-challenge-modal\" id=\"confirmDialog\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-p-21\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-16 g-lh-19 g-fw-500 bg-blue-clr text-left\">Are you sure you want to exit your submssion?</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 body-grey-clr g-pt-07 text-left\">Going back will not save any of the information that you’ve provided in the input.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<button type=\"button\" #closebutton class=\"btn g-bdrrad-7px g-bdr-005 g-black5-brdr g-fs-12 g-w-bg g-pt-02 g-pb-02 g-pl-06 g-pr-06\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-27 text-left\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-p-brdr g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04\" (click)=\"handleGoBack('save')\">\r\n\t\t\t\t\t\tSave Draft & Go Back&nbsp; <i *ngIf=\"draftLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-12 g-fs-08 g-pt-04 g-pb-04 g-pl-24 g-pr-24\" (click)=\"handleGoBack('delete')\">Delete & Go Back</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/draft-item/draft-item.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/draft-item/draft-item.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"solution-item\">\r\n\t<div class=\"wrap\" routerLink=\"/provider/user/{{ loggedInUser?.slug }}/solution/{{ solutionData.id }}/edit\" [queryParams]=\"{ type: 'draft' }\">\r\n\t\t<div class=\"title\">\r\n\t\t\t{{ solutionData.name.length > 40 ? (solutionData.name | slice: 0:40) + \"...\" : solutionData.name }}\r\n\t\t</div>\r\n\t\t<div class=\"item-footer g-mt-28\">\r\n\t\t\t<div class=\"last-edit\">\r\n\t\t\t\t<div class=\"count\">Last edited {{ solutionData.updated_at | date: \"MMM d\" }}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"count\"><span>Draft</span></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<div class=\"dropdown dropleft\">\r\n\t\t\t<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t<i class=\"fas fa-ellipsis-h\"></i>\r\n\t\t\t</button>\r\n\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n\t\t\t\t<span routerLink=\"/provider/user/{{ loggedInUser.slug }}/solution/{{ solutionData.id }}/edit\" [queryParams]=\"{ type: 'draft' }\">\r\n\t\t\t\t\t<i class=\"fas fa-pen g-mr-05\"></i>\r\n\t\t\t\t\tEdit Draft\r\n\t\t\t\t</span>\r\n\t\t\t\t<span data-toggle=\"modal\" [attr.data-target]=\"'#deleteChallenge_' + Id\">\r\n\t\t\t\t\t<i class=\"far fa-trash-alt g-mr-05\"></i>\r\n\t\t\t\t\tDelete Draft\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- delete popup -->\r\n<div class=\"modal fade\" id=\"deleteChallenge_{{ Id }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-pt-20\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<div class=\"g-fs-20 text-right\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle g-danger-clr\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-8\">\r\n\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-400 body-grey-clr\">Are you sure you want to delete the selected item?</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-07 body-light-clr\">Deleting items cannot be undone</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-trans-bg g-p-0 g-fs-20 g-grey4-clr\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t\t<i class=\"fal fa-times-square\"></i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-mt-15 g-pl-20 g-pr-20 g-mb-10\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-fs-07 g-danger-bg g-w-clr g-mr-10\" (click)=\"deleteSolution()\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!deleteLoading\"> Yes,Continue </ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"deleteLoading\">\r\n\t\t\t\t\t\t\t<span>Deleting...</span>\r\n\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button type=\"button\" [disabled]=\"deleteLoading\" class=\"btn g-fs-07 g-trans-bg g-bdr-005 body-light-brdr\" data-dismiss=\"modal\">Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/enterprise-company-edit/enterprise-company-edit.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/enterprise-company-edit/enterprise-company-edit.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"company-edit-form-wrap\">\r\n\t<div class=\"title-clr g-mb-15 g-fs-19 g-fw-500\">Edit Company details</div>\r\n\t<div class=\"form-content\">\r\n\t\t<form [formGroup]=\"companyEditForm\" (ngSubmit)=\"updateCompanyDetails()\">\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"company_name\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n\t\t\t\t\tCompany Name\r\n\t\t\t\t\t<span class=\"g-warning-clr\">*</span>\r\n\t\t\t\t</label>\r\n\t\t\t\t<input\r\n\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\tname=\"company_name\"\r\n\t\t\t\t\tplaceholder=\"ex: Neet Technologies\"\r\n\t\t\t\t\tformControlName=\"company_name\"\r\n\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\terror: (editformControl.company_name.touched || isSubmitted) && editformControl.company_name?.errors\r\n\t\t\t\t\t}\"\r\n\t\t\t\t/>\r\n\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.company_name.touched || isSubmitted) && editformControl.company_name.errors?.required\"> Company name is required </span>\r\n\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.company_name.touched || isSubmitted) && editformControl.company_name.errors?.pattern\"> Enter a valid company name </span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"website\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Company Website URL<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t<input\r\n\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\tname=\"website\"\r\n\t\t\t\t\tplaceholder=\"ex:www.google.com\"\r\n\t\t\t\t\tformControlName=\"website\"\r\n\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\terror: (editformControl.website.touched || isSubmitted) && editformControl.website?.errors\r\n\t\t\t\t\t}\"\r\n\t\t\t\t/>\r\n\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.website.touched || isSubmitted) && editformControl.website.errors?.required\"> Website is required </span>\r\n\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.website.touched || isSubmitted) && editformControl.website.errors?.pattern\"> Invalid website url </span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"officenumber\" class=\"g-fs-07 g-black14-clr g-fw-500\"\r\n\t\t\t\t\t>Office Phone\r\n\t\t\t\t\t<span class=\"g-warning-clr\">*</span>\r\n\t\t\t\t</label>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control phone-code\" value=\"+91\" disabled />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"officenumber\"\r\n\t\t\t\t\t\t\tplaceholder=\"ex: 9898789876\"\r\n\t\t\t\t\t\t\tformControlName=\"off_phone\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editformControl.off_phone.touched || isSubmitted) && editformControl.off_phone?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.off_phone.touched || isSubmitted) && editformControl.off_phone.errors?.required\"> Phone number is required </span>\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"editformControl.off_phone.touched && editformControl.off_phone.errors?.pattern\"> Enter a valid phone number </span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-5\">\r\n\t\t\t\t\t<companylogo-upload\r\n\t\t\t\t\t\t(onSaveLogo)=\"handleSaveLogo($event)\"\r\n\t\t\t\t\t\t(onRemoveLogo)=\"handleRemoveLogo($event)\"\r\n\t\t\t\t\t\t[Src]=\"companyData.company_logo ? serverUrl + companyData.company_logo : null\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t</companylogo-upload>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-7\">\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"incoperation_yr\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n\t\t\t\t\t\t\tYear of Incorporation\r\n\t\t\t\t\t\t\t<span class=\"g-warning-clr\">*</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"incoperation_yr\"\r\n\t\t\t\t\t\t\tformControlName=\"yr_incorp\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editformControl.yr_incorp.touched || isSubmitted) && editformControl.yr_incorp?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Year</option>\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let year of yearArr\">\r\n\t\t\t\t\t\t\t\t<option [value]=\"year\">{{ year }}</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.yr_incorp.touched || isSubmitted) && editformControl.yr_incorp.errors?.required\">\r\n\t\t\t\t\t\t\t\tYear of Incorporation is required\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"teamsize\" class=\"g-fs-07 g-black14-clr g-fw-500\">Team Size <span class=\"g-warning-clr\">*</span></label>\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"teamsize\"\r\n\t\t\t\t\t\t\tplaceholder=\"ex: 10\"\r\n\t\t\t\t\t\t\tformControlName=\"teamsize\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editformControl.teamsize.touched || isSubmitted) && editformControl.teamsize?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.teamsize.touched || isSubmitted) && editformControl.teamsize.errors?.required\"> Team size required </span>\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.teamsize.touched || isSubmitted) && editformControl.teamsize.errors?.pattern\"> Only numbers allowed </span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"description\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Company brief<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t<ckeditor\r\n\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\tformControlName=\"comp_brief\"\r\n\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\terror: (editformControl.comp_brief.touched || isSubmitted) && editformControl.comp_brief?.errors\r\n\t\t\t\t\t}\"\r\n\t\t\t\t></ckeditor>\r\n\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.comp_brief.touched || isSubmitted) && editformControl.comp_brief.errors?.required\"> Company brief is required </span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"team\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Founder/Proprietor Name<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t<input\r\n\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\tplaceholder=\"ex:JhonDoe (CEO)\"\r\n\t\t\t\t\tformControlName=\"founderDetails\"\r\n\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\terror: (editformControl.founderDetails.touched || isSubmitted) && editformControl.founderDetails?.errors\r\n\t\t\t\t\t}\"\r\n\t\t\t\t/>\r\n\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.founderDetails.touched || isSubmitted) && editformControl.founderDetails.errors?.required\">\r\n\t\t\t\t\t\tFounder/Proprietor name is required\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t<add-achievement (onAchievementChange)=\"handleAchievementChanges($event)\" [achievements]=\"companyData.achievements\"></add-achievement>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"expertise\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Team Expertise </label>\r\n\t\t\t\t<input\r\n\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\tname=\"expertise\"\r\n\t\t\t\t\tplaceholder=\"ex:Finance\"\r\n\t\t\t\t\tformControlName=\"expertise\"\r\n\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\terror: (editformControl.expertise.touched || isSubmitted) && editformControl.expertise?.errors\r\n\t\t\t\t\t}\"\r\n\t\t\t\t/>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label class=\"g-fs-07 g-black14-clr g-fw-500\">Annual Revenue<span class=\"g-warning-clr\">*</span></label>\r\n\t\t\t\t<input\r\n\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\tplaceholder=\"Annual Revenue\"\r\n\t\t\t\t\tformControlName=\"annualIncome\"\r\n\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\terror: (editformControl.annualIncome.touched || isSubmitted) && editformControl.annualIncome?.errors\r\n\t\t\t\t\t}\"\r\n\t\t\t\t/>\r\n\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.annualIncome.touched || isSubmitted) && editformControl.annualIncome.errors?.required\"> Annual Revenue is required </span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"edit-profile-save-btn-wrp g-pt-12\">\r\n\t\t\t\t<button class=\"btn frg-sld-btn g-p-bg g-w-clr g-w-100per\" type=\"submit\">\r\n\t\t\t\t\tSave and Update\r\n\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"formLoading\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/enterprise-company-view/enterprise-company-view.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/enterprise-company-view/enterprise-company-view.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"company-details-content\">\r\n    <div class=\"company-logo\" *ngIf=\"profileData.company_logo\">\r\n        <img [src]=\"serverUrl+profileData.company_logo\" alt=\"company\">\r\n    </div>\r\n    <div class=\"info-title g-mb-05\">\r\n        Company Brief\r\n    </div>\r\n    <div class=\"g-mb-05\">\r\n        <collapse-content class=\"info-descrp \" [text]=\"profileData.enterprise_company_brief\"></collapse-content>\r\n    </div>\r\n    <hr>\r\n    <div class=\"g-mt-10\">\r\n        <div class=\"row g-mb-05\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-title g-mb-05\">\r\n                    Year of Incorporation\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-descrp\">\r\n                    {{profileData.enterprise_incorporation_year}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row g-mb-05\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-title g-mb-05\">\r\n                    Team Size\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-descrp\">\r\n                    {{profileData.enterprise_company_size}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row g-mb-05\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-title g-mb-05\">\r\n                    Team Expertise\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-descrp\" *ngIf=\"profileData.enterprise_expertises\">\r\n                    <ng-container *ngFor=\"let expertise of technical_expertises\">\r\n\t\t\t\t\t\t<div>{{expertise}}</div>\r\n\t\t\t\t\t</ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row g-mb-05\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-title g-mb-05\">\r\n                    Founding Team\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-descrp\" *ngIf=\"profileData.enterprise_founders\">\r\n                    <ng-container *ngFor=\"let founder of founders\">\r\n\t\t\t\t\t\t<div>{{founder}}</div>\r\n\t\t\t\t\t</ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-container *ngIf=\"profileData.enterprise_annual_revenue != ''\">\r\n            <div class=\"row g-mb-05\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"info-title g-mb-05\">\r\n                        Annual Revenue\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"info-descrp\">\r\n                        {{profileData.enterprise_annual_revenue}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"profileData.dipp_number != ''\">\r\n            <div class=\"row g-mb-05\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"info-title g-mb-05\">\r\n                        DIPP Number\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"info-descrp\">\r\n                        {{profileData.dipp_number}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/individual-innovator-view/individual-innovator-view.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/individual-innovator-view/individual-innovator-view.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"company-details-content\">\r\n    <div>\r\n        <div class=\"row g-mb-05\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-title g-mb-05\">\r\n                    Years of Experience\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-descrp\">\r\n                    {{profileData.indv_expertise_years}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row g-mb-05\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-title g-mb-05\">\r\n                    Technical Credentials\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-descrp\">\r\n                    {{profileData.indv_tech_creds}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row g-mb-05\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-title g-mb-05\">\r\n                    Domain Of Expertise\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"info-descrp\">\r\n                    {{profileData.indv_expertises}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-container *ngIf=\"profileData.indv_affiliates != ''\">\r\n            <div class=\"row g-mb-05\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"info-title g-mb-05\">\r\n                        Affiliated Incubator/\r\n                        Accelerator\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"info-descrp\">\r\n                        {{profileData.indv_affiliates}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/profile-top-card/profile-top-card.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/profile-top-card/profile-top-card.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"profile-card\">\r\n    <div class=\"container\">\r\n        <ng-container *ngIf=\"!loading\">\r\n            <div class=\"card-content\">\r\n                <div class=\"avatar\">\r\n                    <img [src]=\"serverUrl+profileData.avatar\" alt=\"avatar\">\r\n                </div>\r\n                <div class=\"user-info\">\r\n                    <div class=\"user-name\">\r\n                        {{profileData.fullname}}\r\n                        <ng-container *ngIf=\"viewType == 'user' \">\r\n                            <span>\r\n                                <button type=\"button\" \r\n                                routerLink=\"/provider/user/{{profileData.slug}}/edit\"\r\n                                    class=\"btn g-w-bg g-bdr-005 g-black4-clr g-fs-06 g-lh-07 g-fw-700 g-ml-06 g-pt-04 g-pb-04 g-pl-04 g-pr04\">\r\n                                    EDIT PROFILE<i class=\"g-pl-04 fas fa-pen\"></i>\r\n                                </button>\r\n                                <button type=\"button\" \r\n                                routerLink=\"/provider/user/{{profileData.slug}}/solutions/create\"\r\n                                    class=\"btn g-w-bg g-bdr-005 g-black4-clr g-fs-06 g-lh-07 g-fw-700 g-ml-06 g-pt-04 g-pb-04 g-pl-04 g-pr04\">\r\n                                    ADD SOLUTION<i class=\"g-pl-04 fa fa-plus\"></i>\r\n                                </button>\r\n                            </span>\r\n                        </ng-container>\r\n                    </div>\r\n                    <div class=\"user-companyname\">\r\n                        <ng-container *ngIf=\"profileData.role == 'startup'\">\r\n                            {{profileData.startup_company_name | titlecase}}\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"profileData.role == 'enterprise'\">\r\n                            {{profileData.enterprise_company_name | titlecase}}\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"profileData.role == 'individual'\">\r\n                            Entrepreneur\r\n                        </ng-container>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"g-pb-03\">\r\n                                <span class=\"g-fs-07 g-lh-08 g-black16-clr\">\r\n                                    <i class=\"fa fa-envelope g-mr-04\" aria-hidden=\"true\"></i>\r\n                                    {{ profileData.frg_user_id.email }}\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"g-pb-03\">\r\n                                <span class=\"g-fs-07 g-lh-08 g-black16-clr\">\r\n                                    <i class=\"fa fa-phone g-mr-04\" aria-hidden=\"true\"></i>\r\n                                    {{profileData.frg_user_id.mobile_code}}\r\n                                    {{profileData.frg_user_id.mobile }}\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-7\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"g-black16-clr g-pb-03\">\r\n                                        <span>\r\n                                            <ng-container>\r\n                                                <img *ngIf=\"profileData.role == 'startup'\"\r\n                                                    src=\"../../../assets/img/startup_up_icon.svg\" alt=\"icon\">\r\n                                                <img *ngIf=\"profileData.role == 'enterprise'\"\r\n                                                    src=\"../../../assets/img/enterprise_icon.svg\" alt=\"icon\">\r\n                                                <img *ngIf=\"profileData.role == 'individual'\"\r\n                                                    src=\"../../../assets/img/individual_icon.svg\" alt=\"icon\">\r\n                                            </ng-container>\r\n                                        </span>&nbsp;&nbsp;\r\n                                        <span class=\"g-fs-07 g-lh-08\">\r\n                                            {{profileData.role | titlecase}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div *ngFor=\"let location of profileData.location\" class=\"g-pb-03\">\r\n                                        <span class=\"g-fs-07 g-lh-08 g-black16-clr\">\r\n                                            <i class=\"fas fa-map-marker-alt\"></i>&nbsp;&nbsp;\r\n                                            {{ location.name }}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"g-pb-03\">\r\n                                <div *ngIf=\"profileData.role === 'startup'\">\r\n                                    <a href=\"//{{ profileData.startup_company_url }}\" rel=\"noopener noreferrer\"\r\n                                        target=\"_blank\" class=\"g-fs-07 g-lh-08 g-black16-clr\">\r\n                                        <i class=\"fas fa-globe\"></i>\r\n                                        &nbsp;&nbsp;\r\n                                        {{ profileData.startup_company_url }}\r\n                                    </a>\r\n                                </div>\r\n                                <div *ngIf=\"profileData.role === 'enterprise'\">\r\n                                    <a href=\"//{{ profileData.enterprise_company_url }}\" rel=\"noopener noreferrer\"\r\n                                        target=\"_blank\" class=\"g-fs-07 g-lh-08 g-black16-clr\">\r\n                                        <i class=\"fas fa-globe\"></i>\r\n                                        &nbsp;&nbsp;&nbsp;\r\n                                        {{ profileData.enterprise_company_url }}\r\n                                    </a>\r\n                                </div>\r\n                                <div *ngIf=\"profileData.role === 'individual'\">\r\n                                    <a href=\"//{{ profileData.indv_website_url }}\" rel=\"noopener noreferrer\"\r\n                                        target=\"_blank\" class=\"g-fs-07 g-lh-08 g-black16-clr\">\r\n                                        <i class=\"far fa-globe\"></i>\r\n                                        &nbsp;&nbsp;\r\n                                        {{ profileData.indv_website_url }}\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"sectors\">\r\n                    <!-- <div class=\"g-fs-08 g-lh-09 body-light-clr g-fw-400\">Challenge Sectors</div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"row l-sectors-cont\">\r\n                <div class=\"col-sm-3\">\r\n                   <div class=\"g-fs-08\">Challenge Sectors \r\n                       <img *ngIf=\"viewType == 'user'\" class=\"g-ml-05 g-cursor-pointer\" src=\"assets/img/circle_edit_icon.png\" alt=\"icon\" (click)=\"editSectors()\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <div *ngIf=\"profileData.challenge_sectors.length\">\r\n                        <span class=\"l-sect-badge g-fs-07 g-ml-03 a-capitalize\" *ngFor=\"let item of profileData.challenge_sectors\">{{item.name | titlecase}}</span> \r\n                    </div>           \r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n        <!-- skeleton loader -->\r\n        <ng-container *ngIf=\"loading\">\r\n            <div class=\"card-content\">\r\n                <div class=\"avatar\">\r\n                    <ngx-skeleton-loader animation=\"pulse\" appearance=\"circle\" [theme]=\"{\r\n                        height: '140px',\r\n                        width: '140px',\r\n                        'border-radius': '50%',\r\n                        margin: '0px'\r\n                      }\">\r\n                    </ngx-skeleton-loader>\r\n                </div>\r\n                <div class=\"user-info\">\r\n                    <div class=\"user-name\">\r\n                        <ngx-skeleton-loader animation=\"pulse\"\r\n                            [theme]=\"{ 'border-radius': '2px', height: '24px',width:'350px', margin:'0px 0px 5px' }\">\r\n                        </ngx-skeleton-loader>\r\n                    </div>\r\n                    <div class=\"user-companyname\">\r\n                        <ngx-skeleton-loader animation=\"pulse\"\r\n                            [theme]=\"{ 'border-radius': '2px', height: '24px',width:'250px', margin:'0px 0px 5px' }\">\r\n                        </ngx-skeleton-loader>\r\n                    </div>\r\n                    <div>\r\n                        <ngx-skeleton-loader animation=\"pulse\" count=\"2\"\r\n                            [theme]=\"{ 'border-radius': '2px', height: '14px',width:'80%', margin:'0px 0px 5px' }\">\r\n                        </ngx-skeleton-loader>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"sectors\">\r\n                    <ngx-skeleton-loader animation=\"pulse\"\r\n                        [theme]=\"{ 'border-radius': '2px', height: '16px',width:'190px', margin:'0px 0px 5px' }\">\r\n                    </ngx-skeleton-loader>\r\n                    <div class=\"sector-tags\">\r\n                        <ngx-skeleton-loader animation=\"pulse\"\r\n                            [theme]=\"{ 'border-radius': '2px', height: '14px',width:'150px', margin:'0px 15px 5px 0px' }\">\r\n                        </ngx-skeleton-loader>\r\n                        <ngx-skeleton-loader animation=\"pulse\"\r\n                            [theme]=\"{ 'border-radius': '2px', height: '14px',width:'150px', margin:'0px 0px 5px' }\">\r\n                        </ngx-skeleton-loader>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/provider-edit-profile/provider-edit-profile.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/provider-edit-profile/provider-edit-profile.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-edit-form-wrp\">\r\n\t<ng-container *ngIf=\"!loading\">\r\n\t\t<div class=\"form-content\">\r\n\t\t\t<Avatar-Upload [Src]=\"serverUrl + profileData.avatar\" (onSaveImage)=\"handleAvatarUpload($event)\"></Avatar-Upload>\r\n\t\t\t<div class=\"title-clr g-mt-15 g-fs-19 g-fw-500\">Edit Profile</div>\r\n\t\t\t<form [formGroup]=\"editProfileForm\" (ngSubmit)=\"updateProfile()\">\r\n\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t<label for=\"fullname\" class=\"g-fs-07 g-black14-clr g-fw-500\">Full Name<span class=\"g-warning-clr\">*</span></label>\r\n\t\t\t\t\t<input\r\n\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\tname=\"fullname\"\r\n\t\t\t\t\t\tformControlName=\"fullname\"\r\n\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\terror: (editFormControl.fullname.touched || isSubmitted) && editFormControl.fullname?.errors\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editFormControl.fullname.touched || isSubmitted) && editFormControl.fullname.errors?.required\"> Full Name is required </span>\r\n\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"editFormControl.fullname.touched && editFormControl.fullname.errors?.pattern\"> Enter a valid name </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t<label for=\"email\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Email<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t<input\r\n\t\t\t\t\t\ttype=\"email\"\r\n\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\tname=\"email\"\r\n\t\t\t\t\t\tformControlName=\"email\"\r\n\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\terror: (editFormControl.email.touched || isSubmitted) && editFormControl.email?.errors\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editFormControl.email.touched || isSubmitted) && editFormControl.email.errors?.required\"> Email is required </span>\r\n\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"editFormControl.email.touched && editFormControl.email.errors?.email\"> Enter a valid email address </span>\r\n\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"editFormControl.email.touched && editFormControl.email.errors?.emailAlreadyExist\"> Email already exist </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t<label for=\"officenumber\" class=\"g-fs-07 g-black14-clr g-fw-500\">Phone<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t<div class=\"phone-flx-row\">\r\n\t\t\t\t\t\t<div class=\"phone-code-col\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control g-pr-0\" value=\"+91\" disabled />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"phone-num-col\">\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"officenumber\"\r\n\t\t\t\t\t\t\t\tformControlName=\"phnum\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (editFormControl.phnum.touched || isSubmitted) && editFormControl.phnum?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editFormControl.phnum.touched || isSubmitted) && editFormControl.phnum.errors?.required\"> Phone number is required </span>\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"editFormControl.phnum.touched && editFormControl.phnum.errors?.pattern\"> Enter a valid phone number </span>\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"editFormControl.phnum.touched && editFormControl.phnum.errors?.phonenumAlreadyExist\"> Phone number already exist </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t<label for=\"location\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Location<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t<select\r\n\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\tformControlName=\"location\"\t\t\t\t\t\t\r\n\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\terror: (editFormControl.location.touched || isSubmitted) && editFormControl.location?.errors\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t<option *ngFor=\"let location of locationData\" [value]=\"location.id\">\r\n\t\t\t\t\t\t\t{{ location.name }}\r\n\t\t\t\t\t\t</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editFormControl.location.touched || isSubmitted) && editFormControl.location.errors?.required\"> Location is required </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ng-container *ngIf=\"profileData.role == 'individual'\">\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"indv_website_url\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Website/Linkedin Profile<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"indv_website_url\"\r\n\t\t\t\t\t\t\tplaceholder=\"ex: google.com\"\r\n\t\t\t\t\t\t\tformControlName=\"indv_website_url\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editFormControl.indv_website_url.touched || isSubmitted) && editFormControl.indv_website_url?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editFormControl.indv_website_url.touched || isSubmitted) && editFormControl.indv_website_url.errors?.required\">\r\n\t\t\t\t\t\t\t\tWebsite URL is required\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editFormControl.indv_website_url.touched || isSubmitted) && editFormControl.indv_website_url.errors?.pattern\">\r\n\t\t\t\t\t\t\t\tInvalid website url\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"indv_expertises\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Domain Of Expertise<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"indv_expertises\"\r\n\t\t\t\t\t\t\tplaceholder=\"ex: Educational Sector\"\r\n\t\t\t\t\t\t\tformControlName=\"indv_expertises\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editFormControl.indv_expertises.touched || isSubmitted) && editFormControl.indv_expertises?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editFormControl.indv_expertises.touched || isSubmitted) && editFormControl.indv_expertises.errors?.required\">\r\n\t\t\t\t\t\t\t\tDomain of Expertise is required\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"indv_expertise_years\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Years of Experience<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"indv_expertise_years\"\r\n\t\t\t\t\t\t\tplaceholder=\"ex: 10\"\r\n\t\t\t\t\t\t\tformControlName=\"indv_expertise_years\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editFormControl.indv_expertise_years.touched || isSubmitted) && editFormControl.indv_expertise_years?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editFormControl.indv_expertise_years.touched || isSubmitted) && editFormControl.indv_expertise_years.errors?.required\">\r\n\t\t\t\t\t\t\t\tYears of experience is required\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t<add-achievement (onAchievementChange)=\"handleAchievementChanges($event)\" [achievements]=\"profileData.achievements\"></add-achievement>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"indv_affiliates\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Affiliated Industry/Company/Incubator/Institution<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"indv_affiliates\"\r\n\t\t\t\t\t\t\tplaceholder=\"ex: Neet Technologies\"\r\n\t\t\t\t\t\t\tformControlName=\"indv_affiliates\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editFormControl.indv_affiliates.touched || isSubmitted) && editFormControl.indv_affiliates?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editFormControl.indv_affiliates.touched || isSubmitted) && editFormControl.indv_affiliates.errors?.required\">\r\n\t\t\t\t\t\t\t\tAffiliated Industry/Company/Incubator/Institution required\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"indv_tech_creds\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Technical Credentials (Degree,Specialisations)<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t<textarea\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\trows=\"4\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"indv_tech_creds\"\r\n\t\t\t\t\t\t\tplaceholder=\"ex:Degree in mechanical engineering\"\r\n\t\t\t\t\t\t\tformControlName=\"indv_tech_creds\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editFormControl.indv_tech_creds.touched || isSubmitted) && editFormControl.indv_tech_creds?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t</textarea>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editFormControl.indv_tech_creds.touched || isSubmitted) && editFormControl.indv_tech_creds.errors?.required\">\r\n\t\t\t\t\t\t\t\tTechnical Credentials required\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div class=\"edit-profile-save-btn-wrp g-pt-12\">\r\n\t\t\t\t\t<button class=\"btn frg-sld-btn g-p-bg g-w-clr g-w-100per\" type=\"submit\">\r\n\t\t\t\t\t\tSave and Update\r\n\t\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"formLoading\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"loading\">\r\n\t\t<div class=\"loader-wrp\">\r\n\t\t\t<div class=\"section-loader\">\r\n\t\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/reset-password/reset-password.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/reset-password/reset-password.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reset-password-wrp g-mb-16 g-w-bg\">\r\n    <div class=\"g-fs-19 g-fw-500 title-clr g-mb-15\">\r\n        Reset Password\r\n    </div>\r\n    <form [formGroup]=\"resetPassword\">\r\n        <div class=\"form-group g-mt-03\">\r\n            <label for=\"currentPassword\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n                Current Password\r\n                <span class=\"g-warning-clr\">*</span>\r\n            </label>\r\n            <div class=\"pswd-input-wrp\">\r\n                <input [type]=\"passwordField1 ? 'text' : 'password'\" class=\"form-control\" name=\"currentPassword\"\r\n                    formControlName=\"old_password\" [ngClass]=\"{\r\n                error:\r\n                  (resetPassword.controls.old_password.touched) &&\r\n                  resetPassword.controls.old_password.errors\r\n              }\" />\r\n                <span class=\"pswd-tgl\">\r\n                    <i class=\"fa\" [ngClass]=\"{\r\n                    'fa-eye-slash': !passwordField1,\r\n                    'fa-eye': passwordField1\r\n                  }\" (click)=\"togglePassword1()\">\r\n                    </i>\r\n                </span>\r\n                <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                    (resetPassword.controls.old_password.touched) &&\r\n                    resetPassword.controls.old_password.errors?.required\r\n                  \">\r\n                        Current Password is required\r\n                    </span>\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                    resetPassword.controls.old_password.touched &&\r\n                    resetPassword.controls.old_password.errors?.minlength\r\n                  \">\r\n                        Password should have minimum 8 characters.\r\n                    </span>\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                    resetPassword.controls.old_password.touched &&\r\n                    resetPassword.controls.old_password.errors?.incorrect\r\n                  \">\r\n                        Invalid password\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group g-mt-03\">\r\n            <label for=\"currentPassword\" class=\"g-fs-07 lable-grey g-fw-400\">New Password<span\r\n                    class=\"g-warning-clr\">*</span></label>\r\n            <div class=\"pswd-input-wrp\">\r\n                <input [type]=\"passwordField2 ? 'text' : 'password'\" class=\"form-control\" name=\"newpassword\"\r\n                    formControlName=\"new_password\" [ngClass]=\"{\r\n                error:\r\n                  (resetPassword.controls.new_password.touched) &&\r\n                  resetPassword.controls.new_password.errors\r\n              }\" />\r\n                <span class=\"pswd-tgl\">\r\n                    <i class=\"fa\" [ngClass]=\"{\r\n                    'fa-eye-slash': !passwordField2,\r\n                    'fa-eye': passwordField2\r\n                  }\" (click)=\"togglePassword2()\">\r\n                    </i>\r\n                </span>\r\n                <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                    (resetPassword.controls.new_password.touched) &&\r\n                    resetPassword.controls.new_password.errors?.required\r\n                  \">\r\n                        New Password is required\r\n                    </span>\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                    resetPassword.controls.new_password.touched &&\r\n                    resetPassword.controls.new_password.errors?.pattern\r\n                  \">\r\n                        Password should have minimum 8 characters, at least one special character and one number\r\n                    </span>\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                    resetPassword.controls.new_password.touched &&\r\n                    resetPassword.controls.new_password.errors?.passwordSame\r\n                  \">\r\n                        Old Password and New Password should not be same\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group g-mt-03\">\r\n            <label for=\"confirmpassword\" class=\"g-fs-07 lable-grey g-fw-400\">Re-enter Password<span\r\n                    class=\"g-warning-clr\">*</span></label>\r\n            <div class=\"pswd-input-wrp\">\r\n                <input [type]=\"passwordField3 ? 'text' : 'password'\" class=\"form-control \" name=\"confirmpassword\"\r\n                    formControlName=\"confirmPassword\" [ngClass]=\"{\r\n                error:\r\n                  (resetPassword.controls.confirmPassword.touched) &&\r\n                  resetPassword.controls.confirmPassword?.errors\r\n              }\" />\r\n                <span class=\"pswd-tgl\">\r\n                    <i class=\"fa\" [ngClass]=\"{\r\n                      'fa-eye-slash': !passwordField3,\r\n                      'fa-eye': passwordField3\r\n                    }\" (click)=\"togglePassword3()\">\r\n                    </i>\r\n                </span>\r\n                <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                      (resetPassword.controls.confirmPassword.touched) &&\r\n                      resetPassword.controls.confirmPassword.errors?.required\r\n                    \">\r\n                        Confirm Password is required\r\n                    </span>\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                      resetPassword.controls.confirmPassword.touched &&\r\n                      resetPassword.controls.confirmPassword.errors\r\n                        ?.passwordMismatch\r\n                    \">\r\n                        Passwords doesn't match\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"reset-password-save-btn g-pt-12\">\r\n            <button class=\"btn frg-sld-btn g-p-bg g-w-clr g-w-100per\" type=\"submit\" (click)=\"changePassword()\">\r\n                Save and Update\r\n                <i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/solution-item/solution-item.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/solution-item/solution-item.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel g-bdrrad-10px g-overflow-hidden g-cursor-pointer solution-card\">\r\n\t<div class=\"panel-body g-pt-0 g-pb-0\" [routerLink]=\"viewType == 'author' ? ['solution', solutionData.id] : ['/solution', solutionData.id]\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-12 g-p-0\">\r\n\t\t\t\t<div class=\"solution-thumbnail\" [ngStyle]=\"{ 'background-image': solutionData.images ? 'url(' + serverUrl + solutionData.images[0] + ')' : '' }\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row g-pl-12 g-pr-12\">\r\n\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t<div class=\"g-pt-12\">\r\n\t\t\t\t\t<div class=\"g-black5-clr g-fw-500 g-fs-08 g-lh-10\">\r\n\t\t\t\t\t\t{{ solutionData.name.length > 70 ? (solutionData.name | slice: 0:70) + \"...\" : solutionData.name }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\tclass=\"g-black5-clr g-fw-400 g-fs-07 g-lh-10 g-opacity-07\"\r\n\t\t\t\t\t\tinnerHtml=\"{{ solutionData.solution_brief.length > 150 ? (solutionData.solution_brief | slice: 0:150) + '...' : solutionData.solution_brief }}\"\r\n\t\t\t\t\t></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-2 text-center\">\r\n\t\t\t\t<div class=\"g-mt-11\">\r\n\t\t\t\t\t<div class=\"g-fs-14 g-fw-500 g-p-clr\">0</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"g-fs-06 g-fw-500 g-p-clr\">Pilots</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- menu dots -->\r\n\t<ng-container *ngIf=\"viewType == 'author'\">\r\n\t\t<div class=\"menu\">\r\n\t\t\t<div class=\"dropdown dropleft\">\r\n\t\t\t\t<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t<i class=\"fas fa-ellipsis-h\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n\t\t\t\t\t<span [routerLink]=\"['solution', solutionData.id, 'edit']\">\r\n\t\t\t\t\t\t<i class=\"fas fa-pen g-mr-05\"></i>\r\n\t\t\t\t\t\tEdit Solution\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span data-toggle=\"modal\" [attr.data-target]=\"'#deleteSolution' + Id\"> <i class=\"far fa-trash-alt\"></i>&nbsp;&nbsp;&nbsp;&nbsp; Delete Solution </span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<!-- Delete modal -->\r\n\t<div class=\"modal fade\" [id]=\"'deleteSolution' + Id\" role=\"dialog\">\r\n\t\t<div class=\"modal-dialog modal-md\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"modal-body g-pt-20\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-20 text-right\">\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle g-danger-clr\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-8\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-400 body-grey-clr\">Are you sure you want to delete the selected item?</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 body-light-clr\">Deleting items cannot be undone</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-trans-bg g-p-0 g-fs-20 g-grey4-clr\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fal fa-times-square\"></i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-mt-15 g-pl-20 g-pr-20 g-mb-10\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn g-fs-07 g-danger-bg g-w-clr g-mr-10\" (click)=\"deleteSolution(solutionData.id)\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"!deleteLoading\">Yes,Continue</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"deleteLoading\">\r\n\t\t\t\t\t\t\t\t<span>Deleting...</span>\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" [disabled]=\"deleteLoading\" class=\"btn g-fs-07 g-trans-bg g-bdr-005 body-light-brdr\" data-dismiss=\"modal\">Cancel</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"text-right g-mt-05 g-pb-10 g-pl-12 g-pr-12\">\r\n\t\t<button\r\n\t\t\ttype=\"button\"\r\n\t\t\t[routerLink]=\"viewType == 'author' ? ['solution', solutionData.id] : ['/solution', solutionData.id]\"\r\n\t\t\tclass=\"btn g-w-bg g-bdr-005 g-black4-clr g-fs-06 g-lh-07 g-fw-700 g-ml-06 g-pt-04 g-pb-04 g-pl-04 g-pr-04\"\r\n\t\t>\r\n\t\t\tVIEW MORE\r\n\t\t</button>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/startup-company-edit/startup-company-edit.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/startup-company-edit/startup-company-edit.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"company-edit-form-wrap\">\r\n\t<div class=\"title-clr g-mb-15 g-fs-19 g-fw-500\">Edit Company details</div>\r\n\t<div class=\"form-content\">\r\n\t\t<form [formGroup]=\"companyEditForm\" (ngSubmit)=\"updateCompanyDetails()\">\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"company_name\" class=\"g-fs-07 g-black14-clr g-fw-500\">Company Name <span class=\"g-warning-clr\">*</span></label>\r\n\t\t\t\t<input\r\n\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\tname=\"company_name\"\r\n\t\t\t\t\tplaceholder=\"ex: Neet Technologies\"\r\n\t\t\t\t\tformControlName=\"company_name\"\r\n\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\terror: (editformControl.company_name.touched || isSubmitted) && editformControl.company_name?.errors\r\n\t\t\t\t\t}\"\r\n\t\t\t\t/>\r\n\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.company_name.touched || isSubmitted) && editformControl.company_name.errors?.required\"> Company name is required </span>\r\n\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.company_name.touched || isSubmitted) && editformControl.company_name.errors?.pattern\"> Enter a valid company name </span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"website\" class=\"g-fs-07 g-black14-clr g-fw-500\">Company Website URL <span class=\"g-warning-clr\">*</span></label>\r\n\t\t\t\t<input\r\n\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\tname=\"website\"\r\n\t\t\t\t\tplaceholder=\"ex:www.google.com\"\r\n\t\t\t\t\tformControlName=\"website\"\r\n\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\terror: (editformControl.website.touched || isSubmitted) && editformControl.website?.errors\r\n\t\t\t\t\t}\"\r\n\t\t\t\t/>\r\n\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.website.touched || isSubmitted) && editformControl.website.errors?.required\"> Website is required </span>\r\n\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.website.touched || isSubmitted) && editformControl.website.errors?.pattern\"> Invalid website url </span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"officenumber\" class=\"g-fs-07 g-black14-clr g-fw-500\">Office Phone <span class=\"g-warning-clr\">*</span></label>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control phone-code\" value=\"+91\" disabled />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"officenumber\"\r\n\t\t\t\t\t\t\tplaceholder=\"ex: 9898789876\"\r\n\t\t\t\t\t\t\tformControlName=\"off_phone\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editformControl.off_phone.touched || isSubmitted) && editformControl.off_phone?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.off_phone.touched || isSubmitted) && editformControl.off_phone.errors?.required\"> Phone number is required </span>\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"editformControl.off_phone.touched && editformControl.off_phone.errors?.pattern\"> Enter a valid phone number </span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-5\">\r\n\t\t\t\t\t<companylogo-upload\r\n\t\t\t\t\t\t(onSaveLogo)=\"handleSaveLogo($event)\"\r\n\t\t\t\t\t\t(onRemoveLogo)=\"handleRemoveLogo($event)\"\r\n\t\t\t\t\t\t[Src]=\"companyData.company_logo ? serverUrl + companyData.company_logo : null\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t</companylogo-upload>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-7\">\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"incoperation_yr\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n\t\t\t\t\t\t\tYear of Incorporation\r\n\t\t\t\t\t\t\t<span class=\"g-warning-clr\">*</span></label\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"incoperation_yr\"\r\n\t\t\t\t\t\t\tformControlName=\"yr_incorp\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editformControl.yr_incorp.touched || isSubmitted) && editformControl.yr_incorp?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Year</option>\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let year of yearArr\">\r\n\t\t\t\t\t\t\t\t<option [value]=\"year\">{{ year }}</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.yr_incorp.touched || isSubmitted) && editformControl.yr_incorp.errors?.required\">\r\n\t\t\t\t\t\t\t\tYear of Incorporation is required\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"teamsize\" class=\"g-fs-07 g-black14-clr g-fw-500\">Team Size <span class=\"g-warning-clr\">*</span></label>\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"teamsize\"\r\n\t\t\t\t\t\t\tplaceholder=\"ex: 10\"\r\n\t\t\t\t\t\t\tformControlName=\"teamsize\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editformControl.teamsize.touched || isSubmitted) && editformControl.teamsize?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.teamsize.touched || isSubmitted) && editformControl.teamsize.errors?.required\"> Team size required </span>\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.teamsize.touched || isSubmitted) && editformControl.teamsize.errors?.pattern\"> Only numbers allowed </span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"description\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Company brief<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t<ckeditor\r\n\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\tformControlName=\"comp_brief\"\r\n\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\terror: (editformControl.comp_brief.touched || isSubmitted) && editformControl.comp_brief?.errors\r\n\t\t\t\t\t}\"\r\n\t\t\t\t></ckeditor>\r\n\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editformControl.comp_brief.touched || isSubmitted) && editformControl.comp_brief.errors?.required\"> Company brief is required </span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"team\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Founding Team Member names & Designation<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t<ng-container formArrayName=\"founderDetails\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let founder of founderDetails.controls; index as i\">\r\n\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\r\n\t\t\t\t\t\t\t<div class=\"frg-dynamic-row g-mb-08\">\r\n\t\t\t\t\t\t\t\t<div class=\"frg-dynamic-input-col\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"founding_member\" placeholder=\"Founder Name\" formControlName=\"name\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"frg-dynamic-input-col\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"designation\" placeholder=\"Designation\" formControlName=\"designation\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"frg-add-rm-row-btn\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"founderDetails.controls.length - 1 == i\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"addFounder()\"><i class=\"act-clr fa fa-plus\"></i></span>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"founderDetails.controls.length - 1 != i\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"removeFounder(i)\"><i class=\"act-clr fa fa-minus\"></i></span>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t<add-achievement (onAchievementChange)=\"handleAchievementChanges($event)\" [achievements]=\"companyData.achievements\"></add-achievement>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"expertise\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Team Expertise </label>\r\n\t\t\t\t<ng-container *ngFor=\"let expertise of teamExpertise.controls; index as i\">\r\n\t\t\t\t\t<div class=\"frg-expertise-row g-mb-08\">\r\n\t\t\t\t\t\t<div class=\"frg-expertise-input-col\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"expertise\" placeholder=\"ex: yourmail@linkedin.in\" [formControl]=\"teamExpertise.controls[i]\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"frg-expertise-add-rm-row-btn\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"teamExpertise.controls.length - 1 == i\">\r\n\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"addExpertise()\"><i class=\"act-clr fa fa-plus\"></i></span>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"teamExpertise.controls.length - 1 != i\">\r\n\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"removeExpertise(i)\"><i class=\"act-clr fa fa-minus\"></i></span>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label class=\"g-fs-07 g-black14-clr g-fw-500\"> DIPP Number (optional) </label>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"dipp_num\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t<label for=\"Affiliated\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Affiliated Incubator/Accelerator</label>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"Affiliated\" placeholder=\"ex: Forge Accelerator\" formControlName=\"affiliates\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"edit-profile-save-btn-wrp g-pt-12\">\r\n\t\t\t\t<button class=\"btn frg-sld-btn g-p-bg g-w-clr g-w-100per\" type=\"submit\">\r\n\t\t\t\t\tSave and Update\r\n\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"formLoading\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/startup-company-view/startup-company-view.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/startup-company-view/startup-company-view.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"company-details-content\">\r\n\t<div class=\"company-logo\" *ngIf=\"profileData.company_logo\">\r\n\t\t<img [src]=\"serverUrl + profileData.company_logo\" alt=\"company\" />\r\n\t</div>\r\n\t<div class=\"info-title g-mb-05\">Company Brief</div>\r\n\t<div class=\"g-mb-05\">\r\n\t\t<collapse-content class=\"info-descrp\" [text]=\"profileData.startup_company_brief\"></collapse-content>\r\n\t</div>\r\n\t<hr />\r\n\t<div class=\"g-mt-10\">\r\n\t\t<div class=\"row g-mb-05\">\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<div class=\"info-title g-mb-05\">Year of Incorporation</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<div class=\"info-descrp\">\r\n\t\t\t\t\t{{ profileData.startup_incorporation_years }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row g-mb-05\">\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<div class=\"info-title g-mb-05\">Team Size</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<div class=\"info-descrp\">\r\n\t\t\t\t\t{{ profileData.startup_teamsize }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row g-mb-05\">\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<div class=\"info-title g-mb-05\">Team Expertise</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<div class=\"info-descrp\" *ngIf=\"profileData.startup_technical_expertises\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let expertise of profileData.startup_technical_expertises\">\r\n\t\t\t\t\t\t<div>{{expertise}}</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<ng-container *ngIf=\"profileData.startup_founders.length > 0\">\r\n\t\t\t<div class=\"row g-mb-05\">\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<div class=\"info-title g-mb-05\">Founding Team</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<div class=\"info-descrp\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of profileData.startup_founders; let isLast = last\"> {{ item.name }}({{ item.designation }})<br> </ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngIf=\"profileData.startup_affiliates != ''\">\r\n\t\t\t<div class=\"row g-mb-05\">\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<div class=\"info-title g-mb-05\">Affiliated Incubator/ Accelerator</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<div class=\"info-descrp\">\r\n\t\t\t\t\t\t{{ profileData.startup_affiliates }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngIf=\"profileData.dipp_number != ''\">\r\n\t\t\t<div class=\"row g-mb-05\">\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<div class=\"info-title g-mb-05\">DIPP Number</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<div class=\"info-descrp\">\r\n\t\t\t\t\t\t{{ profileData.dipp_number }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/edit-solutions/edit-solutions.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/edit-solutions/edit-solutions.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-city-wrp g-pt-30 g-pb-30\">\r\n\t<ng-container *ngIf=\"!initLoading\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-3 g-mt-30\">\r\n\t\t\t\t\t<div class=\"panel-group l-sol-catg-panel-grp\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\t\t\t\t\t\t<div class=\"panel panel-default l-sol-catg-panel-1\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-cursor-pointer g-fs-08 l-sol-catg-acc-title g-fw-500\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" (click)=\"viewProviderProfile()\">\r\n\t\t\t\t\t\t\t\t\tProfile\r\n\t\t\t\t\t\t\t\t\t<i class=\"g-float-right\"><img src=\"assets/img/help/down_chevron.svg\" alt=\"icon\" /></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel panel-default l-sol-catg-panel-2\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\tclass=\"g-cursor-pointer g-fs-08 l-sol-catg-acc-title g-fw-500\"\r\n\t\t\t\t\t\t\t\t\tdata-toggle=\"collapse\"\r\n\t\t\t\t\t\t\t\t\tdata-parent=\"#accordion\"\r\n\t\t\t\t\t\t\t\t\thref=\"#l-sol-catg-acc-1\"\r\n\t\t\t\t\t\t\t\t\taria-expanded=\"true\"\r\n\t\t\t\t\t\t\t\t\taria-controls=\"l-sol-catg-acc-1\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\tSolutions\r\n\t\t\t\t\t\t\t\t\t<i class=\"g-float-right\"><img src=\"assets/img/help/down_chevron.svg\" alt=\"icon\" /></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"l-sol-catg-acc-1\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<ul class=\"l-sol-catg-acc-1-ul g-p-0\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"g-fs-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-cursor-pointer\" routerLink=\"/provider/user/{{ loggedInUser.slug }}/all-solutions\"> Drafts </a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"g-fs-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-cursor-pointer\" routerLink=\"/provider/user/{{ loggedInUser.slug }}/solutions/create\"> Add New Solution + </a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <ng-container *ngFor=\"let solution of all_solutions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"g-fs-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-cursor-pointer\" (click)=\"editSolution(solution.id)\">{{ solution.name }}</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container> -->\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t<div class=\"g-pt-12\">\r\n\t\t\t\t\t\t\t<ul class=\"a-step-form-active-list text-center g-p-0\">\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'g-p-bg': solutionStep1,\r\n\t\t\t\t\t\t\t\t\t\t'primary-grey-bg': !solutionStep1\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"gotoStep('step1')\"\r\n\t\t\t\t\t\t\t\t></li>\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'g-p-bg': solutionStep2,\r\n\t\t\t\t\t\t\t\t\t\t'primary-grey-bg': !solutionStep2\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"gotoStep('step2')\"\r\n\t\t\t\t\t\t\t\t></li>\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'g-p-bg': solutionStep3,\r\n\t\t\t\t\t\t\t\t\t\t'primary-grey-bg': !solutionStep3\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"gotoStep('step3')\"\r\n\t\t\t\t\t\t\t\t></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"add-form-wrapper\">\r\n\t\t\t\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t\t\t\t<div class=\"step-wrapper\" *ngIf=\"solutionStep1\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-400 title-clr g-pt-10 g-pb-04\">Solution Brief</div>\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"editSolutionStep1\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"sol_name\" class=\"g-fs-07 lable-grey g-fw-400\"> Solution Name<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"sol_name\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: Water Body Preservation\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionName\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep1.solutionName.touched || isSubmitted.Step1) && editSolutionControlStep1.solutionName?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.solutionName.touched || isSubmitted.Step1) && editSolutionControlStep1.solutionName.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Name is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\"> Challenge Sector<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"multiselect-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"frg-multiselect-dropdown\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[placeholder]=\"'Select Challenge Sector'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[settings]=\"dropdownSettings\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[data]=\"sectorDropdownList\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"challengeSectors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(onSelect)=\"getChallengeBasedOnSector($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(onDeSelect)=\"getChallengeBasedOnSector($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep1.challengeSectors.touched || isSubmitted.Step1) && editSolutionControlStep1.challengeSectors?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.challengeSectors.touched || isSubmitted.Step1) && editSolutionControlStep1.challengeSectors.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tChallenge Sector required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\"> Challenges<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"multiselect-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"frg-multiselect-dropdown\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[placeholder]=\"'Select Challenge'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(onSelect)=\"handleChallengeChange($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(onDeSelect)=\"handleChallengeChange($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[settings]=\"dropdownSettings\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[data]=\"challengeDropdownList\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"challenges\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep1.challenges.touched || isSubmitted.Step1) && editSolutionControlStep1.challenges?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.challenges.touched || isSubmitted.Step1) && editSolutionControlStep1.challenges.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tChallenge Sector required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"market_domain\" class=\"g-fs-07 lable-grey g-fw-400\"> Market Domain<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"frg-multiselect-dropdown\"\r\n\t\t\t\t\t\t\t\t\t\t\t[settings]=\"domainDropDownSettings\"\r\n\t\t\t\t\t\t\t\t\t\t\t[placeholder]=\"'Select Domain'\"\r\n\t\t\t\t\t\t\t\t\t\t\t[data]=\"domainDropDownList\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"marketDomain\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep1.marketDomain.touched || isSubmitted.Step1) && editSolutionControlStep1.marketDomain?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.marketDomain.touched || isSubmitted.Step1) && editSolutionControlStep1.marketDomain.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tCity name is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"solutionBrief\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tSolution Brief<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> Describe the solution (product/service) in terms of the problems addressed, technology used and the relevance to cities. </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"XYZ is an AIoT wearable that continuously monitors & records vital data of patients such as parameter1, parameter2, etc. The data is then made available to the medical practitioners for remote access over a dashboard for diagnosis of the disease progression in patients. AI algorithm that powers XYZ studies the patterns of the vitals and flags abnormalities in a patient along with prescriptive suggestions to help medical practitioners make better decisions for providing apt treatment to patients.\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionBrief\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep1.solutionBrief.touched || isSubmitted.Step1) && editSolutionControlStep1.solutionBrief?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.solutionBrief.touched || isSubmitted.Step1) && editSolutionControlStep1.solutionBrief.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Brief is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.solutionBrief.touched || isSubmitted.Step1) && editSolutionControlStep1.solutionBrief.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.solutionBrief.touched || isSubmitted.Step1) && editSolutionControlStep1.solutionBrief.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"valueProposition\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tValue Proposition<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> State the Value Proposition of the product/service with measured benefits in the consumer market and the application. </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Hospitals have insufficient capacity & resources to monitor a large number of patients during a crisis scenario like a pandemic. XYZ wearable enables remote monitoring of patients’ vitals, thus helping reduce the number of doctors and medical staffs requirement by 25-30%. XYZ reduces the need for medical practitioners to be physically present to monitor patients, thereby minimizing the spread of infectious diseases.\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"valueProposition\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep1.valueProposition.touched || isSubmitted.Step1) && editSolutionControlStep1.valueProposition?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.valueProposition.touched || isSubmitted.Step1) && editSolutionControlStep1.valueProposition.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tValue Proposition is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.valueProposition.touched || isSubmitted.Step1) && editSolutionControlStep1.valueProposition.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.valueProposition.touched || isSubmitted.Step1) && editSolutionControlStep1.valueProposition.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"tangibleBenefits\" class=\"g-fs-07 lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\t\t\tTangible Benefits<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> List in concise the Tangible benefits that your solution can offer. </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. Reduced number of non-emergency patients in the hospital<br>\r\n\t\t\t\t\t\t\t\t\t\t\t2. Medical practitioners time for patient monitoring is brought down by more than 20% <br>\r\n\t\t\t\t\t\t\t\t\t\t\t3. Accurate and timely data is captured and made available anytime anywhere. <br>\r\n\t\t\t\t\t\t\t\t\t\t\t4. Patients suffering of 20 different conditions such as condition1,condition2, etc. can  be remote monitored with this solution\r\n\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"tangibleBenefits\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && editSolutionControlStep1.tangibleBenefits?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && editSolutionControlStep1.tangibleBenefits.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTangible Benefits is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && editSolutionControlStep1.tangibleBenefits.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && editSolutionControlStep1.tangibleBenefits.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" type=\"button\" (click)=\"solutionStep1Submit()\">Next</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t\t\t\t<div class=\"step-wrapper\" *ngIf=\"solutionStep2\">\r\n\t\t\t\t\t\t\t\t<div class=\"back-btn-wrp g-fs-07 g-fw-500 g-mb-15\">\r\n\t\t\t\t\t\t\t\t\t<span (click)=\"gotoStep('step1')\" class=\"g-cursor-pointer g-transition body-light-clr back-btn\" [ngClass]=\"{ disable: !solutionStep1 }\"> &#60; Back </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"editSolutionStep2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"solutionAdvantages\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tSolution Advantages<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tExplain the advantages of the proposed solution in terms of technology, differentiation, ease of adoption by users, and the ability to deliver at a distinctive Value-Cost\r\n\t\t\t\t\t\t\t\t\t\t\t\tadvantage to the city at a competitive price through innovative revenue models.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. Reduces the number of doctors required to attend to patients in person, thereby freeing up doctors to handle more critical cases<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. The device is a simple wearable & is intuitive to use for the end-users, thus requires no training—reducing the dependency on staffs for installing the device<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t3. A single device costs Rs. ___, which is ___ times less than what is already available in the market and with additional feature to monitor parameter 3<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t4. The components are locally sourced and has no dependency on exports for manufacturing the devices, hence requires relatively less time for manufacturing & distribution<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionAdvantages\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && editSolutionControlStep2.solutionAdvantages?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && editSolutionControlStep2.solutionAdvantages.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Advantages is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && editSolutionControlStep2.solutionAdvantages.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && editSolutionControlStep2.solutionAdvantages.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"solutionReadiness\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tSolution Readiness<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHow ready is your solution to emerge as a Commercial product for the urban ecosystem?, Provide details about progress achieved backed by evidence for key milestones covering\r\n\t\t\t\t\t\t\t\t\t\t\t\tproduct development, trials, paid pilots, manufacturing, industry-grade certification, distribution, etc.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. The solution is ready for pilot orders and has already demonstrated successful pilots in a few hospitals<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. The solution has ___% accuracy and is close to 90% standardisation and will be ready for manufacturing & commercial orders in the next 1 to 2 months.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionReadiness\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep2.solutionReadiness.touched || isSubmitted.Step2) && editSolutionControlStep2.solutionReadiness?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep2.solutionReadiness.touched || isSubmitted.Step2) && editSolutionControlStep2.solutionReadiness.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Readiness is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep2.solutionReadiness.touched || isSubmitted.Step2) && editSolutionControlStep2.solutionReadiness.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep2.solutionReadiness.touched || isSubmitted.Step2) && editSolutionControlStep2.solutionReadiness.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"trackRecord\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tTrack Record<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tFor the solution readiness level mentioned/selected above, provide details about progress achieved backed by evidence for key milestones covering product development, trials,\r\n\t\t\t\t\t\t\t\t\t\t\t\tpaid pilots, manufacturing, industry-grade certification, distribution, etc.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. The solution is ICMR certified, and ready for real time usage and mass deployment<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. 5 successful pilot orders (for 50 devices) with government & private hospitals has been successfully executed;<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t3. We have received purchase Orders for 200 devices of worth <Rs. ABC>  from 2 government hospitals;<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t4. We have partnerships with 2 medical device marketing companies who have distribution networks across the country<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"trackRecord\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep2.trackRecord.touched || isSubmitted.Step2) && editSolutionControlStep2.trackRecord?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep2.trackRecord.touched || isSubmitted.Step2) && editSolutionControlStep2.trackRecord.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTrack Record is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep2.trackRecord.touched || isSubmitted.Step2) && editSolutionControlStep2.trackRecord.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep2.trackRecord.touched || isSubmitted.Step2) && editSolutionControlStep2.trackRecord.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tImplementation Time<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> Minimum time required to implement the Pilot from the time of initiation of the pilot order by the city. </span>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"implementationTimeMonth\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"implementationTimeMonth\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep2.implementationTimeMonth.touched || isSubmitted.Step2) && editSolutionControlStep2.implementationTimeMonth?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Months</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthsArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">{{ month }}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(editSolutionControlStep2.implementationTimeMonth.touched || isSubmitted.Step2) && editSolutionControlStep2.implementationTimeMonth.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tMonth is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"implementationTimeWeeks\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"implementationTimeWeeks\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep2.implementationTimeWeeks.touched || isSubmitted) && editSolutionControlStep2.implementationTimeWeeks?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Weeks</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let week of weekArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"week\">{{ week }}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(editSolutionControlStep2.implementationTimeWeeks.touched || isSubmitted.Step2) && editSolutionControlStep2.implementationTimeWeeks.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tWeek is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" type=\"button\" (click)=\"solutionStep2Submit()\">Next</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- step 3 -->\r\n\t\t\t\t\t\t\t<div class=\"step-wrapper\" *ngIf=\"solutionStep3\">\r\n\t\t\t\t\t\t\t\t<div class=\"back-btn-wrp g-fs-07 g-fw-500 g-mb-15\">\r\n\t\t\t\t\t\t\t\t\t<span (click)=\"gotoStep('step2')\" class=\"g-cursor-pointer g-transition body-light-clr back-btn\" [ngClass]=\"{ disable: !solutionStep1 }\"> &#60; Back </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"editSolutionStep3\" *ngIf=\"editSolutionStep1 && editSolutionStep2 && editSolutionStep3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"ipStatus\" class=\"g-fs-07 lable-grey g-fw-400\"> IP Status </label>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"implementationTimeWeeks\" formControlName=\"ipStatus\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"\" selected=\"selected\">Select Status</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ipStatusArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"status\">{{ status }}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"identificationNumber\" class=\"g-fs-07 lable-grey g-fw-400\"> Identification Number </label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"identificationNumber\" placeholder=\"ex: 7\" formControlName=\"identificationNumber\" />\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"expertsInvolved\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tExperts Involved<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tDescribe the nature and scope of expertise within the team or company with respect to proven track record in R&D, product development & engineering for advanced\r\n\t\t\t\t\t\t\t\t\t\t\t\tindustrial-grade applications, systems & subsystems. Basic details (contact) of the mentors/experts in the development of the Solution and their credentials.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. The team consists of three seasoned entrepreneurs with significant expertise in medical devices, AI, IoT, disease diagnosis, and commercial execution. The team has a combined experience of 50 years in the fields mentioned above.\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"expertsInvolved\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (editSolutionControlStep3.expertsInvolved.touched || isSubmitted.Step3) && editSolutionControlStep3.expertsInvolved?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep3.expertsInvolved.touched || isSubmitted.Step3) && editSolutionControlStep3.expertsInvolved.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tExperts Involved is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep3.expertsInvolved.touched || isSubmitted.Step3) && editSolutionControlStep3.expertsInvolved.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t650 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep3.expertsInvolved.touched || isSubmitted.Step3) && editSolutionControlStep3.expertsInvolved.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"otherDetails\" class=\"g-fs-07 lable-grey g-fw-400\"> Other Details<br /> </label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor [editor]=\"Editor\" formControlName=\"otherDetails\"></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep3.otherDetails.touched || isSubmitted.Step3) && editSolutionControlStep3.otherDetails.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t500 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- product image uploads -->\r\n\t\t\t\t\t\t\t\t\t\t<app-gallery-upload [gallery]=\"currentProductImages\" (onGalleryChange)=\"handleSaveGallery($event)\"> </app-gallery-upload>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"video\" class=\"g-fs-07 lable-grey g-fw-400\"> Video Link </label>\r\n\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"video\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"video\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: editSolutionControlStep3.video?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editSolutionControlStep3.video.touched || isSubmitted.Step3) && editSolutionControlStep3.video.errors?.pattern\"> Invalid url format. </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"solutionData?.data.status == 'draft'; else elseBlock\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"saveAsDraft()\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-w-100per g-fs-08 g-pt-04 g-pb-04 g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tSave as draft&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"draftLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"publishSolution()\" class=\"btn g-bdr-005 g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04 g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tPublish&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" type=\"button\" (click)=\"saveSolution()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSave &nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"initLoading\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade a-create-challenge-modal\" id=\"confirmDialog\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-p-21\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-16 g-lh-19 g-fw-500 bg-blue-clr text-left\">Are you sure you want to exit your submssion?</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 body-grey-clr g-pt-07 text-left\">Going back will not save any of the information that you’ve provided in the input.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<button type=\"button\" #closebutton class=\"btn g-bdrrad-7px g-bdr-005 g-black5-brdr g-fs-12 g-w-bg g-pt-02 g-pb-02 g-pl-06 g-pr-06\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-27 text-left\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-p-brdr g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04\" (click)=\"handleGoBack('save')\">\r\n\t\t\t\t\t\tSave Draft & Go Back&nbsp; <i *ngIf=\"draftLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-12 g-fs-08 g-pt-04 g-pb-04 g-pl-24 g-pr-24\" (click)=\"handleGoBack('delete')\">Delete & Go Back</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider-public-profile/provider-public-profile.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider-public-profile/provider-public-profile.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-profile-wrapper\">\r\n    <profile-top-card [profileData]=\"profileData?.data\" [loading]=\"profileLoading\"></profile-top-card>\r\n    <section class=\"profile-content\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                    <ng-container *ngIf=\"!profileLoading\">\r\n                        <ng-container *ngIf=\"profileData.data.role == 'startup'\">\r\n                            <startup-company-view [profileData]=\"profileData?.data\"></startup-company-view>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"profileData.data.role == 'enterprise'\">\r\n                            <enterprise-company-view [profileData]=\"profileData?.data\"></enterprise-company-view>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"profileData.data.role == 'individual'\">\r\n                            <individual-innovator-view [profileData]=\"profileData?.data\"></individual-innovator-view>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"profileLoading\">\r\n                        <div class=\"company-details-content\">\r\n                            <div>\r\n                                <ngx-skeleton-loader animation=\"pulse\" appearance=\"circle\" [theme]=\"{\r\n                                    height: '74px',\r\n                                    width: '74px',\r\n                                    'border-radius': '6px',\r\n                                    margin: '0px 0px 15px'\r\n                                  }\">\r\n                                </ngx-skeleton-loader>\r\n                            </div>\r\n                            <div>\r\n                                <ngx-skeleton-loader animation=\"pulse\"\r\n                                    [theme]=\"{ 'border-radius': '2px', height: '16px',width:'300px', margin:'0px 0px 5px' }\">\r\n                                </ngx-skeleton-loader>\r\n                            </div>\r\n                            <div>\r\n                                <ngx-skeleton-loader animation=\"pulse\" count=\"3\"\r\n                                    [theme]=\"{ 'border-radius': '2px', height: '16px',width:'100%', margin:'0px 0px 5px' }\">\r\n                                </ngx-skeleton-loader>\r\n                            </div>\r\n                            <hr>\r\n                            <div>\r\n                                <ngx-skeleton-loader animation=\"pulse\" count=\"6\"\r\n                                    [theme]=\"{ 'border-radius': '2px', height: '16px',width:'100%', margin:'0px 0px 5px' }\">\r\n                                </ngx-skeleton-loader>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!profileLoading\">\r\n                        <ng-container *ngIf=\"profileData.data.achievements?.length > 0\">\r\n                            <div class=\"achievement-card\">\r\n                                <div class=\"card-header\">\r\n                                    <span class=\"g-fs-09 g-fw-400\">Awards & Recognitions</span>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <ng-container *ngFor=\"let item of profileData.data.achievements\">\r\n                                        <div class=\"achievement-item\">\r\n                                            <div class=\"monthyear\">\r\n                                                <div class=\"month\"> {{item.month}} </div>\r\n                                                <div class=\"year\"> {{item.year}} </div>\r\n                                            </div>\r\n                                            <div class=\"achievement-content\">\r\n                                                <div class=\"title\">\r\n                                                    {{item.title}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"col-md-7 \">\r\n                    <section class=\"solution-area\">\r\n                        <div class=\"g-mb-09\">\r\n                            <div class=\"g-fw-500 title-clr\">Solutions</div>\r\n                        </div>\r\n                        <ng-container *ngIf=\"!solutionLoading\">\r\n                            <ng-container *ngFor=\"let item of solutionData?.data; let i = index\">\r\n                                <solution-item [Id]=\"i\" [solutionData]=\"item\"></solution-item>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"solutionLoading\">\r\n                            <div class=\"panel g-bdrrad-10px g-overflow-hidden\" *ngFor=\"let item of [].constructor(3)\">\r\n                                <div class=\"panel-body g-pt-0\">\r\n                                    <div class=\"row\">\r\n                                        <ngx-skeleton-loader animation=\"pulse\" appearance=\"circle\" [theme]=\"{\r\n                                        height: '480px', \r\n                                        width:'100%', \r\n                                        'border-radius': '0',\r\n                                        margin:'0px'\r\n                                      }\">\r\n                                        </ngx-skeleton-loader>\r\n                                    </div>\r\n                                    <div class=\"row g-pl-12 g-pr-12\">\r\n                                        <div class=\"col-sm-10\">\r\n                                            <div class=\"g-pt-12\">\r\n                                                <ngx-skeleton-loader animation=\"pulse\"\r\n                                                    [theme]=\"{ 'border-radius': '2px', height: '18px',width:'80%', margin:'0px 0px 2px' }\">\r\n                                                </ngx-skeleton-loader>\r\n                                            </div>\r\n                                            <div class=\"g-pt-05\">\r\n                                                <ngx-skeleton-loader animation=\"pulse\" count=\"2\"\r\n                                                    [theme]=\"{ 'border-radius': '2px', height: '14px',width:'100%', margin:'0px 0px 2px' }\">\r\n                                                </ngx-skeleton-loader>\r\n                                            </div>\r\n                                            <div class=\"g-pt-09\">\r\n                                                <ngx-skeleton-loader animation=\"pulse\"\r\n                                                    [theme]=\"{ 'border-radius': '2px', height: '30px',width:'140px', margin:'0px 0px 4px' }\">\r\n                                                </ngx-skeleton-loader>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-2 text-center\">\r\n                                            <div class=\"g-mt-11\">\r\n                                                <ngx-skeleton-loader animation=\"pulse\" appearance=\"circle\"\r\n                                                    [theme]=\"{ 'border-radius': '2px', height: '30px',width:'40px', margin:'0px 0px 4px' }\">\r\n                                                </ngx-skeleton-loader>\r\n                                            </div>\r\n                                            <div>\r\n                                                <div class=\"g-fs-06 g-fw-500 g-black5-clr\">\r\n                                                    <ngx-skeleton-loader animation=\"pulse\"\r\n                                                        [theme]=\"{ 'border-radius': '2px', height: '12px',width:'90%', margin:'0px 0px' }\">\r\n                                                    </ngx-skeleton-loader>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </section>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider-user-edit/provider-user-edit.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider-user-edit/provider-user-edit.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"edit-user-wrapper\">\r\n\t<profile-top-card [profileData]=\"profileData?.data\" [viewType]=\"'user'\" [loading]=\"profileLoading\"> </profile-top-card>\r\n\t<section class=\"edit-tabs g-pt-30 g-pb-30\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- tabs -->\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<div class=\"panel-group l-sol-catg-panel-grp\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\t\t\t\t\t\t<div class=\"panel panel-default l-sol-catg-panel-1\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading g-white-bg\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" href=\"#collapse1\" class=\"g-fw-500 g-black5-clr g-fs-09\">\r\n\t\t\t\t\t\t\t\t\t\tProfile\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"a-seeker-edit-opt-icon\"><i class=\"fas fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"collapse1\" class=\"panel-collapse collapse in\">\r\n\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-stacked a-seeker-edit-profile-opt\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"active\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#edit\" data-toggle=\"tab\">Edit Profile</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"profileData?.data.role != 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#editCompanyDetails\" data-toggle=\"tab\"> Edit Company Details </a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#changePassword\" data-toggle=\"tab\">Change Password</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel panel-default l-sol-catg-panel-2\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\tclass=\"g-cursor-pointer g-fs-08 l-sol-catg-acc-title g-fw-500\"\r\n\t\t\t\t\t\t\t\t\tdata-toggle=\"collapse\"\r\n\t\t\t\t\t\t\t\t\tdata-parent=\"#accordion\"\r\n\t\t\t\t\t\t\t\t\thref=\"#l-sol-catg-acc-1\"\r\n\t\t\t\t\t\t\t\t\taria-expanded=\"true\"\r\n\t\t\t\t\t\t\t\t\taria-controls=\"l-sol-catg-acc-1\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\tSolutions\r\n\t\t\t\t\t\t\t\t\t<span class=\"a-seeker-edit-opt-icon\"><i class=\"fas fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"l-sol-catg-acc-1\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body g-p-0 g-m-0\">\r\n\t\t\t\t\t\t\t\t\t<ul class=\"l-sol-catg-acc-1-ul g-p-0\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"g-fs-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-cursor-pointer\" routerLink=\"/provider/user/{{ userSlug }}/all-solutions\">Drafts</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"g-fs-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-cursor-pointer\" routerLink=\"/provider/user/{{ userSlug }}/solutions/create\">Add New Solution + </a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<!-- tab content -->\r\n\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t<div id=\"edit\" class=\"tab-pane active\">\r\n\t\t\t\t\t\t\t<provider-edit-profile [profileData]=\"profileData?.data\" [loading]=\"profileLoading\" (onEdit)=\"handleProfileEdit($event)\" [locationData]=\"LocationData?.data\">\r\n\t\t\t\t\t\t\t</provider-edit-profile>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div id=\"editCompanyDetails\" class=\"tab-pane\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"!profileLoading\">\r\n\t\t\t\t\t\t\t\t<startup-company-edit *ngIf=\"profileData.data.role == 'startup'\" [companyData]=\"profileData.data\" (onEdit)=\"handleStartupCompanyEdit($event)\">\r\n\t\t\t\t\t\t\t\t</startup-company-edit>\r\n\t\t\t\t\t\t\t\t<enterprise-company-edit *ngIf=\"profileData.data.role == 'enterprise'\" [companyData]=\"profileData.data\" (onEdit)=\"handleEnterpriseCompanyEdit($event)\">\r\n\t\t\t\t\t\t\t\t</enterprise-company-edit>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"profileLoading\">\r\n\t\t\t\t\t\t\t\t<div class=\"loader\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"section-loader\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div id=\"changePassword\" class=\"tab-pane\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"!profileLoading\">\r\n\t\t\t\t\t\t\t\t<reset-password [profileData]=\"profileData?.data\"></reset-password>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"profileLoading\">\r\n\t\t\t\t\t\t\t\t<div class=\"loader\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"section-loader\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider-user-profile/provider-user-profile.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider-user-profile/provider-user-profile.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-profile-wrapper\">\r\n    <profile-top-card [profileData]=\"profileData?.data\" [viewType]=\"'user'\" [loading]=\"profileLoading\"></profile-top-card>\r\n    <section class=\"profile-content\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                    <ng-container *ngIf=\"!profileLoading\">\r\n                        <ng-container *ngIf=\"profileData.data.role == 'startup'\">\r\n                            <startup-company-view [profileData]=\"profileData?.data\"></startup-company-view>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"profileData.data.role == 'enterprise'\">\r\n                            <enterprise-company-view [profileData]=\"profileData?.data\"></enterprise-company-view>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"profileData.data.role == 'individual'\">\r\n                            <individual-innovator-view [profileData]=\"profileData?.data\"></individual-innovator-view>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"profileLoading\">\r\n                        <div class=\"company-details-content\">\r\n                            <div>\r\n                                <ngx-skeleton-loader animation=\"pulse\" appearance=\"circle\" [theme]=\"{\r\n                                    height: '74px',\r\n                                    width: '74px',\r\n                                    'border-radius': '6px',\r\n                                    margin: '0px 0px 15px'\r\n                                  }\">\r\n                                </ngx-skeleton-loader>\r\n                            </div>\r\n                            <div>\r\n                                <ngx-skeleton-loader animation=\"pulse\"\r\n                                    [theme]=\"{ 'border-radius': '2px', height: '16px',width:'300px', margin:'0px 0px 5px' }\">\r\n                                </ngx-skeleton-loader>\r\n                            </div>\r\n                            <div>\r\n                                <ngx-skeleton-loader animation=\"pulse\" count=\"3\"\r\n                                    [theme]=\"{ 'border-radius': '2px', height: '16px',width:'100%', margin:'0px 0px 5px' }\">\r\n                                </ngx-skeleton-loader>\r\n                            </div>\r\n                            <hr>\r\n                            <div>\r\n                                <ngx-skeleton-loader animation=\"pulse\" count=\"6\"\r\n                                    [theme]=\"{ 'border-radius': '2px', height: '16px',width:'100%', margin:'0px 0px 5px' }\">\r\n                                </ngx-skeleton-loader>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!profileLoading\">\r\n                        <ng-container *ngIf=\"profileData.data.achievements?.length > 0\">\r\n                            <div class=\"achievement-card\">\r\n                                <div class=\"card-header\">\r\n                                    <span class=\"g-fs-09 g-fw-400\">Awards & Recognitions</span>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <ng-container *ngFor=\"let item of profileData.data.achievements\">\r\n                                        <div class=\"achievement-item\">\r\n                                            <div class=\"monthyear\">\r\n                                                <div class=\"month\"> {{item.month}} </div>\r\n                                                <div class=\"year\"> {{item.year}} </div>\r\n                                            </div>\r\n                                            <div class=\"achievement-content\">\r\n                                                <div class=\"title\">\r\n                                                    {{item.title}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <section class=\"solution-area\">\r\n                        <div class=\"g-mb-09\">\r\n                            <div class=\"g-fw-500 title-clr\">My Solutions</div>\r\n                        </div>\r\n                        <ng-container *ngIf=\"!solutionLoading\">\r\n                            <ng-container *ngFor=\"let item of solutionData?.data; let i = index\">\r\n                                <solution-item [Id]=\"i\" [viewType]=\"'author'\" [solutionData]=\"item\"\r\n                                    (onDelete)=\"handleSolutionDelete($event)\"></solution-item>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"solutionLoading\">\r\n                            <div class=\"panel g-bdrrad-10px g-overflow-hidden\" *ngFor=\"let item of [].constructor(3)\">\r\n                                <div class=\"panel-body g-pt-0\">\r\n                                    <div class=\"row\">\r\n                                        <ngx-skeleton-loader animation=\"pulse\" appearance=\"circle\" [theme]=\"{\r\n                                        height: '480px', \r\n                                        width:'100%', \r\n                                        'border-radius': '0',\r\n                                        margin:'0px'\r\n                                      }\">\r\n                                        </ngx-skeleton-loader>\r\n                                    </div>\r\n                                    <div class=\"row g-pl-12 g-pr-12\">\r\n                                        <div class=\"col-sm-10\">\r\n                                            <div class=\"g-pt-12\">\r\n                                                <ngx-skeleton-loader animation=\"pulse\"\r\n                                                    [theme]=\"{ 'border-radius': '2px', height: '18px',width:'80%', margin:'0px 0px 2px' }\">\r\n                                                </ngx-skeleton-loader>\r\n                                            </div>\r\n                                            <div class=\"g-pt-05\">\r\n                                                <ngx-skeleton-loader animation=\"pulse\" count=\"2\"\r\n                                                    [theme]=\"{ 'border-radius': '2px', height: '14px',width:'100%', margin:'0px 0px 2px' }\">\r\n                                                </ngx-skeleton-loader>\r\n                                            </div>\r\n                                            <div class=\"g-pt-09\">\r\n                                                <ngx-skeleton-loader animation=\"pulse\"\r\n                                                    [theme]=\"{ 'border-radius': '2px', height: '30px',width:'140px', margin:'0px 0px 4px' }\">\r\n                                                </ngx-skeleton-loader>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-2 text-center\">\r\n                                            <div class=\"g-mt-11\">\r\n                                                <ngx-skeleton-loader animation=\"pulse\" appearance=\"circle\"\r\n                                                    [theme]=\"{ 'border-radius': '2px', height: '30px',width:'40px', margin:'0px 0px 4px' }\">\r\n                                                </ngx-skeleton-loader>\r\n                                            </div>\r\n                                            <div>\r\n                                                <div class=\"g-fs-06 g-fw-500 g-black5-clr\">\r\n                                                    <ngx-skeleton-loader animation=\"pulse\"\r\n                                                        [theme]=\"{ 'border-radius': '2px', height: '12px',width:'90%', margin:'0px 0px' }\">\r\n                                                    </ngx-skeleton-loader>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </section>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/solution-cataloging/solution-cataloging.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/solution-cataloging/solution-cataloging.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-city-wrp g-pt-30 g-pb-30\">\r\n\t<ng-container *ngIf=\"!initLoading\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<div class=\"g-pb-10 g-pt-08\">\r\n\t\t\t\t\t\t<span (click)=\"backClicked()\" class=\"g-fs-09 g-fw-500 primary-green-clr g-cursor-pointer\"> < Go back </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-group l-sol-catg-panel-grp\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\t\t\t\t\t\t<div class=\"panel panel-default l-sol-catg-panel-1\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-cursor-pointer g-fs-08 l-sol-catg-acc-title g-fw-500\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" (click)=\"viewProviderProfile()\">\r\n\t\t\t\t\t\t\t\t\tProfile\r\n\t\t\t\t\t\t\t\t\t<span class=\"a-seeker-edit-opt-icon g-float-right\"><i class=\"fas fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel panel-default l-sol-catg-panel-2\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\tclass=\"g-cursor-pointer g-fs-08 l-sol-catg-acc-title g-fw-500\"\r\n\t\t\t\t\t\t\t\t\tdata-toggle=\"collapse\"\r\n\t\t\t\t\t\t\t\t\tdata-parent=\"#accordion\"\r\n\t\t\t\t\t\t\t\t\thref=\"#l-sol-catg-acc-1\"\r\n\t\t\t\t\t\t\t\t\taria-expanded=\"true\"\r\n\t\t\t\t\t\t\t\t\taria-controls=\"l-sol-catg-acc-1\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\tSolutions\r\n\t\t\t\t\t\t\t\t\t<span class=\"a-seeker-edit-opt-icon g-float-right\"><i class=\"fas fa-chevron-down\"></i></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"l-sol-catg-acc-1\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<ul class=\"l-sol-catg-acc-1-ul\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"g-fs-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-cursor-pointer\" routerLink=\"/provider/user/{{ loggedInUser.slug }}/all-solutions\"> Drafts </a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"g-fs-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-cursor-pointer active\" routerLink=\"/provider/user/{{ loggedInUser.slug }}/solutions/create\"> Add New Solution + </a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <ng-container *ngFor=\"let solution of all_solutions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"g-fs-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-cursor-pointer\" (click)=\"editSolution(solution.id)\">{{ solution.name }}</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container> -->\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t<div class=\"g-pb-14\">\r\n\t\t\t\t\t\t\t<ul class=\"a-step-form-active-list text-center g-p-0\">\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'g-p-bg': solutionStep1,\r\n\t\t\t\t\t\t\t\t\t\t'primary-grey-bg': !solutionStep1\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"gotoStep('step1')\"\r\n\t\t\t\t\t\t\t\t></li>\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'g-p-bg': solutionStep2,\r\n\t\t\t\t\t\t\t\t\t\t'primary-grey-bg': !solutionStep2\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"gotoStep('step2')\"\r\n\t\t\t\t\t\t\t\t></li>\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'g-p-bg': solutionStep3,\r\n\t\t\t\t\t\t\t\t\t\t'primary-grey-bg': !solutionStep3\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"gotoStep('step3')\"\r\n\t\t\t\t\t\t\t\t></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"add-form-wrapper2\">\r\n\t\t\t\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t\t\t\t<div class=\"step-wrapper\" *ngIf=\"solutionStep1\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 title-clr g-pb-04\">Solution Cataloguing Form</div>\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"addSolutionStep1\" *ngIf=\"addSolutionStep1 && addSolutionStep2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"sol_name\" class=\"g-fs-07 lable-grey g-fw-400\"> Solution Name<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"sol_name\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: Water Body Preservation\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionName\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep1.solutionName.touched || isSubmitted.Step1) && addSolutionControlStep1.solutionName?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.solutionName.touched || isSubmitted.Step1) && addSolutionControlStep1.solutionName.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Name is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\"> Challenge Sector<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"multiselect-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"frg-multiselect-dropdown\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[placeholder]=\"'Select Challenge Sector'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[settings]=\"dropdownSettings\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[data]=\"sectorDropdownList\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"challengeSectors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(onSelect)=\"getChallengeBasedOnSector($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(onDeSelect)=\"getChallengeBasedOnSector($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep1.challengeSectors.touched || isSubmitted.Step1) && addSolutionControlStep1.challengeSectors?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.challengeSectors.touched || isSubmitted.Step1) && addSolutionControlStep1.challengeSectors.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tChallenge Sector required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\"> Challenges<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"multiselect-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"frg-multiselect-dropdown\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[placeholder]=\"'Select Challenge'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[settings]=\"dropdownSettings\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[data]=\"challengeDropdownList\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"challenges\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep1.challenges.touched || isSubmitted.Step1) && addSolutionControlStep1.challenges?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.challenges.touched || isSubmitted.Step1) && addSolutionControlStep1.challenges.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tChallenge Sector required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"market_domain\" class=\"g-fs-07 lable-grey g-fw-400\"> Market Domain<span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      name=\"market_domain\"\r\n                      placeholder=\"ex: Bangalore\"\r\n                      formControlName=\"marketDomain\"\r\n                      [ngClass]=\"{\r\n                        error:\r\n                          (addSolutionControlStep1.marketDomain.touched || isSubmitted.Step1) &&\r\n                          addSolutionControlStep1.marketDomain?.errors\r\n                      }\"\r\n                    /> -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"multiselect-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"frg-multiselect-dropdown\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[placeholder]=\"'Select Challenge Sector'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[settings]=\"dropdownSettings2\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[data]=\"marketDomainList\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"marketDomain\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep1.marketDomain.touched || isSubmitted.Step1) && addSolutionControlStep1.marketDomain?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.marketDomain.touched || isSubmitted.Step1) && addSolutionControlStep1.marketDomain.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMarket Domain is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"solutionBrief\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tSolution Brief<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> Describe the solution (product/service) in terms of the problems addressed, technology used and the relevance to cities. </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"XYZ is an AIoT wearable that continuously monitors & records vital data of patients such as parameter1, parameter2, etc. The data is then made available to the medical practitioners for remote access over a dashboard for diagnosis of the disease progression in patients. AI algorithm that powers XYZ studies the patterns of the vitals and flags abnormalities in a patient along with prescriptive suggestions to help medical practitioners make better decisions for providing apt treatment to patients.\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionBrief\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep1.solutionBrief.touched || isSubmitted.Step1) && addSolutionControlStep1.solutionBrief?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.solutionBrief.touched || isSubmitted.Step1) && addSolutionControlStep1.solutionBrief.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Brief is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.solutionBrief.touched || isSubmitted.Step1) && addSolutionControlStep1.solutionBrief.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.solutionBrief.touched || isSubmitted.Step1) && addSolutionControlStep1.solutionBrief.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"valueProposition\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tValue Proposition<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> State the Value Proposition of the product/service with measured benefits in the consumer market and the application. </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Hospitals have insufficient capacity & resources to monitor a large number of patients during a crisis scenario like a pandemic. XYZ wearable enables remote monitoring of patients’ vitals, thus helping reduce the number of doctors and medical staffs requirement by 25-30%. XYZ reduces the need for medical practitioners to be physically present to monitor patients, thereby minimizing the spread of infectious diseases.\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"valueProposition\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep1.valueProposition.touched || isSubmitted.Step1) && addSolutionControlStep1.valueProposition?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.valueProposition.touched || isSubmitted.Step1) && addSolutionControlStep1.valueProposition.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tValue Proposition is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.valueProposition.touched || isSubmitted.Step1) && addSolutionControlStep1.valueProposition.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t1000 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.valueProposition.touched || isSubmitted.Step1) && addSolutionControlStep1.valueProposition.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"tangibleBenefits\" class=\"g-fs-07 lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\t\t\tTangible Benefits<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> List in concise the Tangible benefits that your solution can offer. </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. Reduced number of non-emergency patients in the hospital<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. Medical practitioners time for patient monitoring is brought down by more than 20% <br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t3. Accurate and timely data is captured and made available anytime anywhere. <br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t4. Patients suffering of 20 different conditions such as condition1,condition2, etc. can  be remote monitored with this solution\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"tangibleBenefits\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && addSolutionControlStep1.tangibleBenefits?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <textarea\r\n                      rows=\"4\"\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      name=\"tangibleBenefits\"\r\n                      placeholder=\"150-200 words\"\r\n                      formControlName=\"tangibleBenefits\"\r\n                      [ngClass]=\"{\r\n                        error:\r\n                          (addSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) &&\r\n                          addSolutionControlStep1.tangibleBenefits?.errors\r\n                      }\"\r\n                    ></textarea> -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && addSolutionControlStep1.tangibleBenefits.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTangible Benefits is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && addSolutionControlStep1.tangibleBenefits.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep1.tangibleBenefits.touched || isSubmitted.Step1) && addSolutionControlStep1.tangibleBenefits.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"solutionStep1Submit()\">Save and Next</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t\t\t\t<div class=\"step-wrapper\" *ngIf=\"solutionStep2\">\r\n\t\t\t\t\t\t\t\t<div class=\"back-btn-wrp g-fs-07 g-fw-500 g-mb-10\">\r\n\t\t\t\t\t\t\t\t\t<span (click)=\"gotoStep('step1')\" class=\"g-cursor-pointer g-transition body-light-clr back-btn\" [ngClass]=\"{ disable: !solutionStep1 }\"> &#60; Back </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"addSolutionStep2\" *ngIf=\"addSolutionStep1 && addSolutionStep2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"solutionAdvantages\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tSolution Advantages<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tExplain the advantages of the proposed solution in terms of technology, differentiation, ease of adoption by users, and the ability to deliver at a distinctive Value-Cost\r\n\t\t\t\t\t\t\t\t\t\t\t\tadvantage to the city at a competitive price through innovative revenue models.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. Reduces the number of doctors required to attend to patients in person, thereby freeing up doctors to handle more critical cases<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. The device is a simple wearable & is intuitive to use for the end-users, thus requires no training—reducing the dependency on staffs for installing the device<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t3. A single device costs Rs. ___, which is ___ times less than what is already available in the market and with additional feature to monitor parameter 3<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t4. The components are locally sourced and has no dependency on exports for manufacturing the devices, hence requires relatively less time for manufacturing & distribution<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionAdvantages\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionAdvantages?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionAdvantages.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Advantages is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionAdvantages.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.solutionAdvantages.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionAdvantages.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"solutionReadiness\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tSolution Readiness<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHow ready is your solution to emerge as a Commercial product for the urban ecosystem?, Provide details about progress achieved backed by evidence for key milestones covering\r\n\t\t\t\t\t\t\t\t\t\t\t\tproduct development, trials, paid pilots, manufacturing, industry-grade certification, distribution, etc.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. The solution is ready for pilot orders and has already demonstrated successful pilots in a few hospitals<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. The solution has ___% accuracy and is close to 90% standardisation and will be ready for manufacturing & commercial orders in the next 1 to 2 months.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"solutionReadiness\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep2.solutionReadiness.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionReadiness?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.solutionReadiness.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionReadiness.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSolution Readiness is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.solutionReadiness.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionReadiness.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.solutionReadiness.touched || isSubmitted.Step2) && addSolutionControlStep2.solutionReadiness.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"trackRecord\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tTrack Record<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tFor the solution readiness level mentioned/selected above, provide details about progress achieved backed by evidence for key milestones covering product development, trials,\r\n\t\t\t\t\t\t\t\t\t\t\t\tpaid pilots, manufacturing, industry-grade certification, distribution, etc.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. The solution is ICMR certified, and ready for real time usage and mass deployment<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t2. 5 successful pilot orders (for 50 devices) with government & private hospitals has been successfully executed;<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t3. We have received purchase Orders for 200 devices of worth <Rs. ABC>  from 2 government hospitals;<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t4. We have partnerships with 2 medical device marketing companies who have distribution networks across the country<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"trackRecord\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep2.trackRecord.touched || isSubmitted.Step2) && addSolutionControlStep2.trackRecord?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.trackRecord.touched || isSubmitted.Step2) && addSolutionControlStep2.trackRecord.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTrack Record is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.trackRecord.touched || isSubmitted.Step2) && addSolutionControlStep2.trackRecord.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t750 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep2.trackRecord.touched || isSubmitted.Step2) && addSolutionControlStep2.trackRecord.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"implementationTimeWeeks\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tImplementation Time<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\"> Minimum time required to implement the Pilot from the time of initiation of the pilot order by the city. </span>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"implementationTimeMonth\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"implementationTimeMonth\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep2.implementationTimeMonth.touched || isSubmitted.Step2) && addSolutionControlStep2.implementationTimeMonth?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Month</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthsArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ month }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(addSolutionControlStep2.implementationTimeMonth.touched || isSubmitted.Step2) && addSolutionControlStep2.implementationTimeMonth.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tMonth is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"implementationTimeWeeks\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"implementationTimeWeeks\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep2.implementationTimeWeeks.touched || isSubmitted.Step2) && addSolutionControlStep2.implementationTimeWeeks?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Weeks</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let week of weekArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"week\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ week }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(addSolutionControlStep2.implementationTimeWeeks.touched || isSubmitted.Step2) && addSolutionControlStep2.implementationTimeWeeks.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tWeek is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"solutionStep2Submit()\">Next</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- step 3 -->\r\n\t\t\t\t\t\t\t<div class=\"step-wrapper\" *ngIf=\"solutionStep3\">\r\n\t\t\t\t\t\t\t\t<div class=\"back-btn-wrp g-fs-07 g-fw-500 g-mb-10\">\r\n\t\t\t\t\t\t\t\t\t<span (click)=\"gotoStep('step2')\" class=\"g-cursor-pointer g-transition body-light-clr back-btn\" [ngClass]=\"{ disable: !solutionStep1 }\"> &#60; Back </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"addSolutionStep3\" *ngIf=\"addSolutionStep1 && addSolutionStep2 && addSolutionStep3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"ipStatus\" class=\"g-fs-07 lable-grey g-fw-400\"> IP Status </label>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"ipStatus\" formControlName=\"ipStatus\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected=\"selected\">Select Status</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ipStatusArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"status\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ status }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"identificationNumber\" class=\"g-fs-07 lable-grey g-fw-400\"> Identification Number </label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"identificationNumber\" placeholder=\"ex: 7\" formControlName=\"identificationNumber\" />\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"expertsInvolved\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\tExperts Involved<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tDescribe the nature and scope of expertise within the team or company with respect to proven track record in R&D, product development & engineering for advanced\r\n\t\t\t\t\t\t\t\t\t\t\t\tindustrial-grade applications, systems & subsystems. Basic details (contact) of the mentors/experts in the development of the Solution and their credentials.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"1. The team consists of three seasoned entrepreneurs with significant expertise in medical devices, AI, IoT, disease diagnosis, and commercial execution. The team has a combined experience of 50 years in the fields mentioned above.\"\r\n\t\t\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"expertsInvolved\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep3.expertsInvolved.touched || isSubmitted.Step3) && addSolutionControlStep3.expertsInvolved?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep3.expertsInvolved.touched || isSubmitted.Step3) && addSolutionControlStep3.expertsInvolved.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tExperts Involved is required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep3.expertsInvolved.touched || isSubmitted.Step3) && addSolutionControlStep3.expertsInvolved.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t650 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep3.expertsInvolved.touched || isSubmitted.Step3) && addSolutionControlStep3.expertsInvolved.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"otherDetails\" class=\"g-fs-07 lable-grey g-fw-400\"> Other Details<br /> </label>\r\n\t\t\t\t\t\t\t\t\t\t<ckeditor [editor]=\"Editor\" formControlName=\"otherDetails\"></ckeditor>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep3.otherDetails.touched || isSubmitted.Step3) && addSolutionControlStep3.otherDetails.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t500 characterss is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<app-gallery-upload (onGalleryChange)=\"handleSaveGallery($event)\"></app-gallery-upload>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"video\" class=\"g-fs-07 lable-grey g-fw-400\"> Video Link </label>\r\n\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"video\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"video\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"https://www.xyz.com/\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (addSolutionControlStep3.video.touched || isSubmitted.Step3) && addSolutionControlStep3.video?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionControlStep3.video.touched || isSubmitted.Step3) && addSolutionControlStep3.video.errors?.pattern\"> Invalid url format. </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"saveAsDraft()\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-w-100per g-fs-08 g-pt-04 g-pb-04 g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tSave as draft&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"draftLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"saveSolution()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tAdd Solution &nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"initLoading\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade a-create-challenge-modal\" id=\"confirmDialog\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-p-21\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-16 g-lh-19 g-fw-500 bg-blue-clr text-left\">Are you sure you want to exit your submssion?</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 body-grey-clr g-pt-07 text-left\">Going back will not save any of the information that you’ve provided in the input.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<button type=\"button\" #closebutton class=\"btn g-bdrrad-7px g-bdr-005 g-black5-brdr g-fs-12 g-w-bg g-pt-02 g-pb-02 g-pl-06 g-pr-06\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-27 text-left\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-p-brdr g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04\" (click)=\"handleGoBack('save')\">\r\n\t\t\t\t\t\tSave Draft & Go Back&nbsp; <i *ngIf=\"draftLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-12 g-fs-08 g-pt-04 g-pb-04 g-pl-24 g-pr-24\" (click)=\"handleGoBack('delete')\">Delete & Go Back</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/solution/solution.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/solution/solution.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<profile-top-card [profileData]=\"profileData?.data\" [viewType]=\"'user'\" [loading]=\"loading\"></profile-top-card>\r\n<section class=\"solution-area g-pt-20 g-pb-20\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"text-right g-mb-10\">\r\n\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-black4-clr g-fs-06 g-lh-07 g-fw-700 g-ml-06 g-pt-04 g-pb-04 g-pl-04 g-pr04\" (click)=\"goBack()\">< BACK TO PROFILE</button>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"solution-wrapper\">\r\n\t\t\t<ng-container *ngIf=\"!loading\">\r\n\t\t\t\t<div class=\"solution-header\">\r\n\t\t\t\t\t<div class=\"row g-mb-15\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<div class=\"solution-title title-clr g-fs-11 g-fw-500\">\r\n\t\t\t\t\t\t\t\t{{ solution?.data.name }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<div class=\"text-right body-light-clr\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-06\">Posted on {{ solution?.data.created_at | date: \"d MMM yyyy\" }}</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-06\">Last edited on {{ solution?.data.updated_at | date: \"d MMM yyyy\" }}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"title g-mb-03\">Challenge Sector</div>\r\n\t\t\t\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let sector of solution?.data.challenge_sectors; let isLast = last\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07\"> {{ sector.name | titlecase }}{{ isLast ? \"\" : \" ,\" }} </span>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"title g-mb-03\">Challenges</div>\r\n\t\t\t\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let challenge of solution?.data.challenges; let isLast = last\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mb-04\">{{ challenge.name }}{{ isLast ? \"\" : \" ,\" }}</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t<div class=\"title g-mb-03\">Implementation Time</div>\r\n\t\t\t\t\t\t\t<div class=\"description g-fs-07\">{{ solution?.data.implementation_time.months }} Months {{ solution?.data.implementation_time.weeks }} Weeks</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t<div class=\"title g-mb-03\">IP Status</div>\r\n\t\t\t\t\t\t\t<div class=\"description g-fs-07\">\r\n\t\t\t\t\t\t\t\t{{ solution.data.ip_details.status }}-{{ solution.data.ip_details.id_number }}\r\n\t\t\t\t\t\t\t\t<!-- <ng-container *ngIf=\"solution.data.ip_details.status == 'Granted' || solution.data.ip_details.status == 'Pubished'; else elseBlock\"> </ng-container>\r\n\t\t\t\t\t\t\t\t<ng-template #elseBlock>{{ solution.data.ip_details.status }}</ng-template> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"solution-body g-pb-15 g-pt-15\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"!solution.data.images; else elseBlock\">\r\n\t\t\t\t\t\t\t\t<div class=\"image-placeholder\">\r\n\t\t\t\t\t\t\t\t\t<!-- <img src=\"assets/img/carousel-item.png\" alt=\"\" > -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-template #elseBlock>\r\n\t\t\t\t\t\t\t\t<div id=\"solutionImageSlider\" class=\"carousel slide carousel-fade\" data-interval=\"false\">\r\n\t\t\t\t\t\t\t\t\t<!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"item\" *ngFor=\"let image of solution?.data.images; let index = index\" [class.active]=\"index == 0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + image\" alt=\"solution image\" [hidden]=\"imagesLoading\" (load)=\"this.imagesLoading = false\" />\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"imagesLoading\" class=\"image-placeholder\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!-- Indicators -->\r\n\t\t\t\t\t\t\t\t\t<ol class=\"carousel-indicators g-pt-15\">\r\n\t\t\t\t\t\t\t\t\t\t<li data-target=\"#solutionImageSlider\" *ngFor=\"let image of solution?.data.images; let index = index\" [class.active]=\"index == 0\" [attr.data-slide-to]=\"index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + image\" alt=\"\" [hidden]=\"imagesLoading\" (load)=\"this.imagesLoading = false\" />\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"imagesLoading\" class=\"image-placeholder-nav-dots\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t\t<!-- Left and right controls -->\r\n\t\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"solution.data.images && solution.data.images.length > 1\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{ 'background-image': solution.data.images ? 'url(' + serverUrl + solution?.data.images[0] + ')' : '' }\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"left carousel-control\" href=\"#solutionImageSlider\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"right carousel-control\" href=\"#solutionImageSlider\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"title g-mb-03\">Solution Brief</div>\r\n\t\t\t\t\t\t\t<div class=\"description g-fs-07 g-mb-10\" [innerHtml]=\"solution?.data.solution_brief\"></div>\r\n\t\t\t\t\t\t\t<div class=\"title g-mb-03\">Value Proposition</div>\r\n\t\t\t\t\t\t\t<div class=\"description g-fs-07 g-mb-10\" [innerHtml]=\"solution?.data.value_proposition\"></div>\r\n\t\t\t\t\t\t\t<div class=\"title g-mb-03\">Tangible Benefits</div>\r\n\t\t\t\t\t\t\t<div class=\"description g-fs-07 g-mb-10\" [innerHtml]=\"solution?.data.tangible_benifits\"></div>\r\n\t\t\t\t\t\t\t<div class=\"title g-mb-03\">Solution Advantages</div>\r\n\t\t\t\t\t\t\t<div class=\"description g-fs-07 g-mb-10\" [innerHtml]=\"solution?.data.solution_advantages\"></div>\r\n\t\t\t\t\t\t\t<div class=\"title g-mb-03\">Solution Readiness</div>\r\n\t\t\t\t\t\t\t<div class=\"description g-fs-07 g-mb-10\" [innerHtml]=\"solution?.data.solution_readiness\"></div>\r\n\t\t\t\t\t\t\t<div class=\"title g-mb-03\">Track Record</div>\r\n\t\t\t\t\t\t\t<div class=\"description g-fs-07 g-mb-10\" [innerHtml]=\"solution?.data.track_record\"></div>\r\n\t\t\t\t\t\t\t<div class=\"title g-mb-03\">Experts Involved</div>\r\n\t\t\t\t\t\t\t<div class=\"description g-fs-07 g-mb-10\" [innerHtml]=\"solution?.data.experts_involved\"></div>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"solution?.data.other_details != ''\">\r\n\t\t\t\t\t\t\t\t<div class=\"title g-mb-03\">Other details</div>\r\n\t\t\t\t\t\t\t\t<div class=\"description g-fs-07 g-mb-10\" [innerHtml]=\"solution?.data.other_details\"></div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"solution?.data.video_link != ''\">\r\n\t\t\t\t\t\t\t\t<div class=\"title g-mb-03\">Video Link</div>\r\n\t\t\t\t\t\t\t\t<div class=\"description g-fs-07 g-mb-10\">\r\n\t\t\t\t\t\t\t\t\t<a [href]=\"solution?.data.video_link\" target=\"_blank\">{{ solution?.data.video_link }}</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"loading\">\r\n\t\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t\t<div class=\"section-loader\">\r\n\t\t\t\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/unsolicited-proposal/unsolicited-proposal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/unsolicited-proposal/unsolicited-proposal.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container a-creat-chlng g-mt-25 g-mb-25\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n\n          <div class=\"a-add-challenge-wrp g-w-bg\">\n            <div class=\"g-mb-12\">\n                <div class=\"g-fs-18 g-fw-500 bg-blue-clr\">Create Challenge</div>\n            </div>\n            <form [formGroup]=\"unsolicitedProposal\" (ngSubmit)=\"savePropsal()\">\n                <div class=\"form-group g-mt-03\">\n                    <label for=\"name\" class=\"g-fs-07 lable-grey g-fw-400\">Challenge Name<span class=\"g-warning-clr\">*</span></label>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"name\"\n                        placeholder=\"ex:Smart water management \"\n                        formControlName=\"name\"\n                        [ngClass]=\"{\n                            error: (formControlStep.name.touched || isSubmitted) && formControlStep.name?.errors\n                        }\"\n                    />\n                    <div class=\"err-resp\">\n                        <span class=\"field-err\" *ngIf=\"(formControlStep.name.touched || isSubmitted) && formControlStep.name.errors?.required\"> Challenge name is required </span>\n                        <span class=\"field-err\" *ngIf=\"(formControlStep.name.touched || isSubmitted) && formControlStep.name.errors?.minlength\">\n                            Minimum 30 characters required.\n                        </span>\n                        <span class=\"field-err\" *ngIf=\"(formControlStep.name.touched || isSubmitted) && formControlStep.name.errors?.challengeAlreadyExist\">\n                            Challenge already exist\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group g-mt-03\">\n                    <label for=\"challenge_sector\" class=\"g-fs-07 lable-grey g-fw-400\">Challenge Sector<span class=\"g-warning-clr\">*</span></label>\n                    <select\n                        class=\"form-control\"\n                        name=\"challenge_sector\"\n                        formControlName=\"challenge_sector\"\n                        [ngClass]=\"{\n                            error: (formControlStep.challenge_sector.touched || isSubmitted) && formControlStep.challenge_sector?.errors\n                        }\"\n                    >\n                        <option selected=\"selected\" value=\"\">Select Challenge Sector</option>\n                        <ng-container *ngIf=\"!sectorLoading\">\n                            <option *ngFor=\"let sector of challengeSectors?.data\" [value]=\"sector.id\">\n                                {{ sector.name | titlecase }}\n                            </option>\n                        </ng-container>\n                    </select>\n                    <div class=\"err-resp\">\n                        <span class=\"field-err\" *ngIf=\"(formControlStep.challenge_sector.touched || isSubmitted) && formControlStep.challenge_sector.errors?.required\">\n                            Challenge Sector is required\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group g-mt-03\">\n                    <label for=\"city\" class=\"g-fs-07 lable-grey g-fw-400\">City<span class=\"g-warning-clr\">*</span></label>\n                    <select\n                        class=\"form-control\"\n                        name=\"city\"\n                        formControlName=\"city\"\n                        [ngClass]=\"{\n                            error: (formControlStep.city.touched || isSubmitted) && formControlStep.city?.errors\n                        }\"\n                    >\n                        <option selected=\"selected\" value=\"\">Select City</option>\n                        <ng-container *ngIf=\"!sectorLoading\">\n                            <option *ngFor=\"let city of smartCities\" [value]=\"city.id\">\n                                {{ city.name | titlecase }}\n                            </option>\n                        </ng-container>\n                    </select>\n                    <div class=\"err-resp\">\n                        <span class=\"field-err\" *ngIf=\"(formControlStep.city.touched || isSubmitted) && formControlStep.city.errors?.required\">\n                            City is required\n                        </span>\n                    </div>\n                </div>\n                <div class=\"upload-wrapper\">\n\t\t\t\t\t<div class=\"upload-inner\">\n\t\t\t\t\t\t<div class=\"g-fs-07 lable-grey g-fw-400\">Upload File<span class=\"g-warning-clr\">*</span></div>\n\t\t\t\t\t\t<div class=\"add-doc\">\n\t\t\t\t\t\t\t<input type=\"file\" id=\"uns_prop_file\" class=\"inputfile\"  multiple (change)=\"onFileChange($event)\"/>\n\t\t\t\t\t\t\t<label for=\"uns_prop_file\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<span class=\"g-mr-06 g-fs-07\">Add File</span>\n\t\t\t\t\t\t\t\t<i class=\"far fa-plus-square\"></i>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ng-container *ngFor=\"let file of fileNameArr; let i = index\">\n\t\t\t\t\t\t\t<div class=\"file-item\">\n\t\t\t\t\t\t\t\t<div class=\"file-col\">\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t{{ file.length > 50 ? (file | slice: 0:50) + \"..\" : file }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"remove-col text-right\">\n\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"removeFile(i)\"><i class=\"far fa-trash-alt\"></i></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"loader\" [class.active]=\"loading\">\n\t\t\t\t\t\t<div class=\"loaderBar\"></div>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n                <div class=\"g-mt-20\">\n                    <button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\n                        Submit&nbsp;\n                        <i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"isLoading\"></i>\n                    </button>\n                </div>\n            </form>\n          </div>\n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/enterprise/enterprise.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/enterprise/enterprise.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container g-pos-relative\">\r\n  <div class=\"back-btn-wrp g-fs-08 g-fw-500 g-mt-10\">\r\n\t\t<span class=\"g-cursor-pointer g-transition body-light-clr back-btn\" routerLink=\"..\"> &#60; Back </span>\r\n\t</div>\r\n  <div class=\"g-pt-30\">\r\n    <ul class=\"a-step-form-active-list text-center g-p-0\">\r\n      <li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{\r\n          'g-p-bg': !enterprise_stp_1,\r\n          'primary-grey-bg': enterprise_stp_1\r\n        }\" (click)=\"gotoStep('step1')\"></li>\r\n      <li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{\r\n          'g-p-bg': !enterprise_stp_2,\r\n          'primary-grey-bg': enterprise_stp_2\r\n        }\" (click)=\"gotoStep('step2')\"></li>\r\n      <li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{\r\n          'g-p-bg': !enterprise_stp_3,\r\n          'primary-grey-bg': enterprise_stp_3\r\n        }\" (click)=\"gotoStep('step3')\"></li>\r\n      <li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{\r\n          'g-p-bg': !enterprise_stp_4,\r\n          'primary-grey-bg': enterprise_stp_4\r\n        }\" (click)=\"gotoStep('step4')\"></li>\r\n      <li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{\r\n          'g-p-bg': !enterprise_stp_5,\r\n          'primary-grey-bg': enterprise_stp_5\r\n        }\" (click)=\"gotoStep('step5')\"></li>\r\n    </ul>\r\n  </div>\r\n  <form #enterprise_frm=\"ngForm\">\r\n    <div class=\"row g-mt-30 g-mb-30\" [hidden]=\"enterprise_stp_1\">\r\n      <div class=\"col-sm-3\"></div>\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <div class=\"card g-w-bg card-wrp\">\r\n          <div class=\"card-body\">\r\n            <form [formGroup]=\"enterpriseForm.Step1\" (ngSubmit)=\"onSubmit('Step1')\">\r\n              <div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n                <div class=\"g-pt-30\">\r\n                  <div class=\"g-fs-18 g-fw-500 title-clr\">\r\n                    Innovator Sign Up\r\n                  </div>\r\n                </div>\r\n                <div class=\"row g-mt-10\">\r\n                  <div class=\"col-sm-8 col-xs-12\">\r\n                    <div class=\"form-group g-mt-03\">\r\n                      <label for=\"fullname\" class=\"g-fs-07 g-black14-clr g-fw-500\">Full Name *</label>\r\n                      <input type=\"text\" class=\"form-control \" name=\"fullname\" placeholder=\"John Doe\"\r\n                        formControlName=\"fullname\" [ngClass]=\"{\r\n                          error:\r\n                            (formControlStep1.fullname.touched ||\r\n                              isSubmitted.Step1) &&\r\n                            formControlStep1.fullname?.errors\r\n                        }\" />\r\n                      <div class=\"err-resp\">\r\n                        <span class=\"field-err\" *ngIf=\"\r\n                            (formControlStep1.fullname.touched ||\r\n                              isSubmitted.Step1) &&\r\n                            formControlStep1.fullname.errors?.required\r\n                          \">\r\n                          Full Name is required\r\n                        </span>\r\n                        <span class=\"field-err\" *ngIf=\"\r\n                            formControlStep1.fullname.touched &&\r\n                            formControlStep1.fullname.errors?.pattern\r\n                          \">\r\n                          Enter a valid name\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4 text-center hidden-xs\">\r\n                    <div class=\"avatar-upload\">\r\n                      <Avatar-Upload (onSaveImage)=\"handleAvatar($event)\">\r\n                      </Avatar-Upload>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group g-mt-03\">\r\n                  <label for=\"email\" class=\"g-fs-07 g-black14-clr g-fw-500\">Email *</label>\r\n                  <input type=\"email\" class=\"form-control \" name=\"email\" placeholder=\"johndoe@gmail.com\"\r\n                    formControlName=\"email\" [ngClass]=\"{\r\n                      error:\r\n                        (formControlStep1.email.touched || isSubmitted.Step1) &&\r\n                        formControlStep1.email?.errors\r\n                    }\" />\r\n                  <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        (formControlStep1.email.touched || isSubmitted.Step1) &&\r\n                        formControlStep1.email.errors?.required\r\n                      \">\r\n                      Email is required\r\n                    </span>\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        formControlStep1.email.touched &&\r\n                        formControlStep1.email.errors?.email\r\n                      \">\r\n                      Enter a valid email address\r\n                    </span>\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        formControlStep1.email.touched &&\r\n                        formControlStep1.email.errors?.emailAlreadyExist\r\n                      \">\r\n                      Email already exist\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group g-mt-03\">\r\n                  <label for=\"number\" class=\"g-fs-07 g-black14-clr g-fw-500\">Phone *</label>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-2\">\r\n                      <input type=\"text\" class=\"form-control  phone-code\" value=\"+91\" disabled />\r\n                    </div>\r\n                    <div class=\"col-sm-10\">\r\n                      <input type=\"text\" class=\"form-control \" formControlName=\"phnum\" [ngClass]=\"{\r\n                          error:\r\n                            (formControlStep1.phnum.touched ||\r\n                              isSubmitted.Step1) &&\r\n                            formControlStep1.phnum?.errors\r\n                        }\" placeholder=\"ex: 9255333586\" />\r\n                      <div class=\"err-resp\">\r\n                        <span class=\"field-err\" *ngIf=\"\r\n                            (formControlStep1.phnum.touched ||\r\n                              isSubmitted.Step1) &&\r\n                            formControlStep1.phnum.errors?.required\r\n                          \">\r\n                          Phone number is required\r\n                        </span>\r\n                        <span class=\"field-err\" *ngIf=\"\r\n                            formControlStep1.phnum.touched &&\r\n                            formControlStep1.phnum.errors?.pattern\r\n                          \">\r\n                          Enter a valid phone number\r\n                        </span>\r\n                        <span class=\"field-err\" *ngIf=\"\r\n                            formControlStep1.phnum.touched &&\r\n                            formControlStep1.phnum.errors?.phonenumAlreadyExist\r\n                          \">\r\n                          Phone number already exist\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group g-mt-03\">\r\n                  <label for=\"location\" class=\"g-fs-07 g-black14-clr g-fw-500\">Location *</label>\r\n                  <select class=\"form-control \" formControlName=\"location\" [ngClass]=\"{\r\n                      error:\r\n                        (formControlStep1.location.touched ||\r\n                          isSubmitted.Step1) &&\r\n                        formControlStep1.location?.errors\r\n                    }\">\r\n                    <option selected=\"selected\" value=\"\">\r\n                      Select Location\r\n                    </option>\r\n                    <option *ngFor=\"let location of locations\" [value]=\"location.id\">\r\n                      {{ location.name }}\r\n                    </option>\r\n                  </select>\r\n                  <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        (formControlStep1.location.touched ||\r\n                          isSubmitted.Step1) &&\r\n                        formControlStep1.location.errors?.required\r\n                      \">\r\n                      Location is required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"g-pb-10 g-mt-10\">\r\n                  <button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                    (click)=\"ShowNextStep('step2')\">\r\n                    Next\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <div class=\"widget-grey-bg g-pt-10 g-pb-10 text-center back-login\">\r\n              <div class=\"g-fs-08\">\r\n                Back to&nbsp;<a [routerLink]=\"['/login']\" class=\"g-p-clr g-fw-500\">Login</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-3\"></div>\r\n    </div>\r\n\r\n    <div class=\"row g-mt-30 g-mb-30\" [hidden]=\"enterprise_stp_2\">\r\n      <div class=\"col-sm-3\"></div>\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <div class=\"card g-w-bg card-wrp\">\r\n          <form [formGroup]=\"enterpriseForm.Step2\" (ngSubmit)=\"onSubmit('Step2')\">\r\n            <div class=\"card-body\">\r\n              <div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n                <div class=\"g-pt-30\">\r\n                  <div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n                    Tell us more about\r\n                  </div>\r\n                  <div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n                    the\r\n                    <span class=\"primary-green-clr\">Enterprise</span>\r\n                  </div>\r\n                </div>\r\n                <!-- ---------------------- -->\r\n                <div class=\"form-group g-mt-03\">\r\n                  <label for=\"enterprise_company_name\" class=\"g-fs-07 g-black14-clr g-fw-500\">Company Name *</label>\r\n                  <input type=\"text\" class=\"form-control \" name=\"enterprise_company_name\"\r\n                    placeholder=\"ex : Neet technologies\" formControlName=\"enterprise_company_name\" [ngClass]=\"{\r\n                      error:\r\n                        (formControlStep2.enterprise_company_name.touched ||\r\n                          isSubmitted.Step2) &&\r\n                        formControlStep2.enterprise_company_name?.errors\r\n                    }\" />\r\n                  <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        (formControlStep2.enterprise_company_name.touched ||\r\n                          isSubmitted.Step2) &&\r\n                        formControlStep2.enterprise_company_name.errors\r\n                          ?.required\r\n                      \">\r\n                      Company Name is required\r\n                    </span>\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                    (formControlStep2.enterprise_company_name.touched ||\r\n                      isSubmitted.Step2) &&\r\n                    formControlStep2.enterprise_company_name.errors?.pattern\r\n                  \">\r\n                      Enter a valid company name\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <!-- ----------------- -->\r\n                <div class=\"form-group g-mt-03\">\r\n                  <label for=\"enterprise_company_url\" class=\"g-fs-07 g-black14-clr g-fw-500\">Company Webiste URL *</label>\r\n                  <input type=\"text\" class=\"form-control \" name=\"enterprise_company_url\" placeholder=\"ex : google.com\"\r\n                    formControlName=\"enterprise_company_url\" [ngClass]=\"{\r\n                      error:\r\n                        (formControlStep2.enterprise_company_url.touched ||\r\n                          isSubmitted.Step2) &&\r\n                        formControlStep2.enterprise_company_url?.errors\r\n                    }\" />\r\n                  <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        (formControlStep2.enterprise_company_url.touched ||\r\n                          isSubmitted.Step2) &&\r\n                        formControlStep2.enterprise_company_url.errors?.required\r\n                      \">\r\n                      Webiste URL is required\r\n                    </span>\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                    (formControlStep2.enterprise_company_url.touched || isSubmitted.Step2) &&\r\n                    formControlStep2.enterprise_company_url.errors?.pattern\r\n                  \">\r\n                      Invalid website url\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <!-- -------------------------- -->\r\n                <div class=\"form-group g-mt-03\">\r\n                  <label for=\"officenumber\" class=\"g-fs-07 g-black14-clr g-fw-500\">Office Phone *</label>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-2\">\r\n                      <input type=\"text\" class=\"form-control g-pt-12 g-pb-12  phone-code\" placeholder=\"+91\"\r\n                        [value]=\"'+91'\" disabled />\r\n                    </div>\r\n                    <div class=\"col-sm-10\">\r\n                      <input type=\"text\" class=\"form-control \" name=\"enterprise_company_phone\"\r\n                        placeholder=\"ex: 9874561230\" formControlName=\"enterprise_company_phone\" [ngClass]=\"{\r\n                          error:\r\n                            (formControlStep2.enterprise_company_phone\r\n                              .touched ||\r\n                              isSubmitted.Step2) &&\r\n                            formControlStep2.enterprise_company_phone?.errors\r\n                        }\" />\r\n                      <div class=\"err-resp\">\r\n                        <span class=\"field-err\" *ngIf=\"\r\n                            (formControlStep2.enterprise_company_phone\r\n                              .touched ||\r\n                              isSubmitted.Step2) &&\r\n                            formControlStep2.enterprise_company_phone.errors\r\n                              ?.required\r\n                          \">\r\n                          Office Phone is required\r\n                        </span>\r\n                        <span class=\"field-err\" *ngIf=\"\r\n                        (formControlStep2.enterprise_company_phone\r\n                          .touched ||\r\n                          isSubmitted.Step2) &&\r\n                        formControlStep2.enterprise_company_phone.errors\r\n                          ?.pattern\r\n                      \">\r\n                      Invalid phone number\r\n                    </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- --------------------------- -->\r\n                <div class=\"form-group g-mt-03\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-5\">\r\n                      <companylogo-upload (onSaveLogo)=\"handleCompanyLogo($event)\"\r\n                        (onRemoveLogo)=\"handleRemovedLogo($event)\" [error]=\"isLogoUploaded\"></companylogo-upload>\r\n                    </div>\r\n                    <div class=\"col-sm-7\">\r\n                      <div class=\"form-group g-mt-03\">\r\n                        <label for=\"enterprise_incorporation_year\" class=\"g-fs-07 g-black14-clr g-fw-500\">Year of\r\n                          Incorporation *\r\n                        </label>\r\n                        <select class=\"form-control \" name=\"enterprise_incorporation_year\"\r\n                          formControlName=\"enterprise_incorporation_year\" [ngClass]=\"{\r\n                          error:\r\n                            (formControlStep2.enterprise_incorporation_year.touched ||\r\n                              isSubmitted.Step2) &&\r\n                            formControlStep2.enterprise_incorporation_year?.errors\r\n                        }\">\r\n                          <option selected=\"selected\" value=\"\">Select Year</option>\r\n                          <ng-container *ngFor=\"let year of yearArr\">\r\n                            <option [value]=\"year\">{{year}}</option>\r\n                          </ng-container>\r\n                        </select>\r\n                        <div class=\"err-resp\">\r\n                          <span class=\"field-err\" *ngIf=\"\r\n                              (formControlStep2.enterprise_incorporation_year\r\n                                .touched ||\r\n                                isSubmitted.Step2) &&\r\n                              formControlStep2.enterprise_incorporation_year.errors\r\n                                ?.required\r\n                            \">\r\n                            Year of Incorporation is required\r\n                          </span>\r\n                          <span class=\"field-err\" *ngIf=\"\r\n                              (formControlStep2.enterprise_incorporation_year\r\n                                .touched ||\r\n                                isSubmitted.Step2) &&\r\n                              formControlStep2.enterprise_incorporation_year.errors\r\n                                ?.pattern\">\r\n                            Enter a valid year\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group g-mt-03\">\r\n                        <label for=\"dipp_num\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                          DIPP Number (optional)\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control \" name=\"dipp_num\" placeholder=\"ex: google.com\"\r\n                          formControlName=\"dipp_num\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- ------------------ -->\r\n                <div class=\"form-group g-mt-03\">\r\n                  <label for=\"enterprise_company_brief\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                    Company brief*\r\n                  </label>\r\n                  <ckeditor [editor]=\"Editor\" formControlName=\"enterprise_company_brief\" [ngClass]=\"{\r\n                    error:\r\n                      (formControlStep2.enterprise_company_brief.touched || isSubmitted.Step2) &&\r\n                      formControlStep2.enterprise_company_brief?.errors\r\n                  }\"></ckeditor>\r\n                  <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        (formControlStep2.enterprise_company_brief.touched ||\r\n                          isSubmitted.Step2) &&\r\n                        formControlStep2.enterprise_company_brief.errors?.required\r\n                      \">\r\n                      Company brief is required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row g-mt-20 g-pb-30\">\r\n                  <div class=\"col-sm-6\">\r\n                    <div>\r\n                      <button type=\"button\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                        (click)=\"ShowPreviousStep('step2')\">\r\n                        Previous\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <div>\r\n                      <button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                        (click)=\"ShowNextStep('step3')\">\r\n                        Next\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-3\"></div>\r\n    </div>\r\n    <div class=\"row g-mt-30 g-mb-30\" [hidden]=\"enterprise_stp_3\">\r\n      <div class=\"col-sm-3\"></div>\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <div class=\"card g-w-bg card-wrp\">\r\n          <form [formGroup]=\"enterpriseForm.Step3\" (ngSubmit)=\"onSubmit('Step3')\">\r\n            <div class=\"card-body\">\r\n              <div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n                <div class=\"g-pt-30\">\r\n                  <div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n                    Tell us more about\r\n                  </div>\r\n                  <div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n                    your\r\n                    <span class=\"primary-green-clr\">Enterprise</span>\r\n                  </div>\r\n                </div>\r\n                <!-- --------- -->\r\n                <div class=\"form-group g-mt-03\">\r\n                  <label for=\"enterprise_founders\" class=\"g-fs-07 g-black14-clr g-fw-500\">Founder/Proprietor Name\r\n                    *</label>\r\n                  <input type=\"text\" class=\"form-control \" name=\"enterprise_founders\" placeholder=\"Founder Name\"\r\n                    formControlName=\"enterprise_founders\" [ngClass]=\"{\r\n                      error:\r\n                        (formControlStep3.enterprise_founders.touched ||\r\n                          isSubmitted.Step3) &&\r\n                        formControlStep3.enterprise_founders?.errors\r\n                    }\" />\r\n                  <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        (formControlStep3.enterprise_founders.touched ||\r\n                          isSubmitted.Step3) &&\r\n                        formControlStep3.enterprise_founders.errors?.required\r\n                      \">\r\n                      Founder/Proprietor Name is required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <!-- -------------------------- -->\r\n                <div class=\"form-group g-mt-03\">\r\n                  <label for=\"enterprise_company_size\" class=\"g-fs-07 g-black14-clr g-fw-500\">Team Size*</label>\r\n                  <input type=\"number\" class=\"form-control \" name=\"enterprise_company_size\" placeholder=\"ex: 8\"\r\n                    formControlName=\"enterprise_company_size\" [ngClass]=\"{\r\n                      error:\r\n                        (formControlStep3.enterprise_company_size.touched ||\r\n                          isSubmitted.Step3) &&\r\n                        formControlStep3.enterprise_company_size?.errors\r\n                    }\" />\r\n                  <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        (formControlStep3.enterprise_company_size.touched ||\r\n                          isSubmitted.Step3) &&\r\n                        formControlStep3.enterprise_company_size.errors\r\n                          ?.required\r\n                      \">\r\n                      Team Size is required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <!-- ---------------------- -->\r\n                <div class=\"form-group g-mt-03\">\r\n                  <label for=\"enterprise_annual_revenue\" class=\"g-fs-07 g-black14-clr g-fw-500\">Annual Revenue*</label>\r\n                  <input type=\"text\" class=\"form-control \" name=\"enterprise_annual_revenue\" placeholder=\"Annual Revenue\"\r\n                    formControlName=\"enterprise_annual_revenue\" [ngClass]=\"{\r\n                      error:\r\n                        (formControlStep3.enterprise_annual_revenue.touched ||\r\n                          isSubmitted.Step3) &&\r\n                        formControlStep3.enterprise_annual_revenue?.errors\r\n                    }\" />\r\n                  <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        (formControlStep3.enterprise_annual_revenue.touched ||\r\n                          isSubmitted.Step3) &&\r\n                        formControlStep3.enterprise_annual_revenue.errors\r\n                          ?.required\r\n                      \">\r\n                      Annual Revenue is required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <!-- --------------------- -->\r\n                <!-- ---------------------- -->\r\n                <div class=\"g-mt-03\">\r\n                  <add-achievement (onAchievementChange)=\"handleAchievementChanges($event)\"></add-achievement>\r\n                </div>\r\n                <!-- --------------------- -->\r\n                <div class=\"form-group g-mt-03\">\r\n                  <label for=\"enterprise_expertises\" class=\"g-fs-07 g-black14-clr g-fw-500\">Team Expertise</label>\r\n                  <input type=\"text\" class=\"form-control \" name=\"enterprise_expertises\" placeholder=\"ex: google.com\"\r\n                    formControlName=\"enterprise_expertises\" [ngClass]=\"{\r\n                      error:\r\n                        (formControlStep3.enterprise_expertises.touched ||\r\n                          isSubmitted.Step3) &&\r\n                        formControlStep3.enterprise_expertises?.errors\r\n                    }\" />\r\n                </div>\r\n                <!-- ------------------- -->\r\n                <div class=\"row g-mt-20 g-pb-30\">\r\n                  <div class=\"col-sm-6\">\r\n                    <div>\r\n                      <button type=\"button\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                        (click)=\"ShowPreviousStep('step3')\">\r\n                        Previous\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <div>\r\n                      <button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                        (click)=\"ShowNextStep('step4')\">\r\n                        Next\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-3\"></div>\r\n    </div>\r\n\r\n    <div class=\"row g-mt-30 g-mb-30\" [hidden]=\"enterprise_stp_4\">\r\n      <div class=\"col-sm-3\"></div>\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <div class=\"card g-w-bg card-wrp\">\r\n          <div class=\"card-body\">\r\n            <form [formGroup]=\"enterpriseForm.Step4\" (ngSubmit)=\"onSubmit('Step4')\">\r\n              <div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n                <div class=\"g-pt-30\">\r\n                  <div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n                    Let’s set your\r\n                  </div>\r\n                  <div class=\"g-fs-18 g-fw-500 primary-green-clr text-center\">\r\n                    password.\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group g-mt-13\">\r\n                  <label for=\"password\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                    Password *</label>\r\n                  <input type=\"password\" class=\"form-control \" name=\"password\" formControlName=\"password\" [ngClass]=\"{\r\n                      error:\r\n                        formControlStep4.password.touched &&\r\n                        formControlStep4.password.errors\r\n                    }\" />\r\n                  <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        formControlStep4.password.touched &&\r\n                        formControlStep4.password.errors?.required\r\n                      \">\r\n                      Password is required\r\n                    </span>\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        (formControlStep4.password.touched ||\r\n                          isSubmitted.Step4) &&\r\n                        formControlStep4.password.errors?.pattern\r\n                      \">\r\n                      Password should have minimum 8 characters, at least one special character, one number and one capital letter\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group g-mt-13\">\r\n                  <label for=\"confirmPassword\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                    Confirm Password *</label>\r\n                  <input type=\"password\" class=\"form-control \" name=\"confirmPassword\" formControlName=\"confirmPassword\"\r\n                    [ngClass]=\"{\r\n                      error:\r\n                        formControlStep4.confirmPassword.touched &&\r\n                        formControlStep4.confirmPassword.errors\r\n                    }\" />\r\n                  <div class=\"err-resp\">\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        (formControlStep4.confirmPassword.touched ||\r\n                          isSubmitted.Step4) &&\r\n                        formControlStep4.confirmPassword.errors?.required\r\n                      \">\r\n                      Confirm Password is required\r\n                    </span>\r\n                    <span class=\"field-err\" *ngIf=\"\r\n                        formControlStep4.confirmPassword.touched &&\r\n                        formControlStep4.confirmPassword.errors\r\n                          ?.passwordMismatch\r\n                      \">\r\n                      Passwords doesn't match\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"g-mt-20 g-pb-25\">\r\n                  <button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                    (click)=\"saveUser()\">\r\n                    Next&nbsp;\r\n                    <i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-3\"></div>\r\n    </div>\r\n\r\n    <div class=\"row g-mt-30 g-mb-30\" [hidden]=\"enterprise_stp_5\">\r\n      <div class=\"col-sm-3\"></div>\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <div class=\"card g-w-bg card-wrp otp\">\r\n          <div class=\"card-body\">\r\n            <form [formGroup]=\"enterpriseForm.Step5\" (ngSubmit)=\"onSubmit('Step5')\">\r\n              <div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n                <div class=\"g-pt-30\">\r\n                  <div class=\"g-fs-18 g-fw-500 title-clr text-center\">\r\n                    You are almost done!\r\n                  </div>\r\n                </div>\r\n                <div class=\"g-pl-30 g-pr-30 g-mt-06\">\r\n                  <div class=\"g-fs-07 g-fw-500 g-black5-clr text-center\">\r\n                    A verification email has been sent to your email address.\r\n                    Please copy the verification code in the email and paste\r\n                    here to verify your account.\r\n                  </div>\r\n                </div>\r\n                <div class=\"verification-code-wrp\">\r\n                  <div class=\"g-mt-20 g-mb-05\">\r\n                    <div class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                      Enter verification code\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mb-0\">\r\n                    <input type=\"text\" class=\"form-control g-pt-5 g-pb-5 g-wht-bg\" name=\"email-otp\"\r\n                      formControlName=\"otp\" [ngClass]=\"{\r\n                        error:\r\n                          (formControlStep5.otp.touched || isSubmitted.Step5) &&\r\n                          formControlStep5.otp.errors\r\n                      }\" />\r\n                    <div class=\"err-resp\">\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                          (formControlStep5.otp.touched || isSubmitted.Step5) &&\r\n                          formControlStep5.otp.errors?.required\r\n                        \">\r\n                        Verification code is required\r\n                      </span>\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                          formControlStep5.otp.touched &&\r\n                          formControlStep5.otp.errors?.minlength\r\n                        \">\r\n                        Verification code should have 6 characters\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"resend-verification-code text-right\">\r\n                    <span class=\"g-fs-06 g-fw-500 primary-green-clr g-cursor-pointer\" (click)=\"resendCode()\">\r\n                      Resend verification code&nbsp;\r\n                      <i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"resendCodeLoading\"></i>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"g-pb-40 g-mt-30\">\r\n                  <button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                    (click)=\"verifyOtp()\">\r\n                    Verify Code&nbsp;\r\n                    <i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"verifyingOTP\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-3\"></div>\r\n    </div>\r\n  </form>\r\n  <ng-container *ngIf=\"initLoading\">\r\n    <div class=\"section-loader\">\r\n      <div class=\"loader-wrp\">\r\n        <div class=\"loader-inner text-center\">\r\n          <div class=\"lds-ring\">\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n          </div>\r\n          <div>Loading please wait</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/individual/individual.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/individual/individual.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container g-pos-relative\">\r\n\t<div class=\"back-btn-wrp g-fs-08 g-fw-500 g-mt-10\">\r\n\t\t<span class=\"g-cursor-pointer g-transition body-light-clr back-btn\" routerLink=\"..\"> &#60; Back </span>\r\n\t</div>\r\n\t<div class=\"g-pt-10\">\r\n\t\t<ul class=\"a-step-form-active-list text-center g-p-0\">\r\n\t\t\t<li\r\n\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t'g-p-bg': !individual_stp_1,\r\n\t\t\t\t\t'primary-grey-bg': individual_stp_1\r\n\t\t\t\t}\"\r\n\t\t\t\t(click)=\"gotoStep('step1')\"\r\n\t\t\t></li>\r\n\t\t\t<li\r\n\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t'g-p-bg': !individual_stp_2,\r\n\t\t\t\t\t'primary-grey-bg': individual_stp_2\r\n\t\t\t\t}\"\r\n\t\t\t\t(click)=\"gotoStep('step2')\"\r\n\t\t\t></li>\r\n\t\t\t<li\r\n\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t'g-p-bg': !individual_stp_3,\r\n\t\t\t\t\t'primary-grey-bg': individual_stp_3\r\n\t\t\t\t}\"\r\n\t\t\t\t(click)=\"gotoStep('step3')\"\r\n\t\t\t></li>\r\n\t\t\t<li\r\n\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t'g-p-bg': !individual_stp_4,\r\n\t\t\t\t\t'primary-grey-bg': individual_stp_4\r\n\t\t\t\t}\"\r\n\t\t\t\t(click)=\"gotoStep('step4')\"\r\n\t\t\t></li>\r\n\t\t\t<li\r\n\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t'g-p-bg': !individual_stp_5,\r\n\t\t\t\t\t'primary-grey-bg': individual_stp_5\r\n\t\t\t\t}\"\r\n\t\t\t\t(click)=\"gotoStep('step5')\"\r\n\t\t\t></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<form #individual_frm=\"ngForm\">\r\n\t\t<div class=\"row g-mt-30 g-mb-30\" [hidden]=\"individual_stp_1\">\r\n\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t\t<div class=\"card g-w-bg card-wrp\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<form [formGroup]=\"individualForm.Step1\" (ngSubmit)=\"onSubmit('Step1')\">\r\n\t\t\t\t\t\t\t<div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-pt-30\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 title-clr\">Innovator Sign Up</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"fullname\" class=\"g-fs-07 g-black14-clr g-fw-500\">Full Name *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"fullname\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"John Doe\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"fullname\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.fullname.touched || isSubmitted.Step1) && formControlStep1.fullname?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.fullname.touched || isSubmitted.Step1) && formControlStep1.fullname.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tFull Name is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep1.fullname.touched && formControlStep1.fullname.errors?.pattern\"> Enter a valid name </span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 text-center hidden-xs\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar-upload\">\r\n\t\t\t\t\t\t\t\t\t\t\t<Avatar-Upload (onSaveImage)=\"handleAvatar($event)\"> </Avatar-Upload>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"email\" class=\"g-fs-07 g-black14-clr g-fw-500\">Email *</label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"email\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"email\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"johndoe@gmail.com\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"email\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.email.touched || isSubmitted.Step1) && formControlStep1.email?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.email.touched || isSubmitted.Step1) && formControlStep1.email.errors?.required\"> Email is required </span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep1.email.touched && formControlStep1.email.errors?.email\"> Enter a valid email address </span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep1.email.touched && formControlStep1.email.errors?.emailAlreadyExist\"> Email already exist </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"number\" class=\"g-fs-07 g-black14-clr g-fw-500\">Phone *</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control phone-code\" value=\"+91\" disabled />\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"phnum\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.phnum.touched || isSubmitted.Step1) && formControlStep1.phnum?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 9255333586\"\r\n\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.phnum.touched || isSubmitted.Step1) && formControlStep1.phnum.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tPhone number is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep1.phnum.touched && formControlStep1.phnum.errors?.pattern\"> Enter a valid phone number </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep1.phnum.touched && formControlStep1.phnum.errors?.phonenumAlreadyExist\"> Phone number already exist </span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"location\" class=\"g-fs-07 g-black14-clr g-fw-500\">Location *</label>\r\n\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"location\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.location.touched || isSubmitted.Step1) && formControlStep1.location?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Location</option>\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let location of locations\" [value]=\"location.id\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ location.name }}\r\n\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.location.touched || isSubmitted.Step1) && formControlStep1.location.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tLocation is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-pb-10 g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"ShowNextStep('step2')\">Next</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<div class=\"widget-grey-bg g-pt-10 g-pb-10 text-center back-login\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08\">Back to&nbsp;<a [routerLink]=\"['/login']\" class=\"g-p-clr g-fw-500\">Login</a></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row g-mt-30 g-mb-30\" [hidden]=\"individual_stp_2\">\r\n\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t\t<div class=\"card g-w-bg card-wrp\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<form [formGroup]=\"individualForm.Step2\" (ngSubmit)=\"onSubmit('Step2')\">\r\n\t\t\t\t\t\t\t<div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-pt-30 g-pb-20\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n\t\t\t\t\t\t\t\t\t\tTell us more about\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"primary-green-clr\">you</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"indv_expertises\" class=\"g-fs-07 g-black14-clr g-fw-500\">Domain Of Expertise *</label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"indv_expertises\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: Educational Sector\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"indv_expertises\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.indv_expertises.touched || isSubmitted.Step2) && formControlStep2.indv_expertises?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.indv_expertises.touched || isSubmitted.Step2) && formControlStep2.indv_expertises.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tDomain of Expertise is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"indv_website_url\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Website URL or LinkedIn Profile* </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"indv_website_url\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: google.com\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"indv_website_url\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.indv_website_url.touched || isSubmitted.Step2) && formControlStep2.indv_website_url?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.indv_website_url.touched || isSubmitted.Step2) && formControlStep2.indv_website_url.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tWebsite URL or LinkedIn Profile is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.indv_website_url.touched || isSubmitted.Step2) && formControlStep2.indv_website_url.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\t\tInvalid url (Valid Format: www.google.com)\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"indv_expertise_years\" class=\"g-fs-07 g-black14-clr g-fw-500\">Years of Experience *</label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"indv_expertise_years\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 10\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"indv_expertise_years\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.indv_expertise_years.touched || isSubmitted.Step2) && formControlStep2.indv_expertise_years?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.indv_expertise_years.touched || isSubmitted.Step2) && formControlStep2.indv_expertise_years.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tYears of experience is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.indv_expertise_years.touched || isSubmitted.Step2) && formControlStep2.indv_expertise_years.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\t\tEnter a valid year\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row g-mt-20 g-pb-30\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"ShowPreviousStep('step2')\">Previous</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"ShowNextStep('step3')\">Next</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row g-mt-30 g-mb-30\" [hidden]=\"individual_stp_3\">\r\n\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t\t<div class=\"card g-w-bg card-wrp\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<form [formGroup]=\"individualForm.Step3\" (ngSubmit)=\"onSubmit('Step3')\">\r\n\t\t\t\t\t\t\t<div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-pt-30\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n\t\t\t\t\t\t\t\t\t\tTell us more about\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"primary-green-clr\"> yourself </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"indv_affiliates\" class=\"g-fs-07 g-black14-clr g-fw-500\">Affiliated Industry/Company/Incubator/Institution *</label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"indv_affiliates\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: Neet Technologies\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"indv_affiliates\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.indv_affiliates.touched || isSubmitted.Step3) && formControlStep3.indv_affiliates?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.indv_affiliates.touched || isSubmitted.Step3) && formControlStep3.indv_affiliates.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tAffiliated Industry/Company/Incubator/Institution required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- ------------------------------- -->\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"indv_tech_creds\" class=\"g-fs-07 g-black14-clr g-fw-500\">Technical Credentials (Degree, Specialisations) *</label>\r\n\t\t\t\t\t\t\t\t\t<textarea\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\trows=\"4\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"indv_tech_creds\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: Best startup of the year etc\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"indv_tech_creds\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.indv_tech_creds.touched || isSubmitted.Step3) && formControlStep3.indv_tech_creds?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</textarea>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.indv_tech_creds.touched || isSubmitted.Step3) && formControlStep3.indv_tech_creds.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tTechnical Credentials required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- ------------------------------- -->\r\n\t\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<add-achievement (onAchievementChange)=\"handleAchievementChanges($event)\"></add-achievement>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row g-mt-20 g-pb-30\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"ShowPreviousStep('step3')\">Previous</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"ShowNextStep('step4')\">Next</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row g-mt-30 g-mb-30\" [hidden]=\"individual_stp_4\">\r\n\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t\t<div class=\"card g-w-bg card-wrp\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<form [formGroup]=\"individualForm.Step4\" (ngSubmit)=\"onSubmit('Step4')\">\r\n\t\t\t\t\t\t\t<div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-pt-30\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">Let’s set your</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 primary-green-clr text-center\">password.</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-13\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"password\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Password *</label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"password\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"password\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"password\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: formControlStep4.password.touched && formControlStep4.password.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep4.password.touched && formControlStep4.password.errors?.required\"> Password is required </span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep4.password.touched || isSubmitted.Step4) && formControlStep4.password.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\t\tPassword should have minimum 8 characters, at least one special character, one number and one capital letter\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-13\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"confirmPassword\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Confirm Password *</label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"password\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"confirmPassword\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"confirmPassword\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: formControlStep4.confirmPassword.touched && formControlStep4.confirmPassword.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep4.confirmPassword.touched || isSubmitted.Step4) && formControlStep4.confirmPassword.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tConfirm Password is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep4.confirmPassword.touched && formControlStep4.confirmPassword.errors?.passwordMismatch\">\r\n\t\t\t\t\t\t\t\t\t\t\tPasswords doesn't match\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-mt-20 g-pb-25\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"saveUser()\">\r\n\t\t\t\t\t\t\t\t\t\tNext&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row g-mt-30 g-mb-30\" [hidden]=\"individual_stp_5\">\r\n\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t\t<div class=\"card g-w-bg card-wrp otp\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<form [formGroup]=\"individualForm.Step5\" (ngSubmit)=\"onSubmit('Step5')\">\r\n\t\t\t\t\t\t\t<div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-pt-30\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 primary-green-clr text-center\">You are almost done!</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-pl-30 g-pr-30 g-mt-06\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 g-black5-clr text-center\">\r\n\t\t\t\t\t\t\t\t\t\tA verification email has been sent to your email address. Please copy the verification code in the email and paste here to verify your account.\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"verification-code-wrp\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-30 g-mb-10\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black14-clr g-fw-500\">Enter verification code</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control g-pt-5 g-pb-5 g-wht-bg\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"email-otp\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"otp\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep5.otp.touched || isSubmitted.Step5) && formControlStep5.otp.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep5.otp.touched || isSubmitted.Step5) && formControlStep5.otp.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tVerification code is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep5.otp.touched && formControlStep5.otp.errors?.minlength\"> Verification code should have 6 characters </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"resend-verification-code text-right\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fw-500 primary-green-clr g-cursor-pointer\" (click)=\"resendCode()\">\r\n\t\t\t\t\t\t\t\t\t\t\tResend verification code&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"resendCodeLoading\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-pb-40 g-mt-30\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"verifyOtp()\">\r\n\t\t\t\t\t\t\t\t\t\tVerify Code&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"verifyingOTP\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t</div>\r\n\t</form>\r\n\t<ng-container *ngIf=\"initLoading\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>Loading please wait</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/provider.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/provider.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/startup/startup.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/startup/startup.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container g-pos-relative\">\r\n\t<div class=\"back-btn-wrp g-fs-08 g-fw-500 g-mt-10\">\r\n\t\t<span class=\"g-cursor-pointer g-transition body-light-clr back-btn\" routerLink=\"..\"> &#60; Back </span>\r\n\t</div>\r\n\t<div class=\"g-pt-10\">\r\n\t\t<ul class=\"a-step-form-active-list text-center g-p-0\">\r\n\t\t\t<li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{ 'g-p-bg': !startup_stp_1, 'primary-grey-bg': startup_stp_1 }\" (click)=\"gotoStep('step1')\"></li>\r\n\t\t\t<li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{ 'g-p-bg': !startup_stp_2, 'primary-grey-bg': startup_stp_2 }\" (click)=\"gotoStep('step2')\"></li>\r\n\t\t\t<li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{ 'g-p-bg': !startup_stp_3, 'primary-grey-bg': startup_stp_3 }\" (click)=\"gotoStep('step3')\"></li>\r\n\t\t\t<li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{ 'g-p-bg': !startup_stp_4, 'primary-grey-bg': startup_stp_4 }\" (click)=\"gotoStep('step4')\"></li>\r\n\t\t\t<li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{ 'g-p-bg': !startup_stp_5, 'primary-grey-bg': startup_stp_5 }\" (click)=\"gotoStep('step5')\"></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class=\"row g-mt-30 g-mb-30\" [hidden]=\"startup_stp_1\">\r\n\t\t<div class=\"col-sm-3\"></div>\r\n\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t<div class=\"card g-w-bg card-wrp\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t\t<form [formGroup]=\"startupForm.Step1\" (ngSubmit)=\"onSubmit('Step1')\">\r\n\t\t\t\t\t\t<div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n\t\t\t\t\t\t\t<div class=\"g-pt-30\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 title-clr\">Innovator Sign Up</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row g-mt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"fullname\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Full Name * </label>\r\n\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"fullname\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"John Doe\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"fullname\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.fullname.touched || isSubmitted.Step1) && formControlStep1.fullname?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.fullname.touched || isSubmitted.Step1) && formControlStep1.fullname.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tFull Name is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep1.fullname.touched && formControlStep1.fullname.errors?.pattern\"> Enter a valid name </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4 text-center hidden-xs\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"avatar-upload\">\r\n\t\t\t\t\t\t\t\t\t\t<Avatar-Upload (onSaveImage)=\"handleAvatar($event)\"> </Avatar-Upload>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"email\" class=\"g-fs-07 g-black14-clr g-fw-500\">Email *</label>\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\ttype=\"email\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"email\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"johndoe@gmail.com\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"email\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.email.touched || isSubmitted.Step1) && formControlStep1.email?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.email.touched || isSubmitted.Step1) && formControlStep1.email.errors?.required\"> Email is required </span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep1.email.touched && formControlStep1.email.errors?.email\"> Enter a valid email address </span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep1.email.touched && formControlStep1.email.errors?.emailAlreadyExist\"> Email already exist </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"number\" class=\"g-fs-07 g-black14-clr g-fw-500\">Phone *</label>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control phone-code\" value=\"+91\" disabled />\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"phnum\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.phnum.touched || isSubmitted.Step1) && formControlStep1.phnum?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 9255333586\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.phnum.touched || isSubmitted.Step1) && formControlStep1.phnum.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tPhone number is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep1.phnum.touched && formControlStep1.phnum.errors?.pattern\"> Enter a valid phone number </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep1.phnum.touched && formControlStep1.phnum.errors?.phonenumAlreadyExist\"> Phone number already exist </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"location\" class=\"g-fs-07 g-black14-clr g-fw-500\">Location *</label>\r\n\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"location\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.location.touched || isSubmitted.Step1) && formControlStep1.location?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Location</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let location of locations\" [value]=\"location.id\">\r\n\t\t\t\t\t\t\t\t\t\t{{ location.name }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.location.touched || isSubmitted.Step1) && formControlStep1.location.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tLocation is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pb-10 g-mt-10\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"ShowNextStep('step2')\">Next</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<div class=\"widget-grey-bg g-pt-10 g-pb-10 text-center back-login\">\r\n\t\t\t\t\t\t<div class=\"g-fs-08\">Back to&nbsp;<a [routerLink]=\"['/login']\" class=\"g-p-clr g-fw-500\">Login</a></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-3\"></div>\r\n\t</div>\r\n\r\n\t<div class=\"row g-mt-30 g-mb-30\" [hidden]=\"startup_stp_2\">\r\n\t\t<div class=\"col-sm-3\"></div>\r\n\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t<div class=\"card g-w-bg card-wrp\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t\t<form [formGroup]=\"startupForm.Step2\" (ngSubmit)=\"onSubmit('Step2')\">\r\n\t\t\t\t\t\t<div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n\t\t\t\t\t\t\t<div class=\"g-pt-30\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">Tell us more about</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n\t\t\t\t\t\t\t\t\tyour\r\n\t\t\t\t\t\t\t\t\t<span class=\"primary-green-clr\">Startup</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"company_name\" class=\"g-fs-07 g-black14-clr g-fw-500\">Company Name *</label>\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"company_name\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"ex: Neet Technologies\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"company_name\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.company_name.touched || isSubmitted.Step2) && formControlStep2.company_name?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.company_name.touched || isSubmitted.Step2) && formControlStep2.company_name.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tCompany name is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.company_name.touched || isSubmitted.Step2) && formControlStep2.company_name.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tEnter a valid company name\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"website\" class=\"g-fs-07 g-black14-clr g-fw-500\">Company Website URL *</label>\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"website\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"ex:www.google.com\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"website\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.website.touched || isSubmitted.Step2) && formControlStep2.website?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.website.touched || isSubmitted.Step2) && formControlStep2.website.errors?.required\"> Website is required </span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.website.touched || isSubmitted.Step2) && formControlStep2.website.errors?.pattern\"> Invalid website url </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"officenumber\" class=\"g-fs-07 g-black14-clr g-fw-500\">Office Phone *</label>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control phone-code\" value=\"+91\" disabled />\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"officenumber\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 9898789876\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"off_phone\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.off_phone.touched || isSubmitted.Step2) && formControlStep2.off_phone?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.off_phone.touched || isSubmitted.Step2) && formControlStep2.off_phone.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tPhone number is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep2.off_phone.touched && formControlStep2.off_phone.errors?.pattern\"> Enter a valid phone number </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5\">\r\n\t\t\t\t\t\t\t\t\t\t<companylogo-upload (onSaveLogo)=\"handleCompanyLogo($event)\" (onRemoveLogo)=\"handleRemovedLogo($event)\" [error]=\"isLogoUploaded\"></companylogo-upload>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"incoperation_yr\" class=\"g-fs-07 g-black14-clr g-fw-500\">Year of Incorporation *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"incoperation_yr\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"yr_incorp\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.yr_incorp.touched || isSubmitted.Step2) && formControlStep2.yr_incorp?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Year</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let year of yearArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\">{{ year }}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.yr_incorp.touched || isSubmitted.Step2) && formControlStep2.yr_incorp.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tYear of Incorporation is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"website\" class=\"g-fs-07 g-black14-clr g-fw-500\"> DIPP Number (optional) </label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"website\" formControlName=\"dipp_num\" />\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"description\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Company brief* </label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"comp_brief\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.comp_brief.touched || isSubmitted.Step2) && formControlStep2.comp_brief?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.comp_brief.touched || isSubmitted.Step2) && formControlStep2.comp_brief.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tCompany brief is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row g-mt-20 g-pb-30\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"ShowPreviousStep('step2')\">Previous</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"ShowNextStep('step3')\">Next</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-3\"></div>\r\n\t</div>\r\n\r\n\t<div class=\"row g-mt-30 g-mb-30\" [hidden]=\"startup_stp_3\">\r\n\t\t<div class=\"col-sm-3\"></div>\r\n\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t<div class=\"card g-w-bg card-wrp\">\r\n\t\t\t\t<!-- step 3 -->\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<form [formGroup]=\"startupForm.Step3\" (ngSubmit)=\"onSubmit('Step3')\">\r\n\t\t\t\t\t\t<div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n\t\t\t\t\t\t\t<div class=\"g-pt-30\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">Tell us more about</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n\t\t\t\t\t\t\t\t\tthe\r\n\t\t\t\t\t\t\t\t\t<span class=\"primary-green-clr\">Startup</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"team\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Founding Team Member names & Designation * </label>\r\n\t\t\t\t\t\t\t\t<ng-container formArrayName=\"founderDetails\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let founder of founderDetails.controls; index as i\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"frg-dynamic-row g-mb-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frg-dynamic-input-col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"founding_member\" placeholder=\"Founder Name\" formControlName=\"name\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frg-dynamic-input-col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"designation\" placeholder=\"Designation\" formControlName=\"designation\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frg-add-rm-row-btn\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"founderDetails.controls.length - 1 == i\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"addFounder()\"><i class=\"act-clr fa fa-plus\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"founderDetails.controls.length - 1 != i\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"removeFounder(i)\"><i class=\"act-clr fa fa-minus\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"teamsize\" class=\"g-fs-07 g-black14-clr g-fw-500\">Team Size *</label>\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"teamsize\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 10\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"teamsize\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.teamsize.touched || isSubmitted.Step3) && formControlStep3.teamsize?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.teamsize.touched || isSubmitted.Step3) && formControlStep3.teamsize.errors?.required\"> Team size required </span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.teamsize.touched || isSubmitted.Step3) && formControlStep3.teamsize.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tOnly numbers allowed\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t<add-achievement (onAchievementChange)=\"handleAchievementChanges($event)\"></add-achievement>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"expertise\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Team Expertise </label>\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let expertise of teamExpertise.controls; index as i\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"frg-expertise-row g-mb-08\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"frg-expertise-input-col\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"expertise\" placeholder=\"ex: yourmail@linkedin.in\" [formControl]=\"teamExpertise.controls[i]\" />\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"frg-expertise-add-rm-row-btn\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"teamExpertise.controls.length - 1 == i\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"addExpertise()\"><i class=\"act-clr fa fa-plus\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"teamExpertise.controls.length - 1 != i\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"removeExpertise(i)\"><i class=\"act-clr fa fa-minus\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"Affiliated\" class=\"g-fs-07 g-black14-clr g-fw-500\">Affiliated Incubator/Accelerator</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"Affiliated\" placeholder=\"ex: Forge Accelerator\" formControlName=\"affiliates\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.affiliates.touched || isSubmitted.Step3) && formControlStep3.affiliates?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.affiliates.touched || isSubmitted.Step3) && formControlStep3.affiliates.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tEnter a valid name\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row g-mt-20 g-pb-30\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"ShowPreviousStep('step3')\">Previous</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"ShowNextStep('step4')\">Next</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-3\"></div>\r\n\t</div>\r\n\r\n\t<div class=\"row g-mt-30 g-mb-30\" [hidden]=\"startup_stp_4\">\r\n\t\t<div class=\"col-sm-3\"></div>\r\n\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t<div class=\"card g-w-bg card-wrp\">\r\n\t\t\t\t<!-- step 4 -->\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<form [formGroup]=\"startupForm.Step4\" (ngSubmit)=\"onSubmit('Step4')\">\r\n\t\t\t\t\t\t<div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n\t\t\t\t\t\t\t<div class=\"g-pt-30\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">Let’s set your</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 primary-green-clr text-center\">password.</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-13\">\r\n\t\t\t\t\t\t\t\t<label for=\"password\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Password *</label>\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\ttype=\"password\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"password\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"password\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: formControlStep4.password.touched && formControlStep4.password.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep4.password.touched && formControlStep4.password.errors?.required\"> Password is required </span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep4.password.touched || isSubmitted.Step4) && formControlStep4.password.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tPassword should have minimum 8 characters, at least one special character, one number and one capital letter\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-13\">\r\n\t\t\t\t\t\t\t\t<label for=\"confirmPassword\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Confirm Password *</label>\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\ttype=\"password\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"confirmPassword\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"confirmPassword\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: formControlStep4.confirmPassword.touched && formControlStep4.confirmPassword.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep4.confirmPassword.touched || isSubmitted.Step4) && formControlStep4.confirmPassword.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tConfirm Password is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep4.confirmPassword.touched && formControlStep4.confirmPassword.errors?.passwordMismatch\">\r\n\t\t\t\t\t\t\t\t\t\tPasswords doesn't match\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-20 g-pb-25\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"saveUser()\">\r\n\t\t\t\t\t\t\t\t\tNext&nbsp;\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-3\"></div>\r\n\t</div>\r\n\r\n\t<div class=\"row g-mt-30 g-mb-30\" [hidden]=\"startup_stp_5\">\r\n\t\t<div class=\"col-sm-3\"></div>\r\n\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t<div class=\"card g-w-bg card-wrp otp\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<form [formGroup]=\"startupForm.Step5\" (ngSubmit)=\"onSubmit('Step5')\">\r\n\t\t\t\t\t\t<div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n\t\t\t\t\t\t\t<div class=\"g-pt-30\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 title-clr text-center\">You are almost done!</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pl-30 g-pr-30 g-mt-06\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 g-black5-clr text-center\">\r\n\t\t\t\t\t\t\t\t\tA verification email has been sent to your email address. Please copy the verification code in the email and paste here to verify your account.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"verification-code-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-mt-20 g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black14-clr g-fw-500\">Enter verification code</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mb-0\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control g-pt-5 g-pb-5 g-wht-bg\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"email-otp\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"otp\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep5.otp.touched || isSubmitted.Step5) && formControlStep5.otp.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep5.otp.touched || isSubmitted.Step5) && formControlStep5.otp.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tVerification code is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"formControlStep5.otp.touched && formControlStep5.otp.errors?.minlength\"> Verification code should have 6 characters </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"resend-verification-code text-right\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-fs-06 g-fw-500 primary-green-clr g-cursor-pointer\" (click)=\"resendCode()\">\r\n\t\t\t\t\t\t\t\t\t\tResend verification code&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"resendCodeLoading\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pb-40 g-mt-30\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"verifyOtp()\">\r\n\t\t\t\t\t\t\t\t\tVerify Code&nbsp;\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"verifyingOTP\"></i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-3\"></div>\r\n\t</div>\r\n\t<ng-container *ngIf=\"initLoading\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>Loading please wait</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/type/type.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/type/type.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"g-pt-50 g-mt-30\">\r\n    <div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n        You are best described as\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row g-mt-20 g-mb-50 g-pb-30\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card g-w-bg g-maxw-300px g-m-auto signup-card g-bdr-01 g-black13-brdr\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"img-wrapper text-center g-pt-25\">\r\n                        <img src=\"./assets/img/startup.png\" alt=\"Image\" class=\"\">\r\n                    </div>\r\n                    <div class=\"g-pl-05 g-pr-05 g-mt-10 g-pb-03\">\r\n                        <!-- <button class=\"btn g-blue6-bg g-p-clr g-fw-500 g-fs-09 g-w-100per signup-btn\">Start Up</button> -->\r\n                        <a class=\"btn g-blue6-bg g-p-clr g-fw-500 g-fs-09 g-w-100per signup-btn\"\r\n                            [routerLink]=\"[ '/register/provider/startup']\">Start Up</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card g-w-bg g-maxw-300px g-m-auto signup-card g-bdr-01 g-black13-brdr\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"img-wrapper text-center g-pt-25\">\r\n                        <img src=\"./assets/img/enterprise.png\" alt=\"Image\" class=\"\">\r\n                    </div>\r\n                    <div class=\"g-pl-05 g-pr-05 g-mt-15 g-pb-03\">\r\n                        <!-- <button class=\"btn g-blue6-bg g-p-clr g-fw-500 g-fs-09 g-w-100per signup-btn\">Enterprise</button> -->\r\n                        <a class=\"btn g-blue6-bg g-p-clr g-fw-500 g-fs-09 g-w-100per signup-btn\"\r\n                            [routerLink]=\"[ '/register/provider/enterprise']\">Enterprise</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card g-w-bg g-maxw-300px g-m-auto signup-card g-bdr-01 g-black13-brdr\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"img-wrapper text-center g-pt-25\">\r\n                        <img src=\"./assets/img/individual.png\" alt=\"Image\" class=\"\">\r\n                    </div>\r\n                    <div class=\"g-pl-05 g-pr-05 g-mt-10 g-pb-03\">\r\n                        <!-- <button class=\"btn g-blue6-bg g-p-clr g-fw-500 g-fs-09 g-w-100per signup-btn\">Individual Innovator</button> -->\r\n                        <a class=\"btn g-blue6-bg g-p-clr g-fw-500 g-fs-09 g-w-100per signup-btn\"\r\n                            [routerLink]=\"[ '/register/provider/individual']\">Individual Innovator</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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

/***/ "./src/app/provider/all-solutions/all-solutions.component.css":
/*!********************************************************************!*\
  !*** ./src/app/provider/all-solutions/all-solutions.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".l-sol-catg-panel-grp .panel-heading {\r\n\tbackground: var(--white);\r\n}\r\n\r\n.l-sol-catg-acc-title {\r\n\tcolor: var(--black-clr);\r\n}\r\n\r\n.l-sol-catg-panel-grp .panel + .panel {\r\n\tmargin-top: 0px !important;\r\n}\r\n\r\n#l-sol-catg-acc-1 .panel-body {\r\n\tpadding: 0px !important;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul {\r\n\tpadding-left: 0px;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n.l-sol-catg-panel-1 .panel-heading,\r\n.l-sol-catg-panel-2 .panel-heading {\r\n\tpadding: 16px 17px;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li > a {\r\n\tfont-size: 14px;\r\n\tline-height: 16px;\r\n\tpadding: 16px 17px;\r\n\tborder-radius: 0px;\r\n\tcolor: #999999 !important;\r\n\tfont-weight: 400;\r\n\tdisplay: block;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li a:hover,\r\n.l-sol-catg-acc-1-ul li a:active,\r\n.l-sol-catg-acc-1-ul li a:focus,\r\n.l-sol-catg-acc-1-ul li a.active {\r\n\tbackground-color: #efefef !important;\r\n\tcolor: #4f4f4f !important;\r\n}\r\n\r\n.l-sol-catg-panel-1 {\r\n\tbox-shadow: none !important;\r\n\tborder-bottom: 0px;\r\n\tborder-bottom-right-radius: 0px;\r\n\tborder-bottom-left-radius: 0px;\r\n}\r\n\r\n.l-sol-catg-panel-2 {\r\n\tborder-top-right-radius: 0px;\r\n\tborder-top-left-radius: 0px;\r\n}\r\n\r\n.l-all-sol-card-title {\r\n\tcolor: var(--black-clr);\r\n}\r\n\r\n.l-all-sol-card {\r\n\tborder: 1px solid #dedede !important;\r\n}\r\n\r\n.l-all-sol-card-options {\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\tright: 0px;\r\n}\r\n\r\n.l-all-sol-card-opt-btn {\r\n\tbackground: var(--white);\r\n\tpadding: 2px 5px;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid #dedede !important;\r\n}\r\n\r\n.l-all-sol-card-options ul li a {\r\n\tcolor: #6f6f6f !important;\r\n}\r\n\r\n.l-all-sol-card-options ul li:nth-child(2) img {\r\n\tmax-width: 15px;\r\n}\r\n\r\n.l-all-sol-card-options ul {\r\n\tright: 0;\r\n\tleft: auto;\r\n\tmin-width: 170px;\r\n}\r\n\r\n.l-all-sol-card-options ul li {\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n}\r\n\r\n.l-all-sol-card-comp,\r\n.l-all-sol-card-date {\r\n\tcolor: #999999;\r\n}\r\n\r\n.l-all-sol-card-date {\r\n\tmargin-top: 25px;\r\n}\r\n\r\n.g-danger-clr {\r\n\tcolor: #f8483d;\r\n}\r\n\r\n.g-danger-bg {\r\n\tbackground-color: #f8483d;\r\n}\r\n\r\n.draft-content {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvYWxsLXNvbHV0aW9ucy9hbGwtc29sdXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVTtBQUNYOztBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTs7OztDQUlDLG9DQUFvQztDQUNwQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLCtCQUErQjtDQUMvQiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixVQUFVO0FBQ1g7O0FBQ0E7Q0FDQyx3QkFBd0I7Q0FDeEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixvQ0FBb0M7QUFDckM7O0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsUUFBUTtDQUNSLFVBQVU7Q0FDVixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUNBOztDQUVDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2FsbC1zb2x1dGlvbnMvYWxsLXNvbHV0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmwtc29sLWNhdGctcGFuZWwtZ3JwIC5wYW5lbC1oZWFkaW5nIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLWFjYy10aXRsZSB7XHJcblx0Y29sb3I6IHZhcigtLWJsYWNrLWNscik7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLXBhbmVsLWdycCAucGFuZWwgKyAucGFuZWwge1xyXG5cdG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbC1zb2wtY2F0Zy1hY2MtMSAucGFuZWwtYm9keSB7XHJcblx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmwtc29sLWNhdGctYWNjLTEtdWwgbGkge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuLmwtc29sLWNhdGctcGFuZWwtMSAucGFuZWwtaGVhZGluZyxcclxuLmwtc29sLWNhdGctcGFuZWwtMiAucGFuZWwtaGVhZGluZyB7XHJcblx0cGFkZGluZzogMTZweCAxN3B4O1xyXG59XHJcblxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCBsaSA+IGEge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRsaW5lLWhlaWdodDogMTZweDtcclxuXHRwYWRkaW5nOiAxNnB4IDE3cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMHB4O1xyXG5cdGNvbG9yOiAjOTk5OTk5ICFpbXBvcnRhbnQ7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmwtc29sLWNhdGctYWNjLTEtdWwgbGkgYTpob3ZlcixcclxuLmwtc29sLWNhdGctYWNjLTEtdWwgbGkgYTphY3RpdmUsXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIGE6Zm9jdXMsXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIGEuYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICM0ZjRmNGYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmwtc29sLWNhdGctcGFuZWwtMSB7XHJcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1ib3R0b206IDBweDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuLmwtc29sLWNhdGctcGFuZWwtMiB7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5sLWFsbC1zb2wtY2FyZC10aXRsZSB7XHJcblx0Y29sb3I6IHZhcigtLWJsYWNrLWNscik7XHJcbn1cclxuXHJcbi5sLWFsbC1zb2wtY2FyZCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubC1hbGwtc29sLWNhcmQtb3B0aW9ucyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMHB4O1xyXG5cdHJpZ2h0OiAwcHg7XHJcbn1cclxuLmwtYWxsLXNvbC1jYXJkLW9wdC1idG4ge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHRwYWRkaW5nOiAycHggNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtYWxsLXNvbC1jYXJkLW9wdGlvbnMgdWwgbGkgYSB7XHJcblx0Y29sb3I6ICM2ZjZmNmYgIWltcG9ydGFudDtcclxufVxyXG4ubC1hbGwtc29sLWNhcmQtb3B0aW9ucyB1bCBsaTpudGgtY2hpbGQoMikgaW1nIHtcclxuXHRtYXgtd2lkdGg6IDE1cHg7XHJcbn1cclxuLmwtYWxsLXNvbC1jYXJkLW9wdGlvbnMgdWwge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGxlZnQ6IGF1dG87XHJcblx0bWluLXdpZHRoOiAxNzBweDtcclxufVxyXG4ubC1hbGwtc29sLWNhcmQtb3B0aW9ucyB1bCBsaSB7XHJcblx0cGFkZGluZy10b3A6IDVweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5sLWFsbC1zb2wtY2FyZC1jb21wLFxyXG4ubC1hbGwtc29sLWNhcmQtZGF0ZSB7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcbn1cclxuLmwtYWxsLXNvbC1jYXJkLWRhdGUge1xyXG5cdG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5nLWRhbmdlci1jbHIge1xyXG5cdGNvbG9yOiAjZjg0ODNkO1xyXG59XHJcbi5nLWRhbmdlci1iZyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y4NDgzZDtcclxufVxyXG5cclxuLmRyYWZ0LWNvbnRlbnQge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/provider/all-solutions/all-solutions.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/provider/all-solutions/all-solutions.component.ts ***!
  \*******************************************************************/
/*! exports provided: AllSolutionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSolutionsComponent", function() { return AllSolutionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _all_solutions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-solutions.service */ "./src/app/provider/all-solutions/all-solutions.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-info.service */ "./src/app/provider/profile-info.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");








let AllSolutionsComponent = class AllSolutionsComponent {
    constructor(_as, toastr, router, route, profile) {
        this._as = _as;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.profile = profile;
        this.route.paramMap.subscribe((params) => {
            this.user_slug = params.get("slug");
        });
        this.loggedInUser$.subscribe((resp) => {
            this.user_id = resp.LoggedInUser.userTypeId;
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.profileLoading = true;
            this.profileData = yield this.profile.getProfile(this.user_slug);
            this.getSolution(this.user_id);
            this.profileLoading = false;
        });
    }
    getSolution(user_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            this.all_solutions = yield this._as.getSolutionsByprovider(user_id);
            // console.log(this.all_solutions);
            this.loading = false;
        });
    }
    addSolutions() {
        this.router.navigate(["/provider/user/" + this.user_slug + "/solutions/create"]);
    }
    showDelModal(id) {
        $("#delete_sol").modal("show");
        this.del_sol_id = id;
    }
    deleteSolution() {
        this._as.deleteSolution(this.del_sol_id).subscribe((response) => {
            this.toastr.success("Solution has been deleted successfully!");
        });
        $("#delete_sol").modal("hide");
    }
    viewProviderProf() {
        this.router.navigate(["/provider/user/" + this.user_slug]);
    }
    editSolution(sol_id) {
        // user/:slug/solution/:id/edit
        this.router.navigate(["/provider/user/" + this.user_slug + "/solution/" + sol_id + "/edit"]);
    }
    handleDraftDelete(deletedDraft) {
        this.getSolution(this.user_id);
    }
};
AllSolutionsComponent.ctorParameters = () => [
    { type: _all_solutions_service__WEBPACK_IMPORTED_MODULE_2__["AllSolutionsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _profile_info_service__WEBPACK_IMPORTED_MODULE_5__["ProfileInfoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserState"])
], AllSolutionsComponent.prototype, "loggedInUser$", void 0);
AllSolutionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-all-solutions",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-solutions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/all-solutions/all-solutions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-solutions.component.css */ "./src/app/provider/all-solutions/all-solutions.component.css")).default]
    })
], AllSolutionsComponent);



/***/ }),

/***/ "./src/app/provider/all-solutions/all-solutions.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/provider/all-solutions/all-solutions.service.ts ***!
  \*****************************************************************/
/*! exports provided: AllSolutionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSolutionsService", function() { return AllSolutionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AllSolutionsService = class AllSolutionsService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    getSolutionsByprovider(providerId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log("getting drafts by the provider");
            let resp = yield this.http.post(this.api_url + "/solutions/select_mul", { filter: { status: "draft", frg_provider_id: providerId } }).toPromise();
            return resp.data;
        });
    }
    deleteSolution(solutionId) {
        return this.http.post(this.api_url + "/solutions/delete", {
            slug: { id: solutionId },
        });
    }
};
AllSolutionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AllSolutionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AllSolutionsService);



/***/ }),

/***/ "./src/app/provider/application-cataloging/application-cataloging.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/provider/application-cataloging/application-cataloging.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-city-wrp {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.frg-flx-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.frg-flx-row .frg-flx-input-col {\r\n\tflex-basis: 88%;\r\n}\r\n\r\n.frg-flx-row .frg-flx-add-rm-row-btn {\r\n\tflex-basis: 7%;\r\n}\r\n\r\n.act-clr {\r\n\tcolor: #3b6fd4 !important;\r\n}\r\n\r\n.act-span {\r\n\tpadding: 3px 6px;\r\n\tborder: 1px solid #3b6fd4;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.add-form-wrapper {\r\n\tmax-width: 580px;\r\n\tmargin: 36px auto;\r\n}\r\n\r\n.step-wrapper {\r\n\tpadding: 36px;\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.files-upload-wrp {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n.files-upload-wrp app-citylogo-upload,\r\n.files-upload-wrp app-city-avatar-upload,\r\n.files-upload-wrp app-city-map-upload {\r\n\tflex-basis: 30%;\r\n}\r\n\r\n.back-btn-wrp {\r\n\tmargin-top: -18px;\r\n}\r\n\r\n.back-btn {\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.back-btn .disable {\r\n\topacity: 0;\r\n\tvisibility: visible;\r\n}\r\n\r\n.frg-multiselect-dropdown .multiselect-item-checkbox input[type=\"checkbox\"] + div:before {\r\n\tborder: 2px solid #7d7d7d !important;\r\n}\r\n\r\n.multiselect-item-checkbox input[type=\"checkbox\"]:checked + div:before {\r\n\tbackground: transparent !important;\r\n}\r\n\r\n.multiselect-item-checkbox input[type=\"checkbox\"] + div:after {\r\n\twidth: 7px !important;\r\n\theight: 2px !important;\r\n\tmargin-top: -4px !important;\r\n\tborder-style: solid;\r\n\tborder-color: #000000b8 !important;\r\n}\r\n\r\n.l-sol-catg-panel-grp .panel-heading {\r\n\tbackground: var(--white);\r\n}\r\n\r\n.l-sol-catg-acc-title {\r\n\tcolor: var(--black-clr);\r\n}\r\n\r\n.l-sol-catg-panel-grp .panel + .panel {\r\n\tmargin-top: 0px !important;\r\n}\r\n\r\n#l-sol-catg-acc-1 .panel-body {\r\n\tpadding: 0px !important ;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul {\r\n\tpadding-left: 0px;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n.l-sol-catg-panel-1 .panel-heading,\r\n.l-sol-catg-panel-2 .panel-heading {\r\n\tpadding: 16px 17px;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li > a {\r\n\tfont-size: 14px;\r\n\tline-height: 16px;\r\n\tpadding: 16px 17px;\r\n\tborder-radius: 0px;\r\n\tcolor: #999999 !important;\r\n\tfont-weight: 400;\r\n\tdisplay: block;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li a:hover,\r\n.l-sol-catg-acc-1-ul li a:active,\r\n.l-sol-catg-acc-1-ul li a:focus,\r\n.l-sol-catg-acc-1-ul li a.active {\r\n\tbackground-color: #efefef !important;\r\n\tcolor: #4f4f4f !important;\r\n}\r\n\r\n.l-sol-catg-panel-1 {\r\n\tbox-shadow: none !important;\r\n\tborder-bottom: 0px;\r\n\tborder-bottom-right-radius: 0px;\r\n\tborder-bottom-left-radius: 0px;\r\n}\r\n\r\n.l-sol-catg-panel-2 {\r\n\tborder-top-right-radius: 0px;\r\n\tborder-top-left-radius: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvYXBwbGljYXRpb24tY2F0YWxvZ2luZy9hcHBsaWNhdGlvbi1jYXRhbG9naW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBOEI7U0FBOUIsOEJBQThCO0NBQzlCLHlCQUFtQjtTQUFuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIseUJBQXlCO0NBQ3pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0I7O0FBRUE7OztDQUdDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQ0FBeUI7Q0FBekIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFDQTtDQUNDLGtDQUFrQztBQUNuQzs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixrQ0FBa0M7QUFDbkM7O0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7O0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVTtBQUNYOztBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTs7OztDQUlDLG9DQUFvQztDQUNwQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLCtCQUErQjtDQUMvQiw4QkFBOEI7QUFDL0I7O0FBQ0E7Q0FDQyw0QkFBNEI7Q0FDNUIsMkJBQTJCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXIvYXBwbGljYXRpb24tY2F0YWxvZ2luZy9hcHBsaWNhdGlvbi1jYXRhbG9naW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWNpdHktd3JwIHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmZyZy1mbHgtcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZnJnLWZseC1yb3cgLmZyZy1mbHgtaW5wdXQtY29sIHtcclxuXHRmbGV4LWJhc2lzOiA4OCU7XHJcbn1cclxuXHJcbi5mcmctZmx4LXJvdyAuZnJnLWZseC1hZGQtcm0tcm93LWJ0biB7XHJcblx0ZmxleC1iYXNpczogNyU7XHJcbn1cclxuXHJcbi5hY3QtY2xyIHtcclxuXHRjb2xvcjogIzNiNmZkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0LXNwYW4ge1xyXG5cdHBhZGRpbmc6IDNweCA2cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzNiNmZkNDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5hZGQtZm9ybS13cmFwcGVyIHtcclxuXHRtYXgtd2lkdGg6IDU4MHB4O1xyXG5cdG1hcmdpbjogMzZweCBhdXRvO1xyXG59XHJcblxyXG4uc3RlcC13cmFwcGVyIHtcclxuXHRwYWRkaW5nOiAzNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmZpbGVzLXVwbG9hZC13cnAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZmlsZXMtdXBsb2FkLXdycCBhcHAtY2l0eWxvZ28tdXBsb2FkLFxyXG4uZmlsZXMtdXBsb2FkLXdycCBhcHAtY2l0eS1hdmF0YXItdXBsb2FkLFxyXG4uZmlsZXMtdXBsb2FkLXdycCBhcHAtY2l0eS1tYXAtdXBsb2FkIHtcclxuXHRmbGV4LWJhc2lzOiAzMCU7XHJcbn1cclxuXHJcbi5iYWNrLWJ0bi13cnAge1xyXG5cdG1hcmdpbi10b3A6IC0xOHB4O1xyXG59XHJcblxyXG4uYmFjay1idG4ge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5iYWNrLWJ0biAuZGlzYWJsZSB7XHJcblx0b3BhY2l0eTogMDtcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uZnJnLW11bHRpc2VsZWN0LWRyb3Bkb3duIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGRpdjpiZWZvcmUge1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICM3ZDdkN2QgIWltcG9ydGFudDtcclxufVxyXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGRpdjpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgZGl2OmFmdGVyIHtcclxuXHR3aWR0aDogN3B4ICFpbXBvcnRhbnQ7XHJcblx0aGVpZ2h0OiAycHggIWltcG9ydGFudDtcclxuXHRtYXJnaW4tdG9wOiAtNHB4ICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItY29sb3I6ICMwMDAwMDBiOCAhaW1wb3J0YW50O1xyXG59XHJcbi5sLXNvbC1jYXRnLXBhbmVsLWdycCAucGFuZWwtaGVhZGluZyB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG59XHJcbi5sLXNvbC1jYXRnLWFjYy10aXRsZSB7XHJcblx0Y29sb3I6IHZhcigtLWJsYWNrLWNscik7XHJcbn1cclxuLmwtc29sLWNhdGctcGFuZWwtZ3JwIC5wYW5lbCArIC5wYW5lbCB7XHJcblx0bWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI2wtc29sLWNhdGctYWNjLTEgLnBhbmVsLWJvZHkge1xyXG5cdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50IDtcclxufVxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCB7XHJcblx0cGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLXBhbmVsLTEgLnBhbmVsLWhlYWRpbmcsXHJcbi5sLXNvbC1jYXRnLXBhbmVsLTIgLnBhbmVsLWhlYWRpbmcge1xyXG5cdHBhZGRpbmc6IDE2cHggMTdweDtcclxufVxyXG5cclxuLmwtc29sLWNhdGctYWNjLTEtdWwgbGkgPiBhIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDE2cHg7XHJcblx0cGFkZGluZzogMTZweCAxN3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHRjb2xvcjogIzk5OTk5OSAhaW1wb3J0YW50O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIGE6aG92ZXIsXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIGE6YWN0aXZlLFxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCBsaSBhOmZvY3VzLFxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCBsaSBhLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZiAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjNGY0ZjRmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLXBhbmVsLTEge1xyXG5cdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHRib3JkZXItYm90dG9tOiAwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn1cclxuLmwtc29sLWNhdGctcGFuZWwtMiB7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/provider/application-cataloging/application-cataloging.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/provider/application-cataloging/application-cataloging.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ApplicationCatalogingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationCatalogingComponent", function() { return ApplicationCatalogingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");
/* harmony import */ var _application_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./application.service */ "./src/app/provider/application-cataloging/application.service.ts");










let ApplicationCatalogingComponent = class ApplicationCatalogingComponent {
    constructor(route, fb, _sol, toastr, router) {
        this.route = route;
        this.fb = fb;
        this._sol = _sol;
        this.toastr = toastr;
        this.router = router;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].server_url;
        this.loading = false;
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
        };
        this.sectorDropdownList = [];
        this.challengeDropdownList = [];
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
        this.route.queryParams.subscribe((params) => {
            this.anchorId = params.anchorId;
            this.challengeId = params.challengeId;
            this.sectorId = params.sectorId;
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
        this.initLoading = true;
        this.solutionStep1 = true;
        this.solutionStep2 = false;
        this.solutionStep3 = false;
        this.addSolutionStep1 = this.fb.group({
            solutionName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            marketDomain: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            solutionBrief: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(700), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
            valueProposition: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
            tangibleBenefits: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
        });
        this.addSolutionStep2 = this.fb.group({
            solutionAdvantages: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
            solutionReadiness: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
            trackRecord: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
            implementationTimeMonth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            implementationTimeWeeks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.addSolutionStep3 = this.fb.group({
            ipStatus: [""],
            identificationNumber: [""],
            expertsInvolved: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(650), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(100)]],
            otherDetails: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]],
            video: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.urlPattern)]],
        });
        this.initLoading = false;
    }
    get addSolutionControlStep1() {
        return this.addSolutionStep1.controls;
    }
    get addSolutionControlStep2() {
        return this.addSolutionStep2.controls;
    }
    get addSolutionControlStep3() {
        return this.addSolutionStep3.controls;
    }
    gotoStep(step) {
        switch (step) {
            case "step1":
                this.solutionStep1 = true;
                this.solutionStep2 = false;
                this.solutionStep3 = false;
                window.scroll(0, 0);
                break;
            case "step2":
                this.solutionStep1 = false;
                this.solutionStep2 = true;
                this.solutionStep3 = false;
                window.scroll(0, 0);
                break;
            case "step3":
                this.solutionStep1 = false;
                this.solutionStep2 = false;
                this.solutionStep3 = true;
                window.scroll(0, 0);
                break;
        }
    }
    solutionStep1Submit() {
        this.isSubmitted.Step1 = true;
        if (this.addSolutionStep1.valid) {
            this.gotoStep("step2");
        }
        else {
            this.toastr.error("please provide the required values to proceed further.", "Validation Error");
        }
    }
    solutionStep2Submit() {
        this.isSubmitted.Step2 = true;
        if (this.addSolutionStep2.valid) {
            this.gotoStep("step3");
        }
        else {
            this.toastr.error("please provide the required values to proceed further.", "Validation Error");
        }
    }
    handleSaveGallery(files) {
        this.applicationGallery = files;
    }
    saveSolution() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubmitted.Step3 = true;
            if (this.addSolutionStep1.valid && this.addSolutionStep2.valid && this.addSolutionStep3.valid) {
                this.loading = true;
                let solutionPostdata = {
                    status: "active",
                    name: this.addSolutionStep1.value.solutionName,
                    frg_provider_id: this.loggedInUser.userTypeId,
                    market_domain: this.addSolutionStep1.value.marketDomain,
                    solution_brief: this.addSolutionStep1.value.solutionBrief,
                    video_link: this.addSolutionStep3.value.video,
                    value_proposition: this.addSolutionStep1.value.valueProposition,
                    tangible_benifits: this.addSolutionStep1.value.tangibleBenefits,
                    solution_advantages: this.addSolutionStep2.value.solutionAdvantages,
                    solution_readiness: this.addSolutionStep2.value.solutionReadiness,
                    track_record: this.addSolutionStep2.value.trackRecord,
                    other_details: this.addSolutionStep3.value.otherDetails,
                    experts_involved: this.addSolutionStep3.value.expertsInvolved,
                    implementation_time: {
                        months: this.addSolutionStep2.value.implementationTimeMonth,
                        weeks: this.addSolutionStep2.value.implementationTimeWeeks,
                    },
                    ip_details: {
                        status: this.addSolutionStep3.value.ipStatus,
                        id_number: this.addSolutionStep3.value.identificationNumber,
                    },
                    frg_anchor_id: this.anchorId,
                    frg_challenge_sector_id: this.sectorId,
                    frg_challenge_id: this.challengeId,
                };
                try {
                    let responseData = yield this._sol.createNewApplication({ data: solutionPostdata });
                    yield Promise.all([this.uploadImages(responseData.data.id)]);
                    this.loading = false;
                    this.toastr.success("", "Application applied successfully");
                    this.router.navigate([`/provider/user/${this.loggedInUser.slug}/dashboard`]);
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
    uploadImages(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.applicationGallery.length > 0) {
                let formData = new FormData();
                formData.append("slug", id);
                this.applicationGallery.forEach((file) => {
                    formData.append("images", file);
                });
                yield this._sol.uploadApplicationImages(formData);
            }
        });
    }
};
ApplicationCatalogingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _application_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserState"])
], ApplicationCatalogingComponent.prototype, "loggedInUser$", void 0);
ApplicationCatalogingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-application-cataloging",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./application-cataloging.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/application-cataloging/application-cataloging.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./application-cataloging.component.css */ "./src/app/provider/application-cataloging/application-cataloging.component.css")).default]
    })
], ApplicationCatalogingComponent);



/***/ }),

/***/ "./src/app/provider/application-cataloging/application.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/provider/application-cataloging/application.service.ts ***!
  \************************************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ApplicationService = class ApplicationService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    createNewApplication(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/application/create_send_push_city_admin", postData).toPromise();
        });
    }
    uploadApplicationImages(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/application/uploads", formData).toPromise();
        });
    }
    getAnchorsBasedOnChallenges(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/anchors/select_mul", formData).toPromise();
        });
    }
    updateUnspropStatus(post_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/unsolicited_proposal/update", post_data).toPromise();
        });
    }
};
ApplicationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ApplicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ApplicationService);



/***/ }),

/***/ "./src/app/provider/components/draft-item/draft-item.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/provider/components/draft-item/draft-item.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".solution-item {\r\n\tposition: relative;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n\tbackground: var(--white);\r\n\tmargin-bottom: 16px;\r\n\tmin-height: 136px;\r\n\toutline: none !important;\r\n\tcursor: pointer;\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n\t-webkit-touch-callout: none; /* iOS Safari */\r\n\t-webkit-user-select: none; /* Safari */ /* Konqueror HTML */\r\n\t-moz-user-select: none; /* Old versions of Firefox */\r\n\t-ms-user-select: none; /* Internet Explorer/Edge */\r\n\tuser-select: none;\r\n}\r\n\r\n.solution-item:hover {\r\n\tborder-color: var(--primary-green);\r\n\tbox-shadow: 0px 4px 25px rgba(172, 177, 193, 0.4);\r\n}\r\n\r\n.solution-item .wrap {\r\n\tpadding: 24px;\r\n\toutline: none !important;\r\n}\r\n\r\n.solution-item .title {\r\n\tfont-size: 0.842rem;\r\n\tfont-weight: 400;\r\n\tmargin-bottom: 0.2rem;\r\n\tcolor: var(--body-grey);\r\n}\r\n\r\n.solution-item .sector {\r\n\tfont-size: 0.631rem;\r\n\tfont-weight: 400;\r\n\tcolor: var(--body-light);\r\n\tmargin-bottom: 0.8rem;\r\n}\r\n\r\n.item-footer {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: end;\r\n\t        align-items: flex-end;\r\n}\r\n\r\n.status-tag {\r\n\tpadding: 10px 20px;\r\n\tfont-size: 0.526rem;\r\n\tbackground: #eeeff3;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.count {\r\n\tfont-size: 0.736rem;\r\n\tfont-weight: 400;\r\n\tcolor: var(--body-light);\r\n}\r\n\r\n.solution-item .menu {\r\n\tposition: absolute;\r\n\ttop: 8px;\r\n\tright: 8px;\r\n\tz-index: 10;\r\n}\r\n\r\n.solution-item .menu button {\r\n\tborder-radius: 15px;\r\n\tbackground-color: var(--white);\r\n\tpadding: 8px 8px;\r\n\tfont-size: 14px;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.solution-item .menu button:hover {\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n.solution-item .menu .dropdown-menu {\r\n\tright: 0 !important;\r\n\tleft: unset !important;\r\n\tborder: none !important;\r\n\tbox-shadow: 0px 2.38049px 11.9024px rgba(0, 0, 0, 0.1) !important;\r\n}\r\n\r\n.dropdown-menu span {\r\n\tdisplay: block;\r\n\tpadding: 8px 10px;\r\n\tfont-size: 0.736rem;\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\tcursor: pointer;\r\n\toutline: none !important;\r\n\tfont-weight: 400;\r\n\tcolor: #6f6f6f;\r\n}\r\n\r\n.dropdown-menu span:hover {\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n.a-challenge-schema-modal {\r\n\twidth: 570px !important;\r\n\tmargin: 256px auto !important;\r\n}\r\n\r\n.g-danger-clr {\r\n\tcolor: #f8483d;\r\n}\r\n\r\n.g-danger-bg {\r\n\tbackground-color: #f8483d;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvY29tcG9uZW50cy9kcmFmdC1pdGVtL2RyYWZ0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLHdCQUF3QjtDQUN4QixlQUFlO0NBQ2YsaUNBQXlCO0NBQXpCLHlCQUF5QjtDQUN6QiwyQkFBMkIsRUFBRSxlQUFlO0NBQzVDLHlCQUF5QixFQUFFLFdBQVcsRUFDWixtQkFBbUI7Q0FDN0Msc0JBQXNCLEVBQUUsNEJBQTRCO0NBQ3BELHFCQUFxQixFQUFFLDJCQUEyQjtDQUNsRCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxrQ0FBa0M7Q0FDbEMsaURBQWlEO0FBQ2xEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsd0JBQXdCO0NBQ3hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUE4QjtTQUE5Qiw4QkFBOEI7Q0FDOUIsc0JBQXFCO1NBQXJCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixVQUFVO0NBQ1YsV0FBVztBQUNaOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHdCQUF1QjtTQUF2Qix1QkFBdUI7Q0FDdkIseUJBQW1CO1NBQW5CLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGlFQUFpRTtBQUNsRTs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLDRCQUFvQjtDQUFwQixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLHdCQUF3QjtDQUN4QixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2NvbXBvbmVudHMvZHJhZnQtaXRlbS9kcmFmdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29sdXRpb24taXRlbSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cdG1pbi1oZWlnaHQ6IDEzNnB4O1xyXG5cdG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cclxuXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cclxuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnNvbHV0aW9uLWl0ZW06aG92ZXIge1xyXG5cdGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcblx0Ym94LXNoYWRvdzogMHB4IDRweCAyNXB4IHJnYmEoMTcyLCAxNzcsIDE5MywgMC40KTtcclxufVxyXG5cclxuLnNvbHV0aW9uLWl0ZW0gLndyYXAge1xyXG5cdHBhZGRpbmc6IDI0cHg7XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc29sdXRpb24taXRlbSAudGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMC44NDJyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcblx0Y29sb3I6IHZhcigtLWJvZHktZ3JleSk7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1pdGVtIC5zZWN0b3Ige1xyXG5cdGZvbnQtc2l6ZTogMC42MzFyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRjb2xvcjogdmFyKC0tYm9keS1saWdodCk7XHJcblx0bWFyZ2luLWJvdHRvbTogMC44cmVtO1xyXG59XHJcblxyXG4uaXRlbS1mb290ZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnN0YXR1cy10YWcge1xyXG5cdHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHRmb250LXNpemU6IDAuNTI2cmVtO1xyXG5cdGJhY2tncm91bmQ6ICNlZWVmZjM7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uY291bnQge1xyXG5cdGZvbnQtc2l6ZTogMC43MzZyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRjb2xvcjogdmFyKC0tYm9keS1saWdodCk7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1pdGVtIC5tZW51IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA4cHg7XHJcblx0cmlnaHQ6IDhweDtcclxuXHR6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnNvbHV0aW9uLWl0ZW0gLm1lbnUgYnV0dG9uIHtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRwYWRkaW5nOiA4cHggOHB4O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1pdGVtIC5tZW51IGJ1dHRvbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLnNvbHV0aW9uLWl0ZW0gLm1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG5cdHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0bGVmdDogdW5zZXQgIWltcG9ydGFudDtcclxuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuXHRib3gtc2hhZG93OiAwcHggMi4zODA0OXB4IDExLjkwMjRweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgc3BhbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogOHB4IDEwcHg7XHJcblx0Zm9udC1zaXplOiAwLjczNnJlbTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Y29sb3I6ICM2ZjZmNmY7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHNwYW46aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLmEtY2hhbGxlbmdlLXNjaGVtYS1tb2RhbCB7XHJcblx0d2lkdGg6IDU3MHB4ICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luOiAyNTZweCBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5nLWRhbmdlci1jbHIge1xyXG5cdGNvbG9yOiAjZjg0ODNkO1xyXG59XHJcbi5nLWRhbmdlci1iZyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y4NDgzZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/provider/components/draft-item/draft-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/provider/components/draft-item/draft-item.component.ts ***!
  \************************************************************************/
/*! exports provided: DraftItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftItemComponent", function() { return DraftItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _manage_solutions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../manage-solutions.service */ "./src/app/provider/manage-solutions.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");






let DraftItemComponent = class DraftItemComponent {
    constructor(solutionService, toastr) {
        this.solutionService = solutionService;
        this.toastr = toastr;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
        });
    }
    ngOnInit() { }
    deleteSolution() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.deleteLoading = true;
                let deletedSolution = yield this.solutionService.deleteSolution(this.solutionData.id);
                this.deleteLoading = false;
                $(`#deleteChallenge_${this.Id}`).modal("hide");
                this.toastr.info("Draft deleted");
                this.onDelete.emit(deletedSolution);
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
};
DraftItemComponent.ctorParameters = () => [
    { type: _manage_solutions_service__WEBPACK_IMPORTED_MODULE_3__["ManageSolutionsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_5__["LoggedInUserState"])
], DraftItemComponent.prototype, "loggedInUser$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DraftItemComponent.prototype, "solutionData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DraftItemComponent.prototype, "Id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DraftItemComponent.prototype, "onDelete", void 0);
DraftItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "draft-item",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./draft-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/draft-item/draft-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./draft-item.component.css */ "./src/app/provider/components/draft-item/draft-item.component.css")).default]
    })
], DraftItemComponent);



/***/ }),

/***/ "./src/app/provider/components/enterprise-company-edit/enterprise-company-edit.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/provider/components/enterprise-company-edit/enterprise-company-edit.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".company-edit-form-wrap{\r\n    background: var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 6px;\r\n    padding: 1.894rem;\r\n}\r\n\r\n.act-clr{\r\n    color: var(--primary-green) !important;\r\n}\r\n\r\n.act-span{\r\n    padding:3px 6px;\r\n    border: 1px solid var(--primary-green);\r\n    font-size:12px;\r\n}\r\n\r\n.frg-dynamic-row{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.frg-dynamic-row .frg-dynamic-input-col{\r\n    flex-basis:42%;\r\n}\r\n\r\n.frg-dynamic-row .frg-add-rm-row-btn{\r\n    flex-basis:7%;\r\n}\r\n\r\n.frg-expertise-row{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.frg-expertise-row .frg-expertise-input-col{\r\n    flex-basis:88%;\r\n}\r\n\r\n.frg-expertise-row .frg-expertise-add-rm-row-btn{\r\n    flex-basis:7%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvY29tcG9uZW50cy9lbnRlcnByaXNlLWNvbXBhbnktZWRpdC9lbnRlcnByaXNlLWNvbXBhbnktZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wcm92aWRlci9jb21wb25lbnRzL2VudGVycHJpc2UtY29tcGFueS1lZGl0L2VudGVycHJpc2UtY29tcGFueS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueS1lZGl0LWZvcm0td3JhcHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMS44OTRyZW07XHJcbn1cclxuXHJcbi5hY3QtY2xye1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3Qtc3BhbntcclxuICAgIHBhZGRpbmc6M3B4IDZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbn1cclxuXHJcbi5mcmctZHluYW1pYy1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZyZy1keW5hbWljLXJvdyAuZnJnLWR5bmFtaWMtaW5wdXQtY29se1xyXG4gICAgZmxleC1iYXNpczo0MiU7XHJcbn1cclxuXHJcbi5mcmctZHluYW1pYy1yb3cgLmZyZy1hZGQtcm0tcm93LWJ0bntcclxuICAgIGZsZXgtYmFzaXM6NyU7XHJcbn1cclxuXHJcbi5mcmctZXhwZXJ0aXNlLXJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZnJnLWV4cGVydGlzZS1yb3cgLmZyZy1leHBlcnRpc2UtaW5wdXQtY29se1xyXG4gICAgZmxleC1iYXNpczo4OCU7XHJcbn1cclxuXHJcbi5mcmctZXhwZXJ0aXNlLXJvdyAuZnJnLWV4cGVydGlzZS1hZGQtcm0tcm93LWJ0bntcclxuICAgIGZsZXgtYmFzaXM6NyU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/provider/components/enterprise-company-edit/enterprise-company-edit.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/provider/components/enterprise-company-edit/enterprise-company-edit.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EnterpriseCompanyEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseCompanyEditComponent", function() { return EnterpriseCompanyEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _profile_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../profile-info.service */ "./src/app/provider/profile-info.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let EnterpriseCompanyEditComponent = class EnterpriseCompanyEditComponent {
    constructor(toastr, fb, profile) {
        this.toastr = toastr;
        this.fb = fb;
        this.profile = profile;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url;
        this.userAchievements = [];
        this.yearArr = lodash__WEBPACK_IMPORTED_MODULE_7__["range"](1950, new Date().getFullYear() + 1);
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
        this.companyEditForm = this.fb.group({
            company_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?! )(?!.* $)[a-zA-Z0-9&-. ()-]+$")]],
            website: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(www.)?[a-z0-9 .]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$")]],
            off_phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")]],
            yr_incorp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            comp_brief: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dipp_num: [""],
            founderDetails: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            teamsize: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]],
            expertise: [""],
            annualIncome: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.founderDetails = this.companyEditForm.get("founderDetails");
        this.teamExpertise = this.companyEditForm.get("expertise");
        // patching values
        this.companyEditForm.patchValue({
            company_name: this.companyData.enterprise_company_name,
            website: this.companyData.enterprise_company_url,
            off_phone: this.companyData.enterprise_company_phone,
            dipp_num: this.companyData.dipp_number,
            yr_incorp: this.companyData.enterprise_incorporation_year,
            comp_brief: this.companyData.enterprise_company_brief,
            founderDetails: this.companyData.enterprise_founders,
            teamsize: this.companyData.enterprise_company_size,
            annualIncome: this.companyData.enterprise_annual_revenue,
            expertise: this.companyData.enterprise_expertises,
        });
    }
    get editformControl() {
        return this.companyEditForm.controls;
    }
    // addFounder() {
    //   let namesArr = this.founderDetails.value.map((el) => el.name);
    //   let designationArr = this.founderDetails.value.map((el) => el.designation);
    //   if (namesArr.includes("") && designationArr.includes("")) {
    //     this.toastr.error("", "Both fields are required");
    //     return false;
    //   } else if (this.founderDetails.value.length == 5) {
    //     this.toastr.error("", "Only 5 entries are allowed");
    //     return false;
    //   } else {
    //     const group = new FormGroup({
    //       name: new FormControl("", [Validators.required]),
    //       designation: new FormControl("", [Validators.required]),
    //     });
    //     this.founderDetails.push(group);
    //   }
    // }
    // removeFounder(index) {
    //   this.founderDetails.removeAt(index);
    // }
    // addExpertise() {
    //   let expertiseArr = ([] = this.teamExpertise.value);
    //   if (!expertiseArr.includes(""))
    //     if (this.teamExpertise.value.length != 5)
    //       this.teamExpertise.push(new FormControl(""));
    // }
    // removeExpertise(index) {
    //   this.teamExpertise.removeAt(index);
    // }
    handleAchievementChanges(achievementData) {
        this.userAchievements = achievementData;
    }
    handleSaveLogo(file) {
        this.companyLogo = file;
    }
    handleRemoveLogo(file) {
        if (typeof file == "object")
            this.companyLogo = null;
    }
    updateCompanyDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubmitted = true;
            try {
                if (this.companyEditForm.valid) {
                    this.formLoading = true;
                    let postData = {
                        slug: {
                            id: this.companyData.id,
                        },
                        data: {
                            dipp_number: this.companyEditForm.value.dipp_num,
                            enterprise_company_name: this.companyEditForm.value.company_name,
                            enterprise_company_url: this.companyEditForm.value.website,
                            enterprise_company_phone: this.companyEditForm.value.off_phone,
                            enterprise_company_brief: this.companyEditForm.value.comp_brief,
                            enterprise_incorporation_year: this.companyEditForm.value.yr_incorp,
                            enterprise_founders: this.companyEditForm.value.founderDetails,
                            enterprise_company_size: this.companyEditForm.value.teamsize,
                            enterprise_expertises: this.companyEditForm.value.expertise,
                            enterprise_annual_revenue: this.companyEditForm.value.annualIncome,
                            achievements: this.userAchievements,
                        },
                    };
                    const updatedData = yield Promise.all([this.profile.updateProfile(postData), this.uploadLogo()]);
                    this.toastr.success("", "Company details updated successfully");
                    this.onEdit.emit(updatedData);
                    this.formLoading = false;
                }
                else {
                    this.toastr.error("", "Please provide the required values to proceed further");
                }
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    uploadLogo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.companyLogo) {
                let formData = new FormData();
                formData.append("slug", this.companyData.id);
                formData.append("company_logo", this.companyLogo, this.companyLogo.name);
                return yield this.profile.updateLogo(formData);
            }
        });
    }
};
EnterpriseCompanyEditComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _profile_info_service__WEBPACK_IMPORTED_MODULE_5__["ProfileInfoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EnterpriseCompanyEditComponent.prototype, "companyData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EnterpriseCompanyEditComponent.prototype, "onEdit", void 0);
EnterpriseCompanyEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "enterprise-company-edit",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./enterprise-company-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/enterprise-company-edit/enterprise-company-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./enterprise-company-edit.component.css */ "./src/app/provider/components/enterprise-company-edit/enterprise-company-edit.component.css")).default]
    })
], EnterpriseCompanyEditComponent);



/***/ }),

/***/ "./src/app/provider/components/enterprise-company-view/enterprise-company-view.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/provider/components/enterprise-company-view/enterprise-company-view.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".company-details-content {\r\n\tbackground: #ffffff;\r\n\tpadding: 1.263rem;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 6px;\r\n\tmargin-bottom: 15px;\r\n\tword-break: break-word;\r\n}\r\n\r\n.company-logo {\r\n\twidth: 74px;\r\n\theight: 74px;\r\n\tborder-radius: 6px;\r\n\tborder: 1px solid #dedede;\r\n\tmargin-bottom: 14px;\r\n\toverflow: hidden;\r\n}\r\n\r\n.info-title {\r\n\tfont-weight: 500;\r\n\tfont-size: 0.842rem;\r\n\tcolor: #091c3d;\r\n}\r\n\r\n.info-descrp {\r\n\tfont-weight: 400;\r\n\tfont-size: 0.736rem;\r\n\tline-height: 1.4;\r\n\tcolor: #4f4f4f;\r\n}\r\n\r\nhr {\r\n\tmargin: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvY29tcG9uZW50cy9lbnRlcnByaXNlLWNvbXBhbnktdmlldy9lbnRlcnByaXNlLWNvbXBhbnktdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFNBQVM7QUFDViIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2NvbXBvbmVudHMvZW50ZXJwcmlzZS1jb21wYW55LXZpZXcvZW50ZXJwcmlzZS1jb21wYW55LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55LWRldGFpbHMtY29udGVudCB7XHJcblx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHRwYWRkaW5nOiAxLjI2M3JlbTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmNvbXBhbnktbG9nbyB7XHJcblx0d2lkdGg6IDc0cHg7XHJcblx0aGVpZ2h0OiA3NHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdG1hcmdpbi1ib3R0b206IDE0cHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmluZm8tdGl0bGUge1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Zm9udC1zaXplOiAwLjg0MnJlbTtcclxuXHRjb2xvcjogIzA5MWMzZDtcclxufVxyXG5cclxuLmluZm8tZGVzY3JwIHtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc2l6ZTogMC43MzZyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNDtcclxuXHRjb2xvcjogIzRmNGY0ZjtcclxufVxyXG5cclxuaHIge1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/provider/components/enterprise-company-view/enterprise-company-view.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/provider/components/enterprise-company-view/enterprise-company-view.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EnterpriseCompanyViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseCompanyViewComponent", function() { return EnterpriseCompanyViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");



let EnterpriseCompanyViewComponent = class EnterpriseCompanyViewComponent {
    constructor() {
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
    }
    ngOnInit() {
        this.technical_expertises = this.profileData.enterprise_expertises.split(',');
        this.founders = this.profileData.enterprise_founders.split(',');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EnterpriseCompanyViewComponent.prototype, "profileData", void 0);
EnterpriseCompanyViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'enterprise-company-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./enterprise-company-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/enterprise-company-view/enterprise-company-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./enterprise-company-view.component.css */ "./src/app/provider/components/enterprise-company-view/enterprise-company-view.component.css")).default]
    })
], EnterpriseCompanyViewComponent);



/***/ }),

/***/ "./src/app/provider/components/individual-innovator-view/individual-innovator-view.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/provider/components/individual-innovator-view/individual-innovator-view.component.css ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".company-details-content{\r\n    background: #FFFFFF;\r\n    padding:1.263rem;\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 6px;\r\n    margin-bottom: 15px;\r\n    word-break: break-word;\r\n}\r\n\r\n.company-logo{\r\n    width:74px;\r\n    height:74px;\r\n    border-radius: 6px;\r\n    border: 1px solid #DEDEDE;\r\n    margin-bottom:14px;\r\n}\r\n\r\n.info-title{\r\nfont-weight: 500;\r\nfont-size: 0.842rem;\r\ncolor: #091C3D;\r\n}\r\n\r\n.info-descrp{\r\n    font-weight: 400;\r\n    font-size: 0.736rem;\r\n    line-height:1.4;\r\n    color: #4F4F4F;\r\n}\r\n\r\nhr{\r\n    margin: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvY29tcG9uZW50cy9pbmRpdmlkdWFsLWlubm92YXRvci12aWV3L2luZGl2aWR1YWwtaW5ub3ZhdG9yLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLGNBQWM7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wcm92aWRlci9jb21wb25lbnRzL2luZGl2aWR1YWwtaW5ub3ZhdG9yLXZpZXcvaW5kaXZpZHVhbC1pbm5vdmF0b3Itdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbnktZGV0YWlscy1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHBhZGRpbmc6MS4yNjNyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uY29tcGFueS1sb2dve1xyXG4gICAgd2lkdGg6NzRweDtcclxuICAgIGhlaWdodDo3NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RFREVERTtcclxuICAgIG1hcmdpbi1ib3R0b206MTRweDtcclxufVxyXG5cclxuLmluZm8tdGl0bGV7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbmZvbnQtc2l6ZTogMC44NDJyZW07XHJcbmNvbG9yOiAjMDkxQzNEO1xyXG59XHJcblxyXG4uaW5mby1kZXNjcnB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAwLjczNnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG59XHJcblxyXG5ocntcclxuICAgIG1hcmdpbjogMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/provider/components/individual-innovator-view/individual-innovator-view.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/provider/components/individual-innovator-view/individual-innovator-view.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: IndividualInnovatorViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualInnovatorViewComponent", function() { return IndividualInnovatorViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");



let IndividualInnovatorViewComponent = class IndividualInnovatorViewComponent {
    constructor() {
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IndividualInnovatorViewComponent.prototype, "profileData", void 0);
IndividualInnovatorViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'individual-innovator-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./individual-innovator-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/individual-innovator-view/individual-innovator-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./individual-innovator-view.component.css */ "./src/app/provider/components/individual-innovator-view/individual-innovator-view.component.css")).default]
    })
], IndividualInnovatorViewComponent);



/***/ }),

/***/ "./src/app/provider/components/profile-top-card/profile-top-card.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/provider/components/profile-top-card/profile-top-card.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-card {\r\n\tpadding: 0rem 0;\r\n\tbackground: #fff;\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n\r\n.card-content {\r\n\tpadding: 2.105rem;\r\n\tbackground: var(--white);\r\n\r\n\tbox-sizing: border-box;\r\n\t/* border-radius: 10px; */\r\n}\r\n\r\n.card-content {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.avatar {\r\n\tflex-basis: 15%;\r\n}\r\n\r\n.user-info {\r\n\tflex-basis: 60%;\r\n\tpadding-left: 1rem;\r\n}\r\n\r\n.sectors {\r\n\tflex-basis: 25%;\r\n}\r\n\r\n.avatar img {\r\n\tmax-width: 140px;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.user-name {\r\n\tfont-weight: 500;\r\n\tfont-size: 1.473rem;\r\n\tcolor: #091c3d;\r\n\tmargin-bottom: 0.326rem;\r\n}\r\n\r\n.user-companyname {\r\n\tfont-weight: 400;\r\n\tfont-size: 1.157rem;\r\n\tcolor: #4f4f4f;\r\n\tmargin-bottom: 1.263rem;\r\n}\r\n\r\n.l-sectors-cont {\r\n\tborder-top: 1px solid #00000024;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.l-sect-badge {\r\n\tbackground: #eeeff3;\r\n\tpadding: 3px 16px;\r\n\tborder-radius: 16px;\r\n\tdisplay: inline-block;\r\n\tmargin-bottom: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvY29tcG9uZW50cy9wcm9maWxlLXRvcC1jYXJkL3Byb2ZpbGUtdG9wLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHdCQUF3Qjs7Q0FFeEIsc0JBQXNCO0NBQ3RCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUFtQjtTQUFuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsdUJBQXVCO0FBQ3hCOztBQUNBO0NBQ0MsK0JBQStCO0NBQy9CLGlCQUFpQjtDQUNqQixvQkFBb0I7QUFDckI7O0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXIvY29tcG9uZW50cy9wcm9maWxlLXRvcC1jYXJkL3Byb2ZpbGUtdG9wLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNhcmQge1xyXG5cdHBhZGRpbmc6IDByZW0gMDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuXHRwYWRkaW5nOiAyLjEwNXJlbTtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblxyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuXHRmbGV4LWJhc2lzOiAxNSU7XHJcbn1cclxuXHJcbi51c2VyLWluZm8ge1xyXG5cdGZsZXgtYmFzaXM6IDYwJTtcclxuXHRwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5zZWN0b3JzIHtcclxuXHRmbGV4LWJhc2lzOiAyNSU7XHJcbn1cclxuLmF2YXRhciBpbWcge1xyXG5cdG1heC13aWR0aDogMTQwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4udXNlci1uYW1lIHtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGZvbnQtc2l6ZTogMS40NzNyZW07XHJcblx0Y29sb3I6ICMwOTFjM2Q7XHJcblx0bWFyZ2luLWJvdHRvbTogMC4zMjZyZW07XHJcbn1cclxuXHJcbi51c2VyLWNvbXBhbnluYW1lIHtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc2l6ZTogMS4xNTdyZW07XHJcblx0Y29sb3I6ICM0ZjRmNGY7XHJcblx0bWFyZ2luLWJvdHRvbTogMS4yNjNyZW07XHJcbn1cclxuLmwtc2VjdG9ycy1jb250IHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDI0O1xyXG5cdHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5sLXNlY3QtYmFkZ2Uge1xyXG5cdGJhY2tncm91bmQ6ICNlZWVmZjM7XHJcblx0cGFkZGluZzogM3B4IDE2cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTZweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/provider/components/profile-top-card/profile-top-card.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/provider/components/profile-top-card/profile-top-card.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileTopCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTopCardComponent", function() { return ProfileTopCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../profile-info.service */ "./src/app/provider/profile-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let ProfileTopCardComponent = class ProfileTopCardComponent {
    constructor(route, provider, toastr, router) {
        this.route = route;
        this.provider = provider;
        this.toastr = toastr;
        this.router = router;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url;
        this.loading = true;
        this.viewType = 'public';
    }
    ngOnInit() { }
    ngOnChanges() {
        // console.log("ng on changes",this.profileData)
    }
    fetchUserProfile(slug) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.loading = true;
                this.profileData = yield this.provider.getProfile(slug);
                this.loading = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error('', 'Something went wrong please try again');
            }
        });
    }
    editSectors() {
        var query_params = {
            queryParams: {
                mode: "update"
            }
        };
        this.router.navigate(['/discover/select-sector'], query_params);
    }
};
ProfileTopCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _profile_info_service__WEBPACK_IMPORTED_MODULE_2__["ProfileInfoService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileTopCardComponent.prototype, "profileData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileTopCardComponent.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileTopCardComponent.prototype, "viewType", void 0);
ProfileTopCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile-top-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-top-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/profile-top-card/profile-top-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-top-card.component.css */ "./src/app/provider/components/profile-top-card/profile-top-card.component.css")).default]
    })
], ProfileTopCardComponent);



/***/ }),

/***/ "./src/app/provider/components/provider-edit-profile/provider-edit-profile.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/provider/components/provider-edit-profile/provider-edit-profile.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-edit-form-wrp{\r\n    background: var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 6px;\r\n    padding: 1.894rem;\r\n    min-height: 730px;\r\n}\r\n\r\n.phone-flx-row{\r\n    display:-webkit-box;\r\n    display:flex;\r\n}\r\n\r\n.phone-code-col{\r\n    flex-basis:15%;\r\n    padding-right:8px;\r\n}\r\n\r\n.phone-num-col{\r\n    flex-basis:85%;\r\n    padding-left:8px;\r\n}\r\n\r\n.loader-wrp{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    min-height: 730px;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvY29tcG9uZW50cy9wcm92aWRlci1lZGl0LXByb2ZpbGUvcHJvdmlkZXItZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFZO0lBQVosWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2NvbXBvbmVudHMvcHJvdmlkZXItZWRpdC1wcm9maWxlL3Byb3ZpZGVyLWVkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtZWRpdC1mb3JtLXdycHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMS44OTRyZW07XHJcbiAgICBtaW4taGVpZ2h0OiA3MzBweDtcclxufVxyXG5cclxuLnBob25lLWZseC1yb3d7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuXHJcbi5waG9uZS1jb2RlLWNvbHtcclxuICAgIGZsZXgtYmFzaXM6MTUlO1xyXG4gICAgcGFkZGluZy1yaWdodDo4cHg7XHJcbn1cclxuXHJcbi5waG9uZS1udW0tY29se1xyXG4gICAgZmxleC1iYXNpczo4NSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6OHB4O1xyXG59XHJcblxyXG4ubG9hZGVyLXdycHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiA3MzBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/provider/components/provider-edit-profile/provider-edit-profile.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/provider/components/provider-edit-profile/provider-edit-profile.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProviderEditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderEditProfileComponent", function() { return ProviderEditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/customvalidation.service */ "./src/app/services/customvalidation.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _profile_info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../profile-info.service */ "./src/app/provider/profile-info.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_action_loggedinuser_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../state/action/loggedinuser.action */ "./src/app/state/action/loggedinuser.action.ts");









let ProviderEditProfileComponent = class ProviderEditProfileComponent {
    constructor(toastr, fb, profile, customValidator, _store) {
        this.toastr = toastr;
        this.fb = fb;
        this.profile = profile;
        this.customValidator = customValidator;
        this._store = _store;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].server_url;
        this.userAchievements = [];
    }
    ngOnInit() {
        this.editProfileForm = this.fb.group({
            fullname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z .]*")]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email], this.customValidator.emailAvailabilityValidator.bind(this.customValidator)],
            phnum: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")], this.customValidator.phoneAvailabilityValidator.bind(this.customValidator)],
            location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnChanges() {
        if (!this.loading) {
            if (this.profileData.role != "individual") {
                this.editProfileForm = this.fb.group({
                    fullname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z .]*")]],
                    email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email], this.customValidator.emailAvailabilityValidator.bind(this.customValidator)],
                    phnum: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")], this.customValidator.phoneAvailabilityValidator.bind(this.customValidator)],
                    location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                });
                this.editProfileForm.patchValue({
                    fullname: this.profileData.fullname,
                    email: this.profileData.frg_user_id.email,
                    phnum: this.profileData.frg_user_id.mobile,
                    location: this.profileData.location[0].id,
                });
            }
            else {
                this.editProfileForm = this.fb.group({
                    fullname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z .]*")]],
                    email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email], this.customValidator.emailAvailabilityValidator.bind(this.customValidator)],
                    phnum: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")], this.customValidator.phoneAvailabilityValidator.bind(this.customValidator)],
                    location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    indv_expertises: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    indv_website_url: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(www.)?[a-z0-9.]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$")]],
                    indv_expertise_years: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    indv_affiliates: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    indv_tech_creds: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                });
                this.editProfileForm.patchValue({
                    fullname: this.profileData.fullname,
                    email: this.profileData.frg_user_id.email,
                    phnum: this.profileData.frg_user_id.mobile,
                    location: this.profileData.location[0].id,
                    indv_expertises: this.profileData.indv_expertises,
                    indv_website_url: this.profileData.indv_website_url,
                    indv_expertise_years: this.profileData.indv_expertise_years,
                    indv_affiliates: this.profileData.indv_affiliates,
                    indv_tech_creds: this.profileData.indv_tech_creds,
                });
            }
        }
    }
    get editFormControl() {
        return this.editProfileForm.controls;
    }
    handleAvatarUpload(newAvatar) {
        this.profileAvatar = newAvatar;
    }
    updateProfile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubmitted = true;
            try {
                if (this.editProfileForm.valid) {
                    this.formLoading = true;
                    let updateUserData = {
                        slug: {
                            id: this.profileData.frg_user_id.id,
                        },
                        data: {
                            email: this.editProfileForm.value.email,
                            mobile_code: "+91",
                            mobile: this.editProfileForm.value.phnum,
                        },
                    };
                    let updateProfileData = null;
                    if (this.profileData.role != "individual") {
                        updateProfileData = {
                            slug: {
                                id: this.profileData.id,
                            },
                            data: {
                                fullname: this.editProfileForm.value.fullname,
                            },
                        };
                    }
                    else {
                        updateProfileData = {
                            slug: {
                                id: this.profileData.id,
                            },
                            data: {
                                fullname: this.editProfileForm.value.fullname,
                                indv_expertises: this.editProfileForm.value.indv_expertises,
                                indv_website_url: this.editProfileForm.value.indv_website_url,
                                indv_expertise_years: this.editProfileForm.value.indv_expertise_years,
                                indv_affiliates: this.editProfileForm.value.indv_affiliates,
                                indv_tech_creds: this.editProfileForm.value.indv_tech_creds,
                                achievements: this.userAchievements,
                            },
                        };
                    }
                    let updateLocationData = {
                        slug: {
                            frg_provider_id: this.profileData.id,
                        },
                        data: {
                            frg_location_id: this.editProfileForm.value.location,
                        },
                    };
                    let updateResp = yield Promise.all([
                        this.profile.updateUser(updateUserData),
                        this.profile.updateProfile(updateProfileData),
                        this.profile.updateLocation(updateLocationData),
                        this.updateAvatar(),
                    ]);
                    let updatedProfile = yield this.profile.getProfile(updateResp[1].data.slug);
                    this.toastr.success("", "Profile updated successfully");
                    this._store.dispatch(new _state_action_loggedinuser_action__WEBPACK_IMPORTED_MODULE_8__["UpdateLoggedInUser"]({
                        id: updatedProfile.data.frg_user_id.id,
                        email: updatedProfile.data.frg_user_id.email,
                        name: updatedProfile.data.fullname,
                        userType: "provider",
                        userTypeId: updatedProfile.data.id,
                        avatar: `${this.serverUrl}` + updatedProfile.data.avatar,
                        slug: updatedProfile.data.slug,
                        isLoggedIn: true,
                    }));
                    this.onEdit.emit(updatedProfile);
                    this.formLoading = false;
                }
                else {
                    if (!this.editProfileForm.valid) {
                        this.toastr.error("", "Please provide the required values to proceed further");
                    }
                }
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    updateAvatar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.profileAvatar) {
                let formData = new FormData();
                formData.append("slug", this.profileData.id);
                formData.append("avatar", this.profileAvatar, this.profileAvatar.name);
                return yield this.profile.updateAvatar(formData);
            }
        });
    }
    handleAchievementChanges(achievementData) {
        this.userAchievements = achievementData;
    }
};
ProviderEditProfileComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _profile_info_service__WEBPACK_IMPORTED_MODULE_6__["ProfileInfoService"] },
    { type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_4__["CustomvalidationService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProviderEditProfileComponent.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProviderEditProfileComponent.prototype, "profileData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProviderEditProfileComponent.prototype, "locationData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProviderEditProfileComponent.prototype, "onEdit", void 0);
ProviderEditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "provider-edit-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./provider-edit-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/provider-edit-profile/provider-edit-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./provider-edit-profile.component.css */ "./src/app/provider/components/provider-edit-profile/provider-edit-profile.component.css")).default]
    })
], ProviderEditProfileComponent);



/***/ }),

/***/ "./src/app/provider/components/reset-password/reset-password.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/provider/components/reset-password/reset-password.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reset-password-wrp{\r\n    background: var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 6px;\r\n    padding: 1.894rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvY29tcG9uZW50cy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNldC1wYXNzd29yZC13cnB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDEuODk0cmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/provider/components/reset-password/reset-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/provider/components/reset-password/reset-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/customvalidation.service */ "./src/app/services/customvalidation.service.ts");
/* harmony import */ var _profile_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../profile-info.service */ "./src/app/provider/profile-info.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");







let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(fb, customValidator, _es, toastr, auth) {
        this.fb = fb;
        this.customValidator = customValidator;
        this._es = _es;
        this.toastr = toastr;
        this.auth = auth;
        this.loading = false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.resetPassword = this.fb.group({
                old_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
                new_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
                confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            }, {
                validator: [this.customValidator.MatchPassword("new_password", "confirmPassword"), , this.customValidator.comparePassword("old_password", "new_password")],
            });
            this.currentUserID = this.profileData.frg_user_id.id;
        });
    }
    togglePassword1() {
        this.passwordField1 = !this.passwordField1;
    }
    togglePassword2() {
        this.passwordField2 = !this.passwordField2;
    }
    togglePassword3() {
        this.passwordField3 = !this.passwordField3;
    }
    changePassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.resetPassword.controls["old_password"].setErrors(null);
            if (this.resetPassword.valid) {
                try {
                    this.loading = true;
                    let passwordChange;
                    passwordChange = yield this._es.changePassword({
                        data: {
                            id: this.currentUserID,
                            old_password: this.resetPassword.value.old_password,
                            new_password: this.resetPassword.value.new_password,
                        },
                    });
                    this.loading = false;
                    if (passwordChange.status === true) {
                        this.toastr.success("", "Password updated successfully");
                        this.auth.logout();
                    }
                    else {
                        this.resetPassword.controls["old_password"].setErrors({ incorrect: true });
                        this.toastr.error("", "Invalid Password");
                    }
                }
                catch (err) {
                    console.log(err);
                    this.loading = false;
                    this.toastr.error("", "Something went wrong please try again");
                }
            }
            else {
                this.toastr.error("", "Please provide the required values to proceed further");
            }
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__["CustomvalidationService"] },
    { type: _profile_info_service__WEBPACK_IMPORTED_MODULE_4__["ProfileInfoService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResetPasswordComponent.prototype, "profileData", void 0);
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "reset-password",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/reset-password/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.css */ "./src/app/provider/components/reset-password/reset-password.component.css")).default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/provider/components/solution-item/solution-item.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/provider/components/solution-item/solution-item.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".solution-thumbnail{\r\n    min-height: 480px;\r\n    background-color: #B7B7B7;\r\n    background-position: center center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.solution-card{\r\n    position: relative;\r\n}\r\n\r\n.solution-card .menu {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    z-index: 10;\r\n  }\r\n\r\n.solution-card .menu button {\r\n    border-radius: 50%;\r\n    background: var(--white);\r\n    padding: 10px 10px;\r\n    font-size: 14px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n  }\r\n\r\n.solution-card .menu .dropdown-menu {\r\n    right: 0 !important;\r\n    left: unset !important;\r\n    border: none !important;\r\n    box-shadow: 0px 2.38049px 11.9024px rgba(0, 0, 0, 0.1) !important;\r\n  }\r\n\r\n.dropdown-menu span {\r\n    display: block;\r\n    padding: 8px 10px;\r\n    font-size: 10px;\r\n    line-height: 10px;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    cursor: pointer;\r\n  }\r\n\r\n.dropdown-menu span:hover {\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n.g-danger-clr{\r\n    color:#F8483D;\r\n  }\r\n\r\n.g-danger-bg{\r\n    background-color:#F8483D;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvY29tcG9uZW50cy9zb2x1dGlvbi1pdGVtL3NvbHV0aW9uLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsaUVBQWlFO0VBQ25FOztBQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDRCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2NvbXBvbmVudHMvc29sdXRpb24taXRlbS9zb2x1dGlvbi1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29sdXRpb24tdGh1bWJuYWlse1xyXG4gICAgbWluLWhlaWdodDogNDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjdCN0I3O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uc29sdXRpb24tY2FyZHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNvbHV0aW9uLWNhcmQgLm1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogOHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zb2x1dGlvbi1jYXJkIC5tZW51IGJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNvbHV0aW9uLWNhcmQgLm1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyLjM4MDQ5cHggMTEuOTAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tbWVudSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tbWVudSBzcGFuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG5cclxuICAuZy1kYW5nZXItY2xye1xyXG4gICAgY29sb3I6I0Y4NDgzRDtcclxuICB9XHJcbiAgLmctZGFuZ2VyLWJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjg0ODNEO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/provider/components/solution-item/solution-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/provider/components/solution-item/solution-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: SolutionItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionItemComponent", function() { return SolutionItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _manage_solutions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../manage-solutions.service */ "./src/app/provider/manage-solutions.service.ts");





let SolutionItemComponent = class SolutionItemComponent {
    constructor(solution, toastr) {
        this.solution = solution;
        this.toastr = toastr;
        this.viewType = 'public';
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
    }
    ngOnInit() { }
    deleteSolution(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.deleteLoading = true;
                let resp = yield this.solution.deleteSolution(id);
                this.deleteLoading = false;
                document.getElementById(`deleteSolution${this.Id}`).click();
                this.toastr.success('', 'Solution deleted successfully');
                this.onDelete.emit(resp);
            }
            catch (err) {
                console.log(err);
                this.toastr.error('', 'Something went wrong please try again');
            }
        });
    }
};
SolutionItemComponent.ctorParameters = () => [
    { type: _manage_solutions_service__WEBPACK_IMPORTED_MODULE_4__["ManageSolutionsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SolutionItemComponent.prototype, "Id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SolutionItemComponent.prototype, "solutionData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SolutionItemComponent.prototype, "viewType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SolutionItemComponent.prototype, "onDelete", void 0);
SolutionItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'solution-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./solution-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/solution-item/solution-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./solution-item.component.css */ "./src/app/provider/components/solution-item/solution-item.component.css")).default]
    })
], SolutionItemComponent);



/***/ }),

/***/ "./src/app/provider/components/startup-company-edit/startup-company-edit.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/provider/components/startup-company-edit/startup-company-edit.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".company-edit-form-wrap{\r\n    background: var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 6px;\r\n    padding: 1.894rem;\r\n}\r\n\r\n.act-clr{\r\n    color: var(--primary-green) !important;\r\n}\r\n\r\n.act-span{\r\n    padding:3px 6px;\r\n    border: 1px solid var(--primary-green);\r\n    font-size:12px;\r\n}\r\n\r\n.frg-dynamic-row{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.frg-dynamic-row .frg-dynamic-input-col{\r\n    flex-basis:42%;\r\n}\r\n\r\n.frg-dynamic-row .frg-add-rm-row-btn{\r\n    flex-basis:7%;\r\n}\r\n\r\n.frg-expertise-row{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.frg-expertise-row .frg-expertise-input-col{\r\n    flex-basis:88%;\r\n}\r\n\r\n.frg-expertise-row .frg-expertise-add-rm-row-btn{\r\n    flex-basis:7%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvY29tcG9uZW50cy9zdGFydHVwLWNvbXBhbnktZWRpdC9zdGFydHVwLWNvbXBhbnktZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wcm92aWRlci9jb21wb25lbnRzL3N0YXJ0dXAtY29tcGFueS1lZGl0L3N0YXJ0dXAtY29tcGFueS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueS1lZGl0LWZvcm0td3JhcHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMS44OTRyZW07XHJcbn1cclxuXHJcbi5hY3QtY2xye1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3Qtc3BhbntcclxuICAgIHBhZGRpbmc6M3B4IDZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbn1cclxuXHJcbi5mcmctZHluYW1pYy1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZyZy1keW5hbWljLXJvdyAuZnJnLWR5bmFtaWMtaW5wdXQtY29se1xyXG4gICAgZmxleC1iYXNpczo0MiU7XHJcbn1cclxuXHJcbi5mcmctZHluYW1pYy1yb3cgLmZyZy1hZGQtcm0tcm93LWJ0bntcclxuICAgIGZsZXgtYmFzaXM6NyU7XHJcbn1cclxuXHJcbi5mcmctZXhwZXJ0aXNlLXJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZnJnLWV4cGVydGlzZS1yb3cgLmZyZy1leHBlcnRpc2UtaW5wdXQtY29se1xyXG4gICAgZmxleC1iYXNpczo4OCU7XHJcbn1cclxuXHJcbi5mcmctZXhwZXJ0aXNlLXJvdyAuZnJnLWV4cGVydGlzZS1hZGQtcm0tcm93LWJ0bntcclxuICAgIGZsZXgtYmFzaXM6NyU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/provider/components/startup-company-edit/startup-company-edit.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/provider/components/startup-company-edit/startup-company-edit.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StartupCompanyEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupCompanyEditComponent", function() { return StartupCompanyEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _profile_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../profile-info.service */ "./src/app/provider/profile-info.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let StartupCompanyEditComponent = class StartupCompanyEditComponent {
    constructor(toastr, fb, profile) {
        this.toastr = toastr;
        this.fb = fb;
        this.profile = profile;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url;
        this.userAchievements = [];
        this.yearArr = lodash__WEBPACK_IMPORTED_MODULE_7__["range"](1950, new Date().getFullYear() + 1);
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
        this.companyEditForm = this.fb.group({
            company_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?! )(?!.* $)[a-zA-Z0-9&-. ()-]+$")]],
            website: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(www.)?[a-z0-9 .]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$")]],
            off_phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")]],
            yr_incorp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            comp_brief: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dipp_num: [""],
            founderDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            teamsize: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]],
            expertise: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            affiliates: [""],
        });
        this.founderDetails = this.companyEditForm.get("founderDetails");
        this.teamExpertise = this.companyEditForm.get("expertise");
        // patching values
        this.companyEditForm.patchValue({
            company_name: this.companyData.startup_company_name,
            website: this.companyData.startup_company_url,
            off_phone: this.companyData.startup_company_phone,
            dipp_num: this.companyData.dipp_number,
            yr_incorp: this.companyData.startup_incorporation_years,
            comp_brief: this.companyData.startup_company_brief,
            teamsize: this.companyData.startup_teamsize,
            affiliates: this.companyData.startup_affiliates,
        });
        this.companyData.startup_founders.forEach((element) => {
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
            group.patchValue({ name: element.name, designation: element.designation });
            this.founderDetails.push(group);
        });
        this.companyData.startup_technical_expertises.forEach((element) => {
            const expertise = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
            expertise.patchValue(element);
            this.teamExpertise.push(expertise);
        });
    }
    get editformControl() {
        return this.companyEditForm.controls;
    }
    addFounder() {
        let namesArr = this.founderDetails.value.map((el) => el.name);
        let designationArr = this.founderDetails.value.map((el) => el.designation);
        if (namesArr.includes("") && designationArr.includes("")) {
            this.toastr.error("", "Both fields are required");
            return false;
        }
        else if (this.founderDetails.value.length == 5) {
            this.toastr.error("", "Only 5 entries are allowed");
            return false;
        }
        else {
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
            this.founderDetails.push(group);
        }
    }
    removeFounder(index) {
        this.founderDetails.removeAt(index);
    }
    addExpertise() {
        let expertiseArr = ([] = this.teamExpertise.value);
        if (!expertiseArr.includes(""))
            if (this.teamExpertise.value.length != 5)
                this.teamExpertise.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""));
    }
    removeExpertise(index) {
        this.teamExpertise.removeAt(index);
    }
    handleAchievementChanges(achievementData) {
        this.userAchievements = achievementData;
    }
    handleSaveLogo(file) {
        this.companyLogo = file;
    }
    handleRemoveLogo(file) {
        if (typeof file == "object")
            this.companyLogo = null;
    }
    updateCompanyDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubmitted = true;
            try {
                if (this.companyEditForm.valid) {
                    this.formLoading = true;
                    let postData = {
                        slug: {
                            id: this.companyData.id,
                        },
                        data: {
                            dipp_number: this.companyEditForm.value.dipp_num,
                            startup_company_name: this.companyEditForm.value.company_name,
                            startup_company_url: this.companyEditForm.value.website,
                            startup_company_phone_code: "+91",
                            startup_company_phone: this.companyEditForm.value.off_phone,
                            startup_company_brief: this.companyEditForm.value.comp_brief,
                            startup_incorporation_years: this.companyEditForm.value.yr_incorp,
                            startup_founders: this.companyEditForm.value.founderDetails,
                            startup_teamsize: this.companyEditForm.value.teamsize,
                            startup_technical_expertises: this.companyEditForm.value.expertise,
                            startup_affiliates: this.companyEditForm.value.affiliates,
                            achievements: this.userAchievements,
                        },
                    };
                    const updatedData = yield Promise.all([this.profile.updateProfile(postData), this.uploadLogo()]);
                    this.toastr.success("", "Company details updated successfully");
                    this.onEdit.emit(updatedData);
                    this.formLoading = false;
                }
                else {
                    this.toastr.error("", "Please provide the required values to proceed further");
                }
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    uploadLogo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.companyLogo) {
                let formData = new FormData();
                formData.append("slug", this.companyData.id);
                formData.append("company_logo", this.companyLogo, this.companyLogo.name);
                return yield this.profile.updateLogo(formData);
            }
        });
    }
};
StartupCompanyEditComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _profile_info_service__WEBPACK_IMPORTED_MODULE_5__["ProfileInfoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StartupCompanyEditComponent.prototype, "companyData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StartupCompanyEditComponent.prototype, "onEdit", void 0);
StartupCompanyEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "startup-company-edit",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./startup-company-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/startup-company-edit/startup-company-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./startup-company-edit.component.css */ "./src/app/provider/components/startup-company-edit/startup-company-edit.component.css")).default]
    })
], StartupCompanyEditComponent);



/***/ }),

/***/ "./src/app/provider/components/startup-company-view/startup-company-view.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/provider/components/startup-company-view/startup-company-view.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".company-details-content {\r\n\tbackground: #ffffff;\r\n\tpadding: 1.263rem;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 6px;\r\n\tmargin-bottom: 15px;\r\n\tword-break: break-word;\r\n}\r\n\r\n.company-logo {\r\n\twidth: 74px;\r\n\theight: 74px;\r\n\tborder-radius: 6px;\r\n\tborder: 1px solid #dedede;\r\n\tmargin-bottom: 14px;\r\n\toverflow: hidden;\r\n}\r\n\r\n.info-title {\r\n\tfont-weight: 500;\r\n\tfont-size: 0.842rem;\r\n\tcolor: #091c3d;\r\n}\r\n\r\n.info-descrp {\r\n\tfont-weight: 400;\r\n\tfont-size: 0.736rem;\r\n\tline-height: 1.4;\r\n\tcolor: #4f4f4f;\r\n}\r\n\r\nhr {\r\n\tmargin: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvY29tcG9uZW50cy9zdGFydHVwLWNvbXBhbnktdmlldy9zdGFydHVwLWNvbXBhbnktdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFNBQVM7QUFDViIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2NvbXBvbmVudHMvc3RhcnR1cC1jb21wYW55LXZpZXcvc3RhcnR1cC1jb21wYW55LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55LWRldGFpbHMtY29udGVudCB7XHJcblx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHRwYWRkaW5nOiAxLjI2M3JlbTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmNvbXBhbnktbG9nbyB7XHJcblx0d2lkdGg6IDc0cHg7XHJcblx0aGVpZ2h0OiA3NHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdG1hcmdpbi1ib3R0b206IDE0cHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmluZm8tdGl0bGUge1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Zm9udC1zaXplOiAwLjg0MnJlbTtcclxuXHRjb2xvcjogIzA5MWMzZDtcclxufVxyXG5cclxuLmluZm8tZGVzY3JwIHtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc2l6ZTogMC43MzZyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNDtcclxuXHRjb2xvcjogIzRmNGY0ZjtcclxufVxyXG5cclxuaHIge1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/provider/components/startup-company-view/startup-company-view.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/provider/components/startup-company-view/startup-company-view.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StartupCompanyViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupCompanyViewComponent", function() { return StartupCompanyViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");



let StartupCompanyViewComponent = class StartupCompanyViewComponent {
    // technical_expertises:any; 
    constructor() {
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
    }
    ngOnInit() {
        //  this.technical_expertises = this.profileData.startup_technical_expertises.split(',');
        // console.log("TE",this.profileData.startup_technical_expertises)
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StartupCompanyViewComponent.prototype, "profileData", void 0);
StartupCompanyViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'startup-company-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./startup-company-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/components/startup-company-view/startup-company-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./startup-company-view.component.css */ "./src/app/provider/components/startup-company-view/startup-company-view.component.css")).default]
    })
], StartupCompanyViewComponent);



/***/ }),

/***/ "./src/app/provider/edit-solutions/edit-solutions-service.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/provider/edit-solutions/edit-solutions-service.service.ts ***!
  \***************************************************************************/
/*! exports provided: EditSolutionsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSolutionsServiceService", function() { return EditSolutionsServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let EditSolutionsServiceService = class EditSolutionsServiceService {
    constructor(http) {
        this.http = http;
        this.api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    getSolution(solutionId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/solutions/select", {
                slug: { id: solutionId },
            })
                .toPromise();
        });
    }
    updateSolution(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/solutions/update", data).toPromise();
        });
    }
    getChallengeSectors() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/challenge_sectors/select_mul", {
                pg: {
                    offset: 0,
                    limit: 200,
                },
                filter: {
                    status: 'active'
                }
            })
                .toPromise();
        });
    }
    getChallenges(sectorId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/challenges/select_mul", {
                filter: {
                    frg_challenge_sector_id: sectorId,
                    status: 'active'
                },
                pg: {
                    offset: 0,
                    limit: 400,
                },
            })
                .toPromise();
        });
    }
    addChallenges(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/solutions_challenges/create", data).toPromise();
        });
    }
    addChallengeSectors(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/solutions_challenge_sectors/create", data).toPromise();
        });
    }
    getSolutionsChallengesAssoc(solutionId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/solutions_challenges/select_mul", {
                filter: {
                    frg_solution_id: solutionId,
                },
            })
                .toPromise();
        });
    }
    getSolutionsChallengeSectorsAssoc(solutionId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/solutions_challenge_sectors/select_mul", {
                filter: {
                    frg_solution_id: solutionId,
                },
            })
                .toPromise();
        });
    }
    deleteSolutionChallengesAssoc(ids) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/solutions_challenges/delete_mul", {
                slug: { ids: ids },
            })
                .toPromise();
        });
    }
    deleteSolutionChallengeSectorsAssoc(ids) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/solutions_challenge_sectors/delete_mul", {
                slug: { ids: ids },
            })
                .toPromise();
        });
    }
    removeFromProductImages(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/solutions/remove_from_images", data).toPromise();
        });
    }
    addtoProductImages(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/solutions/add_to_images", data).toPromise();
        });
    }
    uploadSolutionImages(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/solutions/uploads", formData).toPromise();
        });
    }
    // async removeFromGallery(data){
    //   return await this.http.post(this.api_url+"/smart_cities/remove_from_gallery",data).toPromise();
    // }
    // async getFilteredChallengeSectorSmartCities(postData){
    //   return await this.http.post(this.api_url+`/smart_cities_and_challenge_sectors/select_mul`,postData).toPromise();
    // }
    // async deleteCityChallenge(data){
    //   return await this.http.post(this.api_url+`/challenges_and_smart_cities/delete_mul`, data).toPromise();
    // }
    // async getSmartCityChallenge(data){
    //   return await this.http.post(this.api_url+`/challenges_and_smart_cities/select_mul`, data).toPromise();
    // }
    // // async getCityChallenges(data) {
    // //   return await this.http.post(this.api_url + "/challenges/select_mul", data).toPromise();
    // // }
    // async deleteExisitingSmartCityChallengeSectors(postData){
    //   return await this.http.post(this.api_url+`/smart_cities_and_challenge_sectors/delete_mul`,postData).toPromise();
    // }
    getSectorIdsFollowedByUser(innovatorId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let resp = yield this.http
                .post(this.api_url + "/challenge_sectors_and_providers/select_mul", {
                filter: {
                    frg_provider_id: innovatorId,
                },
            })
                .toPromise();
            let sectorIds = resp.data.map((e) => e.frg_challenge_sector_id);
            return sectorIds;
        });
    }
};
EditSolutionsServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
EditSolutionsServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], EditSolutionsServiceService);



/***/ }),

/***/ "./src/app/provider/edit-solutions/edit-solutions.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/provider/edit-solutions/edit-solutions.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-city-wrp {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.frg-flx-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.frg-flx-row .frg-flx-input-col {\r\n\tflex-basis: 88%;\r\n}\r\n\r\n.frg-flx-row .frg-flx-add-rm-row-btn {\r\n\tflex-basis: 7%;\r\n}\r\n\r\n.act-clr {\r\n\tcolor: #3b6fd4 !important;\r\n}\r\n\r\n.act-span {\r\n\tpadding: 3px 6px;\r\n\tborder: 1px solid #3b6fd4;\r\n\tfont-size: 12px;\r\n}\r\n\r\n/* .add-form-wrapper {\r\n  max-width: 580px;\r\n  margin: 36px auto;\r\n} */\r\n\r\n.step-wrapper {\r\n\tpadding: 36px;\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.files-upload-wrp {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n.files-upload-wrp app-citylogo-upload,\r\n.files-upload-wrp app-city-avatar-upload,\r\n.files-upload-wrp app-city-map-upload {\r\n\tflex-basis: 30%;\r\n}\r\n\r\n.back-btn-wrp {\r\n\tmargin-top: -18px;\r\n}\r\n\r\n.back-btn {\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.back-btn .disable {\r\n\topacity: 0;\r\n\tvisibility: visible;\r\n}\r\n\r\n.l-sol-catg-panel-grp .panel-heading {\r\n\tbackground: var(--white);\r\n}\r\n\r\n.l-sol-catg-acc-title {\r\n\tcolor: var(--black-clr);\r\n}\r\n\r\n.l-sol-catg-panel-grp .panel + .panel {\r\n\tmargin-top: 0px !important;\r\n}\r\n\r\n#l-sol-catg-acc-1 .panel-body {\r\n\tpadding: 0px !important ;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul {\r\n\tpadding-left: 0px;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n.l-sol-catg-panel-1 .panel-heading,\r\n.l-sol-catg-panel-2 .panel-heading {\r\n\tpadding: 16px 17px;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li > a {\r\n\tfont-size: 14px;\r\n\tline-height: 16px;\r\n\tpadding: 16px 17px;\r\n\tborder-radius: 0px;\r\n\tcolor: #999999 !important;\r\n\tfont-weight: 400;\r\n\tdisplay: block;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li a:hover,\r\n.l-sol-catg-acc-1-ul li a:active,\r\n.l-sol-catg-acc-1-ul li a:focus,\r\n.l-sol-catg-acc-1-ul li a.active {\r\n\tbackground-color: #efefef !important;\r\n\tcolor: #4f4f4f !important;\r\n}\r\n\r\n.l-sol-catg-panel-1 {\r\n\tbox-shadow: none !important;\r\n\tborder-bottom: 0px;\r\n\tborder-bottom-right-radius: 0px;\r\n\tborder-bottom-left-radius: 0px;\r\n}\r\n\r\n.l-sol-catg-panel-2 {\r\n\tborder-top-right-radius: 0px;\r\n\tborder-top-left-radius: 0px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvZWRpdC1zb2x1dGlvbnMvZWRpdC1zb2x1dGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUE4QjtTQUE5Qiw4QkFBOEI7Q0FDOUIseUJBQW1CO1NBQW5CLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7OztHQUdHOztBQUVIO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IseUJBQThCO1NBQTlCLDhCQUE4QjtBQUMvQjs7QUFFQTs7O0NBR0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlDQUF5QjtDQUF6Qix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUNBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCOztBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFVBQVU7QUFDWDs7QUFFQTs7Q0FFQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Ozs7Q0FJQyxvQ0FBb0M7Q0FDcEMseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLGtCQUFrQjtDQUNsQiwrQkFBK0I7Q0FDL0IsOEJBQThCO0FBQy9COztBQUNBO0NBQ0MsNEJBQTRCO0NBQzVCLDJCQUEyQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2VkaXQtc29sdXRpb25zL2VkaXQtc29sdXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWNpdHktd3JwIHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmZyZy1mbHgtcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZnJnLWZseC1yb3cgLmZyZy1mbHgtaW5wdXQtY29sIHtcclxuXHRmbGV4LWJhc2lzOiA4OCU7XHJcbn1cclxuXHJcbi5mcmctZmx4LXJvdyAuZnJnLWZseC1hZGQtcm0tcm93LWJ0biB7XHJcblx0ZmxleC1iYXNpczogNyU7XHJcbn1cclxuXHJcbi5hY3QtY2xyIHtcclxuXHRjb2xvcjogIzNiNmZkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0LXNwYW4ge1xyXG5cdHBhZGRpbmc6IDNweCA2cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzNiNmZkNDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi8qIC5hZGQtZm9ybS13cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDU4MHB4O1xyXG4gIG1hcmdpbjogMzZweCBhdXRvO1xyXG59ICovXHJcblxyXG4uc3RlcC13cmFwcGVyIHtcclxuXHRwYWRkaW5nOiAzNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmZpbGVzLXVwbG9hZC13cnAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZmlsZXMtdXBsb2FkLXdycCBhcHAtY2l0eWxvZ28tdXBsb2FkLFxyXG4uZmlsZXMtdXBsb2FkLXdycCBhcHAtY2l0eS1hdmF0YXItdXBsb2FkLFxyXG4uZmlsZXMtdXBsb2FkLXdycCBhcHAtY2l0eS1tYXAtdXBsb2FkIHtcclxuXHRmbGV4LWJhc2lzOiAzMCU7XHJcbn1cclxuXHJcbi5iYWNrLWJ0bi13cnAge1xyXG5cdG1hcmdpbi10b3A6IC0xOHB4O1xyXG59XHJcblxyXG4uYmFjay1idG4ge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5iYWNrLWJ0biAuZGlzYWJsZSB7XHJcblx0b3BhY2l0eTogMDtcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ubC1zb2wtY2F0Zy1wYW5lbC1ncnAgLnBhbmVsLWhlYWRpbmcge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxufVxyXG4ubC1zb2wtY2F0Zy1hY2MtdGl0bGUge1xyXG5cdGNvbG9yOiB2YXIoLS1ibGFjay1jbHIpO1xyXG59XHJcbi5sLXNvbC1jYXRnLXBhbmVsLWdycCAucGFuZWwgKyAucGFuZWwge1xyXG5cdG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiNsLXNvbC1jYXRnLWFjYy0xIC5wYW5lbC1ib2R5IHtcclxuXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudCA7XHJcbn1cclxuLmwtc29sLWNhdGctYWNjLTEtdWwge1xyXG5cdHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLXBhbmVsLTEgLnBhbmVsLWhlYWRpbmcsXHJcbi5sLXNvbC1jYXRnLXBhbmVsLTIgLnBhbmVsLWhlYWRpbmcge1xyXG5cdHBhZGRpbmc6IDE2cHggMTdweDtcclxufVxyXG5cclxuLmwtc29sLWNhdGctYWNjLTEtdWwgbGkgPiBhIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDE2cHg7XHJcblx0cGFkZGluZzogMTZweCAxN3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHRjb2xvcjogIzk5OTk5OSAhaW1wb3J0YW50O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIGE6aG92ZXIsXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIGE6YWN0aXZlLFxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCBsaSBhOmZvY3VzLFxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCBsaSBhLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZiAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjNGY0ZjRmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLXBhbmVsLTEge1xyXG5cdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHRib3JkZXItYm90dG9tOiAwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn1cclxuLmwtc29sLWNhdGctcGFuZWwtMiB7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/provider/edit-solutions/edit-solutions.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/provider/edit-solutions/edit-solutions.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditSolutionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSolutionsComponent", function() { return EditSolutionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _edit_solutions_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-solutions-service.service */ "./src/app/provider/edit-solutions/edit-solutions-service.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _all_solutions_all_solutions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../all-solutions/all-solutions.service */ "./src/app/provider/all-solutions/all-solutions.service.ts");
/* harmony import */ var _solution_cataloging_solution_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../solution-cataloging/solution.service */ "./src/app/provider/solution-cataloging/solution.service.ts");
/* harmony import */ var src_app_discover_select_sector_select_sector_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/discover/select-sector/select-sector.service */ "./src/app/discover/select-sector/select-sector.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");














let EditSolutionsComponent = class EditSolutionsComponent {
    constructor(route, fb, _sol, toastr, router, _as, solutionService, _ss) {
        this.route = route;
        this.fb = fb;
        this._sol = _sol;
        this.toastr = toastr;
        this.router = router;
        this._as = _as;
        this.solutionService = solutionService;
        this._ss = _ss;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].server_url;
        this.loading = false;
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
        };
        this.sectorDropdownList = [];
        this.selectedSectors = [];
        this.challengeDropdownList = [];
        this.disableChallengeList = true;
        this.selectedChallengeSectors = [];
        this.selectedChallenges = [];
        this.tobeRemovedFilePaths = [];
        this.urlPattern = new RegExp("^(http|https)://");
        this.solutionProductImages = [];
        this.currentProductImages = [];
        this.domainDropDownList = [
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
        this.domainDropDownSettings = {
            singleSelection: false,
            textField: "item_text",
            enableCheckAll: false,
            allowSearchFilter: true,
        };
        this.monthsArr = [0, 1, 2, 3, 4];
        this.weekArr = [0, 1, 2, 3, 4];
        this.ipStatusArr = ["Applied", "Published", "Granted", "Not Applicable"];
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
            this.route.params.subscribe((params) => {
                this.id = params.id;
            });
            this.initLoading = true;
            this.solutionStep1 = true;
            this.solutionStep2 = false;
            this.solutionStep3 = false;
            yield this.getChallengeSector();
            this.editSolutionStep1 = this.fb.group({
                solutionName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                challengeSectors: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                challenges: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                marketDomain: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                solutionBrief: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(700), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                valueProposition: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                tangibleBenefits: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
            });
            this.editSolutionStep2 = this.fb.group({
                solutionAdvantages: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                solutionReadiness: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                trackRecord: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                implementationTimeMonth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                implementationTimeWeeks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            });
            this.editSolutionStep3 = this.fb.group({
                ipStatus: [""],
                identificationNumber: [""],
                expertsInvolved: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(650), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                otherDetails: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500)]],
                video: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            });
            yield this.fetchSolutionAndMapValuesToFormControls();
            this.initLoading = false;
        });
    }
    get editSolutionControlStep1() {
        return this.editSolutionStep1.controls;
    }
    get editSolutionControlStep2() {
        return this.editSolutionStep2.controls;
    }
    get editSolutionControlStep3() {
        return this.editSolutionStep3.controls;
    }
    getChallengeSector() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.challengeSector = yield this._sol.getChallengeSectors();
                this.challengeSector.data.forEach((element) => {
                    this.sectorDropdownList.push({
                        item_id: parseInt(element.id),
                        item_text: element.name,
                    });
                });
                this.dropdownSettings = {
                    singleSelection: false,
                    idField: "item_id",
                    textField: "item_text",
                    enableCheckAll: false,
                    allowSearchFilter: true,
                };
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    fetchSolutionAndMapValuesToFormControls() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // fetch solution by id
            this.solutionData = yield this._sol.getSolution(this.id);
            this.sectorIdsFollowedByUser = yield this._sol.getSectorIdsFollowedByUser(this.loggedInUser.userTypeId);
            // currently selected sectors
            this.selectedSectors = this.solutionData.data.challenge_sectors.map((el) => {
                return { item_id: el.id, item_text: el.name };
            });
            // currently selected challenges
            this.selectedChallenges = this.solutionData.data.challenges.map((el) => {
                return { item_id: el.id, item_text: el.name };
            });
            // patch values with form fields
            this.editSolutionStep1.patchValue({
                solutionName: this.solutionData.data.name,
                challengeSectors: this.selectedSectors,
                challenges: this.selectedChallenges,
                marketDomain: this.solutionData.data.market_domain,
                solutionBrief: this.solutionData.data.solution_brief,
                valueProposition: this.solutionData.data.value_proposition,
                tangibleBenefits: this.solutionData.data.tangible_benifits,
            });
            this.editSolutionStep2.patchValue({
                solutionAdvantages: this.solutionData.data.solution_advantages,
                solutionReadiness: this.solutionData.data.solution_readiness,
                trackRecord: this.solutionData.data.track_record,
                implementationTimeMonth: this.solutionData.data.implementation_time.months,
                implementationTimeWeeks: this.solutionData.data.implementation_time.weeks,
            });
            this.editSolutionStep3.patchValue({
                ipStatus: this.solutionData.data.ip_details.status,
                identificationNumber: this.solutionData.data.ip_details.id_number,
                expertsInvolved: this.solutionData.data.experts_involved,
                otherDetails: this.solutionData.data.other_details,
                video: this.solutionData.data.video_link,
            });
            this.currentProductImages = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this.solutionData.data.images);
            yield this.initChallengesDropdown();
        });
    }
    initChallengesDropdown() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.disableChallengeList = true;
            let idArr = [];
            this.challengeDropdownList = [];
            this.editSolutionStep1.value.challengeSectors.forEach((element) => {
                idArr.push(element.item_id);
            });
            try {
                this.challengeBasedOnSector = yield this._sol.getChallenges(idArr);
                this.challengeDropdownList = this.challengeBasedOnSector.data.map((el) => {
                    return { item_id: el.id, item_text: el.name };
                });
                this.disableChallengeList = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    getChallengeBasedOnSector() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.disableChallengeList = true;
            // manually setting the touched event since plugin doesnt work properly
            this.editSolutionStep1.controls.challengeSectors.markAsTouched();
            this.selectedChallenges = this.editSolutionStep1.value.challenges;
            this.challengeDropdownList = [];
            let idArr = this.editSolutionStep1.value.challengeSectors.map((el) => el.item_id);
            try {
                this.toastr.info("Fetching challenges based on sectors", "Info");
                this.challengeBasedOnSector = yield this._sol.getChallenges(idArr);
                this.challengeBasedOnSector.data.forEach((element) => {
                    this.challengeDropdownList = lodash__WEBPACK_IMPORTED_MODULE_5__["unionBy"](this.challengeDropdownList, [{ item_id: parseInt(element.id), item_text: element.name }], "item_id");
                });
                this.selectedChallenges = lodash__WEBPACK_IMPORTED_MODULE_5__["intersectionBy"](this.selectedChallenges, this.challengeDropdownList, "item_id");
                if (lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"](this.selectedChallenges)) {
                    this.editSolutionStep1.patchValue({
                        challenges: this.selectedChallenges,
                    });
                }
                else {
                    this.editSolutionStep1.patchValue({
                        challenges: [this.selectedChallenges],
                    });
                }
                // manually setting the touched event since plugin doesnt work properly
                this.editSolutionStep1.controls.challenges.markAsTouched();
                // console.log("selected values should be",this.editSolutionStep1.value.challenges);
                this.disableChallengeList = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    handleChallengeChange(event) {
        // manually setting the touched event since plugin doesnt work properly
        this.editSolutionStep1.controls.challenges.markAsTouched();
    }
    gotoStep(step) {
        switch (step) {
            case "step1":
                this.solutionStep1 = true;
                this.solutionStep2 = false;
                this.solutionStep3 = false;
                window.scroll(0, 0);
                break;
            case "step2":
                this.solutionStep1 = false;
                this.solutionStep2 = true;
                this.solutionStep3 = false;
                window.scroll(0, 0);
                break;
            case "step3":
                this.solutionStep1 = false;
                this.solutionStep2 = false;
                this.solutionStep3 = true;
                window.scroll(0, 0);
                break;
        }
    }
    solutionStep1Submit() {
        this.isSubmitted.Step1 = true;
        if (this.editSolutionStep1.valid) {
            this.gotoStep("step2");
        }
        else {
            this.toastr.error("please provide the required values to proceed further.", "Validation Error");
        }
    }
    solutionStep2Submit() {
        this.isSubmitted.Step2 = true;
        if (this.editSolutionStep2.valid) {
            this.gotoStep("step3");
        }
        else {
            this.toastr.error("please provide the required values to proceed further.", "Validation Error");
        }
    }
    saveSolution() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubmitted.Step3 = true;
            if (this.editSolutionStep1.valid && this.editSolutionStep2.valid && this.editSolutionStep3.valid) {
                this.loading = true;
                let solutionPostData = {
                    slug: { id: this.id },
                    data: {
                        name: this.editSolutionStep1.value.solutionName,
                        stage: "Pilot",
                        market_domain: this.editSolutionStep1.value.marketDomain,
                        solution_brief: this.editSolutionStep1.value.solutionBrief,
                        video_link: this.editSolutionStep3.value.video,
                        value_proposition: this.editSolutionStep1.value.valueProposition,
                        tangible_benifits: this.editSolutionStep1.value.tangibleBenefits,
                        solution_advantages: this.editSolutionStep2.value.solutionAdvantages,
                        solution_readiness: this.editSolutionStep2.value.solutionReadiness,
                        track_record: this.editSolutionStep2.value.trackRecord,
                        other_details: this.editSolutionStep3.value.otherDetails,
                        experts_involved: this.editSolutionStep3.value.expertsInvolved,
                        implementation_time: {
                            months: this.editSolutionStep2.value.implementationTimeMonth,
                            weeks: this.editSolutionStep2.value.implementationTimeWeeks,
                        },
                        ip_details: {
                            status: this.editSolutionStep3.value.ipStatus,
                            id_number: this.editSolutionStep3.value.identificationNumber,
                        },
                    },
                };
                try {
                    let updatedCity = yield this._sol.updateSolution(solutionPostData);
                    yield Promise.all([
                        this.associateChallengeSectors(updatedCity.data.id),
                        this.associateChallenges(updatedCity.data.id),
                        yield this.filesRemovedFromProductImages(updatedCity.data.id),
                        yield this.saveNewProductImages(updatedCity.data.id),
                    ]);
                    this.saveSectorArr();
                    this.loading = false;
                    this.toastr.success("", "Solution updated successfully!");
                    this.router.navigate([`/provider/user/${this.loggedInUser.slug}/solution/${updatedCity.data.id}`]);
                }
                catch (err) {
                    console.log(err);
                    this.toastr.error("", "Something went wrong please try again");
                }
            }
            else {
                this.toastr.error("please provide the required values to proceed further.", "Validation Error");
            }
        });
    }
    publishSolution() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubmitted.Step3 = true;
            if (this.editSolutionStep1.valid && this.editSolutionStep2.valid && this.editSolutionStep3.valid) {
                this.loading = true;
                let solutionPostData = {
                    slug: { id: this.id },
                    data: {
                        status: "active",
                        name: this.editSolutionStep1.value.solutionName,
                        stage: "Pilot",
                        market_domain: this.editSolutionStep1.value.marketDomain,
                        solution_brief: this.editSolutionStep1.value.solutionBrief,
                        video_link: this.editSolutionStep3.value.video,
                        value_proposition: this.editSolutionStep1.value.valueProposition,
                        tangible_benifits: this.editSolutionStep1.value.tangibleBenefits,
                        solution_advantages: this.editSolutionStep2.value.solutionAdvantages,
                        solution_readiness: this.editSolutionStep2.value.solutionReadiness,
                        track_record: this.editSolutionStep2.value.trackRecord,
                        other_details: this.editSolutionStep3.value.otherDetails,
                        experts_involved: this.editSolutionStep3.value.expertsInvolved,
                        implementation_time: {
                            months: this.editSolutionStep2.value.implementationTimeMonth,
                            weeks: this.editSolutionStep2.value.implementationTimeWeeks,
                        },
                        ip_details: {
                            status: this.editSolutionStep3.value.ipStatus,
                            id_number: this.editSolutionStep3.value.identificationNumber,
                        },
                    },
                };
                try {
                    let updatedCity = yield this._sol.updateSolution(solutionPostData);
                    yield Promise.all([
                        this.associateChallengeSectors(updatedCity.data.id),
                        this.associateChallenges(updatedCity.data.id),
                        yield this.filesRemovedFromProductImages(updatedCity.data.id),
                        yield this.saveNewProductImages(updatedCity.data.id),
                    ]);
                    this.saveSectorArr();
                    yield this.solutionService.sendNotification(updatedCity.data.id);
                    this.loading = false;
                    this.resetForm();
                    this.toastr.success("", "Solution updated successfully!");
                    this.router.navigate([`/provider/user/${this.loggedInUser.slug}/solution/${updatedCity.data.id}`]);
                }
                catch (err) {
                    console.log(err);
                    this.toastr.error("", "Something went wrong please try again");
                }
            }
            else {
                this.toastr.error("please provide the required values to proceed further.", "Validation Error");
            }
        });
    }
    prepareSelectedSectorArr() {
        var tmp_arr = [];
        return new Promise((resolve, reject) => {
            lodash__WEBPACK_IMPORTED_MODULE_5__["each"](this.editSolutionStep1.value.challengeSectors, (itm, idx) => {
                var index = lodash__WEBPACK_IMPORTED_MODULE_5__["indexOf"](this.sectorIdsFollowedByUser, itm.item_id);
                if (index == -1) {
                    tmp_arr.push(itm.item_id);
                }
                if (this.editSolutionStep1.value.challengeSectors.length == idx + 1) {
                    resolve(tmp_arr);
                }
            });
        });
    }
    saveSectorArr() {
        var sector_post_data = {};
        var temp_arr = [];
        return new Promise((resolve, reject) => {
            this.prepareSelectedSectorArr().then((data) => {
                lodash__WEBPACK_IMPORTED_MODULE_5__["each"](data, (itm, idx) => {
                    if (this.loggedInUser.userType == "provider") {
                        sector_post_data = {
                            frg_challenge_sector_id: itm,
                            frg_provider_id: this.loggedInUser.userTypeId,
                        };
                        temp_arr.push(sector_post_data);
                    }
                    if (data.length == temp_arr.length) {
                        if (this.loggedInUser.userType == "provider") {
                            this._ss.saveSelectedSectorAPI("provider", temp_arr).subscribe((resp) => {
                                if (resp.status == true) {
                                    this.toastr.success("", "Sectors added successfully");
                                    resolve();
                                }
                            });
                        }
                    }
                });
            });
        });
    }
    saveAsDraft() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubmitted.Step3 = true;
            if (this.editSolutionStep1.valid && this.editSolutionStep2.valid && this.editSolutionStep3.valid) {
                this.draftLoading = true;
                let solutionPostData = {
                    slug: { id: this.id },
                    data: {
                        status: "draft",
                        name: this.editSolutionStep1.value.solutionName,
                        stage: "Pilot",
                        market_domain: this.editSolutionStep1.value.marketDomain,
                        solution_brief: this.editSolutionStep1.value.solutionBrief,
                        video_link: this.editSolutionStep3.value.video,
                        value_proposition: this.editSolutionStep1.value.valueProposition,
                        tangible_benifits: this.editSolutionStep1.value.tangibleBenefits,
                        solution_advantages: this.editSolutionStep2.value.solutionAdvantages,
                        solution_readiness: this.editSolutionStep2.value.solutionReadiness,
                        track_record: this.editSolutionStep2.value.trackRecord,
                        other_details: this.editSolutionStep3.value.otherDetails,
                        experts_involved: this.editSolutionStep3.value.expertsInvolved,
                        implementation_time: {
                            months: this.editSolutionStep2.value.implementationTimeMonth,
                            weeks: this.editSolutionStep2.value.implementationTimeWeeks,
                        },
                        ip_details: {
                            status: this.editSolutionStep3.value.ipStatus,
                            id_number: this.editSolutionStep3.value.identificationNumber,
                        },
                    },
                };
                try {
                    let updatedCity = yield this._sol.updateSolution(solutionPostData);
                    yield Promise.all([
                        this.associateChallengeSectors(updatedCity.data.id),
                        this.associateChallenges(updatedCity.data.id),
                        yield this.filesRemovedFromProductImages(updatedCity.data.id),
                        yield this.saveNewProductImages(updatedCity.data.id),
                    ]);
                    this.draftLoading = false;
                    this.toastr.info("", "Solution draft saved");
                    $("#confirmDialog").modal("hide");
                    this.resetForm();
                    this.router.navigate([`/provider/user/${this.loggedInUser.slug}/all-solutions`]);
                }
                catch (err) {
                    console.log(err);
                    this.toastr.error("", "Something went wrong please try again");
                }
            }
            else {
                this.toastr.warning("All mandatory fields has to be filled before saving as draft", "Mandatory fields required");
            }
        });
    }
    associateChallenges(solutionId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.editSolutionStep1.controls.challenges.touched) {
                // removing all challenges which are previously set.
                let filterPreviousAssociationsBySolutionId = yield this._sol.getSolutionsChallengesAssoc(solutionId);
                let idsToBeDeleted = filterPreviousAssociationsBySolutionId.data.map((e) => e.id);
                yield this._sol.deleteSolutionChallengesAssoc(idsToBeDeleted);
                // newly creating the association
                if (this.editSolutionStep1.value.challenges.length > 0) {
                    this.editSolutionStep1.value.challenges.forEach((el) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        yield this._sol.addChallenges({
                            data: {
                                frg_solution_id: solutionId,
                                frg_challenge_id: el.item_id,
                            },
                        });
                    }));
                }
            }
        });
    }
    associateChallengeSectors(solutionId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.editSolutionStep1.controls.challengeSectors.touched) {
                // removing all sectors which are previously set.
                let filterPreviousAssociationsBySolutionId = yield this._sol.getSolutionsChallengeSectorsAssoc(solutionId);
                let idsToBeDeleted = filterPreviousAssociationsBySolutionId.data.map((e) => e.id);
                yield this._sol.deleteSolutionChallengeSectorsAssoc(idsToBeDeleted);
                // newly creating the association
                if (this.editSolutionStep1.value.challengeSectors.length > 0) {
                    this.editSolutionStep1.value.challengeSectors.forEach((el) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        yield this._sol.addChallengeSectors({
                            data: {
                                frg_challenge_sector_id: el.item_id,
                                frg_solution_id: solutionId,
                            },
                        });
                    }));
                }
            }
        });
    }
    filesRemovedFromProductImages(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.tobeRemovedFilePaths.length > 0) {
                yield this._sol.removeFromProductImages({
                    slug: { id: id },
                    data: { remove_paths: this.tobeRemovedFilePaths },
                });
            }
        });
    }
    saveNewProductImages(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.solutionData.data.images) {
                if (this.solutionProductImages.length > 0) {
                    let formData = new FormData();
                    formData.append("slug", id);
                    this.solutionProductImages.forEach((file) => {
                        formData.append("images", file);
                    });
                    yield this._sol.uploadSolutionImages(formData);
                }
            }
            else {
                if (this.solutionProductImages.length > 0) {
                    let formData = new FormData();
                    formData.append("slug", id);
                    this.solutionProductImages.forEach((file) => {
                        formData.append("images", file);
                    });
                    yield this._sol.addtoProductImages(formData);
                }
            }
        });
    }
    handleSaveGallery(files) {
        // console.log(files);
        let ProductImagesBeforeChange = this.solutionData.data.images;
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
        // console.log('newly added files',this.solutionProductImages);
        // console.log('files to be removed', this.tobeRemovedFilePaths);
    }
    viewProviderProfile() {
        this.router.navigate(["/provider/user/" + this.loggedInUser.slug]);
    }
    addSolution() {
        this.router.navigate(["/provider/user/" + this.loggedInUser.slug + "/solutions/create"]);
    }
    viewSolution() {
        this.router.navigate(["provider/user/" + this.loggedInUser.slug + "/all-solutions"]);
    }
    editSolution(sol_id) {
        // user/:slug/solution/:id/edit
        this.router.navigate(["/provider/user/" + this.loggedInUser.slug + "/solution/" + sol_id + "/edit"]);
    }
    ConfirmLeaveComponent() {
        $("#confirmDialog").modal("show");
    }
    handleGoBack(action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (action === "save") {
                yield this.saveAsDraft();
            }
            else {
                this.resetForm();
                $("#confirmDialog").modal("hide");
                window.history.back();
            }
        });
    }
    resetForm() {
        this.editSolutionStep1.reset();
        this.editSolutionStep2.reset();
        this.editSolutionStep3.reset();
        this.editSolutionStep1.markAsPristine();
        this.editSolutionStep2.markAsPristine();
        this.editSolutionStep3.markAsPristine();
    }
};
EditSolutionsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _edit_solutions_service_service__WEBPACK_IMPORTED_MODULE_7__["EditSolutionsServiceService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _all_solutions_all_solutions_service__WEBPACK_IMPORTED_MODULE_9__["AllSolutionsService"] },
    { type: _solution_cataloging_solution_service__WEBPACK_IMPORTED_MODULE_10__["SolutionService"] },
    { type: src_app_discover_select_sector_select_sector_service__WEBPACK_IMPORTED_MODULE_11__["SelectSectorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_12__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_13__["LoggedInUserState"])
], EditSolutionsComponent.prototype, "loggedInUser$", void 0);
EditSolutionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-solutions",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-solutions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/edit-solutions/edit-solutions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-solutions.component.css */ "./src/app/provider/edit-solutions/edit-solutions.component.css")).default]
    })
], EditSolutionsComponent);



/***/ }),

/***/ "./src/app/provider/edit-solutions/editsolution-dirty-check.guard.ts":
/*!***************************************************************************!*\
  !*** ./src/app/provider/edit-solutions/editsolution-dirty-check.guard.ts ***!
  \***************************************************************************/
/*! exports provided: EditsolutionDirtyCheckGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditsolutionDirtyCheckGuard", function() { return EditsolutionDirtyCheckGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditsolutionDirtyCheckGuard = class EditsolutionDirtyCheckGuard {
    canDeactivate(component, currentRoute, nextState) {
        if (component.solutionData.data.status == "draft" && (component.editSolutionStep1.dirty || component.editSolutionStep2.dirty || component.editSolutionStep3.dirty)) {
            component.ConfirmLeaveComponent();
        }
        else {
            return true;
        }
    }
};
EditsolutionDirtyCheckGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], EditsolutionDirtyCheckGuard);



/***/ }),

/***/ "./src/app/provider/manage-solutions.service.ts":
/*!******************************************************!*\
  !*** ./src/app/provider/manage-solutions.service.ts ***!
  \******************************************************/
/*! exports provided: ManageSolutionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSolutionsService", function() { return ManageSolutionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ManageSolutionsService = class ManageSolutionsService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    getSolutionsByprovider(providerId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/solutions/select_mul", {
                filter: { status: "active", frg_provider_id: providerId },
                sort: [{ updated_at: "DESC" }],
            })
                .toPromise();
        });
    }
    deleteSolution(solutionId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/solutions/delete", {
                slug: { id: solutionId },
            })
                .toPromise();
        });
    }
};
ManageSolutionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ManageSolutionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ManageSolutionsService);



/***/ }),

/***/ "./src/app/provider/profile-info.service.ts":
/*!**************************************************!*\
  !*** ./src/app/provider/profile-info.service.ts ***!
  \**************************************************/
/*! exports provided: ProfileInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfoService", function() { return ProfileInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ProfileInfoService = class ProfileInfoService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    getProfile(slug) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + '/providers/select', { search: { slug: slug } }).toPromise();
        });
    }
    updateProfile(postdata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + '/providers/update', postdata).toPromise();
        });
    }
    updateAvatar(postdata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + '/providers/upload', postdata).toPromise();
        });
    }
    updateLogo(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + '/providers/company_logo', formData).toPromise();
        });
    }
    updateUser(postdata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + '/users/update', postdata).toPromise();
        });
    }
    updateLocation(postdata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + '/locations_and_providers/update', postdata).toPromise();
        });
    }
    changePassword(postdata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + '/users/change_password', postdata).toPromise();
        });
    }
    listLocations() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/locations/list`, {
                sort: [{ name: "ASC" }]
            }).toPromise();
        });
    }
};
ProfileInfoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProfileInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfileInfoService);



/***/ }),

/***/ "./src/app/provider/provider-public-profile/provider-public-profile.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/provider/provider-public-profile/provider-public-profile.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-profile-wrapper{\r\n    min-height: 100vh;\r\n}\r\n\r\n.profile-content{\r\n    padding:1.894rem 0;\r\n}\r\n\r\n.company-details-content{\r\n    background: var(--white);\r\n    padding:1.263rem;\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 6px;\r\n}\r\n\r\n.achievement-card{\r\n    background:var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    border-radius: 6px;\r\n}\r\n\r\n.card-header{\r\n    padding: 15px 18px;\r\n    background-color: var(--widget-grey);\r\n    color: var(--title-active);\r\n}\r\n\r\n.card-body{\r\n    padding:1.368rem;\r\n    height: 250px;\r\n    overflow-y:auto;\r\n}\r\n\r\n.achievement-item{    \r\n    display: -webkit-box;    \r\n    display: flex;\r\n    margin-bottom:0.825rem;\r\n}\r\n\r\n.monthyear{\r\n    flex-basis: 20%;\r\n    font-size: 12px;\r\n    color: #4F4F4F;\r\n}\r\n\r\n.achievement-content{\r\n    flex-basis:80%;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    color: #091C3D;\r\n}\r\n\r\n.solution-area{\r\n    min-height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvcHJvdmlkZXItcHVibGljLXByb2ZpbGUvcHJvdmlkZXItcHVibGljLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL3Byb3ZpZGVyLXB1YmxpYy1wcm9maWxlL3Byb3ZpZGVyLXB1YmxpYy1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1wcm9maWxlLXdyYXBwZXJ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGVudHtcclxuICAgIHBhZGRpbmc6MS44OTRyZW0gMDtcclxufVxyXG5cclxuLmNvbXBhbnktZGV0YWlscy1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgcGFkZGluZzoxLjI2M3JlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uYWNoaWV2ZW1lbnQtY2FyZHtcclxuICAgIGJhY2tncm91bmQ6dmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RFREVERTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVye1xyXG4gICAgcGFkZGluZzogMTVweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2lkZ2V0LWdyZXkpO1xyXG4gICAgY29sb3I6IHZhcigtLXRpdGxlLWFjdGl2ZSk7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOjEuMzY4cmVtO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxufVxyXG5cclxuLmFjaGlldmVtZW50LWl0ZW17ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206MC44MjVyZW07XHJcbn1cclxuXHJcbi5tb250aHllYXJ7XHJcbiAgICBmbGV4LWJhc2lzOiAyMCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxufVxyXG5cclxuLmFjaGlldmVtZW50LWNvbnRlbnR7XHJcbiAgICBmbGV4LWJhc2lzOjgwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzA5MUMzRDtcclxufVxyXG5cclxuLnNvbHV0aW9uLWFyZWF7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/provider/provider-public-profile/provider-public-profile.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/provider/provider-public-profile/provider-public-profile.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProviderPublicProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderPublicProfileComponent", function() { return ProviderPublicProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile-info.service */ "./src/app/provider/profile-info.service.ts");
/* harmony import */ var _manage_solutions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manage-solutions.service */ "./src/app/provider/manage-solutions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let ProviderPublicProfileComponent = class ProviderPublicProfileComponent {
    constructor(route, provider, solution, toastr, router) {
        this.route = route;
        this.provider = provider;
        this.solution = solution;
        this.toastr = toastr;
        this.router = router;
        this.route.params.subscribe(params => {
            this.userSlug = params.slug;
            // console.log(this.userSlug)
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.fetchUserProfile();
        });
    }
    fetchUserProfile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.profileLoading = true;
                this.profileData = yield this.provider.getProfile(this.userSlug);
                yield this.fetchSolutionsByUser();
                this.profileLoading = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error('', 'Something went wrong please try again');
            }
        });
    }
    fetchSolutionsByUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.solutionLoading = true;
                if (this.profileData.data.solutions.length > 0) {
                    this.solutionData = yield this.solution.getSolutionsByprovider(this.profileData.data.id);
                }
                this.solutionLoading = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error('', 'Something went wrong please try again');
            }
        });
    }
};
ProviderPublicProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _profile_info_service__WEBPACK_IMPORTED_MODULE_2__["ProfileInfoService"] },
    { type: _manage_solutions_service__WEBPACK_IMPORTED_MODULE_3__["ManageSolutionsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProviderPublicProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-provider-public-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./provider-public-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider-public-profile/provider-public-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./provider-public-profile.component.css */ "./src/app/provider/provider-public-profile/provider-public-profile.component.css")).default]
    })
], ProviderPublicProfileComponent);



/***/ }),

/***/ "./src/app/provider/provider-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/provider/provider-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProviderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderRoutingModule", function() { return ProviderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _provider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider.component */ "./src/app/provider/provider.component.ts");
/* harmony import */ var _solution_solution_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solution/solution.component */ "./src/app/provider/solution/solution.component.ts");
/* harmony import */ var _edit_solutions_edit_solutions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-solutions/edit-solutions.component */ "./src/app/provider/edit-solutions/edit-solutions.component.ts");
/* harmony import */ var _permission_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../permission.guard */ "./src/app/permission.guard.ts");
/* harmony import */ var _solution_cataloging_solution_cataloging_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./solution-cataloging/solution-cataloging.component */ "./src/app/provider/solution-cataloging/solution-cataloging.component.ts");
/* harmony import */ var _application_cataloging_application_cataloging_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./application-cataloging/application-cataloging.component */ "./src/app/provider/application-cataloging/application-cataloging.component.ts");
/* harmony import */ var _provider_user_profile_provider_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./provider-user-profile/provider-user-profile.component */ "./src/app/provider/provider-user-profile/provider-user-profile.component.ts");
/* harmony import */ var _provider_public_profile_provider_public_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./provider-public-profile/provider-public-profile.component */ "./src/app/provider/provider-public-profile/provider-public-profile.component.ts");
/* harmony import */ var _provider_user_edit_provider_user_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./provider-user-edit/provider-user-edit.component */ "./src/app/provider/provider-user-edit/provider-user-edit.component.ts");
/* harmony import */ var _all_solutions_all_solutions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./all-solutions/all-solutions.component */ "./src/app/provider/all-solutions/all-solutions.component.ts");
/* harmony import */ var _solution_dirty_check_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./solution-dirty-check.guard */ "./src/app/provider/solution-dirty-check.guard.ts");
/* harmony import */ var _edit_solutions_editsolution_dirty_check_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-solutions/editsolution-dirty-check.guard */ "./src/app/provider/edit-solutions/editsolution-dirty-check.guard.ts");
/* harmony import */ var _unsolicited_proposal_unsolicited_proposal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./unsolicited-proposal/unsolicited-proposal.component */ "./src/app/provider/unsolicited-proposal/unsolicited-proposal.component.ts");
















const routes = [
    {
        path: "",
        component: _provider_component__WEBPACK_IMPORTED_MODULE_3__["ProviderComponent"],
    },
    {
        path: "unsolicited-proposal",
        component: _unsolicited_proposal_unsolicited_proposal_component__WEBPACK_IMPORTED_MODULE_15__["UnsolicitedProposalComponent"]
    },
    // {
    //   path: '',
    //   redirectTo: '/discover/providers',
    //   pathMatch: 'full'
    // },
    {
        path: ":slug",
        component: _provider_public_profile_provider_public_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProviderPublicProfileComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
            permission: ["seeker"],
        },
    },
    {
        path: "user/:slug",
        component: _provider_user_profile_provider_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProviderUserProfileComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
            permission: ["provider"],
        },
    },
    {
        path: "user/:slug/edit",
        component: _provider_user_edit_provider_user_edit_component__WEBPACK_IMPORTED_MODULE_11__["ProviderUserEditComponent"],
        pathMatch: "full",
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
            permission: ["provider"],
        },
    },
    {
        path: "user/:slug/solution/:id/edit",
        component: _edit_solutions_edit_solutions_component__WEBPACK_IMPORTED_MODULE_5__["EditSolutionsComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        canDeactivate: [_edit_solutions_editsolution_dirty_check_guard__WEBPACK_IMPORTED_MODULE_14__["EditsolutionDirtyCheckGuard"]],
        data: {
            permission: ["provider"],
        },
    },
    {
        path: "user/:slug/solution/:id",
        component: _solution_solution_component__WEBPACK_IMPORTED_MODULE_4__["SolutionComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
            permission: ["provider"],
        },
    },
    {
        path: "user/:slug/solutions/create",
        component: _solution_cataloging_solution_cataloging_component__WEBPACK_IMPORTED_MODULE_7__["SolutionCatalogingComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        canDeactivate: [_solution_dirty_check_guard__WEBPACK_IMPORTED_MODULE_13__["SolutionDirtyCheckGuard"]],
        data: {
            permission: ["provider"],
        },
    },
    {
        path: "user/:slug/application/create",
        component: _application_cataloging_application_cataloging_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationCatalogingComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
            permission: ["provider"],
        },
    },
    {
        path: "user/:slug/all-solutions",
        component: _all_solutions_all_solutions_component__WEBPACK_IMPORTED_MODULE_12__["AllSolutionsComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
            permission: ["provider"],
        },
    },
    {
        path: "user/:slug/dashboard",
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/provider/dashboard/dashboard.module.ts")).then((m) => m.DashboardModule),
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
            permission: ["provider"],
        },
    },
];
let ProviderRoutingModule = class ProviderRoutingModule {
};
ProviderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProviderRoutingModule);



/***/ }),

/***/ "./src/app/provider/provider-user-edit/provider-user-edit.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/provider/provider-user-edit/provider-user-edit.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-tabs {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.edit-tabs .panel-heading {\r\n\tpadding: 16px !important;\r\n}\r\n\r\n.a-seeker-edit-opt-icon {\r\n\tfloat: right !important;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.a-seeker-edit-profile-opt > li {\r\n\tmargin: 0 !important;\r\n}\r\n\r\n.a-seeker-edit-profile-opt > li.active > a {\r\n\tbackground-color: #efefef !important;\r\n\tcolor: #4f4f4f !important;\r\n}\r\n\r\n.a-seeker-edit-profile-opt > li > a {\r\n\tfont-size: 14px;\r\n\tline-height: 16px;\r\n\tpadding: 16px 17px;\r\n\tborder-radius: 0px;\r\n\tcolor: #999999 !important;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.loader {\r\n\tbackground: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 6px;\r\n\tpadding: 1.894rem;\r\n\tmin-height: 730px;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.l-sol-catg-panel-2 {\r\n\tborder-top-right-radius: 0px;\r\n\tborder-top-left-radius: 0px;\r\n\tmargin-top: 0px !important;\r\n}\r\n\r\n.l-sol-catg-panel-grp .panel-heading {\r\n\tbackground: var(--white);\r\n}\r\n\r\n.l-sol-catg-panel-1 {\r\n\tbox-shadow: none !important;\r\n\tborder-bottom: 0px;\r\n\tborder-bottom-right-radius: 0px;\r\n\tborder-bottom-left-radius: 0px;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul {\r\n\tpadding-left: 0px;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li > a {\r\n\tfont-size: 14px;\r\n\tline-height: 16px;\r\n\tpadding: 16px 17px;\r\n\tborder-radius: 0px;\r\n\tcolor: #999999 !important;\r\n\tfont-weight: 400;\r\n\tdisplay: block;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li a:hover,\r\n.l-sol-catg-acc-1-ul li a:active,\r\n.l-sol-catg-acc-1-ul li a:focus {\r\n\tbackground-color: #efefef !important;\r\n\tcolor: #4f4f4f !important;\r\n}\r\n\r\n/* .l-sol-catg-acc-1-ul li:hover,\r\n.l-sol-catg-acc-1-ul li:active,\r\n.l-sol-catg-acc-1-ul li:focus {\r\n\tbackground: #dedede;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvcHJvdmlkZXItdXNlci1lZGl0L3Byb3ZpZGVyLXVzZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixvQkFBYTtDQUFiLGFBQWE7Q0FDYix3QkFBdUI7U0FBdkIsdUJBQXVCO0NBQ3ZCLHlCQUFtQjtTQUFuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsMkJBQTJCO0NBQzNCLDBCQUEwQjtBQUMzQjs7QUFDQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFDQTtDQUNDLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsK0JBQStCO0NBQy9CLDhCQUE4QjtBQUMvQjs7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7OztDQUdDLG9DQUFvQztDQUNwQyx5QkFBeUI7QUFDMUI7O0FBRUE7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL3Byb3ZpZGVyLXVzZXItZWRpdC9wcm92aWRlci11c2VyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LXRhYnMge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uZWRpdC10YWJzIC5wYW5lbC1oZWFkaW5nIHtcclxuXHRwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLXNlZWtlci1lZGl0LW9wdC1pY29uIHtcclxuXHRmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5hLXNlZWtlci1lZGl0LXByb2ZpbGUtb3B0ID4gbGkge1xyXG5cdG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYS1zZWVrZXItZWRpdC1wcm9maWxlLW9wdCA+IGxpLmFjdGl2ZSA+IGEge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWYgIWltcG9ydGFudDtcclxuXHRjb2xvcjogIzRmNGY0ZiAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXNlZWtlci1lZGl0LXByb2ZpbGUtb3B0ID4gbGkgPiBhIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDE2cHg7XHJcblx0cGFkZGluZzogMTZweCAxN3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHRjb2xvcjogIzk5OTk5OSAhaW1wb3J0YW50O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdHBhZGRpbmc6IDEuODk0cmVtO1xyXG5cdG1pbi1oZWlnaHQ6IDczMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtc29sLWNhdGctcGFuZWwtMiB7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcblx0bWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtc29sLWNhdGctcGFuZWwtZ3JwIC5wYW5lbC1oZWFkaW5nIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuLmwtc29sLWNhdGctcGFuZWwtMSB7XHJcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1ib3R0b206IDBweDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxufVxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCB7XHJcblx0cGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpID4gYSB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5cdHBhZGRpbmc6IDE2cHggMTdweDtcclxuXHRib3JkZXItcmFkaXVzOiAwcHg7XHJcblx0Y29sb3I6ICM5OTk5OTkgIWltcG9ydGFudDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCBsaSBhOmhvdmVyLFxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCBsaSBhOmFjdGl2ZSxcclxuLmwtc29sLWNhdGctYWNjLTEtdWwgbGkgYTpmb2N1cyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZiAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjNGY0ZjRmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpOmhvdmVyLFxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCBsaTphY3RpdmUsXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpOmZvY3VzIHtcclxuXHRiYWNrZ3JvdW5kOiAjZGVkZWRlO1xyXG59ICovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/provider/provider-user-edit/provider-user-edit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/provider/provider-user-edit/provider-user-edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProviderUserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderUserEditComponent", function() { return ProviderUserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile-info.service */ "./src/app/provider/profile-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let ProviderUserEditComponent = class ProviderUserEditComponent {
    constructor(route, provider, toastr, router, location, locationStrategy) {
        this.route = route;
        this.provider = provider;
        this.toastr = toastr;
        this.router = router;
        this.location = location;
        this.locationStrategy = locationStrategy;
        this.route.params.subscribe((params) => {
            this.userSlug = params.slug;
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.fetchUserProfile();
        });
    }
    fetchUserProfile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.profileLoading = true;
                this.profileData = yield this.provider.getProfile(this.userSlug);
                this.LocationData = yield this.provider.listLocations();
                this.profileLoading = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    handleProfileEdit(updatedProfile) {
        this.location.replaceState(`/provider/user/${updatedProfile.data.slug}/edit`);
        this.router.navigateByUrl(`/provider/user/${updatedProfile.data.slug}/edit`);
        history.pushState(null, null, window.location.href);
        this.locationStrategy.onPopState(() => {
            history.pushState(null, null, window.location.href);
        });
        this.profileData = updatedProfile;
        window.scrollTo(0, 0);
    }
    handleStartupCompanyEdit(updatedCompanyData) {
        this.profileData.data.startup_company_name = updatedCompanyData[0].data.startup_company_name;
        this.profileData.data.startup_company_url = updatedCompanyData[0].data.startup_company_url;
        window.scrollTo(0, 0);
    }
    handleEnterpriseCompanyEdit(updatedCompanyData) {
        // console.log(updatedCompanyData);
        this.profileData.data.enterprise_company_name = updatedCompanyData[0].data.enterprise_company_name;
        this.profileData.data.enterprise_company_url = updatedCompanyData[0].data.enterprise_company_url;
        window.scrollTo(0, 0);
    }
    addSolutions() {
        this.router.navigate(["/provider/user/" + this.userSlug + "/solutions/create"]);
    }
    editSolution(sol_id) {
        // user/:slug/solution/:id/edit
        this.router.navigate(["/provider/user/" + this.userSlug + "/solution/" + sol_id + "/edit"]);
    }
};
ProviderUserEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _profile_info_service__WEBPACK_IMPORTED_MODULE_2__["ProfileInfoService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"] }
];
ProviderUserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-provider-user-edit",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./provider-user-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider-user-edit/provider-user-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./provider-user-edit.component.css */ "./src/app/provider/provider-user-edit/provider-user-edit.component.css")).default]
    })
], ProviderUserEditComponent);



/***/ }),

/***/ "./src/app/provider/provider-user-profile/provider-user-profile.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/provider/provider-user-profile/provider-user-profile.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-profile-wrapper{\r\n    min-height: 100vh;\r\n}\r\n\r\n.profile-content{\r\n    padding:1.894rem 0;\r\n}\r\n\r\n.company-details-content{\r\n    background: var(--white);\r\n    padding:1.263rem;\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 6px;\r\n}\r\n\r\n.achievement-card{\r\n    background:var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    border-radius: 6px;\r\n}\r\n\r\n.card-header{\r\n    padding: 15px 18px;\r\n    background-color: var(--widget-grey);\r\n    color: var(--title-active);\r\n}\r\n\r\n.card-body{\r\n    padding:1.368rem;\r\n    height: 250px;\r\n    overflow-y:auto;\r\n}\r\n\r\n.achievement-item{    \r\n    display: -webkit-box;    \r\n    display: flex;\r\n    margin-bottom:0.825rem;\r\n}\r\n\r\n.monthyear{\r\n    flex-basis: 20%;\r\n    font-size: 12px;\r\n    color: #4F4F4F;\r\n}\r\n\r\n.achievement-content{\r\n    flex-basis:80%;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    color: #091C3D;\r\n}\r\n\r\n.solution-area{\r\n    min-height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvcHJvdmlkZXItdXNlci1wcm9maWxlL3Byb3ZpZGVyLXVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXIvcHJvdmlkZXItdXNlci1wcm9maWxlL3Byb3ZpZGVyLXVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtcHJvZmlsZS13cmFwcGVye1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOjEuODk0cmVtIDA7XHJcbn1cclxuXHJcbi5jb21wYW55LWRldGFpbHMtY29udGVudHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgIHBhZGRpbmc6MS4yNjNyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmFjaGlldmVtZW50LWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDE1cHggMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdpZGdldC1ncmV5KTtcclxuICAgIGNvbG9yOiB2YXIoLS10aXRsZS1hY3RpdmUpO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzoxLjM2OHJlbTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBvdmVyZmxvdy15OmF1dG87XHJcbn1cclxuXHJcbi5hY2hpZXZlbWVudC1pdGVteyAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjAuODI1cmVtO1xyXG59XHJcblxyXG4ubW9udGh5ZWFye1xyXG4gICAgZmxleC1iYXNpczogMjAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbn1cclxuXHJcbi5hY2hpZXZlbWVudC1jb250ZW50e1xyXG4gICAgZmxleC1iYXNpczo4MCU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwOTFDM0Q7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1hcmVhe1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/provider/provider-user-profile/provider-user-profile.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/provider/provider-user-profile/provider-user-profile.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProviderUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderUserProfileComponent", function() { return ProviderUserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile-info.service */ "./src/app/provider/profile-info.service.ts");
/* harmony import */ var _manage_solutions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manage-solutions.service */ "./src/app/provider/manage-solutions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let ProviderUserProfileComponent = class ProviderUserProfileComponent {
    constructor(route, provider, solution, toastr) {
        this.route = route;
        this.provider = provider;
        this.solution = solution;
        this.toastr = toastr;
        this.route.params.subscribe((params) => {
            this.userSlug = params.slug;
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.fetchUserProfile();
        });
    }
    fetchUserProfile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.profileLoading = true;
                this.profileData = yield this.provider.getProfile(this.userSlug);
                yield this.fetchSolutionsByUser();
                this.profileLoading = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    fetchSolutionsByUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.solutionLoading = true;
                if (this.profileData.data.solutions.length > 0) {
                    this.solutionData = yield this.solution.getSolutionsByprovider(this.profileData.data.id);
                }
                this.solutionLoading = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    handleSolutionDelete(deletedSolution) {
        this.fetchSolutionsByUser();
    }
};
ProviderUserProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _profile_info_service__WEBPACK_IMPORTED_MODULE_2__["ProfileInfoService"] },
    { type: _manage_solutions_service__WEBPACK_IMPORTED_MODULE_3__["ManageSolutionsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ProviderUserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-provider-user-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./provider-user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider-user-profile/provider-user-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./provider-user-profile.component.css */ "./src/app/provider/provider-user-profile/provider-user-profile.component.css")).default]
    })
], ProviderUserProfileComponent);



/***/ }),

/***/ "./src/app/provider/provider.component.css":
/*!*************************************************!*\
  !*** ./src/app/provider/provider.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL3Byb3ZpZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/provider/provider.component.ts":
/*!************************************************!*\
  !*** ./src/app/provider/provider.component.ts ***!
  \************************************************/
/*! exports provided: ProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderComponent", function() { return ProviderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProviderComponent = class ProviderComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProviderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-provider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./provider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./provider.component.css */ "./src/app/provider/provider.component.css")).default]
    })
], ProviderComponent);



/***/ }),

/***/ "./src/app/provider/provider.module.ts":
/*!*********************************************!*\
  !*** ./src/app/provider/provider.module.ts ***!
  \*********************************************/
/*! exports provided: ProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderModule", function() { return ProviderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _provider_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provider-routing.module */ "./src/app/provider/provider-routing.module.ts");
/* harmony import */ var _provider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./provider.component */ "./src/app/provider/provider.component.ts");
/* harmony import */ var _solution_solution_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./solution/solution.component */ "./src/app/provider/solution/solution.component.ts");
/* harmony import */ var _solution_solution_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../solution/solution.module */ "./src/app/solution/solution.module.ts");
/* harmony import */ var _edit_solutions_edit_solutions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-solutions/edit-solutions.component */ "./src/app/provider/edit-solutions/edit-solutions.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/widgets/widgets.module */ "./src/app/shared/widgets/widgets.module.ts");
/* harmony import */ var _solution_cataloging_solution_cataloging_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./solution-cataloging/solution-cataloging.component */ "./src/app/provider/solution-cataloging/solution-cataloging.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _provider_user_profile_provider_user_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./provider-user-profile/provider-user-profile.component */ "./src/app/provider/provider-user-profile/provider-user-profile.component.ts");
/* harmony import */ var _provider_public_profile_provider_public_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./provider-public-profile/provider-public-profile.component */ "./src/app/provider/provider-public-profile/provider-public-profile.component.ts");
/* harmony import */ var _components_profile_top_card_profile_top_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/profile-top-card/profile-top-card.component */ "./src/app/provider/components/profile-top-card/profile-top-card.component.ts");
/* harmony import */ var _components_startup_company_view_startup_company_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/startup-company-view/startup-company-view.component */ "./src/app/provider/components/startup-company-view/startup-company-view.component.ts");
/* harmony import */ var _components_enterprise_company_view_enterprise_company_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/enterprise-company-view/enterprise-company-view.component */ "./src/app/provider/components/enterprise-company-view/enterprise-company-view.component.ts");
/* harmony import */ var _components_individual_innovator_view_individual_innovator_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/individual-innovator-view/individual-innovator-view.component */ "./src/app/provider/components/individual-innovator-view/individual-innovator-view.component.ts");
/* harmony import */ var _components_solution_item_solution_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/solution-item/solution-item.component */ "./src/app/provider/components/solution-item/solution-item.component.ts");
/* harmony import */ var _provider_user_edit_provider_user_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./provider-user-edit/provider-user-edit.component */ "./src/app/provider/provider-user-edit/provider-user-edit.component.ts");
/* harmony import */ var _components_provider_edit_profile_provider_edit_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/provider-edit-profile/provider-edit-profile.component */ "./src/app/provider/components/provider-edit-profile/provider-edit-profile.component.ts");
/* harmony import */ var _components_startup_company_edit_startup_company_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/startup-company-edit/startup-company-edit.component */ "./src/app/provider/components/startup-company-edit/startup-company-edit.component.ts");
/* harmony import */ var _components_enterprise_company_edit_enterprise_company_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/enterprise-company-edit/enterprise-company-edit.component */ "./src/app/provider/components/enterprise-company-edit/enterprise-company-edit.component.ts");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/provider/components/reset-password/reset-password.component.ts");
/* harmony import */ var _all_solutions_all_solutions_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./all-solutions/all-solutions.component */ "./src/app/provider/all-solutions/all-solutions.component.ts");
/* harmony import */ var _solution_dirty_check_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./solution-dirty-check.guard */ "./src/app/provider/solution-dirty-check.guard.ts");
/* harmony import */ var _edit_solutions_editsolution_dirty_check_guard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./edit-solutions/editsolution-dirty-check.guard */ "./src/app/provider/edit-solutions/editsolution-dirty-check.guard.ts");
/* harmony import */ var _components_draft_item_draft_item_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/draft-item/draft-item.component */ "./src/app/provider/components/draft-item/draft-item.component.ts");
/* harmony import */ var _application_cataloging_application_cataloging_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./application-cataloging/application-cataloging.component */ "./src/app/provider/application-cataloging/application-cataloging.component.ts");
/* harmony import */ var _unsolicited_proposal_unsolicited_proposal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./unsolicited-proposal/unsolicited-proposal.component */ "./src/app/provider/unsolicited-proposal/unsolicited-proposal.component.ts");

































let ProviderModule = class ProviderModule {
};
ProviderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _provider_component__WEBPACK_IMPORTED_MODULE_7__["ProviderComponent"],
            _solution_solution_component__WEBPACK_IMPORTED_MODULE_8__["SolutionComponent"],
            _edit_solutions_edit_solutions_component__WEBPACK_IMPORTED_MODULE_10__["EditSolutionsComponent"],
            _solution_cataloging_solution_cataloging_component__WEBPACK_IMPORTED_MODULE_13__["SolutionCatalogingComponent"],
            _provider_user_profile_provider_user_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProviderUserProfileComponent"],
            _provider_public_profile_provider_public_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProviderPublicProfileComponent"],
            _components_profile_top_card_profile_top_card_component__WEBPACK_IMPORTED_MODULE_17__["ProfileTopCardComponent"],
            _components_startup_company_view_startup_company_view_component__WEBPACK_IMPORTED_MODULE_18__["StartupCompanyViewComponent"],
            _components_enterprise_company_view_enterprise_company_view_component__WEBPACK_IMPORTED_MODULE_19__["EnterpriseCompanyViewComponent"],
            _components_individual_innovator_view_individual_innovator_view_component__WEBPACK_IMPORTED_MODULE_20__["IndividualInnovatorViewComponent"],
            _components_solution_item_solution_item_component__WEBPACK_IMPORTED_MODULE_21__["SolutionItemComponent"],
            _provider_user_edit_provider_user_edit_component__WEBPACK_IMPORTED_MODULE_22__["ProviderUserEditComponent"],
            _components_provider_edit_profile_provider_edit_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProviderEditProfileComponent"],
            _components_startup_company_edit_startup_company_edit_component__WEBPACK_IMPORTED_MODULE_24__["StartupCompanyEditComponent"],
            _components_enterprise_company_edit_enterprise_company_edit_component__WEBPACK_IMPORTED_MODULE_25__["EnterpriseCompanyEditComponent"],
            _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_26__["ResetPasswordComponent"],
            _all_solutions_all_solutions_component__WEBPACK_IMPORTED_MODULE_27__["AllSolutionsComponent"],
            _components_draft_item_draft_item_component__WEBPACK_IMPORTED_MODULE_30__["DraftItemComponent"],
            _application_cataloging_application_cataloging_component__WEBPACK_IMPORTED_MODULE_31__["ApplicationCatalogingComponent"],
            _unsolicited_proposal_unsolicited_proposal_component__WEBPACK_IMPORTED_MODULE_32__["UnsolicitedProposalComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _provider_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProviderRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperModule"],
            _solution_solution_module__WEBPACK_IMPORTED_MODULE_9__["SolutionModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["NgMultiSelectDropDownModule"],
            _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_12__["WidgetsModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"],
        ],
        providers: [_solution_dirty_check_guard__WEBPACK_IMPORTED_MODULE_28__["SolutionDirtyCheckGuard"], _edit_solutions_editsolution_dirty_check_guard__WEBPACK_IMPORTED_MODULE_29__["EditsolutionDirtyCheckGuard"]],
    })
], ProviderModule);



/***/ }),

/***/ "./src/app/provider/solution-cataloging/solution-cataloging.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/provider/solution-cataloging/solution-cataloging.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-city-wrp {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.frg-flx-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.frg-flx-row .frg-flx-input-col {\r\n\tflex-basis: 88%;\r\n}\r\n\r\n.frg-flx-row .frg-flx-add-rm-row-btn {\r\n\tflex-basis: 7%;\r\n}\r\n\r\n.act-clr {\r\n\tcolor: #3b6fd4 !important;\r\n}\r\n\r\n.act-span {\r\n\tpadding: 3px 6px;\r\n\tborder: 1px solid #3b6fd4;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.add-form-wrapper {\r\n\tmax-width: 580px;\r\n\tmargin: 36px auto;\r\n}\r\n\r\n.step-wrapper {\r\n\tpadding: 36px;\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.files-upload-wrp {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n.files-upload-wrp app-citylogo-upload,\r\n.files-upload-wrp app-city-avatar-upload,\r\n.files-upload-wrp app-city-map-upload {\r\n\tflex-basis: 30%;\r\n}\r\n\r\n.back-btn-wrp {\r\n\tmargin-top: -18px;\r\n}\r\n\r\n.back-btn {\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.back-btn .disable {\r\n\topacity: 0;\r\n\tvisibility: visible;\r\n}\r\n\r\n.frg-multiselect-dropdown .multiselect-item-checkbox input[type=\"checkbox\"] + div:before {\r\n\tborder: 2px solid #7d7d7d !important;\r\n}\r\n\r\n.multiselect-item-checkbox input[type=\"checkbox\"]:checked + div:before {\r\n\tbackground: transparent !important;\r\n}\r\n\r\n.multiselect-item-checkbox input[type=\"checkbox\"] + div:after {\r\n\twidth: 7px !important;\r\n\theight: 2px !important;\r\n\tmargin-top: -4px !important;\r\n\tborder-style: solid;\r\n\tborder-color: #000000b8 !important;\r\n}\r\n\r\n.l-sol-catg-panel-grp .panel-heading {\r\n\tbackground: var(--white);\r\n}\r\n\r\n.l-sol-catg-acc-title {\r\n\tcolor: var(--black-clr);\r\n}\r\n\r\n.l-sol-catg-panel-grp .panel + .panel {\r\n\tmargin-top: 0px !important;\r\n}\r\n\r\n#l-sol-catg-acc-1 .panel-body {\r\n\tpadding: 0px !important ;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul {\r\n\tpadding-left: 0px;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n.l-sol-catg-panel-1 .panel-heading,\r\n.l-sol-catg-panel-2 .panel-heading {\r\n\tpadding: 16px 17px;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li > a {\r\n\tfont-size: 14px;\r\n\tline-height: 16px;\r\n\tpadding: 16px 17px;\r\n\tborder-radius: 0px;\r\n\tcolor: #999999 !important;\r\n\tfont-weight: 400;\r\n\tdisplay: block;\r\n}\r\n\r\n.l-sol-catg-acc-1-ul li a:hover,\r\n.l-sol-catg-acc-1-ul li a:active,\r\n.l-sol-catg-acc-1-ul li a:focus,\r\n.l-sol-catg-acc-1-ul li a.active {\r\n\tbackground-color: #efefef !important;\r\n\tcolor: #4f4f4f !important;\r\n}\r\n\r\n.l-sol-catg-panel-1 {\r\n\tbox-shadow: none !important;\r\n\tborder-bottom: 0px;\r\n\tborder-bottom-right-radius: 0px;\r\n\tborder-bottom-left-radius: 0px;\r\n}\r\n\r\n.l-sol-catg-panel-2 {\r\n\tborder-top-right-radius: 0px;\r\n\tborder-top-left-radius: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvc29sdXRpb24tY2F0YWxvZ2luZy9zb2x1dGlvbi1jYXRhbG9naW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBOEI7U0FBOUIsOEJBQThCO0NBQzlCLHlCQUFtQjtTQUFuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIseUJBQXlCO0NBQ3pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUE4QjtTQUE5Qiw4QkFBOEI7QUFDL0I7O0FBRUE7OztDQUdDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQ0FBeUI7Q0FBekIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFDQTtDQUNDLGtDQUFrQztBQUNuQzs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixrQ0FBa0M7QUFDbkM7O0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7O0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVTtBQUNYOztBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTs7OztDQUlDLG9DQUFvQztDQUNwQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLCtCQUErQjtDQUMvQiw4QkFBOEI7QUFDL0I7O0FBQ0E7Q0FDQyw0QkFBNEI7Q0FDNUIsMkJBQTJCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXIvc29sdXRpb24tY2F0YWxvZ2luZy9zb2x1dGlvbi1jYXRhbG9naW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWNpdHktd3JwIHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmZyZy1mbHgtcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZnJnLWZseC1yb3cgLmZyZy1mbHgtaW5wdXQtY29sIHtcclxuXHRmbGV4LWJhc2lzOiA4OCU7XHJcbn1cclxuXHJcbi5mcmctZmx4LXJvdyAuZnJnLWZseC1hZGQtcm0tcm93LWJ0biB7XHJcblx0ZmxleC1iYXNpczogNyU7XHJcbn1cclxuXHJcbi5hY3QtY2xyIHtcclxuXHRjb2xvcjogIzNiNmZkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0LXNwYW4ge1xyXG5cdHBhZGRpbmc6IDNweCA2cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzNiNmZkNDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5hZGQtZm9ybS13cmFwcGVyIHtcclxuXHRtYXgtd2lkdGg6IDU4MHB4O1xyXG5cdG1hcmdpbjogMzZweCBhdXRvO1xyXG59XHJcblxyXG4uc3RlcC13cmFwcGVyIHtcclxuXHRwYWRkaW5nOiAzNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmZpbGVzLXVwbG9hZC13cnAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZmlsZXMtdXBsb2FkLXdycCBhcHAtY2l0eWxvZ28tdXBsb2FkLFxyXG4uZmlsZXMtdXBsb2FkLXdycCBhcHAtY2l0eS1hdmF0YXItdXBsb2FkLFxyXG4uZmlsZXMtdXBsb2FkLXdycCBhcHAtY2l0eS1tYXAtdXBsb2FkIHtcclxuXHRmbGV4LWJhc2lzOiAzMCU7XHJcbn1cclxuXHJcbi5iYWNrLWJ0bi13cnAge1xyXG5cdG1hcmdpbi10b3A6IC0xOHB4O1xyXG59XHJcblxyXG4uYmFjay1idG4ge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5iYWNrLWJ0biAuZGlzYWJsZSB7XHJcblx0b3BhY2l0eTogMDtcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uZnJnLW11bHRpc2VsZWN0LWRyb3Bkb3duIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGRpdjpiZWZvcmUge1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICM3ZDdkN2QgIWltcG9ydGFudDtcclxufVxyXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGRpdjpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgZGl2OmFmdGVyIHtcclxuXHR3aWR0aDogN3B4ICFpbXBvcnRhbnQ7XHJcblx0aGVpZ2h0OiAycHggIWltcG9ydGFudDtcclxuXHRtYXJnaW4tdG9wOiAtNHB4ICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItY29sb3I6ICMwMDAwMDBiOCAhaW1wb3J0YW50O1xyXG59XHJcbi5sLXNvbC1jYXRnLXBhbmVsLWdycCAucGFuZWwtaGVhZGluZyB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG59XHJcbi5sLXNvbC1jYXRnLWFjYy10aXRsZSB7XHJcblx0Y29sb3I6IHZhcigtLWJsYWNrLWNscik7XHJcbn1cclxuLmwtc29sLWNhdGctcGFuZWwtZ3JwIC5wYW5lbCArIC5wYW5lbCB7XHJcblx0bWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI2wtc29sLWNhdGctYWNjLTEgLnBhbmVsLWJvZHkge1xyXG5cdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50IDtcclxufVxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCB7XHJcblx0cGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLXBhbmVsLTEgLnBhbmVsLWhlYWRpbmcsXHJcbi5sLXNvbC1jYXRnLXBhbmVsLTIgLnBhbmVsLWhlYWRpbmcge1xyXG5cdHBhZGRpbmc6IDE2cHggMTdweDtcclxufVxyXG5cclxuLmwtc29sLWNhdGctYWNjLTEtdWwgbGkgPiBhIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDE2cHg7XHJcblx0cGFkZGluZzogMTZweCAxN3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHRjb2xvcjogIzk5OTk5OSAhaW1wb3J0YW50O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIGE6aG92ZXIsXHJcbi5sLXNvbC1jYXRnLWFjYy0xLXVsIGxpIGE6YWN0aXZlLFxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCBsaSBhOmZvY3VzLFxyXG4ubC1zb2wtY2F0Zy1hY2MtMS11bCBsaSBhLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZiAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjNGY0ZjRmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLXNvbC1jYXRnLXBhbmVsLTEge1xyXG5cdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHRib3JkZXItYm90dG9tOiAwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn1cclxuLmwtc29sLWNhdGctcGFuZWwtMiB7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/provider/solution-cataloging/solution-cataloging.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/provider/solution-cataloging/solution-cataloging.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SolutionCatalogingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionCatalogingComponent", function() { return SolutionCatalogingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _solution_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solution.service */ "./src/app/provider/solution-cataloging/solution.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _discover_select_sector_select_sector_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../discover/select-sector/select-sector.service */ "./src/app/discover/select-sector/select-sector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");













let SolutionCatalogingComponent = class SolutionCatalogingComponent {
    constructor(_location, route, fb, _sol, toastr, router, _ss) {
        this._location = _location;
        this.route = route;
        this.fb = fb;
        this._sol = _sol;
        this.toastr = toastr;
        this.router = router;
        this._ss = _ss;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].server_url;
        this.loading = false;
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
        };
        this.sectorDropdownList = [];
        this.challengeDropdownList = [];
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
        this.cityAchievements = [];
        this.selectedChallengeSectors = [];
        this.selectedChallenges = [];
        this.tobeRemovedFilePaths = [];
        this.urlPattern = new RegExp("^(http|https)://");
        this.files = [];
        this.solutionGallery = [];
        this.goBackUrl = null;
        this.cataloguedFor = null;
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
        });
        this.route.queryParams.subscribe((params) => {
            // console.log(params.cataloguedFor);
            if (params.cataloguedFor) {
                this.cataloguedFor = JSON.parse(params.cataloguedFor);
                this.goBackUrl = `/challenge/${this.cataloguedFor.challengeId}`;
                // console.log(this.goBackUrl);
            }
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.initLoading = true;
            this.solutionStep1 = true;
            this.solutionStep2 = false;
            this.solutionStep3 = false;
            yield this.getChallengeSector();
            this.addSolutionStep1 = this.fb.group({
                solutionName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                challengeSectors: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                challenges: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                marketDomain: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                solutionBrief: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(700), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                valueProposition: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                tangibleBenefits: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
            });
            this.addSolutionStep2 = this.fb.group({
                solutionAdvantages: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                solutionReadiness: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                trackRecord: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                implementationTimeMonth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                implementationTimeWeeks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            });
            this.addSolutionStep3 = this.fb.group({
                ipStatus: [""],
                identificationNumber: [""],
                expertsInvolved: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(650), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                otherDetails: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500)]],
                video: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            });
            // pre selecting the challenge & sector
            if (this.cataloguedFor) {
                this.addSolutionStep1.patchValue({
                    challengeSectors: [{ item_id: this.cataloguedFor.sectorId, item_text: this.cataloguedFor.sectorName }],
                    challenges: [{ item_id: this.cataloguedFor.challengeId, item_text: this.cataloguedFor.challengeName }],
                });
                this.getChallengeBasedOnSector("");
            }
            this.initLoading = false;
        });
    }
    get addSolutionControlStep1() {
        return this.addSolutionStep1.controls;
    }
    get addSolutionControlStep2() {
        return this.addSolutionStep2.controls;
    }
    get addSolutionControlStep3() {
        return this.addSolutionStep3.controls;
    }
    gotoStep(step) {
        switch (step) {
            case "step1":
                this.solutionStep1 = true;
                this.solutionStep2 = false;
                this.solutionStep3 = false;
                window.scroll(0, 0);
                break;
            case "step2":
                this.solutionStep1 = false;
                this.solutionStep2 = true;
                this.solutionStep3 = false;
                window.scroll(0, 0);
                break;
            case "step3":
                this.solutionStep1 = false;
                this.solutionStep2 = false;
                this.solutionStep3 = true;
                window.scroll(0, 0);
                break;
        }
    }
    backClicked() {
        if (this.goBackUrl) {
            this.router.navigate([this.goBackUrl]);
        }
        else {
            if (window.history.length > 1) {
                window.history.back();
            }
            else {
                this.router.navigate([`/provider/user/${this.loggedInUser.slug}`]);
            }
        }
    }
    solutionStep1Submit() {
        this.isSubmitted.Step1 = true;
        if (this.addSolutionStep1.valid) {
            this.gotoStep("step2");
        }
        else {
            this.toastr.error("please provide the required values to proceed further.", "Validation Error");
        }
    }
    solutionStep2Submit() {
        this.isSubmitted.Step2 = true;
        if (this.addSolutionStep2.valid) {
            this.gotoStep("step3");
        }
        else {
            this.toastr.error("please provide the required values to proceed further.", "Validation Error");
        }
    }
    getChallengeSector() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.challengeSector = yield this._sol.getChallengeSectors();
                this.sectorIdsFollowedByUser = yield this._sol.getSectorIdsFollowedByUser(this.loggedInUser.userTypeId);
                this.challengeSector.data.forEach((element) => {
                    this.sectorDropdownList.push({
                        item_id: parseInt(element.id),
                        item_text: element.name,
                    });
                });
                this.dropdownSettings = {
                    singleSelection: false,
                    idField: "item_id",
                    textField: "item_text",
                    enableCheckAll: false,
                    allowSearchFilter: true,
                };
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    getChallengeBasedOnSector(sector) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.addSolutionStep1.controls.challengeSectors.markAsTouched();
            this.selectedChallenges = this.addSolutionStep1.value.challenges;
            this.challengeDropdownList = [];
            let idArr = this.addSolutionStep1.value.challengeSectors.map((el) => el.item_id);
            try {
                this.toastr.info("Fetching challenges based on sectors", "Info");
                this.challengeBasedOnSector = yield this._sol.getChallenges(idArr);
                this.challengeBasedOnSector.data.forEach((element) => {
                    this.challengeDropdownList = lodash__WEBPACK_IMPORTED_MODULE_6__["unionBy"](this.challengeDropdownList, [{ item_id: parseInt(element.id), item_text: element.name }], "item_id");
                });
                this.selectedChallenges = lodash__WEBPACK_IMPORTED_MODULE_6__["intersectionBy"](this.selectedChallenges, this.challengeDropdownList, "item_id");
                if (lodash__WEBPACK_IMPORTED_MODULE_6__["isArray"](this.selectedChallenges)) {
                    this.addSolutionStep1.patchValue({
                        challenges: this.selectedChallenges,
                    });
                }
                else {
                    this.addSolutionStep1.patchValue({
                        challenges: [this.selectedChallenges],
                    });
                }
                this.disableChallengeList = false;
                this.addSolutionStep1.controls.challengeSectors.markAsTouched();
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    saveSolution() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubmitted.Step3 = true;
            if (this.addSolutionStep1.valid && this.addSolutionStep2.valid && this.addSolutionStep3.valid) {
                this.loading = true;
                let solutionPostdata = {
                    status: "active",
                    name: this.addSolutionStep1.value.solutionName,
                    stage: "Pilot",
                    frg_provider_id: this.loggedInUser.userTypeId,
                    market_domain: this.addSolutionStep1.value.marketDomain,
                    solution_brief: this.addSolutionStep1.value.solutionBrief,
                    video_link: this.addSolutionStep3.value.video,
                    value_proposition: this.addSolutionStep1.value.valueProposition,
                    tangible_benifits: this.addSolutionStep1.value.tangibleBenefits,
                    solution_advantages: this.addSolutionStep2.value.solutionAdvantages,
                    solution_readiness: this.addSolutionStep2.value.solutionReadiness,
                    track_record: this.addSolutionStep2.value.trackRecord,
                    other_details: this.addSolutionStep3.value.otherDetails,
                    experts_involved: this.addSolutionStep3.value.expertsInvolved,
                    implementation_time: {
                        months: this.addSolutionStep2.value.implementationTimeMonth,
                        weeks: this.addSolutionStep2.value.implementationTimeWeeks,
                    },
                    ip_details: {
                        status: this.addSolutionStep3.value.ipStatus,
                        id_number: this.addSolutionStep3.value.identificationNumber,
                    },
                };
                try {
                    let responseData = yield this._sol.createNewSolution({ data: solutionPostdata });
                    yield Promise.all([this.uploadImages(responseData.data.id), this.associateChallengeSectors(responseData.data.id), this.associateChallenges(responseData.data.id)]).then((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        this.saveSectorArr();
                        yield this._sol.sendNotification(responseData.data.id);
                    }));
                    this.loading = false;
                    this.toastr.success("", "Solution added successfully");
                    this.resetForm();
                    this.router.navigate([`/provider/user/${this.loggedInUser.slug}/solution/${responseData.data.id}`]);
                }
                catch (err) {
                    console.log(err);
                    this.toastr.error("", "Something went wrong please try again");
                }
            }
            else {
                this.toastr.error("please provide the required values to proceed further.", "Validation Error");
            }
        });
    }
    uploadImages(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.solutionGallery.length > 0) {
                let formData = new FormData();
                formData.append("slug", id);
                this.solutionGallery.forEach((file) => {
                    formData.append("images", file);
                });
                yield this._sol.uploadImages(formData);
            }
        });
    }
    associateChallenges(solutionId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.addSolutionStep1.value.challenges.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this._sol.addChallenges({
                    data: {
                        frg_challenge_id: element.item_id,
                        frg_solution_id: solutionId,
                    },
                });
            }));
        });
    }
    associateChallengeSectors(solutionId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.addSolutionStep1.value.challengeSectors.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this._sol.addChallengeSectors({
                    data: {
                        frg_challenge_sector_id: element.item_id,
                        frg_solution_id: solutionId,
                    },
                });
            }));
        });
    }
    handleSaveGallery(files) {
        this.solutionGallery = files;
    }
    viewProviderProfile() {
        this.router.navigate(["/provider/user/" + this.loggedInUser.slug]);
    }
    viewSolutions() {
        this.router.navigate(["provider/user/" + this.loggedInUser.slug + "/all-solutions"]);
    }
    editSolution(sol_id) {
        // user/:slug/solution/:id/edit
        this.router.navigate(["/provider/user/" + this.loggedInUser.slug + "/solution/" + sol_id + "/edit"]);
    }
    prepareSelectedSectorArr() {
        var tmp_arr = [];
        return new Promise((resolve, reject) => {
            lodash__WEBPACK_IMPORTED_MODULE_6__["each"](this.addSolutionStep1.value.challengeSectors, (itm, idx) => {
                var index = lodash__WEBPACK_IMPORTED_MODULE_6__["indexOf"](this.sectorIdsFollowedByUser, itm.item_id);
                if (index == -1) {
                    tmp_arr.push(itm.item_id);
                }
                if (this.addSolutionStep1.value.challengeSectors.length == idx + 1) {
                    resolve(tmp_arr);
                }
            });
        });
    }
    saveSectorArr() {
        var sector_post_data = {};
        var temp_arr = [];
        return new Promise((resolve, reject) => {
            this.prepareSelectedSectorArr().then((data) => {
                lodash__WEBPACK_IMPORTED_MODULE_6__["each"](data, (itm, idx) => {
                    if (this.loggedInUser.userType == "provider") {
                        sector_post_data = {
                            frg_challenge_sector_id: itm,
                            frg_provider_id: this.loggedInUser.userTypeId,
                        };
                        temp_arr.push(sector_post_data);
                    }
                    if (data.length == temp_arr.length) {
                        if (this.loggedInUser.userType == "provider") {
                            this._ss.saveSelectedSectorAPI("provider", temp_arr).subscribe((resp) => {
                                if (resp.status == true) {
                                    this.toastr.success("", "Sectors added successfully");
                                    resolve();
                                }
                            });
                        }
                    }
                });
            });
        });
    }
    saveAsDraft() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.addSolutionStep1.valid && this.addSolutionStep2.valid && this.addSolutionStep3.valid) {
                this.draftLoading = true;
                let solutionPostdata = {
                    status: "draft",
                    name: this.addSolutionStep1.value.solutionName,
                    stage: "Pilot",
                    frg_provider_id: this.loggedInUser.userTypeId,
                    market_domain: this.addSolutionStep1.value.marketDomain,
                    solution_brief: this.addSolutionStep1.value.solutionBrief,
                    video_link: this.addSolutionStep3.value.video,
                    value_proposition: this.addSolutionStep1.value.valueProposition,
                    tangible_benifits: this.addSolutionStep1.value.tangibleBenefits,
                    solution_advantages: this.addSolutionStep2.value.solutionAdvantages,
                    solution_readiness: this.addSolutionStep2.value.solutionReadiness,
                    track_record: this.addSolutionStep2.value.trackRecord,
                    other_details: this.addSolutionStep3.value.otherDetails,
                    experts_involved: this.addSolutionStep3.value.expertsInvolved,
                    implementation_time: {
                        months: this.addSolutionStep2.value.implementationTimeMonth,
                        weeks: this.addSolutionStep2.value.implementationTimeWeeks,
                    },
                    ip_details: {
                        status: this.addSolutionStep3.value.ipStatus,
                        id_number: this.addSolutionStep3.value.identificationNumber,
                    },
                };
                try {
                    let responseData = yield this._sol.createNewSolution({ data: solutionPostdata });
                    yield Promise.all([this.uploadImages(responseData.data.id), this.associateChallengeSectors(responseData.data.id), this.associateChallenges(responseData.data.id)]);
                    this.draftLoading = false;
                    this.resetForm();
                    $("#confirmDialog").modal("hide");
                    this.toastr.success("", "Solution saved as draft");
                    this.router.navigate([`/provider/user/${this.loggedInUser.slug}/all-solutions`]);
                }
                catch (err) {
                    console.log(err);
                    this.toastr.error("", "Something went wrong please try again");
                }
            }
            else {
                this.isSubmitted.Step1 = false;
                this.isSubmitted.Step2 = true;
                this.isSubmitted.Step3 = true;
                this.toastr.warning("All mandatory fields has to be filled before saving as draft", "Mandatory fields required");
            }
        });
    }
    ConfirmLeaveComponent() {
        $("#confirmDialog").modal("show");
    }
    handleGoBack(action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (action === "save") {
                yield this.saveAsDraft();
            }
            else {
                this.resetForm();
                $("#confirmDialog").modal("hide");
                this.backClicked();
            }
        });
    }
    resetForm() {
        this.addSolutionStep1.reset();
        this.addSolutionStep2.reset();
        this.addSolutionStep3.reset();
        this.addSolutionStep1.markAsPristine();
        this.addSolutionStep2.markAsPristine();
        this.addSolutionStep3.markAsPristine();
    }
};
SolutionCatalogingComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _solution_service__WEBPACK_IMPORTED_MODULE_2__["SolutionService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _discover_select_sector_select_sector_service__WEBPACK_IMPORTED_MODULE_9__["SelectSectorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_12__["LoggedInUserState"])
], SolutionCatalogingComponent.prototype, "loggedInUser$", void 0);
SolutionCatalogingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-solution-cataloging",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./solution-cataloging.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/solution-cataloging/solution-cataloging.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./solution-cataloging.component.css */ "./src/app/provider/solution-cataloging/solution-cataloging.component.css")).default]
    })
], SolutionCatalogingComponent);



/***/ }),

/***/ "./src/app/provider/solution-cataloging/solution.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/provider/solution-cataloging/solution.service.ts ***!
  \******************************************************************/
/*! exports provided: SolutionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionService", function() { return SolutionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let SolutionService = class SolutionService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    getChallengeSectors() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/challenge_sectors/select_mul", {
                pg: {
                    offset: 0,
                    limit: 200,
                },
                filter: {
                    status: 'active'
                }
            })
                .toPromise();
        });
    }
    getChallenges(sectorId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/challenges/select_mul", {
                filter: {
                    frg_challenge_sector_id: sectorId,
                    status: 'active'
                },
                pg: {
                    offset: 0,
                    limit: 200,
                },
            })
                .toPromise();
        });
    }
    createNewSolution(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/solutions/create", postData).toPromise();
        });
    }
    uploadSolutionImages(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/solutions/uploads", formData).toPromise();
        });
    }
    uploadImages(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/solutions/uploads", postData).toPromise();
        });
    }
    addChallenges(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/solutions_challenges/create", data).toPromise();
        });
    }
    addChallengeSectors(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/solutions_challenge_sectors/create", data).toPromise();
        });
    }
    sendNotification(solutionId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/solutions/new_solution_notification", {
                slug: { id: solutionId },
            })
                .toPromise();
        });
    }
    getSectorIdsFollowedByUser(innovatorId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let resp = yield this.http
                .post(this.api_url + "/challenge_sectors_and_providers/select_mul", {
                filter: {
                    frg_provider_id: innovatorId,
                },
            })
                .toPromise();
            let sectorIds = resp.data.map((e) => e.frg_challenge_sector_id);
            return sectorIds;
        });
    }
};
SolutionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SolutionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], SolutionService);



/***/ }),

/***/ "./src/app/provider/solution-dirty-check.guard.ts":
/*!********************************************************!*\
  !*** ./src/app/provider/solution-dirty-check.guard.ts ***!
  \********************************************************/
/*! exports provided: SolutionDirtyCheckGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionDirtyCheckGuard", function() { return SolutionDirtyCheckGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SolutionDirtyCheckGuard = class SolutionDirtyCheckGuard {
    canDeactivate(component, next, router) {
        if (component.addSolutionStep1.dirty || component.addSolutionStep2.dirty || component.addSolutionStep3.dirty) {
            component.ConfirmLeaveComponent();
        }
        else {
            return true;
        }
    }
};
SolutionDirtyCheckGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], SolutionDirtyCheckGuard);



/***/ }),

/***/ "./src/app/provider/solution/solution.component.css":
/*!**********************************************************!*\
  !*** ./src/app/provider/solution/solution.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".eoi-modal .modal-dialog {\r\n\twidth: 600px;\r\n}\r\n\r\n.pilot-modal .modal-dialog {\r\n\twidth: 950px;\r\n}\r\n\r\n.eoi-modal .modal-content,\r\n.pilot-modal .modal-content {\r\n\tpadding: 36px 36px;\r\n\tbox-shadow: none;\r\n\tborder: none;\r\n}\r\n\r\n.eoi-step-form-wrp {\r\n\tmax-width: 460px;\r\n\tmargin: auto;\r\n}\r\n\r\n.pilot-modal .close {\r\n\tfont-size: 23px !important;\r\n\tposition: absolute;\r\n\tright: 30px;\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid;\r\n\tz-index: 10;\r\n\tpadding: 2px 6px;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.pilot-doc {\r\n\tmargin-top: 8px;\r\n\tpadding: 12px 15px;\r\n\tdisplay: inline-block;\r\n\tfont-size: 14px;\r\n\tcolor: var(--black5);\r\n\tborder: 1px solid var(--grey-clr);\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.pilot-doc span:nth-child(1) {\r\n\tpadding-right: 8px;\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.pilot-doc span:nth-child(2) {\r\n\tfont-weight: 600;\r\n\tcursor: pointer;\r\n}\r\n\r\n.reports-wrp {\r\n\tpadding: 10px;\r\n\tborder: 1px solid var(--grey-clr);\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.reports-wrp .lable {\r\n\tmargin-top: -20px;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.reports-wrp .lable > span {\r\n\tbackground-color: var(--white);\r\n\tfont-size: 16px;\r\n\tcolor: var(--grey-clr);\r\n\tfont-weight: 500;\r\n\tpadding: 0 6px;\r\n}\r\n\r\n.report-downloads {\r\n\tmin-height: 500px;\r\n}\r\n\r\n.report-download-item {\r\n\tpadding: 15px;\r\n\tborder: 1px solid var(--primary-clr);\r\n\tborder-radius: 6px;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.report-download-item .row .col-sm-6:nth-child(1) span {\r\n\tfont-size: 14px;\r\n\tcolor: var(--black6);\r\n\ttext-decoration: underline;\r\n\tmin-height: 2.5rem;\r\n\tdisplay: block;\r\n}\r\n\r\n.report-download-item .row .col-sm-6:nth-child(2) span {\r\n\tfont-size: 14px;\r\n\tcolor: var(--black5);\r\n\tdisplay: block;\r\n\ttext-align: right;\r\n\tfont-weight: 500;\r\n\tcursor: pointer;\r\n}\r\n\r\n.image-placeholder {\r\n\twidth: 514px;\r\n\theight: 514px;\r\n\tbackground-color: #b7b7b7;\r\n}\r\n\r\n.solution-wrapper {\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 6px;\r\n\toverflow: hidden;\r\n}\r\n\r\n.solution-header {\r\n\tpadding: 18px;\r\n\tbackground: rgb(222, 222, 222, 0.5);\r\n\tborder-bottom: 1px solid #dedede;\r\n}\r\n\r\n.title {\r\n\tfont-weight: 500;\r\n\tfont-size: 16px;\r\n\tline-height: 19px;\r\n}\r\n\r\n.description {\r\n\tfont-weight: 400;\r\n\tfont-size: 14px;\r\n\tline-height: 20px;\r\n}\r\n\r\n.solution-body {\r\n\tpadding: 18px;\r\n}\r\n\r\n.loader-wrp {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\tmin-height: 100vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvc29sdXRpb24vc29sdXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLG9CQUFvQjtDQUNwQixpQ0FBaUM7Q0FDakMsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGlDQUFpQztDQUNqQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixvQ0FBb0M7Q0FDcEMsa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIsMEJBQTBCO0NBQzFCLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUNBQW1DO0NBQ25DLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix3QkFBdUI7U0FBdkIsdUJBQXVCO0NBQ3ZCLHlCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXIvc29sdXRpb24vc29sdXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lb2ktbW9kYWwgLm1vZGFsLWRpYWxvZyB7XHJcblx0d2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4ucGlsb3QtbW9kYWwgLm1vZGFsLWRpYWxvZyB7XHJcblx0d2lkdGg6IDk1MHB4O1xyXG59XHJcblxyXG4uZW9pLW1vZGFsIC5tb2RhbC1jb250ZW50LFxyXG4ucGlsb3QtbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDM2cHggMzZweDtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmVvaS1zdGVwLWZvcm0td3JwIHtcclxuXHRtYXgtd2lkdGg6IDQ2MHB4O1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnBpbG90LW1vZGFsIC5jbG9zZSB7XHJcblx0Zm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAzMHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRib3JkZXI6IDFweCBzb2xpZDtcclxuXHR6LWluZGV4OiAxMDtcclxuXHRwYWRkaW5nOiAycHggNnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLnBpbG90LWRvYyB7XHJcblx0bWFyZ2luLXRvcDogOHB4O1xyXG5cdHBhZGRpbmc6IDEycHggMTVweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGNvbG9yOiB2YXIoLS1ibGFjazUpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktY2xyKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucGlsb3QtZG9jIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5waWxvdC1kb2Mgc3BhbjpudGgtY2hpbGQoMikge1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmVwb3J0cy13cnAge1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1jbHIpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5yZXBvcnRzLXdycCAubGFibGUge1xyXG5cdG1hcmdpbi10b3A6IC0yMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5yZXBvcnRzLXdycCAubGFibGUgPiBzcGFuIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGNvbG9yOiB2YXIoLS1ncmV5LWNscik7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRwYWRkaW5nOiAwIDZweDtcclxufVxyXG5cclxuLnJlcG9ydC1kb3dubG9hZHMge1xyXG5cdG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4ucmVwb3J0LWRvd25sb2FkLWl0ZW0ge1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jbHIpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucmVwb3J0LWRvd25sb2FkLWl0ZW0gLnJvdyAuY29sLXNtLTY6bnRoLWNoaWxkKDEpIHNwYW4ge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogdmFyKC0tYmxhY2s2KTtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRtaW4taGVpZ2h0OiAyLjVyZW07XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5yZXBvcnQtZG93bmxvYWQtaXRlbSAucm93IC5jb2wtc20tNjpudGgtY2hpbGQoMikgc3BhbiB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGNvbG9yOiB2YXIoLS1ibGFjazUpO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1hZ2UtcGxhY2Vob2xkZXIge1xyXG5cdHdpZHRoOiA1MTRweDtcclxuXHRoZWlnaHQ6IDUxNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNiN2I3Yjc7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi13cmFwcGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc29sdXRpb24taGVhZGVyIHtcclxuXHRwYWRkaW5nOiAxOHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYigyMjIsIDIyMiwgMjIyLCAwLjUpO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uc29sdXRpb24tYm9keSB7XHJcblx0cGFkZGluZzogMThweDtcclxufVxyXG5cclxuLmxvYWRlci13cnAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/provider/solution/solution.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/provider/solution/solution.component.ts ***!
  \*********************************************************/
/*! exports provided: SolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionComponent", function() { return SolutionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_solutions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/solutions.service */ "./src/app/services/solutions.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _profile_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile-info.service */ "./src/app/provider/profile-info.service.ts");








let SolutionComponent = class SolutionComponent {
    constructor(route, solutions, router, toastr, profileDataService) {
        this.route = route;
        this.solutions = solutions;
        this.router = router;
        this.toastr = toastr;
        this.profileDataService = profileDataService;
        this.server_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url;
        this.imagesLoading = true;
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
            Step4: false,
            Step5: false,
            Step6: false,
        };
        this.eoiForm = {
            Step1: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"],
            Step2: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"],
            Step3: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"],
            Step4: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"],
            Step5: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"],
            Step6: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"],
        };
        this.route.params.subscribe((params) => {
            this.id = params.id;
            this.userSlug = params.slug;
        });
    }
    ngOnInit() {
        // this.eoiStep1 = false;
        // this.eoiStep2 = true;
        // this.eoiStep3 = true;
        // this.eoiStep4 = true;
        // this.eoiStep5 = true;
        // this.eoiStep6 = true;
        // this.backToStep = "step1";
        // this.eoiForm = {
        // 	Step1: this.fb.group({
        // 		state: [""],
        // 		city: [""],
        // 		pincode: [""],
        // 	}),
        // };
        this.getSolution();
    }
    // get formControlStep1() {
    // 	return this.eoiForm.Step1.controls;
    // }
    // get formControlStep2() {
    // 	return this.eoiForm.Step2.controls;
    // }
    // get formControlStep3() {
    // 	return this.eoiForm.Step3.controls;
    // }
    // get formControlStep4() {
    // 	return this.eoiForm.Step4.controls;
    // }
    // get formControlStep5() {
    // 	return this.eoiForm.Step5.controls;
    // }
    // get formControlStep6() {
    // 	return this.eoiForm.Step6.controls;
    // }
    getSolution() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.loading = true;
                this.solution = yield this.solutions.getSolutionbyId(this.id);
                this.profileData = yield this.profileDataService.getProfile(this.userSlug);
                this.loading = false;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    goBack() {
        if (window.history.length > 1) {
            // this.location.back();
            this.router.navigate([`/provider/user/${this.userSlug}`]);
        }
        else {
            this.router.navigate(["/discover/solutions"]);
        }
    }
    generateFake(count) {
        const indexes = [];
        for (let i = 0; i < count; i++) {
            indexes.push(i);
        }
        return indexes;
    }
};
SolutionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_solutions_service__WEBPACK_IMPORTED_MODULE_3__["SolutionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _profile_info_service__WEBPACK_IMPORTED_MODULE_7__["ProfileInfoService"] }
];
SolutionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-solution",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./solution.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/solution/solution.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./solution.component.css */ "./src/app/provider/solution/solution.component.css")).default]
    })
], SolutionComponent);



/***/ }),

/***/ "./src/app/provider/unsolicited-proposal/unsolicited-proposal.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/provider/unsolicited-proposal/unsolicited-proposal.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".a-add-challenge-wrp {\r\n    max-width: 580px;\r\n    margin: auto;\r\n    padding: 36px;\r\n    border-radius: 6px;\r\n    border: 1px solid #DEDEDE;\r\n}\r\n.upload-wrapper {\r\n\tborder-radius: 4px;\r\n\toverflow: hidden;\r\n}\r\n.add-doc input[type=\"file\"] {\r\n\tdisplay: none;\r\n}\r\n.add-doc label {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 4px;\r\n\tcursor: pointer;\r\n\tpadding: 10px 15px;\r\n}\r\n.add-doc label {\r\n\tcolor: #2d9851;\r\n\tfont-weight: 500;\r\n}\r\n.file-item {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\tpadding: 8px;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 4px;\r\n\tfont-size: 12px;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\tmargin-bottom: 6px;\r\n}\r\n.file-col {\r\n\tcolor: #4f4f4f;\r\n\tpadding-right: 5px;\r\n\tflex-basis: 80%;\r\n}\r\n.file-col i {\r\n\tfont-size: 14px;\r\n\tmargin-right: 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvdW5zb2xpY2l0ZWQtcHJvcG9zYWwvdW5zb2xpY2l0ZWQtcHJvcG9zYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IseUJBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQix3QkFBdUI7U0FBdkIsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLHlCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkIseUJBQThCO1NBQTlCLDhCQUE4QjtDQUM5QixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL3Vuc29saWNpdGVkLXByb3Bvc2FsL3Vuc29saWNpdGVkLXByb3Bvc2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYS1hZGQtY2hhbGxlbmdlLXdycCB7XHJcbiAgICBtYXgtd2lkdGg6IDU4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMzZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbn1cclxuLnVwbG9hZC13cmFwcGVyIHtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFkZC1kb2MgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmFkZC1kb2MgbGFiZWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0cGFkZGluZzogMTBweCAxNXB4O1xyXG59XHJcblxyXG4uYWRkLWRvYyBsYWJlbCB7XHJcblx0Y29sb3I6ICMyZDk4NTE7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uZmlsZS1pdGVtIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBhZGRpbmc6IDhweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0bWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uZmlsZS1jb2wge1xyXG5cdGNvbG9yOiAjNGY0ZjRmO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHRmbGV4LWJhc2lzOiA4MCU7XHJcbn1cclxuXHJcbi5maWxlLWNvbCBpIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/provider/unsolicited-proposal/unsolicited-proposal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/provider/unsolicited-proposal/unsolicited-proposal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UnsolicitedProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsolicitedProposalComponent", function() { return UnsolicitedProposalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_challenge_create_challenge_create_challenge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/challenge/create-challenge/create-challenge.service */ "./src/app/challenge/create-challenge/create-challenge.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _unsolicited_proposal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unsolicited-proposal.service */ "./src/app/provider/unsolicited-proposal/unsolicited-proposal.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let UnsolicitedProposalComponent = class UnsolicitedProposalComponent {
    constructor(formBuilder, _challenge, toastr, _ups, router) {
        this.formBuilder = formBuilder;
        this._challenge = _challenge;
        this.toastr = toastr;
        this._ups = _ups;
        this.router = router;
        this.isSubmitted = false;
        this.isLoading = false;
        this.fileArr = [];
        this.uns_prop_files = [];
        this.loggedInUser$.subscribe((resp) => {
            this.loggedInUser = resp.LoggedInUser;
        });
    }
    ngOnInit() {
        this.getChallengeSectors();
        this.getSmartCities();
        this.unsolicitedProposal = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            challenge_sector: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    get formControlStep() {
        return this.unsolicitedProposal.controls;
    }
    getChallengeSectors() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.challengeSectors = yield this._challenge.getChallengeSectors();
            }
            catch (err) {
                console.log(err);
                this.toastr.error("Something went wrong please try again", "Error");
            }
        });
    }
    getSmartCities() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let res = yield this._ups.getSmartCities();
                this.smartCities = res.data;
            }
            catch (err) {
                this.toastr.error("Something went wrong please try again", "Error");
            }
        });
    }
    extractFileName(path) {
        let filename = path.replace(/^.*[\\\/]/, "");
        return filename;
    }
    onFileChange(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (var i = 0; i < event.target.files.length; i++) {
                this.uns_prop_files.push(event.target.files[i]);
            }
            this.fileNameArr = this.uns_prop_files.map((d) => this.extractFileName(d.name));
        });
    }
    removeFile(index) {
        this.uns_prop_files.splice(index, 1);
        this.fileNameArr = this.uns_prop_files.map((d) => this.extractFileName(d.name));
    }
    savePropsal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.unsolicitedProposal.valid && this.uns_prop_files.length) {
                this.isLoading = true;
                var post_data = {
                    data: {
                        name: this.unsolicitedProposal.value.name,
                        frg_challenge_sector_id: this.unsolicitedProposal.value.challenge_sector,
                        uns_proposal: true,
                        chall_status: "active",
                        frg_smart_city_id: this.unsolicitedProposal.value.city,
                        un_status: "pending",
                        frg_provider_id: this.loggedInUser.userTypeId
                    }
                };
                let resp = yield this._ups.createChallengeSmartcityAsscoiation(post_data);
                if (resp.status == true) {
                    this.uploadImages(resp.unp_data.id);
                    this.toastr.success('', 'Unsolicited Proposal Created Successfully');
                    this.router.navigate(["/provider/user/" + this.loggedInUser.slug + "/dashboard/all-applications"]);
                }
                else {
                    this.toastr.error(resp.msg, "Error");
                }
            }
            else {
                this.toastr.error('', 'Please fill all the fields');
            }
        });
    }
    uploadImages(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.uns_prop_files.length > 0) {
                let formData = new FormData();
                formData.append("slug", id);
                this.uns_prop_files.forEach((file) => {
                    formData.append("uns_files", file);
                });
                yield this._ups.uploadImages(formData);
            }
        });
    }
};
UnsolicitedProposalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_challenge_create_challenge_create_challenge_service__WEBPACK_IMPORTED_MODULE_3__["CreateChallengeService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _unsolicited_proposal_service__WEBPACK_IMPORTED_MODULE_5__["unsolicitedProposalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserState"])
], UnsolicitedProposalComponent.prototype, "loggedInUser$", void 0);
UnsolicitedProposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unsolicited-proposal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unsolicited-proposal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/unsolicited-proposal/unsolicited-proposal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unsolicited-proposal.component.css */ "./src/app/provider/unsolicited-proposal/unsolicited-proposal.component.css")).default]
    })
], UnsolicitedProposalComponent);



/***/ }),

/***/ "./src/app/provider/unsolicited-proposal/unsolicited-proposal.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/provider/unsolicited-proposal/unsolicited-proposal.service.ts ***!
  \*******************************************************************************/
/*! exports provided: unsolicitedProposalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsolicitedProposalService", function() { return unsolicitedProposalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let unsolicitedProposalService = class unsolicitedProposalService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    getSmartCities() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/smart_cities/select_mul", {
                pg: {
                    offset: 0,
                    limit: 200,
                },
                filter: {
                    status: 'active'
                }
            })
                .toPromise();
        });
    }
    createChallenge(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/challenges/create`, postData).toPromise();
        });
    }
    createChallengeSmartcityAsscoiation(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/unsolicited_proposal/create_chall_smart_uns_prop `, postData).toPromise();
        });
    }
    associateChallengewithCity(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var post_data = {
                data: {
                    frg_challenge_id: postData.frg_challenge_id,
                    frg_smart_city_id: postData.frg_smart_city_id,
                    uns_proposal: true
                }
            };
            // console.log(post_data)
            return yield this.http.post(this.api_url + "/challenges_and_smart_cities/create", post_data).toPromise();
        });
    }
    createUnsolProposal(post_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/unsolicited_proposal/create", post_data).toPromise();
        });
    }
    uploadImages(post_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/unsolicited_proposal/uns_file_upload", post_data).toPromise();
        });
    }
};
unsolicitedProposalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
unsolicitedProposalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], unsolicitedProposalService);



/***/ }),

/***/ "./src/app/register/provider/enterprise/enterprise.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/register/provider/enterprise/enterprise.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-wrp{\r\n    max-width:520px;\r\n    margin-left: auto;\r\n    margin-right:auto;\r\n    box-shadow: 5px 5px 20px rgba(172, 177, 193, 0.4);\r\n    border-radius: 10px;\r\n}\r\n\r\n.card-wrp.otp{\r\n    max-width:600px;\r\n}\r\n\r\n.card-wrp .back-login{\r\n    border-bottom-right-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n}\r\n\r\n.verification-code-wrp{\r\n    max-width:240px;\r\n    margin: auto;\r\n}\r\n\r\n.verification-code-wrp input{\r\n    border: 1px solid #C2C7C8;\r\n    width:100%;\r\n}\r\n\r\n.section-loader {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #ffffff73;\r\n  }\r\n\r\n.loader-wrp {\r\n    display: table;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n.loader-inner {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcHJvdmlkZXIvZW50ZXJwcmlzZS9lbnRlcnByaXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpREFBaUQ7SUFDakQsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcHJvdmlkZXIvZW50ZXJwcmlzZS9lbnRlcnByaXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC13cnB7XHJcbiAgICBtYXgtd2lkdGg6NTIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMTcyLCAxNzcsIDE5MywgMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXdycC5vdHB7XHJcbiAgICBtYXgtd2lkdGg6NjAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXdycCAuYmFjay1sb2dpbntcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnZlcmlmaWNhdGlvbi1jb2RlLXdycHtcclxuICAgIG1heC13aWR0aDoyNDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnZlcmlmaWNhdGlvbi1jb2RlLXdycCBpbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMkM3Qzg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi5zZWN0aW9uLWxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3MztcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRlci13cnAge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRlci1pbm5lciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/register/provider/enterprise/enterprise.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/register/provider/enterprise/enterprise.component.ts ***!
  \**********************************************************************/
/*! exports provided: EnterpriseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseComponent", function() { return EnterpriseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _seekers_seekers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../seekers/seekers.service */ "./src/app/register/seekers/seekers.service.ts");
/* harmony import */ var _startup_startup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../startup/startup.service */ "./src/app/register/provider/startup/startup.service.ts");
/* harmony import */ var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/customvalidation.service */ "./src/app/services/customvalidation.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);










let EnterpriseComponent = class EnterpriseComponent {
    constructor(_ss, _sts, toastr, router, customValidator, fb) {
        this._ss = _ss;
        this._sts = _sts;
        this.toastr = toastr;
        this.router = router;
        this.customValidator = customValidator;
        this.fb = fb;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__;
        this.enterprise_frm = {};
        this.enterpriseForm = {
            Step1: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
            Step2: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
            Step3: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
            Step4: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
            Step5: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"],
        };
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
            Step4: false,
            Step5: false,
        };
        this.verifyingOTP = false;
        this.loading = false;
        this.isLogoUploaded = false;
        this.yearArr = lodash__WEBPACK_IMPORTED_MODULE_9__["range"](1950, new Date().getFullYear() + 1);
        this.resendCodeLoading = false;
        this.userAchievements = [];
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
        this.enterprise_stp_1 = false;
        this.enterprise_stp_2 = true;
        this.enterprise_stp_3 = true;
        this.enterprise_stp_4 = true;
        this.enterprise_stp_5 = true;
        this.enterprise_frm.digit = {};
        this.initLoading = true;
        this._sts.listLocations().subscribe((resp) => {
            this.initLoading = false;
            this.locations = resp.data;
        });
        this.enterpriseForm = {
            Step1: this.fb.group({
                fullname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z .]*")]],
                email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email], this.customValidator.emailAvailabilityValidator.bind(this.customValidator)],
                phnum: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")], this.customValidator.phoneAvailabilityValidator.bind(this.customValidator)],
                location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            }),
            Step2: this.fb.group({
                enterprise_company_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?! )(?!.* $)[a-zA-Z0-9&-. ()-]+$")]],
                enterprise_company_url: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(www.)?[a-z0-9.]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$")]],
                enterprise_company_phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")]],
                enterprise_incorporation_year: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]],
                enterprise_company_brief: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                dipp_num: [""],
            }),
            Step3: this.fb.group({
                enterprise_founders: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                enterprise_company_size: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                enterprise_annual_revenue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                enterprise_expertises: [""],
            }),
            Step4: this.fb.group({
                password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$")]],
                confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            }, { validator: this.customValidator.MatchPassword("password", "confirmPassword") }),
            Step5: this.fb.group({
                otp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            }),
        };
    }
    get formControlStep1() {
        return this.enterpriseForm.Step1.controls;
    }
    get formControlStep2() {
        return this.enterpriseForm.Step2.controls;
    }
    get formControlStep3() {
        return this.enterpriseForm.Step3.controls;
    }
    get formControlStep4() {
        return this.enterpriseForm.Step4.controls;
    }
    get formControlStep5() {
        return this.enterpriseForm.Step5.controls;
    }
    onSubmit(formIndex) {
        switch (formIndex) {
            case "Step1": {
                this.isSubmitted.Step1 = true;
                break;
            }
            case "Step2": {
                this.isSubmitted.Step2 = true;
                break;
            }
            case "Step3": {
                this.isSubmitted.Step3 = true;
                break;
            }
            case "Step4": {
                this.isSubmitted.Step4 = true;
                break;
            }
            case "Step5": {
                this.isSubmitted.Step5 = true;
                break;
            }
        }
    }
    gotoStep(step) {
        switch (step) {
            case "step1": {
                this.enterprise_stp_1 = false;
                this.enterprise_stp_2 = true;
                this.enterprise_stp_3 = true;
                this.enterprise_stp_4 = true;
                this.enterprise_stp_5 = true;
                break;
            }
            case "step2": {
                this.enterprise_stp_1 = true;
                this.enterprise_stp_2 = false;
                this.enterprise_stp_3 = true;
                this.enterprise_stp_4 = true;
                this.enterprise_stp_5 = true;
                break;
            }
            case "step3": {
                this.enterprise_stp_1 = true;
                this.enterprise_stp_2 = true;
                this.enterprise_stp_3 = false;
                this.enterprise_stp_4 = true;
                this.enterprise_stp_5 = true;
                break;
            }
            case "step4": {
                this.enterprise_stp_1 = true;
                this.enterprise_stp_2 = true;
                this.enterprise_stp_3 = true;
                this.enterprise_stp_4 = false;
                this.enterprise_stp_5 = true;
                break;
            }
            case "step5": {
                this.enterprise_stp_1 = true;
                this.enterprise_stp_2 = true;
                this.enterprise_stp_3 = true;
                this.enterprise_stp_4 = true;
                this.enterprise_stp_5 = false;
                break;
            }
        }
    }
    ShowNextStep(step) {
        if (step == "step2" && this.enterpriseForm.Step1.valid) {
            this.enterprise_stp_1 = true;
            this.enterprise_stp_2 = false;
        }
        else if (step == "step3" && this.enterpriseForm.Step2.valid) {
            if (this.companyLogo) {
                this.isLogoUploaded = false;
                this.enterprise_stp_2 = true;
                this.enterprise_stp_3 = false;
            }
            else {
                this.isLogoUploaded = true;
                this.toastr.error("", "Please provide the required values to proceed further");
            }
        }
        else if (step == "step4" && this.enterpriseForm.Step3.valid) {
            this.enterprise_stp_3 = true;
            this.enterprise_stp_4 = false;
        }
        else if (step == "step5" && this.enterpriseForm.Step4.valid) {
            this.enterprise_stp_4 = true;
            this.enterprise_stp_5 = false;
        }
        else {
            this.toastr.error("", "Please provide the required values to proceed further");
        }
    }
    ShowPreviousStep(step) {
        if (step == "step2") {
            this.enterprise_stp_1 = false;
            this.enterprise_stp_2 = true;
        }
        else if (step == "step3") {
            this.enterprise_stp_2 = false;
            this.enterprise_stp_3 = true;
        }
        else if (step == "step4") {
            this.enterprise_stp_3 = false;
            this.enterprise_stp_4 = true;
        }
    }
    handleAchievementChanges(achievementData) {
        this.userAchievements = achievementData;
    }
    saveUser() {
        if (this.enterpriseForm.Step1.valid && this.enterpriseForm.Step2.valid && this.enterpriseForm.Step3.valid && this.enterpriseForm.Step4.valid) {
            this.loading = true;
            var user_post_data = {
                data: {
                    email: this.enterpriseForm.Step1.value.email,
                    mobile_code: "+91",
                    mobile: this.enterpriseForm.Step1.value.phnum,
                    password: this.enterpriseForm.Step4.value.password,
                    role_provider: true,
                },
            };
            var provider_post_data = {
                data: {
                    fullname: this.enterpriseForm.Step1.value.fullname,
                    role: "enterprise",
                    dipp_number: this.enterpriseForm.Step2.value.dipp_num,
                    enterprise_company_name: this.enterpriseForm.Step2.value.enterprise_company_name,
                    enterprise_company_url: this.enterpriseForm.Step2.value.enterprise_company_url,
                    enterprise_company_phone_code: "+91",
                    enterprise_company_phone: this.enterpriseForm.Step2.value.enterprise_company_phone,
                    enterprise_company_brief: this.enterpriseForm.Step2.value.enterprise_company_brief,
                    enterprise_incorporation_year: this.enterpriseForm.Step2.value.enterprise_incorporation_year,
                    enterprise_founders: this.enterpriseForm.Step3.value.enterprise_founders,
                    enterprise_company_size: this.enterpriseForm.Step3.value.enterprise_company_size,
                    enterprise_annual_revenue: this.enterpriseForm.Step3.value.enterprise_annual_revenue,
                    enterprise_expertises: this.enterpriseForm.Step3.value.enterprise_expertises,
                    achievements: this.userAchievements,
                    frg_user_id: null,
                },
            };
            this._ss.saveUserApi(user_post_data).subscribe((resp) => {
                if (resp.status == true) {
                    this.user_details = resp.data;
                    provider_post_data.data.frg_user_id = resp.data.id;
                    this._sts.saveStartupDetailsApi(provider_post_data).subscribe((resp) => {
                        this.enterprise_data = resp.data;
                        this.saveAvatar();
                        this.saveLogo();
                        this.addLocation();
                        this.loading = false;
                        this.ShowNextStep("step5");
                    });
                }
            }, (errResp) => {
                this.loading = false;
                // console.log(errResp);
                if (errResp.error.data.code === "E_UNIQUE" && errResp.error.status === false) {
                    this.toastr.error("", errResp.error.msg);
                }
                else {
                    this.toastr.error("", "Something went wrong please try again");
                }
            });
        }
        else {
            this.toastr.error("", "Please provide the required values to proceed further");
        }
    }
    addLocation() {
        const postData = {
            data: {
                frg_location_id: this.enterpriseForm.Step1.value.location,
                frg_provider_id: this.enterprise_data.id,
            },
        };
        this._sts.associateProviderLocation(postData).subscribe((resp) => { });
    }
    handleAvatar(avatarFile) {
        this.avatarImage = avatarFile;
    }
    saveAvatar() {
        if (this.avatarImage) {
            let formData = new FormData();
            formData.append("slug", this.enterprise_data.id);
            formData.append("avatar", this.avatarImage, this.avatarImage.name);
            this._sts.uploadAvataar(formData).subscribe((response) => { });
        }
    }
    handleCompanyLogo(logoFile) {
        this.companyLogo = logoFile;
        this.isLogoUploaded = false;
    }
    handleRemovedLogo(file) {
        if (typeof file == "object")
            this.companyLogo = null;
        this.isLogoUploaded = true;
    }
    saveLogo() {
        if (this.companyLogo) {
            let formData = new FormData();
            formData.append("slug", this.enterprise_data.id);
            formData.append("company_logo", this.companyLogo, this.companyLogo.name);
            this._sts.uploadLogo(formData).subscribe((resp) => { });
        }
    }
    resendCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.resendCodeLoading = true;
                let resp = yield this._sts.resendVerficationCode({
                    slug: {
                        id: this.user_details.id,
                    },
                });
                this.resendCodeLoading = false;
                if (resp.status == true) {
                    this.toastr.info("", resp.msg);
                }
                else {
                    this.toastr.error("", resp.msg);
                }
            }
            catch (err) {
                this.resendCodeLoading = false;
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    verifyOtp() {
        if (this.enterpriseForm.Step5.valid) {
            var post_data = {
                slug: {
                    id: this.user_details.id,
                },
                data: {
                    email_otp: this.enterpriseForm.Step5.value.otp,
                },
            };
            this.verifyingOTP = true;
            this._ss.verifyOtp(post_data).subscribe((response) => {
                this.verifyingOTP = false;
                if (response.status == true) {
                    // this.toastr.success("", "User verified successfully");
                    this.router.navigate(["/login"]).then(() => {
                        this.toastr.warning("Your account is being reviewed by the Admin and is pending approval. You will receive an email once it is approved.", "Pending for Approval");
                    });
                }
                else {
                    this.toastr.error("", "Verification code entered is invalid");
                }
            });
        }
        else {
            this.verifyingOTP = false;
            this.toastr.error("", "Please enter the verification code to proceed further");
        }
    }
};
EnterpriseComponent.ctorParameters = () => [
    { type: _seekers_seekers_service__WEBPACK_IMPORTED_MODULE_5__["SeekersService"] },
    { type: _startup_startup_service__WEBPACK_IMPORTED_MODULE_6__["StartupService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_7__["CustomvalidationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
EnterpriseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-enterprise",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./enterprise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/enterprise/enterprise.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./enterprise.component.css */ "./src/app/register/provider/enterprise/enterprise.component.css")).default]
    })
], EnterpriseComponent);



/***/ }),

/***/ "./src/app/register/provider/individual/individual.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/register/provider/individual/individual.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-wrp{\r\n    max-width:520px;\r\n    margin-left: auto;\r\n    margin-right:auto;\r\n    box-shadow: 5px 5px 20px rgba(172, 177, 193, 0.4);\r\n    border-radius: 10px;\r\n}\r\n\r\n.card-wrp.otp{\r\n    max-width:600px;\r\n}\r\n\r\n.card-wrp .back-login{\r\n    border-bottom-right-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n}\r\n\r\n.verification-code-wrp{\r\n    max-width:240px;\r\n    margin: auto;\r\n}\r\n\r\n.verification-code-wrp input{\r\n    width:100%;\r\n}\r\n\r\n.section-loader {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #ffffff73;\r\n  }\r\n\r\n.loader-wrp {\r\n    display: table;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n.loader-inner {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcHJvdmlkZXIvaW5kaXZpZHVhbC9pbmRpdmlkdWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpREFBaUQ7SUFDakQsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9wcm92aWRlci9pbmRpdmlkdWFsL2luZGl2aWR1YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXdycHtcclxuICAgIG1heC13aWR0aDo1MjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgxNzIsIDE3NywgMTkzLCAwLjQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNhcmQtd3JwLm90cHtcclxuICAgIG1heC13aWR0aDo2MDBweDtcclxufVxyXG5cclxuLmNhcmQtd3JwIC5iYWNrLWxvZ2lue1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udmVyaWZpY2F0aW9uLWNvZGUtd3Jwe1xyXG4gICAgbWF4LXdpZHRoOjI0MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udmVyaWZpY2F0aW9uLWNvZGUtd3JwIGlucHV0e1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4uc2VjdGlvbi1sb2FkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkZXItd3JwIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkZXItaW5uZXIge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/register/provider/individual/individual.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/register/provider/individual/individual.component.ts ***!
  \**********************************************************************/
/*! exports provided: IndividualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualComponent", function() { return IndividualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _seekers_seekers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../seekers/seekers.service */ "./src/app/register/seekers/seekers.service.ts");
/* harmony import */ var _startup_startup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startup/startup.service */ "./src/app/register/provider/startup/startup.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _individual_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./individual.service */ "./src/app/register/provider/individual/individual.service.ts");
/* harmony import */ var src_app_services_customvalidation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/customvalidation.service */ "./src/app/services/customvalidation.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__);










let IndividualComponent = class IndividualComponent {
    constructor(_ss, _sts, toastr, router, _inds, fb, customValidator) {
        this._ss = _ss;
        this._sts = _sts;
        this.toastr = toastr;
        this.router = router;
        this._inds = _inds;
        this.fb = fb;
        this.customValidator = customValidator;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__;
        this.individualForm = {
            Step1: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
            Step2: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
            Step3: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
            Step4: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
            Step5: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
        };
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
            Step4: false,
            Step5: false,
        };
        this.individual_frm = {};
        this.loading = false;
        this.verifyingOTP = false;
        this.resendCodeLoading = false;
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
        this.individual_stp_1 = false;
        this.individual_stp_2 = true;
        this.individual_stp_3 = true;
        this.individual_stp_4 = true;
        this.individual_stp_5 = true;
        this.individual_frm.digit = {};
        this.initLoading = true;
        this._sts.listLocations().subscribe((resp) => {
            this.initLoading = false;
            this.locations = resp.data;
        });
        this.individualForm = {
            Step1: this.fb.group({
                fullname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("[a-zA-Z .]*")]],
                email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email], this.customValidator.emailAvailabilityValidator.bind(this.customValidator)],
                phnum: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")], this.customValidator.phoneAvailabilityValidator.bind(this.customValidator)],
                location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            }),
            Step2: this.fb.group({
                indv_expertises: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                indv_website_url: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^(www.)?[a-z0-9.]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$")]],
                indv_expertise_years: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^\d*[1-9]\d*$/)]],
            }),
            Step3: this.fb.group({
                indv_affiliates: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                indv_tech_creds: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            }),
            Step4: this.fb.group({
                password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$")]],
                confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            }, { validator: this.customValidator.MatchPassword("password", "confirmPassword") }),
            Step5: this.fb.group({
                otp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]],
            }),
        };
    }
    get formControlStep1() {
        return this.individualForm.Step1.controls;
    }
    get formControlStep2() {
        return this.individualForm.Step2.controls;
    }
    get formControlStep3() {
        return this.individualForm.Step3.controls;
    }
    get formControlStep4() {
        return this.individualForm.Step4.controls;
    }
    get formControlStep5() {
        return this.individualForm.Step5.controls;
    }
    gotoStep(step) {
        switch (step) {
            case "step1": {
                this.individual_stp_1 = false;
                this.individual_stp_2 = true;
                this.individual_stp_3 = true;
                this.individual_stp_4 = true;
                this.individual_stp_5 = true;
                break;
            }
            case "step2": {
                this.individual_stp_1 = true;
                this.individual_stp_2 = false;
                this.individual_stp_3 = true;
                this.individual_stp_4 = true;
                this.individual_stp_5 = true;
                break;
            }
            case "step3": {
                this.individual_stp_1 = true;
                this.individual_stp_2 = true;
                this.individual_stp_3 = false;
                this.individual_stp_4 = true;
                this.individual_stp_5 = true;
                break;
            }
            case "step4": {
                this.individual_stp_1 = true;
                this.individual_stp_2 = true;
                this.individual_stp_3 = true;
                this.individual_stp_4 = false;
                this.individual_stp_5 = true;
                break;
            }
            case "step5": {
                this.individual_stp_1 = true;
                this.individual_stp_2 = true;
                this.individual_stp_3 = true;
                this.individual_stp_4 = true;
                this.individual_stp_5 = false;
                break;
            }
        }
    }
    ShowNextStep(step) {
        if (step == "step2" && this.individualForm.Step1.valid) {
            this.individual_stp_1 = true;
            this.individual_stp_2 = false;
        }
        else if (step == "step3" && this.individualForm.Step2.valid) {
            this.individual_stp_2 = true;
            this.individual_stp_3 = false;
        }
        else if (step == "step4" && this.individualForm.Step3.valid) {
            this.individual_stp_3 = true;
            this.individual_stp_4 = false;
        }
        else if (step == "step5" && this.individualForm.Step4.valid) {
            this.individual_stp_4 = true;
            this.individual_stp_5 = false;
        }
    }
    onSubmit(formIndex) {
        switch (formIndex) {
            case "Step1": {
                this.isSubmitted.Step1 = true;
                break;
            }
            case "Step2": {
                this.isSubmitted.Step2 = true;
                break;
            }
            case "Step3": {
                this.isSubmitted.Step3 = true;
                break;
            }
            case "Step4": {
                this.isSubmitted.Step4 = true;
                break;
            }
            case "Step5": {
                this.isSubmitted.Step5 = true;
                break;
            }
        }
    }
    ShowPreviousStep(step) {
        if (step == "step2") {
            this.individual_stp_1 = false;
            this.individual_stp_2 = true;
        }
        else if (step == "step3") {
            this.individual_stp_2 = false;
            this.individual_stp_3 = true;
        }
        else if (step == "step4") {
            this.individual_stp_3 = false;
            this.individual_stp_4 = true;
        }
    }
    handleAchievementChanges(achievementData) {
        this.userAchievements = achievementData;
    }
    saveUser(individual_frm) {
        if (this.individualForm.Step1.valid && this.individualForm.Step2.valid && this.individualForm.Step3.valid && this.individualForm.Step4.valid) {
            this.loading = true;
            var user_post_data = {
                data: {
                    email: this.individualForm.Step1.value.email,
                    mobile_code: "+91",
                    mobile: this.individualForm.Step1.value.phnum,
                    password: this.individualForm.Step4.value.password,
                    role_provider: true,
                },
            };
            var provider_post_data = {
                data: {
                    fullname: this.individualForm.Step1.value.fullname,
                    role: "individual",
                    indv_expertises: this.individualForm.Step2.value.indv_expertises,
                    indv_website_url: this.individualForm.Step2.value.indv_website_url,
                    indv_expertise_years: this.individualForm.Step2.value.indv_expertise_years,
                    indv_affiliates: this.individualForm.Step3.value.indv_affiliates,
                    indv_tech_creds: this.individualForm.Step3.value.indv_tech_creds,
                    achievements: this.userAchievements,
                    frg_user_id: null,
                },
            };
            this._ss.saveUserApi(user_post_data).subscribe((resp) => {
                if (resp.status == true) {
                    this.user_details = resp.data;
                    provider_post_data.data.frg_user_id = resp.data.id;
                    this._sts.saveStartupDetailsApi(provider_post_data).subscribe((resp) => {
                        this.individual_data = resp.data;
                        this.saveAvatar();
                        this.addLocation();
                        this.loading = false;
                        this.ShowNextStep("step5");
                    });
                }
            }, (errResp) => {
                this.loading = false;
                console.log(errResp);
                if (errResp.error.data.code === "E_UNIQUE" && errResp.error.status === false) {
                    this.toastr.error("", errResp.error.msg);
                }
                else {
                    this.toastr.error("", "Something went wrong please try again");
                }
            });
        }
        else {
            this.toastr.error("", "Please provide the required values to proceed further");
        }
    }
    addLocation() {
        const postData = {
            data: {
                frg_location_id: this.individualForm.Step1.value.location,
                frg_provider_id: this.individual_data.id,
            },
        };
        this._sts.associateProviderLocation(postData).subscribe((resp) => {
            // console.log("Location Association", resp);
        });
    }
    handleAvatar(avatarFile) {
        this.avatarImage = avatarFile;
    }
    saveAvatar() {
        if (this.avatarImage) {
            let formData = new FormData();
            formData.append("slug", this.individual_data.id);
            formData.append("avatar", this.avatarImage, this.avatarImage.name);
            this._sts.uploadAvataar(formData).subscribe((response) => {
                // console.log("Save Avatar", response);
            });
        }
    }
    resendCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.resendCodeLoading = true;
                let resp = yield this._sts.resendVerficationCode({
                    slug: {
                        id: this.user_details.id,
                    },
                });
                this.resendCodeLoading = false;
                if (resp.status == true) {
                    this.toastr.info("", resp.msg);
                }
                else {
                    this.toastr.error("", resp.msg);
                }
            }
            catch (err) {
                this.resendCodeLoading = false;
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    verifyOtp() {
        if (this.individualForm.Step5.valid) {
            this.verifyingOTP = true;
            var post_data = {
                slug: {
                    id: this.user_details.id,
                },
                data: {
                    email_otp: this.individualForm.Step5.value.otp,
                },
            };
            this._ss.verifyOtp(post_data).subscribe((response) => {
                this.verifyingOTP = false;
                if (response.status == true) {
                    // this.toastr.success("", "User verified successfully");
                    this.router.navigate(["/login"]).then(() => {
                        this.toastr.warning("Your account is being reviewed by the Admin and is pending approval. You will receive an email once it is approved.", "Pending for Approval");
                    });
                }
                else {
                    this.toastr.error("", "Verification code entered is invalid");
                }
            });
        }
        else {
            this.verifyingOTP = false;
            this.toastr.error("", "Please enter the verification code to proceed further");
        }
    }
};
IndividualComponent.ctorParameters = () => [
    { type: _seekers_seekers_service__WEBPACK_IMPORTED_MODULE_2__["SeekersService"] },
    { type: _startup_startup_service__WEBPACK_IMPORTED_MODULE_3__["StartupService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _individual_service__WEBPACK_IMPORTED_MODULE_7__["IndividualService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_services_customvalidation_service__WEBPACK_IMPORTED_MODULE_8__["CustomvalidationService"] }
];
IndividualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-individual",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./individual.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/individual/individual.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./individual.component.css */ "./src/app/register/provider/individual/individual.component.css")).default]
    })
], IndividualComponent);



/***/ }),

/***/ "./src/app/register/provider/individual/individual.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/register/provider/individual/individual.service.ts ***!
  \********************************************************************/
/*! exports provided: IndividualService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualService", function() { return IndividualService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let IndividualService = class IndividualService {
    constructor(http) {
        this.http = http;
        this.api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
    }
    listLocations() {
        return this.http.post(this.api_url + `/locations/list`, {});
    }
};
IndividualService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
IndividualService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], IndividualService);



/***/ }),

/***/ "./src/app/register/provider/provider-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/register/provider/provider-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProviderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderRoutingModule", function() { return ProviderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _enterprise_enterprise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enterprise/enterprise.component */ "./src/app/register/provider/enterprise/enterprise.component.ts");
/* harmony import */ var _individual_individual_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./individual/individual.component */ "./src/app/register/provider/individual/individual.component.ts");
/* harmony import */ var _provider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provider.component */ "./src/app/register/provider/provider.component.ts");
/* harmony import */ var _startup_startup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./startup/startup.component */ "./src/app/register/provider/startup/startup.component.ts");
/* harmony import */ var _type_type_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./type/type.component */ "./src/app/register/provider/type/type.component.ts");








const routes = [
    {
        path: '',
        component: _provider_component__WEBPACK_IMPORTED_MODULE_5__["ProviderComponent"],
        children: [
            {
                path: '',
                redirectTo: 'type',
                pathMatch: 'full'
            },
            {
                path: 'type',
                component: _type_type_component__WEBPACK_IMPORTED_MODULE_7__["TypeComponent"],
            },
            {
                path: 'startup',
                component: _startup_startup_component__WEBPACK_IMPORTED_MODULE_6__["StartupComponent"],
            },
            {
                path: 'enterprise',
                component: _enterprise_enterprise_component__WEBPACK_IMPORTED_MODULE_3__["EnterpriseComponent"],
            },
            {
                path: 'individual',
                component: _individual_individual_component__WEBPACK_IMPORTED_MODULE_4__["IndividualComponent"],
            }
        ]
    },
];
let ProviderRoutingModule = class ProviderRoutingModule {
};
ProviderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProviderRoutingModule);



/***/ }),

/***/ "./src/app/register/provider/provider.component.css":
/*!**********************************************************!*\
  !*** ./src/app/register/provider/provider.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3Byb3ZpZGVyL3Byb3ZpZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/register/provider/provider.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/register/provider/provider.component.ts ***!
  \*********************************************************/
/*! exports provided: ProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderComponent", function() { return ProviderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProviderComponent = class ProviderComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProviderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-provider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./provider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/provider.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./provider.component.css */ "./src/app/register/provider/provider.component.css")).default]
    })
], ProviderComponent);



/***/ }),

/***/ "./src/app/register/provider/provider.module.ts":
/*!******************************************************!*\
  !*** ./src/app/register/provider/provider.module.ts ***!
  \******************************************************/
/*! exports provided: ProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderModule", function() { return ProviderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _provider_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider-routing.module */ "./src/app/register/provider/provider-routing.module.ts");
/* harmony import */ var _provider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provider.component */ "./src/app/register/provider/provider.component.ts");
/* harmony import */ var _type_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type/type.component */ "./src/app/register/provider/type/type.component.ts");
/* harmony import */ var _startup_startup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./startup/startup.component */ "./src/app/register/provider/startup/startup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _enterprise_enterprise_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./enterprise/enterprise.component */ "./src/app/register/provider/enterprise/enterprise.component.ts");
/* harmony import */ var _individual_individual_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./individual/individual.component */ "./src/app/register/provider/individual/individual.component.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/widgets/widgets.module */ "./src/app/shared/widgets/widgets.module.ts");













let ProviderModule = class ProviderModule {
};
ProviderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _provider_component__WEBPACK_IMPORTED_MODULE_4__["ProviderComponent"],
            _type_type_component__WEBPACK_IMPORTED_MODULE_5__["TypeComponent"],
            _startup_startup_component__WEBPACK_IMPORTED_MODULE_6__["StartupComponent"],
            _enterprise_enterprise_component__WEBPACK_IMPORTED_MODULE_8__["EnterpriseComponent"],
            _individual_individual_component__WEBPACK_IMPORTED_MODULE_9__["IndividualComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _provider_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProviderRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_10__["ImageCropperModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_11__["CKEditorModule"],
            _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_12__["WidgetsModule"]
        ],
    })
], ProviderModule);



/***/ }),

/***/ "./src/app/register/provider/startup/startup.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/register/provider/startup/startup.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-wrp {\r\n\tmax-width: 520px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tbox-shadow: 5px 5px 20px rgba(172, 177, 193, 0.4);\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.card-wrp.otp {\r\n\tmax-width: 600px;\r\n}\r\n\r\n.card-wrp .back-login {\r\n\tborder-bottom-right-radius: 10px;\r\n\tborder-bottom-left-radius: 10px;\r\n}\r\n\r\n.verification-code-wrp {\r\n\tmax-width: 240px;\r\n\tmargin: auto;\r\n}\r\n\r\n.act-clr {\r\n\tcolor: #3b6fd4 !important;\r\n}\r\n\r\n.act-span {\r\n\tpadding: 3px 6px;\r\n\tborder: 1px solid #3b6fd4;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.frg-dynamic-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.frg-dynamic-row .frg-dynamic-input-col {\r\n\tflex-basis: 42%;\r\n}\r\n\r\n.frg-dynamic-row .frg-add-rm-row-btn {\r\n\tflex-basis: 7%;\r\n}\r\n\r\n.frg-expertise-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.frg-expertise-row .frg-expertise-input-col {\r\n\tflex-basis: 88%;\r\n}\r\n\r\n.frg-expertise-row .frg-expertise-add-rm-row-btn {\r\n\tflex-basis: 7%;\r\n}\r\n\r\n.section-loader {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: #ffffff73;\r\n}\r\n\r\n.loader-wrp {\r\n\tdisplay: table;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.loader-inner {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcHJvdmlkZXIvc3RhcnR1cC9zdGFydHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixpREFBaUQ7Q0FDakQsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0NBQWdDO0NBQ2hDLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBOEI7U0FBOUIsOEJBQThCO0NBQzlCLHlCQUFtQjtTQUFuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IseUJBQThCO1NBQTlCLDhCQUE4QjtDQUM5Qix5QkFBbUI7U0FBbkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sV0FBVztDQUNYLFlBQVk7Q0FDWixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9wcm92aWRlci9zdGFydHVwL3N0YXJ0dXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXdycCB7XHJcblx0bWF4LXdpZHRoOiA1MjBweDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0Ym94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMTcyLCAxNzcsIDE5MywgMC40KTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC13cnAub3RwIHtcclxuXHRtYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4uY2FyZC13cnAgLmJhY2stbG9naW4ge1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi52ZXJpZmljYXRpb24tY29kZS13cnAge1xyXG5cdG1heC13aWR0aDogMjQwcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYWN0LWNsciB7XHJcblx0Y29sb3I6ICMzYjZmZDQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdC1zcGFuIHtcclxuXHRwYWRkaW5nOiAzcHggNnB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMzYjZmZDQ7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZnJnLWR5bmFtaWMtcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZnJnLWR5bmFtaWMtcm93IC5mcmctZHluYW1pYy1pbnB1dC1jb2wge1xyXG5cdGZsZXgtYmFzaXM6IDQyJTtcclxufVxyXG5cclxuLmZyZy1keW5hbWljLXJvdyAuZnJnLWFkZC1ybS1yb3ctYnRuIHtcclxuXHRmbGV4LWJhc2lzOiA3JTtcclxufVxyXG5cclxuLmZyZy1leHBlcnRpc2Utcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZnJnLWV4cGVydGlzZS1yb3cgLmZyZy1leHBlcnRpc2UtaW5wdXQtY29sIHtcclxuXHRmbGV4LWJhc2lzOiA4OCU7XHJcbn1cclxuXHJcbi5mcmctZXhwZXJ0aXNlLXJvdyAuZnJnLWV4cGVydGlzZS1hZGQtcm0tcm93LWJ0biB7XHJcblx0ZmxleC1iYXNpczogNyU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWxvYWRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogI2ZmZmZmZjczO1xyXG59XHJcblxyXG4ubG9hZGVyLXdycCB7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9hZGVyLWlubmVyIHtcclxuXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/register/provider/startup/startup.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/register/provider/startup/startup.component.ts ***!
  \****************************************************************/
/*! exports provided: StartupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupComponent", function() { return StartupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _seekers_seekers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../seekers/seekers.service */ "./src/app/register/seekers/seekers.service.ts");
/* harmony import */ var _startup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./startup.service */ "./src/app/register/provider/startup/startup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/customvalidation.service */ "./src/app/services/customvalidation.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);










let StartupComponent = class StartupComponent {
    constructor(_ss, _sts, toastr, router, fb, customValidator) {
        this._ss = _ss;
        this._sts = _sts;
        this.toastr = toastr;
        this.router = router;
        this.fb = fb;
        this.customValidator = customValidator;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__;
        this.config = {
            resize_enabled: false,
            removePlugins: "elementspath,save,magicline",
            removeDialogTabs: "image:advanced;link:advanced",
            removeButtons: "Subscript,Superscript,Anchor,Source,Table",
        };
        this.startupForm = {
            Step1: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
            Step2: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
            Step3: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
            Step4: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
            Step5: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
        };
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
            Step4: false,
            Step5: false,
        };
        this.loading = false;
        this.verifyingOTP = false;
        this.fileLoaded = false;
        this.yearArr = lodash__WEBPACK_IMPORTED_MODULE_9__["range"](1950, new Date().getFullYear() + 1);
        this.resendCodeLoading = false;
        this.userAchievements = [];
        this.isLogoUploaded = false;
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
        // getting locations from api
        this.initLoading = true;
        this._sts.listLocations().subscribe((resp) => {
            this.locations = resp.data;
            this.initLoading = false;
        });
        this.startup_stp_1 = false;
        this.startup_stp_2 = true;
        this.startup_stp_3 = true;
        this.startup_stp_4 = true;
        this.startup_stp_5 = true;
        this.startupForm = {
            Step1: this.fb.group({
                fullname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("[a-zA-Z .]*")]],
                email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email], this.customValidator.emailAvailabilityValidator.bind(this.customValidator)],
                phnum: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")], this.customValidator.phoneAvailabilityValidator.bind(this.customValidator)],
                location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            }),
            Step2: this.fb.group({
                company_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^(?! )(?!.* $)[a-zA-Z0-9&-. ()-]+$")]],
                website: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^(www.)?[a-z0-9 .]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$")]],
                off_phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")]],
                yr_incorp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                comp_brief: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                dipp_num: [""],
            }),
            Step3: this.fb.group({
                founderDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormArray"]([
                    new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
                        designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
                    }),
                ]),
                teamsize: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9]*$")]],
                expertise: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("")]),
                affiliates: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^(?! )(?!.* $)[a-zA-Z0-9&-. ()-]+$")]],
            }),
            Step4: this.fb.group({
                password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$")]],
                confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            }, {
                validator: this.customValidator.MatchPassword("password", "confirmPassword"),
            }),
            Step5: this.fb.group({
                otp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]],
            }),
        };
        this.founderDetails = this.startupForm.Step3.get("founderDetails");
        this.teamExpertise = this.startupForm.Step3.get("expertise");
    }
    get formControlStep1() {
        return this.startupForm.Step1.controls;
    }
    get formControlStep2() {
        return this.startupForm.Step2.controls;
    }
    get formControlStep3() {
        return this.startupForm.Step3.controls;
    }
    get formControlStep4() {
        return this.startupForm.Step4.controls;
    }
    get formControlStep5() {
        return this.startupForm.Step5.controls;
    }
    ShowNextStep(step) {
        if (step == "step2" && this.startupForm.Step1.valid) {
            this.startup_stp_1 = true;
            this.startup_stp_2 = false;
        }
        else if (step == "step3" && this.startupForm.Step2.valid) {
            if (this.companyLogo) {
                this.isLogoUploaded = false;
                this.startup_stp_2 = true;
                this.startup_stp_3 = false;
            }
            else {
                this.isLogoUploaded = true;
                this.toastr.error("", "Please provide the required values to proceed further");
            }
        }
        else if (step == "step4" && this.startupForm.Step3.valid) {
            this.startup_stp_3 = true;
            this.startup_stp_4 = false;
        }
        else if (step == "step5" && this.startupForm.Step4.valid) {
            this.startup_stp_4 = true;
            this.startup_stp_5 = false;
        }
        else {
            this.toastr.error("", "Please provide the required values to proceed further");
        }
    }
    ShowPreviousStep(step) {
        if (step == "step2") {
            this.startup_stp_1 = false;
            this.startup_stp_2 = true;
        }
        else if (step == "step3") {
            this.startup_stp_2 = false;
            this.startup_stp_3 = true;
        }
        else if (step == "step4") {
            this.startup_stp_3 = false;
            this.startup_stp_4 = true;
        }
    }
    gotoStep(step) {
        switch (step) {
            case "step1": {
                this.startup_stp_1 = false;
                this.startup_stp_2 = true;
                this.startup_stp_3 = true;
                this.startup_stp_4 = true;
                this.startup_stp_5 = true;
                break;
            }
            case "step2": {
                this.startup_stp_1 = true;
                this.startup_stp_2 = false;
                this.startup_stp_3 = true;
                this.startup_stp_4 = true;
                this.startup_stp_5 = true;
                break;
            }
            case "step3": {
                this.startup_stp_1 = true;
                this.startup_stp_2 = true;
                this.startup_stp_3 = false;
                this.startup_stp_4 = true;
                this.startup_stp_5 = true;
                break;
            }
            case "step4": {
                this.startup_stp_1 = true;
                this.startup_stp_2 = true;
                this.startup_stp_3 = true;
                this.startup_stp_4 = false;
                this.startup_stp_5 = true;
                break;
            }
            case "step5": {
                this.startup_stp_1 = true;
                this.startup_stp_2 = true;
                this.startup_stp_3 = true;
                this.startup_stp_4 = true;
                this.startup_stp_5 = false;
                break;
            }
        }
    }
    // get founderDetails(){ return this.startupForm.Step3.get('founderDetails') as FormArray}
    addFounder() {
        let namesArr = this.founderDetails.value.map((el) => el.name);
        let designationArr = this.founderDetails.value.map((el) => el.designation);
        // console.log(namesArr, designationArr);
        if (namesArr.includes("") && designationArr.includes("")) {
            this.toastr.error("", "Both fields are required");
            return false;
        }
        else if (this.founderDetails.value.length == 5) {
            this.toastr.error("", "Only 5 entries are allowed");
            return false;
        }
        else {
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
                designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            });
            this.founderDetails.push(group);
        }
        // console.log(
        //   "Founder details console ",
        //   this.startupForm.Step3.value.founderDetails
        // );
    }
    removeFounder(index) {
        this.founderDetails.removeAt(index);
    }
    addExpertise() {
        let expertiseArr = ([] = this.teamExpertise.value);
        if (!expertiseArr.includes(""))
            if (this.teamExpertise.value.length != 5)
                this.teamExpertise.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""));
    }
    removeExpertise(index) {
        this.teamExpertise.removeAt(index);
    }
    handleAchievementChanges(achievementData) {
        this.userAchievements = achievementData;
    }
    saveUser() {
        if (this.startupForm.Step1.valid && this.startupForm.Step2.valid && this.startupForm.Step3.valid && this.startupForm.Step4.valid) {
            this.loading = true;
            var user_post_data = {
                data: {
                    email: this.startupForm.Step1.value.email,
                    mobile_code: "+91",
                    mobile: this.startupForm.Step1.value.phnum,
                    password: this.startupForm.Step4.value.password,
                    role_provider: true,
                },
            };
            var provider_post_data = {
                data: {
                    fullname: this.startupForm.Step1.value.fullname,
                    role: "startup",
                    dipp_number: this.startupForm.Step2.value.dipp_num,
                    startup_company_name: this.startupForm.Step2.value.company_name,
                    startup_company_url: this.startupForm.Step2.value.website,
                    startup_company_phone_code: "+91",
                    startup_company_phone: this.startupForm.Step2.value.off_phone,
                    startup_company_brief: this.startupForm.Step2.value.comp_brief,
                    startup_incorporation_years: this.startupForm.Step2.value.yr_incorp,
                    startup_founders: this.startupForm.Step3.value.founderDetails,
                    startup_teamsize: this.startupForm.Step3.value.teamsize,
                    startup_technical_expertises: this.startupForm.Step3.value.expertise,
                    startup_affiliates: this.startupForm.Step3.value.affiliates,
                    achievements: this.userAchievements,
                    frg_user_id: null,
                },
            };
            this._ss.saveUserApi(user_post_data).subscribe((resp) => {
                if (resp.status == true) {
                    this.user_details = resp.data;
                    provider_post_data.data.frg_user_id = resp.data.id;
                    this._sts.saveStartupDetailsApi(provider_post_data).subscribe((resp) => {
                        this.startup_data = resp.data;
                        this.saveAvatar();
                        this.saveLogo();
                        this.addLocation();
                        this.loading = false;
                        this.ShowNextStep("step5");
                    });
                }
            }, (errResp) => {
                this.loading = false;
                console.log(errResp);
                if (errResp.error.data.code === "E_UNIQUE" && errResp.error.status === false) {
                    this.toastr.error("", errResp.error.msg);
                }
                else {
                    this.toastr.error("", "Something went wrong please try again");
                }
            });
        }
        else {
            this.toastr.error("", "Please provide the required values to proceed further");
        }
    }
    handleAvatar(avatarFile) {
        this.avatarImage = avatarFile;
    }
    saveAvatar() {
        if (this.avatarImage) {
            let formData = new FormData();
            formData.append("slug", this.startup_data.id);
            formData.append("avatar", this.avatarImage, this.avatarImage.name);
            // console.log("FormData", formData);
            this._sts.uploadAvataar(formData).subscribe((response) => {
                // console.log("Save Avatar", response);
            });
        }
    }
    handleCompanyLogo(logoFile) {
        this.companyLogo = logoFile;
        this.isLogoUploaded = false;
    }
    handleRemovedLogo(file) {
        if (typeof file == "object")
            this.companyLogo = null;
        this.isLogoUploaded = true;
    }
    saveLogo() {
        if (this.companyLogo) {
            let formData = new FormData();
            formData.append("slug", this.startup_data.id);
            formData.append("company_logo", this.companyLogo, this.companyLogo.name);
            this._sts.uploadLogo(formData).subscribe((resp) => {
                console.log("save logo", resp);
            });
        }
    }
    onSubmit(formIndex) {
        switch (formIndex) {
            case "Step1": {
                this.isSubmitted.Step1 = true;
                break;
            }
            case "Step2": {
                this.isSubmitted.Step2 = true;
                break;
            }
            case "Step3": {
                this.isSubmitted.Step3 = true;
                break;
            }
            case "Step4": {
                this.isSubmitted.Step4 = true;
                break;
            }
            case "Step5": {
                this.isSubmitted.Step5 = true;
                break;
            }
        }
    }
    addLocation() {
        const postData = {
            data: {
                frg_location_id: this.startupForm.Step1.value.location,
                frg_provider_id: this.startup_data.id,
            },
        };
        this._sts.associateProviderLocation(postData).subscribe((resp) => {
            // console.log("Location Association", resp);
        });
    }
    resendCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.resendCodeLoading = true;
                let resp = yield this._sts.resendVerficationCode({
                    slug: {
                        id: this.user_details.id,
                    },
                });
                this.resendCodeLoading = false;
                if (resp.status == true) {
                    this.toastr.info("", resp.msg);
                }
                else {
                    this.toastr.error("", resp.msg);
                }
            }
            catch (err) {
                this.resendCodeLoading = false;
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    verifyOtp() {
        if (this.startupForm.Step5.valid) {
            var post_data = {
                slug: {
                    id: this.user_details.id,
                },
                data: {
                    email_otp: this.startupForm.Step5.value.otp,
                },
            };
            this.verifyingOTP = true;
            this._ss.verifyOtp(post_data).subscribe((response) => {
                if (response.status == true) {
                    this.verifyingOTP = false;
                    // this.toastr.success("", "User verified successfully");
                    this.router.navigate(["/login"]).then(() => {
                        this.toastr.warning("Your account is being reviewed by the Admin and is pending approval. You will receive an email once it is approved.", "Pending for Approval");
                    });
                }
                else {
                    this.verifyingOTP = false;
                    this.toastr.error("", "Verification code entered is invalid");
                }
            });
        }
        else {
            this.toastr.error("", "Please enter the verification code to proceed further");
        }
    }
};
StartupComponent.ctorParameters = () => [
    { type: _seekers_seekers_service__WEBPACK_IMPORTED_MODULE_4__["SeekersService"] },
    { type: _startup_service__WEBPACK_IMPORTED_MODULE_5__["StartupService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_7__["CustomvalidationService"] }
];
StartupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-startup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./startup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/startup/startup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./startup.component.css */ "./src/app/register/provider/startup/startup.component.css")).default]
    })
], StartupComponent);



/***/ }),

/***/ "./src/app/register/provider/startup/startup.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/register/provider/startup/startup.service.ts ***!
  \**************************************************************/
/*! exports provided: StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return StartupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let StartupService = class StartupService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    saveStartupDetailsApi(post_data) {
        return this.http.post(this.api_url + `/providers/create`, post_data);
    }
    updateUserDetailsApi(post_data) {
        return this.http.post(this.api_url + `/users/update`, post_data);
    }
    uploadAvataar(post_data) {
        return this.http.post(this.api_url + `/providers/upload`, post_data);
    }
    uploadLogo(formData) {
        return this.http.post(this.api_url + `/providers/company_logo`, formData);
    }
    listLocations() {
        return this.http.post(this.api_url + `/locations/list`, {});
    }
    associateProviderLocation(post_data) {
        // console.log(post_data);
        return this.http.post(this.api_url + `/locations_and_providers/create`, post_data);
    }
    resendVerficationCode(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/users/resend_verification_code`, postData).toPromise();
        });
    }
};
StartupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
StartupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], StartupService);



/***/ }),

/***/ "./src/app/register/provider/type/type.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register/provider/type/type.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3Byb3ZpZGVyL3R5cGUvdHlwZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/register/provider/type/type.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register/provider/type/type.component.ts ***!
  \**********************************************************/
/*! exports provided: TypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeComponent", function() { return TypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TypeComponent = class TypeComponent {
    constructor() { }
    ngOnInit() {
    }
};
TypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/provider/type/type.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./type.component.css */ "./src/app/register/provider/type/type.component.css")).default]
    })
], TypeComponent);



/***/ })

}]);
//# sourceMappingURL=provider-provider-module-es2015.js.map