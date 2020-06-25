export const HTML5 = [
  {
    type: 'paragraph',
    content:
      'Poprawnie przygotowana kreacja HTML5 musi zawierać  pliki spakowane do formatu .zip zawierające plik .html oraz grafiki, skrypty i pozostałe materiały. Nie jest konieczne dołaczanie pliku manifest.json, ale jeśli już występuje w materiałach powinien znajdować się w źródłowym katalogu spakowanego materiału.',
  },
  {
    type: 'paragraph',
    content:
      'Zródłowy plik html powinien nosić nazwę index.html. Plik ten powinien zawierać  poniższy kod w sekcji head pliku (poniędzy znacznikami <head i </head>, idalnie tuż przed znacznikiem zamykającym):',
  },
  {
    type: 'code',
    content: [
      `<link type="text/css" rel="stylesheet" href="//static.clickonometrics.pl/html5.css" />`,
      `<script type="text/javascript" src="//sta c.clickonometrics.pl/clickTag.js"></script>`,
      `<script>`,
      '\xa0\xa0var CCM_clickTag = CCM_getClickTag({',
      `\xa0\xa0//method CCM_getClickTag() returns CCM_clickTag`,
      `\xa0\xa0\xa0\xa0clickTarget: 'canvas'`,
      `\xa0\xa0//change the string canvas to link id which href will be replaced automatically with clickTag`,
      `\xa0\xa0\xa0\xa0});`,
      `</script>`,
    ],
  },
  { type: 'paragraph', content: 'Alternatywny  kod używany z redirectem:' },
  {
    type: 'code',
    content: [
      '<script>',
      '\xa0var CCM_CountGo = CCM_getCountGo({',
      '\xa0\xa0//method CCM_getClickTag() returns CCM_clickTag',
      `\xa0\xa0clickTarget: 'canvas'`,
      '\xa0\xa0//change the string canvas to link id which href will be replaced automatically with clickTag',
      `\xa0\xa0redirect: 'http://redirecturl.com'`,
      '\xa0\xa0//url to redirect after click',
      '\xa0});',
      '</script>',
    ],
  },
  {
    type: 'paragraph',
    content:
      'Jeśli do kreacji dołączony jest plik manifest.json powinien zawierać wymiary reklamy oraz informację o głównym pliku html będącym źródłowym plikiem reklamy. Poniższy przykład pokazuje prawidłowo skonstruowane zapisy pliku manifest.json dla bannera o wymiarach 750x200px:',
  },
  {
    type: 'code',
    content: [
      '{',
      '\xa0\xa0"version": "1.0",',
      '\xa0\xa0"title": "Banner name",',
      '\xa0\xa0"width" : "750",',
      '\xa0\xa0"height": "200",',
      '\xa0\xa0"clicktags": {',
      '\xa0\xa0\xa0\xa0"clickTag": "http://landingpagehere.com" },',
      '\xa0\xa0"source": "index.html"',
      '}',
    ],
  },
  { type: 'paragraph', content: 'Maksymalna waga kreacji HTML5 to 120kB' },
];
