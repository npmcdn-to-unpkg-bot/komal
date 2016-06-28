import {Component, OnInit, Input} from '@angular/core';
import { VARIABLE } from '../variable';
import { AddItemService } from './add-item.service';
import * as _ from 'lodash';
@Component({
    selector: 'add-item',
    templateUrl: 'app/add/add-item.template.html',
    providers: [AddItemService]
})
export class AddItemComponent implements OnInit {
    ngOnInit() {
    }
    task: string;
    item:VARIABLE;
    constructor(private _addService: AddItemService) {
    }
    onSave(task: string) {
        this._addService.setItem(this.task).then(
        item => this.item = item
        );
           window.history.back();
    
    } 
     onBack() {
        window.history.back();
     }
    

}
