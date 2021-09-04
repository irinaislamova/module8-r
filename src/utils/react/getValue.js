"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValue = void 0;
function pickFromSyntheticEvent() {
    return function (key) {
        return function (fn) {
            return function (e) {
                return fn(e.currentTarget[key]);
            };
        };
    };
}
exports.getValue = pickFromSyntheticEvent()('value');
