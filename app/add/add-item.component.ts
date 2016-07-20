import {Component, OnInit, Input} from '@angular/core';
import { VARIABLE } from '../variable';
import { AddItemService } from './add-item.service';
import * as _ from 'lodash';
import { Control, Validators, ControlGroup, FormBuilder, FORM_DIRECTIVES} from '@angular/common';
import { TextValidator } from './validate';
@Component({
    selector: 'add-item',
    templateUrl: 'app/add/add-item.template.html',
    directives: [FORM_DIRECTIVES],
    providers: [AddItemService]
})
export class AddItemComponent implements OnInit {
    ngOnInit() {
    }
    task:string
    text:Control ;
    item:VARIABLE[];
    form: ControlGroup;
    constructor(private _addService: AddItemService, private _builder: FormBuilder) {
         this.text = new Control("", Validators.compose([Validators.required, TextValidator.isString])
         );
 
         this.form = _builder.group({
             text: this.text
         });
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
