self["webpackHotUpdate_N_E"]("pages/request",{

/***/ "./components/request/RequestList.jsx":
/*!********************************************!*\
  !*** ./components/request/RequestList.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RequestItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestItem */ "./components/request/RequestItem.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_03\\Documents\\rotatecards\\test20210817\\front\\components\\request\\RequestList.jsx",
    _this = undefined;



var StyledList = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "RequestList__StyledList",
  componentId: "sc-10wqua4-0"
})(["width:75vw;height:auto;overflow:hidden;display:flex;flex-wrap:wrap;justify-content:flex-start;margin:0 auto;transform-origin:", ";transform:", ";& > .rList{border-top:1px solid #000;}@media only screen and (min-width:768px){width:75vw;height:auto;overflow:hidden;display:flex;flex-wrap:wrap;justify-content:space-evenly;margin:0 auto;transform-origin:", ";transform:", ";}"], function (props) {
  return props.rotate === 'true' ? "50vw 50vh;" : "70vw ";
}, function (props) {
  return props.rotate === 'true' ? "perspective(1000px) translate3d(0,0,0) rotate3d(1,0,0,30deg);" : "none";
}, function (props) {
  return props.rotate === 'true' ? "50vw 50vh;" : "70vw ";
}, function (props) {
  return props.rotate === 'true' ? "perspective(1000px) translate3d(0,0,0) rotate3d(1,0,0,30deg);" : "none";
});
_c = StyledList;

var RequestList = function RequestList(props) {
  var list = props.list; //   const handleDelete = props.handleDelete;
  //   const handleModify = props.handleModify;

  var Item = list.map(function (v, i) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RequestItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      id: v.id,
      name: v.name,
      content: v.content,
      date: v.date
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this);
  }); // if (loadding) return <li>로딩중입니다^^</li>;
  // if (error) return <li>에러!!</li>;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledList, {
    rotate: props.rotate.toString(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "rList",
      children: Item
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 10
  }, _this);
};

_c2 = RequestList;
/* harmony default export */ __webpack_exports__["default"] = (RequestList);

var _c, _c2;

$RefreshReg$(_c, "StyledList");
$RefreshReg$(_c2, "RequestList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0L1JlcXVlc3RMaXN0LmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRMaXN0Iiwic3R5bGVkIiwicHJvcHMiLCJyb3RhdGUiLCJSZXF1ZXN0TGlzdCIsImxpc3QiLCJJdGVtIiwibWFwIiwidiIsImkiLCJpZCIsIm5hbWUiLCJjb250ZW50IiwiZGF0ZSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZYQVFRLFVBQUNDLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLE1BQU4sS0FBZ0IsTUFBaEIsR0FBeUIsWUFBekIsR0FBd0MsT0FBcEQ7QUFBQSxDQVJSLEVBU0EsVUFBQ0QsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsTUFBTixLQUFlLE1BQWYsR0FBd0IsK0RBQXhCLEdBQTBGLE1BQXRHO0FBQUEsQ0FUQSxFQTJCUSxVQUFDRCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxNQUFOLEtBQWdCLE1BQWhCLEdBQXlCLFlBQXpCLEdBQXdDLE9BQXBEO0FBQUEsQ0EzQlIsRUE0QkEsVUFBQ0QsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsTUFBTixLQUFlLE1BQWYsR0FBd0IsK0RBQXhCLEdBQTBGLE1BQXRHO0FBQUEsQ0E1QkEsQ0FBaEI7S0FBTUgsVTs7QUFrQ04sSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0YsS0FBRCxFQUFXO0FBQzNCLE1BQU1HLElBQUksR0FBR0gsS0FBSyxDQUFDRyxJQUFuQixDQUQyQixDQUUvQjtBQUNBOztBQUVBLE1BQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDNUIsd0JBQ0UsOERBQUMsaURBQUQ7QUFFRSxRQUFFLEVBQUVELENBQUMsQ0FBQ0UsRUFGUjtBQUdFLFVBQUksRUFBRUYsQ0FBQyxDQUFDRyxJQUhWO0FBSUUsYUFBTyxFQUFFSCxDQUFDLENBQUNJLE9BSmI7QUFLRSxVQUFJLEVBQUlKLENBQUMsQ0FBQ0s7QUFMWixPQUNPTCxDQUFDLENBQUNFLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBVUQsR0FYVSxDQUFiLENBTCtCLENBa0I3QjtBQUNBOztBQUNBLHNCQUFPLDhEQUFDLFVBQUQ7QUFBWSxVQUFNLEVBQUVSLEtBQUssQ0FBQ0MsTUFBTixDQUFhVyxRQUFiLEVBQXBCO0FBQUEsMkJBQ0w7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLGdCQUNDUjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFLRCxDQXpCRDs7TUFBTUYsVztBQTRCTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXF1ZXN0LjVjM2ZjZDNlNjJmYTMzNDE3NTAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVxdWVzdEl0ZW0gZnJvbSBcIi4vUmVxdWVzdEl0ZW1cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFN0eWxlZExpc3QgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDc1dnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogJHsocHJvcHMpID0+IChwcm9wcy5yb3RhdGUgPT09J3RydWUnID8gXCI1MHZ3IDUwdmg7XCIgOiBcIjcwdncgXCIpfTtcclxuICAgIHRyYW5zZm9ybTokeyhwcm9wcykgPT4gKHByb3BzLnJvdGF0ZT09PSd0cnVlJyA/IFwicGVyc3BlY3RpdmUoMTAwMHB4KSB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlM2QoMSwwLDAsMzBkZWcpO1wiIDogXCJub25lXCIpfTtcclxuXHJcbiAgICAmID4gLnJMaXN0e1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xyXG4gICAgd2lkdGg6IDc1dnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeyhwcm9wcykgPT4gKHByb3BzLnJvdGF0ZSA9PT0ndHJ1ZScgPyBcIjUwdncgNTB2aDtcIiA6IFwiNzB2dyBcIil9O1xyXG4gICAgdHJhbnNmb3JtOiR7KHByb3BzKSA9PiAocHJvcHMucm90YXRlPT09J3RydWUnID8gXCJwZXJzcGVjdGl2ZSgxMDAwcHgpIHRyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUzZCgxLDAsMCwzMGRlZyk7XCIgOiBcIm5vbmVcIil9O1xyXG4gICAgIFxyXG59XHJcbmBcclxuXHJcblxyXG5jb25zdCBSZXF1ZXN0TGlzdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgbGlzdCA9IHByb3BzLmxpc3Q7XHJcbi8vICAgY29uc3QgaGFuZGxlRGVsZXRlID0gcHJvcHMuaGFuZGxlRGVsZXRlO1xyXG4vLyAgIGNvbnN0IGhhbmRsZU1vZGlmeSA9IHByb3BzLmhhbmRsZU1vZGlmeTtcclxuICBcclxuY29uc3QgSXRlbSA9IGxpc3QubWFwKCh2LCBpKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVxdWVzdEl0ZW1cclxuICAgICAgICBrZXk9e3YuaWR9XHJcbiAgICAgICAgaWQ9e3YuaWR9ICAgIFxyXG4gICAgICAgIG5hbWU9e3YubmFtZX1cclxuICAgICAgICBjb250ZW50PXt2LmNvbnRlbnR9XHJcbiAgICAgICAgZGF0ZSA9IHt2LmRhdGV9XHJcbiAgICAgIFxyXG4gICAgIC8+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICAvLyBpZiAobG9hZGRpbmcpIHJldHVybiA8bGk+66Gc65Sp7KSR7J6F64uI64ukXl48L2xpPjtcclxuICAvLyBpZiAoZXJyb3IpIHJldHVybiA8bGk+7JeQ65+sISE8L2xpPjtcclxuICByZXR1cm4gPFN0eWxlZExpc3Qgcm90YXRlPXtwcm9wcy5yb3RhdGUudG9TdHJpbmcoKX0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJMaXN0XCI+XHJcbiAgICB7SXRlbX1cclxuICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRMaXN0PjtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9