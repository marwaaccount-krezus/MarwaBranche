import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanniereInterneComponent } from './banniere-interne.component';

describe('BanniereInterneComponent', () => {
  let component: BanniereInterneComponent;
  let fixture: ComponentFixture<BanniereInterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanniereInterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanniereInterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
