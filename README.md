# 🎬 Relazione Progetto – Piattaforma di Streaming (XML / XSD)

## 📌 Definizione del Problema

L’obiettivo è creare una **piattaforma di streaming** che consenta all’utente di visualizzare contenuti multimediali (🎞️ Film, 📺 Serie TV, 📚 Documentari) in modo accessibile e strutturato.

🧠 La soluzione proposta prevede:

- Una **pagina web** per la visualizzazione e gestione dei contenuti.
- Una seconda **pagina utente** con:
  - Nome utente
  - Categoria preferita
  - Lista di visione personale

📁 I dati saranno archiviati in un file **XML** (`catalogo.xml`) e validati tramite uno **schema XSD** (`catalogoDefinition.xsd`).

---

## 📊 Analisi dei Dati

Per realizzare una piattaforma efficace, sono stati raccolti e organizzati due principali gruppi di dati:

### 🎞️ Contenuti Multimediali

Le tipologie considerate sono:

- Film
- Serie TV
- Documentari

Ogni contenuto include i seguenti dati:

- 🏷️ Nome  
- 🎬 Regista  
- 📝 Descrizione  
- ⭐ Valutazione  
- 🖼️ Immagine  
- 📡 Disponibilità  
- 🧬 Genere  
- 🎭 Attori (solo Film e Serie TV)  
- 📅 Stagioni (solo Serie TV)  
- 🎞️ Episodi (solo Serie TV)  

### 👤 Utenti

Ogni utente dispone delle seguenti informazioni:

- 🧑 Nome  
- 🎯 Categoria Preferita  
- 📋 Lista di Visione  
  - 📌 Contenuti selezionati

---

## 🔗 Relazione tra Pagina Utente e Catalogo

Ogni contenuto nel catalogo è arricchito da attributi come:

- Attori  
- Genere  
- Valutazione  
- Descrizione  
- Regista

🧩 L’utente ha una **lista di visione personalizzata** e una **categoria preferita**, che si collegano dinamicamente ai contenuti disponibili.

✅ Una buona gestione dei dati migliora la **navigazione** e l’**esperienza utente**.

---

## 🗂️ Schema (Mockup / Struttura)

🔗 [Visualizza lo schema su Figma](https://www.figma.com/board/9bB2GqVCOqo1x5lol5W3ln/Progetto-TPSI?node-id=0-1&t=cOblebf13v0Le1xe-1)

---

## 🧩 Soluzione Tecnica

La soluzione proposta si basa su:

- 🗃️ Un file **XML** strutturato per rappresentare i contenuti
- 📐 Un file **XSD** per validare la struttura e i dati
- 🌐 Una **pagina web** realizzata con:
  - HTML
  - CSS
  - JavaScript

### ✨ Funzionalità dell'interfaccia:

- Visualizzazione ordinata dei contenuti
- Filtri per:
  - 📺 Tipo (film / serie TV / documentari)
  - 🧬 Genere
- Esperienza di navigazione semplice, accessibile e reattiva

---

## 🔍 Preview Online

🌐 **[Vai al sito web](https://relazionexmlrischia.netlify.app/)**
