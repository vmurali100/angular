import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showCatsTab = false;
  showMiceTab = false;
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateTabVisibility(event.url);
      }
    });
  }
  updateTabVisibility(url: string) {
    switch (url) {
      case '/dogs':
        this.showCatsTab = false;
        this.showMiceTab = false;
        break;
      case '/cats':
        this.showCatsTab = true;
        this.showMiceTab = false;
        break;
      case '/mice':
        this.showCatsTab = true;
        this.showMiceTab = true;
        break;
      default:
        this.showCatsTab = false;
        this.showMiceTab = false;
        break;
    }
  }
}
