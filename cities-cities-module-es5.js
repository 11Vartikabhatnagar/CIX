(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cities-cities-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/add-city/add-city.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/add-city/add-city.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesAddCityAddCityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-city-wrp g-pt-30 g-pb-30\">\r\n\t<ng-container *ngIf=\"!initLoading\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"g-pt-10\">\r\n\t\t\t\t<ul class=\"a-step-form-active-list text-center g-p-0\">\r\n\t\t\t\t\t<li\r\n\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t'g-p-bg': !cityStep1,\r\n\t\t\t\t\t\t\t'primary-grey-bg': cityStep1\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t(click)=\"gotoStep('step1')\"\r\n\t\t\t\t\t></li>\r\n\t\t\t\t\t<li\r\n\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t'g-p-bg': !cityStep2,\r\n\t\t\t\t\t\t\t'primary-grey-bg': cityStep2\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t(click)=\"gotoStep('step2')\"\r\n\t\t\t\t\t></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"add-form-wrapper\">\r\n\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t<div class=\"step-wrapper\" [hidden]=\"cityStep1\">\r\n\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 title-clr g-pt-10 g-pb-04\">Add City Profile</div>\r\n\t\t\t\t\t<form [formGroup]=\"addCityStep1\" *ngIf=\"addCityStep1 && addCityStep2\">\r\n\t\t\t\t\t\t<div class=\"row g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-9 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"ceo_name\" class=\"g-fs-07 lable-grey g-fw-400\"> City Ceo* </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"ceo_name\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: John Doe\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"ceoName\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.ceoName.touched || isSubmitted.Step1) && addCityControlStep1.ceoName?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.ceoName.touched || isSubmitted.Step1) && addCityControlStep1.ceoName.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tCEO Name is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 text-right hidden-xs\">\r\n\t\t\t\t\t\t\t\t<Avatar-Upload (onSaveImage)=\"handleCEOAvatar($event)\"> </Avatar-Upload>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"email\" class=\"g-fs-07 lable-grey g-fw-400\"> Email* </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"email\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex: jhondoe@email.com\"\r\n\t\t\t\t\t\t\t\tformControlName=\"email\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.email.touched || isSubmitted.Step1) && addCityControlStep1.email?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.email.touched || isSubmitted.Step1) && addCityControlStep1.email.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tCity email is required\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.email.touched || isSubmitted.Step1) && addCityControlStep1.email.errors?.email\"> Invalid email </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"city_name\" class=\"g-fs-07 lable-grey g-fw-400\"> City Name* </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"city_name\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex: Bangalore\"\r\n\t\t\t\t\t\t\t\tformControlName=\"cityName\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.cityName.touched || isSubmitted.Step1) && addCityControlStep1.cityName?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.cityName.touched || isSubmitted.Step1) && addCityControlStep1.cityName.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tCity name is required\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"vision\" class=\"g-fs-07 lable-grey g-fw-400\"> City Vision (500 characters)* </label>\r\n\t\t\t\t\t\t\t<textarea\r\n\t\t\t\t\t\t\t\trows=\"4\"\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"vision\"\r\n\t\t\t\t\t\t\t\tformControlName=\"vision\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.vision.touched || isSubmitted.Step1) && addCityControlStep1.vision?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t></textarea>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.vision.touched || isSubmitted.Step1) && addCityControlStep1.vision.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tVision is required.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.vision.touched || isSubmitted.Step1) && addCityControlStep1.vision.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t500 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\"> Challenge Sector </label>\r\n\t\t\t\t\t\t\t<div class=\"multiselect-wrp\">\r\n\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\r\n\t\t\t\t\t\t\t\t\tclass=\"frg-multiselect-dropdown\"\r\n\t\t\t\t\t\t\t\t\t[placeholder]=\"'Select Challenge Sector'\"\r\n\t\t\t\t\t\t\t\t\t[settings]=\"dropdownSettings\"\r\n\t\t\t\t\t\t\t\t\t[data]=\"sectorDropdownList\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challengeSectors\"\r\n\t\t\t\t\t\t\t\t\t(onSelect)=\"getChallengeBasedOnSector($event)\"\r\n\t\t\t\t\t\t\t\t\t(onDeSelect)=\"getChallengeBasedOnSector($event)\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.challengeSectors.touched || isSubmitted.Step1) && addCityControlStep1.challengeSectors?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.challengeSectors.touched || isSubmitted.Step1) && addCityControlStep1.challengeSectors.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tChallenge Sector required.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\"> Challenges </label>\r\n\t\t\t\t\t\t\t<div class=\"multiselect-wrp\">\r\n\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\r\n\t\t\t\t\t\t\t\t\tclass=\"frg-multiselect-dropdown\"\r\n\t\t\t\t\t\t\t\t\t[placeholder]=\"'Select Challenge'\"\r\n\t\t\t\t\t\t\t\t\t[settings]=\"dropdownSettings\"\r\n\t\t\t\t\t\t\t\t\t[data]=\"challengeDropdownList\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challenges\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.challenges.touched || isSubmitted.Step1) && addCityControlStep1.challenges?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.challenges.touched || isSubmitted.Step1) && addCityControlStep1.challenges.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tChallenge Sector required.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"website\" class=\"g-fs-07 lable-grey g-fw-400\"> Website* </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"website\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex:https://www.google.com/\"\r\n\t\t\t\t\t\t\t\tformControlName=\"website\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.website.touched || isSubmitted.Step1) && addCityControlStep1.website?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.website.touched || isSubmitted.Step1) && addCityControlStep1.website.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tWebsite is required.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.website.touched || isSubmitted) && addCityControlStep1.website.errors?.pattern\"> Invalid Url format </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"number\" class=\"g-fs-07 lable-grey g-fw-400\">Phone</label>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control phone-code\" value=\"+91\" disabled />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"mobile\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.mobile.touched || isSubmitted.Step1) && addCityControlStep1.mobile?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 9255333586\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"addCityControlStep1.mobile.touched && addCityControlStep1.mobile.errors?.pattern\"> Enter a valid phone number </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"number\" class=\"g-fs-07 lable-grey g-fw-400\"> Landline </label>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control phone-code\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"03425\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"landLineCode\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.landLineCode.touched || isSubmitted.Step1) && addCityControlStep1.landLineCode?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"landLineNumber\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror:\r\n\t\t\t\t\t\t\t\t\t\t\t\t(addCityControlStep1.landLineCode.touched || addCityControlStep1.landLineNumber.touched || isSubmitted.Step1) && addCityControlStep1.landLineNumber?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 2955 5529 \"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"area\" class=\"g-fs-07 lable-grey g-fw-400\"> Area of City Developed (Unit:㎢)* </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"area\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 150\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"area\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.area.touched || isSubmitted.Step1) && addCityControlStep1.area?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.area.touched || isSubmitted.Step1) && addCityControlStep1.area.errors?.required\"> Area is required. </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"population\" class=\"g-fs-07 lable-grey g-fw-400\"> City Population (Unit:Lakhs)* </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"population\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 100L\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"population\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.population.touched || isSubmitted.Step1) && addCityControlStep1.population?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.population.touched || isSubmitted.Step1) && addCityControlStep1.population.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tPopulation is required.\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"budget\" class=\"g-fs-07 lable-grey g-fw-400\"> Annual Budget (Unit:Crore)* </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"budget\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 14 Cr\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"budget\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.budget.touched || isSubmitted.Step1) && addCityControlStep1.budget?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.budget.touched || isSubmitted.Step1) && addCityControlStep1.budget.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tBudget is required.\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"rank\" class=\"g-fs-07 lable-grey g-fw-400\"> Smart City Rank* </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"rank\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 7\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"rank\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.rank.touched || isSubmitted.Step1) && addCityControlStep1.rank?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.rank.touched || isSubmitted.Step1) && addCityControlStep1.rank.errors?.required\"> Rank is required. </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"files-upload-wrp\">\r\n\t\t\t\t\t\t\t<app-citylogo-upload (onSaveLogo)=\"handleSaveLogo($event)\" (onRemoveLogo)=\"handleRemovedLogo($event)\"> </app-citylogo-upload>\r\n\t\t\t\t\t\t\t<app-city-avatar-upload (onSaveCityImage)=\"handleSaveCityImage($event)\" (onRemoveCityImage)=\"handleRemoveCityImage($event)\"></app-city-avatar-upload>\r\n\t\t\t\t\t\t\t<app-city-map-upload (onSaveMap)=\"handleSaveMap($event)\" (onRemoveMap)=\"handleRemoveMap($event)\"></app-city-map-upload>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" type=\"submit\" (click)=\"CityStep1Submit()\">Next</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t<div class=\"step-wrapper\" [hidden]=\"cityStep2\">\r\n\t\t\t\t\t<div class=\"back-btn-wrp g-fs-07 g-fw-500\">\r\n\t\t\t\t\t\t<span (click)=\"gotoStep('step1')\" class=\"g-cursor-pointer g-transition body-light-clr back-btn\" [ngClass]=\"{ disable: !cityStep1 }\"> < Back </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 title-clr g-pt-10 g-pb-04\">Add City Profile</div>\r\n\t\t\t\t\t<form [formGroup]=\"addCityStep2\" *ngIf=\"addCityStep1 && addCityStep2\">\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"dataSheet\" class=\"g-fs-07 lable-grey g-fw-400\"> City Data Sheet (Link) </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"dataSheet\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"John Doe\"\r\n\t\t\t\t\t\t\t\tformControlName=\"dataSheet\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep2.dataSheet.touched || isSubmitted.Step2) && addCityControlStep2.dataSheet?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep2.dataSheet.touched || isSubmitted.Step2) && addCityControlStep2.dataSheet.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\tInvalid Url format\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<app-add-solutions (onSolutionChange)=\"handleSolutionChanges($event)\"> </app-add-solutions>\r\n\t\t\t\t\t\t<app-add-achievements (onAchievementChange)=\"handleAchievementChanges($event)\"> </app-add-achievements>\r\n\t\t\t\t\t\t<app-gallery-upload (onGalleryChange)=\"handleSaveGallery($event)\"></app-gallery-upload>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"fb\" class=\"g-fs-07 lable-grey g-fw-400\"> Facebook Link </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"fb\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex: https://www.facebook.com/ChandigarhSmart \"\r\n\t\t\t\t\t\t\t\tformControlName=\"fb\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep2.fb.touched || isSubmitted.Step2) && addCityControlStep2.fb?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep2.fb.touched || isSubmitted.Step2) && addCityControlStep2.fb.errors?.pattern\"> Invalid url format. </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"twtr\" class=\"g-fs-07 lable-grey g-fw-400\"> Twitter Link </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"twtr\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex: https://twitter.com/ChandigarhSmart \"\r\n\t\t\t\t\t\t\t\tformControlName=\"twtr\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep2.twtr.touched || isSubmitted.Step2) && addCityControlStep2.twtr?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep2.twtr.touched || isSubmitted.Step2) && addCityControlStep2.twtr.errors?.pattern\"> Invalid url format. </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"yt\" class=\"g-fs-07 lable-grey g-fw-400\"> Youtube Link </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"yt\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex: https://www.youtube.com/c/FORGEAccelerator\"\r\n\t\t\t\t\t\t\t\tformControlName=\"yt\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep2.yt.touched || isSubmitted.Step2) && addCityControlStep2.yt?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep2.yt.touched || isSubmitted.Step2) && addCityControlStep2.yt.errors?.pattern\"> Invalid url format. </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"ig\" class=\"g-fs-07 lable-grey g-fw-400\"> Instagram Link </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"ig\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex: https://www.instagram.com/chandigarh.smartcity/ \"\r\n\t\t\t\t\t\t\t\tformControlName=\"ig\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep2.ig.touched || isSubmitted.Step2) && addCityControlStep2.ig?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep2.ig.touched || isSubmitted.Step2) && addCityControlStep2.ig.errors?.pattern\"> Invalid url format. </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" type=\"submit\" (click)=\"saveSmartCity()\">\r\n\t\t\t\t\t\t\t\tSave &nbsp;\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"initLoading\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/cities.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/cities.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesCitiesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/city-profile/city-profile.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/city-profile/city-profile.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesCityProfileCityProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Bangalore Card-->\r\n<div class=\"g-mt-20 g-mb-20\">\r\n\t<div class=\"container profile-card g-bdrrad-10px\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-8 col-sm-12 col-xs-12\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"ej-bangalore-logo-container col-md-2 g-pr-0 text-left\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t<img *ngIf=\"cityData?.data.city_logo != ''\" class=\"g-bdrrad-5px city-logo\" [src]=\"server_url + cityData?.data.city_logo\" />\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\theight: '50px',\r\n\t\t\t\t\t\t\t\t\twidth: '50px',\r\n\t\t\t\t\t\t\t\t\t'border-radius': '4px',\r\n\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-10 g-pl-0 text-left\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t<span class=\"g-p-clr g-mb-0 g-mr-06 g-fs-15 g-fw-500\">\r\n\t\t\t\t\t\t\t\t{{ cityData?.data.name | titlecase }}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"isCityAdmin\">\r\n\t\t\t\t\t\t\t\t\t<!-- [routerLink]=\"['edit']\" -->\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"editCity()\" class=\"btn g-w-bg g-bdr-005 body-grey-clr g-fs-07 g-lh-07 g-fw-700 g-pt-05 g-pb-05 g-pl-04 g-pr04 g-mr-06\">\r\n\t\t\t\t\t\t\t\t\t\t&nbsp;EDIT CITY PROFILE&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"g-pl-04 fas fa-pen\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\t\t\tclass=\"btn g-w-bg g-bdr-005 body-grey-clr g-fs-07 g-lh-07 g-fw-700 g-pt-05 g-pb-05 g-pl-04 g-pr-04\"\r\n\t\t\t\t\t\t\t\t\tdata-toggle=\"modal\"\r\n\t\t\t\t\t\t\t\t\tdata-target=\"#galleryModal\" *ngIf=\"cityData?.data.gallery.length > 0\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\tVIEW GALLERY&nbsp;\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-images\"></i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '26px',\r\n\t\t\t\t\t\t\t\t\twidth: '200px',\r\n\t\t\t\t\t\t\t\t\tmargin: '6px 0px 0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row g-pt-06\">\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2 g-pr-0 text-left\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t<p class=\"g-fs-08 body-light-clr g-fw-500\">City CEO</p>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\twidth: '80px',\r\n\t\t\t\t\t\t\t\t\tmargin: '6px 0px 0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-8 col-sm-9 col-xs-9 g-pl-0 text-left\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData?.data.ceo_avatar\">\r\n\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + cityData?.data.ceo_avatar\" alt=\"ceo_image\" class=\"ceo-avatar\" />\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData?.data.seekers.length\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-ml-05 g-fs-09 title-clr g-fw-500 g-cursor-pointer g-text-underline\" routerLink=\"/seeker/{{ cityData?.data.seekers[0].slug }}\">{{ cityData?.data.ceo_name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!cityData?.data.seekers.length\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-fs-09 title-clr g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t{{ cityData?.data.ceo_name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\twidth: '140px',\r\n\t\t\t\t\t\t\t\t\tmargin: '6px 0px 0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row g-pt-02\">\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2 g-pr-0 text-left\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t<p class=\"g-fs-08 body-light-clr g-fw-500\">City Vision</p>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\twidth: '80px',\r\n\t\t\t\t\t\t\t\t\tmargin: '6px 0px 0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10 g-pl-0 text-left\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t<p class=\"g-fs-08 g-black5-clr g-fw-400\">\r\n\t\t\t\t\t\t\t\t{{ cityData?.data.vision }}\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\tcount=\"3\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\twidth: '100%',\r\n\t\t\t\t\t\t\t\t\tmargin: '6px 0px 0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row g-pt-05\">\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t<p class=\"g-fs-08 body-light-clr g-fw-500\">Smart City Rank</p>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\twidth: '80px',\r\n\t\t\t\t\t\t\t\t\tmargin: '6px 0px 0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2 g-pl-0\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t<p class=\"g-fs-14 g-black5-clr g-fw-500\">\r\n\t\t\t\t\t\t\t\t{{ cityData?.data.score }}\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\twidth: '80px',\r\n\t\t\t\t\t\t\t\t\tmargin: '6px 0px 0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2 g-pr-0 g-pl-05 text-left\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t<p class=\"g-fs-08 body-light-clr g-fw-500\">Annual Budget for Pilots</p>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\twidth: '80px',\r\n\t\t\t\t\t\t\t\t\tmargin: '6px 0px 0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2 g-pl-05 g-pr-0\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t<p class=\"g-fs-14 g-black3-clr g-fw-500\">{{ cityData?.data.budget }} Cr</p>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\twidth: '80px',\r\n\t\t\t\t\t\t\t\t\tmargin: '6px 0px 0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2 g-pr-0 g-pl-05 text-left\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t<p class=\"g-fs-08 body-light-clr g-fw-500\">\r\n\t\t\t\t\t\t\t\tCity <br />\r\n\t\t\t\t\t\t\t\tPopulation\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\twidth: '80px',\r\n\t\t\t\t\t\t\t\t\tmargin: '6px 0px 0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2 g-pl-05 g-pr-0\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t<p class=\"g-fs-14 g-black3-clr g-fw-500\">{{ cityData?.data.city_demographics }} L</p>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\twidth: '80px',\r\n\t\t\t\t\t\t\t\t\tmargin: '6px 0px 0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"city-avatar text-right\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t<img [src]=\"server_url + cityData?.data.avatar\" alt=\"city image\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\theight: '256px',\r\n\t\t\t\t\t\t\t\twidth: '256px',\r\n\t\t\t\t\t\t\t\t'border-radius': '10px',\r\n\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"ej-city-details g-mt-20\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t<div class=\"g-p-0 ej-city-area-card\">\r\n\t\t\t\t\t\t<div class=\"ej-city-area-card-img\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t\t<img *ngIf=\"cityData?.data.city_map\" [src]=\"server_url + cityData?.data.city_map\" alt=\"ej-map\" class=\"g-w-100per\" />\r\n\t\t\t\t\t\t\t\t<img *ngIf=\"cityData?.data.city_map == ''\" src=\"../../../assets/img/ej-map.png\" alt=\"placeholder map\" />\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\theight: '358px',\r\n\t\t\t\t\t\t\t\t\t\twidth: '358px',\r\n\t\t\t\t\t\t\t\t\t\t'border-radius': '0px',\r\n\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-w-bg g-pt-04 g-pb-04 ej-city-area-card-content\">\r\n\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t<div class=\"row g-sm-pt-20\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"g-fs-08 body-grey-clr g-pt-04 g-pl-08 g-lh-19\">Area of city developed</p>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\twidth: '80px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px 0px 10px 15px'\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5 g-pl-0\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"g-fs-14 g-black3-clr g-fw-500 g-pt-04\">{{ cityData?.data.city_area }} km<sup>2</sup></p>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\twidth: '80px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px 0px 10px 0px'\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--Contact Details Card-->\r\n\t\t\t\t\t<div class=\"city-card\">\r\n\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t<span class=\"g-fs-07\">Smart City Office Contact Details</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-body overlow-y-hidden a-cs\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData?.data.website\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-pt-02 ej-sm-pl-100\">\r\n\t\t\t\t\t\t\t\t\t\t<a [href]=\"cityData?.data.website\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-globe g-fs-09 g-black4-clr\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-black5-clr g-pl-07 g-valign-mid g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ cityData?.data.website }}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-pt-02 ej-sm-pl-100\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"far fa-envelope g-fs-09 g-black4-clr\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-black5-clr g-pl-06 g-valign-mid g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ cityData?.data.ceo_email }}\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<div class=\"g-pt-02 ej-sm-pl-100\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"mobile || landline\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-phone-alt g-fs-09 g-black4-clr\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-black5-clr g-pl-06 g-valign-mid g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ mobile }}\r\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"landline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ landline }}\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData?.data.data_sheet != ''\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-pt-02 ej-sm-pl-100\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-link g-fs-09 g-black4-clr\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<a [href]=\"cityData.data.data_sheet\" target=\"_blank\" class=\"g-fs-07 primary-green-clr g-pl-06 g-valign-mid g-fw-500\"> City Data Link </a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\tclass=\"g-pt-04 g-ml-15 ej-sm-pl-100 social-media-links\"\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"\r\n\t\t\t\t\t\t\t\t\t\tcityData?.data.social_media[0].facebook ||\r\n\t\t\t\t\t\t\t\t\t\tcityData?.data.social_media[2].twitter ||\r\n\t\t\t\t\t\t\t\t\t\tcityData?.data.social_media[1].instagram ||\r\n\t\t\t\t\t\t\t\t\t\tcityData?.data.social_media[3].youtube\r\n\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-fs-08 body-light-clr g-fw-400 g-pr-04\"> Follow us at </span>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData?.data.social_media[0].facebook\">\r\n\t\t\t\t\t\t\t\t\t\t<a [href]=\"cityData?.data.social_media[0].facebook\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fab fa-facebook-square\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData?.data.social_media[2].twitter\">\r\n\t\t\t\t\t\t\t\t\t\t<a [href]=\"cityData?.data.social_media[2].twitter\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fab fa-twitter\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData?.data.social_media[1].instagram\">\r\n\t\t\t\t\t\t\t\t\t\t<a [href]=\"cityData?.data.social_media[1].instagram\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fab fa-instagram\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData?.data.social_media[3].youtube\">\r\n\t\t\t\t\t\t\t\t\t\t<a [href]=\"cityData?.data.social_media[3].youtube\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fab fa-youtube\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\t\t\twidth: '60%',\r\n\t\t\t\t\t\t\t\t\t\t\tmargin: '0px 0px 10px'\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\tcount=\"3\"\r\n\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\t\twidth: '100%',\r\n\t\t\t\t\t\t\t\t\t\t\tmargin: '0px 0px 8px'\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--Active Challenges Sectors-->\r\n\t\t\t\t\t<ng-container *ngIf=\"!cityLoading && cityData?.data.challenge_sectors.length > 0\">\r\n\t\t\t\t\t\t<div class=\"city-card\">\r\n\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t<span class=\"g-fs-07\">Challenge Sectors</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"card-body overlow-y-hidden a-cs\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of cityData?.data.challenge_sectors\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-pb-04 g-fs-07 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"far fa-check-circle g-pr-06 g-fs-10 primary-green-clr\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>{{ item.name | titlecase }}</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- achievements -->\r\n\t\t\t\t\t<ng-container *ngIf=\"!cityLoading && cityData?.data.achievements.length > 0\">\r\n\t\t\t\t\t\t<div class=\"city-card\">\r\n\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t<span class=\"g-fs-07\">Achivements of the City</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"card-body overlow-y-hidden a-cs\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of cityData?.data.achievements\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"achievement-item\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"monthyear\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ item.month | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"year\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ item.year }}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"achievement-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ item.title | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ item.description }}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t<div class=\"panel profile-stats\">\r\n\t\t\t\t\t\t<div class=\"panel-body g-pt-0 g-pb-0\">\r\n\t\t\t\t\t\t\t<div class=\"row text-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3 g-bdrr-005 g-brdr-grey g-pt-13 g-pb-13\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-12 g-fw-600 g-black-clr\">0</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black7-clr\">Total Applications</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '34px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '40px',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px 0px 6px'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '60%',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px auto',\r\n\t\t\t\t\t\t\t\t\t\t\t\tdisplay: 'block'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3 g-bdrr-005 g-brdr-grey g-pt-13 g-pb-13\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-12 g-fw-600 g-black-clr\">0</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black7-clr\">Pilots Active</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '34px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '40px',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px 0px 6px'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '60%',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px auto',\r\n\t\t\t\t\t\t\t\t\t\t\t\tdisplay: 'block'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3 g-bdrr-005 g-brdr-grey g-pt-13 g-pb-13\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-12 g-fw-600 g-black-clr\">0</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black7-clr\">Successful Pilots</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '34px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '40px',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px 0px 6px'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '60%',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px auto',\r\n\t\t\t\t\t\t\t\t\t\t\t\tdisplay: 'block'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3 g-pt-13 g-pb-13\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-12 g-fw-600 g-black-clr\">0</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black7-clr\">Granted for Pilots</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityLoading\">\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '34px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '40px',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px 0px 6px'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '60%',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px auto',\r\n\t\t\t\t\t\t\t\t\t\t\t\tdisplay: 'block'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- tabs area -->\r\n\t\t\t\t\t<ng-container *ngIf=\"!cityLoading\">\r\n\t\t\t\t\t\t<ul class=\"nav nav-tabs g-mt-20 g-mb-05 anchor-tabs city-profile-tabs\">\r\n\t\t\t\t\t\t\t<li class=\"active\">\r\n\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#active_challenges\"> Active Challenges ({{ cityData?.data.challenges.length }}) </a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#sucessfully_closed\"> Successfully Closed (0) </a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#solutions_implemented\"> Solutions Implemented ({{ cityData?.data.implemented_solutions.length }}) </a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t\t<div id=\"active_challenges\" class=\"tab-pane fade in active\">\r\n\t\t\t\t\t\t\t\t<!--Challenges-->\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!challengesLoading\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"challenges-section\">\r\n\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"panel solution-card g-pt-13 g-pb-12 g-pl-13 g-pr-13 g-w-bg g-bdr-01 g-brdr-grey g-bdrrad-5px\"\r\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let challenge of cityChallenges\"\r\n\t\t\t\t\t\t\t\t\t\t\t[routerLink]=\"['/challenge', challenge.id]\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body g-p-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-black7-clr cnt1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ challenge.name.length > 60 ? (challenge.name | slice: 0:60) + \"..\" : challenge.name }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-400 g-black8-clr g-black8-clr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ challenge.frg_challenge_sector_id.name }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-2 col-xs-6\">\r\n                            <div\r\n                              class=\"g-fs-14 g-fw-700 g-grey4-clr text-center\"\r\n                            >\r\n                              {{ challenge.anchors.length }}\r\n                            </div>\r\n                            <div class=\"g-fs-07 g-fw-400 text-center g-p-clr\">\r\n                              Anchors\r\n                            </div>\r\n                          </div> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-14 g-fw-700 g-grey4-clr text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ challenge.solutions.length }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 text-center g-p-clr\">Solutions</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<!-- Challenges skeleton -->\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"challengesLoading\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"challenges-section\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel g-pt-13 g-pb-12 g-pl-13 g-pr-13 g-w-bg g-bdr-01 g-brdr-grey g-bdrrad-5px\" *ngFor=\"let item of [].constructor(6)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body g-p-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: '75%'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: '30%'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tanimation=\"false\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: '35px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: '45px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tanimation=\"false\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '0',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: '70%',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: 'block',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: '5px auto'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tanimation=\"false\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: '35px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: '45px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tanimation=\"false\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: '70%',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: 'block',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: '5px auto'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"sucessfully_closed\" class=\"tab-pane fade\"></div>\r\n\t\t\t\t\t\t\t<div id=\"solutions_implemented\" class=\"tab-pane fade\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData?.data.implemented_solutions.length > 0\">\r\n\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\tclass=\"panel solution-implemented g-pt-13 g-pb-12 g-pl-13 g-pr-13 g-w-bg g-bdr-01 g-brdr-grey g-bdrrad-5px\"\r\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let solution of cityData?.data.implemented_solutions\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body g-p-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"name\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ solution.challenge }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sector\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ solution.challengeSector | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"website text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [href]=\"solution.link\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-globe g-fs-09 g-black4-clr\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<collapsable-content [text]=\"solution.description\" [maxHeight]=\"60\"> </collapsable-content>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!--Active and Closed Challenges-->\r\n\t\t\t\t\t<!-- <div class=\"ej-actv-clsd-challenges g-trans-bg g-mt-20 g-mb-10\">\r\n            <ng-container *ngIf=\"!challengesLoading\">\r\n              <span class=\"ej-black18 g-fs-10 g-grey5-clr g-mr-10\">\r\n                Active Challenges ({{ cityChallenges.length }})\r\n              </span>\r\n              <span class=\"ej-black18 g-fs-10 g-grey5-clr g-mr-10\">\r\n                Successfully Closed (0)\r\n              </span>\r\n            </ng-container>\r\n          </div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- The Modal -->\r\n<div class=\"modal\" class=\"modal fade gallery-modal\" id=\"galleryModal\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n\t\t\t\t<h4 class=\"modal-title\">Gallery</h4>\r\n\t\t\t  </div>\r\n\t\t\t<!-- Modal body -->\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<ng-container *ngIf=\"!cityLoading && cityData?.data.gallery.length > 0\">\r\n\t\t\t\t\t<div class=\"gallery-slider\">\r\n\t\t\t\t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t\t<!-- Indicators -->\r\n\t\t\t\t\t\t\t<ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let image of cityData?.data.gallery; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<li data-target=\"#myCarousel\" [attr.data-slide-to]=\"i\" [class.active]=\"i == 0\"></li>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t<!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let image of cityData?.data.gallery; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"item\" [class.active]=\"i == 0\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + image\" alt=\"gallery\" />\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- Left and right controls -->\r\n\t\t\t\t\t\t\t<a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/discover-cities/discover-cities.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/discover-cities/discover-cities.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesDiscoverCitiesDiscoverCitiesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-blue-bg\">\r\n\t<div class=\"container g-pt-20 g-pb-20\">\r\n\t\t<form #searchForm=\"ngForm\" (ngSubmit)=\"searchCities()\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-2 g-pr-0\">\r\n\t\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr dropdown-toggle g-h-24 g-pl-08 g-pr-08 g-w-100per search-input\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t<span>Cities</span>&nbsp;&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"caret\"></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['/discover/challenges']\">Challenges</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['/discover/providers']\">Providers</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['/discover/solutions']\">Solutions</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-7 g-p-0\">\r\n\t\t\t\t\t<div class=\"search-box\">\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tclass=\"form-control g-bdrrad-0 g-h-24\"\r\n\t\t\t\t\t\t\tid=\"search\"\r\n\t\t\t\t\t\t\tplaceholder=\"Search for city\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"filterData.search.name.contains\"\r\n\t\t\t\t\t\t\t[ngModelOptions]=\"{ standalone: true }\"\r\n\t\t\t\t\t\t\t(ngModelChange)=\"autoComplete($event)\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"autoSuggestions?.data.length > 0 && filterData.search.name.contains.length > 3\">\r\n\t\t\t\t\t\t\t<div class=\"search-auto-complete-wrp\">\r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let suggestion of autoSuggestions.data\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div (click)=\"searchAutoSuggestion(suggestion.name)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ suggestion.name.length > 75 ? (suggestion.name | slice: 0:75) + \"..\" : suggestion.name }}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-1 g-p-0\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-h-24 g-pl-08 g-pr-08 search-btn\">\r\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t<app-create-challenge-btn-modal></app-create-challenge-btn-modal>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n<div class=\"container g-pb-50\">\r\n\t<div class=\"row\">\r\n\t\t<ng-container *ngIf=\"isAdmin\">\r\n\t\t\t<div class=\"g-pt-10 text-right\">\r\n\t\t\t\t<div class=\"title g-fs-075 g-lh-09 g-black5-clr g-fw-500\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04\" [routerLink]=\"['/cities/create']\">Add Smart City</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<div class=\"row g-pt-29\" *ngIf=\"allCities?.data.length\">\r\n\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t<ng-container *ngIf=\"!loading\">\r\n\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\" >\r\n\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t<span class=\"g-blue3-clr\"> {{ allCities?.currently_showing.from }}-{{ allCities?.currently_showing.to }}</span>\r\n\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t<span class=\"g-black7-clr\">{{ allCities?.total_results }}</span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-black7-clr\">Cities</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t<ul class=\"cities-pagination text-right g-p-0 g-m-0\">\r\n\t\t\t\t\t<li class=\"g-fs-06 g-fw-500 g-pl-02\">\r\n\t\t\t\t\t\t<a class=\"g-black5-clr cities-pg-link g-opacity-06 g-cursor-pointer\" [class.active]=\"selectedAlphabet === 'All'\" (click)=\"filterByAlphabet('All')\"> All </a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<ng-container *ngFor=\"let item of alphabetFilterItems\">\r\n\t\t\t\t\t\t<li class=\"g-fs-06 g-fw-500 g-pl-02\">\r\n\t\t\t\t\t\t\t<a class=\"g-black5-clr cities-pg-link g-opacity-06 g-cursor-pointer\" [class.active]=\"selectedAlphabet === item\" (click)=\"filterByAlphabet(item)\">\r\n\t\t\t\t\t\t\t\t{{ item }}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<ng-container *ngIf=\"!loading\">\r\n\t\t\t<div class=\"city-list-wrp\">\r\n\t\t\t\t<div class=\"row g-pt-15\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let city of allCities?.data\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"panel cities-card g-mb-15 g-bdrrad-6px\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body g-p-0\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/cities', city.id]\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"l-cities-card-img\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + '/' + city.avatar\" alt=\"City\" class=\"g-w-100per cities\" />\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-w-bg g-pt-04 g-pb-04 text-center cities-card-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-500 g-black8-clr cnt1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ city.name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-02\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-opacity-08 g-fw-400 g-black8-clr cnt2\">{{ city.challenges.length }} Challenges</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container  *ngIf=\"!allCities?.data.length\">\r\n\t\t\t\t\t\t<div class=\"text-center g-mt-50 g-mb-50\">\r\n\t\t\t\t\t\t\tNo records found\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<!-- skeleton loader -->\r\n\t\t<ng-container *ngIf=\"loading\">\r\n\t\t\t<div class=\"city-list-wrp\">\r\n\t\t\t\t<div class=\"row g-pt-15\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let item of [].constructor(16)\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"panel cities-card g-mb-15 g-bdrrad-6px\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body g-p-0\">\r\n\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"l-cities-card-img\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-w-bg g-pt-04 g-pb-04 text-center cities-card-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '90px', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mt-02\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '140px', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/edit-city/edit-city.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/edit-city/edit-city.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesEditCityEditCityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-city-wrp g-pt-30 g-pb-30\">\r\n\t<ng-container *ngIf=\"!initLoading\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"g-pt-10\">\r\n\t\t\t\t<ul class=\"a-step-form-active-list text-center g-p-0\">\r\n\t\t\t\t\t<li\r\n\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t'g-p-bg': !cityStep1,\r\n\t\t\t\t\t\t\t'primary-grey-bg': cityStep1\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t(click)=\"gotoStep('step1')\"\r\n\t\t\t\t\t></li>\r\n\t\t\t\t\t<li\r\n\t\t\t\t\t\tclass=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t'g-p-bg': !cityStep2,\r\n\t\t\t\t\t\t\t'primary-grey-bg': cityStep2\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t(click)=\"gotoStep('step2')\"\r\n\t\t\t\t\t></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"add-form-wrapper\">\r\n\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t<div class=\"step-wrapper\" [hidden]=\"cityStep1\">\r\n\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 title-clr g-pt-10 g-pb-04\">Edit City Profile</div>\r\n\t\t\t\t\t<form [formGroup]=\"addCityStep1\" *ngIf=\"addCityStep1 && addCityStep2\">\r\n\t\t\t\t\t\t<div class=\"row g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-9 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"ceo_name\" class=\"g-fs-07 lable-grey g-fw-400\"> City Ceo* </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"ceo_name\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: John Doe\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"ceoName\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.ceoName.touched || isSubmitted.Step1) && addCityControlStep1.ceoName?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.ceoName.touched || isSubmitted.Step1) && addCityControlStep1.ceoName.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tCEO Name is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 text-right hidden-xs\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData\">\r\n\t\t\t\t\t\t\t\t\t<Avatar-Upload [Src]=\"serverUrl + cityData.data.ceo_avatar\" (onSaveImage)=\"handleCEOAvatar($event)\"> </Avatar-Upload>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"email\" class=\"g-fs-07 lable-grey g-fw-400\"> Email* </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"email\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex: jhondoe@email.com\"\r\n\t\t\t\t\t\t\t\tformControlName=\"email\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.email.touched || isSubmitted.Step1) && addCityControlStep1.email?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.email.touched || isSubmitted.Step1) && addCityControlStep1.email.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tCity email is required\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.email.touched || isSubmitted.Step1) && addCityControlStep1.email.errors?.email\"> Invalid email </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"city_name\" class=\"g-fs-07 lable-grey g-fw-400\"> City Name* </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"city_name\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex: Bangalore\"\r\n\t\t\t\t\t\t\t\tformControlName=\"cityName\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.cityName.touched || isSubmitted.Step1) && addCityControlStep1.cityName?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.cityName.touched || isSubmitted.Step1) && addCityControlStep1.cityName.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tCity name is required\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"vision\" class=\"g-fs-07 lable-grey g-fw-400\"> City Vision (500 Characters)* </label>\r\n\t\t\t\t\t\t\t<textarea\r\n\t\t\t\t\t\t\t\trows=\"4\"\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"vision\"\r\n\t\t\t\t\t\t\t\tformControlName=\"vision\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.vision.touched || isSubmitted.Step1) && addCityControlStep1.vision?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t></textarea>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.vision.touched || isSubmitted.Step1) && addCityControlStep1.vision.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tVision is required.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.vision.touched || isSubmitted.Step1) && addCityControlStep1.vision.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t500 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\"> Challenge Sector </label>\r\n\t\t\t\t\t\t\t<div class=\"multiselect-wrp\">\r\n\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\r\n\t\t\t\t\t\t\t\t\tclass=\"frg-multiselect-dropdown\"\r\n\t\t\t\t\t\t\t\t\t[placeholder]=\"'Select Challenge Sector'\"\r\n\t\t\t\t\t\t\t\t\t[settings]=\"dropdownSettings\"\r\n\t\t\t\t\t\t\t\t\t[data]=\"sectorDropdownList\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challengeSectors\"\r\n\t\t\t\t\t\t\t\t\t(onSelect)=\"getChallengeBasedOnSector($event)\"\r\n\t\t\t\t\t\t\t\t\t(onDeSelect)=\"getChallengeBasedOnSector($event)\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.challengeSectors.touched || isSubmitted.Step1) && addCityControlStep1.challengeSectors?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.challengeSectors.touched || isSubmitted.Step1) && addCityControlStep1.challengeSectors.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tChallenge Sector required.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"g-fs-07 lable-grey g-fw-400\"> Challenges </label>\r\n\t\t\t\t\t\t\t<div class=\"multiselect-wrp\">\r\n\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\r\n\t\t\t\t\t\t\t\t\tclass=\"frg-multiselect-dropdown\"\r\n\t\t\t\t\t\t\t\t\t[placeholder]=\"'Select Challenge'\"\r\n\t\t\t\t\t\t\t\t\t[settings]=\"dropdownSettings\"\r\n\t\t\t\t\t\t\t\t\t[data]=\"challengeDropdownList\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challenges\"\r\n\t\t\t\t\t\t\t\t\t(onSelect)=\"handleChallengeChange($event)\"\r\n\t\t\t\t\t\t\t\t\t(onDeSelect)=\"handleChallengeChange($event)\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.challenges.touched || isSubmitted.Step1) && addCityControlStep1.challenges?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.challenges.touched || isSubmitted.Step1) && addCityControlStep1.challenges.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tChallenge Sector required.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"website\" class=\"g-fs-07 lable-grey g-fw-400\"> Website* </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"website\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex:https://www.google.com/\"\r\n\t\t\t\t\t\t\t\tformControlName=\"website\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.website.touched || isSubmitted.Step1) && addCityControlStep1.website?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.website.touched || isSubmitted.Step1) && addCityControlStep1.website.errors?.required\">\r\n\t\t\t\t\t\t\t\t\tWebsite is required.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.website.touched || isSubmitted) && addCityControlStep1.website.errors?.pattern\"> Invalid Url format </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"number\" class=\"g-fs-07 lable-grey g-fw-400\">Phone</label>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control phone-code\" value=\"+91\" disabled />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"mobile\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.mobile.touched || isSubmitted.Step1) && addCityControlStep1.mobile?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 9255333586\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"addCityControlStep1.mobile.touched && addCityControlStep1.mobile.errors?.pattern\"> Enter a valid phone number </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"number\" class=\"g-fs-07 lable-grey g-fw-400\"> Landline </label>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control phone-code\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"03425\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"landLineCode\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.landLineCode.touched || isSubmitted.Step1) && addCityControlStep1.landLineCode?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"landLineNumber\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.landLineNumber.touched || isSubmitted.Step1) && addCityControlStep1.landLineNumber?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 2955 5529 \"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"area\" class=\"g-fs-07 lable-grey g-fw-400\"> Area of City Developed (Unit:㎢)* </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"area\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 150\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"area\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.area.touched || isSubmitted.Step1) && addCityControlStep1.area?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.area.touched || isSubmitted.Step1) && addCityControlStep1.area.errors?.required\"> Area is required. </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"population\" class=\"g-fs-07 lable-grey g-fw-400\"> City Population (Unit:Lakhs)* </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"population\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 100L\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"population\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.population.touched || isSubmitted.Step1) && addCityControlStep1.population?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.population.touched || isSubmitted.Step1) && addCityControlStep1.population.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tPopulation is required.\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"budget\" class=\"g-fs-07 lable-grey g-fw-400\"> Annual Budget (Unit:Crore)* </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"budget\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 14 Cr\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"budget\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.budget.touched || isSubmitted.Step1) && addCityControlStep1.budget?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.budget.touched || isSubmitted.Step1) && addCityControlStep1.budget.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tBudget is required.\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"rank\" class=\"g-fs-07 lable-grey g-fw-400\"> Smart City Rank* </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"rank\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ex: 7\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"rank\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (addCityControlStep1.rank.touched || isSubmitted.Step1) && addCityControlStep1.rank?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep1.rank.touched || isSubmitted.Step1) && addCityControlStep1.rank.errors?.required\"> Rank is required. </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"files-upload-wrp\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData\">\r\n\t\t\t\t\t\t\t\t<app-citylogo-upload [logo]=\"cityData.data.city_logo\" (onSaveLogo)=\"handleSaveLogo($event)\" (onRemoveLogo)=\"handleRemovedLogo($event)\"> </app-citylogo-upload>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData\">\r\n\t\t\t\t\t\t\t\t<app-city-avatar-upload\r\n\t\t\t\t\t\t\t\t\t[Src]=\"serverUrl + cityData.data.avatar\"\r\n\t\t\t\t\t\t\t\t\t(onSaveCityImage)=\"handleSaveCityImage($event)\"\r\n\t\t\t\t\t\t\t\t\t(onRemoveCityImage)=\"handleRemoveCityImage($event)\"\r\n\t\t\t\t\t\t\t\t></app-city-avatar-upload>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"cityData\">\r\n\t\t\t\t\t\t\t\t<app-city-map-upload [cityMap]=\"cityData.data.city_map\" (onSaveMap)=\"handleSaveMap($event)\" (onRemoveMap)=\"handleRemoveMap($event)\"></app-city-map-upload>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" type=\"submit\" (click)=\"CityStep1Submit()\">Next</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t<div class=\"step-wrapper\" [hidden]=\"cityStep2\">\r\n\t\t\t\t\t<div class=\"back-btn-wrp g-fs-07 g-fw-500\">\r\n\t\t\t\t\t\t<span (click)=\"gotoStep('step1')\" class=\"g-cursor-pointer g-transition body-light-clr back-btn\" [ngClass]=\"{ disable: !cityStep1 }\"> &#60; Back </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-fs-18 g-fw-500 title-clr g-pt-10 g-pb-04\">Edit City Profile</div>\r\n\t\t\t\t\t<form [formGroup]=\"addCityStep2\" *ngIf=\"addCityStep1 && addCityStep2\">\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"dataSheet\" class=\"g-fs-07 lable-grey g-fw-400\"> City Data Sheet (Link) </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"dataSheet\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"John Doe\"\r\n\t\t\t\t\t\t\t\tformControlName=\"dataSheet\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep2.dataSheet.touched || isSubmitted.Step2) && addCityControlStep2.dataSheet?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep2.dataSheet.touched || isSubmitted.Step2) && addCityControlStep2.dataSheet.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\tInvalid Url format\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityData\">\r\n\t\t\t\t\t\t\t<app-add-solutions [solutionsImplemented]=\"implemented_solutions\" (onSolutionChange)=\"handleSolutionChanges($event)\"> </app-add-solutions>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityData\">\r\n\t\t\t\t\t\t\t<app-add-achievements [achievements]=\"cityData.data.achievements\" (onAchievementChange)=\"handleAchievementChanges($event)\"></app-add-achievements>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"cityData\">\r\n\t\t\t\t\t\t\t<app-gallery-upload [gallery]=\"currentCityGallery\" (onGalleryChange)=\"handleSaveGallery($event)\"></app-gallery-upload>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"fb\" class=\"g-fs-07 lable-grey g-fw-400\"> Facebook Link </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"fb\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex: https://www.facebook.com/ChandigarhSmart \"\r\n\t\t\t\t\t\t\t\tformControlName=\"fb\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep2.fb.touched || isSubmitted.Step2) && addCityControlStep2.fb?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep2.fb.touched || isSubmitted.Step2) && addCityControlStep2.fb.errors?.pattern\"> Invalid url format. </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"twtr\" class=\"g-fs-07 lable-grey g-fw-400\"> Twitter Link </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"twtr\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex: https://twitter.com/ChandigarhSmart \"\r\n\t\t\t\t\t\t\t\tformControlName=\"twtr\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep2.twtr.touched || isSubmitted.Step2) && addCityControlStep2.twtr?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep2.twtr.touched || isSubmitted.Step2) && addCityControlStep2.twtr.errors?.pattern\"> Invalid url format. </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"yt\" class=\"g-fs-07 lable-grey g-fw-400\"> Youtube Link </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"yt\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex: https://www.youtube.com/c/FORGEAccelerator\"\r\n\t\t\t\t\t\t\t\tformControlName=\"yt\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep2.yt.touched || isSubmitted.Step2) && addCityControlStep2.yt?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep2.yt.touched || isSubmitted.Step2) && addCityControlStep2.yt.errors?.pattern\"> Invalid url format. </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"ig\" class=\"g-fs-07 lable-grey g-fw-400\"> Instagram Link </label>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\tname=\"ig\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"ex: https://www.instagram.com/chandigarh.smartcity/ \"\r\n\t\t\t\t\t\t\t\tformControlName=\"ig\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\terror: (addCityControlStep2.ig.touched || isSubmitted.Step2) && addCityControlStep2.ig?.errors\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addCityControlStep2.ig.touched || isSubmitted.Step2) && addCityControlStep2.ig.errors?.pattern\"> Invalid url format. </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-20\">\r\n\t\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" type=\"submit\" (click)=\"updateSmartCity()\">\r\n\t\t\t\t\t\t\t\tSave &nbsp;\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"initLoading\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/add-achievements/achievement-item/achievement-item.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/add-achievements/achievement-item/achievement-item.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesWidgetsAddAchievementsAchievementItemAchievementItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"achievementitem-card\">\r\n\t<div class=\"title\">{{ achievementData.title }}</div>\r\n\t<div class=\"monthyear\">{{ achievementData.month }} {{ achievementData.year }}</div>\r\n\t<div class=\"description\">{{ achievementData.description }}</div>\r\n\t<div class=\"menu\">\r\n\t\t<div class=\"dropdown dropleft\">\r\n\t\t\t<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t<i class=\"fas fa-ellipsis-h\"></i>\r\n\t\t\t</button>\r\n\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n\t\t\t\t<span attr.data-target=\"#editachievements{{ id }}\" data-toggle=\"modal\">\r\n\t\t\t\t\t<i class=\"fas fa-pen g-mr-05\"></i>\r\n\t\t\t\t\tEdit Achievement\r\n\t\t\t\t</span>\r\n\t\t\t\t<span (click)=\"emitDeleteIndex()\">\r\n\t\t\t\t\t<i class=\"far fa-trash-alt g-mr-05\"></i>\r\n\t\t\t\t\tDelete Achievement\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- add solutions popup -->\r\n<div class=\"modal g-mt-30 fade edit-achievements-modal\" attr.id=\"editachievements{{ id }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<span class=\"modal-title g-fs-12 title-clr g-fw-400\"> Edit Achivements </span>\r\n\t\t\t\t<button type=\"button\" class=\"close g-fs-12 g-black14-clr g-fw-400\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<form [formGroup]=\"editAchievementsForm\" (ngSubmit)=\"editAchievement()\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"month\" class=\"g-fs-07 lable-grey g-fw-400\"> Months* </label>\r\n\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"challenge_sector\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"month\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (editAchievementFormContorl.month.touched || isSubmitted) && editAchievementFormContorl.month?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Month</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthArr\">\r\n\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ month | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editAchievementFormContorl.month.touched || isSubmitted) && editAchievementFormContorl.month.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tMonth is required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"year\" class=\"g-fs-07 lable-grey g-fw-400\"> Years* </label>\r\n\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"challenge\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"year\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (editAchievementFormContorl.year.touched || isSubmitted) && editAchievementFormContorl.year?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Year</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let year of yearArr\">\r\n\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ year }}\r\n\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editAchievementFormContorl.year.touched || isSubmitted) && editAchievementFormContorl.year.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tYear is required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"title\" class=\"g-fs-07 lable-grey g-fw-400\"> Title* </label>\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tname=\"title\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"10-15 words\"\r\n\t\t\t\t\t\t\tformControlName=\"title\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editAchievementFormContorl.title.touched || isSubmitted) && editAchievementFormContorl.title?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editAchievementFormContorl.title.touched || isSubmitted) && editAchievementFormContorl.title.errors?.required\">\r\n\t\t\t\t\t\t\t\tTitle is required.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editAchievementFormContorl.title.touched || isSubmitted) && editAchievementFormContorl.title.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t10-15 is the limit.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"description\" class=\"g-fs-07 lable-grey g-fw-400\"> Description* </label>\r\n\t\t\t\t\t\t<textarea\r\n\t\t\t\t\t\t\tname=\"description\"\r\n\t\t\t\t\t\t\trows=\"5\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"20-30 words\"\r\n\t\t\t\t\t\t\tformControlName=\"description\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (editAchievementFormContorl.description.touched || isSubmitted) && editAchievementFormContorl.description?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t></textarea>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<!-- <span\r\n                class=\"field-err\"\r\n                *ngIf=\"\r\n                  (editAchievementFormContorl.description.touched ||\r\n                    isSubmitted) &&\r\n                  editAchievementFormContorl.description.errors?.required\r\n                \"\r\n              >\r\n                Description is required.\r\n              </span> -->\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(editAchievementFormContorl.description.touched || isSubmitted) && editAchievementFormContorl.description.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t250 characters is the limit.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-mt-10 text-right\">\r\n\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04 g-pl-15 g-pr-15\" type=\"submit\">Save</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/add-achievements/add-achievements.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/add-achievements/add-achievements.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesWidgetsAddAchievementsAddAchievementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-solution-wrp\">\r\n\t<label class=\"g-fs-07 lable-grey g-fw-400\"> City Achivements </label>\r\n\t<ng-container *ngIf=\"achievementsArr\">\r\n\t\t<ng-container *ngFor=\"let achievement of achievementsArr; let i = index\">\r\n\t\t\t<app-achievement-item [achievementData]=\"achievement\" [id]=\"i\" (onDelete)=\"handleDeleteAchievement($event)\" (onEdit)=\"handleEditAchievement($event)\"> </app-achievement-item>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<button class=\"add-achievements btn\" data-target=\"#addachievements\" data-toggle=\"modal\">\r\n\t\tAdd Achivements &nbsp;\r\n\t\t<i class=\"fas fa-plus\"></i>\r\n\t</button>\r\n</div>\r\n<!-- add solutions popup -->\r\n<div class=\"modal g-mt-30 fade add-achievements-modal\" id=\"addachievements\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<span class=\"modal-title g-fs-12 title-clr g-fw-400\"> Add Achivements </span>\r\n\t\t\t\t<button type=\"button\" class=\"close g-fs-12 g-black14-clr g-fw-400\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<form [formGroup]=\"addAchievementsForm\" (ngSubmit)=\"createAchievement()\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"month\" class=\"g-fs-07 lable-grey g-fw-400\"> Months* </label>\r\n\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"challenge_sector\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"month\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (addAchievementFormContorl.month.touched || isSubmitted) && addAchievementFormContorl.month?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Month</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthArr\">\r\n\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ month | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addAchievementFormContorl.month.touched || isSubmitted) && addAchievementFormContorl.month.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tMonth is required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"year\" class=\"g-fs-07 lable-grey g-fw-400\"> Years* </label>\r\n\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"challenge\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"year\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (addAchievementFormContorl.year.touched || isSubmitted) && addAchievementFormContorl.year?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Year</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let year of yearArr\">\r\n\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ year }}\r\n\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addAchievementFormContorl.year.touched || isSubmitted) && addAchievementFormContorl.year.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tYear is required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"title\" class=\"g-fs-07 lable-grey g-fw-400\"> Title* </label>\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tname=\"title\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"10-15 words\"\r\n\t\t\t\t\t\t\tformControlName=\"title\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (addAchievementFormContorl.title.touched || isSubmitted) && addAchievementFormContorl.title?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addAchievementFormContorl.title.touched || isSubmitted) && addAchievementFormContorl.title.errors?.required\">\r\n\t\t\t\t\t\t\t\tTitle is required.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addAchievementFormContorl.title.touched || isSubmitted) && addAchievementFormContorl.title.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t10-15 is the limit.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"description\" class=\"g-fs-07 lable-grey g-fw-400\"> Description* </label>\r\n\t\t\t\t\t\t<textarea\r\n\t\t\t\t\t\t\tname=\"description\"\r\n\t\t\t\t\t\t\trows=\"5\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"20-30 words\"\r\n\t\t\t\t\t\t\tformControlName=\"description\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (addAchievementFormContorl.description.touched || isSubmitted) && addAchievementFormContorl.description?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t></textarea>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<!-- <span\r\n                class=\"field-err\"\r\n                *ngIf=\"\r\n                  (addAchievementFormContorl.description.touched ||\r\n                    isSubmitted) &&\r\n                  addAchievementFormContorl.description.errors?.required\r\n                \"\r\n              >\r\n                Description is required.\r\n              </span> -->\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addAchievementFormContorl.description.touched || isSubmitted) && addAchievementFormContorl.description.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t250 characters is the limit.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-mt-10 text-right\">\r\n\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04 g-pl-15 g-pr-15\" type=\"submit\">Save</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/add-solutions/add-solutions.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/add-solutions/add-solutions.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesWidgetsAddSolutionsAddSolutionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-solution-wrp\">\r\n\t<label class=\"g-fs-07 lable-grey g-fw-400\"> Solutions Implemented </label>\r\n\t<ng-container *ngIf=\"solutionsArr\">\r\n\t\t<ng-container *ngFor=\"let solution of solutionsArr; let i = index\">\r\n\t\t\t<app-solution-item\r\n\t\t\t\t[id]=\"i\"\r\n\t\t\t\t[solutionData]=\"solution\"\r\n\t\t\t\t[removeIndex]=\"i\"\r\n\t\t\t\t[challengeSector]=\"challengeSector\"\r\n\t\t\t\t(onDelete)=\"handleItemDelete($event)\"\r\n\t\t\t\t(onEdit)=\"handleItemEdit($event)\"\r\n\t\t\t></app-solution-item>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<button class=\"add-solution btn\" data-target=\"#addSolutions\" data-toggle=\"modal\">Add Solution &nbsp;<i class=\"fas fa-plus\"></i></button>\r\n</div>\r\n<!-- add solutions popup -->\r\n<div class=\"modal g-mt-30 fade add-solution-modal\" id=\"addSolutions\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<span class=\"modal-title g-fs-12 title-clr g-fw-400\"> Add Solutions </span>\r\n\t\t\t\t<button type=\"button\" class=\"close g-fs-12 g-black14-clr g-fw-400\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\" *ngIf=\"!loading\">\r\n\t\t\t\t<form [formGroup]=\"addSolutionForm\" (ngSubmit)=\"insertSolutions()\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"budget\" class=\"g-fs-07 lable-grey g-fw-400\"> Challenge Sector </label>\r\n\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"challenge_sector\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"getChallengeBasedOnSector($event)\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challengeSector\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (addSolutionFormControl.challengeSector.touched || isSubmitted) && addSolutionFormControl.challengeSector?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Challenge Sector</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let sector of challengeSector.data\" [value]=\"sector.name\">\r\n\t\t\t\t\t\t\t\t\t\t{{ sector.name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionFormControl.challengeSector.touched || isSubmitted) && addSolutionFormControl.challengeSector.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tChallenge sector is required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"challenge\" class=\"g-fs-07 lable-grey g-fw-400\"> Challenge </label>\r\n\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tname=\"challenge\"\r\n\t\t\t\t\t\t\t\t\t[attr.disabled]=\"!isChallengeLoaded ? '' : null\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challenge\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (addSolutionFormControl.challenge.touched || isSubmitted) && addSolutionFormControl.challenge?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Challenge</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"challengeBasedOnSector\">\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let challenge of challengeBasedOnSector\" [value]=\"challenge.name\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ challenge.name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionFormControl.challenge.touched || isSubmitted) && addSolutionFormControl.challenge.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tChallenge is required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"link\" class=\"g-fs-07 lable-grey g-fw-400\"> Link </label>\r\n\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tname=\"link\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"Report Website Link\"\r\n\t\t\t\t\t\t\tformControlName=\"link\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (addSolutionFormControl.link.touched || isSubmitted) && addSolutionFormControl.link?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionFormControl.link.touched || isSubmitted) && addSolutionFormControl.link.errors?.required\"> Link is required. </span>\r\n\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionFormControl.link.touched || isSubmitted) && addSolutionFormControl.link.errors?.pattern\"> Invalid Url format </span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t<label for=\"description\" class=\"g-fs-07 lable-grey g-fw-400\"> Descriptions </label>\r\n\t\t\t\t\t\t<textarea\r\n\t\t\t\t\t\t\tname=\"description\"\r\n\t\t\t\t\t\t\trows=\"5\"\r\n\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"Add Description (100-150 words)\"\r\n\t\t\t\t\t\t\tformControlName=\"description\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\terror: (addSolutionFormControl.description.touched || isSubmitted) && addSolutionFormControl.description?.errors\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t></textarea>\r\n\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t<!-- <span\r\n                class=\"field-err\"\r\n                *ngIf=\"\r\n                  (addSolutionFormControl.description.touched || isSubmitted) &&\r\n                  addSolutionFormControl.description.errors?.required\r\n                \"\r\n              >\r\n                Description is required.\r\n              </span> -->\r\n\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(addSolutionFormControl.description.touched || isSubmitted) && addSolutionFormControl.description.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t800 characters is the limit.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-mt-10 text-right\">\r\n\t\t\t\t\t\t<button class=\"btn g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04 g-pl-15 g-pr-15\" type=\"submit\">Save</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/add-solutions/solution-item/solution-item.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/add-solutions/solution-item/solution-item.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesWidgetsAddSolutionsSolutionItemSolutionItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"solutionitem-card\">\r\n  <div class=\"title\">{{ solutionData.challenge }}</div>\r\n  <div class=\"sector\">{{ solutionData.challengeSector | titlecase }}</div>\r\n  <div class=\"description\">{{ solutionData.description }}</div>\r\n  <div class=\"menu\">\r\n    <div class=\"dropdown dropleft\">\r\n      <button\r\n        class=\"btn btn-secondary dropdown-toggle\"\r\n        type=\"button\"\r\n        id=\"dropdownMenuButton\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        <i class=\"fas fa-ellipsis-h\"></i>\r\n      </button>\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n        <span attr.data-target=\"#editSolutions{{ id }}\" data-toggle=\"modal\">\r\n          <i class=\"fas fa-pen g-mr-05\"></i>\r\n          Edit Solution\r\n        </span>\r\n        <span (click)=\"emitDeleteIndex()\">\r\n          <i class=\"far fa-trash-alt g-mr-05\"></i>\r\n          Delete Solution\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- map popup -->\r\n<div\r\n  class=\"modal g-mt-30 fade edit-solution-modal\"\r\n  attr.id=\"editSolutions{{ id }}\"\r\n  role=\"dialog\"\r\n>\r\n  <div class=\"modal-dialog modal-md\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <span class=\"modal-title g-fs-12 title-clr g-fw-400\">\r\n          Edit Solutions\r\n        </span>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close g-fs-12 g-black14-clr g-fw-400\"\r\n          data-dismiss=\"modal\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"editSolutionForm\" (ngSubmit)=\"editSolution()\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group g-mt-03\">\r\n                <label for=\"budget\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n                  Challenge Sector\r\n                </label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  name=\"challenge_sector\"\r\n                  (change)=\"getChallengeBasedOnSector($event)\"\r\n                  formControlName=\"challengeSector\"\r\n                  [ngClass]=\"{\r\n                    error:\r\n                      (editSolutionFormControl.challengeSector.touched ||\r\n                        isSubmitted) &&\r\n                      editSolutionFormControl.challengeSector?.errors\r\n                  }\"\r\n                >\r\n                  <option selected=\"selected\" value=\"\">\r\n                    Select Challenge Sector\r\n                  </option>\r\n                  <option\r\n                    *ngFor=\"let sector of challengeSector.data\"\r\n                    [value]=\"sector.name\"\r\n                  >\r\n                    {{ sector.name | titlecase }}\r\n                  </option>\r\n                </select>\r\n                <div class=\"err-resp\">\r\n                  <span\r\n                    class=\"field-err\"\r\n                    *ngIf=\"\r\n                      (editSolutionFormControl.challengeSector.touched ||\r\n                        isSubmitted) &&\r\n                      editSolutionFormControl.challengeSector.errors?.required\r\n                    \"\r\n                  >\r\n                    Challenge sector is required.\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group g-mt-03\">\r\n                <label for=\"challenge\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n                  Challenge\r\n                </label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  name=\"challenge\"\r\n                  [attr.disabled]=\"!isChallengeLoaded ? '' : null\"\r\n                  formControlName=\"challenge\"\r\n                  [ngClass]=\"{\r\n                    error:\r\n                      (editSolutionFormControl.challenge.touched ||\r\n                        isSubmitted) &&\r\n                      editSolutionFormControl.challenge?.errors\r\n                  }\"\r\n                >\r\n                  <option selected=\"selected\" value=\"\">Select Challenge</option>\r\n                  <ng-container *ngIf=\"challengeBasedOnSector\">\r\n                    <option\r\n                      *ngFor=\"let challenge of challengeBasedOnSector\"\r\n                      [value]=\"challenge.name\"\r\n                    >\r\n                      {{ challenge.name | titlecase }}\r\n                    </option>\r\n                  </ng-container>\r\n                </select>\r\n                <div class=\"err-resp\">\r\n                  <span\r\n                    class=\"field-err\"\r\n                    *ngIf=\"\r\n                      (editSolutionFormControl.challenge.touched ||\r\n                        isSubmitted) &&\r\n                      editSolutionFormControl.challenge.errors?.required\r\n                    \"\r\n                  >\r\n                    Challenge is required.\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group g-mt-03\">\r\n            <label for=\"link\" class=\"g-fs-07 lable-grey g-fw-400\"> Link </label>\r\n            <input\r\n              type=\"text\"\r\n              name=\"link\"\r\n              class=\"form-control\"\r\n              placeholder=\"Report Website Link\"\r\n              formControlName=\"link\"\r\n              [ngClass]=\"{\r\n                error:\r\n                  (editSolutionFormControl.link.touched || isSubmitted) &&\r\n                  editSolutionFormControl.link?.errors\r\n              }\"\r\n            />\r\n            <div class=\"err-resp\">\r\n              <span\r\n                class=\"field-err\"\r\n                *ngIf=\"\r\n                  (editSolutionFormControl.link.touched || isSubmitted) &&\r\n                  editSolutionFormControl.link.errors?.required\r\n                \"\r\n              >\r\n                Link is required.\r\n              </span>\r\n              <div class=\"err-resp\">\r\n                <span\r\n                  class=\"field-err\"\r\n                  *ngIf=\"\r\n                    (editSolutionFormControl.link.touched || isSubmitted) &&\r\n                    editSolutionFormControl.link.errors?.pattern\r\n                  \"\r\n                >\r\n                  Invalid Url format\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group g-mt-03\">\r\n            <label for=\"description\" class=\"g-fs-07 lable-grey g-fw-400\">\r\n              Descriptions\r\n            </label>\r\n            <textarea\r\n              name=\"description\"\r\n              rows=\"5\"\r\n              class=\"form-control\"\r\n              placeholder=\"Add Description (800 Characters)\"\r\n              formControlName=\"description\"\r\n              [ngClass]=\"{\r\n                error:\r\n                  (editSolutionFormControl.description.touched ||\r\n                    isSubmitted) &&\r\n                  editSolutionFormControl.description?.errors\r\n              }\"\r\n            ></textarea>\r\n            <div class=\"err-resp\">\r\n              <!-- <span\r\n                class=\"field-err\"\r\n                *ngIf=\"\r\n                  (editSolutionFormControl.description.touched ||\r\n                    isSubmitted) &&\r\n                  editSolutionFormControl.description.errors?.required\r\n                \"\r\n              >\r\n                Description is required.\r\n              </span> -->\r\n              <span\r\n                class=\"field-err\"\r\n                *ngIf=\"\r\n                  (editSolutionFormControl.description.touched ||\r\n                    isSubmitted) &&\r\n                  editSolutionFormControl.description.errors?.maxlength\r\n                \"\r\n              >\r\n                800 characters is the limit.\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"g-mt-10 text-right\">\r\n            <button\r\n              class=\"btn g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04 g-pl-15 g-pr-15\"\r\n              type=\"submit\"\r\n            >\r\n              Save\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/city-avatar-upload/city-avatar-upload.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/city-avatar-upload/city-avatar-upload.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesWidgetsCityAvatarUploadCityAvatarUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n\t<span class=\"g-fs-07 lable-grey g-fw-400\"> Upload City Image* </span>\r\n\t<div class=\"uploader-wrp\">\r\n\t\t<ng-container *ngIf=\"!Src\">\r\n\t\t\t<div class=\"add-image\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<i class=\"far fa-plus-square\" data-target=\"#cityavatarModal\" data-toggle=\"modal\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngIf=\"Src\">\r\n\t\t\t<div class=\"preview-image\">\r\n\t\t\t\t<img [src]=\"Src\" />\r\n\t\t\t\t<span class=\"remove-img\" (click)=\"removeImage()\">\r\n\t\t\t\t\t<i class=\"far fa-trash-alt\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</div>\r\n\r\n<!-- avatar pop up -->\r\n<div class=\"modal g-mt-30 fade avatar-upload-modal\" id=\"cityavatarModal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<span class=\"modal-title g-fs-12 g-black14-clr g-fw-400\"> Upload City Image </span>\r\n\t\t\t\t<button type=\"button\" class=\"close g-fs-12 g-black14-clr g-fw-400\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<!-- cropper widget -->\r\n\t\t\t\t<div class=\"cropper-widget\">\r\n\t\t\t\t\t<div class=\"cropper-col-left\">\r\n\t\t\t\t\t\t<div class=\"cropper-wrp\">\r\n\t\t\t\t\t\t\t<image-cropper\r\n\t\t\t\t\t\t\t\t[imageChangedEvent]=\"cityavatarChangedEvent\"\r\n\t\t\t\t\t\t\t\t[maintainAspectRatio]=\"true\"\r\n\t\t\t\t\t\t\t\t[aspectRatio]=\"1 / 1\"\r\n\t\t\t\t\t\t\t\tresizeToWidth=\"256\"\r\n\t\t\t\t\t\t\t\troundCropper=\"true\"\r\n\t\t\t\t\t\t\t\tformat=\"jpeg\"\r\n\t\t\t\t\t\t\t\t[imageQuality]=\"82\"\r\n\t\t\t\t\t\t\t\t[containWithinAspectRatio]=\"true\"\r\n\t\t\t\t\t\t\t\t(imageCropped)=\"cityavatarCropped($event)\"\r\n\t\t\t\t\t\t\t\t(imageLoaded)=\"cityavatarLoadedEvent()\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</image-cropper>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"cropper-col-right\">\r\n\t\t\t\t\t\t<div class=\"cropper-preview\">\r\n\t\t\t\t\t\t\t<img [src]=\"croppedCityAvatar\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<hr />\r\n\t\t\t\t\t\t<div class=\"g-pb-06\">\r\n\t\t\t\t\t\t\t<label for=\"avatar\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-image\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"cityavatarLoaded; then changePicture; else addPicture\"></span>\r\n\t\t\t\t\t\t\t\t<ng-template #addPicture>Add Image</ng-template>\r\n\t\t\t\t\t\t\t\t<ng-template #changePicture>Change Image</ng-template>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input type=\"file\" id=\"avatar\" name=\"avatar\" accept=\"image/png, image/jpeg\" class=\"hidden\" (change)=\"cityavatarChangeEvent($event)\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pb-06\" *ngIf=\"cityavatarLoaded\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-12 g-black14-clr g-fw-400\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"saveCropedCityAvatar()\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"far fa-save\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Save Image\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/city-map-upload/city-map-upload.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/city-map-upload/city-map-upload.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesWidgetsCityMapUploadCityMapUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n\t<span class=\"g-fs-07 lable-grey g-fw-400\"> Upload City Map* </span>\r\n\t<div class=\"uploader-wrp\">\r\n\t\t<ng-container *ngIf=\"!Src\">\r\n\t\t\t<div class=\"add-image\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<i class=\"far fa-plus-square\" data-target=\"#mapModal\" data-toggle=\"modal\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngIf=\"Src\">\r\n\t\t\t<div class=\"preview-image\">\r\n\t\t\t\t<img [src]=\"Src\" />\r\n\t\t\t\t<span class=\"remove-img\" (click)=\"removeImage()\">\r\n\t\t\t\t\t<i class=\"far fa-trash-alt\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</div>\r\n\r\n<!-- map popup -->\r\n<div class=\"modal g-mt-30 fade avatar-upload-modal\" id=\"mapModal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<span class=\"modal-title g-fs-12 g-black14-clr g-fw-400\"> Upload Map </span>\r\n\t\t\t\t<button type=\"button\" class=\"close g-fs-12 g-black14-clr g-fw-400\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<!-- cropper widget -->\r\n\t\t\t\t<div class=\"cropper-widget\">\r\n\t\t\t\t\t<div class=\"cropper-col-left\">\r\n\t\t\t\t\t\t<div class=\"cropper-wrp\">\r\n\t\t\t\t\t\t\t<image-cropper\r\n\t\t\t\t\t\t\t\t[imageChangedEvent]=\"mapChangedEvent\"\r\n\t\t\t\t\t\t\t\t[maintainAspectRatio]=\"true\"\r\n\t\t\t\t\t\t\t\t[aspectRatio]=\"1 / 1\"\r\n\t\t\t\t\t\t\t\tresizeToWidth=\"512\"\r\n\t\t\t\t\t\t\t\tformat=\"jpeg\"\r\n\t\t\t\t\t\t\t\t[imageQuality]=\"82\"\r\n\t\t\t\t\t\t\t\t[containWithinAspectRatio]=\"true\"\r\n\t\t\t\t\t\t\t\t(imageCropped)=\"mapCropped($event)\"\r\n\t\t\t\t\t\t\t\t(imageLoaded)=\"mapLoadedEvent()\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</image-cropper>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"cropper-col-right\">\r\n\t\t\t\t\t\t<div class=\"cropper-preview\">\r\n\t\t\t\t\t\t\t<img [src]=\"croppedMap\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<hr />\r\n\t\t\t\t\t\t<div class=\"g-pb-06\">\r\n\t\t\t\t\t\t\t<label for=\"map_upload\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-image\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"mapLoaded; then mchangePicture; else maddPicture\"></span>\r\n\t\t\t\t\t\t\t\t<ng-template #maddPicture>Add Map</ng-template>\r\n\t\t\t\t\t\t\t\t<ng-template #mchangePicture>Change Map</ng-template>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input type=\"file\" id=\"map_upload\" name=\"map\" accept=\"image/png, image/jpeg\" class=\"hidden\" (change)=\"mapChangeEvent($event)\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pb-06\" *ngIf=\"mapLoaded\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-12 g-black14-clr g-fw-400\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"saveCropedMap()\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"far fa-save\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Save Map\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/citylogo-upload/citylogo-upload.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/citylogo-upload/citylogo-upload.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesWidgetsCitylogoUploadCitylogoUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n\t<span class=\"g-fs-07 lable-grey g-fw-400\"> Upload City Logo* </span>\r\n\t<div class=\"uploader-wrp\">\r\n\t\t<ng-container *ngIf=\"!Src\">\r\n\t\t\t<div class=\"add-image\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<i class=\"far fa-plus-square\" data-target=\"#logoModal\" data-toggle=\"modal\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngIf=\"Src\">\r\n\t\t\t<div class=\"preview-image\">\r\n\t\t\t\t<img [src]=\"Src\" />\r\n\t\t\t\t<span class=\"remove-img\" (click)=\"removeImage()\">\r\n\t\t\t\t\t<i class=\"far fa-trash-alt\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</div>\r\n\r\n<!-- logo pop up -->\r\n<div class=\"modal g-mt-30 fade avatar-upload-modal\" id=\"logoModal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<span class=\"modal-title g-fs-12 g-black14-clr g-fw-400\"> Upload Logo </span>\r\n\t\t\t\t<button type=\"button\" class=\"close g-fs-12 g-black14-clr g-fw-400\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<!-- cropper widget -->\r\n\t\t\t\t<div class=\"cropper-widget\">\r\n\t\t\t\t\t<div class=\"cropper-col-left\">\r\n\t\t\t\t\t\t<div class=\"cropper-wrp\">\r\n\t\t\t\t\t\t\t<image-cropper\r\n\t\t\t\t\t\t\t\t[imageChangedEvent]=\"logoChangedEvent\"\r\n\t\t\t\t\t\t\t\t[maintainAspectRatio]=\"true\"\r\n\t\t\t\t\t\t\t\t[aspectRatio]=\"1 / 1\"\r\n\t\t\t\t\t\t\t\tresizeToWidth=\"256\"\r\n\t\t\t\t\t\t\t\tformat=\"png\"\r\n\t\t\t\t\t\t\t\t[imageQuality]=\"82\"\r\n\t\t\t\t\t\t\t\t[containWithinAspectRatio]=\"true\"\r\n\t\t\t\t\t\t\t\t(imageCropped)=\"logoCropped($event)\"\r\n\t\t\t\t\t\t\t\t(imageLoaded)=\"logoLoadedEvent()\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</image-cropper>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"cropper-col-right\">\r\n\t\t\t\t\t\t<div class=\"cropper-preview\">\r\n\t\t\t\t\t\t\t<img [src]=\"croppedLogo\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<hr />\r\n\t\t\t\t\t\t<div class=\"g-pb-06\">\r\n\t\t\t\t\t\t\t<label for=\"logo\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-image\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"logoLoaded; then lchangePicture; else laddPicture\"></span>\r\n\t\t\t\t\t\t\t\t<ng-template #laddPicture>Add Logo</ng-template>\r\n\t\t\t\t\t\t\t\t<ng-template #lchangePicture>Change Logo</ng-template>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input type=\"file\" id=\"logo\" name=\"logo\" accept=\"image/png, image/jpeg\" class=\"hidden\" (change)=\"logoChangeEvent($event)\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pb-06\" *ngIf=\"logoLoaded\">\r\n\t\t\t\t\t\t\t<div class=\"g-fs-12 g-black14-clr g-fw-400\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"saveCropedLogo()\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"far fa-save\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Save Logo\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/collapsable-content/collapsable-content.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/collapsable-content/collapsable-content.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitiesWidgetsCollapsableContentCollapsableContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [innerHTML]=\"text\" class=\"content\" [class.collapsed]=\"isCollapsed\" [style.height]=\"isCollapsed ? maxHeight + 'px' : 'auto'\"></div>\r\n<div class=\"read-btn-wrp text-right\">\r\n\t<a *ngIf=\"isCollapsable\" (click)=\"isCollapsed = !isCollapsed\"> Read {{ isCollapsed ? \"More\" : \"Less\" }} </a>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/cities/add-city/add-city-services.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/cities/add-city/add-city-services.service.ts ***!
    \**************************************************************/

  /*! exports provided: AddCityServicesService */

  /***/
  function srcAppCitiesAddCityAddCityServicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCityServicesService", function () {
      return AddCityServicesService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let AddCityServicesService = class AddCityServicesService {
      constructor(http) {
        this.http = http;
        this.api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
      }

      createCity(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/create", postData).toPromise();
        });
      }

      uploadAvatar(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/upload", postData).toPromise();
        });
      }

      uploadCeoAvatar(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/upload_ceo_avatar", postData).toPromise();
        });
      }

      uploadLogo(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/upload_logo", postData).toPromise();
        });
      }

      uploadMap(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/city_map", postData).toPromise();
        });
      }

      uploadGallery(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/upload_gallery", postData).toPromise();
        });
      }

      getChallengeSectors() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/challenge_sectors/select_mul", {
            pg: {
              offset: 0,
              limit: 200
            }
          }).toPromise();
        });
      }

      getChallenges(sectorId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/challenges/select_mul", {
            filter: {
              frg_challenge_sector_id: sectorId
            },
            pg: {
              offset: 0,
              limit: 400
            }
          }).toPromise();
        });
      }

      addChallenges(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/challenges_and_smart_cities/create", data).toPromise();
        });
      }

      addChallengeSectors(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities_and_challenge_sectors/create", data).toPromise();
        });
      }

    };

    AddCityServicesService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    AddCityServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AddCityServicesService);
    /***/
  },

  /***/
  "./src/app/cities/add-city/add-city.component.css":
  /*!********************************************************!*\
    !*** ./src/app/cities/add-city/add-city.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesAddCityAddCityComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-city-wrp {\r\n\tmin-height: 100vh;\r\n\tposition: relative;\r\n}\r\n\r\n.section-loader {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.loader-wrp {\r\n\tdisplay: table;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.loader-inner {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.frg-flx-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.frg-flx-row .frg-flx-input-col {\r\n\tflex-basis: 88%;\r\n}\r\n\r\n.frg-flx-row .frg-flx-add-rm-row-btn {\r\n\tflex-basis: 7%;\r\n}\r\n\r\n.act-clr {\r\n\tcolor: #3b6fd4 !important;\r\n}\r\n\r\n.act-span {\r\n\tpadding: 3px 6px;\r\n\tborder: 1px solid #3b6fd4;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.add-form-wrapper {\r\n\tmax-width: 580px;\r\n\tmargin: 36px auto;\r\n}\r\n\r\n.step-wrapper {\r\n\tpadding: 36px;\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.files-upload-wrp {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n.files-upload-wrp app-citylogo-upload,\r\n.files-upload-wrp app-city-avatar-upload,\r\n.files-upload-wrp app-city-map-upload {\r\n\tflex-basis: 30%;\r\n}\r\n\r\n.back-btn-wrp {\r\n\tmargin-top: -18px;\r\n}\r\n\r\n.back-btn {\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.back-btn .disable {\r\n\topacity: 0;\r\n\tvisibility: visible;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL2FkZC1jaXR5L2FkZC1jaXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IseUJBQThCO1NBQTlCLDhCQUE4QjtDQUM5Qix5QkFBbUI7U0FBbkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQix5QkFBeUI7Q0FDekIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLHlCQUF5QjtDQUN6QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBOEI7U0FBOUIsOEJBQThCO0FBQy9COztBQUVBOzs7Q0FHQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUNBQXlCO0NBQXpCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixtQkFBbUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jaXRpZXMvYWRkLWNpdHkvYWRkLWNpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtY2l0eS13cnAge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNlY3Rpb24tbG9hZGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxvYWRlci13cnAge1xyXG5cdGRpc3BsYXk6IHRhYmxlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxvYWRlci1pbm5lciB7XHJcblx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZnJnLWZseC1yb3cge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mcmctZmx4LXJvdyAuZnJnLWZseC1pbnB1dC1jb2wge1xyXG5cdGZsZXgtYmFzaXM6IDg4JTtcclxufVxyXG5cclxuLmZyZy1mbHgtcm93IC5mcmctZmx4LWFkZC1ybS1yb3ctYnRuIHtcclxuXHRmbGV4LWJhc2lzOiA3JTtcclxufVxyXG5cclxuLmFjdC1jbHIge1xyXG5cdGNvbG9yOiAjM2I2ZmQ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3Qtc3BhbiB7XHJcblx0cGFkZGluZzogM3B4IDZweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjM2I2ZmQ0O1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmFkZC1mb3JtLXdyYXBwZXIge1xyXG5cdG1heC13aWR0aDogNTgwcHg7XHJcblx0bWFyZ2luOiAzNnB4IGF1dG87XHJcbn1cclxuXHJcbi5zdGVwLXdyYXBwZXIge1xyXG5cdHBhZGRpbmc6IDM2cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uZmlsZXMtdXBsb2FkLXdycCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5maWxlcy11cGxvYWQtd3JwIGFwcC1jaXR5bG9nby11cGxvYWQsXHJcbi5maWxlcy11cGxvYWQtd3JwIGFwcC1jaXR5LWF2YXRhci11cGxvYWQsXHJcbi5maWxlcy11cGxvYWQtd3JwIGFwcC1jaXR5LW1hcC11cGxvYWQge1xyXG5cdGZsZXgtYmFzaXM6IDMwJTtcclxufVxyXG5cclxuLmJhY2stYnRuLXdycCB7XHJcblx0bWFyZ2luLXRvcDogLTE4cHg7XHJcbn1cclxuXHJcbi5iYWNrLWJ0biB7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJhY2stYnRuIC5kaXNhYmxlIHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/cities/add-city/add-city.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/cities/add-city/add-city.component.ts ***!
    \*******************************************************/

  /*! exports provided: AddCityComponent */

  /***/
  function srcAppCitiesAddCityAddCityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCityComponent", function () {
      return AddCityComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _add_city_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-city-services.service */
    "./src/app/cities/add-city/add-city-services.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);

    let AddCityComponent = class AddCityComponent {
      constructor(fb, _city, toastr, router) {
        this.fb = fb;
        this._city = _city;
        this.toastr = toastr;
        this.router = router;
        this.loading = false;
        this.isSubmitted = {
          Step1: false,
          Step2: false
        };
        this.cityGallery = [];
        this.sectorDropdownList = [];
        this.selectedSectors = [];
        this.challengeDropdownList = [];
        this.disableChallengeList = true;
        this.solutionsImplemented = [];
        this.cityAchievements = [];
        this.urlPattern = new RegExp("^(http|https)://");
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.cityStep1 = false;
          this.cityStep2 = true;
          yield this.getChallengeSector();
          this.addCityStep1 = this.fb.group({
            ceoName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            cityName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            vision: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500)]],
            challengeSectors: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            challenges: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            website: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")]],
            landLineCode: [""],
            landLineNumber: [""],
            area: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            population: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            budget: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            rank: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
          this.addCityStep2 = this.fb.group({
            dataSheet: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            ig: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            yt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            fb: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            twtr: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]]
          });
        });
      }

      get addCityControlStep1() {
        return this.addCityStep1.controls;
      }

      get addCityControlStep2() {
        return this.addCityStep2.controls;
      }

      gotoStep(step) {
        switch (step) {
          case "step1":
            this.cityStep1 = false;
            this.cityStep2 = true;
            window.scroll(0, 0);
            break;

          case "step2":
            this.cityStep1 = true;
            this.cityStep2 = false;
            window.scroll(0, 0);
            break;
        }
      }

      CityStep1Submit() {
        this.isSubmitted.Step1 = true;

        if (this.addCityStep1.valid) {
          this.gotoStep("step2");
        } else {
          this.toastr.error("please provide the required values to proceed further.", "Validation Error");
        }
      }

      saveSmartCity() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.addCityStep1.valid && this.addCityStep2.valid) {
            this.loading = true;
            let cityPostData = {
              name: this.addCityStep1.value.cityName,
              ceo_name: this.addCityStep1.value.ceoName,
              ceo_email: this.addCityStep1.value.email,
              vision: this.addCityStep1.value.vision,
              score: this.addCityStep1.value.rank,
              budget: this.addCityStep1.value.budget,
              city_area: this.addCityStep1.value.area,
              city_demographics: this.addCityStep1.value.population,
              website: this.addCityStep1.value.website,
              mobile: [{
                mobile: "+91-" + this.addCityStep1.value.mobile,
                landline: this.addCityStep1.value.landLineNumber == "" ? "" : "".concat(this.addCityStep1.value.landLineCode, "-").concat(this.addCityStep1.value.landLineNumber)
              }],
              data_sheet: this.addCityStep2.value.dataSheet,
              implemented_solutions: this.solutionsImplemented,
              achievements: this.cityAchievements,
              social_media: [{
                facebook: this.addCityStep2.value.fb
              }, {
                instagram: this.addCityStep2.value.ig
              }, {
                twitter: this.addCityStep2.value.twtr
              }, {
                youtube: this.addCityStep2.value.yt
              }]
            };

            try {
              let newSmartCity = yield this._city.createCity({
                data: cityPostData
              });
              yield Promise.all([this.saveAvatar(newSmartCity.data.id), this.saveLogo(newSmartCity.data.id), this.saveMap(newSmartCity.data.id), this.saveCEOAvatar(newSmartCity.data.id), this.saveGallery(newSmartCity.data.id), this.associateChallengeSectors(newSmartCity.data.id), this.associateChallenges(newSmartCity.data.id)]);
              this.loading = false;
              this.toastr.success("", "Smart City created successfully");
              this.router.navigate(["/cities/".concat(newSmartCity.data.id)]);
            } catch (err) {
              console.log(err);
              this.toastr.error("", "Something went wrong please try again");
            }
          } else {
            this.toastr.error("please provide the required values to proceed further.", "Validation Error");
          }
        });
      }

      getChallengeSector() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.initLoading = true;

          try {
            this.challengeSector = yield this._city.getChallengeSectors();
            this.challengeSector.data.forEach(element => {
              this.sectorDropdownList.push({
                item_id: parseInt(element.id),
                item_text: element.name
              });
            });
            this.dropdownSettings = {
              singleSelection: false,
              idField: "item_id",
              textField: "item_text",
              enableCheckAll: false,
              allowSearchFilter: true
            };
            this.initLoading = false;
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      getChallengeBasedOnSector(sector) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let idArr = [];
          this.challengeDropdownList = [];
          this.addCityStep1.value.challengeSectors.forEach(element => {
            idArr.push(element.item_id);
          });

          try {
            this.toastr.info("Fetching challenges based on sectors", "Info");
            this.challengeBasedOnSector = yield this._city.getChallenges(idArr);
            this.challengeBasedOnSector.data.forEach(element => {
              this.challengeDropdownList = lodash__WEBPACK_IMPORTED_MODULE_6__["unionBy"](this.challengeDropdownList, [{
                item_id: parseInt(element.id),
                item_text: element.name
              }], "item_id");
            });
            this.challengeDropdownList;
            this.disableChallengeList = false;
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      associateChallenges(cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.addCityStep1.value.challenges.forEach(element => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this._city.addChallenges({
              data: {
                frg_challenge_id: element.item_id,
                frg_smart_city_id: cityId
              }
            });
          }));
        });
      }

      associateChallengeSectors(cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.addCityStep1.value.challengeSectors.forEach(element => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this._city.addChallengeSectors({
              data: {
                frg_challenge_sector_id: element.item_id,
                frg_smart_city_id: cityId
              }
            });
          }));
        });
      }

      saveAvatar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.avatar) {
            let formData = new FormData();
            formData.append("slug", id);
            formData.append("avatar", this.avatar, this.avatar.name);
            yield this._city.uploadAvatar(formData);
          }
        });
      }

      saveCEOAvatar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.CEOAvatar) {
            let formData = new FormData();
            formData.append("slug", id);
            formData.append("ceo_avatar", this.CEOAvatar, this.CEOAvatar.name);
            yield this._city.uploadCeoAvatar(formData);
          }
        });
      }

      saveLogo(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.logo) {
            let formData = new FormData();
            formData.append("slug", id);
            formData.append("city_logo", this.logo, this.logo.name);
            yield this._city.uploadLogo(formData);
          }
        });
      }

      saveMap(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.map) {
            let formData = new FormData();
            formData.append("slug", id);
            formData.append("city_map", this.map, this.map.name);
            yield this._city.uploadMap(formData);
          }
        });
      }

      saveGallery(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.cityGallery) {
            let formData = new FormData();
            formData.append("slug", id);
            this.cityGallery.forEach(file => {
              formData.append("gallery", file);
            });
            yield this._city.uploadGallery(formData);
          }
        });
      }

      handleCEOAvatar(file) {
        this.CEOAvatar = file;
      }

      handleSaveLogo(file) {
        this.logo = file;
      }

      handleSaveCityImage(file) {
        this.avatar = file;
      }

      handleSaveMap(file) {
        this.map = file;
      }

      handleSaveGallery(files) {
        this.cityGallery = files;
      }

      handleRemovedLogo(file) {
        if (typeof file == "object") this.logo = null;
      }

      handleRemoveCityImage(file) {
        if (typeof file == "object") this.avatar = null;
      }

      handleRemoveMap(file) {
        if (typeof file == "object") this.map = null;
      }

      handleSolutionChanges(solutionData) {
        this.solutionsImplemented = solutionData;
      }

      handleAchievementChanges(achievementData) {
        this.cityAchievements = achievementData;
      }

    };

    AddCityComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _add_city_services_service__WEBPACK_IMPORTED_MODULE_4__["AddCityServicesService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AddCityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-add-city",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-city.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/add-city/add-city.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-city.component.css */
      "./src/app/cities/add-city/add-city.component.css")).default]
    })], AddCityComponent);
    /***/
  },

  /***/
  "./src/app/cities/cities-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/cities/cities-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: CitiesRoutingModule */

  /***/
  function srcAppCitiesCitiesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitiesRoutingModule", function () {
      return CitiesRoutingModule;
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


    var _cities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cities.component */
    "./src/app/cities/cities.component.ts");
    /* harmony import */


    var _add_city_add_city_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-city/add-city.component */
    "./src/app/cities/add-city/add-city.component.ts");
    /* harmony import */


    var _city_profile_city_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./city-profile/city-profile.component */
    "./src/app/cities/city-profile/city-profile.component.ts");
    /* harmony import */


    var _discover_cities_discover_cities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./discover-cities/discover-cities.component */
    "./src/app/cities/discover-cities/discover-cities.component.ts");
    /* harmony import */


    var _edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-city/edit-city.component */
    "./src/app/cities/edit-city/edit-city.component.ts");

    const routes = [{
      path: "",
      component: _cities_component__WEBPACK_IMPORTED_MODULE_3__["CitiesComponent"],
      children: [{
        path: "",
        component: _discover_cities_discover_cities_component__WEBPACK_IMPORTED_MODULE_6__["DiscoverCitiesComponent"],
        pathMatch: "full"
      }, {
        path: "create",
        component: _add_city_add_city_component__WEBPACK_IMPORTED_MODULE_4__["AddCityComponent"]
      }, {
        path: ":id",
        component: _city_profile_city_profile_component__WEBPACK_IMPORTED_MODULE_5__["CityProfileComponent"]
      }, {
        path: ":id/edit",
        component: _edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_7__["EditCityComponent"]
      }]
    }];
    let CitiesRoutingModule = class CitiesRoutingModule {};
    CitiesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CitiesRoutingModule);
    /***/
  },

  /***/
  "./src/app/cities/cities.component.css":
  /*!*********************************************!*\
    !*** ./src/app/cities/cities.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesCitiesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy9jaXRpZXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/cities/cities.component.ts":
  /*!********************************************!*\
    !*** ./src/app/cities/cities.component.ts ***!
    \********************************************/

  /*! exports provided: CitiesComponent */

  /***/
  function srcAppCitiesCitiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitiesComponent", function () {
      return CitiesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CitiesComponent = class CitiesComponent {
      constructor() {}

      ngOnInit() {}

    };
    CitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-cities",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cities.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/cities.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cities.component.css */
      "./src/app/cities/cities.component.css")).default]
    })], CitiesComponent);
    /***/
  },

  /***/
  "./src/app/cities/cities.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/cities/cities.module.ts ***!
    \*****************************************/

  /*! exports provided: CitiesModule */

  /***/
  function srcAppCitiesCitiesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitiesModule", function () {
      return CitiesModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _cities_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cities-routing.module */
    "./src/app/cities/cities-routing.module.ts");
    /* harmony import */


    var _cities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cities.component */
    "./src/app/cities/cities.component.ts");
    /* harmony import */


    var _add_city_add_city_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-city/add-city.component */
    "./src/app/cities/add-city/add-city.component.ts");
    /* harmony import */


    var _city_profile_city_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./city-profile/city-profile.component */
    "./src/app/cities/city-profile/city-profile.component.ts");
    /* harmony import */


    var _discover_cities_discover_cities_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./discover-cities/discover-cities.component */
    "./src/app/cities/discover-cities/discover-cities.component.ts");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */


    var _edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./edit-city/edit-city.component */
    "./src/app/cities/edit-city/edit-city.component.ts");
    /* harmony import */


    var _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../shared/widgets/widgets.module */
    "./src/app/shared/widgets/widgets.module.ts");
    /* harmony import */


    var _widgets_citylogo_upload_citylogo_upload_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./widgets/citylogo-upload/citylogo-upload.component */
    "./src/app/cities/widgets/citylogo-upload/citylogo-upload.component.ts");
    /* harmony import */


    var _widgets_city_avatar_upload_city_avatar_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./widgets/city-avatar-upload/city-avatar-upload.component */
    "./src/app/cities/widgets/city-avatar-upload/city-avatar-upload.component.ts");
    /* harmony import */


    var _widgets_city_map_upload_city_map_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./widgets/city-map-upload/city-map-upload.component */
    "./src/app/cities/widgets/city-map-upload/city-map-upload.component.ts");
    /* harmony import */


    var _widgets_add_solutions_add_solutions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./widgets/add-solutions/add-solutions.component */
    "./src/app/cities/widgets/add-solutions/add-solutions.component.ts");
    /* harmony import */


    var _widgets_add_solutions_solution_item_solution_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./widgets/add-solutions/solution-item/solution-item.component */
    "./src/app/cities/widgets/add-solutions/solution-item/solution-item.component.ts");
    /* harmony import */


    var _widgets_add_achievements_add_achievements_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./widgets/add-achievements/add-achievements.component */
    "./src/app/cities/widgets/add-achievements/add-achievements.component.ts");
    /* harmony import */


    var _widgets_add_achievements_achievement_item_achievement_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./widgets/add-achievements/achievement-item/achievement-item.component */
    "./src/app/cities/widgets/add-achievements/achievement-item/achievement-item.component.ts");
    /* harmony import */


    var _widgets_collapsable_content_collapsable_content_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./widgets/collapsable-content/collapsable-content.component */
    "./src/app/cities/widgets/collapsable-content/collapsable-content.component.ts");
    /* harmony import */


    var _discover_discover_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../discover/discover.module */
    "./src/app/discover/discover.module.ts");

    let CitiesModule = class CitiesModule {};
    CitiesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_cities_component__WEBPACK_IMPORTED_MODULE_5__["CitiesComponent"], _add_city_add_city_component__WEBPACK_IMPORTED_MODULE_6__["AddCityComponent"], _city_profile_city_profile_component__WEBPACK_IMPORTED_MODULE_7__["CityProfileComponent"], _discover_cities_discover_cities_component__WEBPACK_IMPORTED_MODULE_8__["DiscoverCitiesComponent"], _edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_12__["EditCityComponent"], _widgets_citylogo_upload_citylogo_upload_component__WEBPACK_IMPORTED_MODULE_14__["CitylogoUploadComponent"], _widgets_city_avatar_upload_city_avatar_upload_component__WEBPACK_IMPORTED_MODULE_15__["CityAvatarUploadComponent"], _widgets_city_map_upload_city_map_upload_component__WEBPACK_IMPORTED_MODULE_16__["CityMapUploadComponent"], _widgets_add_solutions_add_solutions_component__WEBPACK_IMPORTED_MODULE_17__["AddSolutionsComponent"], _widgets_add_solutions_solution_item_solution_item_component__WEBPACK_IMPORTED_MODULE_18__["SolutionItemComponent"], _widgets_add_achievements_add_achievements_component__WEBPACK_IMPORTED_MODULE_19__["AddAchievementsComponent"], _widgets_add_achievements_achievement_item_achievement_item_component__WEBPACK_IMPORTED_MODULE_20__["AchievementItemComponent"], _widgets_collapsable_content_collapsable_content_component__WEBPACK_IMPORTED_MODULE_21__["CollapsableContentComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _cities_routing_module__WEBPACK_IMPORTED_MODULE_4__["CitiesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_10__["ImageCropperModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["NgMultiSelectDropDownModule"].forRoot(), _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_13__["WidgetsModule"], _discover_discover_module__WEBPACK_IMPORTED_MODULE_22__["DiscoverModule"]],
      exports: []
    })], CitiesModule);
    /***/
  },

  /***/
  "./src/app/cities/city-profile/city-profile.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/cities/city-profile/city-profile.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesCityProfileCityProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-card {\r\n\tbackground: #ffffff;\r\n\tpadding: 18px;\r\n\tborder: 1.5px solid var(--brdr-grey-clr);\r\n\tmax-width: 1142px;\r\n}\r\n\r\n.city-logo {\r\n\tmax-width: 50px;\r\n}\r\n\r\n.ej-city-details {\r\n\t/* max-width: 1100px; */\r\n\t/* position: absolute; */\r\n\tleft: 0px;\r\n\tright: 0px;\r\n\ttop: 0px;\r\n}\r\n\r\n.ej-city-area-card {\r\n\tborder: 1px solid rgba(16, 31, 59, 0.1);\r\n\tborder-radius: 10px;\r\n\tbackground: #ffffff;\r\n}\r\n\r\n.ej-city-area-card-content {\r\n\tborder-radius: 0px 0px 10px 10px !important;\r\n}\r\n\r\n.ej-city-area-card-img img {\r\n\tborder-radius: 10px 10px 0px 0px !important;\r\n\theight: 300px;\r\n\t-o-object-fit: cover;\r\n\t   object-fit: cover;\r\n}\r\n\r\n/*Contact Details Card*/\r\n\r\n.ej-contact-details-card {\r\n\ttop: 590px;\r\n\tleft: -15px;\r\n\tborder: 1px solid rgba(16, 31, 59, 0.1);\r\n\tborder-radius: 10px;\r\n\tbackground: #ffffff;\r\n}\r\n\r\n/*Profile Stats*/\r\n\r\n.ej-profile-stats-card {\r\n\tmax-width: 785px;\r\n\tmax-height: 500px;\r\n\t/* position: absolute !important;  */\r\n\ttop: 230px;\r\n\tleft: 255px;\r\n\tright: -60px;\r\n\tborder: 1px solid rgba(16, 31, 59, 0.1);\r\n\tborder-radius: 10px;\r\n\tbackground: #ffffff;\r\n}\r\n\r\n/*Challenges*/\r\n\r\n.ej-challenges-card {\r\n\tborder: 1px solid rgba(16, 31, 59, 0.1);\r\n\tborder-radius: 5px;\r\n\tbackground: #ffffff;\r\n\tpadding: 15px;\r\n}\r\n\r\n.ej-challenges-list-2 {\r\n\tborder: 1px solid rgba(16, 31, 59, 0.1);\r\n\tborder-radius: 5px;\r\n\tbackground: #ffffff;\r\n\tmax-width: 785px;\r\n\t/* position: absolute !important;  */\r\n\ttop: 515px;\r\n\tleft: 255px;\r\n\tright: -60px;\r\n}\r\n\r\n.ej-challenges-list-3 {\r\n\tborder: 1px solid rgba(16, 31, 59, 0.1);\r\n\tborder-radius: 5px;\r\n\tbackground: #ffffff;\r\n\tmax-width: 785px;\r\n\t/* position: absolute !important;  */\r\n\ttop: 615px;\r\n\tleft: 255px;\r\n\tright: -60px;\r\n}\r\n\r\n.ej-challenges-list-4 {\r\n\tborder: 1px solid rgba(16, 31, 59, 0.1);\r\n\tborder-radius: 5px;\r\n\tbackground: #ffffff;\r\n\tmax-width: 785px;\r\n\t/* position: absolute !important;  */\r\n\ttop: 715px;\r\n\tleft: 255px;\r\n\tright: -60px;\r\n}\r\n\r\n.ej-challenges-list-5 {\r\n\tborder: 1px solid rgba(16, 31, 59, 0.1);\r\n\tborder-radius: 5px;\r\n\tbackground: #ffffff;\r\n\tmax-width: 785px;\r\n\t/* position: absolute !important;  */\r\n\ttop: 815px;\r\n\tleft: 255px;\r\n\tright: -60px;\r\n}\r\n\r\n.ej-challenges-list-6 {\r\n\tborder: 1px solid rgba(16, 31, 59, 0.1);\r\n\tborder-radius: 5px;\r\n\tbackground: #ffffff;\r\n\tmax-width: 785px;\r\n\t/* position: absolute !important;  */\r\n\ttop: 915px;\r\n\tleft: 255px;\r\n\tright: -60px;\r\n}\r\n\r\n/*Modal*/\r\n\r\n.ej-modal-form-container {\r\n\tpadding: 60px;\r\n\tmax-width: 450px;\r\n}\r\n\r\n.ej-modal-form input[type=\"text\"] {\r\n\tbackground-color: #eaf0fd;\r\n\tborder: 1px solid #eaf0fd !important;\r\n\tborder-radius: 4px;\r\n\tpadding: 10px 10px;\r\n\toutline: none;\r\n}\r\n\r\n.ej-modal-form input[type=\"text\"]:focus,\r\n.ej-modal-form textarea:focus {\r\n\tborder: none;\r\n\toutline: none;\r\n\tbox-shadow: none;\r\n}\r\n\r\n.ej-modal-form textarea {\r\n\tbackground-color: #eaf0fd;\r\n\tborder: 1px solid #eaf0fd !important;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\r\n\tpadding: 10px 10px;\r\n\twidth: 100%;\r\n\theight: 90px !important;\r\n\tresize: none;\r\n\toutline: none;\r\n}\r\n\r\n/*Responsive*/\r\n\r\n@media only screen and (max-width: 1200px) {\r\n\t/*Bangalore Card*/\r\n\t.ej-nit-view {\r\n\t\tpadding: 140px 0px 135px 0px;\r\n\t}\r\n\t/*City Details Container*/\r\n\t.ej-city-details {\r\n\t\ttop: 5px;\r\n\t}\r\n\t/*City Area Card*/\r\n\t.ej-city-area-card {\r\n\t\ttop: 247px;\r\n\t}\r\n\t/*Contact Details Card*/\r\n\t.ej-contact-details-card {\r\n\t\ttop: 607px;\r\n\t}\r\n\t/*Active Challenges Sectors*/\r\n\t.ej-active-chalng {\r\n\t\ttop: 827px;\r\n\t}\r\n\t/*Profile Stats*/\r\n\t.ej-profile-stats-card {\r\n\t\t/* max-width: 655px; */\r\n\t\ttop: 247px;\r\n\t}\r\n}\r\n\r\n@media only screen and (min-width: 769px) and (max-width: 991px) {\r\n\t/*Bangalore Card*/\r\n\t.ej-bangalore-card {\r\n\t\tmax-height: 610px;\r\n\t\tpadding-right: 0.8rem !important;\r\n\t}\r\n\t.ej-nit-view {\r\n\t\tpadding: 140px 0px 175px 0px;\r\n\t\tmargin-top: 10px;\r\n\t}\r\n\t/*City Details Container*/\r\n\t.ej-city-details {\r\n\t\ttop: 288px;\r\n\t}\r\n\t/*City Area Card*/\r\n\t/* .ej-city-area-card{max-width: 265px;} */\r\n\t/* .ej-city-area-card-content{max-width: 265px;}\r\n\t.ej-city-area-card-img img{max-width: 265px;} */\r\n\t/*Contact Details Card*/\r\n\t/* .ej-contact-details-card{max-width: 265px;top: 578px;} */\r\n\t/*Active Challenges Sectors*/\r\n\t.ej-active-chalng {\r\n\t\tmax-width: 265px;\r\n\t\ttop: 800px;\r\n\t}\r\n\t/*Profile Stats*/\r\n\t/* .ej-profile-stats-card{max-width: 470px;padding-left: 0px;padding-right: 0px;right: -26px;} */\r\n\t/*Active and Closed Challenges*/\r\n\t.ej-actv-clsd-challenges {\r\n\t\tmax-width: 470px;\r\n\t\tright: -26px;\r\n\t\ttop: 390px;\r\n\t\tpadding-left: 0px !important;\r\n\t}\r\n\t/*Challenges*/\r\n\t/* .ej-challenges-list-1{max-width: 470px;right: -26px;}\r\n\t.ej-challenges-list-2{max-width: 470px;right: -26px;}\r\n\t.ej-challenges-list-3{max-width: 470px;right: -26px;}\r\n\t.ej-challenges-list-4{max-width: 470px;right: -26px;}\r\n\t.ej-challenges-list-5{max-width: 470px;right: -26px;}\r\n\t.ej-challenges-list-6{max-width: 470px;right: -26px;} */\r\n\t.ej-challenges-list-1 {\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n}\r\n\r\n@media only screen and (min-width: 481px) and (max-width: 768px) {\r\n\t.ej-sm-p-38 {\r\n\t\tpadding-bottom: 38px !important;\r\n\t}\r\n\t.ej-sm-pl-100 {\r\n\t\tpadding-left: 100px;\r\n\t}\r\n\t.ej-sm-pl-150 {\r\n\t\tpadding-left: 150px;\r\n\t}\r\n\t/*Bangalore Card*/\r\n\t.ej-bangalore-card {\r\n\t\tmax-width: 500px;\r\n\t\tmax-height: 647px;\r\n\t\tpadding-bottom: 0px;\r\n\t}\r\n\t/*City Details Container*/\r\n\t.ej-city-details {\r\n\t\ttop: 237px !important;\r\n\t}\r\n\t/*City Area Card*/\r\n\t/* .ej-city-area-card{max-width: 505px;left: 0px;right: 0px;top: 410px;max-height: 530px;} */\r\n\t/* .ej-city-area-card-content{max-width: 505px}\r\n\t.ej-city-area-card-img img{max-width: 505px;} */\r\n\t/*Contact Details Card*/\r\n\t/* .ej-contact-details-card{max-width: 505px;left: 7px;right: 0px;top: 1000px;} */\r\n\t/*Active Challenges Sectors*/\r\n\t.ej-active-chalng {\r\n\t\tmax-width: 505px;\r\n\t\tleft: 0px;\r\n\t\tright: 0px;\r\n\t\ttop: 1220px;\r\n\t}\r\n\t/*Profile Stats*/\r\n\t/* .ej-profile-stats-card{max-width: 505px;left: 2px;right: 0px;top: 247px;} */\r\n\t/*Active and Closed Challenges*/\r\n\t.ej-actv-clsd-challenges {\r\n\t\tmax-width: 505px;\r\n\t\tleft: 0px;\r\n\t\tright: 0px;\r\n\t\ttop: 1380px;\r\n\t}\r\n\t/*Challenges*/\r\n\t/* .ej-challenges-list-1{max-width: 505px;left: 0px;right: 0px;top: 1440px;}\r\n\t.ej-challenges-list-2{max-width: 505px;left: 0px;right: 0px;top: 1600px;}\r\n\t.ej-challenges-list-3{max-width: 505px;left: 0px;right: 0px;top: 1760px;}\r\n\t.ej-challenges-list-4{max-width: 505px;left: 0px;right: 0px;top: 1920px;}\r\n\t.ej-challenges-list-5{max-width: 505px;left: 0px;right: 0px;top: 2080px;}\r\n\t.ej-challenges-list-6{max-width: 505px;left: 0px;right: 0px;top: 2240px;} */\r\n\t/*Modal*/\r\n\t.ej-modal-dialog {\r\n\t\tmax-width: 400px;\r\n\t\tmargin: 0 auto !important;\r\n\t}\r\n\t.ej-modal-form-container {\r\n\t\tpadding: 20px !important;\r\n\t}\r\n\t.ej-challenges-list-1 {\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t/*Bangalore Card*/\r\n\t.ej-bangalore-card {\r\n\t\tmax-width: 500px;\r\n\t\tmax-height: 647px;\r\n\t\tpadding-bottom: 0px;\r\n\t}\r\n\t.ej-bangalore-logo-container {\r\n\t\tpadding-left: 0px !important;\r\n\t}\r\n\t/*City Details Container*/\r\n\t.ej-city-details {\r\n\t\ttop: 313px !important;\r\n\t}\r\n\t/*City Area Card*/\r\n\t/* .ej-city-area-card{max-width: 505px;left: 0px;right: 0px;top: 325px;max-height: 530px;} */\r\n\t/* .ej-city-area-card-content{max-width: 505px}\r\n\t.ej-city-area-card-img img{max-width: 505px;} */\r\n\t/*Contact Details Card*/\r\n\t/* .ej-contact-details-card{max-width: 505px;right: 0px;left: 0px;top: 740px;} */\r\n\t/*Active Challenges Sectors*/\r\n\t.ej-active-chalng {\r\n\t\tmax-width: 505px;\r\n\t\tleft: 0px;\r\n\t\tright: 0px;\r\n\t\ttop: 918px;\r\n\t}\r\n\t/*Profile Stats*/\r\n\t.ej-profile-stats-card {\r\n\t\tmax-width: 505px;\r\n\t\tleft: 2px;\r\n\t\tright: 0px;\r\n\t\ttop: 180px;\r\n\t}\r\n\t/*Active and Closed Challenges*/\r\n\t.ej-actv-clsd-challenges {\r\n\t\tmax-width: 505px;\r\n\t\tleft: 0px;\r\n\t\tright: 0px;\r\n\t\ttop: 1045px;\r\n\t}\r\n\t/*Challenges*/\r\n\t/* .ej-challenges-list-1{max-width: 505px;left: 0px;right: 0px;top: 1087px;}\r\n\t.ej-challenges-list-2{max-width: 505px;left: 0px;right: 0px;top: 1215px;}\r\n\t.ej-challenges-list-3{max-width: 505px;left: 0px;right: 0px;top: 1342px;}\r\n\t.ej-challenges-list-4{max-width: 505px;left: 0px;right: 0px;top: 1471px;}\r\n\t.ej-challenges-list-5{max-width: 505px;left: 0px;right: 0px;top: 1600px;}\r\n\t.ej-challenges-list-6{max-width: 505px;left: 0px;right: 0px;top: 1730px;} */\r\n\t/*Modal*/\r\n\t.ej-modal-dialog {\r\n\t\tmax-width: 295px;\r\n\t\tmargin: 0 auto !important;\r\n\t}\r\n\t.ej-modal-form-container {\r\n\t\tpadding: 20px !important;\r\n\t}\r\n\t.ej-modal-form {\r\n\t\tmax-width: 295px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\t.ej-modal-form input[type=\"text\"] {\r\n\t\tpadding-top: 0.25rem !important;\r\n\t\tpadding-bottom: 0.25rem !important;\r\n\t}\r\n\t.ej-challenges-list-1 {\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n}\r\n\r\n.l-nmt {\r\n\tmargin-top: -10%;\r\n}\r\n\r\n.city-avatar img {\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.challenges-section {\r\n\tmin-height: 100vh;\r\n\tposition: relative;\r\n}\r\n\r\n.social-media-links a {\r\n\tpadding-right: 12px;\r\n\tfont-size: 24px;\r\n\tcolor: var(--pastel-blue);\r\n}\r\n\r\n.city-card {\r\n\tbackground-color: var(--white);\r\n\tmargin-top: 18px;\r\n\tborder-radius: 6px;\r\n\toverflow: hidden;\r\n\tborder: 1px solid #dedede;\r\n}\r\n\r\n.city-card .card-header {\r\n\tpadding: 15px 18px;\r\n\tbackground-color: var(--widget-grey);\r\n\tcolor: var(--title-active);\r\n}\r\n\r\n.city-card .card-body {\r\n\tpadding: 15px 18px;\r\n\theight: 190px;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.social-media-links a,\r\n.social-media-links span {\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.ceo-avatar {\r\n\twidth: 40px;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.achievement-item {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\tmargin-bottom: 8px;\r\n}\r\n\r\n.monthyear {\r\n\tflex-basis: 20%;\r\n\tfont-size: 12px;\r\n\tline-height: 18px;\r\n\tcolor: var(--body-grey);\r\n}\r\n\r\n.achievement-content {\r\n\tflex-basis: 80%;\r\n\tfont-size: 12px;\r\n\tline-height: 18px;\r\n\tpadding-left: 10px;\r\n}\r\n\r\n.achievement-content .title {\r\n\tcolor: var(--title-active);\r\n\tfont-weight: 500;\r\n}\r\n\r\n.achievement-content .description {\r\n\tcolor: var(--body-grey);\r\n}\r\n\r\n.gallery-modal .modal-dialog {\r\n\twidth: 100%;\r\n\tmax-width: 680px;\r\n}\r\n\r\n.gallery-modal .modal-content {\r\n\tbox-shadow: none !important;\r\n}\r\n\r\n.gallery-modal .modal-body {\r\n\tpadding: 36px 56px;\r\n\tmin-height: 500px;\r\n}\r\n\r\n.gallery-slider .carousel-indicators li {\r\n\tbackground-color: #c4c4c4;\r\n}\r\n\r\n.gallery-slider .carousel-indicators .active {\r\n\t/* width: 10px;\r\n  height: 10px; */\r\n\tmargin: 0;\r\n\tbackground-color: var(--body-grey);\r\n}\r\n\r\n.gallery-slider .item img {\r\n\twidth: 100%;\r\n}\r\n\r\n.gallery-slider .carousel-control.left,\r\n.gallery-slider .carousel-control.right {\r\n\tbackground-image: none !important;\r\n}\r\n\r\n.gallery-slider .carousel-control.left {\r\n\tleft: -25px;\r\n}\r\n\r\n.gallery-slider .carousel-control.right {\r\n\tright: -25px;\r\n}\r\n\r\n.carousel-control {\r\n\twidth: 0;\r\n\tcolor: #211818;\r\n}\r\n\r\n.city-profile-tabs {\r\n\tborder: none !important;\r\n}\r\n\r\n.city-profile-tabs li a {\r\n\tbackground-color: transparent !important;\r\n\tcolor: var(--title-active);\r\n\tborder: none !important;\r\n}\r\n\r\n.city-profile-tabs .active a {\r\n\tcolor: var(--primary-green);\r\n}\r\n\r\n/* .gallery-slider .carousel-control .glyphicon-chevron-left,\r\n.gallery-slider .carousel-control .glyphicon-chevron-right,\r\n.gallery-slider .carousel-control .icon-next,\r\n.gallery-slider .carousel-control .icon-prev {\r\n  font-size: 16px;\r\n  padding: 10px;\r\n\r\n} */\r\n\r\n.solution-implemented .name {\r\n\tcolor: var(--body-grey);\r\n\tfont-size: 16px;\r\n\tline-height: 18.75px;\r\n\tmargin-bottom: 4px;\r\n}\r\n\r\n.solution-implemented .sector {\r\n\tcolor: var(--body-light);\r\n\ttext-transform: capitalize;\r\n\tfont-size: 12px;\r\n\tline-height: 16px;\r\n\tmargin-bottom: 8px;\r\n}\r\n\r\n.solution-implemented .website a {\r\n\tfont-size: 12px;\r\n\tcolor: var(--body-light);\r\n}\r\n\r\n.overlow-y-hidden {\r\n\toverflow-y: hidden !important;\r\n}\r\n\r\n.a-cs {\r\n\toverflow-wrap: anywhere;\r\n\toverflow-x: hidden !important;\r\n}\r\n\r\n.a-cs:focus,\r\n.a-cs:hover {\r\n\toverflow-y: auto !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL2NpdHktcHJvZmlsZS9jaXR5LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isd0NBQXdDO0NBQ3hDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsd0JBQXdCO0NBQ3hCLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsUUFBUTtBQUNUOztBQUVBO0NBQ0MsdUNBQXVDO0NBQ3ZDLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQywyQ0FBMkM7QUFDNUM7O0FBQ0E7Q0FDQywyQ0FBMkM7Q0FDM0MsYUFBYTtDQUNiLG9CQUFpQjtJQUFqQixpQkFBaUI7QUFDbEI7O0FBQ0EsdUJBQXVCOztBQUN2QjtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsdUNBQXVDO0NBQ3ZDLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7O0FBRUEsZ0JBQWdCOztBQUNoQjtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsb0NBQW9DO0NBQ3BDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsWUFBWTtDQUNaLHVDQUF1QztDQUN2QyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCOztBQUVBLGFBQWE7O0FBQ2I7Q0FDQyx1Q0FBdUM7Q0FDdkMsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2Q7O0FBQ0E7Q0FDQyx1Q0FBdUM7Q0FDdkMsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsb0NBQW9DO0NBQ3BDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUNBO0NBQ0MsdUNBQXVDO0NBQ3ZDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLG9DQUFvQztDQUNwQyxVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHVDQUF1QztDQUN2QyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixvQ0FBb0M7Q0FDcEMsVUFBVTtDQUNWLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx1Q0FBdUM7Q0FDdkMsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsb0NBQW9DO0NBQ3BDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsdUNBQXVDO0NBQ3ZDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLG9DQUFvQztDQUNwQyxVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFDQSxRQUFROztBQUNSO0NBQ0MsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixvQ0FBb0M7Q0FDcEMsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7O0FBQ0E7O0NBRUMsWUFBWTtDQUNaLGFBQWE7Q0FDYixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsb0NBQW9DO0NBQ3BDLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCx1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGFBQWE7QUFDZDs7QUFDQSxhQUFhOztBQUNiO0NBQ0MsaUJBQWlCO0NBQ2pCO0VBQ0MsNEJBQTRCO0NBQzdCO0NBQ0EseUJBQXlCO0NBQ3pCO0VBQ0MsUUFBUTtDQUNUO0NBQ0EsaUJBQWlCO0NBQ2pCO0VBQ0MsVUFBVTtDQUNYO0NBQ0EsdUJBQXVCO0NBQ3ZCO0VBQ0MsVUFBVTtDQUNYO0NBQ0EsNEJBQTRCO0NBQzVCO0VBQ0MsVUFBVTtDQUNYO0NBQ0EsZ0JBQWdCO0NBQ2hCO0VBQ0Msc0JBQXNCO0VBQ3RCLFVBQVU7Q0FDWDtBQUNEOztBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCO0VBQ0MsaUJBQWlCO0VBQ2pCLGdDQUFnQztDQUNqQztDQUNBO0VBQ0MsNEJBQTRCO0VBQzVCLGdCQUFnQjtDQUNqQjtDQUNBLHlCQUF5QjtDQUN6QjtFQUNDLFVBQVU7Q0FDWDtDQUNBLGlCQUFpQjtDQUNqQiwwQ0FBMEM7Q0FDMUM7Z0RBQytDO0NBQy9DLHVCQUF1QjtDQUN2QiwyREFBMkQ7Q0FDM0QsNEJBQTRCO0NBQzVCO0VBQ0MsZ0JBQWdCO0VBQ2hCLFVBQVU7Q0FDWDtDQUNBLGdCQUFnQjtDQUNoQixnR0FBZ0c7Q0FDaEcsK0JBQStCO0NBQy9CO0VBQ0MsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YsNEJBQTRCO0NBQzdCO0NBQ0EsYUFBYTtDQUNiOzs7Ozt3REFLdUQ7Q0FDdkQ7RUFDQyxtQkFBbUI7Q0FDcEI7QUFDRDs7QUFDQTtDQUNDO0VBQ0MsK0JBQStCO0NBQ2hDO0NBQ0E7RUFDQyxtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLG1CQUFtQjtDQUNwQjtDQUNBLGlCQUFpQjtDQUNqQjtFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0NBQ0EseUJBQXlCO0NBQ3pCO0VBQ0MscUJBQXFCO0NBQ3RCO0NBQ0EsaUJBQWlCO0NBQ2pCLDRGQUE0RjtDQUM1RjtnREFDK0M7Q0FDL0MsdUJBQXVCO0NBQ3ZCLGlGQUFpRjtDQUNqRiw0QkFBNEI7Q0FDNUI7RUFDQyxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0NBQ1o7Q0FDQSxnQkFBZ0I7Q0FDaEIsOEVBQThFO0NBQzlFLCtCQUErQjtDQUMvQjtFQUNDLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7Q0FDWjtDQUNBLGFBQWE7Q0FDYjs7Ozs7NEVBSzJFO0NBQzNFLFFBQVE7Q0FDUjtFQUNDLGdCQUFnQjtFQUNoQix5QkFBeUI7Q0FDMUI7Q0FDQTtFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsbUJBQW1CO0NBQ3BCO0FBQ0Q7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakI7RUFDQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0NBQ0EseUJBQXlCO0NBQ3pCO0VBQ0MscUJBQXFCO0NBQ3RCO0NBQ0EsaUJBQWlCO0NBQ2pCLDRGQUE0RjtDQUM1RjtnREFDK0M7Q0FDL0MsdUJBQXVCO0NBQ3ZCLGdGQUFnRjtDQUNoRiw0QkFBNEI7Q0FDNUI7RUFDQyxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0NBQ1g7Q0FDQSxnQkFBZ0I7Q0FDaEI7RUFDQyxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0NBQ1g7Q0FDQSwrQkFBK0I7Q0FDL0I7RUFDQyxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0NBQ1o7Q0FDQSxhQUFhO0NBQ2I7Ozs7OzRFQUsyRTtDQUMzRSxRQUFRO0NBQ1I7RUFDQyxnQkFBZ0I7RUFDaEIseUJBQXlCO0NBQzFCO0NBQ0E7RUFDQyx3QkFBd0I7Q0FDekI7Q0FDQTtFQUNDLGdCQUFnQjtFQUNoQixjQUFjO0NBQ2Y7Q0FDQTtFQUNDLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7Q0FDQTtFQUNDLG1CQUFtQjtDQUNwQjtBQUNEOztBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQ0FBb0M7Q0FDcEMsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixnQkFBZ0I7QUFDakI7O0FBRUE7O0NBRUMscUJBQXFCO0NBQ3JCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQztpQkFDZ0I7Q0FDaEIsU0FBUztDQUNULGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTs7Q0FFQyxpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxRQUFRO0NBQ1IsY0FBYztBQUNmOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msd0NBQXdDO0NBQ3hDLDBCQUEwQjtDQUMxQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Ozs7Ozs7R0FPRzs7QUFFSDtDQUNDLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QiwwQkFBMEI7Q0FDMUIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysd0JBQXdCO0FBQ3pCOztBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCOztBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLDZCQUE2QjtBQUM5Qjs7QUFDQTs7Q0FFQywyQkFBMkI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jaXRpZXMvY2l0eS1wcm9maWxlL2NpdHktcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY2FyZCB7XHJcblx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHRwYWRkaW5nOiAxOHB4O1xyXG5cdGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYnJkci1ncmV5LWNscik7XHJcblx0bWF4LXdpZHRoOiAxMTQycHg7XHJcbn1cclxuXHJcbi5jaXR5LWxvZ28ge1xyXG5cdG1heC13aWR0aDogNTBweDtcclxufVxyXG5cclxuLmVqLWNpdHktZGV0YWlscyB7XHJcblx0LyogbWF4LXdpZHRoOiAxMTAwcHg7ICovXHJcblx0LyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG5cdGxlZnQ6IDBweDtcclxuXHRyaWdodDogMHB4O1xyXG5cdHRvcDogMHB4O1xyXG59XHJcblxyXG4uZWotY2l0eS1hcmVhLWNhcmQge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMxLCA1OSwgMC4xKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLmVqLWNpdHktYXJlYS1jYXJkLWNvbnRlbnQge1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmVqLWNpdHktYXJlYS1jYXJkLWltZyBpbWcge1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcblx0aGVpZ2h0OiAzMDBweDtcclxuXHRvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4vKkNvbnRhY3QgRGV0YWlscyBDYXJkKi9cclxuLmVqLWNvbnRhY3QtZGV0YWlscy1jYXJkIHtcclxuXHR0b3A6IDU5MHB4O1xyXG5cdGxlZnQ6IC0xNXB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMxLCA1OSwgMC4xKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi8qUHJvZmlsZSBTdGF0cyovXHJcbi5lai1wcm9maWxlLXN0YXRzLWNhcmQge1xyXG5cdG1heC13aWR0aDogNzg1cHg7XHJcblx0bWF4LWhlaWdodDogNTAwcHg7XHJcblx0LyogcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7ICAqL1xyXG5cdHRvcDogMjMwcHg7XHJcblx0bGVmdDogMjU1cHg7XHJcblx0cmlnaHQ6IC02MHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMxLCA1OSwgMC4xKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi8qQ2hhbGxlbmdlcyovXHJcbi5lai1jaGFsbGVuZ2VzLWNhcmQge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMxLCA1OSwgMC4xKTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5lai1jaGFsbGVuZ2VzLWxpc3QtMiB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMzEsIDU5LCAwLjEpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdG1heC13aWR0aDogNzg1cHg7XHJcblx0LyogcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7ICAqL1xyXG5cdHRvcDogNTE1cHg7XHJcblx0bGVmdDogMjU1cHg7XHJcblx0cmlnaHQ6IC02MHB4O1xyXG59XHJcbi5lai1jaGFsbGVuZ2VzLWxpc3QtMyB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMzEsIDU5LCAwLjEpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdG1heC13aWR0aDogNzg1cHg7XHJcblx0LyogcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7ICAqL1xyXG5cdHRvcDogNjE1cHg7XHJcblx0bGVmdDogMjU1cHg7XHJcblx0cmlnaHQ6IC02MHB4O1xyXG59XHJcblxyXG4uZWotY2hhbGxlbmdlcy1saXN0LTQge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMxLCA1OSwgMC4xKTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHRtYXgtd2lkdGg6IDc4NXB4O1xyXG5cdC8qIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50OyAgKi9cclxuXHR0b3A6IDcxNXB4O1xyXG5cdGxlZnQ6IDI1NXB4O1xyXG5cdHJpZ2h0OiAtNjBweDtcclxufVxyXG5cclxuLmVqLWNoYWxsZW5nZXMtbGlzdC01IHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAzMSwgNTksIDAuMSk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0bWF4LXdpZHRoOiA3ODVweDtcclxuXHQvKiBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDsgICovXHJcblx0dG9wOiA4MTVweDtcclxuXHRsZWZ0OiAyNTVweDtcclxuXHRyaWdodDogLTYwcHg7XHJcbn1cclxuXHJcbi5lai1jaGFsbGVuZ2VzLWxpc3QtNiB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMzEsIDU5LCAwLjEpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdG1heC13aWR0aDogNzg1cHg7XHJcblx0LyogcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7ICAqL1xyXG5cdHRvcDogOTE1cHg7XHJcblx0bGVmdDogMjU1cHg7XHJcblx0cmlnaHQ6IC02MHB4O1xyXG59XHJcbi8qTW9kYWwqL1xyXG4uZWotbW9kYWwtZm9ybS1jb250YWluZXIge1xyXG5cdHBhZGRpbmc6IDYwcHg7XHJcblx0bWF4LXdpZHRoOiA0NTBweDtcclxufVxyXG4uZWotbW9kYWwtZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VhZjBmZDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZWFmMGZkICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMTBweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5lai1tb2RhbC1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4uZWotbW9kYWwtZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZWotbW9kYWwtZm9ybSB0ZXh0YXJlYSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VhZjBmZDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZWFmMGZkICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0cGFkZGluZzogMTBweCAxMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogOTBweCAhaW1wb3J0YW50O1xyXG5cdHJlc2l6ZTogbm9uZTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi8qUmVzcG9uc2l2ZSovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcblx0LypCYW5nYWxvcmUgQ2FyZCovXHJcblx0LmVqLW5pdC12aWV3IHtcclxuXHRcdHBhZGRpbmc6IDE0MHB4IDBweCAxMzVweCAwcHg7XHJcblx0fVxyXG5cdC8qQ2l0eSBEZXRhaWxzIENvbnRhaW5lciovXHJcblx0LmVqLWNpdHktZGV0YWlscyB7XHJcblx0XHR0b3A6IDVweDtcclxuXHR9XHJcblx0LypDaXR5IEFyZWEgQ2FyZCovXHJcblx0LmVqLWNpdHktYXJlYS1jYXJkIHtcclxuXHRcdHRvcDogMjQ3cHg7XHJcblx0fVxyXG5cdC8qQ29udGFjdCBEZXRhaWxzIENhcmQqL1xyXG5cdC5lai1jb250YWN0LWRldGFpbHMtY2FyZCB7XHJcblx0XHR0b3A6IDYwN3B4O1xyXG5cdH1cclxuXHQvKkFjdGl2ZSBDaGFsbGVuZ2VzIFNlY3RvcnMqL1xyXG5cdC5lai1hY3RpdmUtY2hhbG5nIHtcclxuXHRcdHRvcDogODI3cHg7XHJcblx0fVxyXG5cdC8qUHJvZmlsZSBTdGF0cyovXHJcblx0LmVqLXByb2ZpbGUtc3RhdHMtY2FyZCB7XHJcblx0XHQvKiBtYXgtd2lkdGg6IDY1NXB4OyAqL1xyXG5cdFx0dG9wOiAyNDdweDtcclxuXHR9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblx0LypCYW5nYWxvcmUgQ2FyZCovXHJcblx0LmVqLWJhbmdhbG9yZS1jYXJkIHtcclxuXHRcdG1heC1oZWlnaHQ6IDYxMHB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMC44cmVtICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5lai1uaXQtdmlldyB7XHJcblx0XHRwYWRkaW5nOiAxNDBweCAwcHggMTc1cHggMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR9XHJcblx0LypDaXR5IERldGFpbHMgQ29udGFpbmVyKi9cclxuXHQuZWotY2l0eS1kZXRhaWxzIHtcclxuXHRcdHRvcDogMjg4cHg7XHJcblx0fVxyXG5cdC8qQ2l0eSBBcmVhIENhcmQqL1xyXG5cdC8qIC5lai1jaXR5LWFyZWEtY2FyZHttYXgtd2lkdGg6IDI2NXB4O30gKi9cclxuXHQvKiAuZWotY2l0eS1hcmVhLWNhcmQtY29udGVudHttYXgtd2lkdGg6IDI2NXB4O31cclxuXHQuZWotY2l0eS1hcmVhLWNhcmQtaW1nIGltZ3ttYXgtd2lkdGg6IDI2NXB4O30gKi9cclxuXHQvKkNvbnRhY3QgRGV0YWlscyBDYXJkKi9cclxuXHQvKiAuZWotY29udGFjdC1kZXRhaWxzLWNhcmR7bWF4LXdpZHRoOiAyNjVweDt0b3A6IDU3OHB4O30gKi9cclxuXHQvKkFjdGl2ZSBDaGFsbGVuZ2VzIFNlY3RvcnMqL1xyXG5cdC5lai1hY3RpdmUtY2hhbG5nIHtcclxuXHRcdG1heC13aWR0aDogMjY1cHg7XHJcblx0XHR0b3A6IDgwMHB4O1xyXG5cdH1cclxuXHQvKlByb2ZpbGUgU3RhdHMqL1xyXG5cdC8qIC5lai1wcm9maWxlLXN0YXRzLWNhcmR7bWF4LXdpZHRoOiA0NzBweDtwYWRkaW5nLWxlZnQ6IDBweDtwYWRkaW5nLXJpZ2h0OiAwcHg7cmlnaHQ6IC0yNnB4O30gKi9cclxuXHQvKkFjdGl2ZSBhbmQgQ2xvc2VkIENoYWxsZW5nZXMqL1xyXG5cdC5lai1hY3R2LWNsc2QtY2hhbGxlbmdlcyB7XHJcblx0XHRtYXgtd2lkdGg6IDQ3MHB4O1xyXG5cdFx0cmlnaHQ6IC0yNnB4O1xyXG5cdFx0dG9wOiAzOTBweDtcclxuXHRcdHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC8qQ2hhbGxlbmdlcyovXHJcblx0LyogLmVqLWNoYWxsZW5nZXMtbGlzdC0xe21heC13aWR0aDogNDcwcHg7cmlnaHQ6IC0yNnB4O31cclxuXHQuZWotY2hhbGxlbmdlcy1saXN0LTJ7bWF4LXdpZHRoOiA0NzBweDtyaWdodDogLTI2cHg7fVxyXG5cdC5lai1jaGFsbGVuZ2VzLWxpc3QtM3ttYXgtd2lkdGg6IDQ3MHB4O3JpZ2h0OiAtMjZweDt9XHJcblx0LmVqLWNoYWxsZW5nZXMtbGlzdC00e21heC13aWR0aDogNDcwcHg7cmlnaHQ6IC0yNnB4O31cclxuXHQuZWotY2hhbGxlbmdlcy1saXN0LTV7bWF4LXdpZHRoOiA0NzBweDtyaWdodDogLTI2cHg7fVxyXG5cdC5lai1jaGFsbGVuZ2VzLWxpc3QtNnttYXgtd2lkdGg6IDQ3MHB4O3JpZ2h0OiAtMjZweDt9ICovXHJcblx0LmVqLWNoYWxsZW5nZXMtbGlzdC0xIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cdC5lai1zbS1wLTM4IHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAzOHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5lai1zbS1wbC0xMDAge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxMDBweDtcclxuXHR9XHJcblx0LmVqLXNtLXBsLTE1MCB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDE1MHB4O1xyXG5cdH1cclxuXHQvKkJhbmdhbG9yZSBDYXJkKi9cclxuXHQuZWotYmFuZ2Fsb3JlLWNhcmQge1xyXG5cdFx0bWF4LXdpZHRoOiA1MDBweDtcclxuXHRcdG1heC1oZWlnaHQ6IDY0N3B4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDBweDtcclxuXHR9XHJcblx0LypDaXR5IERldGFpbHMgQ29udGFpbmVyKi9cclxuXHQuZWotY2l0eS1kZXRhaWxzIHtcclxuXHRcdHRvcDogMjM3cHggIWltcG9ydGFudDtcclxuXHR9XHJcblx0LypDaXR5IEFyZWEgQ2FyZCovXHJcblx0LyogLmVqLWNpdHktYXJlYS1jYXJke21heC13aWR0aDogNTA1cHg7bGVmdDogMHB4O3JpZ2h0OiAwcHg7dG9wOiA0MTBweDttYXgtaGVpZ2h0OiA1MzBweDt9ICovXHJcblx0LyogLmVqLWNpdHktYXJlYS1jYXJkLWNvbnRlbnR7bWF4LXdpZHRoOiA1MDVweH1cclxuXHQuZWotY2l0eS1hcmVhLWNhcmQtaW1nIGltZ3ttYXgtd2lkdGg6IDUwNXB4O30gKi9cclxuXHQvKkNvbnRhY3QgRGV0YWlscyBDYXJkKi9cclxuXHQvKiAuZWotY29udGFjdC1kZXRhaWxzLWNhcmR7bWF4LXdpZHRoOiA1MDVweDtsZWZ0OiA3cHg7cmlnaHQ6IDBweDt0b3A6IDEwMDBweDt9ICovXHJcblx0LypBY3RpdmUgQ2hhbGxlbmdlcyBTZWN0b3JzKi9cclxuXHQuZWotYWN0aXZlLWNoYWxuZyB7XHJcblx0XHRtYXgtd2lkdGg6IDUwNXB4O1xyXG5cdFx0bGVmdDogMHB4O1xyXG5cdFx0cmlnaHQ6IDBweDtcclxuXHRcdHRvcDogMTIyMHB4O1xyXG5cdH1cclxuXHQvKlByb2ZpbGUgU3RhdHMqL1xyXG5cdC8qIC5lai1wcm9maWxlLXN0YXRzLWNhcmR7bWF4LXdpZHRoOiA1MDVweDtsZWZ0OiAycHg7cmlnaHQ6IDBweDt0b3A6IDI0N3B4O30gKi9cclxuXHQvKkFjdGl2ZSBhbmQgQ2xvc2VkIENoYWxsZW5nZXMqL1xyXG5cdC5lai1hY3R2LWNsc2QtY2hhbGxlbmdlcyB7XHJcblx0XHRtYXgtd2lkdGg6IDUwNXB4O1xyXG5cdFx0bGVmdDogMHB4O1xyXG5cdFx0cmlnaHQ6IDBweDtcclxuXHRcdHRvcDogMTM4MHB4O1xyXG5cdH1cclxuXHQvKkNoYWxsZW5nZXMqL1xyXG5cdC8qIC5lai1jaGFsbGVuZ2VzLWxpc3QtMXttYXgtd2lkdGg6IDUwNXB4O2xlZnQ6IDBweDtyaWdodDogMHB4O3RvcDogMTQ0MHB4O31cclxuXHQuZWotY2hhbGxlbmdlcy1saXN0LTJ7bWF4LXdpZHRoOiA1MDVweDtsZWZ0OiAwcHg7cmlnaHQ6IDBweDt0b3A6IDE2MDBweDt9XHJcblx0LmVqLWNoYWxsZW5nZXMtbGlzdC0ze21heC13aWR0aDogNTA1cHg7bGVmdDogMHB4O3JpZ2h0OiAwcHg7dG9wOiAxNzYwcHg7fVxyXG5cdC5lai1jaGFsbGVuZ2VzLWxpc3QtNHttYXgtd2lkdGg6IDUwNXB4O2xlZnQ6IDBweDtyaWdodDogMHB4O3RvcDogMTkyMHB4O31cclxuXHQuZWotY2hhbGxlbmdlcy1saXN0LTV7bWF4LXdpZHRoOiA1MDVweDtsZWZ0OiAwcHg7cmlnaHQ6IDBweDt0b3A6IDIwODBweDt9XHJcblx0LmVqLWNoYWxsZW5nZXMtbGlzdC02e21heC13aWR0aDogNTA1cHg7bGVmdDogMHB4O3JpZ2h0OiAwcHg7dG9wOiAyMjQwcHg7fSAqL1xyXG5cdC8qTW9kYWwqL1xyXG5cdC5lai1tb2RhbC1kaWFsb2cge1xyXG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcclxuXHRcdG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5lai1tb2RhbC1mb3JtLWNvbnRhaW5lciB7XHJcblx0XHRwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5lai1jaGFsbGVuZ2VzLWxpc3QtMSB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblx0LypCYW5nYWxvcmUgQ2FyZCovXHJcblx0LmVqLWJhbmdhbG9yZS1jYXJkIHtcclxuXHRcdG1heC13aWR0aDogNTAwcHg7XHJcblx0XHRtYXgtaGVpZ2h0OiA2NDdweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwcHg7XHJcblx0fVxyXG5cdC5lai1iYW5nYWxvcmUtbG9nby1jb250YWluZXIge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuXHR9XHJcblx0LypDaXR5IERldGFpbHMgQ29udGFpbmVyKi9cclxuXHQuZWotY2l0eS1kZXRhaWxzIHtcclxuXHRcdHRvcDogMzEzcHggIWltcG9ydGFudDtcclxuXHR9XHJcblx0LypDaXR5IEFyZWEgQ2FyZCovXHJcblx0LyogLmVqLWNpdHktYXJlYS1jYXJke21heC13aWR0aDogNTA1cHg7bGVmdDogMHB4O3JpZ2h0OiAwcHg7dG9wOiAzMjVweDttYXgtaGVpZ2h0OiA1MzBweDt9ICovXHJcblx0LyogLmVqLWNpdHktYXJlYS1jYXJkLWNvbnRlbnR7bWF4LXdpZHRoOiA1MDVweH1cclxuXHQuZWotY2l0eS1hcmVhLWNhcmQtaW1nIGltZ3ttYXgtd2lkdGg6IDUwNXB4O30gKi9cclxuXHQvKkNvbnRhY3QgRGV0YWlscyBDYXJkKi9cclxuXHQvKiAuZWotY29udGFjdC1kZXRhaWxzLWNhcmR7bWF4LXdpZHRoOiA1MDVweDtyaWdodDogMHB4O2xlZnQ6IDBweDt0b3A6IDc0MHB4O30gKi9cclxuXHQvKkFjdGl2ZSBDaGFsbGVuZ2VzIFNlY3RvcnMqL1xyXG5cdC5lai1hY3RpdmUtY2hhbG5nIHtcclxuXHRcdG1heC13aWR0aDogNTA1cHg7XHJcblx0XHRsZWZ0OiAwcHg7XHJcblx0XHRyaWdodDogMHB4O1xyXG5cdFx0dG9wOiA5MThweDtcclxuXHR9XHJcblx0LypQcm9maWxlIFN0YXRzKi9cclxuXHQuZWotcHJvZmlsZS1zdGF0cy1jYXJkIHtcclxuXHRcdG1heC13aWR0aDogNTA1cHg7XHJcblx0XHRsZWZ0OiAycHg7XHJcblx0XHRyaWdodDogMHB4O1xyXG5cdFx0dG9wOiAxODBweDtcclxuXHR9XHJcblx0LypBY3RpdmUgYW5kIENsb3NlZCBDaGFsbGVuZ2VzKi9cclxuXHQuZWotYWN0di1jbHNkLWNoYWxsZW5nZXMge1xyXG5cdFx0bWF4LXdpZHRoOiA1MDVweDtcclxuXHRcdGxlZnQ6IDBweDtcclxuXHRcdHJpZ2h0OiAwcHg7XHJcblx0XHR0b3A6IDEwNDVweDtcclxuXHR9XHJcblx0LypDaGFsbGVuZ2VzKi9cclxuXHQvKiAuZWotY2hhbGxlbmdlcy1saXN0LTF7bWF4LXdpZHRoOiA1MDVweDtsZWZ0OiAwcHg7cmlnaHQ6IDBweDt0b3A6IDEwODdweDt9XHJcblx0LmVqLWNoYWxsZW5nZXMtbGlzdC0ye21heC13aWR0aDogNTA1cHg7bGVmdDogMHB4O3JpZ2h0OiAwcHg7dG9wOiAxMjE1cHg7fVxyXG5cdC5lai1jaGFsbGVuZ2VzLWxpc3QtM3ttYXgtd2lkdGg6IDUwNXB4O2xlZnQ6IDBweDtyaWdodDogMHB4O3RvcDogMTM0MnB4O31cclxuXHQuZWotY2hhbGxlbmdlcy1saXN0LTR7bWF4LXdpZHRoOiA1MDVweDtsZWZ0OiAwcHg7cmlnaHQ6IDBweDt0b3A6IDE0NzFweDt9XHJcblx0LmVqLWNoYWxsZW5nZXMtbGlzdC01e21heC13aWR0aDogNTA1cHg7bGVmdDogMHB4O3JpZ2h0OiAwcHg7dG9wOiAxNjAwcHg7fVxyXG5cdC5lai1jaGFsbGVuZ2VzLWxpc3QtNnttYXgtd2lkdGg6IDUwNXB4O2xlZnQ6IDBweDtyaWdodDogMHB4O3RvcDogMTczMHB4O30gKi9cclxuXHQvKk1vZGFsKi9cclxuXHQuZWotbW9kYWwtZGlhbG9nIHtcclxuXHRcdG1heC13aWR0aDogMjk1cHg7XHJcblx0XHRtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuZWotbW9kYWwtZm9ybS1jb250YWluZXIge1xyXG5cdFx0cGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuZWotbW9kYWwtZm9ybSB7XHJcblx0XHRtYXgtd2lkdGg6IDI5NXB4O1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0fVxyXG5cdC5lai1tb2RhbC1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuXHRcdHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuZWotY2hhbGxlbmdlcy1saXN0LTEge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHR9XHJcbn1cclxuLmwtbm10IHtcclxuXHRtYXJnaW4tdG9wOiAtMTAlO1xyXG59XHJcblxyXG4uY2l0eS1hdmF0YXIgaW1nIHtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY2hhbGxlbmdlcy1zZWN0aW9uIHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zb2NpYWwtbWVkaWEtbGlua3MgYSB7XHJcblx0cGFkZGluZy1yaWdodDogMTJweDtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0Y29sb3I6IHZhcigtLXBhc3RlbC1ibHVlKTtcclxufVxyXG5cclxuLmNpdHktY2FyZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdG1hcmdpbi10b3A6IDE4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG5cclxuLmNpdHktY2FyZCAuY2FyZC1oZWFkZXIge1xyXG5cdHBhZGRpbmc6IDE1cHggMThweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aWRnZXQtZ3JleSk7XHJcblx0Y29sb3I6IHZhcigtLXRpdGxlLWFjdGl2ZSk7XHJcbn1cclxuXHJcbi5jaXR5LWNhcmQgLmNhcmQtYm9keSB7XHJcblx0cGFkZGluZzogMTVweCAxOHB4O1xyXG5cdGhlaWdodDogMTkwcHg7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYS1saW5rcyBhLFxyXG4uc29jaWFsLW1lZGlhLWxpbmtzIHNwYW4ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY2VvLWF2YXRhciB7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uYWNoaWV2ZW1lbnQtaXRlbSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5tb250aHllYXIge1xyXG5cdGZsZXgtYmFzaXM6IDIwJTtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0Y29sb3I6IHZhcigtLWJvZHktZ3JleSk7XHJcbn1cclxuXHJcbi5hY2hpZXZlbWVudC1jb250ZW50IHtcclxuXHRmbGV4LWJhc2lzOiA4MCU7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmFjaGlldmVtZW50LWNvbnRlbnQgLnRpdGxlIHtcclxuXHRjb2xvcjogdmFyKC0tdGl0bGUtYWN0aXZlKTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYWNoaWV2ZW1lbnQtY29udGVudCAuZGVzY3JpcHRpb24ge1xyXG5cdGNvbG9yOiB2YXIoLS1ib2R5LWdyZXkpO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1tb2RhbCAubW9kYWwtZGlhbG9nIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXgtd2lkdGg6IDY4MHB4O1xyXG59XHJcblxyXG4uZ2FsbGVyeS1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ2FsbGVyeS1tb2RhbCAubW9kYWwtYm9keSB7XHJcblx0cGFkZGluZzogMzZweCA1NnB4O1xyXG5cdG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uZ2FsbGVyeS1zbGlkZXIgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LXNsaWRlciAuY2Fyb3VzZWwtaW5kaWNhdG9ycyAuYWN0aXZlIHtcclxuXHQvKiB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7ICovXHJcblx0bWFyZ2luOiAwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktZ3JleSk7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LXNsaWRlciAuaXRlbSBpbWcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1zbGlkZXIgLmNhcm91c2VsLWNvbnRyb2wubGVmdCxcclxuLmdhbGxlcnktc2xpZGVyIC5jYXJvdXNlbC1jb250cm9sLnJpZ2h0IHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LXNsaWRlciAuY2Fyb3VzZWwtY29udHJvbC5sZWZ0IHtcclxuXHRsZWZ0OiAtMjVweDtcclxufVxyXG5cclxuLmdhbGxlcnktc2xpZGVyIC5jYXJvdXNlbC1jb250cm9sLnJpZ2h0IHtcclxuXHRyaWdodDogLTI1cHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sIHtcclxuXHR3aWR0aDogMDtcclxuXHRjb2xvcjogIzIxMTgxODtcclxufVxyXG5cclxuLmNpdHktcHJvZmlsZS10YWJzIHtcclxuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNpdHktcHJvZmlsZS10YWJzIGxpIGEge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6IHZhcigtLXRpdGxlLWFjdGl2ZSk7XHJcblx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaXR5LXByb2ZpbGUtdGFicyAuYWN0aXZlIGEge1xyXG5cdGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcclxufVxyXG5cclxuLyogLmdhbGxlcnktc2xpZGVyIC5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0LFxyXG4uZ2FsbGVyeS1zbGlkZXIgLmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0LFxyXG4uZ2FsbGVyeS1zbGlkZXIgLmNhcm91c2VsLWNvbnRyb2wgLmljb24tbmV4dCxcclxuLmdhbGxlcnktc2xpZGVyIC5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXYge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufSAqL1xyXG5cclxuLnNvbHV0aW9uLWltcGxlbWVudGVkIC5uYW1lIHtcclxuXHRjb2xvcjogdmFyKC0tYm9keS1ncmV5KTtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0bGluZS1oZWlnaHQ6IDE4Ljc1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uc29sdXRpb24taW1wbGVtZW50ZWQgLnNlY3RvciB7XHJcblx0Y29sb3I6IHZhcigtLWJvZHktbGlnaHQpO1xyXG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRsaW5lLWhlaWdodDogMTZweDtcclxuXHRtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1pbXBsZW1lbnRlZCAud2Vic2l0ZSBhIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Y29sb3I6IHZhcigtLWJvZHktbGlnaHQpO1xyXG59XHJcbi5vdmVybG93LXktaGlkZGVuIHtcclxuXHRvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG4uYS1jcyB7XHJcblx0b3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcblx0b3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtY3M6Zm9jdXMsXHJcbi5hLWNzOmhvdmVyIHtcclxuXHRvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/cities/city-profile/city-profile.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/cities/city-profile/city-profile.component.ts ***!
    \***************************************************************/

  /*! exports provided: CityProfileComponent */

  /***/
  function srcAppCitiesCityProfileCityProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityProfileComponent", function () {
      return CityProfileComponent;
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


    var _city_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./city-profile.service */
    "./src/app/cities/city-profile/city-profile.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");

    let CityProfileComponent = class CityProfileComponent {
      constructor(route, _cps, toastr, router) {
        this.route = route;
        this._cps = _cps;
        this.toastr = toastr;
        this.router = router;
        this.cityData = {};
        this.cityChallenges = {};
        this.server_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url;
        this.id = this.route.snapshot.params.id;
        this.loggedInUser$.subscribe(resp => {
          this.loggedInUser = resp.LoggedInUser;
        });
      }

      ngOnInit() {
        this.getCityData();
      }

      ngOnChanges() {}

      getCityData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.cityLoading = true;
            this.challengesLoading = true;
            this.cityData = yield this._cps.getCityInformation({
              slug: {
                id: this.id
              }
            });

            if (this.cityData.data.seekers) {
              this.cityData.data.seekers.forEach(element => {
                if (element.id == this.loggedInUser.userTypeId) {
                  this.isCityAdmin = true;
                }
              });
            }

            if (this.cityData.data.mobile[0].mobile.split("-")[1]) {
              this.mobile = this.cityData.data.mobile[0].mobile;
            } else {
              this.mobile = null;
            }

            if (/^\d+$/.test(this.cityData.data.mobile[0].landline.split("-")[1]) && /^\d+$/.test(this.cityData.data.mobile[0].landline.split("-")[1])) {
              this.landline = this.cityData.data.mobile[0].landline;
            } else {
              this.landline = null;
            }

            this.cityLoading = false;
            let challengesResponse = yield this._cps.getCityChallenges({
              filter: {
                frg_smart_city_id: this.id
              }
            });
            this.cityChallenges = challengesResponse.data;
            this.challengesLoading = false;
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      editCity() {
        if (this.cityData.data.ceo_email == this.loggedInUser.email) {
          this.router.navigateByUrl("cities/".concat(this.cityData.data.id, "/edit"));
        } else {
          this.toastr.warning("", "City Admin can edit City Info");
        }
      }

    };

    CityProfileComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _city_profile_service__WEBPACK_IMPORTED_MODULE_3__["CityProfileService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserState"])], CityProfileComponent.prototype, "loggedInUser$", void 0);
    CityProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-city-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./city-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/city-profile/city-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./city-profile.component.css */
      "./src/app/cities/city-profile/city-profile.component.css")).default]
    })], CityProfileComponent);
    /***/
  },

  /***/
  "./src/app/cities/city-profile/city-profile.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/cities/city-profile/city-profile.service.ts ***!
    \*************************************************************/

  /*! exports provided: CityProfileService */

  /***/
  function srcAppCitiesCityProfileCityProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityProfileService", function () {
      return CityProfileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    let CityProfileService = class CityProfileService {
      constructor(http) {
        this.http = http;
        this.api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
      }

      getCityInformation(cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/select", cityId).toPromise();
        });
      }

      getCityChallenges(cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let response = yield this.http.post(this.api_url + "/challenges_and_smart_cities/select_mul", cityId).toPromise();
          let challengeIds = [];
          response.data.forEach(challenge => {
            challengeIds.push(challenge.frg_challenge_id);
          });
          return yield this.http.post(this.api_url + "/challenges/select_mul", {
            filter: {
              id: challengeIds
            },
            pg: {
              skip: 0,
              limit: 100
            }
          }).toPromise();
        });
      }

    };

    CityProfileService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
    }];

    CityProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], CityProfileService);
    /***/
  },

  /***/
  "./src/app/cities/discover-cities/discover-cities.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/cities/discover-cities/discover-cities.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesDiscoverCitiesDiscoverCitiesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cities-card {\r\n\tborder: 0px !important;\r\n}\r\n\r\n.cities-card-content {\r\n\tborder-bottom-left-radius: 6px;\r\n\tborder-bottom-right-radius: 6px;\r\n}\r\n\r\n.cities-pagination a.active {\r\n\tcolor: var(--blue3) !important;\r\n\tborder-color: var(--blue3) !important;\r\n\topacity: 1 !important;\r\n}\r\n\r\n.city-list-wrp {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.l-cities-card-img {\r\n\theight: 270px;\r\n\tborder-top-left-radius: 6px;\r\n\tborder-top-right-radius: 6px;\r\n\tbackground-color: #b7b7b7;\r\n\toverflow: hidden;\r\n}\r\n\r\n.search-box {\r\n\tposition: relative;\r\n\t-webkit-transition: all 0.2s ease;\r\n\ttransition: all 0.2s ease;\r\n}\r\n\r\n.search-box input {\r\n\tborder: none !important;\r\n\toutline: none !important;\r\n}\r\n\r\n.search-auto-complete-wrp {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\toverflow-y: auto;\r\n\tbackground-color: var(--white);\r\n\tborder-top: 1px solid #c3c7ce76 !important;\r\n\tz-index: 10;\r\n\tborder-radius: 0px 0px 6px 6px;\r\n\tbox-shadow: 0 4px 6px rgba(32, 33, 36, 0.28);\r\n}\r\n\r\n.search-auto-complete-wrp ul {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.search-auto-complete-wrp ul li {\r\n\tfont-size: 13px;\r\n\tcolor: #5f6368;\r\n}\r\n\r\n.search-auto-complete-wrp ul li div {\r\n\tpadding: 6px 15px;\r\n\t-webkit-transition: all 0.2s;\r\n\ttransition: all 0.2s;\r\n\tcursor: pointer;\r\n}\r\n\r\n.search-auto-complete-wrp ul li div:hover {\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL2Rpc2NvdmVyLWNpdGllcy9kaXNjb3Zlci1jaXRpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QiwrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIscUNBQXFDO0NBQ3JDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCLHlCQUF5QjtDQUN6QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsaUNBQXlCO0NBQXpCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2Qix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQiw4QkFBOEI7Q0FDOUIsMENBQTBDO0NBQzFDLFdBQVc7Q0FDWCw4QkFBOEI7Q0FDOUIsNENBQTRDO0FBQzdDOztBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztBQUNmOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLDRCQUFvQjtDQUFwQixvQkFBb0I7Q0FDcEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy9kaXNjb3Zlci1jaXRpZXMvZGlzY292ZXItY2l0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2l0aWVzLWNhcmQge1xyXG5cdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaXRpZXMtY2FyZC1jb250ZW50IHtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmNpdGllcy1wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuXHRjb2xvcjogdmFyKC0tYmx1ZTMpICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlMykgIWltcG9ydGFudDtcclxuXHRvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaXR5LWxpc3Qtd3JwIHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmwtY2l0aWVzLWNhcmQtaW1nIHtcclxuXHRoZWlnaHQ6IDI3MHB4O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNiN2I3Yjc7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBpbnB1dCB7XHJcblx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWF1dG8tY29tcGxldGUtd3JwIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNjM2M3Y2U3NiAhaW1wb3J0YW50O1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweCAwcHggNnB4IDZweDtcclxuXHRib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgzMiwgMzMsIDM2LCAwLjI4KTtcclxufVxyXG5cclxuLnNlYXJjaC1hdXRvLWNvbXBsZXRlLXdycCB1bCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLWF1dG8tY29tcGxldGUtd3JwIHVsIGxpIHtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0Y29sb3I6ICM1ZjYzNjg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYXV0by1jb21wbGV0ZS13cnAgdWwgbGkgZGl2IHtcclxuXHRwYWRkaW5nOiA2cHggMTVweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtYXV0by1jb21wbGV0ZS13cnAgdWwgbGkgZGl2OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cities/discover-cities/discover-cities.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/cities/discover-cities/discover-cities.component.ts ***!
    \*********************************************************************/

  /*! exports provided: DiscoverCitiesComponent */

  /***/
  function srcAppCitiesDiscoverCitiesDiscoverCitiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscoverCitiesComponent", function () {
      return DiscoverCitiesComponent;
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


    var _discover_cities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./discover-cities.service */
    "./src/app/cities/discover-cities/discover-cities.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");

    let DiscoverCitiesComponent = class DiscoverCitiesComponent {
      constructor(_dss, toastr) {
        this._dss = _dss;
        this.toastr = toastr;
        this.isAdmin = false;
        this.server_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server_url;
        this.allCities = [];
        this.filterData = {
          filter: {
            status: "active"
          },
          search: {
            name: {
              contains: "",
              startsWith: ""
            }
          },
          sort: [{
            name: "DESC"
          }],
          pg: {
            skip: 0,
            limit: 200
          }
        };
        this.loggedInUser$.subscribe(resp => {
          if (resp.LoggedInUser && resp.LoggedInUser.email == "admin@forge.com") {
            this.isAdmin = true;
          }
        });
        let asciCode = lodash__WEBPACK_IMPORTED_MODULE_5__["range"]("A".charCodeAt(0), "Z".charCodeAt(0) + 1);
        this.alphabetFilterItems = asciCode.map(i => String.fromCharCode(i));
      }

      ngOnInit() {
        this.selectedAlphabet = "All";
        this.getAllCities();
      }

      getAllCities() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.loading = true;
            this.allCities = yield this._dss.getAllCities(this.filterData);
            this.loading = false;
          } catch (err) {
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      filterByAlphabet(startsWith) {
        this.selectedAlphabet = startsWith;

        if (startsWith == "All") {
          this.filterData.search.name.startsWith = "";
        } else {
          this.filterData.search.name.startsWith = startsWith;
        }

        this.getAllCities();
      }

      searchCities() {
        this.autoSuggestions = null;
        this.getAllCities();
      }

      searchAutoSuggestion(keyword) {
        this.filterData.search.name.contains = keyword;
        this.searchCities();
      }

      autoComplete(keyword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (keyword.length > 3) {
            this.autoSuggestions = yield this._dss.getSearchSuggestions({
              search: {
                name: {
                  contains: keyword
                }
              }
            });
          } else {
            this.autoSuggestions = null;
          }
        });
      }

    };

    DiscoverCitiesComponent.ctorParameters = () => [{
      type: _discover_cities_service__WEBPACK_IMPORTED_MODULE_2__["DiscoverCitiesService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserState"])], DiscoverCitiesComponent.prototype, "loggedInUser$", void 0);
    DiscoverCitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-discover-cities",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./discover-cities.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/discover-cities/discover-cities.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./discover-cities.component.css */
      "./src/app/cities/discover-cities/discover-cities.component.css")).default]
    })], DiscoverCitiesComponent);
    /***/
  },

  /***/
  "./src/app/cities/discover-cities/discover-cities.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/cities/discover-cities/discover-cities.service.ts ***!
    \*******************************************************************/

  /*! exports provided: DiscoverCitiesService */

  /***/
  function srcAppCitiesDiscoverCitiesDiscoverCitiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscoverCitiesService", function () {
      return DiscoverCitiesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    let DiscoverCitiesService = class DiscoverCitiesService {
      constructor(http) {
        this.http = http;
        this.api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
      }

      getAllCities(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const limit = parseInt(query.pg.limit);
          const page = parseInt(query.pg.skip) / limit + 1;
          const dataResponse = yield this.http.post(this.api_url + "/smart_cities/select_mul", query).toPromise();
          const countResponse = yield this.http.post(this.api_url + "/smart_cities/count", query).toPromise();
          let totalResults = countResponse.data;
          let startItem = totalResults > 0 ? (page - 1) * limit + 1 : 0;
          let endItem = totalResults > 0 ? startItem - 1 + dataResponse.data.length : 0;
          let PageCount = Math.ceil(countResponse.data / limit);
          dataResponse.currently_showing = {
            from: startItem,
            to: endItem
          };
          dataResponse.total_results = totalResults;
          dataResponse.page_count = PageCount;
          return dataResponse;
        });
      }

      getSearchSuggestions(keyword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/select_mul", keyword).toPromise();
        });
      }

    };

    DiscoverCitiesService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
    }];

    DiscoverCitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], DiscoverCitiesService);
    /***/
  },

  /***/
  "./src/app/cities/edit-city/edit-city-services.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/cities/edit-city/edit-city-services.service.ts ***!
    \****************************************************************/

  /*! exports provided: EditCityServicesService */

  /***/
  function srcAppCitiesEditCityEditCityServicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCityServicesService", function () {
      return EditCityServicesService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let EditCityServicesService = class EditCityServicesService {
      constructor(http) {
        this.http = http;
        this.api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
      }

      getCityWithId(cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/select", {
            slug: {
              id: cityId
            }
          }).toPromise();
        });
      }

      updateCity(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/update", postData).toPromise();
        });
      }

      uploadAvatar(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/upload", postData).toPromise();
        });
      }

      uploadCeoAvatar(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/upload_ceo_avatar", postData).toPromise();
        });
      }

      uploadLogo(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/upload_logo", postData).toPromise();
        });
      }

      uploadMap(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/city_map", postData).toPromise();
        });
      }

      uploadGallery(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/add_to_gallery", postData).toPromise();
        });
      }

      getChallengeSectors() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/challenge_sectors/select_mul", {
            pg: {
              offset: 0,
              limit: 200
            }
          }).toPromise();
        });
      }

      getChallenges(sectorId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/challenges/select_mul", {
            filter: {
              frg_challenge_sector_id: sectorId
            },
            pg: {
              offset: 0,
              limit: 400
            }
          }).toPromise();
        });
      }

      addChallenges(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/challenges_and_smart_cities/create", data).toPromise();
        });
      }

      addChallengeSectors(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities_and_challenge_sectors/create", data).toPromise();
        });
      }

      removeFromGallery(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/remove_from_gallery", data).toPromise();
        });
      }

      getFilteredChallengeSectorSmartCities(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities_and_challenge_sectors/select_mul", postData).toPromise();
        });
      }

      deleteCityChallenge(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/challenges_and_smart_cities/delete_mul", data).toPromise();
        });
      }

      getSmartCityChallenge(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/challenges_and_smart_cities/select_mul", data).toPromise();
        });
      } // async getCityChallenges(data) {
      //   return await this.http.post(this.api_url + "/challenges/select_mul", data).toPromise();
      // }


      deleteExisitingSmartCityChallengeSectors(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log("deleting challenge sectors");
          return yield this.http.post(this.api_url + "/smart_cities_and_challenge_sectors/delete_mul", postData).toPromise();
        });
      }

    };

    EditCityServicesService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    EditCityServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], EditCityServicesService);
    /***/
  },

  /***/
  "./src/app/cities/edit-city/edit-city.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/cities/edit-city/edit-city.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesEditCityEditCityComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-city-wrp {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.section-loader {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.loader-wrp {\r\n\tdisplay: table;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.loader-inner {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.frg-flx-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.frg-flx-row .frg-flx-input-col {\r\n\tflex-basis: 88%;\r\n}\r\n\r\n.frg-flx-row .frg-flx-add-rm-row-btn {\r\n\tflex-basis: 7%;\r\n}\r\n\r\n.act-clr {\r\n\tcolor: #3b6fd4 !important;\r\n}\r\n\r\n.act-span {\r\n\tpadding: 3px 6px;\r\n\tborder: 1px solid #3b6fd4;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.add-form-wrapper {\r\n\tmax-width: 580px;\r\n\tmargin: 36px auto;\r\n}\r\n\r\n.step-wrapper {\r\n\tpadding: 36px;\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.files-upload-wrp {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n.files-upload-wrp app-citylogo-upload,\r\n.files-upload-wrp app-city-avatar-upload,\r\n.files-upload-wrp app-city-map-upload {\r\n\tflex-basis: 30%;\r\n}\r\n\r\n.back-btn-wrp {\r\n\tmargin-top: -18px;\r\n}\r\n\r\n.back-btn {\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.back-btn .disable {\r\n\topacity: 0;\r\n\tvisibility: visible;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL2VkaXQtY2l0eS9lZGl0LWNpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUE4QjtTQUE5Qiw4QkFBOEI7Q0FDOUIseUJBQW1CO1NBQW5CLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IseUJBQThCO1NBQTlCLDhCQUE4QjtBQUMvQjs7QUFFQTs7O0NBR0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlDQUF5QjtDQUF6Qix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2l0aWVzL2VkaXQtY2l0eS9lZGl0LWNpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtY2l0eS13cnAge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uc2VjdGlvbi1sb2FkZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9hZGVyLXdycCB7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9hZGVyLWlubmVyIHtcclxuXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5mcmctZmx4LXJvdyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZyZy1mbHgtcm93IC5mcmctZmx4LWlucHV0LWNvbCB7XHJcblx0ZmxleC1iYXNpczogODglO1xyXG59XHJcblxyXG4uZnJnLWZseC1yb3cgLmZyZy1mbHgtYWRkLXJtLXJvdy1idG4ge1xyXG5cdGZsZXgtYmFzaXM6IDclO1xyXG59XHJcblxyXG4uYWN0LWNsciB7XHJcblx0Y29sb3I6ICMzYjZmZDQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdC1zcGFuIHtcclxuXHRwYWRkaW5nOiAzcHggNnB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMzYjZmZDQ7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYWRkLWZvcm0td3JhcHBlciB7XHJcblx0bWF4LXdpZHRoOiA1ODBweDtcclxuXHRtYXJnaW46IDM2cHggYXV0bztcclxufVxyXG5cclxuLnN0ZXAtd3JhcHBlciB7XHJcblx0cGFkZGluZzogMzZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5maWxlcy11cGxvYWQtd3JwIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZpbGVzLXVwbG9hZC13cnAgYXBwLWNpdHlsb2dvLXVwbG9hZCxcclxuLmZpbGVzLXVwbG9hZC13cnAgYXBwLWNpdHktYXZhdGFyLXVwbG9hZCxcclxuLmZpbGVzLXVwbG9hZC13cnAgYXBwLWNpdHktbWFwLXVwbG9hZCB7XHJcblx0ZmxleC1iYXNpczogMzAlO1xyXG59XHJcblxyXG4uYmFjay1idG4td3JwIHtcclxuXHRtYXJnaW4tdG9wOiAtMThweDtcclxufVxyXG5cclxuLmJhY2stYnRuIHtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uYmFjay1idG4gLmRpc2FibGUge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/cities/edit-city/edit-city.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/cities/edit-city/edit-city.component.ts ***!
    \*********************************************************/

  /*! exports provided: EditCityComponent */

  /***/
  function srcAppCitiesEditCityEditCityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCityComponent", function () {
      return EditCityComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _edit_city_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-city-services.service */
    "./src/app/cities/edit-city/edit-city-services.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");

    let EditCityComponent = class EditCityComponent {
      constructor(route, fb, _city, toastr, router) {
        this.route = route;
        this.fb = fb;
        this._city = _city;
        this.toastr = toastr;
        this.router = router;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].server_url;
        this.loading = false;
        this.isSubmitted = {
          Step1: false,
          Step2: false
        };
        this.cityGallery = [];
        this.sectorDropdownList = [];
        this.selectedSectors = [];
        this.challengeDropdownList = [];
        this.disableChallengeList = true;
        this.solutionsImplemented = [];
        this.cityAchievements = [];
        this.selectedChallengeSectors = [];
        this.selectedChallenges = [];
        this.tobeRemovedFilePaths = [];
        this.urlPattern = new RegExp("^(http|https)://");
        this.loggedInUser$.subscribe(resp => {
          this.loggedInUser = resp.LoggedInUser;
        });
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.route.params.subscribe(params => this.id = params.id);
          this.initLoading = true;
          this.cityStep1 = false;
          this.cityStep2 = true;
          yield this.getChallengeSector();
          this.addCityStep1 = this.fb.group({
            ceoName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            cityName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            vision: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500)]],
            challengeSectors: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            challenges: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            website: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")]],
            landLineCode: [""],
            landLineNumber: [""],
            area: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            population: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            budget: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            rank: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
          this.addCityStep2 = this.fb.group({
            dataSheet: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            ig: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            yt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            fb: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            twtr: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]]
          });
          yield this.getCityWithId();
          this.initLoading = false;
        });
      }

      getCityWithId() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.cityData = yield this._city.getCityWithId(this.id);
            this.cityData.data.challenge_sectors.forEach(el => {
              this.selectedChallengeSectors.push({
                item_id: parseInt(el.id),
                item_text: el.name
              });
            });
            this.cityData.data.challenges.forEach(el => {
              this.selectedChallenges.push({
                item_id: parseInt(el.id),
                item_text: el.name
              });
            });
            let phnum;

            if (/^\d+$/.test(this.cityData.data.mobile[0].mobile.split("-")[1])) {
              phnum = this.cityData.data.mobile[0].mobile.split("-")[1];
            } else {
              phnum = null;
            }

            let lcode;
            let lnum;

            if (/^\d+$/.test(this.cityData.data.mobile[0].landline.split("-")[1]) && /^\d+$/.test(this.cityData.data.mobile[0].landline.split("-")[1])) {
              lcode = this.cityData.data.mobile[0].landline.split("-")[0];
              lnum = this.cityData.data.mobile[0].landline.split("-")[1];
            } else {
              lcode = null;
              lnum = null;
            } //  populate challenges in dropdown according to selected sectors


            if (this.cityData.data) {
              this.addCityStep1.patchValue({
                ceoName: this.cityData.data.ceo_name,
                email: this.cityData.data.ceo_email,
                cityName: this.cityData.data.name,
                vision: this.cityData.data.vision,
                challengeSectors: this.selectedChallengeSectors,
                challenges: this.selectedChallenges,
                website: this.cityData.data.website,
                mobile: phnum,
                landLineCode: lcode,
                landLineNumber: lnum,
                area: this.cityData.data.city_area,
                population: this.cityData.data.city_demographics,
                budget: this.cityData.data.budget,
                rank: this.cityData.data.score
              });
              this.addCityStep2 = this.fb.group({
                dataSheet: this.cityData.data.data_sheet,
                ig: this.cityData.data.social_media[1].instagram,
                yt: this.cityData.data.social_media[3].youtube,
                fb: this.cityData.data.social_media[0].facebook,
                twtr: this.cityData.data.social_media[2].twitter
              });
              this.implemented_solutions = this.cityData.data.implemented_solutions;

              if (this.cityData.data.ceo_email != this.loggedInUser.email) {
                this.router.navigateByUrl("cities");
                this.toastr.warning("", "Only City Admin can edit City Info");
              }
            }

            yield this.initChallengesDropdown();
            this.currentCityGallery = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this.cityData.data.gallery);
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      get addCityControlStep1() {
        return this.addCityStep1.controls;
      }

      get addCityControlStep2() {
        return this.addCityStep2.controls;
      }

      gotoStep(step) {
        switch (step) {
          case "step1":
            this.cityStep1 = false;
            this.cityStep2 = true;
            window.scroll(0, 0);
            break;

          case "step2":
            this.cityStep1 = true;
            this.cityStep2 = false;
            window.scroll(0, 0);
            break;
        }
      }

      CityStep1Submit() {
        this.isSubmitted.Step1 = true;

        if (this.addCityStep1.valid) {
          this.gotoStep("step2");
        } else {
          this.toastr.error("please provide the required values to proceed further.", "Validation Error");
        }
      }

      updateSmartCity() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.addCityStep1.valid && this.addCityStep2.valid) {
            this.loading = true;
            let cityPostData = {
              name: this.addCityStep1.value.cityName,
              ceo_name: this.addCityStep1.value.ceoName,
              ceo_email: this.addCityStep1.value.email,
              vision: this.addCityStep1.value.vision,
              score: this.addCityStep1.value.rank,
              budget: this.addCityStep1.value.budget,
              city_area: this.addCityStep1.value.area,
              city_demographics: this.addCityStep1.value.population,
              website: this.addCityStep1.value.website,
              mobile: [{
                mobile: "+91-" + this.addCityStep1.value.mobile,
                landline: this.addCityStep1.value.landLineNumber == "" ? "" : "".concat(this.addCityStep1.value.landLineCode, "-").concat(this.addCityStep1.value.landLineNumber)
              }],
              data_sheet: this.addCityStep2.value.dataSheet,
              implemented_solutions: this.solutionsImplemented,
              achievements: this.cityAchievements,
              social_media: [{
                facebook: this.addCityStep2.value.fb
              }, {
                instagram: this.addCityStep2.value.ig
              }, {
                twitter: this.addCityStep2.value.twtr
              }, {
                youtube: this.addCityStep2.value.yt
              }]
            };

            try {
              let updatedSmartCity = yield this._city.updateCity({
                slug: {
                  id: this.id
                },
                data: cityPostData
              });
              yield Promise.all([this.saveAvatar(updatedSmartCity.data.id), this.saveLogo(updatedSmartCity.data.id), this.saveMap(updatedSmartCity.data.id), this.saveCEOAvatar(updatedSmartCity.data.id), yield this.associateChallengeSectors(updatedSmartCity.data.id), yield this.associateChallenges(updatedSmartCity.data.id), yield this.filesRemovedFromGallery(updatedSmartCity.data.id), yield this.saveGallery(updatedSmartCity.data.id)]);
              this.loading = false;
              this.toastr.success("", "Smart City updated successfully");
              this.router.navigate(["/cities/".concat(updatedSmartCity.data.id)]);
            } catch (err) {
              console.log(err);
              this.toastr.error("", "Something went wrong please try again");
            }
          } else {
            this.toastr.error("please provide the required values to proceed further.", "Validation Error");
          }
        });
      }

      getChallengeSector() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.challengeSector = yield this._city.getChallengeSectors();
            this.challengeSector.data.forEach(element => {
              this.sectorDropdownList.push({
                item_id: parseInt(element.id),
                item_text: element.name
              });
            });
            this.dropdownSettings = {
              singleSelection: false,
              idField: "item_id",
              textField: "item_text",
              enableCheckAll: false,
              allowSearchFilter: true
            };
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      getChallengeBasedOnSector() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          // manually setting the touched event since plugin doesnt work properly
          this.addCityStep1.controls.challengeSectors.markAsTouched();
          this.selectedChallenges = this.addCityStep1.value.challenges;
          let idArr = [];
          this.challengeDropdownList = [];
          this.addCityStep1.value.challengeSectors.forEach(element => {
            idArr.push(element.item_id);
          });

          try {
            this.toastr.info("Fetching challenges based on sectors", "Info");
            this.challengeBasedOnSector = yield this._city.getChallenges(idArr);
            this.challengeBasedOnSector.data.forEach(element => {
              this.challengeDropdownList = lodash__WEBPACK_IMPORTED_MODULE_5__["unionBy"](this.challengeDropdownList, [{
                item_id: parseInt(element.id),
                item_text: element.name
              }], "item_id");
            });
            this.selectedChallenges = lodash__WEBPACK_IMPORTED_MODULE_5__["intersectionBy"](this.selectedChallenges, this.challengeDropdownList, "item_id");

            if (lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"](this.selectedChallenges)) {
              this.addCityStep1.patchValue({
                challenges: this.selectedChallenges
              });
            } else {
              this.addCityStep1.patchValue({
                challenges: [this.selectedChallenges]
              });
            } // manually setting the touched event since plugin doesnt work properly


            this.addCityStep1.controls.challenges.markAsTouched(); // console.log("selected values should be", this.addCityStep1.value.challenges);
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      handleChallengeChange(event) {
        // manually setting the touched event since plugin doesnt work properly
        this.addCityStep1.controls.challenges.markAsTouched();
      }

      initChallengesDropdown() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.disableChallengeList = true;
          let idArr = [];
          this.challengeDropdownList = []; // console.log(this.addCityStep1.value.challengeSectors);

          this.addCityStep1.value.challengeSectors.forEach(element => {
            idArr.push(element.item_id);
          });

          try {
            this.challengeBasedOnSector = yield this._city.getChallenges(idArr);
            this.challengeBasedOnSector.data.forEach(element => {
              this.challengeDropdownList.push({
                item_id: parseInt(element.id),
                item_text: element.name
              });
            });
            this.disableChallengeList = false;
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      associateChallenges(cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.addCityStep1.controls.challenges.touched) {
            // removing all challenges which are previously set.
            let filterPreviousAssociationsByCityId = yield this._city.getSmartCityChallenge({
              filter: {
                frg_smart_city_id: cityId
              }
            });
            let idsToBeDeleted = filterPreviousAssociationsByCityId.data.map(e => e.id);
            yield this._city.deleteCityChallenge({
              slug: {
                ids: idsToBeDeleted
              }
            }); // newly creating the association

            if (this.addCityStep1.value.challenges.length > 0) {
              this.addCityStep1.value.challenges.forEach(element => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this._city.addChallenges({
                  data: {
                    frg_challenge_id: element.item_id,
                    frg_smart_city_id: cityId
                  }
                });
              }));
            }
          }
        });
      }

      associateChallengeSectors(cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.addCityStep1.controls.challengeSectors.touched) {
            // removing all sectors which are previously set.
            let filterPreviousAssociationsByCityId = yield this._city.getFilteredChallengeSectorSmartCities({
              filter: {
                frg_smart_city_id: cityId
              }
            });
            let idsToBeDeleted = filterPreviousAssociationsByCityId.data.map(e => e.id);
            yield this._city.deleteExisitingSmartCityChallengeSectors({
              slug: {
                ids: idsToBeDeleted
              }
            }); // newly creating the association

            if (this.addCityStep1.value.challengeSectors.length > 0) {
              this.addCityStep1.value.challengeSectors.forEach(element => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this._city.addChallengeSectors({
                  data: {
                    frg_challenge_sector_id: element.item_id,
                    frg_smart_city_id: cityId
                  }
                });
              }));
            }
          }
        });
      }

      filesRemovedFromGallery(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.tobeRemovedFilePaths.length > 0) {
            yield this._city.removeFromGallery({
              slug: {
                id: id
              },
              data: {
                remove_paths: this.tobeRemovedFilePaths
              }
            });
          }
        });
      }

      saveAvatar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.avatar) {
            let formData = new FormData();
            formData.append("slug", id);
            formData.append("avatar", this.avatar, this.avatar.name);
            yield this._city.uploadAvatar(formData);
          }
        });
      }

      saveCEOAvatar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.CEOAvatar) {
            let formData = new FormData();
            formData.append("slug", id);
            formData.append("ceo_avatar", this.CEOAvatar, this.CEOAvatar.name);
            yield this._city.uploadCeoAvatar(formData);
          }
        });
      }

      saveLogo(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.logo) {
            let formData = new FormData();
            formData.append("slug", id);
            formData.append("city_logo", this.logo, this.logo.name);
            yield this._city.uploadLogo(formData);
          }
        });
      }

      saveMap(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.map) {
            let formData = new FormData();
            formData.append("slug", id);
            formData.append("city_map", this.map, this.map.name);
            yield this._city.uploadMap(formData);
          }
        });
      }

      saveGallery(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.cityGallery) {
            let formData = new FormData();
            formData.append("slug", id);
            this.cityGallery.forEach(file => {
              formData.append("gallery", file);
            });
            yield this._city.uploadGallery(formData);
          }
        });
      }

      handleCEOAvatar(file) {
        this.CEOAvatar = file;
      }

      handleSaveLogo(file) {
        this.logo = file;
      }

      handleSaveCityImage(file) {
        this.avatar = file;
      }

      handleSaveMap(file) {
        this.map = file;
      }

      handleSaveGallery(files) {
        let currentGalleryBeforeChange = this.cityData.data.gallery; // splitting the array with

        let newFiles = files.filter(e => {
          if (typeof e == "object") {
            return e;
          }
        });
        let updatedFilePaths = files.filter(e => {
          if (typeof e == "string") {
            return e;
          }
        });
        this.tobeRemovedFilePaths = currentGalleryBeforeChange.filter(x => !updatedFilePaths.includes(x));
        this.cityGallery = newFiles;
      }

      handleRemovedLogo(file) {
        if (typeof file == "object") this.logo = null;
      }

      handleRemoveCityImage(file) {
        if (typeof file == "object") this.avatar = null;
      }

      handleRemoveMap(file) {
        if (typeof file == "object") this.map = null;
      }

      handleSolutionChanges(solutionData) {
        this.solutionsImplemented = solutionData;
      }

      handleAchievementChanges(achievementData) {
        this.cityAchievements = achievementData;
      }

    };

    EditCityComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _edit_city_services_service__WEBPACK_IMPORTED_MODULE_6__["EditCityServicesService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserState"])], EditCityComponent.prototype, "loggedInUser$", void 0);
    EditCityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-edit-city",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-city.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/edit-city/edit-city.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-city.component.css */
      "./src/app/cities/edit-city/edit-city.component.css")).default]
    })], EditCityComponent);
    /***/
  },

  /***/
  "./src/app/cities/widgets/add-achievements/achievement-item/achievement-item.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/cities/widgets/add-achievements/achievement-item/achievement-item.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesWidgetsAddAchievementsAchievementItemAchievementItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".achievementitem-card {\r\n\tposition: relative;\r\n\tpadding: 14px 36px 14px 18px;\r\n\tborder-radius: 4px;\r\n\tborder: 1px solid #dedede;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.achievementitem-card .title {\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tcolor: var(--body-grey);\r\n}\r\n\r\n.achievementitem-card .monthyear {\r\n\tfont-size: 10px;\r\n\tcolor: var(--lable-grey);\r\n}\r\n\r\n.achievementitem-card .description {\r\n\tfont-size: 10px;\r\n\tline-height: 12px;\r\n\tcolor: var(--lable-grey);\r\n}\r\n\r\n.achievementitem-card .menu {\r\n\tposition: absolute;\r\n\ttop: 8px;\r\n\tright: 8px;\r\n}\r\n\r\n.achievementitem-card .menu button {\r\n\tborder: 2px solid #dedede !important;\r\n\tborder-radius: 15px;\r\n\tbackground: var(--white);\r\n\tpadding: 2px 5px;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.achievementitem-card .menu .dropdown-menu {\r\n\tright: 0 !important;\r\n\tleft: unset !important;\r\n\tborder: none !important;\r\n\tbox-shadow: 0px 2.38049px 11.9024px rgba(0, 0, 0, 0.1) !important;\r\n}\r\n\r\n.dropdown-menu span {\r\n\tdisplay: block;\r\n\tpadding: 8px 10px;\r\n\tfont-size: 10px;\r\n\tline-height: 10px;\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\tcursor: pointer;\r\n}\r\n\r\n.dropdown-menu span:hover {\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n.edit-achievements-modal .modal-dialog {\r\n\twidth: 100%;\r\n\tmax-width: 580px;\r\n}\r\n\r\n.edit-achievements-modal .modal-content {\r\n\tbox-shadow: none !important;\r\n}\r\n\r\n.edit-achievements-modal .modal-body {\r\n\tpadding: 18px 36px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL3dpZGdldHMvYWRkLWFjaGlldmVtZW50cy9hY2hpZXZlbWVudC1pdGVtL2FjaGlldmVtZW50LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQiw0QkFBNEI7Q0FDNUIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGVBQWU7Q0FDZix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsVUFBVTtBQUNYOztBQUVBO0NBQ0Msb0NBQW9DO0NBQ3BDLG1CQUFtQjtDQUNuQix3QkFBd0I7Q0FDeEIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixpRUFBaUU7QUFDbEU7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsNEJBQW9CO0NBQXBCLG9CQUFvQjtDQUNwQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy93aWRnZXRzL2FkZC1hY2hpZXZlbWVudHMvYWNoaWV2ZW1lbnQtaXRlbS9hY2hpZXZlbWVudC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNoaWV2ZW1lbnRpdGVtLWNhcmQge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRwYWRkaW5nOiAxNHB4IDM2cHggMTRweCAxOHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5hY2hpZXZlbWVudGl0ZW0tY2FyZCAudGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGNvbG9yOiB2YXIoLS1ib2R5LWdyZXkpO1xyXG59XHJcblxyXG4uYWNoaWV2ZW1lbnRpdGVtLWNhcmQgLm1vbnRoeWVhciB7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdGNvbG9yOiB2YXIoLS1sYWJsZS1ncmV5KTtcclxufVxyXG5cclxuLmFjaGlldmVtZW50aXRlbS1jYXJkIC5kZXNjcmlwdGlvbiB7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG5cdGNvbG9yOiB2YXIoLS1sYWJsZS1ncmV5KTtcclxufVxyXG5cclxuLmFjaGlldmVtZW50aXRlbS1jYXJkIC5tZW51IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA4cHg7XHJcblx0cmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmFjaGlldmVtZW50aXRlbS1jYXJkIC5tZW51IGJ1dHRvbiB7XHJcblx0Ym9yZGVyOiAycHggc29saWQgI2RlZGVkZSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cdHBhZGRpbmc6IDJweCA1cHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYWNoaWV2ZW1lbnRpdGVtLWNhcmQgLm1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG5cdHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0bGVmdDogdW5zZXQgIWltcG9ydGFudDtcclxuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuXHRib3gtc2hhZG93OiAwcHggMi4zODA0OXB4IDExLjkwMjRweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgc3BhbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogOHB4IDEwcHg7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgc3Bhbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmVkaXQtYWNoaWV2ZW1lbnRzLW1vZGFsIC5tb2RhbC1kaWFsb2cge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1heC13aWR0aDogNTgwcHg7XHJcbn1cclxuXHJcbi5lZGl0LWFjaGlldmVtZW50cy1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWRpdC1hY2hpZXZlbWVudHMtbW9kYWwgLm1vZGFsLWJvZHkge1xyXG5cdHBhZGRpbmc6IDE4cHggMzZweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/cities/widgets/add-achievements/achievement-item/achievement-item.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/cities/widgets/add-achievements/achievement-item/achievement-item.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: AchievementItemComponent */

  /***/
  function srcAppCitiesWidgetsAddAchievementsAchievementItemAchievementItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AchievementItemComponent", function () {
      return AchievementItemComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);

    let AchievementItemComponent = class AchievementItemComponent {
      constructor(toastr, router, fb) {
        this.toastr = toastr;
        this.router = router;
        this.fb = fb;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.yearArr = lodash__WEBPACK_IMPORTED_MODULE_5__["range"](1950, new Date().getFullYear() + 1);
        this.monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      }

      ngOnInit() {
        this.editAchievementsForm = this.fb.group({
          month: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          year: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80)]],
          description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]]
        });
        this.patchEditForm();
      }

      get editAchievementFormContorl() {
        return this.editAchievementsForm.controls;
      }

      patchEditForm() {
        this.editAchievementsForm.patchValue({
          month: this.achievementData.month,
          year: this.achievementData.year,
          title: this.achievementData.title,
          description: this.achievementData.description
        });
      }

      editAchievement() {
        this.isSubmitted = true;

        if (this.editAchievementsForm.valid) {
          this.isSubmitted = false;
          this.onEdit.emit({
            data: this.editAchievementsForm.value,
            index: this.id
          });
          document.getElementById("editachievements".concat(this.id)).click();
        } else {
          // console.log("add achivement item");
          this.toastr.error("Please provide the required values to proceed further", "Validation Error");
        }
      }

      emitDeleteIndex() {
        this.onDelete.emit(this.id);
      }

    };

    AchievementItemComponent.ctorParameters = () => [{
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AchievementItemComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AchievementItemComponent.prototype, "achievementData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AchievementItemComponent.prototype, "onDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AchievementItemComponent.prototype, "onEdit", void 0);
    AchievementItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-achievement-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./achievement-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/add-achievements/achievement-item/achievement-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./achievement-item.component.css */
      "./src/app/cities/widgets/add-achievements/achievement-item/achievement-item.component.css")).default]
    })], AchievementItemComponent);
    /***/
  },

  /***/
  "./src/app/cities/widgets/add-achievements/add-achievements.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/cities/widgets/add-achievements/add-achievements.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesWidgetsAddAchievementsAddAchievementsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-achievements.btn {\r\n\tmargin-bottom: 15px;\r\n\tbackground-color: var(--white);\r\n\tcolor: var(--primary-green);\r\n\tborder: 1px solid #dedede !important;\r\n\twidth: 100%;\r\n\tfont-size: 16px;\r\n\tpadding: 8px 10px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.add-achievements-modal .modal-dialog {\r\n\twidth: 100%;\r\n\tmax-width: 580px;\r\n}\r\n\r\n.add-achievements-modal .modal-content {\r\n\tbox-shadow: none !important;\r\n}\r\n\r\n.add-achievements-modal .modal-body {\r\n\tpadding: 18px 36px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL3dpZGdldHMvYWRkLWFjaGlldmVtZW50cy9hZGQtYWNoaWV2ZW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQixvQ0FBb0M7Q0FDcEMsV0FBVztDQUNYLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy93aWRnZXRzL2FkZC1hY2hpZXZlbWVudHMvYWRkLWFjaGlldmVtZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1hY2hpZXZlbWVudHMuYnRuIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRwYWRkaW5nOiA4cHggMTBweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYWRkLWFjaGlldmVtZW50cy1tb2RhbCAubW9kYWwtZGlhbG9nIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXgtd2lkdGg6IDU4MHB4O1xyXG59XHJcblxyXG4uYWRkLWFjaGlldmVtZW50cy1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRkLWFjaGlldmVtZW50cy1tb2RhbCAubW9kYWwtYm9keSB7XHJcblx0cGFkZGluZzogMThweCAzNnB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cities/widgets/add-achievements/add-achievements.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/cities/widgets/add-achievements/add-achievements.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AddAchievementsComponent */

  /***/
  function srcAppCitiesWidgetsAddAchievementsAddAchievementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAchievementsComponent", function () {
      return AddAchievementsComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);

    let AddAchievementsComponent = class AddAchievementsComponent {
      constructor(toastr, router, fb) {
        this.toastr = toastr;
        this.router = router;
        this.fb = fb;
        this.onAchievementChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.yearArr = lodash__WEBPACK_IMPORTED_MODULE_5__["range"](1950, new Date().getFullYear() + 1);
        this.monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.achievementsArr = [];
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.addAchievementsForm = this.fb.group({
            month: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            year: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80)]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]]
          });

          if (this.achievements) {
            this.achievementsArr = this.achievements; // console.log(this.achievementsArr);

            this.onAchievementChange.emit(this.achievementsArr);
          }
        });
      }

      get addAchievementFormContorl() {
        return this.addAchievementsForm.controls;
      }

      createAchievement() {
        this.isSubmitted = true;

        if (this.addAchievementsForm.valid) {
          this.achievementsArr.push(this.addAchievementsForm.value);
          this.onAchievementChange.emit(this.achievementsArr);
          this.isSubmitted = false;
          this.addAchievementsForm.reset();
          document.getElementById("addachievements").click();
        } else {
          // console.log("add achivement");
          this.toastr.error("Please provide the required values to proceed further", "Validation Error");
        }
      }

      handleEditAchievement(editData) {
        let editIndex = editData.index;
        let editArr = this.achievementsArr;

        if (~editIndex) {
          editArr[editIndex] = editData.data;
          this.achievementsArr = editArr;
          this.onAchievementChange.emit(this.achievementsArr);
        }
      }

      handleDeleteAchievement(deleteIndex) {
        if (~deleteIndex) {
          this.achievementsArr.splice(deleteIndex, 1);
          this.onAchievementChange.emit(this.achievementsArr);
        }
      }

    };

    AddAchievementsComponent.ctorParameters = () => [{
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AddAchievementsComponent.prototype, "achievements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AddAchievementsComponent.prototype, "onAchievementChange", void 0);
    AddAchievementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-add-achievements",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-achievements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/add-achievements/add-achievements.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-achievements.component.css */
      "./src/app/cities/widgets/add-achievements/add-achievements.component.css")).default]
    })], AddAchievementsComponent);
    /***/
  },

  /***/
  "./src/app/cities/widgets/add-solutions/add-solution-widget.service.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/cities/widgets/add-solutions/add-solution-widget.service.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddSolutionWidgetService */

  /***/
  function srcAppCitiesWidgetsAddSolutionsAddSolutionWidgetServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSolutionWidgetService", function () {
      return AddSolutionWidgetService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    let AddSolutionWidgetService = class AddSolutionWidgetService {
      constructor(http) {
        this.http = http;
        this.api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
      }

      getChallengeSectors() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/challenge_sectors/select_mul", {
            pg: {
              offset: 0,
              limit: 200
            }
          }).toPromise();
        });
      }

    };

    AddSolutionWidgetService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
    }];

    AddSolutionWidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], AddSolutionWidgetService);
    /***/
  },

  /***/
  "./src/app/cities/widgets/add-solutions/add-solutions.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/cities/widgets/add-solutions/add-solutions.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesWidgetsAddSolutionsAddSolutionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-solution.btn {\r\n\tmargin-bottom: 15px;\r\n\tbackground-color: var(--white);\r\n\tcolor: var(--primary-green);\r\n\tborder: 1px solid #dedede !important;\r\n\twidth: 100%;\r\n\tfont-size: 16px;\r\n\tpadding: 8px 10px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.add-solution-modal .modal-dialog {\r\n\twidth: 100%;\r\n\tmax-width: 580px;\r\n}\r\n\r\n.add-solution-modal .modal-content {\r\n\tbox-shadow: none !important;\r\n}\r\n\r\n.add-solution-modal .modal-body {\r\n\tpadding: 18px 36px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL3dpZGdldHMvYWRkLXNvbHV0aW9ucy9hZGQtc29sdXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQixvQ0FBb0M7Q0FDcEMsV0FBVztDQUNYLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy93aWRnZXRzL2FkZC1zb2x1dGlvbnMvYWRkLXNvbHV0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1zb2x1dGlvbi5idG4ge1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdHBhZGRpbmc6IDhweCAxMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5hZGQtc29sdXRpb24tbW9kYWwgLm1vZGFsLWRpYWxvZyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWF4LXdpZHRoOiA1ODBweDtcclxufVxyXG5cclxuLmFkZC1zb2x1dGlvbi1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRkLXNvbHV0aW9uLW1vZGFsIC5tb2RhbC1ib2R5IHtcclxuXHRwYWRkaW5nOiAxOHB4IDM2cHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/cities/widgets/add-solutions/add-solutions.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/cities/widgets/add-solutions/add-solutions.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AddSolutionsComponent */

  /***/
  function srcAppCitiesWidgetsAddSolutionsAddSolutionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSolutionsComponent", function () {
      return AddSolutionsComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _add_solution_widget_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-solution-widget.service */
    "./src/app/cities/widgets/add-solutions/add-solution-widget.service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);

    let AddSolutionsComponent = class AddSolutionsComponent {
      constructor(toastr, router, _ws, fb) {
        this.toastr = toastr;
        this.router = router;
        this._ws = _ws;
        this.fb = fb;
        this.onSolutionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.solutionsArr = [];
        this.urlPattern = new RegExp("^(http|https)://");
        this.addSolutionForm = this.fb.group({
          challengeSector: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          challenge: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          link: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.urlPattern)]],
          description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(800)]]
        });
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.fetchChallengeSectors();

          if (this.solutionsImplemented) {
            this.solutionsArr = this.solutionsImplemented;
            this.onSolutionChange.emit(this.solutionsArr);
          }
        });
      }

      get addSolutionFormControl() {
        return this.addSolutionForm.controls;
      }

      fetchChallengeSectors() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.loading = true;
            this.challengeSector = yield this._ws.getChallengeSectors();
            this.loading = false;
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      getChallengeBasedOnSector(event) {
        let challengeName = event.target.value;

        if (challengeName) {
          let sectors = this.challengeSector.data;
          let challenges = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](sectors, sector => {
            if (sector.name == challengeName) return sector.challenges;
          });
          this.challengeBasedOnSector = challenges.challenges;
          this.isChallengeLoaded = true;
        } else {
          this.challengeBasedOnSector = null;
        }
      }

      insertSolutions() {
        this.isSubmitted = true;

        if (this.addSolutionForm.valid) {
          this.solutionsArr.push(this.addSolutionForm.value);
          this.isSubmitted = false;
          this.isChallengeLoaded = false;
          this.addSolutionForm.reset();
          this.onSolutionChange.emit(this.solutionsArr);
          document.getElementById("addSolutions").click();
        } else {
          this.toastr.error("Please provide the required values to proceed further", "Validation Error");
        }
      }

      handleItemEdit(editedData) {
        let editIndex = editedData.index;
        let editArr = this.solutionsArr;

        if (~editIndex) {
          editArr[editIndex] = editedData.data;
          this.solutionsArr = editArr;
          this.onSolutionChange.emit(this.solutionsArr);
        }
      }

      handleItemDelete(index) {
        if (~index) {
          this.solutionsArr.splice(index, 1);
          this.onSolutionChange.emit(this.solutionsArr);
        }
      }

    };

    AddSolutionsComponent.ctorParameters = () => [{
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _add_solution_widget_service__WEBPACK_IMPORTED_MODULE_5__["AddSolutionWidgetService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AddSolutionsComponent.prototype, "solutionsImplemented", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AddSolutionsComponent.prototype, "onSolutionChange", void 0);
    AddSolutionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-add-solutions",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-solutions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/add-solutions/add-solutions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-solutions.component.css */
      "./src/app/cities/widgets/add-solutions/add-solutions.component.css")).default]
    })], AddSolutionsComponent);
    /***/
  },

  /***/
  "./src/app/cities/widgets/add-solutions/solution-item/solution-item.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/cities/widgets/add-solutions/solution-item/solution-item.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesWidgetsAddSolutionsSolutionItemSolutionItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".solutionitem-card {\r\n  position: relative;\r\n  padding: 14px 36px 14px 18px;\r\n  border-radius: 4px;\r\n  border: 1px solid #dedede;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.solutionitem-card .title {\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  color: var(--body-grey);\r\n}\r\n\r\n.solutionitem-card .sector {\r\n  font-size: 10px;\r\n  color: var(--lable-grey);\r\n}\r\n\r\n.solutionitem-card .description {\r\n  font-size: 10px;\r\n  line-height: 12px;\r\n  color: var(--lable-grey);\r\n}\r\n\r\n.solutionitem-card .menu {\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 8px;\r\n}\r\n\r\n.solutionitem-card .menu button {\r\n  border: 2px solid #dedede !important;\r\n  border-radius: 15px;\r\n  background: var(--white);\r\n  padding: 2px 5px;\r\n  font-size: 14px;\r\n}\r\n\r\n.solutionitem-card .menu .dropdown-menu {\r\n  right: 0 !important;\r\n  left: unset !important;\r\n  border: none !important;\r\n  box-shadow: 0px 2.38049px 11.9024px rgba(0, 0, 0, 0.1) !important;\r\n}\r\n\r\n.dropdown-menu span {\r\n  display: block;\r\n  padding: 8px 10px;\r\n  font-size: 10px;\r\n  line-height: 10px;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown-menu span:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.edit-solution-modal .modal-dialog {\r\n  width: 100%;\r\n  max-width: 580px;\r\n}\r\n\r\n.edit-solution-modal .modal-content {\r\n  box-shadow: none !important;\r\n}\r\n\r\n.edit-solution-modal .modal-title {\r\n  outline: none;\r\n}\r\n\r\n.edit-solution-modal .modal-body {\r\n  padding: 18px 36px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL3dpZGdldHMvYWRkLXNvbHV0aW9ucy9zb2x1dGlvbi1pdGVtL3NvbHV0aW9uLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy93aWRnZXRzL2FkZC1zb2x1dGlvbnMvc29sdXRpb24taXRlbS9zb2x1dGlvbi1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29sdXRpb25pdGVtLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAxNHB4IDM2cHggMTRweCAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5zb2x1dGlvbml0ZW0tY2FyZCAudGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWdyZXkpO1xyXG59XHJcblxyXG4uc29sdXRpb25pdGVtLWNhcmQgLnNlY3RvciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1sYWJsZS1ncmV5KTtcclxufVxyXG5cclxuLnNvbHV0aW9uaXRlbS1jYXJkIC5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1sYWJsZS1ncmV5KTtcclxufVxyXG5cclxuLnNvbHV0aW9uaXRlbS1jYXJkIC5tZW51IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4cHg7XHJcbiAgcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnNvbHV0aW9uaXRlbS1jYXJkIC5tZW51IGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc29sdXRpb25pdGVtLWNhcmQgLm1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogdW5zZXQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwcHggMi4zODA0OXB4IDExLjkwMjRweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgc3Bhbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmVkaXQtc29sdXRpb24tbW9kYWwgLm1vZGFsLWRpYWxvZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1ODBweDtcclxufVxyXG5cclxuLmVkaXQtc29sdXRpb24tbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVkaXQtc29sdXRpb24tbW9kYWwgLm1vZGFsLXRpdGxlIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZWRpdC1zb2x1dGlvbi1tb2RhbCAubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMThweCAzNnB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cities/widgets/add-solutions/solution-item/solution-item.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/cities/widgets/add-solutions/solution-item/solution-item.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: SolutionItemComponent */

  /***/
  function srcAppCitiesWidgetsAddSolutionsSolutionItemSolutionItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolutionItemComponent", function () {
      return SolutionItemComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);

    let SolutionItemComponent = class SolutionItemComponent {
      constructor(toastr, router, fb) {
        this.toastr = toastr;
        this.router = router;
        this.fb = fb;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.urlPattern = new RegExp("^(http|https)://");
      }

      ngOnInit() {
        this.editSolutionForm = this.fb.group({
          challengeSector: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          challenge: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          link: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.urlPattern)]],
          description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(800)]]
        });
        this.patchValuesOfEditForm();
      }

      patchValuesOfEditForm() {
        let sectors = this.challengeSector.data;
        let selectedSectorName = this.solutionData.challengeSector;
        let challenges = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](sectors, sector => {
          if (sector.name == selectedSectorName) return sector.challenges;
        });
        this.challengeBasedOnSector = challenges.challenges;
        this.isChallengeLoaded = true;
        this.editSolutionForm.patchValue({
          challengeSector: this.solutionData.challengeSector,
          challenge: this.solutionData.challenge,
          link: this.solutionData.link,
          description: this.solutionData.description
        });
      }

      get editSolutionFormControl() {
        return this.editSolutionForm.controls;
      }

      getChallengeBasedOnSector(event) {
        let selectedSectorName = event.target.value;

        if (selectedSectorName) {
          let sectors = this.challengeSector.data;
          let challenges = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](sectors, sector => {
            if (sector.name == selectedSectorName) return sector.challenges;
          });
          this.challengeBasedOnSector = challenges.challenges;
          this.isChallengeLoaded = true;
        } else {
          this.challengeBasedOnSector = null;
        }
      }

      editSolution() {
        this.isSubmitted = true;

        if (this.editSolutionForm.valid) {
          this.isSubmitted = false;
          this.onEdit.emit({
            data: this.editSolutionForm.value,
            index: this.removeIndex
          });
          document.getElementById("editSolutions".concat(this.id)).click();
        } else {
          this.toastr.error("Please provide the required values to proceed further", "Validation Error");
        }
      }

      emitDeleteIndex() {
        this.onDelete.emit(this.removeIndex);
      }

    };

    SolutionItemComponent.ctorParameters = () => [{
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SolutionItemComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SolutionItemComponent.prototype, "solutionData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SolutionItemComponent.prototype, "removeIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SolutionItemComponent.prototype, "challengeSector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SolutionItemComponent.prototype, "onDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SolutionItemComponent.prototype, "onEdit", void 0);
    SolutionItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-solution-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./solution-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/add-solutions/solution-item/solution-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./solution-item.component.css */
      "./src/app/cities/widgets/add-solutions/solution-item/solution-item.component.css")).default]
    })], SolutionItemComponent);
    /***/
  },

  /***/
  "./src/app/cities/widgets/city-avatar-upload/city-avatar-upload.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/cities/widgets/city-avatar-upload/city-avatar-upload.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesWidgetsCityAvatarUploadCityAvatarUploadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".uploader-wrp {\r\n\tmargin-top: 4px;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 4px;\r\n\toverflow: hidden;\r\n\tpadding: 12px;\r\n}\r\n\r\n.add-image {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\theight: 125px;\r\n}\r\n\r\n.add-image i {\r\n\tcursor: pointer;\r\n\tcolor: var(--primary-green);\r\n}\r\n\r\n.preview-image {\r\n\tposition: relative;\r\n}\r\n\r\n.preview-image img {\r\n\theight: 125px;\r\n\t-o-object-fit: cover;\r\n\t   object-fit: cover;\r\n}\r\n\r\n.preview-image .remove-img {\r\n\tpadding: 2px 7px;\r\n\tbackground-color: var(--white);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\ttop: -10px;\r\n\tright: -10px;\r\n\tfont-size: 12px;\r\n\tborder-radius: 16px;\r\n\tcolor: #f8483d;\r\n\tcursor: pointer;\r\n\tvisibility: hidden;\r\n\topacity: 0;\r\n\tz-index: 10;\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\tborder: 1px solid #dedede;\r\n\tbox-shadow: 0px 4px 25px rgba(172, 177, 193, 0.4);\r\n}\r\n\r\n.preview-image:hover .remove-img {\r\n\tvisibility: visible;\r\n\topacity: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL3dpZGdldHMvY2l0eS1hdmF0YXItdXBsb2FkL2NpdHktYXZhdGFyLXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHdCQUF1QjtTQUF2Qix1QkFBdUI7Q0FDdkIseUJBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLG9CQUFpQjtJQUFqQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsOEJBQThCO0NBQzlCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7Q0FDWixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsNEJBQW9CO0NBQXBCLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsaURBQWlEO0FBQ2xEOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy93aWRnZXRzL2NpdHktYXZhdGFyLXVwbG9hZC9jaXR5LWF2YXRhci11cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRlci13cnAge1xyXG5cdG1hcmdpbi10b3A6IDRweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5hZGQtaW1hZ2Uge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDEyNXB4O1xyXG59XHJcblxyXG4uYWRkLWltYWdlIGkge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWltYWdlIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWltYWdlIGltZyB7XHJcblx0aGVpZ2h0OiAxMjVweDtcclxuXHRvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnByZXZpZXctaW1hZ2UgLnJlbW92ZS1pbWcge1xyXG5cdHBhZGRpbmc6IDJweCA3cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMTBweDtcclxuXHRyaWdodDogLTEwcHg7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblx0Y29sb3I6ICNmODQ4M2Q7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNoYWRvdzogMHB4IDRweCAyNXB4IHJnYmEoMTcyLCAxNzcsIDE5MywgMC40KTtcclxufVxyXG5cclxuLnByZXZpZXctaW1hZ2U6aG92ZXIgLnJlbW92ZS1pbWcge1xyXG5cdHZpc2liaWxpdHk6IHZpc2libGU7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/cities/widgets/city-avatar-upload/city-avatar-upload.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/cities/widgets/city-avatar-upload/city-avatar-upload.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: CityAvatarUploadComponent */

  /***/
  function srcAppCitiesWidgetsCityAvatarUploadCityAvatarUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityAvatarUploadComponent", function () {
      return CityAvatarUploadComponent;
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


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    let CityAvatarUploadComponent = class CityAvatarUploadComponent {
      constructor() {
        this.onSaveCityImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemoveCityImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cityavatarChangedEvent = "";
        this.croppedCityAvatar = "";
        this.cityavatarLoaded = false;
        this.cityavatarSaved = false;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server_url;
      }

      ngOnInit() {// console.log(this.serverUrl);
      }

      cityavatarChangeEvent(event) {
        this.cityavatarChangedEvent = event;
      }

      cityavatarCropped(event) {
        this.croppedCityAvatar = event.base64;
      }

      cityavatarLoadedEvent() {
        this.cityavatarLoaded = true;
      }

      saveCropedCityAvatar() {
        const fileBeforeCrop = this.cityavatarChangedEvent.target.files[0];
        this.Src = this.croppedCityAvatar;
        this.onSaveCityImage.emit(new File([Object(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__["base64ToFile"])(this.croppedCityAvatar)], fileBeforeCrop.name, {
          type: fileBeforeCrop.type
        }));
        this.cityavatarSaved = true;
        document.getElementById("cityavatarModal").click();
      }

      removeImage() {
        if (isBase64(this.Src)) {
          const fileBeforeCrop = this.cityavatarChangedEvent.target.files[0];
          this.onRemoveCityImage.emit(new File([Object(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__["base64ToFile"])(this.croppedCityAvatar)], fileBeforeCrop.name, {
            type: fileBeforeCrop.type
          }));
        } else {
          this.onRemoveCityImage.emit(this.Src);
        }

        this.cityavatarChangedEvent = null;
        this.croppedCityAvatar = "";
        this.Src = null;
        this.cityavatarLoaded = false;
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CityAvatarUploadComponent.prototype, "Src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CityAvatarUploadComponent.prototype, "onSaveCityImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CityAvatarUploadComponent.prototype, "onRemoveCityImage", void 0);
    CityAvatarUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-city-avatar-upload",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./city-avatar-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/city-avatar-upload/city-avatar-upload.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./city-avatar-upload.component.css */
      "./src/app/cities/widgets/city-avatar-upload/city-avatar-upload.component.css")).default]
    })], CityAvatarUploadComponent);

    function isBase64(str) {
      if (str === "" || str.trim() === "") {
        return false;
      }

      try {
        Object(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__["base64ToFile"])(str);
        return true;
      } catch (err) {
        return false;
      }
    }
    /***/

  },

  /***/
  "./src/app/cities/widgets/city-map-upload/city-map-upload.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/cities/widgets/city-map-upload/city-map-upload.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesWidgetsCityMapUploadCityMapUploadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".uploader-wrp {\r\n\tmargin-top: 4px;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 4px;\r\n\toverflow: hidden;\r\n\tpadding: 12px;\r\n}\r\n\r\n.add-image {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\theight: 125px;\r\n}\r\n\r\n.add-image i {\r\n\tcursor: pointer;\r\n\tcolor: var(--primary-green);\r\n}\r\n\r\n.preview-image {\r\n\tposition: relative;\r\n}\r\n\r\n.preview-image img {\r\n\theight: 125px;\r\n\t-o-object-fit: cover;\r\n\t   object-fit: cover;\r\n}\r\n\r\n.preview-image .remove-img {\r\n\tpadding: 2px 7px;\r\n\tbackground-color: var(--white);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\ttop: -10px;\r\n\tright: -10px;\r\n\tfont-size: 12px;\r\n\tborder-radius: 16px;\r\n\tcolor: #f8483d;\r\n\tcursor: pointer;\r\n\tvisibility: hidden;\r\n\topacity: 0;\r\n\tz-index: 10;\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\tborder: 1px solid #dedede;\r\n\tbox-shadow: 0px 4px 25px rgba(172, 177, 193, 0.4);\r\n}\r\n\r\n.preview-image:hover .remove-img {\r\n\tvisibility: visible;\r\n\topacity: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL3dpZGdldHMvY2l0eS1tYXAtdXBsb2FkL2NpdHktbWFwLXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHdCQUF1QjtTQUF2Qix1QkFBdUI7Q0FDdkIseUJBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLG9CQUFpQjtJQUFqQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsOEJBQThCO0NBQzlCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7Q0FDWixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsNEJBQW9CO0NBQXBCLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsaURBQWlEO0FBQ2xEOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy93aWRnZXRzL2NpdHktbWFwLXVwbG9hZC9jaXR5LW1hcC11cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRlci13cnAge1xyXG5cdG1hcmdpbi10b3A6IDRweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5hZGQtaW1hZ2Uge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDEyNXB4O1xyXG59XHJcblxyXG4uYWRkLWltYWdlIGkge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWltYWdlIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWltYWdlIGltZyB7XHJcblx0aGVpZ2h0OiAxMjVweDtcclxuXHRvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnByZXZpZXctaW1hZ2UgLnJlbW92ZS1pbWcge1xyXG5cdHBhZGRpbmc6IDJweCA3cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMTBweDtcclxuXHRyaWdodDogLTEwcHg7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblx0Y29sb3I6ICNmODQ4M2Q7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNoYWRvdzogMHB4IDRweCAyNXB4IHJnYmEoMTcyLCAxNzcsIDE5MywgMC40KTtcclxufVxyXG5cclxuLnByZXZpZXctaW1hZ2U6aG92ZXIgLnJlbW92ZS1pbWcge1xyXG5cdHZpc2liaWxpdHk6IHZpc2libGU7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/cities/widgets/city-map-upload/city-map-upload.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/cities/widgets/city-map-upload/city-map-upload.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: CityMapUploadComponent */

  /***/
  function srcAppCitiesWidgetsCityMapUploadCityMapUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityMapUploadComponent", function () {
      return CityMapUploadComponent;
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


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    let CityMapUploadComponent = class CityMapUploadComponent {
      constructor() {
        this.onSaveMap = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemoveMap = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // map

        this.mapChangedEvent = "";
        this.croppedMap = "";
        this.mapLoaded = false;
        this.mapSaved = false;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server_url;
      }

      ngOnInit() {
        if (this.cityMap) {
          this.Src = this.serverUrl + this.cityMap;
        }
      }

      mapChangeEvent(event) {
        this.mapChangedEvent = event;
      }

      mapCropped(event) {
        this.croppedMap = event.base64;
      }

      mapLoadedEvent() {
        this.mapLoaded = true;
      }

      saveCropedMap() {
        const fileBeforeCrop = this.mapChangedEvent.target.files[0];
        this.Src = this.croppedMap;
        this.onSaveMap.emit(new File([Object(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__["base64ToFile"])(this.croppedMap)], fileBeforeCrop.name, {
          type: fileBeforeCrop.type
        }));
        this.mapSaved = true;
        document.getElementById("mapModal").click();
      }

      removeImage() {
        if (isBase64(this.Src)) {
          const fileBeforeCrop = this.mapChangedEvent.target.files[0];
          this.onRemoveMap.emit(new File([Object(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__["base64ToFile"])(this.croppedMap)], fileBeforeCrop.name, {
            type: fileBeforeCrop.type
          }));
        } else {
          this.onRemoveMap.emit(this.Src);
        }

        this.mapChangedEvent = null;
        this.croppedMap = "";
        this.mapLoaded = false;
        this.Src = null;
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CityMapUploadComponent.prototype, "cityMap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CityMapUploadComponent.prototype, "Src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CityMapUploadComponent.prototype, "onSaveMap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CityMapUploadComponent.prototype, "onRemoveMap", void 0);
    CityMapUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-city-map-upload",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./city-map-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/city-map-upload/city-map-upload.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./city-map-upload.component.css */
      "./src/app/cities/widgets/city-map-upload/city-map-upload.component.css")).default]
    })], CityMapUploadComponent);

    function isBase64(str) {
      if (str === "" || str.trim() === "") {
        return false;
      }

      try {
        Object(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__["base64ToFile"])(str);
        return true;
      } catch (err) {
        return false;
      }
    }
    /***/

  },

  /***/
  "./src/app/cities/widgets/citylogo-upload/citylogo-upload.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/cities/widgets/citylogo-upload/citylogo-upload.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesWidgetsCitylogoUploadCitylogoUploadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".uploader-wrp {\r\n\tmargin-top: 4px;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 4px;\r\n\toverflow: hidden;\r\n\tpadding: 12px;\r\n}\r\n\r\n.add-image {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\theight: 125px;\r\n}\r\n\r\n.add-image i {\r\n\tcursor: pointer;\r\n\tcolor: var(--primary-green);\r\n}\r\n\r\n.preview-image {\r\n\tposition: relative;\r\n}\r\n\r\n.preview-image img {\r\n\theight: 125px;\r\n\t-o-object-fit: cover;\r\n\t   object-fit: cover;\r\n}\r\n\r\n.preview-image .remove-img {\r\n\tpadding: 2px 7px;\r\n\tbackground-color: var(--white);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\ttop: -10px;\r\n\tright: -10px;\r\n\tfont-size: 12px;\r\n\tborder-radius: 16px;\r\n\tcolor: #f8483d;\r\n\tcursor: pointer;\r\n\tvisibility: hidden;\r\n\topacity: 0;\r\n\tz-index: 10;\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\tborder: 1px solid #dedede;\r\n\tbox-shadow: 0px 4px 25px rgba(172, 177, 193, 0.4);\r\n}\r\n\r\n.preview-image:hover .remove-img {\r\n\tvisibility: visible;\r\n\topacity: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL3dpZGdldHMvY2l0eWxvZ28tdXBsb2FkL2NpdHlsb2dvLXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHdCQUF1QjtTQUF2Qix1QkFBdUI7Q0FDdkIseUJBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLG9CQUFpQjtJQUFqQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsOEJBQThCO0NBQzlCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7Q0FDWixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsNEJBQW9CO0NBQXBCLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsaURBQWlEO0FBQ2xEOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy93aWRnZXRzL2NpdHlsb2dvLXVwbG9hZC9jaXR5bG9nby11cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRlci13cnAge1xyXG5cdG1hcmdpbi10b3A6IDRweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5hZGQtaW1hZ2Uge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDEyNXB4O1xyXG59XHJcblxyXG4uYWRkLWltYWdlIGkge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWltYWdlIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWltYWdlIGltZyB7XHJcblx0aGVpZ2h0OiAxMjVweDtcclxuXHRvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnByZXZpZXctaW1hZ2UgLnJlbW92ZS1pbWcge1xyXG5cdHBhZGRpbmc6IDJweCA3cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMTBweDtcclxuXHRyaWdodDogLTEwcHg7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblx0Y29sb3I6ICNmODQ4M2Q7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNoYWRvdzogMHB4IDRweCAyNXB4IHJnYmEoMTcyLCAxNzcsIDE5MywgMC40KTtcclxufVxyXG5cclxuLnByZXZpZXctaW1hZ2U6aG92ZXIgLnJlbW92ZS1pbWcge1xyXG5cdHZpc2liaWxpdHk6IHZpc2libGU7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/cities/widgets/citylogo-upload/citylogo-upload.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/cities/widgets/citylogo-upload/citylogo-upload.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: CitylogoUploadComponent */

  /***/
  function srcAppCitiesWidgetsCitylogoUploadCitylogoUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitylogoUploadComponent", function () {
      return CitylogoUploadComponent;
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


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    let CitylogoUploadComponent = class CitylogoUploadComponent {
      constructor() {
        // logo
        this.logoChangedEvent = "";
        this.croppedLogo = "";
        this.logoLoaded = false;
        this.logoSaved = false;
        this.onSaveLogo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemoveLogo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server_url;
      }

      ngOnInit() {
        if (this.logo) {
          this.Src = this.serverUrl + this.logo;
        }
      }

      logoChangeEvent(event) {
        this.logoChangedEvent = event;
      }

      logoCropped(event) {
        this.croppedLogo = event.base64;
      }

      logoLoadedEvent() {
        this.logoLoaded = true;
      }

      removeImage() {
        if (isBase64(this.Src)) {
          const fileBeforeCrop = this.logoChangedEvent.target.files[0];
          this.onRemoveLogo.emit(new File([Object(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__["base64ToFile"])(this.croppedLogo)], fileBeforeCrop.name, {
            type: fileBeforeCrop.type
          }));
        } else {
          this.onRemoveLogo.emit(this.Src);
        }

        this.Src = null;
        this.croppedLogo = "";
        this.logoChangedEvent = null;
        this.logoLoaded = false;
      }

      saveCropedLogo() {
        const fileBeforeCrop = this.logoChangedEvent.target.files[0];
        this.Src = this.croppedLogo;
        this.onSaveLogo.emit(new File([Object(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__["base64ToFile"])(this.croppedLogo)], fileBeforeCrop.name, {
          type: fileBeforeCrop.type
        }));
        this.logoSaved = true;
        document.getElementById("logoModal").click();
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CitylogoUploadComponent.prototype, "logo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CitylogoUploadComponent.prototype, "Src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CitylogoUploadComponent.prototype, "onSaveLogo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CitylogoUploadComponent.prototype, "onRemoveLogo", void 0);
    CitylogoUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-citylogo-upload",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./citylogo-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/citylogo-upload/citylogo-upload.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./citylogo-upload.component.css */
      "./src/app/cities/widgets/citylogo-upload/citylogo-upload.component.css")).default]
    })], CitylogoUploadComponent);

    function isBase64(str) {
      if (str === "" || str.trim() === "") {
        return false;
      }

      try {
        Object(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__["base64ToFile"])(str);
        return true;
      } catch (err) {
        return false;
      }
    }
    /***/

  },

  /***/
  "./src/app/cities/widgets/collapsable-content/collapsable-content.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/cities/widgets/collapsable-content/collapsable-content.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitiesWidgetsCollapsableContentCollapsableContentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\r\n\tmax-width: 420px;\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\tfont-size: 14px;\r\n\ttext-align: justify;\r\n\tcolor: var(--body-grey);\r\n}\r\n\r\n.content.collapsed {\r\n\toverflow: hidden;\r\n}\r\n\r\n.read-btn-wrp a {\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\tpadding: 4px 10px;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n\tcolor: var(--body-grey);\r\n\tcursor: pointer;\r\n\tfont-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL3dpZGdldHMvY29sbGFwc2FibGUtY29udGVudC9jb2xsYXBzYWJsZS1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsNEJBQW9CO0NBQXBCLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHlCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy93aWRnZXRzL2NvbGxhcHNhYmxlLWNvbnRlbnQvY29sbGFwc2FibGUtY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdG1heC13aWR0aDogNDIwcHg7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblx0Y29sb3I6IHZhcigtLWJvZHktZ3JleSk7XHJcbn1cclxuXHJcbi5jb250ZW50LmNvbGxhcHNlZCB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnJlYWQtYnRuLXdycCBhIHtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDRweCAxMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Y29sb3I6IHZhcigtLWJvZHktZ3JleSk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/cities/widgets/collapsable-content/collapsable-content.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/cities/widgets/collapsable-content/collapsable-content.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CollapsableContentComponent */

  /***/
  function srcAppCitiesWidgetsCollapsableContentCollapsableContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollapsableContentComponent", function () {
      return CollapsableContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CollapsableContentComponent = class CollapsableContentComponent {
      constructor(elementRef) {
        this.elementRef = elementRef; //maximum height of the container

        this.maxHeight = 50; //set these to false to get the height of the expended container

        this.isCollapsed = false;
        this.isCollapsable = false;
      }

      ngAfterViewInit() {
        let currentHeight = this.elementRef.nativeElement.getElementsByTagName("div")[0].offsetHeight; //collapsable only if the contents make container exceed the max height

        if (currentHeight > this.maxHeight) {
          this.isCollapsed = true;
          this.isCollapsable = true;
        }
      }

    };

    CollapsableContentComponent.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CollapsableContentComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CollapsableContentComponent.prototype, "maxHeight", void 0);
    CollapsableContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "collapsable-content",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./collapsable-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/widgets/collapsable-content/collapsable-content.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./collapsable-content.component.css */
      "./src/app/cities/widgets/collapsable-content/collapsable-content.component.css")).default]
    })], CollapsableContentComponent);
    /***/
  }
}]);
//# sourceMappingURL=cities-cities-module-es5.js.map