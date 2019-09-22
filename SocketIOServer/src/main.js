import RoomManager from "./RoomManager";
const server = require('http').createServer();
const io = require('socket.io')(server, {
    serveClient: false  
});

const PORT = process.env.PORT || 8081;
server.listen(PORT, () => console.log("Listening to port:" + PORT));

let roomManager = new RoomManager();

io.on('connect', socket =>
{
    socket.on("EnterRoom", data => {

        if (roomManager.ContainsRoom(data.Room)) {
            roomManager.AddNewPlayerToRoom(data)
        }
        else {
            roomManager.AddNewRoom(data);
        }

    });

    socket.on("LeaveRoom", data => {

    });

    socket.on("PlayerPos", data => {

    });

    socket.on("BombPlacement", data =>
    {

    });

    socket.on("TileDeletion", data => {

    });
});

io.on("diconnect", socket =>
{
    console.log(socket.id + "diconnect");
    socket.leaveAll();
});
