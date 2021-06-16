import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyalbumdetailsComponent } from './spotifyalbumdetails.component';

describe('SpotifyalbumdetailsComponent', () => {
  let component: SpotifyalbumdetailsComponent;
  let fixture: ComponentFixture<SpotifyalbumdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyalbumdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyalbumdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
