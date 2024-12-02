(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["challenge-challenge-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/anchor-challenge/anchor-challenge.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/anchor-challenge/anchor-challenge.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!pageLoading\">\r\n\t<div class=\"edit-challenge-brief-parent g-pt-35 g-pb-20\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t<div class=\"g-pb-10 g-pt-08\">\r\n\t\t\t\t\t\t<span (click)=\"backClicked()\" class=\"g-fs-09 g-fw-500 primary-green-clr g-cursor-pointer\"> < Go back to Challenge </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"challenge-step-tabs g-mb-10\">\r\n\t\t\t\t\t\t<div [ngClass]=\"{ active: !createChallengeStep1, '': createChallengeStep1 }\" (click)=\"gotoStep('step1')\">Challenge Details</div>\r\n\t\t\t\t\t\t<div [ngClass]=\"{ active: !createChallengeStep2, '': createChallengeStep2 }\" (click)=\"gotoStep('step2')\">Solution Requirements</div>\r\n\t\t\t\t\t\t<div [ngClass]=\"{ active: !createChallengeStep3, '': createChallengeStep3 }\" (click)=\"gotoStep('step3')\">Additional Information</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<div class=\"section-title g-fs-19 g-fw-500 title-clr g-mb-08\">Challenge Brief</div>\r\n\t\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t\t<div class=\"step-form-parent\" [hidden]=\"createChallengeStep1\">\r\n\t\t\t\t\t\t<form [formGroup]=\"createChallengeForm.Step1\" (ngSubmit)=\"stepFormSubmit('Step1')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\tChallenge Summary<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\"> A 20-40 word description of the challenge or need as desired by the end-users. </span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip title=\"A central monitoring system to detect faults, leakage of current, and breakage of cables in street lights across the city\"></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challengeSummary\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.challengeSummary.touched || isSubmitted.Step1) && formControlStep1.challengeSummary?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.challengeSummary.touched || isSubmitted.Step1) && formControlStep1.challengeSummary.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.challengeSummary.touched || isSubmitted.Step1) && formControlStep1.challengeSummary.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t200 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.challengeSummary.touched || isSubmitted.Step1) && formControlStep1.challengeSummary.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tChallenge Scenario <br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe the challenge broadly to help understand and visualise the scope, use-case, significance and the magnitude of the problem as it is faced by the\r\n\t\t\t\t\t\t\t\t\t\tdifferent types of beneficiaries.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"The city spans around 250 km2 and has about 60,000 streetlights, due to the absence of a centralised monitoring system, maintenance of these streetlights is laborious, expensive and time-consuming. Identifying the exact location of the faulty lamp, leakage of current, or breakage of cables is currently a manual process based on citizen grievances received and consumes about 1-2 working days at an approximate cost of Rs.2000/- per streetlamp. \r\n                                    Additionally, unidentified & unchecked current leakage can be life-threatening to both lineman operators & citizens. There needs to be a centralised system that detects the faults in realtime, identifies the type of fault, and locates where the fault has occurred in the city.\r\n                                    \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challengeScenario\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.challengeScenario.touched || isSubmitted.Step1) && formControlStep1.challengeScenario?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.challengeScenario.touched || isSubmitted.Step1) && formControlStep1.challengeScenario.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.challengeScenario.touched || isSubmitted.Step1) && formControlStep1.challengeScenario.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tProfile of the Target Beneficiaries<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tIndicate the profile of the various types of beneficiaries in the city who face the challenge, their use case and how they are impacted by it.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. <span class='g-black5-clr g-fw-500'>Lineman:</span> The service personnel from the electricity department who spends hours in manually identifying faulty street lights and in fixing the same.<br><br>2. <span class='g-black5-clr g-fw-500'>Electricity Department:</span> Officers, junior engineers, and sub-divisional engineers in the electricity department responsible for the operation & maintenance of street lights in the city and managing the linemen in the field. They face challenges in operations & maintenance since it is being done manually and in an unorganised manner.\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"targetBeneficiaries\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.targetBeneficiaries.touched || isSubmitted.Step1) && formControlStep1.targetBeneficiaries?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.targetBeneficiaries.touched || isSubmitted.Step1) && formControlStep1.targetBeneficiaries.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.targetBeneficiaries.touched || isSubmitted.Step1) && formControlStep1.targetBeneficiaries.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.targetBeneficiaries.touched || isSubmitted.Step1) && formControlStep1.targetBeneficiaries.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-row\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\"> Start Date </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"date\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"startDate\"\r\n\t\t\t\t\t\t\t\t\t\t[min]=\"minDate\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.startDate.touched || isSubmitted.Step1) && formControlStep1.startDate?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.startDate.touched || isSubmitted.Step1) && formControlStep1.startDate.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tStart date is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\"> Close Date </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"date\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"closeDate\"\r\n\t\t\t\t\t\t\t\t\t\t[min]=\"minDate\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.closeDate.touched || isSubmitted.Step1) && formControlStep1.closeDate?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.closeDate.touched || isSubmitted.Step1) && formControlStep1.closeDate.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tEnd date is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t\t<div class=\"step-form-parent\" [hidden]=\"createChallengeStep2\">\r\n\t\t\t\t\t\t<form [formGroup]=\"createChallengeForm.Step2\" (ngSubmit)=\"stepFormSubmit('Step2')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tFunctional requirements of the end-user<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tExplain in brief, the description of ‘Jobs to be Done’ for the end-user including the needs to be fulfilled, gaps to be addressed, or challenges to be overcome,\r\n\t\t\t\t\t\t\t\t\t\tetc.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. Identification & alerting of the type of fault—non-functioning of lights, leakage of current, and breakage of cable <br><br>\r\n                                        2. Identification of the exact location of the faulty street light in the city\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"functionalRequirements\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.functionalRequirements.touched || isSubmitted.Step2) && formControlStep2.functionalRequirements?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep2.functionalRequirements.touched || isSubmitted.Step2) && formControlStep2.functionalRequirements.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep2.functionalRequirements.touched || isSubmitted.Step2) && formControlStep2.functionalRequirements.errors?.maxlength\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep2.functionalRequirements.touched || isSubmitted.Step2) && formControlStep2.functionalRequirements.errors?.minlength\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tFunctional & Operational capabilities<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescription of the desired features and functionalities to solve the problem with relevant technical and operational requirements.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"Single dashboard/workspace for: <br><br>1. Real-time identification & notification of the type of fault<br>2. Locating the street light in the city where the fault has occurred<br>3. Sending alerts to the user as and when the fault occurs<br>4. Visualisation of the overall condition of street lights across the city from the data gathered\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"operationalCapabilities\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.operationalCapabilities.touched || isSubmitted.Step2) && formControlStep2.operationalCapabilities?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep2.operationalCapabilities.touched || isSubmitted.Step2) && formControlStep2.operationalCapabilities.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep2.operationalCapabilities.touched || isSubmitted.Step2) && formControlStep2.operationalCapabilities.errors?.maxlength\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep2.operationalCapabilities.touched || isSubmitted.Step2) && formControlStep2.operationalCapabilities.errors?.minlength\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tDeployment Constraints<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe the usage, usability and operational constraints in the context of integrating the solution to the target platform and the relevant environment in\r\n\t\t\t\t\t\t\t\t\t\twhich the desired solution must be used, deployed or operated. Primary Constraints include: Total Cost of Ownership, Maintenance/Service, Skills/Expertise,\r\n\t\t\t\t\t\t\t\t\t\tInstallation/Integration, Resources/materials, Time consumption, Physical/personal risk, Product training, Changes to habits/process, Accessibility, Inability\r\n\t\t\t\t\t\t\t\t\t\tto assess the quality of the product/service [Risk Perception], Monitoring the usage/deployment, etc.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. <span class='g-black5-clr g-fw-500'>Installation/Integration:</span> The solution should be designed for easy integration with the existing system.<br><br>2. <span class='g-black5-clr g-fw-500'>Product training:</span> The solution should be intuitive/easy to use, requiring less or no training for the users. Also, the solution should not affect the existing workflow significantly.<br><br>3. <span class='g-black5-clr g-fw-500'>Maintenance/Service:</span> The solution should be robust with minimal need for maintenance.\"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"deploymentConstraints\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.deploymentConstraints.touched || isSubmitted.Step2) && formControlStep2.deploymentConstraints?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.deploymentConstraints.touched || isSubmitted.Step2) && formControlStep2.deploymentConstraints.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.deploymentConstraints.touched || isSubmitted.Step2) && formControlStep2.deploymentConstraints.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.deploymentConstraints.touched || isSubmitted.Step2) && formControlStep2.deploymentConstraints.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tExpected Tangible Outcomes & Benefits<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe the significance of solving this problem, and estimate/quantify the outcome/benefits for the beneficiaries listed.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. <span class='g-black5-clr g-fw-500'>Lineman:</span> Lineman can save time and effort which otherwise would have been utilised in manually searching for the faulty street light, diagnosing the problem, etc.<br><br>2. <span class='g-black5-clr g-fw-500'>Electricity Department:</span> Officers, junior engineer, and sub-divisional engineer will get real-time notification of the fault occurrence, thereby reducing the time to address these faults—improving the quality of services provided by the city.\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"tangibleOutcomes\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.tangibleOutcomes.touched || isSubmitted.Step2) && formControlStep2.tangibleOutcomes?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.tangibleOutcomes.touched || isSubmitted.Step2) && formControlStep2.tangibleOutcomes.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.tangibleOutcomes?.touched || isSubmitted.Step2) && formControlStep2.tangibleOutcomes?.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.tangibleOutcomes?.touched || isSubmitted.Step2) && formControlStep2.tangibleOutcomes?.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- step 3 -->\r\n\t\t\t\t\t<div class=\"step-form-parent\" [hidden]=\"createChallengeStep3\">\r\n\t\t\t\t\t\t<form [formGroup]=\"createChallengeForm.Step3\" (ngSubmit)=\"stepFormSubmit('Step3')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tGaps in the Current Solution <br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe the gaps that are in current solutions or alternative methods being applied today for addressing the problem\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. Citizens raise grievances for faulty street lights through call, text, WhatsApp, or Web portal; hence fault detection is unorganised, non-centralised, and is not real-time.<br>2. The exact location of where the fault has occurred is not known, so the lineman has to move along with their vehicle to identify the faulty street light—requiring a lot of time & effort.<br>3. The lineman also has to manually diagnose the problem and fix the same.<br>4. The whole process from locating, diagnosing, and fixing takes at least 1 or 2 days after the request is raised.\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"gaps\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.gaps.touched || isSubmitted.Step3) && formControlStep3.gaps?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.gaps.touched || isSubmitted.Step3) && formControlStep3.gaps.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tOther Requirements/Remarks<br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tAdditional critical Information which remains uncovered above can be presented here (ex: Regulatory requirements, certifications, quality standards, etc).\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"far fa-question-circle g-p-clr\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"otherRequirements\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.otherRequirements.touched || isSubmitted.Step3) && formControlStep3.otherRequirements?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.otherRequirements.touched || isSubmitted.Step3) && formControlStep3.otherRequirements.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tLinks to Additional Information<br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tTo help innovators understand the situation better you may provide additional information in the from of images or links\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"far fa-question-circle g-p-clr\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"additionalLink1\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.additionalLink1.touched || isSubmitted.Step3) && formControlStep3.additionalLink1?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.additionalLink1.touched || isSubmitted.Step3) && formControlStep3.additionalLink1.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tInvalid url format.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"additionalLink2\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.additionalLink2.touched || isSubmitted.Step3) && formControlStep3.additionalLink2?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.additionalLink2.touched || isSubmitted.Step3) && formControlStep3.additionalLink2.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tInvalid url format.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"additionalLink3\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.additionalLink3.touched || isSubmitted.Step3) && formControlStep3.additionalLink3?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.additionalLink3.touched || isSubmitted.Step3) && formControlStep3.additionalLink3.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tInvalid url format.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"saveAsDraft()\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-w-100per g-fs-08 g-pt-04 g-pb-04 g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\tSave as draft&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"draftLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"stepFormSubmit('Step3')\" class=\"btn g-bdr-005 g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04 g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\tSubmit&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"submitLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n<ng-container *ngIf=\"pageLoading\">\r\n\t<div class=\"loader-wrp\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade a-create-challenge-modal\" id=\"confirmDialog\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-p-21\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-16 g-lh-19 g-fw-500 bg-blue-clr text-left\">Are you sure you want to exit your submssion?</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 body-grey-clr g-pt-07 text-left\">Going back will not save any of the information that you’ve provided in the input.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<button type=\"button\" #closebutton class=\"btn g-bdrrad-7px g-bdr-005 g-black5-brdr g-fs-12 g-w-bg g-pt-02 g-pb-02 g-pl-06 g-pr-06\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-27 text-left\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-p-brdr g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04\" (click)=\"handleGoBack('save')\">\r\n\t\t\t\t\t\tSave Draft & Go Back&nbsp; <i *ngIf=\"draftLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-12 g-fs-08 g-pt-04 g-pb-04 g-pl-24 g-pr-24\" data-dismiss=\"modal\" (click)=\"handleGoBack('delete')\">\r\n\t\t\t\t\t\tDelete & Go Back\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/challenge-overview/challenge-overview.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/challenge-overview/challenge-overview.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"anchor-wrp g-pb-30\">\r\n\t<ng-container>\r\n\t\t<div class=\"g-white-bg l-challenge-over-sec-1-cont g-pt-15 g-pb-25\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<ng-container *ngIf=\"!loading\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t<div class=\"g-disp-inlblock g-valign-mid g-cursor-pointer\" (click)=\"goBack()\">\r\n\t\t\t\t\t\t\t\t<img class=\"g-pt-10 g-maxw-100px\" src=\"assets/img/challenges/back-arrow.svg\" alt=\"Back\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-disp-inlblock g-ml-05\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-font-1 title-clr g-fs-10 g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t{{ challengeData?.data.name }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"l-challenge-overview-subtitle g-fs-08\">\r\n\t\t\t\t\t\t\t\t\t{{ challengeData?.data.frg_challenge_sector_id.name | titlecase }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2 text-right\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"currentUser.userType == 'seeker' && isAuthor\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default l-add-anchor-btn g-pt-05 g-pb-05\" routerLink=\"/seeker/user/{{ currentUser.slug }}/challenge/{{ anchorData?.data.id }}/edit\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-pencil-alt g-mr-05\"></i> Edit Challenge Brief\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"currentUser.userType == 'provider' && !isAuthor\">\r\n\t\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-default l-add-anchor-btn g-pt-05 g-pb-05\"\r\n\t\t\t\t\t\t\t\t\trouterLink=\"/provider/user/{{ currentUser.slug }}/application/create\"\r\n\t\t\t\t\t\t\t\t\t[queryParams]=\"{\r\n\t\t\t\t\t\t\t\t\t\tsectorId: challengeData?.data.frg_challenge_sector_id.id,\r\n\t\t\t\t\t\t\t\t\t\tchallengeId: challengeId,\r\n\t\t\t\t\t\t\t\t\t\tanchorId: anchorId\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\tApply for Challenge\r\n\t\t\t\t\t\t\t\t\t<i class=\"far fa-file-alt g-ml-05\"></i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- skeleton loader -->\r\n\t\t\t\t<ng-container *ngIf=\"loading\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '24px', width: '60%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '250px', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2 text-right\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '35px', width: '120px', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row g-mt-20\">\r\n\t\t\t\t<div class=\"col-sm-7\">\r\n\t\t\t\t\t<div class=\"brief-section\">\r\n\t\t\t\t\t\t<div class=\"section-title\">Challenge Brief</div>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!loading\">\r\n\t\t\t\t\t\t\t<div class=\"brief-container\">\r\n\t\t\t\t\t\t\t\t<div class=\"brief-inner\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"brief-content g-mb-15\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Challenge Summary</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\" [innerHtml]=\"anchorData?.data.challenge_summary\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"brief-content g-mb-15\" *ngIf=\"anchorData?.data.challenge_scenario != ''\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Challenge Scenario</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\" [innerHtml]=\"anchorData?.data.challenge_scenario\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"brief-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Profile of Target Beneficiaries</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\" [innerHtml]=\"anchorData?.data.target_beneficiaries\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<hr />\r\n\t\t\t\t\t\t\t\t<div class=\"brief-inner\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"brief-content g-mb-15\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mb-12\">Solution Requirements</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"sub-title\">Functional requirements of the end-user</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\" [innerHtml]=\"anchorData?.data.functional_requirements\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"brief-content g-mb-15\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"sub-title\">Functional & Operational capabilities</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\" [innerHtml]=\"anchorData?.data.functional_operational_capabilities\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"brief-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Expected Tangible Outcomes & Benefits</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\" [innerHtml]=\"anchorData?.data.tangible_outcomes_benefits\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<hr />\r\n\t\t\t\t\t\t\t\t<div class=\"brief-inner\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"brief-content g-mb-15\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Deployment Constraints</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\" [innerHtml]=\"anchorData?.data.deployment_constraints\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"brief-content g-mb-15\" *ngIf=\"anchorData?.data.gaps_current_solution != ''\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Gaps in current solution</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\" [innerHtml]=\"anchorData?.data.gaps_current_solution\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"brief-content g-mb-15\" *ngIf=\"anchorData?.data.other_requirements_remarks != ''\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Other Requirements/Remarks</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\" [innerHtml]=\"anchorData?.data.other_requirements_remarks\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"brief-content\" *ngIf=\"anchorData?.data.info_links.length > 0\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Links to Additional Information</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 l-desc-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"anchorData?.data.info_links[0] != ''\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"l-overview-card-links\" [href]=\"anchorData?.data.info_links[0]\" target=\"_blank\"> Additional Information Document One </a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"anchorData?.data.info_links[1] != ''\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"l-overview-card-links\" [href]=\"anchorData?.data.info_links[1]\" target=\"_blank\"> Additional Information Document One </a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"anchorData?.data.info_links[2] != ''\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"l-overview-card-links\" [href]=\"anchorData?.data.info_links[2]\" target=\"_blank\"> Additional Information Document One </a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"loading\">\r\n\t\t\t\t\t\t\t<div class=\"brief-container\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of [].constructor(5)\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"skeleton-loader-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '24px', width: '60%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" count=\"3\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-5\">\r\n\t\t\t\t\t<div class=\"section-title\">Pilots</div>\r\n\t\t\t\t\t<div class=\"l-overview-pilot-card g-white-bg g-bdrrad-4px\">\r\n\t\t\t\t\t\t<div class=\"l-over-pilot-card-img g-disp-inlblock\">\r\n\t\t\t\t\t\t\t<img src=\"assets/img/challenges/dust-bin.svg\" alt=\"delete\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"l-over-pilot-card-desc g-disp-inlblock g-ml-05\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07\">No active Pilots found at this moment</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<anchor-widget [anchorId]=\"anchorId\" [challengeId]=\"challengeId\"></anchor-widget>\r\n\t\t\t\t\t<solution-widget [solutionsId]=\"relatedSolutionIds\"></solution-widget>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<!-- <ng-container *ngIf=\"loading\">\r\n        <div class=\"section-loader\">\r\n            <div class=\"loader-wrp\">\r\n                <div class=\"loader-inner text-center\">\r\n                    <div class=\"lds-ring\">\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container> -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/challenge.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/challenge.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/challenges-anchor/challenges-anchor.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/challenges-anchor/challenges-anchor.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-blue-bg\">\r\n\t<div class=\"container g-pt-20 g-pb-20\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-xs-9 g-pr-0\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control search-input g-h-24\" id=\"search\" placeholder=\"Search for Challenges, Solutions, and Innovators\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-1 g-p-0\">\r\n\t\t\t\t<button type=\"button\" class=\"btn g-p-bg g-w-clr g-h-24 g-pl-08 g-pr-08 search-btn\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-2 g-pl-0\">\r\n\t\t\t\t<ng-container *ngIf=\"currentUserType == 'seeker'\">\r\n\t\t\t\t\t<!-- <button type=\"button\" class=\"btn g-white-bg g-p-clr g-fw-500 g-w-100per g-pt-07 g-pb-07\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp;Create Challenge</button> -->\r\n\t\t\t\t\t<app-create-challenge-btn-modal></app-create-challenge-btn-modal>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"currentUserType == 'provider'\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-white-bg g-p-clr g-fw-500 g-w-100per g-pt-07 g-pb-07\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp;Request For Pilot</button>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"container g-pt-20 g-pb-50 challenge-parent-wrp\">\r\n\t<div class=\"\">\r\n\t\t<div class=\"card g-pt-20\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<ng-container *ngIf=\"!loading\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-12 g-fw-500 g-black5-clr\">{{ challenge?.data.name }}</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-06\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-700 g-bdr-005 g-p-04 g-black5-brdr g-bdrrad-4px g-trans-bg g-w-200px text-center g-grey3-clr\">\r\n\t\t\t\t\t\t\t\t\t{{ challenge?.data.frg_challenge_sector_id.name | uppercase }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-14 g-fw-500 text-center\">\r\n\t\t\t\t\t\t\t\t{{ challenge?.data.solutions }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-04\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-500 text-center\">Solutions</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-14 g-fw-500 text-center\">0</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-04\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-500 text-center\">Applications</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-14 g-fw-500 text-center\">0</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-04\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-500 text-center\">Pilots</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"loading\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '24px', width: '100%', margin: '0px 0px 8px', 'background-color': '#C2C7C8' }\">\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-06\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '40px', width: '200px', margin: '0px 0px 0px', 'background-color': '#C2C7C8' }\">\r\n\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2 text-center\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" appearance=\"circle\" [theme]=\"{ 'border-radius': '2px', height: '30px', width: '35px', margin: '0px 0px 4px', 'background-color': '#C2C7C8' }\">\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '40%', margin: '0px 0px', 'background-color': '#C2C7C8' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2 text-center\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" appearance=\"circle\" [theme]=\"{ 'border-radius': '2px', height: '30px', width: '35px', margin: '0px 0px 4px', 'background-color': '#C2C7C8' }\">\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '40%', margin: '0px 0px', 'background-color': '#C2C7C8' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2 text-center\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" appearance=\"circle\" [theme]=\"{ 'border-radius': '2px', height: '30px', width: '35px', margin: '0px 0px 4px', 'background-color': '#C2C7C8' }\">\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '40%', margin: '0px 0px', 'background-color': '#C2C7C8' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<ng-container *ngIf=\"currentUserType == 'seeker' && !loading\">\r\n\t\t\t<app-seeker-view [anchorLength]=\"challenge?.data.anchors.length\" [challengeData]=\"challenge?.data\" (anchorAdded)=\"challengeAnchored($event)\"> </app-seeker-view>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngIf=\"currentUserType == 'provider' && !loading\">\r\n\t\t\t<app-provider-view [challengeData]=\"challenge?.data\" [anchorLength]=\"challenge?.data.anchors.length\"></app-provider-view>\r\n\t\t</ng-container>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/components/anchor-widget/anchor-widget.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/components/anchor-widget/anchor-widget.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"widget-wrap\">\r\n    <div class=\"section-title\">\r\n        Anchors\r\n    </div>\r\n    <div class=\"widget-container\">\r\n        <ng-container *ngIf=\"!widgetLoading\">\r\n            <ng-container *ngIf=\"anchorData.length > 0; else noAnchors\">\r\n                <div class=\"anchor-item\" *ngFor=\"let item of anchorData\">\r\n                    <div class=\"anchor-details\">\r\n                        <div class=\"city-name\">\r\n                            {{item.frg_seeker_id.frg_smart_city_id.name}}\r\n                        </div>\r\n                        <div class=\"author-info\">\r\n                            by <span routerLink=\"/seeker/{{item.frg_seeker_id.slug}}\">\r\n                                {{item.frg_seeker_id.fullname | titlecase}}\r\n                            </span>\r\n                            <span>{{item.created_at | date }}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"stats\">\r\n                        <span>{{item.solutions.length}}</span>\r\n                        Solutions\r\n                    </div>\r\n                    <div class=\"stats\">\r\n                        <span>0</span>\r\n                        Pilot\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-template #noAnchors>\r\n                <div class=\"no-anchors\">\r\n                    <img src=\"assets/img/challenges/dust-bin.svg\" alt=\"delete\">\r\n                    <span class=\"g-fs-07 g-ml-05 body-grey-clr\">No other anchors found at this moment</span>\r\n                </div>\r\n            </ng-template>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"widgetLoading\">\r\n            <div class=\"anchor-skeleton\" *ngFor=\"let item of [].constructor(5)\">\r\n                <div>\r\n                    <ngx-skeleton-loader animation=\"pulse\"\r\n                        [theme]=\"{ 'border-radius': '2px', height: '16px',width:'150px', margin:'0px 0px 5px','display':'block' }\">\r\n                    </ngx-skeleton-loader>\r\n                </div>\r\n                <div>\r\n                    <ngx-skeleton-loader animation=\"pulse\"\r\n                        [theme]=\"{ 'border-radius': '2px', height: '14px',width:'100%',margin:'0px 0px 0px' }\">\r\n                    </ngx-skeleton-loader>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/components/solution-widget/solution-widget.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/components/solution-widget/solution-widget.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"solutionsId != undefined\">\r\n\t<div class=\"widget-wrap\">\r\n\t\t<div class=\"section-title\">Solutions</div>\r\n\t\t<div class=\"widget-container\">\r\n\t\t\t<ng-container *ngIf=\"!widgetLoading\">\r\n\t\t\t\t<ng-container *ngIf=\"solutionData.length > 0; else noSolutions\">\r\n\t\t\t\t\t<div class=\"solution-item\" *ngFor=\"let item of solutionData\">\r\n\t\t\t\t\t\t<div class=\"featured-image\">\r\n\t\t\t\t\t\t\t<div class=\"img-wrp g-cursor-pointer\" routerLink=\"/solution/{{ item.id }}\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.images && item.images.length > 0\">\r\n\t\t\t\t\t\t\t\t\t<img [src]=\"serverUrl + item.images[0]\" alt=\"featured-image\" />\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t{{ item.name.length > 30 ? (item.name | slice: 0:30) + \"...\" : item.name }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"author-info\">\r\n\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t<span routerLink=\"/provider/{{ item.frg_provider_id.slug }}\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\titem.frg_provider_id.startup_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t? (item.frg_provider_id.startup_company_name | slice: 0:20 | titlecase) + \"...\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t: (item.frg_provider_id.startup_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t\t\t\t\t&nbsp;<span class=\"badge\">Startup</span>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\titem.frg_provider_id.enterprise_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t? (item.frg_provider_id.enterprise_company_name | slice: 0:20 | titlecase) + \"...\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t: (item.frg_provider_id.enterprise_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t\t\t\t\t&nbsp;<span class=\"badge\">Enterprise</span>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\titem.frg_provider_id.fullname.length > 20 ? (item.frg_provider_id.fullname | slice: 0:20 | titlecase) + \"...\" : (item.frg_provider_id.fullname | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t\t\t\t\t&nbsp;<span class=\"badge\">Individual</span>\r\n\t\t\t\t\t\t\t\t\t</ng-container> </span\r\n\t\t\t\t\t\t\t\t>{{ item.created_at | date }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-template #noSolutions>\r\n\t\t\t\t\t<div class=\"no-solutions\">\r\n\t\t\t\t\t\t<img src=\"assets/img/challenges/dust-bin.svg\" alt=\"delete\" />\r\n\t\t\t\t\t\t<span class=\"g-fs-07 g-ml-05 body-grey-clr\">No other solutions found at this moment</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"widgetLoading\">\r\n\t\t\t\t<div class=\"solution-skeleton\" *ngFor=\"let item of [].constructor(5)\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\theight: '64px',\r\n\t\t\t\t\t\t\t\twidth: '64px',\r\n\t\t\t\t\t\t\t\t'border-radius': '4px',\r\n\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px 0px 0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/create-challenge/create-challenge.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/create-challenge/create-challenge.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!pageLoading\">\r\n\t<div class=\"container a-creat-chlng g-mt-25\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t<div class=\"g-mb-15 g-mt-06\">\r\n\t\t\t\t\t<a [routerLink]=\"['/discover/challenges']\" class=\"g-p-clr g-fs-09 g-fw-500\"><i class=\"far fa-angle-left\"></i> Go Back to Challenges</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-group\">\r\n\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t<ul class=\"nav nav-pills nav-stacked a-seeker-edit-profile-opt\">\r\n\t\t\t\t\t\t\t<li [ngClass]=\"{ active: !editChallengeStep1 }\"><a href=\"#creatChallenge\" data-toggle=\"tab\">Create Challenge</a></li>\r\n\t\t\t\t\t\t\t<li class=\"g-mt-0\" [ngClass]=\"{ active: !editChallengeStep2 }\"><a href=\"#challengeDetails\" data-toggle=\"tab\">Challenge Details</a></li>\r\n\t\t\t\t\t\t\t<li class=\"g-mt-0\" [ngClass]=\"{ active: !editChallengeStep3 }\"><a href=\"#solutionRequirements\" data-toggle=\"tab\">Solution Requirements</a></li>\r\n\t\t\t\t\t\t\t<li class=\"g-mt-0\" [ngClass]=\"{ active: !editChallengeStep4 }\"><a href=\"#additionalInformation\" data-toggle=\"tab\">Additional Informations</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-content col-sm-9\">\r\n\t\t\t\t<div id=\"creatChallenge\" class=\"tab-pane\" [ngClass]=\"{ active: !editChallengeStep1 }\" [hidden]=\"editChallengeStep1\">\r\n\t\t\t\t\t<div class=\"g-mb-12\">\r\n\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 bg-blue-clr\">Create Challenge</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-add-challenge-wrp g-w-bg\">\r\n\t\t\t\t\t\t<form [formGroup]=\"editChallengeForm.Step1\" (ngSubmit)=\"stepFormSubmit('Step1')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"g-fs-07 lable-grey g-fw-400\">Challenge Name<span class=\"g-warning-clr\">*</span></label>\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"name\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"ex:Smart water management \"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"name\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.name.touched || isSubmitted.Step1) && formControlStep1.name?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.name.touched || isSubmitted.Step1) && formControlStep1.name.errors?.required\"> Challenge name is required </span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.name.touched || isSubmitted.Step1) && formControlStep1.name.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 30 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.name.touched || isSubmitted.Step1) && formControlStep1.name.errors?.challengeAlreadyExist\">\r\n\t\t\t\t\t\t\t\t\t\tChallenge already exist\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"challenge_sector\" class=\"g-fs-07 lable-grey g-fw-400\">Challenge Sector<span class=\"g-warning-clr\">*</span></label>\r\n\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"challenge_sector\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challenge_sector\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.challenge_sector.touched || isSubmitted.Step1) && formControlStep1.challenge_sector?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Challenge Sector</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!sectorLoading\">\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let sector of challengeSectors?.data\" [value]=\"sector.id\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ sector.name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.challenge_sector.touched || isSubmitted.Step1) && formControlStep1.challenge_sector.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tChallenge Sector is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n\t\t\t\t\t\t\t\t\tNext&nbsp;\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"isLoading\"></i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"challengeDetails\" class=\"tab-pane\" [ngClass]=\"{ active: !editChallengeStep2 }\" [hidden]=\"editChallengeStep2\">\r\n\t\t\t\t\t<div class=\"g-mb-12\">\r\n\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 bg-blue-clr\">Challenge Brief</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-add-challenge-wrp g-w-bg\">\r\n\t\t\t\t\t\t<form [formGroup]=\"editChallengeForm.Step2\" (ngSubmit)=\"stepFormSubmit('Step2')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"g-fs-07 lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\tChallenge Summary<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400 pull-left\"> A 20-40 word description of the challenge or need as desired by the end-users. </span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip title=\"A central monitoring system to detect faults, leakage of current, and breakage of cables in street lights across the city\"></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challengeSummary\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.challengeSummary.touched || isSubmitted.Step2) && formControlStep2.challengeSummary?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.challengeSummary.touched || isSubmitted.Step2) && formControlStep2.challengeSummary.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.challengeSummary.touched || isSubmitted.Step2) && formControlStep2.challengeSummary.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t200 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.challengeSummary.touched || isSubmitted.Step2) && formControlStep2.challengeSummary.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tChallenge Scenario <br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t100-120 word description broadly to help understand the use-cases/applications, including relevant technical & operational requirements, constraints, and\r\n\t\t\t\t\t\t\t\t\t\texpected benefits\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"The city spans around 250 km2 and has about 60,000 streetlights, due to the absence of a centralised monitoring system, maintenance of these streetlights is laborious, expensive and time-consuming. Identifying the exact location of the faulty lamp, leakage of current, or breakage of cables is currently a manual process based on citizen grievances received and consumes about 1-2 working days at an approximate cost of Rs.2000/- per streetlamp. \r\n                            Additionally, unidentified & unchecked current leakage can be life-threatening to both lineman operators & citizens. There needs to be a centralised system that detects the faults in realtime, identifies the type of fault, and locates where the fault has occurred in the city.\r\n                            \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challengeScenario\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.challengeScenario.touched || isSubmitted.Step2) && formControlStep2.challengeScenario?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.challengeScenario.touched || isSubmitted.Step2) && formControlStep2.challengeScenario.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.challengeScenario.touched || isSubmitted.Step2) && formControlStep2.challengeScenario.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tProfile of the Target Beneficiaries<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe the profile of the end-users who face the challenge, including details of what are the current systems/capabilities available and the methods employed\r\n\t\t\t\t\t\t\t\t\t\tto overcome the challenge\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. <span class='g-black5-clr g-fw-500'>Lineman:</span> The service personnel from the electricity department who spends hours in manually identifying faulty street lights and in fixing the same.<br><br>2. <span class='g-black5-clr g-fw-500'>Electricity Department:</span> Officers, junior engineers, and sub-divisional engineers in the electricity department responsible for the operation & maintenance of street lights in the city and managing the linemen in the field. They face challenges in operations & maintenance since it is being done manually and in an unorganised manner.\r\n                            \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"targetBeneficiaries\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.targetBeneficiaries.touched || isSubmitted.Step2) && formControlStep2.targetBeneficiaries?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.targetBeneficiaries.touched || isSubmitted.Step2) && formControlStep2.targetBeneficiaries.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.targetBeneficiaries.touched || isSubmitted.Step2) && formControlStep2.targetBeneficiaries.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.targetBeneficiaries.touched || isSubmitted.Step2) && formControlStep2.targetBeneficiaries.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-row\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\"> Start Date </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"date\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"startDate\"\r\n\t\t\t\t\t\t\t\t\t\t[min]=\"minDate\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.startDate.touched || isSubmitted.Step2) && formControlStep2.startDate?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.startDate.touched || isSubmitted.Step2) && formControlStep2.startDate.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tStart date is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\"> Close Date </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"date\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"closeDate\"\r\n\t\t\t\t\t\t\t\t\t\t[min]=\"minDate\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.closeDate.touched || isSubmitted.Step2) && formControlStep2.closeDate?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.closeDate.touched || isSubmitted.Step2) && formControlStep2.closeDate.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tEnd date is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"\r\n\t\t\t\t\t\t\t\t\t                   formControlStep2.closeDate.touched &&\r\n\t\t\t\t\t\t\t\t\t                   formControlStep2.closeDate.errors?.dateError\r\n\t\t\t\t\t\t\t\t\t                  \">\r\n\t\t\t\t\t\t\t\t\t\tClose Date should not be as start date and should be a higher value\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div id=\"solutionRequirements\" class=\"tab-pane\" [ngClass]=\"{ active: !editChallengeStep3 }\" [hidden]=\"editChallengeStep3\">\r\n\t\t\t\t\t<div class=\"g-mb-12\">\r\n\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 bg-blue-clr\">Challenge Brief</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-add-challenge-wrp g-w-bg\">\r\n\t\t\t\t\t\t<form [formGroup]=\"editChallengeForm.Step3\" (ngSubmit)=\"stepFormSubmit('Step3')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tFunctional Requirements of the end-user<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tFunctional Requirements of the end-user: Brief description of the ‘Jobs to be Done’ including the needs to be fulfilled, gaps to be addressed, or challenges to\r\n\t\t\t\t\t\t\t\t\t\tbe overcome, etc.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. Identification & alerting of the type of fault—non-functioning of lights, leakage of current, and breakage of cable <br><br>\r\n                            2. Identification of the exact location of the faulty street light in the city\r\n                            \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"functionalRequirements\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.functionalRequirements.touched || isSubmitted.Step3) && formControlStep3.functionalRequirements?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep3.functionalRequirements.touched || isSubmitted.Step3) && formControlStep3.functionalRequirements.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep3.functionalRequirements.touched || isSubmitted.Step3) && formControlStep3.functionalRequirements.errors?.maxlength\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep3.functionalRequirements.touched || isSubmitted.Step3) && formControlStep3.functionalRequirements.errors?.minlength\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tFunctional & Operational Capabilities<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescription of the desired features and functionalities to solve the problem with relevant technical and operational requirements\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"Single dashboard/workspace for: <br><br>1. Real-time identification & notification of the type of fault<br>2. Locating the street light in the city where the fault has occurred<br>3. Sending alerts to the user as and when the fault occurs<br>4. Visualisation of the overall condition of street lights across the city from the data gathered\r\n                            \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"operationalCapabilities\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.operationalCapabilities.touched || isSubmitted.Step3) && formControlStep3.operationalCapabilities?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep3.operationalCapabilities.touched || isSubmitted.Step3) && formControlStep3.operationalCapabilities.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep3.operationalCapabilities.touched || isSubmitted.Step3) && formControlStep3.operationalCapabilities.errors?.maxlength\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep3.operationalCapabilities.touched || isSubmitted.Step3) && formControlStep3.operationalCapabilities.errors?.minlength\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tDeployment Constraints<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe the usage, usability and operational constraints/adoption barriers in the broader context of integration to the solution and the environment in which\r\n\t\t\t\t\t\t\t\t\t\tthe desired solution must be used, deployed or operated. Primary Constraints/Adoption barriers include—Total Cost of Ownership, Maintenance/Service,\r\n\t\t\t\t\t\t\t\t\t\tSkills/Expertise, Installation/Integration, Resources/materials, Time consumption, Physical/personal risk, Product training, Changes to habits/process,\r\n\t\t\t\t\t\t\t\t\t\tAccessibility, Inability to assess the quality of the product/service [Risk Perception], Monitoring the usage/deployment, etc.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. <span class='g-black5-clr g-fw-500'>Installation/Integration:</span> The solution should be designed for easy integration with the existing system.<br><br>2. <span class='g-black5-clr g-fw-500'>Product training:</span> The solution should be intuitive/easy to use, requiring less or no training for the users. Also, the solution should not affect the existing workflow significantly.<br><br>3. <span class='g-black5-clr g-fw-500'>Maintenance/Service:</span> The solution should be robust with minimal need for maintenance.\"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"deploymentConstraints\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.deploymentConstraints.touched || isSubmitted.Step3) && formControlStep3.deploymentConstraints?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.deploymentConstraints.touched || isSubmitted.Step3) && formControlStep3.deploymentConstraints.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.deploymentConstraints.touched || isSubmitted.Step3) && formControlStep3.deploymentConstraints.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.deploymentConstraints.touched || isSubmitted.Step3) && formControlStep3.deploymentConstraints.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tExpected Tangible Outcomes & Benefits<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe the tangible benefits and measurable gains expected by the buyer (City Administrators)/user in addressing or overcoming the challenges Gaps in the\r\n\t\t\t\t\t\t\t\t\t\tCurrent Solution: Describe the gaps that are in current solutions or alternative methods being applied today for addressing the problem\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. <span class='g-black5-clr g-fw-500'>Lineman:</span> Lineman can save time and effort which otherwise would have been utilised in manually searching for the faulty street light, diagnosing the problem, etc.<br><br>2. <span class='g-black5-clr g-fw-500'>Electricity Department:</span> Officers, junior engineer, and sub-divisional engineer will get real-time notification of the fault occurrence, thereby reducing the time to address these faults—improving the quality of services provided by the city.\r\n                            \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"tangibleOutcomes\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.tangibleOutcomes.touched || isSubmitted.Step3) && formControlStep3.tangibleOutcomes?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.tangibleOutcomes.touched || isSubmitted.Step3) && formControlStep3.tangibleOutcomes.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.tangibleOutcomes?.touched || isSubmitted.Step3) && formControlStep3.tangibleOutcomes?.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.tangibleOutcomes?.touched || isSubmitted.Step3) && formControlStep3.tangibleOutcomes?.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div id=\"additionalInformation\" class=\"tab-pane\" [ngClass]=\"{ active: !editChallengeStep4 }\" [hidden]=\"editChallengeStep4\">\r\n\t\t\t\t\t<div class=\"g-mb-12\">\r\n\t\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 bg-blue-clr\">Challenge Brief</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-add-challenge-wrp g-w-bg\">\r\n\t\t\t\t\t\t<form [formGroup]=\"editChallengeForm.Step4\" (ngSubmit)=\"stepFormSubmit('Step4')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tGaps in the Current Solution <br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe the gaps that are in current solutions or alternative methods being applied today for addressing the problem\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. Citizens raise grievances for faulty street lights through call, text, WhatsApp, or Web portal; hence fault detection is unorganised, non-centralised, and is not real-time.<br>2. The exact location of where the fault has occurred is not known, so the lineman has to move along with their vehicle to identify the faulty street light—requiring a lot of time & effort.<br>3. The lineman also has to manually diagnose the problem and fix the same.<br>4. The whole process from locating, diagnosing, and fixing takes at least 1 or 2 days after the request is raised.\r\n                      \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"gaps\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep4.gaps.touched || isSubmitted.Step4) && formControlStep4.gaps?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep4.gaps.touched || isSubmitted.Step4) && formControlStep4.gaps.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tOther Requirements/Remarks<br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tAdditional critical Information which remains uncovered above can be presented here (ex: Regulatory requirements, certifications, quality standards, etc).\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"otherRequirements\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep4.otherRequirements.touched || isSubmitted.Step4) && formControlStep4.otherRequirements?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep4.otherRequirements.touched || isSubmitted.Step4) && formControlStep4.otherRequirements.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tLinks to Additional Informations<br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tTo help innovators understand the situation better, you may provide additional information in the form of images or links\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"additionalLink1\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep4.additionalLink1.touched || isSubmitted.Step4) && formControlStep4.additionalLink1?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep4.additionalLink1.touched || isSubmitted.Step4) && formControlStep4.additionalLink1.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tInvalid url format.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"additionalLink2\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep4.additionalLink2.touched || isSubmitted.Step4) && formControlStep4.additionalLink2?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep4.additionalLink2.touched || isSubmitted.Step4) && formControlStep4.additionalLink2.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tInvalid url format.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"additionalLink3\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep4.additionalLink3.touched || isSubmitted.Step4) && formControlStep4.additionalLink3?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep4.additionalLink3.touched || isSubmitted.Step4) && formControlStep4.additionalLink3.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tInvalid url format.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n\t\t\t\t\t\t\t\t\tSubmit&nbsp;\r\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"submitLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n<ng-container *ngIf=\"pageLoading\">\r\n\t<div class=\"loader-wrp\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/provider-view/provider-view.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/provider-view/provider-view.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"anchorLength == 0\">\r\n\t<div class=\"g-pt-40 g-pb-40 g-black5-clr g-fs-10 text-center\">No anchors made.</div>\r\n</ng-container>\r\n<ng-container *ngIf=\"!loading && anchorLength != 0\">\r\n\t<div class=\"row g-pt-25 g-pb-25\">\r\n\t\t<ng-container *ngFor=\"let anchor of anchors?.data\">\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"panel g-pt-09 g-pb-10 g-pl-12 g-pr-12 g-w-bg g-bdr-01 g-brdr-grey g-bdrrad-5px\">\r\n\t\t\t\t\t\t<div class=\"panel-body g-p-0\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-500\" innerHtml=\"{{ anchor.challenge_summary.length > 100 ? (anchor.challenge_summary | slice: 0:100) + '..' : anchor.challenge_summary }}\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row g-mt-27\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-grey3-clr\">\r\n\t\t\t\t\t\t\t\t\t\t\tAnchored by\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500 g-cursor-pointer\" routerLink=\"/seeker/{{ anchor.frg_seeker_id.slug }}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ anchor.frg_seeker_id.fullname.split(\" \")[0] | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\tfor\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ anchor.frg_seeker_id.frg_smart_city_id.name | uppercase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4 text-right\">\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<button [routerLink]=\"['anchor', anchor.id]\" class=\"btn g-bdr-005 g-w-bg g-black5-brdr g-mt-05 g-pt-05 g-pb-05 g-fs-05 g-pl-05 g-pr-05 view-application-btn g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t\tREAD MORE &nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-right g-grey3-clr\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</ng-container>\r\n<ng-container *ngIf=\"!relatedSolutionsLoading && solutionsByCurrentUser.length > 0\">\r\n\t<div>\r\n\t\t<div class=\"row g-mb-15\">\r\n\t\t\t<div class=\"col-xs-5 g-pr-0\">\r\n\t\t\t\t<div class=\"g-blue3-bg g-h-01 g-mt-05\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-2 text-center g-p-0\">\r\n\t\t\t\t<div class=\"g-fs-09 g-lh-11 g-fw-500 g-p-clr\">YOUR SOLUTION</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-5 g-pl-0\">\r\n\t\t\t\t<div class=\"g-blue3-bg g-h-01 g-mt-05\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<ng-container *ngFor=\"let solution of solutionsByCurrentUser\">\r\n\t\t\t<div class=\"solution-expanded-wrp\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<div id=\"solutionImageSlider\" class=\"carousel slide carousel-fade\" data-interval=\"false\" *ngIf=\"solution.images\">\r\n\t\t\t\t\t\t\t<!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t<div class=\"item\" *ngFor=\"let image of solution.images; let index = index\" [class.active]=\"index == 0\">\r\n\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + image\" alt=\"solution image\" [hidden]=\"imagesLoading\" (load)=\"this.imagesLoading = false\" />\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"imagesLoading\" class=\"image-placeholder\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- Indicators -->\r\n\t\t\t\t\t\t\t<ol class=\"carousel-indicators g-pt-15\">\r\n\t\t\t\t\t\t\t\t<li data-target=\"#solutionImageSlider\" *ngFor=\"let image of solution.images; let index = index\" [class.active]=\"index == 0\" [attr.data-slide-to]=\"index\">\r\n\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + image\" alt=\"\" [hidden]=\"imagesLoading\" (load)=\"this.imagesLoading = false\" />\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"imagesLoading\" class=\"image-placeholder-nav-dots\"></div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t<!-- Left and right controls -->\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"solution.images.length > 1\">\r\n\t\t\t\t\t\t\t\t<a class=\"left carousel-control\" href=\"#solutionImageSlider\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a class=\"right carousel-control\" href=\"#solutionImageSlider\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t<!-- <div class=\"pilot-item-wrp\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-7\">\r\n                                        <div class=\"g-fs-08 g-lh-10 g-fw-500 g-black19-clr g-h-28 a-discover-title-cnt\">\r\n                                            Lorem ipsum dolor sit amet, consectr adipiscing elit. Aliquam velit lectus.\r\n                                        </div>\r\n                                        <div class=\"g-fs-07 g-lh-08 g-black8-clr\">\r\n                                             with Venu Shashtri for \r\n                                             <span class=\"g-fs-06 g-w-clr g-fw-600 g-p-bg g-pt-02 g-pb-02 g-pl-03 g-pr-03 g-bdrrad-4px\">\r\n                                                CHENNAI\r\n                                            </span>                                    \r\n                                        </div>\r\n                                        <div class=\"g-fs-06 g-fw-400 g-black8-clr\">\r\n                                            Started on 1 Jul 2020 \r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-5 text-center\">\r\n                                        <div class=\"g-fs-13 g-lh-10 g-fw-500 g-black19-clr g-mb-04\">\r\n                                            1 months\r\n                                        </div>\r\n                                        <div class=\"g-fs-07 g-lh-08 g-black8-clr g-mb-10\">\r\n                                            Pilot Duration                                            \r\n                                       </div>\r\n                                       <button class=\"pilot-btn\">\r\n                                           OPEN PILOT&nbsp;\r\n                                           <i class=\"fas fa-external-link-alt\"></i>\r\n                                       </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-fw-500 g-blue3-clr\">\r\n\t\t\t\t\t\t\t\t\t{{ solution.name }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\tclass=\"g-fs-06 g-bdrrad-4px g-disp-inlblock text-center g-mt-04 g-w-clr g-fw-700 g-pt-01 g-pb-01 g-pl-06 g-pr-06\"\r\n\t\t\t\t\t\t\t\t\t[class.g-grn-bg]=\"solution.stage == 'Pilot Certified'\"\r\n\t\t\t\t\t\t\t\t\t[class.g-yellow-bg]=\"solution.stage == 'Pre Pilot'\"\r\n\t\t\t\t\t\t\t\t\t[class.g-yellow-bg]=\"solution.stage == 'Pilot'\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t{{ solution.stage | uppercase }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-grey4-clr\">Posted on {{ solution.created_at | date: \"d MMM yyyy\" }}</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-grey4-clr\">Last edited on {{ solution.updated_at | date: \"d MMM yyyy\" }}</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Challenge Sector</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let sector of solution.challenge_sectors\">\r\n\t\t\t\t\t\t\t\t<span class=\"g-disp-inlblock g-p-03 g-mr-03 g-bdrrad-4px g-fs-06 primary-grey-bg g-white-clr\">\r\n\t\t\t\t\t\t\t\t\t{{ sector.name | titlecase }}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<!-- <div class=\"g-fs-07 g-fw-400 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t{{ solution.frg_challenge_sector_id.name | titlecase }}\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Challenges</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let challenge of solution.challenges\">\r\n\t\t\t\t\t\t\t\t<span class=\"g-disp-inlblock g-p-03 g-mr-03 g-mb-02 g-bdrrad-4px g-fs-06 primary-grey-bg g-white-clr\">\r\n\t\t\t\t\t\t\t\t\t{{ challenge.name }}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Market Domain</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let domain of solution.market_domain\">\r\n\t\t\t\t\t\t\t\t<span class=\"g-disp-inlblock g-p-03 g-mr-03 g-mb-02 g-bdrrad-4px g-fs-06 primary-grey-bg g-white-clr\">\r\n\t\t\t\t\t\t\t\t\t{{ domain }}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Solution Brief</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\" [innerHtml]=\"solution.solution_brief\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Value Proposition</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\" [innerHtml]=\"solution.value_proposition\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Tangible Benefits</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\" [innerHtml]=\"solution.tangible_benifits\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-30 text-right\">\r\n\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\tclass=\"btn g-bdr-005 g-w-bg g-black5-brdr g-pt-02 g-pb-02 g-pl-04 g-pr-04 view-application-btn g-fw-700 g-fs-06\"\r\n\t\t\t\t\t\t\t\t[routerLink]=\"['/provider/user/' + solution.frg_provider_id.slug + '/solution/' + solution.id]\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\tVIEW MORE\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</ng-container>\r\n<div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-5 g-pr-0\">\r\n\t\t\t<div class=\"g-blue3-bg g-h-01 g-mt-05\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-2 text-center g-p-0\">\r\n\t\t\t<div class=\"g-fs-09 g-lh-11 g-fw-500 g-p-clr\">SOLUTIONS</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-5 g-pl-0\">\r\n\t\t\t<div class=\"g-blue3-bg g-h-01 g-mt-05\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"challenge-offering-wrp\">\r\n\t<ng-container *ngIf=\"!relatedSolutionsLoading\">\r\n\t\t<div class=\"offerings-card-wrapper\">\r\n\t\t\t<ng-container *ngIf=\"solutionsByCurrentUser.length == 0 && relatedSolutions?.data.length == 0\">\r\n\t\t\t\t<div class=\"g-black5-clr g-pt-40 text-center\">No solutions found.</div>\r\n\t\t\t\t<div class=\"text-center g-pt-40 add-solution-card-wrp\">\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\tclass=\"add-solution-card g-cursor-pointer\"\r\n\t\t\t\t\t\trouterLink=\"/provider/user/{{ currentUser.slug }}/solutions/create\"\r\n\t\t\t\t\t\t[queryParams]=\"{\r\n\t\t\t\t\t\t\tcataloguedFor: cataloguedFor\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t<span class=\"g-fs-07 g-fw-700 title-clr\"> ADD YOUR SOLUTION </span>&nbsp; <span class=\"g-fs-07 g-fw-700 title-clr\"> <i class=\"fa fa-plus g-fs-08\" aria-hidden=\"true\"></i> </span>&nbsp;\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<div class=\"row g-pt-19\">\r\n\t\t\t\t<ng-container *ngIf=\"solutionsByCurrentUser.length == 0 && relatedSolutions?.data.length > 0\">\r\n\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"col-solution-card-wrp\"\r\n\t\t\t\t\t\t\trouterLink=\"/provider/user/{{ currentUser.slug }}/solutions/create\"\r\n\t\t\t\t\t\t\t[queryParams]=\"{\r\n\t\t\t\t\t\t\t\tcataloguedFor: cataloguedFor\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<div class=\"solution-card-inner\">\r\n\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-fw-700 title-clr\"> ADD YOUR SOLUTION </span>&nbsp; <span class=\"g-fs-07 g-fw-700 title-clr\"> <i class=\"fa fa-plus g-fs-08\" aria-hidden=\"true\"></i> </span>&nbsp;\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div class=\"col-md-4\" *ngFor=\"let solution of relatedSolutions?.data\">\r\n\t\t\t\t\t<div class=\"solution-card-wrp\" [routerLink]=\"['/solution', solution.id]\" [state]=\"hellow\">\r\n\t\t\t\t\t\t<div class=\"solution-meta\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-500 g-black19-clr g-h-28 a-discover-title-cnt\">\r\n\t\t\t\t\t\t\t\t{{ solution.name.length > 70 ? (solution.name | slice: 0:70) + \"..\" : solution.name }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\" *ngIf=\"solution.provider_role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t{{ solution.startup_name.length > 20 ? (solution.startup_name | slice: 0:20 | titlecase) + \"..\" : (solution.startup_name | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t&nbsp;<span><img src=\"../../../assets/img/startup_up_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>startup</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\" *ngIf=\"solution.provider_role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t{{ solution.enterprise_name.length > 20 ? (solution.enterprise_name | slice: 0:20 | titlecase) + \"..\" : (solution.enterprise_name | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t&nbsp;<span><img src=\"../../../assets/img/enterprise_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Enterprise</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\" *ngIf=\"solution.provider_role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t{{ solution.provider_name.length > 20 ? (solution.provider_name | slice: 0:20 | titlecase) + \"..\" : (solution.provider_name | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t&nbsp;<span><img src=\"../../../assets/img/individual_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Individual</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-400 g-black8-clr\">Posted on {{ solution.created_at | date: \"d MMM yyyy\" }}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"relatedSolutionsLoading\">\r\n\t\t<div class=\"offerings-card-wrapper\">\r\n\t\t\t<div class=\"row g-pt-19\">\r\n\t\t\t\t<div class=\"col-md-4\" *ngFor=\"let item of [].constructor(6)\">\r\n\t\t\t\t\t<div class=\"skeleton-card-wrp\">\r\n\t\t\t\t\t\t<div class=\"solution-meta\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-500 g-black19-clr g-h-28 a-discover-title-cnt\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '18px', width: '100%', margin: '0px 0px 5px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '180px', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-08\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '140px', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/seeker-view/seeker-view.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/seeker-view/seeker-view.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"anchorLength == 0\" class=\"g-pt-25 g-pb-25 g-black5-clr g-fs-10 text-center\">\r\n\tNo anchors created.\r\n\t<span class=\"g-blue3-clr g-cursor-pointer\" routerLink=\"anchor/add\"> Add Anchor </span>\r\n</div>\r\n<div *ngIf=\"anchorLength > 0\" class=\"g-bdr-005 g-black5-brdr g-bdrrad-5px g-mt-50 g-mb-20 g-pt-15 g-pb-15\">\r\n\t<div class=\"text-center\">\r\n\t\t<span class=\"g-fs-07 g-fw-700 g-p-clr g-cursor-pointer\" routerLink=\"anchor/add\"> ADD ANCHOR </span>&nbsp;\r\n\t\t<span class=\"g-fs-07 g-fw-700 g-p-clr\"> <i class=\"fa fa-plus g-fs-08\" aria-hidden=\"true\"></i> </span>&nbsp; <span class=\"g-fs-07 g-fw-700 g-black5-clr\">FOR</span>&nbsp;\r\n\t\t<span class=\"g-fs-06 g-w-clr g-fw-600 g-p-bg g-pt-02 g-pb-02 g-pl-03 g-pr-03 g-bdrrad-4px\">\r\n\t\t\t{{ seekerCity?.name | uppercase }}\r\n\t\t</span>\r\n\t</div>\r\n</div>\r\n<ng-container *ngIf=\"!loading && anchorLength != 0\">\r\n\t<ul class=\"nav nav-tabs g-mb-20 anchor-tabs\">\r\n\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#your_anchors\">Your Anchor</a></li>\r\n\t\t<li><a data-toggle=\"tab\" href=\"#other_anchors\">Other Anchors & Solutions</a></li>\r\n\t</ul>\r\n\t<div class=\"tab-content\">\r\n\t\t<div id=\"your_anchors\" class=\"tab-pane fade in active\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<ng-container *ngFor=\"let anchor of anchorsByCurrentUser\">\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<div class=\"panel g-pt-09 g-pb-10 g-pl-12 g-pr-12 g-w-bg g-bdr-01 g-brdr-grey g-bdrrad-5px\">\r\n\t\t\t\t\t\t\t<div class=\"panel-body g-p-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-500\" innerHtml=\"{{ anchor.challenge_summary.length > 100 ? (anchor.challenge_summary | slice: 0:100) + '..' : anchor.challenge_summary }}\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row g-mt-27\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-grey3-clr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tAnchored by\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500 g-cursor-pointer\" routerLink=\"/seeker/{{ anchor.frg_seeker_id.slug }}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ anchor.frg_seeker_id.fullname.split(\" \")[0] | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\tfor\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ anchor.frg_seeker_id.frg_smart_city_id.name | uppercase }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 text-right\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<button [routerLink]=\"['anchor', anchor.id]\" class=\"btn g-bdr-005 g-w-bg g-black5-brdr g-mt-05 g-pt-05 g-pb-05 g-fs-05 g-pl-05 g-pr-05 view-application-btn g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tREAD MORE &nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-right g-grey3-clr\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"other_anchors\" class=\"tab-pane fade\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<ng-container *ngFor=\"let anchor of anchors?.data\">\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<div class=\"panel g-pt-09 g-pb-10 g-pl-12 g-pr-12 g-w-bg g-bdr-01 g-brdr-grey g-bdrrad-5px\">\r\n\t\t\t\t\t\t\t<div class=\"panel-body g-p-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-500\" innerHtml=\"{{ anchor.challenge_summary.length > 100 ? (anchor.challenge_summary | slice: 0:100) + '..' : anchor.challenge_summary }}\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row g-mt-27\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-grey3-clr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tAnchored by\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500 g-cursor-pointer\" routerLink=\"/seeker/{{ anchor.frg_seeker_id.slug }}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ anchor.frg_seeker_id.fullname.split(\" \")[0] | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\tfor\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ anchor.frg_seeker_id.frg_smart_city_id.name | uppercase }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 text-right\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<button [routerLink]=\"['anchor', anchor.id]\" class=\"btn g-bdr-005 g-w-bg g-black5-brdr g-mt-05 g-pt-05 g-pb-05 g-fs-05 g-pl-05 g-pr-05 view-application-btn g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tREAD MORE &nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-right g-grey3-clr\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n<div class=\"g-mt-15\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-5 g-pr-0\">\r\n\t\t\t<div class=\"g-blue3-bg g-h-01 g-mt-05\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-2 text-center g-p-0\">\r\n\t\t\t<div class=\"g-fs-09 g-lh-11 g-fw-500 g-blue3-clr\">SOLUTIONS</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-5 g-pl-0\">\r\n\t\t\t<div class=\"g-blue3-bg g-h-01 g-mt-05\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"challenge-offering-wrp\">\r\n\t<ng-container *ngIf=\"!relatedSolutionsLoading\">\r\n\t\t<div class=\"offerings-card-wrapper\">\r\n\t\t\t<ng-container *ngIf=\"relatedSolutions?.data.length == 0\">\r\n\t\t\t\t<div class=\"g-black5-clr g-pt-40 text-center\">No solutions found.</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<div class=\"row g-pt-19\">\r\n\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let solution of relatedSolutions?.data\">\r\n\t\t\t\t\t<div class=\"solution-card-wrp\" [routerLink]=\"['/solution', solution.id]\">\r\n\t\t\t\t\t\t<div class=\"solution-preview\" [ngStyle]=\"solution.images ? { 'background-image': 'url(' + server_url + solution.images[0] + ')' } : ''\"></div>\r\n\t\t\t\t\t\t<div class=\"solution-meta\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-500 g-black19-clr g-h-28 a-discover-title-cnt\">\r\n\t\t\t\t\t\t\t\t{{ solution.name.length > 70 ? (solution.name | slice: 0:70) + \"..\" : solution.name }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\" *ngIf=\"solution.provider_role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t{{ solution.startup_name.length > 20 ? (solution.startup_name | slice: 0:20 | titlecase) + \"..\" : (solution.startup_name | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t&nbsp;<span><img src=\"../../../assets/img/startup_up_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Startup</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\" *ngIf=\"solution.provider_role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t{{ solution.enterprise_name.length > 20 ? (solution.enterprise_name | slice: 0:20 | titlecase) + \"..\" : (solution.enterprise_name | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t&nbsp;<span><img src=\"../../../assets/img/enterprise_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Enterprise</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\" *ngIf=\"solution.provider_role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t{{ solution.provider_name.length > 20 ? (solution.provider_name | slice: 0:20 | titlecase) + \"..\" : (solution.provider_name | titlecase) }}\r\n\t\t\t\t\t\t\t\t\t&nbsp;<span><img src=\"../../../assets/img/individual_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Individual</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-05 g-pb-17\">\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"g-fs-06 g-bdrrad-4px g-disp-inlblock text-center g-mt-04 g-w-clr g-fw-700 g-pt-01 g-pb-01 g-pl-06 g-pr-06\"\r\n                                    [class.g-grn-bg]=\"solution.stage == 'Pilot Certified'\"\r\n                                    [class.g-yellow-bg]=\"solution.stage == 'Pre Pilot'\"\r\n                                    [class.g-yellow-bg]=\"solution.stage == 'Pilot'\">\r\n                                    {{solution.stage | uppercase}}\r\n                                </div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-32\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-400 g-black8-clr\">Posted on {{ solution.created_at | date: \"d MMM yyyy\" }}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"relatedSolutionsLoading\">\r\n\t\t<div class=\"offerings-card-wrapper\">\r\n\t\t\t<div class=\"row g-pt-19\">\r\n\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let item of generateFake(4)\">\r\n\t\t\t\t\t<div class=\"skeleton-card-wrp\">\r\n\t\t\t\t\t\t<div class=\"solution-preview\"></div>\r\n\t\t\t\t\t\t<div class=\"solution-meta\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-500 g-black19-clr g-h-28 a-discover-title-cnt\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '18px', width: '210px', margin: '0px 0px 5px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-03\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '140px', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-05\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '25px', width: '80px', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-10 g-pb-08\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '140px', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/challenge/anchor-challenge/anchor-challenge.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/challenge/anchor-challenge/anchor-challenge.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-challenge-brief-parent{\r\n    min-height: 100vh;\r\n}\r\n\r\n.loader-wrp{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    min-height: 100vh;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.challenge-step-tabs{\r\n    background-color: var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n}\r\n\r\n.challenge-step-tabs div{\r\n    padding:0.736rem;\r\n    font-size: 0.842rem;\r\n    color: var(--body-grey);\r\n    -webkit-transition: all 0.3s ease;\r\n    transition: all 0.3s ease;    \r\n    cursor: pointer;\r\n}\r\n\r\n.challenge-step-tabs div:not(:last-child){\r\n    border-bottom: 1px solid #DEDEDE;\r\n}\r\n\r\n.challenge-step-tabs div:hover,\r\n.challenge-step-tabs div.active{\r\n    background: #DEDEDE;\r\n}\r\n\r\n.step-form-parent{\r\n    padding: 36px;\r\n    background-color: var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    border-radius: 6px;\r\n}\r\n\r\n.flex-row{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.flex-row>div{\r\n    flex-basis: 48%;\r\n}\r\n\r\nlabel{\r\n    font-size: 0.631rem;\r\n    line-height: 1.6;\r\n}\r\n\r\nlabel .field-desp{\r\n    opacity: 0.7;\r\n    font-weight: 300;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL2FuY2hvci1jaGFsbGVuZ2UvYW5jaG9yLWNoYWxsZW5nZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlDQUF5QjtJQUF6Qix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jaGFsbGVuZ2UvYW5jaG9yLWNoYWxsZW5nZS9hbmNob3ItY2hhbGxlbmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1jaGFsbGVuZ2UtYnJpZWYtcGFyZW50e1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5sb2FkZXItd3Jwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhbGxlbmdlLXN0ZXAtdGFic3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uY2hhbGxlbmdlLXN0ZXAtdGFicyBkaXZ7XHJcbiAgICBwYWRkaW5nOjAuNzM2cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjg0MnJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1ib2R5LWdyZXkpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGFsbGVuZ2Utc3RlcC10YWJzIGRpdjpub3QoOmxhc3QtY2hpbGQpe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERURFREU7XHJcbn1cclxuXHJcbi5jaGFsbGVuZ2Utc3RlcC10YWJzIGRpdjpob3ZlcixcclxuLmNoYWxsZW5nZS1zdGVwLXRhYnMgZGl2LmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICNERURFREU7XHJcbn1cclxuXHJcbi5zdGVwLWZvcm0tcGFyZW50e1xyXG4gICAgcGFkZGluZzogMzZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5mbGV4LXJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mbGV4LXJvdz5kaXZ7XHJcbiAgICBmbGV4LWJhc2lzOiA0OCU7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjYzMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbmxhYmVsIC5maWVsZC1kZXNwe1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/challenge/anchor-challenge/anchor-challenge.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/challenge/anchor-challenge/anchor-challenge.component.ts ***!
  \**************************************************************************/
/*! exports provided: AnchorChallengeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorChallengeComponent", function() { return AnchorChallengeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _anchor_challenge_challenge_anchor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../anchor-challenge/challenge-anchor.service */ "./src/app/challenge/anchor-challenge/challenge-anchor.service.ts");
/* harmony import */ var src_app_discover_select_sector_select_sector_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/discover/select-sector/select-sector.service */ "./src/app/discover/select-sector/select-sector.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");













let AnchorChallengeComponent = class AnchorChallengeComponent {
    constructor(_location, toastr, fb, router, route, _challenge, _ss) {
        this._location = _location;
        this.toastr = toastr;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this._challenge = _challenge;
        this._ss = _ss;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
        this.relatedSolutionsId = [];
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
        };
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format("YYYY-MM-DD");
        this.createChallengeForm = {
            Step1: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"],
            Step2: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"],
            Step3: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"],
        };
        this.urlPattern = new RegExp("^(http|https)://");
        this.route.params.subscribe((params) => (this.challengeId = params.id));
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
            yield this.getPrerequisiteData();
            this.createChallengeStep1 = false;
            this.createChallengeStep2 = true;
            this.createChallengeStep3 = true;
            this.createChallengeForm = {
                Step1: this.fb.group({
                    challengeSummary: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                    challengeScenario: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                    targetBeneficiaries: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                    startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                    closeDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                }),
                Step2: this.fb.group({
                    functionalRequirements: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                    operationalCapabilities: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                    deploymentConstraints: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                    tangibleOutcomes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                }),
                Step3: this.fb.group({
                    gaps: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000)]],
                    otherRequirements: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000)]],
                    additionalLink1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
                    additionalLink2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
                    additionalLink3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
                }),
            };
        });
    }
    get formControlStep1() {
        return this.createChallengeForm.Step1.controls;
    }
    get formControlStep2() {
        return this.createChallengeForm.Step2.controls;
    }
    get formControlStep3() {
        return this.createChallengeForm.Step3.controls;
    }
    backClicked() {
        this._location.back();
    }
    gotoStep(step) {
        switch (step) {
            case "step1": {
                this.createChallengeStep1 = false;
                this.createChallengeStep2 = true;
                this.createChallengeStep3 = true;
                break;
            }
            case "step2": {
                this.createChallengeStep1 = true;
                this.createChallengeStep2 = false;
                this.createChallengeStep3 = true;
                break;
            }
            case "step3": {
                this.createChallengeStep1 = true;
                this.createChallengeStep2 = true;
                this.createChallengeStep3 = false;
                break;
            }
        }
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
        }
    }
    ShowNextStep(formIndex) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (formIndex == "Step1" && this.createChallengeForm.Step1.valid) {
                this.gotoStep("step2");
                window.scrollTo(0, 0);
            }
            else if (formIndex == "Step2" && this.createChallengeForm.Step2.valid) {
                this.gotoStep("step3");
                window.scrollTo(0, 0);
            }
            else if (formIndex == "Step3" && this.createChallengeForm.Step3.valid) {
                yield this.createAnchor();
            }
            else {
                this.toastr.error("", "Please provide the required values to proceed further");
            }
        });
    }
    getPrerequisiteData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.pageLoading = true;
                let seekerCityResp = yield this._challenge.getSeekerCity(this.loggedInUser.userTypeId);
                this.seekerCity = seekerCityResp.data.frg_smart_city_id;
                this.challenge = yield this._challenge.getChallenge(this.challengeId);
                this.relatedSolutionsId = this.challenge.data.solutions.map((e) => e.id);
                this.sectorIdsFollowedByUser = yield this._challenge.getSectorIdsFollowedByUser(this.loggedInUser.userTypeId);
                this.pageLoading = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    createAnchor() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.createChallengeForm.Step1.valid && this.createChallengeForm.Step2.valid && this.createChallengeForm.Step3.valid) {
                    this.submitLoading = true;
                    let resp = yield this._challenge.createAnchorForChallenge({
                        data: {
                            challenge_summary: this.createChallengeForm.Step1.value.challengeSummary,
                            challenge_scenario: this.createChallengeForm.Step1.value.challengeScenario,
                            target_beneficiaries: this.createChallengeForm.Step1.value.targetBeneficiaries,
                            start_date: this.createChallengeForm.Step1.value.startDate,
                            end_date: this.createChallengeForm.Step1.value.closeDate,
                            functional_requirements: this.createChallengeForm.Step2.value.functionalRequirements,
                            functional_operational_capabilities: this.createChallengeForm.Step2.value.operationalCapabilities,
                            deployment_constraints: this.createChallengeForm.Step2.value.deploymentConstraints,
                            tangible_outcomes_benefits: this.createChallengeForm.Step2.value.tangibleOutcomes,
                            gaps_current_solution: this.createChallengeForm.Step3.value.gaps,
                            other_requirements_remarks: this.createChallengeForm.Step3.value.otherRequirements,
                            info_links: [this.createChallengeForm.Step3.value.additionalLink1, this.createChallengeForm.Step3.value.additionalLink2, this.createChallengeForm.Step3.value.additionalLink3],
                            challenge_status: "Awaiting Approval",
                            frg_seeker_id: this.loggedInUser.userTypeId,
                            frg_challenge_id: this.challengeId,
                        },
                    });
                    yield Promise.all([
                        this._challenge.associateAnchorAndSmartCity(resp.data.id, this.seekerCity.id),
                        this._challenge.associateChallengeSectorwithCity({
                            sectorId: this.challenge.data.frg_challenge_sector_id.id,
                            smartCityId: this.seekerCity.id,
                        }),
                        this._challenge.associateChallengewithCity({
                            challengeId: this.challenge.data.id,
                            smartCityId: this.seekerCity.id,
                        }),
                    ]);
                    this.saveSectorArr();
                    yield this._challenge.sendNotifications(resp.data.id);
                    this.resetFormFields();
                    this.submitLoading = false;
                    this.toastr.success(`Challenge anchored for ${this.seekerCity.name} successfully`);
                    this.router.navigate([`/challenge/${resp.data.frg_challenge_id}/anchor/${resp.data.id}`]);
                }
                else {
                    this.isSubmitted.Step1 = true;
                    this.isSubmitted.Step2 = true;
                    this.isSubmitted.Step3 = true;
                    this.toastr.error("", "Please provide the required values to proceed further");
                }
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    saveAsDraft() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.createChallengeForm.Step1.valid && this.createChallengeForm.Step2.valid && this.createChallengeForm.Step3.valid) {
                    this.draftLoading = true;
                    var post_data = {
                        data: {
                            status: "draft",
                            challenge_summary: this.createChallengeForm.Step1.value.challengeSummary,
                            challenge_scenario: this.createChallengeForm.Step1.value.challengeScenario,
                            target_beneficiaries: this.createChallengeForm.Step1.value.targetBeneficiaries,
                            start_date: this.createChallengeForm.Step1.value.startDate,
                            end_date: this.createChallengeForm.Step1.value.closeDate,
                            functional_requirements: this.createChallengeForm.Step2.value.functionalRequirements,
                            functional_operational_capabilities: this.createChallengeForm.Step2.value.operationalCapabilities,
                            deployment_constraints: this.createChallengeForm.Step2.value.deploymentConstraints,
                            tangible_outcomes_benefits: this.createChallengeForm.Step2.value.tangibleOutcomes,
                            gaps_current_solution: this.createChallengeForm.Step3.value.gaps,
                            other_requirements_remarks: this.createChallengeForm.Step3.value.otherRequirements,
                            info_links: [this.createChallengeForm.Step3.value.additionalLink1, this.createChallengeForm.Step3.value.additionalLink2, this.createChallengeForm.Step3.value.additionalLink3],
                            challenge_status: "Accepting Solutions",
                            frg_seeker_id: this.loggedInUser.userTypeId,
                            frg_challenge_id: this.challengeId,
                        },
                    };
                    // console.log(post_data)
                    let resp = yield this._challenge.createAnchorForChallenge(post_data);
                    yield Promise.all([
                        this._challenge.associateAnchorAndSmartCity(resp.data.id, this.seekerCity.id),
                        this._challenge.associateChallengeSectorwithCity({
                            sectorId: this.challenge.data.frg_challenge_sector_id.id,
                            smartCityId: this.seekerCity.id,
                        }),
                        this._challenge.associateChallengewithCity({
                            challengeId: this.challenge.data.id,
                            smartCityId: this.seekerCity.id,
                        }),
                    ]);
                    this.saveSectorArr();
                    this.draftLoading = false;
                    this.toastr.info(`Challenge saved as a draft under your profile`);
                    this.resetFormFields();
                    $("#confirmDialog").modal("hide");
                    this._location.back();
                }
                else {
                    this.isSubmitted.Step1 = true;
                    this.isSubmitted.Step2 = true;
                    this.isSubmitted.Step3 = true;
                    this.toastr.warning("All mandatory fields has to be filled before saving as draft", "Mandatory fields required");
                }
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
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
                this.resetFormFields();
                this._location.back();
            }
        });
    }
    saveSectorArr() {
        var tmp_arr = [];
        var sector_post_data = {};
        return new Promise((resolve, reject) => {
            var index = lodash__WEBPACK_IMPORTED_MODULE_9__["indexOf"](this.sectorIdsFollowedByUser, this.challenge.data.frg_challenge_sector_id.id);
            if (index == -1) {
                console.log("true");
                sector_post_data = {
                    frg_challenge_sector_id: this.challenge.data.frg_challenge_sector_id.id,
                    frg_seeker_id: this.loggedInUser.userTypeId,
                };
                tmp_arr.push(sector_post_data);
                this._ss.saveSelectedSectorAPI("seeker", tmp_arr).subscribe((resp) => {
                    if (resp.status == true) {
                        this.toastr.success("", "Sectors added successfully");
                        resolve();
                    }
                });
            }
        });
    }
    resetFormFields() {
        this.createChallengeForm.Step1.reset();
        this.createChallengeForm.Step2.reset();
        this.createChallengeForm.Step3.reset();
        this.createChallengeForm.Step1.markAsPristine();
        this.createChallengeForm.Step2.markAsPristine();
        this.createChallengeForm.Step3.markAsPristine();
    }
};
AnchorChallengeComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _anchor_challenge_challenge_anchor_service__WEBPACK_IMPORTED_MODULE_7__["ChallengeAnchorService"] },
    { type: src_app_discover_select_sector_select_sector_service__WEBPACK_IMPORTED_MODULE_8__["SelectSectorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_12__["LoggedInUserState"])
], AnchorChallengeComponent.prototype, "loggedInUser$", void 0);
AnchorChallengeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-anchor-challenge",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./anchor-challenge.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/anchor-challenge/anchor-challenge.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./anchor-challenge.component.css */ "./src/app/challenge/anchor-challenge/anchor-challenge.component.css")).default]
    })
], AnchorChallengeComponent);



/***/ }),

/***/ "./src/app/challenge/anchor-challenge/challenge-anchor.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/challenge/anchor-challenge/challenge-anchor.service.ts ***!
  \************************************************************************/
/*! exports provided: ChallengeAnchorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeAnchorService", function() { return ChallengeAnchorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ChallengeAnchorService = class ChallengeAnchorService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    associateAnchorAndSmartCity(anchorId, smartCityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/anchors_and_smart_cities/create", {
                data: {
                    frg_anchor_id: anchorId,
                    frg_smart_city_id: smartCityId,
                },
            })
                .toPromise();
        });
    }
    getSeekerCity(seekerId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/seekers/select_slug", {
                slug: {
                    id: seekerId,
                },
            })
                .toPromise();
        });
    }
    associateChallengewithCity(idParams) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let checkIfAssociationAlreadyExist = yield this.http
                .post(this.api_url + "/challenges_and_smart_cities/select_mul", {
                filter: {
                    frg_challenge_id: idParams.challengeId,
                    frg_smart_city_id: idParams.smartCityId,
                },
            })
                .toPromise();
            // console.log('challenge association exist', checkIfAssociationAlreadyExist.status);
            if (!checkIfAssociationAlreadyExist.status) {
                yield this.http
                    .post(this.api_url + "/challenges_and_smart_cities/create", {
                    data: {
                        frg_challenge_id: idParams.challengeId,
                        frg_smart_city_id: idParams.smartCityId,
                    },
                })
                    .toPromise();
            }
            return;
        });
    }
    associateChallengeSectorwithCity(idParams) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let checkIfAssociationAlreadyExist = yield this.http
                .post(this.api_url + "/smart_cities_and_challenge_sectors/select_mul", {
                filter: {
                    frg_challenge_sector_id: idParams.sectorId,
                    frg_smart_city_id: idParams.smartCityId,
                },
            })
                .toPromise();
            // console.log('challenge sector association exist', checkIfAssociationAlreadyExist.status);
            if (!checkIfAssociationAlreadyExist.status) {
                yield this.http
                    .post(this.api_url + "/smart_cities_and_challenge_sectors/create", {
                    data: {
                        frg_challenge_sector_id: idParams.sectorId,
                        frg_smart_city_id: idParams.smartCityId,
                    },
                })
                    .toPromise();
            }
        });
    }
    createAnchorForChallenge(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/anchors/create", postData).toPromise();
        });
    }
    getChallenge(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/challenges/select", { slug: { id: id } }).toPromise();
        });
    }
    getSectorIdsFollowedByUser(cityAdminId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let resp = yield this.http
                .post(this.api_url + "/challenge_sectors_seekers/select_mul", {
                filter: {
                    frg_seeker_id: cityAdminId,
                },
            })
                .toPromise();
            let sectorIds = resp.data.map((e) => e.frg_challenge_sector_id);
            return sectorIds;
        });
    }
    sendNotifications(anchorId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/anchors/new_anchor_notification", {
                slug: { id: anchorId },
            })
                .toPromise();
        });
    }
};
ChallengeAnchorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ChallengeAnchorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ChallengeAnchorService);



/***/ }),

/***/ "./src/app/challenge/challenge-overview/challenge-overview.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/challenge/challenge-overview/challenge-overview.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".anchor-wrp{\r\n    min-height:100vh;\r\n}\r\n\r\n.section-loader{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 100%;\r\n    min-height:100vh;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.l-challenge-over-sec-1-cont{\r\n    border-top:1px solid #DEE0E6;\r\n    border-bottom: 1px solid #DEE0E6;\r\n}\r\n\r\n.l-challenge-overview-subtitle{\r\n    color:#999;\r\n}\r\n\r\n.l-add-anchor-btn,.l-add-anchor-btn:hover,.l-add-anchor-btn:focus{\r\n    background:var(--primary-green);\r\n    color: #FCFCFC;\r\n    box-shadow: none !important;\r\n    outline: none !important;\r\n}\r\n\r\n.l-cohost-btn,\r\n.l-cohost-btn:hover,\r\n.l-cohost-btn:active,\r\n.l-cohost-btn:focus{\r\n    background:var(--white);\r\n    border:1px solid #cccccc !important;\r\n    box-shadow: none !important;\r\n    outline: none !important;\r\n    color:#45474D\r\n}\r\n\r\n.l-challenge-overview-tabs li a{\r\n    border-radius: 0px !important;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    color:#222327;\r\n}\r\n\r\n.l-challenge-overview-tabs li.active > a{\r\n    background: transparent !important;\r\n    color:#222327;\r\n    font-weight: 700;\r\n    border-bottom: 2px solid #222327;\r\n}\r\n\r\n.l-overview-title{\r\n    color: #45474D;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.l-overview-card-cont{\r\n    border: 1px solid #DEDEDE;\r\n    \r\n}\r\n\r\n.l-overview-card-section{\r\npadding: 24px 23px;\r\n}\r\n\r\n.l-overview-card-title{\r\n    color:#0B0C0D;\r\n}\r\n\r\n.l-desc-text{\r\n    color:#45474D;\r\n}\r\n\r\n.l-overview-card-sub-title{\r\n    color:#0B0C0D;\r\n}\r\n\r\n.l-overview-card-links{\r\n    text-decoration: underline !important;\r\n    color: #45474D !important;\r\n}\r\n\r\n.l-overview-col-2-link{\r\n    color:#676A74;\r\n}\r\n\r\n.l-over-pilot-card-img img{\r\n    max-width: 20px;\r\n    margin: auto;\r\n}\r\n\r\n.l-overview-pilot-card{\r\n    padding:1.263rem;\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    margin-bottom: 1.684rem;\r\n}\r\n\r\n.l-over-pilot-card-desc{\r\n    color:#787C87\r\n}\r\n\r\n.l-overview-anch-card{\r\n    padding: 20px 15px;\r\n    border-bottom: 1px solid #DEE0E6;\r\n}\r\n\r\n.l-overview-anch-name{\r\n    color:#4F4F4F\r\n}\r\n\r\n.l-overview-anch-link{\r\n    color:#4F4F4F;\r\n}\r\n\r\n.l-overview-anch-link a{\r\n    text-decoration: underline !important;\r\n    color:#4F4F4F;\r\n}\r\n\r\n.l-overview-anch-date{\r\n    color:#4F4F4F;\r\n}\r\n\r\n.l-overview-sol-card{\r\n    padding: 20px 15px; \r\n    border-bottom: 1px solid #DEE0E6;\r\n}\r\n\r\n.section-title{\r\n    font-size:0.631rem;\r\n    color: #45474D;\r\n    opacity: 0.6;\r\n    margin-bottom:8px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n}\r\n\r\n.brief-container{\r\n    background: var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n}\r\n\r\n.brief-inner,\r\n.skeleton-loader-wrp{\r\n    padding:1.263rem;\r\n}\r\n\r\n.brief-content .title{\r\n    font-size:1.157rem;\r\n    color:#0B0C0D;\r\n    font-weight:500;\r\n    margin-bottom: 0.421rem;    \r\n}\r\n\r\n.brief-content .title .sub-title{\r\n    font-size: 0.947rem;\r\n    color: #0B0C0D;\r\n    opacity: 0.8;\r\n    font-weight:500;\r\n    margin-bottom: 0.421rem; \r\n}\r\n\r\n.brief-content .description{\r\n    color: #45474D;\r\n    font-size: 0.736rem;\r\n    line-height: 1.5;\r\n}\r\n\r\nhr,p{\r\n    margin:0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL2NoYWxsZW5nZS1vdmVydmlldy9jaGFsbGVuZ2Utb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUdBO0lBQ0ksNEJBQTRCO0lBQzVCLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1Qjs7QUFDQTs7OztJQUlJLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QjtBQUNKOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7O0FBRTdCOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZS9jaGFsbGVuZ2Utb3ZlcnZpZXcvY2hhbGxlbmdlLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5jaG9yLXdycHtcclxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWxvYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmwtY2hhbGxlbmdlLW92ZXItc2VjLTEtY29udHtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNERUUwRTY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RFRTBFNjtcclxufVxyXG4ubC1jaGFsbGVuZ2Utb3ZlcnZpZXctc3VidGl0bGV7XHJcbiAgICBjb2xvcjojOTk5O1xyXG59XHJcbi5sLWFkZC1hbmNob3ItYnRuLC5sLWFkZC1hbmNob3ItYnRuOmhvdmVyLC5sLWFkZC1hbmNob3ItYnRuOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS1wcmltYXJ5LWdyZWVuKTtcclxuICAgIGNvbG9yOiAjRkNGQ0ZDO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5sLWNvaG9zdC1idG4sXHJcbi5sLWNvaG9zdC1idG46aG92ZXIsXHJcbi5sLWNvaG9zdC1idG46YWN0aXZlLFxyXG4ubC1jb2hvc3QtYnRuOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2NjY2MgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiM0NTQ3NERcclxufVxyXG4ubC1jaGFsbGVuZ2Utb3ZlcnZpZXctdGFicyBsaSBhe1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiMyMjIzMjc7XHJcbn1cclxuLmwtY2hhbGxlbmdlLW92ZXJ2aWV3LXRhYnMgbGkuYWN0aXZlID4gYXtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojMjIyMzI3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjIyMzI3O1xyXG59XHJcbi5sLW92ZXJ2aWV3LXRpdGxle1xyXG4gICAgY29sb3I6ICM0NTQ3NEQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5sLW92ZXJ2aWV3LWNhcmQtY29udHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbiAgICBcclxufVxyXG4ubC1vdmVydmlldy1jYXJkLXNlY3Rpb257XHJcbnBhZGRpbmc6IDI0cHggMjNweDtcclxufVxyXG4ubC1vdmVydmlldy1jYXJkLXRpdGxle1xyXG4gICAgY29sb3I6IzBCMEMwRDtcclxufVxyXG4ubC1kZXNjLXRleHR7XHJcbiAgICBjb2xvcjojNDU0NzREO1xyXG59XHJcbi5sLW92ZXJ2aWV3LWNhcmQtc3ViLXRpdGxle1xyXG4gICAgY29sb3I6IzBCMEMwRDtcclxufVxyXG4ubC1vdmVydmlldy1jYXJkLWxpbmtze1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDU0NzREICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtb3ZlcnZpZXctY29sLTItbGlua3tcclxuICAgIGNvbG9yOiM2NzZBNzQ7XHJcbn1cclxuLmwtb3Zlci1waWxvdC1jYXJkLWltZyBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmwtb3ZlcnZpZXctcGlsb3QtY2FyZHtcclxuICAgIHBhZGRpbmc6MS4yNjNyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNjg0cmVtO1xyXG59XHJcbi5sLW92ZXItcGlsb3QtY2FyZC1kZXNje1xyXG4gICAgY29sb3I6Izc4N0M4N1xyXG59XHJcbi5sLW92ZXJ2aWV3LWFuY2gtY2FyZHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVFMEU2O1xyXG59XHJcbi5sLW92ZXJ2aWV3LWFuY2gtbmFtZXtcclxuICAgIGNvbG9yOiM0RjRGNEZcclxufVxyXG4ubC1vdmVydmlldy1hbmNoLWxpbmt7XHJcbiAgICBjb2xvcjojNEY0RjRGO1xyXG59XHJcbi5sLW92ZXJ2aWV3LWFuY2gtbGluayBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiM0RjRGNEY7XHJcbn1cclxuLmwtb3ZlcnZpZXctYW5jaC1kYXRle1xyXG4gICAgY29sb3I6IzRGNEY0RjtcclxufVxyXG4ubC1vdmVydmlldy1zb2wtY2FyZHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RFRTBFNjtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGV7XHJcbiAgICBmb250LXNpemU6MC42MzFyZW07XHJcbiAgICBjb2xvcjogIzQ1NDc0RDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIG1hcmdpbi1ib3R0b206OHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5icmllZi1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJyaWVmLWlubmVyLFxyXG4uc2tlbGV0b24tbG9hZGVyLXdycHtcclxuICAgIHBhZGRpbmc6MS4yNjNyZW07XHJcbn1cclxuXHJcbi5icmllZi1jb250ZW50IC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZToxLjE1N3JlbTtcclxuICAgIGNvbG9yOiMwQjBDMEQ7XHJcbiAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjQyMXJlbTsgICAgXHJcbn1cclxuXHJcbi5icmllZi1jb250ZW50IC50aXRsZSAuc3ViLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAwLjk0N3JlbTtcclxuICAgIGNvbG9yOiAjMEIwQzBEO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC40MjFyZW07IFxyXG59XHJcblxyXG4uYnJpZWYtY29udGVudCAuZGVzY3JpcHRpb257XHJcbiAgICBjb2xvcjogIzQ1NDc0RDtcclxuICAgIGZvbnQtc2l6ZTogMC43MzZyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG5ocixwe1xyXG4gICAgbWFyZ2luOjA7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/challenge/challenge-overview/challenge-overview.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/challenge/challenge-overview/challenge-overview.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChallengeOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeOverviewComponent", function() { return ChallengeOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _challenge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../challenge.service */ "./src/app/challenge/challenge.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");








let ChallengeOverviewComponent = class ChallengeOverviewComponent {
    constructor(_anchor, route, location) {
        this._anchor = _anchor;
        this.route = route;
        this.location = location;
        this.isAuthor = false;
        this.otherAnchors = [];
        this.serveUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url;
        this.route.params.subscribe((params) => {
            this.anchorId = params.anchorid;
            this.challengeId = params.id;
        });
        this.loggedInUser$.subscribe((resp) => {
            this.currentUser = resp.LoggedInUser;
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            yield this.fetchAnchorAndChallenge();
            this.loading = false;
        });
    }
    fetchAnchorAndChallenge() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.anchorData = yield this._anchor.getAnchorById(this.anchorId);
                this.isAuthor = this.anchorData.data.frg_seeker_id.id == this.currentUser.userTypeId ? true : false;
                this.challengeData = yield this._anchor.getChallenge(this.challengeId);
                this.otherAnchors = this.challengeData.data.anchors.filter((e) => {
                    if (e.id != this.anchorId)
                        return e;
                });
                let anchorsByChallengeId = yield this._anchor.getAnchorsForChallenge(this.challengeId);
                this.otherAnchors = anchorsByChallengeId.data.filter((e) => {
                    if (e.id != this.anchorId)
                        return e;
                });
                this.relatedSolutionIds = this.challengeData.data.solutions.map((e) => e.id);
                // this.solutions = await this._anchor.getRelatedSolutions(relatedSolutionIds)
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    goBack() {
        this.location.back();
    }
};
ChallengeOverviewComponent.ctorParameters = () => [
    { type: _challenge_service__WEBPACK_IMPORTED_MODULE_3__["ChallengeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserState"])
], ChallengeOverviewComponent.prototype, "loggedInUser$", void 0);
ChallengeOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-challenge-overview",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./challenge-overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/challenge-overview/challenge-overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./challenge-overview.component.css */ "./src/app/challenge/challenge-overview/challenge-overview.component.css")).default]
    })
], ChallengeOverviewComponent);



/***/ }),

/***/ "./src/app/challenge/challenge-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/challenge/challenge-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChallengeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeRoutingModule", function() { return ChallengeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _challenge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./challenge.component */ "./src/app/challenge/challenge.component.ts");
/* harmony import */ var _create_challenge_create_challenge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-challenge/create-challenge.component */ "./src/app/challenge/create-challenge/create-challenge.component.ts");
/* harmony import */ var _challenges_anchor_challenges_anchor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./challenges-anchor/challenges-anchor.component */ "./src/app/challenge/challenges-anchor/challenges-anchor.component.ts");
/* harmony import */ var _challenge_overview_challenge_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./challenge-overview/challenge-overview.component */ "./src/app/challenge/challenge-overview/challenge-overview.component.ts");
/* harmony import */ var _anchor_challenge_anchor_challenge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anchor-challenge/anchor-challenge.component */ "./src/app/challenge/anchor-challenge/anchor-challenge.component.ts");
/* harmony import */ var _permission_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../permission.guard */ "./src/app/permission.guard.ts");
/* harmony import */ var _dirty_check_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dirty-check.guard */ "./src/app/challenge/dirty-check.guard.ts");










const routes = [
    {
        path: "",
        component: _challenge_component__WEBPACK_IMPORTED_MODULE_3__["ChallengeComponent"],
        children: [
            {
                path: "",
                redirectTo: "/discover/challenges",
                pathMatch: "full",
            },
            {
                path: "create",
                component: _create_challenge_create_challenge_component__WEBPACK_IMPORTED_MODULE_4__["CreateChallengeComponent"],
                canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_8__["PermissionGuard"]],
                data: {
                    permission: ["seeker"],
                },
            },
            {
                path: ":id",
                component: _challenges_anchor_challenges_anchor_component__WEBPACK_IMPORTED_MODULE_5__["ChallengesAnchorComponent"],
                pathMatch: "full",
            },
            {
                path: ":id/anchor/add",
                component: _anchor_challenge_anchor_challenge_component__WEBPACK_IMPORTED_MODULE_7__["AnchorChallengeComponent"],
                canDeactivate: [_dirty_check_guard__WEBPACK_IMPORTED_MODULE_9__["DirtyCheckGuard"]],
            },
            {
                path: ":id/anchor/:anchorid",
                component: _challenge_overview_challenge_overview_component__WEBPACK_IMPORTED_MODULE_6__["ChallengeOverviewComponent"],
            },
        ],
    },
];
let ChallengeRoutingModule = class ChallengeRoutingModule {
};
ChallengeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChallengeRoutingModule);



/***/ }),

/***/ "./src/app/challenge/challenge.component.css":
/*!***************************************************!*\
  !*** ./src/app/challenge/challenge.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZS9jaGFsbGVuZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/challenge/challenge.component.ts":
/*!**************************************************!*\
  !*** ./src/app/challenge/challenge.component.ts ***!
  \**************************************************/
/*! exports provided: ChallengeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeComponent", function() { return ChallengeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChallengeComponent = class ChallengeComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChallengeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-challenge',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./challenge.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/challenge.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./challenge.component.css */ "./src/app/challenge/challenge.component.css")).default]
    })
], ChallengeComponent);



/***/ }),

/***/ "./src/app/challenge/challenge.module.ts":
/*!***********************************************!*\
  !*** ./src/app/challenge/challenge.module.ts ***!
  \***********************************************/
/*! exports provided: ChallengeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeModule", function() { return ChallengeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _challenges_anchor_challenges_anchor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./challenges-anchor/challenges-anchor.component */ "./src/app/challenge/challenges-anchor/challenges-anchor.component.ts");
/* harmony import */ var _challenge_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./challenge-routing.module */ "./src/app/challenge/challenge-routing.module.ts");
/* harmony import */ var _challenge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./challenge.component */ "./src/app/challenge/challenge.component.ts");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var _provider_view_provider_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./provider-view/provider-view.component */ "./src/app/challenge/provider-view/provider-view.component.ts");
/* harmony import */ var _seeker_view_seeker_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./seeker-view/seeker-view.component */ "./src/app/challenge/seeker-view/seeker-view.component.ts");
/* harmony import */ var _create_challenge_create_challenge_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-challenge/create-challenge.component */ "./src/app/challenge/create-challenge/create-challenge.component.ts");
/* harmony import */ var _challenge_overview_challenge_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./challenge-overview/challenge-overview.component */ "./src/app/challenge/challenge-overview/challenge-overview.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _anchor_challenge_anchor_challenge_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./anchor-challenge/anchor-challenge.component */ "./src/app/challenge/anchor-challenge/anchor-challenge.component.ts");
/* harmony import */ var _components_anchor_widget_anchor_widget_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/anchor-widget/anchor-widget.component */ "./src/app/challenge/components/anchor-widget/anchor-widget.component.ts");
/* harmony import */ var _components_solution_widget_solution_widget_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/solution-widget/solution-widget.component */ "./src/app/challenge/components/solution-widget/solution-widget.component.ts");
/* harmony import */ var _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/widgets/widgets.module */ "./src/app/shared/widgets/widgets.module.ts");
/* harmony import */ var _dirty_check_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dirty-check.guard */ "./src/app/challenge/dirty-check.guard.ts");
/* harmony import */ var _discover_discover_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../discover/discover.module */ "./src/app/discover/discover.module.ts");



















let ChallengeModule = class ChallengeModule {
};
ChallengeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _challenge_component__WEBPACK_IMPORTED_MODULE_6__["ChallengeComponent"],
            _challenges_anchor_challenges_anchor_component__WEBPACK_IMPORTED_MODULE_4__["ChallengesAnchorComponent"],
            _provider_view_provider_view_component__WEBPACK_IMPORTED_MODULE_8__["ProviderViewComponent"],
            _seeker_view_seeker_view_component__WEBPACK_IMPORTED_MODULE_9__["SeekerViewComponent"],
            _create_challenge_create_challenge_component__WEBPACK_IMPORTED_MODULE_10__["CreateChallengeComponent"],
            _challenge_overview_challenge_overview_component__WEBPACK_IMPORTED_MODULE_11__["ChallengeOverviewComponent"],
            _anchor_challenge_anchor_challenge_component__WEBPACK_IMPORTED_MODULE_13__["AnchorChallengeComponent"],
            _components_anchor_widget_anchor_widget_component__WEBPACK_IMPORTED_MODULE_14__["AnchorWidgetComponent"],
            _components_solution_widget_solution_widget_component__WEBPACK_IMPORTED_MODULE_15__["SolutionWidgetComponent"],
        ],
        providers: [_dirty_check_guard__WEBPACK_IMPORTED_MODULE_17__["DirtyCheckGuard"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _challenge_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChallengeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__["NgxSkeletonLoaderModule"].forRoot(), _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"], _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_16__["WidgetsModule"], _discover_discover_module__WEBPACK_IMPORTED_MODULE_18__["DiscoverModule"]],
    })
], ChallengeModule);



/***/ }),

/***/ "./src/app/challenge/challenges-anchor/challenges-anchor.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/challenge/challenges-anchor/challenges-anchor.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".challenge-parent-wrp{\r\n    min-height:95vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL2NoYWxsZW5nZXMtYW5jaG9yL2NoYWxsZW5nZXMtYW5jaG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2hhbGxlbmdlL2NoYWxsZW5nZXMtYW5jaG9yL2NoYWxsZW5nZXMtYW5jaG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbGxlbmdlLXBhcmVudC13cnB7XHJcbiAgICBtaW4taGVpZ2h0Ojk1dmg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/challenge/challenges-anchor/challenges-anchor.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/challenge/challenges-anchor/challenges-anchor.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChallengesAnchorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesAnchorComponent", function() { return ChallengesAnchorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _challenge_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../challenge.service */ "./src/app/challenge/challenge.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");








let ChallengesAnchorComponent = class ChallengesAnchorComponent {
    constructor(route, challenges, toastr) {
        this.route = route;
        this.challenges = challenges;
        this.toastr = toastr;
        this.server_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server_url;
        this.route.params.subscribe((params) => (this.id = params.id));
        this.loggedInUser$.subscribe((resp) => {
            this.currentUserType = resp.LoggedInUser.userType;
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getChallenge();
        });
    }
    getChallenge() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.loading = true;
                this.challenge = yield this.challenges.getChallengeById(this.id);
                this.challenge.data.anchors = this.challenge.data.anchors.filter((c) => {
                    if (c.status != "draft")
                        return c;
                });
                // console.log("challenge", this.challenge.data);
                this.loading = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    challengeAnchored(state) {
        if (state) {
            this.getChallenge();
        }
    }
};
ChallengesAnchorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _challenge_service__WEBPACK_IMPORTED_MODULE_4__["ChallengeService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserState"])
], ChallengesAnchorComponent.prototype, "loggedInUser$", void 0);
ChallengesAnchorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-challenges-anchor",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./challenges-anchor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/challenges-anchor/challenges-anchor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./challenges-anchor.component.css */ "./src/app/challenge/challenges-anchor/challenges-anchor.component.css")).default]
    })
], ChallengesAnchorComponent);



/***/ }),

/***/ "./src/app/challenge/components/anchor-widget/anchor-widget.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/challenge/components/anchor-widget/anchor-widget.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".widget-wrap{\r\n    margin-bottom: 1.684rem;\r\n}\r\n\r\n.widget-wrap .widget-container{\r\n    background:var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    height:336px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.section-title{\r\n    font-size:0.631rem;\r\n    color: #45474D;\r\n    opacity: 0.6;\r\n    margin-bottom:8px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n}\r\n\r\n.anchor-item{\r\n    padding:1.263rem;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.anchor-item{\r\n    border-bottom: 1px solid #DEE0E6;\r\n}\r\n\r\n.anchor-details{\r\n    flex-basis: 60%;\r\n}\r\n\r\n.stats{\r\n    text-align: center;\r\n    color:#4F4F4F;\r\n    font-weight:500;\r\n    font-size: 0.631rem;\r\n}\r\n\r\n.stats span{\r\n    display: block;\r\n    font-size: 0.8421rem;\r\n}\r\n\r\n.city-name{\r\n    color:#4F4F4F;\r\n    font-weight:500;\r\n    font-size: 0.8421rem;\r\n}\r\n\r\n.author-info{\r\n    color:#4F4F4F;\r\n    opacity: 0.6;\r\n    font-size: 0.631rem;\r\n}\r\n\r\n.author-info span:nth-child(1){\r\n    text-decoration: underline;\r\n    margin-right:1.8rem;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n\r\n.no-anchors{\r\n    padding: 1.263rem;\r\n}\r\n\r\n.anchor-skeleton{\r\n    padding:1.263rem;\r\n    border-bottom: 1px solid #DEE0E6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL2NvbXBvbmVudHMvYW5jaG9yLXdpZGdldC9hbmNob3Itd2lkZ2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY2hhbGxlbmdlL2NvbXBvbmVudHMvYW5jaG9yLXdpZGdldC9hbmNob3Itd2lkZ2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0LXdyYXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjY4NHJlbTtcclxufVxyXG5cclxuLndpZGdldC13cmFwIC53aWRnZXQtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGhlaWdodDozMzZweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxle1xyXG4gICAgZm9udC1zaXplOjAuNjMxcmVtO1xyXG4gICAgY29sb3I6ICM0NTQ3NEQ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOjhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYW5jaG9yLWl0ZW17XHJcbiAgICBwYWRkaW5nOjEuMjYzcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbmNob3ItaXRlbXtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVFMEU2O1xyXG59XHJcblxyXG4uYW5jaG9yLWRldGFpbHN7XHJcbiAgICBmbGV4LWJhc2lzOiA2MCU7XHJcbn1cclxuXHJcbi5zdGF0c3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiM0RjRGNEY7XHJcbiAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICBmb250LXNpemU6IDAuNjMxcmVtO1xyXG59XHJcblxyXG4uc3RhdHMgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjg0MjFyZW07XHJcbn1cclxuXHJcbi5jaXR5LW5hbWV7XHJcbiAgICBjb2xvcjojNEY0RjRGO1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg0MjFyZW07XHJcbn1cclxuXHJcbi5hdXRob3ItaW5mb3tcclxuICAgIGNvbG9yOiM0RjRGNEY7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBmb250LXNpemU6IDAuNjMxcmVtO1xyXG59XHJcblxyXG4uYXV0aG9yLWluZm8gc3BhbjpudGgtY2hpbGQoMSl7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIG1hcmdpbi1yaWdodDoxLjhyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubm8tYW5jaG9yc3tcclxuICAgIHBhZGRpbmc6IDEuMjYzcmVtO1xyXG59XHJcblxyXG4uYW5jaG9yLXNrZWxldG9ue1xyXG4gICAgcGFkZGluZzoxLjI2M3JlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVFMEU2O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/challenge/components/anchor-widget/anchor-widget.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/challenge/components/anchor-widget/anchor-widget.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AnchorWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorWidgetComponent", function() { return AnchorWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _anchor_widget_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anchor-widget-service.service */ "./src/app/challenge/components/anchor-widget/anchor-widget-service.service.ts");



let AnchorWidgetComponent = class AnchorWidgetComponent {
    constructor(_anchor) {
        this._anchor = _anchor;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.fetchAnchors();
        });
    }
    fetchAnchors() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.widgetLoading = true;
            let resp = yield this._anchor.getAnchorsForChallenge(this.challengeId);
            this.anchorData = resp.data.filter((e) => {
                if (e.id != this.anchorId)
                    return e;
            });
            this.anchorData.map((anchors) => {
                let smartcityId = anchors.frg_seeker_id.frg_smart_city_id;
                anchors.frg_seeker_id.frg_smart_city_id = anchors.smart_cities.find((city) => smartcityId === city.id);
            });
            // console.log(this.anchorData);
            this.widgetLoading = false;
        });
    }
};
AnchorWidgetComponent.ctorParameters = () => [
    { type: _anchor_widget_service_service__WEBPACK_IMPORTED_MODULE_2__["AnchorWidgetServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnchorWidgetComponent.prototype, "anchorId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnchorWidgetComponent.prototype, "challengeId", void 0);
AnchorWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "anchor-widget",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./anchor-widget.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/components/anchor-widget/anchor-widget.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./anchor-widget.component.css */ "./src/app/challenge/components/anchor-widget/anchor-widget.component.css")).default]
    })
], AnchorWidgetComponent);



/***/ }),

/***/ "./src/app/challenge/components/solution-widget/solution-widget.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/challenge/components/solution-widget/solution-widget.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".widget-wrap{\r\n    margin-bottom: 1.684rem;\r\n}\r\n\r\n.widget-wrap .widget-container{\r\n    background:var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    height:336px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.section-title{\r\n    font-size:0.631rem;\r\n    color: #45474D;\r\n    opacity: 0.6;\r\n    margin-bottom:8px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n}\r\n\r\n.solution-skeleton{\r\n    padding:0.631rem;\r\n    border-bottom: 1px solid #DEE0E6;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.solution-skeleton > div:nth-child(1){\r\n    flex-basis: 20%;\r\n}\r\n\r\n.solution-skeleton > div:nth-child(2){\r\n    flex-basis: 80%;\r\n}\r\n\r\n.no-solutions{\r\n    padding: 1.263rem;\r\n}\r\n\r\n.solution-item{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    padding: 0.631rem;\r\n    border-bottom: 1px solid #DEE0E6;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\r\n       -moz-user-select: none; /* Old versions of Firefox */\r\n        -ms-user-select: none; /* Internet Explorer/Edge */\r\n            user-select: none; \r\n}\r\n\r\n.featured-image{\r\n    flex-basis: 16%;\r\n}\r\n\r\n.content{\r\n    flex-basis: 85%;\r\n    padding-left:0.542rem;\r\n}\r\n\r\n.img-wrp{\r\n    width: 64px;\r\n    height: 64px;\r\n    background: #D6D8E0;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n}\r\n\r\n.content .title{\r\n    font-size: 0.842rem;\r\n    font-weight: 500;\r\n    color: #4F4F4F;\r\n    margin-bottom:0.1rem;\r\n}\r\n\r\n.author-info{\r\n    font-size: 0.631rem;\r\n    font-weight: 400;\r\n    color: #4F4F4F;\r\n    opacity: 0.6;\r\n}\r\n\r\n.author-info span{\r\n    text-decoration: underline;\r\n    margin-right:0.831rem;\r\n    cursor: pointer;\r\n    outline: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL2NvbXBvbmVudHMvc29sdXRpb24td2lkZ2V0L3NvbHV0aW9uLXdpZGdldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsMkJBQTJCLEVBQUUsZUFBZTtJQUM1Qyx5QkFBeUIsRUFBRSxXQUFXLEVBQ1gsbUJBQW1CO09BQzNDLHNCQUFzQixFQUFFLDRCQUE0QjtRQUNuRCxxQkFBcUIsRUFBRSwyQkFBMkI7WUFDOUMsaUJBQWlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZS9jb21wb25lbnRzL3NvbHV0aW9uLXdpZGdldC9zb2x1dGlvbi13aWRnZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQtd3JhcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNjg0cmVtO1xyXG59XHJcblxyXG4ud2lkZ2V0LXdyYXAgLndpZGdldC1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgaGVpZ2h0OjMzNnB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGV7XHJcbiAgICBmb250LXNpemU6MC42MzFyZW07XHJcbiAgICBjb2xvcjogIzQ1NDc0RDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIG1hcmdpbi1ib3R0b206OHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1za2VsZXRvbntcclxuICAgIHBhZGRpbmc6MC42MzFyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RFRTBFNjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1za2VsZXRvbiA+IGRpdjpudGgtY2hpbGQoMSl7XHJcbiAgICBmbGV4LWJhc2lzOiAyMCU7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1za2VsZXRvbiA+IGRpdjpudGgtY2hpbGQoMil7XHJcbiAgICBmbGV4LWJhc2lzOiA4MCU7XHJcbn1cclxuXHJcbi5uby1zb2x1dGlvbnN7XHJcbiAgICBwYWRkaW5nOiAxLjI2M3JlbTtcclxufVxyXG5cclxuLnNvbHV0aW9uLWl0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMC42MzFyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RFRTBFNjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cclxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyBcclxufVxyXG5cclxuLmZlYXR1cmVkLWltYWdle1xyXG4gICAgZmxleC1iYXNpczogMTYlO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIGZsZXgtYmFzaXM6IDg1JTtcclxuICAgIHBhZGRpbmctbGVmdDowLjU0MnJlbTtcclxufVxyXG5cclxuLmltZy13cnB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNENkQ4RTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGVudCAudGl0bGV7XHJcbiAgICBmb250LXNpemU6IDAuODQycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTowLjFyZW07XHJcbn1cclxuXHJcbi5hdXRob3ItaW5mb3tcclxuICAgIGZvbnQtc2l6ZTogMC42MzFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5hdXRob3ItaW5mbyBzcGFue1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MC44MzFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/challenge/components/solution-widget/solution-widget.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/challenge/components/solution-widget/solution-widget.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SolutionWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionWidgetComponent", function() { return SolutionWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _solution_widget_solution_widget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../solution-widget/solution-widget.service */ "./src/app/challenge/components/solution-widget/solution-widget.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




let SolutionWidgetComponent = class SolutionWidgetComponent {
    constructor(_solution) {
        this._solution = _solution;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server_url;
    }
    ngOnChanges() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.solutionsId != undefined) {
                yield this.fetchSolutions();
            }
        });
    }
    fetchSolutions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.widgetLoading = true;
                let resp = yield this._solution.getRelatedSolutions(this.solutionsId);
                this.solutionData = resp.data;
                this.widgetLoading = false;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
};
SolutionWidgetComponent.ctorParameters = () => [
    { type: _solution_widget_solution_widget_service__WEBPACK_IMPORTED_MODULE_2__["SolutionWidgetService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SolutionWidgetComponent.prototype, "solutionsId", void 0);
SolutionWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'solution-widget',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./solution-widget.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/components/solution-widget/solution-widget.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./solution-widget.component.css */ "./src/app/challenge/components/solution-widget/solution-widget.component.css")).default]
    })
], SolutionWidgetComponent);



/***/ }),

/***/ "./src/app/challenge/components/solution-widget/solution-widget.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/challenge/components/solution-widget/solution-widget.service.ts ***!
  \*********************************************************************************/
/*! exports provided: SolutionWidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionWidgetService", function() { return SolutionWidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let SolutionWidgetService = class SolutionWidgetService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    getRelatedSolutions(challengeId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + '/solutions/select_mul', { slug: { id: challengeId } }).toPromise();
        });
    }
};
SolutionWidgetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SolutionWidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SolutionWidgetService);



/***/ }),

/***/ "./src/app/challenge/create-challenge/create-challenge.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/challenge/create-challenge/create-challenge.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".a-creat-chlng{\r\n    min-height: 100vh;\r\n}\r\n.add-challenge-wrp{\r\n    min-height:100vh;\r\n}\r\n.a-seeker-edit-opt-icon{\r\n    float: right !important;\r\n}\r\n.a-seeker-edit-profile-opt>li.active>a{\r\n    background-color:#EFEFEF !important;\r\n    color: #4F4F4F !important;\r\n}\r\n.a-seeker-edit-profile-opt>li>a{\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    padding:16px 17px;\r\n    border-radius: 0px;\r\n    color: #999999 !important;\r\n    font-weight:400;\r\n}\r\n.a-seeker-edit-profile-opt>li:not(:last-child) {\r\n    border-bottom: 1px solid #DEDEDE;\r\n}\r\n.a-add-challenge-wrp{\r\n    max-width:580px;\r\n    margin:0 auto 36px 0;\r\n    padding:36px;\r\n    border-radius: 6px;\r\n    border: 1px solid #DEDEDE;\r\n}\r\n.flex-row{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n.flex-row>div{\r\n    flex-basis: 48%;\r\n}\r\nlabel .field-desp{\r\n    opacity: 0.7;\r\n    font-weight: 300;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL2NyZWF0ZS1jaGFsbGVuZ2UvY3JlYXRlLWNoYWxsZW5nZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZS9jcmVhdGUtY2hhbGxlbmdlL2NyZWF0ZS1jaGFsbGVuZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hLWNyZWF0LWNobG5ne1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLmFkZC1jaGFsbGVuZ2Utd3Jwe1xyXG4gICAgbWluLWhlaWdodDoxMDB2aDtcclxufVxyXG4uYS1zZWVrZXItZWRpdC1vcHQtaWNvbntcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXNlZWtlci1lZGl0LXByb2ZpbGUtb3B0PmxpLmFjdGl2ZT5he1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRUZFRkVGICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzRGNEY0RiAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXNlZWtlci1lZGl0LXByb2ZpbGUtb3B0PmxpPmF7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIHBhZGRpbmc6MTZweCAxN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgY29sb3I6ICM5OTk5OTkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxufVxyXG4uYS1zZWVrZXItZWRpdC1wcm9maWxlLW9wdD5saTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVERURFO1xyXG59XHJcbi5hLWFkZC1jaGFsbGVuZ2Utd3Jwe1xyXG4gICAgbWF4LXdpZHRoOjU4MHB4O1xyXG4gICAgbWFyZ2luOjAgYXV0byAzNnB4IDA7XHJcbiAgICBwYWRkaW5nOjM2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFO1xyXG59XHJcblxyXG4uZmxleC1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1yb3c+ZGl2e1xyXG4gICAgZmxleC1iYXNpczogNDglO1xyXG59XHJcblxyXG5sYWJlbCAuZmllbGQtZGVzcHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/challenge/create-challenge/create-challenge.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/challenge/create-challenge/create-challenge.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateChallengeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateChallengeComponent", function() { return CreateChallengeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _create_challenge_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-challenge.service */ "./src/app/challenge/create-challenge/create-challenge.service.ts");
/* harmony import */ var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/customvalidation.service */ "./src/app/services/customvalidation.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _discover_select_sector_select_sector_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../discover/select-sector/select-sector.service */ "./src/app/discover/select-sector/select-sector.service.ts");













let CreateChallengeComponent = class CreateChallengeComponent {
    constructor(fb, toastr, router, _challenge, _validation, _ss) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this._challenge = _challenge;
        this._validation = _validation;
        this._ss = _ss;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__;
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
            Step4: false,
        };
        this.editChallengeForm = {
            Step1: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"],
            Step2: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"],
            Step3: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"],
            Step4: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"],
        };
        this.urlPattern = new RegExp("^(http|https)://");
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format("YYYY-MM-DD");
        this.loggedInUser$.subscribe((resp) => {
            this.currentSeekerId = resp.LoggedInUser.userTypeId;
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
            // let current = moment();
            // console.log(current.toString());
            // this.pageLoading = true;
            this.editChallengeStep1 = false;
            this.editChallengeStep2 = true;
            this.editChallengeStep3 = true;
            this.editChallengeStep4 = true;
            this.editChallengeForm = {
                Step1: this.fb.group({
                    name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(30)], this._validation.checkForDuplicateChallenges.bind(this._validation)],
                    challenge_sector: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                }),
                Step2: this.fb.group({
                    challengeSummary: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                    challengeScenario: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                    targetBeneficiaries: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                    startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                    closeDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                }, { validator: this._validation.validateDate('startDate', 'closeDate') }),
                Step3: this.fb.group({
                    functionalRequirements: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                    operationalCapabilities: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                    deploymentConstraints: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                    tangibleOutcomes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
                }),
                Step4: this.fb.group({
                    gaps: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000)]],
                    otherRequirements: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000)]],
                    additionalLink1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
                    additionalLink2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
                    additionalLink3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
                }),
            };
            yield this.getseekerDetails();
            yield this.getChallengeSectors();
        });
    }
    getseekerDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.seekerDetails = yield this._challenge.getSeekerDetails(this.currentSeekerId);
            this.sectorIdsFollowedByUser = yield this._challenge.getSectorIdsFollowedByUser(this.currentSeekerId);
        });
    }
    get formControlStep1() {
        return this.editChallengeForm.Step1.controls;
    }
    get formControlStep2() {
        return this.editChallengeForm.Step2.controls;
    }
    get formControlStep3() {
        return this.editChallengeForm.Step3.controls;
    }
    get formControlStep4() {
        return this.editChallengeForm.Step4.controls;
    }
    gotoStep(step) {
        switch (step) {
            case "step1": {
                this.editChallengeStep1 = false;
                this.editChallengeStep2 = true;
                this.editChallengeStep3 = true;
                this.editChallengeStep4 = true;
                break;
            }
            case "step2": {
                this.editChallengeStep1 = true;
                this.editChallengeStep2 = false;
                this.editChallengeStep3 = true;
                this.editChallengeStep4 = true;
                break;
            }
            case "step3": {
                this.editChallengeStep1 = true;
                this.editChallengeStep2 = true;
                this.editChallengeStep3 = false;
                this.editChallengeStep4 = true;
                break;
            }
            case "step4": {
                this.editChallengeStep1 = true;
                this.editChallengeStep2 = true;
                this.editChallengeStep3 = true;
                this.editChallengeStep4 = false;
                break;
            }
        }
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (formIndex == "Step1" && this.editChallengeForm.Step1.valid) {
                this.toastr.info("", "Form paritially saved");
                this.gotoStep("step2");
                window.scrollTo(0, 0);
            }
            else if (formIndex == "Step2" && this.editChallengeForm.Step2.valid) {
                this.toastr.info("", "Form paritially saved");
                this.gotoStep("step3");
                window.scrollTo(0, 0);
            }
            else if (formIndex == "Step3" && this.editChallengeForm.Step2.valid) {
                this.toastr.info("", "Form paritially saved");
                this.gotoStep("step4");
                window.scrollTo(0, 0);
            }
            else if (formIndex == "Step4" && this.editChallengeForm.Step3.valid) {
                yield this.addChallenge();
            }
            else {
                this.toastr.error("", "Please provide the required values to proceed further");
            }
        });
    }
    getChallengeSectors() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.sectorLoading = true;
                this.challengeSectors = yield this._challenge.getChallengeSectors();
                this.sectorLoading = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error("Something went wrong please try again", "Error");
            }
        });
    }
    // get createChallengeControl(){return this.createChallengeForm.controls}
    addChallenge() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.isSubmitted = true;
                if (this.editChallengeForm.Step1.valid && this.editChallengeForm.Step2.valid && this.editChallengeForm.Step3.valid && this.editChallengeForm.Step4.valid) {
                    this.isLoading = true;
                    let challenge = yield this._challenge.createChallenge({
                        data: {
                            name: this.editChallengeForm.Step1.value.name,
                            frg_challenge_sector_id: this.editChallengeForm.Step1.value.challenge_sector,
                        },
                    });
                    this.toastr.success("", "Challenge created successfully");
                    yield this.addAnchors(challenge.data.id);
                    this.isLoading = false;
                    this.toastr.success("", "Anchor created successfully");
                    this.router.navigateByUrl(`/challenge/${challenge.data.id}`);
                }
                else {
                    this.toastr.error("Something went wrong please try again", "Validation Error");
                }
            }
            catch (err) {
                this.isLoading = false;
                this.toastr.error("Something went wrong please try again", "API Error");
            }
        });
    }
    addAnchors(challenge_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let resp = yield this._challenge.createAnchor({
                data: {
                    challenge_summary: this.editChallengeForm.Step2.value.challengeSummary,
                    challenge_scenario: this.editChallengeForm.Step2.value.challengeScenario,
                    target_beneficiaries: this.editChallengeForm.Step2.value.targetBeneficiaries,
                    start_date: this.editChallengeForm.Step2.value.startDate,
                    end_date: this.editChallengeForm.Step2.value.closeDate,
                    deployment_constraints: this.editChallengeForm.Step3.value.deploymentConstraints,
                    functional_requirements: this.editChallengeForm.Step3.value.functionalRequirements,
                    functional_operational_capabilities: this.editChallengeForm.Step3.value.operationalCapabilities,
                    tangible_outcomes_benefits: this.editChallengeForm.Step3.value.tangibleOutcomes,
                    gaps_current_solution: this.editChallengeForm.Step4.value.gaps,
                    other_requirements_remarks: this.editChallengeForm.Step4.value.otherRequirements,
                    challenge_status: "Awaiting Approval",
                    frg_challenge_id: challenge_id,
                    frg_seeker_id: this.currentSeekerId,
                    info_links: [this.editChallengeForm.Step4.value.additionalLink1, this.editChallengeForm.Step4.value.additionalLink2, this.editChallengeForm.Step4.value.additionalLink3],
                },
            });
            // console.log("resp", resp);
            let saveResponse = yield Promise.all([
                this._challenge.createAnchorSmartCities({
                    data: {
                        frg_anchor_id: resp.data.id,
                        frg_smart_city_id: this.seekerDetails.data.frg_smart_city_id.id,
                    },
                }),
                this._challenge.associateChallengeSectorwithCity({
                    sectorId: challenge_id,
                    smartCityId: this.seekerDetails.data.frg_smart_city_id.id,
                }),
                this._challenge.associateChallengewithCity({
                    challengeId: challenge_id,
                    smartCityId: this.seekerDetails.data.frg_smart_city_id.id,
                }),
            ]);
            this.saveSectorArr(this.editChallengeForm.Step1.value.challenge_sector);
            // console.log("SCAnchor", smartCityAnchor);
        });
    }
    saveSectorArr(newChallengeSectorId) {
        let tmp_arr = [];
        let sector_post_data = {};
        return new Promise((resolve, reject) => {
            let index = lodash__WEBPACK_IMPORTED_MODULE_11__["indexOf"](this.sectorIdsFollowedByUser, newChallengeSectorId);
            if (index == -1) {
                sector_post_data = {
                    frg_challenge_sector_id: newChallengeSectorId,
                    frg_seeker_id: this.currentSeekerId,
                };
                tmp_arr.push(sector_post_data);
                this._ss.saveSelectedSectorAPI("seeker", tmp_arr).subscribe((resp) => {
                    if (resp.status == true) {
                        resolve();
                    }
                });
            }
        });
    }
};
CreateChallengeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _create_challenge_service__WEBPACK_IMPORTED_MODULE_5__["CreateChallengeService"] },
    { type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_6__["CustomvalidationService"] },
    { type: _discover_select_sector_select_sector_service__WEBPACK_IMPORTED_MODULE_12__["SelectSectorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_9__["LoggedInUserState"])
], CreateChallengeComponent.prototype, "loggedInUser$", void 0);
CreateChallengeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-create-challenge",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-challenge.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/create-challenge/create-challenge.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-challenge.component.css */ "./src/app/challenge/create-challenge/create-challenge.component.css")).default]
    })
], CreateChallengeComponent);



/***/ }),

/***/ "./src/app/challenge/dirty-check.guard.ts":
/*!************************************************!*\
  !*** ./src/app/challenge/dirty-check.guard.ts ***!
  \************************************************/
/*! exports provided: DirtyCheckGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirtyCheckGuard", function() { return DirtyCheckGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DirtyCheckGuard = class DirtyCheckGuard {
    canDeactivate(component, next) {
        if (component.createChallengeForm.Step1.dirty || component.createChallengeForm.Step2.dirty || component.createChallengeForm.Step3.dirty)
            component.ConfirmLeaveComponent();
        else
            return true;
    }
};
DirtyCheckGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DirtyCheckGuard);



/***/ }),

/***/ "./src/app/challenge/provider-view/provider-view.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/challenge/provider-view/provider-view.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".solution-card-wrp,\r\n.skeleton-card-wrp{\r\n    background-color:var(--white);\r\n    padding:18px;\r\n    cursor: pointer;\r\n    border-radius:10px;\r\n    outline:none;\r\n    margin-bottom:25px;\r\n}\r\n\r\n.solution-expanded-wrp{\r\n    padding:36px;\r\n    background-color:var(--white);\r\n    margin-bottom:36px;\r\n    border-radius:10px;\r\n}\r\n\r\n.add-solution-card-wrp .add-solution-card{\r\n    max-width:215px;\r\n    margin:auto;\r\n    padding:18px 18px;\r\n}\r\n\r\n.add-solution-card{\r\n    border:1px solid var(--primary-clr);\r\n    border-radius:10px;\r\n}\r\n\r\n.col-solution-card-wrp{\r\n    text-align:center;\r\n    border:1px solid var(--primary-clr);\r\n    border-radius:10px;\r\n    display:table;\r\n    width:100%;\r\n    height: 142px;\r\n    cursor: pointer;\r\n    outline:none;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.solution-card-inner{\r\n    display:table-cell;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL3Byb3ZpZGVyLXZpZXcvcHJvdmlkZXItdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY2hhbGxlbmdlL3Byb3ZpZGVyLXZpZXcvcHJvdmlkZXItdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvbHV0aW9uLWNhcmQtd3JwLFxyXG4uc2tlbGV0b24tY2FyZC13cnB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcclxuICAgIHBhZGRpbmc6MThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206MjVweDtcclxufVxyXG5cclxuLnNvbHV0aW9uLWV4cGFuZGVkLXdycHtcclxuICAgIHBhZGRpbmc6MzZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTozNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcblxyXG4uYWRkLXNvbHV0aW9uLWNhcmQtd3JwIC5hZGQtc29sdXRpb24tY2FyZHtcclxuICAgIG1heC13aWR0aDoyMTVweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcGFkZGluZzoxOHB4IDE4cHg7XHJcbn1cclxuXHJcbi5hZGQtc29sdXRpb24tY2FyZHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jbHIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcblxyXG4uY29sLXNvbHV0aW9uLWNhcmQtd3Jwe1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLXByaW1hcnktY2xyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGRpc3BsYXk6dGFibGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1jYXJkLWlubmVye1xyXG4gICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/challenge/provider-view/provider-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/challenge/provider-view/provider-view.component.ts ***!
  \********************************************************************/
/*! exports provided: ProviderViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderViewComponent", function() { return ProviderViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _challenge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../challenge.service */ "./src/app/challenge/challenge.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");








let ProviderViewComponent = class ProviderViewComponent {
    constructor(challenges, toastr) {
        this.challenges = challenges;
        this.toastr = toastr;
        this.associatedSolutionsId = [];
        this.server_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
        this.loggedInUser$.subscribe((resp) => {
            this.currentUser = resp.LoggedInUser;
        });
    }
    ngOnInit() {
        this.loading = false;
        this.cataloguedFor = JSON.stringify({
            challengeId: this.challengeData.id,
            challengeName: this.challengeData.name,
            sectorId: this.challengeData.frg_challenge_sector_id.id,
            sectorName: this.challengeData.frg_challenge_sector_id.name,
        });
        this.getAnchorAndSolutions();
    }
    getAnchorAndSolutions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.loading = true;
                this.relatedSolutionsLoading = true;
                this.anchors = yield this.challenges.getAnchorsForChallenge(this.challengeData.id);
                this.anchors.data.map((anchors) => {
                    let smartcityId = anchors.frg_seeker_id.frg_smart_city_id;
                    anchors.frg_seeker_id.frg_smart_city_id = anchors.smart_cities.find((city) => smartcityId === city.id);
                });
                this.loading = false;
                this.relatedSolutions = yield this.challenges.getRelatedSolutions(this.challengeData.id);
                let solutionIds = lodash__WEBPACK_IMPORTED_MODULE_5__["remove"](this.relatedSolutions.data, (solution) => {
                    return solution.provider_id == this.currentUser.userTypeId;
                });
                solutionIds = solutionIds.map((e) => e.id);
                this.solutionsByCurrentUser = yield this.challenges.getSolutions(solutionIds);
                this.relatedSolutionsLoading = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
};
ProviderViewComponent.ctorParameters = () => [
    { type: _challenge_service__WEBPACK_IMPORTED_MODULE_3__["ChallengeService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserState"])
], ProviderViewComponent.prototype, "loggedInUser$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProviderViewComponent.prototype, "challengeData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProviderViewComponent.prototype, "associatedSolutionsId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProviderViewComponent.prototype, "anchorLength", void 0);
ProviderViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-provider-view",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./provider-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/provider-view/provider-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./provider-view.component.css */ "./src/app/challenge/provider-view/provider-view.component.css")).default]
    })
], ProviderViewComponent);



/***/ }),

/***/ "./src/app/challenge/seeker-view/seeker-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/challenge/seeker-view/seeker-view.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".l-challenges-anc-btn{\r\n    width: 90px;\r\n}\r\n\r\n.solution-card-wrp,\r\n.skeleton-card-wrp{\r\n    display:-webkit-box;\r\n    display:flex;\r\n    background-color: var(--white);\r\n    -webkit-box-align: stretch;\r\n            align-items: stretch;\r\n    border: 1px solid #C2C7C8;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    margin-bottom:18px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    -webkit-transition:all 0.3s ease;\r\n    transition:all 0.3s ease;\r\n}\r\n\r\n.solution-card-wrp:focus,\r\n.solution-card-wrp:hover{\r\n    border-color:#3B6FD4;    \r\n    box-shadow: 5px 5px 20px rgba(157, 189, 252, 0.5);\r\n}\r\n\r\n.solution-preview{\r\n    flex-basis:46%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position:center;\r\n    background-color: #B7B7B7;\r\n}\r\n\r\n.solution-meta{\r\n    flex-basis:54%;\r\n    padding:1rem;\r\n}\r\n\r\n.offerings-card-wrapper .col-md-6:nth-child(odd){\r\n    padding-right:9px;\r\n}\r\n\r\n.offerings-card-wrapper .col-md-6:nth-child(even){\r\n    padding-left:9px;\r\n}\r\n\r\n.challenge-offering-wrp{\r\n    min-height:90vh;\r\n}\r\n\r\n.eoi-modal .modal-dialog{\r\n    width:600px;\r\n}\r\n\r\n.eoi-modal .modal-content{\r\n    padding:36px 36px;\r\n    box-shadow: none;\r\n    border:none;\r\n}\r\n\r\n.eoi-step-form-wrp{\r\n    max-width:460px;\r\n    margin: auto;\r\n}\r\n\r\n.nav-tabs.anchor-tabs{\r\n    border-color: var(--primary-clr);\r\n}\r\n\r\n.nav-tabs.anchor-tabs>li {\r\n    margin-bottom:0;\r\n}\r\n\r\n.nav-tabs.anchor-tabs>li>a {\r\n    margin-right: 0px;\r\n    border: 1px solid var(--primary-clr);\r\n    border-radius:0;\r\n    border-bottom:0px;\r\n    background:transparent;\r\n    color:#333333 !important;\r\n    font-size:14px !important;\r\n}\r\n\r\n.nav-tabs.anchor-tabs>li>a:hover,\r\n.nav-tabs.anchor-tabs>li>a:focus,\r\n.nav-tabs.anchor-tabs>li.active>a{\r\n    color:var(--white) !important;\r\n    background:var(--primary-clr) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL3NlZWtlci12aWV3L3NlZWtlci12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksbUJBQVk7SUFBWixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDBCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0NBQXdCO0lBQXhCLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSw2QkFBNkI7SUFDN0Isd0NBQXdDO0FBQzVDIiwiZmlsZSI6InNyYy9hcHAvY2hhbGxlbmdlL3NlZWtlci12aWV3L3NlZWtlci12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubC1jaGFsbGVuZ2VzLWFuYy1idG57XHJcbiAgICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuLnNvbHV0aW9uLWNhcmQtd3JwLFxyXG4uc2tlbGV0b24tY2FyZC13cnB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMkM3Qzg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206MThweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1jYXJkLXdycDpmb2N1cyxcclxuLnNvbHV0aW9uLWNhcmQtd3JwOmhvdmVye1xyXG4gICAgYm9yZGVyLWNvbG9yOiMzQjZGRDQ7ICAgIFxyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMTU3LCAxODksIDI1MiwgMC41KTtcclxufVxyXG5cclxuLnNvbHV0aW9uLXByZXZpZXd7XHJcbiAgICBmbGV4LWJhc2lzOjQ2JTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjdCN0I3O1xyXG59XHJcblxyXG4uc29sdXRpb24tbWV0YXtcclxuICAgIGZsZXgtYmFzaXM6NTQlO1xyXG4gICAgcGFkZGluZzoxcmVtO1xyXG59XHJcblxyXG4ub2ZmZXJpbmdzLWNhcmQtd3JhcHBlciAuY29sLW1kLTY6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjlweDtcclxufVxyXG5cclxuLm9mZmVyaW5ncy1jYXJkLXdyYXBwZXIgLmNvbC1tZC02Om50aC1jaGlsZChldmVuKXtcclxuICAgIHBhZGRpbmctbGVmdDo5cHg7XHJcbn1cclxuXHJcbi5jaGFsbGVuZ2Utb2ZmZXJpbmctd3Jwe1xyXG4gICAgbWluLWhlaWdodDo5MHZoO1xyXG59XHJcblxyXG4uZW9pLW1vZGFsIC5tb2RhbC1kaWFsb2d7XHJcbiAgICB3aWR0aDo2MDBweDtcclxufVxyXG5cclxuLmVvaS1tb2RhbCAubW9kYWwtY29udGVudHtcclxuICAgIHBhZGRpbmc6MzZweCAzNnB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjpub25lO1xyXG59XHJcblxyXG4uZW9pLXN0ZXAtZm9ybS13cnB7XHJcbiAgICBtYXgtd2lkdGg6NDYwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5uYXYtdGFicy5hbmNob3ItdGFic3tcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xyXG59XHJcblxyXG4ubmF2LXRhYnMuYW5jaG9yLXRhYnM+bGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG59XHJcblxyXG4ubmF2LXRhYnMuYW5jaG9yLXRhYnM+bGk+YSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY2xyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6MDtcclxuICAgIGJvcmRlci1ib3R0b206MHB4O1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtdGFicy5hbmNob3ItdGFicz5saT5hOmhvdmVyLFxyXG4ubmF2LXRhYnMuYW5jaG9yLXRhYnM+bGk+YTpmb2N1cyxcclxuLm5hdi10YWJzLmFuY2hvci10YWJzPmxpLmFjdGl2ZT5he1xyXG4gICAgY29sb3I6dmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXByaW1hcnktY2xyKSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/challenge/seeker-view/seeker-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/challenge/seeker-view/seeker-view.component.ts ***!
  \****************************************************************/
/*! exports provided: SeekerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeekerViewComponent", function() { return SeekerViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _challenge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../challenge.service */ "./src/app/challenge/challenge.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");









let SeekerViewComponent = class SeekerViewComponent {
    constructor(challenges, toastr) {
        this.challenges = challenges;
        this.toastr = toastr;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__;
        this.associatedSolutionsId = [];
        this.anchorAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.server_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
        this.loggedInUser$.subscribe((resp) => {
            this.currentSeekerId = resp.LoggedInUser.userTypeId;
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
        this.loading = false;
        this.getAnchorAndSolutions();
    }
    getAnchorAndSolutions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.loading = true;
                this.relatedSolutionsLoading = true;
                this.anchors = yield this.challenges.getAnchorsForChallenge(this.challengeData.id);
                this.anchors.data.map((anchors) => {
                    let smartcityId = anchors.frg_seeker_id.frg_smart_city_id;
                    anchors.frg_seeker_id.frg_smart_city_id = anchors.smart_cities.find((city) => smartcityId === city.id);
                });
                this.anchorsByCurrentUser = lodash__WEBPACK_IMPORTED_MODULE_5__["remove"](this.anchors.data, (anchor) => {
                    return anchor.frg_seeker_id.id == this.currentSeekerId;
                });
                let seekerCityResp = yield this.challenges.getSeekerCity(this.currentSeekerId);
                this.seekerCity = seekerCityResp.data.frg_smart_city_id;
                this.loading = false;
                this.relatedSolutions = yield this.challenges.getRelatedSolutions(this.challengeData.id);
                this.relatedSolutionsLoading = false;
            }
            catch (err) {
                console.log(err);
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    generateFake(count) {
        const indexes = [];
        for (let i = 0; i < count; i++) {
            indexes.push(i);
        }
        return indexes;
    }
};
SeekerViewComponent.ctorParameters = () => [
    { type: _challenge_service__WEBPACK_IMPORTED_MODULE_3__["ChallengeService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserState"])
], SeekerViewComponent.prototype, "loggedInUser$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SeekerViewComponent.prototype, "anchorLength", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SeekerViewComponent.prototype, "challengeData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SeekerViewComponent.prototype, "associatedSolutionsId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SeekerViewComponent.prototype, "anchorAdded", void 0);
SeekerViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-seeker-view",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./seeker-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/challenge/seeker-view/seeker-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./seeker-view.component.css */ "./src/app/challenge/seeker-view/seeker-view.component.css")).default]
    })
], SeekerViewComponent);



/***/ }),

/***/ "./src/app/permission.guard.ts":
/*!*************************************!*\
  !*** ./src/app/permission.guard.ts ***!
  \*************************************/
/*! exports provided: PermissionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionGuard", function() { return PermissionGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/loggedinuser.state */ "./src/app/state/loggedinuser.state.ts");





let PermissionGuard = class PermissionGuard {
    constructor(toastr) {
        this.toastr = toastr;
        this.loggedInUser$.subscribe((resp) => {
            this.userType$ = resp.LoggedInUser.userType;
            this.userTypeId$ = resp.LoggedInUser.userTypeId;
        });
    }
    canActivate(route, state) {
        if (route.data.permission.indexOf(this.userType$) > -1) {
            return true;
        }
        else {
            this.toastr.warning("You have no access to view this page.", "Access Denied");
            return false;
        }
    }
};
PermissionGuard.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__["LoggedInUserState"])
], PermissionGuard.prototype, "loggedInUser$", void 0);
PermissionGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], PermissionGuard);



/***/ })

}]);
//# sourceMappingURL=challenge-challenge-module-es2015.js.map