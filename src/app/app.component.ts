import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'ngdm-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  loaded = new Subject();

  entries = new Array(75);

  constructor() {}

  load(event) {
    of({})
      .pipe(delay(5000))
      .subscribe(e => {
        //load data here
        this.entries.push(...new Array(20));
        this.loaded.next();
      });
  }
}
