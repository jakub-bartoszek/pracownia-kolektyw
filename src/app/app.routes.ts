import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ArtistsComponent } from './pages/artists/artists.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'artysci', component: ArtistsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
