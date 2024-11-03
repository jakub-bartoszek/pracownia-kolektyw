import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';
import { TattoosComponent } from './pages/tattoos/tattoos.component';
import { PiercingComponent } from './pages/piercing/piercing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'artysci', component: ArtistsComponent },
  { path: 'artysci/:id', component: ArtistDetailComponent },
  { path: 'uslugi/tatuaze', component: TattoosComponent },
  { path: 'uslugi/piercing', component: PiercingComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
