const data = [
  {
    type: 'papier',
    list: [
      'papier',
      'časopisy',
      'noviny',
      'zošity',
      'kancelársky papier',
      'letáky',
      'katalógy',
      'pohľadnice',
      'listy',
      'papierové tašky',
      'lepenka',
      'vlnitá lepenka',
      'hladká lepenka',
      'kartón',
      'skartovaný papier',
      'papierové krabičky',
      'krabičky',
      'kartónové škatule',
      'papierové lepiace pásky',
      'obálky s plastovým okienkom',
      'papiere',
      'papierové obaly od korenín',
      'papierové obaly polievok',
      'papierové obaly od pudingov',
      'papierové obaly od potravín',
      'papierové obaly kombinované s plastom',
      'magazíny',
      'osobné doklady',
      'dokumenty',
      'dokument',
      'osvedčenie',
      'potvrdenie',
      'potvrdenka',
      'preukaz',
      'preukážka',
      'vysvedčenie',
      'osvedčenie',
      'certifikát',
      'kartón',
      'krabica',
      'škatuľa',
      'obálka',
      'box',
      'vizitka',
    ],

    symbols: [
      'PAP',
      '20 – vlnitá lepenka',
      '20',
      '21',
      '22',
      '21 – hladká lepenka',
      '22 – papier',
    ],

    notes: [
      'Lepenka a kartón idú do koša s dôrazom na minimalizáciu objemu, teda stlačené.',
      'Papierové krabice a kartónové škatule (papierové lepiace pásky môžu ostať,s dôrazom na minimalizáciu objemu, teda stlačené).',
      'Obálky s plastovým okienkom môžu mať ponechané okienko, to neprekáža.',
      'Papiere zopnuté kovovou spinkou len v malom množstve (malé množstvo spiniek neprekáža, ale je možné ich aj oddeliť a naložiť s nimi ako s ostatnými kovmi).',
      'Papierové obaly môžu byť aj kombinované s iným materiálom za podmienky, že papier je prevládajúca zložka.',
    ],
  },

  {
    type: 'sklo',
    list: [
      'číre sklo',
      'zelené sklo',
      'hnedé sklo',
      'sklenené fľaše',
      'sklenené poháre',
      'sklenené vázy',
      'úlomky tabuľového skla',
      'sklenené črepy',
      'mastné sklenené fľaše od kuchynského oleja',
      'sklenené obaly',
      'čisté sklenené fľaše',
      'sklenené črepiny',
      'sklenené fľaše od kuchynského oleja',
      'sklenená fľaša',
      'sklenený črep',
      'sklenené úlomky',
      'rozbité sklenené fľaše',
      'rozbité sklenené poháre',
      'polámané sklo',
      'rozbité sklo',
      'sklenené dózy',
    ],

    symbols: [
      'GL',
      '70 – číre sklo',
      '71 – zelené sklo',
      '72 – hnedé sklo',
      '70',
      '71',
      '72',
    ],

    notes: [
      'Sklenené fľaše vyhadzujeme bez zvyškov obsahu či chemických nečistôt.',
      'Nálepky, etikety, uzávery zo sklenených fliaš nie je potrebné odstraňovať.',
      'Sklenené obaly od kozmetiky, kávy či pochutín môžu ostať s vrchnákmi - pri recyklácii sa robí magnetická aj nemagnetická separácia, pri ktorej sa vrchnáky odstránia.',
      'Mastné sklenené fľaše od kuchynského oleja neumývame, olej vyplavený do vody je problematický v rámci procesu čistenia odpadových vôd a pre samotnú kanalizačnú sieť.',
    ],
  },

  {
    type: 'kovy',
    list: [
      'nemagnetické kovy',
      'hliníkový kov',
      'tenkostenný hliník',
      'hliník',
      'obaly z čokolád',
      'hliníkové viečka od kompótov',
      'hliníkové viečka od jogurtov',
      'hliníkové viečka od mliečnych výrobkov',
      'tenké hliníkové obaly od paštét',
      'alobal',
      'magnetické kovy',
      'železné kovy',
      'železo',
      'konzervy',
      'kovové obaly od jedla',
      'kovové obaly od drogérie',
      'kovové obaly od kozmetiky',
      'kovové obaly od sprejov',
      'kovové obaly',
      'kovové súdky',
      'kovové uzávery',
      'uzávery od kompótov',
      'plechovky',
      'hliníkové plechovky',
      'železné plechovky',
      'mäkké kovové vrecúška',
      'mäkké kovové vrecúška z kávy',
      'mäkké kovové vrecúška z niektorých druhov oblátok',
      'obaly s prevládajúcou zložkou kovu',
      'kovové obaly',
      'kovové tuby od zubnej pasty',
      'kovové tuby od krémov kovové tuby od liečiv',
      'oceľ',
      'hliník',
      'železo',
      'kovové viečka',
      'kovové viečko',
      'kovové tuby od liekov',
      'kovové obaly od zubnej pasty',
      'kovové obaly od krémov',
      'kovový obal od zubnej pasty',
      'kovový obal od krému',
      'kovový obal od liekov',
      'kovový obal',
      'obal od čokolády',
      'pozlátko',
      'pozlátko z čokolády',
      'konzerva',
      'plechovka',
    ],

    symbols: ['FE (40 – oceľ)', 'ALU (41 – hliník)', 'FE', 'ALU', '41', '40'],

    notes: [
      'Alobal - použitý na balenie alebo z varenia/pečenia, ale bez zvyškov jedla.',
      'Konzervy vyhadzujeme bez zvyškov jedla – prípadný olej prelejeme cez sitko do plastovej fľaše a odniesieme na ZBERNÉ MIESTO.',
      'Mastnú konzervu treba vytrieť papierom a ten hodiť do ZMESOVÉHO ODPADU.',
      'Patria sem plechovky (hliníkové aj železné) bez označenia symbolom zálohovania alebo so znehodnoteným, či poškodeným obalom alebo jeho časťou (prázdne, s dôrazom na minimalizáciu objemu stlačené).',
      'Obaly s prevládajúcou zložkou kovu (napr. vyprázdnené kovové tuby od zubnej pasty, krémov a liečiv) – hoci je pri týchto materiáloch recyklovateľnosť stále problematická, technológie sa stále zdokonaľujú a budú tak, dúfajme, tieto nedostatky čoskoro dobiehať (stále je lepšie uprednostňovať obaly z jednodruhových materiálov).',
    ],
  },

  {
    type: 'plasty',
    list: [
      'plastové fľaše',
      'plastová fľaša',
      'plastové fľaše od nápojov',
      'plastové fľaše od mlieka (živočíšneho aj rastlinného pôvodu)',
      'plastové fľaše od sirupov',
      'plastové fľaše od octu',
      'plastové fľaše od tvrdého alkoholu',
      'plastové fľaše od kuchynského oleja',
      'plastové obaly',
      'kelímky',
      'plastové obaly a kelímky od potravín',
      'plastový obal od kečupu',
      'plastový obal od horčice',
      'obal od jogurtu',
      'obal od smotany',
      'plastové nádoby na potraviny',
      'plastové škatule na potraviny',
      'plastové poháre na nápoje',
      'plastové poháre',
      'fólie',
      'fólia',
      'bublinková fólia',
      'strečová fólia',
      'plastové tašky',
      'mikroténové vrecká',
      'mikroténové sáčky',
      'sáčky',
      'plastové obaly od liekov',
      'plastové obaly od pracích prostriedkov',
      'plastové obaly od čistiacich prostriedkov',
      'plastové obaly od kozmetiky',
      'obalový polystyrén (čistý)',
      'vedrá',
      'vedro',
      'plastové misy',
      'plastová misa',
      'plastové misky',
      'plastové misy',
      'plastové vešiaky',
      'plastový vešiak',
      'plastové kvetináče',
      'plastový kvetináč',
      'plastový zmeták',
      'odkvapkávač na riad',
      'platobné karty (bez čipu)',
      'platobná karta (bez čipu)',
      'vernostné karty (bez čipu)',
      'vernostná karta (bez čipu)',
      'plastová tuba od zubnej pasty',
      'plastový obal od zubnej pasty',
      'zubné kefky',
      'zubná kefka',
      'plastové obaly',
      'plastové obaly od korenín',
      'plastové obaly od sladkostí',
      'plastové obaly od zemiakových lupienkov',
      'obal od čipsov',
      'plastové obaly od potravy pre zvieratá',
      'polystyrén (len ak je čistý)',
      'umelohmotná fľaša',
      'umelohmotné fľaše',
      'umelohmotné obaly',
      'umelohmotný obal',
    ],

    symbols: [
      'PET (1)',
      'PET',
      '1',
      'HDPE (2)',
      'HDPE',
      '2',
      'PVC (3)',
      'PVC',
      '3',
      'LDPE (4)',
      'LDPE',
      '4',
      'PP (5)',
      'PP',
      '5',
      'PS (6)',
      '6',
      '7',
      '7/O',
      '7/Ostatné',
      '7/Other',
    ],

    notes: [
      'Plastové fľaše od nápojov bez označenia symbolom zálohovania, alebo so znehodnoteným, či poškodeným obalom alebo jeho časťou (prázdne, neznečistené, s dôrazom na minimalizáciu objemu stlačené).',
      'Plastové fľaše od kuchynského oleja vyhadzujeme prázdne, neznečistené, stlačené. Fľaše od oleja neumývame, olej do vody nepatrí – použitý, alebo starý kuchynský olej zlievame cez sitko do jednej takejto fľaše a odnesieme na miesta odberu.',
      'Plastové obaly a kelímky od potravín  vyhadzujeme prázdne, neznečistené, stlačené, viečko odtrhneme a vyhodíme zvlášť, nakoľko ide často o iný materiál a iný spôsob recyklácie alebo zhodnotenia.',
      'POZOR! Polystyrénové tácky napr. od mäsa, mäsových výrobkov patria do ZMESOVÉHO ODPADU – ich tuk, šťava sa dostali do štruktúry plastu a znemožňujú recykláciu, ani dôkladné umytie nepomôže.',
      'Plastové obaly od liekov vyhadzuejme prázdne, bez liekov, zvyšné lieky vrátime do LEKÁRNE.',
      'Obalový polystyrén iba čistý, nesmie byť znečistený napr. jedlom – pri veľkom množstve však zaviezť na ZBERNÝ DVOR a nezapĺňať zbytočne kontajnery na zberných miestach.',
      'Platobné a vernostné karty - treba z nich odstrihnúť čip, ktorý patrí do ZMESOVÉHO ODPADU.',
      'Patria sem aj zubné kefky s výnimkou tých, kde výrobca ponúka zber - tie môžeme vrátiť do predajne alebo na iné, výrobcom ponúkané miesto – napr. zubné kefky Curaprox (vyrábajú z nich koše na triedený odpad do škôl).',
      'Plastové obaly bývájú často označené „C/prevládajúca zložka“ (neznečistené, vyprázdnené, môžu byť aj kombinované s iným materiálom za podmienky, že plast je prevládajúca zložka).',
    ],
  },

  {
    type: 'nápojové kartóny',
    list: [
      'nápojové kartóny na báze lepenky',
      'obaly od mliečnych výrobkov',
      'obal od mlieka',
      'obal od trvanlivej smotany',
      'obal od smotany na šľahanie',
      'obal od džúsu',
      'obal od vína',
      'nápojový kartón',
      'škatuľa od mlieka',
      'škatuľa od džúsu',
      'škatuľa od smotany na šľahanie',
      'škatuľa od vína',
    ],

    symbols: ['C/PAP', 'C', 'PAP', '80', '81', '84'],

    notes: [
      'Obaly od nápojov a potravín vyhadzujeme vyprázdnené, stlačené, neznečistené a uzavreté plastovým vrchnákom',
    ],
  },

  {
    type: 'kuchynský bioodpad',
    list: [
      'zvyšky z príprav jedál rastlinného aj živočíšneho pôvodu',
      'nespotrebované zvyšky jedál',
      'nespotrebované zvyšky potravín',
      'zvyšky pokazených potravín',
      'potraviny po záruke',
      'mäso po záruke',
      'malé kosti',
      'kosti z rýb',
      'kosti z hydiny',
      'papierové čajové vrecúško',
      'papierové čajové vrecúška',
      'čajové vrecúška',
      'čajové vrecúško',
      'papierové čajové vrecko',
      'papierové čajové vrecká',
      'sypaný čaj',
      'kávová usadenina',
      'chlieb',
      'pečivo',
      'cestoviny',
      'ryža',
      'strukoviny',
      'obilniny',
      'zaváraniny - bez obalu',
      'ovocie',
      'zelenina',
      'ovocné šupky',
      'zeleninové šupky',
      'pokazené ovocie',
      'pokazená zelenina',
      'plesnivé ovocie',
      'plesnivá zelenina',
      'hnilé ovocie',
      'hnilá zelenina',
      'vajcia',
      'vajce',
      'vajíčka',
      'vajíčko',
      'škrupiny z vajec',
      'škrupinky z vajec',
      'škrupinka z vajíčka',
      'škrupina z vajíčka',
      'citrusy',
      'papierové vreckovky',
      'kuchynské servítky',
      'papierové servítky',
      'papierová servítka',
      'kuchynská servítka',
      'kompostovateľné vrecká',
      'kompostovateľné vrecko',
      'papierové vrecká',
      'pepierové vrecko',
      'papierová taška',
      'prírodné hubky',
      'prírodná hubka',
      'lufa',
      'morské huby',
      'celulóza',
      'kukuričné vrecká',
      'kukuričné vrecko',
      'kompostovateľné taniere',
      'kompostovateľné príbory',
      'plesnivý banán',
      'plesnivý melón',
      'zvyšky jedla',
      'kuchynské zvyšky',
      'zbytky jedla',
      'kuchynské zbytky',
      'pokazené jedlo',
      'pokazené potraviny',
      'pokazené jedlo',
      'skazené jedlo',
      'skazené potraviny',
      'nedojedené potraviny',
      'nedojedené jedlo',
      'zvyšok po káve',
      'zbytok po káve',
      'plesnivé jedlo',
      'plesnivé potraviny',
    ],

    symbols: ['OK compost', 'HOME OK compost', 'compost', 'OK kompost'],

    notes: [
      'Papierové čajové vrecúška vyhadzujeme bez spiniek a poplastovaných častí, aj vylúhované.',
      'Zaváraniny vyhadzujeme bez sklenených, plechových, resp. iných obalov - bez tekutej časti.',
      'Papierové vreckovky - použité samozrejme ako servítky/utierky pri varení či smrkaní, nie „na záchode“ ani nasiaknuté čistiacimi prostriedkami.',
      'Certiifkované kompostovateľné vrecká sú označené logom OK compost, OK home compost.',
      'Prírodné hubky určené na riad a umývanie.',
    ],
  },

  {
    type: 'záhradný bioodpad',
    list: [
      'surové ovocie',
      'surová zelenina',
      'zvyšky surového ovocia',
      'zvyšky surovej zeleniny',
      'šupky zo surového ovocia',
      'šupky zo surovej zeleniny',
      'odrezky a ohryzky surového ovocia',
      'odrezky a ohryzky surovej zeleniny',
      'zvyšky rastlín',
      'zvyšky kvetov',
      'tráva',
      'lístie',
      'seno',
      'slama',
      'burina',
      'hlina',
      'drevené piliny',
      'drevná štiepka',
      'malé kusy konárov',
      'odrezky z viniča',
      'kompostovateľné vrecká',
      'kompostovateľné vrecko',
      'rastliny',
      'kvety',
      'kvet',
      'listy',
      'zemina',
      'malé konáre',
      'konáriky',
      'konár',
      'konárik',
      'vinič',
    ],

    symbols: ['OK compost', 'HOME OK compost', 'compost', 'OK kompost'],

    notes: [
      'Drevo nesmie byť farbené alebo chemicky ošetrované).',
      'Odrezky z viniča (veľké objemy BRKO sa zberajú v rámci dvoch kampaňovitých zberov počas roka na jar a jeseň).',
    ],
  },

  {
    type: 'kompost',
    list: [
      'surové ovocie',
      'surová zelenina',
      'zvyšky surového ovocia',
      'zvyšky surovej zeleniny',
      'šupky zo surového ovocia',
      'šupky zo surovej zeleniny',
      'odrezky a ohryzky surového ovocia',
      'odrezky a ohryzky surovej zeleniny',
      'škrupiny z vajec',
      'škrupinky z vajec',
      'škrupinka z vajíčka',
      'škrupina z vajíčka',
      'papierové vreckovky',
      'kuchynské servítky',
      'papierové servítky',
      'papierová servítka',
      'kuchynská servítka',
      'papierové obaly od vajíčok',
      'rolky od toaletného papiera',
      'rolky od kuchynských servítok',
      'papierové čajové vrecúško',
      'papierové čajové vrecúška',
      'čajové vrecúška',
      'čajové vrecúško',
      'papierové čajové vrecko',
      'papierové čajové vrecká',
      'sypaný čaj',
      'kávová usadenina',
      'kompostovateľné vrecká',
      'kompostovateľné vrecko',
      'kompostovateľné taniere',
      'kompostovateľné príbory',
      'nefarbené vlasy',
      'nelakované nechty',
      'bambusové zubné kefky',
      'prírodné hubky',
      'prírodná hubka',
      'lufa',
      'morské huby',
      'celulóza',
      'zvyšky rastlín',
      'zvyšky kvetov',
      'tráva',
      'lístie',
      'seno',
      'slama',
      'burina',
      'hlina',
      'drevené piliny',
      'drevná štiepka',
      'malé kusy konárov',
      'odrezky z viniča',
      'vychladnutý popol',
      'uhlie z dreva',
      'korok',
      'nahnité ovocie',
      'nahnitá zelenina',
      'organická bavlna (nefarbená, nebielená)',
      'ľan (nefarbený,nebielený)',
      'konope (nefarbené, nebielené)',
      'vlna (nefarbená, nebielená)',
      'juta (nefarbená, nebielená)',
      'hodváb (nefarbený, nebielený)',
      'bambus (nefarbený, nebielený)',
      'kašmír (nefarbený, nebielený)',
      'voskované bavlnené obrúsky',
      'podrvené orechové škrupinky',
      'kôstky',
      'trus bylinožravých zvierat',
      'šupky z citrusov (len v malom množstve)',
      'kompostovateľné vrecká',
      'papierové vrecká',
      'kartón (natrhaný)',
      'sójový vosk',
      'včelí vosk',
      'zvyšok po káve',
      'zbytok po káve',
      'zemina',
      'malé konáre',
      'konáriky',
      'konár',
      'konárik',
      'vinič',
      'rastliny',
      'kvety',
      'kvet',
      'listy',
      'zemina',
      'malé konáre',
      'konáriky',
      'konár',
      'konárik',
      'vinič',
      'rolka od toaletného papiera',
      'rolka od kuchynského papiera',
      'papierové vrecko',
      'papierová taška',
      'kompostovateľné vrecko',
      'orechové škrupinky',
      'popol',
      'uhlie',
      'voskovaný bavlnený obrúsok',
      'bavlnený obrúsok',
    ],

    symbols: ['OK compost', 'HOME OK compost', 'compost', 'OK kompost'],

    notes: [
      'Kompostovateľné bambusové zubné kefky (ak štetinky nie sú kompostovateľné, je potrebné ich odstrániť).',
      'Drevo nesmie byť farbené alebo chemicky ošetrované.',
      'Certifikované kompostovateľné vrecká sú označené logom OK compost, OK home compost.',
      'Papierové vrecká a natrhaný kartón musí byť nefarbený a bez lepiacej pásky.',
    ],
  },

  {
    type: 'jedlé oleje a tuky',
    list: [
      'repkový olej',
      'slnečnicový olej',
      'olivový olej',
      'rastlinný olej',
      'živočíšne tuky',
      'maslo',
      'masť',
      'výpek',
      'použité jedlé oleje',
      'použité jedlé tuky',
      'olej z konzervy',
      'zvyšný olej z jedla',
      'zvyšný olej po fritovaní',
      'zvyšný olej po vyprážaní',
      'zvyšný olej po pečení',
      'olej zo šalátu',
      'jedlý olej po expirácií',
      'použitý jedlý olej',
      'použitý jedlý tuk',
      'jedlý olej po dátume spotreby',
    ],

    symbols: [],

    notes: [
      'Oleje a tuky musia byť zbavené tuhých nečistôt a zvyškov jedál (je vhodné ich precediť cez sitko) a uložené v uzatvorenej čistej plastovej fľaši.',
      'Olej neliať priamo do zbernej nádoby, ale vliať do čistej plastovej fľaše a umiestniť do príslušnej nádoby na triedený zber oleja a tukov.',
    ],
  },

  {
    type: 'zberný dvor',
    list: [
      'guma',
      'gumené produkty',
      'silikón',
      'drevo z nábytku',
      'nábytok',
      'chemické látky',
      'laky',
      'riedidlá',
      'maliarske farby',
      'motorové oleje',
      'asfaltový papier',
      'dechtový papier',
      'polystyrén',
      'zrkadlo',
      'drôtené sklo',
      'bezpečnostné sklo',
      'autosklo',
      'lepené sklo',
      'plexisklo',
      'technické sklo',
      'tabuľové sklo',
      'sklo z okna',
      'sklo z dverí',
      'keramika',
      'porcelán',
      'obkladačky',
      'TV obrazovky',
      'monitory',
      'pozlátené sklo',
      'pokovované sklo',
      'borosilikátové sklo',
      'zapekacie misy',
      'borosilikátové fľaše',
      'varné sklo',
      'žiarovky',
      'žiarivky',
      'LEDky',
      'halogénky',
      'autolaky',
      'laky na drevo',
      'kovový šrot',
      'reťaze',
      'skrutky',
      'kľúče',
      'hrnce',
      'kovové skrinky',
      'žalúzie',
      'poličky z kovu',
      'káble',
      'hadice',
      'molitan',
      'autoplasty',
      'bazény',
      'nafukovacie bazéniky',
      'fólie zo stavieb',
      'podlahové krytiny',
      'plastové okná',
      'hračky s elektronickými časťami',
      'hračky',
      'textílie',
      'topánky',
      'kabelky',
      'umelé kvety',
      'mazivá',
      'hydraulické oleje',
      'lak',
      'riedidlo',
      'motorový olej',
      'maliarska farba',
      'borosilikátová fľaša',
      'zapekacia misa',
      'varná doska',
      'žiarovka',
      'žiarivka',
      'LEDka',
      'LED',
      ' halogénka',
      'autolak',
      'lak na drevo',
      'skrutka',
      'kľúč',
      'hrniec',
      'kovová skrinka,',
      'polička z kovu',
      'kábel',
      'hadica',
      'molitan',
      'autoplast',
      'bazén',
      'nafukovací bazénik',
      'fólia zo stavby',
      'podlahová krytina',
      'plastové okno',
      'hračka s elektronickými časťami',
      'hračka',
      'textília',
      'kabelka',
      'umelý kvet',
      'mazivo',
      'hydraulický olej',
      'chemické látky',
      'laky',
      'riedidlá',
      'maliarske farby',
    ],

    symbols: [],

    notes: [
      'Patrí sem aj veľkoobjemný odpad, ktorý sa nevmestí do zmesového odpadu.',
      'Motorové oleje ich zvyšky neumývame, ale odniesieme v pôvodnom obale.',
      'Patrí tu aj zrkadlo, kvôli neoddeliteľnej tenkej pokovovanej vrstve, vďaka ktorej sa v ňom vidíme.',
      'Autosklo obsahuje špeciálne prímesi, vďaka ktorým sa má možnosť rozbiť na malé čiastočky, ktoré nie sú ostré a nebezpečné.',
    ],
  },

  {
    type: 'miesta spätného zberu',
    list: [
      ,
      'žiarivky',
      'výbojky',
      'LEDky',
      'použité prenosné batérie',
      'použité prenosné akumulátory',
      'tužkové batérie',
      'gombíkové batérie',
      'autobatérie',
      'akumulátory',
      'batérie',
      'pneumatiky',
      'žiarovky',
      'halogénky',
      'TV obrazovky',
      'monitory',
      'hračky s elektronickými časťami',
      'kávové kapsule Nespresso',
      'telka',
      'televízor',
      'obrazovka',
      'monitor',
      'žiarivka',
      'výbojka',
      'LEDka',
      'LED',
      'baterky',
      'baterka',
      'halogénka',
    ],

    symbols: [],

    notes: [],
  },

  {
    type: 'textil',
    list: [
      'šatstvo',
      'odevy',
      'prikrývky',
      'deky',
      'posteľná bielizeň',
      'obuv',
      'topánky',
      'čiapky',
      'šále',
      'šatky',
      'rukavice',
      'plyšové hračky',
    ],

    symbols: [],

    notes: [
      'Znovu použiteľné blečenie, či obuv vhadzujeme do zberných nádob čisté, suché, zaviazané v čistom plastovom vreci (bude to použité buď na charitu, do secondhandov, alebo zrecyklované na iný produkt, napr. izolácie atď.)',
    ],
  },

  {
    type: 'zmesový odpad',
    list: [
      'drobné gumené produkty',
      'drobné silikónové produkty',
      'nespotrebovaná kozmetika',
      'čistiace prípravky',
      'čistiace prostriedky',
      'parafínový vosk',
      'mokrý papier',
      'mastný papier',
      'špinavý papier',
      'povoskovaný papier',
      'darčekový papier',
      'darčekové tašky',
      'darčeková taška',
      'termopapier',
      'účtenky',
      'účtenka',
      'polystyrén(znečistený)',
      'menštruačné vložky',
      'tampóny',
      'plienky',
      'rúška',
      'respirátory',
      'menštruačná vložka',
      'tampón',
      'plienka',
      'rúško',
      'respirátor',
      'zrkadlo',
      'bezpečnostné sklo',
      'autosklo',
      'keramika',
      'porcelán',
      'obkladačky',
      'obkladačka',
      'keramický hrnček',
      'pozlátené sklo',
      'pokovované sklo',
      'termoobaly',
      'termoobal',
      'polystyrénové tácky od mäsa',
      'guma',
      'káble',
      'hadice',
      'molitan',
      'plexisklo',
      'autoplasty',
      'žalúzie',
      'bazény',
      'bazén',
      'bazénik',
      'nafukovacie bazéniky',
      'fólie zo stavieb',
      'stavebná fólia',
      'kávové kapsule',
      'kávová kapsula',
      'nylonové čajové vrecúška',
      'nylonové čajové vrecúško',
      'lepené čajové vrecúško',
      'lepené čajové vrecúška',
      'cigaretové ohorky',
      'cigaretový ohorok',
      'špak',
      'špaky',
      'obsah vrecka z vysávača',
      'trus zvierat',
      'psie výkaly',
      'mačacie výkaly',
      'piliny z drevotriesky',
      'drevotrieska',
    ],

    symbols: [],

    notes: [
      'Všetko čo patrí do zmesového odpadu, ale má to veľký objem, zanesieme do zberného dvora.',
    ],
  },
];
