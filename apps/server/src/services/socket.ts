import { Server } from "socket.io";
import Redis from "ioredis";
const pub = new Redis({
  host: "localhost",
  port: 6379,
  username: "default",
  password: "",
});
const sub = new Redis({
  host: "localhost",
  port: 6379,
  username: "default",
  password: "",
});
class SocketService {
  private _io: Server;

  private count = 0;
  constructor() {
    console.log("Socket Io initalize");
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
    sub.subscribe("MESSAGE");
  }

  public initListeners() {
    console.log("Socket Listeners working fine");
    let io = this.io;

    io.on("connect", (socket) => {
      this.count += 1;
      console.log(`Socket Id: ${socket.id}`);
      console.log("Connected Users", this.count);

      socket.on("event:message", ({ message }: { message: string }) => {
        console.log(`New Message Receive: ${message}`);
        pub.publish("MESSAGE", JSON.stringify({ msg: message }));
      });
      sub.on("message", (channel, message) => {
        console.log("working");
        if (channel == "MESSAGE") {
          // socket.emit("message",)
          console.log(
            "RECEIVED MESSAGE FROM REDIS" +
              "chennal" +
              channel +
              "message" +
              message
          );
        }
      });
      socket.on("disconnect", (reason) => {
        --this.count;
        console.log("disconnect" + reason);
        console.log("total connectd user", this.count);
      });
    });
  }
  get io() {
    return this._io;
  }
}
export default SocketService;
