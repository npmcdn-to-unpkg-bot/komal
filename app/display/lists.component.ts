import { Component, OnInit,OnChanges,Input,Output, EventEmitter  } from '@angular/core';
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
  @Input('init') lists: VARIABLE[] = [];
   
    to_do: VARIABLE[];
     completed: VARIABLE[];
     filterType = 0;
     @Output('filterChange') filters = new EventEmitter();
ngOnChanges(){}
  constructor(
    private _router: Router,
    private _listService: ListService) {
      this.getLists();
     }

  getLists() {
    this._listService.getLists().subscribe(lists => this.lists = lists);
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
      canShow(list: VARIABLE) {
         if (this.filterType === 0) {
            return false;
         } else if (this.filterType === 1) {
             if (list.complete) {
                 return true;
             }
         } else if (this.filterType === 2) {
             if (!list.complete) {
                 return true;
             }
         }
         return false;
     }
     updateFilter(filter_type) {
         this.filterType = filter_type;
         this.filters.emit(filter_type);
     }
  } 



