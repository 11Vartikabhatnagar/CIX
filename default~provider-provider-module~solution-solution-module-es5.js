(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~provider-provider-module~solution-solution-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/solution/solution-individual/solution.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/solution/solution-individual/solution.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSolutionSolutionIndividualSolutionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container g-pt-30 g-pb-35\">\r\n\t<div class=\"g-pb-20\">\r\n\t\t<a class=\"g-fs-10 g-fw-500 primary-green-clr g-cursor-pointer\" (click)=\"goBack()\"> &lt; Back </a>\r\n\t</div>\r\n\t<div class=\"\">\r\n\t\t<div class=\"offerings-wrapper panel g-bdrrad-5px g-w-bg g-pl-13 g-pr-13 g-pb-26 g-pt-15\">\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!loading\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"!solution.data.images || solution.data.images == ''; else elseBlock\">\r\n\t\t\t\t\t\t\t\t<div class=\"image-placeholder\">\r\n\t\t\t\t\t\t\t\t\t<!-- <img src=\"assets/img/carousel-item.png\" alt=\"\" > -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-template #elseBlock>\r\n\t\t\t\t\t\t\t\t<div id=\"solutionImageSlider\" class=\"carousel slide carousel-fade\" data-interval=\"false\">\r\n\t\t\t\t\t\t\t\t\t<!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"item\" *ngFor=\"let image of solution?.data.images; let index = index\" [class.active]=\"index == 0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + image\" alt=\"solution image\" [hidden]=\"imagesLoading\" (load)=\"this.imagesLoading = false\" />\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"imagesLoading\" class=\"image-placeholder\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!-- Indicators -->\r\n\t\t\t\t\t\t\t\t\t<ol class=\"carousel-indicators g-pt-15\">\r\n\t\t\t\t\t\t\t\t\t\t<li data-target=\"#solutionImageSlider\" *ngFor=\"let image of solution?.data.images; let index = index\" [class.active]=\"index == 0\" [attr.data-slide-to]=\"index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"server_url + image\" alt=\"\" [hidden]=\"imagesLoading\" (load)=\"this.imagesLoading = false\" />\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"imagesLoading\" class=\"image-placeholder-nav-dots\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t\t<!-- Left and right controls -->\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"solution?.data.images.length > 1\">\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"left carousel-control\" href=\"#solutionImageSlider\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"right carousel-control\" href=\"#solutionImageSlider\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"loading\">\r\n\t\t\t\t\t\t\t<div id=\"solutionImageSlider\" class=\"carousel slide carousel-fade\" data-interval=\"false\">\r\n\t\t\t\t\t\t\t\t<!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"item\" *ngFor=\"let dummy of generateFake(5); let index = index\" [class.active]=\"index == 0\">\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '514px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '514px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '0',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- Indicators -->\r\n\t\t\t\t\t\t\t\t<ol class=\"carousel-indicators g-pt-15\">\r\n\t\t\t\t\t\t\t\t\t<li data-target=\"#solutionImageSlider\" *ngFor=\"let dummy of generateFake(5); let index = index\" [attr.data-slide-to]=\"index\">\r\n\t\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\t\t\t\t\t\tanimation=\"progress\"\r\n\t\t\t\t\t\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: '86px',\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: '86px',\r\n\t\t\t\t\t\t\t\t\t\t\t\t'border-radius': '4px',\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t<!-- Left and right controls -->\r\n\t\t\t\t\t\t\t\t<a class=\"left carousel-control\" href=\"#solutionImageSlider\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a class=\"right carousel-control\" href=\"#solutionImageSlider\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!loading\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"solution?.data.video_link\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Product Video link</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"g-fs-07 g-fw-400 g-black5-clr\" [href]=\"solution?.data.video_link\" target=\"_blank\">\r\n\t\t\t\t\t\t\t\t\t\t{{ solution?.data.video_link }}\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"loading\">\r\n\t\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '50%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t<!-- <div class=\"pilot-item-wrp\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-7\">\r\n                                        <div class=\"g-fs-08 g-lh-10 g-fw-500 g-black19-clr g-h-28 a-discover-title-cnt\">\r\n                                            Lorem ipsum dolor sit amet, consectr adipiscing elit. Aliquam velit lectus.\r\n                                        </div>\r\n                                        <div class=\"g-fs-07 g-lh-08 g-black8-clr g-pb-06\">\r\n                                            with Venu Shashtri for \r\n                                            <span class=\"g-fs-06 g-w-clr g-fw-600 g-p-bg g-pt-02 g-pb-02 g-pl-03 g-pr-03 g-bdrrad-4px\">\r\n                                               CHENNAI\r\n                                           </span>                                    \r\n                                       </div>\r\n                                        <div class=\"g-fs-06 g-fw-400 g-black8-clr\">\r\n                                            Started on 1 Jul 2020 \r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-5 text-center\">\r\n                                        <div class=\"g-fs-13 g-lh-10 g-fw-500 g-black19-clr g-mb-04\">\r\n                                            1 months\r\n                                        </div>\r\n                                        <div class=\"g-fs-07 g-lh-08 g-black8-clr g-mb-10\">\r\n                                            Pilot Duration                                            \r\n                                       </div>\r\n                                       <button class=\"pilot-btn\" data-toggle=\"modal\" data-target=\"#pilotModal\">\r\n                                           OPEN PILOT&nbsp;\r\n                                           <i class=\"fas fa-external-link-alt\"></i>\r\n                                       </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!loading\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-09 g-fw-500 g-blue3-clr\">\r\n\t\t\t\t\t\t\t\t\t\t{{ solution?.data.name }}\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-grey4-clr\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"solution.data.frg_provider_id.role == 'startup'\">\r\n\t\t\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500 g-cursor-pointer g-text-underline no-outline\" [routerLink]=\"['/provider', solution.data.frg_provider_id.slug]\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ solution.data.frg_provider_id.startup_company_name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span class=\"\"> <img src=\"../../../assets/img/startup_up_icon.svg\" alt=\"icon\" />&nbsp; startup</span>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"solution.data.frg_provider_id.role == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500 g-cursor-pointer g-text-underline no-outline\" [routerLink]=\"['/provider', solution.data.frg_provider_id.slug]\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ solution?.data.frg_provider_id.enterprise_company_name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span class=\"\"> <img src=\"../../../assets/img/enterprise_icon.svg\" alt=\"icon\" />&nbsp; Enterprise</span>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"solution.data.frg_provider_id.role == 'individual'\">\r\n\t\t\t\t\t\t\t\t\t\t\tby\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"g-fw-500 g-cursor-pointer g-text-underline no-outline\" [routerLink]=\"['/provider', solution.data.frg_provider_id.slug]\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ solution?.data.frg_provider_id.fullname | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span class=\"\"> <img src=\"../../../assets/img/individual_icon.svg\" alt=\"icon\" />&nbsp; Individual</span>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"g-fs-06 g-bdrrad-4px g-disp-inlblock text-center g-mt-04 g-w-clr g-fw-700 g-pt-01 g-pb-01 g-pl-06 g-pr-06\"\r\n                                        [class.g-grn-bg]=\"solution?.data.stage == 'Pilot Certified'\"\r\n                                        [class.g-yellow-bg]=\"solution?.data.stage == 'Pre Pilot'\"\r\n                                        [class.g-yellow-bg]=\"solution?.data.stage == 'Pilot'\">\r\n                                        {{solution?.data.stage | uppercase}}\r\n                                    </div> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-grey4-clr\">Posted on {{ solution?.data.created_at | date: \"d MMM yyyy\" }}</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-grey4-clr\">Last edited on {{ solution?.data.updated_at | date: \"d MMM yyyy\" }}</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"loading\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '18px', width: '100%', margin: '0px 0px 4px' }\">\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '30px', width: '70px', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '100%', margin: '0px 0px 4px' }\">\r\n\t\t\t\t\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!loading\">\r\n\t\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Challenge Sectors</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let sector of solution?.data.challenge_sectors\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"g-disp-inlblock g-pl-03 g-pr-03 g-mr-03 g-mb-02 g-bdrrad-4px g-fs-06 primary-grey-bg g-white-clr\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ sector.name | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Challenges</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let challenge of solution?.data.challenges\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"g-disp-inlblock g-pl-03 g-pr-03 g-mr-03 g-mb-02 g-bdrrad-4px g-fs-06 primary-grey-bg g-white-clr\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ challenge.name }}\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Market Domain</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let domain of solution?.data.market_domain\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-pill g-disp-inlblock g-pt-05 g-pb-05 g-pl-08 g-pr-08 g-mr-03 g-mb-02 g-fs-06 primary-grey-bg g-white-clr\">\r\n\t\t\t\t\t\t\t\t\t\t{{ domain }}\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Solution Brief</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\" [innerHtml]=\"solution?.data.solution_brief\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Value Proposition</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\" [innerHtml]=\"solution?.data.value_proposition\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Tangible Benefits</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\" [innerHtml]=\"solution?.data.tangible_benifits\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Solution Advantages</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\" [innerHtml]=\"solution?.data.solution_advantages\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Solution Readiness</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\" [innerHtml]=\"solution?.data.solution_readiness\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Track Record</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\" [innerHtml]=\"solution?.data.track_record\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Implementation Time</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\">{{ solution?.data.implementation_time.months }} Months {{ solution?.data.implementation_time.weeks }} Weeks</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">IP Status</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\">Status: {{ solution?.data.ip_details.status }}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\">Identification Number: {{ solution?.data.ip_details.id_number }}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Experts Involved</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\" [innerHtml]=\"solution?.data.experts_involved\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Other details</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-01\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\" [innerHtml]=\"solution?.data.other_details\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"loading\">\r\n\t\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '50%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '50%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '50%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '50%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '50%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '50%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-mt-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '50%', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" count=\"2\" [theme]=\"{ 'border-radius': '2px', height: '14px', width: '100%', margin: '0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<div class=\"g-pt-20\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-w-clr g-p-bg g-pt-05 g-pb-05 g-w-100per hidden\" data-toggle=\"modal\" data-target=\"#eoiModal\">\r\n\t\t\t\t\t\t\t\tSEND EOI\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"> </i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- EOI modal pop up -->\r\n<div id=\"eoiModal\" class=\"modal fade eoi-modal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<button type=\"button\" class=\"close g-fs-07 g-black14-clr g-opacity-10\" data-dismiss=\"modal\">Go back to Challenge</button>\r\n\t\t\t<div class=\"g-black14-clr g-fs-07 g-fw-500\">\r\n\t\t\t\t<span (click)=\"gotoStep(backToStep)\" class=\"g-cursor-pointer g-transition\" [ngClass]=\"{ 'g-opacity-0': !eoiStep1 }\"> < Back </span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"g-pt-15 g-pb-06\">\r\n\t\t\t\t<ul class=\"a-step-form-active-list text-center g-p-0\">\r\n\t\t\t\t\t<li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{ 'g-p-bg': !eoiStep1, 'g-blue9-bg': eoiStep1 }\" (click)=\"gotoStep('step1')\"></li>\r\n\t\t\t\t\t<li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{ 'g-p-bg': !eoiStep2, 'g-blue9-bg': eoiStep2 }\" (click)=\"gotoStep('step2')\"></li>\r\n\t\t\t\t\t<li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{ 'g-p-bg': !eoiStep3, 'g-blue9-bg': eoiStep3 }\" (click)=\"gotoStep('step3')\"></li>\r\n\t\t\t\t\t<li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{ 'g-p-bg': !eoiStep4, 'g-blue9-bg': eoiStep4 }\" (click)=\"gotoStep('step4')\"></li>\r\n\t\t\t\t\t<li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{ 'g-p-bg': !eoiStep5, 'g-blue9-bg': eoiStep5 }\" (click)=\"gotoStep('step5')\"></li>\r\n\t\t\t\t\t<li class=\"g-w-24 g-h-05 g-bdrrad-10px g-ml-03 g-mr-03\" [ngClass]=\"{ 'g-p-bg': !eoiStep6, 'g-blue9-bg': eoiStep6 }\" (click)=\"gotoStep('step6')\"></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"g-fs-18 g-fw-500 g-blue3-clr text-center g-pb-20\">Send EoI</div>\r\n\t\t\t<div class=\"eoi-step-form-wrp\">\r\n\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t<div class=\"eoi-step\" [hidden]=\"eoiStep1\">\r\n\t\t\t\t\t<form [formGroup]=\"eoiForm.Step1\" (ngSubmit)=\"stepFormSubmit('Step1')\">\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"state\" class=\"g-fs-07 g-black14-clr g-fw-500\"> State </label>\r\n\t\t\t\t\t\t\t<input name=\"state\" class=\"form-control g-blue8-bg\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"city\" class=\"g-fs-07 g-black14-clr g-fw-500\"> City </label>\r\n\t\t\t\t\t\t\t<input name=\"city\" class=\"form-control g-blue8-bg\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"pincode\" class=\"g-fs-07 g-black14-clr g-fw-500\"> Pincode </label>\r\n\t\t\t\t\t\t\t<input name=\"pincode\" class=\"form-control g-blue8-bg\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-05 g-pb-20\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Next</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t<div class=\"eoi-step\" [hidden]=\"eoiStep2\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"state\" class=\"g-fs-07 g-black14-clr g-fw-500\"> State </label>\r\n\t\t\t\t\t\t\t<textarea name=\"\" rows=\"10\" class=\"form-control g-blue8-bg\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-05 g-pb-20\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Next</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- step 3 -->\r\n\t\t\t\t<div class=\"eoi-step\" [hidden]=\"eoiStep3\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"state\" class=\"g-fs-07 g-black14-clr g-fw-500\"> State </label>\r\n\t\t\t\t\t\t\t<textarea name=\"\" rows=\"10\" class=\"form-control g-blue8-bg\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-05 g-pb-20\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Next</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- step 4 -->\r\n\t\t\t\t<div class=\"eoi-step\" [hidden]=\"eoiStep4\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"state\" class=\"g-fs-07 g-black14-clr g-fw-500\"> State </label>\r\n\t\t\t\t\t\t\t<textarea name=\"\" rows=\"10\" class=\"form-control g-blue8-bg\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-05 g-pb-20\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Next</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- step 5 -->\r\n\t\t\t\t<div class=\"eoi-step\" [hidden]=\"eoiStep5\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"state\" class=\"g-fs-07 g-black14-clr g-fw-500\"> State </label>\r\n\t\t\t\t\t\t\t<textarea name=\"\" rows=\"10\" class=\"form-control g-blue8-bg\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-05 g-pb-20\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Next</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- step 6 -->\r\n\t\t\t\t<div class=\"eoi-step\" [hidden]=\"eoiStep6\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"state\" class=\"g-fs-07 g-black14-clr g-fw-500\"> State </label>\r\n\t\t\t\t\t\t\t<textarea name=\"\" rows=\"3\" class=\"form-control g-blue8-bg\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t<label for=\"state\" class=\"g-fs-07 g-black14-clr g-fw-500\"> State </label>\r\n\t\t\t\t\t\t\t<textarea name=\"\" rows=\"3\" class=\"form-control g-blue8-bg\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-05 g-pb-20\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n\t\t\t\t\t\t\t\tNext&nbsp;\r\n\t\t\t\t\t\t\t\t<!-- <i class=\"fas fa-circle-notch fa-spin\"></i> -->\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Pilot Modal -->\r\n<div id=\"pilotModal\" class=\"modal fade pilot-modal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<span class=\"close\" data-dismiss=\"modal\">&times;</span>\r\n\t\t\t<div class=\"row g-pb-25\">\r\n\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t<div class=\"g-fs-09 g-lh-11 g-fw-500 g-blue3-clr\">Lorem ipsum dolor sit amet, consectr adipiscing elit. Aliquam velit lectus.</div>\r\n\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr\">\r\n\t\t\t\t\t\twith Venu Shashtri for\r\n\t\t\t\t\t\t<span class=\"g-fs-06 g-w-clr g-fw-600 g-p-bg g-pt-02 g-pb-02 g-pl-03 g-pr-03 g-bdrrad-4px\"> CHENNAI </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t<div class=\"pilot-duration\">\r\n\t\t\t\t\t\t<div class=\"g-fs-13 g-lh-10 g-fw-500 g-black19-clr g-mb-04\">1 month</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-black8-clr g-mb-10\">Pilot Duration</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-7\">\r\n\t\t\t\t\t<div class=\"g-pb-15\">\r\n\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Scope Of Customization</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\">\r\n\t\t\t\t\t\t\tAenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tellus, molestie et pharetra vitae, lacinia a diam. Etiam cursus\r\n\t\t\t\t\t\t\tdolor eu libero interdum tincidunt. Aenean odio neque.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-pb-15\">\r\n\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Deployment Timeline</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\">\r\n\t\t\t\t\t\t\tAenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tellus, molestie et pharetra vitae, lacinia a diam. Etiam cursus\r\n\t\t\t\t\t\t\tdolor eu libero interdum tincidunt. Aenean odio neque.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-pb-15\">\r\n\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Budgeting for Pilot</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\">Capital Expense - ₹4,00,000</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\">Operational Expense - ₹2,00,000</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\">Total Budget - ₹6,00,000</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-pb-15\">\r\n\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Deployment Timeline</div>\r\n\t\t\t\t\t\t<div class=\"g-fs-07 g-fw-400 g-black5-clr\">\r\n\t\t\t\t\t\t\tAenean et pellentesque dolor, non commodo sapien. Nulla ullamcorper in est quis sagittis. Ut arcu tellus, molestie et pharetra vitae, lacinia a diam. Etiam cursus\r\n\t\t\t\t\t\t\tdolor eu libero interdum tincidunt. Aenean odio neque.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<div class=\"g-fs-08 g-fw-500 g-blue3-clr\">Past Pilot Documentation</div>\r\n\t\t\t\t\t\t<div class=\"pilot-doc\">\r\n\t\t\t\t\t\t\t<span>Case Studies.zip</span>\r\n\t\t\t\t\t\t\t<span>Download File&nbsp;<i class=\"fas fa-arrow-down\"></i></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t<div class=\"reports-wrp\">\r\n\t\t\t\t\t\t<div class=\"lable\">\r\n\t\t\t\t\t\t\t<span>REPORTS</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"report-downloads\">\r\n\t\t\t\t\t\t\t<div class=\"report-download-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"row g-pb-05\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Pilot Kickoff Report.pdf</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t>Download File&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-arrow-down\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-400 g-black8-clr\">Uploaded on 30 Aug 2020</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-400 g-black8-clr\">By Venu Shashtri</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"report-download-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"row g-pb-05\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Pilot_Report.pdf</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t>Download File&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-arrow-down\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-400 g-black8-clr\">Uploaded on 30 Aug 2020</div>\r\n\t\t\t\t\t\t\t\t<div class=\"g-fs-06 g-fw-400 g-black8-clr\">By Venu Shashtri</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-w-clr g-p-bg g-pt-05 g-pb-05 g-w-100per\">\r\n\t\t\t\t\t\t\t\tUPLOAD REPORT &nbsp;\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-arrow-up\"></i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"g-mt-20 text-right\">\r\n\t\t\t\t\t\t<button class=\"btn g-bdr-005 g-w-bg g-black5-brdr g-pt-02 g-pb-02 g-pl-06 g-pr-06 g-fw-700 g-fs-07\">\r\n\t\t\t\t\t\t\tVIEW EOI &nbsp;\r\n\t\t\t\t\t\t\t<i class=\"fas fa-arrow-right\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Pilot Modal -->\r\n<div id=\"asdas\" class=\"modal fade\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\"></div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/solution/solution.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/solution/solution.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSolutionSolutionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/permission.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/permission.guard.ts ***!
    \*************************************/

  /*! exports provided: PermissionGuard */

  /***/
  function srcAppPermissionGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionGuard", function () {
      return PermissionGuard;
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


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");

    let PermissionGuard = class PermissionGuard {
      constructor(toastr) {
        this.toastr = toastr;
        this.loggedInUser$.subscribe(resp => {
          this.userType$ = resp.LoggedInUser.userType;
          this.userTypeId$ = resp.LoggedInUser.userTypeId;
        });
      }

      canActivate(route, state) {
        if (route.data.permission.indexOf(this.userType$) > -1) {
          return true;
        } else {
          this.toastr.warning("You have no access to view this page.", "Access Denied");
          return false;
        }
      }

    };

    PermissionGuard.ctorParameters = () => [{
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__["LoggedInUserState"])], PermissionGuard.prototype, "loggedInUser$", void 0);
    PermissionGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], PermissionGuard);
    /***/
  },

  /***/
  "./src/app/services/solutions.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/solutions.service.ts ***!
    \***********************************************/

  /*! exports provided: SolutionsService */

  /***/
  function srcAppServicesSolutionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolutionsService", function () {
      return SolutionsService;
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
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let SolutionsService = class SolutionsService {
      constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
      }

      getSolutionbyId(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + '/solutions/select', {
            slug: {
              id: id
            }
          }).toPromise();
        });
      }

    };

    SolutionsService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    SolutionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SolutionsService);
    /***/
  },

  /***/
  "./src/app/solution/solution-individual/solution.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/solution/solution-individual/solution.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSolutionSolutionIndividualSolutionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".eoi-modal .modal-dialog{\r\n    width:600px;\r\n}\r\n\r\n.pilot-modal .modal-dialog{\r\n    width:950px;\r\n}\r\n\r\n.eoi-modal .modal-content,\r\n.pilot-modal .modal-content\r\n{\r\n    padding:36px 36px;\r\n    box-shadow: none;\r\n    border:none;\r\n}\r\n\r\n.eoi-step-form-wrp{\r\n    max-width:460px;\r\n    margin: auto;\r\n}\r\n\r\n.pilot-modal .close{\r\n    font-size: 23px !important;\r\n    position: absolute;\r\n    right: 30px;\r\n    display:inline-block;\r\n    border:1px solid;\r\n    z-index:10;\r\n    padding:2px 6px;\r\n    border-radius:6px;\r\n}\r\n\r\n.pilot-doc{\r\n    margin-top:8px;\r\n    padding:12px 15px;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    color: var(--black5);\r\n    border: 1px solid var(--grey-clr);\r\n    border-radius:10px;\r\n}\r\n\r\n.pilot-doc span:nth-child(1){\r\n    padding-right:8px;\r\n    text-decoration:underline;\r\n}\r\n\r\n.pilot-doc span:nth-child(2){\r\n    font-weight:600;\r\n    cursor: pointer;\r\n}\r\n\r\n.reports-wrp{\r\n    padding:10px;\r\n    border: 1px solid var(--grey-clr);\r\n    border-radius:10px;\r\n}\r\n\r\n.reports-wrp .lable{\r\n    margin-top:-20px;\r\n    margin-bottom:10px;\r\n}\r\n\r\n.reports-wrp .lable > span{\r\n    background-color:var(--white);\r\n    font-size:16px;\r\n    color:var(--grey-clr);\r\n    font-weight:500;\r\n    padding:0 6px;\r\n}\r\n\r\n.report-downloads{\r\n    min-height:500px;\r\n}\r\n\r\n.report-download-item{\r\n    padding:15px;\r\n    border:1px solid var(--primary-clr);\r\n    border-radius:6px;\r\n    margin-bottom:10px;\r\n}\r\n\r\n.report-download-item .row .col-sm-6:nth-child(1) span{\r\n    font-size: 14px;\r\n    color: var(--black6);\r\n    text-decoration: underline;\r\n    min-height: 2.5rem;\r\n    display: block;\r\n}\r\n\r\n.report-download-item .row .col-sm-6:nth-child(2) span{\r\n    font-size: 14px;\r\n    color: var(--black5);\r\n    display:block;\r\n    text-align:right;\r\n    font-weight:500;\r\n    cursor: pointer;\r\n}\r\n\r\n.image-placeholder {\r\n    width: 514px;\r\n    height: 514px;\r\n    background-color: #b7b7b7;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29sdXRpb24vc29sdXRpb24taW5kaXZpZHVhbC9zb2x1dGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOzs7SUFHSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NvbHV0aW9uL3NvbHV0aW9uLWluZGl2aWR1YWwvc29sdXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lb2ktbW9kYWwgLm1vZGFsLWRpYWxvZ3tcclxuICAgIHdpZHRoOjYwMHB4O1xyXG59XHJcblxyXG4ucGlsb3QtbW9kYWwgLm1vZGFsLWRpYWxvZ3tcclxuICAgIHdpZHRoOjk1MHB4O1xyXG59XHJcblxyXG4uZW9pLW1vZGFsIC5tb2RhbC1jb250ZW50LFxyXG4ucGlsb3QtbW9kYWwgLm1vZGFsLWNvbnRlbnRcclxue1xyXG4gICAgcGFkZGluZzozNnB4IDM2cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbi5lb2ktc3RlcC1mb3JtLXdycHtcclxuICAgIG1heC13aWR0aDo0NjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnBpbG90LW1vZGFsIC5jbG9zZXtcclxuICAgIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjoxcHggc29saWQ7XHJcbiAgICB6LWluZGV4OjEwO1xyXG4gICAgcGFkZGluZzoycHggNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo2cHg7XHJcbn1cclxuXHJcbi5waWxvdC1kb2N7XHJcbiAgICBtYXJnaW4tdG9wOjhweDtcclxuICAgIHBhZGRpbmc6MTJweCAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrNSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWNscik7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn1cclxuXHJcbi5waWxvdC1kb2Mgc3BhbjpudGgtY2hpbGQoMSl7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjhweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5waWxvdC1kb2Mgc3BhbjpudGgtY2hpbGQoMil7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4ucmVwb3J0cy13cnB7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWNscik7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn1cclxuXHJcbi5yZXBvcnRzLXdycCAubGFibGV7XHJcbiAgICBtYXJnaW4tdG9wOi0yMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcblxyXG4ucmVwb3J0cy13cnAgLmxhYmxlID4gc3BhbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBjb2xvcjp2YXIoLS1ncmV5LWNscik7XHJcbiAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICBwYWRkaW5nOjAgNnB4O1xyXG59XHJcblxyXG4ucmVwb3J0LWRvd25sb2Fkc3tcclxuICAgIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbn1cclxuXHJcbi5yZXBvcnQtZG93bmxvYWQtaXRlbXtcclxuICAgIHBhZGRpbmc6MTVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jbHIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czo2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbn1cclxuXHJcbi5yZXBvcnQtZG93bmxvYWQtaXRlbSAucm93IC5jb2wtc20tNjpudGgtY2hpbGQoMSkgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjazYpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBtaW4taGVpZ2h0OiAyLjVyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnJlcG9ydC1kb3dubG9hZC1pdGVtIC5yb3cgLmNvbC1zbS02Om50aC1jaGlsZCgyKSBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrNSk7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW1hZ2UtcGxhY2Vob2xkZXIge1xyXG4gICAgd2lkdGg6IDUxNHB4O1xyXG4gICAgaGVpZ2h0OiA1MTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiN2I3Yjc7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/solution/solution-individual/solution.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/solution/solution-individual/solution.component.ts ***!
    \********************************************************************/

  /*! exports provided: SolutionIndividualComponent */

  /***/
  function srcAppSolutionSolutionIndividualSolutionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolutionIndividualComponent", function () {
      return SolutionIndividualComponent;
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


    var _services_solutions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/solutions.service */
    "./src/app/services/solutions.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    let SolutionIndividualComponent = class SolutionIndividualComponent {
      constructor(route, solutions, location, router, fb, toastr) {
        this.route = route;
        this.solutions = solutions;
        this.location = location;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.server_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].server_url;
        this.imagesLoading = true;
        this.isSubmitted = {
          Step1: false,
          Step2: false,
          Step3: false,
          Step4: false,
          Step5: false,
          Step6: false
        };
        this.eoiForm = {
          Step1: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
          Step2: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
          Step3: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
          Step4: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
          Step5: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"],
          Step6: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]
        };
        this.route.params.subscribe(params => this.id = params.id);
        this.loggedInUser$.subscribe(resp => {
          this.currentSeekerId = resp.LoggedInUser.userTypeId;
        });
      }

      ngOnInit() {
        this.eoiStep1 = false;
        this.eoiStep2 = true;
        this.eoiStep3 = true;
        this.eoiStep4 = true;
        this.eoiStep5 = true;
        this.eoiStep6 = true;
        this.backToStep = "step1";
        this.eoiForm = {
          Step1: this.fb.group({
            state: [""],
            city: [""],
            pincode: [""]
          })
        };
        this.getSolution();
      }

      get formControlStep1() {
        return this.eoiForm.Step1.controls;
      }

      get formControlStep2() {
        return this.eoiForm.Step2.controls;
      }

      get formControlStep3() {
        return this.eoiForm.Step3.controls;
      }

      get formControlStep4() {
        return this.eoiForm.Step4.controls;
      }

      get formControlStep5() {
        return this.eoiForm.Step5.controls;
      }

      get formControlStep6() {
        return this.eoiForm.Step6.controls;
      }

      getSolution() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.loading = true;
            this.solution = yield this.solutions.getSolutionbyId(this.id);
            this.loading = false;
          } catch (err) {
            console.log(err);
          }
        });
      }

      goBack() {
        if (window.history.length > 1) {
          this.location.back();
        } else {
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

          case "Step4":
            {
              this.isSubmitted.Step4 = true;
              this.ShowNextStep(formIndex);
              break;
            }

          case "Step5":
            {
              this.isSubmitted.Step5 = true;
              this.ShowNextStep(formIndex);
              break;
            }

          case "Step6":
            {
              this.isSubmitted.Step6 = true;
              this.ShowNextStep(formIndex);
            }
        }
      }

      ShowNextStep(formIndex) {
        if (formIndex == "Step1" && this.eoiForm.Step1.valid) {
          this.gotoStep("step2");
        } else if (formIndex == "Step2" && this.eoiForm.Step2.valid) {
          this.gotoStep("step3");
        } else if (formIndex == "Step3" && this.eoiForm.Step3.valid) {
          this.gotoStep("step4");
        } else if (formIndex == "Step4" && this.eoiForm.Step4.valid) {
          this.gotoStep("step5");
        } else if (formIndex == "Step5" && this.eoiForm.Step5.valid) {
          this.gotoStep("step6");
        } else if (formIndex == "Step6" && this.eoiForm.Step6.valid) {// this.createAnchor();
        } else {
          this.toastr.error("", "Please provide the required values to proceed further");
        }
      }

      gotoStep(step) {
        switch (step) {
          case "step1":
            {
              this.eoiStep1 = false;
              this.eoiStep2 = true;
              this.eoiStep3 = true;
              this.eoiStep4 = true;
              this.eoiStep5 = true;
              this.eoiStep6 = true;
              break;
            }

          case "step2":
            {
              this.eoiStep1 = true;
              this.eoiStep2 = false;
              this.eoiStep3 = true;
              this.eoiStep4 = true;
              this.eoiStep5 = true;
              this.eoiStep6 = true;
              this.backToStep = "step1";
              break;
            }

          case "step3":
            {
              this.eoiStep1 = true;
              this.eoiStep2 = true;
              this.eoiStep3 = false;
              this.eoiStep4 = true;
              this.eoiStep5 = true;
              this.eoiStep6 = true;
              this.backToStep = "step2";
              break;
            }

          case "step4":
            {
              this.eoiStep1 = true;
              this.eoiStep2 = true;
              this.eoiStep3 = true;
              this.eoiStep4 = false;
              this.eoiStep5 = true;
              this.eoiStep6 = true;
              this.backToStep = "step3";
              break;
            }

          case "step5":
            {
              this.eoiStep1 = true;
              this.eoiStep2 = true;
              this.eoiStep3 = true;
              this.eoiStep4 = true;
              this.eoiStep5 = false;
              this.eoiStep6 = true;
              this.backToStep = "step4";
              break;
            }

          case "step6":
            {
              this.eoiStep1 = true;
              this.eoiStep2 = true;
              this.eoiStep3 = true;
              this.eoiStep4 = true;
              this.eoiStep5 = true;
              this.eoiStep6 = false;
              this.backToStep = "step5";
              break;
            }
        }
      }

    };

    SolutionIndividualComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _services_solutions_service__WEBPACK_IMPORTED_MODULE_4__["SolutionsService"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserState"])], SolutionIndividualComponent.prototype, "loggedInUser$", void 0);
    SolutionIndividualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-solution",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./solution.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/solution/solution-individual/solution.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./solution.component.css */
      "./src/app/solution/solution-individual/solution.component.css")).default]
    })], SolutionIndividualComponent);
    /***/
  },

  /***/
  "./src/app/solution/solution-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/solution/solution-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: SolutionRoutingModule */

  /***/
  function srcAppSolutionSolutionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolutionRoutingModule", function () {
      return SolutionRoutingModule;
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


    var _solution_individual_solution_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./solution-individual/solution.component */
    "./src/app/solution/solution-individual/solution.component.ts");
    /* harmony import */


    var _solution_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./solution.component */
    "./src/app/solution/solution.component.ts");
    /* harmony import */


    var _permission_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../permission.guard */
    "./src/app/permission.guard.ts");

    const routes = [{
      path: '',
      component: _solution_component__WEBPACK_IMPORTED_MODULE_4__["SolutionComponent"],
      children: [{
        path: '',
        redirectTo: '/discover/solutions',
        pathMatch: 'full'
      }, {
        path: ':id',
        component: _solution_individual_solution_component__WEBPACK_IMPORTED_MODULE_3__["SolutionIndividualComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_5__["PermissionGuard"]],
        data: {
          permission: ['seeker']
        }
      }]
    }];
    let SolutionRoutingModule = class SolutionRoutingModule {};
    SolutionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SolutionRoutingModule);
    /***/
  },

  /***/
  "./src/app/solution/solution.component.css":
  /*!*************************************************!*\
    !*** ./src/app/solution/solution.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSolutionSolutionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbHV0aW9uL3NvbHV0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/solution/solution.component.ts":
  /*!************************************************!*\
    !*** ./src/app/solution/solution.component.ts ***!
    \************************************************/

  /*! exports provided: SolutionComponent */

  /***/
  function srcAppSolutionSolutionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolutionComponent", function () {
      return SolutionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SolutionComponent = class SolutionComponent {
      constructor() {}

      ngOnInit() {}

    };
    SolutionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-solution',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./solution.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/solution/solution.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./solution.component.css */
      "./src/app/solution/solution.component.css")).default]
    })], SolutionComponent);
    /***/
  },

  /***/
  "./src/app/solution/solution.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/solution/solution.module.ts ***!
    \*********************************************/

  /*! exports provided: SolutionModule */

  /***/
  function srcAppSolutionSolutionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolutionModule", function () {
      return SolutionModule;
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


    var _solution_individual_solution_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./solution-individual/solution.component */
    "./src/app/solution/solution-individual/solution.component.ts");
    /* harmony import */


    var _solution_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./solution-routing.module */
    "./src/app/solution/solution-routing.module.ts");
    /* harmony import */


    var _solution_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./solution.component */
    "./src/app/solution/solution.component.ts");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */


    var _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/widgets/widgets.module */
    "./src/app/shared/widgets/widgets.module.ts");

    let SolutionModule = class SolutionModule {};
    SolutionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_solution_component__WEBPACK_IMPORTED_MODULE_6__["SolutionComponent"], _solution_individual_solution_component__WEBPACK_IMPORTED_MODULE_4__["SolutionIndividualComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _solution_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolutionRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__["NgxSkeletonLoaderModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__["ImageCropperModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"], _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_10__["WidgetsModule"]],
      exports: [_solution_component__WEBPACK_IMPORTED_MODULE_6__["SolutionComponent"], _solution_individual_solution_component__WEBPACK_IMPORTED_MODULE_4__["SolutionIndividualComponent"]]
    })], SolutionModule);
    /***/
  }
}]);
//# sourceMappingURL=default~provider-provider-module~solution-solution-module-es5.js.map