import { Component } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
})
export class QuizPageComponent {
  // clicks: number = 0;
  constructor(
    public QuizService: QuizService,
    public router: Router,
    public location: Location
  ) {}
}
