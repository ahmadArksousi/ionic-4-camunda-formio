(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[143],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/vyajviiv.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/vyajviiv.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonChip, IonChipButton, IonChipIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonChip", function() { return Chip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonChipButton", function() { return ChipButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonChipIcon", function() { return ChipIcon; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */


var Chip = /** @class */ (function () {
    function Chip() {
    }
    Chip.prototype.hostData = function () {
        return {
            class: Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_1__["h"])(this.color),
        };
    };
    Object.defineProperty(Chip, "is", {
        get: function () { return "ion-chip"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chip, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chip, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chip, "style", {
        get: function () { return ".sc-ion-chip-ios-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-weight:400;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--color:var(--ion-text-color-step-150, #262626);--label-margin-top:0;--label-margin-end:10px;--label-margin-bottom:0;--label-margin-start:10px;--avatar-width:24px;--avatar-height:24px;--avatar-margin-top:0;--avatar-margin-end:4px;--avatar-margin-bottom:0;--avatar-margin-start:4px;border-radius:16px;margin:2px 0;height:32px;font-size:13px}.ion-color.sc-ion-chip-ios-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-chip-ios-h.ion-color.sc-ion-chip-ios-s  ion-chip-button , .sc-ion-chip-ios-h.ion-color.sc-ion-chip-ios-s  ion-chip-icon {--color:currentColor}.sc-ion-chip-ios-s  ion-label {margin:var(--label-margin-top) var(--label-margin-end) var(--label-margin-bottom) var(--label-margin-start)}.sc-ion-chip-ios-s  ion-avatar {margin:var(--avatar-margin-top) var(--avatar-margin-end) var(--avatar-margin-bottom) var(--avatar-margin-start);width:var(--avatar-width);height:var(--avatar-height)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chip, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Chip;
}());
var ChipButton = /** @class */ (function () {
    function ChipButton() {
        this.disabled = false;
        this.fill = 'clear';
    }
    ChipButton.prototype.hostData = function () {
        var _a;
        return {
            class: Object.assign({}, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_1__["h"])(this.color), (_a = {}, _a["chip-button-" + this.fill] = true, _a))
        };
    };
    ChipButton.prototype.render = function () {
        var TagType = this.href === undefined ? 'button' : 'a';
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, { type: "button", class: "button-native", disabled: this.disabled, href: this.href }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "button-inner" }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), this.mode === 'md' && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
    };
    Object.defineProperty(ChipButton, "is", {
        get: function () { return "ion-chip-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipButton, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipButton, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled"
                },
                "el": {
                    "elementRef": true
                },
                "fill": {
                    "type": String,
                    "attr": "fill"
                },
                "href": {
                    "type": String,
                    "attr": "href"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipButton, "style", {
        get: function () { return ":host{--border-radius:50%;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--width:32px;--height:100%;width:var(--width);height:var(--height);font-size:32px}:host(.chip-button-clear){--background:transparent;--color:var(--ion-text-color-step-400, #666666)}:host(.chip-button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.chip-button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.chip-button-clear.ion-color) .button-native{background:0 0;color:var(--ion-color-base)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);position:relative;width:var(--width);height:var(--height);border:0;outline:0;background:var(--background);color:var(--color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}"; },
        enumerable: true,
        configurable: true
    });
    return ChipButton;
}());
var ChipIcon = /** @class */ (function () {
    function ChipIcon() {
        this.fill = 'clear';
    }
    ChipIcon.prototype.hostData = function () {
        var _a;
        return {
            class: Object.assign({}, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_1__["h"])(this.color), (_a = {}, _a["chip-icon-" + this.fill] = true, _a))
        };
    };
    ChipIcon.prototype.render = function () {
        return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { name: this.name, src: this.src, mode: this.mode });
    };
    Object.defineProperty(ChipIcon, "is", {
        get: function () { return "ion-chip-icon"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipIcon, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipIcon, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "fill": {
                    "type": String,
                    "attr": "fill"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "name": {
                    "type": String,
                    "attr": "name"
                },
                "src": {
                    "type": String,
                    "attr": "src"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipIcon, "style", {
        get: function () { return ":host{border-radius:50%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:var(--width,32px);height:var(--height,32px);background:var(--background);color:var(--color);font-size:18px}:host(.chip-icon-clear){--background:transparent;--color:var(--ion-text-color-step-400, #666666)}:host(.chip-icon-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.chip-icon-solid.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.chip-icon-clear.ion-color){background:0 0;color:var(--ion-color-base)}"; },
        enumerable: true,
        configurable: true
    });
    return ChipIcon;
}());



/***/ })

}]);
//# sourceMappingURL=143.js.map