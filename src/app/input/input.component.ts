import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RulesService } from '../services/rules.service';
import { Rule } from '../models/rule.model';
import { MongoRulesService } from '../services/mongo-rules.service';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  newRule : string;

  constructor(public rulesService : RulesService, private mongoService : MongoRulesService) { }

  addRule(){

    this.mongoService.addRule(this.newRule).subscribe();
    //this.rulesService.addRule(this.newRule);
    this.newRule = "";
  }

  ruleToUpperCase(value: any){
    if(value.length > 0)
      this.newRule = value.charAt(0).toUpperCase() + value.slice(1);
    else
      this.newRule = value;
  }


}
