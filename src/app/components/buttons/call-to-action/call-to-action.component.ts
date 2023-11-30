import { Component } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css'],
})
export class CallToActionComponent {
  btnClick: Function;

  constructor(public QuizService: QuizService) {
    this.QuizService.updateButtonText();
  }
}
