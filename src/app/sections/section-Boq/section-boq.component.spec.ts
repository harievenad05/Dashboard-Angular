import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBoqComponent } from './section-boq.component';

describe('SectionOrdersComponent', () => {
  let component: SectionBoqComponent;
  let fixture: ComponentFixture<SectionBoqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBoqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBoqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
