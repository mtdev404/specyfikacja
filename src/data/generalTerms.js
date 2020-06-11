export const GENERAL_TERMS = [
  {
    type: 'paragraph',
    content:
      'Wszystkie reklamy przeznaczone do emisji na stronach Digital Contact powinny spełniać warunki niniejszej specyfikacji technicznej oraz być zgodne ze standardami emisji reklamy IAB Polska.',
  },
  {
    type: 'paragraph',
    content:
      'Wyświetlenie reklamy na stronach Digital Contact nie oznacza automatycznie, że reklama jest zgodna  ze specyfikacją techniczną. Digital Contact zastrzega sobie prawo do weryfikacji  reklamy i niedopuszczenia do jej emisji lub przerwania jej w trakcie, w przypadku niezgodności z niniejszą specyfikacją techniczną oraz możliwość odmowy emisji bądź zaprzestania emisji dowolnej reklamy, jeśli uzna ją za dokuczliwą lub szkodliwą dla użytkowników portalu.',
  },
  {
    type: 'paragraph',
    content:
      'Kreacje powinny być nie później niż 1 dzień roboczy przed planowaną emisją a w przypadku rich media termin ten wynosi 3 dni robocze.',
  },
  {
    type: 'paragraph',
    content:
      'Kreacje musza mieć założony wymiar i wagę zgodne z opisem konkretnego formatu reklamowego',
  },
  {
    type: 'paragraph',
    content:
      'Reklama nie może zawierać zaszytych mechanizmów śledzących interakcję użytkownika lub zaciągających dodatkowy kontent ze stron zewnętrznych bez zgody uzyskanej od Digital Contact. Nadesłane kreacje nie mogą zmieniać lub odczytywać cookie z komputera użytkownika.',
  },
  {
    type: 'paragraph',
    content:
      'Dźwięk w kreacjach może zostać włączony tylko po akcji użytkownika (klik, najechanie, najechanie i przytrzymanie).',
  },
  {
    type: 'paragraph',
    content:
      'Reklama nie może w żaden sposób zakłócać działania strony lub skrzynki pocztowej/programu do odbioru maili tj. nie może powodować błędów przeglądarki/klienta pocztowego ani obciążać procesora w stopniu istotnie utrudniającym pracę z innymi aplikacjami.',
  },
  {
    type: 'paragraph',
    content:
      'Reklama nie może wprowadzać użytkownika w błąd swoją treścią i przekazem wynikającym z tej treści. Nie może również swoim wyglądem przypominać podstawowych przycisków systemowych oraz zawierać przycisków działających inaczej niż wynika z typowej dla nich funkcji. Niedozwolona jest emisja reklam w formie ostrzeżeń oraz komunikatów systemowych. Przyciski umieszczone na reklamach muszą działać zgodnie z komunikatem na nich prezentowanym.',
  },
  {
    type: 'paragraph',
    content:
      'Kody emisyjne muszą być przygotowane do asynchronicznego osadzenia na stronie, w szczególności niedozwolone jest użycie instrukcji document.write(). W związku z tym powinny być dostarczone w postaci iFrame. Dopuszczalne jest użycie JavaScript, jednak w tym przypadku będą one umieszczone w iFrame po stronieDigital Contact. Preferowanym sposobem emisji jest serwowanie kreacji po stronie Digital Contact ze zliczeniami third party w postaci pikseli. Wszystkie zliczenia i kody emisyjne muszą być zaciągane po protokole strony. Tak więc należy stosować składnię src=”//mojastrona.pl/code.js” i src=”/mojastrona.pl/pixel.gif” Ponadto, każdy element 3rd party używany na serwisach Digital Contact musi wspierać komunikację po SSL.',
  },
  {
    type: 'paragraph',
    content:
      'W przypadku emisji na urządzenia typu desktop, tablet oraz smartfon istnieje poniższe sposoby emisji reklamy:',
  },
  {
    type: 'list',
    content: [
      'Klient dostarcza dedykowane kreacje reklamowe na poszczególne urządzenia',
      'Klient dostarcza kreację (grafika statyczna lub html5), która będzie skalowania do rozdzielczości ekranu na którym jest przeglądana.',
    ],
  },
  {
    type: 'paragraph',
    content:
      'Klient akceptując testy kreacji wystawione przez zespół Digital Contact potwierdza ich poprawność odnośnie wyglądu, działania, wykonania akcji i zliczania w systemach zewnętrznych (jeśli takie występują).',
  },
];
