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
        this.bottomPixelBorder = 25;
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
    LoadOnScollDirective.prototype.bottomPixelBorder;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1vbi1zY29sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2FkLW9uLXNjcm9sbC8iLCJzb3VyY2VzIjpbImxpYi9sb2FkLW9uLXNjb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDO0lBOEJFLDhCQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUF6Qi9ELFVBQUssR0FBVyxDQUFDLENBQUM7UUFZbEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHckIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBR3ZCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUk0QixDQUFDOzs7O0lBRW5FLHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLElBQUksQ0FBQyxrQkFBa0I7WUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkIsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQztZQUNWLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDOUYsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFTCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxDQUFDO2dCQUM5QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBR0Qsc0NBQU87OztJQURQO1FBRUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyxnREFBaUI7Ozs7SUFBekI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLHdDQUFTOzs7OztJQUFqQixVQUFrQixJQUFhO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVPLHFDQUFNOzs7OztJQUFkLFVBQWUsRUFBVzs7WUFDbEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QjtZQUN0RCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztZQUNyRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1FBRXpCLElBQUksRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDOztZQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFTyxzQ0FBTzs7Ozs7SUFBZixVQUFnQixFQUFXO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOztnQkFwRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzs7O2dCQU5nRCxVQUFVO2dCQUFFLFNBQVM7Ozt3QkFRbkUsS0FBSzsrQkFHTCxLQUFLO2tDQUdMLEtBQUs7NENBR0wsS0FBSzsrQkFHTCxLQUFLO2dDQUdMLEtBQUs7b0NBR0wsS0FBSzs4QkFHTCxNQUFNOzBCQTZCTixZQUFZLFNBQUMsT0FBTzs7SUErQnZCLDJCQUFDO0NBQUEsQUFyRkQsSUFxRkM7U0FsRlksb0JBQW9COzs7SUFDL0IscUNBQ2tCOztJQUVsQiw0Q0FDcUI7O0lBRXJCLCtDQUM4Qjs7SUFFOUIseURBQ2tDOztJQUVsQyw0Q0FDcUI7O0lBRXJCLDZDQUNzQjs7SUFFdEIsaURBQ3VCOztJQUV2QiwyQ0FDc0M7Ozs7O0lBRXRDLGtEQUF5Qzs7Ozs7SUFFN0Isa0NBQXNCOzs7OztJQUFFLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RtTG9hZE9uU2NvbGxdJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkT25TY29sbERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIGZpcnN0OiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGxvYWREb25lU3ViamVjdDogU3ViamVjdDxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHJvdGF0ZU9uTG9hZENoaWxkU2VsZWN0b3I6IHN0cmluZztcblxuICBASW5wdXQoKVxuICByb3RhdGVPbkxvYWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBkaXNhYmxlT25Mb2FkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgYm90dG9tUGl4ZWxCb3JkZXIgPSAyNTtcblxuICBAT3V0cHV0KClcbiAgbG9hZFRyaWdnZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIHNjcm9sbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVtaXRDdXJyZW50VmFsdWVzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxTdWJzY3JpcHRpb24pIHRoaXMuc2Nyb2xsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLnNjcm9sbFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpXG4gICAgICAuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLmJvdHRvbVBpeGVsQm9yZGVyID49IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubG9hZERvbmVTdWJqZWN0KSB7XG4gICAgICB0aGlzLmxvYWREb25lU3ViamVjdC5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0T25Mb2FkKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnNldE9uTG9hZCh0cnVlKTtcbiAgICB0aGlzLmZpcnN0ICs9IHRoaXMuaXRlbXNQZXJQYWdlO1xuICAgIHRoaXMuZW1pdEN1cnJlbnRWYWx1ZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdEN1cnJlbnRWYWx1ZXMoKSB7XG4gICAgdGhpcy5sb2FkVHJpZ2dlci5lbWl0KHtcbiAgICAgIGxpbWl0OiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICAgIGZpcnN0OiB0aGlzLmZpcnN0XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldE9uTG9hZChsb2FkOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZU9uTG9hZCkgdGhpcy5kaXNhYmxlKGxvYWQpO1xuICAgIGlmICh0aGlzLnJvdGF0ZU9uTG9hZCkgdGhpcy5yb3RhdGUobG9hZCk7XG4gIH1cblxuICBwcml2YXRlIHJvdGF0ZShvbjogYm9vbGVhbikge1xuICAgIGNvbnN0IGNvbXBvbmVudFRvUm90YXRlID0gdGhpcy5yb3RhdGVPbkxvYWRDaGlsZFNlbGVjdG9yXG4gICAgICA/IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucm90YXRlT25Mb2FkQ2hpbGRTZWxlY3RvcilcbiAgICAgIDogdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKG9uKSB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNvbXBvbmVudFRvUm90YXRlLCAnbG9zLXJvdGF0ZScpO1xuICAgIGVsc2UgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhjb21wb25lbnRUb1JvdGF0ZSwgJ2xvcy1yb3RhdGUnKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzYWJsZShvbjogYm9vbGVhbikge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBvbik7XG4gIH1cbn1cbiJdfQ==