import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-styles-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './styles-page.component.html',
})
export class StylesPageComponent {
  styles = [
    {
      name: 'Minimalizm',
      description:
        'Proste linie, geometryczne kształty, delikatne wzory. Idealny dla osób ceniących subtelność.',
    },
    {
      name: 'Geometria',
      description:
        'Złożone kompozycje z linii i kształtów geometrycznych. Wyróżnia się precyzją i symetrią.',
    },
    {
      name: 'Dotwork',
      description:
        'Tworzony z pojedynczych punktów. Nadaje tatuażowi unikalną teksturę i głębię.',
    },
    {
      name: 'Watercolor',
      description:
        'Naśladuje malarstwo akwarelowe. Charakteryzuje się rozmytymi kolorami i efektem płynących farb.',
    },
    {
      name: 'Realizm',
      description:
        'Dokładne odwzorowanie rzeczywistości. Portrety, zwierzęta, przedmioty - wszystko może być tematem realistycznego tatuażu.',
    },
    {
      name: 'New School',
      description:
        'Mieszanka różnych stylów, kolorów i kształtów. Często inspirowany kreskówkami czy komiksami.',
    },
    {
      name: 'Blackwork',
      description:
        'Dominuje czerń. Duże powierzchnie pokryte czarnym tuszem, często z geometrycznymi wzorami.',
    },
    {
      name: 'Linework/Fineline',
      description: 'Delikatne linie tworzące subtelne wzory.',
    },
    {
      name: 'Abstrakcja',
      description:
        'Niekonwencjonalne formy, często bez konkretnego odniesienia do rzeczywistości.',
    },
    {
      name: 'Biomechanika',
      description: 'Połączenie elementów biologicznych i mechanicznych.',
    },
  ];
}
