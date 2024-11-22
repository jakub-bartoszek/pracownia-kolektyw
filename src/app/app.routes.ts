import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ArtistsPageComponent } from './pages/artists-page/artists-page.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { TattoosPageComponent } from './pages/tattoos-page/tattoos-page.component';
import { PiercingPageComponent } from './pages/piercing-page/piercing-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'galeria', component: GalleryPageComponent },
  { path: 'artysci', component: ArtistsPageComponent },
  { path: 'artysci/:id', component: ArtistPageComponent },
  { path: 'uslugi', component: ServicesPageComponent },
  { path: 'uslugi/tatuaze', component: TattoosPageComponent },
  { path: 'uslugi/piercing', component: PiercingPageComponent },
  { path: 'regulamin', component: TermsPageComponent },
  { path: 'polityka-prawnosci', component: PrivacyPolicyPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
