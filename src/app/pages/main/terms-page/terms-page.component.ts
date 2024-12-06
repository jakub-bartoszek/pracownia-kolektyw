import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-page.component.html',
})
export class TermsPageComponent {
  termsList = [
    {
      title: 'Zakres Usług',
      content:
        'Salon oferuje usługi takie jak tatuowanie, piercing oraz konsultacje. Każda usługa wykonywana jest przez wykwalifikowanych artystów zgodnie z ich umiejętnościami i stylem.',
    },
    {
      title: 'Rezerwacje i Zaliczki',
      content:
        'Zaliczki oraz warunki ich wpłaty są ustalane indywidualnie z artystą wykonującym usługę. Terminy odwołania wizyty oraz zasady zwrotu zaliczki również są ustalane indywidualnie. Prosimy o bezpośredni kontakt z artystą w celu uzgodnienia szczegółów.',
    },
    {
      title: 'Wiek Klienta',
      content:
        'Usługi tatuażu oraz piercingu świadczone są wyłącznie osobom pełnoletnim (18 lat i powyżej). Osoby w wieku 16–17 lat mogą skorzystać z usług za pisemną zgodą rodzica lub opiekuna prawnego, który powinien być obecny podczas wizyty.',
    },
    {
      title: 'Przeciwwskazania i Pielęgnacja',
      content:
        'Klienci zobowiązani są do przestrzegania zasad pielęgnacji przekazanych przez salon po wykonaniu tatuażu lub piercingu. W przypadku jakichkolwiek nieprawidłowości nie wynikających z winy klienta salon oferuje bezpłatną poprawkę tatuażu. Reakcje skórne mogą różnić się w zależności od indywidualnych cech organizmu; prosimy o konsultację z artystą przed podjęciem decyzji o tatuażu.',
    },
    {
      title: 'Prawa Autorskie',
      content:
        'Wszystkie prace wykonane przez artystów w salonie są ich oryginalnymi projektami i stanowią dzieła autorskie. Salon zastrzega sobie prawo do publikacji zdjęć wykonanych tatuaży i piercingów na profilach w mediach społecznościowych, takich jak Instagram, w celach marketingowych.',
    },
    {
      title: 'Reklamacje',
      content:
        'Klient ma prawo do zgłoszenia reklamacji w terminie do 14 dni od wykonania usługi. Reklamacje będą rozpatrywane w przypadku wad wynikających z winy salonu lub artysty. Każdy przypadek jest rozpatrywany indywidualnie.',
    },
  ];
}
