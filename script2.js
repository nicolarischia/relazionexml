function loadXMLDoc(filename) {
    return fetch(filename)
        .then(response => response.text())  //funzione per la fetch
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"));
}

//Funzione per far vedere i dati dell'utente
function loadUserInfo() {
    loadXMLDoc("catalogo.xml").then(xml => {
        const userInfoDiv = document.getElementById("userInfo");
        
        const utente = xml.getElementsByTagName("Utente")[0];
        const nome = utente.getElementsByTagName("Nome")[0].textContent;
        const categoriaPreferita = utente.getElementsByTagName("CategoriaPreferita")[0].textContent;
        const listaDiVisione = utente.getElementsByTagName("ListaDiVisione")[0];
        const contenuti = listaDiVisione.getElementsByTagName("Contenuto");

        //aggiungo la categoria preferita
        let html = `<h3>${nome}</h3>`;
        html += `<p><strong>Categoria Preferita:</strong> ${categoriaPreferita}</p>`;
        html += `<h4>Lista di Visione:</h4><ul class="lista-di-visione">`;
        
        //Aggiungo ogni contenuto alla lista
        for (let i = 0; i < contenuti.length; i++) {
            const contenutoNome = contenuti[i].textContent;

            //Cerco il contenuto nel catalogo per ottenere l'immagine
            let immagine = '';
            const film = Array.from(xml.getElementsByTagName("Film")).find(f => f.getElementsByTagName("Nome")[0].textContent === contenutoNome);
            const documentario = Array.from(xml.getElementsByTagName("Documentario")).find(d => d.getElementsByTagName("Nome")[0].textContent === contenutoNome);
            const serie = Array.from(xml.getElementsByTagName("Serie")).find(s => s.getElementsByTagName("Nome")[0].textContent === contenutoNome);

            if (film) {
                immagine = film.getElementsByTagName("Immagine")[0].textContent;
            } else if (documentario) {
                immagine = documentario.getElementsByTagName("Immagine")[0].textContent;
            } else if (serie) {
                immagine = serie.getElementsByTagName("Immagine")[0].textContent;
            }

            //aggiungo l'immagine nell'html e il titolo
            html += `<li>
                        <div class="catalogo-imagine">
                            <img src="${immagine}" alt="">
                            <div class="titolo">${contenutoNome}</div</div>
                    </li>`;
        }
        
        html += `</ul>`;
        
        userInfoDiv.innerHTML = html;
    });
}

//carico i dati dell'utente all'avvio della pagina
document.addEventListener("DOMContentLoaded", loadUserInfo);