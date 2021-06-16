import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './component/start-page/start-page.component'
import { NewsDetailsComponent } from './component/news-details/news-details.component'
import { AlbumDetailsComponent } from './component/album-details/album-details.component'
import { ArtistDetailComponent } from './component/artist-detail/artist-detail.component'
import { AboutComponent } from './component/about/about.component';
import { NewsComponent } from './component/news/news.component';
import { AlbumsComponent } from './pages/albums/albums.component'
import { ArtistsComponent } from './component/artists/artists.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'newsy', component: NewsComponent},
  { path: 'felietony', component: AlbumsComponent},
  { path: 'recenzje', component: ArtistsComponent},
  { path: 'news/:id', component: NewsDetailsComponent },
  { path: 'felieton/:id', component: AlbumDetailsComponent },
  { path: 'recenzja/:id', component: ArtistDetailComponent },
  { path: 'autorzy', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
