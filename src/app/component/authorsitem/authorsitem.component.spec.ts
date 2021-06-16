import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsitemComponent } from './authorsitem.component';

describe('AuthorsitemComponent', () => {
  let component: AuthorsitemComponent;
  let fixture: ComponentFixture<AuthorsitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
