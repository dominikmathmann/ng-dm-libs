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
    ngAfterViewInit() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1vbi1zY29sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2FkLW9uLXNjcm9sbC8iLCJzb3VyY2VzIjpbImxpYi9sb2FkLW9uLXNjb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzlDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBMkIvQixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUF6Qi9ELFVBQUssR0FBVyxDQUFDLENBQUM7UUFZbEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHckIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBR3ZCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUk0QixDQUFDOzs7O0lBRW5FLGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsa0JBQWtCO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5FLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUNiLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDOUYsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFTCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFHRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxTQUFTLENBQUMsSUFBYTtRQUM3QixJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsRUFBVzs7Y0FDbEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QjtZQUN0RCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztZQUNyRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1FBRXpCLElBQUksRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDOztZQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFTyxPQUFPLENBQUMsRUFBVztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBckZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBTmdELFVBQVU7WUFBRSxTQUFTOzs7b0JBUW5FLEtBQUs7MkJBR0wsS0FBSzs4QkFHTCxLQUFLO3dDQUdMLEtBQUs7MkJBR0wsS0FBSzs0QkFHTCxLQUFLO2dDQUdMLEtBQUs7MEJBR0wsTUFBTTtzQkE4Qk4sWUFBWSxTQUFDLE9BQU87Ozs7SUFuRHJCLHFDQUNrQjs7SUFFbEIsNENBQ3FCOztJQUVyQiwrQ0FDOEI7O0lBRTlCLHlEQUNrQzs7SUFFbEMsNENBQ3FCOztJQUVyQiw2Q0FDc0I7O0lBRXRCLGlEQUN1Qjs7SUFFdkIsMkNBQ3NDOzs7OztJQUV0QyxrREFBeUM7Ozs7O0lBRTdCLGtDQUFzQjs7Ozs7SUFBRSx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkbUxvYWRPblNjb2xsXSdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZE9uU2NvbGxEaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBmaXJzdDogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBpdGVtc1BlclBhZ2U6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBsb2FkRG9uZVN1YmplY3Q6IFN1YmplY3Q8YW55PjtcblxuICBASW5wdXQoKVxuICByb3RhdGVPbkxvYWRDaGlsZFNlbGVjdG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcm90YXRlT25Mb2FkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZGlzYWJsZU9uTG9hZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGJvdHRvbVBpeGVsQm9yZGVyID0gMjU7XG5cbiAgQE91dHB1dCgpXG4gIGxvYWRUcmlnZ2VyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBzY3JvbGxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc2V0T25Mb2FkKHRydWUpO1xuICAgIHRoaXMuZW1pdEN1cnJlbnRWYWx1ZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLnNjcm9sbFN1YnNjcmlwdGlvbikgdGhpcy5zY3JvbGxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuc2Nyb2xsU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMjAwKSlcbiAgICAgIC5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMuYm90dG9tUGl4ZWxCb3JkZXIgPj0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5sb2FkRG9uZVN1YmplY3QpIHtcbiAgICAgIHRoaXMubG9hZERvbmVTdWJqZWN0LnN1YnNjcmliZShlID0+IHtcbiAgICAgICAgdGhpcy5zZXRPbkxvYWQoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuc2V0T25Mb2FkKHRydWUpO1xuICAgIHRoaXMuZmlyc3QgKz0gdGhpcy5pdGVtc1BlclBhZ2U7XG4gICAgdGhpcy5lbWl0Q3VycmVudFZhbHVlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0Q3VycmVudFZhbHVlcygpIHtcbiAgICB0aGlzLmxvYWRUcmlnZ2VyLmVtaXQoe1xuICAgICAgbGltaXQ6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgICAgZmlyc3Q6IHRoaXMuZmlyc3RcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0T25Mb2FkKGxvYWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlT25Mb2FkKSB0aGlzLmRpc2FibGUobG9hZCk7XG4gICAgaWYgKHRoaXMucm90YXRlT25Mb2FkKSB0aGlzLnJvdGF0ZShsb2FkKTtcbiAgfVxuXG4gIHByaXZhdGUgcm90YXRlKG9uOiBib29sZWFuKSB7XG4gICAgY29uc3QgY29tcG9uZW50VG9Sb3RhdGUgPSB0aGlzLnJvdGF0ZU9uTG9hZENoaWxkU2VsZWN0b3JcbiAgICAgID8gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5yb3RhdGVPbkxvYWRDaGlsZFNlbGVjdG9yKVxuICAgICAgOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAob24pIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY29tcG9uZW50VG9Sb3RhdGUsICdsb3Mtcm90YXRlJyk7XG4gICAgZWxzZSB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGNvbXBvbmVudFRvUm90YXRlLCAnbG9zLXJvdGF0ZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNhYmxlKG9uOiBib29sZWFuKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIG9uKTtcbiAgfVxufVxuIl19