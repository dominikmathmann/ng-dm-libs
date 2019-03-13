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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1vbi1zY29sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2FkLW9uLXNjcm9sbC8iLCJzb3VyY2VzIjpbImxpYi9sb2FkLW9uLXNjb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDO0lBOEJFLDhCQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUF6Qi9ELFVBQUssR0FBVyxDQUFDLENBQUM7UUFZbEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHckIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBR3ZCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUk0QixDQUFDOzs7O0lBRW5FLDhDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUFBLGlCQWdCQztRQWZDLElBQUksSUFBSSxDQUFDLGtCQUFrQjtZQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QixTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ1YsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUM5RixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVMLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFBLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFHRCxzQ0FBTzs7O0lBRFA7UUFFRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLGdEQUFpQjs7OztJQUF6QjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sd0NBQVM7Ozs7O0lBQWpCLFVBQWtCLElBQWE7UUFDN0IsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRU8scUNBQU07Ozs7O0lBQWQsVUFBZSxFQUFXOztZQUNsQixpQkFBaUIsR0FBRyxJQUFJLENBQUMseUJBQXlCO1lBQ3RELENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1lBQ3JFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFFekIsSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUM7O1lBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUVPLHNDQUFPOzs7OztJQUFmLFVBQWdCLEVBQVc7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQXJGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBTmdELFVBQVU7Z0JBQUUsU0FBUzs7O3dCQVFuRSxLQUFLOytCQUdMLEtBQUs7a0NBR0wsS0FBSzs0Q0FHTCxLQUFLOytCQUdMLEtBQUs7Z0NBR0wsS0FBSztvQ0FHTCxLQUFLOzhCQUdMLE1BQU07MEJBOEJOLFlBQVksU0FBQyxPQUFPOztJQStCdkIsMkJBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQW5GWSxvQkFBb0I7OztJQUMvQixxQ0FDa0I7O0lBRWxCLDRDQUNxQjs7SUFFckIsK0NBQzhCOztJQUU5Qix5REFDa0M7O0lBRWxDLDRDQUNxQjs7SUFFckIsNkNBQ3NCOztJQUV0QixpREFDdUI7O0lBRXZCLDJDQUNzQzs7Ozs7SUFFdEMsa0RBQXlDOzs7OztJQUU3QixrQ0FBc0I7Ozs7O0lBQUUsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZG1Mb2FkT25TY29sbF0nXG59KVxuZXhwb3J0IGNsYXNzIExvYWRPblNjb2xsRGlyZWN0aXZlIHtcbiAgQElucHV0KClcbiAgZmlyc3Q6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgbG9hZERvbmVTdWJqZWN0OiBTdWJqZWN0PGFueT47XG5cbiAgQElucHV0KClcbiAgcm90YXRlT25Mb2FkQ2hpbGRTZWxlY3Rvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHJvdGF0ZU9uTG9hZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVPbkxvYWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBib3R0b21QaXhlbEJvcmRlciA9IDI1O1xuXG4gIEBPdXRwdXQoKVxuICBsb2FkVHJpZ2dlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgc2Nyb2xsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnNldE9uTG9hZCh0cnVlKTtcbiAgICB0aGlzLmVtaXRDdXJyZW50VmFsdWVzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxTdWJzY3JpcHRpb24pIHRoaXMuc2Nyb2xsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLnNjcm9sbFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpXG4gICAgICAuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLmJvdHRvbVBpeGVsQm9yZGVyID49IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubG9hZERvbmVTdWJqZWN0KSB7XG4gICAgICB0aGlzLmxvYWREb25lU3ViamVjdC5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0T25Mb2FkKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnNldE9uTG9hZCh0cnVlKTtcbiAgICB0aGlzLmZpcnN0ICs9IHRoaXMuaXRlbXNQZXJQYWdlO1xuICAgIHRoaXMuZW1pdEN1cnJlbnRWYWx1ZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdEN1cnJlbnRWYWx1ZXMoKSB7XG4gICAgdGhpcy5sb2FkVHJpZ2dlci5lbWl0KHtcbiAgICAgIGxpbWl0OiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICAgIGZpcnN0OiB0aGlzLmZpcnN0XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldE9uTG9hZChsb2FkOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZU9uTG9hZCkgdGhpcy5kaXNhYmxlKGxvYWQpO1xuICAgIGlmICh0aGlzLnJvdGF0ZU9uTG9hZCkgdGhpcy5yb3RhdGUobG9hZCk7XG4gIH1cblxuICBwcml2YXRlIHJvdGF0ZShvbjogYm9vbGVhbikge1xuICAgIGNvbnN0IGNvbXBvbmVudFRvUm90YXRlID0gdGhpcy5yb3RhdGVPbkxvYWRDaGlsZFNlbGVjdG9yXG4gICAgICA/IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucm90YXRlT25Mb2FkQ2hpbGRTZWxlY3RvcilcbiAgICAgIDogdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKG9uKSB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNvbXBvbmVudFRvUm90YXRlLCAnbG9zLXJvdGF0ZScpO1xuICAgIGVsc2UgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhjb21wb25lbnRUb1JvdGF0ZSwgJ2xvcy1yb3RhdGUnKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzYWJsZShvbjogYm9vbGVhbikge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBvbik7XG4gIH1cbn1cbiJdfQ==