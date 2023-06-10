import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class MiceGuard implements CanActivate {

  constructor(private router: Router, private stateService: StateService) { }

  canActivate(): boolean {
    const hasVisitedMice = this.stateService.getVisitedMice();

    if (hasVisitedMice) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
