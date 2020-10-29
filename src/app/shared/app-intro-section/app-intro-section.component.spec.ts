import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIntroSectionComponent } from './app-intro-section.component';

describe('AppIntroSectionComponent', () => {
  let component: AppIntroSectionComponent;
  let fixture: ComponentFixture<AppIntroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppIntroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppIntroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
