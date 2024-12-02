(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["challenge-dashboard-challenge-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/challenge-dashboard.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/challenge-dashboard.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardChallengeDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid g-white-bg g-p-0\">\r\n\t<section class=\"challenge-header\">\r\n\t\t<div class=\"a-header-review-application g-pt-35 g-pb-30 g-pl-12 g-pr-12\">\r\n\t\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-rp-back-arrow-wrp g-mt-02 g-mr-10 g-cursor-pointer\" routerLink=\"../../\">\r\n\t\t\t\t\t\t\t<svg width=\"29\" height=\"20\" viewBox=\"0 0 29 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t\t<path d=\"M9 1L1 10L9 19\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n\t\t\t\t\t\t\t\t<path d=\"M1.5 10H28\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-rp-chlng-wrp g-mr-10\">\r\n\t\t\t\t\t\t\t<div class=\"a-rp-chlng-name-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-rp-chlng-name g-fs-14 g-lh-16 bg-blue-clr\">\r\n\t\t\t\t\t\t\t\t\t{{ challengeData.data.frg_challenge_id.name }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-rp-chlng-sector-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-rp-chlng-sector body-light-clr g-fs-08 g-lh-10 g-mt-02\">\r\n\t\t\t\t\t\t\t\t\t{{ challengeData.data.frg_challenge_id.frg_challenge_sector_id.name | titlecase }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-rp-status-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-badge-wrp\">\r\n\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\tclass=\"a-chlng-badge g-fs-07 a-accepting-solution\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'a-await-approval': challengeData.data.challenge_status === 'Awaiting Approval',\r\n\t\t\t\t\t\t\t\t\t\t'a-accepting-solution': challengeData.data.challenge_status === 'Accepting Solutions',\r\n\t\t\t\t\t\t\t\t\t\t'a-await-proposal': challengeData.data.challenge_status === 'Awaiting Proposal',\r\n\t\t\t\t\t\t\t\t\t\t'a-pilot': challengeData.data.challenge_status === 'Pilot'\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t{{ challengeData.data.challenge_status | titlecase }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-counts-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-rp-sl-wrp text-center\">\r\n\t\t\t\t\t\t\t<div class=\"a-rp-solution-count-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-rp-solution-count bg-blue-clr g-fs-17 g-fw-500 g-lh-20\">\r\n\t\t\t\t\t\t\t\t\t{{ challengeData.data.application_count }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-rp-sl-title-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-rp-sl-title body-light-clr g-fs-08 g-lh-10\">Solutions</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-rp-sl-wrp text-center\">\r\n\t\t\t\t\t\t\t<div class=\"a-rp-solution-count-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-rp-solution-count bg-blue-clr g-fs-17 g-fw-500 g-lh-20\">\r\n\t\t\t\t\t\t\t\t\t{{ challengeData.data.shortlist_count }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-rp-sl-title-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-rp-sl-title body-light-clr g-fs-08 g-lh-10\">Shortlisted</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-rp-chlng-wrp g-mr-10\">\r\n\t\t\t\t\t\t\t<div class=\"a-rp-chlng-name-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-rp-chlng-name g-fs-15 g-lh-17 bg-blue-clr\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\theight: '24px',\r\n\t\t\t\t\t\t\t\t\t\t\twidth: '500px'\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"a-rp-chlng-name g-fs-15 g-lh-17 bg-blue-clr\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\t\theight: '15px',\r\n\t\t\t\t\t\t\t\t\t\t\twidth: '150px'\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-counts-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-rp-sl-wrp text-center\">\r\n\t\t\t\t\t\t\t<div class=\"a-rp-solution-count-wrp\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\theight: '35px',\r\n\t\t\t\t\t\t\t\t\t\twidth: '45px',\r\n\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-rp-sl-title-wrp\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'border-radius': '0',\r\n\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\twidth: '70%',\r\n\t\t\t\t\t\t\t\t\t\tdisplay: 'block',\r\n\t\t\t\t\t\t\t\t\t\tmargin: '5px auto'\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-rp-sl-wrp text-center\">\r\n\t\t\t\t\t\t\t<div class=\"a-rp-solution-count-wrp\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\theight: '35px',\r\n\t\t\t\t\t\t\t\t\t\twidth: '45px',\r\n\t\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-rp-sl-title-wrp\">\r\n\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'border-radius': '0',\r\n\t\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\t\twidth: '70%',\r\n\t\t\t\t\t\t\t\t\t\tdisplay: 'block',\r\n\t\t\t\t\t\t\t\t\t\tmargin: '5px auto'\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<div class=\"a-challenge-tab-wrp\">\r\n\t\t<ul class=\"a-challenge-tab nav nav-pills g-pl-12 g-pr-12\">\r\n\t\t\t<li routerLink=\"overview\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n\t\t\t\t<a class=\"g-fs-07 g-black5-clr g-fw-500 g-default-tab\">\r\n\t\t\t\t\t<span>Overview</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"active\">\r\n\t\t\t\t<a class=\"g-fs-07 g-black5-clr g-fw-500 g-default-tab\">\r\n\t\t\t\t\t<span>Solutions</span>\r\n\t\t\t\t\t<!-- <span>Solutions ({{ challengeData?.data.application_count }})</span> -->\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li routerLink=\"review-applications\" routerLinkActive=\"active\">\r\n\t\t\t\t<a class=\"g-fs-07 a-tab-common-clr\">\r\n\t\t\t\t\t<span> Review Applications</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li routerLink=\"eoi\" routerLinkActive=\"active\">\r\n\t\t\t\t<a class=\"g-fs-07 a-tab-common-clr a-tab-common-clr2\">\r\n\t\t\t\t\t<span> Send EOI</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li routerLink=\"review-proposals\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n\t\t\t\t<a class=\"g-fs-07 a-tab-common-clr a-tab-common-clr3\">\r\n\t\t\t\t\t<span>Review Proposals</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li routerLink=\"pilots\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n\t\t\t\t<a class=\"g-fs-07 a-sol-pilot-tab\">\r\n\t\t\t\t\t<span>Pilots</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<section class=\"dashboard-content\">\r\n\t\t<router-outlet (deactivate)=\"handleActivate($event)\"></router-outlet>\r\n\t</section>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/challenge-overview.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/challenge-overview.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensChallengeOverviewChallengeOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-challenge-overview-wrp container g-pt-28 g-pb-50\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-7\">\r\n\t\t\t<div class=\"a-col1-title-wrp\">\r\n\t\t\t\t<div class=\"a-col1-title g-fs-07 g-fw-700\">CHALLENGE BRIEF</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-card g-white-bg g-mt-04 g-p-12 g-bdrrad-4px\">\r\n\t\t\t\t<ng-container *ngIf=\"!overviewLoading\">\r\n\t\t\t\t\t<div class=\"a-overview-cnt1-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt1 g-fs-11 g-fw-500\">Challenge Summary</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt2-wrp g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt2 g-fs-07 g-lh-10\" [innerHtml]=\"anchorData?.data.challenge_summary\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt1-wrp g-mt-16\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt1 g-fs-11 g-fw-500\">Challenge Scenario</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt2-wrp g-mt-04\" *ngIf=\"anchorData?.data.challenge_scenario != ''\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt2 g-fs-07 g-lh-10\" [innerHtml]=\"anchorData?.data.challenge_scenario\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt1-wrp g-mt-16\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt1 g-fs-11 g-fw-500\">Profile of Target Beneficiaries</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt2-wrp g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt2 g-fs-07 g-lh-10\" [innerHtml]=\"anchorData?.data.target_beneficiaries\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt1-wrp g-mt-16\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt1 g-fs-11 g-fw-500\">Solution Requirements</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt1-wrp g-mt-16\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt1 g-fs-09 g-opacity-08 g-fw-500\">Functional requirements of the end-user</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt2-wrp g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt2 g-fs-07 g-lh-10\" [innerHtml]=\"anchorData?.data.functional_requirements\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt1-wrp g-mt-16\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt1 g-fs-09 g-opacity-08 g-fw-500\">Functional & Operational capabilities</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt2-wrp g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt2 g-fs-07 g-lh-10\" [innerHtml]=\"anchorData?.data.functional_operational_capabilities\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt1-wrp g-mt-16\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt1 g-fs-11 g-fw-500\">Expected Tangible Outcomes & Benefits</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt2-wrp g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt2 g-fs-07 g-lh-10\" [innerHtml]=\"anchorData?.data.tangible_outcomes_benefits\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt1-wrp g-mt-16\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt1 g-fs-11 g-fw-500\">Deployment Constraints</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-overview-cnt2-wrp g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt2 g-fs-07 g-lh-10\" [innerHtml]=\"anchorData?.data.deployment_constraints\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"anchorData?.data.gaps_current_solution != ''\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt1-wrp g-mt-16\">\r\n\t\t\t\t\t\t\t<div class=\"a-overview-cnt1 g-fs-11 g-fw-500\">Gaps in current solution</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt2-wrp g-mt-04\">\r\n\t\t\t\t\t\t\t<div class=\"a-overview-cnt2 g-fs-07 g-lh-10\" [innerHtml]=\"anchorData?.data.gaps_current_solution\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"anchorData?.data.info_links.length > 0\">\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt1-wrp g-mt-16\">\r\n\t\t\t\t\t\t\t<div class=\"a-overview-cnt1 g-fs-11 g-fw-500\">Links to Additional Information</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-overview-cnt2-wrp g-mt-04\">\r\n\t\t\t\t\t\t\t<div class=\"a-overview-cnt2 g-fs-07 g-lh-10\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"anchorData?.data.info_links[0] != ''\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"l-overview-card-links\" [href]=\"anchorData?.data.info_links[0]\" target=\"_blank\"> Additional Information Document One </a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"anchorData?.data.info_links[1] != ''\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"l-overview-card-links\" [href]=\"anchorData?.data.info_links[1]\" target=\"_blank\"> Additional Information Document One </a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"anchorData?.data.info_links[2] != ''\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"l-overview-card-links\" [href]=\"anchorData?.data.info_links[2]\" target=\"_blank\"> Additional Information Document One </a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"overviewLoading\">\r\n\t\t\t\t\t<div class=\"brief-container\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of [].constructor(10)\">\r\n\t\t\t\t\t\t\t<div class=\"skeleton-loader-wrp g-mb-12\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '24px', width: '60%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" count=\"3\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-5\">\r\n\t\t\t<app-overview-pilots [anchorId]=\"anchorId\"></app-overview-pilots>\r\n\t\t\t<div class=\"g-pt-16\" *ngIf=\"!overviewLoading\">\r\n\t\t\t\t<app-overview-anchor [anchorId]=\"anchorId\" [challengeId]=\"anchorData?.data.frg_challenge_id.id\"></app-overview-anchor>\r\n\t\t\t</div>\r\n\t\t\t<app-anchor-applications [anchorId]=\"anchorId\"></app-anchor-applications>\r\n\t\t\t<app-anchor-eois [anchorId]=\"anchorId\"></app-anchor-eois>\r\n\t\t\t<app-overview-proposals [anchorId]=\"anchorId\"></app-overview-proposals>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-applications/anchor-applications.component.html":
  /*!*******************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-applications/anchor-applications.component.html ***!
    \*******************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsAnchorApplicationsAnchorApplicationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex a-justify-space-between\">\r\n\t<div class=\"a-col1-title-wrp\">\r\n\t\t<div class=\"a-col2-title g-fs-07 g-fw-700\">ALL APPLICATIONS</div>\r\n\t</div>\r\n\t<div class=\"a-view-all-wrp\">\r\n\t\t<a [routerLink]=\"['../review-applications']\" class=\"a-view-all g-fs-07 g-fw-700\">VIEW ALL <i class=\"fas fa-chevron-right\"></i></a>\r\n\t</div>\r\n</div>\r\n<div class=\"a-card g-white-bg g-mt-04 g-bdrrad-4px\">\r\n\t<ng-container *ngIf=\"!loading\">\r\n\t\t<ng-container *ngIf=\"applicationData.data.length > 0; else noApplications\">\r\n\t\t\t<div class=\"d-flex g-p-12 a-anchor-card-list a-justify-space-between\" *ngFor=\"let application of applicationData.data\">\r\n\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t<ng-container *ngIf=\"application.images\">\r\n\t\t\t\t\t\t<div class=\"a-solution-image-wrp g-mr-04\">\r\n\t\t\t\t\t\t\t<img [src]=\"serverUrl + application.images[0]\" class=\"g-w-100per g-bdrrad-4px\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"!application.images\">\r\n\t\t\t\t\t\t<div class=\"a-solution-image-wrp g-mr-04\">\r\n\t\t\t\t\t\t\t<img src=\"assets/img/a-noimg.png\" alt=\"Image\" class=\"g-w-100per\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<div class=\"a-anchor-main-cnt a-align-self-center\">\r\n\t\t\t\t\t\t<div class=\"a-city-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-city g-black5-clr g-fw-500 g-fs-08\">{{ application.name.length > 30 ? (application.name | slice: 0:30 | titlecase) + \"...\" : application.name }}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-by-time-wrp d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"a-anchor-by-wrp g-mr-04\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-anchor-by g-fs-06 g-black5-clr g-opacity-06\">\r\n\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/provider/{{ application.frg_provider_id.slug }}\" class=\"g-text-underline g-black5-clr g-opacity-06\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"application.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\t\tapplication.frg_provider_id.startup_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t? (application.frg_provider_id.startup_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: (application.frg_provider_id.startup_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"application.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\t\tapplication.frg_provider_id.enterprise_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t? (application.frg_provider_id.enterprise_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: (application.frg_provider_id.enterprise_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"application.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\t\tapplication.frg_provider_id.fullname.length > 20 ? (application.frg_provider_id.fullname | slice: 0:20 | titlecase) + \"\" : (application.frg_provider_id.fullname | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t\t}},\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-days-ago-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-days-ago g-fs-06 g-black5-clr g-opacity-06\">\r\n\t\t\t\t\t\t\t\t\t<span>{{ application.daysago }}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-solution-badget-cnt-wrp a-align-self-center\">\r\n\t\t\t\t\t<div class=\"a-solution-badge-wrp\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"a-solution-badge g-fs-06 g-fw-500 g-white-clr g-pt-02 g-pb-02\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t'a-shortlisted': application.application_status == 'Shortlist',\r\n\t\t\t\t\t\t\t\t'a-rejected': application.application_status == 'Reject',\r\n\t\t\t\t\t\t\t\t'a-onhold': application.application_status == 'Onhold'\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t{{ application.application_status }}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-template #noApplications>\r\n\t\t\t<div class=\"no-anchors\">\r\n\t\t\t\t<img src=\"assets/img/challenges/dust-bin.svg\" alt=\"delete\" />\r\n\t\t\t\t<span class=\"g-fs-07 g-ml-05 body-grey-clr\">No other Applications found at this moment</span>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"loading\">\r\n\t\t<div class=\"brief-container g-p-12\">\r\n\t\t\t<ng-container *ngFor=\"let item of [].constructor(3)\">\r\n\t\t\t\t<div class=\"skeleton-loader-wrp g-mb-10\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '20px', width: '60%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-eois/anchor-eois.component.html":
  /*!***************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-eois/anchor-eois.component.html ***!
    \***************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsAnchorEoisAnchorEoisComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex a-justify-space-between g-pt-16\">\r\n\t<div class=\"a-col1-title-wrp\">\r\n\t\t<div class=\"a-col2-title g-fs-07 g-fw-700\">EOIs SENT</div>\r\n\t</div>\r\n\t<div class=\"a-view-all-wrp\">\r\n\t\t<a [routerLink]=\"['../eoi']\" class=\"a-view-all g-fs-07 g-fw-700\">VIEW ALL <i class=\"fas fa-chevron-right\"></i></a>\r\n\t</div>\r\n</div>\r\n<div class=\"a-card g-white-bg g-mt-04 g-bdrrad-4px\">\r\n\t<ng-container *ngIf=\"!loading\">\r\n\t\t<ng-container *ngIf=\"eoiData.data.length > 0; else noEOIs\">\r\n\t\t\t<div class=\"d-flex g-p-12 a-anchor-card-list a-justify-space-between\" *ngFor=\"let eoi of eoiData.data\">\r\n\t\t\t\t<div class=\"a-anchor-main-cnt\">\r\n\t\t\t\t\t<div class=\"a-city-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-city g-black5-clr g-fw-500 g-fs-08\" [innerHTML]=\"truncateHTML(eoi.expected_outcomes)\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-by-time-wrp d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-anchor-by-wrp g-mr-04\">\r\n\t\t\t\t\t\t\t<div class=\"a-anchor-by g-fs-06 g-black5-clr g-opacity-06\">\r\n\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/seeker/{{ eoi.frg_seeker_id.slug }}\" class=\"g-text-underline g-black5-clr g-opacity-06\"> {{ eoi.frg_seeker_id.fullname | titlecase }} </a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-sendon-cnt-wrp a-align-self-end\">\r\n\t\t\t\t\t<div class=\"a-sendon-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-sendon g-fs-06 g-black5-clr g-opacity-06\">\r\n\t\t\t\t\t\t\tSent on:\r\n\t\t\t\t\t\t\t<span>{{ eoi.created_at | date: \"d MMM yyyy\" }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-template #noEOIs>\r\n\t\t\t<div class=\"no-anchors\">\r\n\t\t\t\t<img src=\"assets/img/challenges/dust-bin.svg\" alt=\"delete\" />\r\n\t\t\t\t<span class=\"g-fs-07 g-ml-05 body-grey-clr\">No other EOIs found at this moment</span>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"loading\">\r\n\t\t<div class=\"brief-container g-p-12\">\r\n\t\t\t<ng-container *ngFor=\"let item of [].constructor(3)\">\r\n\t\t\t\t<div class=\"skeleton-loader-wrp g-mb-10\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '20px', width: '60%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" count=\"3\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-anchor/overview-anchor.component.html":
  /*!***********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-anchor/overview-anchor.component.html ***!
    \***********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsOverviewAnchorOverviewAnchorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"widget-wrap\">\r\n\t<div class=\"section-title\">Other Anchors</div>\r\n\t<div class=\"widget-container\">\r\n\t\t<ng-container *ngIf=\"!widgetLoading\">\r\n\t\t\t<ng-container *ngIf=\"anchorData.length > 0; else noAnchors\">\r\n\t\t\t\t<div class=\"anchor-item\" *ngFor=\"let item of anchorData\">\r\n\t\t\t\t\t<div class=\"anchor-details\">\r\n\t\t\t\t\t\t<div class=\"city-name\" routerLink=\"/challenge/{{ item.frg_challenge_id.id }}/anchor/{{ item.id }}\">\r\n\t\t\t\t\t\t\t{{ item.frg_seeker_id.frg_smart_city_id.name }}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"author-info\">\r\n\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t<span routerLink=\"/seeker/{{ item.frg_seeker_id.slug }}\">\r\n\t\t\t\t\t\t\t\t{{ item.frg_seeker_id.fullname | titlecase }}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span>{{ item.created_at | date }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"stats\">\r\n\t\t\t\t\t\t<span>{{ item.solutions.length }}</span>\r\n\t\t\t\t\t\tSolutions\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"stats\">\r\n\t\t\t\t\t\t<span>0</span>\r\n\t\t\t\t\t\tPilot\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-template #noAnchors>\r\n\t\t\t\t<div class=\"no-anchors\">\r\n\t\t\t\t\t<img src=\"assets/img/challenges/dust-bin.svg\" alt=\"delete\" />\r\n\t\t\t\t\t<span class=\"g-fs-07 g-ml-05 body-grey-clr\">No other anchors found at this moment</span>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-template>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngIf=\"widgetLoading\">\r\n\t\t\t<div class=\"anchor-skeleton\" *ngFor=\"let item of [].constructor(5)\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '150px', margin: '0px 0px 5px', display: 'block' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px 0px 0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-pilots/overview-pilots.component.html":
  /*!***********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-pilots/overview-pilots.component.html ***!
    \***********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsOverviewPilotsOverviewPilotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex a-justify-space-between g-pt-16\">\r\n\t<div class=\"a-col1-title-wrp\">\r\n\t\t<div class=\"a-col2-title g-fs-07 g-fw-700\">PILOTS</div>\r\n\t</div>\r\n\t<div class=\"a-view-all-wrp\">\r\n\t\t<a [routerLink]=\"['../pilots']\" class=\"a-view-all g-fs-07 g-fw-700\">VIEW ALL <i class=\"fas fa-chevron-right\"></i></a>\r\n\t</div>\r\n</div>\r\n<div class=\"a-card g-white-bg g-mt-04 g-bdrrad-4px\">\r\n\t<ng-container *ngIf=\"!loading\">\r\n\t\t<ng-container *ngIf=\"pilotData.data.length > 0; else noPilots\">\r\n\t\t\t<div class=\"d-flex g-p-12 a-anchor-card-list a-justify-space-between\" *ngFor=\"let pilot of pilotData?.data\">\r\n\t\t\t\t<div class=\"a-anchor-main-cnt\">\r\n\t\t\t\t\t<div class=\"a-city-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-city g-black5-clr g-fw-500 g-fs-08\">\r\n\t\t\t\t\t\t\t{{ pilot.frg_eoi_id.frg_application_id.name.length > 30 ? (pilot.frg_eoi_id.frg_application_id.name | slice: 0:30 | titlecase) + \"...\" : pilot.frg_eoi_id.frg_application_id.name }}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-by-time-wrp d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-anchor-by-wrp g-mr-04\">\r\n\t\t\t\t\t\t\t<div class=\"a-anchor-by g-fs-06 g-black5-clr g-opacity-06\">\r\n\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/provider/{{ pilot.frg_provider_id.slug }}\" class=\"g-text-underline g-black5-clr g-opacity-06\">\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"pilot.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\tpilot.frg_provider_id.startup_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t? (pilot.frg_provider_id.startup_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t: (pilot.frg_provider_id.startup_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t\t\t\t>\r\n\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"pilot.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\tpilot.frg_provider_id.enterprise_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t? (pilot.frg_provider_id.enterprise_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t: (pilot.frg_provider_id.enterprise_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t\t\t\t>\r\n\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"pilot.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t{{ pilot.frg_provider_id.fullname.length > 20 ? (pilot.frg_provider_id.fullname | slice: 0:20 | titlecase) + \"\" : (pilot.frg_provider_id.fullname | titlecase) }},\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-days-ago-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-days-ago g-fs-06 g-black5-clr g-opacity-06\">\r\n\t\t\t\t\t\t\t\t<span>{{ pilot.daysago }}</span\r\n\t\t\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"pilot.daysago == 1\">day ago</span>\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"pilot.daysago > 1\">days ago</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-solution-badget-cnt-wrp a-align-self-center\">\r\n\t\t\t\t\t<div class=\"a-solution-badge-wrp\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"a-solution-badge g-fs-06 g-fw-500 g-white-clr g-pt-02 g-pb-02\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'a-shortlisted': pilot.pilot_status == 'Completed', 'a-onhold': pilot.pilot_status == 'Ongoing', 'a-rejected': pilot.pilot_status == 'Yet to Start' }\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t{{ pilot.pilot_status }}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-template #noPilots>\r\n\t\t\t<div class=\"no-anchors\">\r\n\t\t\t\t<img src=\"assets/img/challenges/dust-bin.svg\" alt=\"delete\" />\r\n\t\t\t\t<span class=\"g-fs-07 g-ml-05 body-grey-clr\">No other Pilots found at this moment</span>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"loading\">\r\n\t\t<div class=\"brief-container g-p-12\">\r\n\t\t\t<ng-container *ngFor=\"let item of [].constructor(3)\">\r\n\t\t\t\t<div class=\"skeleton-loader-wrp g-mb-12\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '20px', width: '60%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<!-- <div class=\"a-card g-white-bg g-mt-04 g-pt-14 g-pb-14 g-pl-23 g-pr-23 g-bdrrad-4px\" *ngIf=\"!pilotData.data\">\r\n            <div class=\"a-no-pilots g-fs-07 text-center\">\r\n                <span><i class=\"fas fa-trash\"></i></span>&nbsp;&nbsp;\r\n                <span>No active Pilots found at this moment</span>\r\n            </div>\r\n        </div> -->\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-proposals/overview-proposals.component.html":
  /*!*****************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-proposals/overview-proposals.component.html ***!
    \*****************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsOverviewProposalsOverviewProposalsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex a-justify-space-between g-pt-16\">\r\n\t<div class=\"a-col1-title-wrp\">\r\n\t\t<div class=\"a-col2-title g-fs-07 g-fw-700\">PILOT PROPOSALS RECEIVED</div>\r\n\t</div>\r\n\t<div class=\"a-view-all-wrp\">\r\n\t\t<a [routerLink]=\"['../review-proposals']\" class=\"a-view-all g-fs-07 g-fw-700\">VIEW ALL <i class=\"fas fa-chevron-right\"></i></a>\r\n\t</div>\r\n</div>\r\n<div class=\"a-card g-white-bg g-mt-04 g-bdrrad-4px\">\r\n\t<ng-container *ngIf=\"!loading\">\r\n\t\t<ng-container *ngIf=\"proposalData.data.length > 0; else noProposals\">\r\n\t\t\t<div class=\"d-flex g-p-12 a-anchor-card-list a-justify-space-between\" *ngFor=\"let proposal of proposalData?.data\">\r\n\t\t\t\t<div class=\"a-anchor-main-cnt\">\r\n\t\t\t\t\t<div class=\"a-city-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-city g-black5-clr g-fw-500 g-fs-08\">\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\tproposal.frg_eoi_id.frg_application_id.name.length > 30 ? (proposal.frg_eoi_id.frg_application_id.name | slice: 0:30 | titlecase) + \"...\" : proposal.frg_eoi_id.frg_application_id.name\r\n\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-by-time-wrp d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-anchor-by-wrp g-mr-04\">\r\n\t\t\t\t\t\t\t<div class=\"a-anchor-by g-fs-06 g-black5-clr g-opacity-06\">\r\n\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/provider/{{ proposal.frg_provider_id.slug }}\" class=\"g-text-underline g-black5-clr g-opacity-06\">\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"proposal.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\tproposal.frg_provider_id.startup_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t? (proposal.frg_provider_id.startup_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t: (proposal.frg_provider_id.startup_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t\t\t\t>\r\n\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"proposal.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\tproposal.frg_provider_id.enterprise_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t? (proposal.frg_provider_id.enterprise_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t: (proposal.frg_provider_id.enterprise_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t\t\t\t>\r\n\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"proposal.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t{{ proposal.frg_provider_id.fullname.length > 20 ? (proposal.frg_provider_id.fullname | slice: 0:20 | titlecase) + \"\" : (proposal.frg_provider_id.fullname | titlecase) }},\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-days-ago-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-days-ago g-fs-06 g-black5-clr g-opacity-06\">\r\n\t\t\t\t\t\t\t\t<span>{{ proposal.daysago }}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-solution-badget-cnt-wrp a-align-self-center\">\r\n\t\t\t\t\t<div class=\"a-solution-badge-wrp\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"a-solution-badge g-fs-06 g-fw-500 g-white-clr g-pt-02 g-pb-02\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'a-shortlisted': proposal.proposal_stage == 'Pilot Ready', 'a-onhold': proposal.proposal_stage == 'Pre-Pilot' }\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t{{ proposal.proposal_stage }}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-template #noProposals>\r\n\t\t\t<div class=\"no-anchors\">\r\n\t\t\t\t<img src=\"assets/img/challenges/dust-bin.svg\" alt=\"delete\" />\r\n\t\t\t\t<span class=\"g-fs-07 g-ml-05 body-grey-clr\">No other Proposals found at this moment</span>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"loading\">\r\n\t\t<div class=\"brief-container g-p-12\">\r\n\t\t\t<ng-container *ngFor=\"let item of [].constructor(3)\">\r\n\t\t\t\t<div class=\"skeleton-loader-wrp g-mb-10\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '20px', width: '60%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" count=\"3\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/create-eoi/create-eoi.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/create-eoi/create-eoi.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensCreateEoiCreateEoiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!pageLoading\">\r\n\t<div class=\"edit-challenge-brief-parent g-pt-35 g-pb-20\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t<div class=\"g-pb-10 g-pt-08\">\r\n\t\t\t\t\t\t<span class=\"g-fs-10 g-fw-500 g-black-clr g-cursor-pointer\" routerLink=\"../\"> <i class=\"fas fa-arrow-left\"></i>&nbsp; Back to EOIs </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"challenge-step-tabs g-mb-10\">\r\n\t\t\t\t\t\t<div [ngClass]=\"{ active: !sendEOIStep1, '': sendEOIStep1 }\"><a href=\"#scope\" class=\"g-black5-clr\" data-toggle=\"tab\">Scope of Pilot</a></div>\r\n\t\t\t\t\t\t<div [ngClass]=\"{ active: !sendEOIStep2, '': sendEOIStep2 }\"><a href=\"#timeline\" class=\"g-black5-clr\" data-toggle=\"tab\">Timeline & Budget</a></div>\r\n\t\t\t\t\t\t<!-- <div [ngClass]=\"{ active: !sendEOIStep3 }\"><a href=\"#drafts\" class=\"g-black5-clr\" data-toggle=\"tab\">Drafts</a></div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"tab-content col-md-6\">\r\n\t\t\t\t\t<div class=\"section-title g-fs-19 g-fw-500 title-clr g-mb-08\">Pilot Requirements</div>\r\n\t\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t\t<div id=\"scope\" class=\"tab-pane step-form-parent\" [ngClass]=\"{ active: !sendEOIStep1 }\" [hidden]=\"sendEOIStep1\">\r\n\t\t\t\t\t\t<div class=\"g-py-3\">\r\n\t\t\t\t\t\t\t<div class=\"title-clr g-fw-500 g-fs-16\">Scope of Pilot</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form [formGroup]=\"sendEOIForm.Step1\" (ngSubmit)=\"stepFormSubmit('Step1')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\tGoals of the Pilot<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\"> Define the specific objectives of the pilot deployment to provide an overview of expectations to the innovator. </span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"The scope of the pilot should be defined in the context of helping innovators understand and keep in mind as to what will be helpful to test the feasibility, operationalisation, duration, cost and risks of the full-scale implementation? \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"goals_of_pilot\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.goals_of_pilot.touched || isSubmitted.Step1) && formControlStep1.goals_of_pilot?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.goals_of_pilot.touched || isSubmitted.Step1) && formControlStep1.goals_of_pilot.errors?.required\"> Value is required </span>\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.goals_of_pilot.touched || isSubmitted.Step1) && formControlStep1.goals_of_pilot.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tExpected Quantifiable Outcomes <span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tExpected Quantifiable Outcomes* What are the quantifiable outcomes, metrics, success factors, and impact indicators that the solution should deliver by the end of the pilot\r\n\t\t\t\t\t\t\t\t\t\timplementation for the pilot to be considered successful and complete?\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"The city spans around 250 km2 and has about 60,000 streetlights, due to the absence of a centralised monitoring system, maintenance of these streetlights is laborious, expensive and time-consuming. Identifying the exact location of the faulty lamp, leakage of current, or breakage of cables is currently a manual process based on citizen grievances received and consumes about 1-2 working days at an approximate cost of Rs.2000/- per streetlamp. \r\n                                    Additionally, unidentified & unchecked current leakage can be life-threatening to both lineman operators & citizens. There needs to be a centralised system that detects the faults in realtime, identifies the type of fault, and locates where the fault has occurred in the city.\r\n                                    \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"expected_outcomes\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.expected_outcomes.touched || isSubmitted.Step1) && formControlStep1.expected_outcomes?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.expected_outcomes.touched || isSubmitted.Step1) && formControlStep1.expected_outcomes.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.expected_outcomes.touched || isSubmitted.Step1) && formControlStep1.expected_outcomes.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tPilot Deployment details <span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tSpecify the type of deployment in terms of physical/virtual location where pilots are to be implemented and the area which the pilot will cover.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. <span class='g-black5-clr g-fw-500'>Lineman:</span> The service personnel from the electricity department who spends hours in manually identifying faulty street lights and in fixing the same.<br><br> 2. <span class='g-black5-clr g-fw-500'>Electricity Department:</span> Officers, junior engineers, and sub-divisional engineers in the electricity department responsible for the operation & maintenance of street lights in the city and managing the linemen in the field. They face challenges in operations & maintenance since it is being done manually and in an unorganised manner.\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"deployment_details\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.deployment_details.touched || isSubmitted.Step1) && formControlStep1.deployment_details?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.deployment_details.touched || isSubmitted.Step1) && formControlStep1.deployment_details.errors?.required\"> Value is required </span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.deployment_details.touched || isSubmitted.Step1) && formControlStep1.deployment_details.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t\t<div id=\"timeline\" class=\"tab-pane step-form-parent\" [ngClass]=\"{ active: !sendEOIStep2 }\" [hidden]=\"sendEOIStep2\">\r\n\t\t\t\t\t\t<div class=\"g-py-3\">\r\n\t\t\t\t\t\t\t<div class=\"title-clr g-fw-500 g-fs-16\">Timeline & Budget</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form [formGroup]=\"sendEOIForm.Step2\" (ngSubmit)=\"stepFormSubmit('Step2')\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"month\" class=\"g-fs-07 lable-grey g-fw-400\"> Months* </label>\r\n\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"deployment_time_month\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"deployment_time_month\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.deployment_time_month.touched || isSubmitted.Step2) && formControlStep2.deployment_time_month?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Month</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let month of monthArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"month\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ month }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.deployment_time_month.touched || isSubmitted.Step2) && formControlStep2.deployment_time_month?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMonth is required\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"month\" class=\"g-fs-07 lable-grey g-fw-400\"> Weeks* </label>\r\n\t\t\t\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"deployment_time_week\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"deployment_time_week\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.deployment_time_week.touched || isSubmitted.Step2) && formControlStep2.deployment_time_week?.errors\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t<option selected=\"selected\" value=\"\">Select Week</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let week of weekArr\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"week\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ week }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.deployment_time_week.touched || isSubmitted.Step2) && formControlStep2.deployment_time_week?.required\"> Week is required </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tBudget Limits<br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\"> What is the cap of the budget available for this pilot implementation? (in Lakhs) </span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"far fa-question-circle g-p-clr\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"budget_limit\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.budget_limit.touched || isSubmitted.Step2) && formControlStep2.budget_limit?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"ex: &#8377; 10000\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.budget_limit.touched || isSubmitted.Step2) && formControlStep2.budget_limit?.required\"> Budget Limit is required </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tDeployment Constraints<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tWhat are the various critical deployment constraints that the Innovator must meet and be mindful of during the pilot implementation in order to avoid failures or delays? These can\r\n\t\t\t\t\t\t\t\t\t\tinclude technical constraints, Inter-agency/interdepartmental dependencies, Regulatory requirements, etc.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. Identification & alerting of the type of fault—non-functioning of lights, leakage of current, and breakage of cable <br><br>\r\n                                        2. Identification of the exact location of the faulty street light in the city\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"deployment_constraints\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.deployment_constraints.touched || isSubmitted.Step2) && formControlStep2.deployment_constraints?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.deployment_constraints.touched || isSubmitted.Step2) && formControlStep2.deployment_constraints.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.deployment_constraints?.touched || isSubmitted.Step2) && formControlStep2.deployment_constraints?.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Submit</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- step 3 -->\r\n\t\t\t\t\t<!-- <div id=\"drafts\" class=\"tab-pane step-form-parent\" [ngClass]=\"{ active: !sendEOIStep3 }\" [hidden]=\"sendEOIStep3\"></div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n<ng-container *ngIf=\"pageLoading\">\r\n\t<div class=\"loader-wrp\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade a-create-challenge-modal\" id=\"confirmDialog\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-p-21\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-16 g-lh-19 g-fw-500 bg-blue-clr text-left\">Are you sure you want to exit your submssion?</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 body-grey-clr g-pt-07 text-left\">Going back will not save any of the information that you’ve provided in the input.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<button type=\"button\" #closebutton class=\"btn g-bdrrad-7px g-bdr-005 g-black5-brdr g-fs-12 g-w-bg g-pt-02 g-pb-02 g-pl-06 g-pr-06\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-27 text-left\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-p-brdr g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04\">Save Draft & Go Back&nbsp; <i class=\"fas fa-circle-notch fa-spin\"></i></button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-12 g-fs-08 g-pt-04 g-pb-04 g-pl-24 g-pr-24\" data-dismiss=\"modal\">Delete & Go Back</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/all-pilots/all-pilots.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/all-pilots/all-pilots.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensPilotsComponentsAllPilotsAllPilotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t<div class=\"d-flex g-mr-15\">\r\n\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t<ng-container *ngIf=\"pilotData.frg_eoi_id.frg_application_id.images\">\r\n\t\t\t\t\t\t<img [src]=\"serverUrl + pilotData.frg_eoi_id.frg_application_id.images[0]\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"!pilotData.frg_eoi_id.frg_application_id.images\">\r\n\t\t\t\t\t\t<img src=\"../../../../../../../assets/img/placeholder.jpg\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t<div class=\"a-card-title-wrp g-mt-01\">\r\n\t\t\t\t\t<a data-toggle=\"modal\" [attr.data-target]=\"'#' + itemId + '_pilotModal_' + pilotData.id\" class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\">\r\n\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\tpilotData.frg_eoi_id.frg_application_id.name.length > 30 ? (pilotData.frg_eoi_id.frg_application_id.name | slice: 0:30 | titlecase) + \"...\" : pilotData.frg_eoi_id.frg_application_id.name\r\n\t\t\t\t\t\t}}\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\tclass=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\"\r\n\t\t\t\t\t\tinnerHtml=\"{{\r\n\t\t\t\t\t\t\tpilotData.frg_eoi_id.frg_application_id.solution_brief.length > 110\r\n\t\t\t\t\t\t\t\t? (pilotData.frg_eoi_id.frg_application_id.solution_brief | slice: 0:110) + '...'\r\n\t\t\t\t\t\t\t\t: pilotData.frg_eoi_id.frg_application_id.solution_brief\r\n\t\t\t\t\t\t}}\"\r\n\t\t\t\t\t></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex a-justify-space-between a-flex-grow-1\">\r\n\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t<div class=\"a-company-name-wrp g-mt-02\">\r\n\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"pilotData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{ pilotData.frg_eoi_id.frg_application_id.frg_provider_id.startup_company_name }}\">\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\tpilotData.frg_eoi_id.frg_application_id.frg_provider_id.startup_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t? (pilotData.frg_eoi_id.frg_application_id.frg_provider_id.startup_company_name | slice: 0:20 | titlecase) + \"...\"\r\n\t\t\t\t\t\t\t\t\t: (pilotData.frg_eoi_id.frg_application_id.frg_provider_id.startup_company_name | titlecase)\r\n\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-opacity-06\">Startup</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"pilotData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{ pilotData.frg_eoi_id.frg_application_id.frg_provider_id.enterprise_company_name }}\">\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\tpilotData.frg_eoi_id.frg_application_id.frg_provider_id.enterprise_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t? (pilotData.frg_eoi_id.frg_application_id.frg_provider_id.enterprise_company_name | slice: 0:20 | titlecase) + \"...\"\r\n\t\t\t\t\t\t\t\t\t: (pilotData.frg_eoi_id.frg_application_id.frg_provider_id.enterprise_company_name | titlecase)\r\n\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-opacity-06\">Enterprise</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"pilotData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{ pilotData.frg_eoi_id.frg_application_id.frg_provider_id.fullname }}\">\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\tpilotData.frg_eoi_id.frg_application_id.frg_provider_id.fullname.length > 20\r\n\t\t\t\t\t\t\t\t\t? (pilotData.frg_eoi_id.frg_application_id.frg_provider_id.fullname | slice: 0:20 | titlecase) + \"...\"\r\n\t\t\t\t\t\t\t\t\t: (pilotData.frg_eoi_id.frg_application_id.frg_provider_id.fullname | titlecase)\r\n\t\t\t\t\t\t\t}}, </span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-opacity-06\">Individual</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-flex-item text-right\">\r\n\t\t\t\t<ng-container *ngIf=\"pilotData.pilot_status != 'Completed'\">\r\n\t\t\t\t\t<div class=\"a-status-select-wrp\">\r\n\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\tclass=\"form-control a-status-select text-left g-fs-07 g-fw-500 l-disc-offer-slt g-black7-clr g-h-25 g-w-90\"\r\n\t\t\t\t\t\t\t[class.ongoing]=\"pilotData.pilot_status === 'Ongoing'\"\r\n\t\t\t\t\t\t\t(change)=\"handleChangeStatus($event.target.value)\"\r\n\t\t\t\t\t\t\tvalue=\"{{ pilotData.pilot_status != 'Yet to Start' ? pilotData.pilot_status : '' }}\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<option value=\"\" selected disabled>Select Status</option>\r\n\t\t\t\t\t\t\t<option value=\"Completed\" [disabled]=\"pilotData.pilot_status != 'Ongoing'\">Completed</option>\r\n\t\t\t\t\t\t\t<option value=\"Ongoing\">Ongoing</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"upload-btn\" data-toggle=\"modal\" [attr.data-target]=\"'#' + itemId + '_orderUploadModal_' + pilotData.id\"><i class=\"fas fa-upload\"></i>Upload Pilot Order</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"pilotData.pilot_status == 'Completed'\">\r\n\t\t\t\t\t<div class=\"status-pill completed\">Completed</div>\r\n\t\t\t\t\t<div class=\"upload-btn\" data-toggle=\"modal\" [attr.data-target]=\"'#' + itemId + '_reportUploadModal_' + pilotData.id\"><i class=\"fas fa-upload\"></i>Upload Pilot Report</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"loader\" [class.active]=\"statusUpdating\">\r\n\t\t<div class=\"loaderBar\"></div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Proposal Modal -->\r\n<div class=\"modal fade\" id=\"{{ itemId }}_pilotModal_{{ pilotData.id }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-pl-16 g-pr-16 g-pt-18 g-pb-18\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center\">\r\n\t\t\t\t\t<div class=\"d-flex a-align-item-center\">\r\n\t\t\t\t\t\t<div class=\"a-title-wrp g-mr-10\">\r\n\t\t\t\t\t\t\t<div class=\"title g-black-clr g-fw-500 g-fs-12 g-lh-14\">\r\n\t\t\t\t\t\t\t\t{{ pilotData.frg_anchor_id.frg_challenge_id.name }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-city-badge-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-city g-fs-06 g-lh-07 g-p-bg g-white-clr g-pt-01 g-pb-01 g-pl-04 g-pr-04 g-bdrrad-4px\">\r\n\t\t\t\t\t\t\t\t{{ pilotData.frg_anchor_id.frg_seeker_id.frg_smart_city_id.name | uppercase }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-close-icon-wrp\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-03\">\r\n\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-grey4-clr\">\r\n\t\t\t\t\t\t{{ pilotData.frg_eoi_id.frg_application_id.name }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t<div class=\"a-flex-item a-cnt1-flex-item g-mr-24 g-mt-18\">\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Scope of Customization</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"flex-item1\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-title-2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-title-2 g-black-clr g-fs-08 g-lh-10\">Customization Details</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black5-clr g-fw-400 g-lh-08\" [innerHtml]=\"pilotData.customisation_details\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"a-title-2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-title-2 g-black-clr g-fs-08 g-lh-10\">Customization Outcomes</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black5-clr g-fw-400 g-lh-08\" [innerHtml]=\"pilotData.outcomes\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<hr class=\"g-mt-16 g-mb-14\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item2\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Deployment Timeline & Budget</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Time to Pilot</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ pilotData.time_of_pilot.months }} Months {{ pilotData.time_of_pilot.weeks }} weeks</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Time for Commissioning</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ pilotData.time_of_commission.months }} Months {{ pilotData.time_of_commission.weeks }} weeks</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-17\">\r\n\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Pilot Implementation & Monitoring timeline</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ pilotData.implementation_monitoring_timeline.months }} Months {{ pilotData.implementation_monitoring_timeline.weeks }} weeks</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"g-black-clr g-fs-08 g-lh-10\"> Budget </label>\r\n\t\t\t\t\t\t\t<div class=\"a-budget-wrp g-pt-04\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-budget-item--wrp g-pl-10 g-pr-10 g-pb-07\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Solution Design/Dev Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ pilotData.budget.solution_design_dev_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">CapEx Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ pilotData.budget.capex_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Installation & Commissioning Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ pilotData.budget.installation_commission_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Operations/Monitoring & Report Generation Analysis Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ pilotData.budget.operations_monitoring_analysis_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"a-budget-total-wrp g-pl-10 g-pr-10 g-pb-07\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Total Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ pilotData.budget.total_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Track Record & Team</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Track Record</div>\r\n\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\" [innerHtml]=\"pilotData.track_record\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-18\">\r\n\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Core Team Capabilities</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Team Size</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">\r\n\t\t\t\t\t\t\t\t\t{{ pilotData.team_size }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Team Members</div>\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pilotData.team_member\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ item.name }}</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Expertise</div>\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pilotData.team_member\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ item.expertise }}</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp g-mt-18\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Dependencies & Additional Details</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-title-2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"a-title-2 g-black-clr g-fs-08 g-lh-10\">Dependencies for deployment</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black5-clr g-fw-400 g-lh-08\" [innerHtml]=\"pilotData.dependencies\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-flex-item a-cnt2-flex-item g-mt-18\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"pilotData.reports_of_past_pilot\">\r\n\t\t\t\t\t\t\t<div class=\"a-col2-title-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-col2-title g-fs-08 g-lh-10 g-fw-500\">Past Pilot Implementation Reports</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-s1-cnt-wrp g-pl-06 g-pr-06 g-pt-11 g-pb-11\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pilotData.reports_of_past_pilot\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sub-cnt-wrp g-pr-04 g-pl-05 g-pt-05 g-pb-07 g-mb-06\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mr-07 a-word-break\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-text-underline g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ extractFileName(item) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn g-p-clr g-fs-06 g-lh-07 g-white-bg g-pt-05 g-pb-05 g-pr-07 g-pl-07 a-download-file-btn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[href]=\"serverUrl + item\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[download]=\"extractFileName(item)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>Download File</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"pilotData.additional_details\">\r\n\t\t\t\t\t\t\t<div class=\"a-col2-title-wrp g-mt-15\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-col2-title g-fs-08 g-lh-10 g-fw-500\">Additional Details</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-s1-cnt-wrp g-pl-06 g-pr-06 g-pt-11 g-pb-11 g-mb-12\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pilotData.additional_details\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sub-cnt-wrp g-pr-04 g-pl-05 g-pt-05 g-pb-07 g-mb-06\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mr-07 a-word-break\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-text-underline g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ extractFileName(item) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn g-p-clr g-fs-06 g-lh-07 g-white-bg g-pt-05 g-pb-05 g-pr-07 g-pl-07 a-download-file-btn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[href]=\"serverUrl + item\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[download]=\"extractFileName(item)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>Download File</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"pilotData.pilot_order\">\r\n\t\t\t\t\t\t\t<div class=\"a-col2-title-wrp g-mt-15\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-col2-title g-fs-08 g-lh-10 g-fw-500\">Pilot Order</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-s1-cnt-wrp g-pl-06 g-pr-06 g-pt-11 g-pb-11 g-mb-12\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pilotData.pilot_order\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sub-cnt-wrp g-pr-04 g-pl-05 g-pt-05 g-pb-07 g-mb-06\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mr-07 a-word-break\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-text-underline g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ extractFileName(item) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn g-p-clr g-fs-06 g-lh-07 g-white-bg g-pt-05 g-pb-05 g-pr-07 g-pl-07 a-download-file-btn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[href]=\"serverUrl + item\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[download]=\"extractFileName(item)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>Download File</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"pilotData.pilot_report\">\r\n\t\t\t\t\t\t\t<div class=\"a-col2-title-wrp g-mt-15\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-col2-title g-fs-08 g-lh-10 g-fw-500\">Pilot Report</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-s1-cnt-wrp g-pl-06 g-pr-06 g-pt-11 g-pb-11 g-mb-12\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pilotData.pilot_report\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sub-cnt-wrp g-pr-04 g-pl-05 g-pt-05 g-pb-07 g-mb-06\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mr-07 a-word-break\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-text-underline g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ extractFileName(item) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn g-p-clr g-fs-06 g-lh-07 g-white-bg g-pt-05 g-pb-05 g-pr-07 g-pl-07 a-download-file-btn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[href]=\"serverUrl + item\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[download]=\"extractFileName(item)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>Download File</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Pilot order upload Modal -->\r\n<div class=\"modal fade\" id=\"{{ itemId }}_orderUploadModal_{{ pilotData.id }}\" role=\"dialog\" data-backdrop=\"static\" data-keyboard=\"false\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-p-0\">\r\n\t\t\t\t<div class=\"upload-wrapper\" [class.active]=\"loading\">\r\n\t\t\t\t\t<div class=\"upload-inner\">\r\n\t\t\t\t\t\t<div class=\"a-close-icon-wrp\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-15 g-lh-16 bg-blue-clr g-fw-500 g-mb-14\">Add Pilot Orders</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-08 g-black-clr g-opacity-06\">Upload File</div>\r\n\t\t\t\t\t\t<div class=\"add-doc\">\r\n\t\t\t\t\t\t\t<input type=\"file\" id=\"{{ itemId }}_orderupload_file_{{ pilotData.id }}\" class=\"inputfile\" (change)=\"uploadFile($event.target.files)\" />\r\n\t\t\t\t\t\t\t<label for=\"{{ itemId }}_orderupload_file_{{ pilotData.id }}\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t<span class=\"g-mr-06 g-fs-07\">Add File</span>\r\n\t\t\t\t\t\t\t\t<i class=\"far fa-plus-square\"></i>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let file of fileNameArr; let i = index\">\r\n\t\t\t\t\t\t\t<div class=\"file-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"file-col\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-file-alt\"></i>\r\n\t\t\t\t\t\t\t\t\t{{ file.length > 50 ? (file | slice: 0:50) + \"..\" : file }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"remove-col text-right\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"removeFile(i)\"><i class=\"far fa-trash-alt\"></i></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"loader\" [class.active]=\"loading\">\r\n\t\t\t\t\t\t<div class=\"loaderBar\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Pilot report upload Modal -->\r\n<div class=\"modal fade\" id=\"{{ itemId }}_reportUploadModal_{{ pilotData.id }}\" role=\"dialog\" data-backdrop=\"static\" data-keyboard=\"false\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-p-0\">\r\n\t\t\t\t<div class=\"upload-wrapper\" [class.active]=\"loading\">\r\n\t\t\t\t\t<div class=\"upload-inner\">\r\n\t\t\t\t\t\t<div class=\"a-close-icon-wrp\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-15 g-lh-16 bg-blue-clr g-fw-500 g-mb-14\">Add Pilot Reports</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-08 g-black-clr g-opacity-06\">Upload File</div>\r\n\t\t\t\t\t\t<div class=\"add-doc\">\r\n\t\t\t\t\t\t\t<input type=\"file\" id=\"{{ itemId }}_reportupload_file_{{ pilotData.id }}\" class=\"inputfile\" (change)=\"uploadReport($event.target.files)\" />\r\n\t\t\t\t\t\t\t<label for=\"{{ itemId }}_reportupload_file_{{ pilotData.id }}\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t<span class=\"g-mr-06 g-fs-07\">Add File</span>\r\n\t\t\t\t\t\t\t\t<i class=\"far fa-plus-square\"></i>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let file of reportNameArr; let i = index\">\r\n\t\t\t\t\t\t\t<div class=\"file-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"file-col\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-file-alt\"></i>\r\n\t\t\t\t\t\t\t\t\t{{ file.length > 50 ? (file | slice: 0:50) + \"..\" : file }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"remove-col text-right\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"removeReport(i)\"><i class=\"far fa-trash-alt\"></i></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"loader\" [class.active]=\"loading\">\r\n\t\t\t\t\t\t<div class=\"loaderBar\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/completed-pilots/completed-pilots.component.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/completed-pilots/completed-pilots.component.html ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensPilotsComponentsCompletedPilotsCompletedPilotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-review-applications-wrp\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\tShowing &nbsp;\r\n\t\t\t\t<span class=\"g-blue3-clr\">1-10</span>\r\n\t\t\t\t&nbsp;of\r\n\t\t\t\t<span class=\"g-black7-clr\">20</span>&nbsp;\r\n\t\t\t\t<span class=\"g-black7-clr\">Cities</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-7 g-pr-0\">\r\n\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-5\">\r\n\t\t\t\t\t<select class=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\" id=\"sel1\">\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t\t<div class=\"d-flex g-mr-33\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t\t<img src=\"assets/img/review.png\" class=\"g-w-100per\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t\t<div class=\"a-card-title-wrp g-mt-01\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\"> Intelligent waterbody management system </a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t\t<div class=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\">Aenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tell...</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"d-flex a-justify-space-between a-flex-grow-1\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-company-name-wrp g-mt-02\">\r\n\t\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\">\r\n\t\t\t\t\t\t\t<span>Bariflo Labs Pvt Ltd,</span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-opacity-06\">Startup</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-status-select-wrp pull-right\">\r\n\t\t\t\t\t\t<select class=\"form-control a-status-select text-right g-fs-07 g-fw-500 l-disc-offer-slt g-black7-clr g-h-25 g-w-90\" id=\"sel1\">\r\n\t\t\t\t\t\t\t<option default>Select Status</option>\r\n\t\t\t\t\t\t\t<option value=\"shortlist\">Shortlist</option>\r\n\t\t\t\t\t\t\t<option value=\"Onhold\">OnHold</option>\r\n\t\t\t\t\t\t\t<option value=\"Reject\">Reject</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-11 g-pl-15 g-pr-15\">\r\n\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge g-fs-08 g-black5-clr g-opacity-06\">Water bodies preservation & monitoring</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-sector-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-black5-clr g-opacity-06\">Water Management</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08 g-opacity-06\">\r\n\t\t\t\t\t\t\t<span class=\"g-black5-clr\">Solution Submission Date: </span>\r\n\t\t\t\t\t\t\t<span class=\"g-black-clr\">21/02/21</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/components/pilot-proposal-modal/pilot-proposal-modal.component.html":
  /*!***********************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/components/pilot-proposal-modal/pilot-proposal-modal.component.html ***!
    \***********************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensPilotsComponentsOngoingPilotsComponentsPilotProposalModalPilotProposalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-card-title-wrp g-mt-01\">\r\n\t<a href=\"#\" class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\" data-toggle=\"modal\" data-target=\"#pilotProposalModal\"> Intelligent waterbody management system </a>\r\n</div>\r\n<div class=\"modal fade\" id=\"pilotProposalModal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content a-modal-content\">\r\n\t\t\t<div class=\"modal-body g-pl-12 g-pr-12 g-pt-11 g-pb-18\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t<div class=\"a-modal-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-modal-title bg-blue-clr g-fs-14 g-fw-500\">Pilot Proposal</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-modal-header-btn-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-close-btn-wrp\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-white-bg\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/img/a-close-icon.png\" alt=\"Image\" />\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-user-name-wrp\">\r\n\t\t\t\t\t<div class=\"a-user-name\">\r\n\t\t\t\t\t\t<span class=\"g-black5-clr g-fs-11\">Rajesh, </span>\r\n\t\t\t\t\t\t<span class=\"g-black5-clr g-fs-11\">Entrepreneur</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"d-flex g-mt-12\">\r\n\t\t\t\t\t<div class=\"a-mail-wrp g-mr-16\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"g-black5-clr g-fs-07\"><i class=\"far fa-envelope\"></i>&nbsp;ravi.shankar@mhrd.gov.in</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-user-type g-mr-16\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"g-black5-clr g-fs-07\"><i class=\"fas fa-user-alt\"></i>&nbsp;Individual</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-location-type\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"g-black5-clr g-fs-07\"> <i class=\"fas fa-map-marker-alt\"></i>&nbsp;Banglore</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t<div class=\"a-phone g-mr-43\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"g-black5-clr g-fs-07\"><i class=\"fas fa-phone-alt\"></i>&nbsp;+91 98404 55764</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-site\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"g-black5-clr g-fs-07\"><i class=\"fas fa-globe\"></i>&nbsp;https://www.linkedin.com/in/ravishanka</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-title2-wrp g-mt-20\">\r\n\t\t\t\t\t<div class=\"a-title2 g-fs-08 body-light-clr\">Budgeting for Pilot</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-modal-main-cnts-wrp g-mt-10\">\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">Capital Expenses</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-07 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Id ultricies mi in integer. Viverra netus suspendisse elit enim, ut sagittis. In urna iaculis habitasse rhoncus habitant posuere.\r\n\t\t\t\t\t\t\tNunc ac hendrerit nisl massa dapibus vitae lectus ipsum rhoncus. Mauris potenti quis gravida vitae. Leo pulvinar nunc sit adipiscing faucibus a. Ipsum, turpis nunc porttitor venenatis\r\n\t\t\t\t\t\t\tarcu nisl.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">Operational Expenses</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-07 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Id ultricies mi in integer. Viverra netus suspendisse elit enim, ut sagittis. In urna iaculis habitasse rhoncus habitant posuere.\r\n\t\t\t\t\t\t\tNunc ac hendrerit nisl massa dapibus vitae lectus ipsum rhoncus. Mauris potenti quis gravida vitae. Leo pulvinar nunc sit adipiscing faucibus a. Ipsum, turpis nunc porttitor venenatis\r\n\t\t\t\t\t\t\tarcu nisl.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">Deployment Timeline</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-07 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-fs-07 g-lh-08\">June, 2021</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">Dependencies</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-13 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-fs-07 g-lh-08\">Rajesh Kumar (CEO), Ravi Shankar (Enterpreneur)</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">Scope of Customization</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-07 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Id ultricies mi in integer. Viverra netus suspendisse elit enim, ut sagittis. In urna iaculis habitasse rhoncus habitant posuere.\r\n\t\t\t\t\t\t\tNunc ac hendrerit nisl massa dapibus vitae lectus ipsum rhoncus. Mauris potenti quis gravida vitae. Leo pulvinar nunc sit adipiscing faucibus a. Ipsum, turpis nunc porttitor venenatis\r\n\t\t\t\t\t\t\tarcu nisl.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">Time for Customization</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-07 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-fs-07 g-lh-08\">June, 2021</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">Related Documents</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-07 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"a-cnt g-text-underline g-fs-07 g-lh-08\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a><br />\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"a-cnt g-text-underline g-fs-07 g-lh-08\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-btn-wrps d-flex a-justify-space-between g-mt-50\">\r\n\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-btn-wrp g-mr-10\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-yet-to-start g-fs-08 g-lh-11 g-p-07 body-light-clr\">Yet to Start</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-btn-wrp\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-ongoing g-fs-08 g-lh-11 g-p-07\">Ongoing</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-btn-wrp\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn a-pilot-implement g-fs-08 g-white-clr g-p-bg g-bdr-005 g-p-brdr g-lh-11 g-p-07\">Implement Pilot</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/ongoing-pilots.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/ongoing-pilots.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensPilotsComponentsOngoingPilotsOngoingPilotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-review-applications-wrp\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\tShowing &nbsp;\r\n\t\t\t\t<span class=\"g-blue3-clr\">1-10</span>\r\n\t\t\t\t&nbsp;of\r\n\t\t\t\t<span class=\"g-black7-clr\">20</span>&nbsp;\r\n\t\t\t\t<span class=\"g-black7-clr\">Cities</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-7 g-pr-0\">\r\n\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-5\">\r\n\t\t\t\t\t<select class=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\" id=\"sel1\">\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t\t<div class=\"d-flex g-mr-33\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t\t<img src=\"assets/img/review.png\" class=\"g-w-100per\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t\t<app-pilot-proposal-modal></app-pilot-proposal-modal>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t\t<div class=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\">Aenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tell...</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"d-flex a-justify-space-between a-flex-grow-1\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-company-name-wrp g-mt-02\">\r\n\t\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\">\r\n\t\t\t\t\t\t\t<span>Bariflo Labs Pvt Ltd,</span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-opacity-06\">Startup</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-status-select-wrp pull-right\">\r\n\t\t\t\t\t\t<select class=\"form-control a-status-select text-right g-fs-07 g-fw-500 l-disc-offer-slt g-black7-clr g-h-25 g-w-90\" id=\"sel1\">\r\n\t\t\t\t\t\t\t<option default>Select Status</option>\r\n\t\t\t\t\t\t\t<option value=\"shortlist\">Shortlist</option>\r\n\t\t\t\t\t\t\t<option value=\"Onhold\">OnHold</option>\r\n\t\t\t\t\t\t\t<option value=\"Reject\">Reject</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-11 g-pl-15 g-pr-15\">\r\n\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge g-fs-08 g-black5-clr g-opacity-06\">Water bodies preservation & monitoring</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-sector-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-black5-clr g-opacity-06\">Water Management</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08 g-opacity-06\">\r\n\t\t\t\t\t\t\t<span class=\"g-black5-clr\">Solution Submission Date: </span>\r\n\t\t\t\t\t\t\t<span class=\"g-black-clr\">21/02/21</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-order-upload/pilot-order-upload.component.html":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-order-upload/pilot-order-upload.component.html ***!
    \*****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensPilotsComponentsPilotOrderUploadPilotOrderUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"upload-btn\" data-toggle=\"modal\" [attr.data-target]=\"'#orderUploadModal_' + pilotId\"><i class=\"fas fa-upload\"></i>Upload Pilot Order</div>\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-report-upload/pilot-report-upload.component.html":
  /*!*******************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-report-upload/pilot-report-upload.component.html ***!
    \*******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensPilotsComponentsPilotReportUploadPilotReportUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>pilot-report-upload works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/yet-to-start-pilots/yet-to-start-pilots.component.html":
  /*!*******************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/yet-to-start-pilots/yet-to-start-pilots.component.html ***!
    \*******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensPilotsComponentsYetToStartPilotsYetToStartPilotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-review-applications-wrp\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\tShowing &nbsp;\r\n\t\t\t\t<span class=\"g-blue3-clr\">1-10</span>\r\n\t\t\t\t&nbsp;of\r\n\t\t\t\t<span class=\"g-black7-clr\">20</span>&nbsp;\r\n\t\t\t\t<span class=\"g-black7-clr\">Cities</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-7 g-pr-0\">\r\n\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-5\">\r\n\t\t\t\t\t<select class=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\" id=\"sel1\">\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t\t<div class=\"d-flex g-mr-33\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t\t<img src=\"assets/img/review.png\" class=\"g-w-100per\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t\t<div class=\"a-card-title-wrp g-mt-01\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\"> Intelligent waterbody management system </a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t\t<div class=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\">Aenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tell...</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"d-flex a-justify-space-between a-flex-grow-1\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-company-name-wrp g-mt-02\">\r\n\t\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\">\r\n\t\t\t\t\t\t\t<span>Bariflo Labs Pvt Ltd,</span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-opacity-06\">Startup</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-status-select-wrp pull-right\">\r\n\t\t\t\t\t\t<select class=\"form-control a-status-select text-right g-fs-07 g-fw-500 l-disc-offer-slt g-black7-clr g-h-25 g-w-90\" id=\"sel1\">\r\n\t\t\t\t\t\t\t<option default>Select Status</option>\r\n\t\t\t\t\t\t\t<option value=\"shortlist\">Shortlist</option>\r\n\t\t\t\t\t\t\t<option value=\"Onhold\">OnHold</option>\r\n\t\t\t\t\t\t\t<option value=\"Reject\">Reject</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-11 g-pl-15 g-pr-15\">\r\n\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge g-fs-08 g-black5-clr g-opacity-06\">Water bodies preservation & monitoring</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-sector-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-black5-clr g-opacity-06\">Water Management</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08 g-opacity-06\">\r\n\t\t\t\t\t\t\t<span class=\"g-black5-clr\">Solution Submission Date: </span>\r\n\t\t\t\t\t\t\t<span class=\"g-black-clr\">21/02/21</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/pilots.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/pilots.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensPilotsPilotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container a-review-application-tab-cnts-wrp\">\r\n\t<div class=\"a-tab-wrp g-pt-25\">\r\n\t\t<ul class=\"nav nav-pills\">\r\n\t\t\t<li class=\"active\">\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#allapp\">All ({{ allPilotsCount }})</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#completed\">Completed ({{ completedPilotsCount }})</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#ongoing\">Ongoing ({{ onGoingPilotsCount }})</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#yetToStart\">Yet to start ({{ yetToStartCount }})</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\r\n\t\t<div class=\"tab-content g-pt-29\">\r\n\t\t\t<div id=\"allapp\" class=\"tab-pane fade in active\">\r\n\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!allLoading\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-blue3-clr\">{{ allPilots.currently_showing.from }}-{{ allPilots.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ allPilots.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Pilots</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of allPilots?.data; let i = index\">\r\n\t\t\t\t\t\t\t<app-all-pilots [pilotData]=\"item\" (onStatusChange)=\"handleStatusChange($event)\" [itemId]=\"'all' + i\"></app-all-pilots>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"allLoading\">\r\n\t\t\t\t\t\t<card-loader></card-loader>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"allPilots?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleAllPagination($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"completed\" class=\"tab-pane fade\">\r\n\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!completedLoading\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-blue3-clr\">{{ completedPilots.currently_showing.from }}-{{ completedPilots.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ completedPilots.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Pilots</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of completedPilots?.data; let i = index\">\r\n\t\t\t\t\t\t\t<app-all-pilots [pilotData]=\"item\" (onStatusChange)=\"handleStatusChange($event)\" [itemId]=\"'com' + i\"></app-all-pilots>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"completedLoading\">\r\n\t\t\t\t\t\t<card-loader></card-loader>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"completedPilots?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleCompletedPilots($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"ongoing\" class=\"tab-pane fade\">\r\n\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!onGoingLoading\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-blue3-clr\">{{ onGoingPilots.currently_showing.from }}-{{ onGoingPilots.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ onGoingPilots.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Pilots</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of onGoingPilots?.data; let i = index\">\r\n\t\t\t\t\t\t\t<app-all-pilots [pilotData]=\"item\" (onStatusChange)=\"handleStatusChange($event)\" [itemId]=\"'ong' + i\"></app-all-pilots>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"onGoingLoading\">\r\n\t\t\t\t\t\t<card-loader></card-loader>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"onGoingPilots?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleOnGoingPilots($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"yetToStart\" class=\"tab-pane fade\">\r\n\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!yetToStartLoading\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-blue3-clr\">{{ yetToStart.currently_showing.from }}-{{ yetToStart.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ yetToStart.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Pilots</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of yetToStart?.data; let i = index\">\r\n\t\t\t\t\t\t\t<app-all-pilots [pilotData]=\"item\" (onStatusChange)=\"handleStatusChange($event)\" [itemId]=\"'yts' + i\"></app-all-pilots>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"yetToStartLoading\">\r\n\t\t\t\t\t\t<card-loader></card-loader>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"yetToStart?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleQueryYetToStart($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/components/card-loader/card-loader.component.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/components/card-loader/card-loader.component.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewApplicationsComponentsCardLoaderCardLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngFor=\"let item of [].constructor(10)\">\r\n\t<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t\t<div class=\"d-flex g-mr-33\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\theight: '88px',\r\n\t\t\t\t\t\t\t\twidth: '88px',\r\n\t\t\t\t\t\t\t\t'border-radius': '6px',\r\n\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t\t<div class=\"a-card-title-wrp g-mt-01\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\t\t\twidth: '200px',\r\n\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t\t<div class=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\">\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t\t\tcount=\"3\"\r\n\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\t\t\twidth: '800px',\r\n\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- <div class=\"a-review-application-card-footer g-pt-10 g-pb-11 g-pl-15 g-pr-15\">\r\n\t\t\t<ngx-skeleton-loader\r\n\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\theight: '14px',\r\n\t\t\t\t\twidth: '100%',\r\n\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t}\"\r\n\t\t\t>\r\n\t\t\t</ngx-skeleton-loader>\r\n\t\t</div> -->\r\n\t</div>\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/components/on-hold/on-hold.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/components/on-hold/on-hold.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewApplicationsComponentsOnHoldOnHoldComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-review-applications-wrp\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\tShowing &nbsp;\r\n\t\t\t\t<span class=\"g-blue3-clr\">1-10</span>\r\n\t\t\t\t&nbsp;of\r\n\t\t\t\t<span class=\"g-black7-clr\">20</span>&nbsp;\r\n\t\t\t\t<span class=\"g-black7-clr\">Cities</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-7 g-pr-0\">\r\n\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-5\">\r\n\t\t\t\t\t<select class=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\" id=\"sel1\">\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t\t<div class=\"d-flex g-mr-33\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t\t<img src=\"assets/img/review.png\" class=\"g-w-100per\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t\t<div class=\"a-card-title-wrp g-mt-01\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\"> Intelligent waterbody management system </a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t\t<div class=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\">Aenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tell...</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"d-flex a-justify-space-between a-flex-grow-1\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-company-name-wrp g-mt-02\">\r\n\t\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\">\r\n\t\t\t\t\t\t\t<span>Bariflo Labs Pvt Ltd,</span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-opacity-06\">Startup</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-status-select-wrp pull-right\">\r\n\t\t\t\t\t\t<select class=\"form-control a-status-select text-right g-fs-07 g-fw-500 l-disc-offer-slt g-black7-clr g-h-25 g-w-90\" id=\"sel1\">\r\n\t\t\t\t\t\t\t<option default>Select Status</option>\r\n\t\t\t\t\t\t\t<option value=\"shortlist\">Shortlist</option>\r\n\t\t\t\t\t\t\t<option value=\"Onhold\">OnHold</option>\r\n\t\t\t\t\t\t\t<option value=\"Reject\">Reject</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-11 g-pl-15 g-pr-15\">\r\n\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge g-fs-08 g-black5-clr g-opacity-06\">Water bodies preservation & monitoring</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-sector-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-black5-clr g-opacity-06\">Water Management</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08 g-opacity-06\">\r\n\t\t\t\t\t\t\t<span class=\"g-black5-clr\">Solution Submission Date: </span>\r\n\t\t\t\t\t\t\t<span class=\"g-black-clr\">21/02/21</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/components/rejected/rejected.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/components/rejected/rejected.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewApplicationsComponentsRejectedRejectedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-review-applications-wrp\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\tShowing &nbsp;\r\n\t\t\t\t<span class=\"g-blue3-clr\">1-10</span>\r\n\t\t\t\t&nbsp;of\r\n\t\t\t\t<span class=\"g-black7-clr\">20</span>&nbsp;\r\n\t\t\t\t<span class=\"g-black7-clr\">Cities</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-7 g-pr-0\">\r\n\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-5\">\r\n\t\t\t\t\t<select class=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\" id=\"sel1\">\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t\t<div class=\"d-flex g-mr-33\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t\t<img src=\"assets/img/review.png\" class=\"g-w-100per\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t\t<div class=\"a-card-title-wrp g-mt-01\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\"> Intelligent waterbody management system </a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t\t<div class=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\">Aenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tell...</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"d-flex a-justify-space-between a-flex-grow-1\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-company-name-wrp g-mt-02\">\r\n\t\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\">\r\n\t\t\t\t\t\t\t<span>Bariflo Labs Pvt Ltd,</span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-opacity-06\">Startup</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-status-select-wrp pull-right\">\r\n\t\t\t\t\t\t<select class=\"form-control a-status-select text-right g-fs-07 g-fw-500 l-disc-offer-slt g-black7-clr g-h-25 g-w-90\" id=\"sel1\">\r\n\t\t\t\t\t\t\t<option default>Select Status</option>\r\n\t\t\t\t\t\t\t<option value=\"shortlist\">Shortlist</option>\r\n\t\t\t\t\t\t\t<option value=\"Onhold\">OnHold</option>\r\n\t\t\t\t\t\t\t<option value=\"Reject\">Reject</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-11 g-pl-15 g-pr-15\">\r\n\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge g-fs-08 g-black5-clr g-opacity-06\">Water bodies preservation & monitoring</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-sector-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-black5-clr g-opacity-06\">Water Management</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08 g-opacity-06\">\r\n\t\t\t\t\t\t\t<span class=\"g-black5-clr\">Solution Submission Date: </span>\r\n\t\t\t\t\t\t\t<span class=\"g-black-clr\">21/02/21</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/components/review-application-card/review-application-card.component.html":
  /*!****************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/components/review-application-card/review-application-card.component.html ***!
    \****************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewApplicationsComponentsReviewApplicationCardReviewApplicationCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t<div class=\"d-flex g-mr-33\">\r\n\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12 g-w-100per\">\r\n\t\t\t\t\t<ng-container *ngIf=\"applicationData.images\">\r\n\t\t\t\t\t\t<img [src]=\"serverUrl + applicationData.images[0]\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"!applicationData.images\">\r\n\t\t\t\t\t\t<img src=\"../../../../../../../assets/img/placeholder.jpg\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t<div class=\"a-card-title-wrp g-mt-01\">\r\n\t\t\t\t\t<a class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\" routerLink=\"{{ applicationData.id }}\">\r\n\t\t\t\t\t\t{{ applicationData.name.length > 30 ? (applicationData.name | slice: 0:30 | titlecase) + \"...\" : applicationData.name }}\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\tclass=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\"\r\n\t\t\t\t\t\tinnerHtml=\"{{ applicationData.solution_brief.length > 110 ? (applicationData.solution_brief | slice: 0:110) + '...' : applicationData.solution_brief }}\"\r\n\t\t\t\t\t></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex a-justify-space-between a-flex-grow-1\">\r\n\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t<div class=\"a-company-name-wrp g-mt-02\">\r\n\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"applicationData.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{ applicationData.frg_provider_id.startup_company_name }}\">\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\tapplicationData.frg_provider_id.startup_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t? (applicationData.frg_provider_id.startup_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t: (applicationData.frg_provider_id.startup_company_name | titlecase)\r\n\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-opacity-06\">Startup</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"applicationData.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{ applicationData.frg_provider_id.enterprise_company_name }}\">\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\tapplicationData.frg_provider_id.enterprise_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t? (applicationData.frg_provider_id.enterprise_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t: (applicationData.frg_provider_id.enterprise_company_name | titlecase)\r\n\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-opacity-06\">Enterprise</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"applicationData.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{ applicationData.frg_provider_id.fullname }}\">\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\tapplicationData.frg_provider_id.fullname.length > 20\r\n\t\t\t\t\t\t\t\t\t? (applicationData.frg_provider_id.fullname | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t: (applicationData.frg_provider_id.fullname | titlecase)\r\n\t\t\t\t\t\t\t}}, </span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-opacity-06\">Individual</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t<div class=\"a-status-select-wrp pull-right\" *ngIf=\"applicationData.application_status === 'Reject'; then thenBlock; else elseBlock\"></div>\r\n\t\t\t\t<ng-template #thenBlock>\r\n\t\t\t\t\t<div class=\"status-pill rejected\">Rejected</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template #elseBlock>\r\n\t\t\t\t\t<select\r\n\t\t\t\t\t\tclass=\"form-control a-status-select g-fs-07 g-fw-500 l-disc-offer-slt g-black7-clr g-h-25 g-w-90\"\r\n\t\t\t\t\t\t[class.onhold]=\"applicationData.application_status === 'Onhold'\"\r\n\t\t\t\t\t\t(change)=\"handleChangeStatus($event)\"\r\n\t\t\t\t\t\t[(ngModel)]=\"statusValue\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t<option value=\"\" selected disabled>Select Status</option>\r\n\t\t\t\t\t\t<option value=\"Shortlist\">Shortlist</option>\r\n\t\t\t\t\t\t<option value=\"Onhold\">OnHold</option>\r\n\t\t\t\t\t\t<option value=\"Reject\">Reject</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"loader\" [class.active]=\"statusUpdating\">\r\n\t\t<div class=\"loaderBar\"></div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Initiate pilot -->\r\n<div class=\"modal fade\" id=\"shortList_{{ uid }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-p-0\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between g-p-16\">\r\n\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-modal-icon-wrp g-mr-13\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle g-warning-clr g-fs-20\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-modal-main-cnt\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-warning-cnt\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-warning-clr g-fs-09 g-lh-12 g-fw-500\">Are you sure you want to shortlist “{{ applicationData.name }}” ?</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-07\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07\">\r\n\t\t\t\t\t\t\t\t\tBy confirming the same, <span class=\"g-fw-500\"> you will not be able to revert the decision</span>, and\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t{{ applicationData.frg_provider_id.fullname }},\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.frg_provider_id.role == 'enterprise'\"> Enterprise </ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.frg_provider_id.role == 'startup'\"> Startup </ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.frg_provider_id.role == 'individual'\"> Individual </ng-container>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\twill be notified about the status of the proposal.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close g-fs-20 g-black5-clr\" data-dismiss=\"modal\" (click)=\"refreshCard()\">&times;</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp d-flex\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-review-btn g-white-bg g-black5-clr g-pl-10 g-pr-10 g-pt-05 g-pb-05\" data-dismiss=\"modal\" (click)=\"refreshCard()\">\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-undo\"></i>&nbsp; Review again\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-confirm-btn g-white-clr g-white-bg g-pl-10 g-pr-10 g-pt-05 g-pb-05\" (click)=\"changeStatus('Shortlist')\">\r\n\t\t\t\t\t\t\t\t\tShortlist\r\n\t\t\t\t\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"statusUpdating\"> </i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Initiate Reject -->\r\n<div class=\"modal fade\" id=\"reject_{{ uid }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-p-0\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between g-p-16\">\r\n\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-modal-icon-wrp g-mr-13\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle g-warning-clr g-fs-20\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-modal-main-cnt\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-warning-cnt\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-warning-clr g-fs-09 g-lh-12 g-fw-500\">Are you sure you want to shortlist/Reject “{{ applicationData.name }}” ?</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-07\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07\">\r\n\t\t\t\t\t\t\t\t\tBy confirming the same, <span class=\"g-fw-500\"> you will not be able to revert the decision</span>, and\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t{{ applicationData.frg_provider_id.fullname }},\r\n\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.frg_provider_id.role == 'enterprise'\"> Enterprise </ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.frg_provider_id.role == 'startup'\"> Startup </ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.frg_provider_id.role == 'individual'\"> Individual </ng-container>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\twill be notified about the status of the proposal.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close g-fs-20 g-black5-clr\" data-dismiss=\"modal\" (click)=\"refreshCard()\">&times;</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<div class=\"reject-textarea-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-reason text-left g-fs-07 g-lh-08 g-pb-02 body-light-clr\">Please mention the reason for rejection.</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"5\" id=\"reason\" [(ngModel)]=\"rejection_msg\"></textarea>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp d-flex\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-review-btn g-white-bg g-black5-clr g-pl-10 g-pr-10 g-pt-05 g-pb-05\" data-dismiss=\"modal\" (click)=\"refreshCard()\">\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-undo\"></i>&nbsp; Review again\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-confirm-btn g-white-clr g-white-bg g-pl-10 g-pr-10 g-pt-05 g-pb-05\" (click)=\"changeStatus('Reject')\">\r\n\t\t\t\t\t\t\t\t\tReject\r\n\t\t\t\t\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"statusUpdating\"> </i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/review-applications.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/review-applications.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewApplicationsReviewApplicationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container a-review-application-tab-cnts-wrp\">\r\n\t<div class=\"a-tab-wrp g-pt-25\">\r\n\t\t<ul class=\"nav nav-pills\">\r\n\t\t\t<li class=\"active\">\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#allapp\">New Applications ({{ allApplicationCount }})</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#onhold\">Onhold ({{ onHoldCount }})</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#rejected\">Rejected ({{ RejectCount }})</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\r\n\t\t<div class=\"tab-content g-pt-29\">\r\n\t\t\t<div id=\"allapp\" class=\"tab-pane fade in active\">\r\n\t\t\t\t<section class=\"tab-inner-content\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-blue3-clr\"> {{ applicationDataAll.currently_showing.from }}-{{ applicationDataAll.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ applicationDataAll.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">New Applications</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 g-pr-0\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-5\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\" value=\"{{ queryAll.sort }}\" (change)=\"sortNewApplication($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"created_at DESC\">Relevance</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"name ASC\">A-Z</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"name DESC\">Z-A</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of applicationDataAll.data\">\r\n\t\t\t\t\t\t\t<app-review-application-card [applicationData]=\"item\" (onStatusUpdate)=\"handleStatusChange($event)\"></app-review-application-card>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t\t<card-loader></card-loader>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</section>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"applicationDataAll?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleApplicationAll($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"onhold\" class=\"tab-pane fade\">\r\n\t\t\t\t<div class=\"tab-inner-content\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-blue3-clr\"> {{ applicationDataonHold.currently_showing.from }}-{{ applicationDataonHold.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ applicationDataonHold.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Onhold Applications</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 g-pr-0\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-5\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\" value=\"{{ queryHold.sort }}\" (change)=\"sortOnhold($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"created_at DESC\">Relevance</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"name ASC\">A-Z</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"name DESC\">Z-A</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of applicationDataonHold.data\">\r\n\t\t\t\t\t\t\t<app-review-application-card [applicationData]=\"item\" (onStatusUpdate)=\"handleStatusChange($event)\"></app-review-application-card>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t\t<card-loader></card-loader>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"applicationDataonHold?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleApplicationOnhold($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"rejected\" class=\"tab-pane fade\">\r\n\t\t\t\t<div class=\"tab-inner-content\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-blue3-clr\"> {{ applicationDataRejected.currently_showing.from }}-{{ applicationDataRejected.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ applicationDataRejected.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Rejected Applications</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 g-pr-0\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-5\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\" value=\"{{ queryRejected.sort }}\" (change)=\"sortRejected($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"created_at DESC\">Relevance</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"name ASC\">A-Z</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"name DESC\">Z-A</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of applicationDataRejected.data\">\r\n\t\t\t\t\t\t\t<app-review-application-card [applicationData]=\"item\" (onStatusUpdate)=\"handleStatusChange($event)\"></app-review-application-card>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t\t<card-loader></card-loader>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"applicationDataRejected?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleApplicationReject($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/proposal-details-modal/proposal-details-modal.component.html":
  /*!**********************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/proposal-details-modal/proposal-details-modal.component.html ***!
    \**********************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewProposalComponentsProposalDetailsModalProposalDetailsModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-all/review-proposal-all.component.html":
  /*!****************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-all/review-proposal-all.component.html ***!
    \****************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalAllReviewProposalAllComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t<div class=\"d-flex g-mr-33\">\r\n\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t<ng-container *ngIf=\"proposalData.frg_eoi_id.frg_application_id.images\">\r\n\t\t\t\t\t\t<img [src]=\"serverUrl + proposalData.frg_eoi_id.frg_application_id.images[0]\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"!proposalData.frg_eoi_id.frg_application_id.images\">\r\n\t\t\t\t\t\t<img src=\"../../../../../../../assets/img/placeholder.jpg\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t<div class=\"a-card-title-wrp g-mt-01\">\r\n\t\t\t\t\t<div data-toggle=\"modal\" [attr.data-target]=\"'#proposalModal_' + uid\" class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\">\r\n\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\tproposalData.frg_eoi_id.frg_application_id.name.length > 30\r\n\t\t\t\t\t\t\t\t? (proposalData.frg_eoi_id.frg_application_id.name | slice: 0:30 | titlecase) + \"...\"\r\n\t\t\t\t\t\t\t\t: proposalData.frg_eoi_id.frg_application_id.name\r\n\t\t\t\t\t\t}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\tclass=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\"\r\n\t\t\t\t\t\tinnerHtml=\"{{\r\n\t\t\t\t\t\t\tproposalData.frg_eoi_id.frg_application_id.solution_brief.length > 110\r\n\t\t\t\t\t\t\t\t? (proposalData.frg_eoi_id.frg_application_id.solution_brief | slice: 0:110) + '...'\r\n\t\t\t\t\t\t\t\t: proposalData.frg_eoi_id.frg_application_id.solution_brief\r\n\t\t\t\t\t\t}}\"\r\n\t\t\t\t\t></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex a-justify-space-between a-flex-grow-1\">\r\n\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t<div class=\"a-company-name-wrp g-mt-02\">\r\n\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"proposalData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{ proposalData.frg_eoi_id.frg_application_id.frg_provider_id.startup_company_name }}\">\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\tproposalData.frg_eoi_id.frg_application_id.frg_provider_id.startup_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t? (proposalData.frg_eoi_id.frg_application_id.frg_provider_id.startup_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t: (proposalData.frg_eoi_id.frg_application_id.frg_provider_id.startup_company_name | titlecase)\r\n\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-opacity-06\">Startup</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"proposalData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{ proposalData.frg_eoi_id.frg_application_id.frg_provider_id.enterprise_company_name }}\">\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\tproposalData.frg_eoi_id.frg_application_id.frg_provider_id.enterprise_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t? (proposalData.frg_eoi_id.frg_application_id.frg_provider_id.enterprise_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t: (proposalData.frg_eoi_id.frg_application_id.frg_provider_id.enterprise_company_name | titlecase)\r\n\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-opacity-06\">Enterprise</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"proposalData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{ proposalData.frg_eoi_id.frg_application_id.frg_provider_id.fullname }}\">\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\tproposalData.frg_eoi_id.frg_application_id.frg_provider_id.fullname.length > 20\r\n\t\t\t\t\t\t\t\t\t? (proposalData.frg_eoi_id.frg_application_id.frg_provider_id.fullname | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t: (proposalData.frg_eoi_id.frg_application_id.frg_provider_id.fullname | titlecase)\r\n\t\t\t\t\t\t\t}}, </span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-opacity-06\">Individual</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-flex-item text-right\">\r\n\t\t\t\t<ng-container *ngIf=\"proposalData.proposal_stage === 'New'\">\r\n\t\t\t\t\t<div class=\"a-status-select-wrp pull-right\">\r\n\t\t\t\t\t\t<select class=\"form-control a-status-select g-fs-07 g-fw-500 l-disc-offer-slt g-black7-clr g-h-25 g-w-90 text-left\" (change)=\"updateStatus($event)\" [(ngModel)]=\"statusValue\">\r\n\t\t\t\t\t\t\t<option default value=\"\" disabled>Select Status</option>\r\n\t\t\t\t\t\t\t<option value=\"Pilot Ready\">Pilot Ready</option>\r\n\t\t\t\t\t\t\t<option value=\"Pre-Pilot\">Pre-Pilot</option>\r\n\t\t\t\t\t\t\t<option value=\"Reject\">Reject</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"proposalData.proposal_stage === 'Pre-Pilot'\">\r\n\t\t\t\t\t<div class=\"status-pill g-mr-10\" data-toggle=\"modal\" [attr.data-target]=\"'#' + itemId + '_IICUploadModal_' + proposalData.id\">IIC Comments</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"proposalData.proposal_stage === 'Pre-Pilot'\">\r\n\t\t\t\t\t<div class=\"status-pill prepilot\">Pre-Pilot</div>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Proposal Modal -->\r\n<div class=\"modal fade\" id=\"proposalModal_{{ uid }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-pl-16 g-pr-16 g-pt-18 g-pb-18\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center\">\r\n\t\t\t\t\t<div class=\"d-flex a-align-item-center\">\r\n\t\t\t\t\t\t<div class=\"a-title-wrp g-mr-10\">\r\n\t\t\t\t\t\t\t<div class=\"title g-black-clr g-fw-500 g-fs-12 g-lh-14\">\r\n\t\t\t\t\t\t\t\t{{ proposalData.frg_anchor_id.frg_challenge_id.name }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-city-badge-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-city g-fs-06 g-lh-07 g-p-bg g-white-clr g-pt-01 g-pb-01 g-pl-04 g-pr-04 g-bdrrad-4px\">\r\n\t\t\t\t\t\t\t\t{{ proposalData.frg_anchor_id.frg_seeker_id.frg_smart_city_id.name | uppercase }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-close-icon-wrp\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-03\">\r\n\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-grey4-clr\">\r\n\t\t\t\t\t\t{{ proposalData.frg_eoi_id.frg_application_id.name }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t<div class=\"a-flex-item a-cnt1-flex-item g-mr-24 g-mt-18\">\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Scope of Customization</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"flex-item1\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-title-2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-title-2 g-black-clr g-fs-08 g-lh-10\">Customization Details</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black5-clr g-fw-400 g-lh-08\" [innerHtml]=\"proposalData.customisation_details\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"a-title-2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-title-2 g-black-clr g-fs-08 g-lh-10\">Customization Outcomes</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black5-clr g-fw-400 g-lh-08\" [innerHtml]=\"proposalData.outcomes\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<hr class=\"g-mt-16 g-mb-14\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item2\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Deployment Timeline & Budget</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Time to Pilot</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ proposalData.time_of_pilot.months }} Months {{ proposalData.time_of_pilot.weeks }} weeks</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Time for Commissioning</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ proposalData.time_of_commission.months }} Months {{ proposalData.time_of_commission.weeks }} weeks</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-17\">\r\n\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Pilot Implementation & Monitoring timeline</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">\r\n\t\t\t\t\t\t\t\t{{ proposalData.implementation_monitoring_timeline.months }} Months {{ proposalData.implementation_monitoring_timeline.weeks }} weeks\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label class=\"g-black-clr g-fs-08 g-lh-10\"> Budget </label>\r\n\t\t\t\t\t\t\t<div class=\"a-budget-wrp g-pt-04\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-budget-item--wrp g-pl-10 g-pr-10 g-pb-07\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Solution Design/Dev Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ proposalData.budget.solution_design_dev_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">CapEx Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ proposalData.budget.capex_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Installation & Commissioning Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ proposalData.budget.installation_commission_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Operations/Monitoring & Report Generation Analysis Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ proposalData.budget.operations_monitoring_analysis_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"a-budget-total-wrp g-pl-10 g-pr-10 g-pb-07\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item1 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget-cnt-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"a-budget g-fs-06 g-black5-clr\">Total Cost</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-modal-buget-flex-item2 g-pt-07\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-align-item-center a-justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-black5-clr g-mr-05\">&#8377;</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 a-budget-values g-pt-03 g-pb-03 g-pl-08 g-pr-08\">{{ proposalData.budget.total_cost }}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Track Record & Team</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Track Record</div>\r\n\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\" [innerHtml]=\"proposalData.track_record\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-mt-18\">\r\n\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Core Team Capabilities</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Team Size</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">\r\n\t\t\t\t\t\t\t\t\t{{ proposalData.team_size }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Team Members</div>\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of proposalData.team_member\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ item.name }}</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-item g-pt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-black-clr g-fs-08 g-lh-10\">Expertise</div>\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of proposalData.team_member\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr g-fs-07 g-fs-08 g-pt-03\">{{ item.expertise }}</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-subtitle-wrp g-mt-18\">\r\n\t\t\t\t\t\t\t<div class=\"a-sub-title2 g-fs-10 g-lh-12 g-fw-500 g-black-clr\">Dependencies & Additional Details</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-title-2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t<div class=\"a-title-2 g-black-clr g-fs-08 g-lh-10\">Dependencies for deployment</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-black5-clr g-fw-400 g-lh-08\" [innerHtml]=\"proposalData.dependencies\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-flex-item a-cnt2-flex-item g-mt-18\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.reports_of_past_pilot\">\r\n\t\t\t\t\t\t\t<div class=\"a-col2-title-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-col2-title g-fs-08 g-lh-10 g-fw-500\">Past Pilot Implementation Reports</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-s1-cnt-wrp g-pl-06 g-pr-06 g-pt-11 g-pb-11\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-sub-cnt-wrp g-pr-04 g-pl-05 g-pt-05 g-pb-07 g-mb-06\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of proposalData.reports_of_past_pilot\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mr-07 a-word-break\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-text-underline g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ extractFileName(item) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn g-p-clr g-fs-06 g-lh-07 g-white-bg g-pt-05 g-pb-05 g-pr-07 g-pl-07 a-download-file-btn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[href]=\"serverUrl + item\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[download]=\"extractFileName(item)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>Download File</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.additional_details\">\r\n\t\t\t\t\t\t\t<div class=\"a-col2-title-wrp g-mt-15\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-col2-title g-fs-08 g-lh-10 g-fw-500\">Additional Details</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-s1-cnt-wrp g-pl-06 g-pr-06 g-pt-11 g-pb-11 g-mb-50\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-sub-cnt-wrp g-pr-04 g-pl-05 g-pt-05 g-pb-07 g-mb-06\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of proposalData.additional_details\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"g-mr-07 a-word-break\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"g-text-underline g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ extractFileName(item) }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn g-p-clr g-fs-06 g-lh-07 g-white-bg g-pt-05 g-pb-05 g-pr-07 g-pl-07 a-download-file-btn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[href]=\"serverUrl + item\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[download]=\"extractFileName(item)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t>Download File</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button> -->\r\n\t\t\t\t<ng-container *ngIf=\"proposalData.proposal_stage === 'New'\">\r\n\t\t\t\t\t<div class=\"d-flex a-justify-content-end a-align-items-stretch g-mt-20\">\r\n\t\t\t\t\t\t<div class=\"g-mr-11\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-ongoing\" (click)=\"updateToPrePilot()\">\r\n\t\t\t\t\t\t\t\tPre-Pilot\r\n\t\t\t\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"prePilotLoading\"> </i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-pilot-implement g-white-clr g-p-bg\" (click)=\"updateToPilot()\">\r\n\t\t\t\t\t\t\t\tPilot Ready\r\n\t\t\t\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"pilotLoading\"> </i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Initiate pilot -->\r\n<div class=\"modal fade\" id=\"initiatePilot_{{ uid }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-p-0\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between g-p-16\">\r\n\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-modal-icon-wrp g-mr-13\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle g-warning-clr g-fs-20\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-modal-main-cnt\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-warning-cnt\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-warning-clr g-fs-09 g-lh-12 g-fw-500\">Are you sure you want to tag the proposal as pilot ready “{{ proposalData.frg_eoi_id.frg_application_id.name }}” ?</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-07\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07\">\r\n\t\t\t\t\t\t\t\t\tBy confirming the same, <span class=\"g-fw-500\"> you will not be able to revert the decision</span>, and\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t{{ proposalData.frg_eoi_id.frg_application_id.frg_provider_id.fullname }},\r\n\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'enterprise'\"> Enterprise </ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'startup'\"> Startup </ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'individual'\"> Individual </ng-container>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\twill be notified about the status of the proposal.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close g-fs-20 g-black5-clr\" data-dismiss=\"modal\" (click)=\"refreshCard()\">&times;</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp d-flex\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-review-btn g-white-bg g-black5-clr g-pl-10 g-pr-10 g-pt-05 g-pb-05\" data-dismiss=\"modal\" (click)=\"refreshCard()\">\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-undo\"></i>&nbsp; Review again\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-confirm-btn g-white-clr g-white-bg g-pl-10 g-pr-10 g-pt-05 g-pb-05\" (click)=\"updateToPilot()\">\r\n\t\t\t\t\t\t\t\t\tAccept & Initiate Pilot\r\n\t\t\t\t\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"pilotLoading\"> </i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Initiate Pre pilot -->\r\n<div class=\"modal fade\" id=\"initiatePrePilot_{{ uid }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-p-0\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between g-p-16\">\r\n\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-modal-icon-wrp g-mr-13\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle g-warning-clr g-fs-20\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-modal-main-cnt\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-warning-cnt\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-warning-clr g-fs-09 g-lh-12 g-fw-500\">Are you sure you want to tag the proposal as pre pilot “{{ proposalData.frg_eoi_id.frg_application_id.name }}” ?</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-07\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07\">\r\n\t\t\t\t\t\t\t\t\tBy confirming the same, <span class=\"g-fw-500\"> you will not be able to revert the decision</span>, and\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500\">\r\n\t\t\t\t\t\t\t\t\t\t{{ proposalData.frg_eoi_id.frg_application_id.frg_provider_id.fullname }},\r\n\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'enterprise'\"> Enterprise </ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'startup'\"> Startup </ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'individual'\"> Individual </ng-container>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\twill be notified about the status of the proposal.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close g-fs-20 g-black5-clr\" data-dismiss=\"modal\" (click)=\"refreshCard()\">&times;</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp d-flex\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-review-btn g-white-bg g-black5-clr g-pl-10 g-pr-10 g-pt-05 g-pb-05\" data-dismiss=\"modal\" (click)=\"refreshCard()\"><i class=\"fas fa-undo\"></i>&nbsp; Review again</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-pre-pilot-btn g-pl-10 g-pr-10 g-pt-05 g-pb-05\" data-dismiss=\"modal\" (click)=\"updateToPrePilot()\">\r\n\t\t\t\t\t\t\t\t\tConfirm as Pre-Pilot\r\n\t\t\t\t\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"prePilotLoading\"> </i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<!-- Pilot order upload Modal -->\r\n<div class=\"modal fade\"  id=\"{{ itemId }}_IICUploadModal_{{ proposalData.id }}\" role=\"dialog\" data-backdrop=\"static\" data-keyboard=\"false\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-p-0\">\r\n\t\t\t\t<div class=\"upload-wrapper\" [class.active]=\"loading\">\r\n\t\t\t\t\t<div class=\"upload-inner\">\r\n\t\t\t\t\t\t<div class=\"a-close-icon-wrp\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-15 g-lh-16 bg-blue-clr g-fw-500 g-mb-14\">Add Pilot Orders</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-08 g-black-clr g-opacity-06\">Upload File</div>\r\n\t\t\t\t\t\t<div class=\"add-doc\">\r\n\t\t\t\t\t\t\t<input type=\"file\" id=\"{{ itemId }}_IICUpload_file_{{ proposalData.id }}\" class=\"inputfile\" (change)=\"uploadFile($event.target.files)\" />\r\n\t\t\t\t\t\t\t<label for=\"{{ itemId }}_IICUpload_file_{{ proposalData.id }}\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t<span class=\"g-mr-06 g-fs-07\">Add File</span>\r\n\t\t\t\t\t\t\t\t<i class=\"far fa-plus-square\"></i>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let file of fileNameArr; let i = index\">\r\n\t\t\t\t\t\t\t<div class=\"file-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"file-col\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-file-alt\"></i>\r\n\t\t\t\t\t\t\t\t\t{{ file.length > 50 ? (file | slice: 0:50) + \"..\" : file }}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"remove-col text-right\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"btn act-span\" (click)=\"removeFile(i)\"><i class=\"far fa-trash-alt\"></i></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"loader\" [class.active]=\"loading\">\r\n\t\t\t\t\t\t<div class=\"loaderBar\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<!-- Reject Pilot -->\r\n<div class=\"modal a-create-challenge-modal\" id=\"rejectProposal_{{uid}}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog a-challenge-schema-modal\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-p-0\">\r\n\t\t\t<div class=\"modal-body g-p-0\">\r\n\t\t\t\t<div class=\"row g-pl-18 g-pr-18 g-pt-18 g-pb-16\">\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<div class=\"g-fs-21 g-war-clr\"><i class=\"fas fa-exclamation-triangle\"></i></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-8 g-p-0\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-09 g-lh-11 g-fw-500 g-war-clr text-left\">Are you sure you want to reject \"{{proposalData.frg_eoi_id.frg_application_id.name}}\"?</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-10 g-fw-400 body-light-clr text-left g-pt-08\"> By confirming,\r\n\t\t\t\t\t\t\t\t{{ proposalData.frg_eoi_id.frg_application_id.frg_provider_id.fullname }},\r\n\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'enterprise'\"> Enterprise </ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'startup'\"> Startup </ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"proposalData.frg_eoi_id.frg_application_id.frg_provider_id.role == 'individual'\"> Individual </ng-container>\r\n\t\t\t\t\t\t\t\t\t\t will be notified about the rejection of the Proposal, post which you will not be able to revert the decision.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<button type=\"button\" #closebutton class=\"btn g-bdrrad-7px  g-fs-12 g-w-bg g-pt-02 g-pb-02 g-pl-06 g-pr-06\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<hr>\r\n\t\t\t\t<div class=\"g-pl-18 g-pr-18 g-pt-03 g-pb-16\">\r\n\t\t\t\t\t<div class=\"reject-textarea-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-reason text-left g-fs-07 g-lh-08 g-pb-02 body-light-clr\">Please mention the reason for rejection.</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control textarea-reason\" rows=\"5\" id=\"reason\" [(ngModel)]=\"rejection_msg\"></textarea>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-pt-16 d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-fs-07 g-pt-04 g-pb-04 g-pl-12 g-pr-12\" data-dismiss=\"modal\"><i class=\"fas fa-redo-alt\"></i>&nbsp;Review Again</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-war-brdr reason-reject-btn g-warn-clr g-fs-07 g-pt-04 g-pb-04 g-pl-15 g-pr-15 g-fw-500\" (click)=\"rejectProposal()\"><i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"rejectProposalLoading\"> </i> Reject</button>\r\n\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn g-bdr-005 g-p-brdr g-p-bg g-w-clr g-fs-07 g-pt-04 g-pb-04\" (click)=\"handleCloseChallenge()\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"closeLoading; else elseBlock\"> Closing...<i class=\"fas fa-circle-notch fa-spin\"></i> </ng-container>\r\n\t\t\t\t\t\t\t<ng-template #elseBlock>Close</ng-template>\r\n\t\t\t\t\t\t</button> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-awaiting/review-proposal-awaiting.component.html":
  /*!**************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-awaiting/review-proposal-awaiting.component.html ***!
    \**************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalAwaitingReviewProposalAwaitingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t<div class=\"d-flex g-mr-33\">\r\n\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t<ng-container *ngIf=\"eoiData.frg_application_id.images\">\r\n\t\t\t\t\t\t<img [src]=\"serverUrl + eoiData.frg_application_id.images[0]\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"!eoiData.frg_application_id.images\">\r\n\t\t\t\t\t\t<img src=\"../../../../../../../assets/img/placeholder.jpg\" />\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t<div class=\"a-card-title-wrp g-mt-01\">\r\n\t\t\t\t\t<a class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\">\r\n\t\t\t\t\t\t{{ eoiData.frg_application_id.name.length > 30 ? (eoiData.frg_application_id.name | slice: 0:30 | titlecase) + \"...\" : eoiData.frg_application_id.name }}\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\tclass=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\"\r\n\t\t\t\t\t\tinnerHtml=\"{{ eoiData.frg_application_id.solution_brief.length > 110 ? (eoiData.frg_application_id.solution_brief | slice: 0:110) + '...' : eoiData.frg_application_id.solution_brief }}\"\r\n\t\t\t\t\t></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex a-justify-space-between a-flex-grow-1\">\r\n\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t<div class=\"a-company-name-wrp g-mt-02\">\r\n\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"eoiData.frg_application_id.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\teoiData.frg_application_id.frg_provider_id.startup_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t? (eoiData.frg_application_id.frg_provider_id.startup_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t: (eoiData.frg_application_id.frg_provider_id.startup_company_name | titlecase)\r\n\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-opacity-06\">Startup</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"eoiData.frg_application_id.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\teoiData.frg_application_id.frg_provider_id.enterprise_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t? (eoiData.frg_application_id.frg_provider_id.enterprise_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t: (eoiData.frg_application_id.frg_provider_id.enterprise_company_name | titlecase)\r\n\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-opacity-06\">Enterprise</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"eoiData.frg_application_id.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\teoiData.frg_application_id.frg_provider_id.fullname.length > 20\r\n\t\t\t\t\t\t\t\t\t? (eoiData.frg_application_id.frg_provider_id.fullname | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t: (eoiData.frg_application_id.frg_provider_id.fullname | titlecase)\r\n\t\t\t\t\t\t\t}}, </span\r\n\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-opacity-06\">Individual</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-flex-item text-right\">\r\n\t\t\t\t<div class=\"status-pill\">Awaiting Proposal</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/intitate-pilot/intitate-pilot.component.html":
  /*!******************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/intitate-pilot/intitate-pilot.component.html ***!
    \******************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalReceivedComponentsIntitatePilotIntitatePilotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-send-eoi-btn-wrp\">\r\n    <button type=\"button\" class=\"btn a-send-eoi-btn g-p-bg g-white-clr g-fs-07 g-fw-500 g-pt-06 g-pb-06 g-pl-16 g-pr-16\"  data-toggle=\"modal\" data-target=\"#confirmModal\" >Send EOI</button>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/pilot-ready-modal/pilot-ready-modal.component.html":
  /*!************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/pilot-ready-modal/pilot-ready-modal.component.html ***!
    \************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalReceivedComponentsPilotReadyModalPilotReadyModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-card-title-wrp g-mt-01\">\r\n    <a href=\"#\" class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\" data-toggle=\"modal\" data-target=\"#pilotProposalModal\">\r\n        Intelligent waterbody management system\r\n    </a>\r\n</div>\r\n<div class=\"modal fade\" id=\"pilotProposalModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content a-modal-content\">\r\n        <div class=\"modal-body g-pl-12 g-pr-12 g-pt-11 g-pb-18\">\r\n            <div class=\"d-flex a-justify-space-between\">\r\n                <div class=\"a-modal-title-wrp\">\r\n                    <div class=\"a-modal-title bg-blue-clr g-fs-14 g-fw-500\">\r\n                        Pilot Proposal\r\n                    </div>\r\n                </div>\r\n                <div class=\"a-modal-header-btn-wrp\">\r\n                    <div class=\"a-close-btn-wrp\">\r\n                        <button type=\"button\" class=\"btn g-white-bg\" data-dismiss=\"modal\">\r\n                            <img src=\"assets/img/a-close-icon.png\" alt=\"Image\">\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"a-user-name-wrp\">\r\n                <div class=\"a-user-name\">\r\n                    <span class=\"g-black5-clr g-fs-11\">Rajesh, </span>\r\n                    <span class=\"g-black5-clr g-fs-11\">Entrepreneur</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex g-mt-12\">\r\n                <div class=\"a-mail-wrp g-mr-16\">\r\n                    <a href=\"#\" class=\"g-black5-clr g-fs-07\"><i class=\"far fa-envelope\"></i>&nbsp;ravi.shankar@mhrd.gov.in</a>\r\n                </div>\r\n                <div class=\"a-user-type g-mr-16\">\r\n                    <a href=\"#\" class=\"g-black5-clr g-fs-07\"><i class=\"fas fa-user-alt\"></i>&nbsp;Individual</a>\r\n                </div>\r\n                <div class=\"a-location-type\">\r\n                    <a href=\"#\" class=\"g-black5-clr g-fs-07\"> <i class=\"fas fa-map-marker-alt\"></i>&nbsp;Banglore</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex\">\r\n                <div class=\"a-phone g-mr-43\">\r\n                    <a href=\"#\" class=\"g-black5-clr g-fs-07\"><i class=\"fas fa-phone-alt\"></i>&nbsp;+91 98404 55764</a>\r\n                </div>\r\n                <div class=\"a-site\">\r\n                    <a href=\"#\" class=\"g-black5-clr g-fs-07\"><i class=\"fas fa-globe\"></i>&nbsp;https://www.linkedin.com/in/ravishanka</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"a-title2-wrp g-mt-20\">\r\n                <div class=\"a-title2 g-fs-08 body-light-clr\">\r\n                    Budgeting for Pilot\r\n                </div>\r\n            </div>\r\n            <div class=\"a-modal-main-cnts-wrp g-mt-10\">\r\n                <div class=\"a-title-wrp\">\r\n                    <div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">\r\n                        Capital Expenses\r\n                    </div>\r\n                </div>\r\n                <div class=\"a-cnt-wrp g-mb-07 g-mt-04\">\r\n                    <div class=\"a-cnt g-fs-07 g-lh-08\">\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ultricies mi in integer. Viverra netus suspendisse elit enim, ut sagittis. In urna iaculis habitasse rhoncus habitant posuere. Nunc ac hendrerit nisl massa dapibus vitae lectus ipsum rhoncus. Mauris potenti quis gravida vitae. Leo pulvinar nunc sit adipiscing faucibus a. Ipsum, turpis nunc porttitor venenatis arcu nisl. \r\n                    </div>\r\n                </div>\r\n                <div class=\"a-title-wrp\">\r\n                    <div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">\r\n                        Operational Expenses\r\n                    </div>\r\n                </div>\r\n                <div class=\"a-cnt-wrp g-mb-07 g-mt-04\">\r\n                    <div class=\"a-cnt g-fs-07 g-lh-08\">\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ultricies mi in integer. Viverra netus suspendisse elit enim, ut sagittis. In urna iaculis habitasse rhoncus habitant posuere. Nunc ac hendrerit nisl massa dapibus vitae lectus ipsum rhoncus. Mauris potenti quis gravida vitae. Leo pulvinar nunc sit adipiscing faucibus a. Ipsum, turpis nunc porttitor venenatis arcu nisl. \r\n                    </div>\r\n                </div>\r\n                <div class=\"a-title-wrp\">\r\n                    <div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">\r\n                        Deployment Timeline\r\n                    </div>\r\n                </div>\r\n                <div class=\"a-cnt-wrp g-mb-07 g-mt-04\">\r\n                    <div class=\"a-cnt g-fs-07 g-lh-08\">\r\n                        June, 2021\r\n                    </div>\r\n                </div>\r\n                <div class=\"a-title-wrp\">\r\n                    <div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">\r\n                        Dependencies\r\n                    </div>\r\n                </div>\r\n                <div class=\"a-cnt-wrp g-mb-13 g-mt-04\">\r\n                    <div class=\"a-cnt g-fs-07 g-lh-08\">\r\n                        Rajesh Kumar (CEO), Ravi Shankar (Enterpreneur)\r\n                    </div>\r\n                </div>\r\n                <div class=\"a-title-wrp\">\r\n                    <div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">\r\n                        Scope of Customization\r\n                    </div>\r\n                </div>\r\n                <div class=\"a-cnt-wrp g-mb-07 g-mt-04\">\r\n                    <div class=\"a-cnt g-fs-07 g-lh-08\">\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ultricies mi in integer. Viverra netus suspendisse elit enim, ut sagittis. In urna iaculis habitasse rhoncus habitant posuere. Nunc ac hendrerit nisl massa dapibus vitae lectus ipsum rhoncus. Mauris potenti quis gravida vitae. Leo pulvinar nunc sit adipiscing faucibus a. Ipsum, turpis nunc porttitor venenatis arcu nisl. \r\n                    </div>\r\n                </div>\r\n                <div class=\"a-title-wrp\">\r\n                    <div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">\r\n                        Time for Customization\r\n                    </div>\r\n                </div>\r\n                <div class=\"a-cnt-wrp g-mb-07 g-mt-04\">\r\n                    <div class=\"a-cnt g-fs-07 g-lh-08\">\r\n                        June, 2021\r\n                    </div>\r\n                </div>\r\n                <div class=\"a-title-wrp\">\r\n                    <div class=\"a-title g-fs-07 g-lh-08 g-black5-clr\">\r\n                        Related Documents\r\n                    </div>\r\n                </div>\r\n                <div class=\"a-cnt-wrp g-mb-07 g-mt-04\">\r\n                    <div class=\"a-cnt g-fs-07 g-lh-08\">\r\n                       <a href=\"#\" class=\"a-cnt g-text-underline g-fs-07 g-lh-08\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a><br>\r\n                       <a href=\"#\" class=\"a-cnt g-text-underline g-fs-07 g-lh-08\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"a-btn-wrps d-flex a-justify-content-end g-mt-50\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"a-btn-wrp g-mr-10\">\r\n                        <button type=\"button\" class=\"btn a-ongoing g-fs-08 g-lh-11 g-p-07\">Pre-Pilot</button>\r\n                    </div>\r\n                    <div class=\"a-btn-wrp\">\r\n                        <button type=\"button\" class=\"btn a-pilot-implement g-fs-08 g-white-clr g-p-bg g-bdr-005 g-p-brdr g-lh-11 g-p-07\">Pilot Ready</button>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n</div>\r\n  \r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/review-proposal-received.component.html":
  /*!**************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/review-proposal-received.component.html ***!
    \**************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalReceivedReviewProposalReceivedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-review-applications-wrp\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\tShowing &nbsp;\r\n\t\t\t\t<span class=\"g-blue3-clr\">1-10</span>\r\n\t\t\t\t&nbsp;of\r\n\t\t\t\t<span class=\"g-black7-clr\">20</span>&nbsp;\r\n\t\t\t\t<span class=\"g-black7-clr\">Cities</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-7 g-pr-0\">\r\n\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-5\">\r\n\t\t\t\t\t<select class=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\" id=\"sel1\">\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t\t<div class=\"d-flex g-mr-33\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t\t<img src=\"assets/img/review.png\" class=\"g-w-100per\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t\t<app-pilot-ready-modal></app-pilot-ready-modal>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t\t<div class=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\">Aenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tell...</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"d-flex a-justify-space-between a-flex-grow-1\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-company-name-wrp g-mt-02\">\r\n\t\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\">\r\n\t\t\t\t\t\t\t<span>Bariflo Labs Pvt Ltd,</span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-opacity-06\">Startup</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-status-select-wrp pull-right\">\r\n\t\t\t\t\t\t<select class=\"form-control a-status-select text-right g-fs-07 g-fw-500 l-disc-offer-slt g-black7-clr g-h-25 g-w-90\" id=\"sel1\">\r\n\t\t\t\t\t\t\t<option default>Select Status</option>\r\n\t\t\t\t\t\t\t<option value=\"shortlist\">Shortlist</option>\r\n\t\t\t\t\t\t\t<option value=\"Onhold\">OnHold</option>\r\n\t\t\t\t\t\t\t<option value=\"Reject\">Reject</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-11 g-pl-15 g-pr-15\">\r\n\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge g-fs-08 g-black5-clr g-opacity-06\">Water bodies preservation & monitoring</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-sector-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-black5-clr g-opacity-06\">Water Management</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08 g-opacity-06\">\r\n\t\t\t\t\t\t\t<span class=\"g-black5-clr\">Solution Submission Date: </span>\r\n\t\t\t\t\t\t\t<span class=\"g-black-clr\">21/02/21</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<app-intitate-pilot></app-intitate-pilot>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-rejected/review-proposal-rejected.component.html":
  /*!**************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-rejected/review-proposal-rejected.component.html ***!
    \**************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalRejectedReviewProposalRejectedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-review-applications-wrp\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\tShowing &nbsp;\r\n\t\t\t\t<span class=\"g-blue3-clr\">1-10</span>\r\n\t\t\t\t&nbsp;of\r\n\t\t\t\t<span class=\"g-black7-clr\">20</span>&nbsp;\r\n\t\t\t\t<span class=\"g-black7-clr\">Cities</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-7 g-pr-0\">\r\n\t\t\t\t\t<div class=\"g-fs-07 g-fw-500 text-right g-black7-clr g-opacity-06\">Sort By</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-5\">\r\n\t\t\t\t\t<select class=\"form-control g-fs-07 g-fw-500 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\" id=\"sel1\">\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t\t<option value=\"Relevance\">Relevance</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\">\r\n\t\t<div class=\"d-flex g-p-15 a-justify-space-between\">\r\n\t\t\t<div class=\"d-flex g-mr-33\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t\t<img src=\"assets/img/review.png\" class=\"g-w-100per\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t\t<div class=\"a-card-title-wrp g-mt-01\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\"> Intelligent waterbody management system </a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t\t<div class=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\">Aenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tell...</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"d-flex a-justify-space-between a-flex-grow-1\">\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-company-name-wrp g-mt-02\">\r\n\t\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\">\r\n\t\t\t\t\t\t\t<span>Bariflo Labs Pvt Ltd,</span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-opacity-06\">Startup</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t<div class=\"a-status-select-wrp pull-right\">\r\n\t\t\t\t\t\t<select class=\"form-control a-status-select text-right g-fs-07 g-fw-500 l-disc-offer-slt g-black7-clr g-h-25 g-w-90\" id=\"sel1\">\r\n\t\t\t\t\t\t\t<option default>Select Status</option>\r\n\t\t\t\t\t\t\t<option value=\"shortlist\">Shortlist</option>\r\n\t\t\t\t\t\t\t<option value=\"Onhold\">OnHold</option>\r\n\t\t\t\t\t\t\t<option value=\"Reject\">Reject</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-review-application-card-footer g-pt-10 g-pb-11 g-pl-15 g-pr-15\">\r\n\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge g-fs-08 g-black5-clr g-opacity-06\">Water bodies preservation & monitoring</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-challenge-sector-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-black5-clr g-opacity-06\">Water Management</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-item\">\r\n\t\t\t\t\t<div class=\"a-solution-submit-date-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-solution-submission-date g-fs-08 g-opacity-06\">\r\n\t\t\t\t\t\t\t<span class=\"g-black5-clr\">Solution Submission Date: </span>\r\n\t\t\t\t\t\t\t<span class=\"g-black-clr\">21/02/21</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/review-proposal.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/review-proposal.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensReviewProposalReviewProposalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container a-review-application-tab-cnts-wrp\">\r\n\t<div class=\"a-tab-wrp g-pt-25\">\r\n\t\t<ul class=\"nav nav-pills\">\r\n\t\t\t<li class=\"active\">\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#allapp\">All ({{ allProposalCount }})</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#received\">Received ({{ proposalReceivedCount }})</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#awaitingProposal\"> Awaiting Proposal ({{ awaitProposalCount }}) </a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-08\" href=\"#rejected\">Pre Pilot ({{ prePilotCount }})</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\r\n\t\t<div class=\"tab-content g-pt-29\">\r\n\t\t\t<div id=\"allapp\" class=\"tab-pane fade in active\">\r\n\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!allLoading\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-blue3-clr\">{{ allProposals.currently_showing.from }}-{{ allProposals.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ allProposals.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Proposals</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of allProposals?.data; let i = index\">\r\n\t\t\t\t\t\t\t<app-review-proposal-all [proposalData]=\"item\" (onPilot)=\"handleStatusChange()\" [itemId]=\"'all' + i\"></app-review-proposal-all>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"allLoading\">\r\n\t\t\t\t\t\t<card-loader></card-loader>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"allProposals?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleAllPagination($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"received\" class=\"tab-pane fade\">\r\n\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!receivedLoading\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-blue3-clr\">{{ proposalReceived.currently_showing.from }}-{{ proposalReceived.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ proposalReceived.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Proposals</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of proposalReceived?.data\">\r\n\t\t\t\t\t\t\t<app-review-proposal-all [proposalData]=\"item\" (onPilot)=\"handleStatusChange()\"></app-review-proposal-all>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"receivedLoading\">\r\n\t\t\t\t\t\t<card-loader></card-loader>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"proposalReceived?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleProposalReceived($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"awaitingProposal\" class=\"tab-pane fade\">\r\n\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!awaitProposalLoading\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-blue3-clr\">{{ awaitProposal.currently_showing.from }}-{{ awaitProposal.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ awaitProposal.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Proposals</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of awaitProposal?.data\">\r\n\t\t\t\t\t\t\t<app-review-proposal-awaiting [eoiData]=\"item\"></app-review-proposal-awaiting>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"awaitProposalLoading\">\r\n\t\t\t\t\t\t<card-loader></card-loader>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"awaitProposal?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handleAwaitingProposal($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"rejected\" class=\"tab-pane fade\">\r\n\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!prePilotLoading\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-blue3-clr\">{{ prePilot.currently_showing.from }}-{{ prePilot.currently_showing.to }}</span>\r\n\t\t\t\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ prePilot.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-black7-clr\">Proposals</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of prePilot?.data\">\r\n\t\t\t\t\t\t\t<app-review-proposal-all [proposalData]=\"item\" (onPilot)=\"handleStatusChange()\"></app-review-proposal-all>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"prePilotLoading\">\r\n\t\t\t\t\t\t<card-loader></card-loader>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"prePilot?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handlePrePilot($event)\"> </pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-confirm-modal/eoi-confirm-modal.component.html":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-confirm-modal/eoi-confirm-modal.component.html ***!
    \*****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensSendEoiComponentsEoiConfirmModalEoiConfirmModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-send-eoi-btn-wrp\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Choose atleast one to send EOI\">\r\n\t<button type=\"button\" class=\"btn a-send-eoi-btn g-p-bg g-white-clr g-fs-07 g-fw-500 g-pt-06 g-pb-06 g-pl-16 g-pr-16\" [disabled]=\"!check\" data-toggle=\"modal\" data-target=\"#confirmModal\">\r\n\t\tSend EOI\r\n\t</button>\r\n</div>\r\n\r\n<!-- Confirm & ShortList Modal -->\r\n<div class=\"modal fade\" id=\"confirmModal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-p-0\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between g-p-16\">\r\n\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-modal-icon-wrp g-mr-13\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle g-warning-clr g-fs-20\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-modal-main-cnt\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-warning-cnt\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-warning-clr g-fs-09 g-lh-12 g-fw-500\">Are you sure you want to send EoI to the below applications</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-modal-cnt2-wrp g-mt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-modal-cnt2 g-fs-07 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\tYou are sending EoIs to the following\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-p-clr\">Applications</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"selectedapp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-modal-checkbox-wrp g-mt-07\" *ngFor=\"let selectedData of selectedapp\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline g-fs-07\"\r\n\t\t\t\t\t\t\t\t\t\t><input type=\"checkbox\" value=\"\" checked (change)=\"eventCheck($event, selectedData.id)\" />\r\n\t\t\t\t\t\t\t\t\t\t<span>{{ selectedData.name.length > 30 ? (selectedData.name | slice: 0:30 | titlecase) + \"...\" : selectedData.name }}</span> by&nbsp;\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"selectedData.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\t\tselectedData.frg_provider_id.startup_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t? (selectedData.frg_provider_id.startup_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: (selectedData.frg_provider_id.startup_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t\t}},\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"selectedData.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\t\tselectedData.frg_provider_id.enterprise_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t? (selectedData.frg_provider_id.enterprise_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: (selectedData.frg_provider_id.enterprise_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t\t}},\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"selectedData.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\t\tselectedData.frg_provider_id.fullname.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t? (selectedData.frg_provider_id.fullname | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: (selectedData.frg_provider_id.fullname | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t\t}},\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close g-fs-20 g-black5-clr\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-review-btn g-white-bg g-black5-clr g-pl-10 g-pr-10 g-pt-05 g-pb-05\" data-dismiss=\"modal\"><i class=\"fas fa-undo\"></i>&nbsp; Review again</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp\">\r\n\t\t\t\t\t\t\t\t<a (click)=\"getIDs()\" routerLink=\"send\" [queryParams]=\"{ ids: Ids }\" class=\"btn a-confirm-btn g-white-clr g-white-bg g-pl-10 g-pr-10 g-pt-05 g-pb-05\" data-dismiss=\"modal\"\r\n\t\t\t\t\t\t\t\t\t>Confirm & create EOI</a\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-modal/eoi-modal.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-modal/eoi-modal.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensSendEoiComponentsEoiModalEoiModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-view-template-btn-wrp g-mr-07\">\r\n\t<button type=\"button\" class=\"btn a-view-template-btn g-fs-07 g-black5-clr g-bdr-005 g-black5-brdr g-fw-500 g-pt-05 g-pb-06 g-pl-16 g-pr-16\" data-toggle=\"modal\" data-target=\"#templateModal\">\r\n\t\tView Template\r\n\t</button>\r\n</div>\r\n<!-- g-disp-none -->\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"templateModal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-pl-12 g-pr-12 g-pt-11 g-pb-11\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t<div class=\"a-user-info-modal-wrp d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-user-img-wrp g-mr-06\">\r\n\t\t\t\t\t\t\t<img src=\"assets/img/a-noimg.png\" alt=\"Image\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-user-details-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-eol-from g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-grey4-clr\">EOI From</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-user-name-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-user-name bg-blue-clr g-fs-08 g-lh-10 g-fw-500\">Velu Krishnamoorthy</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-user-for-city-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-user-for-city\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-fs-07 g-grey4-clr\">for</span>&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-p-bg g-p-02 g-fs-06 g-white-clr a-uppercase g-bdrrad-4px\">Chennai</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-modal-header-btn-wrp d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-download-btn-wrp g-mr-10\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-white-bg g-p-clr g-bdr-005 body-light-brdr text-center\">Download <i class=\"fas fa-arrow-down\"></i></button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-close-btn-wrp\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-white-bg\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/img/a-close-icon.png\" alt=\"Image\" />\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-modal-main-cnts-wrp g-mt-21\">\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-08 g-lh-10 bg-blue-clr\">Pilot Location</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-13 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-black5-clr g-fs-07 g-lh-08\">Aenean et pellentesque.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-08 g-lh-10 bg-blue-clr\">Goals of Pilot</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-13 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\tAenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tellus, molestie et pharetra vitae, lacinia a diam. Etiam cursus dolor eu libero\r\n\t\t\t\t\t\t\tinterdum tincidunt. Aenean odio neque.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-08 g-lh-10 bg-blue-clr\">Pilot Deployment details</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-13 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\tAenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tellus, molestie et pharetra vitae, lacinia a diam. Etiam cursus dolor eu libero\r\n\t\t\t\t\t\t\tinterdum tincidunt. Aenean odio neque.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-08 g-lh-10 bg-blue-clr\">Budget Requirements</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-13\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\t<div class=\"d-flex g-mt-05\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-expense-wrp g-mr-11\">\r\n\t\t\t\t\t\t\t\t\t<div>Capital Expense</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div>₹4,00,000</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex g-mt-05\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-expense-wrp g-mr-11\">\r\n\t\t\t\t\t\t\t\t\t<div>Operational Expense</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div>₹2,20,000</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex g-mt-05\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-expense-wrp g-mr-11\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fw-500\">Total Expense</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fw-500\">₹6,20,000</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-08 g-lh-10 bg-blue-clr\">Expected Deployment Timeline</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-13 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-black5-clr g-fs-07 g-lh-08\">10 Months, 2 Weeks</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-08 g-lh-10 bg-blue-clr\">Deployment Constraints</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-13 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\tAenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tellus, molestie et pharetra vitae, lacinia a diam. Etiam cursus dolor eu libero\r\n\t\t\t\t\t\t\tinterdum tincidunt. Aenean odio neque, dapibus eu posuere sed, blandit id est. Aenean erat tortor, feugiat eget pulvinar sit amet, semper at odio. Suspendisse interdum venenatis erat id\r\n\t\t\t\t\t\t\tcondimentum.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-title-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-title g-fs-08 g-lh-10 bg-blue-clr\">Expected Quantifiable Outcomes</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"a-cnt-wrp g-mb-13 g-mt-04\">\r\n\t\t\t\t\t\t<div class=\"a-cnt g-black5-clr g-fs-07 g-lh-08\">\r\n\t\t\t\t\t\t\tAenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tellus, molestie et pharetra vitae, lacinia a diam. Etiam cursus dolor eu libero\r\n\t\t\t\t\t\t\tinterdum tincidunt. Aenean odio neque, dapibus eu posuere sed, blandit id est. Aenean erat tortor, feugiat eget pulvinar sit amet, semper at odio. Suspendisse interdum venenatis erat id\r\n\t\t\t\t\t\t\tcondimentum.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/send-eoi/send-eoi.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/send-eoi/send-eoi.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensSendEoiSendEoiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container a-shortlisted-eoi-wrp\">\r\n\t<div class=\"a-shotlist-title-wrp g-pt-26 g-pb-15\">\r\n\t\t<div class=\"a-shortlist-title g-black-clr g-fs-12\">Shortlisted Applications</div>\r\n\t</div>\r\n\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t<div class=\"a-review-applications-wrp\">\r\n\t\t\t<div class=\"d-flex a-justify-space-between a-align-item-center\">\r\n\t\t\t\t<div class=\"a-dat-count\">\r\n\t\t\t\t\t<div class=\"g-fs-075 g-lh-09 g-fw-500 g-black7-clr\">\r\n\t\t\t\t\t\tShowing &nbsp;\r\n\t\t\t\t\t\t<span class=\"g-blue3-clr\"> {{ applicationDataShortlisted.currently_showing.from }}-{{ applicationDataShortlisted.currently_showing.to }}</span>\r\n\t\t\t\t\t\t&nbsp;of\r\n\t\t\t\t\t\t<span class=\"g-black7-clr\"> {{ applicationDataShortlisted.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t<span class=\"g-black7-clr\">Results</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"a-btns-wrp d-flex\">\r\n\t\t\t\t\t<app-eoi-modal></app-eoi-modal>\r\n\t\t\t\t\t<app-eoi-confirm-modal [check]=\"buttonDisabled\" [selectedapp]=\"selectedApplication\" [Ids]=\"applicationIds\"></app-eoi-confirm-modal>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- [data]=\"selectedApplication\" -->\r\n\t\t\t<div>\r\n\t\t\t\t<p class=\"g-fs-07 g-opacity-06\"> Please select a challenge below to send EOI </p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-review-application-card-wrp g-mt-12 g-mb-08\" *ngFor=\"let applicationData of applicationDataShortlisted.data\">\r\n\t\t\t\t<div class=\"g-p-15\">\r\n\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox g-mr-12\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\" (change)=\"eventCheck($event, applicationData.id)\" />\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-review-appl-img-wrp g-mr-12\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.images\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"serverUrl + applicationData.images[0]\" class=\"g-w-100per g-bdrrad-4px\" />\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!applicationData.images\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../../../../../../../assets/img/placeholder.jpg\" />\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"a-flex-item a-flex-item-solution-title-wrp\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-card-title-wrp g-mt-01\">\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"a-card-title g-fs-09 g-lh-10 g-black-clr g-text-underline\" routerLink=\"{{ applicationData.id }}\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ applicationData.name.length > 30 ? (applicationData.name | slice: 0:30 | titlecase) + \"...\" : applicationData.name }}\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-card-sub-cnt-wrp g-mt-05\">\r\n\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"a-card-sub-cnt g-fs-08 g-lh-09 g-black-clr g-opacity-06\"\r\n\t\t\t\t\t\t\t\t\t\t\tinnerHtml=\"{{ applicationData.solution_brief.length > 110 ? (applicationData.solution_brief | slice: 0:110) + '...' : applicationData.solution_brief }}\"\r\n\t\t\t\t\t\t\t\t\t\t></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-company-details-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-flex-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-company-name-wrp g-mt-02 text-right\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"applicationData.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{ applicationData.frg_provider_id.startup_company_name }}\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\t\tapplicationData.frg_provider_id.startup_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t? (applicationData.frg_provider_id.startup_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: (applicationData.frg_provider_id.startup_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"g-opacity-06\">Startup</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"applicationData.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{ applicationData.frg_provider_id.enterprise_company_name }}\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\t\tapplicationData.frg_provider_id.enterprise_company_name.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t? (applicationData.frg_provider_id.enterprise_company_name | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: (applicationData.frg_provider_id.enterprise_company_name | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t\t}},</span\r\n\t\t\t\t\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"g-opacity-06\">Enterprise</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-company-name g-fs-08 g-black-clr\" *ngIf=\"applicationData.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{ applicationData.frg_provider_id.fullname }}\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\t\tapplicationData.frg_provider_id.fullname.length > 20\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t? (applicationData.frg_provider_id.fullname | slice: 0:20 | titlecase) + \"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: (applicationData.frg_provider_id.fullname | titlecase)\r\n\t\t\t\t\t\t\t\t\t\t\t}}, </span\r\n\t\t\t\t\t\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"g-opacity-06\">Individual</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"g-pt-05 g-pb-25 text-center\">\r\n\t\t\t<pagination-controller [totalItems]=\"applicationDataShortlisted?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"isLoading\">\r\n\t\t<card-loader></card-loader>\r\n\t</ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/sol-individual/sol-individual.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/sol-individual/sol-individual.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerChallengeDashboardScreensSolIndividualSolIndividualComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-solution-wrapper g-pb-25 g-pt-20\">\r\n\t<div class=\"a-back-link-wrp container\">\r\n\t\t<a routerLink=\"../\" class=\"g-black-clr g-fs-08 glh-09 g-cursor-pointer\">\r\n\t\t\t<span><img src=\"assets/img/arrow.svg\" alt=\"Image\" /></span>&nbsp;\r\n\t\t\t<span>Back to Applications</span>\r\n\t\t</a>\r\n\t</div>\r\n\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t<div class=\"container g-mt-19\">\r\n\t\t\t<div class=\"a-modal-section1-wrp\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t<div class=\"a-solution-modal-title-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-solution-modal-title g-fs-12 g-lh-16 g-black5-clr g-fw-500\">\r\n\t\t\t\t\t\t\t\t{{ applicationData.data.name }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex g-mt-04\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-sol-company-name-wrp g-mr-10\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.data.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-modal-sol-company-name g-fs-08 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<span>{{ applicationData.data.frg_provider_id.startup_company_name }} </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.data.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-modal-sol-company-name g-fs-08 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<span>{{ applicationData.data.frg_provider_id.enterprise_company_name }} </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.data.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-modal-sol-company-name g-fs-08 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<span>{{ applicationData.data.frg_provider_id.fullname }} </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-sol-provider-type\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.data.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sol-provider g-fs-08 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<span><img src=\"../../../assets/img/startup_up_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Startup</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.data.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sol-provider g-fs-08 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<span><img src=\"../../../assets/img/enterprise_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Enterprise</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData.data.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"a-sol-provider g-fs-08 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<span><img src=\"../../../assets/img/individual_icon.svg\" alt=\"icon\" /></span> &nbsp;<span>Individual</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t<div class=\"text-right\">\r\n\t\t\t\t\t\t\t<div class=\"a-solution-dates-wrp\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-posted-date text-right g-fs-07 body-light-clr\">\r\n\t\t\t\t\t\t\t\t\tPosted on\r\n\t\t\t\t\t\t\t\t\t<span>{{ applicationData?.data.created_at | date: \"d MMM yyyy\" }}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"a-last-edited-date text-right g-fs-07 body-light-clr g-mt-01\">\r\n\t\t\t\t\t\t\t\t\tLast edited on\r\n\t\t\t\t\t\t\t\t\t<span>{{ applicationData?.data.updated_at | date: \"d MMM yyyy\" }}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row a-modal-s2\">\r\n\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-sector-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-black5-clr g-fs-10 g-lh-11 g-fw-500\">Challenge Sector</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-black5-clr g-fs-08 g-mt-02\">\r\n\t\t\t\t\t\t\t\t<div>{{ applicationData?.data.frg_challenge_sector_id.name | titlecase }}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-5\">\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-sector-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-black5-clr g-fs-10 g-lh-11 g-fw-500\">Challenges</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-black5-clr g-fs-08 g-mt-02\">\r\n\t\t\t\t\t\t\t\t<div>{{ applicationData?.data.frg_challenge_id.name }}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-sector-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-black5-clr g-fs-10 g-lh-11 g-fw-500\">Implementation Time</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-black5-clr g-fs-08 g-mt-02\">\r\n\t\t\t\t\t\t\t\t{{ applicationData?.data.implementation_time.months }} Months {{ applicationData?.data.implementation_time.weeks }} Weeks\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-sector-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-black5-clr g-fs-10 g-lh-11 g-fw-500\">IP Status</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-black5-clr g-fs-08 g-mt-02\">{{ applicationData.data.ip_details.status }}-{{ applicationData.data.ip_details.id_number }}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-modal-section2 g-white-bg\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!applicationData.data.images; else elseBlock\">\r\n\t\t\t\t\t\t\t<div class=\"image-placeholder\">\r\n\t\t\t\t\t\t\t\t<!-- <img src=\"assets/img/carousel-item.png\" alt=\"\" > -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #elseBlock>\r\n\t\t\t\t\t\t\t<div id=\"solutionImageSlider\" class=\"carousel slide carousel-fade\" data-interval=\"false\">\r\n\t\t\t\t\t\t\t\t<!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"item\" *ngFor=\"let image of applicationData?.data.images; let index = index\" [class.active]=\"index == 0\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + image\" alt=\"applicationData image\" [hidden]=\"imagesLoading\" (load)=\"this.imagesLoading = false\" />\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"imagesLoading\" class=\"image-placeholder\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- Indicators -->\r\n\t\t\t\t\t\t\t\t<ol class=\"carousel-indicators g-pt-15\">\r\n\t\t\t\t\t\t\t\t\t<li data-target=\"#solutionImageSlider\" *ngFor=\"let image of applicationData?.data.images; let index = index\" [class.active]=\"index == 0\" [attr.data-slide-to]=\"index\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + image\" alt=\"\" [hidden]=\"imagesLoading\" (load)=\"this.imagesLoading = false\" />\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"imagesLoading\" class=\"image-placeholder-nav-dots\"></div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t<!-- Left and right controls -->\r\n\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"applicationData.data.images && applicationData.data.images.length > 1\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{ 'background-image': applicationData.data.images ? 'url(' + serverUrl + applicationData?.data.images[0] + ')' : '' }\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<a class=\"left carousel-control\" href=\"#solutionImageSlider\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<a class=\"right carousel-control\" href=\"#solutionImageSlider\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp g-p-0\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Solution Brief</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.solution_brief\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Value Proposition</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.value_proposition\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Market Domain</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t<div>Water and Irrigation</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Tangible Benefits</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.tangible_benifits\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Solution Advantages</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.solution_advantages\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Solution Readiness</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.solution_readiness\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Track Record</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.track_record\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Experts Involved</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.experts_involved\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\" *ngIf=\"applicationData?.data.other_details != ''\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Other details</div>\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-sector g-fs-08 g-mt-02 g-black5-clr\" [innerHtml]=\"applicationData?.data.other_details\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-sol-chlng-cnt-wrp\" *ngIf=\"applicationData?.data.video_link != ''\">\r\n\t\t\t\t\t\t\t<div class=\"a-challenge-title g-fs-10 g-lh-11 g-fw-500 g-black5-clr\">Video Link</div>\r\n\t\t\t\t\t\t\t<a [href]=\"applicationData?.data.video_link\" target=\"_blank\">\r\n\t\t\t\t\t\t\t\t{{ applicationData?.data.video_link }}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"applicationData?.data.application_status != 'Shortlist'\">\r\n\t\t\t\t\t\t\t<div class=\"d-flex g-mt-33 a-justify-space-between\">\r\n\t\t\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData?.data.application_status != 'Onhold'\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-action-btn-wrp g-mr-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-onhold-btn g-fs-09 g-lh-10 g-pt-07 g-pb-07 g-pl-17 g-pr-17\" (click)=\"moveToOnhold()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tOn hold\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"onHoldLoading\"> </i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData?.data.application_status != 'Reject'\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-action-btn-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-reject-btn g-fs-09 g-lh-10 g-pt-07 g-pb-07 g-pl-17 g-pr-17\"  data-toggle=\"modal\" data-target=\"#rejectProposal\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\tReject\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"rejectLoading\"> </i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"applicationData?.data.application_status != 'Reject'\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"a-action-btn-wrp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-shortlist-btn g-white-clr g-p-bg g-fs-09 g-lh-10 g-pt-07 g-pb-07 g-pl-17 g-pr-17\" data-toggle=\"modal\" data-target=\"#shortListModal\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tShortlist for EOI\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"isLoading\">\r\n\t\t<div class=\"loader-parent\">\r\n\t\t\t<div class=\"section-loader\">\r\n\t\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>\r\n\r\n<!-- Confirm & ShortList Modal -->\r\n<div class=\"modal fade\" id=\"shortListModal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body g-p-0\">\r\n\t\t\t\t<div class=\"d-flex a-justify-space-between g-p-16\">\r\n\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t<div class=\"a-modal-icon-wrp g-mr-13\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle g-warning-clr g-fs-20\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"a-modal-main-cnt\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-warning-cnt\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-warning-clr g-fs-09 g-lh-12 g-fw-500\">Are you sure you want to shortlist the application?</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-modal-cnt2-wrp g-mt-05\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-modal-cnt2 g-fs-07 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\tYou’re shortlisting the following\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-p-clr\">Solution</span>\r\n\t\t\t\t\t\t\t\t\tfor EOI.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- <div class=\"a-modal-checkbox-wrp g-mt-07\">\r\n\t\t\t\t\t\t\t\t<label class=\"checkbox-inline g-fs-07\"><input type=\"checkbox\" value=\"\" />Lorem ipsum dolor sit amet, consectr adipiscing elit. Aliquam velit lectus” by Neer Tech Solutions</label>\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t<div class=\"a-modal-cnt2-wrp g-mt-08\">\r\n\t\t\t\t\t\t\t\t<div class=\"a-modal-cnt2 g-fs-07 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\tBy confirming, the Solution Providers will be notified about their Shortlisting post which\r\n\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500\">you’ll not be able to revert the Shortlist.</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close g-fs-20 g-black5-clr\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<div class=\"d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-review-btn g-white-bg g-black5-clr g-pl-10 g-pr-10 g-pt-05 g-pb-05\" data-dismiss=\"modal\"><i class=\"fas fa-undo\"></i>&nbsp; Review again</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp g-mr-07\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-modal-obhold-btn g-white-bg g-pl-10 g-pr-10 g-pt-05 g-pb-05\" (click)=\"moveToOnhold()\">\r\n\t\t\t\t\t\t\t\t\tOnhold\r\n\t\t\t\t\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"onHoldLoading\"> </i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"a-modal-action-btn-wrp\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn a-confirm-btn g-white-clr g-white-bg g-pl-10 g-pr-10 g-pt-05 g-pb-05\" (click)=\"shortListApplication()\">\r\n\t\t\t\t\t\t\t\t\tConfirm & Shortlist\r\n\t\t\t\t\t\t\t\t\t<i class=\"g-ml-05 fas fa-circle-notch fa-spin\" *ngIf=\"shortlistLoading\"> </i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<!-- Reject Pilot -->\r\n<div class=\"modal a-create-challenge-modal\" id=\"rejectProposal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog a-challenge-schema-modal\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-p-0\">\r\n\t\t\t<div class=\"modal-body g-p-0\">\r\n\t\t\t\t<div class=\"row g-pl-18 g-pr-18 g-pt-18 g-pb-16\">\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<div class=\"g-fs-21 g-war-clr\"><i class=\"fas fa-exclamation-triangle\"></i></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-8\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-09 g-lh-11 g-fw-500 g-war-clr text-left\">\r\n\t\t\t\t\t\t\t\tAre you sure you want to\r\n\t\t\t\t\t\t\t\treject the application?\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-10 g-fw-400 body-light-clr text-left g-pt-08\">\r\n\t\t\t\t\t\t\t\tYou are rejecting the following Application:\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-10 g-fw-400 body-light-clr text-left g-pt-08\">\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" (change)=\"onSelect($event)\">{{applicationData?.data.name}}</label>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-10 g-fw-400 body-light-clr text-left g-pt-08\">\r\n\t\t\t\t\t\t\t\tBy confirming, the Innovator will be notified about their Rejection, post which <b>you will not be able to revert the decision.</b>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<button type=\"button\" #closebutton class=\"btn g-bdrrad-7px  g-fs-12 g-w-bg g-pt-02 g-pb-02 g-pl-06 g-pr-06\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<hr>\r\n\t\t\t\t<div class=\"g-pl-18 g-pr-18 g-pt-03 g-pb-16\">\r\n\t\t\t\t\t<div class=\"reject-textarea-wrp\">\r\n\t\t\t\t\t\t<div class=\"a-reason text-left g-fs-07 g-lh-08 g-pb-02 body-light-clr\">Please mention the reason for rejection.</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control textarea-reason\" rows=\"5\" id=\"reason\" [(ngModel)]=\"rejection_msg\"></textarea>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-pt-16 d-flex a-justify-space-between\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-fs-07 g-pt-04 g-pb-04 g-pl-12 g-pr-12\" data-dismiss=\"modal\"><i class=\"fas fa-redo-alt\"></i>&nbsp;Review Again</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-war-brdr reason-reject-btn g-warn-clr g-fs-07 g-pt-04 g-pb-04 g-pl-15 g-pr-15 g-fw-500\" (click)=\"rejectApplication()\" [disabled]=\"disable_rjt_btn\">Reject</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
    \*****************************************************/

  /*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */

  /***/
  function node_modulesUuidDistEsmBrowserIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./v1.js */
    "./node_modules/uuid/dist/esm-browser/v1.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v1", function () {
      return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
    /* harmony import */


    var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./v3.js */
    "./node_modules/uuid/dist/esm-browser/v3.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v3", function () {
      return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    });
    /* harmony import */


    var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./v4.js */
    "./node_modules/uuid/dist/esm-browser/v4.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v4", function () {
      return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    });
    /* harmony import */


    var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./v5.js */
    "./node_modules/uuid/dist/esm-browser/v5.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v5", function () {
      return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    });
    /* harmony import */


    var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nil.js */
    "./node_modules/uuid/dist/esm-browser/nil.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NIL", function () {
      return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    });
    /* harmony import */


    var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./version.js */
    "./node_modules/uuid/dist/esm-browser/version.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "version", function () {
      return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"];
    });
    /* harmony import */


    var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./validate.js */
    "./node_modules/uuid/dist/esm-browser/validate.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "validate", function () {
      return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"];
    });
    /* harmony import */


    var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./stringify.js */
    "./node_modules/uuid/dist/esm-browser/stringify.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "stringify", function () {
      return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"];
    });
    /* harmony import */


    var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./parse.js */
    "./node_modules/uuid/dist/esm-browser/parse.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parse", function () {
      return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"];
    });
    /***/

  },

  /***/
  "./node_modules/uuid/dist/esm-browser/md5.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserMd5Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /*
     * Browser-compatible JavaScript MD5
     *
     * Modification of JavaScript MD5
     * https://github.com/blueimp/JavaScript-MD5
     *
     * Copyright 2011, Sebastian Tschan
     * https://blueimp.net
     *
     * Licensed under the MIT license:
     * https://opensource.org/licenses/MIT
     *
     * Based on
     * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
     * Digest Algorithm, as defined in RFC 1321.
     * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * Distributed under the BSD License
     * See http://pajhome.org.uk/crypt/md5 for more info.
     */


    function md5(bytes) {
      if (typeof bytes === 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

        bytes = new Uint8Array(msg.length);

        for (var i = 0; i < msg.length; ++i) {
          bytes[i] = msg.charCodeAt(i);
        }
      }

      return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
    }
    /*
     * Convert an array of little-endian words to an array of bytes
     */


    function md5ToHexEncodedArray(input) {
      var output = [];
      var length32 = input.length * 32;
      var hexTab = '0123456789abcdef';

      for (var i = 0; i < length32; i += 8) {
        var x = input[i >> 5] >>> i % 32 & 0xff;
        var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
      }

      return output;
    }
    /**
     * Calculate output length with padding and bit length
     */


    function getOutputLength(inputLength8) {
      return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
    }
    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length.
     */


    function wordsToMd5(x, len) {
      /* append padding */
      x[len >> 5] |= 0x80 << len % 32;
      x[getOutputLength(len) - 1] = len;
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;

      for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }

      return [a, b, c, d];
    }
    /*
     * Convert an array bytes to an array of little-endian words
     * Characters >255 have their high-byte silently ignored.
     */


    function bytesToWords(input) {
      if (input.length === 0) {
        return [];
      }

      var length8 = input.length * 8;
      var output = new Uint32Array(getOutputLength(length8));

      for (var i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
      }

      return output;
    }
    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */


    function safeAdd(x, y) {
      var lsw = (x & 0xffff) + (y & 0xffff);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xffff;
    }
    /*
     * Bitwise rotate a 32-bit number to the left.
     */


    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    /*
     * These functions implement the four basic operations the algorithm uses.
     */


    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }

    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }

    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }

    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    /* harmony default export */


    __webpack_exports__["default"] = md5;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/nil.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserNilJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = '00000000-0000-0000-0000-000000000000';
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/parse.js":
  /*!*****************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserParseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./validate.js */
    "./node_modules/uuid/dist/esm-browser/validate.js");

    function parse(uuid) {
      if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
      }

      var v;
      var arr = new Uint8Array(16); // Parse ########-....-....-....-............

      arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 0xff;
      arr[2] = v >>> 8 & 0xff;
      arr[3] = v & 0xff; // Parse ........-####-....-....-............

      arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
      arr[5] = v & 0xff; // Parse ........-....-####-....-............

      arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
      arr[7] = v & 0xff; // Parse ........-....-....-####-............

      arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
      arr[9] = v & 0xff; // Parse ........-....-....-....-############
      // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

      arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
      arr[11] = v / 0x100000000 & 0xff;
      arr[12] = v >>> 24 & 0xff;
      arr[13] = v >>> 16 & 0xff;
      arr[14] = v >>> 8 & 0xff;
      arr[15] = v & 0xff;
      return arr;
    }
    /* harmony default export */


    __webpack_exports__["default"] = parse;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/regex.js":
  /*!*****************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserRegexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/rng.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserRngJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return rng;
    }); // Unique ID creation requires a high quality random # generator. In the browser we therefore
    // require the crypto API and do not support built-in fallback to lower quality random number
    // generators (like Math.random()).


    var getRandomValues;
    var rnds8 = new Uint8Array(16);

    function rng() {
      // lazy load so that environments that need to polyfill have a chance to do so
      if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
        // find the complete implementation of crypto (msCrypto) on IE11.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

        if (!getRandomValues) {
          throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
      }

      return getRandomValues(rnds8);
    }
    /***/

  },

  /***/
  "./node_modules/uuid/dist/esm-browser/sha1.js":
  /*!****************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserSha1Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); // Adapted from Chris Veness' SHA1 code at
    // http://www.movable-type.co.uk/scripts/sha1.html


    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;

        case 1:
          return x ^ y ^ z;

        case 2:
          return x & y ^ x & z ^ y & z;

        case 3:
          return x ^ y ^ z;
      }
    }

    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }

    function sha1(bytes) {
      var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
      var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

      if (typeof bytes === 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

        bytes = [];

        for (var i = 0; i < msg.length; ++i) {
          bytes.push(msg.charCodeAt(i));
        }
      } else if (!Array.isArray(bytes)) {
        // Convert Array-like to Array
        bytes = Array.prototype.slice.call(bytes);
      }

      bytes.push(0x80);
      var l = bytes.length / 4 + 2;
      var N = Math.ceil(l / 16);
      var M = new Array(N);

      for (var _i = 0; _i < N; ++_i) {
        var arr = new Uint32Array(16);

        for (var j = 0; j < 16; ++j) {
          arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
        }

        M[_i] = arr;
      }

      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

      for (var _i2 = 0; _i2 < N; ++_i2) {
        var W = new Uint32Array(80);

        for (var t = 0; t < 16; ++t) {
          W[t] = M[_i2][t];
        }

        for (var _t = 16; _t < 80; ++_t) {
          W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
        }

        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];

        for (var _t2 = 0; _t2 < 80; ++_t2) {
          var s = Math.floor(_t2 / 20);
          var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }

        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }

      return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
    }
    /* harmony default export */


    __webpack_exports__["default"] = sha1;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/stringify.js":
  /*!*********************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserStringifyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./validate.js */
    "./node_modules/uuid/dist/esm-browser/validate.js");
    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */


    var byteToHex = [];

    for (var i = 0; i < 256; ++i) {
      byteToHex.push((i + 0x100).toString(16).substr(1));
    }

    function stringify(arr) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
      // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

      var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
      // of the following:
      // - One or more input array values don't map to a hex octet (leading to
      // "undefined" in the uuid)
      // - Invalid input values for the RFC `version` or `variant` fields

      if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
      }

      return uuid;
    }
    /* harmony default export */


    __webpack_exports__["default"] = stringify;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v1.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV1Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./rng.js */
    "./node_modules/uuid/dist/esm-browser/rng.js");
    /* harmony import */


    var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./stringify.js */
    "./node_modules/uuid/dist/esm-browser/stringify.js"); // **`v1()` - Generate time-based UUID**
    //
    // Inspired by https://github.com/LiosK/UUID.js
    // and http://docs.python.org/library/uuid.html


    var _nodeId;

    var _clockseq; // Previous uuid creation time


    var _lastMSecs = 0;
    var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

    function v1(options, buf, offset) {
      var i = buf && offset || 0;
      var b = buf || new Array(16);
      options = options || {};
      var node = options.node || _nodeId;
      var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
      // specified.  We do this lazily to minimize issues related to insufficient
      // system entropy.  See #189

      if (node == null || clockseq == null) {
        var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

        if (node == null) {
          // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
          node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }

        if (clockseq == null) {
          // Per 4.2.2, randomize (14 bit) clockseq
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
        }
      } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
      // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
      // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
      // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


      var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
      // cycle to simulate higher resolution clock

      var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

      var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

      if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
      } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
      // time interval


      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
      } // Per 4.2.1.2 Throw error if too many uuids are requested


      if (nsecs >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }

      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

      msecs += 12219292800000; // `time_low`

      var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
      b[i++] = tl >>> 24 & 0xff;
      b[i++] = tl >>> 16 & 0xff;
      b[i++] = tl >>> 8 & 0xff;
      b[i++] = tl & 0xff; // `time_mid`

      var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
      b[i++] = tmh >>> 8 & 0xff;
      b[i++] = tmh & 0xff; // `time_high_and_version`

      b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

      b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

      b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

      b[i++] = clockseq & 0xff; // `node`

      for (var n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }

      return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
    }
    /* harmony default export */


    __webpack_exports__["default"] = v1;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v3.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV3Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./v35.js */
    "./node_modules/uuid/dist/esm-browser/v35.js");
    /* harmony import */


    var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./md5.js */
    "./node_modules/uuid/dist/esm-browser/md5.js");

    var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    /* harmony default export */

    __webpack_exports__["default"] = v3;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v35.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
    \***************************************************/

  /*! exports provided: DNS, URL, default */

  /***/
  function node_modulesUuidDistEsmBrowserV35Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DNS", function () {
      return DNS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL", function () {
      return URL;
    });
    /* harmony import */


    var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./stringify.js */
    "./node_modules/uuid/dist/esm-browser/stringify.js");
    /* harmony import */


    var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./parse.js */
    "./node_modules/uuid/dist/esm-browser/parse.js");

    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str)); // UTF8 escape

      var bytes = [];

      for (var i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }

      return bytes;
    }

    var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
    var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
    /* harmony default export */

    __webpack_exports__["default"] = function (name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        if (typeof value === 'string') {
          value = stringToBytes(value);
        }

        if (typeof namespace === 'string') {
          namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
        }

        if (namespace.length !== 16) {
          throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
        } // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`


        var bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;

        if (buf) {
          offset = offset || 0;

          for (var i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }

          return buf;
        }

        return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
      } // Function#name is not settable on some platforms (#270)


      try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
      } catch (err) {} // For CommonJS default export support


      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    };
    /***/

  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v4.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV4Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./rng.js */
    "./node_modules/uuid/dist/esm-browser/rng.js");
    /* harmony import */


    var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./stringify.js */
    "./node_modules/uuid/dist/esm-browser/stringify.js");

    function v4(options, buf, offset) {
      options = options || {};

      var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


      rnds[6] = rnds[6] & 0x0f | 0x40;
      rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

      if (buf) {
        offset = offset || 0;

        for (var i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }

        return buf;
      }

      return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
    }
    /* harmony default export */


    __webpack_exports__["default"] = v4;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v5.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV5Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./v35.js */
    "./node_modules/uuid/dist/esm-browser/v35.js");
    /* harmony import */


    var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sha1.js */
    "./node_modules/uuid/dist/esm-browser/sha1.js");

    var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    /* harmony default export */

    __webpack_exports__["default"] = v5;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/validate.js":
  /*!********************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserValidateJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./regex.js */
    "./node_modules/uuid/dist/esm-browser/regex.js");

    function validate(uuid) {
      return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
    }
    /* harmony default export */


    __webpack_exports__["default"] = validate;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/version.js":
  /*!*******************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserVersionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./validate.js */
    "./node_modules/uuid/dist/esm-browser/validate.js");

    function version(uuid) {
      if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
      }

      return parseInt(uuid.substr(14, 1), 16);
    }
    /* harmony default export */


    __webpack_exports__["default"] = version;
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/challenge-dashboard-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/challenge-dashboard-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: ChallengeDashboardRoutingModule */

  /***/
  function srcAppSeekerChallengeDashboardChallengeDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChallengeDashboardRoutingModule", function () {
      return ChallengeDashboardRoutingModule;
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


    var _challenge_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./challenge-dashboard.component */
    "./src/app/seeker/challenge-dashboard/challenge-dashboard.component.ts");
    /* harmony import */


    var _screens_review_applications_review_applications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./screens/review-applications/review-applications.component */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/review-applications.component.ts");
    /* harmony import */


    var _screens_send_eoi_send_eoi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./screens/send-eoi/send-eoi.component */
    "./src/app/seeker/challenge-dashboard/screens/send-eoi/send-eoi.component.ts");
    /* harmony import */


    var _screens_review_proposal_review_proposal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./screens/review-proposal/review-proposal.component */
    "./src/app/seeker/challenge-dashboard/screens/review-proposal/review-proposal.component.ts");
    /* harmony import */


    var _screens_pilots_pilots_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./screens/pilots/pilots.component */
    "./src/app/seeker/challenge-dashboard/screens/pilots/pilots.component.ts");
    /* harmony import */


    var _screens_challenge_overview_challenge_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./screens/challenge-overview/challenge-overview.component */
    "./src/app/seeker/challenge-dashboard/screens/challenge-overview/challenge-overview.component.ts");
    /* harmony import */


    var _screens_create_eoi_create_eoi_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./screens/create-eoi/create-eoi.component */
    "./src/app/seeker/challenge-dashboard/screens/create-eoi/create-eoi.component.ts");
    /* harmony import */


    var _screens_sol_individual_sol_individual_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./screens/sol-individual/sol-individual.component */
    "./src/app/seeker/challenge-dashboard/screens/sol-individual/sol-individual.component.ts");

    const routes = [{
      path: "",
      component: _challenge_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ChallengeDashboardComponent"],
      children: [{
        path: "",
        redirectTo: "review-applications",
        pathMatch: "full"
      }, {
        path: "review-applications",
        component: _screens_review_applications_review_applications_component__WEBPACK_IMPORTED_MODULE_4__["ReviewApplicationsComponent"]
      }, {
        path: "review-applications/:id",
        component: _screens_sol_individual_sol_individual_component__WEBPACK_IMPORTED_MODULE_10__["SolIndividualComponent"]
      }, {
        path: "eoi",
        component: _screens_send_eoi_send_eoi_component__WEBPACK_IMPORTED_MODULE_5__["SendEoiComponent"]
      }, {
        path: "eoi/send",
        component: _screens_create_eoi_create_eoi_component__WEBPACK_IMPORTED_MODULE_9__["CreateEoiComponent"]
      }, {
        path: "eoi/:id",
        component: _screens_sol_individual_sol_individual_component__WEBPACK_IMPORTED_MODULE_10__["SolIndividualComponent"]
      }, {
        path: "review-proposals",
        component: _screens_review_proposal_review_proposal_component__WEBPACK_IMPORTED_MODULE_6__["ReviewProposalComponent"]
      }, {
        path: "pilots",
        component: _screens_pilots_pilots_component__WEBPACK_IMPORTED_MODULE_7__["PilotsComponent"]
      }, {
        path: "overview",
        component: _screens_challenge_overview_challenge_overview_component__WEBPACK_IMPORTED_MODULE_8__["ChallengeOverviewComponent"]
      }]
    }];
    let ChallengeDashboardRoutingModule = class ChallengeDashboardRoutingModule {};
    ChallengeDashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChallengeDashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/challenge-dashboard.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/challenge-dashboard.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardChallengeDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".challenge-header {\r\n  border-top: 1px solid #dee0e6;\r\n}\r\n\r\n.a-header-review-application {\r\n  max-width: 1170px;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.a-counts-wrp {\r\n  width: 100%;\r\n  max-width: 250px;\r\n}\r\n\r\n/* Header tab */\r\n\r\n.a-challenge-tab [data-toggle=\"pill\"] span {\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n\r\n.nav-pills > li + li {\r\n  margin: 0px;\r\n}\r\n\r\n.nav-pills > li > a {\r\n  border-radius: 0px;\r\n}\r\n\r\n.g-default-tab {\r\n  background-color: #ffffff !important;\r\n  padding: 16px 30px 15px;\r\n}\r\n\r\n.nav-pills > li:nth-child(5) a {\r\n  border-right: 1px solid var(--primary-grey) !important;\r\n}\r\n\r\n.nav-pills > li:nth-child(2) a {\r\n  border-left: 1px solid var(--primary-grey) !important;\r\n}\r\n\r\n.a-tab-common-clr,\r\n.a-sol-pilot-tab {\r\n  background: #f7f7f9;\r\n  /* border: 1px solid var(--primary-grey); */\r\n  color: #000000;\r\n  border: 0px !important;\r\n  /* border-left: 0px !important; */\r\n  /* margin-left: -25px; */\r\n  padding-left: 40px;\r\n  padding-right: 35px;\r\n  padding-top: 16px;\r\n  padding-bottom: 15px;\r\n  -webkit-transition: all 0.2s ease !important;\r\n  transition: all 0.2s ease !important;\r\n}\r\n\r\n.a-challenge-tab .a-tab-common-clr::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 8px;\r\n  width: 40px;\r\n  height: 40px;\r\n  background: #f7f7f9;\r\n  border: 1px solid var(--primary-grey);\r\n  -webkit-transform: rotate(47deg);\r\n  transform: rotate(45deg);\r\n  left: 88%;\r\n  border-bottom: 0px;\r\n  border-left: 0px;\r\n  z-index: 2;\r\n  -webkit-transition: all 0.2s ease !important;\r\n  transition: all 0.2s ease !important;\r\n}\r\n\r\n.nav-pills > li.active .a-tab-common-clr,\r\n.nav-pills > li.active .a-tab-common-clr::after,\r\n.a-tab-common-clr:hover,\r\n.a-tab-common-clr:hover:after,\r\n.a-sol-pilot-tab:hover,\r\n.a-sol-pilot-tab:focus,\r\n.nav-pills > li.active > .a-sol-pilot-tab {\r\n  background-color: #48d276 !important;\r\n  color: #fff;\r\n}\r\n\r\n.g-default-tab:hover,\r\n.g-default-tab:focus,\r\n.nav-pills > li.active > .g-default-tab {\r\n  background-color: #4f4f4f !important;\r\n  color: #f7f7f9 !important;\r\n}\r\n\r\n.a-tab-common-clr2::after {\r\n  left: 85% !important;\r\n}\r\n\r\n.a-tab-common-clr3::after {\r\n  left: 90% !important;\r\n}\r\n\r\n.a-challenge-tab-wrp {\r\n  border: 1px solid #dee0e6;\r\n}\r\n\r\n.a-challenge-tab {\r\n  max-width: 1170px;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.a-align-self-center {\r\n  align-self: center !important;\r\n}\r\n\r\n.dashboard-content {\r\n  background: #f3f3f3;\r\n}\r\n\r\n.a-await-approval {\r\n  background: rgba(172, 177, 193, 0.1);\r\n  border: 1px solid var(--primary-grey);\r\n  color: #7f838f;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n\r\n.a-await-proposal {\r\n  background: rgba(242, 148, 62, 0.1);\r\n  border: 1px solid #f2943e;\r\n  color: #d98538;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n\r\n.a-accepting-solution {\r\n  background: rgba(251, 196, 31, 0.1);\r\n  border: 1px solid #fbc41f;\r\n  color: #947412;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n\r\n.a-pilot {\r\n  background: rgba(45, 152, 81, 0.1);\r\n  border: 1px solid #2d9851;\r\n  color: #1e6636;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n\r\n.a-chlng-badge {\r\n  width: 100%;\r\n  min-width: 140px;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvY2hhbGxlbmdlLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFDQTtFQUNFLHFEQUFxRDtBQUN2RDs7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsNENBQW9DO0VBQXBDLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsNENBQTRDO0VBQzVDLG9DQUFvQztBQUN0Qzs7QUFDQTs7Ozs7OztFQU9FLG9DQUFvQztFQUNwQyxXQUFXO0FBQ2I7O0FBQ0E7OztFQUdFLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL2NoYWxsZW5nZS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFsbGVuZ2UtaGVhZGVyIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTBlNjtcclxufVxyXG5cclxuLmEtaGVhZGVyLXJldmlldy1hcHBsaWNhdGlvbiB7XHJcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5hLWNvdW50cy13cnAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qIEhlYWRlciB0YWIgKi9cclxuLmEtY2hhbGxlbmdlLXRhYiBbZGF0YS10b2dnbGU9XCJwaWxsXCJdIHNwYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLm5hdi1waWxscyA+IGxpICsgbGkge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaSA+IGEge1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uZy1kZWZhdWx0LXRhYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDE2cHggMzBweCAxNXB4O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaTpudGgtY2hpbGQoNSkgYSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaTpudGgtY2hpbGQoMikgYSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtdGFiLWNvbW1vbi1jbHIsXHJcbi5hLXNvbC1waWxvdC10YWIge1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjk7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KTsgKi9cclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8qIGJvcmRlci1sZWZ0OiAwcHggIWltcG9ydGFudDsgKi9cclxuICAvKiBtYXJnaW4tbGVmdDogLTI1cHg7ICovXHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWNoYWxsZW5nZS10YWIgLmEtdGFiLWNvbW1vbi1jbHI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDhweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmOTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDdkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICBsZWZ0OiA4OCU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAwcHg7XHJcbiAgei1pbmRleDogMjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSAuYS10YWItY29tbW9uLWNscixcclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSAuYS10YWItY29tbW9uLWNscjo6YWZ0ZXIsXHJcbi5hLXRhYi1jb21tb24tY2xyOmhvdmVyLFxyXG4uYS10YWItY29tbW9uLWNscjpob3ZlcjphZnRlcixcclxuLmEtc29sLXBpbG90LXRhYjpob3ZlcixcclxuLmEtc29sLXBpbG90LXRhYjpmb2N1cyxcclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSA+IC5hLXNvbC1waWxvdC10YWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGQyNzYgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZy1kZWZhdWx0LXRhYjpob3ZlcixcclxuLmctZGVmYXVsdC10YWI6Zm9jdXMsXHJcbi5uYXYtcGlsbHMgPiBsaS5hY3RpdmUgPiAuZy1kZWZhdWx0LXRhYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNGY0ZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZjdmN2Y5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLXRhYi1jb21tb24tY2xyMjo6YWZ0ZXIge1xyXG4gIGxlZnQ6IDg1JSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXRhYi1jb21tb24tY2xyMzo6YWZ0ZXIge1xyXG4gIGxlZnQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWNoYWxsZW5nZS10YWItd3JwIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMGU2O1xyXG59XHJcbi5hLWNoYWxsZW5nZS10YWIge1xyXG4gIG1heC13aWR0aDogMTE3MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uYS1hbGlnbi1zZWxmLWNlbnRlciB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcclxufVxyXG5cclxuLmEtYXdhaXQtYXBwcm92YWwge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpO1xyXG4gIGNvbG9yOiAjN2Y4MzhmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxufVxyXG4uYS1hd2FpdC1wcm9wb3NhbCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDE0OCwgNjIsIDAuMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyOTQzZTtcclxuICBjb2xvcjogI2Q5ODUzODtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuLmEtYWNjZXB0aW5nLXNvbHV0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTk2LCAzMSwgMC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmJjNDFmO1xyXG4gIGNvbG9yOiAjOTQ3NDEyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxufVxyXG4uYS1waWxvdCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0NSwgMTUyLCA4MSwgMC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmQ5ODUxO1xyXG4gIGNvbG9yOiAjMWU2NjM2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxufVxyXG4uYS1jaGxuZy1iYWRnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/challenge-dashboard.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/challenge-dashboard.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ChallengeDashboardComponent */

  /***/
  function srcAppSeekerChallengeDashboardChallengeDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChallengeDashboardComponent", function () {
      return ChallengeDashboardComponent;
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


    var _dashboardmain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboardmain.service */
    "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts");

    let ChallengeDashboardComponent = class ChallengeDashboardComponent {
      constructor(_dash, route) {
        this._dash = _dash;
        this.route = route;
        this.route.params.subscribe(params => this.anchorChallengeId = params.id);
      }

      ngOnInit() {
        this.fetchAnchorChallenge();
      }

      fetchAnchorChallenge() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.isLoading = true;
            this.challengeData = yield this._dash.getAnchorChallenge(this.anchorChallengeId);
            this.isLoading = false;
          } catch (err) {}
        });
      }

      handleActivate(e) {// this.fetchAnchorChallenge();
      }

    };

    ChallengeDashboardComponent.ctorParameters = () => [{
      type: _dashboardmain_service__WEBPACK_IMPORTED_MODULE_3__["DashboardmainService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    ChallengeDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-challenge-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./challenge-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/challenge-dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./challenge-dashboard.component.css */
      "./src/app/seeker/challenge-dashboard/challenge-dashboard.component.css")).default]
    })], ChallengeDashboardComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/challenge-dashboard.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/challenge-dashboard.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ChallengeDashboardModule */

  /***/
  function srcAppSeekerChallengeDashboardChallengeDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChallengeDashboardModule", function () {
      return ChallengeDashboardModule;
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


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _challenge_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./challenge-dashboard-routing.module */
    "./src/app/seeker/challenge-dashboard/challenge-dashboard-routing.module.ts");
    /* harmony import */


    var _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/widgets/widgets.module */
    "./src/app/shared/widgets/widgets.module.ts");
    /* harmony import */


    var _challenge_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./challenge-dashboard.component */
    "./src/app/seeker/challenge-dashboard/challenge-dashboard.component.ts");
    /* harmony import */


    var _screens_review_applications_review_applications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./screens/review-applications/review-applications.component */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/review-applications.component.ts");
    /* harmony import */


    var _screens_review_applications_components_on_hold_on_hold_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./screens/review-applications/components/on-hold/on-hold.component */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/components/on-hold/on-hold.component.ts");
    /* harmony import */


    var _screens_review_applications_components_rejected_rejected_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./screens/review-applications/components/rejected/rejected.component */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/components/rejected/rejected.component.ts");
    /* harmony import */


    var _screens_review_applications_components_review_application_card_review_application_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./screens/review-applications/components/review-application-card/review-application-card.component */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/components/review-application-card/review-application-card.component.ts");
    /* harmony import */


    var _screens_send_eoi_send_eoi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./screens/send-eoi/send-eoi.component */
    "./src/app/seeker/challenge-dashboard/screens/send-eoi/send-eoi.component.ts");
    /* harmony import */


    var _screens_send_eoi_components_eoi_confirm_modal_eoi_confirm_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./screens/send-eoi/components/eoi-confirm-modal/eoi-confirm-modal.component */
    "./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-confirm-modal/eoi-confirm-modal.component.ts");
    /* harmony import */


    var _screens_send_eoi_components_eoi_modal_eoi_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./screens/send-eoi/components/eoi-modal/eoi-modal.component */
    "./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-modal/eoi-modal.component.ts");
    /* harmony import */


    var _screens_review_proposal_review_proposal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./screens/review-proposal/review-proposal.component */
    "./src/app/seeker/challenge-dashboard/screens/review-proposal/review-proposal.component.ts");
    /* harmony import */


    var _screens_review_proposal_components_review_proposal_all_review_proposal_all_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./screens/review-proposal/components/review-proposal-all/review-proposal-all.component */
    "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-all/review-proposal-all.component.ts");
    /* harmony import */


    var _screens_review_proposal_components_review_proposal_awaiting_review_proposal_awaiting_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./screens/review-proposal/components/review-proposal-awaiting/review-proposal-awaiting.component */
    "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-awaiting/review-proposal-awaiting.component.ts");
    /* harmony import */


    var _screens_review_proposal_components_review_proposal_received_review_proposal_received_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./screens/review-proposal/components/review-proposal-received/review-proposal-received.component */
    "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/review-proposal-received.component.ts");
    /* harmony import */


    var _screens_review_proposal_components_review_proposal_rejected_review_proposal_rejected_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./screens/review-proposal/components/review-proposal-rejected/review-proposal-rejected.component */
    "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-rejected/review-proposal-rejected.component.ts");
    /* harmony import */


    var _screens_review_proposal_components_review_proposal_received_components_pilot_ready_modal_pilot_ready_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./screens/review-proposal/components/review-proposal-received/components/pilot-ready-modal/pilot-ready-modal.component */
    "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/pilot-ready-modal/pilot-ready-modal.component.ts");
    /* harmony import */


    var _screens_review_proposal_components_review_proposal_received_components_intitate_pilot_intitate_pilot_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./screens/review-proposal/components/review-proposal-received/components/intitate-pilot/intitate-pilot.component */
    "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/intitate-pilot/intitate-pilot.component.ts");
    /* harmony import */


    var _screens_pilots_pilots_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./screens/pilots/pilots.component */
    "./src/app/seeker/challenge-dashboard/screens/pilots/pilots.component.ts");
    /* harmony import */


    var _screens_pilots_components_all_pilots_all_pilots_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./screens/pilots/components/all-pilots/all-pilots.component */
    "./src/app/seeker/challenge-dashboard/screens/pilots/components/all-pilots/all-pilots.component.ts");
    /* harmony import */


    var _screens_pilots_components_completed_pilots_completed_pilots_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./screens/pilots/components/completed-pilots/completed-pilots.component */
    "./src/app/seeker/challenge-dashboard/screens/pilots/components/completed-pilots/completed-pilots.component.ts");
    /* harmony import */


    var _screens_pilots_components_ongoing_pilots_ongoing_pilots_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./screens/pilots/components/ongoing-pilots/ongoing-pilots.component */
    "./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/ongoing-pilots.component.ts");
    /* harmony import */


    var _screens_pilots_components_yet_to_start_pilots_yet_to_start_pilots_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./screens/pilots/components/yet-to-start-pilots/yet-to-start-pilots.component */
    "./src/app/seeker/challenge-dashboard/screens/pilots/components/yet-to-start-pilots/yet-to-start-pilots.component.ts");
    /* harmony import */


    var _screens_pilots_components_ongoing_pilots_components_pilot_proposal_modal_pilot_proposal_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./screens/pilots/components/ongoing-pilots/components/pilot-proposal-modal/pilot-proposal-modal.component */
    "./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/components/pilot-proposal-modal/pilot-proposal-modal.component.ts");
    /* harmony import */


    var _screens_challenge_overview_challenge_overview_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./screens/challenge-overview/challenge-overview.component */
    "./src/app/seeker/challenge-dashboard/screens/challenge-overview/challenge-overview.component.ts");
    /* harmony import */


    var _screens_sol_individual_sol_individual_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./screens/sol-individual/sol-individual.component */
    "./src/app/seeker/challenge-dashboard/screens/sol-individual/sol-individual.component.ts");
    /* harmony import */


    var _screens_create_eoi_create_eoi_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./screens/create-eoi/create-eoi.component */
    "./src/app/seeker/challenge-dashboard/screens/create-eoi/create-eoi.component.ts");
    /* harmony import */


    var _screens_review_applications_components_card_loader_card_loader_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./screens/review-applications/components/card-loader/card-loader.component */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/components/card-loader/card-loader.component.ts");
    /* harmony import */


    var _screens_challenge_overview_components_anchor_applications_anchor_applications_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./screens/challenge-overview/components/anchor-applications/anchor-applications.component */
    "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-applications/anchor-applications.component.ts");
    /* harmony import */


    var _screens_challenge_overview_components_anchor_eois_anchor_eois_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./screens/challenge-overview/components/anchor-eois/anchor-eois.component */
    "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-eois/anchor-eois.component.ts");
    /* harmony import */


    var _screens_review_proposal_components_proposal_details_modal_proposal_details_modal_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./screens/review-proposal/components/proposal-details-modal/proposal-details-modal.component */
    "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/proposal-details-modal/proposal-details-modal.component.ts");
    /* harmony import */


    var _screens_challenge_overview_components_overview_proposals_overview_proposals_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./screens/challenge-overview/components/overview-proposals/overview-proposals.component */
    "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-proposals/overview-proposals.component.ts");
    /* harmony import */


    var _screens_challenge_overview_components_overview_pilots_overview_pilots_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./screens/challenge-overview/components/overview-pilots/overview-pilots.component */
    "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-pilots/overview-pilots.component.ts");
    /* harmony import */


    var _screens_challenge_overview_components_overview_anchor_overview_anchor_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./screens/challenge-overview/components/overview-anchor/overview-anchor.component */
    "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-anchor/overview-anchor.component.ts");
    /* harmony import */


    var _screens_pilots_components_pilot_report_upload_pilot_report_upload_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./screens/pilots/components/pilot-report-upload/pilot-report-upload.component */
    "./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-report-upload/pilot-report-upload.component.ts");
    /* harmony import */


    var _screens_pilots_components_pilot_order_upload_pilot_order_upload_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./screens/pilots/components/pilot-order-upload/pilot-order-upload.component */
    "./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-order-upload/pilot-order-upload.component.ts");
    /* harmony import */


    var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! src/app/state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");

    let ChallengeDashboardModule = class ChallengeDashboardModule {};
    ChallengeDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_challenge_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["ChallengeDashboardComponent"], _screens_review_applications_review_applications_component__WEBPACK_IMPORTED_MODULE_9__["ReviewApplicationsComponent"], _screens_review_applications_components_on_hold_on_hold_component__WEBPACK_IMPORTED_MODULE_10__["OnHoldComponent"], _screens_review_applications_components_rejected_rejected_component__WEBPACK_IMPORTED_MODULE_11__["RejectedComponent"], _screens_review_applications_components_review_application_card_review_application_card_component__WEBPACK_IMPORTED_MODULE_12__["ReviewApplicationCardComponent"], _screens_send_eoi_send_eoi_component__WEBPACK_IMPORTED_MODULE_13__["SendEoiComponent"], _screens_send_eoi_components_eoi_confirm_modal_eoi_confirm_modal_component__WEBPACK_IMPORTED_MODULE_14__["EoiConfirmModalComponent"], _screens_send_eoi_components_eoi_modal_eoi_modal_component__WEBPACK_IMPORTED_MODULE_15__["EoiModalComponent"], _screens_review_proposal_review_proposal_component__WEBPACK_IMPORTED_MODULE_16__["ReviewProposalComponent"], _screens_review_proposal_components_review_proposal_all_review_proposal_all_component__WEBPACK_IMPORTED_MODULE_17__["ReviewProposalAllComponent"], _screens_review_proposal_components_review_proposal_awaiting_review_proposal_awaiting_component__WEBPACK_IMPORTED_MODULE_18__["ReviewProposalAwaitingComponent"], _screens_review_proposal_components_review_proposal_received_review_proposal_received_component__WEBPACK_IMPORTED_MODULE_19__["ReviewProposalReceivedComponent"], _screens_review_proposal_components_review_proposal_rejected_review_proposal_rejected_component__WEBPACK_IMPORTED_MODULE_20__["ReviewProposalRejectedComponent"], _screens_review_proposal_components_review_proposal_received_components_pilot_ready_modal_pilot_ready_modal_component__WEBPACK_IMPORTED_MODULE_21__["PilotReadyModalComponent"], _screens_review_proposal_components_review_proposal_received_components_intitate_pilot_intitate_pilot_component__WEBPACK_IMPORTED_MODULE_22__["IntitatePilotComponent"], _screens_pilots_pilots_component__WEBPACK_IMPORTED_MODULE_23__["PilotsComponent"], _screens_pilots_components_all_pilots_all_pilots_component__WEBPACK_IMPORTED_MODULE_24__["AllPilotsComponent"], _screens_pilots_components_completed_pilots_completed_pilots_component__WEBPACK_IMPORTED_MODULE_25__["CompletedPilotsComponent"], _screens_pilots_components_ongoing_pilots_ongoing_pilots_component__WEBPACK_IMPORTED_MODULE_26__["OngoingPilotsComponent"], _screens_pilots_components_yet_to_start_pilots_yet_to_start_pilots_component__WEBPACK_IMPORTED_MODULE_27__["YetToStartPilotsComponent"], _screens_pilots_components_ongoing_pilots_components_pilot_proposal_modal_pilot_proposal_modal_component__WEBPACK_IMPORTED_MODULE_28__["PilotProposalModalComponent"], _screens_challenge_overview_challenge_overview_component__WEBPACK_IMPORTED_MODULE_29__["ChallengeOverviewComponent"], _screens_sol_individual_sol_individual_component__WEBPACK_IMPORTED_MODULE_30__["SolIndividualComponent"], _screens_create_eoi_create_eoi_component__WEBPACK_IMPORTED_MODULE_31__["CreateEoiComponent"], _screens_review_applications_components_card_loader_card_loader_component__WEBPACK_IMPORTED_MODULE_32__["CardLoaderComponent"], _screens_challenge_overview_components_anchor_applications_anchor_applications_component__WEBPACK_IMPORTED_MODULE_33__["AnchorApplicationsComponent"], _screens_challenge_overview_components_anchor_eois_anchor_eois_component__WEBPACK_IMPORTED_MODULE_34__["AnchorEoisComponent"], _screens_review_proposal_components_proposal_details_modal_proposal_details_modal_component__WEBPACK_IMPORTED_MODULE_35__["ProposalDetailsModalComponent"], _screens_challenge_overview_components_overview_proposals_overview_proposals_component__WEBPACK_IMPORTED_MODULE_36__["OverviewProposalsComponent"], _screens_challenge_overview_components_overview_pilots_overview_pilots_component__WEBPACK_IMPORTED_MODULE_37__["OverviewPilotsComponent"], _screens_challenge_overview_components_overview_anchor_overview_anchor_component__WEBPACK_IMPORTED_MODULE_38__["OverviewAnchorComponent"], _screens_pilots_components_pilot_report_upload_pilot_report_upload_component__WEBPACK_IMPORTED_MODULE_39__["PilotReportUploadComponent"], _screens_pilots_components_pilot_order_upload_pilot_order_upload_component__WEBPACK_IMPORTED_MODULE_40__["PilotOrderUploadComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _challenge_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChallengeDashboardRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"], _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_7__["WidgetsModule"]],
      providers: [src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_41__["LoggedInUserStateModel"]]
    })], ChallengeDashboardModule);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/challenge-overview/challenge-overview.component.css":
  /*!********************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/challenge-overview/challenge-overview.component.css ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensChallengeOverviewChallengeOverviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-header-review-application {\r\n    max-width: 1170px;\r\n    width: 100%;\r\n    margin:auto;\r\n}\r\n.a-counts-wrp {\r\n    width:100%;\r\n    max-width:250px;\r\n}\r\n/* Header tab */\r\n.a-challenge-tab [data-toggle=\"pill\"] span {\r\n\tposition: relative;\r\n\tz-index: 10;\r\n}\r\n.nav-pills > li + li {\r\n\tmargin: 0px;\r\n}\r\n.nav-pills > li > a {\r\n\tborder-radius: 0px;\r\n}\r\n.g-default-tab {\r\n    background-color: #ffffff !important;\r\n    padding:12px 30px 15px;\r\n}\r\n.nav-pills > li:nth-child(5)  a{\r\n    border-right:1px solid var(--primary-grey) !important;\r\n}\r\n.nav-pills > li:nth-child(2) a{\r\n    border-left:1px solid var(--primary-grey) !important;\r\n}\r\n.a-tab-common-clr,\r\n.a-sol-pilot-tab {\r\n\tbackground: #f7f7f9;\r\n\t/* border: 1px solid var(--primary-grey); */\r\n\tcolor: #7f838f;\r\n\tborder: 0px !important;\r\n\t/* border-left: 0px !important; */\r\n\t/* margin-left: -25px; */\r\n\tpadding-left: 40px;\r\n    padding-right:20px;\r\n    padding-top:16px;\r\n    padding-bottom:15px;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n.a-challenge-tab .a-tab-common-clr::after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 8px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid var(--primary-grey);\r\n\t-webkit-transform: rotate(47deg);\r\n\ttransform: rotate(45deg);\r\n\tleft: 88%;\r\n\tborder-bottom: 0px;\r\n\tborder-left: 0px;\r\n\tz-index: 2;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n.nav-pills > li.active .a-tab-common-clr,\r\n.nav-pills > li.active .a-tab-common-clr::after,\r\n.a-tab-common-clr:hover,\r\n.a-tab-common-clr:hover:after,\r\n.a-sol-pilot-tab:hover,\r\n.a-sol-pilot-tab:focus {\r\n\tbackground-color: #4F4F4F !important;\r\n\tcolor: #f7f7f9;\r\n}\r\n.g-default-tab:hover,\r\n.g-default-tab:focus,\r\n.nav-pills>li.active>.g-default-tab{\r\n    border-bottom: 4px solid #4F4F4F;\r\n}\r\n.a-tab-common-clr2::after {\r\n    left: 82% !important;\r\n}\r\n.a-challenge-tab-wrp {\r\n    border:1px solid #DEE0E6;\r\n}\r\n.a-challenge-tab {\r\n    max-width: 1170px;\r\n    width: 100%;\r\n    margin:auto;\r\n}\r\n.a-align-self-center {\r\n    align-self: center!important;\r\n}\r\n.a-challenge-overview-wrp {\r\n    min-height: 100vh;\r\n}\r\n.a-card {\r\n    border: 1px solid #DEDEDE;\r\n}\r\n.a-col1-title,\r\n.a-col2-title,\r\n.a-view-all {\r\n    color: #45474D;\r\n    opacity: 0.6;\r\n}\r\n.a-overview-cnt1 {\r\n    color: #0B0C0D;\r\n}\r\n.a-overview-cnt2 {\r\n    color: #45474D;\r\n    opacity: 0.8;\r\n}\r\n.a-overview-list1>li {\r\n    list-style: none;\r\n}\r\n.a-overview-list1>li:not(:first-child):not(:last-child),\r\n.ol>li:not(:first-child):not(:last-child){\r\n    padding:10px 0px;\r\n}\r\n.a-overview-list1>li:first-child,\r\nol>li:first-child{\r\n   padding-bottom:10px;\r\n}\r\n.a-overview-list1>li:last-child,\r\nol>li:last-child {\r\n    padding-top:10px;\r\n}\r\n.a-no-pilots {\r\n    color: #787C87;\r\n}\r\n.a-anchor-card-list:not(:last-child){\r\n    border-bottom: 1px solid #DEE0E6;\r\n}\r\n.a-shortlisted {\r\n    background: #19C8A6;\r\n}\r\n.a-rejected {\r\n    background: #F8483D;\r\n}\r\n.a-onhold {\r\n    background: #FBCC3E;\r\n}\r\n.a-solution-badge {\r\n    width:65px;\r\n    text-align: center;\r\n    border-radius:4px;\r\n}\r\n.a-card{\r\n    border: 1px solid #DEDEDE;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9jaGFsbGVuZ2Utb3ZlcnZpZXcvY2hhbGxlbmdlLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFFQSxlQUFlO0FBQ2Y7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztBQUNaO0FBRUE7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscURBQXFEO0FBQ3pEO0FBQ0E7SUFDSSxvREFBb0Q7QUFDeEQ7QUFDQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsMkNBQTJDO0NBQzNDLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIsaUNBQWlDO0NBQ2pDLHdCQUF3QjtDQUN4QixrQkFBa0I7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0Qiw0Q0FBb0M7Q0FBcEMsb0NBQW9DO0FBQ3JDO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIscUNBQXFDO0NBQ3JDLGdDQUFnQztDQUNoQyx3QkFBd0I7Q0FDeEIsU0FBUztDQUNULGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLDRDQUE0QztDQUM1QyxvQ0FBb0M7QUFDckM7QUFDQTs7Ozs7O0NBTUMsb0NBQW9DO0NBQ3BDLGNBQWM7QUFDZjtBQUNBOzs7SUFHSSxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBR0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBOzs7SUFHSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUNBOztHQUVHLG1CQUFtQjtBQUN0QjtBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9jaGFsbGVuZ2Utb3ZlcnZpZXcvY2hhbGxlbmdlLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYS1oZWFkZXItcmV2aWV3LWFwcGxpY2F0aW9uIHtcclxuICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxufVxyXG4uYS1jb3VudHMtd3JwIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6MjUwcHg7XHJcbn1cclxuXHJcbi8qIEhlYWRlciB0YWIgKi9cclxuLmEtY2hhbGxlbmdlLXRhYiBbZGF0YS10b2dnbGU9XCJwaWxsXCJdIHNwYW4ge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLm5hdi1waWxscyA+IGxpICsgbGkge1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaSA+IGEge1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uZy1kZWZhdWx0LXRhYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOjEycHggMzBweCAxNXB4O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaTpudGgtY2hpbGQoNSkgIGF7XHJcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JleSkgIWltcG9ydGFudDtcclxufVxyXG4ubmF2LXBpbGxzID4gbGk6bnRoLWNoaWxkKDIpIGF7XHJcbiAgICBib3JkZXItbGVmdDoxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXRhYi1jb21tb24tY2xyLFxyXG4uYS1zb2wtcGlsb3QtdGFiIHtcclxuXHRiYWNrZ3JvdW5kOiAjZjdmN2Y5O1xyXG5cdC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JleSk7ICovXHJcblx0Y29sb3I6ICM3ZjgzOGY7XHJcblx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcclxuXHQvKiBib3JkZXItbGVmdDogMHB4ICFpbXBvcnRhbnQ7ICovXHJcblx0LyogbWFyZ2luLWxlZnQ6IC0yNXB4OyAqL1xyXG5cdHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICAgIHBhZGRpbmctdG9wOjE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxNXB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxufVxyXG4uYS1jaGFsbGVuZ2UtdGFiIC5hLXRhYi1jb21tb24tY2xyOjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA4cHg7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmN2Y3Zjk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ3ZGVnKTtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0bGVmdDogODglO1xyXG5cdGJvcmRlci1ib3R0b206IDBweDtcclxuXHRib3JkZXItbGVmdDogMHB4O1xyXG5cdHotaW5kZXg6IDI7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaS5hY3RpdmUgLmEtdGFiLWNvbW1vbi1jbHIsXHJcbi5uYXYtcGlsbHMgPiBsaS5hY3RpdmUgLmEtdGFiLWNvbW1vbi1jbHI6OmFmdGVyLFxyXG4uYS10YWItY29tbW9uLWNscjpob3ZlcixcclxuLmEtdGFiLWNvbW1vbi1jbHI6aG92ZXI6YWZ0ZXIsXHJcbi5hLXNvbC1waWxvdC10YWI6aG92ZXIsXHJcbi5hLXNvbC1waWxvdC10YWI6Zm9jdXMge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEYgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2Y3ZjdmOTtcclxufVxyXG4uZy1kZWZhdWx0LXRhYjpob3ZlcixcclxuLmctZGVmYXVsdC10YWI6Zm9jdXMsXHJcbi5uYXYtcGlsbHM+bGkuYWN0aXZlPi5nLWRlZmF1bHQtdGFie1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM0RjRGNEY7XHJcbn1cclxuXHJcbi5hLXRhYi1jb21tb24tY2xyMjo6YWZ0ZXIge1xyXG4gICAgbGVmdDogODIlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLWNoYWxsZW5nZS10YWItd3JwIHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI0RFRTBFNjtcclxufVxyXG4uYS1jaGFsbGVuZ2UtdGFiIHtcclxuICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxufVxyXG4uYS1hbGlnbi1zZWxmLWNlbnRlciB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmEtY2hhbGxlbmdlLW92ZXJ2aWV3LXdycCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uYS1jYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbn1cclxuLmEtY29sMS10aXRsZSxcclxuLmEtY29sMi10aXRsZSxcclxuLmEtdmlldy1hbGwge1xyXG4gICAgY29sb3I6ICM0NTQ3NEQ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuLmEtb3ZlcnZpZXctY250MSB7XHJcbiAgICBjb2xvcjogIzBCMEMwRDtcclxufVxyXG4uYS1vdmVydmlldy1jbnQyIHtcclxuICAgIGNvbG9yOiAjNDU0NzREO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5hLW92ZXJ2aWV3LWxpc3QxPmxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLmEtb3ZlcnZpZXctbGlzdDE+bGk6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSxcclxuLm9sPmxpOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICBwYWRkaW5nOjEwcHggMHB4O1xyXG59XHJcbi5hLW92ZXJ2aWV3LWxpc3QxPmxpOmZpcnN0LWNoaWxkLFxyXG5vbD5saTpmaXJzdC1jaGlsZHtcclxuICAgcGFkZGluZy1ib3R0b206MTBweDtcclxufVxyXG4uYS1vdmVydmlldy1saXN0MT5saTpsYXN0LWNoaWxkLFxyXG5vbD5saTpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5hLW5vLXBpbG90cyB7XHJcbiAgICBjb2xvcjogIzc4N0M4NztcclxufVxyXG4uYS1hbmNob3ItY2FyZC1saXN0Om5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RFRTBFNjtcclxufVxyXG4uYS1zaG9ydGxpc3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTlDOEE2O1xyXG59XHJcbi5hLXJlamVjdGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNGODQ4M0Q7XHJcbn1cclxuLmEtb25ob2xkIHtcclxuICAgIGJhY2tncm91bmQ6ICNGQkNDM0U7XHJcbn1cclxuLmEtc29sdXRpb24tYmFkZ2Uge1xyXG4gICAgd2lkdGg6NjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG59XHJcbi5hLWNhcmR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/challenge-overview/challenge-overview.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/challenge-overview/challenge-overview.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: ChallengeOverviewComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensChallengeOverviewChallengeOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChallengeOverviewComponent", function () {
      return ChallengeOverviewComponent;
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


    var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_challenge_challenge_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/challenge/challenge.service */
    "./src/app/challenge/challenge.service.ts");

    let ChallengeOverviewComponent = class ChallengeOverviewComponent {
      constructor(toastr, route, _anchor) {
        this.toastr = toastr;
        this.route = route;
        this._anchor = _anchor;
        this.overviewLoading = true;
        this.route.parent.params.subscribe(params => this.anchorId = params.id);
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.getAnchor();
        });
      }

      getAnchor() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.overviewLoading = true;
            this.anchorData = yield this._anchor.getAnchorById(this.anchorId); // this.isAuthor = this.anchorData.data.frg_seeker_id.id == this.currentUser.userTypeId ? true : false;

            this.challengeData = yield this._anchor.getChallengeById(this.anchorData.data.frg_challenge_id.id); // console.log("CD", this.challengeData);

            this.overviewLoading = false;
          } catch (err) {
            console.log(err);
          }
        });
      }

    };

    ChallengeOverviewComponent.ctorParameters = () => [{
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: src_app_challenge_challenge_service__WEBPACK_IMPORTED_MODULE_6__["ChallengeService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_2__["LoggedInUserState"])], ChallengeOverviewComponent.prototype, "loggedInUser$", void 0);
    ChallengeOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-challenge-overview",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./challenge-overview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/challenge-overview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./challenge-overview.component.css */
      "./src/app/seeker/challenge-dashboard/screens/challenge-overview/challenge-overview.component.css")).default]
    })], ChallengeOverviewComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-applications/anchor-applications.component.css":
  /*!****************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-applications/anchor-applications.component.css ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsAnchorApplicationsAnchorApplicationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-solution-image-wrp {\r\n\tborder-radius: 4px;\r\n\tmax-width: 64px;\r\n}\r\n.a-shortlisted {\r\n\tbackground: #19c8a6 !important;\r\n}\r\n.a-rejected {\r\n\tbackground: #f8483d !important;\r\n}\r\n.a-onhold {\r\n\tbackground: #fbcc3e !important;\r\n}\r\n.a-solution-badge {\r\n\twidth: 65px;\r\n\ttext-align: center;\r\n\tborder-radius: 4px;\r\n\tbackground: #bbbcbf;\r\n}\r\n.a-col1-title,\r\n.a-col2-title,\r\n.a-view-all {\r\n\tcolor: #45474d;\r\n\topacity: 0.6;\r\n}\r\n.a-card {\r\n\tborder: 1px solid #dedede;\r\n}\r\n.no-anchors {\r\n\tpadding: 1.263rem;\r\n}\r\n.a-anchor-card-list:not(:last-child) {\r\n\tborder-bottom: 1px solid #dedede;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9jaGFsbGVuZ2Utb3ZlcnZpZXcvY29tcG9uZW50cy9hbmNob3ItYXBwbGljYXRpb25zL2FuY2hvci1hcHBsaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7QUFDQTs7O0NBR0MsY0FBYztDQUNkLFlBQVk7QUFDYjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGdDQUFnQztBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvY2hhbGxlbmdlLW92ZXJ2aWV3L2NvbXBvbmVudHMvYW5jaG9yLWFwcGxpY2F0aW9ucy9hbmNob3ItYXBwbGljYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYS1zb2x1dGlvbi1pbWFnZS13cnAge1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRtYXgtd2lkdGg6IDY0cHg7XHJcbn1cclxuLmEtc2hvcnRsaXN0ZWQge1xyXG5cdGJhY2tncm91bmQ6ICMxOWM4YTYgIWltcG9ydGFudDtcclxufVxyXG4uYS1yZWplY3RlZCB7XHJcblx0YmFja2dyb3VuZDogI2Y4NDgzZCAhaW1wb3J0YW50O1xyXG59XHJcbi5hLW9uaG9sZCB7XHJcblx0YmFja2dyb3VuZDogI2ZiY2MzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXNvbHV0aW9uLWJhZGdlIHtcclxuXHR3aWR0aDogNjVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJhY2tncm91bmQ6ICNiYmJjYmY7XHJcbn1cclxuLmEtY29sMS10aXRsZSxcclxuLmEtY29sMi10aXRsZSxcclxuLmEtdmlldy1hbGwge1xyXG5cdGNvbG9yOiAjNDU0NzRkO1xyXG5cdG9wYWNpdHk6IDAuNjtcclxufVxyXG4uYS1jYXJkIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi5uby1hbmNob3JzIHtcclxuXHRwYWRkaW5nOiAxLjI2M3JlbTtcclxufVxyXG5cclxuLmEtYW5jaG9yLWNhcmQtbGlzdDpub3QoOmxhc3QtY2hpbGQpIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-applications/anchor-applications.component.ts":
  /*!***************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-applications/anchor-applications.component.ts ***!
    \***************************************************************************************************************************************/

  /*! exports provided: AnchorApplicationsComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsAnchorApplicationsAnchorApplicationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnchorApplicationsComponent", function () {
      return AnchorApplicationsComponent;
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


    var _review_applications_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../review-applications/application.service */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/application.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    let AnchorApplicationsComponent = class AnchorApplicationsComponent {
      constructor(_app) {
        this._app = _app;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server_url;
        this.query = {
          filter: {
            status: "active"
          },
          sort: "created_at DESC",
          pg: {
            limit: 5,
            skip: 0
          }
        };
      }

      ngOnChanges() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.loading = true; // console.log("Anchor id", this.anchorId);

          if (this.anchorId != undefined) {
            yield this.fetchApplications();
          }

          this.loading = false;
        });
      }

      fetchApplications() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.query.filter.frg_anchor_id = this.anchorId;
          this.applicationData = yield this._app.getApplications(this.query); // console.log("Anchor Application", this.applicationData);

          yield this.applicationData.data.map(app => {
            app.daysago = moment__WEBPACK_IMPORTED_MODULE_4__(app.created_at).fromNow();
          });
        });
      }

    };

    AnchorApplicationsComponent.ctorParameters = () => [{
      type: _review_applications_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AnchorApplicationsComponent.prototype, "anchorId", void 0);
    AnchorApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-anchor-applications",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./anchor-applications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-applications/anchor-applications.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./anchor-applications.component.css */
      "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-applications/anchor-applications.component.css")).default]
    })], AnchorApplicationsComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-eois/anchor-eois.component.css":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-eois/anchor-eois.component.css ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsAnchorEoisAnchorEoisComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-col1-title,\r\n.a-col2-title,\r\n.a-view-all {\r\n\tcolor: #45474d;\r\n\topacity: 0.6;\r\n}\r\n.a-card {\r\n\tborder: 1px solid #dedede;\r\n}\r\n.no-anchors {\r\n\tpadding: 1.263rem;\r\n}\r\n.a-anchor-card-list:not(:last-child) {\r\n\tborder-bottom: 1px solid #dedede;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9jaGFsbGVuZ2Utb3ZlcnZpZXcvY29tcG9uZW50cy9hbmNob3ItZW9pcy9hbmNob3ItZW9pcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Q0FHQyxjQUFjO0NBQ2QsWUFBWTtBQUNiO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsZ0NBQWdDO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9jaGFsbGVuZ2Utb3ZlcnZpZXcvY29tcG9uZW50cy9hbmNob3ItZW9pcy9hbmNob3ItZW9pcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEtY29sMS10aXRsZSxcclxuLmEtY29sMi10aXRsZSxcclxuLmEtdmlldy1hbGwge1xyXG5cdGNvbG9yOiAjNDU0NzRkO1xyXG5cdG9wYWNpdHk6IDAuNjtcclxufVxyXG4uYS1jYXJkIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi5uby1hbmNob3JzIHtcclxuXHRwYWRkaW5nOiAxLjI2M3JlbTtcclxufVxyXG5cclxuLmEtYW5jaG9yLWNhcmQtbGlzdDpub3QoOmxhc3QtY2hpbGQpIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-eois/anchor-eois.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-eois/anchor-eois.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: AnchorEoisComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsAnchorEoisAnchorEoisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnchorEoisComponent", function () {
      return AnchorEoisComponent;
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


    var _review_applications_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../review-applications/application.service */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/application.service.ts");

    let AnchorEoisComponent = class AnchorEoisComponent {
      constructor(_app) {
        this._app = _app;
        this.query = {
          filter: {
            status: "active"
          },
          sort: "created_at DESC",
          pg: {
            limit: 5,
            skip: 0
          }
        };
      }

      ngOnChanges() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.loading = true; // console.log("Anchor id", this.anchorId);

          if (this.anchorId != undefined) {
            yield this.fetchEOIs();
          }

          this.loading = false;
        });
      }

      fetchEOIs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.query.filter.frg_anchor_id = this.anchorId;
          this.eoiData = yield this._app.getEOI(this.query);
        });
      }

      truncateHTML(text) {
        let charlimit = 20;

        if (!text || text.length <= charlimit) {
          return text;
        }

        let without_html = text.replace(/<(?:.|\n)*?>/gm, "");
        let shortened = without_html.substring(0, charlimit) + "...";
        return shortened;
      }

    };

    AnchorEoisComponent.ctorParameters = () => [{
      type: _review_applications_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AnchorEoisComponent.prototype, "anchorId", void 0);
    AnchorEoisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-anchor-eois",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./anchor-eois.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-eois/anchor-eois.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./anchor-eois.component.css */
      "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/anchor-eois/anchor-eois.component.css")).default]
    })], AnchorEoisComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-anchor/overview-anchor.component.css":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-anchor/overview-anchor.component.css ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsOverviewAnchorOverviewAnchorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".widget-wrap{\r\n    margin-bottom: 1.684rem;\r\n}\r\n\r\n.widget-wrap .widget-container{\r\n    background:var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    height:336px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.section-title{\r\n    font-size:0.631rem;\r\n    color: #45474D;\r\n    opacity: 0.6;\r\n    margin-bottom:8px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n}\r\n\r\n.anchor-item{\r\n    padding:1.263rem;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.anchor-item{\r\n    border-bottom: 1px solid #DEE0E6;\r\n}\r\n\r\n.anchor-details{\r\n    flex-basis: 60%;\r\n}\r\n\r\n.stats{\r\n    text-align: center;\r\n    color:#4F4F4F;\r\n    font-weight:500;\r\n    font-size: 0.631rem;\r\n}\r\n\r\n.stats span{\r\n    display: block;\r\n    font-size: 0.8421rem;\r\n}\r\n\r\n.city-name{\r\n    color:#4F4F4F;\r\n    font-weight:500;\r\n    font-size: 0.8421rem;\r\n}\r\n\r\n.author-info{\r\n    color:#4F4F4F;\r\n    opacity: 0.6;\r\n    font-size: 0.631rem;\r\n}\r\n\r\n.author-info span:nth-child(1){\r\n    text-decoration: underline;\r\n    margin-right:1.8rem;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n\r\n.no-anchors{\r\n    padding: 1.263rem;\r\n}\r\n\r\n.anchor-skeleton{\r\n    padding:1.263rem;\r\n    border-bottom: 1px solid #DEE0E6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9jaGFsbGVuZ2Utb3ZlcnZpZXcvY29tcG9uZW50cy9vdmVydmlldy1hbmNob3Ivb3ZlcnZpZXctYW5jaG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9jaGFsbGVuZ2Utb3ZlcnZpZXcvY29tcG9uZW50cy9vdmVydmlldy1hbmNob3Ivb3ZlcnZpZXctYW5jaG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0LXdyYXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjY4NHJlbTtcclxufVxyXG5cclxuLndpZGdldC13cmFwIC53aWRnZXQtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGhlaWdodDozMzZweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxle1xyXG4gICAgZm9udC1zaXplOjAuNjMxcmVtO1xyXG4gICAgY29sb3I6ICM0NTQ3NEQ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOjhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYW5jaG9yLWl0ZW17XHJcbiAgICBwYWRkaW5nOjEuMjYzcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbmNob3ItaXRlbXtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVFMEU2O1xyXG59XHJcblxyXG4uYW5jaG9yLWRldGFpbHN7XHJcbiAgICBmbGV4LWJhc2lzOiA2MCU7XHJcbn1cclxuXHJcbi5zdGF0c3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiM0RjRGNEY7XHJcbiAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICBmb250LXNpemU6IDAuNjMxcmVtO1xyXG59XHJcblxyXG4uc3RhdHMgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjg0MjFyZW07XHJcbn1cclxuXHJcbi5jaXR5LW5hbWV7XHJcbiAgICBjb2xvcjojNEY0RjRGO1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg0MjFyZW07XHJcbn1cclxuXHJcbi5hdXRob3ItaW5mb3tcclxuICAgIGNvbG9yOiM0RjRGNEY7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBmb250LXNpemU6IDAuNjMxcmVtO1xyXG59XHJcblxyXG4uYXV0aG9yLWluZm8gc3BhbjpudGgtY2hpbGQoMSl7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIG1hcmdpbi1yaWdodDoxLjhyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubm8tYW5jaG9yc3tcclxuICAgIHBhZGRpbmc6IDEuMjYzcmVtO1xyXG59XHJcblxyXG4uYW5jaG9yLXNrZWxldG9ue1xyXG4gICAgcGFkZGluZzoxLjI2M3JlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVFMEU2O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-anchor/overview-anchor.component.ts":
  /*!*******************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-anchor/overview-anchor.component.ts ***!
    \*******************************************************************************************************************************/

  /*! exports provided: OverviewAnchorComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsOverviewAnchorOverviewAnchorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverviewAnchorComponent", function () {
      return OverviewAnchorComponent;
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


    var src_app_challenge_components_anchor_widget_anchor_widget_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/challenge/components/anchor-widget/anchor-widget-service.service */
    "./src/app/challenge/components/anchor-widget/anchor-widget-service.service.ts");

    let OverviewAnchorComponent = class OverviewAnchorComponent {
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
          this.anchorData = resp.data.filter(e => {
            if (e.id != this.anchorId) return e;
          });
          this.anchorData.map(anchors => {
            let smartcityId = anchors.frg_seeker_id.frg_smart_city_id;
            anchors.frg_seeker_id.frg_smart_city_id = anchors.smart_cities.find(city => smartcityId === city.id);
          }); // console.log(this.anchorData);

          this.widgetLoading = false;
        });
      }

    };

    OverviewAnchorComponent.ctorParameters = () => [{
      type: src_app_challenge_components_anchor_widget_anchor_widget_service_service__WEBPACK_IMPORTED_MODULE_2__["AnchorWidgetServiceService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverviewAnchorComponent.prototype, "anchorId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverviewAnchorComponent.prototype, "challengeId", void 0);
    OverviewAnchorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-overview-anchor",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./overview-anchor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-anchor/overview-anchor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./overview-anchor.component.css */
      "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-anchor/overview-anchor.component.css")).default]
    })], OverviewAnchorComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-pilots/overview-pilots.component.css":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-pilots/overview-pilots.component.css ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsOverviewPilotsOverviewPilotsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-shortlisted {\r\n\tbackground: #19c8a6;\r\n}\r\n.a-rejected {\r\n\tbackground: #f8483d;\r\n}\r\n.a-onhold {\r\n\tbackground: #fbcc3e;\r\n}\r\n.a-solution-badge {\r\n\twidth: 65px;\r\n\ttext-align: center;\r\n\tborder-radius: 4px;\r\n}\r\n.a-col1-title,\r\n.a-col2-title,\r\n.a-view-all {\r\n\tcolor: #45474d;\r\n\topacity: 0.6;\r\n}\r\n.a-card {\r\n\tborder: 1px solid #dedede;\r\n}\r\n.no-anchors {\r\n\tpadding: 1.263rem;\r\n}\r\n.a-anchor-card-list:not(:last-child) {\r\n\tborder-bottom: 1px solid #dedede;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9jaGFsbGVuZ2Utb3ZlcnZpZXcvY29tcG9uZW50cy9vdmVydmlldy1waWxvdHMvb3ZlcnZpZXctcGlsb3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjtBQUNBOzs7Q0FHQyxjQUFjO0NBQ2QsWUFBWTtBQUNiO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsZ0NBQWdDO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9jaGFsbGVuZ2Utb3ZlcnZpZXcvY29tcG9uZW50cy9vdmVydmlldy1waWxvdHMvb3ZlcnZpZXctcGlsb3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYS1zaG9ydGxpc3RlZCB7XHJcblx0YmFja2dyb3VuZDogIzE5YzhhNjtcclxufVxyXG4uYS1yZWplY3RlZCB7XHJcblx0YmFja2dyb3VuZDogI2Y4NDgzZDtcclxufVxyXG4uYS1vbmhvbGQge1xyXG5cdGJhY2tncm91bmQ6ICNmYmNjM2U7XHJcbn1cclxuLmEtc29sdXRpb24tYmFkZ2Uge1xyXG5cdHdpZHRoOiA2NXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmEtY29sMS10aXRsZSxcclxuLmEtY29sMi10aXRsZSxcclxuLmEtdmlldy1hbGwge1xyXG5cdGNvbG9yOiAjNDU0NzRkO1xyXG5cdG9wYWNpdHk6IDAuNjtcclxufVxyXG4uYS1jYXJkIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi5uby1hbmNob3JzIHtcclxuXHRwYWRkaW5nOiAxLjI2M3JlbTtcclxufVxyXG5cclxuLmEtYW5jaG9yLWNhcmQtbGlzdDpub3QoOmxhc3QtY2hpbGQpIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-pilots/overview-pilots.component.ts":
  /*!*******************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-pilots/overview-pilots.component.ts ***!
    \*******************************************************************************************************************************/

  /*! exports provided: OverviewPilotsComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsOverviewPilotsOverviewPilotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverviewPilotsComponent", function () {
      return OverviewPilotsComponent;
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


    var src_app_seeker_challenge_dashboard_dashboardmain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/seeker/challenge-dashboard/dashboardmain.service */
    "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

    let OverviewPilotsComponent = class OverviewPilotsComponent {
      constructor(_dash) {
        this._dash = _dash;
        this.queryAll = {
          filter: {
            status: "active",
            proposal_stage: "Pilot Ready"
          },
          sort: "created_at DESC",
          pg: {
            limit: 200,
            skip: 0
          }
        };
      }

      ngOnChanges() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.loading = true; // console.log("Anchor id", this.anchorId);

          if (this.anchorId != undefined) {
            yield this.fetchPilots();
          }

          this.loading = false;
        });
      }

      fetchPilots() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.queryAll.filter.frg_anchor_id = this.anchorId;
          this.pilotData = yield this._dash.getProposals(this.queryAll);
          yield this.pilotData.data.map(app => {
            app.daysago = moment__WEBPACK_IMPORTED_MODULE_3__(app.created_at).fromNow();
          });
        });
      }

    };

    OverviewPilotsComponent.ctorParameters = () => [{
      type: src_app_seeker_challenge_dashboard_dashboardmain_service__WEBPACK_IMPORTED_MODULE_2__["DashboardmainService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverviewPilotsComponent.prototype, "anchorId", void 0);
    OverviewPilotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-overview-pilots",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./overview-pilots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-pilots/overview-pilots.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./overview-pilots.component.css */
      "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-pilots/overview-pilots.component.css")).default]
    })], OverviewPilotsComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-proposals/overview-proposals.component.css":
  /*!**************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-proposals/overview-proposals.component.css ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsOverviewProposalsOverviewProposalsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-shortlisted {\r\n\tbackground: #19c8a6 !important;\r\n}\r\n.a-rejected {\r\n\tbackground: #f8483d !important;\r\n}\r\n.a-onhold {\r\n\tbackground: #fbcc3e !important;\r\n}\r\n.a-solution-badge {\r\n\twidth: 65px;\r\n\ttext-align: center;\r\n\tborder-radius: 4px;\r\n\tbackground: #bbbcbf;\r\n}\r\n.a-col1-title,\r\n.a-col2-title,\r\n.a-view-all {\r\n\tcolor: #45474d;\r\n\topacity: 0.6;\r\n}\r\n.a-card {\r\n\tborder: 1px solid #dedede;\r\n}\r\n.no-anchors {\r\n\tpadding: 1.263rem;\r\n}\r\n.a-anchor-card-list:not(:last-child) {\r\n\tborder-bottom: 1px solid #dedede;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9jaGFsbGVuZ2Utb3ZlcnZpZXcvY29tcG9uZW50cy9vdmVydmlldy1wcm9wb3NhbHMvb3ZlcnZpZXctcHJvcG9zYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7QUFDQTs7O0NBR0MsY0FBYztDQUNkLFlBQVk7QUFDYjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGdDQUFnQztBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvY2hhbGxlbmdlLW92ZXJ2aWV3L2NvbXBvbmVudHMvb3ZlcnZpZXctcHJvcG9zYWxzL292ZXJ2aWV3LXByb3Bvc2Fscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEtc2hvcnRsaXN0ZWQge1xyXG5cdGJhY2tncm91bmQ6ICMxOWM4YTYgIWltcG9ydGFudDtcclxufVxyXG4uYS1yZWplY3RlZCB7XHJcblx0YmFja2dyb3VuZDogI2Y4NDgzZCAhaW1wb3J0YW50O1xyXG59XHJcbi5hLW9uaG9sZCB7XHJcblx0YmFja2dyb3VuZDogI2ZiY2MzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXNvbHV0aW9uLWJhZGdlIHtcclxuXHR3aWR0aDogNjVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJhY2tncm91bmQ6ICNiYmJjYmY7XHJcbn1cclxuLmEtY29sMS10aXRsZSxcclxuLmEtY29sMi10aXRsZSxcclxuLmEtdmlldy1hbGwge1xyXG5cdGNvbG9yOiAjNDU0NzRkO1xyXG5cdG9wYWNpdHk6IDAuNjtcclxufVxyXG4uYS1jYXJkIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi5uby1hbmNob3JzIHtcclxuXHRwYWRkaW5nOiAxLjI2M3JlbTtcclxufVxyXG5cclxuLmEtYW5jaG9yLWNhcmQtbGlzdDpub3QoOmxhc3QtY2hpbGQpIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-proposals/overview-proposals.component.ts":
  /*!*************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-proposals/overview-proposals.component.ts ***!
    \*************************************************************************************************************************************/

  /*! exports provided: OverviewProposalsComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensChallengeOverviewComponentsOverviewProposalsOverviewProposalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverviewProposalsComponent", function () {
      return OverviewProposalsComponent;
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


    var src_app_seeker_challenge_dashboard_dashboardmain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/seeker/challenge-dashboard/dashboardmain.service */
    "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

    let OverviewProposalsComponent = class OverviewProposalsComponent {
      constructor(_dash) {
        this._dash = _dash;
        this.queryAll = {
          filter: {
            status: "active"
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
      }

      ngOnChanges() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.loading = true; // console.log("Anchor id", this.anchorId);

          if (this.anchorId != undefined) {
            yield this.fetchProposals();
          }

          this.loading = false;
        });
      }

      fetchProposals() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.queryAll.filter.frg_anchor_id = this.anchorId;
          this.proposalData = yield this._dash.getProposals(this.queryAll); // console.log("ProposalData", this.proposalData);

          yield this.proposalData.data.map(app => {
            app.daysago = moment__WEBPACK_IMPORTED_MODULE_3__(app.created_at).fromNow();
          });
        });
      }

    };

    OverviewProposalsComponent.ctorParameters = () => [{
      type: src_app_seeker_challenge_dashboard_dashboardmain_service__WEBPACK_IMPORTED_MODULE_2__["DashboardmainService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverviewProposalsComponent.prototype, "anchorId", void 0);
    OverviewProposalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-overview-proposals",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./overview-proposals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-proposals/overview-proposals.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./overview-proposals.component.css */
      "./src/app/seeker/challenge-dashboard/screens/challenge-overview/components/overview-proposals/overview-proposals.component.css")).default]
    })], OverviewProposalsComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/create-eoi/create-eoi.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/create-eoi/create-eoi.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensCreateEoiCreateEoiComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".edit-challenge-brief-parent {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.loader-wrp {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\tmin-height: 100vh;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.challenge-step-tabs {\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.challenge-step-tabs div {\r\n\tpadding: 0.736rem;\r\n\tfont-size: 0.842rem;\r\n\tcolor: var(--body-grey);\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n\tcursor: pointer;\r\n}\r\n\r\n.challenge-step-tabs div:not(:last-child) {\r\n\tborder-bottom: 1px solid #dedede;\r\n}\r\n\r\n.challenge-step-tabs div:hover,\r\n.challenge-step-tabs div.active {\r\n\tbackground: #dedede;\r\n}\r\n\r\n.step-form-parent {\r\n\tpadding: 36px;\r\n\tbackground-color: var(--white);\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.flex-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.flex-row > div {\r\n\tflex-basis: 48%;\r\n}\r\n\r\nlabel {\r\n\tfont-size: 0.631rem;\r\n\tline-height: 1.6;\r\n}\r\n\r\nlabel .field-desp {\r\n\topacity: 0.7;\r\n\tfont-weight: 300;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9jcmVhdGUtZW9pL2NyZWF0ZS1lb2kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQix3QkFBdUI7U0FBdkIsdUJBQXVCO0NBQ3ZCLHlCQUFtQjtTQUFuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixpQ0FBeUI7Q0FBekIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IseUJBQThCO1NBQTlCLDhCQUE4QjtDQUM5QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9jcmVhdGUtZW9pL2NyZWF0ZS1lb2kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWNoYWxsZW5nZS1icmllZi1wYXJlbnQge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubG9hZGVyLXdycCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhbGxlbmdlLXN0ZXAtdGFicyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5jaGFsbGVuZ2Utc3RlcC10YWJzIGRpdiB7XHJcblx0cGFkZGluZzogMC43MzZyZW07XHJcblx0Zm9udC1zaXplOiAwLjg0MnJlbTtcclxuXHRjb2xvcjogdmFyKC0tYm9keS1ncmV5KTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoYWxsZW5nZS1zdGVwLXRhYnMgZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcblxyXG4uY2hhbGxlbmdlLXN0ZXAtdGFicyBkaXY6aG92ZXIsXHJcbi5jaGFsbGVuZ2Utc3RlcC10YWJzIGRpdi5hY3RpdmUge1xyXG5cdGJhY2tncm91bmQ6ICNkZWRlZGU7XHJcbn1cclxuXHJcbi5zdGVwLWZvcm0tcGFyZW50IHtcclxuXHRwYWRkaW5nOiAzNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmZsZXgtcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mbGV4LXJvdyA+IGRpdiB7XHJcblx0ZmxleC1iYXNpczogNDglO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcblx0Zm9udC1zaXplOiAwLjYzMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG5sYWJlbCAuZmllbGQtZGVzcCB7XHJcblx0b3BhY2l0eTogMC43O1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/create-eoi/create-eoi.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/create-eoi/create-eoi.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CreateEoiComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensCreateEoiCreateEoiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateEoiComponent", function () {
      return CreateEoiComponent;
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


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");
    /* harmony import */


    var _review_applications_application_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../review-applications/application.service */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/application.service.ts");
    /* harmony import */


    var _dashboardmain_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../dashboardmain.service */
    "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    let CreateEoiComponent = class CreateEoiComponent {
      constructor(toastr, fb, _app, route, router, _location, _dash) {
        this.toastr = toastr;
        this.fb = fb;
        this._app = _app;
        this.route = route;
        this.router = router;
        this._location = _location;
        this._dash = _dash;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__; // yearArr:any = _.range(1950, new Date().getFullYear() + 1);

        this.weekArr = [1, 2, 3, 4, 5]; // monthArr: any = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        this.monthArr = [1, 2, 3, 4];
        this.pageLoading = false;
        this.sendEOIForm = {
          Step1: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"],
          Step2: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]
        };
        this.isSubmitted = {
          Step1: false,
          Step2: false,
          Step3: false
        };
        this.selectedAppIds = [];
        this.route.parent.params.subscribe(params => this.challengeAnchorId = params.id);
        this.route.queryParams.subscribe(params => {
          this.selectedAppIds = params["ids"];
        });
        this.loggedInUser$.subscribe(resp => {
          this.loggedInUser = resp.LoggedInUser;
        });
        this.Editor.defaultConfig = {
          toolbar: {
            items: ["heading", "|", "bold", "italic", "bulletedList", "numberedList", "link"]
          },
          image: {
            toolbar: ["imageStyle:full", "imageStyle:side", "|", "imageTextAlternative"]
          },
          table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
          },
          language: "en"
        };
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.pageLoading = true;
          this.sendEOIStep1 = false;
          this.sendEOIStep2 = true;
          this.sendEOIStep3 = true;
          this.sendEOIForm = {
            Step1: this.fb.group({
              goals_of_pilot: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
              expected_outcomes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
              deployment_details: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]]
            }),
            Step2: this.fb.group({
              deployment_time_month: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              deployment_time_week: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              budget_limit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              deployment_constraints: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]]
            })
          };
          this.pageLoading = false;
        });
      }

      get formControlStep1() {
        return this.sendEOIForm.Step1.controls;
      }

      get formControlStep2() {
        return this.sendEOIForm.Step2.controls;
      }

      stepFormSubmit(formIndex) {
        switch (formIndex) {
          case "Step1":
            {
              this.isSubmitted.Step1 = true;
              this.ShowNextStep(formIndex);
              break;
            }

          case "Step2":
            {
              this.isSubmitted.Step2 = true;
              this.ShowNextStep(formIndex);
              break;
            }

          case "Step3":
            {
              this.isSubmitted.Step3 = true;
              this.ShowNextStep(formIndex);
              break;
            }
        }
      }

      ShowNextStep(formIndex) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (formIndex == "Step1" && this.sendEOIForm.Step1.valid) {
            this.gotoStep("step2");
            window.scrollTo(0, 0);
          } else if (formIndex == "Step2" && this.sendEOIForm.Step2.valid) {
            // this.gotoStep("step3");
            yield this.createEOIRequest();
            window.scrollTo(0, 0);
          } else if (formIndex == "Step3") {} else {
            this.toastr.error("", "Please provide the required values to proceed further");
          }
        });
      }

      gotoStep(step) {
        switch (step) {
          case "step1":
            {
              this.sendEOIStep1 = false;
              this.sendEOIStep2 = true;
              this.sendEOIStep3 = true;
              break;
            }

          case "step2":
            {
              this.sendEOIStep1 = true;
              this.sendEOIStep2 = false;
              this.sendEOIStep3 = true;
              break;
            }

          case "step3":
            {
              this.sendEOIStep1 = true;
              this.sendEOIStep2 = true;
              this.sendEOIStep3 = false;
              break;
            }
        }
      }

      createEOIRequest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            if (this.sendEOIForm.Step1.valid && this.sendEOIForm.Step2.valid && this.selectedAppIds.length > 1) {
              yield this.selectedAppIds.forEach(selectedId => {
                this.submitLoading = true;

                let resp = this._app.createEOI({
                  data: {
                    goals_of_pilot: this.sendEOIForm.Step1.value.goals_of_pilot,
                    expected_outcomes: this.sendEOIForm.Step1.value.expected_outcomes,
                    deployment_details: this.sendEOIForm.Step1.value.deployment_details,
                    deployment_time: {
                      month: this.sendEOIForm.Step2.value.deployment_time_month,
                      week: this.sendEOIForm.Step2.value.deployment_time_week
                    },
                    budget_limit: this.sendEOIForm.Step2.value.budget_limit,
                    deployment_constraints: this.sendEOIForm.Step2.value.deployment_constraints,
                    frg_seeker_id: this.loggedInUser.userTypeId,
                    frg_anchor_id: this.challengeAnchorId,
                    frg_application_id: selectedId
                  }
                });
              });
              yield this.updateChallengeBriefStatus();
              this.submitLoading = false;
              this.toastr.success("Submitted Successfully");

              this._location.back();
            } else if (this.sendEOIForm.Step1.valid && this.sendEOIForm.Step2.valid) {
              this.submitLoading = true;
              let resp = yield this._app.createEOI({
                data: {
                  goals_of_pilot: this.sendEOIForm.Step1.value.goals_of_pilot,
                  expected_outcomes: this.sendEOIForm.Step1.value.expected_outcomes,
                  deployment_details: this.sendEOIForm.Step1.value.deployment_details,
                  deployment_time: {
                    month: this.sendEOIForm.Step2.value.deployment_time_month,
                    week: this.sendEOIForm.Step2.value.deployment_time_week
                  },
                  budget_limit: this.sendEOIForm.Step2.value.budget_limit,
                  deployment_constraints: this.sendEOIForm.Step2.value.deployment_constraints,
                  frg_seeker_id: this.loggedInUser.userTypeId,
                  frg_anchor_id: this.challengeAnchorId,
                  frg_application_id: this.selectedAppIds[0]
                }
              });
              yield this.updateChallengeBriefStatus();
              this.submitLoading = false;
              this.toastr.success("Submitted Successfully");

              this._location.back();
            } else {
              this.isSubmitted.Step1 = true;
              this.isSubmitted.Step2 = true;
              this.toastr.error("", "Please provide the required values to proceed further");
            }
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      resetFormFields() {
        this.sendEOIForm.Step1.reset();
        this.sendEOIForm.Step2.reset();
        this.sendEOIForm.Step1.markAsPristine();
        this.sendEOIForm.Step2.markAsPristine();
      }

      updateChallengeBriefStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this._dash.updateChallengeBrief({
            slug: {
              id: this.challengeAnchorId
            },
            data: {
              challenge_status: "Awaiting Proposal"
            }
          });
        });
      }

    };

    CreateEoiComponent.ctorParameters = () => [{
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _review_applications_application_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
    }, {
      type: _dashboardmain_service__WEBPACK_IMPORTED_MODULE_8__["DashboardmainService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_6__["LoggedInUserState"])], CreateEoiComponent.prototype, "loggedInUser$", void 0);
    CreateEoiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-create-eoi",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-eoi.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/create-eoi/create-eoi.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-eoi.component.css */
      "./src/app/seeker/challenge-dashboard/screens/create-eoi/create-eoi.component.css")).default]
    })], CreateEoiComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/all-pilots/all-pilots.component.css":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/all-pilots/all-pilots.component.css ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsAllPilotsAllPilotsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n.a-cnt1-flex-item {\r\n\twidth: 100%;\r\n\tmax-width: 489px;\r\n}\r\nlabel {\r\n\tfont-size: 0.631rem;\r\n\tline-height: 1.6;\r\n}\r\nlabel .field-desp {\r\n\topacity: 0.7;\r\n\tfont-weight: 300;\r\n}\r\n.a-budget-wrp {\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-budget-total-wrp {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\nhr {\r\n\tborder-top-color: #000000 !important;\r\n}\r\n.a-col2-title {\r\n\tcolor: #bdbdbd;\r\n}\r\n.a-s1-cnt-wrp {\r\n\tborder: 1.03191px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 10.3191px;\r\n}\r\n.a-sub-cnt-wrp {\r\n\tborder: 1.03191px solid #0d439f;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 6.19149px;\r\n}\r\n.a-download-file-btn {\r\n\tborder: 1px solid #999999 !important;\r\n}\r\n.a-s1-cnt-wrp {\r\n\tmargin-top: -11px;\r\n}\r\n.a-col2-title-wrp {\r\n\tbackground-color: white;\r\n\tmargin-left: 14px;\r\n}\r\n.a-ongoing {\r\n\tcolor: #947412;\r\n\tbackground: rgba(251, 196, 31, 0.1) !important;\r\n\tborder: 1px solid #fbc41f !important;\r\n}\r\n.a-yet-to-start {\r\n\tbackground: rgba(172, 177, 193, 0.1) !important;\r\n\tborder: 1px solid #acb1c1 !important;\r\n}\r\n.a-align-items-stretch {\r\n\t-webkit-box-align: stretch !important;\r\n\t        align-items: stretch !important;\r\n}\r\n.a-send-eoi-btn:disabled {\r\n\tbackground: #dedede !important;\r\n\tcolor: #4f4f4f !important;\r\n\topacity: 0.5 !important;\r\n}\r\n.a-shortlist-btn {\r\n\tborder: 1px solid #2d9851;\r\n}\r\n.a-modal-obhold-btn {\r\n\tcolor: #947412 !important;\r\n\tbackground: rgba(251, 196, 31, 0.1) !important;\r\n\tborder: 1px solid #fbc41f !important;\r\n}\r\n.a-confirm-btn {\r\n\tborder: 1px solid #2d9851 !important;\r\n\tcolor: #ffffff !important;\r\n\tbackground-color: #2d9851 !important;\r\n}\r\n.a-review-btn {\r\n\tborder: 1px solid #999999 !important;\r\n}\r\n.a-pre-pilot-btn {\r\n\tcolor: #947412;\r\n\tbackground: rgba(251, 196, 31, 0.1);\r\n\tborder: 1px solid #fbc41f;\r\n}\r\n.a-modal-warning-cnt {\r\n\tmax-width: 394px;\r\n\twidth: 100%;\r\n}\r\n.a-review-appl-img-wrp img {\r\n\tmin-width: 88px;\r\n\tborder-radius: 6px;\r\n}\r\n.status-pill {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 10px 30px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid #acb1c1;\r\n\tborder-radius: 100px;\r\n\tpadding-left: 36px;\r\n}\r\n.status-pill.completed::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #19c8a6;\r\n}\r\n.upload-btn {\r\n\tdisplay: inline-block;\r\n\tpadding: 10px 18px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid #acb1c1;\r\n\tborder-radius: 100px;\r\n\tcursor: pointer;\r\n\tmargin-left: 25px;\r\n\tcolor: #4f4f4f;\r\n}\r\n.upload-btn i {\r\n\tfont-size: 16px;\r\n\tmargin-right: 10px;\r\n\tcolor: #acb1c1;\r\n}\r\n.a-status-select-wrp {\r\n\tdisplay: inline-block;\r\n}\r\n.loader {\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n\tpadding: 1px;\r\n\tbackground: #dedede;\r\n\tvisibility: hidden;\r\n}\r\n.loader.active {\r\n\tvisibility: visible;\r\n}\r\n.loader .loaderBar {\r\n\tposition: absolute;\r\n\tborder-radius: 10px;\r\n\ttop: 0;\r\n\tright: 100%;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tbackground: var(--primary-clr);\r\n\twidth: 0;\r\n\t-webkit-animation: borealisBar 1.2s linear infinite;\r\n\t        animation: borealisBar 1.2s linear infinite;\r\n}\r\n.modal-content .loader {\r\n\tpadding: 2px;\r\n}\r\n@-webkit-keyframes borealisBar {\r\n\t0% {\r\n\t\tleft: 0%;\r\n\t\tright: 100%;\r\n\t\twidth: 0%;\r\n\t}\r\n\t10% {\r\n\t\tleft: 0%;\r\n\t\tright: 75%;\r\n\t\twidth: 25%;\r\n\t}\r\n\t90% {\r\n\t\tright: 0%;\r\n\t\tleft: 75%;\r\n\t\twidth: 25%;\r\n\t}\r\n\t100% {\r\n\t\tleft: 100%;\r\n\t\tright: 0%;\r\n\t\twidth: 0%;\r\n\t}\r\n}\r\n@keyframes borealisBar {\r\n\t0% {\r\n\t\tleft: 0%;\r\n\t\tright: 100%;\r\n\t\twidth: 0%;\r\n\t}\r\n\t10% {\r\n\t\tleft: 0%;\r\n\t\tright: 75%;\r\n\t\twidth: 25%;\r\n\t}\r\n\t90% {\r\n\t\tright: 0%;\r\n\t\tleft: 75%;\r\n\t\twidth: 25%;\r\n\t}\r\n\t100% {\r\n\t\tleft: 100%;\r\n\t\tright: 0%;\r\n\t\twidth: 0%;\r\n\t}\r\n}\r\n.a-col2-title-wrp .a-col2-title {\r\n\tposition: relative;\r\n\tz-index: 10;\r\n\tbackground: #fff;\r\n\tdisplay: inline-block;\r\n}\r\n.a-review-appl-img-wrp img {\r\n\tmin-width: 88px;\r\n\tborder-radius: 6px;\r\n}\r\n.a-cnt1-flex-item {\r\n\twidth: 60%;\r\n}\r\n.a-cnt2-flex-item {\r\n\twidth: 40%;\r\n}\r\nlabel {\r\n\tfont-size: 0.631rem;\r\n\tline-height: 1.6;\r\n}\r\nlabel .field-desp {\r\n\topacity: 0.7;\r\n\tfont-weight: 300;\r\n}\r\n.a-budget-wrp {\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-budget-total-wrp {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\nhr {\r\n\tborder-top-color: #000000 !important;\r\n}\r\n.a-col2-title {\r\n\tcolor: #bdbdbd;\r\n}\r\n.a-s1-cnt-wrp {\r\n\tborder: 1.03191px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 10.3191px;\r\n}\r\n.a-sub-cnt-wrp {\r\n\tborder: 1.03191px solid #0d439f;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 6.19149px;\r\n}\r\n.a-download-file-btn {\r\n\tborder: 1px solid #999999 !important;\r\n}\r\n.a-s1-cnt-wrp {\r\n\tmargin-top: -11px;\r\n}\r\n.a-col2-title-wrp {\r\n\tbackground-color: white;\r\n\tmargin-left: 14px;\r\n}\r\n.a-ongoing {\r\n\tcolor: #947412;\r\n\tbackground: rgba(251, 196, 31, 0.1) !important;\r\n\tborder: 1px solid #fbc41f !important;\r\n}\r\n.a-yet-to-start {\r\n\tbackground: rgba(172, 177, 193, 0.1) !important;\r\n\tborder: 1px solid #acb1c1 !important;\r\n}\r\n.a-align-items-stretch {\r\n\t-webkit-box-align: stretch !important;\r\n\t        align-items: stretch !important;\r\n}\r\n.a-budget-values {\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n\twidth: 89px;\r\n}\r\n.a-modal-buget-flex-item1 {\r\n\twidth: 60%;\r\n}\r\n.a-modal-buget-flex-item2 {\r\n\twidth: 40%;\r\n}\r\n.upload-wrapper {\r\n\tborder-radius: 4px;\r\n\toverflow: hidden;\r\n}\r\n.upload-inner {\r\n\tpadding: 30px;\r\n}\r\n.add-doc input[type=\"file\"] {\r\n\tdisplay: none;\r\n}\r\n.add-doc {\r\n\tmargin-bottom: 15px;\r\n}\r\n.add-doc label {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 4px;\r\n\tcursor: pointer;\r\n\tpadding: 10px 15px;\r\n}\r\n.add-doc label {\r\n\tcolor: #2d9851;\r\n\tfont-weight: 500;\r\n}\r\n.file-item {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\tpadding: 8px;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 4px;\r\n\tfont-size: 12px;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\tmargin-bottom: 6px;\r\n}\r\n.file-col {\r\n\tcolor: #4f4f4f;\r\n\tpadding-right: 5px;\r\n\tflex-basis: 80%;\r\n}\r\n.file-col i {\r\n\tfont-size: 14px;\r\n\tmargin-right: 6px;\r\n}\r\n.remove-col {\r\n\tflex-basis: 20%;\r\n}\r\n.act-span {\r\n\tpadding: 3px 6px;\r\n\tfont-size: 16px;\r\n\tcursor: pointer;\r\n}\r\n.act-span :hover {\r\n\tcolor: #f8483d;\r\n}\r\n.upload-wrapper.active {\r\n\tpointer-events: none;\r\n}\r\n.close {\r\n\tfont-size: 28px;\r\n\tborder: 1px solid !important;\r\n\tpadding: 0px 5px;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9waWxvdHMvY29tcG9uZW50cy9hbGwtcGlsb3RzL2FsbC1waWxvdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1Q7Q0FDQyxzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLHVTQUF1UztDQUN2Uyw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQix1Q0FBdUM7QUFDeEM7QUFFQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG9DQUFvQztBQUNyQztBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQywrQkFBK0I7Q0FDL0Isc0JBQXNCO0NBQ3RCLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsK0JBQStCO0NBQy9CLHNCQUFzQjtDQUN0Qix3QkFBd0I7QUFDekI7QUFDQTtDQUNDLG9DQUFvQztBQUNyQztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsOENBQThDO0NBQzlDLG9DQUFvQztBQUNyQztBQUNBO0NBQ0MsK0NBQStDO0NBQy9DLG9DQUFvQztBQUNyQztBQUNBO0NBRUMscUNBQStCO1NBQS9CLCtCQUErQjtBQUNoQztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLHlCQUF5QjtDQUN6Qix1QkFBdUI7QUFDeEI7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLDhDQUE4QztDQUM5QyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyx5QkFBeUI7Q0FDekIsb0NBQW9DO0FBQ3JDO0FBQ0E7Q0FDQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGNBQWM7Q0FDZCxtQ0FBbUM7Q0FDbkMseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaO0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsY0FBYztBQUNmO0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGNBQWM7QUFDZjtBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLE1BQU07Q0FDTixXQUFXO0NBQ1gsU0FBUztDQUNULE9BQU87Q0FDUCw4QkFBOEI7Q0FDOUIsUUFBUTtDQUNSLG1EQUEyQztTQUEzQywyQ0FBMkM7QUFDNUM7QUFFQTtDQUNDLFlBQVk7QUFDYjtBQUVBO0NBQ0M7RUFDQyxRQUFRO0VBQ1IsV0FBVztFQUNYLFNBQVM7Q0FDVjtDQUNBO0VBQ0MsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0NBQ1g7Q0FDQTtFQUNDLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtDQUNYO0NBQ0E7RUFDQyxVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVM7Q0FDVjtBQUNEO0FBckJBO0NBQ0M7RUFDQyxRQUFRO0VBQ1IsV0FBVztFQUNYLFNBQVM7Q0FDVjtDQUNBO0VBQ0MsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0NBQ1g7Q0FDQTtFQUNDLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtDQUNYO0NBQ0E7RUFDQyxVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVM7Q0FDVjtBQUNEO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLFVBQVU7QUFDWDtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsK0JBQStCO0NBQy9CLHNCQUFzQjtDQUN0Qix3QkFBd0I7QUFDekI7QUFDQTtDQUNDLCtCQUErQjtDQUMvQixzQkFBc0I7Q0FDdEIsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsY0FBYztDQUNkLDhDQUE4QztDQUM5QyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLCtDQUErQztDQUMvQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUVDLHFDQUErQjtTQUEvQiwrQkFBK0I7QUFDaEM7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLGFBQWE7QUFDZDtBQUVBO0NBQ0MsYUFBYTtBQUNkO0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkIsd0JBQXVCO1NBQXZCLHVCQUF1QjtDQUN2Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZix5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLHlCQUE4QjtTQUE5Qiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsY0FBYztBQUNmO0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7QUFFQTtDQUNDLGVBQWU7Q0FDZiw0QkFBNEI7Q0FDNUIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvcGlsb3RzL2NvbXBvbmVudHMvYWxsLXBpbG90cy9hbGwtcGlsb3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDYXJkICovXHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLXdycCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLWZvb3RlciB7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgxNzIsIDE3NywgMTkzLCAwLjEpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzE7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxMycgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgMTMgOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEyLjgxNzQgMS40MUwxMS40MTkxIC02LjcxMzZlLTA4TDYuODY3MzggNC41OEwyLjMxNTYzIC01LjA0MjM0ZS0wN0wwLjkxNzM4MiAxLjQxTDYuODY3MzggNy40MUwxMi44MTc0IDEuNDFaJyBmaWxsPSclMjM0RjRGNEYnLyUzRSUzQy9zdmclM0UlMEFcIik7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDkwJTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDIwcHg7XHJcblx0cGFkZGluZzogMTBweCAyNXB4IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYS1jbnQxLWZsZXgtaXRlbSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWF4LXdpZHRoOiA0ODlweDtcclxufVxyXG5cclxubGFiZWwge1xyXG5cdGZvbnQtc2l6ZTogMC42MzFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxubGFiZWwgLmZpZWxkLWRlc3Age1xyXG5cdG9wYWNpdHk6IDAuNztcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYS1idWRnZXQtd3JwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hLWJ1ZGdldC10b3RhbC13cnAge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbmhyIHtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtY29sMi10aXRsZSB7XHJcblx0Y29sb3I6ICNiZGJkYmQ7XHJcbn1cclxuLmEtczEtY250LXdycCB7XHJcblx0Ym9yZGVyOiAxLjAzMTkxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwLjMxOTFweDtcclxufVxyXG4uYS1zdWItY250LXdycCB7XHJcblx0Ym9yZGVyOiAxLjAzMTkxcHggc29saWQgIzBkNDM5ZjtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDYuMTkxNDlweDtcclxufVxyXG4uYS1kb3dubG9hZC1maWxlLWJ0biB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTk5OSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXMxLWNudC13cnAge1xyXG5cdG1hcmdpbi10b3A6IC0xMXB4O1xyXG59XHJcbi5hLWNvbDItdGl0bGUtd3JwIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRtYXJnaW4tbGVmdDogMTRweDtcclxufVxyXG4uYS1vbmdvaW5nIHtcclxuXHRjb2xvcjogIzk0NzQxMjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTk2LCAzMSwgMC4xKSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmYmM0MWYgIWltcG9ydGFudDtcclxufVxyXG4uYS15ZXQtdG8tc3RhcnQge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzEgIWltcG9ydGFudDtcclxufVxyXG4uYS1hbGlnbi1pdGVtcy1zdHJldGNoIHtcclxuXHQtbXMtZmxleC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmEtc2VuZC1lb2ktYnRuOmRpc2FibGVkIHtcclxuXHRiYWNrZ3JvdW5kOiAjZGVkZWRlICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICM0ZjRmNGYgIWltcG9ydGFudDtcclxuXHRvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmEtc2hvcnRsaXN0LWJ0biB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzJkOTg1MTtcclxufVxyXG5cclxuLmEtbW9kYWwtb2Job2xkLWJ0biB7XHJcblx0Y29sb3I6ICM5NDc0MTIgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTk2LCAzMSwgMC4xKSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmYmM0MWYgIWltcG9ydGFudDtcclxufVxyXG4uYS1jb25maXJtLWJ0biB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzJkOTg1MSAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJkOTg1MSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXJldmlldy1idG4ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTkgIWltcG9ydGFudDtcclxufVxyXG4uYS1wcmUtcGlsb3QtYnRuIHtcclxuXHRjb2xvcjogIzk0NzQxMjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTk2LCAzMSwgMC4xKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmJjNDFmO1xyXG59XHJcbi5hLW1vZGFsLXdhcm5pbmctY250IHtcclxuXHRtYXgtd2lkdGg6IDM5NHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYS1yZXZpZXctYXBwbC1pbWctd3JwIGltZyB7XHJcblx0bWluLXdpZHRoOiA4OHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDEwcHggMzBweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRiYWNrZ3JvdW5kOiAjZjdmN2Y5O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzE7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAzNnB4O1xyXG59XHJcblxyXG4uc3RhdHVzLXBpbGwuY29tcGxldGVkOjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdHRvcDogMTNweDtcclxuXHRsZWZ0OiAxOHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjMTljOGE2O1xyXG59XHJcblxyXG4udXBsb2FkLWJ0biB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDEwcHggMThweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRiYWNrZ3JvdW5kOiAjZjdmN2Y5O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzE7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG5cdGNvbG9yOiAjNGY0ZjRmO1xyXG59XHJcblxyXG4udXBsb2FkLWJ0biBpIHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdGNvbG9yOiAjYWNiMWMxO1xyXG59XHJcblxyXG4uYS1zdGF0dXMtc2VsZWN0LXdycCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cGFkZGluZzogMXB4O1xyXG5cdGJhY2tncm91bmQ6ICNkZWRlZGU7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ubG9hZGVyLmFjdGl2ZSB7XHJcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmxvYWRlciAubG9hZGVyQmFyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDEwMCU7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jbHIpO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGFuaW1hdGlvbjogYm9yZWFsaXNCYXIgMS4ycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IC5sb2FkZXIge1xyXG5cdHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBib3JlYWxpc0JhciB7XHJcblx0MCUge1xyXG5cdFx0bGVmdDogMCU7XHJcblx0XHRyaWdodDogMTAwJTtcclxuXHRcdHdpZHRoOiAwJTtcclxuXHR9XHJcblx0MTAlIHtcclxuXHRcdGxlZnQ6IDAlO1xyXG5cdFx0cmlnaHQ6IDc1JTtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0fVxyXG5cdDkwJSB7XHJcblx0XHRyaWdodDogMCU7XHJcblx0XHRsZWZ0OiA3NSU7XHJcblx0XHR3aWR0aDogMjUlO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdGxlZnQ6IDEwMCU7XHJcblx0XHRyaWdodDogMCU7XHJcblx0XHR3aWR0aDogMCU7XHJcblx0fVxyXG59XHJcblxyXG4uYS1jb2wyLXRpdGxlLXdycCAuYS1jb2wyLXRpdGxlIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTA7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5hLXJldmlldy1hcHBsLWltZy13cnAgaW1nIHtcclxuXHRtaW4td2lkdGg6IDg4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uYS1jbnQxLWZsZXgtaXRlbSB7XHJcblx0d2lkdGg6IDYwJTtcclxufVxyXG4uYS1jbnQyLWZsZXgtaXRlbSB7XHJcblx0d2lkdGg6IDQwJTtcclxufVxyXG5sYWJlbCB7XHJcblx0Zm9udC1zaXplOiAwLjYzMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG5sYWJlbCAuZmllbGQtZGVzcCB7XHJcblx0b3BhY2l0eTogMC43O1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5hLWJ1ZGdldC13cnAge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmEtYnVkZ2V0LXRvdGFsLXdycCB7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuaHIge1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG4uYS1jb2wyLXRpdGxlIHtcclxuXHRjb2xvcjogI2JkYmRiZDtcclxufVxyXG4uYS1zMS1jbnQtd3JwIHtcclxuXHRib3JkZXI6IDEuMDMxOTFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAuMzE5MXB4O1xyXG59XHJcbi5hLXN1Yi1jbnQtd3JwIHtcclxuXHRib3JkZXI6IDEuMDMxOTFweCBzb2xpZCAjMGQ0MzlmO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNi4xOTE0OXB4O1xyXG59XHJcbi5hLWRvd25sb2FkLWZpbGUtYnRuIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtczEtY250LXdycCB7XHJcblx0bWFyZ2luLXRvcDogLTExcHg7XHJcbn1cclxuLmEtY29sMi10aXRsZS13cnAge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcbi5hLW9uZ29pbmcge1xyXG5cdGNvbG9yOiAjOTQ3NDEyO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTYsIDMxLCAwLjEpICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZiYzQxZiAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXlldC10by1zdGFydCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgxNzIsIDE3NywgMTkzLCAwLjEpICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2FjYjFjMSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWFsaWduLWl0ZW1zLXN0cmV0Y2gge1xyXG5cdC1tcy1mbGV4LWFsaWduOiBlbmQgIWltcG9ydGFudDtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWJ1ZGdldC12YWx1ZXMge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0d2lkdGg6IDg5cHg7XHJcbn1cclxuLmEtbW9kYWwtYnVnZXQtZmxleC1pdGVtMSB7XHJcblx0d2lkdGg6IDYwJTtcclxufVxyXG4uYS1tb2RhbC1idWdldC1mbGV4LWl0ZW0yIHtcclxuXHR3aWR0aDogNDAlO1xyXG59XHJcblxyXG4udXBsb2FkLXdyYXBwZXIge1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udXBsb2FkLWlubmVyIHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uYWRkLWRvYyBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmFkZC1kb2Mge1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5hZGQtZG9jIGxhYmVsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG5cclxuLmFkZC1kb2MgbGFiZWwge1xyXG5cdGNvbG9yOiAjMmQ5ODUxO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5maWxlLWl0ZW0ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0cGFkZGluZzogOHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbi5maWxlLWNvbCB7XHJcblx0Y29sb3I6ICM0ZjRmNGY7XHJcblx0cGFkZGluZy1yaWdodDogNXB4O1xyXG5cdGZsZXgtYmFzaXM6IDgwJTtcclxufVxyXG5cclxuLmZpbGUtY29sIGkge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLnJlbW92ZS1jb2wge1xyXG5cdGZsZXgtYmFzaXM6IDIwJTtcclxufVxyXG5cclxuLmFjdC1zcGFuIHtcclxuXHRwYWRkaW5nOiAzcHggNnB4O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hY3Qtc3BhbiA6aG92ZXIge1xyXG5cdGNvbG9yOiAjZjg0ODNkO1xyXG59XHJcblxyXG4udXBsb2FkLXdyYXBwZXIuYWN0aXZlIHtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuXHRmb250LXNpemU6IDI4cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOiAwcHggNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/all-pilots/all-pilots.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/all-pilots/all-pilots.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: AllPilotsComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsAllPilotsAllPilotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllPilotsComponent", function () {
      return AllPilotsComponent;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _dashboardmain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../dashboardmain.service */
    "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    let AllPilotsComponent = class AllPilotsComponent {
      constructor(_dash, toastr) {
        this._dash = _dash;
        this.toastr = toastr;
        this.onStatusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
        this.fileArr = [];
        this.reportArr = [];
      }

      ngOnInit() {}

      ngOnChanges() {
        if (this.pilotData.pilot_order) {
          this.fileNameArr = this.pilotData.pilot_order.map(d => this.extractFileName(d));
          this.fileArr = this.pilotData.pilot_order;
        }

        if (this.pilotData.pilot_report) {
          this.reportNameArr = this.pilotData.pilot_report.map(d => this.extractFileName(d));
          this.reportArr = this.pilotData.pilot_report;
        }
      }

      handleChangeStatus(status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.statusUpdating = true;
          let resp = yield this._dash.updatePilotStatus(this.pilotData.id, status);

          if (status === "Completed") {
            yield this._dash.updateChallengeBrief({
              slug: {
                id: this.pilotData.frg_anchor_id.id
              },
              data: {
                challenge_status: "Pilot"
              }
            });
          }

          this.toastr.info("", "Pilot moved to ".concat(status));
          this.onStatusChange.emit(resp);
          this.statusUpdating = false;
        });
      }

      extractFileName(path) {
        let filename = path.replace(/^.*[\\\/]/, "");
        return filename;
      }

      handleOrderUpload(updatedData) {
        // console.log(updatedData);
        this.pilotData.pilot_order = updatedData.data[0].pilot_order;
        this.pilotOrder = updatedData.data[0].pilot_order;
      }

      uploadFile(uploadedFile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (uploadedFile.length) {
            let formData = new FormData();
            formData.append("slug", this.pilotData.id);
            formData.append("pilot_order", uploadedFile[0]);
            this.loading = true;
            let resp;

            if (this.pilotData.pilot_order) {
              resp = yield this._dash.addToPilotOrderUpload(formData);
            } else {
              resp = yield this._dash.PilotOrderUpload(formData);
            }

            this.pilotData.pilot_order = resp.data[0].pilot_order;
            this.fileNameArr = this.pilotData.pilot_order.map(d => this.extractFileName(d));
            this.fileArr = this.pilotData.pilot_order;
            this.loading = false;
          }
        });
      }

      removeFile(removeAt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (~removeAt) {
            this.loading = true;
            let resp = yield this._dash.removeFromPilotOrderUpload({
              slug: {
                id: this.pilotData.id
              },
              data: {
                remove_paths: [this.fileArr[removeAt]]
              }
            });
            this.pilotData.pilot_order = resp.data[0].pilot_order;
            this.fileNameArr = this.pilotData.pilot_order.map(d => this.extractFileName(d));
            this.fileArr = this.pilotData.pilot_order;
            this.loading = false;
          }
        });
      }

      uploadReport(uploadedFile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (uploadedFile.length) {
            let formData = new FormData();
            formData.append("slug", this.pilotData.id);
            formData.append("pilot_report", uploadedFile[0]);
            this.loading = true;
            let resp;

            if (this.pilotData.pilot_report) {
              resp = yield this._dash.addToPilotReportUpload(formData);
            } else {
              resp = yield this._dash.PilotReportUpload(formData);
            }

            this.pilotData.pilot_report = resp.data[0].pilot_report;
            this.reportNameArr = this.pilotData.pilot_report.map(d => this.extractFileName(d));
            this.reportArr = this.pilotData.pilot_report;
            this.loading = false;
          }
        });
      }

      removeReport(removeAt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (~removeAt) {
            this.loading = true;
            let resp = yield this._dash.removeFromPilotReportUpload({
              slug: {
                id: this.pilotData.id
              },
              data: {
                remove_paths: [this.reportArr[removeAt]]
              }
            });
            this.pilotData.pilot_report = resp.data[0].pilot_report;
            this.reportNameArr = this.pilotData.pilot_report.map(d => this.extractFileName(d));
            this.reportArr = this.pilotData.pilot_report;
            this.loading = false;
          }
        });
      }

    };

    AllPilotsComponent.ctorParameters = () => [{
      type: _dashboardmain_service__WEBPACK_IMPORTED_MODULE_3__["DashboardmainService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AllPilotsComponent.prototype, "itemId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AllPilotsComponent.prototype, "pilotData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AllPilotsComponent.prototype, "onStatusChange", void 0);
    AllPilotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-all-pilots",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-pilots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/all-pilots/all-pilots.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-pilots.component.css */
      "./src/app/seeker/challenge-dashboard/screens/pilots/components/all-pilots/all-pilots.component.css")).default]
    })], AllPilotsComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/completed-pilots/completed-pilots.component.css":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/completed-pilots/completed-pilots.component.css ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsCompletedPilotsCompletedPilotsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9waWxvdHMvY29tcG9uZW50cy9jb21wbGV0ZWQtcGlsb3RzL2NvbXBsZXRlZC1waWxvdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1Q7Q0FDQyxzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLHVTQUF1UztDQUN2Uyw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQix1Q0FBdUM7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvY2hhbGxlbmdlLWRhc2hib2FyZC9zY3JlZW5zL3BpbG90cy9jb21wb25lbnRzL2NvbXBsZXRlZC1waWxvdHMvY29tcGxldGVkLXBpbG90cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2FyZCAqL1xyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC13cnAge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC1mb290ZXIge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTMnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDEzIDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xMi44MTc0IDEuNDFMMTEuNDE5MSAtNi43MTM2ZS0wOEw2Ljg2NzM4IDQuNThMMi4zMTU2MyAtNS4wNDIzNGUtMDdMMC45MTczODIgMS40MUw2Ljg2NzM4IDcuNDFMMTIuODE3NCAxLjQxWicgZmlsbD0nJTIzNEY0RjRGJy8lM0UlM0Mvc3ZnJTNFJTBBXCIpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi14OiA5MCU7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi15OiAyMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMjVweCAxMHB4IDI1cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/completed-pilots/completed-pilots.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/completed-pilots/completed-pilots.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: CompletedPilotsComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsCompletedPilotsCompletedPilotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompletedPilotsComponent", function () {
      return CompletedPilotsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CompletedPilotsComponent = class CompletedPilotsComponent {
      constructor() {}

      ngOnInit() {}

    };
    CompletedPilotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-completed-pilots',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./completed-pilots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/completed-pilots/completed-pilots.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./completed-pilots.component.css */
      "./src/app/seeker/challenge-dashboard/screens/pilots/components/completed-pilots/completed-pilots.component.css")).default]
    })], CompletedPilotsComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/components/pilot-proposal-modal/pilot-proposal-modal.component.css":
  /*!********************************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/components/pilot-proposal-modal/pilot-proposal-modal.component.css ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsOngoingPilotsComponentsPilotProposalModalPilotProposalModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-user-type {\r\n\twidth: 150px;\r\n}\r\n.a-cnt {\r\n\tcolor: rgba(153, 153, 153, 0.8);\r\n}\r\n.a-modal-content {\r\n\tborder-radius: 10px !important;\r\n}\r\n.a-ongoing {\r\n\tcolor: #947412;\r\n\tbackground: rgba(251, 196, 31, 0.1) !important;\r\n\tborder: 1px solid #fbc41f !important;\r\n}\r\n.a-yet-to-start {\r\n\tbackground: rgba(172, 177, 193, 0.1) !important;\r\n\tborder: 1px solid #acb1c1 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9waWxvdHMvY29tcG9uZW50cy9vbmdvaW5nLXBpbG90cy9jb21wb25lbnRzL3BpbG90LXByb3Bvc2FsLW1vZGFsL3BpbG90LXByb3Bvc2FsLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsOENBQThDO0NBQzlDLG9DQUFvQztBQUNyQztBQUNBO0NBQ0MsK0NBQStDO0NBQy9DLG9DQUFvQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvcGlsb3RzL2NvbXBvbmVudHMvb25nb2luZy1waWxvdHMvY29tcG9uZW50cy9waWxvdC1wcm9wb3NhbC1tb2RhbC9waWxvdC1wcm9wb3NhbC1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEtdXNlci10eXBlIHtcclxuXHR3aWR0aDogMTUwcHg7XHJcbn1cclxuLmEtY250IHtcclxuXHRjb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjgpO1xyXG59XHJcbi5hLW1vZGFsLWNvbnRlbnQge1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4uYS1vbmdvaW5nIHtcclxuXHRjb2xvcjogIzk0NzQxMjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTk2LCAzMSwgMC4xKSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmYmM0MWYgIWltcG9ydGFudDtcclxufVxyXG4uYS15ZXQtdG8tc3RhcnQge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzEgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/components/pilot-proposal-modal/pilot-proposal-modal.component.ts":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/components/pilot-proposal-modal/pilot-proposal-modal.component.ts ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: PilotProposalModalComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsOngoingPilotsComponentsPilotProposalModalPilotProposalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PilotProposalModalComponent", function () {
      return PilotProposalModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PilotProposalModalComponent = class PilotProposalModalComponent {
      constructor() {}

      ngOnInit() {}

    };
    PilotProposalModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pilot-proposal-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pilot-proposal-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/components/pilot-proposal-modal/pilot-proposal-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pilot-proposal-modal.component.css */
      "./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/components/pilot-proposal-modal/pilot-proposal-modal.component.css")).default]
    })], PilotProposalModalComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/ongoing-pilots.component.css":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/ongoing-pilots.component.css ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsOngoingPilotsOngoingPilotsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9waWxvdHMvY29tcG9uZW50cy9vbmdvaW5nLXBpbG90cy9vbmdvaW5nLXBpbG90cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7QUFDVDtDQUNDLHNCQUFzQjtDQUN0Qix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxvQ0FBb0M7Q0FDcEMseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixvQkFBb0I7QUFDckI7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsdVNBQXVTO0NBQ3ZTLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsMkJBQTJCO0NBQzNCLHVDQUF1QztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvcGlsb3RzL2NvbXBvbmVudHMvb25nb2luZy1waWxvdHMvb25nb2luZy1waWxvdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENhcmQgKi9cclxuLmEtcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQtd3JwIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmEtcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQtZm9vdGVyIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2FjYjFjMTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzEzJyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCAxMyA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTIuODE3NCAxLjQxTDExLjQxOTEgLTYuNzEzNmUtMDhMNi44NjczOCA0LjU4TDIuMzE1NjMgLTUuMDQyMzRlLTA3TDAuOTE3MzgyIDEuNDFMNi44NjczOCA3LjQxTDEyLjgxNzQgMS40MVonIGZpbGw9JyUyMzRGNEY0RicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teDogOTAlO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teTogMjBweDtcclxuXHRwYWRkaW5nOiAxMHB4IDI1cHggMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/ongoing-pilots.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/ongoing-pilots.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: OngoingPilotsComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsOngoingPilotsOngoingPilotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OngoingPilotsComponent", function () {
      return OngoingPilotsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let OngoingPilotsComponent = class OngoingPilotsComponent {
      constructor() {}

      ngOnInit() {}

    };
    OngoingPilotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ongoing-pilots',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ongoing-pilots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/ongoing-pilots.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ongoing-pilots.component.css */
      "./src/app/seeker/challenge-dashboard/screens/pilots/components/ongoing-pilots/ongoing-pilots.component.css")).default]
    })], OngoingPilotsComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-order-upload/pilot-order-upload.component.css":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-order-upload/pilot-order-upload.component.css ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsPilotOrderUploadPilotOrderUploadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".upload-wrapper {\r\n\tborder-radius: 4px;\r\n\toverflow: hidden;\r\n}\r\n\r\n.upload-inner {\r\n\tpadding: 30px;\r\n}\r\n\r\n.add-doc input[type=\"file\"] {\r\n\tdisplay: none;\r\n}\r\n\r\n.add-doc {\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.add-doc label {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 4px;\r\n\tcursor: pointer;\r\n\tpadding: 10px 15px;\r\n}\r\n\r\n.add-doc label {\r\n\tcolor: #2d9851;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.loader {\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n\tpadding: 1.5px;\r\n\tbackground: #dedede;\r\n\tvisibility: hidden;\r\n}\r\n\r\n.loader.active {\r\n\tvisibility: visible;\r\n}\r\n\r\n.loader .loaderBar {\r\n\tposition: absolute;\r\n\tborder-radius: 10px;\r\n\ttop: 0;\r\n\tright: 100%;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tbackground: var(--primary-clr);\r\n\twidth: 0;\r\n\t-webkit-animation: borealisBar 0.8s linear infinite;\r\n\t        animation: borealisBar 0.8s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes borealisBar {\r\n\t0% {\r\n\t\tleft: 0%;\r\n\t\tright: 100%;\r\n\t\twidth: 0%;\r\n\t}\r\n\t10% {\r\n\t\tleft: 0%;\r\n\t\tright: 75%;\r\n\t\twidth: 25%;\r\n\t}\r\n\t90% {\r\n\t\tright: 0%;\r\n\t\tleft: 75%;\r\n\t\twidth: 25%;\r\n\t}\r\n\t100% {\r\n\t\tleft: 100%;\r\n\t\tright: 0%;\r\n\t\twidth: 0%;\r\n\t}\r\n}\r\n\r\n@keyframes borealisBar {\r\n\t0% {\r\n\t\tleft: 0%;\r\n\t\tright: 100%;\r\n\t\twidth: 0%;\r\n\t}\r\n\t10% {\r\n\t\tleft: 0%;\r\n\t\tright: 75%;\r\n\t\twidth: 25%;\r\n\t}\r\n\t90% {\r\n\t\tright: 0%;\r\n\t\tleft: 75%;\r\n\t\twidth: 25%;\r\n\t}\r\n\t100% {\r\n\t\tleft: 100%;\r\n\t\tright: 0%;\r\n\t\twidth: 0%;\r\n\t}\r\n}\r\n\r\n.upload-btn {\r\n\tdisplay: inline-block;\r\n\tpadding: 10px 18px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid #acb1c1;\r\n\tborder-radius: 100px;\r\n\tcursor: pointer;\r\n\tmargin-left: 25px;\r\n\tcolor: #4f4f4f;\r\n}\r\n\r\n.upload-btn i {\r\n\tfont-size: 16px;\r\n\tmargin-right: 10px;\r\n\tcolor: #acb1c1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9waWxvdHMvY29tcG9uZW50cy9waWxvdC1vcmRlci11cGxvYWQvcGlsb3Qtb3JkZXItdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IseUJBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQix3QkFBdUI7U0FBdkIsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsTUFBTTtDQUNOLFdBQVc7Q0FDWCxTQUFTO0NBQ1QsT0FBTztDQUNQLDhCQUE4QjtDQUM5QixRQUFRO0NBQ1IsbURBQTJDO1NBQTNDLDJDQUEyQztBQUM1Qzs7QUFFQTtDQUNDO0VBQ0MsUUFBUTtFQUNSLFdBQVc7RUFDWCxTQUFTO0NBQ1Y7Q0FDQTtFQUNDLFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtDQUNYO0NBQ0E7RUFDQyxTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7Q0FDWDtDQUNBO0VBQ0MsVUFBVTtFQUNWLFNBQVM7RUFDVCxTQUFTO0NBQ1Y7QUFDRDs7QUFyQkE7Q0FDQztFQUNDLFFBQVE7RUFDUixXQUFXO0VBQ1gsU0FBUztDQUNWO0NBQ0E7RUFDQyxRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7Q0FDWDtDQUNBO0VBQ0MsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0NBQ1g7Q0FDQTtFQUNDLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztDQUNWO0FBQ0Q7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvcGlsb3RzL2NvbXBvbmVudHMvcGlsb3Qtb3JkZXItdXBsb2FkL3BpbG90LW9yZGVyLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC13cmFwcGVyIHtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnVwbG9hZC1pbm5lciB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmFkZC1kb2MgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hZGQtZG9jIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uYWRkLWRvYyBsYWJlbCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5hZGQtZG9jIGxhYmVsIHtcclxuXHRjb2xvcjogIzJkOTg1MTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cGFkZGluZzogMS41cHg7XHJcblx0YmFja2dyb3VuZDogI2RlZGVkZTtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sb2FkZXIuYWN0aXZlIHtcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ubG9hZGVyIC5sb2FkZXJCYXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMTAwJTtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNscik7XHJcblx0d2lkdGg6IDA7XHJcblx0YW5pbWF0aW9uOiBib3JlYWxpc0JhciAwLjhzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBib3JlYWxpc0JhciB7XHJcblx0MCUge1xyXG5cdFx0bGVmdDogMCU7XHJcblx0XHRyaWdodDogMTAwJTtcclxuXHRcdHdpZHRoOiAwJTtcclxuXHR9XHJcblx0MTAlIHtcclxuXHRcdGxlZnQ6IDAlO1xyXG5cdFx0cmlnaHQ6IDc1JTtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0fVxyXG5cdDkwJSB7XHJcblx0XHRyaWdodDogMCU7XHJcblx0XHRsZWZ0OiA3NSU7XHJcblx0XHR3aWR0aDogMjUlO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdGxlZnQ6IDEwMCU7XHJcblx0XHRyaWdodDogMCU7XHJcblx0XHR3aWR0aDogMCU7XHJcblx0fVxyXG59XHJcblxyXG4udXBsb2FkLWJ0biB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDEwcHggMThweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRiYWNrZ3JvdW5kOiAjZjdmN2Y5O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzE7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG5cdGNvbG9yOiAjNGY0ZjRmO1xyXG59XHJcblxyXG4udXBsb2FkLWJ0biBpIHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdGNvbG9yOiAjYWNiMWMxO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-order-upload/pilot-order-upload.component.ts":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-order-upload/pilot-order-upload.component.ts ***!
    \*************************************************************************************************************************/

  /*! exports provided: PilotOrderUploadComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsPilotOrderUploadPilotOrderUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PilotOrderUploadComponent", function () {
      return PilotOrderUploadComponent;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _dashboardmain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../dashboardmain.service */
    "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts");

    let PilotOrderUploadComponent = class PilotOrderUploadComponent {
      constructor(_dash) {
        this._dash = _dash;
        this.onOrderUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileArr = [];
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
      }

      ngOnChanges() {
        // console.log(this.docs);
        if (this.docs) {
          this.fileNameArr = this.docs.map(d => this.extractFileName(d));
          this.fileArr = this.docs; // console.log(this.fileNameArr);
        }
      }

      uploadFile(uploadedFile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (uploadedFile.length) {
            let formData = new FormData();
            formData.append("slug", this.pilotId);
            formData.append("pilot_order", uploadedFile[0]);
            this.loading = true;
            let resp;

            if (this.docs) {
              resp = yield this._dash.addToPilotOrderUpload(formData);
            } else {
              resp = yield this._dash.PilotOrderUpload(formData);
            }

            this.loading = false;
            this.onOrderUpload.emit(resp);
          }
        });
      }

      extractFileName(path) {
        let filename = path.replace(/^.*[\\\/]/, "");
        return filename;
      }

    };

    PilotOrderUploadComponent.ctorParameters = () => [{
      type: _dashboardmain_service__WEBPACK_IMPORTED_MODULE_3__["DashboardmainService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PilotOrderUploadComponent.prototype, "pilotId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PilotOrderUploadComponent.prototype, "docs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PilotOrderUploadComponent.prototype, "onOrderUpload", void 0);
    PilotOrderUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "pilot-order-upload",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pilot-order-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-order-upload/pilot-order-upload.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pilot-order-upload.component.css */
      "./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-order-upload/pilot-order-upload.component.css")).default]
    })], PilotOrderUploadComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-report-upload/pilot-report-upload.component.css":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-report-upload/pilot-report-upload.component.css ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsPilotReportUploadPilotReportUploadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvcGlsb3RzL2NvbXBvbmVudHMvcGlsb3QtcmVwb3J0LXVwbG9hZC9waWxvdC1yZXBvcnQtdXBsb2FkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-report-upload/pilot-report-upload.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-report-upload/pilot-report-upload.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: PilotReportUploadComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsPilotReportUploadPilotReportUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PilotReportUploadComponent", function () {
      return PilotReportUploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PilotReportUploadComponent = class PilotReportUploadComponent {
      constructor() {}

      ngOnInit() {}

    };
    PilotReportUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'pilot-report-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pilot-report-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-report-upload/pilot-report-upload.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pilot-report-upload.component.css */
      "./src/app/seeker/challenge-dashboard/screens/pilots/components/pilot-report-upload/pilot-report-upload.component.css")).default]
    })], PilotReportUploadComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/yet-to-start-pilots/yet-to-start-pilots.component.css":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/yet-to-start-pilots/yet-to-start-pilots.component.css ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsYetToStartPilotsYetToStartPilotsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9waWxvdHMvY29tcG9uZW50cy95ZXQtdG8tc3RhcnQtcGlsb3RzL3lldC10by1zdGFydC1waWxvdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1Q7Q0FDQyxzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLHVTQUF1UztDQUN2Uyw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQix1Q0FBdUM7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvY2hhbGxlbmdlLWRhc2hib2FyZC9zY3JlZW5zL3BpbG90cy9jb21wb25lbnRzL3lldC10by1zdGFydC1waWxvdHMveWV0LXRvLXN0YXJ0LXBpbG90cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2FyZCAqL1xyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC13cnAge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC1mb290ZXIge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTMnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDEzIDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xMi44MTc0IDEuNDFMMTEuNDE5MSAtNi43MTM2ZS0wOEw2Ljg2NzM4IDQuNThMMi4zMTU2MyAtNS4wNDIzNGUtMDdMMC45MTczODIgMS40MUw2Ljg2NzM4IDcuNDFMMTIuODE3NCAxLjQxWicgZmlsbD0nJTIzNEY0RjRGJy8lM0UlM0Mvc3ZnJTNFJTBBXCIpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi14OiA5MCU7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi15OiAyMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMjVweCAxMHB4IDI1cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/components/yet-to-start-pilots/yet-to-start-pilots.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/components/yet-to-start-pilots/yet-to-start-pilots.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: YetToStartPilotsComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsComponentsYetToStartPilotsYetToStartPilotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YetToStartPilotsComponent", function () {
      return YetToStartPilotsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let YetToStartPilotsComponent = class YetToStartPilotsComponent {
      constructor() {}

      ngOnInit() {}

    };
    YetToStartPilotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-yet-to-start-pilots',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./yet-to-start-pilots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/components/yet-to-start-pilots/yet-to-start-pilots.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./yet-to-start-pilots.component.css */
      "./src/app/seeker/challenge-dashboard/screens/pilots/components/yet-to-start-pilots/yet-to-start-pilots.component.css")).default]
    })], YetToStartPilotsComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/pilots.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/pilots.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsPilotsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-header-review-application {\r\n\tmax-width: 1170px;\r\n\twidth: 100%;\r\n\tmargin: auto;\r\n}\r\n.a-counts-wrp {\r\n\twidth: 100%;\r\n\tmax-width: 250px;\r\n}\r\n.a-tab-wrp > ul > li > a {\r\n\tbackground: rgba(79, 79, 79, 0.1);\r\n\tborder-radius: 100px;\r\n\tcolor: #363636;\r\n}\r\n.a-tab-wrp > ul > li {\r\n\tmargin-right: 20px !important;\r\n}\r\n.a-tab-wrp > ul > li.active > a {\r\n\tcolor: #fff;\r\n\tbackground: #4f4f4f;\r\n}\r\n.a-await-approval {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid var(--primary-grey);\r\n\tcolor: #7f838f;\r\n\tborder-radius: 4px;\r\n\tpadding: 6px 10px;\r\n}\r\n.a-await-proposal {\r\n\tbackground: rgba(242, 148, 62, 0.1);\r\n\tborder: 1px solid #f2943e;\r\n\tcolor: #d98538;\r\n\tborder-radius: 4px;\r\n\tpadding: 6px 10px;\r\n}\r\n.a-accepting-solution {\r\n\tbackground: rgba(251, 196, 31, 0.1);\r\n\tborder: 1px solid #fbc41f;\r\n\tcolor: #947412;\r\n\tborder-radius: 4px;\r\n\tpadding: 6px 10px;\r\n}\r\n.a-pilot {\r\n\tbackground: rgba(45, 152, 81, 0.1);\r\n\tborder: 1px solid #2d9851;\r\n\tcolor: #1e6636;\r\n\tborder-radius: 4px;\r\n\tpadding: 6px 10px;\r\n}\r\n/* Header tab */\r\n.a-challenge-tab [data-toggle=\"pill\"] span {\r\n\tposition: relative;\r\n\tz-index: 10;\r\n}\r\n.nav-pills > li + li {\r\n\tmargin: 0px;\r\n}\r\n.nav-pills > li > a {\r\n\tborder-radius: 0px;\r\n}\r\n.g-default-tab {\r\n\tbackground-color: #ffffff !important;\r\n\tpadding: 12px 30px 15px;\r\n}\r\n.nav-pills > li:nth-child(5) a {\r\n\tborder-right: 1px solid var(--primary-grey) !important;\r\n}\r\n.nav-pills > li:nth-child(2) a {\r\n\tborder-left: 1px solid var(--primary-grey) !important;\r\n}\r\n.a-tab-common-clr,\r\n.a-sol-pilot-tab {\r\n\tbackground: #f7f7f9;\r\n\t/* border: 1px solid var(--primary-grey); */\r\n\tcolor: #7f838f;\r\n\tborder: 0px !important;\r\n\t/* border-left: 0px !important; */\r\n\t/* margin-left: -25px; */\r\n\tpadding-left: 40px;\r\n\tpadding-right: 20px;\r\n\tpadding-top: 16px;\r\n\tpadding-bottom: 15px;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n.a-challenge-tab .a-tab-common-clr::after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 8px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid var(--primary-grey);\r\n\t-webkit-transform: rotate(47deg);\r\n\ttransform: rotate(45deg);\r\n\tleft: 88%;\r\n\tborder-bottom: 0px;\r\n\tborder-left: 0px;\r\n\tz-index: 2;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n.nav-pills > li.active .a-tab-common-clr,\r\n.nav-pills > li.active .a-tab-common-clr::after,\r\n.a-tab-common-clr:hover,\r\n.a-tab-common-clr:hover:after,\r\n.a-sol-pilot-tab:hover,\r\n.a-sol-pilot-tab:focus {\r\n\tbackground-color: #4f4f4f !important;\r\n\tcolor: #f7f7f9;\r\n}\r\n.g-default-tab:hover,\r\n.g-default-tab:focus,\r\n.nav-pills > li.active > .g-default-tab {\r\n\tborder-bottom: 4px solid #4f4f4f;\r\n}\r\n.a-tab-common-clr2::after {\r\n\tleft: 82% !important;\r\n}\r\n.a-challenge-tab-wrp {\r\n\tborder: 1px solid #dee0e6;\r\n}\r\n.a-challenge-tab {\r\n\tmax-width: 1170px;\r\n\twidth: 100%;\r\n\tmargin: auto;\r\n}\r\n.a-align-self-center {\r\n\talign-self: center !important;\r\n}\r\n.a-review-application-tab-cnts-wrp {\r\n\tmin-height: 100vh;\r\n}\r\n.content {\r\n\tmin-height: 80vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9waWxvdHMvcGlsb3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFlBQVk7QUFDYjtBQUNBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsaUNBQWlDO0NBQ2pDLG9CQUFvQjtDQUNwQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLHFDQUFxQztDQUNyQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsbUNBQW1DO0NBQ25DLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsbUNBQW1DO0NBQ25DLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msa0NBQWtDO0NBQ2xDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUVBLGVBQWU7QUFDZjtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7QUFFQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxvQ0FBb0M7Q0FDcEMsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxzREFBc0Q7QUFDdkQ7QUFDQTtDQUNDLHFEQUFxRDtBQUN0RDtBQUNBOztDQUVDLG1CQUFtQjtDQUNuQiwyQ0FBMkM7Q0FDM0MsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixpQ0FBaUM7Q0FDakMsd0JBQXdCO0NBQ3hCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQiw0Q0FBb0M7Q0FBcEMsb0NBQW9DO0FBQ3JDO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIscUNBQXFDO0NBQ3JDLGdDQUFnQztDQUNoQyx3QkFBd0I7Q0FDeEIsU0FBUztDQUNULGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLDRDQUE0QztDQUM1QyxvQ0FBb0M7QUFDckM7QUFDQTs7Ozs7O0NBTUMsb0NBQW9DO0NBQ3BDLGNBQWM7QUFDZjtBQUNBOzs7Q0FHQyxnQ0FBZ0M7QUFDakM7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFlBQVk7QUFDYjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvcGlsb3RzL3BpbG90cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEtaGVhZGVyLXJldmlldy1hcHBsaWNhdGlvbiB7XHJcblx0bWF4LXdpZHRoOiAxMTcwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG59XHJcbi5hLWNvdW50cy13cnAge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpID4gYSB7XHJcblx0YmFja2dyb3VuZDogcmdiYSg3OSwgNzksIDc5LCAwLjEpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cdGNvbG9yOiAjMzYzNjM2O1xyXG59XHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4uYS10YWItd3JwID4gdWwgPiBsaS5hY3RpdmUgPiBhIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiAjNGY0ZjRmO1xyXG59XHJcbi5hLWF3YWl0LWFwcHJvdmFsIHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KTtcclxuXHRjb2xvcjogIzdmODM4ZjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0cGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuLmEtYXdhaXQtcHJvcG9zYWwge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjQyLCAxNDgsIDYyLCAwLjEpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMjk0M2U7XHJcblx0Y29sb3I6ICNkOTg1Mzg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHBhZGRpbmc6IDZweCAxMHB4O1xyXG59XHJcbi5hLWFjY2VwdGluZy1zb2x1dGlvbiB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTEsIDE5NiwgMzEsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZiYzQxZjtcclxuXHRjb2xvcjogIzk0NzQxMjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0cGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuLmEtcGlsb3Qge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoNDUsIDE1MiwgODEsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzJkOTg1MTtcclxuXHRjb2xvcjogIzFlNjYzNjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0cGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhlYWRlciB0YWIgKi9cclxuLmEtY2hhbGxlbmdlLXRhYiBbZGF0YS10b2dnbGU9XCJwaWxsXCJdIHNwYW4ge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLm5hdi1waWxscyA+IGxpICsgbGkge1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaSA+IGEge1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uZy1kZWZhdWx0LXRhYiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6IDEycHggMzBweCAxNXB4O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaTpudGgtY2hpbGQoNSkgYSB7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaTpudGgtY2hpbGQoMikgYSB7XHJcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtdGFiLWNvbW1vbi1jbHIsXHJcbi5hLXNvbC1waWxvdC10YWIge1xyXG5cdGJhY2tncm91bmQ6ICNmN2Y3Zjk7XHJcblx0LyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KTsgKi9cclxuXHRjb2xvcjogIzdmODM4ZjtcclxuXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG5cdC8qIGJvcmRlci1sZWZ0OiAwcHggIWltcG9ydGFudDsgKi9cclxuXHQvKiBtYXJnaW4tbGVmdDogLTI1cHg7ICovXHJcblx0cGFkZGluZy1sZWZ0OiA0MHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblx0cGFkZGluZy10b3A6IDE2cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDE1cHg7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWNoYWxsZW5nZS10YWIgLmEtdGFiLWNvbW1vbi1jbHI6OmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDhweDtcclxuXHR3aWR0aDogNDBweDtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0YmFja2dyb3VuZDogI2Y3ZjdmOTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDdkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRsZWZ0OiA4OCU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMHB4O1xyXG5cdGJvcmRlci1sZWZ0OiAwcHg7XHJcblx0ei1pbmRleDogMjtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSAuYS10YWItY29tbW9uLWNscixcclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSAuYS10YWItY29tbW9uLWNscjo6YWZ0ZXIsXHJcbi5hLXRhYi1jb21tb24tY2xyOmhvdmVyLFxyXG4uYS10YWItY29tbW9uLWNscjpob3ZlcjphZnRlcixcclxuLmEtc29sLXBpbG90LXRhYjpob3ZlcixcclxuLmEtc29sLXBpbG90LXRhYjpmb2N1cyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmNGY0ZiAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZjdmN2Y5O1xyXG59XHJcbi5nLWRlZmF1bHQtdGFiOmhvdmVyLFxyXG4uZy1kZWZhdWx0LXRhYjpmb2N1cyxcclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSA+IC5nLWRlZmF1bHQtdGFiIHtcclxuXHRib3JkZXItYm90dG9tOiA0cHggc29saWQgIzRmNGY0ZjtcclxufVxyXG5cclxuLmEtdGFiLWNvbW1vbi1jbHIyOjphZnRlciB7XHJcblx0bGVmdDogODIlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLWNoYWxsZW5nZS10YWItd3JwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVlMGU2O1xyXG59XHJcbi5hLWNoYWxsZW5nZS10YWIge1xyXG5cdG1heC13aWR0aDogMTE3MHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG4uYS1hbGlnbi1zZWxmLWNlbnRlciB7XHJcblx0YWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi10YWItY250cy13cnAge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcblx0bWluLWhlaWdodDogODB2aDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/pilots/pilots.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/pilots/pilots.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: PilotsComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensPilotsPilotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PilotsComponent", function () {
      return PilotsComponent;
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


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");
    /* harmony import */


    var _dashboardmain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../dashboardmain.service */
    "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let PilotsComponent = class PilotsComponent {
      constructor(_dash, route) {
        this._dash = _dash;
        this.route = route;
        this.allPilotsCount = 0;
        this.completedPilotsCount = 0;
        this.onGoingPilotsCount = 0;
        this.yetToStartCount = 0;
        this.queryAll = {
          filter: {
            status: "active",
            proposal_stage: "Pilot Ready"
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.queryCompleted = {
          filter: {
            status: "active",
            proposal_stage: "Pilot Ready",
            pilot_status: "Completed"
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.queryOnGoing = {
          filter: {
            status: "active",
            proposal_stage: "Pilot Ready",
            pilot_status: "Ongoing"
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.queryYetToStart = {
          filter: {
            status: "active",
            proposal_stage: "Pilot Ready",
            pilot_status: "Yet to Start"
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.route.parent.params.subscribe(params => {
          this.queryAll.filter.frg_anchor_id = params.id;
          this.queryCompleted.filter.frg_anchor_id = params.id;
          this.queryOnGoing.filter.frg_anchor_id = params.id;
          this.queryYetToStart.filter.frg_anchor_id = params.id;
        });
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield Promise.all([this.fetchAllPilots(), this.fetchCompletedPilots(), this.fetchOnGoingPilots(), this.fetchYetToStart()]);
        });
      }

      fetchAllPilots() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.allLoading = true;
          this.allPilots = yield this._dash.getProposals(this.queryAll); // console.log(this.allPilots);

          this.allPilotsCount = this.allPilots.total_results;
          this.allLoading = false;
        });
      }

      fetchCompletedPilots() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.completedLoading = true;
          this.completedPilots = yield this._dash.getProposals(this.queryCompleted);
          this.completedPilotsCount = this.completedPilots.total_results;
          this.completedLoading = false;
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

      handleStatusChange() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield Promise.all([this.fetchAllPilots(), this.fetchCompletedPilots(), this.fetchOnGoingPilots(), this.fetchYetToStart()]);
        });
      }

      handleAllPagination(pageIndex) {
        this.queryAll.pg.skip = (pageIndex - 1) * this.queryAll.pg.limit;
        this.fetchAllPilots();
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

    PilotsComponent.ctorParameters = () => [{
      type: _dashboardmain_service__WEBPACK_IMPORTED_MODULE_4__["DashboardmainService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_3__["LoggedInUserState"])], PilotsComponent.prototype, "loggedInUser$", void 0);
    PilotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-pilots",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pilots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/pilots/pilots.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pilots.component.css */
      "./src/app/seeker/challenge-dashboard/screens/pilots/pilots.component.css")).default]
    })], PilotsComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-applications/application.service.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-applications/application.service.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ApplicationService */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewApplicationsApplicationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationService", function () {
      return ApplicationService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let ApplicationService = class ApplicationService {
      constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
      }

      getApplications(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const limit = parseInt(query.pg.limit);
          const page = parseInt(query.pg.skip) / limit + 1;
          const dataResponse = yield this.http.post(this.api_url + "/application/select_mul", query).toPromise();
          const countResponse = yield this.http.post(this.api_url + "/application/count", query).toPromise();
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

      updateApplicationStatus(applicationId, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post("".concat(this.api_url, "/application/update"), {
            slug: {
              id: applicationId
            },
            data: {
              application_status: status
            }
          }).toPromise();
        });
      }

      createEOI(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield Promise.all([this.http.post(this.api_url + "/eoi/create", postData).toPromise(), this.http.post("".concat(this.api_url, "/application/update"), {
            slug: {
              id: postData.data.frg_application_id
            },
            data: {
              eoi_received: true
            }
          }).toPromise()]);
        });
      }

      getEOI(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const limit = parseInt(query.pg.limit);
          const page = parseInt(query.pg.skip) / limit + 1;
          const dataResponse = yield this.http.post(this.api_url + "/eoi/select_mul", query).toPromise();
          const countResponse = yield this.http.post(this.api_url + "/eoi/count", query).toPromise();
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

      sendAppRejectionNotification(post_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/application/reject_application", post_data).toPromise();
        });
      }

    };

    ApplicationService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    ApplicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ApplicationService);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-applications/components/card-loader/card-loader.component.css":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-applications/components/card-loader/card-loader.component.css ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewApplicationsComponentsCardLoaderCardLoaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctYXBwbGljYXRpb25zL2NvbXBvbmVudHMvY2FyZC1sb2FkZXIvY2FyZC1sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1Q7Q0FDQyxzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLHVTQUF1UztDQUN2Uyw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQix1Q0FBdUM7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvY2hhbGxlbmdlLWRhc2hib2FyZC9zY3JlZW5zL3Jldmlldy1hcHBsaWNhdGlvbnMvY29tcG9uZW50cy9jYXJkLWxvYWRlci9jYXJkLWxvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2FyZCAqL1xyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC13cnAge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC1mb290ZXIge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTMnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDEzIDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xMi44MTc0IDEuNDFMMTEuNDE5MSAtNi43MTM2ZS0wOEw2Ljg2NzM4IDQuNThMMi4zMTU2MyAtNS4wNDIzNGUtMDdMMC45MTczODIgMS40MUw2Ljg2NzM4IDcuNDFMMTIuODE3NCAxLjQxWicgZmlsbD0nJTIzNEY0RjRGJy8lM0UlM0Mvc3ZnJTNFJTBBXCIpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi14OiA5MCU7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi15OiAyMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMjVweCAxMHB4IDI1cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-applications/components/card-loader/card-loader.component.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-applications/components/card-loader/card-loader.component.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: CardLoaderComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewApplicationsComponentsCardLoaderCardLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardLoaderComponent", function () {
      return CardLoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CardLoaderComponent = class CardLoaderComponent {
      constructor() {}

      ngOnInit() {}

    };
    CardLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'card-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/components/card-loader/card-loader.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-loader.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-applications/components/card-loader/card-loader.component.css")).default]
    })], CardLoaderComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-applications/components/on-hold/on-hold.component.css":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-applications/components/on-hold/on-hold.component.css ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewApplicationsComponentsOnHoldOnHoldComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctYXBwbGljYXRpb25zL2NvbXBvbmVudHMvb24taG9sZC9vbi1ob2xkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNUO0NBQ0Msc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQix1U0FBdVM7Q0FDdlMsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IsdUNBQXVDO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctYXBwbGljYXRpb25zL2NvbXBvbmVudHMvb24taG9sZC9vbi1ob2xkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDYXJkICovXHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLXdycCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLWZvb3RlciB7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgxNzIsIDE3NywgMTkzLCAwLjEpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzE7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxMycgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgMTMgOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEyLjgxNzQgMS40MUwxMS40MTkxIC02LjcxMzZlLTA4TDYuODY3MzggNC41OEwyLjMxNTYzIC01LjA0MjM0ZS0wN0wwLjkxNzM4MiAxLjQxTDYuODY3MzggNy40MUwxMi44MTc0IDEuNDFaJyBmaWxsPSclMjM0RjRGNEYnLyUzRSUzQy9zdmclM0UlMEFcIik7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDkwJTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDIwcHg7XHJcblx0cGFkZGluZzogMTBweCAyNXB4IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-applications/components/on-hold/on-hold.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-applications/components/on-hold/on-hold.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: OnHoldComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewApplicationsComponentsOnHoldOnHoldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnHoldComponent", function () {
      return OnHoldComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let OnHoldComponent = class OnHoldComponent {
      constructor() {}

      ngOnInit() {}

    };
    OnHoldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-on-hold',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./on-hold.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/components/on-hold/on-hold.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./on-hold.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-applications/components/on-hold/on-hold.component.css")).default]
    })], OnHoldComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-applications/components/rejected/rejected.component.css":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-applications/components/rejected/rejected.component.css ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewApplicationsComponentsRejectedRejectedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctYXBwbGljYXRpb25zL2NvbXBvbmVudHMvcmVqZWN0ZWQvcmVqZWN0ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1Q7Q0FDQyxzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLHVTQUF1UztDQUN2Uyw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQix1Q0FBdUM7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvY2hhbGxlbmdlLWRhc2hib2FyZC9zY3JlZW5zL3Jldmlldy1hcHBsaWNhdGlvbnMvY29tcG9uZW50cy9yZWplY3RlZC9yZWplY3RlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2FyZCAqL1xyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC13cnAge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC1mb290ZXIge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTMnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDEzIDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xMi44MTc0IDEuNDFMMTEuNDE5MSAtNi43MTM2ZS0wOEw2Ljg2NzM4IDQuNThMMi4zMTU2MyAtNS4wNDIzNGUtMDdMMC45MTczODIgMS40MUw2Ljg2NzM4IDcuNDFMMTIuODE3NCAxLjQxWicgZmlsbD0nJTIzNEY0RjRGJy8lM0UlM0Mvc3ZnJTNFJTBBXCIpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi14OiA5MCU7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi15OiAyMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMjVweCAxMHB4IDI1cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-applications/components/rejected/rejected.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-applications/components/rejected/rejected.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: RejectedComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewApplicationsComponentsRejectedRejectedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RejectedComponent", function () {
      return RejectedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let RejectedComponent = class RejectedComponent {
      constructor() {}

      ngOnInit() {}

    };
    RejectedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rejected',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rejected.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/components/rejected/rejected.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rejected.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-applications/components/rejected/rejected.component.css")).default]
    })], RejectedComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-applications/components/review-application-card/review-application-card.component.css":
  /*!*************************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-applications/components/review-application-card/review-application-card.component.css ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewApplicationsComponentsReviewApplicationCardReviewApplicationCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n\toverflow: hidden;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n.a-review-appl-img-wrp img {\r\n\tborder-radius: 4px;\r\n}\r\n.loader {\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n\tpadding: 1px;\r\n\tbackground: #dedede;\r\n\tvisibility: hidden;\r\n}\r\n.loader.active {\r\n\tvisibility: visible;\r\n}\r\n.loader .loaderBar {\r\n\tposition: absolute;\r\n\tborder-radius: 10px;\r\n\ttop: 0;\r\n\tright: 100%;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tbackground: var(--primary-clr);\r\n\twidth: 0;\r\n\t-webkit-animation: borealisBar 1.2s linear infinite;\r\n\t        animation: borealisBar 1.2s linear infinite;\r\n}\r\n@-webkit-keyframes borealisBar {\r\n\t0% {\r\n\t\tleft: 0%;\r\n\t\tright: 100%;\r\n\t\twidth: 0%;\r\n\t}\r\n\t10% {\r\n\t\tleft: 0%;\r\n\t\tright: 75%;\r\n\t\twidth: 25%;\r\n\t}\r\n\t90% {\r\n\t\tright: 0%;\r\n\t\tleft: 75%;\r\n\t\twidth: 25%;\r\n\t}\r\n\t100% {\r\n\t\tleft: 100%;\r\n\t\tright: 0%;\r\n\t\twidth: 0%;\r\n\t}\r\n}\r\n@keyframes borealisBar {\r\n\t0% {\r\n\t\tleft: 0%;\r\n\t\tright: 100%;\r\n\t\twidth: 0%;\r\n\t}\r\n\t10% {\r\n\t\tleft: 0%;\r\n\t\tright: 75%;\r\n\t\twidth: 25%;\r\n\t}\r\n\t90% {\r\n\t\tright: 0%;\r\n\t\tleft: 75%;\r\n\t\twidth: 25%;\r\n\t}\r\n\t100% {\r\n\t\tleft: 100%;\r\n\t\tright: 0%;\r\n\t\twidth: 0%;\r\n\t}\r\n}\r\n.status-pill {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 13px 42px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid #acb1c1;\r\n\tborder-radius: 100px;\r\n}\r\n.status-pill.onhold {\r\n\tcolor: #7a600f;\r\n\tborder: 1px solid #fbc41f;\r\n}\r\n.status-pill.onhold {\r\n\tpadding-left: 36px;\r\n}\r\n.status-pill.rejected::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 16px;\r\n\tleft: 25px;\r\n\tborder-radius: 50%;\r\n\tbackground: #f8483d;\r\n}\r\nselect.onhold {\r\n\tbackground-color: rgba(251, 196, 31, 0.1);\r\n\tborder: 1px solid #fbc41f !important;\r\n\tcolor: #7a600f !important;\r\n}\r\n.a-confirm-btn {\r\n\tborder: 1px solid #2d9851 !important;\r\n\tcolor: #ffffff !important;\r\n\tbackground-color: #2d9851 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctYXBwbGljYXRpb25zL2NvbXBvbmVudHMvcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQvcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1Q7Q0FDQyxzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQix1U0FBdVM7Q0FDdlMsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IsdUNBQXVDO0FBQ3hDO0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsTUFBTTtDQUNOLFdBQVc7Q0FDWCxTQUFTO0NBQ1QsT0FBTztDQUNQLDhCQUE4QjtDQUM5QixRQUFRO0NBQ1IsbURBQTJDO1NBQTNDLDJDQUEyQztBQUM1QztBQUVBO0NBQ0M7RUFDQyxRQUFRO0VBQ1IsV0FBVztFQUNYLFNBQVM7Q0FDVjtDQUNBO0VBQ0MsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0NBQ1g7Q0FDQTtFQUNDLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtDQUNYO0NBQ0E7RUFDQyxVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVM7Q0FDVjtBQUNEO0FBckJBO0NBQ0M7RUFDQyxRQUFRO0VBQ1IsV0FBVztFQUNYLFNBQVM7Q0FDVjtDQUNBO0VBQ0MsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0NBQ1g7Q0FDQTtFQUNDLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtDQUNYO0NBQ0E7RUFDQyxVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVM7Q0FDVjtBQUNEO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyxjQUFjO0NBQ2QseUJBQXlCO0FBQzFCO0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixTQUFTO0NBQ1QsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLHlDQUF5QztDQUN6QyxvQ0FBb0M7Q0FDcEMseUJBQXlCO0FBQzFCO0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMseUJBQXlCO0NBQ3pCLG9DQUFvQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvcmV2aWV3LWFwcGxpY2F0aW9ucy9jb21wb25lbnRzL3Jldmlldy1hcHBsaWNhdGlvbi1jYXJkL3Jldmlldy1hcHBsaWNhdGlvbi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDYXJkICovXHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLXdycCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmEtcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQtZm9vdGVyIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2FjYjFjMTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzEzJyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCAxMyA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTIuODE3NCAxLjQxTDExLjQxOTEgLTYuNzEzNmUtMDhMNi44NjczOCA0LjU4TDIuMzE1NjMgLTUuMDQyMzRlLTA3TDAuOTE3MzgyIDEuNDFMNi44NjczOCA3LjQxTDEyLjgxNzQgMS40MVonIGZpbGw9JyUyMzRGNEY0RicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teDogOTAlO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teTogMjBweDtcclxuXHRwYWRkaW5nOiAxMHB4IDI1cHggMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLXJldmlldy1hcHBsLWltZy13cnAgaW1nIHtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRwYWRkaW5nOiAxcHg7XHJcblx0YmFja2dyb3VuZDogI2RlZGVkZTtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sb2FkZXIuYWN0aXZlIHtcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ubG9hZGVyIC5sb2FkZXJCYXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMTAwJTtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNscik7XHJcblx0d2lkdGg6IDA7XHJcblx0YW5pbWF0aW9uOiBib3JlYWxpc0JhciAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBib3JlYWxpc0JhciB7XHJcblx0MCUge1xyXG5cdFx0bGVmdDogMCU7XHJcblx0XHRyaWdodDogMTAwJTtcclxuXHRcdHdpZHRoOiAwJTtcclxuXHR9XHJcblx0MTAlIHtcclxuXHRcdGxlZnQ6IDAlO1xyXG5cdFx0cmlnaHQ6IDc1JTtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0fVxyXG5cdDkwJSB7XHJcblx0XHRyaWdodDogMCU7XHJcblx0XHRsZWZ0OiA3NSU7XHJcblx0XHR3aWR0aDogMjUlO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdGxlZnQ6IDEwMCU7XHJcblx0XHRyaWdodDogMCU7XHJcblx0XHR3aWR0aDogMCU7XHJcblx0fVxyXG59XHJcblxyXG4uc3RhdHVzLXBpbGwge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogMTNweCA0MnB4O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGJhY2tncm91bmQ6ICNmN2Y3Zjk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2FjYjFjMTtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsLm9uaG9sZCB7XHJcblx0Y29sb3I6ICM3YTYwMGY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZiYzQxZjtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsLm9uaG9sZCB7XHJcblx0cGFkZGluZy1sZWZ0OiAzNnB4O1xyXG59XHJcblxyXG4uc3RhdHVzLXBpbGwucmVqZWN0ZWQ6OmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTBweDtcclxuXHRoZWlnaHQ6IDEwcHg7XHJcblx0dG9wOiAxNnB4O1xyXG5cdGxlZnQ6IDI1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJhY2tncm91bmQ6ICNmODQ4M2Q7XHJcbn1cclxuXHJcbnNlbGVjdC5vbmhvbGQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUxLCAxOTYsIDMxLCAwLjEpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmYmM0MWYgIWltcG9ydGFudDtcclxuXHRjb2xvcjogIzdhNjAwZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYS1jb25maXJtLWJ0biB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzJkOTg1MSAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJkOTg1MSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-applications/components/review-application-card/review-application-card.component.ts":
  /*!************************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-applications/components/review-application-card/review-application-card.component.ts ***!
    \************************************************************************************************************************************************/

  /*! exports provided: ReviewApplicationCardComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewApplicationsComponentsReviewApplicationCardReviewApplicationCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewApplicationCardComponent", function () {
      return ReviewApplicationCardComponent;
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


    var _application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../application.service */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/application.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");

    let ReviewApplicationCardComponent = class ReviewApplicationCardComponent {
      constructor(_app, toastr, router, LoggedInUserStateModel) {
        this._app = _app;
        this.toastr = toastr;
        this.router = router;
        this.LoggedInUserStateModel = LoggedInUserStateModel;
        this.onStatusUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server_url;
        this.uid = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
        this.statusValue = "";
      }

      ngOnInit() {
        if (this.applicationData.application_status != "New") {
          this.statusValue = this.applicationData.application_status;
        }
      }

      handleChangeStatus(statusName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let status = statusName.target.value;

          if (status === "Onhold") {
            this.statusUpdating = true;
            let resp = yield this._app.updateApplicationStatus(this.applicationData.id, status);
            this.toastr.info("", "Application moved to ".concat(status));
            this.onStatusUpdate.emit(resp);
            this.statusUpdating = false;
          } else if (status === "Shortlist") {
            $("#shortList_".concat(this.uid)).modal("show");
          } else if (status === "Reject") {
            $("#reject_".concat(this.uid)).modal("show");
          }
        });
      }

      changeStatus(status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.statusUpdating = true;
          let resp = yield this._app.updateApplicationStatus(this.applicationData.id, status);
          this.toastr.info("", "Application moved to ".concat(status));
          $("#shortList_".concat(this.uid)).modal("hide");
          $("#reject_".concat(this.uid)).modal("hide");
          this.onStatusUpdate.emit(resp);
          this.statusUpdating = false;

          if (status == 'Reject') {
            var post_data = {
              application_name: this.applicationData.name,
              seeker_id: this.applicationData.frg_anchor_id.frg_seeker_id,
              rejection_msg: this.rejection_msg,
              provider_id: this.applicationData.frg_provider_id.frg_user_id
            };
            let resp = yield this._app.sendAppRejectionNotification(post_data);
          }

          if (status == 'Shortlist') {
            var id = this.applicationData.frg_anchor_id.id;
            this.loggedInUser$.subscribe(resp => {
              this.loggedInUser = resp.LoggedInUser; // console.log(this.loggedInUser)
            });
            this.router.navigateByUrl("/seeker/user/".concat(this.loggedInUser.slug, "/dashboard/challenge/").concat(id, "/eoi"));
          }
        });
      }

      refreshCard() {
        if (this.applicationData.application_status != "New") {
          this.statusValue = this.applicationData.application_status;
        } else {
          this.statusValue = "";
        }
      }

      handleChangeStatus2(id) {}

    };

    ReviewApplicationCardComponent.ctorParameters = () => [{
      type: _application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserStateModel"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserState"])], ReviewApplicationCardComponent.prototype, "loggedInUser$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ReviewApplicationCardComponent.prototype, "applicationData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ReviewApplicationCardComponent.prototype, "onStatusUpdate", void 0);
    ReviewApplicationCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-review-application-card",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review-application-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/components/review-application-card/review-application-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review-application-card.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-applications/components/review-application-card/review-application-card.component.css")).default]
    })], ReviewApplicationCardComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-applications/review-applications.component.css":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-applications/review-applications.component.css ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewApplicationsReviewApplicationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-header-review-application {\r\n  max-width: 1170px;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n.a-counts-wrp {\r\n  width: 100%;\r\n  max-width: 250px;\r\n}\r\n.a-tab-wrp > ul > li > a {\r\n  background: rgba(79, 79, 79, 0.1);\r\n  border-radius: 100px;\r\n  color: #363636;\r\n}\r\n.a-tab-wrp > ul > li {\r\n  margin-right: 20px;\r\n}\r\n.a-tab-wrp > ul > li.active > a {\r\n  color: #fff;\r\n  background: #4f4f4f;\r\n}\r\n.a-await-approval {\r\n  background: rgba(172, 177, 193, 0.1);\r\n  border: 1px solid var(--primary-grey);\r\n  color: #7f838f;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n.a-await-proposal {\r\n  background: rgba(242, 148, 62, 0.1);\r\n  border: 1px solid #f2943e;\r\n  color: #d98538;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n.a-accepting-solution {\r\n  background: rgba(251, 196, 31, 0.1);\r\n  border: 1px solid #fbc41f;\r\n  color: #947412;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n.a-pilot {\r\n  background: rgba(45, 152, 81, 0.1);\r\n  border: 1px solid #2d9851;\r\n  color: #1e6636;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n/* Header tab */\r\n.a-challenge-tab [data-toggle=\"pill\"] span {\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n/* .nav-pills > li + li {\r\n\tmargin: 0px;\r\n} */\r\n.nav-pills > li > a {\r\n  border-radius: 0px;\r\n}\r\n.g-default-tab {\r\n  background-color: #ffffff !important;\r\n  padding: 12px 30px 15px;\r\n}\r\n.nav-pills > li:nth-child(5) a {\r\n  border-right: 1px solid var(--primary-grey) !important;\r\n}\r\n.nav-pills > li:nth-child(2) a {\r\n  border-left: 1px solid var(--primary-grey) !important;\r\n}\r\n.a-tab-common-clr,\r\n.a-sol-pilot-tab {\r\n  background: #f7f7f9;\r\n  /* border: 1px solid var(--primary-grey); */\r\n  color: #7f838f;\r\n  border: 0px !important;\r\n  /* border-left: 0px !important; */\r\n  /* margin-left: -25px; */\r\n  padding-left: 40px;\r\n  padding-right: 20px;\r\n  padding-top: 16px;\r\n  padding-bottom: 15px;\r\n  -webkit-transition: all 0.2s ease !important;\r\n  transition: all 0.2s ease !important;\r\n}\r\n.a-challenge-tab .a-tab-common-clr::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 8px;\r\n  width: 40px;\r\n  height: 40px;\r\n  background: #f7f7f9;\r\n  border: 1px solid var(--primary-grey);\r\n  -webkit-transform: rotate(47deg);\r\n  transform: rotate(45deg);\r\n  left: 88%;\r\n  border-bottom: 0px;\r\n  border-left: 0px;\r\n  z-index: 2;\r\n  -webkit-transition: all 0.2s ease !important;\r\n  transition: all 0.2s ease !important;\r\n}\r\n.nav-pills > li.active .a-tab-common-clr,\r\n.nav-pills > li.active .a-tab-common-clr::after,\r\n.a-tab-common-clr:hover,\r\n.a-tab-common-clr:hover:after,\r\n.a-sol-pilot-tab:hover,\r\n.a-sol-pilot-tab:focus {\r\n  background-color: #4f4f4f !important;\r\n  color: #f7f7f9;\r\n}\r\n.g-default-tab:hover,\r\n.g-default-tab:focus,\r\n.nav-pills > li.active > .g-default-tab {\r\n  border-bottom: 4px solid #4f4f4f;\r\n}\r\n.a-tab-common-clr2::after {\r\n  left: 82% !important;\r\n}\r\n.a-challenge-tab-wrp {\r\n  border: 1px solid #dee0e6;\r\n}\r\n.a-challenge-tab {\r\n  max-width: 1170px;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n.a-align-self-center {\r\n  align-self: center !important;\r\n}\r\n.a-review-application-tab-cnts-wrp {\r\n  min-height: 100vh;\r\n}\r\n.tab-inner-content {\r\n  min-height: 800px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctYXBwbGljYXRpb25zL3Jldmlldy1hcHBsaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBLGVBQWU7QUFDZjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQTs7R0FFRztBQUVIO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLHFEQUFxRDtBQUN2RDtBQUNBOztFQUVFLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0MsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiw0Q0FBb0M7RUFBcEMsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLDRDQUE0QztFQUM1QyxvQ0FBb0M7QUFDdEM7QUFDQTs7Ozs7O0VBTUUsb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7QUFDQTs7O0VBR0UsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvY2hhbGxlbmdlLWRhc2hib2FyZC9zY3JlZW5zL3Jldmlldy1hcHBsaWNhdGlvbnMvcmV2aWV3LWFwcGxpY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEtaGVhZGVyLXJldmlldy1hcHBsaWNhdGlvbiB7XHJcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5hLWNvdW50cy13cnAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpID4gYSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg3OSwgNzksIDc5LCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGNvbG9yOiAjMzYzNjM2O1xyXG59XHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmEtdGFiLXdycCA+IHVsID4gbGkuYWN0aXZlID4gYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzRmNGY0ZjtcclxufVxyXG4uYS1hd2FpdC1hcHByb3ZhbCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNzIsIDE3NywgMTkzLCAwLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JleSk7XHJcbiAgY29sb3I6ICM3ZjgzOGY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG59XHJcbi5hLWF3YWl0LXByb3Bvc2FsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMTQ4LCA2MiwgMC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjI5NDNlO1xyXG4gIGNvbG9yOiAjZDk4NTM4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxufVxyXG4uYS1hY2NlcHRpbmctc29sdXRpb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTYsIDMxLCAwLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmYmM0MWY7XHJcbiAgY29sb3I6ICM5NDc0MTI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG59XHJcbi5hLXBpbG90IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCAxNTIsIDgxLCAwLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZDk4NTE7XHJcbiAgY29sb3I6ICMxZTY2MzY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG59XHJcblxyXG4vKiBIZWFkZXIgdGFiICovXHJcbi5hLWNoYWxsZW5nZS10YWIgW2RhdGEtdG9nZ2xlPVwicGlsbFwiXSBzcGFuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi8qIC5uYXYtcGlsbHMgPiBsaSArIGxpIHtcclxuXHRtYXJnaW46IDBweDtcclxufSAqL1xyXG5cclxuLm5hdi1waWxscyA+IGxpID4gYSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbi5nLWRlZmF1bHQtdGFiIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTJweCAzMHB4IDE1cHg7XHJcbn1cclxuLm5hdi1waWxscyA+IGxpOm50aC1jaGlsZCg1KSBhIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi1waWxscyA+IGxpOm50aC1jaGlsZCgyKSBhIHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JleSkgIWltcG9ydGFudDtcclxufVxyXG4uYS10YWItY29tbW9uLWNscixcclxuLmEtc29sLXBpbG90LXRhYiB7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmOTtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpOyAqL1xyXG4gIGNvbG9yOiAjN2Y4MzhmO1xyXG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLyogYm9yZGVyLWxlZnQ6IDBweCAhaW1wb3J0YW50OyAqL1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAtMjVweDsgKi9cclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtY2hhbGxlbmdlLXRhYiAuYS10YWItY29tbW9uLWNscjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JleSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0N2RlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIGxlZnQ6IDg4JTtcclxuICBib3JkZXItYm90dG9tOiAwcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxufVxyXG4ubmF2LXBpbGxzID4gbGkuYWN0aXZlIC5hLXRhYi1jb21tb24tY2xyLFxyXG4ubmF2LXBpbGxzID4gbGkuYWN0aXZlIC5hLXRhYi1jb21tb24tY2xyOjphZnRlcixcclxuLmEtdGFiLWNvbW1vbi1jbHI6aG92ZXIsXHJcbi5hLXRhYi1jb21tb24tY2xyOmhvdmVyOmFmdGVyLFxyXG4uYS1zb2wtcGlsb3QtdGFiOmhvdmVyLFxyXG4uYS1zb2wtcGlsb3QtdGFiOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0ZjRmICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmN2Y3Zjk7XHJcbn1cclxuLmctZGVmYXVsdC10YWI6aG92ZXIsXHJcbi5nLWRlZmF1bHQtdGFiOmZvY3VzLFxyXG4ubmF2LXBpbGxzID4gbGkuYWN0aXZlID4gLmctZGVmYXVsdC10YWIge1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjNGY0ZjRmO1xyXG59XHJcblxyXG4uYS10YWItY29tbW9uLWNscjI6OmFmdGVyIHtcclxuICBsZWZ0OiA4MiUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmEtY2hhbGxlbmdlLXRhYi13cnAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUwZTY7XHJcbn1cclxuLmEtY2hhbGxlbmdlLXRhYiB7XHJcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5hLWFsaWduLXNlbGYtY2VudGVyIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmEtcmV2aWV3LWFwcGxpY2F0aW9uLXRhYi1jbnRzLXdycCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi50YWItaW5uZXItY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogODAwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-applications/review-applications.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-applications/review-applications.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ReviewApplicationsComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewApplicationsReviewApplicationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewApplicationsComponent", function () {
      return ReviewApplicationsComponent;
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


    var _application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./application.service */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/application.service.ts");

    let ReviewApplicationsComponent = class ReviewApplicationsComponent {
      constructor(_app, route) {
        this._app = _app;
        this.route = route;
        this.allApplicationCount = 0;
        this.RejectCount = 0;
        this.onHoldCount = 0;
        this.queryAll = {
          filter: {
            status: "active",
            application_status: "New"
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.queryRejected = {
          filter: {
            status: "active",
            application_status: "Reject"
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.queryHold = {
          filter: {
            status: "active",
            application_status: "Onhold"
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.route.parent.params.subscribe(params => this.challengeAnchorId = params.id);
        this.queryAll.filter.frg_anchor_id = this.challengeAnchorId;
        this.queryRejected.filter.frg_anchor_id = this.challengeAnchorId;
        this.queryHold.filter.frg_anchor_id = this.challengeAnchorId;
      }

      ngOnInit() {
        this.fetchAllApplications();
      }

      fetchAllApplications() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.isLoading = true;
          this.applicationDataAll = yield this._app.getApplications(this.queryAll);
          this.allApplicationCount = this.applicationDataAll.total_results; // console.log(this.applicationDataAll);

          this.applicationDataRejected = yield this._app.getApplications(this.queryRejected);
          this.RejectCount = this.applicationDataRejected.total_results;
          this.applicationDataonHold = yield this._app.getApplications(this.queryHold);
          this.onHoldCount = this.applicationDataonHold.total_results;
          this.isLoading = false;
        });
      }

      handleStatusChange(resp) {
        this.fetchAllApplications();
      }

      sortNewApplication(clause) {
        this.queryAll.sort = clause.target.value;
        this.fetchAllApplications();
      }

      sortOnhold(clause) {
        this.queryHold.sort = clause.target.value;
        this.fetchAllApplications();
      }

      sortRejected(clause) {
        this.queryRejected.sort = clause.target.value;
        this.fetchAllApplications();
      }

      handleApplicationAll(pageIndex) {
        this.queryAll.pg.skip = (pageIndex - 1) * this.queryAll.pg.limit;
        this.fetchAllApplications();
      }

      handleApplicationOnhold(pageIndex) {
        this.queryHold.pg.skip = (pageIndex - 1) * this.queryHold.pg.limit;
        this.fetchAllApplications();
      }

      handleApplicationReject(pageIndex) {
        this.queryRejected.pg.skip = (pageIndex - 1) * this.queryRejected.pg.limit;
        this.fetchAllApplications();
      }

    };

    ReviewApplicationsComponent.ctorParameters = () => [{
      type: _application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    ReviewApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-review-applications",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review-applications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-applications/review-applications.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review-applications.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-applications/review-applications.component.css")).default]
    })], ReviewApplicationsComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/proposal-details-modal/proposal-details-modal.component.css":
  /*!*******************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/proposal-details-modal/proposal-details-modal.component.css ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsProposalDetailsModalProposalDetailsModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-cnt1-flex-item {\r\n    width:100%;\r\n    max-width:489px;\r\n}\r\n\r\nlabel{\r\n    font-size: 0.631rem;\r\n    line-height: 1.6;\r\n}\r\n\r\nlabel .field-desp{\r\n    opacity: 0.7;\r\n    font-weight: 300;\r\n}\r\n\r\n.a-budget-wrp {\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n}\r\n\r\n.a-budget-total-wrp {\r\n    border-top:1px solid #DEDEDE;\r\n}\r\n\r\nhr {\r\n    border-top-color:#000000 !important;\r\n}\r\n\r\n.a-col2-title{\r\n    color:#BDBDBD;\r\n}\r\n\r\n.a-s1-cnt-wrp {\r\n    border: 1.03191px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 10.3191px;\r\n}\r\n\r\n.a-sub-cnt-wrp {\r\n    border: 1.03191px solid #0D439F;\r\n    box-sizing: border-box;\r\n    border-radius: 6.19149px;\r\n}\r\n\r\n.a-download-file-btn {\r\n    border: 1px solid #999999 !important; \r\n}\r\n\r\n.a-s1-cnt-wrp {\r\n   margin-top:-11px;\r\n}\r\n\r\n.a-col2-title-wrp{\r\n    background-color: white;\r\n    margin-left: 14px;\r\n}\r\n\r\n.a-ongoing {\r\n    color: #947412;\r\n    background: rgba(251, 196, 31, 0.1) !important;\r\n    border: 1px solid #FBC41F !important;\r\n}\r\n\r\n.a-yet-to-start {\r\n    background: rgba(172, 177, 193, 0.1) !important;\r\n    border: 1px solid #ACB1C1 !important;\r\n}\r\n\r\n.a-align-items-stretch {\r\n    -webkit-box-align: stretch !important;\r\n            align-items: stretch !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctcHJvcG9zYWwvY29tcG9uZW50cy9wcm9wb3NhbC1kZXRhaWxzLW1vZGFsL3Byb3Bvc2FsLWRldGFpbHMtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUNBO0dBQ0csZ0JBQWdCO0FBQ25COztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCw4Q0FBOEM7SUFDOUMsb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksK0NBQStDO0lBQy9DLG9DQUFvQztBQUN4Qzs7QUFDQTtJQUVJLHFDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvY2hhbGxlbmdlLWRhc2hib2FyZC9zY3JlZW5zL3Jldmlldy1wcm9wb3NhbC9jb21wb25lbnRzL3Byb3Bvc2FsLWRldGFpbHMtbW9kYWwvcHJvcG9zYWwtZGV0YWlscy1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEtY250MS1mbGV4LWl0ZW0ge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDo0ODlweDtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDAuNjMxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxubGFiZWwgLmZpZWxkLWRlc3B7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYS1idWRnZXQtd3JwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hLWJ1ZGdldC10b3RhbC13cnAge1xyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgI0RFREVERTtcclxufVxyXG5ociB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG4uYS1jb2wyLXRpdGxle1xyXG4gICAgY29sb3I6I0JEQkRCRDtcclxufVxyXG4uYS1zMS1jbnQtd3JwIHtcclxuICAgIGJvcmRlcjogMS4wMzE5MXB4IHNvbGlkICNERURFREU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAuMzE5MXB4O1xyXG59XHJcbi5hLXN1Yi1jbnQtd3JwIHtcclxuICAgIGJvcmRlcjogMS4wMzE5MXB4IHNvbGlkICMwRDQzOUY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNi4xOTE0OXB4O1xyXG59XHJcbi5hLWRvd25sb2FkLWZpbGUtYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTkgIWltcG9ydGFudDsgXHJcbn1cclxuLmEtczEtY250LXdycCB7XHJcbiAgIG1hcmdpbi10b3A6LTExcHg7XHJcbn1cclxuLmEtY29sMi10aXRsZS13cnB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcbi5hLW9uZ29pbmcge1xyXG4gICAgY29sb3I6ICM5NDc0MTI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTk2LCAzMSwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZCQzQxRiAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXlldC10by1zdGFydCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuMSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBQ0IxQzEgIWltcG9ydGFudDtcclxufVxyXG4uYS1hbGlnbi1pdGVtcy1zdHJldGNoIHtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/proposal-details-modal/proposal-details-modal.component.ts":
  /*!******************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/proposal-details-modal/proposal-details-modal.component.ts ***!
    \******************************************************************************************************************************************/

  /*! exports provided: ProposalDetailsModalComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsProposalDetailsModalProposalDetailsModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProposalDetailsModalComponent", function () {
      return ProposalDetailsModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ProposalDetailsModalComponent = class ProposalDetailsModalComponent {
      constructor() {}

      ngOnInit() {}

    };
    ProposalDetailsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-proposal-details-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./proposal-details-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/proposal-details-modal/proposal-details-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./proposal-details-modal.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/proposal-details-modal/proposal-details-modal.component.css")).default]
    })], ProposalDetailsModalComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-all/review-proposal-all.component.css":
  /*!*************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-all/review-proposal-all.component.css ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalAllReviewProposalAllComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-cnt1-flex-item {\r\n\twidth: 100%;\r\n\tmax-width: 489px;\r\n}\r\nlabel {\r\n\tfont-size: 0.631rem;\r\n\tline-height: 1.6;\r\n}\r\nlabel .field-desp {\r\n\topacity: 0.7;\r\n\tfont-weight: 300;\r\n}\r\n.a-budget-wrp {\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-budget-total-wrp {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\nhr {\r\n\tborder-top-color: #000000 !important;\r\n}\r\n.a-col2-title {\r\n\tcolor: #bdbdbd;\r\n}\r\n.a-s1-cnt-wrp {\r\n\tborder: 1.03191px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 10.3191px;\r\n}\r\n.a-sub-cnt-wrp {\r\n\tborder: 1.03191px solid #0d439f;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 6.19149px;\r\n}\r\n.a-download-file-btn {\r\n\tborder: 1px solid #999999 !important;\r\n}\r\n.a-s1-cnt-wrp {\r\n\tmargin-top: -11px;\r\n}\r\n.a-col2-title-wrp {\r\n\tbackground-color: white;\r\n\tmargin-left: 14px;\r\n}\r\n.a-ongoing {\r\n\tcolor: #947412;\r\n\tbackground: rgba(251, 196, 31, 0.1) !important;\r\n\tborder: 1px solid #fbc41f !important;\r\n}\r\n.a-yet-to-start {\r\n\tbackground: rgba(172, 177, 193, 0.1) !important;\r\n\tborder: 1px solid #acb1c1 !important;\r\n}\r\n.a-align-items-stretch {\r\n\t-webkit-box-align: stretch !important;\r\n\t        align-items: stretch !important;\r\n}\r\n.a-send-eoi-btn:disabled {\r\n\tbackground: #dedede !important;\r\n\tcolor: #4f4f4f !important;\r\n\topacity: 0.5 !important;\r\n}\r\n.a-shortlist-btn {\r\n\tborder: 1px solid #2d9851;\r\n}\r\n.a-modal-obhold-btn {\r\n\tcolor: #947412 !important;\r\n\tbackground: rgba(251, 196, 31, 0.1) !important;\r\n\tborder: 1px solid #fbc41f !important;\r\n}\r\n.a-confirm-btn {\r\n\tborder: 1px solid #2d9851 !important;\r\n\tcolor: #ffffff !important;\r\n\tbackground-color: #2d9851 !important;\r\n}\r\n.a-review-btn {\r\n\tborder: 1px solid #999999 !important;\r\n}\r\n.a-pre-pilot-btn {\r\n\tcolor: #947412;\r\n\tbackground: rgba(251, 196, 31, 0.1);\r\n\tborder: 1px solid #fbc41f;\r\n}\r\n.a-modal-warning-cnt {\r\n\tmax-width: 394px;\r\n\twidth: 100%;\r\n}\r\n.a-review-appl-img-wrp img {\r\n\tmin-width: 88px;\r\n\tborder-radius: 6px;\r\n}\r\n.status-pill {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 10px 30px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid #acb1c1;\r\n\tborder-radius: 100px;\r\n\tpadding-left: 36px;\r\n}\r\n/* .status-pill.prepilot {\r\n\tcolor: #7a600f;\r\n\tborder: 1px solid #fbc41f;\r\n\tbackground: rgba(251, 196, 31, 0.1);\r\n\tpadding-left: 36px;\r\n} */\r\n.status-pill.prepilot::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #fbc41f;\r\n}\r\n.status-pill.pilotready::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttop: 13px;\r\n\tleft: 18px;\r\n\tborder-radius: 50%;\r\n\tbackground: #19c8a6;\r\n}\r\n.a-col2-title-wrp .a-col2-title {\r\n\tposition: relative;\r\n\tz-index: 10;\r\n\tbackground: #fff;\r\n\tdisplay: inline-block;\r\n}\r\n.a-review-appl-img-wrp img {\r\n\tmin-width: 88px;\r\n\tborder-radius: 6px;\r\n}\r\n/* Modal css */\r\n.a-cnt1-flex-item {\r\n\twidth: 60%;\r\n}\r\n.a-cnt2-flex-item {\r\n\twidth: 40%;\r\n}\r\nlabel {\r\n\tfont-size: 0.631rem;\r\n\tline-height: 1.6;\r\n}\r\nlabel .field-desp {\r\n\topacity: 0.7;\r\n\tfont-weight: 300;\r\n}\r\n.a-budget-wrp {\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-budget-total-wrp {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\nhr {\r\n\tborder-top-color: #000000 !important;\r\n}\r\n.a-col2-title {\r\n\tcolor: #bdbdbd;\r\n}\r\n.a-s1-cnt-wrp {\r\n\tborder: 1.03191px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 10.3191px;\r\n}\r\n.a-sub-cnt-wrp {\r\n\tborder: 1.03191px solid #0d439f;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 6.19149px;\r\n}\r\n.a-download-file-btn {\r\n\tborder: 1px solid #999999 !important;\r\n}\r\n.a-s1-cnt-wrp {\r\n\tmargin-top: -11px;\r\n}\r\n.a-col2-title-wrp {\r\n\tbackground-color: white;\r\n\tmargin-left: 14px;\r\n}\r\n.a-ongoing {\r\n\tcolor: #947412;\r\n\tbackground: rgba(251, 196, 31, 0.1) !important;\r\n\tborder: 1px solid #fbc41f !important;\r\n}\r\n.a-yet-to-start {\r\n\tbackground: rgba(172, 177, 193, 0.1) !important;\r\n\tborder: 1px solid #acb1c1 !important;\r\n}\r\n.a-align-items-stretch {\r\n\t-webkit-box-align: stretch !important;\r\n\t        align-items: stretch !important;\r\n}\r\n.a-budget-values {\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n\twidth: 89px;\r\n}\r\n.a-modal-buget-flex-item1 {\r\n\twidth: 60%;\r\n}\r\n.a-modal-buget-flex-item2 {\r\n\twidth: 40%;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n.upload-wrapper {\r\n\tborder-radius: 4px;\r\n\toverflow: hidden;\r\n}\r\n.upload-inner {\r\n\tpadding: 30px;\r\n}\r\n.add-doc input[type=\"file\"] {\r\n\tdisplay: none;\r\n}\r\n.add-doc {\r\n\tmargin-bottom: 15px;\r\n}\r\n.add-doc label {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 4px;\r\n\tcursor: pointer;\r\n\tpadding: 10px 15px;\r\n}\r\n.add-doc label {\r\n\tcolor: #2d9851;\r\n\tfont-weight: 500;\r\n}\r\n.file-item {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\tpadding: 8px;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 4px;\r\n\tfont-size: 12px;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\tmargin-bottom: 6px;\r\n}\r\n.file-col {\r\n\tcolor: #4f4f4f;\r\n\tpadding-right: 5px;\r\n\tflex-basis: 80%;\r\n}\r\n.file-col i {\r\n\tfont-size: 14px;\r\n\tmargin-right: 6px;\r\n}\r\n.remove-col {\r\n\tflex-basis: 20%;\r\n}\r\n.act-span {\r\n\tpadding: 3px 6px;\r\n\tfont-size: 16px;\r\n\tcursor: pointer;\r\n}\r\n.act-span :hover {\r\n\tcolor: #f8483d;\r\n}\r\n.upload-wrapper.active {\r\n\tpointer-events: none;\r\n}\r\n.close {\r\n\tfont-size: 28px;\r\n\tborder: 1px solid !important;\r\n\tpadding: 0px 5px;\r\n\tborder-radius: 4px;\r\n}\r\n.reason-reject-btn{\r\n\tbackground-color: rgba(248, 72,61, 0.1);\r\n  color:#F8483D;\r\n}\r\n.textarea-reason {\r\n  resize: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctcHJvcG9zYWwvY29tcG9uZW50cy9yZXZpZXctcHJvcG9zYWwtYWxsL3Jldmlldy1wcm9wb3NhbC1hbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1Q7Q0FDQyxzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsK0JBQStCO0NBQy9CLHNCQUFzQjtDQUN0Qix3QkFBd0I7QUFDekI7QUFDQTtDQUNDLCtCQUErQjtDQUMvQixzQkFBc0I7Q0FDdEIsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsY0FBYztDQUNkLDhDQUE4QztDQUM5QyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLCtDQUErQztDQUMvQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUVDLHFDQUErQjtTQUEvQiwrQkFBK0I7QUFDaEM7QUFFQTtDQUNDLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIsdUJBQXVCO0FBQ3hCO0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qiw4Q0FBOEM7Q0FDOUMsb0NBQW9DO0FBQ3JDO0FBQ0E7Q0FDQyxvQ0FBb0M7Q0FDcEMseUJBQXlCO0NBQ3pCLG9DQUFvQztBQUNyQztBQUNBO0NBQ0Msb0NBQW9DO0FBQ3JDO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsbUNBQW1DO0NBQ25DLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLG9CQUFvQjtDQUNwQixrQkFBa0I7QUFDbkI7QUFFQTs7Ozs7R0FLRztBQUVIO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25CO0FBRUEsY0FBYztBQUNkO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG9DQUFvQztBQUNyQztBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQywrQkFBK0I7Q0FDL0Isc0JBQXNCO0NBQ3RCLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsK0JBQStCO0NBQy9CLHNCQUFzQjtDQUN0Qix3QkFBd0I7QUFDekI7QUFDQTtDQUNDLG9DQUFvQztBQUNyQztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsOENBQThDO0NBQzlDLG9DQUFvQztBQUNyQztBQUNBO0NBQ0MsK0NBQStDO0NBQy9DLG9DQUFvQztBQUNyQztBQUNBO0NBRUMscUNBQStCO1NBQS9CLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7QUFDQTtDQUNDLFVBQVU7QUFDWDtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQix1U0FBdVM7Q0FDdlMsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IsdUNBQXVDO0FBQ3hDO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7QUFFQTtDQUNDLGFBQWE7QUFDZDtBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLHdCQUF1QjtTQUF2Qix1QkFBdUI7Q0FDdkIseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYixZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YseUJBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQix5QkFBOEI7U0FBOUIsOEJBQThCO0NBQzlCLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGVBQWU7QUFDaEI7QUFFQTtDQUNDLGNBQWM7QUFDZjtBQUVBO0NBQ0Msb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsNEJBQTRCO0NBQzVCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLHVDQUF1QztFQUN0QyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvcmV2aWV3LXByb3Bvc2FsL2NvbXBvbmVudHMvcmV2aWV3LXByb3Bvc2FsLWFsbC9yZXZpZXctcHJvcG9zYWwtYWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDYXJkICovXHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLXdycCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLWZvb3RlciB7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgxNzIsIDE3NywgMTkzLCAwLjEpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzE7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmEtY250MS1mbGV4LWl0ZW0ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1heC13aWR0aDogNDg5cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuXHRmb250LXNpemU6IDAuNjMxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbmxhYmVsIC5maWVsZC1kZXNwIHtcclxuXHRvcGFjaXR5OiAwLjc7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmEtYnVkZ2V0LXdycCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYS1idWRnZXQtdG90YWwtd3JwIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG5ociB7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWNvbDItdGl0bGUge1xyXG5cdGNvbG9yOiAjYmRiZGJkO1xyXG59XHJcbi5hLXMxLWNudC13cnAge1xyXG5cdGJvcmRlcjogMS4wMzE5MXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAxMC4zMTkxcHg7XHJcbn1cclxuLmEtc3ViLWNudC13cnAge1xyXG5cdGJvcmRlcjogMS4wMzE5MXB4IHNvbGlkICMwZDQzOWY7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA2LjE5MTQ5cHg7XHJcbn1cclxuLmEtZG93bmxvYWQtZmlsZS1idG4ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTkgIWltcG9ydGFudDtcclxufVxyXG4uYS1zMS1jbnQtd3JwIHtcclxuXHRtYXJnaW4tdG9wOiAtMTFweDtcclxufVxyXG4uYS1jb2wyLXRpdGxlLXdycCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0bWFyZ2luLWxlZnQ6IDE0cHg7XHJcbn1cclxuLmEtb25nb2luZyB7XHJcblx0Y29sb3I6ICM5NDc0MTI7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTEsIDE5NiwgMzEsIDAuMSkgIWltcG9ydGFudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmJjNDFmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEteWV0LXRvLXN0YXJ0IHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuMSkgIWltcG9ydGFudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtYWxpZ24taXRlbXMtc3RyZXRjaCB7XHJcblx0LW1zLWZsZXgtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xyXG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLXNlbmQtZW9pLWJ0bjpkaXNhYmxlZCB7XHJcblx0YmFja2dyb3VuZDogI2RlZGVkZSAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjNGY0ZjRmICFpbXBvcnRhbnQ7XHJcblx0b3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLXNob3J0bGlzdC1idG4ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyZDk4NTE7XHJcbn1cclxuXHJcbi5hLW1vZGFsLW9iaG9sZC1idG4ge1xyXG5cdGNvbG9yOiAjOTQ3NDEyICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTEsIDE5NiwgMzEsIDAuMSkgIWltcG9ydGFudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmJjNDFmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtY29uZmlybS1idG4ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyZDk4NTEgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyZDk4NTEgIWltcG9ydGFudDtcclxufVxyXG4uYS1yZXZpZXctYnRuIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtcHJlLXBpbG90LWJ0biB7XHJcblx0Y29sb3I6ICM5NDc0MTI7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTEsIDE5NiwgMzEsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZiYzQxZjtcclxufVxyXG4uYS1tb2RhbC13YXJuaW5nLWNudCB7XHJcblx0bWF4LXdpZHRoOiAzOTRweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmEtcmV2aWV3LWFwcGwtaW1nLXdycCBpbWcge1xyXG5cdG1pbi13aWR0aDogODhweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAxMHB4IDMwcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0YmFja2dyb3VuZDogI2Y3ZjdmOTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMzZweDtcclxufVxyXG5cclxuLyogLnN0YXR1cy1waWxsLnByZXBpbG90IHtcclxuXHRjb2xvcjogIzdhNjAwZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmJjNDFmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTYsIDMxLCAwLjEpO1xyXG5cdHBhZGRpbmctbGVmdDogMzZweDtcclxufSAqL1xyXG5cclxuLnN0YXR1cy1waWxsLnByZXBpbG90OjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdHRvcDogMTNweDtcclxuXHRsZWZ0OiAxOHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZmJjNDFmO1xyXG59XHJcblxyXG4uc3RhdHVzLXBpbGwucGlsb3RyZWFkeTo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMHB4O1xyXG5cdGhlaWdodDogMTBweDtcclxuXHR0b3A6IDEzcHg7XHJcblx0bGVmdDogMThweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZDogIzE5YzhhNjtcclxufVxyXG5cclxuLmEtY29sMi10aXRsZS13cnAgLmEtY29sMi10aXRsZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYS1yZXZpZXctYXBwbC1pbWctd3JwIGltZyB7XHJcblx0bWluLXdpZHRoOiA4OHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLyogTW9kYWwgY3NzICovXHJcbi5hLWNudDEtZmxleC1pdGVtIHtcclxuXHR3aWR0aDogNjAlO1xyXG59XHJcbi5hLWNudDItZmxleC1pdGVtIHtcclxuXHR3aWR0aDogNDAlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcblx0Zm9udC1zaXplOiAwLjYzMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG5sYWJlbCAuZmllbGQtZGVzcCB7XHJcblx0b3BhY2l0eTogMC43O1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5hLWJ1ZGdldC13cnAge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmEtYnVkZ2V0LXRvdGFsLXdycCB7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuaHIge1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG4uYS1jb2wyLXRpdGxlIHtcclxuXHRjb2xvcjogI2JkYmRiZDtcclxufVxyXG4uYS1zMS1jbnQtd3JwIHtcclxuXHRib3JkZXI6IDEuMDMxOTFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAuMzE5MXB4O1xyXG59XHJcbi5hLXN1Yi1jbnQtd3JwIHtcclxuXHRib3JkZXI6IDEuMDMxOTFweCBzb2xpZCAjMGQ0MzlmO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNi4xOTE0OXB4O1xyXG59XHJcbi5hLWRvd25sb2FkLWZpbGUtYnRuIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtczEtY250LXdycCB7XHJcblx0bWFyZ2luLXRvcDogLTExcHg7XHJcbn1cclxuLmEtY29sMi10aXRsZS13cnAge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcbi5hLW9uZ29pbmcge1xyXG5cdGNvbG9yOiAjOTQ3NDEyO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTYsIDMxLCAwLjEpICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZiYzQxZiAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXlldC10by1zdGFydCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgxNzIsIDE3NywgMTkzLCAwLjEpICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2FjYjFjMSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWFsaWduLWl0ZW1zLXN0cmV0Y2gge1xyXG5cdC1tcy1mbGV4LWFsaWduOiBlbmQgIWltcG9ydGFudDtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWJ1ZGdldC12YWx1ZXMge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0d2lkdGg6IDg5cHg7XHJcbn1cclxuLmEtbW9kYWwtYnVnZXQtZmxleC1pdGVtMSB7XHJcblx0d2lkdGg6IDYwJTtcclxufVxyXG4uYS1tb2RhbC1idWdldC1mbGV4LWl0ZW0yIHtcclxuXHR3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzEzJyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCAxMyA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTIuODE3NCAxLjQxTDExLjQxOTEgLTYuNzEzNmUtMDhMNi44NjczOCA0LjU4TDIuMzE1NjMgLTUuMDQyMzRlLTA3TDAuOTE3MzgyIDEuNDFMNi44NjczOCA3LjQxTDEyLjgxNzQgMS40MVonIGZpbGw9JyUyMzRGNEY0RicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teDogOTAlO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teTogMjBweDtcclxuXHRwYWRkaW5nOiAxMHB4IDI1cHggMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVwbG9hZC13cmFwcGVyIHtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnVwbG9hZC1pbm5lciB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmFkZC1kb2MgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hZGQtZG9jIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uYWRkLWRvYyBsYWJlbCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5hZGQtZG9jIGxhYmVsIHtcclxuXHRjb2xvcjogIzJkOTg1MTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZmlsZS1pdGVtIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBhZGRpbmc6IDhweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0bWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uZmlsZS1jb2wge1xyXG5cdGNvbG9yOiAjNGY0ZjRmO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHRmbGV4LWJhc2lzOiA4MCU7XHJcbn1cclxuXHJcbi5maWxlLWNvbCBpIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5yZW1vdmUtY29sIHtcclxuXHRmbGV4LWJhc2lzOiAyMCU7XHJcbn1cclxuXHJcbi5hY3Qtc3BhbiB7XHJcblx0cGFkZGluZzogM3B4IDZweDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0LXNwYW4gOmhvdmVyIHtcclxuXHRjb2xvcjogI2Y4NDgzZDtcclxufVxyXG5cclxuLnVwbG9hZC13cmFwcGVyLmFjdGl2ZSB7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZzogMHB4IDVweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5yZWFzb24tcmVqZWN0LWJ0bntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgNzIsNjEsIDAuMSk7XHJcbiAgY29sb3I6I0Y4NDgzRDtcclxufVxyXG4udGV4dGFyZWEtcmVhc29uIHtcclxuICByZXNpemU6IG5vbmU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-all/review-proposal-all.component.ts":
  /*!************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-all/review-proposal-all.component.ts ***!
    \************************************************************************************************************************************/

  /*! exports provided: ReviewProposalAllComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalAllReviewProposalAllComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewProposalAllComponent", function () {
      return ReviewProposalAllComponent;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _dashboardmain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../dashboardmain.service */
    "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");

    let ReviewProposalAllComponent = class ReviewProposalAllComponent {
      constructor(_dash, toastr, router, LoggedInUserStateModel) {
        this._dash = _dash;
        this.toastr = toastr;
        this.router = router;
        this.LoggedInUserStateModel = LoggedInUserStateModel; // @Output() onPrePilot = new EventEmitter<any>();

        this.onPilot = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.statusValue = "";
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
        this.uid = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
      }

      ngOnInit() {
        if (this.proposalData.proposal_stage === "New") this.statusValue = "";
      }

      ngOnChanges() {
        if (this.proposalData.pilot_iic) {
          this.fileNameArr = this.proposalData.pilot_iic.map(d => this.extractFileName(d));
          this.fileArr = this.proposalData.pilot_iic;
        }
      }

      extractFileName(path) {
        let filename = path.replace(/^.*[\\\/]/, "");
        return filename;
      }

      updateToPilot() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.pilotLoading = true;
          let resp = yield this._dash.updateProposalStatus(this.proposalData.id, "Pilot Ready");
          this.toastr.success("", "Proposal moved to Pilot Ready");
          this.pilotLoading = false;
          $("#proposalModal_".concat(this.uid)).modal("hide");
          $("#initiatePilot_".concat(this.uid)).modal("hide");
          this.onPilot.emit(resp);
          var id = this.proposalData.frg_anchor_id.id;
          this.loggedInUser$.subscribe(resp => {
            this.loggedInUser = resp.LoggedInUser; // console.log(this.loggedInUser)
          });
          this.router.navigateByUrl("/seeker/user/".concat(this.loggedInUser.slug, "/dashboard/challenge/").concat(id, "/pilots"));
        });
      }

      updateToPrePilot() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.prePilotLoading = true;
          let resp = yield this._dash.updateProposalStatus(this.proposalData.id, "Pre-Pilot");
          this.toastr.success("", "Proposal moved to Pre Pilot");
          this.prePilotLoading = false;
          $("#proposalModal_".concat(this.uid)).modal("hide");
          $("#initiatePrePilot_".concat(this.uid)).modal("hide");
          this.onPilot.emit(resp);
        });
      }

      updateStatus(e) {
        if (e.target.value === "Pilot Ready") {
          $("#initiatePilot_".concat(this.uid)).modal("show");
        }

        if (e.target.value === "Pre-Pilot") {
          $("#initiatePrePilot_".concat(this.uid)).modal("show");
        }

        if (e.target.value === "Reject") {
          $("#rejectProposal_".concat(this.uid)).modal("show");
        }
      }

      refreshCard() {
        this.statusValue = "";
      }

      uploadFile(uploadedFile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (uploadedFile.length) {
            let formData = new FormData();
            formData.append("slug", this.proposalData.id);
            formData.append("pilot_iic", uploadedFile[0]);
            this.loading = true;
            let resp; // console.log(uploadedFile[0])

            if (this.proposalData.pilot_icc) {
              resp = yield this._dash.addToIICUpload(formData);
            } else {
              resp = yield this._dash.PilotIIcUpload(formData);
            }

            this.proposalData.pilot_iic = resp.data[0].pilot_iic;
            this.fileNameArr = this.proposalData.pilot_iic.map(d => this.extractFileName(d));
            this.fileArr = this.proposalData.pilot_iic;
            this.loading = false;
          }
        });
      }

      removeFile(removeAt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (~removeAt) {
            this.loading = true;
            let resp = yield this._dash.removeFromIICUpload({
              slug: {
                id: this.proposalData.id
              },
              data: {
                remove_paths: [this.fileArr[removeAt]]
              }
            });
            this.proposalData.pilot_iic = resp.data[0].pilot_iic;
            this.fileNameArr = this.proposalData.pilot_iic.map(d => this.extractFileName(d));
            this.fileArr = this.proposalData.pilot_iic;
            this.loading = false;
          }
        });
      }

      rejectProposal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.rejectProposalLoading = true;
          var post_data = {
            proposal_id: this.proposalData.id,
            innovator_id: this.proposalData.frg_provider_id.frg_user_id,
            innovator_name: this.proposalData.frg_eoi_id.frg_application_id.frg_provider_id.fullname,
            proposal_name: this.proposalData.frg_eoi_id.frg_application_id.name,
            rejection_message: this.rejection_msg,
            city_name: this.proposalData.frg_anchor_id.frg_seeker_id.frg_smart_city_id.name,
            seeker_name: this.proposalData.frg_anchor_id.frg_seeker_id.fullname,
            user_slug: this.proposalData.frg_provider_id.slug,
            anchor_id: this.proposalData.frg_anchor_id.id
          };
          let resp = yield this._dash.rejecProposal(post_data);
          this.toastr.success("", "Proposal Rejected successfully");
          this.rejectProposalLoading = false;
          $("#reject_".concat(this.uid)).modal("hide");
        });
      }

    };

    ReviewProposalAllComponent.ctorParameters = () => [{
      type: _dashboardmain_service__WEBPACK_IMPORTED_MODULE_3__["DashboardmainService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserStateModel"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserState"])], ReviewProposalAllComponent.prototype, "loggedInUser$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ReviewProposalAllComponent.prototype, "itemId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ReviewProposalAllComponent.prototype, "proposalData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ReviewProposalAllComponent.prototype, "onPilot", void 0);
    ReviewProposalAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-review-proposal-all",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review-proposal-all.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-all/review-proposal-all.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review-proposal-all.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-all/review-proposal-all.component.css")).default]
    })], ReviewProposalAllComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-awaiting/review-proposal-awaiting.component.css":
  /*!***********************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-awaiting/review-proposal-awaiting.component.css ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalAwaitingReviewProposalAwaitingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n.a-review-appl-img-wrp img {\r\n\tmin-width: 88px;\r\n\tborder-radius: 6px;\r\n}\r\n.status-pill {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 10px 30px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid #acb1c1;\r\n\tborder-radius: 100px;\r\n\tpadding-left: 36px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctcHJvcG9zYWwvY29tcG9uZW50cy9yZXZpZXctcHJvcG9zYWwtYXdhaXRpbmcvcmV2aWV3LXByb3Bvc2FsLWF3YWl0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNUO0NBQ0Msc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQix1U0FBdVM7Q0FDdlMsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IsdUNBQXVDO0FBQ3hDO0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvcmV2aWV3LXByb3Bvc2FsL2NvbXBvbmVudHMvcmV2aWV3LXByb3Bvc2FsLWF3YWl0aW5nL3Jldmlldy1wcm9wb3NhbC1hd2FpdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2FyZCAqL1xyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC13cnAge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYS1yZXZpZXctYXBwbGljYXRpb24tY2FyZC1mb290ZXIge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi5hLXN0YXR1cy1zZWxlY3Qge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTMnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDEzIDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xMi44MTc0IDEuNDFMMTEuNDE5MSAtNi43MTM2ZS0wOEw2Ljg2NzM4IDQuNThMMi4zMTU2MyAtNS4wNDIzNGUtMDdMMC45MTczODIgMS40MUw2Ljg2NzM4IDcuNDFMMTIuODE3NCAxLjQxWicgZmlsbD0nJTIzNEY0RjRGJy8lM0UlM0Mvc3ZnJTNFJTBBXCIpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi14OiA5MCU7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi15OiAyMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMjVweCAxMHB4IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmEtcmV2aWV3LWFwcGwtaW1nLXdycCBpbWcge1xyXG5cdG1pbi13aWR0aDogODhweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAxMHB4IDMwcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0YmFja2dyb3VuZDogI2Y3ZjdmOTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiMWMxO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMzZweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-awaiting/review-proposal-awaiting.component.ts":
  /*!**********************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-awaiting/review-proposal-awaiting.component.ts ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: ReviewProposalAwaitingComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalAwaitingReviewProposalAwaitingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewProposalAwaitingComponent", function () {
      return ReviewProposalAwaitingComponent;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../environments/environment */
    "./src/environments/environment.ts");

    let ReviewProposalAwaitingComponent = class ReviewProposalAwaitingComponent {
      constructor() {
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url;
      }

      ngOnInit() {// console.log(this.eoiData);
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ReviewProposalAwaitingComponent.prototype, "eoiData", void 0);
    ReviewProposalAwaitingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-review-proposal-awaiting",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review-proposal-awaiting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-awaiting/review-proposal-awaiting.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review-proposal-awaiting.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-awaiting/review-proposal-awaiting.component.css")).default]
    })], ReviewProposalAwaitingComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/intitate-pilot/intitate-pilot.component.css":
  /*!***************************************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/intitate-pilot/intitate-pilot.component.css ***!
    \***************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalReceivedComponentsIntitatePilotIntitatePilotComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-send-eoi-btn:disabled {\r\n    background: #DEDEDE !important;\r\n    color: #4F4F4F !important;\r\n    opacity: 0.5 !important;\r\n}\r\n\r\n.a-shortlist-btn {\r\n    border: 1px solid #2D9851;\r\n}\r\n\r\n.a-modal-obhold-btn {\r\n    color: #947412 !important;\r\n    background: rgba(251, 196, 31, 0.1) !important;\r\n    border: 1px solid #FBC41F !important;\r\n}\r\n\r\n.a-confirm-btn {\r\n    border: 1px solid #2D9851 !important;\r\n    color: #ffffff !important;\r\n    background-color: #2D9851 !important;\r\n}\r\n\r\n.a-review-btn {\r\n    border: 1px solid #999999 !important;\r\n}\r\n\r\n.a-pre-pilot-btn {\r\n    color: #947412;\r\n    background: rgba(251, 196, 31, 0.1);\r\n    border: 1px solid #FBC41F;\r\n}\r\n\r\n.a-modal-warning-cnt {\r\n    max-width:394px;\r\n    width:100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctcHJvcG9zYWwvY29tcG9uZW50cy9yZXZpZXctcHJvcG9zYWwtcmVjZWl2ZWQvY29tcG9uZW50cy9pbnRpdGF0ZS1waWxvdC9pbnRpdGF0ZS1waWxvdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsOENBQThDO0lBQzlDLG9DQUFvQztBQUN4Qzs7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksY0FBYztJQUNkLG1DQUFtQztJQUNuQyx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctcHJvcG9zYWwvY29tcG9uZW50cy9yZXZpZXctcHJvcG9zYWwtcmVjZWl2ZWQvY29tcG9uZW50cy9pbnRpdGF0ZS1waWxvdC9pbnRpdGF0ZS1waWxvdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEtc2VuZC1lb2ktYnRuOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNERURFREUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNEY0RjRGICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmEtc2hvcnRsaXN0LWJ0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMkQ5ODUxO1xyXG59XHJcblxyXG4uYS1tb2RhbC1vYmhvbGQtYnRuIHtcclxuICAgIGNvbG9yOiAjOTQ3NDEyICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTk2LCAzMSwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZCQzQxRiAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWNvbmZpcm0tYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyRDk4NTEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ5ODUxICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtcmV2aWV3LWJ0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtcHJlLXBpbG90LWJ0biB7XHJcbiAgICBjb2xvcjogIzk0NzQxMjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTYsIDMxLCAwLjEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZCQzQxRjtcclxufVxyXG4uYS1tb2RhbC13YXJuaW5nLWNudCB7XHJcbiAgICBtYXgtd2lkdGg6Mzk0cHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/intitate-pilot/intitate-pilot.component.ts":
  /*!**************************************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/intitate-pilot/intitate-pilot.component.ts ***!
    \**************************************************************************************************************************************************************/

  /*! exports provided: IntitatePilotComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalReceivedComponentsIntitatePilotIntitatePilotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntitatePilotComponent", function () {
      return IntitatePilotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let IntitatePilotComponent = class IntitatePilotComponent {
      constructor() {}

      ngOnInit() {}

    };
    IntitatePilotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intitate-pilot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intitate-pilot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/intitate-pilot/intitate-pilot.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intitate-pilot.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/intitate-pilot/intitate-pilot.component.css")).default]
    })], IntitatePilotComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/pilot-ready-modal/pilot-ready-modal.component.css":
  /*!*********************************************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/pilot-ready-modal/pilot-ready-modal.component.css ***!
    \*********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalReceivedComponentsPilotReadyModalPilotReadyModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-user-type {\r\n    width:150px;\r\n}\r\n.a-cnt {\r\n    color: rgba(153, 153, 153, 0.8);\r\n}\r\n.a-modal-content {\r\n    border-radius: 10px !important;\r\n}\r\n.a-ongoing {\r\n    color: #947412;\r\n    background: rgba(251, 196, 31, 0.1) !important;\r\n    border: 1px solid #FBC41F !important;\r\n}\r\n.a-yet-to-start {\r\n    background: rgba(172, 177, 193, 0.1) !important;\r\n    border: 1px solid #ACB1C1 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctcHJvcG9zYWwvY29tcG9uZW50cy9yZXZpZXctcHJvcG9zYWwtcmVjZWl2ZWQvY29tcG9uZW50cy9waWxvdC1yZWFkeS1tb2RhbC9waWxvdC1yZWFkeS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksY0FBYztJQUNkLDhDQUE4QztJQUM5QyxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLCtDQUErQztJQUMvQyxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvY2hhbGxlbmdlLWRhc2hib2FyZC9zY3JlZW5zL3Jldmlldy1wcm9wb3NhbC9jb21wb25lbnRzL3Jldmlldy1wcm9wb3NhbC1yZWNlaXZlZC9jb21wb25lbnRzL3BpbG90LXJlYWR5LW1vZGFsL3BpbG90LXJlYWR5LW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYS11c2VyLXR5cGUge1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbn1cclxuLmEtY250IHtcclxuICAgIGNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuOCk7XHJcbn1cclxuLmEtbW9kYWwtY29udGVudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtb25nb2luZyB7XHJcbiAgICBjb2xvcjogIzk0NzQxMjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTYsIDMxLCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkJDNDFGICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEteWV0LXRvLXN0YXJ0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzcsIDE5MywgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0FDQjFDMSAhaW1wb3J0YW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/pilot-ready-modal/pilot-ready-modal.component.ts":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/pilot-ready-modal/pilot-ready-modal.component.ts ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: PilotReadyModalComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalReceivedComponentsPilotReadyModalPilotReadyModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PilotReadyModalComponent", function () {
      return PilotReadyModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PilotReadyModalComponent = class PilotReadyModalComponent {
      constructor() {}

      ngOnInit() {}

    };
    PilotReadyModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pilot-ready-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pilot-ready-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/pilot-ready-modal/pilot-ready-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pilot-ready-modal.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/components/pilot-ready-modal/pilot-ready-modal.component.css")).default]
    })], PilotReadyModalComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/review-proposal-received.component.css":
  /*!***********************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/review-proposal-received.component.css ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalReceivedReviewProposalReceivedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctcHJvcG9zYWwvY29tcG9uZW50cy9yZXZpZXctcHJvcG9zYWwtcmVjZWl2ZWQvcmV2aWV3LXByb3Bvc2FsLXJlY2VpdmVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNUO0NBQ0Msc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQix1U0FBdVM7Q0FDdlMsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IsdUNBQXVDO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctcHJvcG9zYWwvY29tcG9uZW50cy9yZXZpZXctcHJvcG9zYWwtcmVjZWl2ZWQvcmV2aWV3LXByb3Bvc2FsLXJlY2VpdmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDYXJkICovXHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLXdycCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLWZvb3RlciB7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgxNzIsIDE3NywgMTkzLCAwLjEpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzE7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxMycgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgMTMgOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEyLjgxNzQgMS40MUwxMS40MTkxIC02LjcxMzZlLTA4TDYuODY3MzggNC41OEwyLjMxNTYzIC01LjA0MjM0ZS0wN0wwLjkxNzM4MiAxLjQxTDYuODY3MzggNy40MUwxMi44MTc0IDEuNDFaJyBmaWxsPSclMjM0RjRGNEYnLyUzRSUzQy9zdmclM0UlMEFcIik7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDkwJTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDIwcHg7XHJcblx0cGFkZGluZzogMTBweCAyNXB4IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/review-proposal-received.component.ts":
  /*!**********************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/review-proposal-received.component.ts ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: ReviewProposalReceivedComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalReceivedReviewProposalReceivedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewProposalReceivedComponent", function () {
      return ReviewProposalReceivedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ReviewProposalReceivedComponent = class ReviewProposalReceivedComponent {
      constructor() {}

      ngOnInit() {}

    };
    ReviewProposalReceivedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-review-proposal-received',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review-proposal-received.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/review-proposal-received.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review-proposal-received.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-received/review-proposal-received.component.css")).default]
    })], ReviewProposalReceivedComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-rejected/review-proposal-rejected.component.css":
  /*!***********************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-rejected/review-proposal-rejected.component.css ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalRejectedReviewProposalRejectedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctcHJvcG9zYWwvY29tcG9uZW50cy9yZXZpZXctcHJvcG9zYWwtcmVqZWN0ZWQvcmV2aWV3LXByb3Bvc2FsLXJlamVjdGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNUO0NBQ0Msc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQix1U0FBdVM7Q0FDdlMsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IsdUNBQXVDO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctcHJvcG9zYWwvY29tcG9uZW50cy9yZXZpZXctcHJvcG9zYWwtcmVqZWN0ZWQvcmV2aWV3LXByb3Bvc2FsLXJlamVjdGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDYXJkICovXHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLXdycCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi1jYXJkLWZvb3RlciB7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgxNzIsIDE3NywgMTkzLCAwLjEpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhY2IxYzE7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmEtc3RhdHVzLXNlbGVjdCB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxMycgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgMTMgOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEyLjgxNzQgMS40MUwxMS40MTkxIC02LjcxMzZlLTA4TDYuODY3MzggNC41OEwyLjMxNTYzIC01LjA0MjM0ZS0wN0wwLjkxNzM4MiAxLjQxTDYuODY3MzggNy40MUwxMi44MTc0IDEuNDFaJyBmaWxsPSclMjM0RjRGNEYnLyUzRSUzQy9zdmclM0UlMEFcIik7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDkwJTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDIwcHg7XHJcblx0cGFkZGluZzogMTBweCAyNXB4IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-rejected/review-proposal-rejected.component.ts":
  /*!**********************************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-rejected/review-proposal-rejected.component.ts ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: ReviewProposalRejectedComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalComponentsReviewProposalRejectedReviewProposalRejectedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewProposalRejectedComponent", function () {
      return ReviewProposalRejectedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ReviewProposalRejectedComponent = class ReviewProposalRejectedComponent {
      constructor() {}

      ngOnInit() {}

    };
    ReviewProposalRejectedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-review-proposal-rejected',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review-proposal-rejected.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-rejected/review-proposal-rejected.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review-proposal-rejected.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-proposal/components/review-proposal-rejected/review-proposal-rejected.component.css")).default]
    })], ReviewProposalRejectedComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/review-proposal.component.css":
  /*!**************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/review-proposal.component.css ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalReviewProposalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-header-review-application {\r\n\tmax-width: 1170px;\r\n\twidth: 100%;\r\n\tmargin: auto;\r\n}\r\n.a-counts-wrp {\r\n\twidth: 100%;\r\n\tmax-width: 250px;\r\n}\r\n.a-tab-wrp > ul > li > a {\r\n\tbackground: rgba(79, 79, 79, 0.1);\r\n\tborder-radius: 100px;\r\n\tcolor: #363636;\r\n}\r\n.a-tab-wrp > ul > li {\r\n\tmargin-right: 20px !important;\r\n}\r\n.a-tab-wrp > ul > li.active > a {\r\n\tcolor: #fff;\r\n\tbackground: #4f4f4f;\r\n}\r\n.a-await-approval {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid var(--primary-grey);\r\n\tcolor: #7f838f;\r\n\tborder-radius: 4px;\r\n\tpadding: 6px 10px;\r\n}\r\n.a-await-proposal {\r\n\tbackground: rgba(242, 148, 62, 0.1);\r\n\tborder: 1px solid #f2943e;\r\n\tcolor: #d98538;\r\n\tborder-radius: 4px;\r\n\tpadding: 6px 10px;\r\n}\r\n.a-accepting-solution {\r\n\tbackground: rgba(251, 196, 31, 0.1);\r\n\tborder: 1px solid #fbc41f;\r\n\tcolor: #947412;\r\n\tborder-radius: 4px;\r\n\tpadding: 6px 10px;\r\n}\r\n.a-pilot {\r\n\tbackground: rgba(45, 152, 81, 0.1);\r\n\tborder: 1px solid #2d9851;\r\n\tcolor: #1e6636;\r\n\tborder-radius: 4px;\r\n\tpadding: 6px 10px;\r\n}\r\n/* Header tab */\r\n.a-challenge-tab [data-toggle=\"pill\"] span {\r\n\tposition: relative;\r\n\tz-index: 10;\r\n}\r\n.nav-pills > li + li {\r\n\tmargin: 0px;\r\n}\r\n.nav-pills > li > a {\r\n\tborder-radius: 0px;\r\n}\r\n.g-default-tab {\r\n\tbackground-color: #ffffff !important;\r\n\tpadding: 12px 30px 15px;\r\n}\r\n.nav-pills > li:nth-child(5) a {\r\n\tborder-right: 1px solid var(--primary-grey) !important;\r\n}\r\n.nav-pills > li:nth-child(2) a {\r\n\tborder-left: 1px solid var(--primary-grey) !important;\r\n}\r\n.a-tab-common-clr,\r\n.a-sol-pilot-tab {\r\n\tbackground: #f7f7f9;\r\n\t/* border: 1px solid var(--primary-grey); */\r\n\tcolor: #7f838f;\r\n\tborder: 0px !important;\r\n\t/* border-left: 0px !important; */\r\n\t/* margin-left: -25px; */\r\n\tpadding-left: 40px;\r\n\tpadding-right: 20px;\r\n\tpadding-top: 16px;\r\n\tpadding-bottom: 15px;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n.a-challenge-tab .a-tab-common-clr::after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 8px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid var(--primary-grey);\r\n\t-webkit-transform: rotate(47deg);\r\n\ttransform: rotate(45deg);\r\n\tleft: 88%;\r\n\tborder-bottom: 0px;\r\n\tborder-left: 0px;\r\n\tz-index: 2;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n.nav-pills > li.active .a-tab-common-clr,\r\n.nav-pills > li.active .a-tab-common-clr::after,\r\n.a-tab-common-clr:hover,\r\n.a-tab-common-clr:hover:after,\r\n.a-sol-pilot-tab:hover,\r\n.a-sol-pilot-tab:focus {\r\n\tbackground-color: #4f4f4f !important;\r\n\tcolor: #f7f7f9;\r\n}\r\n.g-default-tab:hover,\r\n.g-default-tab:focus,\r\n.nav-pills > li.active > .g-default-tab {\r\n\tborder-bottom: 4px solid #4f4f4f;\r\n}\r\n.a-tab-common-clr2::after {\r\n\tleft: 82% !important;\r\n}\r\n.a-challenge-tab-wrp {\r\n\tborder: 1px solid #dee0e6;\r\n}\r\n.a-challenge-tab {\r\n\tmax-width: 1170px;\r\n\twidth: 100%;\r\n\tmargin: auto;\r\n}\r\n.a-align-self-center {\r\n\talign-self: center !important;\r\n}\r\n.a-review-application-tab-cnts-wrp {\r\n\tmin-height: 100vh;\r\n}\r\n.content {\r\n\tmin-height: 70vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9yZXZpZXctcHJvcG9zYWwvcmV2aWV3LXByb3Bvc2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFlBQVk7QUFDYjtBQUNBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsaUNBQWlDO0NBQ2pDLG9CQUFvQjtDQUNwQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLHFDQUFxQztDQUNyQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsbUNBQW1DO0NBQ25DLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsbUNBQW1DO0NBQ25DLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msa0NBQWtDO0NBQ2xDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUVBLGVBQWU7QUFDZjtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7QUFFQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxvQ0FBb0M7Q0FDcEMsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxzREFBc0Q7QUFDdkQ7QUFDQTtDQUNDLHFEQUFxRDtBQUN0RDtBQUNBOztDQUVDLG1CQUFtQjtDQUNuQiwyQ0FBMkM7Q0FDM0MsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixpQ0FBaUM7Q0FDakMsd0JBQXdCO0NBQ3hCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQiw0Q0FBb0M7Q0FBcEMsb0NBQW9DO0FBQ3JDO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIscUNBQXFDO0NBQ3JDLGdDQUFnQztDQUNoQyx3QkFBd0I7Q0FDeEIsU0FBUztDQUNULGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLDRDQUE0QztDQUM1QyxvQ0FBb0M7QUFDckM7QUFDQTs7Ozs7O0NBTUMsb0NBQW9DO0NBQ3BDLGNBQWM7QUFDZjtBQUNBOzs7Q0FHQyxnQ0FBZ0M7QUFDakM7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFlBQVk7QUFDYjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvcmV2aWV3LXByb3Bvc2FsL3Jldmlldy1wcm9wb3NhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEtaGVhZGVyLXJldmlldy1hcHBsaWNhdGlvbiB7XHJcblx0bWF4LXdpZHRoOiAxMTcwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG59XHJcbi5hLWNvdW50cy13cnAge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpID4gYSB7XHJcblx0YmFja2dyb3VuZDogcmdiYSg3OSwgNzksIDc5LCAwLjEpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cdGNvbG9yOiAjMzYzNjM2O1xyXG59XHJcbi5hLXRhYi13cnAgPiB1bCA+IGxpIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4uYS10YWItd3JwID4gdWwgPiBsaS5hY3RpdmUgPiBhIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiAjNGY0ZjRmO1xyXG59XHJcbi5hLWF3YWl0LWFwcHJvdmFsIHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KTtcclxuXHRjb2xvcjogIzdmODM4ZjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0cGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuLmEtYXdhaXQtcHJvcG9zYWwge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjQyLCAxNDgsIDYyLCAwLjEpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMjk0M2U7XHJcblx0Y29sb3I6ICNkOTg1Mzg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHBhZGRpbmc6IDZweCAxMHB4O1xyXG59XHJcbi5hLWFjY2VwdGluZy1zb2x1dGlvbiB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTEsIDE5NiwgMzEsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZiYzQxZjtcclxuXHRjb2xvcjogIzk0NzQxMjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0cGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuLmEtcGlsb3Qge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoNDUsIDE1MiwgODEsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzJkOTg1MTtcclxuXHRjb2xvcjogIzFlNjYzNjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0cGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhlYWRlciB0YWIgKi9cclxuLmEtY2hhbGxlbmdlLXRhYiBbZGF0YS10b2dnbGU9XCJwaWxsXCJdIHNwYW4ge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLm5hdi1waWxscyA+IGxpICsgbGkge1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaSA+IGEge1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uZy1kZWZhdWx0LXRhYiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6IDEycHggMzBweCAxNXB4O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaTpudGgtY2hpbGQoNSkgYSB7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaTpudGgtY2hpbGQoMikgYSB7XHJcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtdGFiLWNvbW1vbi1jbHIsXHJcbi5hLXNvbC1waWxvdC10YWIge1xyXG5cdGJhY2tncm91bmQ6ICNmN2Y3Zjk7XHJcblx0LyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KTsgKi9cclxuXHRjb2xvcjogIzdmODM4ZjtcclxuXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG5cdC8qIGJvcmRlci1sZWZ0OiAwcHggIWltcG9ydGFudDsgKi9cclxuXHQvKiBtYXJnaW4tbGVmdDogLTI1cHg7ICovXHJcblx0cGFkZGluZy1sZWZ0OiA0MHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblx0cGFkZGluZy10b3A6IDE2cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDE1cHg7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWNoYWxsZW5nZS10YWIgLmEtdGFiLWNvbW1vbi1jbHI6OmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDhweDtcclxuXHR3aWR0aDogNDBweDtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0YmFja2dyb3VuZDogI2Y3ZjdmOTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDdkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRsZWZ0OiA4OCU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMHB4O1xyXG5cdGJvcmRlci1sZWZ0OiAwcHg7XHJcblx0ei1pbmRleDogMjtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSAuYS10YWItY29tbW9uLWNscixcclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSAuYS10YWItY29tbW9uLWNscjo6YWZ0ZXIsXHJcbi5hLXRhYi1jb21tb24tY2xyOmhvdmVyLFxyXG4uYS10YWItY29tbW9uLWNscjpob3ZlcjphZnRlcixcclxuLmEtc29sLXBpbG90LXRhYjpob3ZlcixcclxuLmEtc29sLXBpbG90LXRhYjpmb2N1cyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmNGY0ZiAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZjdmN2Y5O1xyXG59XHJcbi5nLWRlZmF1bHQtdGFiOmhvdmVyLFxyXG4uZy1kZWZhdWx0LXRhYjpmb2N1cyxcclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSA+IC5nLWRlZmF1bHQtdGFiIHtcclxuXHRib3JkZXItYm90dG9tOiA0cHggc29saWQgIzRmNGY0ZjtcclxufVxyXG5cclxuLmEtdGFiLWNvbW1vbi1jbHIyOjphZnRlciB7XHJcblx0bGVmdDogODIlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLWNoYWxsZW5nZS10YWItd3JwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVlMGU2O1xyXG59XHJcbi5hLWNoYWxsZW5nZS10YWIge1xyXG5cdG1heC13aWR0aDogMTE3MHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG4uYS1hbGlnbi1zZWxmLWNlbnRlciB7XHJcblx0YWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbi10YWItY250cy13cnAge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcblx0bWluLWhlaWdodDogNzB2aDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/review-proposal/review-proposal.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/review-proposal/review-proposal.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ReviewProposalComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensReviewProposalReviewProposalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewProposalComponent", function () {
      return ReviewProposalComponent;
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


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");
    /* harmony import */


    var _dashboardmain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../dashboardmain.service */
    "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let ReviewProposalComponent = class ReviewProposalComponent {
      constructor(_dash, route) {
        this._dash = _dash;
        this.route = route;
        this.allProposalCount = 0;
        this.prePilotCount = 0;
        this.awaitProposalCount = 0;
        this.proposalReceivedCount = 0;
        this.queryAll = {
          filter: {
            status: "active",
            proposal_stage: ["New", "Pre-Pilot"]
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.queryPrePilot = {
          filter: {
            status: "active",
            proposal_stage: "Pre-Pilot"
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.queryAwaitProposal = {
          filter: {
            status: "active",
            proposal_received: false
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.queryProposalReceived = {
          filter: {
            status: "active",
            proposal_stage: "New"
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.route.parent.params.subscribe(params => {
          this.queryAll.filter.frg_anchor_id = params.id;
          this.queryPrePilot.filter.frg_anchor_id = params.id;
          this.queryAwaitProposal.filter.frg_anchor_id = params.id;
          this.queryProposalReceived.filter.frg_anchor_id = params.id;
        });
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield Promise.all([this.fetchAllProposals(), this.fetchAwaitingProposal(), this.fetchProposalReceived(), this.fetchPrePilot()]);
        });
      }

      fetchAllProposals() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.allLoading = true;
          this.allProposals = yield this._dash.getProposals(this.queryAll);
          this.allProposalCount = this.allProposals.total_results;
          this.allLoading = false;
        });
      }

      fetchAwaitingProposal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.awaitProposalLoading = true;
          this.awaitProposal = yield this._dash.getEois(this.queryAwaitProposal);
          this.awaitProposalCount = this.awaitProposal.total_results;
          this.awaitProposalLoading = false;
        });
      }

      fetchProposalReceived() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.receivedLoading = true;
          this.proposalReceived = yield this._dash.getProposals(this.queryProposalReceived);
          this.proposalReceivedCount = this.proposalReceived.total_results;
          this.receivedLoading = false;
        });
      }

      fetchPrePilot() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.prePilotLoading = true;
          this.prePilot = yield this._dash.getProposals(this.queryPrePilot);
          this.prePilotCount = this.prePilot.total_results;
          this.prePilotLoading = false;
        });
      }

      handleStatusChange() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield Promise.all([this.fetchAllProposals(), this.fetchAwaitingProposal(), this.fetchProposalReceived(), this.fetchPrePilot()]);
        });
      }

      handleAllPagination(pageIndex) {
        this.queryAll.pg.skip = (pageIndex - 1) * this.queryAll.pg.limit;
        this.fetchAllProposals();
      }

      handleAwaitingProposal(pageIndex) {
        this.queryAwaitProposal.pg.skip = (pageIndex - 1) * this.queryAwaitProposal.pg.limit;
        this.fetchAwaitingProposal();
      }

      handleProposalReceived(pageIndex) {
        this.queryProposalReceived.pg.skip = (pageIndex - 1) * this.queryProposalReceived.pg.limit;
        this.fetchProposalReceived();
      }

      handlePrePilot(pageIndex) {
        this.queryPrePilot.pg.skip = (pageIndex - 1) * this.queryPrePilot.pg.limit;
        this.fetchPrePilot();
      }

    };

    ReviewProposalComponent.ctorParameters = () => [{
      type: _dashboardmain_service__WEBPACK_IMPORTED_MODULE_4__["DashboardmainService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_3__["LoggedInUserState"])], ReviewProposalComponent.prototype, "loggedInUser$", void 0);
    ReviewProposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-review-proposal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review-proposal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/review-proposal/review-proposal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review-proposal.component.css */
      "./src/app/seeker/challenge-dashboard/screens/review-proposal/review-proposal.component.css")).default]
    })], ReviewProposalComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-confirm-modal/eoi-confirm-modal.component.css":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-confirm-modal/eoi-confirm-modal.component.css ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensSendEoiComponentsEoiConfirmModalEoiConfirmModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-send-eoi-btn:disabled {\r\n\tbackground: #dedede !important;\r\n\tcolor: #4f4f4f !important;\r\n\topacity: 0.5 !important;\r\n}\r\n\r\n.a-shortlist-btn {\r\n\tborder: 1px solid #2d9851;\r\n}\r\n\r\n.a-modal-obhold-btn {\r\n\tcolor: #947412 !important;\r\n\tbackground: rgba(251, 196, 31, 0.1) !important;\r\n\tborder: 1px solid #fbc41f !important;\r\n}\r\n\r\n.a-confirm-btn {\r\n\tborder: 1px solid #2d9851 !important;\r\n\tcolor: #ffffff !important;\r\n\tbackground-color: #2d9851 !important;\r\n}\r\n\r\n.a-review-btn {\r\n\tborder: 1px solid #999999 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9zZW5kLWVvaS9jb21wb25lbnRzL2VvaS1jb25maXJtLW1vZGFsL2VvaS1jb25maXJtLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw4QkFBOEI7Q0FDOUIseUJBQXlCO0NBQ3pCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qiw4Q0FBOEM7Q0FDOUMsb0NBQW9DO0FBQ3JDOztBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLHlCQUF5QjtDQUN6QixvQ0FBb0M7QUFDckM7O0FBQ0E7Q0FDQyxvQ0FBb0M7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvY2hhbGxlbmdlLWRhc2hib2FyZC9zY3JlZW5zL3NlbmQtZW9pL2NvbXBvbmVudHMvZW9pLWNvbmZpcm0tbW9kYWwvZW9pLWNvbmZpcm0tbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hLXNlbmQtZW9pLWJ0bjpkaXNhYmxlZCB7XHJcblx0YmFja2dyb3VuZDogI2RlZGVkZSAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjNGY0ZjRmICFpbXBvcnRhbnQ7XHJcblx0b3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLXNob3J0bGlzdC1idG4ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyZDk4NTE7XHJcbn1cclxuXHJcbi5hLW1vZGFsLW9iaG9sZC1idG4ge1xyXG5cdGNvbG9yOiAjOTQ3NDEyICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTEsIDE5NiwgMzEsIDAuMSkgIWltcG9ydGFudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmJjNDFmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtY29uZmlybS1idG4ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyZDk4NTEgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyZDk4NTEgIWltcG9ydGFudDtcclxufVxyXG4uYS1yZXZpZXctYnRuIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-confirm-modal/eoi-confirm-modal.component.ts":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-confirm-modal/eoi-confirm-modal.component.ts ***!
    \*************************************************************************************************************************/

  /*! exports provided: EoiConfirmModalComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensSendEoiComponentsEoiConfirmModalEoiConfirmModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EoiConfirmModalComponent", function () {
      return EoiConfirmModalComponent;
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

    let EoiConfirmModalComponent = class EoiConfirmModalComponent {
      constructor(route, router) {
        this.route = route;
        this.router = router;
      }

      ngOnInit() {}

      ngOnChanges() {}

      eventCheck(event, id) {
        this.Ids = [];

        if (event.target.checked) {
          this.selectedapp.map(app => {
            if (app.id == id) {
              app.isChecked = true;
            }
          });
        } else {
          this.selectedapp.map(app => {
            if (app.id == id) {
              app.isChecked = false;
            }
          });
        }

        this.selectedapp.map(app => {
          if (app.isChecked == true) {
            this.Ids.push(app.id);
          }
        });
      }

      getIDs() {
        this.Ids = [];
        this.selectedapp.map(app => {
          if (app.isChecked == true) {
            this.Ids.push(app.id);
          }
        });
      }

    };

    EoiConfirmModalComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EoiConfirmModalComponent.prototype, "check", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EoiConfirmModalComponent.prototype, "selectedapp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EoiConfirmModalComponent.prototype, "Ids", void 0);
    EoiConfirmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-eoi-confirm-modal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./eoi-confirm-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-confirm-modal/eoi-confirm-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./eoi-confirm-modal.component.css */
      "./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-confirm-modal/eoi-confirm-modal.component.css")).default]
    })], EoiConfirmModalComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-modal/eoi-modal.component.css":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-modal/eoi-modal.component.css ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensSendEoiComponentsEoiModalEoiModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-user-img-wrp img {\r\n\tborder-radius: 50%;\r\n}\r\n.a-expense-wrp {\r\n\twidth: 172px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9zZW5kLWVvaS9jb21wb25lbnRzL2VvaS1tb2RhbC9lb2ktbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9zZW5kLWVvaS9jb21wb25lbnRzL2VvaS1tb2RhbC9lb2ktbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hLXVzZXItaW1nLXdycCBpbWcge1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uYS1leHBlbnNlLXdycCB7XHJcblx0d2lkdGg6IDE3MnB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-modal/eoi-modal.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-modal/eoi-modal.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: EoiModalComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensSendEoiComponentsEoiModalEoiModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EoiModalComponent", function () {
      return EoiModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let EoiModalComponent = class EoiModalComponent {
      constructor() {}

      ngOnInit() {}

    };
    EoiModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-eoi-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./eoi-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-modal/eoi-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./eoi-modal.component.css */
      "./src/app/seeker/challenge-dashboard/screens/send-eoi/components/eoi-modal/eoi-modal.component.css")).default]
    })], EoiModalComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/send-eoi/send-eoi.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/send-eoi/send-eoi.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensSendEoiSendEoiComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-header-review-application {\r\n\tmax-width: 1170px;\r\n\twidth: 100%;\r\n\tmargin: auto;\r\n}\r\n.a-counts-wrp {\r\n\twidth: 100%;\r\n\tmax-width: 250px;\r\n}\r\n/* Header tab */\r\n.a-challenge-tab [data-toggle=\"pill\"] span {\r\n\tposition: relative;\r\n\tz-index: 10;\r\n}\r\n.nav-pills > li + li {\r\n\tmargin: 0px;\r\n}\r\n.nav-pills > li > a {\r\n\tborder-radius: 0px;\r\n}\r\n.g-default-tab {\r\n\tbackground-color: #ffffff !important;\r\n\tpadding: 12px 30px 15px;\r\n}\r\n.nav-pills > li:nth-child(5) a {\r\n\tborder-right: 1px solid var(--primary-grey) !important;\r\n}\r\n.nav-pills > li:nth-child(2) a {\r\n\tborder-left: 1px solid var(--primary-grey) !important;\r\n}\r\n.a-tab-common-clr,\r\n.a-sol-pilot-tab {\r\n\tbackground: #f7f7f9;\r\n\t/* border: 1px solid var(--primary-grey); */\r\n\tcolor: #7f838f;\r\n\tborder: 0px !important;\r\n\t/* border-left: 0px !important; */\r\n\t/* margin-left: -25px; */\r\n\tpadding-left: 40px;\r\n\tpadding-right: 20px;\r\n\tpadding-top: 16px;\r\n\tpadding-bottom: 15px;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n.a-challenge-tab .a-tab-common-clr::after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 8px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid var(--primary-grey);\r\n\t-webkit-transform: rotate(47deg);\r\n\ttransform: rotate(45deg);\r\n\tleft: 88%;\r\n\tborder-bottom: 0px;\r\n\tborder-left: 0px;\r\n\tz-index: 2;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n.nav-pills > li.active .a-tab-common-clr,\r\n.nav-pills > li.active .a-tab-common-clr::after,\r\n.a-tab-common-clr:hover,\r\n.a-tab-common-clr:hover:after,\r\n.a-sol-pilot-tab:hover,\r\n.a-sol-pilot-tab:focus {\r\n\tbackground-color: #4f4f4f !important;\r\n\tcolor: #f7f7f9;\r\n}\r\n.g-default-tab:hover,\r\n.g-default-tab:focus,\r\n.nav-pills > li.active > .g-default-tab {\r\n\tborder-bottom: 4px solid #4f4f4f;\r\n}\r\n.a-tab-common-clr2::after {\r\n\tleft: 82% !important;\r\n}\r\n.a-challenge-tab-wrp {\r\n\tborder: 1px solid #dee0e6;\r\n}\r\n.a-challenge-tab {\r\n\tmax-width: 1170px;\r\n\twidth: 100%;\r\n\tmargin: auto;\r\n}\r\n.a-align-self-center {\r\n\talign-self: center !important;\r\n}\r\n/* Card */\r\n.a-review-application-card-wrp {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #dedede;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n}\r\n.a-review-application-card-footer {\r\n\tborder-top: 1px solid #dedede;\r\n}\r\n.a-status-select {\r\n\tbackground: rgba(172, 177, 193, 0.1);\r\n\tborder: 1px solid #acb1c1;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 100px;\r\n}\r\n.a-status-select {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8174 1.41L11.4191 -6.7136e-08L6.86738 4.58L2.31563 -5.04234e-07L0.917382 1.41L6.86738 7.41L12.8174 1.41Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position-x: 90%;\r\n\tbackground-position-y: 20px;\r\n\tpadding: 10px 25px 10px 25px !important;\r\n}\r\n.a-shortlisted-eoi-wrp {\r\n\tmin-height: 100vh;\r\n}\r\n/* icons in select */\r\n.a-shorlist-icon {\r\n\tcontent: \"\";\r\n\twidth: 12px;\r\n\theight: 12px;\r\n\tbackground: #19c8a6;\r\n\tborder-radius: 50%;\r\n}\r\n.a-review-applications-wrp {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9zZW5kLWVvaS9zZW5kLWVvaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7QUFDQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakI7QUFFQSxlQUFlO0FBQ2Y7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztBQUNaO0FBRUE7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0Msc0RBQXNEO0FBQ3ZEO0FBQ0E7Q0FDQyxxREFBcUQ7QUFDdEQ7QUFDQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsMkNBQTJDO0NBQzNDLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIsaUNBQWlDO0NBQ2pDLHdCQUF3QjtDQUN4QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsNENBQW9DO0NBQXBDLG9DQUFvQztBQUNyQztBQUNBO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHFDQUFxQztDQUNyQyxnQ0FBZ0M7Q0FDaEMsd0JBQXdCO0NBQ3hCLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDViw0Q0FBNEM7Q0FDNUMsb0NBQW9DO0FBQ3JDO0FBQ0E7Ozs7OztDQU1DLG9DQUFvQztDQUNwQyxjQUFjO0FBQ2Y7QUFDQTs7O0NBR0MsZ0NBQWdDO0FBQ2pDO0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUVBLFNBQVM7QUFDVDtDQUNDLHNCQUFzQjtDQUN0Qix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxvQ0FBb0M7Q0FDcEMseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixvQkFBb0I7QUFDckI7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsdVNBQXVTO0NBQ3ZTLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsMkJBQTJCO0NBQzNCLHVDQUF1QztBQUN4QztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBRUEsb0JBQW9CO0FBQ3BCO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9zZW5kLWVvaS9zZW5kLWVvaS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEtaGVhZGVyLXJldmlldy1hcHBsaWNhdGlvbiB7XHJcblx0bWF4LXdpZHRoOiAxMTcwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG59XHJcbi5hLWNvdW50cy13cnAge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qIEhlYWRlciB0YWIgKi9cclxuLmEtY2hhbGxlbmdlLXRhYiBbZGF0YS10b2dnbGU9XCJwaWxsXCJdIHNwYW4ge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLm5hdi1waWxscyA+IGxpICsgbGkge1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaSA+IGEge1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uZy1kZWZhdWx0LXRhYiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6IDEycHggMzBweCAxNXB4O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaTpudGgtY2hpbGQoNSkgYSB7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtcGlsbHMgPiBsaTpudGgtY2hpbGQoMikgYSB7XHJcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtdGFiLWNvbW1vbi1jbHIsXHJcbi5hLXNvbC1waWxvdC10YWIge1xyXG5cdGJhY2tncm91bmQ6ICNmN2Y3Zjk7XHJcblx0LyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KTsgKi9cclxuXHRjb2xvcjogIzdmODM4ZjtcclxuXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG5cdC8qIGJvcmRlci1sZWZ0OiAwcHggIWltcG9ydGFudDsgKi9cclxuXHQvKiBtYXJnaW4tbGVmdDogLTI1cHg7ICovXHJcblx0cGFkZGluZy1sZWZ0OiA0MHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblx0cGFkZGluZy10b3A6IDE2cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDE1cHg7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWNoYWxsZW5nZS10YWIgLmEtdGFiLWNvbW1vbi1jbHI6OmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDhweDtcclxuXHR3aWR0aDogNDBweDtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0YmFja2dyb3VuZDogI2Y3ZjdmOTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDdkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRsZWZ0OiA4OCU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMHB4O1xyXG5cdGJvcmRlci1sZWZ0OiAwcHg7XHJcblx0ei1pbmRleDogMjtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSAuYS10YWItY29tbW9uLWNscixcclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSAuYS10YWItY29tbW9uLWNscjo6YWZ0ZXIsXHJcbi5hLXRhYi1jb21tb24tY2xyOmhvdmVyLFxyXG4uYS10YWItY29tbW9uLWNscjpob3ZlcjphZnRlcixcclxuLmEtc29sLXBpbG90LXRhYjpob3ZlcixcclxuLmEtc29sLXBpbG90LXRhYjpmb2N1cyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmNGY0ZiAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZjdmN2Y5O1xyXG59XHJcbi5nLWRlZmF1bHQtdGFiOmhvdmVyLFxyXG4uZy1kZWZhdWx0LXRhYjpmb2N1cyxcclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSA+IC5nLWRlZmF1bHQtdGFiIHtcclxuXHRib3JkZXItYm90dG9tOiA0cHggc29saWQgIzRmNGY0ZjtcclxufVxyXG5cclxuLmEtdGFiLWNvbW1vbi1jbHIyOjphZnRlciB7XHJcblx0bGVmdDogODIlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLWNoYWxsZW5nZS10YWItd3JwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVlMGU2O1xyXG59XHJcbi5hLWNoYWxsZW5nZS10YWIge1xyXG5cdG1heC13aWR0aDogMTE3MHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG4uYS1hbGlnbi1zZWxmLWNlbnRlciB7XHJcblx0YWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIENhcmQgKi9cclxuLmEtcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQtd3JwIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmEtcmV2aWV3LWFwcGxpY2F0aW9uLWNhcmQtZm9vdGVyIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuMSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2FjYjFjMTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4uYS1zdGF0dXMtc2VsZWN0IHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzEzJyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCAxMyA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTIuODE3NCAxLjQxTDExLjQxOTEgLTYuNzEzNmUtMDhMNi44NjczOCA0LjU4TDIuMzE1NjMgLTUuMDQyMzRlLTA3TDAuOTE3MzgyIDEuNDFMNi44NjczOCA3LjQxTDEyLjgxNzQgMS40MVonIGZpbGw9JyUyMzRGNEY0RicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teDogOTAlO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb24teTogMjBweDtcclxuXHRwYWRkaW5nOiAxMHB4IDI1cHggMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLXNob3J0bGlzdGVkLWVvaS13cnAge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKiBpY29ucyBpbiBzZWxlY3QgKi9cclxuLmEtc2hvcmxpc3QtaWNvbiB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHR3aWR0aDogMTJweDtcclxuXHRoZWlnaHQ6IDEycHg7XHJcblx0YmFja2dyb3VuZDogIzE5YzhhNjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5hLXJldmlldy1hcHBsaWNhdGlvbnMtd3JwIHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/send-eoi/send-eoi.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/send-eoi/send-eoi.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: SendEoiComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensSendEoiSendEoiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendEoiComponent", function () {
      return SendEoiComponent;
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


    var _review_applications_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../review-applications/application.service */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/application.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    let SendEoiComponent = class SendEoiComponent {
      constructor(_app, route, toastr) {
        this._app = _app;
        this.route = route;
        this.toastr = toastr;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url;
        this.shortlist = [];
        this.applicationIds = [];
        this.shortlistedCount = 0;
        this.selectedApplication = [];
        this.queryShortlisted = {
          filter: {
            status: "active",
            application_status: "Shortlist",
            eoi_received: false
          },
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.route.parent.params.subscribe(params => this.challengeAnchorId = params.id);
        this.queryShortlisted.filter.frg_anchor_id = this.challengeAnchorId;
      }

      ngOnInit() {
        this.buttonDisabled = false;
        this.fetchShortlisted();
      }

      fetchShortlisted() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.isLoading = true;
          this.applicationDataShortlisted = yield this._app.getApplications(this.queryShortlisted);
          this.applicationDataShortlisted.data.map(application => {
            application.isChecked = false;
          });
          this.shortlistedCount = this.applicationDataShortlisted.total_results; // console.log(this.applicationDataShortlisted);

          this.isLoading = false;
        });
      }

      handleChangeStatus(statusName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let status = statusName.target.value;
          this.statusUpdating = true;
          let resp = yield this._app.updateApplicationStatus(this.applicationDataShortlisted.id, status);
          this.toastr.info("", "Application moved to ".concat(status));
          this.statusUpdating = false;
        });
      }

      eventCheck(event, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.applicationIds = [];

          if (event.target.checked) {
            this.buttonDisabled = true;
            this.applicationDataShortlisted.data.map(app => {
              if (app.id == id) {
                app.isChecked = true;
              }
            });
          } else {
            this.applicationDataShortlisted.data.map(app => {
              if (app.id == id) {
                app.isChecked = false;
              }
            });
          }

          this.selectedApplication = this.applicationDataShortlisted.data.filter(app => {
            return app.isChecked == true;
          });
          this.selectedApplication.map(element => {
            if (element.isChecked == true) {
              this.applicationIds.push(element.id);
            }
          });
          if (this.applicationIds.length) this.buttonDisabled = true;else this.buttonDisabled = false;
        });
      }

      handlePagination(pageIndex) {
        this.queryShortlisted.pg.skip = (pageIndex - 1) * this.queryShortlisted.pg.limit;
        this.fetchShortlisted();
      }

    };

    SendEoiComponent.ctorParameters = () => [{
      type: _review_applications_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
    }];

    SendEoiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-send-eoi",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./send-eoi.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/send-eoi/send-eoi.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./send-eoi.component.css */
      "./src/app/seeker/challenge-dashboard/screens/send-eoi/send-eoi.component.css")).default]
    })], SendEoiComponent);
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/sol-individual/sol-individual.component.css":
  /*!************************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/sol-individual/sol-individual.component.css ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerChallengeDashboardScreensSolIndividualSolIndividualComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-btn-link {\r\n\ttext-decoration: none;\r\n\t/* max-width:600px;\r\n     width:100%; */\r\n\tcursor: pointer;\r\n}\r\n.a-btn-link:hover,\r\n.a-btn-link:focus {\r\n\tcolor: #2d9851;\r\n\ttext-decoration: underline;\r\n\t-webkit-text-decoration-color: #2d9851;\r\n\t        text-decoration-color: #2d9851;\r\n}\r\n.a-solution-modal-title-wrp {\r\n\tmax-width: 600px;\r\n}\r\n.a-modal-s2 {\r\n\tpadding-top: 35px;\r\n}\r\n.a-modal-section1-wrp {\r\n\tbackground-color: #ffffff;\r\n\tpadding: 30px 24px;\r\n}\r\n.a-sol-chlng-cnt-wrp {\r\n\tpadding-top: 24px;\r\n}\r\n.a-modal-section2 {\r\n\tpadding: 30px 24px;\r\n\tborder-top: 1px solid #999999;\r\n}\r\n.a-slider-main-img-wrp {\r\n\tmax-width: 545px;\r\n\tmargin: auto;\r\n}\r\n.a-approve-modal-icon {\r\n\tfont-size: 51px;\r\n}\r\n.a-approve-modal-cnt2-wrp {\r\n\tpadding: 10px 0 25px;\r\n}\r\n.a-modal-profile-links {\r\n\tpadding-top: 20px;\r\n}\r\n.a-modal-lg {\r\n\tmax-width: 1170px !important;\r\n}\r\n.a-modal-content {\r\n\tborder: 1px solid #dedede !important;\r\n\tborder-radius: 6px !important;\r\n}\r\n.image-placeholder-nav-dots {\r\n\twidth: 88px;\r\n\theight: 88px;\r\n\tbackground-color: #b7b7b7;\r\n}\r\n.image-placeholder {\r\n\twidth: 514px;\r\n\theight: 514px;\r\n\tbackground-color: #b7b7b7;\r\n}\r\n.carousel-item {\r\n\tmax-width: 545px;\r\n\tmargin: auto !important;\r\n}\r\n.a-onhold-btn {\r\n\tcolor: #947412 !important;\r\n\tbackground: rgba(251, 196, 31, 0.1) !important;\r\n\tborder: 1px solid #fbc41f !important;\r\n}\r\n.a-reject-btn {\r\n\tcolor: #f8483d !important;\r\n\tbackground: rgba(248, 72, 61, 0.1) !important;\r\n\tborder: 1px solid #f8483d !important;\r\n}\r\n.carousel-control.left,\r\n.carousel-control.right {\r\n\tbackground: none !important;\r\n}\r\n.a-shortlist-btn {\r\n\tborder: 1px solid #2d9851;\r\n}\r\n.a-modal-obhold-btn {\r\n\tcolor: #947412 !important;\r\n\tbackground: rgba(251, 196, 31, 0.1) !important;\r\n\tborder: 1px solid #fbc41f !important;\r\n}\r\n.a-confirm-btn {\r\n\tborder: 1px solid #2d9851 !important;\r\n\tcolor: #ffffff !important;\r\n\tbackground-color: #2d9851 !important;\r\n}\r\n.a-review-btn {\r\n\tborder: 1px solid #999999 !important;\r\n}\r\n.image-placeholder {\r\n\twidth: 514px;\r\n\theight: 514px;\r\n\tbackground-color: #b7b7b7;\r\n}\r\n.loader-parent {\r\n\tmin-height: 80vh;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n}\r\n.reason-reject-btn{\r\n  background-color: rgba(248, 72,61, 0.1);\r\n  color:#F8483D;\r\n}\r\n.textarea-reason {\r\n  resize: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NoYWxsZW5nZS1kYXNoYm9hcmQvc2NyZWVucy9zb2wtaW5kaXZpZHVhbC9zb2wtaW5kaXZpZHVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MscUJBQXFCO0NBQ3JCO2tCQUNpQjtDQUNqQixlQUFlO0FBQ2hCO0FBQ0E7O0NBRUMsY0FBYztDQUNkLDBCQUEwQjtDQUMxQixzQ0FBOEI7U0FBOUIsOEJBQThCO0FBQy9CO0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtBQUNiO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxvQkFBb0I7QUFDckI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsNEJBQTRCO0FBQzdCO0FBQ0E7Q0FDQyxvQ0FBb0M7Q0FDcEMsNkJBQTZCO0FBQzlCO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6Qiw4Q0FBOEM7Q0FDOUMsb0NBQW9DO0FBQ3JDO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsNkNBQTZDO0NBQzdDLG9DQUFvQztBQUNyQztBQUNBOztDQUVDLDJCQUEyQjtBQUM1QjtBQUVBO0NBQ0MseUJBQXlCO0FBQzFCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsOENBQThDO0NBQzlDLG9DQUFvQztBQUNyQztBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLHlCQUF5QjtDQUN6QixvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLG9DQUFvQztBQUNyQztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYix5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLHdCQUF1QjtTQUF2Qix1QkFBdUI7QUFDeEI7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jaGFsbGVuZ2UtZGFzaGJvYXJkL3NjcmVlbnMvc29sLWluZGl2aWR1YWwvc29sLWluZGl2aWR1YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hLWJ0bi1saW5rIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0LyogbWF4LXdpZHRoOjYwMHB4O1xyXG4gICAgIHdpZHRoOjEwMCU7ICovXHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hLWJ0bi1saW5rOmhvdmVyLFxyXG4uYS1idG4tbGluazpmb2N1cyB7XHJcblx0Y29sb3I6ICMyZDk4NTE7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMmQ5ODUxO1xyXG59XHJcblxyXG4uYS1zb2x1dGlvbi1tb2RhbC10aXRsZS13cnAge1xyXG5cdG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuLmEtbW9kYWwtczIge1xyXG5cdHBhZGRpbmctdG9wOiAzNXB4O1xyXG59XHJcbi5hLW1vZGFsLXNlY3Rpb24xLXdycCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRwYWRkaW5nOiAzMHB4IDI0cHg7XHJcbn1cclxuXHJcbi5hLXNvbC1jaGxuZy1jbnQtd3JwIHtcclxuXHRwYWRkaW5nLXRvcDogMjRweDtcclxufVxyXG4uYS1tb2RhbC1zZWN0aW9uMiB7XHJcblx0cGFkZGluZzogMzBweCAyNHB4O1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG59XHJcbi5hLXNsaWRlci1tYWluLWltZy13cnAge1xyXG5cdG1heC13aWR0aDogNTQ1cHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYS1hcHByb3ZlLW1vZGFsLWljb24ge1xyXG5cdGZvbnQtc2l6ZTogNTFweDtcclxufVxyXG4uYS1hcHByb3ZlLW1vZGFsLWNudDItd3JwIHtcclxuXHRwYWRkaW5nOiAxMHB4IDAgMjVweDtcclxufVxyXG4uYS1tb2RhbC1wcm9maWxlLWxpbmtzIHtcclxuXHRwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uYS1tb2RhbC1sZyB7XHJcblx0bWF4LXdpZHRoOiAxMTcwcHggIWltcG9ydGFudDtcclxufVxyXG4uYS1tb2RhbC1jb250ZW50IHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWFnZS1wbGFjZWhvbGRlci1uYXYtZG90cyB7XHJcblx0d2lkdGg6IDg4cHg7XHJcblx0aGVpZ2h0OiA4OHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNiN2I3Yjc7XHJcbn1cclxuLmltYWdlLXBsYWNlaG9sZGVyIHtcclxuXHR3aWR0aDogNTE0cHg7XHJcblx0aGVpZ2h0OiA1MTRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjdiN2I3O1xyXG59XHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuXHRtYXgtd2lkdGg6IDU0NXB4O1xyXG5cdG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5hLW9uaG9sZC1idG4ge1xyXG5cdGNvbG9yOiAjOTQ3NDEyICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTEsIDE5NiwgMzEsIDAuMSkgIWltcG9ydGFudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmJjNDFmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtcmVqZWN0LWJ0biB7XHJcblx0Y29sb3I6ICNmODQ4M2QgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgNzIsIDYxLCAwLjEpICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y4NDgzZCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJvdXNlbC1jb250cm9sLmxlZnQsXHJcbi5jYXJvdXNlbC1jb250cm9sLnJpZ2h0IHtcclxuXHRiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLXNob3J0bGlzdC1idG4ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyZDk4NTE7XHJcbn1cclxuXHJcbi5hLW1vZGFsLW9iaG9sZC1idG4ge1xyXG5cdGNvbG9yOiAjOTQ3NDEyICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTEsIDE5NiwgMzEsIDAuMSkgIWltcG9ydGFudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmJjNDFmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtY29uZmlybS1idG4ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyZDk4NTEgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyZDk4NTEgIWltcG9ydGFudDtcclxufVxyXG4uYS1yZXZpZXctYnRuIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWFnZS1wbGFjZWhvbGRlciB7XHJcblx0d2lkdGg6IDUxNHB4O1xyXG5cdGhlaWdodDogNTE0cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2I3YjdiNztcclxufVxyXG5cclxuLmxvYWRlci1wYXJlbnQge1xyXG5cdG1pbi1oZWlnaHQ6IDgwdmg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5yZWFzb24tcmVqZWN0LWJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgNzIsNjEsIDAuMSk7XHJcbiAgY29sb3I6I0Y4NDgzRDtcclxufVxyXG4udGV4dGFyZWEtcmVhc29uIHtcclxuICByZXNpemU6IG5vbmU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/challenge-dashboard/screens/sol-individual/sol-individual.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/seeker/challenge-dashboard/screens/sol-individual/sol-individual.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: SolIndividualComponent */

  /***/
  function srcAppSeekerChallengeDashboardScreensSolIndividualSolIndividualComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolIndividualComponent", function () {
      return SolIndividualComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboardmain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../dashboardmain.service */
    "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _review_applications_application_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../review-applications/application.service */
    "./src/app/seeker/challenge-dashboard/screens/review-applications/application.service.ts");

    let SolIndividualComponent = class SolIndividualComponent {
      constructor(_sol, route, location, router, toastr, _app) {
        this._sol = _sol;
        this.route = route;
        this.location = location;
        this.router = router;
        this.toastr = toastr;
        this._app = _app;
        this.server_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].server_url;
        this.disable_rjt_btn = true;
        this.route.params.subscribe(params => {
          this.applicationId = params.id;
        });
      }

      ngOnInit() {
        this.fetchSolutionData();
      }

      goBack() {
        this.location.back();
      }

      fetchSolutionData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.isLoading = true;
            this.applicationData = yield this._sol.applicationById(this.applicationId);
            this.isLoading = false;
          } catch (err) {}
        });
      }

      moveToOnhold() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.onHoldLoading = true;
          yield this._sol.updateApplicationStatus(this.applicationData.data.id, "Onhold");
          this.toastr.info("", "Application moved to Onhold");
          $("#shortListModal").modal("hide");
          this.fetchSolutionData();
          this.onHoldLoading = false;
        });
      }

      rejectApplication() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          // this.rejectLoading = true;
          // await this._sol.updateApplicationStatus(this.applicationData.data.id, "Reject");
          // this.toastr.info("", "Application moved to Rejected");
          // this.fetchSolutionData();
          // this.rejectLoading = false;
          var post_data = {
            application_name: this.applicationData.data.name,
            seeker_id: this.applicationData.data.frg_anchor_id.frg_seeker_id,
            rejection_msg: this.rejection_msg,
            provider_id: this.applicationData.data.frg_provider_id.frg_user_id,
            user_slug: this.applicationData.data.frg_provider_id.slug
          }; // console.log(post_data)

          let resp = yield this._app.sendAppRejectionNotification(post_data);
          $('#rejectProposal').modal('hide');
        });
      }

      shortListApplication() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.shortlistLoading = true;
          yield this._sol.updateApplicationStatus(this.applicationData.data.id, "Shortlist");
          this.toastr.info("", "Application moved to Shortlist");
          $("#shortListModal").modal("hide");
          this.fetchSolutionData();
          this.shortlistLoading = false;
        });
      }

      onSelect(event) {
        if (event.target.checked) {
          this.disable_rjt_btn = false;
        } else {
          this.disable_rjt_btn = true;
        }
      }

    };

    SolIndividualComponent.ctorParameters = () => [{
      type: _dashboardmain_service__WEBPACK_IMPORTED_MODULE_4__["DashboardmainService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
    }, {
      type: _review_applications_application_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationService"]
    }];

    SolIndividualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sol-individual",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sol-individual.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/challenge-dashboard/screens/sol-individual/sol-individual.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sol-individual.component.css */
      "./src/app/seeker/challenge-dashboard/screens/sol-individual/sol-individual.component.css")).default]
    })], SolIndividualComponent);
    /***/
  }
}]);
//# sourceMappingURL=challenge-dashboard-challenge-dashboard-module-es5.js.map