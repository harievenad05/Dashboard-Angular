import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjectComponent } from './section-project.component';

describe('SectionHealthComponent', () => {
  let component: SectionProjectComponent;
  let fixture: ComponentFixture<SectionProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
