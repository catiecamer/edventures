import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/quiz/question/question.component';
import { OptionComponent } from './components/quiz/option/option.component';
import { QuizPageComponent } from './components/quiz/quiz-page/quiz-page.component';
import { QuizTimelineIndicatorComponent } from './components/quiz/quiz-timeline-indicator/quiz-timeline-indicator.component';
import { CallToActionComponent } from './components/buttons/call-to-action/call-to-action.component';
import { NotificationComponent } from './components/quiz/notification/notification.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FinalPageComponent } from './components/final/final-page/final-page.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    OptionComponent,
    QuizPageComponent,
    QuizTimelineIndicatorComponent,
    CallToActionComponent,
    NotificationComponent,
    NavbarComponent,
    FinalPageComponent,
    HomeComponent,
    CategoriesPageComponent,
    CategoriesComponent,
    ScorecardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
