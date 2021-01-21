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
*/

var http = require("http");
var express = require("express");
var HostName = "127.0.0.1";

var port= 3000;

var server= http.createServer((req, res) =>{
    res.statusCode=200;
    res.setHeader("content-Type", "text/plain");
    res.end("helloo!");
});

server.listen(port, HostName, () =>{
    console.log("Server running at http://%s:%d/");
});