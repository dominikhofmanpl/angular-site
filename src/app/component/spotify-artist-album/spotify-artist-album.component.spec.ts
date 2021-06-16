import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyArtistAlbumComponent } from './spotify-artist-album.component';

describe('SpotifyArtistAlbumComponent', () => {
  let component: SpotifyArtistAlbumComponent;
  let fixture: ComponentFixture<SpotifyArtistAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyArtistAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyArtistAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
