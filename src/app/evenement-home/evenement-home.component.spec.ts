import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementHomeComponent } from './evenement-home.component';

describe('EvenementHomeComponent', () => {
  let component: EvenementHomeComponent;
  let fixture: ComponentFixture<EvenementHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
