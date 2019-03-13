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
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1vbi1zY29sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2FkLW9uLXNjcm9sbC8iLCJzb3VyY2VzIjpbImxpYi9sb2FkLW9uLXNjb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzlDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBd0IvQixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUF0Qi9ELFVBQUssR0FBVyxDQUFDLENBQUM7UUFZbEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHckIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBSTRCLENBQUM7Ozs7SUFFbkUsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsa0JBQWtCO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5FLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUNiLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVMLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUdELE9BQU87UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLGlCQUFpQjtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxJQUFhO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQyxFQUFXOztjQUNsQixpQkFBaUIsR0FBRyxJQUFJLENBQUMseUJBQXlCO1lBQ3RELENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1lBQ3JFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFFekIsSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUM7O1lBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUVPLE9BQU8sQ0FBQyxFQUFXO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7WUFqRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUFOZ0QsVUFBVTtZQUFFLFNBQVM7OztvQkFRbkUsS0FBSzsyQkFHTCxLQUFLOzhCQUdMLEtBQUs7d0NBR0wsS0FBSzsyQkFHTCxLQUFLOzRCQUdMLEtBQUs7MEJBR0wsTUFBTTtzQkE2Qk4sWUFBWSxTQUFDLE9BQU87Ozs7SUEvQ3JCLHFDQUNrQjs7SUFFbEIsNENBQ3FCOztJQUVyQiwrQ0FDOEI7O0lBRTlCLHlEQUNrQzs7SUFFbEMsNENBQ3FCOztJQUVyQiw2Q0FDc0I7O0lBRXRCLDJDQUNzQzs7Ozs7SUFFdEMsa0RBQXlDOzs7OztJQUU3QixrQ0FBc0I7Ozs7O0lBQUUsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZG1Mb2FkT25TY29sbF0nXG59KVxuZXhwb3J0IGNsYXNzIExvYWRPblNjb2xsRGlyZWN0aXZlIHtcbiAgQElucHV0KClcbiAgZmlyc3Q6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgbG9hZERvbmVTdWJqZWN0OiBTdWJqZWN0PGFueT47XG5cbiAgQElucHV0KClcbiAgcm90YXRlT25Mb2FkQ2hpbGRTZWxlY3Rvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHJvdGF0ZU9uTG9hZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVPbkxvYWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgbG9hZFRyaWdnZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIHNjcm9sbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVtaXRDdXJyZW50VmFsdWVzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxTdWJzY3JpcHRpb24pIHRoaXMuc2Nyb2xsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLnNjcm9sbFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpXG4gICAgICAuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPj0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5sb2FkRG9uZVN1YmplY3QpIHtcbiAgICAgIHRoaXMubG9hZERvbmVTdWJqZWN0LnN1YnNjcmliZShlID0+IHtcbiAgICAgICAgdGhpcy5zZXRPbkxvYWQoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuc2V0T25Mb2FkKHRydWUpO1xuICAgIHRoaXMuZmlyc3QgKz0gdGhpcy5pdGVtc1BlclBhZ2U7XG4gICAgdGhpcy5lbWl0Q3VycmVudFZhbHVlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0Q3VycmVudFZhbHVlcygpIHtcbiAgICB0aGlzLmxvYWRUcmlnZ2VyLmVtaXQoe1xuICAgICAgbGltaXQ6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgICAgZmlyc3Q6IHRoaXMuZmlyc3RcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0T25Mb2FkKGxvYWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlT25Mb2FkKSB0aGlzLmRpc2FibGUobG9hZCk7XG4gICAgaWYgKHRoaXMucm90YXRlT25Mb2FkKSB0aGlzLnJvdGF0ZShsb2FkKTtcbiAgfVxuXG4gIHByaXZhdGUgcm90YXRlKG9uOiBib29sZWFuKSB7XG4gICAgY29uc3QgY29tcG9uZW50VG9Sb3RhdGUgPSB0aGlzLnJvdGF0ZU9uTG9hZENoaWxkU2VsZWN0b3JcbiAgICAgID8gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5yb3RhdGVPbkxvYWRDaGlsZFNlbGVjdG9yKVxuICAgICAgOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAob24pIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY29tcG9uZW50VG9Sb3RhdGUsICdsb3Mtcm90YXRlJyk7XG4gICAgZWxzZSB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGNvbXBvbmVudFRvUm90YXRlLCAnbG9zLXJvdGF0ZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNhYmxlKG9uOiBib29sZWFuKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIG9uKTtcbiAgfVxufVxuIl19