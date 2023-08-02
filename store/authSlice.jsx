"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectAuthState = exports.setAuthState = exports.authSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var next_redux_wrapper_1 = require("next-redux-wrapper");
// Initial state
var initialState = {
  authState: false,
};
// Actual Slice
exports.authSlice = (0, toolkit_1.createSlice)({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState: function (state, action) {
      state.authState = action.payload;
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers:
    ((_a = {}),
    (_a[next_redux_wrapper_1.HYDRATE] = function (state, action) {
      return __assign(__assign({}, state), action.payload.auth);
    }),
    _a),
});
exports.setAuthState = exports.authSlice.actions.setAuthState;
var selectAuthState = function (state) {
  return state.auth.authState;
};
exports.selectAuthState = selectAuthState;
exports.default = exports.authSlice.reducer;
