(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seeker-seeker-module"], {
  /***/
  "./node_modules/file-saver/dist/FileSaver.min.js":
  /*!*******************************************************!*\
    !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFileSaverDistFileSaverMinJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    (function (a, b) {
      if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
    })(this, function () {
      "use strict";

      function b(a, b) {
        return "undefined" == typeof b ? b = {
          autoBom: !1
        } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
          autoBom: !b
        }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
          type: a.type
        }) : a;
      }

      function c(a, b, c) {
        var d = new XMLHttpRequest();
        d.open("GET", a), d.responseType = "blob", d.onload = function () {
          g(d.response, b, c);
        }, d.onerror = function () {
          console.error("could not download file");
        }, d.send();
      }

      function d(a) {
        var b = new XMLHttpRequest();
        b.open("HEAD", a, !1);

        try {
          b.send();
        } catch (a) {}

        return 200 <= b.status && 299 >= b.status;
      }

      function e(a) {
        try {
          a.dispatchEvent(new MouseEvent("click"));
        } catch (c) {
          var b = document.createEvent("MouseEvents");
          b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
        }
      }

      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
          a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
          g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
        var i = f.URL || f.webkitURL,
            j = document.createElement("a");
        g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
          i.revokeObjectURL(j.href);
        }, 4E4), setTimeout(function () {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
        if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
          var i = document.createElement("a");
          i.href = f, i.target = "_blank", setTimeout(function () {
            e(i);
          });
        }
      } : function (b, d, e, g) {
        if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
        var h = "application/octet-stream" === b.type,
            i = /constructor/i.test(f.HTMLElement) || f.safari,
            j = /CriOS\/[\d]+/.test(navigator.userAgent);

        if ((j || h && i || a) && "undefined" != typeof FileReader) {
          var k = new FileReader();
          k.onloadend = function () {
            var a = k.result;
            a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
          }, k.readAsDataURL(b);
        } else {
          var l = f.URL || f.webkitURL,
              m = l.createObjectURL(b);
          g ? g.location = m : location.href = m, g = null, setTimeout(function () {
            l.revokeObjectURL(m);
          }, 4E4);
        }
      });
      f.saveAs = g.saveAs = g, true && (module.exports = g);
    }); //# sourceMappingURL=FileSaver.min.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/components/challenge-draft-item/challenge-draft-item.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/components/challenge-draft-item/challenge-draft-item.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerComponentsChallengeDraftItemChallengeDraftItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"data != null\">\r\n\t<div class=\"anchor-item\">\r\n\t\t<div class=\"wrap\" routerLink=\"challenge/{{ data.id }}/edit\" [queryParams]=\"{ type: 'draft' }\">\r\n\t\t\t<div class=\"title\">\r\n\t\t\t\t{{ data.frg_challenge_id.name.length > 60 ? (data.frg_challenge_id.name | slice: 0:60) + \"..\" : data.frg_challenge_id.name }}\r\n\t\t\t</div>\r\n\t\t\t<div class=\"sector\">\r\n\t\t\t\t{{ data.frg_challenge_id.frg_challenge_sector_id?.name | titlecase }}\r\n\t\t\t</div>\r\n\t\t\t<div class=\"item-footer\">\r\n\t\t\t\t<div class=\"last-edit\">\r\n\t\t\t\t\t<div class=\"count\">Last edited {{ data.updated_at | date: \"MMM d\" }}</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"count\"><span>Draft</span></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"menu\">\r\n\t\t\t<div class=\"dropdown dropleft\">\r\n\t\t\t\t<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t<i class=\"fas fa-ellipsis-h\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n\t\t\t\t\t<span routerLink=\"challenge/{{ data.id }}/edit\" [queryParams]=\"{ type: 'draft' }\">\r\n\t\t\t\t\t\t<i class=\"fas fa-pen g-mr-05\"></i>\r\n\t\t\t\t\t\tEdit Draft\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span data-toggle=\"modal\" [attr.data-target]=\"'#deleteChallengeDraft_' + Id\">\r\n\t\t\t\t\t\t<i class=\"far fa-trash-alt g-mr-05\"></i>\r\n\t\t\t\t\t\tDelete Draft\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade a-create-challenge-modal\" id=\"deleteChallengeDraft_{{ Id }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog a-challenge-schema-modal\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-pl-14 g-pr-14 g-pt-16 g-pb-16\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<div class=\"g-fs-21 g-war-clr\"><i class=\"fas fa-exclamation-triangle\"></i></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 g-black5-clr text-left\">\r\n\t\t\t\t\t\t\t\tAre you sure you want to delete the\r\n\t\t\t\t\t\t\t\t<span class=\"g-fw-500\">{{ data.frg_challenge_id.name }}</span> ?\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-fw-400 body-light-clr text-left g-pt-03\">Deleted drafts cannot be undone</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-16 text-left\">\r\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"deleteChallengeDraft(data.id)\" class=\"btn g-bdr-005 g-war-brdr g-war-bg g-w-clr g-fs-07 g-pt-04 g-pb-04\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"deleteLoading; else draftDelBtn\"> Deleting...<i class=\"fas fa-circle-notch fa-spin\"></i> </ng-container>\r\n\t\t\t\t\t\t\t\t<ng-template #draftDelBtn>Yes, Continue</ng-template>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-06 g-fs-07 g-pt-04 g-pb-04 g-pl-08 g-pr-08\" data-dismiss=\"modal\">Cancel</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/components/challenge-schema-item/challenge-schema-item.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/components/challenge-schema-item/challenge-schema-item.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerComponentsChallengeSchemaItemChallengeSchemaItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"data != null\">\r\n\t<div class=\"anchor-item\">\r\n\t\t<div class=\"wrap\" routerLink=\"/challenge/{{ data.frg_challenge_id.id }}/anchor/{{ data.id }}\">\r\n\t\t\t<div class=\"title\">\r\n\t\t\t\t{{ data.frg_challenge_id.name.length > 60 ? (data.frg_challenge_id.name | slice: 0:60) + \"..\" : data.frg_challenge_id.name }}\r\n\t\t\t</div>\r\n\t\t\t<div class=\"sector\">\r\n\t\t\t\t{{ data.frg_challenge_id.frg_challenge_sector_id?.name | titlecase }}\r\n\t\t\t</div>\r\n\t\t\t<div class=\"item-footer\">\r\n\t\t\t\t<div class=\"status-tag\">\r\n\t\t\t\t\t{{ data.challenge_status }}\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"count\">\r\n\t\t\t\t\t<span>{{ data.frg_challenge_id.solutions?.length }}</span> Solutions\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<ng-container *ngIf=\"viewType == 'private'\">\r\n\t\t\t<div class=\"menu\">\r\n\t\t\t\t<div class=\"dropdown dropleft\">\r\n\t\t\t\t\t<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t<i class=\"fas fa-ellipsis-h\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n\t\t\t\t\t\t<span routerLink=\"challenge/{{ data.id }}/edit\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-pen g-mr-05\"></i>\r\n\t\t\t\t\t\t\tEdit Challenge\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"data.challenge_status == 'Awaiting Approval' || data.challenge_status == 'Closed'\">\r\n\t\t\t\t\t\t\t<span data-toggle=\"modal\" [attr.data-target]=\"'#deleteChallenge_' + Id\">\r\n\t\t\t\t\t\t\t\t<i class=\"far fa-trash-alt g-mr-05\"></i>\r\n\t\t\t\t\t\t\t\tDelete Challenge\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"data.challenge_status != 'Awaiting Approval' && data.status != 'Closed'\">\r\n\t\t\t\t\t\t\t<span data-toggle=\"modal\" [attr.data-target]=\"'#closeChallenge_' + Id\">\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-times g-mr-05\"></i>\r\n\t\t\t\t\t\t\t\tClose Challenge\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</ng-container>\r\n\r\n<!-- Delete Modal -->\r\n<div class=\"modal fade a-create-challenge-modal\" id=\"deleteChallenge_{{ Id }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog a-challenge-schema-modal\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-pl-14 g-pr-14 g-pt-16 g-pb-16\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<div class=\"g-fs-21 g-war-clr\"><i class=\"fas fa-exclamation-triangle\"></i></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 g-black5-clr text-left\">\r\n\t\t\t\t\t\t\t\tAre you sure you want to delete the\r\n\t\t\t\t\t\t\t\t<span class=\"g-fw-500\">{{ data.frg_challenge_id.name }}</span> ?\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-fw-400 body-light-clr text-left g-pt-03\">Deleted challenge cannot be undone</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-16 text-left\">\r\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"deleteChallenge()\" class=\"btn g-bdr-005 g-war-brdr g-war-bg g-w-clr g-fs-07 g-pt-04 g-pb-04\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"deleteLoading; else delElseBlock\"> Deleting...<i class=\"fas fa-circle-notch fa-spin\"></i> </ng-container>\r\n\t\t\t\t\t\t\t\t<ng-template #delElseBlock>Yes, Continue</ng-template>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-06 g-fs-07 g-pt-04 g-pb-04 g-pl-08 g-pr-08\" data-dismiss=\"modal\">Cancel</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Close Modal -->\r\n<div class=\"modal a-create-challenge-modal\" id=\"closeChallenge_{{ Id }}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog a-challenge-schema-modal\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-pl-14 g-pr-14 g-pt-16 g-pb-16\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<div class=\"g-fs-21 g-war-clr\"><i class=\"fas fa-exclamation-triangle\"></i></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 g-black5-clr text-left\">Submit the Pilot Report to initiate closing of the Challenge.</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-07 g-lh-08 g-fw-400 body-light-clr text-left g-pt-03\">\r\n\t\t\t\t\t\t\t\tBy closing the challenge, it’ll still be available in the archived section of respective city\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"g-pt-16 text-left\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-p-brdr g-p-bg g-w-clr g-fs-07 g-pt-04 g-pb-04\" (click)=\"handleCloseChallenge()\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"closeLoading; else elseBlock\"> Closing...<i class=\"fas fa-circle-notch fa-spin\"></i> </ng-container>\r\n\t\t\t\t\t\t\t\t<ng-template #elseBlock>Close</ng-template>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-06 g-fs-07 g-pt-04 g-pb-04 g-pl-12 g-pr-12\" data-dismiss=\"modal\">Cancel & Go back</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/components/profile-top-card/profile-top-card.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/components/profile-top-card/profile-top-card.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerComponentsProfileTopCardProfileTopCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"profile-card-parent g-pt-20 g-pb-20 g-white-bg\">\r\n\t<div class=\"container\">\r\n\t\t<!-- profile info -->\r\n\t\t<ng-container *ngIf=\"!profileLoading\">\r\n\t\t\t<div class=\"profile-flex-row\">\r\n\t\t\t\t<div class=\"profile-picture\">\r\n\t\t\t\t\t<img [src]=\"serverUrl + profileInfo.avatar\" alt=\"avatar\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"profile-meta\">\r\n\t\t\t\t\t<div class=\"user-name\">\r\n\t\t\t\t\t\t<span class=\"g-mr-10\">{{ profileInfo.fullname | titlecase }}</span>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"viewType == 'private'\">\r\n\t\t\t\t\t\t\t<span class=\"a-profile-card-edit-icon\">\r\n\t\t\t\t\t\t\t\t<a routerLink=\"edit\" class=\"g-black5-clr g-fs-08\"><i class=\"fas fa-pencil-alt\"></i></a>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"user-designation\">\r\n\t\t\t\t\t\t{{ profileInfo.designation }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"user-other-details\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<a [href]=\"'mailto:' + profileInfo.frg_user_id.email\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\r\n\t\t\t\t\t\t\t\t{{ profileInfo.frg_user_id.email }}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-phone\"></i>\r\n\t\t\t\t\t\t\t\t{{ profileInfo.frg_user_id.mobile_code }}\r\n\t\t\t\t\t\t\t\t{{ profileInfo.frg_user_id.mobile }}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<a [href]=\"profileInfo.frg_smart_city_id.website\" target=\"_blank\">\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-globe\"></i>\r\n\t\t\t\t\t\t\t\t{{ profileInfo.frg_smart_city_id.website }}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/cities', profileInfo.frg_smart_city_id.id]\">\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-map-marker-alt\"></i>\r\n\t\t\t\t\t\t\t\t{{ profileInfo.frg_smart_city_id.name | titlecase }}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"challenge-sectors\">\r\n                    <span>Challenge Sectors</span>\r\n                    <div class=\"sector-tags\">\r\n                        <div class=\"tag\"></div>\r\n                    </div>\r\n                </div> -->\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row l-sectors-cont\">\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<div class=\"g-fs-08\">\r\n\t\t\t\t\t\tChallenge Sectors\r\n\t\t\t\t\t\t<ng-container *ngIf=\"viewType == 'private'\">\r\n\t\t\t\t\t\t\t<img class=\"g-ml-05 g-cursor-pointer\" src=\"assets/img/circle_edit_icon.png\" alt=\"icon\" (click)=\"editSectors()\" />\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t<div *ngIf=\"profileInfo.challenge_sectors.length\">\r\n\t\t\t\t\t\t<span class=\"l-sect-badge g-fs-07 g-ml-03\" *ngFor=\"let item of profileInfo.challenge_sectors\">{{ item.name | titlecase }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<!-- skeleton loader -->\r\n\t\t<ng-container *ngIf=\"profileLoading\">\r\n\t\t\t<div class=\"profile-flex-row\">\r\n\t\t\t\t<div class=\"profile-picture\">\r\n\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\theight: '170px',\r\n\t\t\t\t\t\t\twidth: '170px',\r\n\t\t\t\t\t\t\t'border-radius': '50%',\r\n\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"profile-meta\">\r\n\t\t\t\t\t<div class=\"user-name\">\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '24px', width: '300px', margin: '0px 0px 5px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"user-designation\">\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '24px', width: '100px', margin: '0px 0px 5px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"user-other-details\">\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '190px', margin: '0px 25px 5px 0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '190px', margin: '0px 0px 5px 0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"user-other-details\">\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '190px', margin: '0px 25px 5px 0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '190px', margin: '0px 0px 5px 0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"challenge-sectors\">\r\n\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '16px', width: '190px', margin: '0px 0px 5px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t<div class=\"sector-tags\">\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '36px', width: '150px', margin: '0px 15px 5px 0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '36px', width: '150px', margin: '0px 0px 5px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '36px', width: '150px', margin: '0px 15px 5px 0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t<ngx-skeleton-loader animation=\"progress\" [theme]=\"{ 'border-radius': '2px', height: '36px', width: '150px', margin: '0px 0px 5px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/accepting-solutions/accepting-solutions.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/accepting-solutions/accepting-solutions.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerDashboardComponentsAcceptingSolutionsAcceptingSolutionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"challenge-item-card-wrapper\">\r\n    <div class=\"d-flex\">\r\n        <div class=\"a-challenge-main-cnt-wrp\">\r\n            <div class=\"a-challenge-title-wrp\">\r\n                <div class=\"a-chlng-title g-fs-10 g-black5-clr\">\r\n                    Water bodies preservation & monitoring\r\n                </div>\r\n            </div>\r\n            <div class=\"a-challenge-sub-cnt-wrp\">\r\n                <div class=\"a-challenge-sub-cnt g-fs-07 body-light-clr\">\r\n                    Water Management\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-status-wrp\">\r\n            <div class=\"a-challenge-badge-wrp\">\r\n                <div class=\"a-chlng-badge g-fs-07 a-accepting-solution\">\r\n                    Accepting Solutions\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-date-wrp\">\r\n            <div class=\"a-challenge-date\">\r\n                <span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n                <span class=\"g-fs-07 g-black5-clr\">21/02/21</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fs-15 g-fw-500 g-black5-clr\">\r\n                    7\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Solutions\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Proposal<br>Received\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Active Pilots\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-actions-wrp\">\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-pen\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-trash\"></i>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\"\">\r\n                <i class=\"far fa-times-circle\"></i>\r\n            </button> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"challenge-item-card-wrapper\">\r\n    <div class=\"d-flex\">\r\n        <div class=\"a-challenge-main-cnt-wrp\">\r\n            <div class=\"a-challenge-title-wrp\">\r\n                <div class=\"a-chlng-title g-fs-10 g-black5-clr\">\r\n                    Water bodies preservation & monitoring\r\n                </div>\r\n            </div>\r\n            <div class=\"a-challenge-sub-cnt-wrp\">\r\n                <div class=\"a-challenge-sub-cnt g-fs-07 body-light-clr\">\r\n                    Water Management\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-status-wrp\">\r\n            <div class=\"a-challenge-badge-wrp\">\r\n                <div class=\"a-chlng-badge g-fs-07 a-accepting-solution\">\r\n                    Accepting Solutions\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-date-wrp\">\r\n            <div class=\"a-challenge-date\">\r\n                <span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n                <span class=\"g-fs-07 g-black5-clr\">21/02/21</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fs-15 g-fw-500 g-black5-clr\">\r\n                    7\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Solutions\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Proposal<br>Received\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Active Pilots\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-actions-wrp\">\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-pen\"></i>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-trash\"></i>\r\n            </button> -->\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"far fa-times-circle\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/awaiting-approval/awaiting-approval.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/awaiting-approval/awaiting-approval.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerDashboardComponentsAwaitingApprovalAwaitingApprovalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"challenge-item-card-wrapper\">\r\n    <div class=\"d-flex\">\r\n        <div class=\"a-challenge-main-cnt-wrp\">\r\n            <div class=\"a-challenge-title-wrp\">\r\n                <div class=\"a-chlng-title g-fs-10 g-black5-clr\">\r\n                    Water bodies preservation & monitoring\r\n                </div>\r\n            </div>\r\n            <div class=\"a-challenge-sub-cnt-wrp\">\r\n                <div class=\"a-challenge-sub-cnt g-fs-07 body-light-clr\">\r\n                    Water Management\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-status-wrp\">\r\n            <div class=\"a-challenge-badge-wrp\">\r\n                <div class=\"a-chlng-badge g-fs-07 a-await-approval\">\r\n                    Await Approval\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-date-wrp\">\r\n            <div class=\"a-challenge-date\">\r\n                <span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n                <span class=\"g-fs-07 g-black5-clr\">21/02/21</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fs-15 g-fw-500 g-black5-clr\">\r\n                    7\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Solutions\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Proposal<br>Received\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Active Pilots\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-actions-wrp\">\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-pen\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-trash\"></i>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\"\">\r\n                <i class=\"far fa-times-circle\"></i>\r\n            </button> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"challenge-item-card-wrapper\">\r\n    <div class=\"d-flex\">\r\n        <div class=\"a-challenge-main-cnt-wrp\">\r\n            <div class=\"a-challenge-title-wrp\">\r\n                <div class=\"a-chlng-title g-fs-10 g-black5-clr\">\r\n                    Water bodies preservation & monitoring\r\n                </div>\r\n            </div>\r\n            <div class=\"a-challenge-sub-cnt-wrp\">\r\n                <div class=\"a-challenge-sub-cnt g-fs-07 body-light-clr\">\r\n                    Water Management\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-status-wrp\">\r\n            <div class=\"a-challenge-badge-wrp\">\r\n                <div class=\"a-chlng-badge g-fs-07 a-await-approval\">\r\n                    Await Approval\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-date-wrp\">\r\n            <div class=\"a-challenge-date\">\r\n                <span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n                <span class=\"g-fs-07 g-black5-clr\">21/02/21</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fs-15 g-fw-500 g-black5-clr\">\r\n                    7\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Solutions\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Proposal<br>Received\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Active Pilots\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-actions-wrp\">\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-pen\"></i>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-trash\"></i>\r\n            </button> -->\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"far fa-times-circle\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/awaiting-proposals/awaiting-proposals.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/awaiting-proposals/awaiting-proposals.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerDashboardComponentsAwaitingProposalsAwaitingProposalsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"challenge-item-card-wrapper\">\r\n    <div class=\"d-flex\">\r\n        <div class=\"a-challenge-main-cnt-wrp\">\r\n            <div class=\"a-challenge-title-wrp\">\r\n                <div class=\"a-chlng-title g-fs-10 g-black5-clr\">\r\n                    Water bodies preservation & monitoring\r\n                </div>\r\n            </div>\r\n            <div class=\"a-challenge-sub-cnt-wrp\">\r\n                <div class=\"a-challenge-sub-cnt g-fs-07 body-light-clr\">\r\n                    Water Management\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-status-wrp\">\r\n            <div class=\"a-challenge-badge-wrp\">\r\n                <div class=\"a-chlng-badge g-fs-07 a-await-proposal\">\r\n                    Await Proposal\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-date-wrp\">\r\n            <div class=\"a-challenge-date\">\r\n                <span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n                <span class=\"g-fs-07 g-black5-clr\">21/02/21</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fs-15 g-fw-500 g-black5-clr\">\r\n                    7\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Solutions\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Proposal<br>Received\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Active Pilots\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-actions-wrp\">\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-pen\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-trash\"></i>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\"\">\r\n                <i class=\"far fa-times-circle\"></i>\r\n            </button> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"challenge-item-card-wrapper\">\r\n    <div class=\"d-flex\">\r\n        <div class=\"a-challenge-main-cnt-wrp\">\r\n            <div class=\"a-challenge-title-wrp\">\r\n                <div class=\"a-chlng-title g-fs-10 g-black5-clr\">\r\n                    Water bodies preservation & monitoring\r\n                </div>\r\n            </div>\r\n            <div class=\"a-challenge-sub-cnt-wrp\">\r\n                <div class=\"a-challenge-sub-cnt g-fs-07 body-light-clr\">\r\n                    Water Management\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-status-wrp\">\r\n            <div class=\"a-challenge-badge-wrp\">\r\n                <div class=\"a-chlng-badge g-fs-07 a-await-proposal\">\r\n                    Await Proposal\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-date-wrp\">\r\n            <div class=\"a-challenge-date\">\r\n                <span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n                <span class=\"g-fs-07 g-black5-clr\">21/02/21</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fs-15 g-fw-500 g-black5-clr\">\r\n                    7\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Solutions\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Proposal<br>Received\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Active Pilots\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-actions-wrp\">\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-pen\"></i>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-trash\"></i>\r\n            </button> -->\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"far fa-times-circle\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/card-loader/card-loader.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/card-loader/card-loader.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerDashboardComponentsCardLoaderCardLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngFor=\"let item of [].constructor(10)\">\r\n\t<div class=\"panel g-pt-13 g-pb-12 g-pl-13 g-pr-13 g-w-bg g-bdr-01 g-brdr-grey g-bdrrad-5px\">\r\n\t\t<div class=\"panel-body g-p-0\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-8 col-xs-12\">\r\n\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\theight: '18px',\r\n\t\t\t\t\t\t\twidth: '75%'\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\twidth: '30%'\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-center\">\r\n\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\theight: '35px',\r\n\t\t\t\t\t\t\twidth: '45px',\r\n\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t'border-radius': '0',\r\n\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\twidth: '70%',\r\n\t\t\t\t\t\t\tdisplay: 'block',\r\n\t\t\t\t\t\t\tmargin: '5px auto'\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-center\">\r\n\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\tappearance=\"circle\"\r\n\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\theight: '35px',\r\n\t\t\t\t\t\t\twidth: '45px',\r\n\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\tmargin: '0px'\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t\t<ngx-skeleton-loader\r\n\t\t\t\t\t\tanimation=\"pulse\"\r\n\t\t\t\t\t\t[theme]=\"{\r\n\t\t\t\t\t\t\t'border-radius': '2px',\r\n\t\t\t\t\t\t\theight: '14px',\r\n\t\t\t\t\t\t\twidth: '70%',\r\n\t\t\t\t\t\t\tdisplay: 'block',\r\n\t\t\t\t\t\t\tmargin: '5px auto'\r\n\t\t\t\t\t\t}\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t</ngx-skeleton-loader>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/challenge-item/challenge-item.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/challenge-item/challenge-item.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerDashboardComponentsChallengeItemChallengeItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"challenge-item-card-wrapper g-cursor-pointer\" [routerLink]=\"challengeData.challenge_status != 'Awaiting Approval' ? ['challenge', challengeData.id] : []\">\r\n\t<div class=\"d-flex\">\r\n\t\t<div class=\"a-challenge-main-cnt-wrp\">\r\n\t\t\t<div class=\"a-challenge-title-wrp\">\r\n\t\t\t\t<div class=\"a-chlng-title g-fs-10 g-black5-clr\">\r\n\t\t\t\t\t{{ challengeData.frg_challenge_id.name.length > 40 ? (challengeData.frg_challenge_id.name | slice: 0:40) + \"..\" : challengeData.frg_challenge_id.name }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-challenge-sub-cnt-wrp\">\r\n\t\t\t\t<div class=\"a-challenge-sub-cnt g-fs-07 body-light-clr\">{{ challengeData.frg_challenge_id.frg_challenge_sector_id.name | titlecase }}</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-challenge-status-wrp\">\r\n\t\t\t<div class=\"a-challenge-badge-wrp\">\r\n\t\t\t\t<div\r\n\t\t\t\t\tclass=\"a-chlng-badge g-fs-07\"\r\n\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t'a-await-approval': (challengeData.challenge_status === 'Awaiting Approval'),\r\n\t\t\t\t\t\t'a-accepting-solution': challengeData.challenge_status === 'Accepting Solutions',\r\n\t\t\t\t\t\t'a-await-proposal': challengeData.challenge_status === 'Awaiting Proposal',\r\n\t\t\t\t\t\t'a-pilot': challengeData.challenge_status === 'Pilot'\r\n\t\t\t\t\t}\"\r\n\t\t\t\t>\r\n\t\t\t\t\t{{ challengeData.challenge_status | titlecase }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-challenge-date-wrp\">\r\n\t\t\t<div class=\"a-challenge-date\">\r\n\t\t\t\t<span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n\t\t\t\t<span class=\"g-fs-07 g-black5-clr\">{{ challengeData.created_at | date: \"d/M/yy\" }}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-chlng-solution-wrp\">\r\n\t\t\t<div class=\"a-chlng-solution-value-wrp\">\r\n\t\t\t\t<div class=\"a-chlng-solution-value text-center g-fs-15 g-fw-500 g-black5-clr\">{{ challengeData.applications.length }}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-chlng-solution-title-wrp\">\r\n\t\t\t\t<div class=\"a-chlng-solution-title body-light-clr g-fs-07 g-lh-08\">Applications</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-chlng-solution-wrp\">\r\n\t\t\t<div class=\"a-chlng-solution-value-wrp\">\r\n\t\t\t\t<div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n\t\t\t\t\t{{ challengeData.proposal_received }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-chlng-solution-title-wrp\">\r\n\t\t\t\t<div class=\"a-chlng-solution-title body-light-clr g-fs-07 g-lh-08\">Proposal<br />Received</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-chlng-solution-wrp\">\r\n\t\t\t<div class=\"a-chlng-solution-value-wrp\">\r\n\t\t\t\t<div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n\t\t\t\t\t{{ challengeData.active_pilots }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"a-chlng-solution-title-wrp\">\r\n\t\t\t\t<div class=\"a-chlng-solution-title body-light-clr g-fs-07 g-lh-08\">Active Pilots</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"a-chlng-actions-wrp\">\r\n\t\t\t<button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\" routerLink=\"../challenge/{{ challengeData.id }}/edit\">\r\n\t\t\t\t<i class=\"fas fa-pen\"></i>\r\n\t\t\t</button>\r\n\t\t\t<button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n\t\t\t\t<i class=\"fas fa-trash\"></i>\r\n\t\t\t</button>\r\n\t\t\t<!-- <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\"\">\r\n                <i class=\"far fa-times-circle\"></i>\r\n            </button> -->\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/pilots/pilots.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/pilots/pilots.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerDashboardComponentsPilotsPilotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"challenge-item-card-wrapper\">\r\n    <div class=\"d-flex\">\r\n        <div class=\"a-challenge-main-cnt-wrp\">\r\n            <div class=\"a-challenge-title-wrp\">\r\n                <div class=\"a-chlng-title g-fs-10 g-black5-clr\">\r\n                    Water bodies preservation & monitoring\r\n                </div>\r\n            </div>\r\n            <div class=\"a-challenge-sub-cnt-wrp\">\r\n                <div class=\"a-challenge-sub-cnt g-fs-07 body-light-clr\">\r\n                    Water Management\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-status-wrp\">\r\n            <div class=\"a-challenge-badge-wrp\">\r\n                <div class=\"a-chlng-badge g-fs-07 a-pilot\">\r\n                    Pilot\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-date-wrp\">\r\n            <div class=\"a-challenge-date\">\r\n                <span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n                <span class=\"g-fs-07 g-black5-clr\">21/02/21</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fs-15 g-fw-500 g-black5-clr\">\r\n                    7\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Solutions\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Proposal<br>Received\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Active Pilots\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-actions-wrp\">\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-pen\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-trash\"></i>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\"\">\r\n                <i class=\"far fa-times-circle\"></i>\r\n            </button> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"challenge-item-card-wrapper\">\r\n    <div class=\"d-flex\">\r\n        <div class=\"a-challenge-main-cnt-wrp\">\r\n            <div class=\"a-challenge-title-wrp\">\r\n                <div class=\"a-chlng-title g-fs-10 g-black5-clr\">\r\n                    Water bodies preservation & monitoring\r\n                </div>\r\n            </div>\r\n            <div class=\"a-challenge-sub-cnt-wrp\">\r\n                <div class=\"a-challenge-sub-cnt g-fs-07 body-light-clr\">\r\n                    Water Management\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-status-wrp\">\r\n            <div class=\"a-challenge-badge-wrp\">\r\n                <div class=\"a-chlng-badge g-fs-07 a-pilot\">\r\n                    Pilot\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-challenge-date-wrp\">\r\n            <div class=\"a-challenge-date\">\r\n                <span class=\"body-light-clr g-fs-07\">Creation Date: </span>\r\n                <span class=\"g-fs-07 g-black5-clr\">21/02/21</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fs-15 g-fw-500 g-black5-clr\">\r\n                    7\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Solutions\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Proposal<br>Received\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-solution-wrp\">\r\n            <div class=\"a-chlng-solution-value-wrp\">\r\n                <div class=\"a-chlng-solution-value text-center g-fw-500 g-fs-15 g-black5-clr\">\r\n                    -\r\n                </div>\r\n            </div>\r\n            <div class=\"a-chlng-solution-title-wrp\">\r\n                <div class=\"a-chlng-solution-title body-light-clr\">\r\n                    Active Pilots\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"a-chlng-actions-wrp\">\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-pen\"></i>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"fas fa-trash\"></i>\r\n            </button> -->\r\n            <button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\">\r\n                <i class=\"far fa-times-circle\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/dashboard.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/dashboard.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a-challenge-item-wrapper container g-pt-25\">\r\n\t<div class=\"a-challenge-title-wrp\">\r\n\t\t<div class=\"a-challenge-title bg-blue-clr g-fw-500 g-fs-11\">My Challenges</div>\r\n\t</div>\r\n\t<div class=\"a-challenge-tab-wrp g-pt-10\">\r\n\t\t<ul class=\"a-challenge-tab nav nav-pills\">\r\n\t\t\t<li class=\"active\">\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-07 a-all\" href=\"#all\">\r\n\t\t\t\t\t<span>All</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-07 a-tab-await-approval\" href=\"#awaitingApproval\">\r\n\t\t\t\t\t<span> Awaiting Approval</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-07 a-tab-accepting-solutions\" href=\"#acceptingsolutions\">\r\n\t\t\t\t\t<span> Accepting Solutions</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-07 a-tab-awaiting-proposals\" href=\"#awaitingProposal\">\r\n\t\t\t\t\t<span>Awaiting Proposals</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a data-toggle=\"pill\" class=\"g-fs-07 a-tab-pilots\" href=\"#pilots\">\r\n\t\t\t\t\t<span>Pilots</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a class=\"g-fs-07 a-tab-uns-prop\" (click)=\"gotoUnsolicited()\">\r\n\t\t\t\t\t<span>unsolicited Proposal</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<div class=\"tab-content g-pt-25\">\r\n\t\t\t<div id=\"all\" class=\"tab-pane fade in active\">\r\n\t\t\t\t<ng-container *ngIf=\"!isLoading\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let item of allChallenges.data\">\r\n\t\t\t\t\t\t<app-challenge-item [challengeData]=\"item\"></app-challenge-item>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t<card-skeleton-loader></card-skeleton-loader>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"awaitingApproval\" class=\"tab-pane fade\">\r\n\t\t\t\t<ng-container *ngFor=\"let item of awaitingApproval\">\r\n\t\t\t\t\t<app-challenge-item [challengeData]=\"item\"></app-challenge-item>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t<card-skeleton-loader></card-skeleton-loader>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"acceptingsolutions\" class=\"tab-pane fade\">\r\n\t\t\t\t<ng-container *ngFor=\"let item of acceptingSolutions\">\r\n\t\t\t\t\t<app-challenge-item [challengeData]=\"item\"></app-challenge-item>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t<card-skeleton-loader></card-skeleton-loader>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"awaitingProposal\" class=\"tab-pane fade\">\r\n\t\t\t\t<ng-container *ngFor=\"let item of awaitingProposals\">\r\n\t\t\t\t\t<app-challenge-item [challengeData]=\"item\"></app-challenge-item>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t<card-skeleton-loader></card-skeleton-loader>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"pilots\" class=\"tab-pane fade\">\r\n\t\t\t\t<ng-container *ngFor=\"let item of Pilots\">\r\n\t\t\t\t\t<app-challenge-item [challengeData]=\"item\"></app-challenge-item>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"isLoading\">\r\n\t\t\t\t\t<card-skeleton-loader></card-skeleton-loader>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"g-pt-05 g-pb-25 text-center\" *ngIf=\"allChallenges?.data\">\r\n\t\t\t<pagination-controller [totalItems]=\"allChallenges?.total_results\" [pageSize]=\"20\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/edit-challenge-brief/edit-challenge-brief.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/edit-challenge-brief/edit-challenge-brief.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerEditChallengeBriefEditChallengeBriefComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!pageLoading\">\r\n\t<div class=\"edit-challenge-brief-parent g-pt-35 g-pb-20\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t<div class=\"g-pb-10 g-pt-08\">\r\n\t\t\t\t\t\t<span (click)=\"backClicked()\" class=\"g-fs-09 g-fw-500 primary-green-clr g-cursor-pointer\"> < Go Back to Profile </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"challenge-step-tabs g-mb-10\">\r\n\t\t\t\t\t\t<div [ngClass]=\"{ active: !editChallengeStep1, '': editChallengeStep1 }\" (click)=\"gotoStep('step1')\">Challenge Details</div>\r\n\t\t\t\t\t\t<div [ngClass]=\"{ active: !editChallengeStep2, '': editChallengeStep2 }\" (click)=\"gotoStep('step2')\">Solution Requirements</div>\r\n\t\t\t\t\t\t<div [ngClass]=\"{ active: !editChallengeStep3, '': editChallengeStep3 }\" (click)=\"gotoStep('step3')\">Additional Informations</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<div class=\"section-title g-fs-19 g-fw-500 title-clr g-mb-08\">Edit Challenge Brief</div>\r\n\t\t\t\t\t<!-- step 1 -->\r\n\t\t\t\t\t<div class=\"step-form-parent\" [hidden]=\"editChallengeStep1\">\r\n\t\t\t\t\t\t<form [formGroup]=\"editChallengeForm.Step1\" (ngSubmit)=\"stepFormSubmit('Step1')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400 g-w-100per\">\r\n\t\t\t\t\t\t\t\t\tChallenge Summary<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\"> A 20-40 word description of the challenge or need as desired by the end-users </span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip title=\"A central monitoring system to detect faults, leakage of current, and breakage of cables in street lights across the city\"></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challengeSummary\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.challengeSummary.touched || isSubmitted.Step1) && formControlStep1.challengeSummary?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.challengeSummary.touched || isSubmitted.Step1) && formControlStep1.challengeSummary.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.challengeSummary.touched || isSubmitted.Step1) && formControlStep1.challengeSummary.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t200 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.challengeSummary.touched || isSubmitted.Step1) && formControlStep1.challengeSummary.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tChallenge Scenario <br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\t100-120 word description broadly to help understand the use-cases/applications, including relevant technical & operational requirements, constraints, and\r\n\t\t\t\t\t\t\t\t\t\texpected benefits\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"The city spans around 250 km2 and has about 60,000 streetlights, due to the absence of a centralised monitoring system, maintenance of these streetlights is laborious, expensive and time-consuming. Identifying the exact location of the faulty lamp, leakage of current, or breakage of cables is currently a manual process based on citizen grievances received and consumes about 1-2 working days at an approximate cost of Rs.2000/- per streetlamp. \r\n                                    Additionally, unidentified & unchecked current leakage can be life-threatening to both lineman operators & citizens. There needs to be a centralised system that detects the faults in realtime, identifies the type of fault, and locates where the fault has occurred in the city.\r\n                                    \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"challengeScenario\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.challengeScenario.touched || isSubmitted.Step1) && formControlStep1.challengeScenario?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.challengeScenario.touched || isSubmitted.Step1) && formControlStep1.challengeScenario.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.challengeScenario.touched || isSubmitted.Step1) && formControlStep1.challengeScenario.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tProfile of the Target Beneficiaries<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe the profile of the end-users who face the challenge, including details of what are the current systems/capabilities available and the methods employed\r\n\t\t\t\t\t\t\t\t\t\tto overcome the challenge\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. <span class='g-black5-clr g-fw-500'>Lineman:</span> The service personnel from the electricity department who spends hours in manually identifying faulty street lights and in fixing the same.<br><br> 2. <span class='g-black5-clr g-fw-500'>Electricity Department:</span> Officers, junior engineers, and sub-divisional engineers in the electricity department responsible for the operation & maintenance of street lights in the city and managing the linemen in the field. They face challenges in operations & maintenance since it is being done manually and in an unorganised manner.\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"targetBeneficiaries\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.targetBeneficiaries.touched || isSubmitted.Step1) && formControlStep1.targetBeneficiaries?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.targetBeneficiaries.touched || isSubmitted.Step1) && formControlStep1.targetBeneficiaries.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.targetBeneficiaries.touched || isSubmitted.Step1) && formControlStep1.targetBeneficiaries.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.targetBeneficiaries.touched || isSubmitted.Step1) && formControlStep1.targetBeneficiaries.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"flex-row\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\"> Start Date <span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"date\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"startDate\"\r\n\t\t\t\t\t\t\t\t\t\t[min]=\"minDate\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.startDate.touched || isSubmitted.Step1) && formControlStep1.startDate?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.startDate.touched || isSubmitted.Step1) && formControlStep1.startDate.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tStart date is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"lable-grey g-fw-400\"> Close Date <span class=\"g-warning-clr\">*</span> </label>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\t\ttype=\"date\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t[min]=\"minDate\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"closeDate\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\terror: (formControlStep1.closeDate.touched || isSubmitted.Step1) && formControlStep1.closeDate?.errors\r\n\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep1.closeDate.touched || isSubmitted.Step1) && formControlStep1.closeDate.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\tEnd date is required\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- step 2 -->\r\n\t\t\t\t\t<div class=\"step-form-parent\" [hidden]=\"editChallengeStep2\">\r\n\t\t\t\t\t\t<form [formGroup]=\"editChallengeForm.Step2\" (ngSubmit)=\"stepFormSubmit('Step2')\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tFunctional Requirements of the end-user<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tFunctional requirements of the end-user: Brief description of the ‘Jobs to be Done’ including the needs to be fulfilled, gaps to be addressed, or challenges to\r\n\t\t\t\t\t\t\t\t\t\tbe overcome, etc.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. Identification & alerting of the type of fault—non-functioning of lights, leakage of current, and breakage of cable <br><br>\r\n                                        2. Identification of the exact location of the faulty street light in the city\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"functionalRequirements\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.functionalRequirements.touched || isSubmitted.Step2) && formControlStep2.functionalRequirements?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep2.functionalRequirements.touched || isSubmitted.Step2) && formControlStep2.functionalRequirements.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep2.functionalRequirements.touched || isSubmitted.Step2) && formControlStep2.functionalRequirements.errors?.maxlength\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep2.functionalRequirements.touched || isSubmitted.Step2) && formControlStep2.functionalRequirements.errors?.minlength\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tFunctional & Operational Capabilities<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescription of the desired features and functionalities to solve the problem with relevant technical and operational requirements\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"Single dashboard/workspace for: <br><br>1. Real-time identification & notification of the type of fault<br>2. Locating the street light in the city where the fault has occurred<br>3. Sending alerts to the user as and when the fault occurs<br>4. Visualisation of the overall condition of street lights across the city from the data gathered\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"operationalCapabilities\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.operationalCapabilities.touched || isSubmitted.Step2) && formControlStep2.operationalCapabilities?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep2.operationalCapabilities.touched || isSubmitted.Step2) && formControlStep2.operationalCapabilities.errors?.required\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep2.operationalCapabilities.touched || isSubmitted.Step2) && formControlStep2.operationalCapabilities.errors?.maxlength\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"field-err\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(formControlStep2.operationalCapabilities.touched || isSubmitted.Step2) && formControlStep2.operationalCapabilities.errors?.minlength\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tDeployment Constraints<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe the usage, usability and operational constraints/adoption barriers in the broader context of integration to the solution and the environment in which\r\n\t\t\t\t\t\t\t\t\t\tthe desired solution must be used, deployed or operated. Primary Constraints/Adoption barriers include—Total Cost of Ownership, Maintenance/Service,\r\n\t\t\t\t\t\t\t\t\t\tSkills/Expertise, Installation/Integration, Resources/materials, Time consumption, Physical/personal risk, Product training, Changes to habits/process,\r\n\t\t\t\t\t\t\t\t\t\tAccessibility, Inability to assess the quality of the product/service [Risk Perception], Monitoring the usage/deployment, etc.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. <span class='g-black5-clr g-fw-500'>Installation/Integration:</span> The solution should be designed for easy integration with the existing system.<br><br>2. <span class='g-black5-clr g-fw-500'>Product training:</span> The solution should be intuitive/easy to use, requiring less or no training for the users. Also, the solution should not affect the existing workflow significantly.<br><br>3. <span class='g-black5-clr g-fw-500'>Maintenance/Service:</span> The solution should be robust with minimal need for maintenance.\"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"deploymentConstraints\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.deploymentConstraints.touched || isSubmitted.Step2) && formControlStep2.deploymentConstraints?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.deploymentConstraints.touched || isSubmitted.Step2) && formControlStep2.deploymentConstraints.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.deploymentConstraints.touched || isSubmitted.Step2) && formControlStep2.deploymentConstraints.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.deploymentConstraints.touched || isSubmitted.Step2) && formControlStep2.deploymentConstraints.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tExpected Tangible Outcomes & Benefits<span class=\"g-warning-clr\">*</span><br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe the tangible benefits and measurable gains expected by the buyer (City Administrators)/user in addressing or overcoming the challenges\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. <span class='g-black5-clr g-fw-500'>Lineman:</span> Lineman can save time and effort which otherwise would have been utilised in manually searching for the faulty street light, diagnosing the problem, etc.<br><br>2. <span class='g-black5-clr g-fw-500'>Electricity Department:</span> Officers, junior engineer, and sub-divisional engineer will get real-time notification of the fault occurrence, thereby reducing the time to address these faults—improving the quality of services provided by the city.\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"tangibleOutcomes\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep2.tangibleOutcomes.touched || isSubmitted.Step2) && formControlStep2.tangibleOutcomes?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.tangibleOutcomes.touched || isSubmitted.Step2) && formControlStep2.tangibleOutcomes.errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\tValue is required\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.tangibleOutcomes?.touched || isSubmitted.Step2) && formControlStep2.tangibleOutcomes?.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep2.tangibleOutcomes?.touched || isSubmitted.Step2) && formControlStep2.tangibleOutcomes?.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\tMinimum 100 characters required.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">Save & Next</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- step 3 -->\r\n\t\t\t\t\t<div class=\"step-form-parent\" [hidden]=\"editChallengeStep3\">\r\n\t\t\t\t\t\t<form [formGroup]=\"editChallengeForm.Step3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tGaps in the Current Solution <br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tDescribe the gaps that are in current solutions or alternative methods being applied today for addressing the problem.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<app-tooltip\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"1. Citizens raise grievances for faulty street lights through call, text, WhatsApp, or Web portal; hence fault detection is unorganised, non-centralised, and is not real-time.<br>2. The exact location of where the fault has occurred is not known, so the lineman has to move along with their vehicle to identify the faulty street light—requiring a lot of time & effort.<br>3. The lineman also has to manually diagnose the problem and fix the same.<br>4. The whole process from locating, diagnosing, and fixing takes at least 1 or 2 days after the request is raised.\r\n                                        \"\r\n\t\t\t\t\t\t\t\t\t></app-tooltip>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"gaps\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.gaps.touched || isSubmitted.Step3) && formControlStep3.gaps?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.gaps.touched || isSubmitted.Step3) && formControlStep3.gaps.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tOther Requirements/Remarks<br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tAdditional critical Information which remains uncovered above can be presented here (ex: Regulatory requirements, certifications, quality standards, etc.)\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<!-- <span class=\"pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"far fa-question-circle g-p-clr\"></i>\r\n\t\t\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t[editor]=\"Editor\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"otherRequirements\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.otherRequirements.touched || isSubmitted.Step3) && formControlStep3.otherRequirements?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t></ckeditor>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.otherRequirements.touched || isSubmitted.Step3) && formControlStep3.otherRequirements.errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t1000 characters is the maximum allowed limit.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"lable-grey g-fw-400\">\r\n\t\t\t\t\t\t\t\t\tLinks to Additional Informations<br />\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-desp g-fs-italic g-fw-400\">\r\n\t\t\t\t\t\t\t\t\t\tTo help innovators understand the situation better, you may provide additional information in the form of images or links\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<!-- <span class=\"pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"far fa-question-circle g-p-clr\"></i>\r\n\t\t\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"additionalLink1\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.additionalLink1.touched || isSubmitted.Step3) && formControlStep3.additionalLink1?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.additionalLink1.touched || isSubmitted.Step3) && formControlStep3.additionalLink1.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tInvalid url format.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"additionalLink2\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.additionalLink2.touched || isSubmitted.Step3) && formControlStep3.additionalLink2?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.additionalLink2.touched || isSubmitted.Step3) && formControlStep3.additionalLink2.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tInvalid url format.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group g-mt-03\">\r\n\t\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"additionalLink3\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\terror: (formControlStep3.additionalLink3.touched || isSubmitted.Step3) && formControlStep3.additionalLink3?.errors\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t/>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"err-resp\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"field-err\" *ngIf=\"(formControlStep3.additionalLink3.touched || isSubmitted.Step3) && formControlStep3.additionalLink3.errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\tInvalid url format.\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"challengeBriefData?.data.status == 'draft'; else elseBlock\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"saveAsDraft()\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-w-100per g-fs-08 g-pt-04 g-pb-04 g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\tSave as draft&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"draftLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"stepFormSubmit('Step3')\" class=\"btn g-bdr-005 g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04 g-mb-05\">\r\n\t\t\t\t\t\t\t\t\t\t\tPublish&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"submitLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-template #elseBlock>\r\n\t\t\t\t\t\t\t\t<div class=\"g-pt-05\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"stepFormSubmit('Step3')\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\">\r\n\t\t\t\t\t\t\t\t\t\tSubmit&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"submitLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n<ng-container *ngIf=\"pageLoading\">\r\n\t<div class=\"loader-wrp\">\r\n\t\t<div class=\"section-loader\">\r\n\t\t\t<div class=\"loader-wrp\">\r\n\t\t\t\t<div class=\"loader-inner text-center\">\r\n\t\t\t\t\t<div class=\"lds-ring\">\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade a-create-challenge-modal\" id=\"confirmDialog\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content g-p-21\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-16 g-lh-19 g-fw-500 bg-blue-clr text-left\">Are you sure you want to exit your submssion?</div>\r\n\t\t\t\t\t\t\t<div class=\"g-fs-08 g-lh-10 g-fw-400 body-grey-clr g-pt-07 text-left\">Going back will not save any of the information that you’ve provided in the input.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t<button type=\"button\" #closebutton class=\"btn g-bdrrad-7px g-bdr-005 g-black5-brdr g-fs-12 g-w-bg g-pt-02 g-pb-02 g-pl-06 g-pr-06\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"g-pt-27 text-left\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 g-p-brdr g-p-bg g-w-clr g-fs-08 g-pt-04 g-pb-04\" (click)=\"handleGoBack('save')\">\r\n\t\t\t\t\t\tSave Draft & Go Back&nbsp; <i *ngIf=\"draftLoading\" class=\"fas fa-circle-notch fa-spin\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn g-bdr-005 lable-grey-brdr g-w-bg g-ml-12 g-fs-08 g-pt-04 g-pb-04 g-pl-24 g-pr-24\" data-dismiss=\"modal\" (click)=\"handleGoBack('delete')\">\r\n\t\t\t\t\t\tDelete & Go Back\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/edit-profile/edit-profile.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/edit-profile/edit-profile.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerEditProfileEditProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"g-pb-50\">\r\n    <div  class=\"seeker-edit-wrapper g-w-bg\">\r\n        <form [formGroup]=\"editProfile\">\r\n            <div class=\"form-wrapper g-pl-20 g-pr-20\">\r\n              <div class=\"g-pt-30\">\r\n                <div class=\"g-fs-18 g-fw-500 title-clr\">\r\n                  Edit Profile\r\n                </div>\r\n              </div>\r\n              <div class=\"row g-mt-10\">\r\n                <div class=\"col-sm-8 col-xs-12\">\r\n                  <div class=\"form-group g-mt-03\">\r\n                    <label class=\"g-fs-07 lable-grey g-fw-400\">Full Name<span class=\"g-warning-clr\">*</span></label>\r\n                    <input type=\"text\" class=\"form-control \" placeholder=\"ex: Jhon Doe\" name=\"fullname\" formControlName=\"fullname\"\r\n                    [ngClass]=\"{\r\n                      error:\r\n                        (editProfile.controls.fullname.touched) &&\r\n                        editProfile.controls.fullname?.errors\r\n                    }\"/>\r\n                    <div class=\"err-resp\">\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                          (editProfile.controls.fullname.touched) &&\r\n                          editProfile.controls.fullname.errors?.required\r\n                        \">\r\n                        Full Name is required\r\n                      </span>\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                          editProfile.controls.fullname.touched &&\r\n                          editProfile.controls.fullname.errors?.pattern\r\n                        \">\r\n                        Enter a valid name\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4 text-center hidden-xs\">\r\n                  <div class=\"avatar-upload\">\r\n                    <ng-container *ngIf=\"this.profile\">\r\n                      <Avatar-Upload [Src]=\"serverUrl+this.profile.data.avatar\" (onSaveImage)=\"handleAvatar($event)\">\r\n                      </Avatar-Upload>\r\n                    </ng-container>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group g-mt-03\">\r\n                <label for=\"email\" class=\"g-fs-07 lable-grey g-fw-400\">Email<span class=\"g-warning-clr\">*</span></label>\r\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"ex: yourmail@domain.com\" [ngClass]=\"{\r\n                  error:\r\n                    (editProfile.controls.email.touched) &&\r\n                    editProfile.controls.email?.errors\r\n                }\"/>\r\n                <div class=\"err-resp\">\r\n                  <span class=\"field-err\" *ngIf=\"\r\n                      (editProfile.controls.email.touched) &&\r\n                      editProfile.controls.email.errors?.required\r\n                    \">\r\n                    Email is required\r\n                  </span>\r\n                  <span class=\"field-err\" *ngIf=\"\r\n                      editProfile.controls.email.touched &&\r\n                      editProfile.controls.email.errors?.email\r\n                    \">\r\n                    Enter a valid email address\r\n                  </span>\r\n                  <span class=\"field-err\" *ngIf=\"\r\n                      editProfile.controls.email.touched &&\r\n                      editProfile.controls.email.errors?.emailAlreadyExist\r\n                    \">\r\n                    Email already exist\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group g-mt-03\">\r\n                <label for=\"number\" class=\"g-fs-07 lable-grey g-fw-400\">Phone<span class=\"g-warning-clr\">*</span></label>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-2 col-xs-4\">\r\n                    <input type=\"text\" class=\"form-control  phone-code\" required value=\"+91\" disabled />\r\n                  </div>\r\n                  <div class=\"col-sm-10 col-xs-8\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"phnum\" [ngClass]=\"{\r\n                      error:\r\n                        (editProfile.controls.phnum.touched) &&\r\n                        editProfile.controls.phnum?.errors\r\n                    }\"  placeholder=\"ex: 9255333586\" />\r\n                    <div class=\"err-resp\">\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                          (editProfile.controls.phnum.touched) &&\r\n                          editProfile.controls.phnum.errors?.required\r\n                        \">\r\n                        Phone number is required\r\n                      </span>\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                          editProfile.controls.phnum.touched &&\r\n                          editProfile.controls.phnum.errors?.pattern\r\n                        \">\r\n                        Enter a valid phone number\r\n                      </span>\r\n                      <span class=\"field-err\" *ngIf=\"\r\n                          editProfile.controls.phnum.touched &&\r\n                          editProfile.controls.phnum.errors\r\n                            ?.phonenumAlreadyExist\r\n                        \">\r\n                        Phone number already exist\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group g-mt-20\">\r\n                <label for=\"city\" class=\"g-fs-07 lable-grey g-fw-400\">Which city are you affiliated with?<span class=\"g-warning-clr\">*</span></label>\r\n                <select class=\"form-control\"  formControlName=\"city\" [ngClass]=\"{\r\n                  error:\r\n                    (editProfile.controls.city.touched) &&\r\n                    editProfile.controls.city.errors\r\n                }\">\r\n                  <option selected=\"selected\" value=\"\">\r\n                    Select City\r\n                  </option>\r\n                  <ng-container *ngFor=\"let city of smartCities?.data\">\r\n                    <option [value]=\"city.id\">{{city.name | titlecase}}</option>\r\n                  </ng-container>\r\n                </select>\r\n                <div class=\"err-resp\">\r\n                  <span class=\"field-err\" *ngIf=\"\r\n                      (editProfile.controls.city.touched) &&\r\n                      editProfile.controls.city.errors\r\n                    \">\r\n                    City is required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group g-mt-03\">\r\n                <label for=\"dept\" class=\"g-fs-07 lable-grey g-fw-400\">Department(Optional)\r\n                </label>\r\n                <input type=\"text\" class=\"form-control \" formControlName=\"department\"\r\n                  placeholder=\"ex: Electricity\" />\r\n              </div>\r\n              <div class=\"form-group g-mt-03\">\r\n                <label for=\"designation\" class=\"g-fs-07 lable-grey g-fw-400\">Your Designation(Optional)\r\n                </label>\r\n                <input type=\"text\" class=\"form-control \" name=\"designation\" placeholder=\"ex: Professor\"\r\n                  formControlName=\"designation\" />\r\n              </div>\r\n              <div class=\"g-pb-20 g-mt-20\">\r\n                <button type=\"submit\" class=\"btn g-p-bg g-w-clr g-w-100per g-fs-08 g-pt-04 g-pb-04\" (click)=\"updateProfile()\">\r\n                    Save and Update\r\n                    <i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/my-challenges/my-challenges.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/my-challenges/my-challenges.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerMyChallengesMyChallengesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"a-my-challenges-wrapper g-pt-16 g-pb-50\">\r\n        <div class=\"a-title-wrp\">\r\n            <div class=\"a-title g-fw-500 g-fs-09\">\r\n                My Challenges\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex g-mt-08\">\r\n            <div class=\"a-filter-select-wrp g-mr-06\">\r\n                <select\r\n                    class=\"form-control a-filter-select text-right g-fs-06 l-disc-offer-slt g-p-0 g-black7-clr drp g-h-13\"\r\n                    id=\"sel1\"  >\r\n                    <option default>Filter by Staus</option>\r\n                    <option value=\"Relevance\">Relevance</option>\r\n                    <option value=\"Relevance\">Relevance</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"a-challenges-count-wrp a-align-self-center\">\r\n                <div class=\"g-fs-06 g-lh-09 g-fw-500 g-black7-clr\">\r\n                    Showing &nbsp;\r\n                    <span class=\"g-blue3-clr\">10</span>\r\n                    &nbsp;of\r\n                    <span class=\"g-black7-clr\">36</span\r\n                    >&nbsp;\r\n                    <span class=\"g-black7-clr\">Results</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 g-mt-12\">\r\n                <div class=\"a-challenge-card-wrp g-white-bg g-p-12\">\r\n                    <div class=\"d-flex a-justify-space-between\">\r\n                        <div class=\"a-challenge-name-sector-wrp\">\r\n                            <div class=\"a-challenge-name-wrp\">\r\n                                <div class=\"a-challenge-name g-fs-08 g-black5-clr\">\r\n                                    Property Tax Mangement Systems\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"a-challenge-sector-wrp g-mt-03\">\r\n                                <div class=\"a-challenge-sector g-fs-06 body-light-clr\">\r\n                                    Governance\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-menu-wrp\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn g-white-bg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fas fa-ellipsis-h\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                  <li><a href=\"#\"><i class=\"fas fa-pen\"></i>&nbsp; Edit Challenge</a></li>\r\n                                  <li><a href=\"#\"><i class=\"far fa-trash-alt\"></i>&nbsp; Delete Challenge</a></li>\r\n                                </ul>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex a-justify-space-between g-mt-08\">\r\n                        <div class=\"a-challenge-status-wrp\">\r\n                            <div class=\"a-challenge-status g-fs-05 g-black-clr g-opacity-06 text-center g-pt-04 g-pb-04\">\r\n                                Reviewing Solutions\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-solutions-count-wrp\">\r\n                            <div class=\"a-solutions-count g-fs-07 g-black5-clr\">\r\n                                <span class=\"g-fw-500\">4</span>&nbsp;Solutions\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 g-mt-12\">\r\n                <div class=\"a-challenge-card-wrp g-white-bg g-p-12\">\r\n                    <div class=\"d-flex a-justify-space-between\">\r\n                        <div class=\"a-challenge-name-sector-wrp\">\r\n                            <div class=\"a-challenge-name-wrp\">\r\n                                <div class=\"a-challenge-name g-fs-08 g-black5-clr\">\r\n                                    Property Tax Mangement Systems\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"a-challenge-sector-wrp g-mt-03\">\r\n                                <div class=\"a-challenge-sector g-fs-06 body-light-clr\">\r\n                                    Governance\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-menu-wrp\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn g-white-bg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fas fa-ellipsis-h\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                  <li><a href=\"#\"><i class=\"fas fa-pen\"></i>&nbsp; Edit Challenge</a></li>\r\n                                  <li><a href=\"#\"><i class=\"far fa-trash-alt\"></i>&nbsp; Delete Challenge</a></li>\r\n                                </ul>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex a-justify-space-between g-mt-08\">\r\n                        <div class=\"a-challenge-status-wrp\">\r\n                            <div class=\"a-challenge-status g-fs-05 g-black-clr g-opacity-06 text-center g-pt-04 g-pb-04\">\r\n                                Reviewing Solutions\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-solutions-count-wrp\">\r\n                            <div class=\"a-solutions-count g-fs-07 g-black5-clr\">\r\n                                <span class=\"g-fw-500\">4</span>&nbsp;Solutions\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 g-mt-12\">\r\n                <div class=\"a-challenge-card-wrp g-white-bg g-p-12\">\r\n                    <div class=\"d-flex a-justify-space-between\">\r\n                        <div class=\"a-challenge-name-sector-wrp\">\r\n                            <div class=\"a-challenge-name-wrp\">\r\n                                <div class=\"a-challenge-name g-fs-08 g-black5-clr\">\r\n                                    Property Tax Mangement Systems\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"a-challenge-sector-wrp g-mt-03\">\r\n                                <div class=\"a-challenge-sector g-fs-06 body-light-clr\">\r\n                                    Governance\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-menu-wrp\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn g-white-bg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fas fa-ellipsis-h\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                  <li><a href=\"#\"><i class=\"fas fa-pen\"></i>&nbsp; Edit Challenge</a></li>\r\n                                  <li><a href=\"#\"><i class=\"far fa-trash-alt\"></i>&nbsp; Delete Challenge</a></li>\r\n                                </ul>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex a-justify-space-between g-mt-08\">\r\n                        <div class=\"a-challenge-status-wrp\">\r\n                            <div class=\"a-challenge-status g-fs-05 g-black-clr g-opacity-06 text-center g-pt-04 g-pb-04\">\r\n                                Reviewing Solutions\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-solutions-count-wrp\">\r\n                            <div class=\"a-solutions-count g-fs-07 g-black5-clr\">\r\n                                <span class=\"g-fw-500\">4</span>&nbsp;Solutions\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 g-mt-12\">\r\n                <div class=\"a-challenge-card-wrp g-white-bg g-p-12\">\r\n                    <div class=\"d-flex a-justify-space-between\">\r\n                        <div class=\"a-challenge-name-sector-wrp\">\r\n                            <div class=\"a-challenge-name-wrp\">\r\n                                <div class=\"a-challenge-name g-fs-08 g-black5-clr\">\r\n                                    Property Tax Mangement Systems\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"a-challenge-sector-wrp g-mt-03\">\r\n                                <div class=\"a-challenge-sector g-fs-06 body-light-clr\">\r\n                                    Governance\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-menu-wrp\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn g-white-bg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fas fa-ellipsis-h\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                  <li><a href=\"#\"><i class=\"fas fa-pen\"></i>&nbsp; Edit Challenge</a></li>\r\n                                  <li><a href=\"#\"><i class=\"far fa-trash-alt\"></i>&nbsp; Delete Challenge</a></li>\r\n                                </ul>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex a-justify-space-between g-mt-08\">\r\n                        <div class=\"a-challenge-status-wrp\">\r\n                            <div class=\"a-challenge-status g-fs-05 g-black-clr g-opacity-06 text-center g-pt-04 g-pb-04\">\r\n                                Reviewing Solutions\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-solutions-count-wrp\">\r\n                            <div class=\"a-solutions-count g-fs-07 g-black5-clr\">\r\n                                <span class=\"g-fw-500\">4</span>&nbsp;Solutions\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 g-mt-12\">\r\n                <div class=\"a-challenge-card-wrp g-white-bg g-p-12\">\r\n                    <div class=\"d-flex a-justify-space-between\">\r\n                        <div class=\"a-challenge-name-sector-wrp\">\r\n                            <div class=\"a-challenge-name-wrp\">\r\n                                <div class=\"a-challenge-name g-fs-08 g-black5-clr\">\r\n                                    Property Tax Mangement Systems\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"a-challenge-sector-wrp g-mt-03\">\r\n                                <div class=\"a-challenge-sector g-fs-06 body-light-clr\">\r\n                                    Governance\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-menu-wrp\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn g-white-bg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fas fa-ellipsis-h\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                  <li><a href=\"#\"><i class=\"fas fa-pen\"></i>&nbsp; Edit Challenge</a></li>\r\n                                  <li><a href=\"#\"><i class=\"far fa-trash-alt\"></i>&nbsp; Delete Challenge</a></li>\r\n                                </ul>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex a-justify-space-between g-mt-08\">\r\n                        <div class=\"a-challenge-status-wrp\">\r\n                            <div class=\"a-challenge-status g-fs-05 g-black-clr g-opacity-06 text-center g-pt-04 g-pb-04\">\r\n                                Reviewing Solutions\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-solutions-count-wrp\">\r\n                            <div class=\"a-solutions-count g-fs-07 g-black5-clr\">\r\n                                <span class=\"g-fw-500\">4</span>&nbsp;Solutions\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 g-mt-12\">\r\n                <div class=\"a-challenge-card-wrp g-white-bg g-p-12\">\r\n                    <div class=\"d-flex a-justify-space-between\">\r\n                        <div class=\"a-challenge-name-sector-wrp\">\r\n                            <div class=\"a-challenge-name-wrp\">\r\n                                <div class=\"a-challenge-name g-fs-08 g-black5-clr\">\r\n                                    Property Tax Mangement Systems\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"a-challenge-sector-wrp g-mt-03\">\r\n                                <div class=\"a-challenge-sector g-fs-06 body-light-clr\">\r\n                                    Governance\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-menu-wrp\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn g-white-bg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fas fa-ellipsis-h\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                  <li><a href=\"#\"><i class=\"fas fa-pen\"></i>&nbsp; Edit Challenge</a></li>\r\n                                  <li><a href=\"#\"><i class=\"far fa-trash-alt\"></i>&nbsp; Delete Challenge</a></li>\r\n                                </ul>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex a-justify-space-between g-mt-08\">\r\n                        <div class=\"a-challenge-status-wrp\">\r\n                            <div class=\"a-challenge-status g-fs-05 g-black-clr g-opacity-06 text-center g-pt-04 g-pb-04\">\r\n                                Reviewing Solutions\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-solutions-count-wrp\">\r\n                            <div class=\"a-solutions-count g-fs-07 g-black5-clr\">\r\n                                <span class=\"g-fw-500\">4</span>&nbsp;Solutions\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 g-mt-12\">\r\n                <div class=\"a-challenge-card-wrp g-white-bg g-p-12\">\r\n                    <div class=\"d-flex a-justify-space-between\">\r\n                        <div class=\"a-challenge-name-sector-wrp\">\r\n                            <div class=\"a-challenge-name-wrp\">\r\n                                <div class=\"a-challenge-name g-fs-08 g-black5-clr\">\r\n                                    Property Tax Mangement Systems\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"a-challenge-sector-wrp g-mt-03\">\r\n                                <div class=\"a-challenge-sector g-fs-06 body-light-clr\">\r\n                                    Governance\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-menu-wrp\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn g-white-bg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fas fa-ellipsis-h\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                  <li><a href=\"#\"><i class=\"fas fa-pen\"></i>&nbsp; Edit Challenge</a></li>\r\n                                  <li><a href=\"#\"><i class=\"far fa-trash-alt\"></i>&nbsp; Delete Challenge</a></li>\r\n                                </ul>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex a-justify-space-between g-mt-08\">\r\n                        <div class=\"a-challenge-status-wrp\">\r\n                            <div class=\"a-challenge-status g-fs-05 g-black-clr g-opacity-06 text-center g-pt-04 g-pb-04\">\r\n                                Reviewing Solutions\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-solutions-count-wrp\">\r\n                            <div class=\"a-solutions-count g-fs-07 g-black5-clr\">\r\n                                <span class=\"g-fw-500\">4</span>&nbsp;Solutions\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 g-mt-12\">\r\n                <div class=\"a-challenge-card-wrp g-white-bg g-p-12\">\r\n                    <div class=\"d-flex a-justify-space-between\">\r\n                        <div class=\"a-challenge-name-sector-wrp\">\r\n                            <div class=\"a-challenge-name-wrp\">\r\n                                <div class=\"a-challenge-name g-fs-08 g-black5-clr\">\r\n                                    Property Tax Mangement Systems\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"a-challenge-sector-wrp g-mt-03\">\r\n                                <div class=\"a-challenge-sector g-fs-06 body-light-clr\">\r\n                                    Governance\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-menu-wrp\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn g-white-bg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fas fa-ellipsis-h\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                  <li><a href=\"#\"><i class=\"fas fa-pen\"></i>&nbsp; Edit Challenge</a></li>\r\n                                  <li><a href=\"#\"><i class=\"far fa-trash-alt\"></i>&nbsp; Delete Challenge</a></li>\r\n                                </ul>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex a-justify-space-between g-mt-08\">\r\n                        <div class=\"a-challenge-status-wrp\">\r\n                            <div class=\"a-challenge-status g-fs-05 g-black-clr g-opacity-06 text-center g-pt-04 g-pb-04\">\r\n                                Reviewing Solutions\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-solutions-count-wrp\">\r\n                            <div class=\"a-solutions-count g-fs-07 g-black5-clr\">\r\n                                <span class=\"g-fw-500\">4</span>&nbsp;Solutions\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 g-mt-12\">\r\n                <div class=\"a-challenge-card-wrp g-white-bg g-p-12\">\r\n                    <div class=\"d-flex a-justify-space-between\">\r\n                        <div class=\"a-challenge-name-sector-wrp\">\r\n                            <div class=\"a-challenge-name-wrp\">\r\n                                <div class=\"a-challenge-name g-fs-08 g-black5-clr\">\r\n                                    Property Tax Mangement Systems\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"a-challenge-sector-wrp g-mt-03\">\r\n                                <div class=\"a-challenge-sector g-fs-06 body-light-clr\">\r\n                                    Governance\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-menu-wrp\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn g-white-bg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fas fa-ellipsis-h\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                  <li><a href=\"#\"><i class=\"fas fa-pen\"></i>&nbsp; Edit Challenge</a></li>\r\n                                  <li><a href=\"#\"><i class=\"far fa-trash-alt\"></i>&nbsp; Delete Challenge</a></li>\r\n                                </ul>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex a-justify-space-between g-mt-08\">\r\n                        <div class=\"a-challenge-status-wrp\">\r\n                            <div class=\"a-challenge-status g-fs-05 g-black-clr g-opacity-06 text-center g-pt-04 g-pb-04\">\r\n                                Reviewing Solutions\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-solutions-count-wrp\">\r\n                            <div class=\"a-solutions-count g-fs-07 g-black5-clr\">\r\n                                <span class=\"g-fw-500\">4</span>&nbsp;Solutions\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 g-mt-12\">\r\n                <div class=\"a-challenge-card-wrp g-white-bg g-p-12\">\r\n                    <div class=\"d-flex a-justify-space-between\">\r\n                        <div class=\"a-challenge-name-sector-wrp\">\r\n                            <div class=\"a-challenge-name-wrp\">\r\n                                <div class=\"a-challenge-name g-fs-08 g-black5-clr\">\r\n                                    Property Tax Mangement Systems\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"a-challenge-sector-wrp g-mt-03\">\r\n                                <div class=\"a-challenge-sector g-fs-06 body-light-clr\">\r\n                                    Governance\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-menu-wrp\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn g-white-bg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fas fa-ellipsis-h\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                  <li><a href=\"#\"><i class=\"fas fa-pen\"></i>&nbsp; Edit Challenge</a></li>\r\n                                  <li><a href=\"#\"><i class=\"far fa-trash-alt\"></i>&nbsp; Delete Challenge</a></li>\r\n                                </ul>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex a-justify-space-between g-mt-08\">\r\n                        <div class=\"a-challenge-status-wrp\">\r\n                            <div class=\"a-challenge-status g-fs-05 g-black-clr g-opacity-06 text-center g-pt-04 g-pb-04\">\r\n                                Reviewing Solutions\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-solutions-count-wrp\">\r\n                            <div class=\"a-solutions-count g-fs-07 g-black5-clr\">\r\n                                <span class=\"g-fw-500\">4</span>&nbsp;Solutions\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 g-mt-12\">\r\n                <div class=\"a-challenge-card-wrp g-white-bg g-p-12\">\r\n                    <div class=\"d-flex a-justify-space-between\">\r\n                        <div class=\"a-challenge-name-sector-wrp\">\r\n                            <div class=\"a-challenge-name-wrp\">\r\n                                <div class=\"a-challenge-name g-fs-08 g-black5-clr\">\r\n                                    Property Tax Mangement Systems\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"a-challenge-sector-wrp g-mt-03\">\r\n                                <div class=\"a-challenge-sector g-fs-06 body-light-clr\">\r\n                                    Governance\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-menu-wrp\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn g-white-bg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fas fa-ellipsis-h\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                  <li><a href=\"#\"><i class=\"fas fa-pen\"></i>&nbsp; Edit Challenge</a></li>\r\n                                  <li><a href=\"#\"><i class=\"far fa-trash-alt\"></i>&nbsp; Delete Challenge</a></li>\r\n                                </ul>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex a-justify-space-between g-mt-08\">\r\n                        <div class=\"a-challenge-status-wrp\">\r\n                            <div class=\"a-challenge-status g-fs-05 g-black-clr g-opacity-06 text-center g-pt-04 g-pb-04\">\r\n                                Reviewing Solutions\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-solutions-count-wrp\">\r\n                            <div class=\"a-solutions-count g-fs-07 g-black5-clr\">\r\n                                <span class=\"g-fw-500\">4</span>&nbsp;Solutions\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 g-mt-12\">\r\n                <div class=\"a-challenge-card-wrp g-white-bg g-p-12\">\r\n                    <div class=\"d-flex a-justify-space-between\">\r\n                        <div class=\"a-challenge-name-sector-wrp\">\r\n                            <div class=\"a-challenge-name-wrp\">\r\n                                <div class=\"a-challenge-name g-fs-08 g-black5-clr\">\r\n                                    Property Tax Mangement Systems\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"a-challenge-sector-wrp g-mt-03\">\r\n                                <div class=\"a-challenge-sector g-fs-06 body-light-clr\">\r\n                                    Governance\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-menu-wrp\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn g-white-bg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fas fa-ellipsis-h\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                  <li><a href=\"#\"><i class=\"fas fa-pen\"></i>&nbsp; Edit Challenge</a></li>\r\n                                  <li><a href=\"#\"><i class=\"far fa-trash-alt\"></i>&nbsp; Delete Challenge</a></li>\r\n                                </ul>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex a-justify-space-between g-mt-08\">\r\n                        <div class=\"a-challenge-status-wrp\">\r\n                            <div class=\"a-challenge-status g-fs-05 g-black-clr g-opacity-06 text-center g-pt-04 g-pb-04\">\r\n                                Reviewing Solutions\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"a-solutions-count-wrp\">\r\n                            <div class=\"a-solutions-count g-fs-07 g-black5-clr\">\r\n                                <span class=\"g-fw-500\">4</span>&nbsp;Solutions\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/reset-password/reset-password.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/reset-password/reset-password.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"g-pb-50\">\r\n    <div class=\"reset-password-wrp g-mb-16 g-w-bg\">\r\n        <div class=\"g-fs-15 g-fw-500 bg-blue-clr g-mb-16\">\r\n          Reset Password\r\n        </div>\r\n        <form [formGroup]=\"resetPassword\">\r\n          <div class=\"form-group g-mt-03\">\r\n            <label for=\"currentPassword\" class=\"g-fs-07 lable-grey g-fw-400\">Current Password<span class=\"g-warning-clr\">*</span></label>\r\n            <div class=\"pswd-input-wrp\">\r\n              <input [type]=\"passwordField1 ? 'text' : 'password'\" class=\"form-control\" name=\"currentPassword\" formControlName=\"old_password\" [ngClass]=\"{\r\n                error:\r\n                  (resetPassword.controls.old_password.touched) &&\r\n                  resetPassword.controls.old_password.errors\r\n              }\"/>\r\n              <span class=\"pswd-tgl\">\r\n                <i class=\"fa\" [ngClass]=\"{\r\n                    'fa-eye-slash': !passwordField1,\r\n                    'fa-eye': passwordField1\r\n                  }\"\r\n                  (click)=\"togglePassword1()\"\r\n                >\r\n                </i>\r\n              </span>  \r\n              <div class=\"err-resp\">\r\n                <span class=\"field-err\" *ngIf=\"\r\n                    (resetPassword.controls.old_password.touched) &&\r\n                    resetPassword.controls.old_password.errors?.required\r\n                  \">\r\n                  Current Password is required\r\n                </span>\r\n                <span class=\"field-err\" *ngIf=\"\r\n                    resetPassword.controls.old_password.touched &&\r\n                    resetPassword.controls.old_password.errors?.minlength\r\n                  \">\r\n                  Password should have minimum 8 characters.\r\n                </span>\r\n                <span class=\"field-err\" *ngIf=\"\r\n                    resetPassword.controls.old_password.touched &&\r\n                    resetPassword.controls.old_password.errors?.incorrect\r\n                  \">\r\n                  Invalid password\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group g-mt-03\">\r\n            <label for=\"currentPassword\" class=\"g-fs-07 lable-grey g-fw-400\">New Password<span class=\"g-warning-clr\">*</span></label>\r\n            <div class=\"pswd-input-wrp\">\r\n              <input [type]=\"passwordField2 ? 'text' : 'password'\" class=\"form-control\" name=\"newpassword\" formControlName=\"new_password\" [ngClass]=\"{\r\n                error:\r\n                  (resetPassword.controls.new_password.touched) &&\r\n                  resetPassword.controls.new_password.errors\r\n              }\" />\r\n              <span class=\"pswd-tgl\">\r\n                <i class=\"fa\" [ngClass]=\"{\r\n                    'fa-eye-slash': !passwordField2,\r\n                    'fa-eye': passwordField2\r\n                  }\"\r\n                  (click)=\"togglePassword2()\"\r\n                >\r\n                </i>\r\n              </span>  \r\n              <div class=\"err-resp\">\r\n                <span class=\"field-err\" *ngIf=\"\r\n                    (resetPassword.controls.new_password.touched) &&\r\n                    resetPassword.controls.new_password.errors?.required\r\n                  \">\r\n                  New Password is required\r\n                </span>\r\n                <span class=\"field-err\" *ngIf=\"\r\n                    resetPassword.controls.new_password.touched &&\r\n                    resetPassword.controls.new_password.errors?.pattern\r\n                  \">\r\n                  Password should have minimum 8 characters, at least one special character and one number\r\n                </span>\r\n                <span class=\"field-err\" *ngIf=\"\r\n                    resetPassword.controls.new_password.touched &&\r\n                    resetPassword.controls.new_password.errors?.passwordSame\r\n                  \">\r\n                  Old Password and New Password should not be same\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group g-mt-03\">\r\n            <label for=\"confirmpassword\" class=\"g-fs-07 lable-grey g-fw-400\">Re-enter Password<span class=\"g-warning-clr\">*</span></label>\r\n            <div class=\"pswd-input-wrp\">\r\n              <input [type]=\"passwordField3 ? 'text' : 'password'\" class=\"form-control \"\r\n              name=\"confirmpassword\" formControlName=\"confirmPassword\" [ngClass]=\"{\r\n                error:\r\n                  (resetPassword.controls.confirmPassword.touched) &&\r\n                  resetPassword.controls.confirmPassword?.errors\r\n              }\" />\r\n                <span class=\"pswd-tgl\">\r\n                  <i class=\"fa\" [ngClass]=\"{\r\n                      'fa-eye-slash': !passwordField3,\r\n                      'fa-eye': passwordField3\r\n                    }\"\r\n                    (click)=\"togglePassword3()\"\r\n                  >\r\n                  </i>\r\n                </span>  \r\n                <div class=\"err-resp\">\r\n                  <span class=\"field-err\" *ngIf=\"\r\n                      (resetPassword.controls.confirmPassword.touched) &&\r\n                      resetPassword.controls.confirmPassword.errors?.required\r\n                    \">\r\n                    Confirm Password is required\r\n                  </span>\r\n                  <span class=\"field-err\" *ngIf=\"\r\n                      resetPassword.controls.confirmPassword.touched &&\r\n                      resetPassword.controls.confirmPassword.errors\r\n                        ?.passwordMismatch\r\n                    \">\r\n                    Passwords doesn't match\r\n                  </span>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"reset-password-save-btn g-pt-12\">\r\n            <button class=\"btn frg-sld-btn g-p-bg g-w-clr g-w-100per\" type=\"submit\" (click)=\"changePassword()\">\r\n              Save and Update\r\n              <i class=\"fas fa-circle-notch fa-spin\" *ngIf=\"loading\"></i>\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/seeker-edit-profile/seeker-edit-profile.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/seeker-edit-profile/seeker-edit-profile.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerSeekerEditProfileSeekerEditProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<profile-top-card></profile-top-card>\r\n<div class=\"container g-mt-32\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"panel-group\">\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading g-white-bg\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" href=\"#collapse1\" class=\"g-fw-500 g-black5-clr g-fs-10\">\r\n                          Profile \r\n                          <span class=\"a-seeker-edit-opt-icon\"><i class=\"fas fa-chevron-down\"></i></span>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapse1\" class=\"panel-collapse collapse in\">\r\n                    <ul class=\"nav nav-pills nav-stacked a-seeker-edit-profile-opt\">\r\n                        <li class=\"active\"><a href=\"#edit\"  data-toggle=\"tab\">Edit Profile</a></li>\r\n                        <li class=\"g-mt-0\"><a href=\"#changePassword\"  data-toggle=\"tab\">Change Password</a></li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            \r\n        </div>\r\n        <div class=\"tab-content col-sm-9\">\r\n            <div id=\"edit\" class=\"tab-pane active\">\r\n                <app-edit-profile></app-edit-profile>\r\n            </div>\r\n            <div id=\"changePassword\" class=\"tab-pane\">\r\n                <app-reset-password></app-reset-password>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/seeker-public-profile/seeker-public-profile.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/seeker-public-profile/seeker-public-profile.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerSeekerPublicProfileSeekerPublicProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<profile-top-card></profile-top-card>\r\n<section class=\"seeker-content-area g-pt-18 g-pb-18\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"g-fs-09 g-fw-500 g-black1-clr g-mb-05\">My Challenges</div>\r\n\t\t<div class=\"filter-section g-mb-15\">\r\n\t\t\t<select (change)=\"handleStatusFilter($event)\">\r\n\t\t\t\t<option value=\"\" selected>Filter by status</option>\r\n\t\t\t\t<ng-container *ngFor=\"let item of challengeFilter\">\r\n\t\t\t\t\t<option [value]=\"item\">{{ item }}</option>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</select>\r\n\t\t\t<ng-container *ngIf=\"!anchorLoading\">\r\n\t\t\t\t<span class=\"g-ml-10 g-fs-075 g-fw-500\">\r\n\t\t\t\t\t<span class=\"body-light-clr\">Showing </span>&nbsp; <span class=\"title-clr\"> {{ anchors?.currently_showing.from }}-{{ anchors?.currently_showing.to }} </span> &nbsp;of\r\n\t\t\t\t\t<span class=\"title-clr\">\r\n\t\t\t\t\t\t{{ anchors?.total_results }} </span\r\n\t\t\t\t\t>&nbsp;\r\n\t\t\t\t\t<span class=\"g-grey5-clr\">Results</span>\r\n\t\t\t\t</span>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t\t<div class=\"row seeker-content-area\">\r\n\t\t\t<ng-container *ngIf=\"!anchorLoading\">\r\n\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let item of anchorData\">\r\n\t\t\t\t\t<challenge-schema-item [data]=\"item\"></challenge-schema-item>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container *ngIf=\"anchorLoading\">\r\n\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let item of [].constructor(10)\">\r\n\t\t\t\t\t<div class=\"anchor-skeleton\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '20px', width: '300px', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '15px', width: '150px', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '4px', height: '28px', width: '120px', margin: '0px 0px 0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t\t<div class=\"text-center\">\r\n\t\t\t<pagination-controller [totalItems]=\"anchors?.total_results\" [pageSize]=\"10\" (onPageChange)=\"handlePagination($event)\"></pagination-controller>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/seeker-user-profile/seeker-user-profile.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/seeker-user-profile/seeker-user-profile.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerSeekerUserProfileSeekerUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<profile-top-card viewType=\"private\"></profile-top-card>\r\n<section class=\"g-pt-18 g-pb-18\">\r\n\t<div class=\"container\">\r\n\t\t<ul class=\"nav nav-tabs\">\r\n\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#challenges\">My Challenges</a></li>\r\n\t\t\t<li><a data-toggle=\"tab\" href=\"#drafts\">Drafts</a></li>\r\n\t\t</ul>\r\n\r\n\t\t<div class=\"tab-content\">\r\n\t\t\t<!-- challenges -->\r\n\t\t\t<div id=\"challenges\" class=\"tab-pane fade in active\">\r\n\t\t\t\t<div class=\"filter-section g-mt-15 g-mb-15\">\r\n\t\t\t\t\t<select (change)=\"handleStatusFilter($event)\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Filter by status</option>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of challengeFilter\">\r\n\t\t\t\t\t\t\t<option [value]=\"item\">{{ item }}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<ng-container *ngIf=\"!anchorLoading\">\r\n\t\t\t\t\t\t<span class=\"g-ml-10 g-fs-075 g-fw-500\">\r\n\t\t\t\t\t\t\t<span class=\"body-light-clr\">Showing </span>&nbsp; <span class=\"title-clr\"> {{ anchors?.currently_showing.from }}-{{ anchors?.currently_showing.to }} </span> &nbsp;of\r\n\t\t\t\t\t\t\t<span class=\"title-clr\"> {{ anchors?.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-grey5-clr\">Results</span>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row seeker-content-area\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!anchorLoading\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let item of anchorData; let index = index\">\r\n\t\t\t\t\t\t\t<challenge-schema-item\r\n\t\t\t\t\t\t\t\t[Id]=\"index\"\r\n\t\t\t\t\t\t\t\t[data]=\"item\"\r\n\t\t\t\t\t\t\t\tviewType=\"private\"\r\n\t\t\t\t\t\t\t\t(onChallengeClose)=\"handleClosedChallenge($event)\"\r\n\t\t\t\t\t\t\t\t(onDelete)=\"handleDeleteChallenge($event)\"\r\n\t\t\t\t\t\t\t></challenge-schema-item>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"anchorLoading\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let item of [].constructor(10)\">\r\n\t\t\t\t\t\t\t<div class=\"anchor-skeleton\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '20px', width: '300px', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '15px', width: '150px', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '4px', height: '28px', width: '120px', margin: '0px 0px 0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"anchors?.total_results\" [pageSize]=\"10\" (onPageChange)=\"handlePagination($event)\"></pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- drafts -->\r\n\t\t\t<div id=\"drafts\" class=\"tab-pane fade\">\r\n\t\t\t\t<div class=\"filter-section g-mt-15 g-mb-15\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!draftLoading\">\r\n\t\t\t\t\t\t<span class=\"g-fs-075 g-fw-500\">\r\n\t\t\t\t\t\t\t<span class=\"body-light-clr\">Showing </span>&nbsp; <span class=\"title-clr\"> {{ drafts?.currently_showing.from }}-{{ drafts?.currently_showing.to }} </span> &nbsp;of\r\n\t\t\t\t\t\t\t<span class=\"title-clr\"> {{ drafts?.total_results }} </span>&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"g-grey5-clr\">Drafts</span>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row seeker-content-area\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!draftLoading\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let item of draftData; let index = index\">\r\n\t\t\t\t\t\t\t<challenge-draft-item [Id]=\"index\" [data]=\"item\" (onDelete)=\"handleDraftDelete($event)\"></challenge-draft-item>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"draftLoading\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let item of [].constructor(10)\">\r\n\t\t\t\t\t\t\t<div class=\"anchor-skeleton\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '20px', width: '300px', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '2px', height: '15px', width: '150px', margin: '0px 0px 2px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<ngx-skeleton-loader animation=\"pulse\" [theme]=\"{ 'border-radius': '4px', height: '28px', width: '120px', margin: '0px 0px 0px' }\"> </ngx-skeleton-loader>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t<pagination-controller [totalItems]=\"drafts?.total_results\" [pageSize]=\"10\" (onPageChange)=\"handleDraftPagination($event)\"></pagination-controller>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/seeker.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/seeker.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerSeekerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/unsolicited-proposals/unsolicited-proposals.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/unsolicited-proposals/unsolicited-proposals.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeekerUnsolicitedProposalsUnsolicitedProposalsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"g-mt-25 g-mb-10 l-back-icon\">\n\t<span (click)=\"backClicked()\" class=\"g-fs-09 g-fw-500 primary-green-clr g-cursor-pointer\"> < Go back to Dashboard </span>\n</div>\n\n<div class=\"g-mb-25 \">\n\t<div class=\"challenge-item-card-wrapper g-cursor-pointer\" *ngFor=\"let unsolicitedData of uns_chall?.data\">\n\t\t<div class=\"d-flex uns_data_cont g-pt-08 g-pb-08\">\n\t\t\t<div class=\"a-challenge-main-cnt-wrp\">\n\t\t\t\t<div class=\"a-challenge-title-wrp\">\n\t\t\t\t\t<div class=\"a-chlng-title g-fs-10 g-black5-clr\">\n\t\t\t\t\t\t{{ unsolicitedData.frg_challenge_id.name.length > 40 ? (unsolicitedData.frg_challenge_id.name | slice: 0:40) + \"..\" : unsolicitedData.frg_challenge_id.name }}\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class=\"g-fs-07 g-mt-15\" *ngIf=\"unsolicitedData.uns_files?.length\" data-toggle=\"modal\"\n\t\t\t\t\t\t[attr.data-target]=\"'#' + 'fileDwnldModal_' + unsolicitedData.id\">\n\t\t\t\t\t\t<i class=\"fas fa-file-alt\"></i> {{unsolicitedData.uns_files?.length}} files attached\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"a-challenge-sub-cnt-wrp\">\n\t\t\t\t\t<div class=\"a-challenge-sub-cnt g-fs-07 body-light-clr\">\n\t\t\t\t\t\t{{ unsolicitedData.frg_challenge_id.frg_challenge_sector_id.name | titlecase }}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"a-chlng-actions-wrp\">\n\t\t\t\t<button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\"\n\t\t\t\t\t(click)=\"changeStatus('approved',unsolicitedData.frg_challenge_id.id,unsolicitedData.frg_smart_city_id.id,unsolicitedData.id,unsolicitedData)\">\n\t\t\t\t\tAccept\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn a-chlng-icon-btn g-trans-bg\"\n\t\t\t\t\t(click)=\"changeStatus('rejected',unsolicitedData.frg_challenge_id.id,unsolicitedData.frg_smart_city_id.id,unsolicitedData.id,unsolicitedData)\">\n\t\t\t\t\tReject\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"d-flex g-pt-08 g-pb-08 uns_meta_data_cont\">\n\t\t\t<div class=\"a-challenge-date-wrp\">\n\t\t\t\t<div class=\"g-fs-07\" *ngIf=\"unsolicitedData.frg_provider_id.role == 'enterprise'\">{{ unsolicitedData.frg_provider_id.enterprise_company_name }}, {{ unsolicitedData.frg_provider_id.role }}</div>\n\t\t\t\t<div class=\"g-fs-07\" *ngIf=\"unsolicitedData.frg_provider_id.role == 'startup'\">{{ unsolicitedData.frg_provider_id.startup_company_name }}, {{ unsolicitedData.frg_provider_id.role }}</div>\n\t\t\t\t<div class=\"g-fs-07\" *ngIf=\"unsolicitedData.frg_provider_id.role == 'individual'\">{{ unsolicitedData.frg_provider_id.fullname }}, {{ unsolicitedData.frg_provider_id.role }}</div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<div class=\"g-fs-06 body-light-clr\">\n\t\t\t\t\t{{ unsolicitedData.frg_challenge_sector_id.name }}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<div class=\"a-challenge-date g-mt-03 g-mb-05\">\n\t\t\t\t\t<span class=\"body-light-clr g-fs-07\">Creation Date: </span>\n\t\t\t\t\t<span class=\"g-fs-06 g-black5-clr\">{{ unsolicitedData.created_at | date: \"d/M/yy\" }}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- download file modal -->\n\n\t\t<div id=\"fileDwnldModal_{{ unsolicitedData.id }}\" class=\"modal fade\" role=\"dialog\">\n\t\t\t<div class=\"modal-dialog\">\n\n\t\t\t\t<!-- Modal content-->\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t\t<div clss=\"g-fs-10\">Attached Files</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<ng-container *ngFor=\"let file of unsolicitedData?.uns_files; let i = index\">\n\t\t\t\t\t\t\t<div class=\"file-item\">\n\t\t\t\t\t\t\t\t<div class=\"file-col\">\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\tfile {{i+1}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"remove-col text-right\">\n\t\t\t\t\t\t\t\t\t<a (click)=\"downloadFiles(file)\"><span class=\"btn act-span\"><i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-download\"></i></span></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"g-pt-05 g-pb-25 text-center\" *ngIf=\"uns_chall?.data.length\">\n\t<pagination-controller [totalItems]=\"uns_chall?.total_results\" [pageSize]=\"10\" (onPageChange)=\"handlePagination($event)\"> </pagination-controller>\n</div>";
    /***/
  },

  /***/
  "./src/app/const.ts":
  /*!**************************!*\
    !*** ./src/app/const.ts ***!
    \**************************/

  /*! exports provided: discover_challenges_provider, discoverSolutions, discoverProviders, challengeStatus */

  /***/
  function srcAppConstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "discover_challenges_provider", function () {
      return discover_challenges_provider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "discoverSolutions", function () {
      return discoverSolutions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "discoverProviders", function () {
      return discoverProviders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "challengeStatus", function () {
      return challengeStatus;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    const pg_show_pr_page = [10, 25, 50, 100];
    const discover_challenges_provider = {
      // filter_by_solution_area_options: [
      //     { name: "Water Management", value: "user_type", options: "/faqs?filter=", opt_field: 'user_type', api_col_name:'user_type' }
      // ],
      // solution_maturity_options: [{ name: "Pre Pilot", value: "prepilot" }, { name: "Pilot Ready", value: "pilotReady" }, { name: "Certified", value: "certified" }],
      solution_options: [{
        name: "Under-5",
        value: "0-5"
      }, {
        name: "5-10",
        value: "5-10"
      }, {
        name: "10-15",
        value: "10-15"
      }, {
        name: "15-20",
        value: "15-20"
      }, {
        name: "Above 20",
        value: "20"
      }],
      anchors_options: [{
        name: "Under-5",
        value: "0-5"
      }, {
        name: "5-10",
        value: "5-10"
      }, {
        name: "10-15",
        value: "10-15"
      }, {
        name: "15-20",
        value: "15-20"
      }, {
        name: "Above 20",
        value: "20"
      }],
      team_size_options: [{
        name: "Under-10",
        value: "name"
      }, {
        name: "10-20",
        value: "name"
      }, {
        name: "20-50",
        value: "name"
      }, {
        name: "50-100",
        value: "name"
      }, {
        name: "Above 100",
        value: "name"
      }],
      // sort_by_options: [{ name: "Name", value: "name" }, { name: "User Type", value: "user_type" }],
      sort_by_values: [{
        name: "Alphabetic (A-Z)",
        value: "challenge_name ASC"
      }, {
        name: "Alphabetic (Z-A)",
        value: "challenge_name DESC"
      }, {
        name: "Newly Launched",
        value: "created_at DESC"
      }, {
        name: "Most Anchors",
        value: "anchors DESC"
      }, {
        name: "Most Solutions",
        value: "solutions DESC"
      }],
      pg_show_pr_page: pg_show_pr_page
    };
    const discoverSolutions = {
      sort_by_values: [{
        name: "Alphabetic (A-Z)",
        value: "name ASC"
      }, {
        name: "Alphabetic (Z-A)",
        value: "name DESC"
      }, {
        name: "Newly Launced",
        value: "created_at DESC"
      }],
      solution_maturity: [{
        name: "Pre Pilot",
        value: "Pre Pilot"
      }, {
        name: "Pilot",
        value: "Pilot"
      }, {
        name: "Certified",
        value: "Pilot Certified"
      }],
      team_size_options: [{
        name: "Under-10",
        value: "1-10"
      }, {
        name: "10-20",
        value: "10-20"
      }, {
        name: "20-50",
        value: "20-50"
      }, {
        name: "50-100",
        value: "50-100"
      }, {
        name: "Above 100",
        value: "100"
      }],
      pg_show_pr_page: pg_show_pr_page
    };
    const discoverProviders = {
      sort_by_values: [{
        name: "Alphabetic (A-Z)",
        value: "fullname ASC"
      }, {
        name: "Alphabetic (Z-A)",
        value: "fullname DESC"
      }, {
        name: "Recently Added",
        value: "created_at DESC"
      }, {
        name: "Most Solutions",
        value: "solutions DESC"
      }],
      provider_role: [{
        name: "Start Up",
        value: "startup"
      }, {
        name: "Enterprise",
        value: "enterprise"
      }, {
        name: "Individual",
        value: "individual"
      }],
      team_size_options: [{
        name: "Under-10",
        value: "1-10"
      }, {
        name: "10-20",
        value: "10-20"
      }, {
        name: "20-50",
        value: "20-50"
      }, {
        name: "50-100",
        value: "50-100"
      }, {
        name: "Above 100",
        value: "100"
      }],
      pg_show_pr_page: pg_show_pr_page
    };
    const challengeStatus = ["Awaiting Approval", "Accepting Solutions", "Reviewing Solutions", "Co-Creation", "Accepting Pilots", "Reviewing Pilots", "Pilot Implementation", "Closed"];
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
  "./src/app/seeker/challenge-schema.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/seeker/challenge-schema.service.ts ***!
    \****************************************************/

  /*! exports provided: ChallengeSchemaService */

  /***/
  function srcAppSeekerChallengeSchemaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChallengeSchemaService", function () {
      return ChallengeSchemaService;
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

    let ChallengeSchemaService = class ChallengeSchemaService {
      constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
      }

      getChallengeSchemas(seekerId, Currentpage, filterBy) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const limit = 10;
          const page = Currentpage / limit + 1;
          const query = {
            filter: {
              status: ["active", "closed"],
              frg_seeker_id: seekerId,
              challenge_status: ""
            },
            pg: {
              skip: Currentpage,
              limit: limit
            }
          };

          if (filterBy != "" && typeof filterBy != undefined) {
            query.filter.challenge_status = filterBy;
          } else {
            delete query.filter.challenge_status;
          }

          const dataResponse = yield this.http.post(this.api_url + "/anchors/select_mul", query).toPromise();
          const countResponse = yield this.http.post(this.api_url + "/anchors/count", query).toPromise();
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

      getChallengeDrafts(seekerId, Currentpage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const limit = 10;
          const page = Currentpage / limit + 1;
          const query = {
            filter: {
              status: "draft",
              frg_seeker_id: seekerId
            },
            pg: {
              skip: Currentpage,
              limit: limit
            }
          };
          const dataResponse = yield this.http.post(this.api_url + "/anchors/select_mul", query).toPromise();
          const countResponse = yield this.http.post(this.api_url + "/anchors/count", query).toPromise();
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

      getChallenge(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let challenge = yield this.http.post(this.api_url + "/challenges/select", {
            slug: {
              id: id
            }
          }).toPromise();
          return challenge.data;
        });
      }

      deleteChallengeBrief(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/anchors/delete", {
            slug: {
              id: id
            }
          }).toPromise();
        });
      }

      updateChallengeBrief(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/anchors/update", postData).toPromise();
        });
      }

      pushClosedNotification(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/anchors/close_anchor_notification", {
            slug: {
              id: id
            }
          }).toPromise();
        });
      }

    };

    ChallengeSchemaService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    ChallengeSchemaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ChallengeSchemaService);
    /***/
  },

  /***/
  "./src/app/seeker/components/challenge-draft-item/challenge-draft-item.component.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/seeker/components/challenge-draft-item/challenge-draft-item.component.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerComponentsChallengeDraftItemChallengeDraftItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".anchor-item {\r\n\tposition: relative;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n\tbackground: var(--white);\r\n\tmargin-bottom: 16px;\r\n\tmin-height: 136px;\r\n\toutline: none !important;\r\n\tcursor: pointer;\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n\t-webkit-touch-callout: none; /* iOS Safari */\r\n\t-webkit-user-select: none; /* Safari */ /* Konqueror HTML */\r\n\t-moz-user-select: none; /* Old versions of Firefox */\r\n\t-ms-user-select: none; /* Internet Explorer/Edge */\r\n\tuser-select: none;\r\n}\r\n\r\n.anchor-item:hover {\r\n\tborder-color: var(--primary-green);\r\n\tbox-shadow: 0px 4px 25px rgba(172, 177, 193, 0.4);\r\n}\r\n\r\n.anchor-item .wrap {\r\n\tpadding: 24px;\r\n\toutline: none !important;\r\n}\r\n\r\n.anchor-item .title {\r\n\tfont-size: 0.842rem;\r\n\tfont-weight: 400;\r\n\tmargin-bottom: 0.2rem;\r\n\tcolor: var(--body-grey);\r\n}\r\n\r\n.anchor-item .sector {\r\n\tfont-size: 0.631rem;\r\n\tfont-weight: 400;\r\n\tcolor: var(--body-light);\r\n\tmargin-bottom: 0.8rem;\r\n}\r\n\r\n.item-footer {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: end;\r\n\t        align-items: flex-end;\r\n}\r\n\r\n.status-tag {\r\n\tpadding: 10px 20px;\r\n\tfont-size: 0.526rem;\r\n\tbackground: #eeeff3;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.count {\r\n\tfont-size: 0.736rem;\r\n\tfont-weight: 400;\r\n\tcolor: var(--body-light);\r\n}\r\n\r\n.anchor-item .menu {\r\n\tposition: absolute;\r\n\ttop: 8px;\r\n\tright: 8px;\r\n\tz-index: 10;\r\n}\r\n\r\n.anchor-item .menu button {\r\n\tborder-radius: 15px;\r\n\tbackground-color: var(--white);\r\n\tpadding: 8px 8px;\r\n\tfont-size: 14px;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.anchor-item .menu button:hover {\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n.anchor-item .menu .dropdown-menu {\r\n\tright: 0 !important;\r\n\tleft: unset !important;\r\n\tborder: none !important;\r\n\tbox-shadow: 0px 2.38049px 11.9024px rgba(0, 0, 0, 0.1) !important;\r\n}\r\n\r\n.dropdown-menu span {\r\n\tdisplay: block;\r\n\tpadding: 8px 10px;\r\n\tfont-size: 0.736rem;\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\tcursor: pointer;\r\n\toutline: none !important;\r\n\tfont-weight: 400;\r\n\tcolor: #6f6f6f;\r\n}\r\n\r\n.dropdown-menu span:hover {\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n.a-challenge-schema-modal {\r\n\twidth: 570px !important;\r\n\tmargin: 256px auto !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NvbXBvbmVudHMvY2hhbGxlbmdlLWRyYWZ0LWl0ZW0vY2hhbGxlbmdlLWRyYWZ0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLHdCQUF3QjtDQUN4QixlQUFlO0NBQ2YsaUNBQXlCO0NBQXpCLHlCQUF5QjtDQUN6QiwyQkFBMkIsRUFBRSxlQUFlO0NBQzVDLHlCQUF5QixFQUFFLFdBQVcsRUFDWixtQkFBbUI7Q0FDN0Msc0JBQXNCLEVBQUUsNEJBQTRCO0NBQ3BELHFCQUFxQixFQUFFLDJCQUEyQjtDQUNsRCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxrQ0FBa0M7Q0FDbEMsaURBQWlEO0FBQ2xEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsd0JBQXdCO0NBQ3hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUE4QjtTQUE5Qiw4QkFBOEI7Q0FDOUIsc0JBQXFCO1NBQXJCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixVQUFVO0NBQ1YsV0FBVztBQUNaOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLG9CQUFhO0NBQWIsYUFBYTtDQUNiLHdCQUF1QjtTQUF2Qix1QkFBdUI7Q0FDdkIseUJBQW1CO1NBQW5CLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGlFQUFpRTtBQUNsRTs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLDRCQUFvQjtDQUFwQixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLHdCQUF3QjtDQUN4QixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLDZCQUE2QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jb21wb25lbnRzL2NoYWxsZW5nZS1kcmFmdC1pdGVtL2NoYWxsZW5nZS1kcmFmdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5jaG9yLWl0ZW0ge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHRtaW4taGVpZ2h0OiAxMzZweDtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblx0LXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXHJcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXHJcblx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXHJcblx0LW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5hbmNob3ItaXRlbTpob3ZlciB7XHJcblx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcclxuXHRib3gtc2hhZG93OiAwcHggNHB4IDI1cHggcmdiYSgxNzIsIDE3NywgMTkzLCAwLjQpO1xyXG59XHJcblxyXG4uYW5jaG9yLWl0ZW0gLndyYXAge1xyXG5cdHBhZGRpbmc6IDI0cHg7XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYW5jaG9yLWl0ZW0gLnRpdGxlIHtcclxuXHRmb250LXNpemU6IDAuODQycmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG5cdGNvbG9yOiB2YXIoLS1ib2R5LWdyZXkpO1xyXG59XHJcblxyXG4uYW5jaG9yLWl0ZW0gLnNlY3RvciB7XHJcblx0Zm9udC1zaXplOiAwLjYzMXJlbTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGNvbG9yOiB2YXIoLS1ib2R5LWxpZ2h0KTtcclxuXHRtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbn1cclxuXHJcbi5pdGVtLWZvb3RlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uc3RhdHVzLXRhZyB7XHJcblx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdGZvbnQtc2l6ZTogMC41MjZyZW07XHJcblx0YmFja2dyb3VuZDogI2VlZWZmMztcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5jb3VudCB7XHJcblx0Zm9udC1zaXplOiAwLjczNnJlbTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGNvbG9yOiB2YXIoLS1ib2R5LWxpZ2h0KTtcclxufVxyXG5cclxuLmFuY2hvci1pdGVtIC5tZW51IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA4cHg7XHJcblx0cmlnaHQ6IDhweDtcclxuXHR6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmFuY2hvci1pdGVtIC5tZW51IGJ1dHRvbiB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0cGFkZGluZzogOHB4IDhweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5jaG9yLWl0ZW0gLm1lbnUgYnV0dG9uOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uYW5jaG9yLWl0ZW0gLm1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG5cdHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0bGVmdDogdW5zZXQgIWltcG9ydGFudDtcclxuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuXHRib3gtc2hhZG93OiAwcHggMi4zODA0OXB4IDExLjkwMjRweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgc3BhbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogOHB4IDEwcHg7XHJcblx0Zm9udC1zaXplOiAwLjczNnJlbTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Y29sb3I6ICM2ZjZmNmY7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHNwYW46aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLmEtY2hhbGxlbmdlLXNjaGVtYS1tb2RhbCB7XHJcblx0d2lkdGg6IDU3MHB4ICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luOiAyNTZweCBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/seeker/components/challenge-draft-item/challenge-draft-item.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/seeker/components/challenge-draft-item/challenge-draft-item.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ChallengeDraftItemComponent */

  /***/
  function srcAppSeekerComponentsChallengeDraftItemChallengeDraftItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChallengeDraftItemComponent", function () {
      return ChallengeDraftItemComponent;
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


    var _challenge_schema_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../challenge-schema.service */
    "./src/app/seeker/challenge-schema.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    let ChallengeDraftItemComponent = class ChallengeDraftItemComponent {
      constructor(challengeService, toastr) {
        this.challengeService = challengeService;
        this.toastr = toastr;
        this.data = null;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {}

      deleteChallengeDraft(draftId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.deleteLoading = true;
            let deletedData = yield this.challengeService.deleteChallengeBrief(draftId);
            $("#deleteChallengeDraft_".concat(this.Id)).modal("hide");
            this.deleteLoading = false;
            this.toastr.info("", "Draft deleted");
            this.onDelete.emit(deletedData);
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

    };

    ChallengeDraftItemComponent.ctorParameters = () => [{
      type: _challenge_schema_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeSchemaService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChallengeDraftItemComponent.prototype, "Id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChallengeDraftItemComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChallengeDraftItemComponent.prototype, "onDelete", void 0);
    ChallengeDraftItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "challenge-draft-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./challenge-draft-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/components/challenge-draft-item/challenge-draft-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./challenge-draft-item.component.css */
      "./src/app/seeker/components/challenge-draft-item/challenge-draft-item.component.css")).default]
    })], ChallengeDraftItemComponent);
    /***/
  },

  /***/
  "./src/app/seeker/components/challenge-schema-item/challenge-schema-item.component.css":
  /*!*********************************************************************************************!*\
    !*** ./src/app/seeker/components/challenge-schema-item/challenge-schema-item.component.css ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerComponentsChallengeSchemaItemChallengeSchemaItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".anchor-item{\r\n    position: relative;\r\n    border: 1px solid #DEDEDE;\r\n    border-radius: 6px;\r\n    background: var(--white);\r\n    margin-bottom:16px;\r\n    min-height:136px;\r\n    outline:none !important;\r\n    cursor: pointer;\r\n    -webkit-transition:all 0.3s ease;\r\n    transition:all 0.3s ease;    \r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\r\n       -moz-user-select: none; /* Old versions of Firefox */\r\n        -ms-user-select: none; /* Internet Explorer/Edge */\r\n            user-select: none; \r\n}\r\n\r\n.anchor-item:hover{\r\n    border-color: var(--primary-green);\r\n    box-shadow: 0px 4px 25px rgba(172, 177, 193, 0.4);\r\n}\r\n\r\n.anchor-item .wrap{\r\n    padding:24px;\r\n    outline: none !important;\r\n}\r\n\r\n.anchor-item .title{\r\n    font-size: 0.842rem;\r\n    font-weight:400;\r\n    margin-bottom: 0.2rem;\r\n    color: var(--body-grey);\r\n}\r\n\r\n.anchor-item .sector{\r\n    font-size: 0.631rem;\r\n    font-weight:400;\r\n    color: var(--body-light);\r\n    margin-bottom: 0.8rem;    \r\n}\r\n\r\n.item-footer{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: end;\r\n            align-items: flex-end;\r\n}\r\n\r\n.status-tag{\r\n    padding:10px 20px;\r\n    font-size:0.526rem;\r\n    background: #EEEFF3;\r\n    border-radius: 4px;\r\n}\r\n\r\n.count{\r\n    font-size: 0.736rem;\r\n    font-weight:400;\r\n    color: var(--body-light);\r\n}\r\n\r\n.anchor-item .menu {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    z-index:10;\r\n  }\r\n\r\n.anchor-item .menu button {\r\n    border-radius: 15px;\r\n    background-color: var(--white);\r\n    padding: 8px 8px;\r\n    font-size: 14px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.anchor-item .menu button:hover{\r\n    background-color:#f5f5f5;\r\n}\r\n\r\n.anchor-item .menu .dropdown-menu {\r\n    right: 0 !important;\r\n    left: unset !important;\r\n    border: none !important;\r\n    box-shadow: 0px 2.38049px 11.9024px rgba(0, 0, 0, 0.1) !important;\r\n}\r\n\r\n.dropdown-menu span {\r\n    display: block;\r\n    padding: 8px 10px;\r\n    font-size: 0.736rem;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    cursor: pointer;\r\n    outline: none !important;\r\n    font-weight: 400;\r\n    color: #6F6F6F;\r\n}\r\n\r\n.dropdown-menu span:hover {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.a-challenge-schema-modal{\r\n    width:570px !important;\r\n    margin: 256px auto !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NvbXBvbmVudHMvY2hhbGxlbmdlLXNjaGVtYS1pdGVtL2NoYWxsZW5nZS1zY2hlbWEtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQ0FBd0I7SUFBeEIsd0JBQXdCO0lBQ3hCLDJCQUEyQixFQUFFLGVBQWU7SUFDNUMseUJBQXlCLEVBQUUsV0FBVyxFQUNYLG1CQUFtQjtPQUMzQyxzQkFBc0IsRUFBRSw0QkFBNEI7UUFDbkQscUJBQXFCLEVBQUUsMkJBQTJCO1lBQzlDLGlCQUFpQjtBQUM3Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixzQkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixVQUFVO0VBQ1o7O0FBRUY7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9jb21wb25lbnRzL2NoYWxsZW5nZS1zY2hlbWEtaXRlbS9jaGFsbGVuZ2Utc2NoZW1hLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmNob3ItaXRlbXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE2cHg7XHJcbiAgICBtaW4taGVpZ2h0OjEzNnB4O1xyXG4gICAgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjNzIGVhc2U7ICAgIFxyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cclxuICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXHJcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgXHJcbn1cclxuXHJcbi5hbmNob3ItaXRlbTpob3ZlcntcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDI1cHggcmdiYSgxNzIsIDE3NywgMTkzLCAwLjQpO1xyXG59XHJcblxyXG4uYW5jaG9yLWl0ZW0gLndyYXB7XHJcbiAgICBwYWRkaW5nOjI0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbmNob3ItaXRlbSAudGl0bGV7XHJcbiAgICBmb250LXNpemU6IDAuODQycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWJvZHktZ3JleSk7XHJcbn1cclxuXHJcbi5hbmNob3ItaXRlbSAuc2VjdG9ye1xyXG4gICAgZm9udC1zaXplOiAwLjYzMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1ib2R5LWxpZ2h0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTsgICAgXHJcbn1cclxuXHJcbi5pdGVtLWZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5zdGF0dXMtdGFne1xyXG4gICAgcGFkZGluZzoxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6MC41MjZyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRkYzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uY291bnR7XHJcbiAgICBmb250LXNpemU6IDAuNzM2cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgY29sb3I6IHZhcigtLWJvZHktbGlnaHQpO1xyXG59XHJcblxyXG4uYW5jaG9yLWl0ZW0gLm1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogOHB4O1xyXG4gICAgei1pbmRleDoxMDtcclxuICB9XHJcbiAgXHJcbi5hbmNob3ItaXRlbSAubWVudSBidXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIHBhZGRpbmc6IDhweCA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5jaG9yLWl0ZW0gLm1lbnUgYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xyXG59XHJcblxyXG4uYW5jaG9yLWl0ZW0gLm1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyLjM4MDQ5cHggMTEuOTAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDAuNzM2cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM2RjZGNkY7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHNwYW46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG4uYS1jaGFsbGVuZ2Utc2NoZW1hLW1vZGFse1xyXG4gICAgd2lkdGg6NTcwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMjU2cHggYXV0byAhaW1wb3J0YW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/seeker/components/challenge-schema-item/challenge-schema-item.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/seeker/components/challenge-schema-item/challenge-schema-item.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ChallengeSchemaItemComponent */

  /***/
  function srcAppSeekerComponentsChallengeSchemaItemChallengeSchemaItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChallengeSchemaItemComponent", function () {
      return ChallengeSchemaItemComponent;
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


    var _challenge_schema_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../challenge-schema.service */
    "./src/app/seeker/challenge-schema.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    let ChallengeSchemaItemComponent = class ChallengeSchemaItemComponent {
      constructor(challengeService, toastr) {
        this.challengeService = challengeService;
        this.toastr = toastr;
        this.data = null;
        this.viewType = "public";
        this.onChallengeClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {}

      ngOnChanges() {}

      handleCloseChallenge() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.closeLoading = true;
            let closedChallenge = yield this.challengeService.updateChallengeBrief({
              slug: {
                id: this.data.id
              },
              data: {
                status: "Closed",
                challenge_status: "Closed"
              }
            });
            yield this.challengeService.pushClosedNotification(this.data.id);
            this.closeLoading = false;
            $("#closeChallenge_".concat(this.Id)).modal("hide");
            this.toastr.info("Challenge has been closed", "");
            this.onChallengeClose.emit(closedChallenge);
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      deleteChallenge() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.deleteLoading = true;
            let deletedData = yield this.challengeService.deleteChallengeBrief(this.data.id);
            $("#deleteChallenge_".concat(this.Id)).modal("hide");
            this.deleteLoading = false;
            this.toastr.info("", "Challenge has been deleted");
            this.onDelete.emit(deletedData);
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

    };

    ChallengeSchemaItemComponent.ctorParameters = () => [{
      type: _challenge_schema_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeSchemaService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChallengeSchemaItemComponent.prototype, "Id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChallengeSchemaItemComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChallengeSchemaItemComponent.prototype, "viewType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChallengeSchemaItemComponent.prototype, "onChallengeClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChallengeSchemaItemComponent.prototype, "onDelete", void 0);
    ChallengeSchemaItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "challenge-schema-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./challenge-schema-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/components/challenge-schema-item/challenge-schema-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./challenge-schema-item.component.css */
      "./src/app/seeker/components/challenge-schema-item/challenge-schema-item.component.css")).default]
    })], ChallengeSchemaItemComponent);
    /***/
  },

  /***/
  "./src/app/seeker/components/profile-top-card/profile-top-card.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/seeker/components/profile-top-card/profile-top-card.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerComponentsProfileTopCardProfileTopCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-card-parent {\r\n\tborder-top: 1px solid #dee0e6;\r\n}\r\n\r\n.profile-flex-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n/* .profile-flex-row > div:not(:last-child){\r\n    padding-right: 1.5rem;\r\n} */\r\n\r\n.profile-picture {\r\n\tflex-basis: 15%;\r\n}\r\n\r\n/* .a-profile-card-edit-icon{\r\n    vertical-align: super;\r\n} */\r\n\r\n.a-profile-card-edit-icon {\r\n\tbackground-color: #e5e5e5 !important;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.a-profile-card-edit-icon a {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\twidth: 32px;\r\n\theight: 32px;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.profile-picture img {\r\n\twidth: 170px;\r\n\theight: 170px;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.profile-meta {\r\n\tflex-basis: 82%;\r\n}\r\n\r\n/* .challenge-sectors{\r\n    flex-basis:30%;\r\n} */\r\n\r\n.profile-meta .user-name {\r\n\tfont-size: 1.473rem;\r\n\tfont-weight: 500;\r\n\tcolor: var(--title-active);\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.profile-meta .user-designation {\r\n\tfont-size: 1.157rem;\r\n\tfont-weight: 400;\r\n\tcolor: var(--body-grey);\r\n\tmargin-bottom: 0.8rem;\r\n}\r\n\r\n.user-other-details {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.user-other-details div {\r\n\topacity: 0.7;\r\n}\r\n\r\n.user-other-details div:not(:last-child) {\r\n\tmargin-right: 1.5rem;\r\n}\r\n\r\n.user-other-details div a {\r\n\tdisplay: block;\r\n\tmargin-bottom: 0.5rem;\r\n}\r\n\r\n.user-other-details div i {\r\n\tmargin-right: 0.4rem;\r\n}\r\n\r\n.user-other-details div,\r\n.user-other-details a {\r\n\tfont-size: 0.736rem;\r\n\tfont-weight: 400;\r\n\tcolor: var(--body-grey);\r\n}\r\n\r\n.user-other-details span:not(:last-child) {\r\n\tmargin-right: 2rem;\r\n}\r\n\r\n.challenge-sectors > span {\r\n\tcolor: var(--body-light);\r\n\tfont-size: 0.736rem;\r\n}\r\n\r\n.l-sectors-cont {\r\n\tborder-top: 1px solid #00000024;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n\tmargin-top: 2rem;\r\n}\r\n\r\n.l-sect-badge {\r\n\tbackground: #eeeff3;\r\n\tpadding: 3px 16px;\r\n\tborder-radius: 16px;\r\n\tdisplay: inline-block;\r\n\tmargin-bottom: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2NvbXBvbmVudHMvcHJvZmlsZS10b3AtY2FyZC9wcm9maWxlLXRvcC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBOEI7U0FBOUIsOEJBQThCO0NBQzlCLHlCQUFtQjtTQUFuQixtQkFBbUI7QUFDcEI7O0FBRUE7O0dBRUc7O0FBRUg7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBOztHQUVHOztBQUNIO0NBQ0Msb0NBQW9DO0NBQ3BDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLFdBQVc7Q0FDWCxZQUFZO0NBQ1osd0JBQXVCO1NBQXZCLHVCQUF1QjtDQUN2Qix5QkFBbUI7U0FBbkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBOztHQUVHOztBQUVIO0NBQ0MsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQiwwQkFBMEI7Q0FDMUIsb0JBQWE7Q0FBYixhQUFhO0NBQ2IseUJBQW1CO1NBQW5CLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msb0JBQW9CO0FBQ3JCOztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLCtCQUErQjtDQUMvQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvY29tcG9uZW50cy9wcm9maWxlLXRvcC1jYXJkL3Byb2ZpbGUtdG9wLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNhcmQtcGFyZW50IHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTBlNjtcclxufVxyXG5cclxuLnByb2ZpbGUtZmxleC1yb3cge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIC5wcm9maWxlLWZsZXgtcm93ID4gZGl2Om5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbn0gKi9cclxuXHJcbi5wcm9maWxlLXBpY3R1cmUge1xyXG5cdGZsZXgtYmFzaXM6IDE1JTtcclxufVxyXG4vKiAuYS1wcm9maWxlLWNhcmQtZWRpdC1pY29ue1xyXG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG59ICovXHJcbi5hLXByb2ZpbGUtY2FyZC1lZGl0LWljb24ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTUgIWltcG9ydGFudDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5hLXByb2ZpbGUtY2FyZC1lZGl0LWljb24gYSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogMzJweDtcclxuXHRoZWlnaHQ6IDMycHg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtcGljdHVyZSBpbWcge1xyXG5cdHdpZHRoOiAxNzBweDtcclxuXHRoZWlnaHQ6IDE3MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtbWV0YSB7XHJcblx0ZmxleC1iYXNpczogODIlO1xyXG59XHJcblxyXG4vKiAuY2hhbGxlbmdlLXNlY3RvcnN7XHJcbiAgICBmbGV4LWJhc2lzOjMwJTtcclxufSAqL1xyXG5cclxuLnByb2ZpbGUtbWV0YSAudXNlci1uYW1lIHtcclxuXHRmb250LXNpemU6IDEuNDczcmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Y29sb3I6IHZhcigtLXRpdGxlLWFjdGl2ZSk7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZmlsZS1tZXRhIC51c2VyLWRlc2lnbmF0aW9uIHtcclxuXHRmb250LXNpemU6IDEuMTU3cmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Y29sb3I6IHZhcigtLWJvZHktZ3JleSk7XHJcblx0bWFyZ2luLWJvdHRvbTogMC44cmVtO1xyXG59XHJcblxyXG4udXNlci1vdGhlci1kZXRhaWxzIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnVzZXItb3RoZXItZGV0YWlscyBkaXYge1xyXG5cdG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLnVzZXItb3RoZXItZGV0YWlscyBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi51c2VyLW90aGVyLWRldGFpbHMgZGl2IGEge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLnVzZXItb3RoZXItZGV0YWlscyBkaXYgaSB7XHJcblx0bWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbn1cclxuXHJcbi51c2VyLW90aGVyLWRldGFpbHMgZGl2LFxyXG4udXNlci1vdGhlci1kZXRhaWxzIGEge1xyXG5cdGZvbnQtc2l6ZTogMC43MzZyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRjb2xvcjogdmFyKC0tYm9keS1ncmV5KTtcclxufVxyXG5cclxuLnVzZXItb3RoZXItZGV0YWlscyBzcGFuOm5vdCg6bGFzdC1jaGlsZCkge1xyXG5cdG1hcmdpbi1yaWdodDogMnJlbTtcclxufVxyXG5cclxuLmNoYWxsZW5nZS1zZWN0b3JzID4gc3BhbiB7XHJcblx0Y29sb3I6IHZhcigtLWJvZHktbGlnaHQpO1xyXG5cdGZvbnQtc2l6ZTogMC43MzZyZW07XHJcbn1cclxuLmwtc2VjdG9ycy1jb250IHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDI0O1xyXG5cdHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cdG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuLmwtc2VjdC1iYWRnZSB7XHJcblx0YmFja2dyb3VuZDogI2VlZWZmMztcclxuXHRwYWRkaW5nOiAzcHggMTZweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/seeker/components/profile-top-card/profile-top-card.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/seeker/components/profile-top-card/profile-top-card.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProfileTopCardComponent */

  /***/
  function srcAppSeekerComponentsProfileTopCardProfileTopCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileTopCardComponent", function () {
      return ProfileTopCardComponent;
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


    var _profile_top_card_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../profile-top-card/profile.service */
    "./src/app/seeker/components/profile-top-card/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    let ProfileTopCardComponent = class ProfileTopCardComponent {
      constructor(_profile, route, router) {
        this._profile = _profile;
        this.route = route;
        this.router = router;
        this.viewType = "public";
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url;
        this.route.params.subscribe(params => this.userSlug = params.slug);
      }

      ngOnInit() {
        this.fetchProfileInfo(this.userSlug);
      }

      fetchProfileInfo(slug) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.profileLoading = true;
          this.profileInfo = yield this._profile.getProfile(slug);
          this.profileLoading = false;
        });
      }

      editSectors() {
        var query_params = {
          queryParams: {
            mode: "update"
          }
        }; // this.router.navigate(['/discover/select-sector'],{
        //   state: { mode: query_params }
        // })

        this.router.navigate(["/discover/select-sector"], query_params);
      }

    };

    ProfileTopCardComponent.ctorParameters = () => [{
      type: _profile_top_card_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileTopCardComponent.prototype, "viewType", void 0);
    ProfileTopCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "profile-top-card",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-top-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/components/profile-top-card/profile-top-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-top-card.component.css */
      "./src/app/seeker/components/profile-top-card/profile-top-card.component.css")).default]
    })], ProfileTopCardComponent);
    /***/
  },

  /***/
  "./src/app/seeker/components/profile-top-card/profile.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/seeker/components/profile-top-card/profile.service.ts ***!
    \***********************************************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppSeekerComponentsProfileTopCardProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
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
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let ProfileService = class ProfileService {
      constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
      }

      getProfile(slug) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let resp = yield this.http.post(this.api_url + '/seekers/select', {
            search: {
              slug: slug
            }
          }).toPromise();
          this.seekerProfileInfo = resp.data;
          return this.seekerProfileInfo;
        });
      }

    };

    ProfileService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProfileService);
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/components/accepting-solutions/accepting-solutions.component.css":
  /*!***************************************************************************************************!*\
    !*** ./src/app/seeker/dashboard/components/accepting-solutions/accepting-solutions.component.css ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerDashboardComponentsAcceptingSolutionsAcceptingSolutionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".challenge-item-card-wrapper {\r\n  background-color: #fff;\r\n  border: 1px solid #dedede;\r\n  box-sizing: border-box;\r\n  border-radius: 6px;\r\n  width: 100%;\r\n  max-width: 1170px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 24px;\r\n  margin-bottom: 15px;\r\n}\r\n.d-flex {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  /* align-items: center; */\r\n}\r\n.a-accepting-solution {\r\n  background: rgba(251, 196, 31, 0.1);\r\n  border: 1px solid #fbc41f;\r\n  color: #947412;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n.a-chlng-title {\r\n  white-space: nowrap;\r\n  width: 300px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.a-chlng-badge {\r\n  width: 100%;\r\n  min-width: 140px;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2Rhc2hib2FyZC9jb21wb25lbnRzL2FjY2VwdGluZy1zb2x1dGlvbnMvYWNjZXB0aW5nLXNvbHV0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9kYXNoYm9hcmQvY29tcG9uZW50cy9hY2NlcHRpbmctc29sdXRpb25zL2FjY2VwdGluZy1zb2x1dGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFsbGVuZ2UtaXRlbS1jYXJkLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDExNzBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5kLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbn1cclxuLmEtYWNjZXB0aW5nLXNvbHV0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTk2LCAzMSwgMC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmJjNDFmO1xyXG4gIGNvbG9yOiAjOTQ3NDEyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxufVxyXG4uYS1jaGxuZy10aXRsZSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uYS1jaGxuZy1iYWRnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/components/accepting-solutions/accepting-solutions.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/seeker/dashboard/components/accepting-solutions/accepting-solutions.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AcceptingSolutionsComponent */

  /***/
  function srcAppSeekerDashboardComponentsAcceptingSolutionsAcceptingSolutionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcceptingSolutionsComponent", function () {
      return AcceptingSolutionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AcceptingSolutionsComponent = class AcceptingSolutionsComponent {
      constructor() {}

      ngOnInit() {}

    };
    AcceptingSolutionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accepting-solutions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accepting-solutions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/accepting-solutions/accepting-solutions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accepting-solutions.component.css */
      "./src/app/seeker/dashboard/components/accepting-solutions/accepting-solutions.component.css")).default]
    })], AcceptingSolutionsComponent);
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/components/awaiting-approval/awaiting-approval.component.css":
  /*!***********************************************************************************************!*\
    !*** ./src/app/seeker/dashboard/components/awaiting-approval/awaiting-approval.component.css ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerDashboardComponentsAwaitingApprovalAwaitingApprovalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".challenge-item-card-wrapper {\r\n  background-color: #fff;\r\n  border: 1px solid #dedede;\r\n  box-sizing: border-box;\r\n  border-radius: 6px;\r\n  width: 100%;\r\n  max-width: 1170px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 24px;\r\n  margin-bottom: 15px;\r\n}\r\n.d-flex {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  /* align-items: center; */\r\n}\r\n.a-await-approval {\r\n  background: rgba(172, 177, 193, 0.1);\r\n  border: 1px solid var(--primary-grey);\r\n  color: #7f838f;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n.a-chlng-title {\r\n  white-space: nowrap;\r\n  width: 300px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.a-chlng-badge {\r\n  width: 100%;\r\n  min-width: 140px;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2Rhc2hib2FyZC9jb21wb25lbnRzL2F3YWl0aW5nLWFwcHJvdmFsL2F3YWl0aW5nLWFwcHJvdmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2Rhc2hib2FyZC9jb21wb25lbnRzL2F3YWl0aW5nLWFwcHJvdmFsL2F3YWl0aW5nLWFwcHJvdmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbGxlbmdlLWl0ZW0tY2FyZC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uZC1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcbi5hLWF3YWl0LWFwcHJvdmFsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KTtcclxuICBjb2xvcjogIzdmODM4ZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuLmEtY2hsbmctdGl0bGUge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmEtY2hsbmctYmFkZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/components/awaiting-approval/awaiting-approval.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/seeker/dashboard/components/awaiting-approval/awaiting-approval.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: AwaitingApprovalComponent */

  /***/
  function srcAppSeekerDashboardComponentsAwaitingApprovalAwaitingApprovalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AwaitingApprovalComponent", function () {
      return AwaitingApprovalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AwaitingApprovalComponent = class AwaitingApprovalComponent {
      constructor() {}

      ngOnInit() {}

    };
    AwaitingApprovalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-awaiting-approval',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./awaiting-approval.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/awaiting-approval/awaiting-approval.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./awaiting-approval.component.css */
      "./src/app/seeker/dashboard/components/awaiting-approval/awaiting-approval.component.css")).default]
    })], AwaitingApprovalComponent);
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/components/awaiting-proposals/awaiting-proposals.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/seeker/dashboard/components/awaiting-proposals/awaiting-proposals.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerDashboardComponentsAwaitingProposalsAwaitingProposalsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".challenge-item-card-wrapper {\r\n  background-color: #fff;\r\n  border: 1px solid #dedede;\r\n  box-sizing: border-box;\r\n  border-radius: 6px;\r\n  width: 100%;\r\n  max-width: 1170px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 24px;\r\n  margin-bottom: 15px;\r\n}\r\n.d-flex {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  /* align-items: center; */\r\n}\r\n.a-await-proposal {\r\n  background: rgba(242, 148, 62, 0.1);\r\n  border: 1px solid #f2943e;\r\n  color: #d98538;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n.a-chlng-title {\r\n  white-space: nowrap;\r\n  width: 300px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2Rhc2hib2FyZC9jb21wb25lbnRzL2F3YWl0aW5nLXByb3Bvc2Fscy9hd2FpdGluZy1wcm9wb3NhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9kYXNoYm9hcmQvY29tcG9uZW50cy9hd2FpdGluZy1wcm9wb3NhbHMvYXdhaXRpbmctcHJvcG9zYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbGxlbmdlLWl0ZW0tY2FyZC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uZC1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcbi5hLWF3YWl0LXByb3Bvc2FsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMTQ4LCA2MiwgMC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjI5NDNlO1xyXG4gIGNvbG9yOiAjZDk4NTM4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxufVxyXG4uYS1jaGxuZy10aXRsZSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/components/awaiting-proposals/awaiting-proposals.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/seeker/dashboard/components/awaiting-proposals/awaiting-proposals.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: AwaitingProposalsComponent */

  /***/
  function srcAppSeekerDashboardComponentsAwaitingProposalsAwaitingProposalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AwaitingProposalsComponent", function () {
      return AwaitingProposalsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AwaitingProposalsComponent = class AwaitingProposalsComponent {
      constructor() {}

      ngOnInit() {}

    };
    AwaitingProposalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-awaiting-proposals',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./awaiting-proposals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/awaiting-proposals/awaiting-proposals.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./awaiting-proposals.component.css */
      "./src/app/seeker/dashboard/components/awaiting-proposals/awaiting-proposals.component.css")).default]
    })], AwaitingProposalsComponent);
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/components/card-loader/card-loader.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/seeker/dashboard/components/card-loader/card-loader.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerDashboardComponentsCardLoaderCardLoaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkLWxvYWRlci9jYXJkLWxvYWRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/components/card-loader/card-loader.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/seeker/dashboard/components/card-loader/card-loader.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: CardLoaderComponent */

  /***/
  function srcAppSeekerDashboardComponentsCardLoaderCardLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      selector: "card-skeleton-loader",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/card-loader/card-loader.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-loader.component.css */
      "./src/app/seeker/dashboard/components/card-loader/card-loader.component.css")).default]
    })], CardLoaderComponent);
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/components/challenge-item/challenge-item.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/seeker/dashboard/components/challenge-item/challenge-item.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerDashboardComponentsChallengeItemChallengeItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".challenge-item-card-wrapper {\r\n  background-color: #fff;\r\n  border: 1px solid #dedede;\r\n  box-sizing: border-box;\r\n  border-radius: 6px;\r\n  width: 100%;\r\n  max-width: 1170px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 24px;\r\n  margin-bottom: 15px;\r\n}\r\n.d-flex {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.a-await-approval {\r\n  background: rgba(172, 177, 193, 0.1);\r\n  border: 1px solid var(--primary-grey);\r\n  color: #7f838f;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n.a-await-proposal {\r\n  background: rgba(242, 148, 62, 0.1);\r\n  border: 1px solid #f2943e;\r\n  color: #d98538;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n.a-accepting-solution {\r\n  background: rgba(251, 196, 31, 0.1);\r\n  border: 1px solid #fbc41f;\r\n  color: #947412;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n.a-pilot {\r\n  background: rgba(45, 152, 81, 0.1);\r\n  border: 1px solid #2d9851;\r\n  color: #1e6636;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n.a-chlng-icon-btn {\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n.a-chlng-title {\r\n  white-space: nowrap;\r\n  width: 300px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.a-chlng-badge {\r\n  width: 100%;\r\n  min-width: 140px;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2Rhc2hib2FyZC9jb21wb25lbnRzL2NoYWxsZW5nZS1pdGVtL2NoYWxsZW5nZS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9kYXNoYm9hcmQvY29tcG9uZW50cy9jaGFsbGVuZ2UtaXRlbS9jaGFsbGVuZ2UtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYWxsZW5nZS1pdGVtLWNhcmQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTE3MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmQtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYS1hd2FpdC1hcHByb3ZhbCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNzIsIDE3NywgMTkzLCAwLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JleSk7XHJcbiAgY29sb3I6ICM3ZjgzOGY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG59XHJcbi5hLWF3YWl0LXByb3Bvc2FsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMTQ4LCA2MiwgMC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjI5NDNlO1xyXG4gIGNvbG9yOiAjZDk4NTM4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxufVxyXG4uYS1hY2NlcHRpbmctc29sdXRpb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTYsIDMxLCAwLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmYmM0MWY7XHJcbiAgY29sb3I6ICM5NDc0MTI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG59XHJcbi5hLXBpbG90IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCAxNTIsIDgxLCAwLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZDk4NTE7XHJcbiAgY29sb3I6ICMxZTY2MzY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG59XHJcblxyXG4uYS1jaGxuZy1pY29uLWJ0biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbi5hLWNobG5nLXRpdGxlIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5hLWNobG5nLWJhZGdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/components/challenge-item/challenge-item.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/seeker/dashboard/components/challenge-item/challenge-item.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ChallengeItemComponent */

  /***/
  function srcAppSeekerDashboardComponentsChallengeItemChallengeItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChallengeItemComponent", function () {
      return ChallengeItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ChallengeItemComponent = class ChallengeItemComponent {
      constructor() {}

      ngOnInit() {// console.log(this.challengeData);
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChallengeItemComponent.prototype, "challengeData", void 0);
    ChallengeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-challenge-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./challenge-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/challenge-item/challenge-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./challenge-item.component.css */
      "./src/app/seeker/dashboard/components/challenge-item/challenge-item.component.css")).default]
    })], ChallengeItemComponent);
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/components/pilots/pilots.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/seeker/dashboard/components/pilots/pilots.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerDashboardComponentsPilotsPilotsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".challenge-item-card-wrapper {\r\n  background-color: #fff;\r\n  border: 1px solid #dedede;\r\n  box-sizing: border-box;\r\n  border-radius: 6px;\r\n  width: 100%;\r\n  max-width: 1170px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 24px;\r\n  margin-bottom: 15px;\r\n}\r\n.d-flex {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  /* align-items: center; */\r\n}\r\n.a-pilot {\r\n  background: rgba(45, 152, 81, 0.1);\r\n  border: 1px solid #2d9851;\r\n  color: #1e6636;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n}\r\n.a-chlng-title {\r\n  white-space: nowrap;\r\n  width: 300px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.a-chlng-badge {\r\n  width: 100%;\r\n  min-width: 140px;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2Rhc2hib2FyZC9jb21wb25lbnRzL3BpbG90cy9waWxvdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvZGFzaGJvYXJkL2NvbXBvbmVudHMvcGlsb3RzL3BpbG90cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYWxsZW5nZS1pdGVtLWNhcmQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTE3MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmQtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxufVxyXG5cclxuLmEtcGlsb3Qge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDUsIDE1MiwgODEsIDAuMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkOTg1MTtcclxuICBjb2xvcjogIzFlNjYzNjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuLmEtY2hsbmctdGl0bGUge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmEtY2hsbmctYmFkZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/components/pilots/pilots.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/seeker/dashboard/components/pilots/pilots.component.ts ***!
    \************************************************************************/

  /*! exports provided: PilotsComponent */

  /***/
  function srcAppSeekerDashboardComponentsPilotsPilotsComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    let PilotsComponent = class PilotsComponent {
      constructor() {}

      ngOnInit() {}

    };
    PilotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pilots',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pilots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/components/pilots/pilots.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pilots.component.css */
      "./src/app/seeker/dashboard/components/pilots/pilots.component.css")).default]
    })], PilotsComponent);
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/dashboard.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/seeker/dashboard/dashboard.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-challenge-item-wrapper .tab-content {\r\n\tmin-height: 90vh;\r\n}\r\n\r\n.a-challenge-tab [data-toggle=\"pill\"] span {\r\n\tposition: relative;\r\n\tz-index: 10;\r\n}\r\n\r\n.nav-pills > li + li {\r\n\tmargin: 0px;\r\n}\r\n\r\n.nav-pills > li > a {\r\n\tborder-radius: 0px;\r\n}\r\n\r\n.a-all {\r\n\tbackground: #fcfcfc;\r\n\tborder: 1px solid #cdd0da;\r\n\tcolor: #000;\r\n\tborder-right: 0px !important;\r\n\r\n\t/* margin-left: -25px; */\r\n\tpadding-left: 30px;\r\n\tpadding-right: 30px;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n\tborder-top-left-radius: 4px !important;\r\n\tborder-bottom-left-radius: 4px !important;\r\n}\r\n\r\n.a-challenge-tab .a-all::after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 6px;\r\n\twidth: 32px;\r\n\theight: 32px;\r\n\tbackground: #fcfcfc;\r\n\tborder: 1px solid #cdd0da;\r\n\t-webkit-transform: rotate(47deg);\r\n\ttransform: rotate(45deg);\r\n\tleft: 80%;\r\n\tborder-bottom: 0px;\r\n\tborder-left: 0px;\r\n\tz-index: 2;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n\r\n.nav-pills > li.active .a-all,\r\n.nav-pills > li.active .a-all::after,\r\n.a-all:hover,\r\n.a-all:hover:after {\r\n\tbackground: #4f4f4f !important;\r\n\tborder-color: #4f4f4f !important;\r\n\tcolor: #fff !important;\r\n}\r\n\r\n.a-tab-await-approval {\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid var(--primary-grey);\r\n\tcolor: #7f838f;\r\n\tborder-right: 0px !important;\r\n\tborder-left: 0px !important;\r\n\t/* margin-left: -25px; */\r\n\tpadding-left: 40px;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n\r\n.a-challenge-tab .a-tab-await-approval::after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 6px;\r\n\twidth: 32px;\r\n\theight: 32px;\r\n\tbackground: #f7f7f9;\r\n\tborder: 1px solid var(--primary-grey);\r\n\t-webkit-transform: rotate(47deg);\r\n\ttransform: rotate(45deg);\r\n\tleft: 90%;\r\n\tborder-bottom: 0px;\r\n\tborder-left: 0px;\r\n\tz-index: 2;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n\r\n.nav-pills > li.active .a-tab-await-approval,\r\n.nav-pills > li.active .a-tab-await-approval::after,\r\n.a-tab-await-approval:hover,\r\n.a-tab-await-approval:hover:after {\r\n\tbackground-color: #7f838f !important;\r\n\tcolor: #f7f7f9;\r\n}\r\n\r\n.a-tab-awaiting-proposals {\r\n\tbackground: #fef4ec;\r\n\tborder: 1px solid #f2943e;\r\n\tcolor: #222327;\r\n\tborder-right: 0px !important;\r\n\tborder-left: 0px !important;\r\n\t/* margin-left: -25px; */\r\n\tpadding-left: 40px;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n\r\n.a-challenge-tab .a-tab-awaiting-proposals::after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 6px;\r\n\twidth: 32px;\r\n\theight: 32px;\r\n\tbackground: #fef4ec;\r\n\tborder: 1px solid #f2943e;\r\n\t-webkit-transform: rotate(47deg);\r\n\ttransform: rotate(45deg);\r\n\tleft: 90%;\r\n\tborder-bottom: 0px;\r\n\tborder-left: 0px;\r\n\tz-index: 2;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n\r\n.nav-pills > li.active .a-tab-awaiting-proposals,\r\n.nav-pills > li.active .a-tab-awaiting-proposals::after,\r\n.a-tab-awaiting-proposals:hover,\r\n.a-tab-awaiting-proposals:hover:after {\r\n\tbackground-color: #f2943e !important;\r\n\tcolor: #f7f7f9;\r\n}\r\n\r\n.a-tab-accepting-solutions {\r\n\tbackground: #fff9e9;\r\n\tborder: 1px solid #fbc41f;\r\n\tcolor: #222327;\r\n\tborder-right: 0px !important;\r\n\tborder-left: 0px !important;\r\n\t/* margin-left: -25px; */\r\n\tpadding-left: 40px;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n\r\n.a-challenge-tab .a-tab-accepting-solutions::after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 6px;\r\n\twidth: 32px;\r\n\theight: 32px;\r\n\tbackground: #fff9e9;\r\n\tborder: 1px solid #fbc41f;\r\n\t-webkit-transform: rotate(47deg);\r\n\ttransform: rotate(45deg);\r\n\tleft: 90%;\r\n\tborder-bottom: 0px;\r\n\tborder-left: 0px;\r\n\tz-index: 2;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n\r\n.nav-pills > li.active .a-tab-accepting-solutions,\r\n.nav-pills > li.active .a-tab-accepting-solutions::after,\r\n.a-tab-accepting-solutions:hover,\r\n.a-tab-accepting-solutions:hover:after {\r\n\tbackground-color: #fbc41f !important;\r\n\tcolor: #f7f7f9;\r\n}\r\n\r\n.a-tab-pilots {\r\n\tbackground: #eaf5ee;\r\n\tborder: 1px solid #2d9851;\r\n\tcolor: #222327;\r\n\tpadding-left: 40px;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n\tborder-top-right-radius: 4px !important;\r\n\tborder-bottom-right-radius: 4px !important;\r\n}\r\n\r\n.a-challenge-tab .a-tab-pilots::after{\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 6px;\r\n\twidth: 32px;\r\n\theight: 32px;\r\n\tbackground: #eaf5ee;\r\n    border: 1px solid #2d9851;\r\n\t-webkit-transform: rotate(47deg);\r\n\ttransform: rotate(45deg);\r\n\tleft: 83%;\r\n\tborder-bottom: 0px;\r\n\tborder-left: 0px;\r\n\tz-index: 2;\r\n\t-webkit-transition: all 0.2s ease !important;\r\n\ttransition: all 0.2s ease !important;\r\n}\r\n\r\n.a-tab-uns-prop {\r\n    background: #eaf5ee;\r\n    border: 1px solid #2d9851;\r\n    color: #222327;\r\n    padding-left: 40px;\r\n    -webkit-transition: all 0.2s ease !important;\r\n    transition: all 0.2s ease !important;\r\n    border-top-right-radius: 4px !important;\r\n    border-bottom-right-radius: 4px !important;\r\n}\r\n\r\n.nav-pills > li.active .a-tab-pilots,\r\n.a-tab-pilots:hover,\r\n.a-tab-pilots:hover,\r\n.a-tab-pilots:hover:after {\r\n\tbackground-color: #2d9851 !important;\r\n\tcolor: #eaf5ee;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLFdBQVc7Q0FDWCw0QkFBNEI7O0NBRTVCLHdCQUF3QjtDQUN4QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLDRDQUFvQztDQUFwQyxvQ0FBb0M7Q0FDcEMsc0NBQXNDO0NBQ3RDLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsZ0NBQWdDO0NBQ2hDLHdCQUF3QjtDQUN4QixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixVQUFVO0NBQ1YsNENBQTRDO0NBQzVDLG9DQUFvQztBQUNyQzs7QUFFQTs7OztDQUlDLDhCQUE4QjtDQUM5QixnQ0FBZ0M7Q0FDaEMsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHFDQUFxQztDQUNyQyxjQUFjO0NBQ2QsNEJBQTRCO0NBQzVCLDJCQUEyQjtDQUMzQix3QkFBd0I7Q0FDeEIsa0JBQWtCO0NBQ2xCLDRDQUFvQztDQUFwQyxvQ0FBb0M7QUFDckM7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIscUNBQXFDO0NBQ3JDLGdDQUFnQztDQUNoQyx3QkFBd0I7Q0FDeEIsU0FBUztDQUNULGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLDRDQUE0QztDQUM1QyxvQ0FBb0M7QUFDckM7O0FBQ0E7Ozs7Q0FJQyxvQ0FBb0M7Q0FDcEMsY0FBYztBQUNmOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QsNEJBQTRCO0NBQzVCLDJCQUEyQjtDQUMzQix3QkFBd0I7Q0FDeEIsa0JBQWtCO0NBQ2xCLDRDQUFvQztDQUFwQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGdDQUFnQztDQUNoQyx3QkFBd0I7Q0FDeEIsU0FBUztDQUNULGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLDRDQUE0QztDQUM1QyxvQ0FBb0M7QUFDckM7O0FBSUE7Ozs7Q0FJQyxvQ0FBb0M7Q0FDcEMsY0FBYztBQUNmOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QsNEJBQTRCO0NBQzVCLDJCQUEyQjtDQUMzQix3QkFBd0I7Q0FDeEIsa0JBQWtCO0NBQ2xCLDRDQUFvQztDQUFwQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGdDQUFnQztDQUNoQyx3QkFBd0I7Q0FDeEIsU0FBUztDQUNULGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLDRDQUE0QztDQUM1QyxvQ0FBb0M7QUFDckM7O0FBRUE7Ozs7Q0FJQyxvQ0FBb0M7Q0FDcEMsY0FBYztBQUNmOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLDRDQUFvQztDQUFwQyxvQ0FBb0M7Q0FDcEMsdUNBQXVDO0NBQ3ZDLDBDQUEwQztBQUMzQzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjtJQUNoQix5QkFBeUI7Q0FDNUIsZ0NBQWdDO0NBQ2hDLHdCQUF3QjtDQUN4QixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixVQUFVO0NBQ1YsNENBQTRDO0NBQzVDLG9DQUFvQztBQUNyQzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiw0Q0FBb0M7SUFBcEMsb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QywwQ0FBMEM7QUFDOUM7O0FBRUE7Ozs7Q0FJQyxvQ0FBb0M7Q0FDcEMsY0FBYztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hLWNoYWxsZW5nZS1pdGVtLXdyYXBwZXIgLnRhYi1jb250ZW50IHtcclxuXHRtaW4taGVpZ2h0OiA5MHZoO1xyXG59XHJcblxyXG4uYS1jaGFsbGVuZ2UtdGFiIFtkYXRhLXRvZ2dsZT1cInBpbGxcIl0gc3BhbiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ubmF2LXBpbGxzID4gbGkgKyBsaSB7XHJcblx0bWFyZ2luOiAwcHg7XHJcbn1cclxuLm5hdi1waWxscyA+IGxpID4gYSB7XHJcblx0Ym9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG4uYS1hbGwge1xyXG5cdGJhY2tncm91bmQ6ICNmY2ZjZmM7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NkZDBkYTtcclxuXHRjb2xvcjogIzAwMDtcclxuXHRib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG5cclxuXHQvKiBtYXJnaW4tbGVmdDogLTI1cHg7ICovXHJcblx0cGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYS1jaGFsbGVuZ2UtdGFiIC5hLWFsbDo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNnB4O1xyXG5cdHdpZHRoOiAzMnB4O1xyXG5cdGhlaWdodDogMzJweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjZGQwZGE7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0N2RlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdGxlZnQ6IDgwJTtcclxuXHRib3JkZXItYm90dG9tOiAwcHg7XHJcblx0Ym9yZGVyLWxlZnQ6IDBweDtcclxuXHR6LWluZGV4OiAyO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSAuYS1hbGwsXHJcbi5uYXYtcGlsbHMgPiBsaS5hY3RpdmUgLmEtYWxsOjphZnRlcixcclxuLmEtYWxsOmhvdmVyLFxyXG4uYS1hbGw6aG92ZXI6YWZ0ZXIge1xyXG5cdGJhY2tncm91bmQ6ICM0ZjRmNGYgIWltcG9ydGFudDtcclxuXHRib3JkZXItY29sb3I6ICM0ZjRmNGYgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYS10YWItYXdhaXQtYXBwcm92YWwge1xyXG5cdGJhY2tncm91bmQ6ICNmN2Y3Zjk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KTtcclxuXHRjb2xvcjogIzdmODM4ZjtcclxuXHRib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuXHQvKiBtYXJnaW4tbGVmdDogLTI1cHg7ICovXHJcblx0cGFkZGluZy1sZWZ0OiA0MHB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxufVxyXG4uYS1jaGFsbGVuZ2UtdGFiIC5hLXRhYi1hd2FpdC1hcHByb3ZhbDo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNnB4O1xyXG5cdHdpZHRoOiAzMnB4O1xyXG5cdGhlaWdodDogMzJweDtcclxuXHRiYWNrZ3JvdW5kOiAjZjdmN2Y5O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JleSk7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0N2RlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdGxlZnQ6IDkwJTtcclxuXHRib3JkZXItYm90dG9tOiAwcHg7XHJcblx0Ym9yZGVyLWxlZnQ6IDBweDtcclxuXHR6LWluZGV4OiAyO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxufVxyXG4ubmF2LXBpbGxzID4gbGkuYWN0aXZlIC5hLXRhYi1hd2FpdC1hcHByb3ZhbCxcclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSAuYS10YWItYXdhaXQtYXBwcm92YWw6OmFmdGVyLFxyXG4uYS10YWItYXdhaXQtYXBwcm92YWw6aG92ZXIsXHJcbi5hLXRhYi1hd2FpdC1hcHByb3ZhbDpob3ZlcjphZnRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzdmODM4ZiAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZjdmN2Y5O1xyXG59XHJcblxyXG4uYS10YWItYXdhaXRpbmctcHJvcG9zYWxzIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmVmNGVjO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMjk0M2U7XHJcblx0Y29sb3I6ICMyMjIzMjc7XHJcblx0Ym9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuXHRib3JkZXItbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcblx0LyogbWFyZ2luLWxlZnQ6IC0yNXB4OyAqL1xyXG5cdHBhZGRpbmctbGVmdDogNDBweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hLWNoYWxsZW5nZS10YWIgLmEtdGFiLWF3YWl0aW5nLXByb3Bvc2Fsczo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNnB4O1xyXG5cdHdpZHRoOiAzMnB4O1xyXG5cdGhlaWdodDogMzJweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmVmNGVjO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMjk0M2U7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0N2RlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdGxlZnQ6IDkwJTtcclxuXHRib3JkZXItYm90dG9tOiAwcHg7XHJcblx0Ym9yZGVyLWxlZnQ6IDBweDtcclxuXHR6LWluZGV4OiAyO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4ubmF2LXBpbGxzID4gbGkuYWN0aXZlIC5hLXRhYi1hd2FpdGluZy1wcm9wb3NhbHMsXHJcbi5uYXYtcGlsbHMgPiBsaS5hY3RpdmUgLmEtdGFiLWF3YWl0aW5nLXByb3Bvc2Fsczo6YWZ0ZXIsXHJcbi5hLXRhYi1hd2FpdGluZy1wcm9wb3NhbHM6aG92ZXIsXHJcbi5hLXRhYi1hd2FpdGluZy1wcm9wb3NhbHM6aG92ZXI6YWZ0ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmMjk0M2UgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2Y3ZjdmOTtcclxufVxyXG5cclxuLmEtdGFiLWFjY2VwdGluZy1zb2x1dGlvbnMge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY5ZTk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZiYzQxZjtcclxuXHRjb2xvcjogIzIyMjMyNztcclxuXHRib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuXHQvKiBtYXJnaW4tbGVmdDogLTI1cHg7ICovXHJcblx0cGFkZGluZy1sZWZ0OiA0MHB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmEtY2hhbGxlbmdlLXRhYiAuYS10YWItYWNjZXB0aW5nLXNvbHV0aW9uczo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNnB4O1xyXG5cdHdpZHRoOiAzMnB4O1xyXG5cdGhlaWdodDogMzJweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmOWU5O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmYmM0MWY7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0N2RlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdGxlZnQ6IDkwJTtcclxuXHRib3JkZXItYm90dG9tOiAwcHg7XHJcblx0Ym9yZGVyLWxlZnQ6IDBweDtcclxuXHR6LWluZGV4OiAyO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSAuYS10YWItYWNjZXB0aW5nLXNvbHV0aW9ucyxcclxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSAuYS10YWItYWNjZXB0aW5nLXNvbHV0aW9uczo6YWZ0ZXIsXHJcbi5hLXRhYi1hY2NlcHRpbmctc29sdXRpb25zOmhvdmVyLFxyXG4uYS10YWItYWNjZXB0aW5nLXNvbHV0aW9uczpob3ZlcjphZnRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZiYzQxZiAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZjdmN2Y5O1xyXG59XHJcblxyXG4uYS10YWItcGlsb3RzIHtcclxuXHRiYWNrZ3JvdW5kOiAjZWFmNWVlO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyZDk4NTE7XHJcblx0Y29sb3I6ICMyMjIzMjc7XHJcblx0cGFkZGluZy1sZWZ0OiA0MHB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hLWNoYWxsZW5nZS10YWIgLmEtdGFiLXBpbG90czo6YWZ0ZXJ7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA2cHg7XHJcblx0d2lkdGg6IDMycHg7XHJcblx0aGVpZ2h0OiAzMnB4O1xyXG5cdGJhY2tncm91bmQ6ICNlYWY1ZWU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmQ5ODUxO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDdkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRsZWZ0OiA4MyU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMHB4O1xyXG5cdGJvcmRlci1sZWZ0OiAwcHg7XHJcblx0ei1pbmRleDogMjtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmEtdGFiLXVucy1wcm9wIHtcclxuICAgIGJhY2tncm91bmQ6ICNlYWY1ZWU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmQ5ODUxO1xyXG4gICAgY29sb3I6ICMyMjIzMjc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgPiBsaS5hY3RpdmUgLmEtdGFiLXBpbG90cyxcclxuLmEtdGFiLXBpbG90czpob3ZlcixcclxuLmEtdGFiLXBpbG90czpob3ZlcixcclxuLmEtdGFiLXBpbG90czpob3ZlcjphZnRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJkOTg1MSAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZWFmNWVlO1xyXG59XHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/dashboard.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/seeker/dashboard/dashboard.component.ts ***!
    \*********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppSeekerDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.service */
    "./src/app/seeker/dashboard/dashboard.service.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let DashboardComponent = class DashboardComponent {
      constructor(dashService, router) {
        this.dashService = dashService;
        this.router = router;
        this.query = {
          filter: {},
          sort: "created_at DESC",
          pg: {
            limit: 20,
            skip: 0
          }
        };
        this.loggedInUser$.subscribe(resp => {
          this.loggedInUser = resp.LoggedInUser;
          this.query.filter.frg_seeker_id = this.loggedInUser.userTypeId;
        });
      }

      ngOnInit() {
        this.fetchChallenges();
      }

      fetchChallenges() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.isLoading = true;
            this.allChallenges = yield this.dashService.getChallenges(this.query); // console.log(this.allChallenges)

            this.awaitingApproval = this.allChallenges.data.filter(cl => cl.challenge_status === "Awaiting Approval" || cl.status === 'pending');
            this.acceptingSolutions = this.allChallenges.data.filter(cl => cl.challenge_status === "Accepting Solutions");
            this.awaitingProposals = this.allChallenges.data.filter(cl => cl.challenge_status === "Awaiting Proposal");
            this.Pilots = this.allChallenges.data.filter(cl => cl.challenge_status === "Pilot");
            this.isLoading = false;
          } catch (err) {
            console.log(err);
          }
        });
      }

      handlePagination(pageNumber) {
        this.query.pg.skip = (pageNumber - 1) * this.query.pg.limit;
        this.fetchChallenges();
      }

      gotoUnsolicited() {
        this.router.navigate(['/seeker/user/' + this.loggedInUser.slug + '/unsolicted-proposal']);
      }

    };

    DashboardComponent.ctorParameters = () => [{
      type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__["LoggedInUserState"])], DashboardComponent.prototype, "loggedInUser$", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/seeker/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/seeker/dashboard/dashboard.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/seeker/dashboard/dashboard.service.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppSeekerDashboardDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
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
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let DashboardService = class DashboardService {
      constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
      }

      getChallenges(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const limit = parseInt(query.pg.limit);
          const page = parseInt(query.pg.skip) / limit + 1;
          const dataResponse = yield this.http.post(this.api_url + "/anchors/select_mul", query).toPromise();
          Promise.all(dataResponse.data.map(challenge => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log("service", challenge);
            let sector = yield this.http.post(this.api_url + "/challenge_sectors/select", {
              slug: {
                id: challenge.frg_challenge_id.frg_challenge_sector_id
              }
            }).toPromise();
            challenge.frg_challenge_id.frg_challenge_sector_id = sector.data;
            challenge.proposal_received = challenge.proposals.length;
            challenge.active_pilots = challenge.proposals.filter(p => p.pilot_status === "Completed").length;
          })));
          const countResponse = yield this.http.post(this.api_url + "/anchors/count", query).toPromise();
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

      getSeekerDetails(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          var post_data = {
            slug: {
              id: id
            }
          };
          return yield this.http.post(this.api_url + '/seekers/select_slug', post_data).toPromise();
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
          resp_data.currently_showing = {
            from: startItem,
            to: endItem
          };
          resp_data.total_results = totalResults.data;
          resp_data.page_count = PageCount;
          return resp_data;
        });
      }

      getUnsolicitedChallengesCount(post_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/unsolicited_proposal/count", post_data).toPromise();
        });
      }

      associateAnchorAndSmartCity(post_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/anchors_and_smart_cities/create", post_data).toPromise();
        });
      }

      updateUnsolProposal(post_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/unsolicited_proposal/update", post_data).toPromise();
        });
      }

      createUnsoPropAnchor(post_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/unsolicited_proposal/create_anchor_update_uns_proposal", post_data).toPromise();
        });
      }

    };

    DashboardService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], DashboardService);
    /***/
  },

  /***/
  "./src/app/seeker/edit-challenge-brief/challenge-brief.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/seeker/edit-challenge-brief/challenge-brief.service.ts ***!
    \************************************************************************/

  /*! exports provided: ChallengeBriefService */

  /***/
  function srcAppSeekerEditChallengeBriefChallengeBriefServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChallengeBriefService", function () {
      return ChallengeBriefService;
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
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let ChallengeBriefService = class ChallengeBriefService {
      constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
      }

      getChallengeBrief(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/anchors/select", {
            slug: {
              id: id
            }
          }).toPromise();
        });
      }

      updateChallengeBrief(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/anchors/update", postData).toPromise();
        });
      }

      sendNotifications(anchorId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/anchors/new_anchor_notification", {
            slug: {
              id: anchorId
            }
          }).toPromise();
        });
      }

    };

    ChallengeBriefService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    ChallengeBriefService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ChallengeBriefService);
    /***/
  },

  /***/
  "./src/app/seeker/edit-challenge-brief/edit-challenge-brief.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/seeker/edit-challenge-brief/edit-challenge-brief.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerEditChallengeBriefEditChallengeBriefComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".edit-challenge-brief-parent{\r\n    min-height: 100vh;\r\n}\r\n\r\n.loader-wrp{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    min-height: 100vh;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.challenge-step-tabs{\r\n    background-color: var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n}\r\n\r\n.challenge-step-tabs div{\r\n    padding:0.736rem;\r\n    font-size: 0.842rem;\r\n    color: var(--body-grey);\r\n    -webkit-transition: all 0.3s ease;\r\n    transition: all 0.3s ease;    \r\n    cursor: pointer;\r\n}\r\n\r\n.challenge-step-tabs div:not(:last-child){\r\n    border-bottom: 1px solid #DEDEDE;\r\n}\r\n\r\n.challenge-step-tabs div:hover,\r\n.challenge-step-tabs div.active{\r\n    background: #DEDEDE;\r\n}\r\n\r\n.step-form-parent{\r\n    padding: 36px;\r\n    background-color: var(--white);\r\n    border: 1px solid #DEDEDE;\r\n    border-radius: 6px;\r\n}\r\n\r\n.flex-row{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.flex-row>div{\r\n    flex-basis: 48%;\r\n}\r\n\r\nlabel{\r\n    font-size: 0.631rem;\r\n    line-height: 1.6;\r\n}\r\n\r\nlabel .field-desp{\r\n    opacity: 0.7;\r\n    font-weight: 300;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2VkaXQtY2hhbGxlbmdlLWJyaWVmL2VkaXQtY2hhbGxlbmdlLWJyaWVmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9lZGl0LWNoYWxsZW5nZS1icmllZi9lZGl0LWNoYWxsZW5nZS1icmllZi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtY2hhbGxlbmdlLWJyaWVmLXBhcmVudHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubG9hZGVyLXdycHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNoYWxsZW5nZS1zdGVwLXRhYnN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmNoYWxsZW5nZS1zdGVwLXRhYnMgZGl2e1xyXG4gICAgcGFkZGluZzowLjczNnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NDJyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tYm9keS1ncmV5KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7ICAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2hhbGxlbmdlLXN0ZXAtdGFicyBkaXY6bm90KDpsYXN0LWNoaWxkKXtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVERURFO1xyXG59XHJcblxyXG4uY2hhbGxlbmdlLXN0ZXAtdGFicyBkaXY6aG92ZXIsXHJcbi5jaGFsbGVuZ2Utc3RlcC10YWJzIGRpdi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjREVERURFO1xyXG59XHJcblxyXG4uc3RlcC1mb3JtLXBhcmVudHtcclxuICAgIHBhZGRpbmc6IDM2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uZmxleC1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1yb3c+ZGl2e1xyXG4gICAgZmxleC1iYXNpczogNDglO1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMC42MzFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG5sYWJlbCAuZmllbGQtZGVzcHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/edit-challenge-brief/edit-challenge-brief.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/seeker/edit-challenge-brief/edit-challenge-brief.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: EditChallengeBriefComponent */

  /***/
  function srcAppSeekerEditChallengeBriefEditChallengeBriefComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditChallengeBriefComponent", function () {
      return EditChallengeBriefComponent;
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


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _challenge_brief_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./challenge-brief.service */
    "./src/app/seeker/edit-challenge-brief/challenge-brief.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");

    let EditChallengeBriefComponent = class EditChallengeBriefComponent {
      constructor(_location, toastr, fb, _challenge, router, route) {
        this._location = _location;
        this.toastr = toastr;
        this.fb = fb;
        this._challenge = _challenge;
        this.router = router;
        this.route = route;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
        this.isSubmitted = {
          Step1: false,
          Step2: false,
          Step3: false
        };
        this.editChallengeForm = {
          Step1: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"],
          Step2: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"],
          Step3: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]
        };
        this.urlPattern = new RegExp("^(http|https)://");
        this.minDate = null;
        this.route.params.subscribe(params => {
          this.challengeBriefId = params.challengeId;
        });
        this.route.queryParams.subscribe(params => {
          if (params.type) this.editType = params.type;
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
        this.pageLoading = true;
        this.editChallengeStep1 = false;
        this.editChallengeStep2 = true;
        this.editChallengeStep3 = true;
        this.editChallengeForm = {
          Step1: this.fb.group({
            challengeSummary: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
            challengeScenario: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
            targetBeneficiaries: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
            startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            closeDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          }),
          Step2: this.fb.group({
            functionalRequirements: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
            operationalCapabilities: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
            deploymentConstraints: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]],
            tangibleOutcomes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)]]
          }),
          Step3: this.fb.group({
            gaps: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000)]],
            otherRequirements: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000)]],
            additionalLink1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            additionalLink2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]],
            additionalLink3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.urlPattern)]]
          })
        };
        this.fetchAndPatchChallengeBrief(this.challengeBriefId);
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

      fetchAndPatchChallengeBrief(challengeBriefId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.pageLoading = true;
            this.challengeBriefData = yield this._challenge.getChallengeBrief(challengeBriefId);
            this.editChallengeForm.Step1.patchValue({
              challengeSummary: this.challengeBriefData.data.challenge_summary,
              challengeScenario: this.challengeBriefData.data.challenge_scenario,
              targetBeneficiaries: this.challengeBriefData.data.target_beneficiaries,
              startDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.challengeBriefData.data.start_date, "yyyy-MM-dd", "en"),
              closeDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.challengeBriefData.data.end_date, "yyyy-MM-dd", "en")
            });
            this.editChallengeForm.Step2.patchValue({
              functionalRequirements: this.challengeBriefData.data.functional_requirements,
              operationalCapabilities: this.challengeBriefData.data.functional_operational_capabilities,
              deploymentConstraints: this.challengeBriefData.data.deployment_constraints,
              tangibleOutcomes: this.challengeBriefData.data.tangible_outcomes_benefits
            });
            this.editChallengeForm.Step3.patchValue({
              gaps: this.challengeBriefData.data.gaps_current_solution,
              otherRequirements: this.challengeBriefData.data.other_requirements_remarks,
              additionalLink1: this.challengeBriefData.data.info_links[0],
              additionalLink2: this.challengeBriefData.data.info_links[1],
              additionalLink3: this.challengeBriefData.data.info_links[2]
            });
            this.pageLoading = false;
            this.minDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.challengeBriefData.data.start_date, "yyyy-MM-dd", "en");
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      backClicked() {
        this._location.back();
      }

      gotoStep(step) {
        switch (step) {
          case "step1":
            {
              this.editChallengeStep1 = false;
              this.editChallengeStep2 = true;
              this.editChallengeStep3 = true;
              break;
            }

          case "step2":
            {
              this.editChallengeStep1 = true;
              this.editChallengeStep2 = false;
              this.editChallengeStep3 = true;
              break;
            }

          case "step3":
            {
              this.editChallengeStep1 = true;
              this.editChallengeStep2 = true;
              this.editChallengeStep3 = false;
              break;
            }
        }
      }

      stepFormSubmit(formIndex) {
        switch (formIndex) {
          case "Step1":
            {
              this.toastr.info("", "Details saved partially");
              this.isSubmitted.Step1 = true;
              this.ShowNextStep(formIndex);
              break;
            }

          case "Step2":
            {
              this.toastr.info("", "Details saved partially");
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
          if (formIndex == "Step1" && this.editChallengeForm.Step1.valid) {
            this.gotoStep("step2");
            window.scrollTo(0, 0);
          } else if (formIndex == "Step2" && this.editChallengeForm.Step2.valid) {
            this.gotoStep("step3");
            window.scrollTo(0, 0);
          } else if (formIndex == "Step3" && this.editChallengeForm.Step3.valid) {
            yield this.saveChallengeBrief();
          } else {
            this.toastr.error("", "Please provide the required values to proceed further");
          }
        });
      }

      saveChallengeBrief() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            if (this.editChallengeForm.Step1.valid && this.editChallengeForm.Step2.valid && this.editChallengeForm.Step3.valid) {
              this.submitLoading = true;
              let resp = yield this._challenge.updateChallengeBrief({
                slug: {
                  id: this.challengeBriefId
                },
                data: {
                  status: "active",
                  challenge_summary: this.editChallengeForm.Step1.value.challengeSummary,
                  challenge_scenario: this.editChallengeForm.Step1.value.challengeScenario,
                  target_beneficiaries: this.editChallengeForm.Step1.value.targetBeneficiaries,
                  start_date: this.editChallengeForm.Step1.value.startDate,
                  end_date: this.editChallengeForm.Step1.value.closeDate,
                  deployment_constraints: this.editChallengeForm.Step2.value.deploymentConstraints,
                  functional_requirements: this.editChallengeForm.Step2.value.functionalRequirements,
                  functional_operational_capabilities: this.editChallengeForm.Step2.value.operationalCapabilities,
                  tangible_outcomes_benefits: this.editChallengeForm.Step2.value.tangibleOutcomes,
                  gaps_current_solution: this.editChallengeForm.Step3.value.gaps,
                  other_requirements_remarks: this.editChallengeForm.Step3.value.otherRequirements,
                  info_links: [this.editChallengeForm.Step3.value.additionalLink1, this.editChallengeForm.Step3.value.additionalLink2, this.editChallengeForm.Step3.value.additionalLink3]
                }
              });
              yield this._challenge.sendNotifications(resp.data.id);
              this.submitLoading = false;
              this.resetFormFields();
              this.toastr.success("Challenge brief updated successfully");
              this.router.navigate(["/challenge/".concat(resp.data.frg_challenge_id, "/anchor/").concat(resp.data.id)]);
            } else {
              this.isSubmitted.Step1 = true;
              this.isSubmitted.Step2 = true;
              this.isSubmitted.Step3 = true;
              this.toastr.error("", "Please provide the required values to proceed further");
            }
          } catch (err) {
            this.submitLoading = false;
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      saveAsDraft() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            if (this.editChallengeForm.Step1.valid && this.editChallengeForm.Step2.valid && this.editChallengeForm.Step3.valid) {
              this.draftLoading = true;
              let resp = yield this._challenge.updateChallengeBrief({
                slug: {
                  id: this.challengeBriefId
                },
                data: {
                  status: "draft",
                  challenge_summary: this.editChallengeForm.Step1.value.challengeSummary,
                  challenge_scenario: this.editChallengeForm.Step1.value.challengeScenario,
                  target_beneficiaries: this.editChallengeForm.Step1.value.targetBeneficiaries,
                  start_date: this.editChallengeForm.Step1.value.startDate,
                  end_date: this.editChallengeForm.Step1.value.closeDate,
                  deployment_constraints: this.editChallengeForm.Step2.value.deploymentConstraints,
                  functional_requirements: this.editChallengeForm.Step2.value.functionalRequirements,
                  functional_operational_capabilities: this.editChallengeForm.Step2.value.operationalCapabilities,
                  tangible_outcomes_benefits: this.editChallengeForm.Step2.value.tangibleOutcomes,
                  gaps_current_solution: this.editChallengeForm.Step3.value.gaps,
                  other_requirements_remarks: this.editChallengeForm.Step3.value.otherRequirements,
                  info_links: [this.editChallengeForm.Step3.value.additionalLink1, this.editChallengeForm.Step3.value.additionalLink2, this.editChallengeForm.Step3.value.additionalLink3]
                }
              });
              this.draftLoading = false;
              this.resetFormFields();
              $("#confirmDialog").modal("hide");
              this.toastr.info("Draft saved");
              this.router.navigate(["/seeker/user/".concat(this.loggedInUser.slug)]);
            } else {
              this.isSubmitted.Step1 = true;
              this.isSubmitted.Step2 = true;
              this.isSubmitted.Step3 = true;
              this.toastr.warning("All mandatory fields has to be filled before saving as draft", "Mandatory fields required");
            }
          } catch (err) {
            this.draftLoading = false;
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
          } else {
            this.resetFormFields();
            $("#confirmDialog").modal("hide");
            this.router.navigate(["/seeker/user/".concat(this.loggedInUser.slug)]);
          }
        });
      }

      resetFormFields() {
        this.editChallengeForm.Step1.reset();
        this.editChallengeForm.Step2.reset();
        this.editChallengeForm.Step3.reset();
        this.editChallengeForm.Step1.markAsPristine();
        this.editChallengeForm.Step2.markAsPristine();
        this.editChallengeForm.Step3.markAsPristine();
      }

    };

    EditChallengeBriefComponent.ctorParameters = () => [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _challenge_brief_service__WEBPACK_IMPORTED_MODULE_6__["ChallengeBriefService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Select"])(_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_9__["LoggedInUserState"])], EditChallengeBriefComponent.prototype, "loggedInUser$", void 0);
    EditChallengeBriefComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-edit-challenge-brief",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-challenge-brief.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/edit-challenge-brief/edit-challenge-brief.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-challenge-brief.component.css */
      "./src/app/seeker/edit-challenge-brief/edit-challenge-brief.component.css")).default]
    })], EditChallengeBriefComponent);
    /***/
  },

  /***/
  "./src/app/seeker/edit-challenge-brief/edit-challenge-dirty-check.guard.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/seeker/edit-challenge-brief/edit-challenge-dirty-check.guard.ts ***!
    \*********************************************************************************/

  /*! exports provided: EditChallengeDirtyCheckGuard */

  /***/
  function srcAppSeekerEditChallengeBriefEditChallengeDirtyCheckGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditChallengeDirtyCheckGuard", function () {
      return EditChallengeDirtyCheckGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let EditChallengeDirtyCheckGuard = class EditChallengeDirtyCheckGuard {
      canDeactivate(component, next) {
        if (component.challengeBriefData.data.status === "draft" && (component.editChallengeForm.Step1.dirty || component.editChallengeForm.Step2.dirty || component.editChallengeForm.Step3.dirty)) component.ConfirmLeaveComponent();else return true;
      }

    };
    EditChallengeDirtyCheckGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], EditChallengeDirtyCheckGuard);
    /***/
  },

  /***/
  "./src/app/seeker/edit-profile/edit-profile.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/seeker/edit-profile/edit-profile.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerEditProfileEditProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".seeker-edit-wrapper{\r\n    max-width:580px;\r\n    margin:0 auto 36px 0;\r\n    border-radius: 6px;\r\n    /* padding:36px; */\r\n    border: 1px solid #DEDEDE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlZWtlci1lZGl0LXdyYXBwZXJ7XHJcbiAgICBtYXgtd2lkdGg6NTgwcHg7XHJcbiAgICBtYXJnaW46MCBhdXRvIDM2cHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIC8qIHBhZGRpbmc6MzZweDsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/seeker/edit-profile/edit-profile.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/seeker/edit-profile/edit-profile.component.ts ***!
    \***************************************************************/

  /*! exports provided: EditProfileComponent */

  /***/
  function srcAppSeekerEditProfileEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
      return EditProfileComponent;
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


    var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/customvalidation.service */
    "./src/app/services/customvalidation.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit.service */
    "./src/app/seeker/edit-profile/edit.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _state_action_loggedinuser_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../state/action/loggedinuser.action */
    "./src/app/state/action/loggedinuser.action.ts");

    let EditProfileComponent = class EditProfileComponent {
      constructor(fb, customValidator, toastr, _es, route, router, locationStrategy, _store) {
        this.fb = fb;
        this.customValidator = customValidator;
        this.toastr = toastr;
        this._es = _es;
        this.route = route;
        this.router = router;
        this.locationStrategy = locationStrategy;
        this._store = _store;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].server_url;
        this.loading = false;
        history.pushState(null, null, window.location.href);
        this.locationStrategy.onPopState(() => {
          history.pushState(null, null, window.location.href);
        });
        this.route.params.subscribe(params => this.slug = params.slug);
        this.editProfile = this.fb.group({
          fullname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z .]*")]],
          email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email], this.customValidator.emailAvailabilityValidator.bind(this.customValidator)],
          phnum: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(0|91)?[5-9][0-9]{9}")], this.customValidator.phoneAvailabilityValidator.bind(this.customValidator)],
          city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
          department: [""],
          designation: [""]
        });
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.listSmartCities();
          this.getProfileDetails();
        });
      }

      getProfileDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.profile = yield this._es.getProfile(this.slug);
          this.currentUserID = this.profile.data.frg_user_id.id || this.profile.data.frg_user_id;
          this.editProfile.patchValue({
            fullname: this.profile.data.fullname,
            email: this.profile.data.frg_user_id.email,
            phnum: this.profile.data.frg_user_id.mobile,
            city: this.profile.data.frg_smart_city_id.id,
            department: this.profile.data.department,
            designation: this.profile.data.designation
          });
        });
      }

      listSmartCities() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.smartCities = yield this._es.getSmartCities(); // console.log(this.smartCities);
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      updateProfile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            let userData;

            if (this.editProfile.valid) {
              userData = yield this._es.updateUser({
                slug: {
                  id: this.profile.data.frg_user_id.id || this.profile.data.frg_user_id
                },
                data: {
                  email: this.editProfile.value.email,
                  mobile_code: "+91",
                  mobile: this.editProfile.value.phnum
                }
              });
              this.profile = yield this._es.updateProfile({
                slug: {
                  id: this.profile.data.id
                },
                data: {
                  fullname: this.editProfile.value.fullname,
                  email: this.editProfile.value.email,
                  mobile_code: "+91",
                  mobile: this.editProfile.value.phnum,
                  frg_smart_city_id: this.editProfile.value.city,
                  department: this.editProfile.value.department,
                  designation: this.editProfile.value.designation
                }
              });
              yield Promise.all([this.saveAvatar(this.profile.data.id)]);
              let updatedUser = yield this._es.getProfilebyID(this.profile.data.id);

              if (!this.editProfile.pristine || this.avatar) {
                this.loading = true;

                this._store.dispatch(new _state_action_loggedinuser_action__WEBPACK_IMPORTED_MODULE_10__["UpdateLoggedInUser"]({
                  id: updatedUser.data.frg_user_id,
                  email: updatedUser.data.email,
                  name: updatedUser.data.fullname,
                  userType: "seeker",
                  userTypeId: updatedUser.data.id,
                  avatar: "".concat(this.serverUrl) + updatedUser.data.avatar,
                  slug: updatedUser.data.slug,
                  isLoggedIn: true
                }));

                this.loading = false;
                this.toastr.success("", "Profile updated successfully");
                window.history.replaceState({}, "", "/seeker/user/".concat(this.profile.data.slug));
                this.router.navigate(["seeker/user/".concat(this.profile.data.slug, "/edit")]).then(resp => {
                  window.location.reload();
                });
              }
            } else {
              this.loading = false;
              this.toastr.error("", "Please provide the required values to proceed further");
            }
          } catch (err) {
            console.log(err);
            this.loading = false;
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      handleAvatar(file) {
        this.avatar = file;
      }

      saveAvatar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.avatar) {
            let formData = new FormData();
            formData.append("slug", id);
            formData.append("avatar", this.avatar, this.avatar.name);
            yield this._es.uploadAvatar(formData);
          }
        });
      }

    };

    EditProfileComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__["CustomvalidationService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }, {
      type: _edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"]
    }, {
      type: _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Store"]
    }];

    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-edit-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/edit-profile/edit-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-profile.component.css */
      "./src/app/seeker/edit-profile/edit-profile.component.css")).default]
    })], EditProfileComponent);
    /***/
  },

  /***/
  "./src/app/seeker/edit-profile/edit.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/seeker/edit-profile/edit.service.ts ***!
    \*****************************************************/

  /*! exports provided: EditService */

  /***/
  function srcAppSeekerEditProfileEditServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditService", function () {
      return EditService;
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
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let EditService = class EditService {
      constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
      }

      getSmartCities() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/smart_cities/select_mul", {
            sort: [{
              name: "ASC"
            }]
          }).toPromise();
        });
      }

      changePassword(postdata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/users/change_password", postdata).toPromise();
        });
      }

      getProfile(slug) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/seekers/select", {
            search: {
              slug: slug
            }
          }).toPromise();
        });
      }

      getProfilebyID(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return this.http.post(this.api_url + "/seekers/select", {
            search: {
              id: id
            }
          }).toPromise();
        });
      }

      updateProfile(postdata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/seekers/update", postdata).toPromise();
        });
      }

      updateUser(postdata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/users/update", postdata).toPromise();
        });
      }

      uploadAvatar(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.http.post(this.api_url + "/seekers/upload", postData).toPromise();
        });
      }

    };

    EditService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    EditService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], EditService);
    /***/
  },

  /***/
  "./src/app/seeker/my-challenges/my-challenges.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/seeker/my-challenges/my-challenges.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerMyChallengesMyChallengesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-title {color: #222327;}\r\n.a-filter-select { width:148px; }\r\n.a-challenge-card-wrp {\r\n    border: 1px solid #DEDEDE;\r\n    border-radius: 6px;\r\n}\r\n.a-challenge-status {\r\n    background: #EEEFF3;\r\n    border-radius: 4px;\r\n    width:120px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL215LWNoYWxsZW5nZXMvbXktY2hhbGxlbmdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsY0FBYyxDQUFDO0FBQ3pCLG1CQUFtQixXQUFXLEVBQUU7QUFDaEM7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9teS1jaGFsbGVuZ2VzL215LWNoYWxsZW5nZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hLXRpdGxlIHtjb2xvcjogIzIyMjMyNzt9XHJcbi5hLWZpbHRlci1zZWxlY3QgeyB3aWR0aDoxNDhweDsgfVxyXG4uYS1jaGFsbGVuZ2UtY2FyZC13cnAge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RFREVERTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4uYS1jaGFsbGVuZ2Utc3RhdHVzIHtcclxuICAgIGJhY2tncm91bmQ6ICNFRUVGRjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDoxMjBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/my-challenges/my-challenges.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/seeker/my-challenges/my-challenges.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MyChallengesComponent */

  /***/
  function srcAppSeekerMyChallengesMyChallengesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyChallengesComponent", function () {
      return MyChallengesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let MyChallengesComponent = class MyChallengesComponent {
      constructor() {}

      ngOnInit() {}

    };
    MyChallengesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-challenges',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-challenges.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/my-challenges/my-challenges.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-challenges.component.css */
      "./src/app/seeker/my-challenges/my-challenges.component.css")).default]
    })], MyChallengesComponent);
    /***/
  },

  /***/
  "./src/app/seeker/profileinfo.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/seeker/profileinfo.service.ts ***!
    \***********************************************/

  /*! exports provided: ProfileinfoService */

  /***/
  function srcAppSeekerProfileinfoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileinfoService", function () {
      return ProfileinfoService;
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

    let ProfileinfoService = class ProfileinfoService {
      constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
      }

      getProfile(slug) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let resp = yield this.http.post(this.api_url + "/seekers/select", {
            search: {
              slug: slug
            }
          }).toPromise();
          this.seekerProfileInfo = resp.data;
          return this.seekerProfileInfo;
        });
      }

    };

    ProfileinfoService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    ProfileinfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ProfileinfoService);
    /***/
  },

  /***/
  "./src/app/seeker/reset-password/reset-password.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/seeker/reset-password/reset-password.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerResetPasswordResetPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".reset-password-wrp {\r\n    max-width:580px;\r\n    margin:0 auto 36px 0;\r\n    padding:36px;\r\n    border-radius: 6px;\r\n    border: 1px solid #DEDEDE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXQtcGFzc3dvcmQtd3JwIHtcclxuICAgIG1heC13aWR0aDo1ODBweDtcclxuICAgIG1hcmdpbjowIGF1dG8gMzZweCAwO1xyXG4gICAgcGFkZGluZzozNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RFREVERTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/reset-password/reset-password.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/seeker/reset-password/reset-password.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppSeekerResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
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


    var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/customvalidation.service */
    "./src/app/services/customvalidation.service.ts");
    /* harmony import */


    var _edit_profile_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../edit-profile/edit.service */
    "./src/app/seeker/edit-profile/edit.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    let ResetPasswordComponent = class ResetPasswordComponent {
      constructor(fb, customValidator, _es, route, toastr, auth) {
        this.fb = fb;
        this.customValidator = customValidator;
        this._es = _es;
        this.route = route;
        this.toastr = toastr;
        this.auth = auth;
        this.loading = false;
        this.route.params.subscribe(params => this.slug = params.slug);
        this.resetPassword = this.fb.group({
          old_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
          new_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
          confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, {
          validator: [this.customValidator.MatchPassword("new_password", "confirmPassword"),, this.customValidator.comparePassword("old_password", "new_password")]
        });
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.profile = yield this._es.getProfile(this.slug);
          this.currentUserID = this.profile.data.frg_user_id.id || this.profile.data.frg_user_id;
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
                  new_password: this.resetPassword.value.new_password
                }
              });
              this.loading = false;

              if (passwordChange.status === true) {
                this.toastr.success("", "Password updated successfully");
                this.auth.logout();
              } else {
                this.resetPassword.controls["old_password"].setErrors({
                  incorrect: true
                });
                this.toastr.error("", "Invalid Password");
              }
            } catch (err) {
              console.log(err);
              this.loading = false;
              this.toastr.error("", "Something went wrong please try again");
            }
          } else {
            this.toastr.error("", "Please provide the required values to proceed further");
          }
        });
      }

    };

    ResetPasswordComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__["CustomvalidationService"]
    }, {
      type: _edit_profile_edit_service__WEBPACK_IMPORTED_MODULE_4__["EditService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
    }];

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-reset-password",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/reset-password/reset-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-password.component.css */
      "./src/app/seeker/reset-password/reset-password.component.css")).default]
    })], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/seeker/seeker-edit-profile/seeker-edit-profile.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/seeker/seeker-edit-profile/seeker-edit-profile.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerSeekerEditProfileSeekerEditProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a-seeker-edit-opt-icon{\r\n    float: right !important;\r\n}\r\n.a-seeker-edit-profile-opt>li.active>a{\r\n    background-color:#EFEFEF !important;\r\n    color: #4F4F4F !important;\r\n}\r\n.a-seeker-edit-profile-opt>li>a{\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    padding:16px 17px;\r\n    border-radius: 0px;\r\n    color: #999999 !important;\r\n    font-weight:400;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL3NlZWtlci1lZGl0LXByb2ZpbGUvc2Vla2VyLWVkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvc2Vla2VyLWVkaXQtcHJvZmlsZS9zZWVrZXItZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYS1zZWVrZXItZWRpdC1vcHQtaWNvbntcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXNlZWtlci1lZGl0LXByb2ZpbGUtb3B0PmxpLmFjdGl2ZT5he1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRUZFRkVGICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzRGNEY0RiAhaW1wb3J0YW50O1xyXG59XHJcbi5hLXNlZWtlci1lZGl0LXByb2ZpbGUtb3B0PmxpPmF7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIHBhZGRpbmc6MTZweCAxN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgY29sb3I6ICM5OTk5OTkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/seeker-edit-profile/seeker-edit-profile.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/seeker/seeker-edit-profile/seeker-edit-profile.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SeekerEditProfileComponent */

  /***/
  function srcAppSeekerSeekerEditProfileSeekerEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeekerEditProfileComponent", function () {
      return SeekerEditProfileComponent;
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

    let SeekerEditProfileComponent = class SeekerEditProfileComponent {
      constructor(router) {
        this.router = router;
      }

      ngOnInit() {}

    };

    SeekerEditProfileComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    SeekerEditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seeker-edit-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./seeker-edit-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/seeker-edit-profile/seeker-edit-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./seeker-edit-profile.component.css */
      "./src/app/seeker/seeker-edit-profile/seeker-edit-profile.component.css")).default]
    })], SeekerEditProfileComponent);
    /***/
  },

  /***/
  "./src/app/seeker/seeker-public-profile/seeker-public-profile.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/seeker/seeker-public-profile/seeker-public-profile.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerSeekerPublicProfileSeekerPublicProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".seeker-content-area {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.filter-section select {\r\n\tpadding: 7px 20px 7px 10px !important;\r\n\tfont-size: 12px;\r\n\toutline: none !important;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.filter-section select:focus {\r\n\tbox-shadow: 0px 4px 25px rgba(172, 177, 193, 0.4);\r\n}\r\n\r\n.anchor-skeleton {\r\n\tpadding: 24px;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n\tbackground: var(--white);\r\n\tmargin-bottom: 16px;\r\n}\r\n\r\nselect {\r\n\tbackground-color: var(--white);\r\n\tbackground-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMiAxLjk5OTg0TDEwLjU5IDAuNTg5ODQ0TDYgNS4xNjk4NEwxLjQxIDAuNTg5ODQzTC02LjE2MzMxZS0wOCAxLjk5OTg0TDYgNy45OTk4NEwxMiAxLjk5OTg0WiIgZmlsbD0iIzc2NzY3NiIvPgo8L3N2Zz4K\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: right 10px center; /* Change the px value here to change the distance */\r\n\t-moz-appearance: none;\r\n\t-moz-appearance: none;\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL3NlZWtlci1wdWJsaWMtcHJvZmlsZS9zZWVrZXItcHVibGljLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHFDQUFxQztDQUNyQyxlQUFlO0NBQ2Ysd0JBQXdCO0NBQ3hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlEQUFpRDtBQUNsRDs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsMlZBQTJWO0NBQzNWLDRCQUE0QjtDQUM1QixzQ0FBc0MsRUFBRSxvREFBb0Q7Q0FDNUYscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQix3QkFBd0I7Q0FDeEIsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyL3NlZWtlci1wdWJsaWMtcHJvZmlsZS9zZWVrZXItcHVibGljLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWVrZXItY29udGVudC1hcmVhIHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmZpbHRlci1zZWN0aW9uIHNlbGVjdCB7XHJcblx0cGFkZGluZzogN3B4IDIwcHggN3B4IDEwcHggIWltcG9ydGFudDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmZpbHRlci1zZWN0aW9uIHNlbGVjdDpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogMHB4IDRweCAyNXB4IHJnYmEoMTcyLCAxNzcsIDE5MywgMC40KTtcclxufVxyXG5cclxuLmFuY2hvci1za2VsZXRvbiB7XHJcblx0cGFkZGluZzogMjRweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRJaUlHaGxhV2RvZEQwaU9DSWdkbWxsZDBKdmVEMGlNQ0F3SURFeUlEZ2lJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2p4d1lYUm9JR1E5SWsweE1pQXhMams1T1RnMFRERXdMalU1SURBdU5UZzVPRFEwVERZZ05TNHhOams0TkV3eExqUXhJREF1TlRnNU9EUXpUQzAyTGpFMk16TXhaUzB3T0NBeExqazVPVGcwVERZZ055NDVPVGs0TkV3eE1pQXhMams1T1RnMFdpSWdabWxzYkQwaUl6YzJOelkzTmlJdlBnbzhMM04yWno0S1wiKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggY2VudGVyOyAvKiBDaGFuZ2UgdGhlIHB4IHZhbHVlIGhlcmUgdG8gY2hhbmdlIHRoZSBkaXN0YW5jZSAqL1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/seeker/seeker-public-profile/seeker-public-profile.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/seeker/seeker-public-profile/seeker-public-profile.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SeekerPublicProfileComponent */

  /***/
  function srcAppSeekerSeekerPublicProfileSeekerPublicProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeekerPublicProfileComponent", function () {
      return SeekerPublicProfileComponent;
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


    var _challenge_schema_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../challenge-schema.service */
    "./src/app/seeker/challenge-schema.service.ts");
    /* harmony import */


    var _profileinfo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../profileinfo.service */
    "./src/app/seeker/profileinfo.service.ts");
    /* harmony import */


    var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../const */
    "./src/app/const.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    let SeekerPublicProfileComponent = class SeekerPublicProfileComponent {
      constructor(_challenge, _profile, route, toastr) {
        this._challenge = _challenge;
        this._profile = _profile;
        this.route = route;
        this.toastr = toastr;
        this.challengeFilter = _const__WEBPACK_IMPORTED_MODULE_5__["challengeStatus"];
        this.route.params.subscribe(params => this.userSlug = params.slug);
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.anchorLoading = true;
          let resp = yield this._profile.getProfile(this.userSlug);
          this.seekerId = resp.id;
          yield this.fetchAnchors(0);
        });
      }

      fetchAnchors(page, filterBy) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.anchorLoading = true;
            this.anchors = yield this._challenge.getChallengeSchemas(this.seekerId, page, filterBy);
            let anchorsWithChallenge = this.anchors.data.map(el => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
              // console.log(el)
              return new Promise(resolve => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let challengeId = el.frg_challenge_id.id;
                el.frg_challenge_id = yield this._challenge.getChallenge(challengeId);
                resolve(el);
              }));
            }));
            this.anchorData = yield Promise.all(anchorsWithChallenge);
            this.anchorLoading = false;
          } catch (err) {
            console.log(err);
            this.toastr.error('', 'Something went wrong please try again');
          }
        });
      }

      handleStatusFilter(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.fetchAnchors(0, e.target.value);
        });
      }

      handlePagination(pageIndex) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let nextPage = (pageIndex - 1) * 10;
          yield this.fetchAnchors(nextPage);
        });
      }

    };

    SeekerPublicProfileComponent.ctorParameters = () => [{
      type: _challenge_schema_service__WEBPACK_IMPORTED_MODULE_3__["ChallengeSchemaService"]
    }, {
      type: _profileinfo_service__WEBPACK_IMPORTED_MODULE_4__["ProfileinfoService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
    }];

    SeekerPublicProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seeker-public-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./seeker-public-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/seeker-public-profile/seeker-public-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./seeker-public-profile.component.css */
      "./src/app/seeker/seeker-public-profile/seeker-public-profile.component.css")).default]
    })], SeekerPublicProfileComponent);
    /***/
  },

  /***/
  "./src/app/seeker/seeker-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/seeker/seeker-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SeekerRoutingModule */

  /***/
  function srcAppSeekerSeekerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeekerRoutingModule", function () {
      return SeekerRoutingModule;
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


    var _seeker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./seeker.component */
    "./src/app/seeker/seeker.component.ts");
    /* harmony import */


    var _seeker_public_profile_seeker_public_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./seeker-public-profile/seeker-public-profile.component */
    "./src/app/seeker/seeker-public-profile/seeker-public-profile.component.ts");
    /* harmony import */


    var _seeker_user_profile_seeker_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./seeker-user-profile/seeker-user-profile.component */
    "./src/app/seeker/seeker-user-profile/seeker-user-profile.component.ts");
    /* harmony import */


    var _permission_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../permission.guard */
    "./src/app/permission.guard.ts");
    /* harmony import */


    var _edit_challenge_brief_edit_challenge_brief_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-challenge-brief/edit-challenge-brief.component */
    "./src/app/seeker/edit-challenge-brief/edit-challenge-brief.component.ts");
    /* harmony import */


    var _seeker_edit_profile_seeker_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./seeker-edit-profile/seeker-edit-profile.component */
    "./src/app/seeker/seeker-edit-profile/seeker-edit-profile.component.ts");
    /* harmony import */


    var _edit_challenge_brief_edit_challenge_dirty_check_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./edit-challenge-brief/edit-challenge-dirty-check.guard */
    "./src/app/seeker/edit-challenge-brief/edit-challenge-dirty-check.guard.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/seeker/dashboard/dashboard.component.ts");
    /* harmony import */


    var _my_challenges_my_challenges_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./my-challenges/my-challenges.component */
    "./src/app/seeker/my-challenges/my-challenges.component.ts");
    /* harmony import */


    var _unsolicited_proposals_unsolicited_proposals_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./unsolicited-proposals/unsolicited-proposals.component */
    "./src/app/seeker/unsolicited-proposals/unsolicited-proposals.component.ts");

    const routes = [{
      path: "",
      component: _seeker_component__WEBPACK_IMPORTED_MODULE_3__["SeekerComponent"],
      children: [{
        path: "",
        redirectTo: "/discover/providers",
        pathMatch: "full"
      }, {
        path: ":slug",
        component: _seeker_public_profile_seeker_public_profile_component__WEBPACK_IMPORTED_MODULE_4__["SeekerPublicProfileComponent"]
      }, {
        path: "user/:slug",
        component: _seeker_user_profile_seeker_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["SeekerUserProfileComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
          permission: ["seeker"]
        }
      }, {
        path: "user/:slug/challenge/:challengeId/edit",
        component: _edit_challenge_brief_edit_challenge_brief_component__WEBPACK_IMPORTED_MODULE_7__["EditChallengeBriefComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        canDeactivate: [_edit_challenge_brief_edit_challenge_dirty_check_guard__WEBPACK_IMPORTED_MODULE_9__["EditChallengeDirtyCheckGuard"]],
        data: {
          permission: ["seeker"]
        }
      }, {
        path: "user/:slug/edit",
        component: _seeker_edit_profile_seeker_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__["SeekerEditProfileComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
          permission: ["seeker"]
        }
      }, {
        path: "user/:slug/my-challenges",
        component: _my_challenges_my_challenges_component__WEBPACK_IMPORTED_MODULE_11__["MyChallengesComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
          permission: ["seeker"]
        }
      }, {
        path: "user/:slug/dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
          permission: ["seeker"]
        }
      }, {
        path: "user/:slug/dashboard/challenge/:id",
        loadChildren: () => Promise.all(
        /*! import() | challenge-dashboard-challenge-dashboard-module */
        [__webpack_require__.e("common"), __webpack_require__.e("challenge-dashboard-challenge-dashboard-module")]).then(__webpack_require__.bind(null,
        /*! ./challenge-dashboard/challenge-dashboard.module */
        "./src/app/seeker/challenge-dashboard/challenge-dashboard.module.ts")).then(m => m.ChallengeDashboardModule),
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
          permission: ["seeker"]
        }
      }, {
        path: "user/:slug/unsolicted-proposal",
        component: _unsolicited_proposals_unsolicited_proposals_component__WEBPACK_IMPORTED_MODULE_12__["UnsolicitedProposalsComponent"],
        canActivate: [_permission_guard__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]],
        data: {
          permission: ["seeker"]
        }
      }]
    }];
    let SeekerRoutingModule = class SeekerRoutingModule {};
    SeekerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SeekerRoutingModule);
    /***/
  },

  /***/
  "./src/app/seeker/seeker-user-profile/seeker-user-profile.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/seeker/seeker-user-profile/seeker-user-profile.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerSeekerUserProfileSeekerUserProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".seeker-content-area {\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.filter-section select {\r\n\tpadding: 7px 20px 7px 10px !important;\r\n\tfont-size: 12px;\r\n\toutline: none !important;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.filter-section select:focus {\r\n\tbox-shadow: 0px 4px 25px rgba(172, 177, 193, 0.4);\r\n}\r\n\r\n.anchor-skeleton {\r\n\tpadding: 24px;\r\n\tborder: 1px solid #dedede;\r\n\tborder-radius: 6px;\r\n\tbackground: var(--white);\r\n\tmargin-bottom: 16px;\r\n}\r\n\r\nselect {\r\n\tbackground-color: var(--white);\r\n\tbackground-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMiAxLjk5OTg0TDEwLjU5IDAuNTg5ODQ0TDYgNS4xNjk4NEwxLjQxIDAuNTg5ODQzTC02LjE2MzMxZS0wOCAxLjk5OTg0TDYgNy45OTk4NEwxMiAxLjk5OTg0WiIgZmlsbD0iIzc2NzY3NiIvPgo8L3N2Zz4K\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: right 10px center; /* Change the px value here to change the distance */\r\n\t-moz-appearance: none;\r\n\t-moz-appearance: none;\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL3NlZWtlci11c2VyLXByb2ZpbGUvc2Vla2VyLXVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MscUNBQXFDO0NBQ3JDLGVBQWU7Q0FDZix3QkFBd0I7Q0FDeEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaURBQWlEO0FBQ2xEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QiwyVkFBMlY7Q0FDM1YsNEJBQTRCO0NBQzVCLHNDQUFzQyxFQUFFLG9EQUFvRDtDQUM1RixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLHdCQUF3QjtDQUN4QixnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zZWVrZXIvc2Vla2VyLXVzZXItcHJvZmlsZS9zZWVrZXItdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vla2VyLWNvbnRlbnQtYXJlYSB7XHJcblx0bWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5maWx0ZXItc2VjdGlvbiBzZWxlY3Qge1xyXG5cdHBhZGRpbmc6IDdweCAyMHB4IDdweCAxMHB4ICFpbXBvcnRhbnQ7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5maWx0ZXItc2VjdGlvbiBzZWxlY3Q6Zm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IDBweCA0cHggMjVweCByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuNCk7XHJcbn1cclxuXHJcbi5hbmNob3Itc2tlbGV0b24ge1xyXG5cdHBhZGRpbmc6IDI0cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1USWlJR2hsYVdkb2REMGlPQ0lnZG1sbGQwSnZlRDBpTUNBd0lERXlJRGdpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NqeHdZWFJvSUdROUlrMHhNaUF4TGprNU9UZzBUREV3TGpVNUlEQXVOVGc1T0RRMFREWWdOUzR4TmprNE5Fd3hMalF4SURBdU5UZzVPRFF6VEMwMkxqRTJNek14WlMwd09DQXhMams1T1RnMFREWWdOeTQ1T1RrNE5Fd3hNaUF4TGprNU9UZzBXaUlnWm1sc2JEMGlJemMyTnpZM05pSXZQZ284TDNOMlp6NEtcIik7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMHB4IGNlbnRlcjsgLyogQ2hhbmdlIHRoZSBweCB2YWx1ZSBoZXJlIHRvIGNoYW5nZSB0aGUgZGlzdGFuY2UgKi9cclxuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/seeker/seeker-user-profile/seeker-user-profile.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/seeker/seeker-user-profile/seeker-user-profile.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SeekerUserProfileComponent */

  /***/
  function srcAppSeekerSeekerUserProfileSeekerUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeekerUserProfileComponent", function () {
      return SeekerUserProfileComponent;
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


    var _challenge_schema_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../challenge-schema.service */
    "./src/app/seeker/challenge-schema.service.ts");
    /* harmony import */


    var _profileinfo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../profileinfo.service */
    "./src/app/seeker/profileinfo.service.ts");
    /* harmony import */


    var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../const */
    "./src/app/const.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    let SeekerUserProfileComponent = class SeekerUserProfileComponent {
      constructor(_challenge, _profile, route, toastr) {
        this._challenge = _challenge;
        this._profile = _profile;
        this.route = route;
        this.toastr = toastr;
        this.challengeFilter = _const__WEBPACK_IMPORTED_MODULE_5__["challengeStatus"];
        this.route.params.subscribe(params => this.userSlug = params.slug);
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.anchorLoading = true;
          let resp = yield this._profile.getProfile(this.userSlug);
          this.seekerId = resp.id;
          yield Promise.all([this.fetchAnchors(0), this.fetchChallengeDrafts(0)]);
        });
      }

      fetchAnchors(page, filterBy) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.anchorLoading = true;
            this.anchors = yield this._challenge.getChallengeSchemas(this.seekerId, page, filterBy);
            let anchorsWithChallenge = this.anchors.data.map(el => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
              return new Promise(resolve => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let challengeId = el.frg_challenge_id.id;
                el.frg_challenge_id = yield this._challenge.getChallenge(challengeId);
                resolve(el);
              }));
            }));
            this.anchorData = yield Promise.all(anchorsWithChallenge);
            this.anchorLoading = false;
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      fetchChallengeDrafts(page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.draftLoading = true;
            this.drafts = yield this._challenge.getChallengeDrafts(this.seekerId, page);
            let anchorsWithChallenge = this.drafts.data.map(el => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
              return new Promise(resolve => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let challengeId = el.frg_challenge_id.id;
                el.frg_challenge_id = yield this._challenge.getChallenge(challengeId);
                resolve(el);
              }));
            }));
            this.draftData = yield Promise.all(anchorsWithChallenge);
            this.draftLoading = false;
          } catch (err) {
            console.log(err);
            this.toastr.error("", "Something went wrong please try again");
          }
        });
      }

      handleDraftDelete(deletedDraft) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.fetchChallengeDrafts(0);
        });
      }

      handleStatusFilter(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.fetchAnchors(0, e.target.value);
        });
      }

      handlePagination(pageIndex) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let nextPage = (pageIndex - 1) * 10;
          yield this.fetchAnchors(nextPage);
        });
      }

      handleDraftPagination(pageIndex) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let nextPage = (pageIndex - 1) * 10;
          yield this.fetchChallengeDrafts(nextPage);
        });
      }

      handleClosedChallenge(closedChallenge) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.fetchAnchors(0);
        });
      }

      handleDeleteChallenge(deletedChallenge) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.fetchAnchors(0);
        });
      }

    };

    SeekerUserProfileComponent.ctorParameters = () => [{
      type: _challenge_schema_service__WEBPACK_IMPORTED_MODULE_3__["ChallengeSchemaService"]
    }, {
      type: _profileinfo_service__WEBPACK_IMPORTED_MODULE_4__["ProfileinfoService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
    }];

    SeekerUserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-seeker-user-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./seeker-user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/seeker-user-profile/seeker-user-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./seeker-user-profile.component.css */
      "./src/app/seeker/seeker-user-profile/seeker-user-profile.component.css")).default]
    })], SeekerUserProfileComponent);
    /***/
  },

  /***/
  "./src/app/seeker/seeker.component.css":
  /*!*********************************************!*\
    !*** ./src/app/seeker/seeker.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerSeekerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci9zZWVrZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/seeker/seeker.component.ts":
  /*!********************************************!*\
    !*** ./src/app/seeker/seeker.component.ts ***!
    \********************************************/

  /*! exports provided: SeekerComponent */

  /***/
  function srcAppSeekerSeekerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeekerComponent", function () {
      return SeekerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SeekerComponent = class SeekerComponent {
      constructor() {}

      ngOnInit() {}

    };
    SeekerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seeker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./seeker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/seeker.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./seeker.component.css */
      "./src/app/seeker/seeker.component.css")).default]
    })], SeekerComponent);
    /***/
  },

  /***/
  "./src/app/seeker/seeker.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/seeker/seeker.module.ts ***!
    \*****************************************/

  /*! exports provided: SeekerModule */

  /***/
  function srcAppSeekerSeekerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeekerModule", function () {
      return SeekerModule;
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


    var _seeker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./seeker-routing.module */
    "./src/app/seeker/seeker-routing.module.ts");
    /* harmony import */


    var _seeker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./seeker.component */
    "./src/app/seeker/seeker.component.ts");
    /* harmony import */


    var _seeker_user_profile_seeker_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./seeker-user-profile/seeker-user-profile.component */
    "./src/app/seeker/seeker-user-profile/seeker-user-profile.component.ts");
    /* harmony import */


    var _components_profile_top_card_profile_top_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/profile-top-card/profile-top-card.component */
    "./src/app/seeker/components/profile-top-card/profile-top-card.component.ts");
    /* harmony import */


    var _components_challenge_schema_item_challenge_schema_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/challenge-schema-item/challenge-schema-item.component */
    "./src/app/seeker/components/challenge-schema-item/challenge-schema-item.component.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/seeker/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/seeker/reset-password/reset-password.component.ts");
    /* harmony import */


    var _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../shared/widgets/widgets.module */
    "./src/app/shared/widgets/widgets.module.ts");
    /* harmony import */


    var _edit_challenge_brief_edit_challenge_brief_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./edit-challenge-brief/edit-challenge-brief.component */
    "./src/app/seeker/edit-challenge-brief/edit-challenge-brief.component.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _seeker_edit_profile_seeker_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./seeker-edit-profile/seeker-edit-profile.component */
    "./src/app/seeker/seeker-edit-profile/seeker-edit-profile.component.ts");
    /* harmony import */


    var _seeker_public_profile_seeker_public_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./seeker-public-profile/seeker-public-profile.component */
    "./src/app/seeker/seeker-public-profile/seeker-public-profile.component.ts");
    /* harmony import */


    var _components_challenge_draft_item_challenge_draft_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/challenge-draft-item/challenge-draft-item.component */
    "./src/app/seeker/components/challenge-draft-item/challenge-draft-item.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/seeker/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dashboard_components_challenge_item_challenge_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./dashboard/components/challenge-item/challenge-item.component */
    "./src/app/seeker/dashboard/components/challenge-item/challenge-item.component.ts");
    /* harmony import */


    var _dashboard_components_awaiting_approval_awaiting_approval_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./dashboard/components/awaiting-approval/awaiting-approval.component */
    "./src/app/seeker/dashboard/components/awaiting-approval/awaiting-approval.component.ts");
    /* harmony import */


    var _dashboard_components_accepting_solutions_accepting_solutions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./dashboard/components/accepting-solutions/accepting-solutions.component */
    "./src/app/seeker/dashboard/components/accepting-solutions/accepting-solutions.component.ts");
    /* harmony import */


    var _dashboard_components_awaiting_proposals_awaiting_proposals_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./dashboard/components/awaiting-proposals/awaiting-proposals.component */
    "./src/app/seeker/dashboard/components/awaiting-proposals/awaiting-proposals.component.ts");
    /* harmony import */


    var _dashboard_components_pilots_pilots_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./dashboard/components/pilots/pilots.component */
    "./src/app/seeker/dashboard/components/pilots/pilots.component.ts");
    /* harmony import */


    var _my_challenges_my_challenges_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./my-challenges/my-challenges.component */
    "./src/app/seeker/my-challenges/my-challenges.component.ts");
    /* harmony import */


    var _dashboard_components_card_loader_card_loader_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./dashboard/components/card-loader/card-loader.component */
    "./src/app/seeker/dashboard/components/card-loader/card-loader.component.ts");
    /* harmony import */


    var _unsolicited_proposals_unsolicited_proposals_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./unsolicited-proposals/unsolicited-proposals.component */
    "./src/app/seeker/unsolicited-proposals/unsolicited-proposals.component.ts");

    let SeekerModule = class SeekerModule {};
    SeekerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_seeker_component__WEBPACK_IMPORTED_MODULE_6__["SeekerComponent"], _seeker_user_profile_seeker_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["SeekerUserProfileComponent"], _components_profile_top_card_profile_top_card_component__WEBPACK_IMPORTED_MODULE_8__["ProfileTopCardComponent"], _components_challenge_schema_item_challenge_schema_item_component__WEBPACK_IMPORTED_MODULE_9__["ChallengeSchemaItemComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"], _seeker_edit_profile_seeker_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["SeekerEditProfileComponent"], _edit_challenge_brief_edit_challenge_brief_component__WEBPACK_IMPORTED_MODULE_13__["EditChallengeBriefComponent"], _seeker_public_profile_seeker_public_profile_component__WEBPACK_IMPORTED_MODULE_16__["SeekerPublicProfileComponent"], _components_challenge_draft_item_challenge_draft_item_component__WEBPACK_IMPORTED_MODULE_17__["ChallengeDraftItemComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"], _dashboard_components_challenge_item_challenge_item_component__WEBPACK_IMPORTED_MODULE_19__["ChallengeItemComponent"], _dashboard_components_awaiting_approval_awaiting_approval_component__WEBPACK_IMPORTED_MODULE_20__["AwaitingApprovalComponent"], _dashboard_components_accepting_solutions_accepting_solutions_component__WEBPACK_IMPORTED_MODULE_21__["AcceptingSolutionsComponent"], _dashboard_components_awaiting_proposals_awaiting_proposals_component__WEBPACK_IMPORTED_MODULE_22__["AwaitingProposalsComponent"], _dashboard_components_pilots_pilots_component__WEBPACK_IMPORTED_MODULE_23__["PilotsComponent"], _my_challenges_my_challenges_component__WEBPACK_IMPORTED_MODULE_24__["MyChallengesComponent"], _dashboard_components_card_loader_card_loader_component__WEBPACK_IMPORTED_MODULE_25__["CardLoaderComponent"], _unsolicited_proposals_unsolicited_proposals_component__WEBPACK_IMPORTED_MODULE_26__["UnsolicitedProposalsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _seeker_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeekerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderModule"], _shared_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_12__["WidgetsModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"]]
    })], SeekerModule);
    /***/
  },

  /***/
  "./src/app/seeker/unsolicited-proposals/unsolicited-proposals.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/seeker/unsolicited-proposals/unsolicited-proposals.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeekerUnsolicitedProposalsUnsolicitedProposalsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".challenge-item-card-wrapper {\r\n    background-color: #fff;\r\n    border: 1px solid #dedede;\r\n    box-sizing: border-box;\r\n    border-radius: 6px;\r\n    width: 100%;\r\n    max-width: 1170px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 15px;\r\n  }\r\n  .d-flex {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    padding-left: 24px;\r\n    padding-right: 24px;\r\n  }\r\n  .a-await-approval {\r\n    background: rgba(172, 177, 193, 0.1);\r\n    border: 1px solid var(--primary-grey);\r\n    color: #7f838f;\r\n    border-radius: 4px;\r\n    padding: 6px 10px;\r\n  }\r\n  .a-await-proposal {\r\n    background: rgba(242, 148, 62, 0.1);\r\n    border: 1px solid #f2943e;\r\n    color: #d98538;\r\n    border-radius: 4px;\r\n    padding: 6px 10px;\r\n  }\r\n  .a-accepting-solution {\r\n    background: rgba(251, 196, 31, 0.1);\r\n    border: 1px solid #fbc41f;\r\n    color: #947412;\r\n    border-radius: 4px;\r\n    padding: 6px 10px;\r\n  }\r\n  .a-pilot {\r\n    background: rgba(45, 152, 81, 0.1);\r\n    border: 1px solid #2d9851;\r\n    color: #1e6636;\r\n    border-radius: 4px;\r\n    padding: 6px 10px;\r\n  }\r\n  .a-chlng-icon-btn {\r\n    position: relative;\r\n    z-index: 10;\r\n  }\r\n  .a-chlng-title {\r\n    white-space: nowrap;\r\n    width: 300px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  .a-chlng-badge {\r\n    width: 100%;\r\n    min-width: 140px;\r\n    text-align: center;\r\n  }\r\n  .file-item {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    padding: 8px;\r\n    border: 1px solid #dedede;\r\n    border-radius: 4px;\r\n    font-size: 12px;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    margin-bottom: 6px;\r\n  }\r\n  .file-col {\r\n    color: #4f4f4f;\r\n    padding-right: 5px;\r\n    flex-basis: 80%;\r\n  }\r\n  .file-col i {\r\n    font-size: 14px;\r\n    margin-right: 6px;\r\n  }\r\n  .l-back-icon{\r\n    max-width: 1170px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .uns_meta_data_cont{\r\n    border-top: 1px solid #dedede;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyL3Vuc29saWNpdGVkLXByb3Bvc2Fscy91bnNvbGljaXRlZC1wcm9wb3NhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci91bnNvbGljaXRlZC1wcm9wb3NhbHMvdW5zb2xpY2l0ZWQtcHJvcG9zYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbGxlbmdlLWl0ZW0tY2FyZC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC5kLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICAuYS1hd2FpdC1hcHByb3ZhbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3MiwgMTc3LCAxOTMsIDAuMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpO1xyXG4gICAgY29sb3I6ICM3ZjgzOGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICB9XHJcbiAgLmEtYXdhaXQtcHJvcG9zYWwge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDE0OCwgNjIsIDAuMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjI5NDNlO1xyXG4gICAgY29sb3I6ICNkOTg1Mzg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICB9XHJcbiAgLmEtYWNjZXB0aW5nLXNvbHV0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTYsIDMxLCAwLjEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZiYzQxZjtcclxuICAgIGNvbG9yOiAjOTQ3NDEyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgfVxyXG4gIC5hLXBpbG90IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDUsIDE1MiwgODEsIDAuMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmQ5ODUxO1xyXG4gICAgY29sb3I6ICMxZTY2MzY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICB9XHJcblxyXG4gIC5hLWNobG5nLWljb24tYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuICAuYS1jaGxuZy10aXRsZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuICAuYS1jaGxuZy1iYWRnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5maWxlLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZpbGUtY29sIHtcclxuICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgZmxleC1iYXNpczogODAlO1xyXG4gIH1cclxuXHJcbiAgLmZpbGUtY29sIGkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgfVxyXG4gIC5sLWJhY2staWNvbntcclxuICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC51bnNfbWV0YV9kYXRhX2NvbnR7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/seeker/unsolicited-proposals/unsolicited-proposals.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/seeker/unsolicited-proposals/unsolicited-proposals.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: UnsolicitedProposalsComponent */

  /***/
  function srcAppSeekerUnsolicitedProposalsUnsolicitedProposalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnsolicitedProposalsComponent", function () {
      return UnsolicitedProposalsComponent;
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


    var src_app_challenge_challenge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/challenge/challenge.service */
    "./src/app/challenge/challenge.service.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/state/loggedinuser.state */
    "./src/app/state/loggedinuser.state.ts");
    /* harmony import */


    var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dashboard/dashboard.service */
    "./src/app/seeker/dashboard/dashboard.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let UnsolicitedProposalsComponent = class UnsolicitedProposalsComponent {
      constructor(_as, _ds, toastr, router) {
        this._as = _as;
        this._ds = _ds;
        this.toastr = toastr;
        this.router = router;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].server_url;
        this.post_data = {
          "filter": {},
          "pg": {
            limit: 10,
            skip: 0
          }
        };
        this.loggedInUser$.subscribe(resp => {
          this.loggedInUser = resp.LoggedInUser;
        });
      }

      ngOnInit() {
        this.getUnsChallenges();
      }

      getUnsChallenges() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            let seeker_det = yield this._ds.getSeekerDetails(this.loggedInUser.userTypeId);

            if (seeker_det.status == true) {
              this.post_data.filter.frg_smart_city_id = seeker_det.data.frg_smart_city_id.id, this.post_data.filter.sol_sub_status = false;
              let resp = yield this._ds.getUnsolicitedChallenges(this.post_data);

              if (resp.data.length) {
                this.uns_chall = resp;
              }
            }
          } catch (err) {
            console.log(err);
          }
        });
      }

      changeStatus(status, challenge_id, city_id, uns_id, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          var timestamp = new Date();

          if (status == 'approved') {
            var post_data = {
              data: {
                status: "approved",
                challenge_summary: item.frg_challenge_id.name + timestamp,
                frg_seeker_id: this.loggedInUser.userTypeId,
                frg_challenge_id: challenge_id,
                info_links: ["", "", ""],
                frg_smart_city_id: city_id,
                uns_id: uns_id
              }
            };
          } else {
            var post_data = {
              data: {
                status: "rejected",
                challenge_summary: item.frg_challenge_id.name + timestamp,
                frg_seeker_id: this.loggedInUser.userTypeId,
                frg_challenge_id: challenge_id,
                info_links: ["", "", ""],
                frg_smart_city_id: city_id,
                uns_id: uns_id
              }
            };
          }

          let resp = yield this._ds.createUnsoPropAnchor(post_data);

          if (resp.status == true) {
            this.toastr.success("", "Anchor created successfully");
            this.router.navigate(['/seeker/user/' + this.loggedInUser.userTypeId + '/dashboard/challenge/' + resp.data[0].frg_anchor_id + '/eoi']);
          } else {
            this.toastr.error("", "Something went wrong , please try again");
          }
        });
      }

      downloadFiles(url) {
        file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"](this.serverUrl + url);
      }

      handlePagination(pageNumber) {
        this.post_data.pg.skip = (pageNumber - 1) * this.post_data.pg.limit;
        this.getUnsChallenges();
      }

      backClicked() {
        this.router.navigate(['/seeker/user/' + this.loggedInUser.slug + '/dashboard']);
      }

    };

    UnsolicitedProposalsComponent.ctorParameters = () => [{
      type: src_app_challenge_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"]
    }, {
      type: _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(src_app_state_loggedinuser_state__WEBPACK_IMPORTED_MODULE_4__["LoggedInUserState"])], UnsolicitedProposalsComponent.prototype, "loggedInUser$", void 0);
    UnsolicitedProposalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unsolicited-proposals',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./unsolicited-proposals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seeker/unsolicited-proposals/unsolicited-proposals.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./unsolicited-proposals.component.css */
      "./src/app/seeker/unsolicited-proposals/unsolicited-proposals.component.css")).default]
    })], UnsolicitedProposalsComponent);
    /***/
  }
}]);
//# sourceMappingURL=seeker-seeker-module-es5.js.map