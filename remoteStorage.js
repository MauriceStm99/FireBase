function onloadFunc(){
    console.log("test");
    loadData("/name");
}

const BASE_URL = "https://remotestorage-a334e-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadData(path=""){
    let response = await fetch(BASE_URL + path + ".json");     //Wenn wir auf die Firebase zugreifen wollen, müssen wir immer '.json' dahinter schreiben, sonst können wir nicht drauf zugreifen
    return responseToJson = await response.json();
    
}