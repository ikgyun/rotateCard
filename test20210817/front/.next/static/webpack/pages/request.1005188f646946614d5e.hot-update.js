self["webpackHotUpdate_N_E"]("pages/request",{

/***/ "./components/request/RequestForm.jsx":
/*!********************************************!*\
  !*** ./components/request/RequestForm.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\KGA_03\\Documents\\rotatecards\\test20210817\\front\\components\\request\\RequestForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "RequestForm__StyledForm",
  componentId: "sc-do4j3e-0"
})(["width:70vw;height:50vh;margin:0 auto;& > form{float:left;}& >form>.inputBox{background:#fff;border:1px solid transparent;box-shadow:0 2px 5px 1px rgb(64 60 67 / 16%);height:39px;width:150px;border-radius:24px;z-index:3;height:44px;margin:0 auto;margin-bottom:15px;padding-left:20px;}& >form>.inputBox2{background:#fff;border:1px solid transparent;box-shadow:0 2px 5px 1px rgb(64 60 67 / 16%);height:300px;width:250px;border-radius:24px;z-index:3;margin-top:10px;padding-left:20px;}& > .box{float:right;margin-top:50px;margin-right:100px;border:1px solid black;width:650px;height:483px;}& > .box >img{display:none;& >form> .btnBox{float:right;padding:20px 0 20px 20px;}& > form> .btnBox> .btn1:hover{width:100px;margin-left:20px;border-radius:24px;border:1px solid transparent;font-weight:bold;font-size:20px;line-height:1px;font-family:'Montserrat',sans-serif;background-image:linear-gradient(to left,#84fab0 0%,#8fd3f4 51%,#84fab0 100%);flex:1 1 auto;padding:15px;text-align:center;color:#000;}& > form> .btnBox> .btn1{width:100px;margin-left:20px;border-radius:24px;border:1px solid transparent;font-weight:bold;font-size:20px;line-height:1px;font-family:'Montserrat',sans-serif;background-image:linear-gradient(to left,#84fab0 0%,#8fd3f4 51%,#84fab0 100%);flex:1 1 auto;padding:15px;text-align:center;text-transform:uppercase;transition:0.5s;background-size:200% auto;color:white;text-shadow:0px 0px 10px rgba(0,0,0,0.2);box-shadow:0 0 20px #eee;border-radius:10px;}@media only screen and (min-width:768px){width:70vw;height:50vh;margin:0 auto;& > form{float:left;}& >form>.inputBox{background:#fff;border:1px solid transparent;box-shadow:0 2px 5px 1px rgb(64 60 67 / 16%);height:39px;width:200px;border-radius:24px;z-index:3;height:44px;margin:0 auto;margin-bottom:15px;padding-left:20px;}& >form>.inputBox2{background:#fff;border:1px solid transparent;box-shadow:0 2px 5px 1px rgb(64 60 67 / 16%);height:400px;width:680px;border-radius:24px;z-index:3;margin-top:10px;padding-left:20px;}& > .box{float:right;margin-top:50px;margin-right:100px;border:1px solid black;width:650px;height:483px;}& > .box >img{width:650px;height:450px;}& >form> .btnBox{float:right;padding:20px 0 20px 20px;}& > form> .btnBox> .btn1:hover{width:100px;margin-left:20px;border-radius:24px;border:1px solid transparent;font-weight:bold;font-size:20px;line-height:1px;font-family:'Montserrat',sans-serif;background-image:linear-gradient(to left,#84fab0 0%,#8fd3f4 51%,#84fab0 100%);flex:1 1 auto;padding:15px;text-align:center;color:#000;}& > form> .btnBox> .btn1{width:100px;margin-left:20px;border-radius:24px;border:1px solid transparent;font-weight:bold;font-size:20px;line-height:1px;font-family:'Montserrat',sans-serif;background-image:linear-gradient(to left,#84fab0 0%,#8fd3f4 51%,#84fab0 100%);flex:1 1 auto;padding:15px;text-align:center;text-transform:uppercase;transition:0.5s;background-size:200% auto;color:white;text-shadow:0px 0px 10px rgba(0,0,0,0.2);box-shadow:0 0 20px #eee;border-radius:10px;}"]);
_c = StyledForm;

var RequestForm = function RequestForm(props) {
  _s();

  var name = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var pw = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var content = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var handleCreate = props.handleCreate;
  var handleRotate = props.handleRotate;

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var data;
      return C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
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
        placeholder: "\uB2C9\uB124\uC784 \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 88
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "password",
        className: "inputBox"
      }, pw), {}, {
        placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 92
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "textarea",
        className: "inputBox2"
      }, content), {}, {
        placeholder: "\uC694\uAD6C\uC0AC\uD56D\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
        maxLength: "100"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 114
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "btnBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          type: "submit",
          className: "btn1",
          children: "\uD574\uC918"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          className: "btn1",
          onClick: function onClick() {
            handleRotate(false);
          },
          children: "\uCDE8\uC18C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "box",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
        children: "\uAD11\uACE0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: "arger.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 229,
    columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0L1JlcXVlc3RGb3JtLmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRGb3JtIiwic3R5bGVkIiwiUmVxdWVzdEZvcm0iLCJwcm9wcyIsIm5hbWUiLCJ1c2VJbnB1dCIsInB3IiwiY29udGVudCIsImhhbmRsZUNyZWF0ZSIsImhhbmRsZVJvdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiYWxlcnQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHc3RkFBaEI7S0FBTUQsVTs7QUFnTU4sSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRTNCLE1BQU1DLElBQUksR0FBR0Msd0RBQVEsQ0FBQyxFQUFELENBQXJCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRCx3REFBUSxDQUFDLEVBQUQsQ0FBbkI7QUFDQSxNQUFNRSxPQUFPLEdBQUdGLHdEQUFRLENBQUMsRUFBRCxDQUF4QjtBQUNBLE1BQU1HLFlBQVksR0FBQ0wsS0FBSyxDQUFDSyxZQUF6QjtBQUNBLE1BQU1DLFlBQVksR0FBQ04sS0FBSyxDQUFDTSxZQUF6Qjs7QUFFQSxNQUFNQyxZQUFZO0FBQUEsaVVBQUcsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQSxlQUFDLENBQUNDLGNBQUY7O0FBRG1CLG9CQUVoQlIsSUFBSSxDQUFDUyxLQUFMLEtBQWEsRUFGRztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FHVkMsS0FBSyxDQUFDLGFBQUQsQ0FISzs7QUFBQTtBQUFBLG9CQUtoQlIsRUFBRSxDQUFDTyxLQUFILEtBQVcsRUFMSztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FNVkMsS0FBSyxDQUFDLGNBQUQsQ0FOSzs7QUFBQTtBQUFBLG9CQVFoQlAsT0FBTyxDQUFDTSxLQUFSLEtBQWdCLEVBUkE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBU1ZDLEtBQUssQ0FBQyxjQUFELENBVEs7O0FBQUE7QUFZYkMsa0JBWmEsR0FZTjtBQUNYWCxvQkFBSSxFQUFDQSxJQUFJLENBQUNTLEtBREM7QUFFWE4sdUJBQU8sRUFBRUEsT0FBTyxDQUFDTSxLQUZOO0FBR1hQLGtCQUFFLEVBQUNBLEVBQUUsQ0FBQ087QUFISyxlQVpNO0FBa0JuQkwsMEJBQVksQ0FBQ08sSUFBRCxDQUFaOztBQWxCbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkwsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFzQkEsc0JBQ0ksOERBQUMsVUFBRDtBQUFBLDRCQUNBO0FBQU0sY0FBUSxFQUFFQSxZQUFoQjtBQUFBLDhCQUNFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBQztBQUE3QixTQUE0Q04sSUFBNUM7QUFBa0QsbUJBQVcsRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFDK0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUQvRSxlQUVFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsaUJBQVMsRUFBQztBQUFqQyxTQUFnREUsRUFBaEQ7QUFBb0QsbUJBQVcsRUFBQztBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFFbUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZuRixlQUdFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsaUJBQVMsRUFBQztBQUFqQyxTQUFpREMsT0FBakQ7QUFBMEQsbUJBQVcsRUFBQyxxRUFBdEU7QUFBcUYsaUJBQVMsRUFBQztBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFHeUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUh6RyxlQUlFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsZ0NBQ0U7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBUSxtQkFBUyxFQUFDLE1BQWxCO0FBQXlCLGlCQUFPLEVBQUUsbUJBQUk7QUFBQ0Usd0JBQVksQ0FBQyxLQUFELENBQVo7QUFBb0IsV0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFVQTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssV0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBaEREOztHQUFNUCxXO1VBRVdHLG9ELEVBQ0ZBLG9ELEVBQ0tBLG9EOzs7TUFKZEgsVztBQWtETiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXF1ZXN0LjEwMDUxODhmNjQ2OTQ2NjE0ZDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5wdXQnXHJcblxyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZGl2YFxyXG5cclxuLy/rqqjrsJTsnbwgXHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gICYgPiBmb3Jte1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICB9XHJcblxyXG4gICYgPmZvcm0+LmlucHV0Qm94e1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAxcHggcmdiKDY0IDYwIDY3IC8gMTYlKTtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbn1cclxuICYgPmZvcm0+LmlucHV0Qm94MntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAxcHggcmdiKDY0IDYwIDY3IC8gMTYlKTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuXHJcbiB9XHJcbiAmID4gLmJveCB7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6MTAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgIHdpZHRoIDo2NTBweDtcclxuICAgaGVpZ2h0OjQ4M3B4O1xyXG4gfVxyXG5cclxuICYgPiAuYm94ID5pbWcge1xyXG4gIGRpc3BsYXk6bm9uZTtcclxuXHJcbiAmID5mb3JtPiAuYnRuQm94e1xyXG4gICBmbG9hdDogcmlnaHQ7IFxyXG4gICBwYWRkaW5nOiAyMHB4IDAgMjBweCAyMHB4O1xyXG4gfVxyXG5cclxuICYgPiBmb3JtPiAuYnRuQm94PiAuYnRuMTpob3ZlcntcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4NGZhYjAgMCUsICM4ZmQzZjQgNTElLCAjODRmYWIwIDEwMCUpO1xyXG5cclxuICBmbGV4OiAxIDEgYXV0bzsgXHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiB9XHJcblxyXG4gJiA+IGZvcm0+IC5idG5Cb3g+IC5idG4xe1xyXG4gIFxyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzg0ZmFiMCAwJSwgIzhmZDNmNCA1MSUsICM4NGZhYjAgMTAwJSk7XHJcblxyXG4gIGZsZXg6IDEgMSBhdXRvOyBcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiB9XHJcblxyXG5cclxuXHJcbi8vcHggXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xyXG4gIHdpZHRoOiA3MHZ3O1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAmID4gZm9ybXtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgfVxyXG5cclxuICAmID5mb3JtPi5pbnB1dEJveHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAxcHggcmdiKDY0IDYwIDY3IC8gMTYlKTtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbn1cclxuICYgPmZvcm0+LmlucHV0Qm94MntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAxcHggcmdiKDY0IDYwIDY3IC8gMTYlKTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogNjgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuXHJcbiB9XHJcbiAmID4gLmJveCB7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6MTAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgIHdpZHRoIDo2NTBweDtcclxuICAgaGVpZ2h0OjQ4M3B4O1xyXG4gfVxyXG4gJiA+IC5ib3ggPmltZyB7XHJcbiAgIHdpZHRoIDo2NTBweDtcclxuICAgaGVpZ2h0OjQ1MHB4O1xyXG4gfVxyXG4gJiA+Zm9ybT4gLmJ0bkJveHtcclxuICAgZmxvYXQ6IHJpZ2h0OyBcclxuICAgcGFkZGluZzogMjBweCAwIDIwcHggMjBweDtcclxuIH1cclxuXHJcbiAmID4gZm9ybT4gLmJ0bkJveD4gLmJ0bjE6aG92ZXJ7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDFweDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjODRmYWIwIDAlLCAjOGZkM2Y0IDUxJSwgIzg0ZmFiMCAxMDAlKTtcclxuXHJcbiAgZmxleDogMSAxIGF1dG87IFxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gfVxyXG5cclxuICYgPiBmb3JtPiAuYnRuQm94PiAuYnRuMXtcclxuICBcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4NGZhYjAgMCUsICM4ZmQzZjQgNTElLCAjODRmYWIwIDEwMCUpO1xyXG5cclxuICBmbGV4OiAxIDEgYXV0bzsgXHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG5cclxufVxyXG4gXHJcbmBcclxuXHJcblxyXG5jb25zdCBSZXF1ZXN0Rm9ybSA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSB1c2VJbnB1dCgnJylcclxuICAgIGNvbnN0IHB3ID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCBjb250ZW50ID0gdXNlSW5wdXQoJycpOyBcclxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZT1wcm9wcy5oYW5kbGVDcmVhdGU7IFxyXG4gICAgY29uc3QgaGFuZGxlUm90YXRlPXByb3BzLmhhbmRsZVJvdGF0ZTsgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZihuYW1lLnZhbHVlPT09XCJcIil7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KFwi64uJ64Sk7J6E7J2EIOyeheugpe2VtOyjvOyEuOyalFwiKVxyXG4gICAgICB9XHJcbiAgICAgIGlmKHB3LnZhbHVlPT09XCJcIil7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KFwi67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiKVxyXG4gICAgICB9XHJcbiAgICAgIGlmKGNvbnRlbnQudmFsdWU9PT1cIlwiKXtcclxuICAgICAgICByZXR1cm4gYWxlcnQoXCLsmpTqtazsgqztla3snYQg7J6F66Cl7ZW07KO87IS47JqUXCIpXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBuYW1lOm5hbWUudmFsdWUsXHJcbiAgICAgICAgY29udGVudDogY29udGVudC52YWx1ZSxcclxuICAgICAgICBwdzpwdy52YWx1ZVxyXG4gICAgICAgIFxyXG4gICAgICB9O1xyXG4gICAgICBoYW5kbGVDcmVhdGUoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZEZvcm0+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIHsuLi5uYW1lfSBwbGFjZWhvbGRlcj1cIuuLieuEpOyehCDsnoXroKXtlbTso7zshLjsmpRcIiAvPjxici8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiB7Li4ucHd9IHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiIC8+PGJyLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBjbGFzc05hbWU9XCJpbnB1dEJveDJcIiB7Li4uY29udGVudH0gcGxhY2Vob2xkZXI9XCLsmpTqtazsgqztla3snYQg7J6F66Cl7ZW07KO87IS47JqUXCIgbWF4TGVuZ3RoPScxMDAnIC8+PGJyLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuQm94XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bjFcIj7tlbTspJg8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4xXCIgb25DbGljaz17KCk9PntoYW5kbGVSb3RhdGUoZmFsc2UpfX0+7Leo7IaMPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgIDxoNT7qtJHqs6A8L2g1PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJhcmdlci5qcGdcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvU3R5bGVkRm9ybT5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=