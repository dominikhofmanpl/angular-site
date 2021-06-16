import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakeLabelComponent } from './brake-label.component';

describe('BrakeLabelComponent', () => {
  let component: BrakeLabelComponent;
  let fixture: ComponentFixture<BrakeLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrakeLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrakeLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
