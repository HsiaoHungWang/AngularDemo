"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
function log(target) {
    return class extends target {
        savingTime = `儲存時間：${new Date()}`;
    };
}
exports.log = log;
