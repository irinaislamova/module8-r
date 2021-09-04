"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopPropagation = void 0;
function stopPropagation(fn) {
    return function (e) {
        e.stopPropagation();
        fn(e);
    };
}
exports.stopPropagation = stopPropagation;
