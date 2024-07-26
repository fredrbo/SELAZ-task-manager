import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTasksComponent } from './form-tasks.component';

describe('FormTasksComponent', () => {
  let component: FormTasksComponent;
  let fixture: ComponentFixture<FormTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
