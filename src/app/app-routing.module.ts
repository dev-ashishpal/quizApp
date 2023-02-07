import { HomepageComponent } from './homepage/homepage.component';
import { InstructionComponent } from './instruction/instruction.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path:"instructions", component: InstructionComponent},
  {path:"assessment", component: AssessmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
