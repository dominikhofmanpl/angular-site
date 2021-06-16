import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLabelTempComponent } from './main-label-temp.component';

describe('MainLabelTempComponent', () => {
  let component: MainLabelTempComponent;
  let fixture: ComponentFixture<MainLabelTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLabelTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLabelTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
