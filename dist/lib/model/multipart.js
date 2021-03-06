"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var Part = /** @class */ (function () {
    function Part() {
    }
    return Part;
}());
exports.Part = Part;
var Multipart = /** @class */ (function (_super) {
    __extends(Multipart, _super);
    function Multipart(obj) {
        var _this = _super.call(this, obj) || this;
        _this.parts = obj.parts;
        _this.type = 'multipart';
        return _this;
    }
    Multipart.prototype.toJSON = function () {
        var obj = _super.prototype.toJSON.call(this);
        obj.parts = this.parts;
        return obj;
    };
    return Multipart;
}(base_1.Base));
exports.Multipart = Multipart;
//# sourceMappingURL=multipart.js.map