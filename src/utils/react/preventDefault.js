"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preventDefault = void 0;
function preventDefault(fn) {
    return function (e) {
        e.preventDefault();
        fn(e);
    };
}
exports.preventDefault = preventDefault;
