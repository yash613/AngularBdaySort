import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingCallService {

  invokeSortByNameFunction = new EventEmitter();
  invokeSortByAgeFunction = new EventEmitter();
  SortByNameSubsVar: any;
  SortByAgeSubsVar: any;

  constructor() { }

  onSortByNameButtonClick(){
    this.invokeSortByNameFunction.emit();
  }

  onSortByAgeButtonClick(){
    this.invokeSortByAgeFunction.emit();
  }
}
