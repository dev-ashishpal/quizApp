import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionComponent } from './instruction/instruction.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { LogoComponent } from './core/logo/logo.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AssessmentComponent } from './assessment/assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionComponent,
    NavigationComponent,
    LogoComponent,
    HomepageComponent,
    AssessmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
