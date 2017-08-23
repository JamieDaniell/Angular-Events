System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ThumbComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // thumb directive 
            // give template 
            // give style 
            ThumbComponent = (function () {
                function ThumbComponent() {
                    // events are the only way to pass information to the outer/containing component
                    // event emitter can send an error <generic> defines the type of event
                    // @output allows container to expose the info defined also
                    this.ratingClicked = new core_1.EventEmitter();
                }
                // runs when the file is changed 
                // fires when @input property is changed
                ThumbComponent.prototype.ngOnChanges = function () {
                    this.thumbWidth = this.rating * 86 / 5;
                };
                // from above the ratingClicked event emitter sends a string back to the outer coponent ( Event-list.component.ts)
                // insert the rating form the component 
                ThumbComponent.prototype.onClick = function () {
                    this.ratingClicked.emit("The rating " + this.rating + " was clicked.");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ThumbComponent.prototype, "rating", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ThumbComponent.prototype, "ratingClicked", void 0);
                ThumbComponent = __decorate([
                    core_1.Component({
                        selector: 'acw-thumb',
                        templateUrl: 'app/shared/thumb.component.html',
                        styleUrls: ['app/shared/thumb.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ThumbComponent);
                return ThumbComponent;
            }());
            exports_1("ThumbComponent", ThumbComponent);
        }
    }
});

//# sourceMappingURL=thumb.component.js.map
