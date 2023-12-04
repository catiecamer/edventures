import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.css'],
})
export class FinalPageComponent {
  constructor(public router: Router, public QuizService: QuizService) {
    this.QuizService.updateButtonText();
  }
  resetScore() {
    this.QuizService.score = 0;
  }
}
