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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1vbi1zY29sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2FkLW9uLXNjcm9sbC8iLCJzb3VyY2VzIjpbImxpYi9sb2FkLW9uLXNjb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzlDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBMkIvQixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUF6Qi9ELFVBQUssR0FBVyxDQUFDLENBQUM7UUFZbEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHckIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBR3ZCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUk0QixDQUFDOzs7O0lBRW5FLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsa0JBQWtCO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5FLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUNiLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDOUYsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFTCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFHRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxTQUFTLENBQUMsSUFBYTtRQUM3QixJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsRUFBVzs7Y0FDbEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QjtZQUN0RCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztZQUNyRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1FBRXpCLElBQUksRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDOztZQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFTyxPQUFPLENBQUMsRUFBVztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBckZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBTmdELFVBQVU7WUFBRSxTQUFTOzs7b0JBUW5FLEtBQUs7MkJBR0wsS0FBSzs4QkFHTCxLQUFLO3dDQUdMLEtBQUs7MkJBR0wsS0FBSzs0QkFHTCxLQUFLO2dDQUdMLEtBQUs7MEJBR0wsTUFBTTtzQkE4Qk4sWUFBWSxTQUFDLE9BQU87Ozs7SUFuRHJCLHFDQUNrQjs7SUFFbEIsNENBQ3FCOztJQUVyQiwrQ0FDOEI7O0lBRTlCLHlEQUNrQzs7SUFFbEMsNENBQ3FCOztJQUVyQiw2Q0FDc0I7O0lBRXRCLGlEQUN1Qjs7SUFFdkIsMkNBQ3NDOzs7OztJQUV0QyxrREFBeUM7Ozs7O0lBRTdCLGtDQUFzQjs7Ozs7SUFBRSx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkbUxvYWRPblNjb2xsXSdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZE9uU2NvbGxEaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBmaXJzdDogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBpdGVtc1BlclBhZ2U6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBsb2FkRG9uZVN1YmplY3Q6IFN1YmplY3Q8YW55PjtcblxuICBASW5wdXQoKVxuICByb3RhdGVPbkxvYWRDaGlsZFNlbGVjdG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcm90YXRlT25Mb2FkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZGlzYWJsZU9uTG9hZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGJvdHRvbVBpeGVsQm9yZGVyID0gMjU7XG5cbiAgQE91dHB1dCgpXG4gIGxvYWRUcmlnZ2VyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBzY3JvbGxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRPbkxvYWQodHJ1ZSk7XG4gICAgdGhpcy5lbWl0Q3VycmVudFZhbHVlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsU3Vic2NyaXB0aW9uKSB0aGlzLnNjcm9sbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5zY3JvbGxTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZShlID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0ICsgdGhpcy5ib3R0b21QaXhlbEJvcmRlciA+PSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCkge1xuICAgICAgICAgIHRoaXMub25DbGljaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGlmICh0aGlzLmxvYWREb25lU3ViamVjdCkge1xuICAgICAgdGhpcy5sb2FkRG9uZVN1YmplY3Quc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgICB0aGlzLnNldE9uTG9hZChmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRPbkxvYWQodHJ1ZSk7XG4gICAgdGhpcy5maXJzdCArPSB0aGlzLml0ZW1zUGVyUGFnZTtcbiAgICB0aGlzLmVtaXRDdXJyZW50VmFsdWVzKCk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRDdXJyZW50VmFsdWVzKCkge1xuICAgIHRoaXMubG9hZFRyaWdnZXIuZW1pdCh7XG4gICAgICBsaW1pdDogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICBmaXJzdDogdGhpcy5maXJzdFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRPbkxvYWQobG9hZDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmRpc2FibGVPbkxvYWQpIHRoaXMuZGlzYWJsZShsb2FkKTtcbiAgICBpZiAodGhpcy5yb3RhdGVPbkxvYWQpIHRoaXMucm90YXRlKGxvYWQpO1xuICB9XG5cbiAgcHJpdmF0ZSByb3RhdGUob246IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjb21wb25lbnRUb1JvdGF0ZSA9IHRoaXMucm90YXRlT25Mb2FkQ2hpbGRTZWxlY3RvclxuICAgICAgPyB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnJvdGF0ZU9uTG9hZENoaWxkU2VsZWN0b3IpXG4gICAgICA6IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuICAgIGlmIChvbikgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjb21wb25lbnRUb1JvdGF0ZSwgJ2xvcy1yb3RhdGUnKTtcbiAgICBlbHNlIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoY29tcG9uZW50VG9Sb3RhdGUsICdsb3Mtcm90YXRlJyk7XG4gIH1cblxuICBwcml2YXRlIGRpc2FibGUob246IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgb24pO1xuICB9XG59XG4iXX0=