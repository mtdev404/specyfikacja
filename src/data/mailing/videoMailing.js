export const VIDEO_MAILING = [
  {
    type: 'paragraph',
    content:
      'Oprócz e-mailingu przygotowanego zgodnie z wymaganiami dla e-mailingu należy dostarczyć plik video spełniający następujące warunki:',
  },
  {
    type: 'list',
    content: [
      'Format pliku: MPG, MP4',
      'Czas trwania materiału: do 30 sekund',
      'Rozdzielczość: materiał video w rozdzielczości nie mniejszej niż 720x576 px (720p)',
    ],
  },
  {
    type: 'paragraph',
    content: 'Dodatkowo w kreacji html należy uwzględnić obszar filmu:',
  },
  {
    type: 'list',
    content: [
      'Komórka w tabeli o wymiarach 320x180 px (16:9) lub 320x240 px (4:3).',
      'Komórka z filmem powinna mieć nadany jednolity kolor, np. czarny (#000000).',
      'Komórka powinna zawierać obrazek (gif/jpg) z wybraną, pojedynczą klatką z filmu o wymiarach identycznych z daną komórką. W przypadku niedostarczenia obrazek zostanie dobrany i przedstawiony do akceptacji klienta.',
      'Obszar wideo nie może być zasłonięty przez element graficzny lub tekstowy.',
    ],
  },
  {
    type: 'paragraph',
    content: 'Przykładowa kreacja video e-mailingu (schemat):',
  },
  {
    type: 'image',
    content: '../../assets/video_mailing.png',
    name: 'video-mailing',
  },
  {
    type: 'paragraph',
    content:
      'Strona docelowa video e-mailingu może kierować bezpośrednio na adres reklamodawcy lub najpierw na stronę video landing page. Do realizacji video landing page’a  konieczne jest dostarczenie:',
  },
  {
    type: 'list',
    content: [
      'Tytuł strony',
      'Plik video w formacie MPG lub MP4, o czasie trwania do 30 sekund i rozdzielczośc nie mniejsza niż 720x576 px (720',
      'Plik html z gotową responsywną stroną, zawierającą formularz',
      'Wykazu pól formularza i dozwolonych dla nich wartości',
      'Wskazany sposób i termin przekazania zebranych leadów',
    ],
  },
];
