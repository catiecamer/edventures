import { Component } from '@angular/core';
import * as categoryData from '../../categories.json';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  broadCategories = { ...categoryData }.categories;

  constructor(public QuizService: QuizService) {}

  selectCategory(specificCat: any, broadCat: any) {
    this.QuizService.specificCategorySelected = specificCat.title;
    this.QuizService.broadCategorySelected =
      broadCat.broadCategory.toUpperCase();
  }
}
