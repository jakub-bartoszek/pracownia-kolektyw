import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy-page.component.html',
})
export class PrivacyPolicyPageComponent {
  privacyPolicyList = [
    {
      title: 'Zakres Zbieranych Danych',
      content:
        'Na potrzeby założenia konta na stronie internetowej oraz napisania opinii zbieramy następujące dane osobowe: Imię i nazwisko, Adres e-mail.',
    },
    {
      title: 'Cel Zbierania Danych',
      content:
        'Dane osobowe zbierane są wyłącznie w celu umożliwienia użytkownikom założenia konta i wystawiania opinii na stronie salonu.',
    },
    {
      title: 'Okres Przechowywania Danych',
      content:
        'Dane osobowe przechowywane są przez czas istnienia konta użytkownika. W momencie usunięcia konta dane są natychmiastowo usuwane z naszej bazy.',
    },
    {
      title: 'Udostępnianie Danych Osobowych',
      content:
        'Zebrane dane osobowe nie są udostępniane podmiotom trzecim i służą wyłącznie do celów wskazanych powyżej.',
    },
    {
      title: 'Prawa Użytkownika',
      content:
        'Użytkownik ma prawo do dostępu do swoich danych, ich edycji oraz trwałego usunięcia poprzez usunięcie konta na stronie. Wszelkie prośby dotyczące zarządzania danymi osobowymi można zgłaszać za pośrednictwem formularza kontaktowego na stronie.',
    },
    {
      title: 'Kontakt',
      content:
        'W razie jakichkolwiek pytań lub wątpliwości dotyczących ochrony danych osobowych prosimy o kontakt za pośrednictwem formularza dostępnego na stronie internetowej salonu.',
    },
  ];
}
