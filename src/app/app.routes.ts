import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { HomePageComponent } from './pages/main/home-page/home-page.component';
import { GalleryPageComponent } from './pages/main/gallery-page/gallery-page.component';
import { ArtistsPageComponent } from './pages/main/artists-page/artists-page.component';
import { ArtistPageComponent } from './pages/main/artist-page/artist-page.component';
import { TattoosPageComponent } from './pages/main/tattoos-page/tattoos-page.component';
import { PiercingPageComponent } from './pages/main/piercing-page/piercing-page.component';
import { ServicesPageComponent } from './pages/main/services-page/services-page.component';
import { TermsPageComponent } from './pages/main/terms-page/terms-page.component';
import { PrivacyPolicyPageComponent } from './pages/main/privacy-policy-page/privacy-policy-page.component';
import { FaqPageComponent } from './pages/main/faq-page/faq-page.component';
import { ContactPageComponent } from './pages/main/contact-page/contact-page.component';
import { TatooAftercarePageComponent } from './pages/main/tatoo-aftercare-page/tatoo-aftercare-page.component';
import { StylesPageComponent } from './pages/main/styles-page/styles-page.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { AdminArtworksPageComponent } from './pages/admin/admin-artworks-page/admin-artworks-page.component';
import { AdminArtistsPageComponent } from './pages/admin/admin-artists-page/admin-artists-page.component';
import { AdminReviewsPageComponent } from './pages/admin/admin-reviews-page/admin-reviews-page.component';

export const routes: Routes = [
  // Layout główny
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'galeria', component: GalleryPageComponent },
      { path: 'artysci', component: ArtistsPageComponent },
      { path: 'artysci/:id', component: ArtistPageComponent },
      { path: 'uslugi', component: ServicesPageComponent },
      { path: 'uslugi/tatuaze', component: TattoosPageComponent },
      { path: 'uslugi/piercing', component: PiercingPageComponent },
      { path: 'kontakt', component: ContactPageComponent },
      { path: 'regulamin', component: TermsPageComponent },
      { path: 'polityka-prawnosci', component: PrivacyPolicyPageComponent },
      {
        path: 'bezpieczenstwo-i-higiena',
        component: TatooAftercarePageComponent,
      },
      { path: 'faq', component: FaqPageComponent },
      { path: 'styles', component: StylesPageComponent },
    ],
  },
  // Layout admina
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminPageComponent },
      { path: 'prace', component: AdminArtworksPageComponent },
      { path: 'artysci', component: AdminArtistsPageComponent },
      { path: 'opinie', component: AdminReviewsPageComponent },
    ],
  },
  // Obsługa nieznanych tras
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
