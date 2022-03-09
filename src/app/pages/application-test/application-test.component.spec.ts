import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTestComponent } from './application-test.component';

describe('ApplicationTestComponent', () => {
  let component: ApplicationTestComponent;
  let fixture: ComponentFixture<ApplicationTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
