const socket = io();
const chess = new Chess();
const boardElement = document.querySelector(".chessboard");

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard = () => {
const board = chess.board();
boardElement.innerHTML = "";
board.forEach((row , rowindex) => {                  
    row.forEach((square, squareindex) => {
        const squareElement = document.createElemnt("div");
        squareElement.classList.add(                                        // this is for the alternaste black n white pattern in the chess board
            "square", 
            (rowindex + squareindex) % 2 === 0 ? "light" : "dark"
        );

        squareElement.dataset.row = rowindex;
        square.dataset.col = squareindex;

        if(square){
            const pieceElement = document.createElement("div");
            pieceElement.classList.add(
                "Piece",
                 square.color === 'w' ? "white" : "black");               // check pattern ke upar element hai ya nhi
        };
        pieceElement.innerHTML = get
});
});
};

const handleMove = () => {};

const getPieceUnicode = () => {};





renderBoard();


// socket.emit("BKL")                                 // YAHA SE DATA FRONTEND SE BACKEND PE JAAYEGA
// socket.on("Sab BKL", function() {                   // YAHA SE DATA BACKEND SE FRONTEND PE AAYEGA
    // console.log("duniya BKL")                        // YAHA BROWSER KE CONSOLE PE DIKHAYEGA
// })


