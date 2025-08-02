function onloadFunc(){
    console.log("test");
    deleteData("/name/-OWfgxieHLX3TE7DACpX");                   //Diese Zeile ruft die Funktion deleteData() auf und löscht einen ganz bestimmten Eintrag unter dem Pfad
    /name/-OWfgxieHLX3TE7DACpX in deiner Datenbank.
}

const BASE_URL = "https://remotestorage-a334e-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadData(path=""){                               //Asynchrone Funktion, um Daten zu laden (GET). Der Parameter path bestimmt, aus welchem "Ordner" bei Firebase gelesen wird.
    let response = await fetch(BASE_URL + path + ".json");      //Sendet einen GET-Request an Firebase.WICHTIG: .json muss angehängt werden, damit Firebase die Anfrage versteht.
    return responseToJson = await response.json();              //Wandelt die Antwort von Firebase (JSON-Text) in ein JavaScript-Objekt um und gibt es zurück.
}

async function postData(path="", data={}){                      //Asynchrone Funktion zum Senden von Daten an Firebase (POST).path ist z. B. "/name", data ist ein JavaScript-Objekt wie { banana: "rama" }.
    let response = await fetch(BASE_URL + path + ".json",{      //Sendet einen POST-Request an den angegebenen Pfad in Firebase.
        method: "POST",                                         //Gibt an, dass Daten gesendet (nicht gelesen) werden.
        header: {                                               //Header-Information für die Anfrage.Sagt Firebase: „Ich sende dir ein JSON-Dokument.“
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)                              //Der Inhalt der Anfrage – wird mit JSON.stringify() in einen JSON-Text umgewandelt (z. B. {"banana":"rama"}), damit die Datenbank ihn speichern kann.        
    });
    return responseToJson = await response.json();              //Gibt die Antwort der Datenbank zurück (Firebase schickt oft automatisch eine ID mit).
}

async function deleteData(path=""){                             //Neue asynchrone Funktion, um Daten zu löschen.Der path-Parameter gibt an, was genau gelöscht werden soll
    
    let response = await fetch(BASE_URL + path + ".json",{      //Sendet einen DELETE-Request an Firebase – genau wie bei GET und POST, .json muss drangehängt werden.
        method: "DELETE",                                       //Gibt an, dass es sich um eine Löschanfrage handelt.Dadurch löscht Firebase den angegebenen Eintrag vollständig.  
        
    });                           
    return responseToJson = await response.json();              
}