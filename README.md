# Relazione Progetto Piattaforma di Streaming XML / XSD

## DEFINIZIONE PROBLEMA:
il problema da risolvere è quello di creare una piattaforma di streaming, che faccia visualizzare all’utente i vari contenuti multimediali (Film, Serie TV, Documentari) in modo accessibile e strutturato, io ho pensato di progettare un sistema che permette di archiviare e gestire un insieme di contenuti attraverso una pagina web, ma anche un’altra pagina web dove sarà presente la sezione dedicata all’utente con il nome, la categoria preferita e una lista di visione. La struttura dei dati sarà contenuta in un file XML chiamato catalogo.xml con uno schema associato chiamato catalogoDefinition.xsd
ANALISI DEI DATI: Per progettare un sistema in grado di gestire dei contenuti per la piattaforma streaming, ho raccolto vari tipi di dati, suddivisi tra i contenuti multimediali che personalmente ho scelto per questo progetto ovvero film, serie TV, documentari (contenuti multimediali) e dati relativi agli utenti. Questa struttura consente di organizzare in modo chiaro e ordinato le informazioni necessarie per le varie tipologie di contenuto e per ogni utente, con l’obiettivo di offrire un’esperienza di navigazione semplice e accessibile. Per la gestione della piattaforma, ho raccolto diversi tipi di dati per ogni tipologia di contenuto:

## DATI NECESSARI PER OGNI CONTENUTO:
Nome
Regista
Descrizione
Valutazione
Immagine
Disponibilità
Genere
Attori (solo per Film e Serie TV)
Stagioni (solo per Serie TV)
Episodio (solo per Serie TV)
Per quanto riguarda la sezione dell’utente, questi sono i dati che ho raccolto:

## DATI NECESSARI PER L’UTENTE:
Nome
Categoria Preferita
Lista di Visione
Contenuto
RELAZIONE TRA PAGINA UTENTE E CATALOGO: Ogni contenuto è associato a più informazioni, come attori, genere, valutazione, descrizione e regista. Allo stesso modo, ogni utente ha una propria lista di visione e il suo genere preferito che si interconnette con i contenuti disponibili sulla piattaforma. La gestione di questi dati in modo efficace migliora l’esperienza degli utenti e la navigabilità della piattaforma.

## SCHEMA:
link dello schema: https://www.figma.com/board/9bB2GqVCOqo1x5lol5W3ln/Progetto-TPSI?node-id=0-1&t=cOblebf13v0Le1xe-1

## SOLUZIONE: 
La soluzione prevede la gestione dei contenuti di una piattaforma streaming utilizzando un file XML strutturato, con il suo relativo schema XSD, e una pagina web per la visualizzazione. Il file XML contiene informazioni sui contenuti (film, serie TV, documentari), inclusi dettagli come titolo, regista, descrizione e valutazione. Per le serie TV, saranno inclusi anche gli episodi. Lo schema XSD garantirà che i dati siano corretti e coerenti. La pagina web, realizzata con HTML, CSS e JavaScript, permette di caricare e visualizzare i contenuti in modo ordinato, con un filtro per mostrare tutto, solo film, solo serie tv o solo documentari ma anche filtri inerenti al genere del contenuto, offrendo una navigazione semplice e accessibile per gli utenti.

## Preview:

🌐 [SITO WEB ONLINE](https://relazionexmlrischia.netlify.app/)