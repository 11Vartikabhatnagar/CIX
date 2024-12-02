(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["startup-india-startup-india-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/startup-india/home/home.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/startup-india/home/home.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container home-parent\">\r\n    <div class=\"section-loader\">\r\n        <div class=\"loader-wrp\">\r\n          <div class=\"loader-inner text-center\">\r\n                <div class=\"lds-ring\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n                <div class=\"g-fs-07\">\r\n                    {{promptMsg}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/startup-india/provider-startup/provider-startup.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/startup-india/provider-startup/provider-startup.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"provider-startup-wrp\">\r\n  <ng-container *ngIf=\"!fetchLoading\">\r\n    <div class=\"container\">\r\n      <div class=\"g-pt-30\">\r\n        <ul class=\"a-step-form-active-list text-center g-p-0\">\r\n          <li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n            [ngClass]=\"{ 'g-p-bg': !startup_stp_1, 'primary-grey-bg': startup_stp_1 }\" (click)=\"gotoStep('step1')\"></li>\r\n          <li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n            [ngClass]=\"{ 'g-p-bg': !startup_stp_2, 'primary-grey-bg': startup_stp_2 }\" (click)=\"gotoStep('step2')\"></li>\r\n          <li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n            [ngClass]=\"{ 'g-p-bg': !startup_stp_3, 'primary-grey-bg': startup_stp_3 }\" (click)=\"gotoStep('step3')\"></li>\r\n          <li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n            [ngClass]=\"{ 'g-p-bg': !startup_stp_4, 'primary-grey-bg': startup_stp_4 }\" (click)=\"gotoStep('step4')\"></li>\r\n          <li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\"\r\n            [ngClass]=\"{ 'g-p-bg': !startup_stp_5, 'primary-grey-bg': startup_stp_5 }\" (click)=\"gotoStep('step5')\"></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"row g-mt-30 g-mb-30\" [hidden]=\"startup_stp_1\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"card g-w-bg card-wrp\">\r\n            <div class=\"card-body\">\r\n              <!-- step 1 -->\r\n              <form [formGroup]=\"startupForm.Step1\" (ngSubmit)=\"onSubmit('Step1')\">\r\n                <div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n                  <div class=\"g-pt-30\">\r\n                    <div class=\"g-fs-18 g-fw-500 title-clr\">\r\n                      Innovator Sign Up\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row g-mt-10\">\r\n                    <div class=\"col-sm-8 col-xs-12\">\r\n                      <div class=\"form-group g-mt-03\">\r\n                        <label for=\"fullname\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                          Full Name *\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"fullname\" placeholder=\"John Doe\"\r\n                          formControlName=\"fullname\" [ngClass]=\"{\r\n                              error:\r\n                                (formControlStep1.fullname.touched ||\r\n                                  isSubmitted.Step1) &&\r\n                                formControlStep1.fullname?.errors\r\n                            }\" />\r\n                        <div class=\"err-resp\">\r\n                          <span class=\"field-err\" *ngIf=\"\r\n                                (formControlStep1.fullname.touched ||\r\n                                  isSubmitted.Step1) &&\r\n                                formControlStep1.fullname.errors?.required\r\n                              \">\r\n                            Full Name is required\r\n                          </span>\r\n                          <span class=\"field-err\" *ngIf=\"\r\n                                formControlStep1.fullname.touched &&\r\n                                formControlStep1.fullname.errors?.pattern\r\n                              \">\r\n                            Enter a valid name\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4 text-center hidden-xs\">\r\n                      <div class=\"avatar-upload\">\r\n                        <img [src]=\"avatar_preview\" alt=\"avatar\" class=\"g-w-100per g-bdrrad-50per\" />\r\n                        <div class=\"avatar-upload-mdl-tgr\">\r\n                          <div class=\"add-avatar\" data-toggle=\"modal\" data-target=\"#imageModal\">\r\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label for=\"email\" class=\"g-fs-07 g-black14-clr g-fw-500\">Email *</label>\r\n                    <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"johndoe@gmail.com\"\r\n                      formControlName=\"email\" [ngClass]=\"{\r\n                          error:\r\n                            (formControlStep1.email.touched || isSubmitted.Step1) &&\r\n                            formControlStep1.email?.errors\r\n                        }\" />\r\n                    <div class=\"err-resp\">\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                            (formControlStep1.email.touched || isSubmitted.Step1) &&\r\n                            formControlStep1.email.errors?.required\r\n                          \">\r\n                        Email is required\r\n                      </span>\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                            formControlStep1.email.touched &&\r\n                            formControlStep1.email.errors?.email\r\n                          \">\r\n                        Enter a valid email address\r\n                      </span>\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                            formControlStep1.email.touched &&\r\n                            formControlStep1.email.errors?.emailAlreadyExist\r\n                          \">\r\n                        Email already exist\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label for=\"number\" class=\"g-fs-07 g-black14-clr g-fw-500\">Phone *</label>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-2\">\r\n                        <input type=\"text\" class=\"form-control phone-code\" value=\"+91\" disabled />\r\n                      </div>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"phnum\" [ngClass]=\"{\r\n                              error:\r\n                                (formControlStep1.phnum.touched ||\r\n                                  isSubmitted.Step1) &&\r\n                                formControlStep1.phnum?.errors\r\n                            }\" placeholder=\"ex: 9255333586\" />\r\n                        <div class=\"err-resp\">\r\n                          <span class=\"field-err\" *ngIf=\"\r\n                                (formControlStep1.phnum.touched ||\r\n                                  isSubmitted.Step1) &&\r\n                                formControlStep1.phnum.errors?.required\r\n                              \">\r\n                            Phone number is required\r\n                          </span>\r\n                          <span class=\"field-err\" *ngIf=\"\r\n                                formControlStep1.phnum.touched &&\r\n                                formControlStep1.phnum.errors?.pattern\r\n                              \">\r\n                            Enter a valid phone number\r\n                          </span>\r\n                          <span class=\"field-err\" *ngIf=\"\r\n                                formControlStep1.phnum.touched &&\r\n                                formControlStep1.phnum.errors?.phonenumAlreadyExist\r\n                              \">\r\n                            Phone number already exist\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label for=\"location\" class=\"g-fs-07 g-black14-clr g-fw-500\">Location *</label>\r\n                    <select class=\"form-control\" formControlName=\"location\" [ngClass]=\"{\r\n                          error:\r\n                            (formControlStep1.location.touched ||\r\n                              isSubmitted.Step1) &&\r\n                            formControlStep1.location?.errors\r\n                        }\">\r\n                      <option selected=\"selected\" value=\"\">Select Location</option>\r\n                      <option *ngFor=\"let location of locations\" [value]=\"location.id\">\r\n                        {{ location.name }}\r\n                      </option>\r\n                    </select>\r\n                    <div class=\"err-resp\">\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                            (formControlStep1.location.touched ||\r\n                              isSubmitted.Step1) &&\r\n                            formControlStep1.location.errors?.required\r\n                          \">\r\n                        Location is required\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"g-pb-10 g-mt-10\">\r\n                    <button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                      (click)=\"ShowNextStep('step2')\">\r\n                      Next\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n              <div class=\"widget-grey-bg g-pt-10 g-pb-10 text-center back-login\">\r\n                <div class=\"g-fs-08\">\r\n                  Back to&nbsp;<a [routerLink]=\"['/login']\" class=\"g-p-clr g-fw-500\">Login</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-3\"></div>\r\n      </div>\r\n\r\n      <div class=\"row g-mt-30 g-mb-30\" [hidden]=\"startup_stp_2\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"card g-w-bg card-wrp\">\r\n            <div class=\"card-body\">\r\n              <!-- step 2 -->\r\n              <form [formGroup]=\"startupForm.Step2\" (ngSubmit)=\"onSubmit('Step2')\">\r\n                <div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n                  <div class=\"g-pt-30\">\r\n                    <div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n                      Tell us more about\r\n                    </div>\r\n                    <div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n                      your\r\n                      <span class=\"primary-green-clr\">Startup</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label for=\"company_name\" class=\"g-fs-07 g-black14-clr g-fw-500\">Company Name *</label>\r\n                    <input type=\"text\" class=\"form-control \" name=\"company_name\" placeholder=\"ex: Neet Technologies\"\r\n                      formControlName=\"company_name\" [ngClass]=\"{\r\n                    error:\r\n                      (formControlStep2.company_name.touched ||\r\n                        isSubmitted.Step2) &&\r\n                      formControlStep2.company_name?.errors\r\n                  }\" />\r\n                    <div class=\"err-resp\">\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                      (formControlStep2.company_name.touched ||\r\n                        isSubmitted.Step2) &&\r\n                      formControlStep2.company_name.errors?.required\r\n                    \">\r\n                        Company name is required\r\n                      </span>\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                  (formControlStep2.company_name.touched ||\r\n                    isSubmitted.Step2) &&\r\n                  formControlStep2.company_name.errors?.pattern\r\n                \">\r\n                        Enter a valid company name\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label for=\"website\" class=\"g-fs-07 g-black14-clr g-fw-500\">Company Website URL *</label>\r\n                    <input type=\"text\" class=\"form-control \" name=\"website\" placeholder=\"ex:www.google.com\"\r\n                      formControlName=\"website\" [ngClass]=\"{\r\n                    error:\r\n                      (formControlStep2.website.touched || isSubmitted.Step2) &&\r\n                      formControlStep2.website?.errors\r\n                  }\" />\r\n                    <div class=\"err-resp\">\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                      (formControlStep2.website.touched || isSubmitted.Step2) &&\r\n                      formControlStep2.website.errors?.required\r\n                    \">\r\n                        Website is required\r\n                      </span>\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                  (formControlStep2.website.touched || isSubmitted.Step2) &&\r\n                  formControlStep2.website.errors?.pattern\r\n                \">\r\n                        Invalid website url\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label for=\"officenumber\" class=\"g-fs-07 g-black14-clr g-fw-500\">Office Phone *</label>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-2\">\r\n                        <input type=\"text\" class=\"form-control phone-code\" value=\"+91\" disabled />\r\n                      </div>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"officenumber\" placeholder=\"ex: 9898789876\"\r\n                          formControlName=\"off_phone\" [ngClass]=\"{\r\n                              error:\r\n                                (formControlStep2.off_phone.touched ||\r\n                                  isSubmitted.Step2) &&\r\n                                formControlStep2.off_phone?.errors\r\n                            }\" />\r\n                        <div class=\"err-resp\">\r\n                          <span class=\"field-err\" *ngIf=\"\r\n                                (formControlStep2.off_phone.touched ||\r\n                                  isSubmitted.Step2) &&\r\n                                formControlStep2.off_phone.errors?.required\r\n                              \">\r\n                            Phone number is required\r\n                          </span>\r\n                          <span class=\"field-err\" *ngIf=\"\r\n                                formControlStep2.off_phone.touched &&\r\n                                formControlStep2.off_phone.errors?.pattern\r\n                              \">\r\n                            Enter a valid phone number\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <label class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                          Upload Logo\r\n                        </label>\r\n                        <div\r\n                          class=\"g-bdr-005 g-p-brdr g-fs-07 g-p-clr g-cursor-pointer g-bdrrad-4px text-center g-pb-05 g-pt-05\"\r\n                          data-toggle=\"modal\" data-target=\"#companyLogoUpload\">\r\n                          <span *ngIf=\"logoSaved; then logouploaded; else pickfile\"></span>\r\n                          <ng-template #pickfile>Pick File</ng-template>\r\n                          <ng-template #logouploaded>Logo Uploaded</ng-template>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <label for=\"incoperation_yr\" class=\"g-fs-07 g-black14-clr g-fw-500\">Year of Incorporation\r\n                          *</label>\r\n                        <select class=\"form-control\" name=\"incoperation_yr\" formControlName=\"yr_incorp\" [ngClass]=\"{\r\n                            error:\r\n                              (formControlStep2.yr_incorp.touched ||\r\n                                isSubmitted.Step2) &&\r\n                              formControlStep2.yr_incorp?.errors\r\n                          }\">\r\n                          <option selected=\"selected\" value=\"\">Select Year</option>\r\n                          <ng-container *ngFor=\"let year of yearArr\">\r\n                            <option [value]=\"year\">{{year}}</option>\r\n                          </ng-container>\r\n                        </select>\r\n                        <div class=\"err-resp\">\r\n                          <span class=\"field-err\" *ngIf=\"\r\n                                (formControlStep2.yr_incorp.touched ||\r\n                                  isSubmitted.Step2) &&\r\n                                formControlStep2.yr_incorp.errors?.required\r\n                              \">\r\n                            Year of Incorporation is required\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label for=\"website\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                      DIPP Number (optional)\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"website\" placeholder=\"ex: google.com\"\r\n                      formControlName=\"dipp_num\" />\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label for=\"description\" class=\"g-fs-07 g-black14-clr g-fw-500\">Company brief\r\n                    </label>\r\n                    <ckeditor [editor]=\"Editor\" formControlName=\"comp_brief\" [ngClass]=\"{\r\n                      error:\r\n                        (formControlStep2.comp_brief.touched || isSubmitted.Step2) &&\r\n                        formControlStep2.comp_brief?.errors\r\n                    }\"></ckeditor>\r\n                  </div>\r\n                  <div class=\"row g-mt-20 g-pb-30\">\r\n                    <div class=\"col-sm-6\">\r\n                      <div>\r\n                        <button type=\"button\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                          (click)=\"ShowPreviousStep('step2')\">\r\n                          Previous\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                      <div>\r\n                        <button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                          (click)=\"ShowNextStep('step3')\">\r\n                          Next\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-3\"></div>\r\n      </div>\r\n\r\n      <div class=\"row g-mt-30 g-mb-30\" [hidden]=\"startup_stp_3\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"card g-w-bg card-wrp\">\r\n            <!-- step 3 -->\r\n            <div class=\"card-body\">\r\n              <form [formGroup]=\"startupForm.Step3\" (ngSubmit)=\"onSubmit('Step3')\">\r\n                <div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n                  <div class=\"g-pt-30\">\r\n                    <div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n                      Tell us more about\r\n                    </div>\r\n                    <div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n                      the\r\n                      <span class=\"primary-green-clr\">Startup</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label for=\"team\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                      Founding Team Member names & Designation *\r\n                    </label>\r\n                    <ng-container formArrayName=\"founderDetails\">\r\n                      <ng-container *ngFor=\"let founder of founderDetails.controls; index as i\">\r\n                        <ng-container [formGroupName]=\"i\">\r\n                          <div class=\"frg-dynamic-row g-mb-08\">\r\n                            <div class=\"frg-dynamic-input-col\">\r\n                              <input type=\"text\" class=\"form-control\" name=\"founding_member\" placeholder=\"Founder Name\"\r\n                                formControlName=\"name\" />\r\n                            </div>\r\n                            <div class=\"frg-dynamic-input-col\">\r\n                              <input type=\"text\" class=\"form-control\" name=\"designation\" placeholder=\"Designation\"\r\n                                formControlName=\"designation\" />\r\n                            </div>\r\n                            <div class=\"frg-add-rm-row-btn\">\r\n                              <ng-container *ngIf=\"founderDetails.controls.length - 1 == i\">\r\n                                <span class=\"btn act-span\" (click)=\"addFounder()\"><i\r\n                                    class=\"act-clr fa fa-plus\"></i></span>\r\n                              </ng-container>\r\n                              <ng-container *ngIf=\"founderDetails.controls.length - 1 != i\">\r\n                                <span class=\"btn act-span\" (click)=\"removeFounder(i)\"><i\r\n                                    class=\"act-clr fa fa-minus\"></i></span>\r\n                              </ng-container>\r\n                            </div>\r\n                          </div>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                    </ng-container>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"teamsize\" class=\"g-fs-07 g-black14-clr g-fw-500\">Team Size *</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"teamsize\" placeholder=\"ex: 10\"\r\n                      formControlName=\"teamsize\" [ngClass]=\"{\r\n                          error:\r\n                            (formControlStep3.teamsize.touched ||\r\n                              isSubmitted.Step3) &&\r\n                            formControlStep3.teamsize?.errors\r\n                        }\" />\r\n                    <div class=\"err-resp\">\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                            (formControlStep3.teamsize.touched ||\r\n                              isSubmitted.Step3) &&\r\n                            formControlStep3.teamsize.errors?.required\r\n                          \">\r\n                        Team size required\r\n                      </span>\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                          (formControlStep3.teamsize.touched ||\r\n                            isSubmitted.Step3) &&\r\n                          formControlStep3.teamsize.errors?.pattern\r\n                        \">\r\n                        Only numbers allowed\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label for=\"awards\" class=\"g-fs-07 g-black14-clr g-fw-500\">Awards/Recognitions\r\n                    </label>\r\n                    <ckeditor [editor]=\"Editor\" formControlName=\"awards\"></ckeditor>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label for=\"expertise\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                      Team Expertise\r\n                    </label>\r\n                    <ng-container *ngFor=\"let expertise of teamExpertise.controls; index as i\">\r\n                      <div class=\"frg-expertise-row g-mb-08\">\r\n                        <div class=\"frg-expertise-input-col\">\r\n                          <input type=\"text\" class=\"form-control\" name=\"expertise\"\r\n                            placeholder=\"ex: yourmail@linkedin.in\" [formControl]=\"teamExpertise.controls[i]\" />\r\n                        </div>\r\n                        <div class=\"frg-expertise-add-rm-row-btn\">\r\n                          <ng-container *ngIf=\"teamExpertise.controls.length - 1 == i\">\r\n                            <span class=\"btn act-span\" (click)=\"addExpertise()\"><i\r\n                                class=\"act-clr fa fa-plus\"></i></span>\r\n                          </ng-container>\r\n                          <ng-container *ngIf=\"teamExpertise.controls.length - 1 != i\">\r\n                            <span class=\"btn act-span\" (click)=\"removeExpertise(i)\"><i\r\n                                class=\"act-clr fa fa-minus\"></i></span>\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label for=\"Affiliated\" class=\"g-fs-07 g-black14-clr g-fw-500\">Affiliated\r\n                      Incubator/Accelerator</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"Affiliated\" placeholder=\"ex: Forge Accelerator\"\r\n                      formControlName=\"affiliates\" />\r\n                  </div>\r\n                  <div class=\"row g-mt-20 g-pb-30\">\r\n                    <div class=\"col-sm-6\">\r\n                      <div>\r\n                        <button type=\"button\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                          (click)=\"ShowPreviousStep('step3')\">\r\n                          Previous\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                      <div>\r\n                        <button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                          (click)=\"ShowNextStep('step4')\">\r\n                          Next\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-3\"></div>\r\n      </div>\r\n\r\n      <div class=\"row g-mt-30 g-mb-30\" [hidden]=\"startup_stp_4\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"card g-w-bg card-wrp\">\r\n            <!-- step 4 -->\r\n            <div class=\"card-body\">\r\n              <form [formGroup]=\"startupForm.Step4\" (ngSubmit)=\"onSubmit('Step4')\">\r\n                <div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n                  <div class=\"g-pt-30\">\r\n                    <div class=\"g-fs-18 g-fw-500 g-black7-clr text-center\">\r\n                      Let’s set your\r\n                    </div>\r\n                    <div class=\"g-fs-18 g-fw-500 primary-green-clr text-center\">\r\n                      password.\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-13\">\r\n                    <label for=\"password\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                      Password *</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" [ngClass]=\"{\r\n                          error:\r\n                            formControlStep4.password.touched &&\r\n                            formControlStep4.password.errors\r\n                        }\" />\r\n                    <div class=\"err-resp\">\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                            formControlStep4.password.touched &&\r\n                            formControlStep4.password.errors?.required\r\n                          \">\r\n                        Password is required\r\n                      </span>\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                            (formControlStep4.password.touched ||\r\n                              isSubmitted.Step4) &&\r\n                            formControlStep4.password.errors?.pattern\r\n                          \">\r\n                        Password should have minimum 8 characters, at least one special character and one number\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group g-mt-13\">\r\n                    <label for=\"confirmPassword\" class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                      Confirm Password *</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" formControlName=\"confirmPassword\"\r\n                      [ngClass]=\"{\r\n                          error:\r\n                            formControlStep4.confirmPassword.touched &&\r\n                            formControlStep4.confirmPassword.errors\r\n                        }\" />\r\n                    <div class=\"err-resp\">\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                            (formControlStep4.confirmPassword.touched ||\r\n                              isSubmitted.Step4) &&\r\n                            formControlStep4.confirmPassword.errors?.required\r\n                          \">\r\n                        Confirm Password is required\r\n                      </span>\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                            formControlStep4.confirmPassword.touched &&\r\n                            formControlStep4.confirmPassword.errors?.passwordMismatch\r\n                          \">\r\n                        Passwords doesn't match\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row g-mt-20 g-pb-30\">\r\n                    <div class=\"col-sm-6\">\r\n                      <div>\r\n                        <button type=\"button\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                          (click)=\"ShowPreviousStep('step4')\">\r\n                          Previous\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                      <div>\r\n                        <button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                          (click)=\"saveUser()\">\r\n                          Next&nbsp;\r\n                          <i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-3\"></div>\r\n      </div>\r\n\r\n      <div class=\"row g-mt-30 g-mb-30\" [hidden]=\"startup_stp_5\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"card g-w-bg card-wrp otp\">\r\n            <div class=\"card-body\">\r\n              <form [formGroup]=\"startupForm.Step5\" (ngSubmit)=\"onSubmit('Step5')\">\r\n                <div class=\"form-wrapper g-pl-40 g-pr-40\">\r\n                  <div class=\"g-pt-30\">\r\n                    <div class=\"g-fs-18 g-fw-500 title-clr text-center\">\r\n                      You are almost done!\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"g-pl-20 g-pr-20 g-mt-06\">\r\n                    <div class=\"g-fs-07 g-fw-500 g-black5-clr text-center\">\r\n                      A verification email has been sent to your email address.\r\n                      Please copy the verification code in the email and paste here\r\n                      to verify your account.\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"verification-code-wrp\">\r\n                    <div class=\"g-mt-30 g-mb-05\">\r\n                      <div class=\"g-fs-07 g-black14-clr g-fw-500\">\r\n                        Enter verification code\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group g-mb-0\">\r\n                      <input type=\"text\" class=\"form-control g-pt-5 g-pb-5 g-wht-bg\" name=\"email-otp\"\r\n                        formControlName=\"otp\" [ngClass]=\"{\r\n                            error:\r\n                              (formControlStep5.otp.touched || isSubmitted.Step5) &&\r\n                              formControlStep5.otp.errors\r\n                          }\" />\r\n                      <div class=\"err-resp\">\r\n                        <span class=\"field-err\" *ngIf=\"\r\n                              (formControlStep5.otp.touched || isSubmitted.Step5) &&\r\n                              formControlStep5.otp.errors?.required\r\n                            \">\r\n                          Verification code is required\r\n                        </span>\r\n                        <span class=\"field-err\" *ngIf=\"\r\n                              formControlStep5.otp.touched &&\r\n                              formControlStep5.otp.errors?.minlength\r\n                            \">\r\n                          Verification code should have 6 characters\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"resend-verification-code text-right\">\r\n                      <span class=\"g-fs-06 g-fw-500 primary-green-clr g-cursor-pointer\" (click)=\"resendCode()\">\r\n                        Resend verification code&nbsp;\r\n                        <i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"resendCodeLoading\"></i>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"g-pb-40 g-mt-30\">\r\n                    <button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\"\r\n                      (click)=\"verifyOtp()\">\r\n                      Verify Code&nbsp;\r\n                      <i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"verifyingOTP\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-3\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal g-mt-30 fade avatar-upload-modal\" id=\"imageModal\" role=\"dialog\">\r\n      <div class=\"modal-dialog modal-md\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <span class=\"modal-title g-fs-12 g-black14-clr g-fw-400\">\r\n              Upload Avatar\r\n            </span>\r\n            <button type=\"button\" class=\"close g-fs-12 g-black14-clr g-fw-400\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <!-- cropper widget -->\r\n            <div class=\"cropper-widget\">\r\n              <div class=\"cropper-col-left\">\r\n                <div class=\"cropper-wrp\">\r\n                  <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\"\r\n                    [aspectRatio]=\"1 / 1\" resizeToWidth=\"256\" roundCropper=\"true\" format=\"png\"\r\n                    (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\">\r\n                  </image-cropper>\r\n                </div>\r\n              </div>\r\n              <div class=\"cropper-col-right\">\r\n                <div class=\"cropper-preview\">\r\n                  <img [src]=\"croppedImage\" />\r\n                </div>\r\n                <hr />\r\n                <div class=\"g-pb-06\">\r\n                  <label for=\"avatar\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n                    <i class=\"fas fa-image\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\r\n                    <span *ngIf=\"fileLoaded; then changePicture; else addPicture\"></span>\r\n                    <ng-template #addPicture>Add Image</ng-template>\r\n                    <ng-template #changePicture>Change Image</ng-template>\r\n                  </label>\r\n                  <input type=\"file\" id=\"avatar\" name=\"avatar\" accept=\"image/png, image/jpeg\" class=\"hidden\"\r\n                    (change)=\"fileChangeEvent($event)\" />\r\n                </div>\r\n                <div class=\"g-pb-06\" *ngIf=\"fileLoaded\">\r\n                  <div class=\"g-fs-12 g-black14-clr g-fw-400\">\r\n                    <button type=\"button\" (click)=\"saveCropedImage()\"\r\n                      class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n                      <i class=\"far fa-save\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Save\r\n                      Image\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal g-mt-30 fade avatar-upload-modal\" id=\"companyLogoUpload\" role=\"dialog\">\r\n      <div class=\"modal-dialog modal-md\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <span class=\"modal-title g-fs-12 g-black14-clr g-fw-400\">\r\n              Upload Company Logo\r\n            </span>\r\n            <button type=\"button\" class=\"close g-fs-12 g-black14-clr g-fw-400\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <!-- cropper widget -->\r\n            <div class=\"cropper-widget\">\r\n              <div class=\"cropper-col-left\">\r\n                <div class=\"cropper-wrp\">\r\n                  <image-cropper [imageChangedEvent]=\"logoimageChangedEvent\" [maintainAspectRatio]=\"true\"\r\n                    [aspectRatio]=\"1 / 1\" resizeToWidth=\"256\" roundCropper=\"true\" format=\"png\"\r\n                    (imageCropped)=\"logoImageCropped($event)\" (imageLoaded)=\"logoImageLoaded()\">\r\n                  </image-cropper>\r\n                </div>\r\n              </div>\r\n              <div class=\"cropper-col-right\">\r\n                <div class=\"cropper-preview\">\r\n                  <img [src]=\"logoCroppedImage\" />\r\n                </div>\r\n                <hr />\r\n                <div class=\"g-pb-06\">\r\n                  <label for=\"companylogo\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n                    <i class=\"fas fa-image\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\r\n                    <span *ngIf=\"logoFileLoaded; then changePicture; else addPicture\"></span>\r\n                    <ng-template #addPicture>Add Image</ng-template>\r\n                    <ng-template #changePicture>Change Image</ng-template>\r\n                  </label>\r\n                  <input type=\"file\" id=\"companylogo\" name=\"companylogo\" accept=\"image/png, image/jpeg\" class=\"hidden\"\r\n                    (change)=\"logoFileChangeEvent($event)\" />\r\n                </div>\r\n                <div class=\"g-pb-06\" *ngIf=\"logoFileLoaded\">\r\n                  <div class=\"g-fs-12 g-black14-clr g-fw-400\">\r\n                    <button type=\"button\" (click)=\"saveCropedLogo()\"\r\n                      class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n                      <i class=\"far fa-save\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Save\r\n                      Image\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"fetchLoading\">\r\n    <div class=\"section-loader\">\r\n      <div class=\"loader-wrp\">\r\n        <div class=\"loader-inner text-center\">\r\n          <div class=\"lds-ring\">\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n          </div>\r\n          <div class=\"g-fs-07\">\r\n            Populating data from #startupindia..\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"initLoading\">\r\n    <div class=\"l-section-loader\">\r\n      <div class=\"l-loader-wrp\">\r\n        <div class=\"l-loader-inner text-center\">\r\n          <div class=\"lds-ring\">\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n          </div>\r\n          <div class=\"g-fs-07\">\r\n            Populating data from #startupindia..\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/startup-india/startup-india.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/startup-india/startup-india.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/register/startup-india/home/home.component.css":
/*!****************************************************************!*\
  !*** ./src/app/register/startup-india/home/home.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-parent{\r\n    min-height:100vh;\r\n    position: relative;\r\n}\r\n\r\n.section-loader{\r\n    position:absolute;\r\n    top:0;\r\n    width:100%;\r\n    height:100%;\r\n}\r\n\r\n.loader-wrp{\r\n    display:table;\r\n    width:100%;\r\n    height:100%;\r\n}\r\n\r\n.loader-inner{\r\n    display:table-cell;\r\n    vertical-align:middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvc3RhcnR1cC1pbmRpYS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsS0FBSztJQUNMLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9zdGFydHVwLWluZGlhL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtcGFyZW50e1xyXG4gICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNlY3Rpb24tbG9hZGVye1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLmxvYWRlci13cnB7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4ubG9hZGVyLWlubmVye1xyXG4gICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/register/startup-india/home/home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/register/startup-india/home/home.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_startupindia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/startupindia.service */ "./src/app/register/startup-india/shared/startupindia.service.ts");





let HomeComponent = class HomeComponent {
    constructor(route, toastr, _startupIndia, router) {
        this.route = route;
        this.toastr = toastr;
        this._startupIndia = _startupIndia;
        this.router = router;
        this.route.queryParams.subscribe(params => {
            this.auth_token = params['auth_token'];
        });
    }
    ngOnInit() {
        this.getStartUpIndiaUserData();
    }
    getStartUpIndiaUserData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.promptMsg = 'Fetching from #startupindia...';
                let resp = yield this._startupIndia.getUserData(this.auth_token);
                if (resp.role == 'Startup') {
                    this.router.navigate([`register/via/startup-india/provider/startup/${this.auth_token}`]);
                }
            }
            catch (err) {
                this.promptMsg = 'Error occured while fetching...';
                this.toastr.error('', 'Something went wrong please try again');
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _shared_startupindia_service__WEBPACK_IMPORTED_MODULE_4__["StartupindiaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/startup-india/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/register/startup-india/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/register/startup-india/provider-startup/provider-startup.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/register/startup-india/provider-startup/provider-startup.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".provider-startup-wrp{\r\n    min-height:100vh;\r\n    position: relative;\r\n}\r\n\r\n.section-loader{\r\n    position:absolute;\r\n    top:0;\r\n    width:100%;\r\n    height:100%;\r\n}\r\n\r\n.loader-wrp{\r\n    display:table;\r\n    width:100%;\r\n    height:100%;\r\n}\r\n\r\n.loader-inner{\r\n    display:table-cell;\r\n    vertical-align:middle;\r\n}\r\n\r\n.card-wrp{\r\n    max-width:520px;\r\n    margin-left: auto;\r\n    margin-right:auto;\r\n    box-shadow: 5px 5px 20px rgba(172, 177, 193, 0.4);\r\n    border-radius: 10px;\r\n}\r\n\r\n.card-wrp.otp{\r\n    max-width:600px;\r\n}\r\n\r\n.card-wrp .back-login{\r\n    border-bottom-right-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n}\r\n\r\n.verification-code-wrp{\r\n    max-width:240px;\r\n    margin: auto;\r\n}\r\n\r\n.act-clr{\r\n    color: #3B6FD4 !important;\r\n}\r\n\r\n.act-span{\r\n    padding:3px 6px;\r\n    border: 1px solid #3B6FD4;\r\n    font-size:12px;\r\n}\r\n\r\n.frg-dynamic-row{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.frg-dynamic-row .frg-dynamic-input-col{\r\n    flex-basis:42%;\r\n}\r\n\r\n.frg-dynamic-row .frg-add-rm-row-btn{\r\n    flex-basis:7%;\r\n}\r\n\r\n.frg-expertise-row{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.frg-expertise-row .frg-expertise-input-col{\r\n    flex-basis:88%;\r\n}\r\n\r\n.frg-expertise-row .frg-expertise-add-rm-row-btn{\r\n    flex-basis:7%;\r\n}\r\n\r\n.l-section-loader {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #ffffff73;\r\n  }\r\n\r\n.l-loader-wrp {\r\n    display: table;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n.l-loader-inner {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvc3RhcnR1cC1pbmRpYS9wcm92aWRlci1zdGFydHVwL3Byb3ZpZGVyLXN0YXJ0dXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsS0FBSztJQUNMLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpREFBaUQ7SUFDakQsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvc3RhcnR1cC1pbmRpYS9wcm92aWRlci1zdGFydHVwL3Byb3ZpZGVyLXN0YXJ0dXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm92aWRlci1zdGFydHVwLXdycHtcclxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWxvYWRlcntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5sb2FkZXItd3Jwe1xyXG4gICAgZGlzcGxheTp0YWJsZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLmxvYWRlci1pbm5lcntcclxuICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxufVxyXG5cclxuLmNhcmQtd3Jwe1xyXG4gICAgbWF4LXdpZHRoOjUyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC13cnAub3Rwe1xyXG4gICAgbWF4LXdpZHRoOjYwMHB4O1xyXG59XHJcblxyXG4uY2FyZC13cnAgLmJhY2stbG9naW57XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi52ZXJpZmljYXRpb24tY29kZS13cnB7XHJcbiAgICBtYXgtd2lkdGg6MjQwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5hY3QtY2xye1xyXG4gICAgY29sb3I6ICMzQjZGRDQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdC1zcGFue1xyXG4gICAgcGFkZGluZzozcHggNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNCNkZENDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG59XHJcblxyXG4uZnJnLWR5bmFtaWMtcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mcmctZHluYW1pYy1yb3cgLmZyZy1keW5hbWljLWlucHV0LWNvbHtcclxuICAgIGZsZXgtYmFzaXM6NDIlO1xyXG59XHJcblxyXG4uZnJnLWR5bmFtaWMtcm93IC5mcmctYWRkLXJtLXJvdy1idG57XHJcbiAgICBmbGV4LWJhc2lzOjclO1xyXG59XHJcblxyXG4uZnJnLWV4cGVydGlzZS1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZyZy1leHBlcnRpc2Utcm93IC5mcmctZXhwZXJ0aXNlLWlucHV0LWNvbHtcclxuICAgIGZsZXgtYmFzaXM6ODglO1xyXG59XHJcblxyXG4uZnJnLWV4cGVydGlzZS1yb3cgLmZyZy1leHBlcnRpc2UtYWRkLXJtLXJvdy1idG57XHJcbiAgICBmbGV4LWJhc2lzOjclO1xyXG59XHJcblxyXG4ubC1zZWN0aW9uLWxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3MztcclxuICB9XHJcbiAgXHJcbiAgLmwtbG9hZGVyLXdycCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubC1sb2FkZXItaW5uZXIge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/register/startup-india/provider-startup/provider-startup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/register/startup-india/provider-startup/provider-startup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProviderStartupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderStartupComponent", function() { return ProviderStartupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_startupindia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/startupindia.service */ "./src/app/register/startup-india/shared/startupindia.service.ts");
/* harmony import */ var _seekers_seekers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../seekers/seekers.service */ "./src/app/register/seekers/seekers.service.ts");
/* harmony import */ var _provider_startup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./provider-startup.service */ "./src/app/register/startup-india/provider-startup/provider-startup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/customvalidation.service */ "./src/app/services/customvalidation.service.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11__);












let ProviderStartupComponent = class ProviderStartupComponent {
    constructor(route, toastr, _startupIndia, router, _ss, _sts, fb, customValidator) {
        this.route = route;
        this.toastr = toastr;
        this._startupIndia = _startupIndia;
        this.router = router;
        this._ss = _ss;
        this._sts = _sts;
        this.fb = fb;
        this.customValidator = customValidator;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11__;
        this.startupForm = {
            Step1: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"],
            Step2: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"],
            Step3: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"],
            Step4: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"],
            Step5: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"],
        };
        this.isSubmitted = {
            Step1: false,
            Step2: false,
            Step3: false,
            Step4: false,
            Step5: false,
        };
        this.avatar_preview = "./assets/img/default-avatar.jpg";
        this.loading = false;
        this.verifyingOTP = false;
        this.logoimageChangedEvent = "";
        this.imageChangedEvent = "";
        this.croppedImage = "";
        this.logoCroppedImage = "";
        this.logoFileLoaded = false;
        this.logoSaved = false;
        this.fileLoaded = false;
        this.yearArr = lodash__WEBPACK_IMPORTED_MODULE_3__["range"](1950, new Date().getFullYear() + 1);
        this.resendCodeLoading = false;
        this.startUpIndia = {
            userDetails: "",
            otherDetails: "",
        };
        this.route.params.subscribe((params) => {
            this.auth_token = params.auth_token;
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
            // getting locations from api
            this.initLoading = true;
            this._sts.listLocations().subscribe((resp) => {
                this.initLoading = false;
                this.locations = resp.data;
            });
            this.startup_stp_1 = true;
            this.startup_stp_2 = true;
            this.startup_stp_3 = true;
            this.startup_stp_4 = false;
            this.startup_stp_5 = true;
            this.startupForm = {
                Step1: this.fb.group({
                    fullname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("[a-zA-Z .]*")]],
                    email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].email], this.customValidator.emailAvailabilityValidator.bind(this.customValidator)],
                    phnum: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")], this.customValidator.phoneAvailabilityValidator.bind(this.customValidator)],
                    location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                }),
                Step2: this.fb.group({
                    company_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("^(?! )(?!.* $)[a-zA-Z0-9 ()-]+$")]],
                    website: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("^(www.)?[a-z0-9 .]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$")]],
                    off_phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")]],
                    yr_incorp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                    comp_brief: [""],
                    dipp_num: [""],
                }),
                Step3: this.fb.group({
                    founderDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArray"]([]),
                    teamsize: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("^[0-9]*$")]],
                    awards: [""],
                    expertise: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArray"]([]),
                    affiliates: [""],
                }),
                Step4: this.fb.group({
                    password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
                    confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                }, { validator: this.customValidator.MatchPassword("password", "confirmPassword") }),
                Step5: this.fb.group({
                    otp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(6)]],
                }),
            };
            this.founderDetails = this.startupForm.Step3.get("founderDetails");
            this.teamExpertise = this.startupForm.Step3.get("expertise");
            yield this.StartUpIndiaUserDataPatchValue();
        });
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
    StartUpIndiaUserDataPatchValue() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.fetchLoading = true;
                this.startUpIndia.userDetails = yield this._startupIndia.getUserData(this.auth_token);
                this.startUpIndia.otherDetails = yield this._startupIndia.getAdditionalData(this.auth_token, this.startUpIndia.userDetails.dippNumber);
                this.fetchLoading = false;
                this.startupForm.Step1.patchValue({
                    fullname: this.startUpIndia.userDetails.name,
                    email: this.startUpIndia.userDetails.email,
                    phnum: this.startUpIndia.userDetails.phone,
                });
                this.startupForm.Step2.patchValue({
                    company_name: this.startUpIndia.otherDetails.data.entity_name,
                    website: this.startUpIndia.userDetails.website,
                    off_phone: this.startUpIndia.userDetails.phone,
                    yr_incorp: this.startUpIndia.otherDetails.data.incorporation_date.split("-")[2],
                    dipp_num: this.startUpIndia.userDetails.dippNumber,
                });
                this.startupForm.Step3.patchValue({
                    teamsize: this.startUpIndia.otherDetails.data.curr_no_of_employee,
                    awards: this.startUpIndia.otherDetails.data.award_recognization_entity,
                });
                this.startUpIndia.otherDetails.data.directorsDetails.forEach((element) => {
                    const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
                        designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
                    });
                    group.patchValue({ name: element.director_name, designation: "Director" });
                    this.founderDetails.push(group);
                });
                this.startUpIndia.userDetails.sectors.forEach((element) => {
                    const expertise = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("");
                    expertise.patchValue(element);
                    this.teamExpertise.push(expertise);
                });
                let location = yield this._sts.searchLocation(this.startUpIndia.userDetails.city);
                if (location.status) {
                    this.startupForm.Step1.patchValue({
                        location: location.data[0].id,
                    });
                }
            }
            catch (err) {
                this.toastr.error("", "Something went wrong please try again");
            }
        });
    }
    ShowNextStep(step) {
        if (step == "step2" && this.startupForm.Step1.valid) {
            this.startup_stp_1 = true;
            this.startup_stp_2 = false;
        }
        else if (step == "step3" && this.startupForm.Step2.valid) {
            this.startup_stp_2 = true;
            this.startup_stp_3 = false;
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
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
        // console.log("file uploaded");
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        this.fileLoaded = true;
    }
    logoFileChangeEvent(event) {
        this.logoimageChangedEvent = event;
        // console.log("file uploaded");
    }
    logoImageCropped(event) {
        this.logoCroppedImage = event.base64;
    }
    logoImageLoaded() {
        this.logoFileLoaded = true;
    }
    saveCropedImage() {
        const fileBeforeCrop = this.imageChangedEvent.target.files[0];
        this.file = new File([Object(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_10__["base64ToFile"])(this.croppedImage)], fileBeforeCrop.name, { type: fileBeforeCrop.type });
        this.avatar_preview = this.croppedImage;
        document.getElementById("imageModal").click();
    }
    saveCropedLogo() {
        const fileBeforeCrop = this.logoimageChangedEvent.target.files[0];
        this.logo = new File([Object(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_10__["base64ToFile"])(this.logoCroppedImage)], fileBeforeCrop.name, { type: fileBeforeCrop.type });
        this.logoSaved = true;
        document.getElementById("companyLogoUpload").click();
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
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
                designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            });
            this.founderDetails.push(group);
        }
        // console.log("Founder details console ", this.startupForm.Step3.value.founderDetails);
    }
    removeFounder(index) {
        this.founderDetails.removeAt(index);
    }
    addExpertise() {
        let expertiseArr = ([] = this.teamExpertise.value);
        if (!expertiseArr.includes(""))
            if (this.teamExpertise.value.length != 5)
                this.teamExpertise.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](""));
    }
    removeExpertise(index) {
        this.teamExpertise.removeAt(index);
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
                    social_signup_via: "startupindia",
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
                    startup_awards: this.startupForm.Step3.value.awards,
                    startup_affiliates: this.startupForm.Step3.value.affiliates,
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
    saveAvatar() {
        if (this.file) {
            let formData = new FormData();
            formData.append("slug", this.startup_data.id);
            formData.append("avatar", this.file, this.file.name);
            // console.log("FormData", formData);
            this._sts.uploadAvataar(formData).subscribe((response) => {
                // console.log("Save Avatar", response);
            });
        }
    }
    saveLogo() {
        if (this.logo) {
            let formData = new FormData();
            formData.append("slug", this.startup_data.id);
            formData.append("company_logo", this.logo, this.logo.name);
            this._sts.uploadLogo(formData).subscribe((resp) => {
                // console.log("save logo", resp);
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
ProviderStartupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _shared_startupindia_service__WEBPACK_IMPORTED_MODULE_5__["StartupindiaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _seekers_seekers_service__WEBPACK_IMPORTED_MODULE_6__["SeekersService"] },
    { type: _provider_startup_service__WEBPACK_IMPORTED_MODULE_7__["ProviderStartupService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_9__["CustomvalidationService"] }
];
ProviderStartupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-provider-startup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./provider-startup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/startup-india/provider-startup/provider-startup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./provider-startup.component.css */ "./src/app/register/startup-india/provider-startup/provider-startup.component.css")).default]
    })
], ProviderStartupComponent);



/***/ }),

/***/ "./src/app/register/startup-india/provider-startup/provider-startup.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/register/startup-india/provider-startup/provider-startup.service.ts ***!
  \*************************************************************************************/
/*! exports provided: ProviderStartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderStartupService", function() { return ProviderStartupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ProviderStartupService = class ProviderStartupService {
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
        return this.http.post(this.api_url + `/locations/select_mul`, { sort: [{ name: 'ASC' }] });
    }
    searchLocation(keyword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/locations/select_mul`, {
                search: {
                    name: keyword
                }
            }).toPromise();
        });
    }
    associateProviderLocation(post_data) {
        // console.log(post_data)
        return this.http.post(this.api_url + `/locations_and_providers/create`, post_data);
    }
    resendVerficationCode(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/users/resend_verification_code`, postData).toPromise();
        });
    }
};
ProviderStartupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProviderStartupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProviderStartupService);



/***/ }),

/***/ "./src/app/register/startup-india/shared/startupindia.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/register/startup-india/shared/startupindia.service.ts ***!
  \***********************************************************************/
/*! exports provided: StartupindiaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupindiaService", function() { return StartupindiaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let StartupindiaService = class StartupindiaService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    getUserData(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.get('https://api.startupindia.gov.in/sih/api/auth/sso/services/get/userDetails', {
                headers: {
                    'x-auth-token': token
                }
            }).toPromise();
        });
    }
    getAdditionalData(token, dpiitNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post('https://api.startupindia.gov.in/sih/api/auth/sso/services/get/dpiit', {
                'dpiitNumber': dpiitNumber
            }, {
                headers: {
                    'x-auth-token': token
                }
            }).toPromise();
        });
    }
};
StartupindiaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
StartupindiaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StartupindiaService);



/***/ }),

/***/ "./src/app/register/startup-india/startup-india-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/register/startup-india/startup-india-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: StartupIndiaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupIndiaRoutingModule", function() { return StartupIndiaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _startup_india_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startup-india.component */ "./src/app/register/startup-india/startup-india.component.ts");
/* harmony import */ var _provider_startup_provider_startup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provider-startup/provider-startup.component */ "./src/app/register/startup-india/provider-startup/provider-startup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/register/startup-india/home/home.component.ts");






const routes = [
    { path: '',
        component: _startup_india_component__WEBPACK_IMPORTED_MODULE_3__["StartupIndiaComponent"],
        children: [
            {
                path: '',
                redirectTo: 'startup-india',
                pathMatch: 'full'
            },
            {
                path: 'startup-india',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            },
            {
                path: 'startup-india/provider/startup/:auth_token',
                component: _provider_startup_provider_startup_component__WEBPACK_IMPORTED_MODULE_4__["ProviderStartupComponent"],
            },
        ]
    }
];
let StartupIndiaRoutingModule = class StartupIndiaRoutingModule {
};
StartupIndiaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StartupIndiaRoutingModule);



/***/ }),

/***/ "./src/app/register/startup-india/startup-india.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/register/startup-india/startup-india.component.ts ***!
  \*******************************************************************/
/*! exports provided: StartupIndiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupIndiaComponent", function() { return StartupIndiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StartupIndiaComponent = class StartupIndiaComponent {
    constructor() { }
    ngOnInit() { }
};
StartupIndiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-startup-india',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./startup-india.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/startup-india/startup-india.component.html")).default,
    })
], StartupIndiaComponent);



/***/ }),

/***/ "./src/app/register/startup-india/startup-india.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/register/startup-india/startup-india.module.ts ***!
  \****************************************************************/
/*! exports provided: StartupIndiaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupIndiaModule", function() { return StartupIndiaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _startup_india_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./startup-india-routing.module */ "./src/app/register/startup-india/startup-india-routing.module.ts");
/* harmony import */ var _startup_india_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./startup-india.component */ "./src/app/register/startup-india/startup-india.component.ts");
/* harmony import */ var _provider_startup_provider_startup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./provider-startup/provider-startup.component */ "./src/app/register/startup-india/provider-startup/provider-startup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/register/startup-india/home/home.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");










let StartupIndiaModule = class StartupIndiaModule {
};
StartupIndiaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_startup_india_component__WEBPACK_IMPORTED_MODULE_6__["StartupIndiaComponent"], _provider_startup_provider_startup_component__WEBPACK_IMPORTED_MODULE_7__["ProviderStartupComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _startup_india_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartupIndiaRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__["ImageCropperModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]
        ]
    })
], StartupIndiaModule);



/***/ })

}]);
//# sourceMappingURL=startup-india-startup-india-module-es2015.js.map