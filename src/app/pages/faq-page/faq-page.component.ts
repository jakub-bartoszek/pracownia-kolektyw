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
      category: 'Najczęstsze zagadnienia dotyczące procesu tatuowania',
      questions: [
        {
          question: 'Czy tatuowanie bardzo boli?',
          answer:
            'Ból jest subiektywny i zależy od progu bólu danej osoby, miejsca na ciele i wielkości tatuażu. Tatuaż to nie rurki z bitą śmietaną, ale też nie jest to ból nie do przeżycia. W wielu przypadkach tatuowanie przebiega bezboleśnie. Zdarza się, że czasami w trudnych przypadkach stosujemy środki znieczulające, aby zminimalizować dyskomfort.',
        },
        {
          question: 'Jak powinienem się przygotować do sesji tatuażu?',
          answer:
            'Przed sesją warto dobrze się wyspać, zjeść posiłek i unikać alkoholu. Skóra powinna być czysta i nieposmarowana żadnymi kosmetykami.',
        },
        {
          question: 'Jak długo trwa sesja tatuażu?',
          answer:
            'Czas trwania sesji zależy od wielkości i złożoności projektu. Małe tatuaże mogą zająć kilkanaście minut, większe nawet kilka godzin.',
        },
        {
          question: 'Jak długo goi się tatuaż i jak o niego dbać?',
          answer:
            'Czas gojenia zależy od indywidualnych predyspozycji, ale zazwyczaj trwa od kilkunastu dni do kilku tygodni. Podajemy szczegółowe instrukcje pielęgnacji po zabiegu.',
        },
      ],
    },
    {
      category: 'Pytania dotyczące projektów i wzorów',
      questions: [
        {
          question: 'Jak znaleźć inspirację do tatuażu?',
          answer:
            'Inspiracji można szukać w różnych źródłach: magazynach o tematyce tatuażu, portalach społecznościowych, a nawet w sztuce czy naturze. Ważna jest rozmowa z tatuatorem, który może podsunąć ciekawe pomysły.',
        },
        {
          question: 'Czy mogę przynieść własny projekt?',
          answer:
            'Oczywiście, możesz przynieść własny projekt. Tatuator dostosuje go do swoich umiejętności i stylu, a następnie omówi z Tobą wszelkie szczegóły.',
        },
        {
          question: 'Jak wybrać odpowiedni styl tatuażu?',
          answer:
            'Wybór stylu zależy od indywidualnych preferencji. Warto przejrzeć portfolio różnych tatuatorów i wybrać takiego, którego styl najbardziej Ci odpowiada. Pomagamy klientom znaleźć inspirację, omawiamy ich pomysły i wspólnie tworzymy unikalny projekt. Napisz do nas, a na pewno wyjdziesz zadowolony z sesji!',
        },
        {
          question:
            'Czy mogę zmienić rozmiar lub kolor zaproponowanego projektu?',
          answer:
            'Tak, nasi tatuatorzy są otwarci na zmiany w projekcie. Możesz modyfikować zarówno rozmiar, jak i kolorystykę oraz wszelkie szczegóły.',
        },
      ],
    },
    {
      category: 'Pytania dotyczące studia i tatuatora',
      questions: [
        {
          question:
            'Czy studio spełnia wszystkie wymagania sanitarne? Czy jest bezpiecznie?',
          answer:
            'Nasze studio tatuażu spełnia wszystkie wymogi sanitarne, a tatuatorzy pracują w sterylnych warunkach. Dbamy, abyś czuł, że jesteś w profesjonalnym studiu, z użyciem sterylnego sprzętu i wysokiej jakości tuszu. W naszym studio dbamy o najwyższe standardy higieny.',
        },
        {
          question: 'Czy mogę zobaczyć portfolio tatuatora?',
          answer:
            'Tak, nasze social media są miejscem, w którym prezentujemy swoje prace. Możesz je obejrzeć zarówno na stronie internetowej studia, prywatnych socialkach, jak i osobiście podczas wizyty.',
        },
        {
          question: 'Ile kosztuje tatuaż?',
          answer:
            'Cena tatuażu zależy od wielu czynników, takich jak wielkość, złożoność, użyte kolory i doświadczenie tatuatora. Najlepiej zapytać o cenę bezpośrednio w studio.',
        },
      ],
    },
    {
      category: 'Pytania dotyczące innych kwestii',
      questions: [
        {
          question: 'Czy tatuowanie jest bezpieczne?',
          answer:
            'Tatuowanie jest bezpieczne, jeśli jest wykonywane przez doświadczonego tatuatora w sterylnych warunkach. Nasze studio cieszy się wyłącznie dobrymi opiniami w tej materii.',
        },
        {
          question: 'Czy mogę zrobić tatuaż, jeśli mam alergię?',
          answer:
            'Jeśli masz alergię, koniecznie poinformuj o tym tatuatora. On doradzi, jakie farby i środki znieczulające będą dla Ciebie bezpieczne. Reakcje alergiczne na tusz są rzadkie, ale możliwe. Przed zabiegiem możemy przeprowadzić wywiad alergiczny.',
        },
        {
          question: 'Czy mogę usunąć tatuaż?',
          answer:
            'Tak, istnieją metody usuwania tatuaży, ale są one kosztowne i bolesne. Przed podjęciem decyzji o usunięciu warto dokładnie przemyśleć swoje wybory.',
        },
      ],
    },
  ];

  openedIndex: number | null = null;

  toggleAnswer(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
