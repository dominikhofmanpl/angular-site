import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent } from './component/news/news.component';
import { NewsitemComponent } from './component/newsitem/newsitem.component';
import { StartPageComponent } from './component/start-page/start-page.component';
import { AlbumItemComponent } from './component/album-item/album-item.component';
import { FooterComponent } from './component/footer/footer.component';
import { AlbumDetailsComponent } from './component/album-details/album-details.component';
import { NewsDetailsComponent } from './component/news-details/news-details.component';
import { ArtistsComponent } from './component/artists/artists.component';
import { ArtistItemComponent } from './component/artist-item/artist-item.component';
import { ArtistDetailComponent } from './component/artist-detail/artist-detail.component';
import { HeaderComponent } from './component/header/header.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AboutComponent } from './component/about/about.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { MainButtonComponent } from './component/main-button/main-button.component';
import { MainButtonSpotifyComponent } from './component/main-button-spotify/main-button-spotify.component';
import { FooterSpotifyComponent } from './component/footer-spotify/footer-spotify.component';
import { ErrorpageComponent } from './component/errorpage/errorpage.component';
import { SpotifyArtistItemComponent } from './component/spotify-artist-item/spotify-artist-item.component';
import { SpotifyArtistAlbumComponent } from './component/spotify-artist-album/spotify-artist-album.component';
import { SpotifyartistdescComponent } from './component/spotifyartistdesc/spotifyartistdesc.component';
import { BrakeLabelComponent } from './component/brake-label/brake-label.component';
import { SpotifyalbumdetailsComponent } from './component/spotifyalbumdetails/spotifyalbumdetails.component';
import { MainLabelTempComponent } from './component/main-label-temp/main-label-temp.component';
import { EffectsModule } from '@ngrx/effects';
import { NewsModule } from '../app/modules/news/news.module'
import { FelietonsModule } from '../app/modules/felietons/felietons.module'
import { ReviewsModule } from '../app/modules/reviews/reviews.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { StoreModule } from '@ngrx/store';
import { AuthorsComponent } from './component/authors/authors.component';
import { AuthorsitemComponent } from './component/authorsitem/authorsitem.component'
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewsComponent,
    NewsitemComponent,
    StartPageComponent,
    AlbumItemComponent,
    FooterComponent,
    AlbumDetailsComponent,
    NewsDetailsComponent,
    ArtistsComponent,
    ArtistItemComponent,
    ArtistDetailComponent,
    HeaderComponent,
    AboutComponent,
    AlbumsComponent,
    MainButtonComponent,
    MainButtonSpotifyComponent,
    FooterSpotifyComponent,
    ErrorpageComponent,
    SpotifyArtistItemComponent,
    SpotifyArtistAlbumComponent,
    SpotifyartistdescComponent,
    BrakeLabelComponent,
    SpotifyalbumdetailsComponent,
    MainLabelTempComponent,
    AuthorsComponent,
    AuthorsitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([
      NewsModule,
      FelietonsModule,
      ReviewsModule
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [ HttpClientModule,
    {provide: LocationStrategy, useClass: PathLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
