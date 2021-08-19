self["webpackHotUpdate_N_E"]("pages/request",{

/***/ "./components/request/RequestForm.jsx":
/*!********************************************!*\
  !*** ./components/request/RequestForm.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_KGA_02_Documents_team_rotateCard_test20210817_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_KGA_02_Documents_team_rotateCard_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_02_Documents_team_rotateCard_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_02_Documents_team_rotateCard_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_KGA_02_Documents_team_rotateCard_test20210817_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\KGA_02\\Documents\\\uC775\uADE0\\team\\rotateCard\\test20210817\\front\\components\\request\\RequestForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_02_Documents_team_rotateCard_test20210817_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "RequestForm__StyledForm",
  componentId: "sc-do4j3e-0"
})(["width:70vw;height:70vh;margin:0 auto;& > form{float:left;}& >form>.inputBox{background:#fff;border:1px solid transparent;box-shadow:0 2px 5px 1px rgb(64 60 67 / 16%);height:20px;width:150px;border-radius:24px;z-index:3;margin:0 auto;margin-bottom:15px;padding-left:20px;}& >form>.textArea>.inputBox2{background:#fff;border:1px solid transparent;box-shadow:0 2px 5px 1px rgb(64 60 67 / 16%);height:200px;width:200px;border-radius:24px;z-index:3;margin-top:10px;padding-left:20px;}& > .box{display:none;}& >form> .btnBox{float:right padding:20px 0px 20px 20px;margin:0 auto;margin-right:20px;}& > form> .btnBox> .btn1{width:80px;margin-left:20px;border-radius:24px;border:1px solid transparent;font-weight:bold;font-size:15px;line-height:1px;font-family:'Montserrat',sans-serif;background-image:linear-gradient(to left,#84fab0 0%,#8fd3f4 51%,#84fab0 100%);flex:1 1 auto;padding:15px;text-align:center;text-transform:uppercase;transition:0.5s;background-size:200% auto;color:white;text-shadow:0px 0px 10px rgba(0,0,0,0.2);box-shadow:0 0 20px #eee;border-radius:10px;}@media only screen and (min-width:768px){width:80vw;height:50vh;margin:0 auto;& > form{float:left;}& >form>.inputBox{background:#fff;border:1px solid transparent;box-shadow:0 2px 5px 1px rgb(64 60 67 / 16%);height:39px;width:200px;border-radius:24px;z-index:3;height:44px;margin:0 auto;margin-bottom:15px;padding-left:20px;}& >form> .textArea{width:680px;height:400px;}& >form> .textArea>.inputBox2{background:#fff;border:1px solid transparent;box-shadow:0 2px 5px 1px rgb(64 60 67 / 16%);width:680px;height:400px;border-radius:24px;z-index:3;margin-top:10px;padding-left:20px;box-sizing:border-box;overflow:hidden;word-wrap:break-word;}& > .box{float:right;margin-top:50px;margin-right:100px;border:1px solid black;width:680px;height:483px;}& > .box >img{width:680px;height:450px;}& >form> .btnBox{float:right;padding:20px 0 20px 20px;}& > form> .btnBox> .btn1:hover{width:100px;margin-left:20px;border-radius:24px;border:1px solid transparent;font-weight:bold;font-size:20px;line-height:1px;font-family:'Montserrat',sans-serif;background-image:linear-gradient(to left,#84fab0 0%,#8fd3f4 51%,#84fab0 100%);flex:1 1 auto;padding:15px;text-align:center;color:#000;}& > form> .btnBox> .btn1{width:100px;margin-left:20px;border-radius:24px;border:1px solid transparent;font-weight:bold;font-size:20px;line-height:1px;font-family:'Montserrat',sans-serif;background-image:linear-gradient(to left,#84fab0 0%,#8fd3f4 51%,#84fab0 100%);flex:1 1 auto;padding:15px;text-align:center;text-transform:uppercase;transition:0.5s;background-size:200% auto;color:white;text-shadow:0px 0px 10px rgba(0,0,0,0.2);box-shadow:0 0 20px #eee;border-radius:10px;}}"]);
_c = StyledForm;

var RequestForm = function RequestForm(props) {
  _s();

  var name = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var pw = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var content = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var handleCreate = props.handleCreate;
  var handleRotate = props.handleRotate;

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_KGA_02_Documents_team_rotateCard_test20210817_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_KGA_02_Documents_team_rotateCard_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var data;
      return C_Users_KGA_02_Documents_team_rotateCard_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!(name.value === "")) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", alert("닉네임을 입력해주세요"));

            case 3:
              if (!(pw.value === "")) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", alert("비밀번호를 입력해주세요"));

            case 5:
              if (!(content.value === "")) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", alert("요구사항을 입력해주세요"));

            case 7:
              data = {
                name: name.value,
                content: content.value,
                pw: pw.value
              };
              handleCreate(data);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledForm, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text",
        className: "inputBox"
      }, name), {}, {
        placeholder: "\uB2C9\uB124\uC784 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
        maxLength: "20"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 102
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "password",
        className: "inputBox"
      }, pw), {}, {
        placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
        maxLength: "20"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 105
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "textArea",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "textarea",
          cols: "30",
          rows: "10",
          className: "inputBox2"
        }, content), {}, {
          placeholder: "\uC694\uAD6C\uC0AC\uD56D\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
          maxLength: "100"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 133
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "btnBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          type: "submit",
          className: "btn1",
          children: "\uD574\uC918"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          className: "btn1",
          onClick: function onClick() {
            handleRotate(false);
          },
          children: "\uCDE8\uC18C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "box",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
        children: "\uAD11\uACE0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: "arger.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 238,
    columnNumber: 5
  }, _this);
};

_s(RequestForm, "kMk1Sjkh3Zfm6CMDeK8IcxWMAEo=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c2 = RequestForm;
/* harmony default export */ __webpack_exports__["default"] = (RequestForm);

var _c, _c2;

$RefreshReg$(_c, "StyledForm");
$RefreshReg$(_c2, "RequestForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0L1JlcXVlc3RGb3JtLmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRGb3JtIiwic3R5bGVkIiwiUmVxdWVzdEZvcm0iLCJwcm9wcyIsIm5hbWUiLCJ1c2VJbnB1dCIsInB3IiwiY29udGVudCIsImhhbmRsZUNyZWF0ZSIsImhhbmRsZVJvdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiYWxlcnQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVwRkFBaEI7S0FBTUQsVTs7QUF5TU4sSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRTdCLE1BQU1DLElBQUksR0FBR0Msd0RBQVEsQ0FBQyxFQUFELENBQXJCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRCx3REFBUSxDQUFDLEVBQUQsQ0FBbkI7QUFDQSxNQUFNRSxPQUFPLEdBQUdGLHdEQUFRLENBQUMsRUFBRCxDQUF4QjtBQUNBLE1BQU1HLFlBQVksR0FBR0wsS0FBSyxDQUFDSyxZQUEzQjtBQUNBLE1BQU1DLFlBQVksR0FBR04sS0FBSyxDQUFDTSxZQUEzQjs7QUFFQSxNQUFNQyxZQUFZO0FBQUEseVVBQUcsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQSxlQUFDLENBQUNDLGNBQUY7O0FBRG1CLG9CQUVmUixJQUFJLENBQUNTLEtBQUwsS0FBZSxFQUZBO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUdWQyxLQUFLLENBQUMsYUFBRCxDQUhLOztBQUFBO0FBQUEsb0JBS2ZSLEVBQUUsQ0FBQ08sS0FBSCxLQUFhLEVBTEU7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBTVZDLEtBQUssQ0FBQyxjQUFELENBTks7O0FBQUE7QUFBQSxvQkFRZlAsT0FBTyxDQUFDTSxLQUFSLEtBQWtCLEVBUkg7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBU1ZDLEtBQUssQ0FBQyxjQUFELENBVEs7O0FBQUE7QUFZYkMsa0JBWmEsR0FZTjtBQUNYWCxvQkFBSSxFQUFFQSxJQUFJLENBQUNTLEtBREE7QUFFWE4sdUJBQU8sRUFBRUEsT0FBTyxDQUFDTSxLQUZOO0FBR1hQLGtCQUFFLEVBQUVBLEVBQUUsQ0FBQ087QUFISSxlQVpNO0FBa0JuQkwsMEJBQVksQ0FBQ08sSUFBRCxDQUFaOztBQWxCbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkwsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFzQkEsc0JBQ0UsOERBQUMsVUFBRDtBQUFBLDRCQUNFO0FBQU0sY0FBUSxFQUFFQSxZQUFoQjtBQUFBLDhCQUNFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBQztBQUE3QixTQUE0Q04sSUFBNUM7QUFBa0QsbUJBQVcsRUFBQywwREFBOUQ7QUFBNEUsaUJBQVMsRUFBQztBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFDK0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUQvRixlQUVFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsaUJBQVMsRUFBQztBQUFqQyxTQUFnREUsRUFBaEQ7QUFBb0QsbUJBQVcsRUFBQyxzRUFBaEU7QUFBZ0YsaUJBQVMsRUFBQztBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFFa0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZsRyxlQUdFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0E7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUF1QixjQUFJLEVBQUMsSUFBNUI7QUFBaUMsY0FBSSxFQUFDLElBQXRDO0FBQTJDLG1CQUFTLEVBQUM7QUFBckQsV0FBcUVDLE9BQXJFO0FBQThFLHFCQUFXLEVBQUMsc0VBQTFGO0FBQTBHLG1CQUFTLEVBQUM7QUFBcEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUM0SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQ1SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQU1FO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsZ0NBQ0U7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBUSxtQkFBUyxFQUFDLE1BQWxCO0FBQXlCLGlCQUFPLEVBQUUsbUJBQU07QUFBRUUsd0JBQVksQ0FBQyxLQUFELENBQVo7QUFBcUIsV0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFZRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssV0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBbEREOztHQUFNUCxXO1VBRVNHLG9ELEVBQ0ZBLG9ELEVBQ0tBLG9EOzs7TUFKWkgsVztBQW9ETiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXF1ZXN0LjUzNzI5ZmQxY2Y3OTQ3MmM4NGIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5wdXQnXHJcblxyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZGl2YFxyXG5cclxuLy/rqqjrsJTsnbwgXHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAmID4gZm9ybXtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgfVxyXG5cclxuICAmID5mb3JtPi5pbnB1dEJveHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMXB4IHJnYig2NCA2MCA2NyAvIDE2JSk7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xyXG59XHJcbiAmID5mb3JtPi50ZXh0QXJlYT4uaW5wdXRCb3gye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDFweCByZ2IoNjQgNjAgNjcgLyAxNiUpO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDoyMHB4OyBcclxuXHJcbiB9XHJcblxyXG4gJiA+IC5ib3gge1xyXG4gIGRpc3BsYXk6bm9uZTtcclxuIH1cclxuXHJcblxyXG4gJiA+Zm9ybT4gLmJ0bkJveHtcclxuICAgZmxvYXQ6IHJpZ2h0XHJcbiAgIC8qIHdpZHRoOjMwMHB4OyAqL1xyXG4gICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDIwcHg7XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiB9XHJcblxyXG4gLyogJiA+IGZvcm0+IC5idG5Cb3g+IC5idG4xOmhvdmVye1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzg0ZmFiMCAwJSwgIzhmZDNmNCA1MSUsICM4NGZhYjAgMTAwJSk7XHJcblxyXG4gIGZsZXg6IDEgMSBhdXRvOyBcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDtcclxuIH0gKi9cclxuXHJcbiAmID4gZm9ybT4gLmJ0bkJveD4gLmJ0bjF7XHJcbiAgXHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4NGZhYjAgMCUsICM4ZmQzZjQgNTElLCAjODRmYWIwIDEwMCUpO1xyXG5cclxuICBmbGV4OiAxIDEgYXV0bzsgXHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG4gXHJcbiB9XHJcblxyXG5cclxuXHJcbi8vcGNcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAmID4gZm9ybXtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgfVxyXG5cclxuICAmID5mb3JtPi5pbnB1dEJveHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAxcHggcmdiKDY0IDYwIDY3IC8gMTYlKTtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbn1cclxuXHJcbiYgPmZvcm0+IC50ZXh0QXJlYXtcclxuICB3aWR0aDogNjgwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuXHJcblxyXG59XHJcbiAmID5mb3JtPiAudGV4dEFyZWE+LmlucHV0Qm94MntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAxcHggcmdiKDY0IDYwIDY3IC8gMTYlKTtcclxuICAgIHdpZHRoOiA2ODBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgd29yZC13cmFwOmJyZWFrLXdvcmQ7XHJcblxyXG4gfVxyXG4gJiA+IC5ib3gge1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjEwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICB3aWR0aCA6NjgwcHg7XHJcbiAgIGhlaWdodDo0ODNweDtcclxuIH1cclxuICYgPiAuYm94ID5pbWcge1xyXG4gICB3aWR0aCA6NjgwcHg7XHJcbiAgIGhlaWdodDo0NTBweDtcclxuIH1cclxuICYgPmZvcm0+IC5idG5Cb3h7XHJcbiAgIGZsb2F0OiByaWdodDsgXHJcbiAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XHJcbiB9XHJcblxyXG4gJiA+IGZvcm0+IC5idG5Cb3g+IC5idG4xOmhvdmVye1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzg0ZmFiMCAwJSwgIzhmZDNmNCA1MSUsICM4NGZhYjAgMTAwJSk7XHJcblxyXG4gIGZsZXg6IDEgMSBhdXRvOyBcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDtcclxuIH1cclxuXHJcbiAmID4gZm9ybT4gLmJ0bkJveD4gLmJ0bjF7XHJcbiAgXHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjIwcHg7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7IFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4NGZhYjAgMCUsICM4ZmQzZjQgNTElLCAjODRmYWIwIDEwMCUpO1xyXG5cclxuICBmbGV4OiAxIDEgYXV0bzsgXHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG5cclxuIH1cclxufVxyXG5gXHJcblxyXG5cclxuY29uc3QgUmVxdWVzdEZvcm0gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgbmFtZSA9IHVzZUlucHV0KCcnKVxyXG4gIGNvbnN0IHB3ID0gdXNlSW5wdXQoJycpXHJcbiAgY29uc3QgY29udGVudCA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGUgPSBwcm9wcy5oYW5kbGVDcmVhdGU7XHJcbiAgY29uc3QgaGFuZGxlUm90YXRlID0gcHJvcHMuaGFuZGxlUm90YXRlO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKG5hbWUudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwi64uJ64Sk7J6E7J2EIOyeheugpe2VtOyjvOyEuOyalFwiKVxyXG4gICAgfVxyXG4gICAgaWYgKHB3LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpRcIilcclxuICAgIH1cclxuICAgIGlmIChjb250ZW50LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIuyalOq1rOyCrO2VreydhCDsnoXroKXtlbTso7zshLjsmpRcIilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBuYW1lOiBuYW1lLnZhbHVlLFxyXG4gICAgICBjb250ZW50OiBjb250ZW50LnZhbHVlLFxyXG4gICAgICBwdzogcHcudmFsdWVcclxuXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlQ3JlYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEZvcm0+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0Qm94XCIgey4uLm5hbWV9IHBsYWNlaG9sZGVyPVwi64uJ64Sk7J6EIOyeheugpe2VtOyjvOyEuOyalC5cIiBtYXhMZW5ndGg9JzIwJyAvPjxiciAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIHsuLi5wd30gcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqULlwiIG1heExlbmd0aD0nMjAnLz48YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRBcmVhXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIGNsYXNzTmFtZT1cImlucHV0Qm94MlwiIHsuLi5jb250ZW50fSBwbGFjZWhvbGRlcj1cIuyalOq1rOyCrO2VreydhCDsnoXroKXtlbTso7zshLjsmpQuXCIgbWF4TGVuZ3RoPScxMDAnIC8+PGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5Cb3hcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bjFcIj7tlbTspJg8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuMVwiIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlUm90YXRlKGZhbHNlKSB9fT7st6jshow8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgIDxoNT7qtJHqs6A8L2g1PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiYXJnZXIuanBnXCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9TdHlsZWRGb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=