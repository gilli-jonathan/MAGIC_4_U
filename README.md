# 🎩 MAGIC_4_U

> *"En la magia no hay engaño, en la magia hay ilusión."*
> — Juan Tamariz
>
> *Nella magia non c'è inganno, nella magia c'è illusione.*

**MAGIC_4_U** è una raccolta di **giochi di prestigio digitali**: trucchi che non hanno bisogno di un mazzo di carte, di un cappello o di un prestigiatore nella stanza. Bastano uno schermo, uno spettatore e qualche domanda ben fatta.

L'idea è costruire, trucco dopo trucco, un piccolo teatro digitale in cui ogni numero è un effetto a sé: tu pensi a qualcosa, il sito lo indovina, e nessuno ti spiega come.

---

## 🔮 Il trucco in scena: *Think a Draw*

Sullo schermo compaiono **15 disegni**. Lo spettatore ne sceglie uno nella sua testa e non lo dice a nessuno.

Poi arrivano **4 domande**. Solo quattro. Ogni volta compare un gruppo di disegni e la domanda è sempre la stessa: *"Vedi il tuo disegno qui dentro?"*. Sì o no.

Alla quarta risposta, il disegno segreto appare sullo schermo. 🎭

E no, non c'è una spiegazione qui dentro.

---

## 🛠 Stack

- **React 19** + **React Router 7** — le pagine e la navigazione
- **Vite 8** — dev server e build
- **Tailwind CSS 4** — lo stile, via plugin Vite (niente `tailwind.config.js`: la configurazione vive nel CSS)
- **ESLint 10** — con le regole `react-hooks` e `react-refresh`

---

## 🚀 Come farlo partire

Serve **Node.js 20+** (sviluppato su Node 24).

```bash
npm install     # installa le dipendenze
npm run dev     # avvia il dev server → http://localhost:5173
```

Altri comandi utili:

```bash
npm run build     # build di produzione in dist/
npm run preview   # serve la build appena creata
npm run lint      # controlla il codice con ESLint
```

---

## 🗂 Com'è organizzato

```
MAGIC_4_U/
├── public/                 # i 15 SVG dei disegni (Albero, Barca, Teschio…)
├── src/
│   ├── main.jsx            # entry point
│   ├── App.jsx             # le rotte
│   ├── index.css           # @import "tailwindcss"
│   ├── Layout/
│   │   └── DefaultLayout.jsx   # Header + <Outlet /> + Footer
│   ├── Components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── PAGES/
│   │   ├── Home.jsx            # presentazione e griglia dei 15 disegni
│   │   └── Think_draw.jsx      # le 4 domande e la rivelazione
│   ├── data/
│   │   └── ThinkUtils.js       # 🎩
│   └── assets/
└── index.html
```

**`src/data/ThinkUtils.js`** è il cilindro: lì dentro c'è tutto quello che il pubblico non deve vedere. Il resto è messa in scena.

---

## ➕ Aggiungere una nuova magia

La struttura è pensata per crescere per addizione, non per riscrittura:

1. Crea la pagina in `src/PAGES/NomeMagia.jsx`
2. Metti dati e metodo del trucco in `src/data/NomeMagiaUtils.js` — **il segreto sta lontano dalla scena**
3. Registra la rotta in `src/App.jsx`, dentro il `<Route element={<DefaultLayout />}>`
4. Se servono immagini, vanno in `public/` e si referenziano con path assoluto (`/Mela.svg`)
