import { Component } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css'],
})
export class OptionComponent {
  status: any;

  constructor(public QuizService: QuizService, public router: Router) {}

  clickEvent(optionSelected: string) {
    if (!this.QuizService.check) {
      this.QuizService.status = optionSelected;
    }
  }
}
