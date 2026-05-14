/* ============================================================
   TAO INVALSI – Simulazione  |  app.js
   Vanilla JS – no framework
   ============================================================ */

'use strict';

/* ============================================================
   SUPABASE CLIENT
   ============================================================ */
let supabaseClient = null;

function initSupabase() {
  if (typeof supabase !== 'undefined' &&
      typeof SUPABASE_URL !== 'undefined' && SUPABASE_URL &&
      typeof SUPABASE_ANON_KEY !== 'undefined' && SUPABASE_ANON_KEY) {
    try {
      supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } catch (e) {
      console.warn('Supabase init failed:', e);
    }
  }
}

/* ============================================================
   CURRENT TEST META (set when loading from Supabase)
   ============================================================ */
let currentTestId    = null;
let currentTestTitle = null;

/* ============================================================
   DATA  –  45 questions across 6 sections
   ============================================================ */
let SECTIONS = [
  /* ---- Testo 1 ---- */
  {
    id: 'testo-1',
    title: 'Testo 1',
    textTitle: 'Cene lontane',
    attribution: '(Michele Serra, Gli sdraiati, Feltrinelli, Milano 2013)',
    text: `
<p>La questione della tavola è un tema che mi ossessiona. C'era un'epoca – i miei anni di bambino, tra gli anni Sessanta e Settanta – in cui i bambini stavano a un tavolo separato da quello dei grandi. Non era considerata una cosa crudele: era normale, quasi dovuta. C'era il tavolo dei grandi e il tavolo dei piccoli, e la separazione era, per usare una parola che sarebbe piaciuta a mio padre, <em>funzionale</em>. Funzionale per gli adulti, che potevano parlare tra loro liberamente, senza dover alzare la voce, senza dover tagliare la carne a pezzetti, senza dover soffiare sulla minestra. Funzionale per i bambini, che potevano fare i bambini: parlare a voce alta, ridere di sciocchezze, sporcarsi la camicia, sentirsi tra pari.</p>
<p>Poi è arrivata l'ideologia dell'uguaglianza, e ha spazzato via quella separazione. I bambini sono stati promossi al tavolo dei grandi, e i grandi sono stati condannati a stare a tavola coi bambini. In teoria era un progresso. In pratica è stato un disastro. I bambini annoiati non sanno cosa fare tra adulti che parlano di cose che non li riguardano, e gli adulti imbarazzati non sanno cosa dire ai bambini che non vogliono stare a sentire.</p>
<p>Mio figlio, seduto alla mia destra, guarda il telefono. Non lo guardo. Mangio. Ogni tanto alzo gli occhi e vedo che anche lui ha alzato gli occhi, ma non per guardarmi: per guardare da un'altra parte. Come se la tavola fosse un posto di passaggio, non di permanenza. Come se stare qui insieme fosse una coincidenza, non una scelta.</p>
`,
    questions: [
      {
        id: 1,
        text: '1. Come viene definita dall\'autore la separazione tra la tavola dei grandi e quella dei bambini che esisteva in passato?',
        instruction: 'Devi selezionare solo una scelta',
        type: 'single',
        options: [
          { label: 'A', text: 'Crudele e ingiusta verso i bambini' },
          { label: 'B', text: 'Normale e ritenuta funzionale per tutti' },
          { label: 'C', text: 'Un privilegio esclusivo degli adulti' },
          { label: 'D', text: 'Un retaggio culturale ormai superato già allora' }
        ],
        correct: 'B'
      },
      {
        id: 2,
        text: '2. Perché secondo l\'autore, era "funzionale" escludere i bambini dalla tavola dei grandi?',
        instruction: 'Devi selezionare solo una scelta',
        type: 'single',
        options: [
          { label: 'A', text: 'Perché così i bambini si abituavano ad ascoltare i grandi in silenzio' },
          { label: 'B', text: 'Perché così i bambini potevano mangiare piatti elaborati e saporiti' },
          { label: 'C', text: 'Perché così sia i grandi sia i bambini potevano fare ciò che più piaceva loro' },
          { label: 'D', text: 'Perché così i grandi stavano più comodi a sedere' }
        ],
        correct: 'C'
      },
      {
        id: 3,
        text: '3. Cosa fa il figlio dell\'autore durante la cena?',
        instruction: 'Devi selezionare solo una scelta',
        type: 'single',
        options: [
          { label: 'A', text: 'Guarda il telefono evitando il contatto visivo con il padre' },
          { label: 'B', text: 'Parla animatamente dei fatti della sua giornata' },
          { label: 'C', text: 'Mangia in silenzio ascoltando i discorsi degli adulti' },
          { label: 'D', text: 'Si lamenta della noia e vuole alzarsi da tavola' }
        ],
        correct: 'A'
      },
      {
        id: 4,
        text: '4. Quale parola nel testo indica che l\'autore riflette su questo tema con un certo peso emotivo?',
        instruction: 'Devi selezionare solo una scelta',
        type: 'single',
        options: [
          { label: 'A', text: 'Normale' },
          { label: 'B', text: 'Ossessiona' },
          { label: 'C', text: 'Funzionale' },
          { label: 'D', text: 'Progresso' }
        ],
        correct: 'B'
      },
      {
        id: 5,
        text: '5. Come descrive l\'autore la nuova situazione dei pasti in famiglia dopo la "promozione" dei bambini?',
        instruction: 'Devi selezionare solo una scelta',
        type: 'single',
        options: [
          { label: 'A', text: 'Un progresso reale e positivo per tutti' },
          { label: 'B', text: 'Un miglioramento teorico ma un disastro pratico' },
          { label: 'C', text: 'Una situazione neutra senza effetti rilevanti' },
          { label: 'D', text: 'Un cambiamento accolto favorevolmente dai bambini' }
        ],
        correct: 'B'
      },
      {
        id: 6,
        text: '6. Quale figura retorica è usata nell\'espressione "i bambini sono stati promossi al tavolo dei grandi, e i grandi sono stati condannati a stare a tavola coi bambini"?',
        instruction: 'Devi selezionare solo una scelta',
        type: 'single',
        options: [
          { label: 'A', text: 'Similitudine' },
          { label: 'B', text: 'Iperbole' },
          { label: 'C', text: 'Antitesi ironica' },
          { label: 'D', text: 'Metafora semplice' }
        ],
        correct: 'C'
      },
      {
        id: 7,
        text: '7. Qual è il tono prevalente del brano?',
        instruction: 'Devi selezionare solo una scelta',
        type: 'single',
        options: [
          { label: 'A', text: 'Rassegnato e nostalgico con venature ironiche' },
          { label: 'B', text: 'Allegro e spensierato' },
          { label: 'C', text: 'Arrabbiato e polemico' },
          { label: 'D', text: 'Distaccato e scientifico' }
        ],
        correct: 'A'
      },
      {
        id: 8,
        text: '8. A quale tipo di narrazione appartiene prevalentemente il brano?',
        instruction: 'Devi selezionare solo una scelta',
        type: 'single',
        options: [
          { label: 'A', text: 'Racconto di fantascienza' },
          { label: 'B', text: 'Saggio storico' },
          { label: 'C', text: 'Narrazione autobiografica con riflessione sociologica' },
          { label: 'D', text: 'Poesia in prosa' }
        ],
        correct: 'C'
      },
      {
        id: 9,
        text: '9. Nell\'ultimo paragrafo, la tavola viene descritta come "un posto di passaggio, non di permanenza". Cosa vuole comunicare l\'autore con questa espressione?',
        instruction: 'Devi selezionare solo una scelta',
        type: 'single',
        options: [
          { label: 'A', text: 'Che i pasti durano poco tempo' },
          { label: 'B', text: 'Che il figlio non è mai presente fisicamente a cena' },
          { label: 'C', text: 'Che il figlio non vive davvero il momento condiviso della cena' },
          { label: 'D', text: 'Che la tavola è troppo piccola per tutta la famiglia' }
        ],
        correct: 'C'
      },
      {
        id: 10,
        text: '10. Quale cambiamento sociale descrive l\'autore come avvenuto rispetto alla sua infanzia?',
        instruction: 'Devi selezionare solo una scelta',
        type: 'single',
        options: [
          { label: 'A', text: 'I pasti si fanno sempre meno spesso in famiglia' },
          { label: 'B', text: 'I bambini ora siedono allo stesso tavolo degli adulti' },
          { label: 'C', text: 'Gli adulti mangiano più velocemente di prima' },
          { label: 'D', text: 'I telefoni sono vietati a tavola nelle famiglie moderne' }
        ],
        correct: 'B'
      }
    ]
  },

  /* ---- Testo 2 ---- */
  {
    id: 'testo-2',
    title: 'Testo 2',
    textTitle: 'Il digitale e la scuola',
    attribution: '(Adattato da un articolo, La Repubblica, 2022)',
    text: `
<p>L'introduzione della tecnologia digitale nelle scuole italiane ha suscitato dibattiti accesi tra pedagogisti, insegnanti e genitori. Da un lato, c'è chi sostiene che i dispositivi digitali – tablet, computer, lavagne interattive – rappresentino uno strumento indispensabile per preparare i giovani al mondo del lavoro. Dall'altro, c'è chi teme che l'uso eccessivo della tecnologia possa nuocere allo sviluppo cognitivo degli studenti, distrarli dallo studio e impoverire le relazioni interpersonali in classe.</p>
<p>Recenti studi hanno mostrato risultati contrastanti. Alcune ricerche evidenziano miglioramenti nelle competenze digitali e nella motivazione degli studenti quando i dispositivi vengono usati in modo mirato e supervisionato. Altre ricerche, invece, segnalano cali nell'attenzione e nella capacità di concentrazione prolungata, soprattutto tra gli studenti più giovani.</p>
<p>Il nodo centrale sembra essere non la tecnologia in sé, ma il modo in cui essa viene integrata nel percorso didattico. Un uso consapevole e pedagogicamente orientato può arricchire l'esperienza di apprendimento; un uso indiscriminato o sostitutivo rischia invece di impoverirla.</p>
`,
    questions: [
      { id: 1, text: '1. Qual è l\'argomento principale del testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'I pericoli di internet per i giovani' }, { label: 'B', text: 'Il dibattito sull\'uso della tecnologia nelle scuole' }, { label: 'C', text: 'I benefici esclusivi dei tablet nell\'apprendimento' }, { label: 'D', text: 'La crisi della scuola italiana' }], correct: 'B' },
      { id: 2, text: '2. Secondo il testo, cosa determina principalmente se la tecnologia è utile o dannosa nell\'istruzione?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Il costo dei dispositivi digitali' }, { label: 'B', text: 'L\'età degli studenti' }, { label: 'C', text: 'Il modo in cui la tecnologia viene integrata nella didattica' }, { label: 'D', text: 'La disponibilità di connessione internet' }], correct: 'C' },
      { id: 3, text: '3. Cosa hanno mostrato alcune ricerche sull\'uso di dispositivi digitali a scuola?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Solo risultati negativi sull\'apprendimento' }, { label: 'B', text: 'Solo risultati positivi sulla motivazione' }, { label: 'C', text: 'Risultati contrastanti a seconda dei contesti' }, { label: 'D', text: 'Nessun risultato rilevante' }], correct: 'C' },
      { id: 4, text: '4. Quale rischio viene citato per un uso eccessivo della tecnologia a scuola?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Calo nella motivazione degli insegnanti' }, { label: 'B', text: 'Riduzione dell\'attenzione e della concentrazione degli studenti' }, { label: 'C', text: 'Aumento dei costi per le scuole' }, { label: 'D', text: 'Dipendenza dai libri di testo cartacei' }], correct: 'B' },
      { id: 5, text: '5. Il testo presenta un punto di vista principalmente:', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Decisamente favorevole alla tecnologia' }, { label: 'B', text: 'Decisamente contrario alla tecnologia' }, { label: 'C', text: 'Equilibrato, considerando pro e contro' }, { label: 'D', text: 'Indifferente alla questione' }], correct: 'C' },
      { id: 6, text: '6. Cosa si intende con "uso indiscriminato" della tecnologia nel testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Un uso mirato e pedagogicamente guidato' }, { label: 'B', text: 'Un uso senza criteri didattici precisi' }, { label: 'C', text: 'Un uso limitato ad alcune materie scolastiche' }, { label: 'D', text: 'Un uso condiviso tra scuola e famiglia' }], correct: 'B' },
      { id: 7, text: '7. Quale tipo di testo è questo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Testo narrativo letterario' }, { label: 'B', text: 'Testo poetico' }, { label: 'C', text: 'Testo argomentativo-espositivo' }, { label: 'D', text: 'Testo descrittivo geografico' }], correct: 'C' },
      { id: 8, text: '8. Chi ha espresso preoccupazione per l\'uso della tecnologia nelle scuole secondo il testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Solo i pedagogisti' }, { label: 'B', text: 'Solo i genitori' }, { label: 'C', text: 'Pedagogisti, insegnanti e genitori' }, { label: 'D', text: 'Solo gli insegnanti più anziani' }], correct: 'C' },
      { id: 9, text: '9. Cosa suggerisce implicitamente l\'autore come soluzione alla problematica descritta?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Eliminare completamente la tecnologia dalla scuola' }, { label: 'B', text: 'Usare la tecnologia solo nelle scuole superiori' }, { label: 'C', text: 'Un uso consapevole e pedagogicamente orientato della tecnologia' }, { label: 'D', text: 'Aspettare nuove ricerche prima di qualsiasi decisione' }], correct: 'C' }
    ]
  },

  /* ---- Testo 3 ---- */
  {
    id: 'testo-3',
    title: 'Testo 3',
    textTitle: 'L\'ambiente e le generazioni future',
    attribution: '(Adattato da un testo di divulgazione scientifica, 2021)',
    text: `
<p>Il cambiamento climatico è ormai considerato dalla comunità scientifica internazionale come la sfida più urgente del nostro tempo. Le emissioni di gas a effetto serra, generate principalmente dall'uso di combustibili fossili, dall'industria e dall'agricoltura intensiva, stanno alterando il clima globale: temperature medie in aumento, scioglimento dei ghiacciai, innalzamento del livello del mare, eventi meteorologici estremi sempre più frequenti.</p>
<p>Le conseguenze di questi cambiamenti non saranno equamente distribuite. I Paesi più poveri e le popolazioni più vulnerabili sono spesso quelli meno responsabili delle emissioni globali, ma quelli che ne subiranno gli effetti più devastanti. Questo genera un problema di giustizia climatica che non può essere ignorato.</p>
<p>Le generazioni future erediteranno un pianeta profondamente trasformato. Molte delle decisioni che prendiamo oggi – su come produrre energia, come spostarci, cosa mangiare – avranno conseguenze durature sul clima del futuro. Per questo motivo, la questione climatica non è solo un problema ambientale, ma anche etico: riguarda la responsabilità che abbiamo verso chi verrà dopo di noi.</p>
`,
    questions: [
      { id: 1, text: '1. Qual è la principale causa del cambiamento climatico secondo il testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'L\'aumento della popolazione mondiale' }, { label: 'B', text: 'Le emissioni di gas a effetto serra' }, { label: 'C', text: 'La deforestazione delle foreste tropicali' }, { label: 'D', text: 'L\'inquinamento degli oceani' }], correct: 'B' },
      { id: 2, text: '2. Cosa si intende con "giustizia climatica" nel testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'La distribuzione equa dei fondi per l\'ambiente' }, { label: 'B', text: 'Il fatto che i Paesi più poveri subiscono conseguenze di emissioni di cui sono meno responsabili' }, { label: 'C', text: 'Le leggi internazionali contro l\'inquinamento' }, { label: 'D', text: 'I tribunali che giudicano i crimini ambientali' }], correct: 'B' },
      { id: 3, text: '3. Perché secondo l\'autore la questione climatica è anche un problema etico?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Perché è molto costoso risolvere il problema climatico' }, { label: 'B', text: 'Perché riguarda la responsabilità verso le generazioni future' }, { label: 'C', text: 'Perché i governi non rispettano gli accordi internazionali' }, { label: 'D', text: 'Perché i danni climatici sono completamente irreversibili' }], correct: 'B' },
      { id: 4, text: '4. Quali effetti del cambiamento climatico vengono menzionati nel testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Solo l\'aumento delle temperature medie' }, { label: 'B', text: 'Scioglimento dei ghiacciai e innalzamento del mare soltanto' }, { label: 'C', text: 'Temperature in aumento, scioglimento ghiacciai, innalzamento del mare ed eventi estremi' }, { label: 'D', text: 'Solo gli eventi meteorologici estremi' }], correct: 'C' },
      { id: 5, text: '5. Chi subirà gli effetti più devastanti del cambiamento climatico secondo il testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'I Paesi industrializzati' }, { label: 'B', text: 'Le nazioni con le maggiori emissioni' }, { label: 'C', text: 'I Paesi più poveri e le popolazioni vulnerabili' }, { label: 'D', text: 'I Paesi con meno tecnologia disponibile' }], correct: 'C' },
      { id: 6, text: '6. Quale tipo di responsabilità sottolinea il testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'La responsabilità economica delle grandi industrie' }, { label: 'B', text: 'La responsabilità delle decisioni presenti verso le generazioni future' }, { label: 'C', text: 'La responsabilità legale degli Stati nei tribunali internazionali' }, { label: 'D', text: 'La responsabilità individuale esclusiva dei singoli cittadini' }], correct: 'B' },
      { id: 7, text: '7. Quale settore NON viene esplicitamente citato come fonte di emissioni di gas serra nel testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Trasporti individuali' }, { label: 'B', text: 'Industria' }, { label: 'C', text: 'Agricoltura intensiva' }, { label: 'D', text: 'Combustibili fossili' }], correct: 'A' },
      { id: 8, text: '8. Come viene descritta la distribuzione degli effetti del cambiamento climatico?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Uniforme in tutto il mondo' }, { label: 'B', text: 'Maggiore nei Paesi industrializzati più ricchi' }, { label: 'C', text: 'Non equamente distribuita tra le nazioni' }, { label: 'D', text: 'Limitata ai Paesi delle zone tropicali' }], correct: 'C' },
      { id: 9, text: '9. Il brano appartiene principalmente a quale tipo di testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Testo narrativo letterario' }, { label: 'B', text: 'Testo di divulgazione scientifica con argomentazione' }, { label: 'C', text: 'Testo poetico' }, { label: 'D', text: 'Testo normativo giuridico' }], correct: 'B' }
    ]
  },

  /* ---- Testo 4 ---- */
  {
    id: 'testo-4',
    title: 'Testo 4',
    textTitle: 'La memoria e l\'identità',
    attribution: '(Adattato da un testo di psicologia, 2020)',
    text: `
<p>La memoria è uno degli elementi fondamentali dell'identità personale. Attraverso i ricordi, costruiamo la narrativa della nostra vita: sappiamo chi siamo, da dove veniamo, cosa abbiamo vissuto. La perdita della memoria, come avviene nelle forme più gravi di demenza, comporta una progressiva dissoluzione del senso di sé.</p>
<p>Ma la memoria non è solo individuale. Esistono memorie collettive, condivise da gruppi, comunità, nazioni. Queste memorie collettive plasmano le identità culturali e sociali, trasmettono valori e visioni del mondo da una generazione all'altra. I luoghi della memoria – monumenti, musei, cerimonie commemorative – servono a mantenere viva questa dimensione condivisa del passato.</p>
`,
    questions: [
      { id: 1, text: '1. Qual è il ruolo della memoria nell\'identità personale secondo il testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'È un elemento secondario rispetto alla personalità' }, { label: 'B', text: 'È fondamentale per costruire la narrativa della propria vita' }, { label: 'C', text: 'È importante solo nella vecchiaia' }, { label: 'D', text: 'È un meccanismo puramente biologico' }], correct: 'B' },
      { id: 2, text: '2. Cosa avviene secondo il testo nelle forme gravi di demenza?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Si perde solo la memoria recente' }, { label: 'B', text: 'Si dissolve progressivamente il senso di sé' }, { label: 'C', text: 'Si conserva intatta l\'identità culturale' }, { label: 'D', text: 'Si rafforza la memoria collettiva' }], correct: 'B' },
      { id: 3, text: '3. Cosa si intende per "memoria collettiva" nel testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'La somma di tutte le memorie individuali' }, { label: 'B', text: 'I ricordi conservati negli archivi pubblici' }, { label: 'C', text: 'Memorie condivise da gruppi, comunità o nazioni' }, { label: 'D', text: 'La capacità di memorizzare del cervello umano' }], correct: 'C' },
      { id: 4, text: '4. Qual è la funzione dei "luoghi della memoria" citati nel testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Attirare turisti e visitatori stranieri' }, { label: 'B', text: 'Mantenere viva la dimensione condivisa del passato' }, { label: 'C', text: 'Conservare documenti storici riservati' }, { label: 'D', text: 'Celebrare i vincitori nella storia' }], correct: 'B' },
      { id: 5, text: '5. Come vengono trasmessi valori e visioni del mondo tra generazioni secondo il testo?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Attraverso il sistema scolastico' }, { label: 'B', text: 'Attraverso le memorie collettive' }, { label: 'C', text: 'Attraverso i mezzi di comunicazione di massa' }, { label: 'D', text: 'Attraverso l\'educazione familiare' }], correct: 'B' },
      { id: 6, text: '6. Quale concetto lega memoria e identità secondo l\'autore?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'La narrativa della propria vita costruita attraverso i ricordi' }, { label: 'B', text: 'La capacità di dimenticare il passato doloroso' }, { label: 'C', text: 'L\'inconscio collettivo di junghiana memoria' }, { label: 'D', text: 'La memoria sensoriale immediata' }], correct: 'A' },
      { id: 7, text: '7. Il testo è principalmente di tipo:', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Narrativo autobiografico' }, { label: 'B', text: 'Descrittivo geografico' }, { label: 'C', text: 'Espositivo-argomentativo' }, { label: 'D', text: 'Poetico-lirico' }], correct: 'C' }
    ]
  },

  /* ---- Riflessione sulla lingua ---- */
  {
    id: 'riflessione',
    title: 'Riflessione sulla lingua',
    textTitle: 'Riflessione sulla lingua',
    attribution: '',
    text: `<p>Le seguenti domande si riferiscono agli aspetti linguistici, grammaticali e stilistici presenti nei testi analizzati durante questa simulazione.</p>`,
    questions: [
      { id: 1, text: '1. Nel testo di Serra, il termine "funzionale" appartiene a quale categoria grammaticale?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Sostantivo' }, { label: 'B', text: 'Aggettivo qualificativo' }, { label: 'C', text: 'Avverbio di modo' }, { label: 'D', text: 'Participio passato' }], correct: 'B' },
      { id: 2, text: '2. Nell\'espressione "lavorava intensamente", l\'avverbio deriva da:', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Sostantivo maschile' }, { label: 'B', text: 'Aggettivo al femminile singolare' }, { label: 'C', text: 'Verbo all\'infinito' }, { label: 'D', text: 'Preposizione semplice' }], correct: 'B' },
      { id: 3, text: '3. Quale tempo verbale è prevalente nei brani narrativi analizzati per descrivere azioni passate abituali?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Presente indicativo' }, { label: 'B', text: 'Passato remoto' }, { label: 'C', text: 'Imperfetto indicativo' }, { label: 'D', text: 'Futuro semplice' }], correct: 'C' },
      { id: 4, text: '4. In "In teoria era un progresso. In pratica è stato un disastro", il connettivo "in pratica" esprime:', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Una causa' }, { label: 'B', text: 'Una conseguenza' }, { label: 'C', text: 'Un\'opposizione rispetto a quanto detto prima' }, { label: 'D', text: 'Un\'aggiunta' }], correct: 'C' },
      { id: 5, text: '5. In quale modo è costruita la frase "Era considerata una cosa normale"?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Forma attiva' }, { label: 'B', text: 'Forma passiva' }, { label: 'C', text: 'Forma riflessiva' }, { label: 'D', text: 'Forma impersonale' }], correct: 'B' },
      { id: 6, text: '6. Quale relazione logica esprime il connettivo "invece" nel testo sul digitale?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Causa' }, { label: 'B', text: 'Conseguenza' }, { label: 'C', text: 'Opposizione/contrasto' }, { label: 'D', text: 'Semplice aggiunta' }], correct: 'C' },
      { id: 7, text: '7. Il prefisso "dis-" in "disagio" e "dissoluzione" ha valore:', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Positivo, aggiunge significato' }, { label: 'B', text: 'Negativo o privativo' }, { label: 'C', text: 'Superlativo assoluto' }, { label: 'D', text: 'Iterativo, indica ripetizione' }], correct: 'B' },
      { id: 8, text: '8. Nella frase "non equamente distribuite", l\'avverbio "non" nega:', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Il verbo principale della proposizione' }, { label: 'B', text: 'L\'avverbio "equamente" e tutto il sintagma aggettivale' }, { label: 'C', text: 'Solo il participio "distribuite"' }, { label: 'D', text: 'Il soggetto della frase' }], correct: 'B' },
      { id: 9, text: '9. In quale categoria grammaticale rientra la parola "equamente" nel testo sul clima?', instruction: 'Devi selezionare solo una scelta', type: 'single',
        options: [{ label: 'A', text: 'Aggettivo qualificativo' }, { label: 'B', text: 'Sostantivo astratto' }, { label: 'C', text: 'Avverbio di modo' }, { label: 'D', text: 'Participio passato' }], correct: 'C' }
    ]
  },

  /* ---- Completamento del testo ---- */
  {
    id: 'completamento',
    title: 'Completamento del testo',
    textTitle: 'Completamento del testo',
    attribution: '',
    text: `
<p>Leggi attentamente il testo seguente e scegli la parola o l\'espressione più adatta per completarlo correttamente.</p>
<p style="margin-top:16px; padding:16px; background:#f0f4f8; border-radius:4px; line-height:1.8;">
La lettura è un'attività che <strong>______</strong> la mente, arricchisce il vocabolario e sviluppa la capacità di analisi critica. Attraverso i libri, il lettore può viaggiare in luoghi lontani, vivere esperienze diverse dalle proprie e comprendere meglio il mondo che lo circonda.
</p>
`,
    questions: [
      {
        id: 1,
        text: '1. Quale parola completa correttamente il testo, mantenendo coerenza con il contesto?',
        instruction: 'Devi selezionare solo una scelta',
        type: 'single',
        options: [
          { label: 'A', text: 'svuota' },
          { label: 'B', text: 'nutre' },
          { label: 'C', text: 'stanca' },
          { label: 'D', text: 'distrae' }
        ],
        correct: 'B'
      }
    ]
  }
];

/* ============================================================
   STATE
   ============================================================ */
const DEFAULT_STATE = {
  currentSection:  0,
  currentQuestion: 0,
  answers:         {},        /* key: "sIdx_qIdx" → label string */
  flagged:         [],        /* ["sIdx_qIdx", ...] */
  viewed:          [],        /* ["sIdx_qIdx", ...] */
  studentName:     '',        /* entered at start */
  loadedTestId:    null,      /* UUID of the Supabase test, if any */
  submitted:       false,     /* true after consegna */
  lastScore:       0,
  lastTotal:       0,
};

let state = Object.assign({}, DEFAULT_STATE, {
  flagged:     new Set(),
  viewed:      new Set(),
  studentName: '',
  loadedTestId: null,
  submitted:   false,
  lastScore:   0,
  lastTotal:   0,
});

/* UI-only state (not persisted) */
let ui = {
  sidebarVisible:    true,
  filter:            'all',   /* 'all' | 'unanswered' | 'flagged' */
  zoom:              100,
  highlightActive:   false,
  magnifyActive:     false,
  answerMaskActive:  false,
  eliminatorActive:  false,
  screenMaskActive:  false,
  calcVisible:       false,
  calcVal:           '0',
  calcOp:            null,
  calcPrev:          null,
  calcNewNum:        true,
};

/* ============================================================
   HELPERS
   ============================================================ */
function qKey(sIdx, qIdx) { return `${sIdx}_${qIdx}`; }

function totalQuestions() {
  return SECTIONS.reduce((s, sec) => s + sec.questions.length, 0);
}

function answeredCount() { return Object.keys(state.answers).length; }
function flaggedCount()  { return state.flagged.size; }
function viewedCount()   { return state.viewed.size; }

function absoluteIndex() {
  let abs = 0;
  for (let i = 0; i < state.currentSection; i++) abs += SECTIONS[i].questions.length;
  return abs + state.currentQuestion;
}

function fromAbsolute(abs) {
  let rem = abs;
  for (let i = 0; i < SECTIONS.length; i++) {
    if (rem < SECTIONS[i].questions.length) return { section: i, question: rem };
    rem -= SECTIONS[i].questions.length;
  }
  return null;
}

/* ============================================================
   PERSIST
   ============================================================ */
function saveState() {
  try {
    localStorage.setItem('invalsi_state', JSON.stringify({
      currentSection:  state.currentSection,
      currentQuestion: state.currentQuestion,
      answers:         state.answers,
      flagged:         [...state.flagged],
      viewed:          [...state.viewed],
      studentName:     state.studentName,
      loadedTestId:    state.loadedTestId,
      submitted:       state.submitted,
      lastScore:       state.lastScore,
      lastTotal:       state.lastTotal,
    }));
  } catch (_) { /* localStorage unavailable (private mode or quota exceeded) – silently ignore */ }
}

function loadState() {
  try {
    const raw = localStorage.getItem('invalsi_state');
    if (!raw) return;
    const p = JSON.parse(raw);
    state.currentSection  = p.currentSection  || 0;
    state.currentQuestion = p.currentQuestion || 0;
    state.answers         = p.answers  || {};
    state.flagged         = new Set(p.flagged || []);
    state.viewed          = new Set(p.viewed  || []);
    state.studentName     = p.studentName  || '';
    state.loadedTestId    = p.loadedTestId || null;
    state.submitted       = p.submitted    || false;
    state.lastScore       = p.lastScore    || 0;
    state.lastTotal       = p.lastTotal    || 0;
  } catch (_) { /* Corrupt data in localStorage – start fresh */ }
}

/* ============================================================
   RENDER
   ============================================================ */
function renderAll() {
  renderHeader();
  renderSidebar();
  renderMain();
}

/* ---- Header ---- */
function renderHeader() {
  const total    = totalQuestions();
  const answered = answeredCount();
  const pct      = total ? Math.round(answered / total * 100) : 0;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-pct').textContent  = pct + '%';
}

/* ---- Sidebar ---- */
function renderSidebar() {
  const total    = totalQuestions();
  const answered = answeredCount();
  const viewed   = viewedCount();
  const flagged  = flaggedCount();

  document.getElementById('stat-viewed').textContent     = `${viewed}/${total}`;
  document.getElementById('stat-answered').textContent   = `${answered}/${total}`;
  document.getElementById('stat-unanswered').textContent = `${total - answered}/${total}`;
  document.getElementById('stat-flagged').textContent    = `${flagged}/${total}`;

  buildQuestionTree();
}

function buildQuestionTree() {
  const tree = document.getElementById('question-tree');
  tree.innerHTML = '';

  /* testPart-1 label */
  const partHdr = document.createElement('div');
  partHdr.className = 'tree-part-header';
  partHdr.textContent = 'testPart-1';
  tree.appendChild(partHdr);

  SECTIONS.forEach((sec, sIdx) => {
    /* answered count for section */
    const sAnswered = sec.questions.filter((_, qIdx) => state.answers[qKey(sIdx, qIdx)]).length;
    const isOpen    = sIdx === state.currentSection;

    /* filter questions */
    let items = sec.questions.map((q, qIdx) => ({ q, qIdx }));
    if (ui.filter === 'flagged') {
      items = items.filter(({ qIdx }) => state.flagged.has(qKey(sIdx, qIdx)));
    } else if (ui.filter === 'unanswered') {
      items = items.filter(({ qIdx }) => !state.answers[qKey(sIdx, qIdx)]);
    }

    /* section wrapper */
    const wrap = document.createElement('div');
    wrap.className = 'tree-section';

    /* section header */
    const sHdr = document.createElement('div');
    sHdr.className = 'tree-section-header';
    sHdr.innerHTML = `
      <span>${sec.title} <span class="tree-section-count">(${sAnswered}/${sec.questions.length})</span></span>
      <svg class="chevron ${isOpen ? 'open' : ''}" id="chevron-s${sIdx}"
           width="13" height="13" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5">
        <polyline points="6 9 12 15 18 9"/>
      </svg>`;
    sHdr.addEventListener('click', () => toggleTreeSection(sIdx));

    /* section body */
    const sBody = document.createElement('div');
    sBody.className = 'tree-section-body' + (isOpen ? '' : ' collapsed');
    sBody.id = `sec-body-${sIdx}`;

    items.forEach(({ qIdx }) => {
      const key        = qKey(sIdx, qIdx);
      const isActive   = sIdx === state.currentSection && qIdx === state.currentQuestion;
      const isAnswered = !!state.answers[key];
      const isViewed   = state.viewed.has(key);
      const isFlagged  = state.flagged.has(key);

      let statusIcon = '○';
      if (isAnswered)      statusIcon = '●';
      else if (isViewed)   statusIcon = '◉';

      const item = document.createElement('div');
      item.className = [
        'question-item',
        isActive   ? 'qi-active'   : '',
        isAnswered ? 'qi-answered' : '',
        isViewed && !isAnswered ? 'qi-viewed' : '',
      ].filter(Boolean).join(' ');

      item.innerHTML = `
        <span class="qi-status">${statusIcon}</span>
        <span class="qi-label">Domanda ${qIdx + 1}</span>
        <span class="qi-flag">${isFlagged ? '⚑' : ''}</span>`;
      item.addEventListener('click', () => selectQuestion(sIdx, qIdx));
      sBody.appendChild(item);
    });

    wrap.appendChild(sHdr);
    wrap.appendChild(sBody);
    tree.appendChild(wrap);
  });
}

/* ---- Main content ---- */
function renderMain() {
  const sec = SECTIONS[state.currentSection];
  const q   = sec.questions[state.currentQuestion];
  const key = qKey(state.currentSection, state.currentQuestion);

  /* text */
  document.getElementById('text-title').textContent       = sec.textTitle;
  document.getElementById('text-content').innerHTML       = sec.text;
  document.getElementById('text-attribution').textContent = sec.attribution;

  /* question */
  document.getElementById('question-instruction').textContent = q.instruction;
  document.getElementById('question-text').textContent        = q.text;

  /* options */
  const list    = document.getElementById('options-list');
  const curAns  = state.answers[key];
  list.innerHTML = '';
  list.classList.toggle('answer-masked', ui.answerMaskActive && !!curAns);

  q.options.forEach(opt => {
    const item = document.createElement('div');
    item.className = [
      'option-item',
      curAns === opt.label ? 'opt-selected' : '',
      ui.eliminatorActive  ? 'opt-eliminator-mode' : '',
    ].filter(Boolean).join(' ');

    item.dataset.label = opt.label;

    item.innerHTML = `
      <div class="option-radio">
        <div class="option-radio-inner"></div>
      </div>
      <span class="option-label">${opt.label}</span>
      <span class="option-text">${opt.text}</span>`;

    if (ui.eliminatorActive) {
      item.addEventListener('click', () => eliminateOption(item));
    } else {
      item.addEventListener('click', () => selectAnswer(opt.label));
    }
    list.appendChild(item);
  });

  /* flag button */
  const flagBtn = document.getElementById('btn-flag');
  const isFlagged = state.flagged.has(key);
  flagBtn.classList.toggle('tool-active', isFlagged);
  flagBtn.style.color = isFlagged ? '#ffcc00' : '';

  /* nav buttons */
  const abs   = absoluteIndex();
  const total = totalQuestions();
  document.getElementById('btn-prev').disabled         = abs === 0;
  document.getElementById('btn-next').disabled         = abs >= total - 1;
  document.getElementById('btn-next-section').disabled = state.currentSection >= SECTIONS.length - 1;

  /* scroll main to top */
  document.getElementById('main').scrollTop = 0;
}

/* ============================================================
   ACTIONS
   ============================================================ */
function selectQuestion(sIdx, qIdx) {
  state.currentSection  = sIdx;
  state.currentQuestion = qIdx;
  markViewed();
  renderAll();
  saveState();
}

function markViewed() {
  state.viewed.add(qKey(state.currentSection, state.currentQuestion));
}

function selectAnswer(label) {
  const key = qKey(state.currentSection, state.currentQuestion);
  state.answers[key] = label;
  renderAll();
  saveState();
}

function toggleFlag() {
  const key = qKey(state.currentSection, state.currentQuestion);
  if (state.flagged.has(key)) {
    state.flagged.delete(key);
    showToast('Contrassegno rimosso');
  } else {
    state.flagged.add(key);
    showToast('Domanda contrassegnata per revisione');
  }
  renderAll();
  saveState();
}

/* ---- Navigation ---- */
function navigatePrev() {
  const abs = absoluteIndex();
  if (abs === 0) return;
  const pos = fromAbsolute(abs - 1);
  if (pos) { state.currentSection = pos.section; state.currentQuestion = pos.question; markViewed(); renderAll(); saveState(); }
}

function navigateNext() {
  const abs   = absoluteIndex();
  const total = totalQuestions();
  if (abs >= total - 1) return;
  const pos = fromAbsolute(abs + 1);
  if (pos) { state.currentSection = pos.section; state.currentQuestion = pos.question; markViewed(); renderAll(); saveState(); }
}

function navigateSkip() {
  navigateNext();
  showToast('Domanda saltata');
}

function navigateNextSection() {
  if (state.currentSection < SECTIONS.length - 1) {
    state.currentSection++;
    state.currentQuestion = 0;
    markViewed();
    renderAll();
    saveState();
  }
}

/* ============================================================
   UI TOGGLES
   ============================================================ */
function toggleBlock(id) {
  const body    = document.getElementById(`body-${id}`);
  const chevron = document.getElementById(`chevron-${id}`);
  if (!body) return;
  body.classList.toggle('collapsed');
  if (chevron) chevron.classList.toggle('open');
}

function toggleTreeSection(sIdx) {
  const body    = document.getElementById(`sec-body-${sIdx}`);
  const chevron = document.getElementById(`chevron-s${sIdx}`);
  if (!body) return;
  body.classList.toggle('collapsed');
  if (chevron) chevron.classList.toggle('open');
}

function toggleSidebar() {
  ui.sidebarVisible = !ui.sidebarVisible;
  const sb  = document.getElementById('sidebar');
  const btn = document.getElementById('btn-toggle-sidebar');
  sb.classList.toggle('hidden', !ui.sidebarVisible);
  btn.classList.toggle('tool-active', !ui.sidebarVisible);
}

function setFilter(filter, btn) {
  ui.filter = filter;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  buildQuestionTree();
}

function changeZoom(delta) {
  ui.zoom = Math.max(70, Math.min(160, ui.zoom + delta));
  document.getElementById('main').style.fontSize = (ui.zoom / 100 * 14) + 'px';
  showToast(`Zoom: ${ui.zoom}%`);
}

/* ---- Highlight ---- */
function toggleHighlight() {
  ui.highlightActive = !ui.highlightActive;
  const main = document.getElementById('main');
  const btn  = document.getElementById('btn-highlight');
  btn.classList.toggle('tool-active', ui.highlightActive);
  main.classList.toggle('highlight-mode', ui.highlightActive);
  if (ui.highlightActive) {
    main.addEventListener('mouseup', doHighlight);
    showToast('Evidenziazione attiva – seleziona il testo');
  } else {
    main.removeEventListener('mouseup', doHighlight);
    showToast('Evidenziazione disattivata');
  }
}

function doHighlight() {
  const sel = window.getSelection();
  if (!sel || !sel.toString().trim()) return;
  try {
    const range = sel.getRangeAt(0);
    const mark  = document.createElement('mark');
    mark.className = 'hl';
    range.surroundContents(mark);
    sel.removeAllRanges();
  } catch (_) {
    /* surroundContents fails for cross-node selections (e.g. spanning multiple tags) */
    sel.removeAllRanges();
    showToast('Seleziona testo all\'interno di un singolo paragrafo per evidenziare');
  }
}

function clearHighlights() {
  document.querySelectorAll('mark.hl').forEach(m => {
    const p = m.parentNode;
    while (m.firstChild) p.insertBefore(m.firstChild, m);
    p.removeChild(m);
  });
  showToast('Evidenziazioni cancellate');
}

/* ---- Magnifier ---- */
function toggleMagnify() {
  ui.magnifyActive = !ui.magnifyActive;
  const btn  = document.getElementById('btn-magnify');
  const glass = document.getElementById('magnifier');
  btn.classList.toggle('tool-active', ui.magnifyActive);
  if (ui.magnifyActive) {
    document.getElementById('main').addEventListener('mousemove', moveMagnifier);
    glass.style.display = 'block';
    showToast('Lente attiva – muovi il cursore sul testo');
  } else {
    document.getElementById('main').removeEventListener('mousemove', moveMagnifier);
    glass.style.display = 'none';
    showToast('Lente disattivata');
  }
}

function moveMagnifier(e) {
  const glass = document.getElementById('magnifier');
  const main  = document.getElementById('main');
  const rect  = main.getBoundingClientRect();

  /* Position the glass near the cursor */
  const gx = e.clientX + 24;
  const gy = e.clientY - 80;
  glass.style.left = Math.min(gx, window.innerWidth  - 230) + 'px';
  glass.style.top  = Math.max(gy, 70) + 'px';

  /* Show a zoomed clone of the area around the cursor */
  const scale   = 1.8;
  const offX    = e.clientX - rect.left + main.scrollLeft;
  const offY    = e.clientY - rect.top  + main.scrollTop;
  const bgLeft  = -(offX * scale - 110);
  const bgTop   = -(offY * scale - 80);

  /* Re-use a cloned node if already created, else create */
  let clone = glass._clone;
  if (!clone) {
    clone = main.cloneNode(true);
    clone.style.cssText = `
      position:absolute; pointer-events:none;
      transform-origin: top left;
      background: #fff; overflow:hidden;
      left:0; top:0;
      width:${main.offsetWidth}px;
    `;
    glass.appendChild(clone);
    glass._clone = clone;
  }
  clone.style.transform = `scale(${scale}) translate(${bgLeft / scale}px, ${bgTop / scale}px)`;
}

/* ---- Answer mask ---- */
function toggleAnswerMask() {
  ui.answerMaskActive = !ui.answerMaskActive;
  document.getElementById('btn-mask-answer').classList.toggle('tool-active', ui.answerMaskActive);
  renderMain();
  showToast(ui.answerMaskActive ? 'Mascheratura risposta attiva' : 'Mascheratura risposta disattivata');
}

/* ---- Eliminator ---- */
function toggleEliminator() {
  ui.eliminatorActive = !ui.eliminatorActive;
  document.getElementById('btn-eliminator').classList.toggle('tool-active', ui.eliminatorActive);
  renderMain();
  showToast(ui.eliminatorActive ? 'Eliminator attivo – clicca per eliminare un\'opzione' : 'Eliminator disattivato');
}

function eliminateOption(item) {
  item.classList.toggle('opt-eliminated');
}

/* ---- Screen mask ---- */
function toggleScreenMask() {
  ui.screenMaskActive = !ui.screenMaskActive;
  const mask = document.getElementById('screen-mask');
  const btn  = document.getElementById('btn-screen-mask');
  btn.classList.toggle('tool-active', ui.screenMaskActive);
  mask.style.display = ui.screenMaskActive ? 'block' : 'none';
  if (ui.screenMaskActive) {
    showToast('Mascheratura attiva – trascina per riposizionare');
    makeDraggable(mask);
  }
}

function makeDraggable(el) {
  let startY = 0, startTop = 0;
  el.onmousedown = function(e) {
    startY   = e.clientY;
    startTop = parseInt(el.style.top) || 60;
    document.onmousemove = function(ev) {
      el.style.top = (startTop + ev.clientY - startY) + 'px';
    };
    document.onmouseup = function() {
      document.onmousemove = null;
      document.onmouseup   = null;
    };
  };
}

/* ---- Calculator ---- */
function toggleCalc() {
  ui.calcVisible = !ui.calcVisible;
  document.getElementById('calc-widget').style.display = ui.calcVisible ? 'block' : 'none';
  document.getElementById('btn-calc').classList.toggle('tool-active', ui.calcVisible);
}

function calcInput(key) {
  const display = document.getElementById('calc-display');

  /* If calculator is in error state, only 'C' clears it */
  if (ui.calcVal === 'Errore' && key !== 'C') {
    display.style.color = '#ff453a';
    setTimeout(() => { display.style.color = ''; }, 600);
    return;
  }

  if (key === 'C') {
    ui.calcVal = '0'; ui.calcOp = null; ui.calcPrev = null; ui.calcNewNum = true;
  } else if (key === '±') {
    ui.calcVal = String(-parseFloat(ui.calcVal) || 0);
  } else if (key === '%') {
    ui.calcVal = String(parseFloat(ui.calcVal) / 100);
  } else if (['+', '-', '×', '÷'].includes(key)) {
    if (ui.calcOp && !ui.calcNewNum) calcDoOp();
    ui.calcPrev   = parseFloat(ui.calcVal);
    ui.calcOp     = key;
    ui.calcNewNum = true;
  } else if (key === '=') {
    if (ui.calcOp) { calcDoOp(); ui.calcOp = null; }
  } else if (key === '.') {
    if (ui.calcNewNum) { ui.calcVal = '0.'; ui.calcNewNum = false; }
    else if (!ui.calcVal.includes('.')) ui.calcVal += '.';
  } else {
    if (ui.calcNewNum) { ui.calcVal = key; ui.calcNewNum = false; }
    else ui.calcVal = (ui.calcVal === '0' ? key : ui.calcVal + key);
  }
  const num = parseFloat(ui.calcVal);
  display.textContent = (!isNaN(num) && ui.calcVal.length > 12) ? num.toExponential(4) : ui.calcVal;
}

function calcDoOp() {
  const a = ui.calcPrev, b = parseFloat(ui.calcVal);
  let result;
  switch (ui.calcOp) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '×': result = a * b; break;
    case '÷': result = b !== 0 ? a / b : 'Errore'; break;
    default:  result = b;
  }
  ui.calcVal    = String(result);
  ui.calcNewNum = true;
}

/* ============================================================
   TOAST
   ============================================================ */
let _toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.style.display = 'block';
  el.style.opacity = '1';
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => {
    el.style.opacity = '0';
    setTimeout(() => { el.style.display = 'none'; }, 300);
  }, 2400);
}

/* ============================================================
   STUDENT NAME MODAL
   ============================================================ */
function showStudentNameModal() {
  const modal = document.getElementById('modal-student');
  modal.style.display = 'flex';
  const input = document.getElementById('input-student-name');
  input.value = '';
  setTimeout(() => input.focus(), 60);

  input.onkeydown = function(e) {
    if (e.key === 'Enter') setStudentName();
  };
}

function setStudentName() {
  const input = document.getElementById('input-student-name');
  const name  = (input.value || '').trim();
  if (!name) {
    input.style.borderColor = '#e74c3c';
    input.focus();
    setTimeout(() => { input.style.borderColor = ''; }, 1400);
    return;
  }
  state.studentName = name;
  saveState();
  document.getElementById('modal-student').style.display = 'none';
}

/* ============================================================
   SCORE CALCULATION
   ============================================================ */
function calculateScore() {
  let score = 0;
  SECTIONS.forEach((sec, sIdx) => {
    sec.questions.forEach((q, qIdx) => {
      if (state.answers[qKey(sIdx, qIdx)] === q.correct) score++;
    });
  });
  return score;
}

/* ============================================================
   SUBMIT – CONFIRMATION MODAL
   ============================================================ */
function showConfirmSubmit() {
  if (state.submitted) { showToast('Il test è già stato consegnato.'); return; }

  const total      = totalQuestions();
  const answered   = answeredCount();
  const unanswered = total - answered;
  const flagged    = flaggedCount();

  const statsHtml = `
    <div class="submit-stat-row">
      <span class="ss-label">Domande risposte</span>
      <span class="ss-value ${answered === total ? 'ok' : ''}">${answered}/${total}</span>
    </div>
    <div class="submit-stat-row">
      <span class="ss-label">Domande senza risposta</span>
      <span class="ss-value ${unanswered > 0 ? 'warn' : 'ok'}">${unanswered}</span>
    </div>
    ${flagged > 0 ? `<div class="submit-stat-row">
      <span class="ss-label">Contrassegnate per revisione</span>
      <span class="ss-value warn">${flagged}</span>
    </div>` : ''}
  `;
  document.getElementById('confirm-submit-stats').innerHTML = statsHtml;
  document.getElementById('modal-confirm-submit').style.display = 'flex';
}

function closeConfirmSubmit() {
  document.getElementById('modal-confirm-submit').style.display = 'none';
}

async function confirmSubmit() {
  const confirmBtn  = document.getElementById('btn-confirm-submit');
  const cancelBtn   = document.getElementById('btn-cancel-submit');
  confirmBtn.disabled = true;
  cancelBtn.disabled  = true;
  confirmBtn.innerHTML = '<span class="modal-spinner"></span>Salvataggio…';

  const score = calculateScore();
  const total = totalQuestions();

  if (supabaseClient) {
    try {
      const { error } = await supabaseClient
        .from('submissions')
        .insert({
          test_id:      currentTestId || null,
          student_name: state.studentName || 'Anonimo',
          answers:      state.answers,
          score:        score,
          total:        total,
        });
      if (error) throw error;
    } catch (e) {
      console.error('Submission error:', e);
      showToast('Errore nel salvataggio. Riprova.');
      confirmBtn.disabled = false;
      cancelBtn.disabled  = false;
      confirmBtn.textContent = 'Conferma consegna';
      return;
    }
  }

  state.submitted  = true;
  state.lastScore  = score;
  state.lastTotal  = total;
  saveState();

  closeConfirmSubmit();
  showSubmissionComplete(score, total, false);
}

/* ============================================================
   SUBMISSION COMPLETE PAGE
   ============================================================ */
function showSubmissionComplete(score, total, fromCache) {
  document.getElementById('app').style.display = 'none';
  const page = document.getElementById('submission-complete');
  page.style.display = 'flex';

  document.getElementById('sc-student-name').textContent =
    state.studentName ? `Studente: ${state.studentName}` : '';

  const pct = total > 0 ? Math.round(score / total * 100) : 0;
  document.getElementById('sc-score-value').textContent = `${score}/${total}`;
  document.getElementById('sc-score-label').textContent = `${pct}% di risposte corrette`;

  const now = new Date();
  document.getElementById('sc-submitted-time').textContent =
    `Consegnato il ${now.toLocaleDateString('it-IT')} alle ${now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}`;
}

/* ============================================================
   LOAD TEST FROM SUPABASE
   ============================================================ */
async function loadTestFromSupabase(testId) {
  if (!supabaseClient) return false;
  try {
    const { data, error } = await supabaseClient
      .from('tests')
      .select('*')
      .eq('id', testId)
      .single();
    if (error || !data) return false;

    /* Replace built-in sections with loaded data */
    SECTIONS.length = 0;
    data.sections.forEach(s => SECTIONS.push(s));
    currentTestId    = data.id;
    currentTestTitle = data.title;
    document.getElementById('header-title').textContent = data.title;
    return true;
  } catch (e) {
    console.error('Load test error:', e);
    return false;
  }
}

/* ============================================================
   TEST SELECTION MODAL
   ============================================================ */
async function showTestSelectionModal() {
  const modal    = document.getElementById('modal-test-select');
  const listEl   = document.getElementById('test-select-list');
  listEl.innerHTML = '<div style="text-align:center;padding:20px;color:#999;">Caricamento…</div>';
  modal.style.display = 'flex';

  if (!supabaseClient) {
    listEl.innerHTML = '<div style="text-align:center;padding:20px;color:#999;">Supabase non configurato – uso dati predefiniti.</div>';
    setTimeout(() => {
      modal.style.display = 'none';
      startTest();
    }, 1500);
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from('tests')
      .select('id, title')
      .eq('active', true)
      .order('created_at', { ascending: false });
    if (error) throw error;

    const tests = data || [];
    if (tests.length === 0) {
      listEl.innerHTML = '<div style="text-align:center;padding:20px;color:#999;">Nessun test attivo disponibile al momento.</div>';
      return;
    }

    listEl.innerHTML = '';
    tests.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'test-select-item';
      btn.innerHTML = `<span>${t.title}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>`;
      btn.addEventListener('click', () => selectTestFromModal(t.id));
      listEl.appendChild(btn);
    });
  } catch (e) {
    console.error('Load active tests error:', e);
    listEl.innerHTML = '<div style="text-align:center;padding:20px;color:#c0392b;">Errore nel caricamento dei test.</div>';
  }
}

async function selectTestFromModal(testId) {
  document.getElementById('modal-test-select').style.display = 'none';
  const loaded = await loadTestFromSupabase(testId);
  if (!loaded) showToast('Impossibile caricare il test selezionato.');

  resetStateForTest(testId, state.studentName);
  startTest();
}

function startTest() {
  markViewed();
  renderAll();
  if (!state.studentName) showStudentNameModal();
}

/* Resets student progress for a given test, optionally preserving the student name. */
function resetStateForTest(testId, keepName) {
  state = Object.assign({}, DEFAULT_STATE, {
    flagged:      new Set(),
    viewed:       new Set(),
    studentName:  keepName || '',
    loadedTestId: testId || null,
  });
  saveState();
}

/* ============================================================
   ANSWER REVIEW (post-submission)
   ============================================================ */
function showAnswerReview() {
  const modal = document.getElementById('modal-answer-review');
  const body  = document.getElementById('answer-review-body');

  let html = '';
  SECTIONS.forEach((sec, sIdx) => {
    html += `<p class="review-section-title">${escHtmlApp(sec.title)}</p>`;
    sec.questions.forEach((q, qIdx) => {
      const key       = qKey(sIdx, qIdx);
      const given     = state.answers[key];
      const correct   = q.correct;
      const isCorrect = given === correct;
      const noAnswer  = !given;

      const resultIcon  = noAnswer ? '<span class="rq-no-answer">—</span>'
                        : isCorrect ? '<span class="rq-correct">✓</span>'
                        : '<span class="rq-wrong">✗</span>';
      const resultLabel = noAnswer ? 'Senza risposta' : isCorrect ? 'Corretta' : 'Errata';

      html += `<div class="review-question">
        <div class="review-question-header">
          <span>Dom. ${qIdx + 1}</span>
          <span>${resultLabel}</span>
          <span class="rq-result">${resultIcon}</span>
        </div>
        <div class="review-question-body">
          <div class="rq-text">${escHtmlApp(q.text)}</div>
          <div class="rq-answers">`;

      q.options.forEach(opt => {
        const isGiven      = opt.label === given;
        const isCorrectOpt = opt.label === correct;
        let cls = '';
        if (isGiven && isCorrectOpt) cls = 'both';
        else if (isGiven)            cls = 'missed';
        else if (isCorrectOpt)       cls = 'correct-answer';
        if (isGiven || isCorrectOpt) {
          html += `<span class="rq-answer ${cls}">${escHtmlApp(opt.label)}: ${escHtmlApp(opt.text)}</span>`;
        }
      });

      html += `</div></div></div>`;
    });
  });

  body.innerHTML = html;
  modal.style.display = 'flex';
}

function escHtmlApp(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ============================================================
   RESET FOR NEW USER
   ============================================================ */
function resetForNewUser() {
  /* Keep the current test, reset all student-specific state */
  const testId = state.loadedTestId;
  resetStateForTest(testId);

  /* Hide submission-complete page, show the main app */
  document.getElementById('submission-complete').style.display = 'none';
  document.getElementById('modal-answer-review').style.display = 'none';
  document.getElementById('app').style.display = 'flex';

  /* If Supabase is configured and no test is loaded, show selection modal */
  if (supabaseClient && !testId) {
    showTestSelectionModal();
  } else {
    startTest();
  }
}

/* ============================================================
   INIT
   ============================================================ */
async function init() {
  initSupabase();

  const params    = new URLSearchParams(window.location.search);
  const testParam = params.get('test_id');

  if (testParam) {
    /* Direct link to a specific test – load it straight away */
    const loaded = await loadTestFromSupabase(testParam);
    if (!loaded) showToast('Impossibile caricare il test. Uso dati predefiniti.');

    loadState();

    /* If the test_id changed (or first time with this test), reset progress */
    if (state.loadedTestId !== testParam) {
      resetStateForTest(testParam, state.studentName);
    }

    if (state.submitted) {
      showSubmissionComplete(state.lastScore, state.lastTotal, true);
      return;
    }

    startTest();
    return;
  }

  /* No test_id in URL – show test selection if Supabase is configured */
  loadState();

  if (state.submitted) {
    /* Reload the test data so the review can work */
    if (state.loadedTestId && supabaseClient) {
      await loadTestFromSupabase(state.loadedTestId);
    }
    showSubmissionComplete(state.lastScore, state.lastTotal, true);
    return;
  }

  if (supabaseClient && !state.loadedTestId) {
    await showTestSelectionModal();
    return;
  }

  /* If a test was previously loaded and is stored, reload it */
  if (state.loadedTestId && supabaseClient) {
    const loaded = await loadTestFromSupabase(state.loadedTestId);
    if (!loaded) showToast('Impossibile ricaricare il test precedente. Uso dati predefiniti.');
  }

  startTest();
}

document.addEventListener('DOMContentLoaded', init);
