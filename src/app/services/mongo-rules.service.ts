import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable} from 'rxjs'; 
import { map } from 'rxjs/operators'; 
import { Rule } from '../models/rule.model';
import { RuleObject } from '../rules/rule';

@Injectable({
  providedIn: 'root'
})
export class MongoRulesService {

  constructor(private http: Http) { }

  public addRule(rule: string): Observable<string>{
    console.log(rule);
    return this.http.post('http://localhost:8080/api/addRule/',rule).pipe(map((response: Response) => response.json()));

  }
  public getRules(): Observable<RuleObject[]>{
    return this.http.get('http://localhost:8080/api/getRules/').pipe(map((response : Response) => response.json() || []));
  
  }
}
