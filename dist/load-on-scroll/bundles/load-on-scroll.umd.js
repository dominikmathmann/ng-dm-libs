(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('load-on-scroll', ['exports', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global['load-on-scroll'] = {}),global.ng.core,global.rxjs,global.rxjs.operators));
}(this, (function (exports,core,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadOnScollDirective = /** @class */ (function () {
        function LoadOnScollDirective(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.first = 0;
            this.rotateOnLoad = false;
            this.disableOnLoad = false;
            this.bottomPixelBorder = 25;
            this.loadTrigger = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        LoadOnScollDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.setOnLoad(true);
                this.emitCurrentValues();
            };
        /**
         * @return {?}
         */
        LoadOnScollDirective.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.scrollSubscription)
                    this.scrollSubscription.unsubscribe();
                this.scrollSubscription = rxjs.fromEvent(window, 'scroll')
                    .pipe(operators.debounceTime(200))
                    .subscribe(( /**
             * @param {?} e
             * @return {?}
             */function (e) {
                    if (window.scrollY + window.innerHeight + _this.bottomPixelBorder >= document.body.scrollHeight) {
                        _this.onClick();
                    }
                }));
                if (this.loadDoneSubject) {
                    this.loadDoneSubject.subscribe(( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) {
                        _this.setOnLoad(false);
                    }));
                }
            };
        /**
         * @return {?}
         */
        LoadOnScollDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this.setOnLoad(true);
                this.first += this.itemsPerPage;
                this.emitCurrentValues();
            };
        /**
         * @private
         * @return {?}
         */
        LoadOnScollDirective.prototype.emitCurrentValues = /**
         * @private
         * @return {?}
         */
            function () {
                this.loadTrigger.emit({
                    limit: this.itemsPerPage,
                    first: this.first
                });
            };
        /**
         * @private
         * @param {?} load
         * @return {?}
         */
        LoadOnScollDirective.prototype.setOnLoad = /**
         * @private
         * @param {?} load
         * @return {?}
         */
            function (load) {
                if (this.disableOnLoad)
                    this.disable(load);
                if (this.rotateOnLoad)
                    this.rotate(load);
            };
        /**
         * @private
         * @param {?} on
         * @return {?}
         */
        LoadOnScollDirective.prototype.rotate = /**
         * @private
         * @param {?} on
         * @return {?}
         */
            function (on) {
                /** @type {?} */
                var componentToRotate = this.rotateOnLoadChildSelector
                    ? this.el.nativeElement.querySelector(this.rotateOnLoadChildSelector)
                    : this.el.nativeElement;
                if (on)
                    this.renderer.addClass(componentToRotate, 'los-rotate');
                else
                    this.renderer.removeClass(componentToRotate, 'los-rotate');
            };
        /**
         * @private
         * @param {?} on
         * @return {?}
         */
        LoadOnScollDirective.prototype.disable = /**
         * @private
         * @param {?} on
         * @return {?}
         */
            function (on) {
                this.renderer.setProperty(this.el.nativeElement, 'disabled', on);
            };
        LoadOnScollDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[dmLoadOnScoll]'
                    },] }
        ];
        /** @nocollapse */
        LoadOnScollDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        LoadOnScollDirective.propDecorators = {
            first: [{ type: core.Input }],
            itemsPerPage: [{ type: core.Input }],
            loadDoneSubject: [{ type: core.Input }],
            rotateOnLoadChildSelector: [{ type: core.Input }],
            rotateOnLoad: [{ type: core.Input }],
            disableOnLoad: [{ type: core.Input }],
            bottomPixelBorder: [{ type: core.Input }],
            loadTrigger: [{ type: core.Output }],
            onClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return LoadOnScollDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadOnScrollModule = /** @class */ (function () {
        function LoadOnScrollModule() {
        }
        LoadOnScrollModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [LoadOnScollDirective],
                        imports: [],
                        exports: [LoadOnScollDirective]
                    },] }
        ];
        return LoadOnScrollModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LoadOnScrollModule = LoadOnScrollModule;
    exports.ɵa = LoadOnScollDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=load-on-scroll.umd.js.map