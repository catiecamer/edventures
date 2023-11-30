import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizPageComponent } from './components/quiz/quiz-page/quiz-page.component';
import { FinalPageComponent } from './components/final/final-page/final-page.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'question1', component: QuizPageComponent },
  { path: 'question2', component: QuizPageComponent },
  { path: 'finalresult', component: FinalPageComponent },
  { path: 'categories', component: CategoriesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
