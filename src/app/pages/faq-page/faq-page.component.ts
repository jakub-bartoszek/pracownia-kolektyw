import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-page.component.html',
})
export class FaqPageComponent {
  rules = [
    {
      question:
        'Czy muszę umówić się na wizytę, czy mogę przyjść bez zapowiedzi?',
      answer:
        'Zachęcamy do wcześniejszego umawiania się na wizytę, aby mieć pewność, że znajdzie się odpowiedni czas na realizację projektu. Przyjście bez zapowiedzi może nie gwarantować dostępności artystów, ale zawsze warto zapytać!',
    },
    {
      question: 'Jak mogę się przygotować do tatuażu?',
      answer:
        'Przed wizytą zadbaj o wypoczynek i dobre nawodnienie organizmu. Unikaj alkoholu, kawy oraz leków rozrzedzających krew dzień przed sesją. Zjedz pełnowartościowy posiłek, aby utrzymać energię podczas tatuowania.',
    },
    {
      question: 'Czy wykonujecie tatuaże osobom poniżej 18 roku życia?',
      answer:
        'Osoby poniżej 18 roku życia mogą zrobić tatuaż jedynie za pisemną zgodą rodzica lub opiekuna prawnego. Minimalny wiek to 16 lat. W przypadku piercingu również wymagamy zgody opiekuna prawnego dla osób poniżej pełnoletności.',
    },
    {
      question: 'Czy tatuaż boli?',
      answer:
        'Odczucia bólu są bardzo indywidualne i zależą od miejsca, w którym robiony jest tatuaż, oraz progu bólu danej osoby. Przykładamy wszelkie starania, aby sesja była jak najbardziej komfortowa.',
    },
    {
      question: ' Jakie są przeciwwskazania do tatuowania?',
      answer:
        'Przeciwwskazania obejmują m.in. infekcje skórne, stany zapalne, choroby przewlekłe skóry, ciążę, karmienie piersią oraz niektóre schorzenia, takie jak cukrzyca lub choroby krwi. Przed wizytą poinformuj nas o wszelkich problemach zdrowotnych.',
    },
    {
      question: 'Jak dbać o nowy tatuaż?',
      answer:
        'Po tatuowaniu otrzymasz od nas kartę z zaleceniami dotyczącymi pielęgnacji. Ogólnie zalecamy stosowanie się do instrukcji, aby tatuaż dobrze się goił i zachował jakość. Kluczowe są regularne mycie i nawilżanie oraz unikanie moczenia i wystawiania tatuażu na słońce przez pierwsze tygodnie.',
    },
    {
      question:
        'Co zrobić, jeśli zauważę reakcję alergiczną lub inną reakcję skórną po wykonaniu tatuażu?',
      answer:
        ' Jeśli wystąpi reakcja alergiczna lub inne niepokojące objawy, jak zaczerwienienie, wysypka lub opuchlizna, skontaktuj się z nami lub zasięgnij porady lekarza. W zależności od przyczyny możemy zaproponować darmową poprawkę, jeśli wystąpiły problemy wynikające z naszej strony.',
    },
    {
      question: 'Czy muszę wpłacić zaliczkę?',
      answer:
        'Tak, zaliczki są wymagane na większość projektów i są indywidualnie ustalane z każdym artystą. Zaliczka jest zabezpieczeniem terminu i zostanie odjęta od końcowej ceny tatuażu. W razie konieczności odwołania sesji prosimy o informację na 48 godzin przed umówionym terminem.',
    },
    {
      question: 'Czy mogę przyjść ze swoim projektem?',
      answer:
        'Oczywiście! Możesz przynieść własny projekt lub pomysł. Nasi artyści pomogą go dostosować lub stworzyć coś wyjątkowego w oparciu o twoją wizję.',
    },
    {
      question: 'Jak długo trwa sesja tatuażu?',
      answer:
        'Czas sesji zależy od wielkości, skomplikowania projektu oraz miejsca na ciele, które jest tatuowane. Przed umówieniem wizyty artysta oszacuje czas potrzebny na wykonanie tatuażu.',
    },
    {
      question: 'Czy oferujecie poprawki lub korekty tatuażu?',
      answer:
        'Tak, jeśli tatuaż wymaga poprawki z przyczyn niezależnych od klienta, oferujemy darmowe poprawki. Warto zgłosić się do nas w ciągu kilku tygodni od wykonania tatuażu, aby omówić ewentualne modyfikacje.',
    },
    {
      question:
        'Czy po wykonaniu tatuażu mogę korzystać z basenu lub opalać się?',
      answer:
        'Zalecamy unikanie moczenia tatuażu (w basenach, saunach, jeziorach) przez minimum 2-4 tygodnie, a także unikanie bezpośredniego słońca na świeżo wykonanym tatuażu. Niezastosowanie się do tych zaleceń może prowadzić do komplikacji w procesie gojenia.',
    },
    {
      question: 'Czy mogę zobaczyć zdjęcia poprzednich prac artystów?',
      answer:
        'Tak, zdjęcia prac naszych artystów są dostępne w galerii na stronie oraz na ich profilach na Instagramie. Zachęcamy do zapoznania się z ich stylem, aby lepiej dopasować artystę do swoich preferencji.',
    },
  ];

  openedIndex: number | null = null;

  toggleAnswer(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
