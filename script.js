function loadXMLDoc(filename) {
    return fetch(filename)
        .then(response => response.text())  //funzione fetch (per caricaren il file xml)
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"));
}

//Funzione per caricare tutti i contenuti all'inizio
function loadAllSections() {
    loadXMLDoc("catalogo.xml").then(xml => {
        loadFilms(xml);
        loadSeries(xml);
        loadDocumentaries(xml);
    });
}

//Funzione per caricare e visualizzare i film
function loadFilms(xml) {
    const filmContainer = document.getElementById("filmContainer");
    const films = xml.getElementsByTagName("Film");
    filmContainer.innerHTML = "";

    Array.from(films).forEach(film => {
        const nome = film.getElementsByTagName("Nome")[0].textContent;
        const regista = film.getElementsByTagName("Regista")[0].textContent;
        const descrizione = film.getElementsByTagName("Descrizione")[0].textContent;
        const valutazione = film.getElementsByTagName("Valutazione")[0].textContent;
        const genere = film.getElementsByTagName("Genere")[0].textContent;
        const disponibilita = film.getElementsByTagName("Disponibilità")[0].textContent;
        const immagine = film.getElementsByTagName("Immagine")[0].textContent;

        //confronta la disponibilità
        const disponibilitaClasse = disponibilita.toLowerCase() === "disponibile" ? "disponibile" : "non-disponibile";

        const html = `
            <div class="film">
                <img src="${immagine}" alt="">
                <h4>${nome}</h4>
                <p><strong>Regista:</strong> ${regista}</p>
                <p><strong>Descrizione:</strong> ${descrizione}</p>
                <p><strong>Valutazione:</strong> ${valutazione}</p>
                <p><strong>Genere:</strong> ${genere}</p>
                <p><strong>Disponibilità: <br> </strong> <span class="${disponibilitaClasse}"></span> ${disponibilita}</p>
            </div>`;
        
        filmContainer.innerHTML += html;
    });
}

//Funzione per caricare e visualizzare le serie TV
function loadSeries(xml) {
    const serieContainer = document.getElementById("serieTVContainer");
    const series = xml.getElementsByTagName("Serie");
    serieContainer.innerHTML = "";

    Array.from(series).forEach(serie => {
        const nome = serie.getElementsByTagName("Nome")[0].textContent;
        const regista = serie.getElementsByTagName("Regista")[0].textContent;
        const descrizione = serie.getElementsByTagName("Descrizione")[0].textContent;
        const valutazione = serie.getElementsByTagName("Valutazione")[0].textContent;
        const genere = serie.getElementsByTagName("Genere")[0].textContent;
        const disponibilita = serie.getElementsByTagName("Disponibilità")[0].textContent;
        const immagine = serie.getElementsByTagName("Immagine")[0].textContent;

        const disponibilitaClasse = disponibilita.toLowerCase() === "disponibile" ? "disponibile" : "non-disponibile";

        let html = `
            <div class="serie">
                <img src="${immagine}" alt="">
                <h4>${nome}</h4>
                <p><strong>Regista:</strong> ${regista}</p>
                <p><strong>Descrizione:</strong> ${descrizione}</p>
                <p><strong>Valutazione:</strong> ${valutazione}</p>
                <p><strong>Genere:</strong> ${genere}</p>
                <p><strong>Disponibilità: <br> </strong> <span class="${disponibilitaClasse}"></span> ${disponibilita}</p>`;

        //aggiungo le stagioni ed episodi
        const stagioni = serie.getElementsByTagName("Stagione");
        if (stagioni.length > 0) {
            html += `<div class="stagioni">`; //inizio del contenitore delle stagioni
            Array.from(stagioni).forEach(stagione => {
                const numeroStagione = stagione.getAttribute("numero");
                html += `<div class="stagione">
                            <h5>Stagione ${numeroStagione}</h5>`;
                const episodi = stagione.getElementsByTagName("Episodio");
                Array.from(episodi).forEach(episodio => {
                    html += `<div class="episodio"><p>${episodio.textContent}</p></div>`;
                });
                html += `</div>`; //fine del blocco della stagione
            });
            html += `</div>`; //fine del contenitore delle stagioni
        }

        html += `</div>`;
        serieContainer.innerHTML += html;
    });
}

//Funzione per caricare e visualizzare i documentari
function loadDocumentaries(xml) {
    const documentariContainer = document.getElementById("documentariContainer");
    const documentaries = xml.getElementsByTagName("Documentario");
    documentariContainer.innerHTML = "";

    Array.from(documentaries).forEach(documentary => {
        const nome = documentary.getElementsByTagName("Nome")[0].textContent;
        const regista = documentary.getElementsByTagName("Regista")[0].textContent;
        const descrizione = documentary.getElementsByTagName("Descrizione")[0].textContent;
        const valutazione = documentary.getElementsByTagName("Valutazione")[0].textContent;
        const genere = documentary.getElementsByTagName("Genere")[0].textContent;
        const disponibilita = documentary.getElementsByTagName("Disponibilità")[0].textContent;
        const immagine = documentary.getElementsByTagName("Immagine")[0].textContent;

        const disponibilitaClasse = disponibilita.toLowerCase() === "disponibile" ? "disponibile" : "non-disponibile";

        const html = `
            <div class="documentari">
                <img src="${immagine}" alt="">
                <h4>${nome}</h4>
                <p><strong>Regista:</strong> ${regista}</p>
                <p><strong>Descrizione:</strong> ${descrizione}</p>
                <p><strong>Valutazione:</strong> ${valutazione}</p>
                <p><strong>Genere:</strong> ${genere}</p>
                <p><strong>Disponibilità: <br> </strong> <span class="${disponibilitaClasse}"></span> ${disponibilita}</p>
            </div>`;
        
        documentariContainer.innerHTML += html;
    });
}

//Funzione per il filtro delle sezioni (Film, Serie e Documentari)
function showSection(sectionId) {
    const allSections = ["filmSection", "serieTVSection", "documentariSection"];
    allSections.forEach(id => {
        document.getElementById(id).style.display = sectionId === "all" || sectionId === id ? "block" : "none";
    });
}

function showGenere(genere) { //funzione per il filtro dei generi
    const filmContainer = document.getElementById("filmContainer");
    const serieContainer = document.getElementById("serieTVContainer");
    const documentariContainer = document.getElementById("documentariContainer");

    //nasconde tutte le sezioni
    filmContainer.innerHTML = "";
    serieContainer.innerHTML = "";
    documentariContainer.innerHTML = "";

    loadXMLDoc("catalogo.xml").then(xml => {
        //carico e visualizzo il film del genere selezionato dal filtro
        const films = xml.getElementsByTagName("Film");
        Array.from(films).forEach(film => {
            if (film.getElementsByTagName("Genere")[0].textContent === genere) {
                const nome = film.getElementsByTagName("Nome")[0].textContent;
                const regista = film.getElementsByTagName("Regista")[0].textContent;
                const descrizione = film.getElementsByTagName("Descrizione")[0].textContent;
                const valutazione = film.getElementsByTagName("Valutazione")[0].textContent;
                const disponibilita = film.getElementsByTagName("Disponibilità")[0].textContent;
                const immagine = film.getElementsByTagName("Immagine")[0].textContent;

                const disponibilitaClasse = disponibilita.toLowerCase() === "disponibile" ? "disponibile" : "non-disponibile";

                filmContainer.innerHTML += `
                    <div class="film">
                        <img src="${immagine}" alt="">
                        <h4>${nome}</h4>
                        <p><strong>Regista:</strong> ${regista}</p>
                        <p><strong>Descrizione:</strong> ${descrizione}</p>
                        <p><strong>Valutazione:</strong> ${valutazione}</p>
                        <p><strong>Disponibilità: <br> </strong> <span class="${disponibilitaClasse}"></span> ${disponibilita}</p>
                    </div>`;
            }
        });

        //carico e visualizzo le serie del genere selezionato
        const series = xml.getElementsByTagName("Serie");
        Array.from(series).forEach(serie => {
            if (serie.getElementsByTagName("Genere")[0].textContent === genere) {
                const nome = serie.getElementsByTagName("Nome")[0].textContent;
                const regista = serie.getElementsByTagName("Regista")[0].textContent;
                const descrizione = serie.getElementsByTagName("Descrizione")[0].textContent;
                const valutazione = serie.getElementsByTagName("Valutazione")[0].textContent;
                const disponibilita = serie.getElementsByTagName("Disponibilità")[0].textContent;
                const immagine = serie.getElementsByTagName("Immagine")[0].textContent;

                const disponibilitaClasse = disponibilita.toLowerCase() === "disponibile" ? "dis ponibile" : "non-disponibile";

                let serieHTML = `
                    <div class="serie">
                        <img src="${immagine}" alt="">
                        <h4>${nome}</h4>
                        <p><strong>Regista:</strong> ${regista}</p>
                        <p><strong>Descrizione:</strong> ${descrizione}</p>
                        <p><strong>Valutazione:</strong> ${valutazione}</p>
                        <p><strong>Disponibilità: <br> </strong> <span class="${disponibilitaClasse}"></span> ${disponibilita}</p>`;

                const stagioni = serie.getElementsByTagName("Stagione");
                if (stagioni.length > 0) {
                    serieHTML += `<div class="stagioni">`;
                    Array.from(stagioni).forEach(stagione => {
                        const numeroStagione = stagione.getAttribute("numero");
                        serieHTML += `<div class="stagione">
                                        <h5>Stagione ${numeroStagione}</h5>`;
                        const episodi = stagione.getElementsByTagName("Episodio");
                        Array.from(episodi).forEach(episodio => {
                            serieHTML += `<div class="episodio"><p>${episodio.textContent}</p></div>`;
                        });
                        serieHTML += `</div>`;
                    });
                    serieHTML += `</div>`;
                }

                serieHTML += `</div>`;
                serieContainer.innerHTML += serieHTML;
            }
        });

        //Caricaro e visualizzo solo i documentari del genere selezionato
        const documentaries = xml.getElementsByTagName("Documentario");
        Array.from(documentaries).forEach(documentary => {
            if (documentary.getElementsByTagName("Genere")[0].textContent === genere) {
                const nome = documentary.getElementsByTagName("Nome")[0].textContent;
                const regista = documentary.getElementsByTagName("Regista")[0].textContent;
                const descrizione = documentary.getElementsByTagName("Descrizione")[0].textContent;
                const valutazione = documentary.getElementsByTagName("Valutazione")[0].textContent;
                const disponibilita = documentary.getElementsByTagName("Disponibilità")[0].textContent;
                const immagine = documentary.getElementsByTagName("Immagine")[0].textContent;

                const disponibilitaClasse = disponibilita.toLowerCase() === "disponibile" ? "disponibile" : "non-disponibile";

                documentariContainer.innerHTML += `
                    <div class="documentari">
                        <img src="${immagine}" alt="">
                        <h4>${nome}</h4>
                        <p><strong>Regista:</strong> ${regista}</p>
                        <p><strong>Descrizione:</strong> ${descrizione}</p>
                        <p><strong>Valutazione:</strong> ${valutazione}</p>
                        <p><strong>Disponibilità: <br> </strong> <span class="${disponibilitaClasse}"></span> ${disponibilita}</p>
                    </div>`;
            }
        });
    });
}

// Funzione per resettare i filtri
function resetFilters() {
    const allSections = ["filmSection", "serieTVSection", "documentariSection"];
    allSections.forEach(id => {
        document.getElementById(id).style.display = "block";
    });

    //rimuove la classe 'active' da tutti i pulsanti
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(button => button.classList.remove('active'));

    loadAllSections();
}

//aggiungo un evento al pulsante di reset
document.addEventListener("DOMContentLoaded", () => {
    const resetButton = document.getElementById('resetFilters');
    resetButton.addEventListener('click', resetFilters);
});

//carico i vari contenuti all'apertura della pagina
document.addEventListener("DOMContentLoaded", loadAllSections);