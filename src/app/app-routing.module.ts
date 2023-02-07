import { HomepageComponent } from './homepage/homepage.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "instructions", component: InstructionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
