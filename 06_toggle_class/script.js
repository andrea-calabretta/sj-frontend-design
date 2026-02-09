function toggleColor() {
	const box = document.querySelector('.color'); //seleziono il primo elemento del DOM con la classe color e lo salva nella variabile box
	if (!box) return; // se box non esiste (null o undefined), esce dalla funzione
	box.classList.toggle('active'); //toglie o aggiunge la classe active all'elemento box
}


// Espone la funzione in modo che l'onclick inline possa invocarla
window.toggleColor = toggleColor; // rende la funzione accessibile globalmente


/*
window è l’oggetto globale del browser che rappresenta la finestra/scheda corrente.

Scope globale: 
    le proprietà di window sono accessibili ovunque; 
    se definisci window.toggleColor, puoi chiamare toggleColor() anche da HTML inline (onclick="toggleColor()") e dalla console.
Inline handler: gli attributi HTML come onclick cercano funzioni sul window; esporla lì garantisce che il nome sia risolto.

*/