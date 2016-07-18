import { Component, OnInit,OnChanges,Input  } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { VARIABLE } from '../variable';
import { ListService } from './list.service';
import * as _ from 'lodash';

@Component({
  selector: 'my-lists',
  templateUrl: 'app/display/lists.component.html',
  styleUrls:  ['app/display/lists.component.css']
})
export class ListsComponent implements OnInit,OnChanges {
  
  selectedList: VARIABLE;
  @Input() lists: VARIABLE[];
    to_do: VARIABLE[];
     completed: VARIABLE[];
ngOnChanges(){}
  constructor(
    private _router: Router,
    private _listService: ListService) {
      this.getLists();
     }

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
  this._listService.markTodo(list);
 
     }
      done(lists) {
         this.to_do = _.filter(this.lists, { 'complete': false });
         this.completed = _.filter(this.lists, { 'complete': true })
      }
}


