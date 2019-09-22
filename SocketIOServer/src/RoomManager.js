class RoomManager {
    constructor() {

        this.roomTemplate = {
            PlayerIds: new Map(),
            PlayerCount: 0,
            Grid: new Array(process.env.HEIGHT || 25)
        }

        this.playerTemplate = {
            NickName: "new nickname",
            Color: "new Color",
            X: 0,
            Y: 0
        }

        this.rooms = new Map();
    }

    Room(key) {
        return this.rooms.get(key);
    }

    ContainsRoom(key) {
        return this.rooms.has(key);
    }

    AddNewPlayerToRoom(playerData) {

        let room = rooms.get(playerData.Room);

        let newPlayer = Object.create(this.playerTemplate)
        newPlayer.NickName = playerData.NickName;
        newPlayer.Color = playerData.Color;

        room.PlayerIds.Set(playerData.Id, newPlayer);
        room.PlayerCount++;
        rooms.set(playerData.Room, room);
    }

    AddNewRoom(playerData) {
        let room = Object.create(this.roomTemplate);

        let newPlayer = Object.create(this.playerTemplate)
        newPlayer.NickName = playerData.NickName;
        newPlayer.Color = playerData.Color;

        room.PlayerIds.Set(playerData.Id, newPlayer);
        room.PlayerCount++;
        rooms.set(playerData.Room, room);
    }

    CreateField(room) {
        const width = process.env.WIDTH || 25;

        for (let h = 0; h < room.Grid.lenght; h++) {

            room.Grid[h] = []

            for (let w = 0; w < width; w++) {

                if (h === 0 || h === width - 1) {
                    room.Grid[h][w] = 1;
                    continue;
                }

                if (h % 2 === 0 && w % 2 === 0) {
                    room.Grid[h][w] = 1;
                }
                else {
                    if (w === 0 || w === width - 1) {
                        room.Grid[h][w] = 1;
                    }
                    else {

                        let random = Math.random();
                        let percentace = process.env.RandomPercentage || 75;

                        room.Grid[h][w] = random < percentace ? 2 : 0;
                    }
                }
            }
        }
    }
}

export default RoomManager;