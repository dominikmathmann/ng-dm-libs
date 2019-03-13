import { Directive, Input, Output, EventEmitter, ElementRef, Renderer2, HostListener, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
        this.loadTrigger = new EventEmitter();
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
        this.scrollSubscription = fromEvent(window, 'scroll')
            .pipe(debounceTime(200))
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (window.scrollY + window.innerHeight + _this.bottomPixelBorder >= document.body.scrollHeight) {
                _this.onClick();
            }
        }));
        if (this.loadDoneSubject) {
            this.loadDoneSubject.subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
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
        { type: Directive, args: [{
                    selector: '[dmLoadOnScoll]'
                },] }
    ];
    /** @nocollapse */
    LoadOnScollDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LoadOnScollDirective.propDecorators = {
        first: [{ type: Input }],
        itemsPerPage: [{ type: Input }],
        loadDoneSubject: [{ type: Input }],
        rotateOnLoadChildSelector: [{ type: Input }],
        rotateOnLoad: [{ type: Input }],
        disableOnLoad: [{ type: Input }],
        bottomPixelBorder: [{ type: Input }],
        loadTrigger: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click',] }]
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
        { type: NgModule, args: [{
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

export { LoadOnScrollModule, LoadOnScollDirective as ɵa };

//# sourceMappingURL=load-on-scroll.js.map