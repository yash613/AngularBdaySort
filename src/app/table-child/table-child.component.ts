import { Component, Injector, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SortingCallService } from '../sorting-call.service';


@Component({
  selector: 'app-table-child',
  templateUrl: './table-child.component.html',
  styleUrls: ['./table-child.component.css']
})
export class TableChildComponent implements OnInit {

  userData: any = [];

  constructor(private http: HttpClient, private sortingCallService: SortingCallService) { }

  ngOnInit(): void {
    this.http.get("assets/records.json").subscribe((data) => {
      this.userData = data;
    })

    this.sortingCallService.SortByNameSubsVar = this.sortingCallService.invokeSortByNameFunction.subscribe(() => {
      this.sortByName();
    })

    this.sortingCallService.SortByAgeSubsVar = this.sortingCallService.invokeSortByAgeFunction.subscribe(() => {
      this.sortByAge();
    })

  }

  sortByName(): void {
    this.userData = this.userData.sort((obj1: any, obj2: any) => {
      if(obj1.name > obj2.name){
        return 1;
      }
      else if(obj1.name < obj2.name){
        return -1;
      }
      return 0;
    })
  }

  sortByAge(): void {
    this.userData = this.userData.sort((obj1: any, obj2: any) => {
      if(Date.parse(obj1.date) < Date.parse(obj2.date)){
        return 1;
      }

      else if(Date.parse(obj1.date) > Date.parse(obj2.date)){
        return -1;
      }
      return 0;
    })
  }
}
