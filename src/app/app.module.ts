import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StudentComponent } from "./student/student.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentRegisterationComponent } from './student-registeration/student-registeration.component';
import { StudentInfoComponent } from './student-info/student-info.component';

@NgModule({
  declarations: [AppComponent, StudentComponent, StudentDetailsComponent, PageNotFoundComponent, StudentRegisterationComponent, StudentInfoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
