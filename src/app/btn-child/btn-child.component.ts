import { Component, OnInit } from '@angular/core';
import { SortingCallService } from '../sorting-call.service';

@Component({
  selector: 'app-btn-child',
  templateUrl: './btn-child.component.html',
  styleUrls: ['./btn-child.component.css']
})
export class BtnChildComponent implements OnInit {

  constructor( private eventEmitterService: SortingCallService) { }

  ngOnInit(): void {
  }

  sortByName(): void{
    this.eventEmitterService.onSortByNameButtonClick();
  }

  sortByAge(): void {
    this.eventEmitterService.onSortByAgeButtonClick();
  }
}
