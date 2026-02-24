# TODO — dspano.dev

## Asset mancanti

- [ ] `public/cv-danilo-spano.pdf` — aggiungi il tuo CV aggiornato
- [ ] `public/og-image.png` — immagine Open Graph 1200×630px (sfondo scuro con nome e ruolo)
- [ ] `public/favicon.ico` — favicon (può essere un'icona "DS" in arancione)

## Contenuto da completare (`data/content.ts`)

- [ ] Conferma il nome del package Flutter pubblicato (`flutter_timeline_view` è un placeholder)
- [ ] Aggiungi la descrizione corretta del package in EN e IT
- [ ] Aggiungi l'URL reale della PR su **dio** (sostituisci il link `/pulls` con il link diretto)
- [ ] Aggiungi l'URL reale della PR su **equatable** (sostituisci il link `/pulls` con il link diretto)
- [ ] Conferma l'URL LinkedIn (`linkedin.com/in/danilospano` — corretto?)
- [ ] Aggiorna il numero di stelle del tuo package su pub.dev (se disponibile)

## Configurazione

- [ ] `.env.local` — imposta `NEXT_PUBLIC_FORM_ENDPOINT` con l'endpoint reale di Formspree
  - Vai su [formspree.io](https://formspree.io), crea un form e copia l'ID
  - Esempio: `https://formspree.io/f/xpwzabcd`
- [ ] (Opzionale) `NEXT_PUBLIC_GITHUB_TOKEN` — per fetching live delle stelle GitHub

## Deploy su Cloudflare Pages

- [ ] Crea repo su GitHub e fai push: `git remote add origin <url> && git push -u origin main`
- [ ] Connetti la repo a Cloudflare Pages
  - Build command: `npm run build`
  - Output directory: `.next`
  - Aggiungi le variabili d'ambiente nel dashboard Cloudflare
- [ ] Imposta il dominio custom: `dspano.dev`
- [ ] Verifica che il deploy funzioni e controlla Lighthouse score

## Qualità (pre-launch checklist)

- [ ] Aggiungi il PDF del CV e verifica che il download funzioni
- [ ] Testa il toggle lingua EN/IT e verifica che persista dopo refresh
- [ ] Testa il form contatti con un endpoint Formspree reale
- [ ] Testa su mobile (375px) — soprattutto navbar overlay e timeline
- [ ] Verifica che tutti i link GitHub/PR aprano correttamente
- [ ] Lighthouse: Performance > 90, Accessibility > 95
- [ ] Esegui `npm run typecheck` e assicurati che passi senza errori
