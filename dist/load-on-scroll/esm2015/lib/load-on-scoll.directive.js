/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class LoadOnScollDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1vbi1zY29sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2FkLW9uLXNjcm9sbC8iLCJzb3VyY2VzIjpbImxpYi9sb2FkLW9uLXNjb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzlDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBMkIvQixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUF6Qi9ELFVBQUssR0FBVyxDQUFDLENBQUM7UUFZbEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHckIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBR3ZCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUk0QixDQUFDOzs7O0lBRW5FLFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGtCQUFrQjtZQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QixTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQzlGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNoQjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUwsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBR0QsT0FBTztRQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLElBQWE7UUFDN0IsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRU8sTUFBTSxDQUFDLEVBQVc7O2NBQ2xCLGlCQUFpQixHQUFHLElBQUksQ0FBQyx5QkFBeUI7WUFDdEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFDckUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtRQUV6QixJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQzs7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLEVBQVc7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7OztZQXBGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7OztZQU5nRCxVQUFVO1lBQUUsU0FBUzs7O29CQVFuRSxLQUFLOzJCQUdMLEtBQUs7OEJBR0wsS0FBSzt3Q0FHTCxLQUFLOzJCQUdMLEtBQUs7NEJBR0wsS0FBSztnQ0FHTCxLQUFLOzBCQUdMLE1BQU07c0JBNkJOLFlBQVksU0FBQyxPQUFPOzs7O0lBbERyQixxQ0FDa0I7O0lBRWxCLDRDQUNxQjs7SUFFckIsK0NBQzhCOztJQUU5Qix5REFDa0M7O0lBRWxDLDRDQUNxQjs7SUFFckIsNkNBQ3NCOztJQUV0QixpREFDdUI7O0lBRXZCLDJDQUNzQzs7Ozs7SUFFdEMsa0RBQXlDOzs7OztJQUU3QixrQ0FBc0I7Ozs7O0lBQUUsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZG1Mb2FkT25TY29sbF0nXG59KVxuZXhwb3J0IGNsYXNzIExvYWRPblNjb2xsRGlyZWN0aXZlIHtcbiAgQElucHV0KClcbiAgZmlyc3Q6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgbG9hZERvbmVTdWJqZWN0OiBTdWJqZWN0PGFueT47XG5cbiAgQElucHV0KClcbiAgcm90YXRlT25Mb2FkQ2hpbGRTZWxlY3Rvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHJvdGF0ZU9uTG9hZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVPbkxvYWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBib3R0b21QaXhlbEJvcmRlciA9IDI1O1xuXG4gIEBPdXRwdXQoKVxuICBsb2FkVHJpZ2dlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgc2Nyb2xsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZW1pdEN1cnJlbnRWYWx1ZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLnNjcm9sbFN1YnNjcmlwdGlvbikgdGhpcy5zY3JvbGxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuc2Nyb2xsU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMjAwKSlcbiAgICAgIC5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMuYm90dG9tUGl4ZWxCb3JkZXIgPj0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5sb2FkRG9uZVN1YmplY3QpIHtcbiAgICAgIHRoaXMubG9hZERvbmVTdWJqZWN0LnN1YnNjcmliZShlID0+IHtcbiAgICAgICAgdGhpcy5zZXRPbkxvYWQoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuc2V0T25Mb2FkKHRydWUpO1xuICAgIHRoaXMuZmlyc3QgKz0gdGhpcy5pdGVtc1BlclBhZ2U7XG4gICAgdGhpcy5lbWl0Q3VycmVudFZhbHVlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0Q3VycmVudFZhbHVlcygpIHtcbiAgICB0aGlzLmxvYWRUcmlnZ2VyLmVtaXQoe1xuICAgICAgbGltaXQ6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgICAgZmlyc3Q6IHRoaXMuZmlyc3RcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0T25Mb2FkKGxvYWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlT25Mb2FkKSB0aGlzLmRpc2FibGUobG9hZCk7XG4gICAgaWYgKHRoaXMucm90YXRlT25Mb2FkKSB0aGlzLnJvdGF0ZShsb2FkKTtcbiAgfVxuXG4gIHByaXZhdGUgcm90YXRlKG9uOiBib29sZWFuKSB7XG4gICAgY29uc3QgY29tcG9uZW50VG9Sb3RhdGUgPSB0aGlzLnJvdGF0ZU9uTG9hZENoaWxkU2VsZWN0b3JcbiAgICAgID8gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5yb3RhdGVPbkxvYWRDaGlsZFNlbGVjdG9yKVxuICAgICAgOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAob24pIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY29tcG9uZW50VG9Sb3RhdGUsICdsb3Mtcm90YXRlJyk7XG4gICAgZWxzZSB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGNvbXBvbmVudFRvUm90YXRlLCAnbG9zLXJvdGF0ZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNhYmxlKG9uOiBib29sZWFuKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIG9uKTtcbiAgfVxufVxuIl19