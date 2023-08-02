"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapper = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var authSlice_1 = require("./authSlice");
var next_redux_wrapper_1 = require("next-redux-wrapper");
var makeStore = function () {
  var _a;
  return (0, toolkit_1.configureStore)({
    reducer:
      ((_a = {}),
      (_a[authSlice_1.authSlice.name] = authSlice_1.authSlice.reducer),
      _a),
    devTools: true,
  });
};
exports.wrapper = next_redux_wrapper_1.createWrapper < AppStore > makeStore;
