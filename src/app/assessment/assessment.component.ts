import { Component } from '@angular/core';
import { quiz } from '../data/external';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent {
  quiz = quiz['12345'];
  name = this.quiz.name;
  data = this.quiz.data;
  noOfQuestions = this.quiz.data.length;
  currQues = 1;
  constructor() {
    console.log(this.data);
  }

  prevHandler() {
    if (this.currQues > 1) {
      this.currQues--;
    }
  }

  nextHandler() {
    if (this.currQues < this.noOfQuestions) {
      this.currQues++;
    }
  }

  navigateHandler(quesNo: number) {
    console.log(quesNo);
    this.currQues = quesNo;
  }
}
