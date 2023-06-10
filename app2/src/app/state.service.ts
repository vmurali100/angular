import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private hasVisitedMice: boolean = false;
  private hasVisitedCats: boolean = false;

  setVisitedMice() {
    this.hasVisitedMice = true;
  }

  getVisitedMice(): boolean {
    return this.hasVisitedMice;
  }

  setVisitedCats() {
    this.hasVisitedCats = true;
  }

  getVisitedCats(): boolean {
    return this.hasVisitedCats;
  }
}
