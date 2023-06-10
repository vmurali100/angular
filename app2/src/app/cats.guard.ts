import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class CatsGuard implements CanActivate {

  constructor(private router: Router, private stateService: StateService) { }

  canActivate(): boolean {
    const hasVisitedMice = this.stateService.getVisitedMice();

    if (hasVisitedMice) {
      this.stateService.setVisitedCats(); // Set Cats visited state
      return true;
    } else {
      const hasVisitedCats = this.stateService.getVisitedCats();

      if (hasVisitedCats) {
        return true;
      } else {
        alert('Please visit the Mice page before accessing the Cats page.');
        this.router.navigate(['/home']);
        return false;
      }
    }
  }
}
