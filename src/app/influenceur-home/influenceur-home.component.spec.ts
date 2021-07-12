import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenceurHomeComponent } from './influenceur-home.component';

describe('InfluenceurHomeComponent', () => {
  let component: InfluenceurHomeComponent;
  let fixture: ComponentFixture<InfluenceurHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluenceurHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluenceurHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
