import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tatoo-aftercare-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tatoo-aftercare-page.component.html',
})
export class TatooAftercarePageComponent {
  aftercareTips = [
    {
      title: 'Pielęgnacja tatuażu ze sztuczną skórą:',
      content: [
        'Zdejmij sztuczną skórę po 2-3 dniach pod bieżącą letnią wodą.',
        'Oczyść tatuaż letnią wodą z antybakteryjnym mydłem lub płynem do higieny intymnej, a następnie osusz czystym ręcznikiem papierowym.',
        'Nałóż cienką warstwę specjalnego kremu do tatuaży.',
        'Unikaj bezpośredniego słońca, solarium i sauny.',
      ],
    },
    {
      title: 'Pielęgnacja tatuażu z folią spożywczą:',
      content: [
        'Zmieniać folię co kilka godzin, szczególnie jeśli się zamoczy.',
        'Przed nałożeniem nowej folii delikatnie umyj tatuaż letnią wodą.',
        'Po każdym oczyszczeniu nałóż cienką warstwę kremu do tatuaży.',
        'Unikaj słońca, solarium i sauny.',
      ],
    },
    {
      title: 'Ogólne zasady pielęgnacji:',
      content: [
        'Myj i nawilżaj tatuaż kilka razy dziennie, szczególnie po wysiłku fizycznym.',
        'Używaj wyłącznie produktów przeznaczonych do pielęgnacji tatuaży. Unikaj kosmetyków zawierających alkohol, perfumy i barwniki.',
        'Noś luźne ubrania, które nie będą ocierać o tatuaż.',
        'Unikaj miejsc o dużym zapyleniu i zanieczyszczeniu.',
        'Nie drap ani nie ścieraj suchej skóry.',
        'Unikaj intensywnych ćwiczeń, które powodują pocenie się w okolicy tatuażu.',
      ],
    },
    {
      title: 'Czego unikać:',
      content: [
        'Unikaj promieniowania UV, które może spowodować blaknięcie tatuażu.',
        'Nie korzystaj z basenów i zbiorników wodnych.',
        'Unikaj długich kąpieli, które mogą spowolnić proces gojenia.',
      ],
    },
    {
      title: 'Kiedy zgłosić się do tatuatora?',
      content: [
        'Jeśli zauważysz niepokojące objawy, takie jak silny ból, zaczerwienienie, obrzęk, wyciek ropy lub gorączka, natychmiast skontaktuj się z tatuatorem.',
      ],
    },
  ];
}
