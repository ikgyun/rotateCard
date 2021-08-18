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
})(["width:75vw;height:auto;overflow:hidden;display:flex;flex-wrap:wrap;justify-content:flex-start;margin:0 auto;transform-origin:", ";transform:", ";@media only screen and (min-width:768px){width:75vw;height:auto;overflow:hidden;display:flex;flex-wrap:wrap;justify-content:space-evenly;margin:0 auto;transform-origin:", ";transform:", ";}"], function (props) {
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
      lineNumber: 40,
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
      lineNumber: 54,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0L1JlcXVlc3RMaXN0LmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRMaXN0Iiwic3R5bGVkIiwicHJvcHMiLCJyb3RhdGUiLCJSZXF1ZXN0TGlzdCIsImxpc3QiLCJJdGVtIiwibWFwIiwidiIsImkiLCJpZCIsIm5hbWUiLCJjb250ZW50IiwiZGF0ZSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVWQVFRLFVBQUNDLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLE1BQU4sS0FBZ0IsTUFBaEIsR0FBeUIsWUFBekIsR0FBd0MsT0FBcEQ7QUFBQSxDQVJSLEVBU0EsVUFBQ0QsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsTUFBTixLQUFlLE1BQWYsR0FBd0IsK0RBQXhCLEdBQTBGLE1BQXRHO0FBQUEsQ0FUQSxFQXNCUSxVQUFDRCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxNQUFOLEtBQWdCLE1BQWhCLEdBQXlCLFlBQXpCLEdBQXdDLE9BQXBEO0FBQUEsQ0F0QlIsRUF1QkEsVUFBQ0QsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsTUFBTixLQUFlLE1BQWYsR0FBd0IsK0RBQXhCLEdBQTBGLE1BQXRHO0FBQUEsQ0F2QkEsQ0FBaEI7S0FBTUgsVTs7QUE2Qk4sSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0YsS0FBRCxFQUFXO0FBQzNCLE1BQU1HLElBQUksR0FBR0gsS0FBSyxDQUFDRyxJQUFuQixDQUQyQixDQUUvQjtBQUNBOztBQUVBLE1BQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDNUIsd0JBQ0UsOERBQUMsaURBQUQ7QUFFRSxRQUFFLEVBQUVELENBQUMsQ0FBQ0UsRUFGUjtBQUdFLFVBQUksRUFBRUYsQ0FBQyxDQUFDRyxJQUhWO0FBSUUsYUFBTyxFQUFFSCxDQUFDLENBQUNJLE9BSmI7QUFLRSxVQUFJLEVBQUlKLENBQUMsQ0FBQ0s7QUFMWixPQUNPTCxDQUFDLENBQUNFLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBVUQsR0FYVSxDQUFiLENBTCtCLENBa0I3QjtBQUNBOztBQUNBLHNCQUFPLDhEQUFDLFVBQUQ7QUFBWSxVQUFNLEVBQUVSLEtBQUssQ0FBQ0MsTUFBTixDQUFhVyxRQUFiLEVBQXBCO0FBQUEsMkJBQ0w7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLGdCQUNDUjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFLRCxDQXpCRDs7TUFBTUYsVztBQTRCTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXF1ZXN0Ljc0OTk1NzhlZTY3MzAzZWVhNzZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVxdWVzdEl0ZW0gZnJvbSBcIi4vUmVxdWVzdEl0ZW1cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFN0eWxlZExpc3QgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDc1dnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogJHsocHJvcHMpID0+IChwcm9wcy5yb3RhdGUgPT09J3RydWUnID8gXCI1MHZ3IDUwdmg7XCIgOiBcIjcwdncgXCIpfTtcclxuICAgIHRyYW5zZm9ybTokeyhwcm9wcykgPT4gKHByb3BzLnJvdGF0ZT09PSd0cnVlJyA/IFwicGVyc3BlY3RpdmUoMTAwMHB4KSB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlM2QoMSwwLDAsMzBkZWcpO1wiIDogXCJub25lXCIpfTtcclxuXHJcbiAgICBcclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIHdpZHRoOiA3NXZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogJHsocHJvcHMpID0+IChwcm9wcy5yb3RhdGUgPT09J3RydWUnID8gXCI1MHZ3IDUwdmg7XCIgOiBcIjcwdncgXCIpfTtcclxuICAgIHRyYW5zZm9ybTokeyhwcm9wcykgPT4gKHByb3BzLnJvdGF0ZT09PSd0cnVlJyA/IFwicGVyc3BlY3RpdmUoMTAwMHB4KSB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlM2QoMSwwLDAsMzBkZWcpO1wiIDogXCJub25lXCIpfTtcclxuICAgICBcclxufVxyXG5gXHJcblxyXG5cclxuY29uc3QgUmVxdWVzdExpc3QgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGxpc3QgPSBwcm9wcy5saXN0O1xyXG4vLyAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IHByb3BzLmhhbmRsZURlbGV0ZTtcclxuLy8gICBjb25zdCBoYW5kbGVNb2RpZnkgPSBwcm9wcy5oYW5kbGVNb2RpZnk7XHJcbiAgXHJcbmNvbnN0IEl0ZW0gPSBsaXN0Lm1hcCgodiwgaSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlcXVlc3RJdGVtXHJcbiAgICAgICAga2V5PXt2LmlkfVxyXG4gICAgICAgIGlkPXt2LmlkfSAgICBcclxuICAgICAgICBuYW1lPXt2Lm5hbWV9XHJcbiAgICAgICAgY29udGVudD17di5jb250ZW50fVxyXG4gICAgICAgIGRhdGUgPSB7di5kYXRlfVxyXG4gICAgICBcclxuICAgICAvPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgLy8gaWYgKGxvYWRkaW5nKSByZXR1cm4gPGxpPuuhnOuUqeykkeyeheuLiOuLpF5ePC9saT47XHJcbiAgLy8gaWYgKGVycm9yKSByZXR1cm4gPGxpPuyXkOufrCEhPC9saT47XHJcbiAgcmV0dXJuIDxTdHlsZWRMaXN0IHJvdGF0ZT17cHJvcHMucm90YXRlLnRvU3RyaW5nKCl9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyTGlzdFwiPlxyXG4gICAge0l0ZW19XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkTGlzdD47XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==