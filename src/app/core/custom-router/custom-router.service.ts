import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomRouterService {
  routerEv$ = this.router.events.pipe(share());
  constructor(private router: Router) {}

  getNavigationEndEvent(): Observable<any> {
    return this.routerEv$.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
  }

  processChildData(state, dataKey): any {
    const stateChild = this.getStateChildFromTree(state);
    if (
      stateChild &&
      stateChild.hasOwnProperty('data') &&
      stateChild.data.value.hasOwnProperty(dataKey)
    ) {
      return stateChild.data.value[dataKey];
    } else {
      return null;
    }
  }

  processChildParams(state, dataKey): any {
    const stateChild = this.getStateChildFromTree(state);
    if (
      stateChild &&
      stateChild.hasOwnProperty('params') &&
      stateChild.params.value.hasOwnProperty(dataKey)
    ) {
      return stateChild.params.value[dataKey];
    } else {
      return null;
    }
  }

  processChildSnapshot(state, dataKey): any | null {
    const stateChild = this.getStateChildFromTree(state);
    if (
      stateChild &&
      stateChild.hasOwnProperty('snapshot') &&
      stateChild.snapshot.data.hasOwnProperty(dataKey)
    ) {
      return stateChild.snapshot.data[dataKey];
    } else {
      return null;
    }
  }

  getStateChildFromTree(state: any): any {
    let iteration = 0;
    let stateChild = state;
    while (iteration < 10 && stateChild) {
      if (stateChild.firstChild) {
        stateChild = stateChild.firstChild;
      } else {
        break;
      }

      iteration++;
    }
    return stateChild;
  }
}
