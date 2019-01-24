import { StudentInfoComponent } from "./student-info/student-info.component";
import { StudentRegisterationComponent } from "./student-registeration/student-registeration.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentComponent } from "./student/student.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "student",
    pathMatch: "full"
  },
  {
    path: "student",
    children: [
      { path: "", component: StudentComponent },
      { path: "studentdetails", component: StudentDetailsComponent },
      {
        path: "studentregisteration",
        component: StudentRegisterationComponent
      },
      { path: "studentinfo", component: StudentInfoComponent },
      {
        path: "**",
        component: PageNotFoundComponent
      }
    ]
  },

  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
