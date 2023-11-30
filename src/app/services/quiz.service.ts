import { Injectable } from '@angular/core';
import * as QuizData from '../quiz.json';
import { ArrayType } from '@angular/compiler';
import { QuizPageComponent } from '../components/quiz/quiz-page/quiz-page.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  title = 'json-quiz-data';
  QuizData: any;
  url: string = '../../../../quiz.json';
  question: any;
  options: any;
  optionSelected: string;
  buttonText: string = 'Check answer';
  status: string;
  answer: string;
  isCorrect: boolean | null = null;
  questionArray: Array<object> = { ...QuizData }.questions;
  totalQuestions: number = this.questionArray.length;
  questionNumber: number = 1;
  click: number = 0;
  score: number = 0;
  percentage: number = (this.score / this.totalQuestions) * 100;
  check: boolean = false;
  specificCategorySelected: string;
  broadCategorySelected: string;

  constructor(public router: Router, public location: Location) {
    const question = { ...QuizData }.questions[this.questionNumber - 1]
      .question;
    this.question = question;
    const options = { ...QuizData }.questions[this.questionNumber - 1]
      .possibleOptions;
    this.options = options;
    const answer = { ...QuizData }.questions[this.questionNumber - 1].answer;
    this.answer = answer;
  }

  onQuestionNumber() {
    this.question = { ...QuizData }.questions[this.questionNumber - 1].question;
    this.options = { ...QuizData }.questions[
      this.questionNumber - 1
    ].possibleOptions;
    this.answer = { ...QuizData }.questions[this.questionNumber - 1].answer;
  }

  buttonDescriptionOnHome() {
    if (this.location.path() === '/home') {
      this.buttonText = 'Try out a quiz';
    }
  }

  buttonDescriptionOnFinalResult() {
    if (this.location.path() === '/finalresult') {
      this.buttonText = 'Sign up to claim reward';
    }
  }

  // onHomeClick() {
  //   if (this.location.path() === '/home') {
  //     this.buttonText = 'Try out a quiz';
  //   }
  // }

  updateButtonText() {
    if (this.location.path() === '/home') {
      this.buttonText = 'Try out a quiz';
    } else if (
      this.status != undefined &&
      this.questionNumber < this.questionArray.length &&
      this.check
    ) {
      this.buttonText = 'Next question';
      this.check = true;
    } else if (!this.check) {
      this.buttonText = 'Check answer';
      this.check = false;
    } else {
      this.buttonText = 'See my final score';
      this.check = true;
    }
  }

  goToNextQuestion() {
    if (this.check && this.click >= 2) {
      this.questionNumber += 1;
      if (this.questionNumber > this.questionArray.length) {
        this.router.navigateByUrl('/finalresult');
        this.questionNumber = 1;
      } else {
        this.onQuestionNumber();
      }
      console.log('question number', this.questionNumber);
      this.click = 0;
      console.log('click', this.click);
      this.status = undefined;
      this.isCorrect = null;
      this.check = false;
      console.log('status', this.status);
    }
  }

  scoreKeeper() {
    if ((this.isCorrect = true && !this.check)) {
      this.score += 1;
    }
  }

  showNotification() {
    if (this.status != undefined) {
      if (this.status == this.answer) {
        this.isCorrect = true;
        this.scoreKeeper();
      } else {
        this.isCorrect = false;
      }
      this.check = true;
      this.click += 1;
      console.log('click', this.click);
      this.goToNextQuestion();
      this.updateButtonText();
      console.log('check', this.check);
      console.log('q number', this.questionNumber);
      console.log('score', this.score);
      console.log('length', this.totalQuestions);
      let percentage = (this.score / this.totalQuestions) * 100;
      this.percentage = percentage;
    }
  }
}
