import { Control } from "@angular/common";
 
 interface ValidationResult{
    [key:string]:boolean;
 }
 
 export class TextValidator {
 
    static isString(control: Control): ValidationResult { 
     
      if ( control.value !="" && !isNaN(control.value)){
         return {"isString": true};
       }
    
       return null;
     }
 
 
    } 