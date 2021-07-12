import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderheaderComponent } from './sliderheader.component';

describe('SliderheaderComponent', () => {
  let component: SliderheaderComponent;
  let fixture: ComponentFixture<SliderheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
