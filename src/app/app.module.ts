import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RulesService } from './services/rules.service';
import { InputFileModule } from 'ngx-input-file';
import { InputFileConfig } from 'ngx-input-file/src/lib/interfaces/input-file-config';
import { InputComponent } from './input/input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RulesComponent } from './rules/rules.component';
import { MongoRulesService } from './services/mongo-rules.service';

const config: InputFileConfig = {};

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    InputFileModule.forRoot(config),
    FormsModule,
    HttpModule
  ],
  providers: [RulesService, MongoRulesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
