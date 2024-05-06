// qui dentro definiremo la nostra funzione PURA che sarà il reducer principale del nostro Store
// il reducer prende lo STATO CORRENTE dell'applicazione nel momento in cui viene "risvegliato" (dopo una dispatch)
// e prenderà anche l'ACTION che gli inviamo attraverso la dispatch() dal nostro componente o UI

// a questo punto con STATO CORRENTE e ACTION genererà il NUOVO STATO GENERALE, il nuovo stato del nostro STORE.

// ogni volta che verrà risvegliato avrà bisogno di leggere dalla nostra action il TYPE ed eventuale PAYLOAD
// da dove cominciare quindi? da uno stato iniziale per la nostra applicazione!

// lo stato iniziale dovrebbe riflettere con dei valori di default quelli finali

const initialState = {
  cart: {
    lastModified: "2024-04-29",
    content: [] // iniziamo con array vuoto perché andremo a gestire un array dal nostro reducer. avessimo avuto un oggetto saremmo partiti con valore null
  },
  bookSelected: {
    content: null
  }
};

// questo stato iniziale è quello che viene generato automaticamente ad ogni refresh del browser, e rappresenta la condizione iniziale del nostro redux store.
// potremo modificarlo solamente in maniera IMMUTABILE - creando sempre un nuovo oggetto nella sua interezza, partendo dai dati presenti nello stato in precedenza,
// più quelli nuovi derivanti dalla nostra ACTION.

// il reducer è una funzione PURA e quindi non modifica/manipola MAI i suoi parametri direttamente (state, action), li leggerà solamente!
// e in base alle operazioni matematiche prevedibili, computerà il nuovo stato di ritorno dalla funzione stessa.
// questo stato ritornato è DI FATTO il nuovo STORE aggiornato!

// per il primo avvio e per il primo soltanto ci dobbiamo preoccupare di attribuire un valore di default al parametro state che sarà, inizialmente, undefined
// ad ogni successivo avvio del reducer state sarà l'effettivo STATO CORRENTE.
const mainReducer = (state = initialState, action) => {
  // da questa funzione, IN OGNI CASO o SITUAZIONE, si dovrà PER FORZA ritornare IL NUOVO STATO o quanto meno quello PRECEDENTE.
  // bisogna evitare a tutti i costi di non avere un return di uno stato, avendo il default case che ritorna lo stato precedente
  // ci proteggiamo dall'eventualità che il nuovo valore di stato ritornato sia undefined, il che romperebbe il flusso di redux!

  switch (action.type) {
    // case "INCREMENT":
    // // qui dentro si computerà il nuovo stato globale
    // return {}

    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.concat(action.payload)
        }
      };

    default:
      return state;
  }
};

export default mainReducer;
