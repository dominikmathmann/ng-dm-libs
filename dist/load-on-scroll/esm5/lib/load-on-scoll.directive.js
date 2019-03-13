/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var LoadOnScollDirective = /** @class */ (function () {
    function LoadOnScollDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.first = 0;
        this.rotateOnLoad = false;
        this.disableOnLoad = false;
        this.loadTrigger = new EventEmitter();
    }
    /**
     * @return {?}
     */
    LoadOnScollDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
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
        loadTrigger: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return LoadOnScollDirective;
}());
export { LoadOnScollDirective };
if (false) {
    /** @type {?} */
    LoadOnScollDirective.prototype.first;
    /** @type {?} */
    LoadOnScollDirective.prototype.itemsPerPage;
    /** @type {?} */
    LoadOnScollDirective.prototype.loadDoneSubject;
    /** @type {?} */
    LoadOnScollDirective.prototype.rotateOnLoadChildSelector;
    /** @type {?} */
    LoadOnScollDirective.prototype.rotateOnLoad;
    /** @type {?} */
    LoadOnScollDirective.prototype.disableOnLoad;
    /** @type {?} */
    LoadOnScollDirective.prototype.loadTrigger;
    /**
     * @type {?}
     * @private
     */
    LoadOnScollDirective.prototype.scrollSubscription;
    /**
     * @type {?}
     * @private
     */
    LoadOnScollDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    LoadOnScollDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1vbi1zY29sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2FkLW9uLXNjcm9sbC8iLCJzb3VyY2VzIjpbImxpYi9sb2FkLW9uLXNjb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDO0lBMkJFLDhCQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUF0Qi9ELFVBQUssR0FBVyxDQUFDLENBQUM7UUFZbEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHckIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBSTRCLENBQUM7Ozs7SUFFbkUsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUFBLGlCQWdCQztRQWZDLElBQUksSUFBSSxDQUFDLGtCQUFrQjtZQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QixTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ1YsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JFLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNoQjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUwsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUdELHNDQUFPOzs7SUFEUDtRQUVFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU8sZ0RBQWlCOzs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyx3Q0FBUzs7Ozs7SUFBakIsVUFBa0IsSUFBYTtRQUM3QixJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFTyxxQ0FBTTs7Ozs7SUFBZCxVQUFlLEVBQVc7O1lBQ2xCLGlCQUFpQixHQUFHLElBQUksQ0FBQyx5QkFBeUI7WUFDdEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFDckUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtRQUV6QixJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQzs7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRU8sc0NBQU87Ozs7O0lBQWYsVUFBZ0IsRUFBVztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBakZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFOZ0QsVUFBVTtnQkFBRSxTQUFTOzs7d0JBUW5FLEtBQUs7K0JBR0wsS0FBSztrQ0FHTCxLQUFLOzRDQUdMLEtBQUs7K0JBR0wsS0FBSztnQ0FHTCxLQUFLOzhCQUdMLE1BQU07MEJBNkJOLFlBQVksU0FBQyxPQUFPOztJQStCdkIsMkJBQUM7Q0FBQSxBQWxGRCxJQWtGQztTQS9FWSxvQkFBb0I7OztJQUMvQixxQ0FDa0I7O0lBRWxCLDRDQUNxQjs7SUFFckIsK0NBQzhCOztJQUU5Qix5REFDa0M7O0lBRWxDLDRDQUNxQjs7SUFFckIsNkNBQ3NCOztJQUV0QiwyQ0FDc0M7Ozs7O0lBRXRDLGtEQUF5Qzs7Ozs7SUFFN0Isa0NBQXNCOzs7OztJQUFFLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RtTG9hZE9uU2NvbGxdJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkT25TY29sbERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIGZpcnN0OiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGxvYWREb25lU3ViamVjdDogU3ViamVjdDxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHJvdGF0ZU9uTG9hZENoaWxkU2VsZWN0b3I6IHN0cmluZztcblxuICBASW5wdXQoKVxuICByb3RhdGVPbkxvYWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBkaXNhYmxlT25Mb2FkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGxvYWRUcmlnZ2VyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBzY3JvbGxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbWl0Q3VycmVudFZhbHVlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsU3Vic2NyaXB0aW9uKSB0aGlzLnNjcm9sbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5zY3JvbGxTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZShlID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0ID49IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubG9hZERvbmVTdWJqZWN0KSB7XG4gICAgICB0aGlzLmxvYWREb25lU3ViamVjdC5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0T25Mb2FkKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnNldE9uTG9hZCh0cnVlKTtcbiAgICB0aGlzLmZpcnN0ICs9IHRoaXMuaXRlbXNQZXJQYWdlO1xuICAgIHRoaXMuZW1pdEN1cnJlbnRWYWx1ZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdEN1cnJlbnRWYWx1ZXMoKSB7XG4gICAgdGhpcy5sb2FkVHJpZ2dlci5lbWl0KHtcbiAgICAgIGxpbWl0OiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICAgIGZpcnN0OiB0aGlzLmZpcnN0XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldE9uTG9hZChsb2FkOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZU9uTG9hZCkgdGhpcy5kaXNhYmxlKGxvYWQpO1xuICAgIGlmICh0aGlzLnJvdGF0ZU9uTG9hZCkgdGhpcy5yb3RhdGUobG9hZCk7XG4gIH1cblxuICBwcml2YXRlIHJvdGF0ZShvbjogYm9vbGVhbikge1xuICAgIGNvbnN0IGNvbXBvbmVudFRvUm90YXRlID0gdGhpcy5yb3RhdGVPbkxvYWRDaGlsZFNlbGVjdG9yXG4gICAgICA/IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucm90YXRlT25Mb2FkQ2hpbGRTZWxlY3RvcilcbiAgICAgIDogdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKG9uKSB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNvbXBvbmVudFRvUm90YXRlLCAnbG9zLXJvdGF0ZScpO1xuICAgIGVsc2UgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhjb21wb25lbnRUb1JvdGF0ZSwgJ2xvcy1yb3RhdGUnKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzYWJsZShvbjogYm9vbGVhbikge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBvbik7XG4gIH1cbn1cbiJdfQ==