import { Component, OnInit,OnChanges } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { VARIABLE } from '../variable';
import { ListService } from './list.service';

@Component({
  selector: 'my-lists',
  templateUrl: 'app/display/lists.component.html',
  styleUrls:  ['app/display/lists.component.css']
})
export class ListsComponent implements OnInit,OnChanges {
  lists: VARIABLE[];
  selectedList: VARIABLE;
  test : Boolean = false;
ngOnChanges(){}
  constructor(
    private _router: Router,
    private _listService: ListService) { }

  getLists() {
    this._listService.getLists().then(lists => this.lists = lists);
  }

  ngOnInit() {
    this.getLists();
  }

  onSelect(list: VARIABLE) { this.selectedList = list; }

  gotoDetail() {
    this._router.navigate(['ListDetail', { id: this.selectedList.id }]);
  }
  markTodo($event: any, list: VARIABLE) {
 
         if ($event == true) {
            // console.log("completed");
 
             this._listService.markTodo(list);
             return $event;
         }
         else {
             //console.log("not completed");
         }
 
     }
}


