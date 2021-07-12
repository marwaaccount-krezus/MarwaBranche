import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheOffresComponent } from './affiche-offres.component';

describe('AfficheOffresComponent', () => {
  let component: AfficheOffresComponent;
  let fixture: ComponentFixture<AfficheOffresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheOffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
