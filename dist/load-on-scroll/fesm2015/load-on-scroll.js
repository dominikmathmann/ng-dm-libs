import { Directive, Input, Output, EventEmitter, ElementRef, Renderer2, HostListener, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadOnScollDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
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
    ngOnInit() {
        this.setOnLoad(true);
        this.emitCurrentValues();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.scrollSubscription)
            this.scrollSubscription.unsubscribe();
        this.scrollSubscription = fromEvent(window, 'scroll')
            .pipe(debounceTime(200))
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            if (window.scrollY + window.innerHeight + this.bottomPixelBorder >= document.body.scrollHeight) {
                this.onClick();
            }
        }));
        if (this.loadDoneSubject) {
            this.loadDoneSubject.subscribe((/**
             * @param {?} e
             * @return {?}
             */
            e => {
                this.setOnLoad(false);
            }));
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        this.setOnLoad(true);
        this.first += this.itemsPerPage;
        this.emitCurrentValues();
    }
    /**
     * @private
     * @return {?}
     */
    emitCurrentValues() {
        this.loadTrigger.emit({
            limit: this.itemsPerPage,
            first: this.first
        });
    }
    /**
     * @private
     * @param {?} load
     * @return {?}
     */
    setOnLoad(load) {
        if (this.disableOnLoad)
            this.disable(load);
        if (this.rotateOnLoad)
            this.rotate(load);
    }
    /**
     * @private
     * @param {?} on
     * @return {?}
     */
    rotate(on) {
        /** @type {?} */
        const componentToRotate = this.rotateOnLoadChildSelector
            ? this.el.nativeElement.querySelector(this.rotateOnLoadChildSelector)
            : this.el.nativeElement;
        if (on)
            this.renderer.addClass(componentToRotate, 'los-rotate');
        else
            this.renderer.removeClass(componentToRotate, 'los-rotate');
    }
    /**
     * @private
     * @param {?} on
     * @return {?}
     */
    disable(on) {
        this.renderer.setProperty(this.el.nativeElement, 'disabled', on);
    }
}
LoadOnScollDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dmLoadOnScoll]'
            },] }
];
/** @nocollapse */
LoadOnScollDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadOnScrollModule {
}
LoadOnScrollModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LoadOnScollDirective],
                imports: [],
                exports: [LoadOnScollDirective]
            },] }
];

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