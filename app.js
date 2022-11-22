/*server node si basa su eventi-->perennamente in ascolto
si scarica :)
è un runtime 
npm gestisce le librerie di node

cdn-->content delivery network, preleva una libreria del web senza doverla scariscarle all'interno del progetto, in node non è possibile

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
     const { hostname } = require("os");
*/


var nome = "node";

var path = require("path");

var http = require("http");
var express = require("express");
var cors = require("cors");
var APIserver = express();
var port = 3000;
APIserver.use(cors());


var HostName = "127.0.0.1";






/*var server= http.createServer((req, res) =>{
    console.log("req:", req);
    res.statusCode=200;
    res.setHeader("content-Type", "text/plain");
    res.end("helloo!");
});
*/

//apiServer.use(cors());

APIserver.listen(port, () => {
    console.log("server running on port ", port);
});

APIserver.get("/nome", (req, res) => {
    console.log("ho ricevuto una get su nome");
    /*
    res.statusCode=200;
    res.setHeader("content-Type", "text/plain");
    */
    res.send("ciao! il nome del server è " + nome);
});

APIserver.get("/", function (req, res) {
    res.send("homepage");
});

APIserver.get("/bella", (req, res) => {
    //res.sendFile("C:\\Users\\varisco.irene\\Desktop\\prova-node\\bella.html");                 
    //manda un file attraverso il suo path
    res.sendFile(path.join(__dirname + "/bella.html")); //funziona con tutti i sistemi operativi
});

APIserver.get("/richiesta", (req, res) => {
    console.log("req:", req);
    res.send("ciao! il nome del server è " + req.query.nome);
});

APIserver.get("/somma", (req, res) => {
    if (req.query.a && req.query.b) {
        var isco = parseInt(req.query.a) + parseInt(req.query.b);
        res.send("ciao! la somma tra " + req.query.a + " e " + req.query.b + " è " + isco);
    } else {
        res.status(500);
        res.send("parametri non corretti");
    }
});



APIserver.get("/voto" , (req, res) => {
    var d = req.query.voto;
    console.log(req.query.voto);
    var voti = [];
    d.forEach(element => {
        console.log(element.data);
        var data = element.data;
        var voto = element.voto;
        var descrizione = element.descrizione;
        var voto = {
            data: data,
            voto: voto,
            descrizione: descrizione 
        };
        voti.push(voto);
    });
    console.log(req.query);
   
    res.status(200);
    res.send("voti: <br>" + Object.values(voti[0]) + ", <br>" + Object.values(voti[1]) + ", <br>"+ Object.values(voti[2]));
}); 

// riceve in ingresso username e password e invia un messaggio "benvenuto [username]"
APIserver.get("/login" , (req, res) => {
    console.log(req.query);
    var username = req.query.username;
    var psw = req.query.psw;

    res.status(200);
    res.send("benvenuto " + username);
}); 

// riceve in ingresso username e password e invia un messaggio "benvenuto [username]"
APIserver.post("/login" , (req, res) => {
    console.log(req.query);
    
}); 


// sviluppare una pagina html con un div e due pulsanti.
// Premendo sul pulsante "post" invierete una post con username e password e visualizzerete nella div il messaggio inviato dal server
// Premendo il pulsante "get" stessa cosa ma inviando una richiesta get


