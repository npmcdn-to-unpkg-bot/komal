import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { VARIABLE } from '../VARIABLE';
import { ListService } from './display/list.service';

@Component({
  selector: 'my-list-detail',
  templateUrl: 'app/list-detail.component.html'
})
export class ListDetailComponent implements OnInit {
  list: VARIABLE;

  constructor(
    private listService: ListService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.listService.getList(id)
      .then(list => this.list = list);
  }

  goBack() {
    window.history.back();
  }
}
