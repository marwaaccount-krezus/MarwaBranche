import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreHomeComponent } from './offre-home.component';

describe('OffreHomeComponent', () => {
  let component: OffreHomeComponent;
  let fixture: ComponentFixture<OffreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
