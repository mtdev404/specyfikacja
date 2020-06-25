export const REAL_TIME_MAILING = [
  {
    type: 'paragraph',
    content:
      'Przygotowanie kreacji HTML e-mailingu z zegarem: należy przygotować kreację według założeń e-mailingu oraz dostarczenie następujących informacji:',
  },
  {
    type: 'list',
    content: [
      'do kiedy ma odliczać timer',
      'jaki ma być format, np. odliczanie dni godzin minut sekund ',
      'format fonta (np. użytego w kreacji mailingu) jaki ma użyty w timerze',
      `komunikaty w zależności od stanu odliczania, np.

        W trakcie odliczania:
        TEKST PROMO, np. Do końca promocji pozostało…
        TIMER, np. 2 dni 3 godziny 45 minut 21 sekund

        Po skończeniu odliczania:
        TEKST PROMO: Promocja zakończona!
        TIMER, np. lub 0 dni 0 godzin 0 minut 0 sekund lub Wkrótce nowa promocja!`,
    ],
  },
  { type: 'paragraph', content: 'W kreacji html należy dodatkowo uwzględnić:' },
  {
    type: 'list',
    content: [
      'Obszar zegara',
      'Obszar informacji o promocji ',
      'Kreacja powinna zawierać obrazek (gif/jpg) o nazwie promo.gif, który wyświetli się podczas odliczania (przykład: Do końca promocji pozostało… )',
      'Dodatkowy obrazek promo_end.gif (o takich samych wymiarach co promo.gif) zawierający komunikat o zakończeniu akcji. (przykład: Promocja zakończona!)',
    ],
  },
  {
    type: 'paragraph',
    content:
      'Uwaga! Obrazki promo.gif oraz promo_end.gif nie powinny przekraczać 20 kB.',
  },
];
