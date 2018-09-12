import { Injectable } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { Rule } from '../models/rule.model';



@Injectable({
  providedIn: 'root'
})
export class RulesService {

  public ruleList : string[] = ["Do not upload .exe files", "Ensure correct extension - .txt"];

  constructor() {
   }


  public addRule(rule: string): void{
    this.ruleList.push(rule);

  }
  public getRules(): any {
    return this.ruleList;
  }
}
