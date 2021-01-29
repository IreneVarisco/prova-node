/*server node si basa su eventi-->perennamente in ascolto
si scarica :)
è un runtime 
npm gestisce le librerie di node

cdm-->content delivery network, preleva una libreria del web senza doverla scariscarle all'interno del progetto, in node non è possibile

npm i jquery


package.json--> descrizione fel progetto
    dependencies-->contiene i pacchetti installati tramite npm-->informa npm che quando cambia l'ambiente riscaricca i pacchetti 
    

 => equivale  ad una funzione 
 
 statusCode=200 codice che conferma il collegamento

    res.end("helloo!"); manda il messaggio

    le stringhe in node con il $ si possono insesrire le variabili

    node app.js

    npm initnp


    prima cosa da fare nel command:
    npm i
    npm start

     res.end non si usa più, quindi si usa send
*/


var nome="node";

var path = require("path");

var http = require("http");
var express = require("express");

var APIserver = express();
//const { hostname } = require("os");
var HostName = "127.0.0.1";
var port = 3000;




/*var server= http.createServer((req, res) =>{
    console.log("req:", req);
    res.statusCode=200;
    res.setHeader("content-Type", "text/plain");
    res.end("helloo!");
});
*/

APIserver.listen(port, HostName, () =>{
    console.log("Server running at http://%s:%d/", HostName, port);
});

APIserver.get("/nome", (req, res)=>{
    console.log("ho ricevuto una get su nome");
    /*
    res.statusCode=200;
    res.setHeader("content-Type", "text/plain");*/
    res.send("ciao! il nome del server è " + nome);
});

APIserver.get("/", function(req, res){
    res.send("homepage");
});

APIserver.get("/bella",  (req, res)=>{
    //res.sendFile("C:\\Users\\varisco.irene\\Desktop\\prova-node\\bella.html");                 //manda un file attraverso il suo path
    res.sendFile(path.join(__dirname + "/bella.html")); //funziona con tutti i sistemi operativi
});

APIserver.get("/richiesta", (req, res)=>{
    console.log("req:", req); 
    res.send("ciao! il nome del server è " + req.query.nome); 
});

APIserver.get("/somma", (req, res)=>{
    var isco = parseInt(req.query.a) + parseInt(req.query.b);
    res.send("ciao! la somma tra " + req.query.a + " e " + req.query.b + " è "+ isco); 
});
