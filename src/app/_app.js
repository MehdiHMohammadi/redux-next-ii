"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./globals.css");
var store_1 = require("../store/store");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return __assign({}, pageProps) />;
}
exports.default = store_1.wrapper.withRedux(MyApp);
