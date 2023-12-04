import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css'],
})
export class ScorecardComponent implements OnInit {
  percentage: Array<any> = [
    {
      scoreRule: function (p: number) {
        return p < 50;
      },

      colorLight: 'var(--error-medium)',
      colorDark: 'var(--error)',
      message: 'Better luck next time!',
      img: '../../../assets/images/failScore.png',
    },
    {
      scoreRule: function (p: number) {
        return p > 49 && p < 80;
      },
      colorLight: 'var(--yellow-light)',
      colorDark: 'var(--yellow-dark)',
      message: 'Keep Practicing',
      img: '../../../assets/images/averageScore.png',
    },

    {
      scoreRule: function (p: number) {
        return p > 79;
      },
      colorLight: 'var(--success-light)',
      colorDark: 'var(--success-dark)',
      message: "Awesome work, you're a pro!",
      img: '../../../assets/images/highScore.png',
    },
  ];

  constructor(public QuizService: QuizService) {}
  ngOnInit() {
    this.chooseLightColor();
    this.chooseDarkColor();
    this.chooseMessage();
  }

  chooseLightColor() {
    for (let percent of this.percentage) {
      if (percent.scoreRule(this.QuizService.percentage)) {
        return percent.colorLight;
      }
    }
  }

  chooseImg() {
    for (let percent of this.percentage) {
      if (percent.scoreRule(this.QuizService.percentage)) {
        return percent.img;
      }
    }
  }
  chooseDarkColor() {
    for (let percent of this.percentage) {
      if (percent.scoreRule(this.QuizService.percentage)) {
        return percent.colorDark;
      }
    }
  }
  chooseMessage() {
    for (let percent of this.percentage) {
      if (percent.scoreRule(this.QuizService.percentage)) {
        return percent.message;
      }
    }
  }
}
