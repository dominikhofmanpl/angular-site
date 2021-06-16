import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainButtonSpotifyComponent } from './main-button-spotify.component';

describe('MainButtonSpotifyComponent', () => {
  let component: MainButtonSpotifyComponent;
  let fixture: ComponentFixture<MainButtonSpotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainButtonSpotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainButtonSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
