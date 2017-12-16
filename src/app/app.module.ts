import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CronGenComponent } from './cron-gen/cron-gen.component';


const root: Routes = [
  {path: 'cron', component: CronGenComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CronGenComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(root)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
