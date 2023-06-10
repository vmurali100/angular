import { Component } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-mice',
  templateUrl: './mice.component.html',
  styleUrls: ['./mice.component.css']
})
export class MiceComponent {
  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.setVisitedMice();
  }
}
