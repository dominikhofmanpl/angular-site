import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyartistdescComponent } from './spotifyartistdesc.component';

describe('SpotifyartistdescComponent', () => {
  let component: SpotifyartistdescComponent;
  let fixture: ComponentFixture<SpotifyartistdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyartistdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyartistdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
