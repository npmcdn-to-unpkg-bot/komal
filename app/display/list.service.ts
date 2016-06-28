import { VARIABLE } from '../variable';
import { DATA } from '../data';
import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  getLists() {
    return Promise.resolve(DATA);
  }


  getList(id: number) {
    return this.getLists()
               .then(lists => lists.filter(list => list.id === id)[0]);
  }
}


