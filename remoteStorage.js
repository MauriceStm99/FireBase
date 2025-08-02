function onloadFunc(){
    console.log("test");
    loadData();
}

const BASE_URL = "https://remotestorage-a334e-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadData(){
    let response = await fetch(BASE_URL + ".json");     //Wenn wir auf die Firebase zugreifen wollen, müssen wir immer '.json' dahinter schreiben, sonst können wir nicht drauf zugreifen
    let responseToJson = await response.json();
    console.log(responseToJson);
}