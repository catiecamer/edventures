import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTimelineIndicatorComponent } from './quiz-timeline-indicator.component';

describe('QuizTimelineIndicatorComponent', () => {
  let component: QuizTimelineIndicatorComponent;
  let fixture: ComponentFixture<QuizTimelineIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizTimelineIndicatorComponent]
    });
    fixture = TestBed.createComponent(QuizTimelineIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
