"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var DynamicListComponent = (function () {
    function DynamicListComponent() {
        this.selection = new core_1.EventEmitter();
    }
    DynamicListComponent.prototype.ngOnInit = function () {
        this.itemsToDisplay = this.items.splice(0, this.loadAmount);
    };
    DynamicListComponent.prototype.updateList = function () {
        this.itemsToDisplay = this.itemsToDisplay.concat(this.items.splice(0, this.loadAmount));
    };
    DynamicListComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        this.selection.emit(item);
    };
    return DynamicListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DynamicListComponent.prototype, "selection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DynamicListComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DynamicListComponent.prototype, "loadAmount", void 0);
DynamicListComponent = __decorate([
    core_1.Component({
        selector: 'dynamic-list',
        template: "\n    <ul #container class=\"heroes\" (updateList)=\"updateList()\" scroll-update-list>\n      <li *ngFor=\"let item of itemsToDisplay\"\n          [class.selected]=\"item === selectedItem\"\n          (click)=\"onSelect(item)\">\n        <span class=\"badge\">{{item.id}}</span> {{item.name}}\n      </li>\n    </ul>\n  "
    })
], DynamicListComponent);
exports.DynamicListComponent = DynamicListComponent;
;
//# sourceMappingURL=dynamicListComponent.js.map