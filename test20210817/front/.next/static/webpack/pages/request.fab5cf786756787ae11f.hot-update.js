self["webpackHotUpdate_N_E"]("pages/request",{

/***/ "./pages/request/index.jsx":
/*!*********************************!*\
  !*** ./pages/request/index.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _components_request_RequestForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/request/RequestForm */ "./components/request/RequestForm.jsx");
/* harmony import */ var _components_request_RequestList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/request/RequestList */ "./components/request/RequestList.jsx");
/* harmony import */ var _components_request_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/request/api */ "./components/request/api.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\KGA_03\\Documents\\rotatecards\\test20210817\\front\\pages\\request\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { RequestForm, RequestList } from '../../components/request'






var StyledWrap = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "request__StyledWrap",
  componentId: "sc-fj411z-0"
})(["width:100%;height:auto;overflow:hidden;"]);
_c = StyledWrap;
var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "request__StyledContainer",
  componentId: "sc-fj411z-1"
})(["width:80vw;height:auto;overflow:hidden;margin:0 auto;&>h2{width:70vw;text-align:center;margin:0 auto;font-size:1.5rem;margin-top:20px;margin-bottom:10px;}& > .writeBtn{width:80vw;height:70px;margin:0 auto;margin-top:20px;text-align:right;}@media only screen and (min-width:768px){&>h2{width:70vw;text-align:center;margin:0 auto;font-size:4.5rem;}& > .writeBtn{width:73vw;height:70px;margin:0 auto;margin-top:20px;text-align:right;}}"]);
_c2 = StyledContainer;

var dateFormat = function dateFormat() {
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1 > 0 ? now.getMonth() + 1 : '0' + String(now.getMonth() + 1);
  var d = now.getDate() + 1 > 0 ? now.getDate() + 1 : '0' + String(now.getDate() + 1);
  return "".concat(y, "-").concat(m, "-").concat(d);
};

var index = function index() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      list = _useState[0],
      setList = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      skip = _useState2[0],
      setSkip = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      rotate = _useState3[0],
      setRotate = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      fetching = _useState4[0],
      setFetching = _useState4[1];

  var handleRotate = function handleRotate(value) {
    setRotate(value);
  }; //===== init
  ///=====CREATE


  var handleCreate = /*#__PURE__*/function () {
    var _ref = (0,C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(data) {
      var card, result, newList;
      return C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              card = _objectSpread({}, data);
              _context.next = 3;
              return (0,_components_request_api__WEBPACK_IMPORTED_MODULE_7__.createRequest)(card);

            case 3:
              result = _context.sent;
              console.log(result);

              if (result.success) {
                card.date = dateFormat();
                card.liked = 0;
                newList = [card].concat((0,C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(list));
                setList(newList);
                setRotate(false);
              } else {
                alert(result.error);
              } //


            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleCreate(_x) {
      return _ref.apply(this, arguments);
    };
  }(); //======READ


  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var data, result, newList;
    return C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = {
              skip: skip
            };
            _context2.next = 3;
            return (0,_components_request_api__WEBPACK_IMPORTED_MODULE_7__.showRequest)(data);

          case 3:
            result = _context2.sent;
            console.log(result);

            if (result.success) {
              newList = [].concat((0,C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(list), (0,C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(result.list));
              setList(newList);
              setSkip(skip + 16);
            } else {
              alert(result.error);
            }

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []); //////==== infinity

  var fetchMoreRequest = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var data, result, newList;
      return C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setFetching(true);
              data = {
                skip: skip
              };
              _context3.next = 4;
              return (0,_components_request_api__WEBPACK_IMPORTED_MODULE_7__.showRequest)(data);

            case 4:
              result = _context3.sent;

              if (result.success) {
                newList = [].concat((0,C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(list), (0,C_Users_KGA_03_Documents_rotatecards_test20210817_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(result.list));
                setList(newList);
                setSkip(skip + 16);
                setFetching(false);
              } else {
                alert(result.error);
              }

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function fetchMoreRequest() {
      return _ref3.apply(this, arguments);
    };
  }(); // const { loadding, RequestItem, error } = state;


  var handleScroll = function handleScroll() {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = document.documentElement.scrollTop;
    var clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && fetching === false & rotate === false) {
      fetchMoreRequest();
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  /*
    //=====UPDATE
  const handleModify = async (data) => {
      const result = await updateRequest(data);
      if (result.success) {
          const newList = [...list];
          newList.forEach((v) => {
              if (v.id == data.id) {
                  v.content = data.content;
                  v.isUpdate = true;
              }
          });
          setList(newList);
          alert("수정되었습니다.");
      } else {
          alert(result.error);
      }
  };
    //====DELETE
  const handleDelete = async (data) => {
      const result = await destroyRequest(data);
      console.log(result); 
      if (result.success) {
          const newList = [...list];
          newList.forEach((v) => {
              if (v.id == data.id) {
                  v.content = "삭제된 댓글입니다.";
                  v.isWriter = false;
                  v.type = null;
              }
          });
          setList(newList);
          alert("삭제되었습니다.");
      } else {
          alert(result.error);
      }
  };
  */

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledWrap, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uAC1C\uBC1C\uC790\uC5D0\uAC8C '\uC694\uAD6C'\uD558\uC138\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }, _this), rotate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_request_RequestForm__WEBPACK_IMPORTED_MODULE_5__.default, {
        rotate: rotate,
        handleRotate: handleRotate,
        handleCreate: handleCreate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 28
      }, _this), !rotate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "writeBtn",
        onClick: function onClick() {
          handleRotate(true);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsPencilSquare, {
          size: 48
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 29
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_request_RequestList__WEBPACK_IMPORTED_MODULE_6__.default, {
        list: list,
        rotate: rotate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 200,
    columnNumber: 9
  }, _this);
};

_s(index, "SJ/gqLmPFumboWJT6kULnP8u+ow=");

/* harmony default export */ __webpack_exports__["default"] = (index);

var _c, _c2;

$RefreshReg$(_c, "StyledWrap");
$RefreshReg$(_c2, "StyledContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVxdWVzdC9pbmRleC5qc3giXSwibmFtZXMiOlsiU3R5bGVkV3JhcCIsInN0eWxlZCIsIlN0eWxlZENvbnRhaW5lciIsImRhdGVGb3JtYXQiLCJub3ciLCJEYXRlIiwieSIsImdldEZ1bGxZZWFyIiwibSIsImdldE1vbnRoIiwiU3RyaW5nIiwiZCIsImdldERhdGUiLCJpbmRleCIsInVzZVN0YXRlIiwibGlzdCIsInNldExpc3QiLCJza2lwIiwic2V0U2tpcCIsInJvdGF0ZSIsInNldFJvdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJoYW5kbGVSb3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNyZWF0ZSIsImRhdGEiLCJjYXJkIiwiY3JlYXRlUmVxdWVzdCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzIiwiZGF0ZSIsImxpa2VkIiwibmV3TGlzdCIsImFsZXJ0IiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJzaG93UmVxdWVzdCIsImZldGNoTW9yZVJlcXVlc3QiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0NBQWhCO0tBQU1ELFU7QUFNTixJQUFNRSxlQUFlLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLHdiQUFyQjtNQUFNQyxlOztBQTBDTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVB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OztHQUFNTixLOztBQTBKTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXF1ZXN0LmZhYjVjZjc4Njc1Njc4N2FlMTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBSZXF1ZXN0Rm9ybSwgUmVxdWVzdExpc3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3JlcXVlc3QnXHJcbmltcG9ydCB7QnNQZW5jaWxTcXVhcmV9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xyXG5pbXBvcnQgUmVxdWVzdEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZXF1ZXN0L1JlcXVlc3RGb3JtJ1xyXG5pbXBvcnQgUmVxdWVzdExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZXF1ZXN0L1JlcXVlc3RMaXN0J1xyXG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0LCBzaG93UmVxdWVzdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmVxdWVzdC9hcGknO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmNvbnN0IFN0eWxlZFdyYXAgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gXHJcblxyXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgJj5oMntcclxuICAgICAgICB3aWR0aDogNzB2dztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgfVxyXG4gICAgJiA+IC53cml0ZUJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAmPmgye1xyXG4gICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAud3JpdGVCdG4ge1xyXG4gICAgICAgIHdpZHRoOiA3M3Z3O1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuYFxyXG5cclxuY29uc3QgZGF0ZUZvcm1hdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCB5ID0gbm93LmdldEZ1bGxZZWFyKClcclxuICAgIGNvbnN0IG0gPSBub3cuZ2V0TW9udGgoKSArIDEgPiAwID8gbm93LmdldE1vbnRoKCkgKyAxIDogJzAnICsgU3RyaW5nKG5vdy5nZXRNb250aCgpICsgMSlcclxuICAgIGNvbnN0IGQgPSBub3cuZ2V0RGF0ZSgpICsgMSA+IDAgPyBub3cuZ2V0RGF0ZSgpICsgMSA6ICcwJyArIFN0cmluZyhub3cuZ2V0RGF0ZSgpICsgMSlcclxuXHJcbiAgICByZXR1cm4gYCR7eX0tJHttfS0ke2R9YFxyXG59XHJcblxyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2tpcCwgc2V0U2tpcF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUm90YXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0Um90YXRlKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIC8vPT09PT0gaW5pdFxyXG5cclxuICAgIC8vLz09PT09Q1JFQVRFXHJcbiAgICBjb25zdCBoYW5kbGVDcmVhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBjYXJkID0geyAuLi5kYXRhIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVSZXF1ZXN0KGNhcmQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGNhcmQuZGF0ZSA9IGRhdGVGb3JtYXQoKTtcclxuICAgICAgICAgICAgY2FyZC5saWtlZCA9IDA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gW2NhcmQsIC4uLmxpc3RdO1xyXG4gICAgICAgICAgICBzZXRMaXN0KG5ld0xpc3QpO1xyXG4gICAgICAgICAgICBzZXRSb3RhdGUoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChyZXN1bHQuZXJyb3IpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy9cclxuICAgIH07XHJcblxyXG4gICAgLy89PT09PT1SRUFEXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBza2lwOiBza2lwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNob3dSZXF1ZXN0KGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3QsIC4uLnJlc3VsdC5saXN0XTtcclxuICAgICAgICAgICAgc2V0TGlzdChuZXdMaXN0KTtcclxuICAgICAgICAgICAgc2V0U2tpcChza2lwICsgMTYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8vLy8vPT09PSBpbmZpbml0eVxyXG4gICAgY29uc3QgZmV0Y2hNb3JlUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRGZXRjaGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBza2lwOiBza2lwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNob3dSZXF1ZXN0KGRhdGEpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdCwgLi4ucmVzdWx0Lmxpc3RdO1xyXG4gICAgICAgICAgICBzZXRMaXN0KG5ld0xpc3QpO1xyXG4gICAgICAgICAgICBzZXRTa2lwKHNraXAgKyAxNik7XHJcbiAgICAgICAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChyZXN1bHQuZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb25zdCB7IGxvYWRkaW5nLCBSZXF1ZXN0SXRlbSwgZXJyb3IgfSA9IHN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCA+PSBzY3JvbGxIZWlnaHQgJiYgZmV0Y2hpbmcgPT09IGZhbHNlICZyb3RhdGU9PT1mYWxzZSkge1xyXG4gICAgICAgICAgICBmZXRjaE1vcmVSZXF1ZXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLypcclxuXHJcbiAgICAvLz09PT09VVBEQVRFXHJcbiAgICBjb25zdCBoYW5kbGVNb2RpZnkgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwZGF0ZVJlcXVlc3QoZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdF07XHJcbiAgICAgICAgICAgIG5ld0xpc3QuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYuaWQgPT0gZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYuY29udGVudCA9IGRhdGEuY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB2LmlzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldExpc3QobmV3TGlzdCk7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi7IiY7KCV65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChyZXN1bHQuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy89PT09REVMRVRFXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRlc3Ryb3lSZXF1ZXN0KGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7IFxyXG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RdO1xyXG4gICAgICAgICAgICBuZXdMaXN0LmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2LmlkID09IGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LmNvbnRlbnQgPSBcIuyCreygnOuQnCDrjJPquIDsnoXri4jri6QuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdi5pc1dyaXRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHYudHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRMaXN0KG5ld0xpc3QpO1xyXG4gICAgICAgICAgICBhbGVydChcIuyCreygnOuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQocmVzdWx0LmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgKi9cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRXcmFwPlxyXG4gICAgICAgICAgICA8U3R5bGVkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPGgyPuqwnOuwnOyekOyXkOqyjCAn7JqU6rWsJ+2VmOyEuOyalDwvaDI+XHJcbiAgICAgICAgICAgICAgICB7cm90YXRlICYmIDxSZXF1ZXN0Rm9ybSByb3RhdGU9e3JvdGF0ZX0gaGFuZGxlUm90YXRlPXtoYW5kbGVSb3RhdGV9IGhhbmRsZUNyZWF0ZT17aGFuZGxlQ3JlYXRlfSAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICB7IXJvdGF0ZSAmJiA8ZGl2IGNsYXNzTmFtZT0nd3JpdGVCdG4nIG9uQ2xpY2s9eygpPT57aGFuZGxlUm90YXRlKHRydWUpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJzUGVuY2lsU3F1YXJlIHNpemU9ezQ4fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxSZXF1ZXN0TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q9e2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlPXtyb3RhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1N0eWxlZENvbnRhaW5lcj5cclxuICAgICAgICA8L1N0eWxlZFdyYXA+XHJcbiAgICApO1xyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==