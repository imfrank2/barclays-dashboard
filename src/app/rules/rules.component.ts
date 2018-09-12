import { Component, OnInit } from '@angular/core';
import { RulesService } from '../services/rules.service';
import { MongoRulesService } from '../services/mongo-rules.service';
import { Rule } from '../models/rule.model';
import { RuleObject } from './rule';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit{
  
  visible : boolean;
  ruleList : string[];
  ruleObject : RuleObject[];

  constructor(private rulesService : RulesService, private mongoService : MongoRulesService){
      this.visible = false;
  }

  ngOnInit(): void {
      //this.ruleList = this.rulesService.getRules();
      console.log("Inside onInit");
      
      
    this.mongoService.getRules().subscribe(ruleObject => this.ruleObject= ruleObject);
      console.log(this.ruleObject);
  }

  toggleRules(){
      this.visible = !this.visible
  }


}