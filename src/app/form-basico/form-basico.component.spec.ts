import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasicoComponent } from './form-basico.component';

describe('FormBasicoComponent', () => {
  let component: FormBasicoComponent;
  let fixture: ComponentFixture<FormBasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
