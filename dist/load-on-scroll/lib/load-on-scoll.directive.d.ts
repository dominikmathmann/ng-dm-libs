import { EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
export declare class LoadOnScollDirective {
    private el;
    private renderer;
    first: number;
    itemsPerPage: number;
    loadDoneSubject: Subject<any>;
    rotateOnLoadChildSelector: string;
    rotateOnLoad: boolean;
    disableOnLoad: boolean;
    bottomPixelBorder: number;
    loadTrigger: EventEmitter<any>;
    private scrollSubscription;
    constructor(el: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    onClick(): void;
    private emitCurrentValues;
    private setOnLoad;
    private rotate;
    private disable;
}
