export const MAILING = [
  {
    type: 'paragraph',
    content:
      'Do realizacji mailingu konieczne jest dostarczenie kreacji e-mailingu (paczka .zip, zawierająca index.html oraz obrazki) oraz dodatkowych informacji:',
  },
  {
    type: 'list',
    content: [
      'Nazwy nadawcy mailingu (bez adresu zwrotnego!)',
      'Tematu wiadomości, z jakim ma być wysłany mailing. Temat wiadomości nie powinien wprowadzać w błąd odbiorcy np. zaczynać się od:  RE:, FD:.',
      'Preheader (opcjonalnie)',
      'Pełnych danych firmy klienta do stopki',
      'Adresów mailowych, na które będzie zrealizowana wysyłka testowa w celu akceptacji mailingu przez klienta',
    ],
  },
  { type: 'paragraph', content: 'Wymagania techniczne mailingu:' },
  {
    type: 'list',
    content: [
      'Waga (plik index.html + obrazki) do 200 kB.',
      'Kodowanie polskich znaków w standardzie UTF-8.',
      'Kod HTML musi być wolny od błędów, zgodny ze standardem W3C dla HTML 4.01 (http://www.w3.org/TR/HTML401/). Deklaracja typu dokumentu musi być umieszczona nad sekcją <html>:',
    ],
  },
  {
    type: 'code',
    content: [
      `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`,
    ],
  },
  {
    type: 'list',
    content: [
      'Należy pamiętać o zamknięciu wszystkich tagów w pliku HTML',
      'W mailingu spersonalizowanym, zmienne (np. imię, tytuł) powinny być przedstawione w formie {%imie%}, {%tytul%}. ',
      'Layout mailingu musi być zbudowany w oparciu o znaczniki <table>. Nie jest zalecane stosowanie tagu <div>.',
      'Kreacja powinna znajdować się w tabeli obejmującej mającej parametr width o wartości 100%. Tabeli obejmującej należy nadać jednolite tło (background-color). Zaleca się stosowanie tła korespondującego z samą kreacją.',
      'Dla wszystkich tabel w kreacji należy stosować cellpadding="0" cellspacing="0".',
      'Każda komórka tabeli powinna mieć nadaną wysokość i szerokość w pikselach.',
      'Arkusze stylów CSS nie mogą być pobierane z zewnętrznego pliku – style muszą być zdefiniowane bezpośrednio w kodzie HTML mailingu. Styl należy definiować wyłącznie jako inline style, poprzez atrybut  style="" wewnątrz tagu.',
      'Mailing powinien być wycentrowany. Należy używać znacznika <table> z atrybutem align="center".',
      'Zalecane jest używanie podstawowych czcionek systemowych, np. Arial, Verdana, Tahoma lub Times New Roman z określeniem ich wielkości',
      'Każdy element graficzny powinien być opatrzony atrybutem alt z odpowiednio przygotowaną treścią, zachęcającą do pobrania grafiki, np. alt="Pobierz obrazki".',
      'Każdy obrazek powinien mieć nadane wymiary w px (np. width=”600” height=”200” lub style=”width:600px; height:200px”',
      'Zalecamy dodawać w linkach (tag <a>) parametr target="_blank".',
      'Kody monitorujące należy podpiąć pod każdy istniejący link w kreacji.',
      'Do linku z kodem zliczającym otwarcia (piksel śledzący) należy dodać nochangeurl="1" width="1" height="1" alt="".',
      'Duże elementy graficzne powinny być pocięte na kilka części.',
      'Kreacja mailingu (pliki graficzne oraz index.html) powinna być umieszczona w jednym folderze o czytelnej nazwie, np. nazwa_klienta _wersja, następnie spakowana i przesłana jako plik archiwum *.zip. W nazwie folderów oraz podsyłanych plików (html, obrazki) nie wolno stosować polskich znaków oraz spacji.',
      'Nie należy stosować margin, padding (zalecamy stosowanie pustych komórek tabel o określonych szerokościach i wysokościach w px)',
      'Nie należy stosować rowspan, colspan (zalecamy stosowanie zagnieżdżonych tabel, czyli tabela w tabeli)',
      'Nie należy stosować height="100%" (wysokość tabeli/komórki lub obrazka należy określić w pikselach np. height="200")',
      'Nie należy stosować skryptów i obiektów (JavaScript, ramek, ActiveX, elementów dynamicznych html, animacji Flash, itp.)',
      'Nie należy stosować line-height',
      'Nie należy stosować textarea, input',
      'Nie należy stosować obrazka jako tła (background)',
    ],
  },
  { type: 'paragraph', content: 'Przykładowa kreacja e-mailingu (kod):' },
  {
    type: 'code',
    content: [
      `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`,
      `<html>`,
      `<head>`,
      `\xa0\xa0<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">`,
      `\xa0\xa0<title>tytuł mailingu</title>`,
      `\xa0\xa0<style type="text/css">`,
      `\xa0\xa0\xa0\xa0body {`,
      `\xa0\xa0\xa0\xa0\xa0\xa0margin: 0;`,
      `\xa0\xa0\xa0\xa0\xa0\xa0padding: 0;`,
      `\xa0\xa0\xa0\xa0}`,
      ``,
      `\xa0\xa0\xa0\xa0img {`,
      `\xa0\xa0\xa0\xa0\xa0\xa0display: block;`,
      `\xa0\xa0\xa0\xa0\xa0\xa0border: none`,
      `\xa0\xa0\xa0\xa0}`,
      `\xa0\xa0</style>`,
      `</head>`,
      `<body>`,
      `\xa0\xa0<table width="100%" align="center" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">`,
      `\xa0\xa0\xa0\xa0<tr>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0<td>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<table width="600" align="center" cellspacing="0" cellpadding="0" border="0">`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<tr>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<td>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<a href="link" target="_blank">`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<img src="image1.jpg" border="0" width="600" height="100" style="display: block;
      border: none;" alt="kliknij: Pobierz obrazki, aby zobaczyć ofertę dla Ciebie!">`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</a>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</td>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</tr>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<tr>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<td>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<table width="600" align="center" cellspacing="0" cellpadding="0" border="0">`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<tr>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<td width="350">`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<a href="link" target="_blank">`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<img src="image2.jpg" border="0" width="350" height="400" style="display: block; border: none;" alt="kliknij: Pobierz obrazki, aby zobaczyć ofertę dla Ciebie!">`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</a>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</td>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<td width="250">`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<a href="link" target="_blank">`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<img src="image3.jpg" border="0" width="250" height="300" style="display: block; border: none;" alt="kliknij: Pobierz obrazki, aby zobaczyć ofertę dla Ciebie!">`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</a>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</td>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</tr>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</table>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</td>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</tr>`,
      `\xa0\xa0\xa0\xa0\xa0\xa0</table>`,
      `\xa0\xa0\xa0\xa0</td>`,
      `\xa0\xa0</tr>`,
      `\xa0\xa0</table>`,
      `<img src="link_zliczający_otwarcia" nochangeurl="1" width="1" height="1" alt="">`,
      `</body>`,
      `</html>`,
    ],
  },
];
