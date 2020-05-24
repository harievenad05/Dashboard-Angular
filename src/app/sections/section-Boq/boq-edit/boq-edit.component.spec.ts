import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoqEditComponent } from './boq-edit.component';

describe('OrderEditComponent', () => {
  let component: BoqEditComponent;
  let fixture: ComponentFixture<BoqEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoqEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoqEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
