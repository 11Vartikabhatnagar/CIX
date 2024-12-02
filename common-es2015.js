(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/challenge/challenge.service.ts":
/*!************************************************!*\
  !*** ./src/app/challenge/challenge.service.ts ***!
  \************************************************/
/*! exports provided: ChallengeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeService", function() { return ChallengeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ChallengeService = class ChallengeService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    getChallenge(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/challenges/select", { slug: { id: id } }).toPromise();
        });
    }
    getChallengeById(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/challenges/select_by_id", { slug: { id: id } }).toPromise();
        });
    }
    getRelatedSolutions(challengeId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/solutions/related", {
                challenge_id: challengeId,
            })
                .toPromise();
        });
    }
    getSolutions(ids) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let resp = yield this.http
                .post(this.api_url + "/solutions/select_mul", {
                slug: { id: ids },
            })
                .toPromise();
            return resp.data;
        });
    }
    createAnchorForChallenge(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/anchors/create", postData).toPromise();
        });
    }
    getAnchorsForChallenge(challengeId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/anchors/select_mul", {
                filter: {
                    frg_challenge_id: challengeId,
                    status: "active",
                },
            })
                .toPromise();
        });
    }
    getAnchorById(anchorId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/anchors/select", {
                slug: { id: anchorId },
            })
                .toPromise();
        });
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
};
ChallengeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ChallengeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ChallengeService);



/***/ }),

/***/ "./src/app/challenge/components/anchor-widget/anchor-widget-service.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/challenge/components/anchor-widget/anchor-widget-service.service.ts ***!
  \*************************************************************************************/
/*! exports provided: AnchorWidgetServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorWidgetServiceService", function() { return AnchorWidgetServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AnchorWidgetServiceService = class AnchorWidgetServiceService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    getAnchorsForChallenge(challengeId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(this.api_url + "/anchors/select_mul", {
                filter: {
                    status: "active",
                    frg_challenge_id: challengeId,
                },
            })
                .toPromise();
        });
    }
};
AnchorWidgetServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AnchorWidgetServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AnchorWidgetServiceService);



/***/ }),

/***/ "./src/app/challenge/create-challenge/create-challenge.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/challenge/create-challenge/create-challenge.service.ts ***!
  \************************************************************************/
/*! exports provided: CreateChallengeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateChallengeService", function() { return CreateChallengeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CreateChallengeService = class CreateChallengeService {
    constructor(http) {
        this.http = http;
        this.api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
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
    createChallenge(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/challenges/create`, postData).toPromise();
        });
    }
    createAnchor(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/anchors/create`, postData).toPromise();
        });
    }
    getSeekerDetails(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/seekers/select_slug", { slug: { id: id } }).toPromise();
        });
    }
    createAnchorSmartCities(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/anchors_and_smart_cities/create`, postData).toPromise();
        });
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
};
CreateChallengeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CreateChallengeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], CreateChallengeService);



/***/ }),

/***/ "./src/app/register/seekers/seekers.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/seekers/seekers.service.ts ***!
  \*****************************************************/
/*! exports provided: SeekersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeekersService", function() { return SeekersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let SeekersService = class SeekersService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    saveUserApi(post_data) {
        // console.log(post_data);
        return this.http.post(this.api_url + "/users/create", post_data);
    }
    saveSeekerApi(post_data) {
        return this.http.post(this.api_url + "/seekers/create", post_data);
    }
    verifyOtp(post_data) {
        return this.http.post(this.api_url + "/users/verify", post_data);
    }
    uploadAvataar(post_data) {
        return this.http.post(this.api_url + `/seekers/upload`, post_data);
    }
    resendVerficationCode(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + `/users/resend_verification_code`, postData).toPromise();
        });
    }
    getSmartCities() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/smart_cities/list", {}).toPromise();
        });
    }
};
SeekersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SeekersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], SeekersService);



/***/ }),

/***/ "./src/app/seeker/challenge-dashboard/dashboardmain.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/seeker/challenge-dashboard/dashboardmain.service.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardmainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardmainService", function() { return DashboardmainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let DashboardmainService = class DashboardmainService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    getAnchorChallenge(challengeId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const dataResponse = yield this.http
                .post(this.api_url + `/anchors/select`, {
                slug: {
                    id: challengeId,
                },
            })
                .toPromise();
            let sector = yield this.http.post(this.api_url + `/challenge_sectors/select`, { slug: { id: dataResponse.data.frg_challenge_id.frg_challenge_sector_id } }).toPromise();
            dataResponse.data.frg_challenge_id.frg_challenge_sector_id = sector.data;
            let shortList = dataResponse.data.applications.length > 0 ? dataResponse.data.applications.filter((d) => d.application_status === "Shortlist") : 0;
            dataResponse.data.application_count = dataResponse.data.applications.length;
            dataResponse.data.shortlist_count = shortList === 0 ? 0 : shortList.length;
            return dataResponse;
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
    updateApplicationStatus(applicationId, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(`${this.api_url}/application/update`, {
                slug: {
                    id: applicationId,
                },
                data: {
                    application_status: status,
                },
            })
                .toPromise();
        });
    }
    updatePilotStatus(pilotId, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(`${this.api_url}/proposal/update`, {
                slug: {
                    id: pilotId,
                },
                data: {
                    pilot_status: status,
                },
            })
                .toPromise();
        });
    }
    updateChallengeBrief(postData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(`${this.api_url}/anchors/update`, postData).toPromise();
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
    getEois(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const limit = parseInt(query.pg.limit);
            const page = parseInt(query.pg.skip) / limit + 1;
            const dataResponse = yield this.http.post(this.api_url + `/eoi/select_mul`, query).toPromise();
            const countResponse = yield this.http.post(this.api_url + `/eoi/count`, query).toPromise();
            yield Promise.all(dataResponse.data.map((p) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let providerResp = yield this.http
                    .post(this.api_url + `/providers/select_slug`, {
                    slug: {
                        id: p.frg_application_id.frg_provider_id,
                    },
                })
                    .toPromise();
                p.frg_application_id.frg_provider_id = providerResp.data;
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
    updateProposalStatus(proposalId, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http
                .post(`${this.api_url}/proposal/update`, {
                slug: {
                    id: proposalId,
                },
                data: {
                    proposal_stage: status,
                },
            })
                .toPromise();
        });
    }
    PilotOrderUpload(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/upload_pilot_order", data).toPromise();
        });
    }
    addToPilotOrderUpload(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/addto_pilot_order", data).toPromise();
        });
    }
    removeFromPilotOrderUpload(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/remove_pilot_order", data).toPromise();
        });
    }
    PilotReportUpload(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/upload_pilot_report", data).toPromise();
        });
    }
    addToPilotReportUpload(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/addto_pilot_report", data).toPromise();
        });
    }
    removeFromPilotReportUpload(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/remove_pilot_report", data).toPromise();
        });
    }
    PilotIIcUpload(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/upload_pilot_iic", data).toPromise();
        });
    }
    addToIICUpload(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/addto_pilot_iic", data).toPromise();
        });
    }
    removeFromIICUpload(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/remove_pilot_iic", data).toPromise();
        });
    }
    rejecProposal(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(this.api_url + "/proposal/reject_proposal", data).toPromise();
        });
    }
};
DashboardmainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
DashboardmainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DashboardmainService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map