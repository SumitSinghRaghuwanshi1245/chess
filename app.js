const express = require("express");
const socket = require("socket.io");
const http = require("http");
const {Chess} = require("chess.js");
const path = require("path");

const app = express();
const server = http.createServer(app);

const io = socket(server);

const chess = new Chess();

let players = {};
let currentPlayer = "W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", { title: "Chess Game" });
});

io.on("connection", function (uniquesocket) {                                // local host pe tab open hote hi ye dikhayega 
console.log("Connnected");


if(!players.white){
    players.white = uniquesocket.id;
    uniquesocket.emit("playerRole", "w");
} else if(!players.black){
    players.black = uniquesocket.id;
    uniquesocket.emit("playerRole", "b");
} else {
    uniquesocket.emit("spectatorRole");
}


uniquesocket.on("disconnect", function(){
if(uniquesocket.id === players.white){
    delete players.white;
} else if(uniquesocket.id === players.black){
    delete players.black;
}
});


uniquesocket.on("move", (move) => {
    try{
        if(chess.turn() === "w" && uniquesocket.id !== players.white) return;   // make sure ki dono players sahi move chal rahe
        if(chess.turn() === "b" && uniquesocket.id !== players.black) return;
    }
    catch(err){}
})



// uniquesocket.on("disconnect", function(){                                        // local host tab band hote hi ye dikhayega
//     console.log("Disconnected");
// })



// uniquesocket.on("BKL", function() {                             // YAHA SE DATA BACKEND PE AAYEGA FROM FRONTEND
//     io.emit("Sab BKL");
// })





});

server.listen(3000, function(){
    console.log("listening on port 3000");
});