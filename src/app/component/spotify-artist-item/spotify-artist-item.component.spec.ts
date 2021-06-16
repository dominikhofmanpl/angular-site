import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyArtistItemComponent } from './spotify-artist-item.component';

describe('SpotifyArtistItemComponent', () => {
  let component: SpotifyArtistItemComponent;
  let fixture: ComponentFixture<SpotifyArtistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyArtistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyArtistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
